import React from "react"
import { Link } from "gatsby"
import links from "../constants/links.js"

const Navbar = () => {
  return (
    <nav>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
