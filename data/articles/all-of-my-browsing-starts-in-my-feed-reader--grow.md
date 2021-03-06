Text
---
title: 'All my browsing starts in my feed reader'
date: 2021-12-31
lastmod: '2021-12-31'
tags: []
draft: false
summary: 'An overview of how I use my feedreader as my single point of entry of any reading and browsing'
layout: PostSimple
bibliography: references-data.bib
---
RSS lets you subscribe to a source of information in a standardized way. A feed reader is a great way to consume information. Let me explain why.
# Why?
## No endless scrolling

Have you ever been procrastinating and went on a rotation such as Twitter, then Reddit, then Hacker News, then back on Twitter again, every time hoping that there would be something new on each of these? This used to happen to me and does not anymore. Now there's a finite amount of items to process and I try to keep my "consumption" time to a scheduled break time.



After moving a lot of sources the feed reader, I found myself not checking a rotation of sources, but I single one. That's progress. To fight this I wrote a small browser extension to block access to Feedbin unless there is at least 250 unread items.

![](https://addons.cdn.mozilla.net/user-media/previews/full/253/253094.png?modified=1614909701)

Another tip here is to sort the results from older to newer. That way you're starting with BREAKING NEWS. Maybe it's articles from a couple of days ago, a lot less stressful.
## Never miss a thing (on your own schedule)

I'm a [completist](/articles/completist), I cannot bear missing a thing. Ok, that might be an exaggeration, but if I am reading Hacker News I do not want to 



In a way you’re getting off the reading treadmill. You’re still actually on it but you’re on your own schedule. You have an easy way to never miss anything.
## One single application, one single source for everything.


## It's triaging, not reading (or very rarely)

Reading an article in a feed reader is not very comfortable. For starters, they don't save your position in the article.



I also never read an article right away. It means that I would have to leave the article unread in the feed reader, which is quite awkward (you can accidently mark is as read easily) and I like to practice inbox zero with my feeds.



Therefore I use Instapaper for proper reading.
# What sources of information do I consume via RSS?

## Good ol' RSS

## Twitter

Some web feed readers will let you sign in with your Twitter account and add people on their platform. That way you can even read tweets from private accounts.

### Create a private Twitter list to follow accounts

Make it private

### Threads

Some feed reader will aggregate threads together. For instance, Feedbin does it but unfortunately it seems to only work on their web application and only when using a Twitter list to add the account. You loose that feature when you use a client (like on mobile), or add an account directly. You actually end up seeing the first tweet only. Other services like Inoreader or Bazqux will show you every tweet from a user, including replies to other users which has the benefit of making sure you are not missing anything.

### How to follow replies to old tweets, from the author

I couple accounts I really care about are of the habit to reply to their own tweets, much later. Sometimes years later. I want to make sure I am not missing any reply of that type. As long as Feedbin has been collecting the original tweet it does not seem to be an issue, but for these replies to older tweets, there is another solution. Feedbin takes Twitter searches as well. So I can just add this URL: `<https://twitter.com/search?q=(from%3Ausername)%20(to%3Ausername)&src=typed_query&f=live>`. Replace username with the correct Twitter handle you are interested in. Yes, there will be duplicates, but I do not mind it that much.

### No Ads

An extra benefit is that there will be no Twitter ads.

## Reddit

### Use rss feeds

### Type of feeds

top

There is an option to create a custom feed, but if you select top, the larger subreddits will over power the others (e.g. r/nyc vs anything else)

### Newsletters

Newsletters seem to be all the rage. I honestly don't subscribe to any. I do however want to be kept up to date on progress from products, or projects. For this I use my feedreader as well. I don't necessarily want to read every single email, which is why I am triaging them here.



Instead of using the address provided by my feed reader directly, I created a forwarding filter in Gmail and use an address on my domain instead. This way I can easily move feed readers, without loosing my subscriptions.



If I no longer want to read a given newsletter, I can simply block it in Feedbin and it will no longer show up.

### Forums

Discourse forums have RSS links like `<https://clojureverse.org/posts.rss>` and `<https://clojureverse.org/latest.rss>`

### Github news feed

Once you log in, scroll to the bottom and right click on "Subscribe to your news feed" 
# Limitations

I don't read the press anymore, unless it's been posted on Hacker News. Day to day and breaking news I don't mind that much. I am a subscriber to two magazines (The Economist and Wired) and two newspapers (Le Monde and WSJ) and I barely ever read them.



Generally I wouldn’t recommend adding a newspaper to your feed reader. Who reads a newspaper from front to back anyway? (unless it’s 1995 and you’re on vacation on the beach).



It looks like you’re not missing out anyway. 

## Twitter specifics

Specifically for Twitter it’s annoying to add or remove to a list 



There is no like, retweet or response count. This might be a blessing in disguise.

## Not every source has RSS

There are some workarounds, like using RSSHub and RSSApp, but not everything will be available and one may not have the time to fix that.

## Other sources I would like to add

- StackOverflow's hot network questions

- Comments on a page, posts in a forum, responses on a HN thread

Adding some of them would be nice but overall I do not feel like I am missing out so I am happy to forego them.

I would even consider adding Facebook to my feed reader (that says a lot), but this is not currently possible without some involved setup. There is [this solution](https://github.com/usefulparadigm/pagefeed), which is worth exploring, but it will mean creating and then adding every single feed separately to Feedbin. Currently I have unfollowed everyone and everything so have an empty news feed and effectively only use Facebook for messaging and events.
# Some advice

## Keep the firehoses at bay

## Or don't

That being said, there is one I will always keep. I read every single headline that is posted on Hacker News. If I had to keep one feed, that would probably be that one. Okay, maybe lifehacker.com as well.



Then it's useful for other things. For instance, I don't follow Ben Thompson's Stratechery because I know that without fail it will be posted to Hacker News.

## Use filters

## Don't check it too often.

If it’s too much work, start with an alternative, <https://serializer.io/> is a good way to start 
# A few words on why Feedbin

I could be spending, no money and get most of the same features. Here is why I spend $5 on a RSS feed reader

- the twitter integration is the best I've seen, all the others will have issues with how the information is displayed

- It has a features that pulls full articles even the feeds do not provide them. When I have access to the internet I don't enable it, because of Hacker News and Lobsters, because I like having the link to the comments accessible. When flying, or when I know I won't have service, I like to enable this feature so I don't have to wait to read the article. Feedbin feature request: I wish I could enable this on a per feed basis (or per folder).



One very small feature request: I wish I could save a link to a Feedbin folder to my home screen on mobile. I use Reeder to read everything but Twitter, and the Feedbin website for Twitter only. I wish I could reach the tweets in one tap.

extra

it’s hard sometimes <https://news.ycombinator.com/item?id=30500810>