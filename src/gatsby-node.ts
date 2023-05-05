import type { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const pages = await graphql(`
    query {
      allNodePage {
        edges {
          node {
            id
            path {
              alias
            }
          }
        }
      }
    }
  `)

  pages.data.allNodePage.edges.forEach(({node}) => {
    console.log(node.id);
    createPage({
      path: node.path.alias,
      component: resolve(`.src/templates/node-page.tsx`),
      context: {
        id: node.id
      }
    })
  });
}
