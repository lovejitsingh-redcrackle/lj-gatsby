const path = require("path")

//Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetNodes {
      allNode {
        articles: nodes {
          data {
            nid
          }
        }
      }
    }
  `)

  result.data.allNode.articles.forEach(article => {
    createPage({
      path: `/node/${article.data.nid}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        nid: article.data.nid,
      },
    })
  })
}
