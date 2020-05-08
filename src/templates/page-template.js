import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ComponentName = ({
  data: {
    node: {
      data: {
        title,
        body: { value },
      },
    },
  },
}) => {
  return (
    <Layout>
      <div>
        <Link to="/articles">Back to Articles</Link>
        <h2 style={{ textAlign: "center" }}>Single Page</h2>
      </div>
      <section style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: value }}></div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePage($nid: String) {
    node(data: { nid: { eq: $nid } }) {
      data {
        title
        body {
          value
        }
      }
    }
  }
`

export default ComponentName
