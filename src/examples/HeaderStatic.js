import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
          }
        }
      }
    `}
    render={data => <h2>{data.site.info.author}</h2>}
  ></StaticQuery>
)

export default ComponentName
