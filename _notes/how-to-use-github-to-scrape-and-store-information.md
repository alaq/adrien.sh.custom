
I like to keep my finger on the pulse of the different inboxes that I like to keep as close to zero. These inboxes include my email inbox, my Instapaper reading list, my podcast episodes, my todo list, a couple of other lists that live in Roam Research and the things I want to watch.

Now, a lot of this data is available via API, some other isn't, or I don't have access to it (looking at you Instapaper, I'd love to receive my API key!). A solution here is to use puppeteer and scrape the relevant information. If I want to get data every night, I could setup a VPS and trigger the scrapping script. However, Gihutb Actions could do this for free, and the resulting data can be version controlled.

I was reading [this article](https://www.swyx.io/github-scraping/) from @swyx about scraping with Github Actions. Even though there is no scraping in his demo repository, I wanted to see if adding puppeteer was actually doable. Turns out it is, read on to find out how.

For this we will use puppeteer

# First lets setup the project

```shell
mkdir watch-next
cd watch-next
git init
npm init
npm install --save puppeteer
```
- # Then we need to setup puppeteer for scraping
- For this I followed this [tutorial](https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer). Of course I want this to apply to icheckmovies.com so I modified some of the code to match that page.
- ```javascript
const browserObject = require('./browser');
const scraperController = require('./page-controller');

// Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);
```

Then we need to setup the browser instance for puppeteer. We do that in `browser.js`:

```javascript
const puppeteer = require('puppeteer');

async function startBrowser(){
let browser;
try {
console.log("Opening the browser......");
browser = await puppeteer.launch({
headless: true,
args: ["--disable-setuid-sandbox"],
'ignoreHTTPSErrors': true
});
} catch (err) {
console.log("Could not create a browser instance => : ", err);
}
return browser;
}

module.exports = {
startBrowser
};
```
- And `page-controller.js`...
- ```javascript
const pageScraper = require('./page-scraper');
async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await pageScraper.scraper(browser);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
```

Here we need to make sure that headless is set to true, or this will not work on Github Actions, which does not have a X server.

Finally we can setup the actual scraping in `page-scraper.js`:

```javascript
const fs = require("fs");

const scraperObject = {
url:
"<https://www.icheckmovies.com/lists/1001+movies+you+must+see+before+you+die/?user=soviel&sort=officialtoplists>",
async scraper(browser) {
let page = await browser.newPage();
console.log(`Navigating to ${this.url}...`);
await page.goto(this.url);
await page.waitForSelector(".container");

let urls = await page.$$eval(".container ol > li.unchecked", (links) => {
// Extract the links from the data
links = links.map((el) => {
const link = el.querySelector("h2 a");
if (link) {
return link.href;
}
});
return links;
});

// Loop through each of those links, open a new page instance and get the relevant data from them
let pagePromise = (link) => new Promise(async(resolve, reject) => {
let dataObj = {};
let newPage = await browser.newPage();
await newPage.goto(link);
dataObj['title'] = await newPage.$eval('[movie](/articles/movie) h1', text => text.textContent);
dataObj['year'] = await newPage.$eval('.floated dd', text => text.textContent);
dataObj['imdb'] = await newPage.$eval('.span-7 > a', text => text.href);
resolve(dataObj);
await newPage.close();
});

urls = urls.slice(0,3);

const movies = [];
for(link in urls){
let currentPageData = await pagePromise(urls[link]);
console.log(currentPageData);
movies.push(currentPageData);
}
fs.promises.writeFile("./data/movies.json", JSON.stringify(movies)).then(() => {
process.exit(0);
})
},
};

module.exports = scraperObject;
```
- A couple of things to note here:
- - The information we want to get is displayed on the page right away, no need to click around, but if we had wanted to we might have needed to compare the length of the `<ol>` element before and after, like [this StackOverflow solution](https://stackoverflow.com/a/57629424) suggests:
    - ```javascript
const listSize = await page.evaluate(() => document.querySelectorAll('ol > li').length);
await button.click();
await page.waitFor(() => document.querySelectorAll('.container ol > li').length > listSize);
```

- We want to exit the node process when the scraping is done, otherwise the action will go on indefinitely.

At this point, we can test this locally by running `npm run start` (make sure that we have a start script in `package.json`).

# Scraping with Github Actions

There are a couple of puppeteer Github Actions available but they are not necessary as we can tell Github to checkout this repository and run `npm install` from here.

In the `.github/workflows/` folder we need a new `scrape.yml` file as follows:

```yaml
on:
workflow_dispatch: # This will let us trigger the workflow manually
inputs:
logLevel:
description: 'Log level'     
required: true
default: 'warning'
tags:
description: 'Manual trigger'  
schedule: # We also want this workflow to run on a schedule

cron:  '0 9 * * *' # Every day at 9am UTC
name: Scrape Data
jobs:
build:
name: Build
runs-on: ubuntu-latest
steps:

uses: actions/checkout@master

name: Build
run: npm install

name: Scrape
run: npm run start

uses: mikeal/publish-to-github-action@master
env:
GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # GitHub sets this for you
```
- We can now push this to Github and trigger the workflow manually on [the Actions tab](https://github.com/alaq/watch-next/actions/workflows/scrape.yml).
- The data in `data/movies.json` is now updated.