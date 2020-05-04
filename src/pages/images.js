import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
const getImages = graphql`
  {
    mobileImage: file(relativePath: { eq: "marbles.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(relativePath: { eq: "beach.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <Layout>
      <h1>Hello from images</h1>
      <Image fluid={sources} />
    </Layout>
  )
}

export default Images
