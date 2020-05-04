import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./layout.css"
const layout = ({ children }) => {
  return (
    <>
      <styles />
      <Navbar />
      <main> {children} </main>
      <Footer />
    </>
  )
}

export default layout
