import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
// import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { formatDateWithoutYear } from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5
let year = 0

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('articles')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 prose dark:prose-dark">
          <p>
            Hello there,{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </p>
          <p>
            I'm{' '}
            <a href="https://twitter.com/adrien" target="_blank" rel="noreferrer">
              @adrien
            </a>
            . I'm a full-stack TypeScript developer.
          </p>
          <p>
            I am part of the{' '}
            <a
              href="https://twitter.com/search?q=%40adrien%20%23buildinpublic&src=typeahead_click&f=live"
              target="_blank"
              rel="noreferrer"
            >
              #buildinpublic
            </a>{' '}
            community 📢. I am interested in micro-SaaS as well as personal knowledge
            management/tools for thought. I write about what I am learning here.
          </p>
          <p>
            During the day I build trading platforms on the Bloomberg Terminal{' '}
            <span role="img" aria-label="man using computer">
              👨‍💻
            </span>
            .
          </p>
        </div>
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title } = frontMatter
            const currentYear = new Date(frontMatter.date).getFullYear()
            let printYear

            if (currentYear !== year) {
              printYear = true
              year = currentYear
            } else {
              printYear = false
            }

            return (
              <li key={slug} className="py-4">
                {printYear ? (
                  <h2 className="text-xl font-bold leading-8 tracking-tight py-4">{year}</h2>
                ) : (
                  <></>
                )}
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDateWithoutYear(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/articles/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/articles/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
