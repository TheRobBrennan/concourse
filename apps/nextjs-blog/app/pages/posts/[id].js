import Layout from "../../components/layout"

import { getAllPostIds, getPostData } from "../../lib/posts"

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

// getStaticPaths will return an array of possible values for id
export async function getStaticPaths() {
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
    fallback: false,
  }
}

// getStaticProps will fetch necessary data for the post with the supplied parameters
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
