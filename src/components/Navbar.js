import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links.js"

const Navbar = () => {
  return (
    <nav>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <AniLink fade to={item.path}>
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
