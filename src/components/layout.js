import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
const layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main> {children} </main>
      <Footer />
    </div>
  )
}

export default layout
