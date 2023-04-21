import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout/layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to your new Gatsby site.<br />
      We're starting to build something great.</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>Home Page</title>
      <meta name="description" content="Home Page" />
    </>
  )
}
