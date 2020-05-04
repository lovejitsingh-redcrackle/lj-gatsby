import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query MyQuery {
    site {
      id
      info: siteMetadata {
        data
        person {
          from
          name
        }
        author
        description
        title
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { from },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>{title}</h1>
      <h2>{from}</h2>
    </div>
  )
}

export default Header
