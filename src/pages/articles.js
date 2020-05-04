import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ComponentName = ({ data }) => {
  const {
    allNode: { nodes: articles },
  } = data
  //console.log(articles)

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => {
            return (
              <tr key={article.data.nid}>
                <td>
                  <Link to={"/node/" + article.data.nid}>
                    {article.data.title}
                  </Link>
                </td>
              </tr>
            )
          })}{" "}
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
