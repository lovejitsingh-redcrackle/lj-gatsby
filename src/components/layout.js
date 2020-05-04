import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
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
