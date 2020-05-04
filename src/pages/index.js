import React from "react"
import Layout from "../components/layout"
import { ExampleButton, ExampleLink } from "../components/buttons"

export default () => (
  <Layout>
    <h1>Hello people!</h1>
    <ExampleButton>Click me</ExampleButton>
    <ExampleLink to="/images">Goto Images</ExampleLink>
  </Layout>
)
