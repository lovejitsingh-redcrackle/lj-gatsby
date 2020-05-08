import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ComponentName = ({ data }) => {
  const {
    allNode: { nodes: articles },
  } = data

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content type</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => {
            return (
              <tr key={article.data.nid}>
                <td>
                  {article.data.type === 'page' && (
                  <Link to={"/page/" + article.data.nid}>
                    {article.data.title}
                  </Link>
                  )}

                  {article.data.type === 'article' && (
                  <Link to={"/article/" + article.data.nid}>
                    {article.data.title}
                  </Link>
                  )}
                </td>
                <td>
                    {article.data.type}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout>
  )
}
export const query = graphql`
  {
    allNode {
      nodes {
        data {
          body {
            value
          }
          title
          type
          nid
          field_image {
            file {
              uri
              resource
              id
            }
          }
        }
      }
    }
  }
`

export default ComponentName
