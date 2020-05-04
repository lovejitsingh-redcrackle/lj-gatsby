import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { description },
    },
  } = data
  return (
    <Layout>
      <h2>Hello from examples</h2>
      <Header />
      <HeaderStatic />
      <p>{description}</p>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      info: siteMetadata {
        description
      }
    }
  }
`

export default examples
