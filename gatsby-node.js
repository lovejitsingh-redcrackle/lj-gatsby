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

  const result_page = await graphql(`
    query GetNodes {
      allNode(filter: {data: {type: {eq: "page"}}}) {
        pages: nodes {
          data {
            nid
          }
        }
      }
    }
  `)

  const result_article = await graphql(`
    query GetNodes {
      allNode(filter: {data: {type: {eq: "article"}}}) {
        articles: nodes {
          data {
            nid
          }
        }
      }
    }
  `)
  // Article template
  result_article.data.allNode.articles.forEach(article => {
    createPage({
      path: `/article/${article.data.nid}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        nid: article.data.nid,
      },
    })
  })

  // Page type template
  result_page.data.allNode.pages.forEach(page => {
    createPage({
      path: `/page/${page.data.nid}`,
      component: path.resolve(`src/templates/page-template.js`),
      context: {
        nid: page.data.nid,
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
