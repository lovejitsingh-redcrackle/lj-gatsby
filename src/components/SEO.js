import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getsitedata = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        data
        author
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getsitedata)
  const { siteTitle, siteDesc } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en " }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
    </Helmet>
  )
}

export default SEO
