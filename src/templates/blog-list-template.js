import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ComponentName = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  console.log(props)
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/blog-list/"
      : `/blog-list/` + (currentPage - 1).toString()
  const nextPage = `/blog-list/` + (currentPage + 1).toString()
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <ul>
        {!isFirst && (
          <AniLink fade to={prevPage} rel="prev">
            ← Previous Page
          </AniLink>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <AniLink
              fade
              to={`/blog-list/${i === 0 ? "" : i + 1}`}
              style={{
                textDecoration: "none",
                color: i + 1 === currentPage ? "#ffffff" : "",
                background: i + 1 === currentPage ? "#007acc" : "",
              }}
            >
              {i + 1}
            </AniLink>
          </li>
        ))}
        {!isLast && (
          <AniLink fade to={nextPage} rel="next">
            Next Page →
          </AniLink>
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    allNode(limit: $limit, skip: $skip) {
      nodes {
        drupal_id
        data {
          title
        }
      }
    }
  }
`

export default ComponentName
