import { FunctionComponent } from "react"
import { GetStaticProps } from "next"
import Link from "next/link"
import Layout from "../components/Layout"

type IndexPageAPIResponse = {
  message: string
}

type IndexPageProps = {
  message?: string
}

const IndexPage: FunctionComponent<IndexPageProps> = ({ message }) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>{message}</p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const url = process.env.NEXT_PUBLIC_FLASK_API || ""
    const res = await fetch(url)
    const data: IndexPageAPIResponse = await res.json()
    const { message } = data

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      // These props will be passed to the Next.js page component
      props: {
        message,
      },
    }
  } catch (err) {
    console.error(
      `Handling expected error when the Python Flask API is not available (e.g. building the Next.js container for development, etc)`
    )
    return {
      // These props will be passed to the Next.js page component
      props: {
        message: "",
      },
    }
  }
}

export default IndexPage
