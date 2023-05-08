import type {GatsbyNode} from "gatsby"
import { DrupalNode } from './types/drupal'
import {resolve} from "path"

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const {createPage} = actions

  interface NodeProps {
    node: DrupalNode
  }

  reporter.info('Fetching pages from Drupal')
  const pages: {errors?: any, data?: { allNodePage: {edges: NodeProps[]} } } = await graphql(`
    query {
      allNodePage {
        edges {
          node {
            id
            drupal_internal__nid
            langcode
            default_langcode
            path {
              alias
            }
          }
        }
      }
    }
  `)
  const pageTemplate = resolve(`./src/templates/page.tsx`)

  pages.data?.allNodePage.edges.forEach(({node}) => {
    if (node.path.alias) {
      createPage({
        path: node.path.alias,
        component: pageTemplate,
        context: {
          id: node.id,
          language: node.langcode
        },
        ownerNodeId: node.id
      })
    }
  })
}
