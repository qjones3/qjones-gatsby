import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlockText = () => {
  const data: BlockTextProps = useStaticQuery(graphql`
    query {
      allBlockContentTextBlock {
        edges {
          node {
            internal {
              type
            }
          }
        }
      }
    }
  `)

  interface BlockTextNode {
    internal: {
      type: string
    }
  }

  interface BlockTextProps {
    data: {
      allBlockContentTextBlock: {
        edges: {
          node: BlockTextNode
        }[]
      }
    }
  }

  return (
    <div>
      {
        data.allBlockContentTextBlock.edges.map((edge, index) => {
          return (
            <div key={index}>
              <h2>{edge.node.internal.type}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default BlockText