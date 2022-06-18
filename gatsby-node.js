/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const console = require("console")
const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const articles = await graphql(
    `
    {
      allNodeArticle(sort: {fields: [created], order: DESC}) {
        nodes {
          drupal_internal__nid
        }
      }
      allNodePage(sort: {fields: [created], order: DESC}) {
        nodes {
          drupal_internal__nid
        }
      }
    }
    `
  ).then(articles => {
    articles.data.allNodeArticle.nodes.map(node  => {
      createPage({
        path: 'node/' + node.drupal_internal__nid,
        component: path.resolve(`src/templates/NodeDefault.tsx`),
        context: {
          nodeId: node.drupal_internal__nid,
        },
      })
    });
    articles.data.allNodePage.nodes.map(node  => {
      createPage({
        path: 'node/' + node.drupal_internal__nid,
        component: path.resolve(`src/templates/PageDefault.tsx`),
        context: {
          nodeId: node.drupal_internal__nid,
        },
      })
    });
  })

}
