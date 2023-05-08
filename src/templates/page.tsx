import * as React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
)

export const query = graphql`
  query ($id: String) {
    nodePage (id: {eq: $id}) {
      id
      title
      body {
        processed
      }
      path {
        alias
      }
    }
  }
`

export default Page