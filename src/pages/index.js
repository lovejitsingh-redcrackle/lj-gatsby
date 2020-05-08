import React from "react"
import Layout from "../components/layout"
import { ExampleButton, ExampleLink } from "../components/buttons"
import Featured from "../components/featured"
import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="home" />
    <ExampleButton>Click me</ExampleButton>
    <ExampleLink to="/post/">Goto MDX</ExampleLink>
    <Featured />
  </Layout>
)
