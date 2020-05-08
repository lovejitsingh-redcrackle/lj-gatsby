import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getdata = graphql`
  {
    allNode(filter: { data: { field_featured: { eq: true } } }) {
      articles: nodes {
        data {
          title
        }
      }
    }
  }
`

const ComponentName = () => {
  const data = useStaticQuery(getdata)
  const {
    allNode: { articles },
  } = data

  return (
    <div className="border border-success">
      <h2 style={{ color: `red` }}>Featured Articles:</h2>
      {articles.map((item, index) => {
        return (
          <div key={index}>
            <h2 style={{ color: `blue` }}>{item.data.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default ComponentName
