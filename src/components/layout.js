import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main> {children} </main>
      <Footer />
    </>
  )
}

export default layout
