import Head from "next/head"

import Date from "../../components/date"
import Layout from "../../components/layout"

import { getAllPostIds, getPostData } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

// getStaticPaths will return an array of possible values for id
export async function getStaticPaths() {
  // IMPORTANT: You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

  const paths = getAllPostIds()

  // paths will be an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return {
    paths,
    // If fallback is set to a false, a 404 response will be returned if the request is for a page does not exist.
    // See https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required for details on how you might use fallback
    fallback: false,
  }
}

// getStaticProps will fetch necessary data for the post with the supplied parameters
export async function getStaticProps({ params }) {
  // IMPORTANT: You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
