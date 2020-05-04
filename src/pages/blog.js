import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>Blog page</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo iste
            dolorem porro incidunt facere ea molestias optio sunt unde tenetur?
            Maxime dolorem delectus vero distinctio.
          </p>
        </div>
      </Layout>
    )
  }
}
