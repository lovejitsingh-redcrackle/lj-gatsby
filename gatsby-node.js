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

  // Create blog-list pages
  const posts = result.data.allNode.articles
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog-list` : `/blog-list/${i + 1}`,
      component: path.resolve(`src/templates/blog-list-template.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
