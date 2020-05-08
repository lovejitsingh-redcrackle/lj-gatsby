import React from "react"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <div className="center_div">
        <form
          action="https://formspree.io/lovejit.singh@redcrackle.com"
          method="POST"
        >
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="john smith"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="hello there"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <input
              className="btn btn-primary"
              type="submit"
              value="submit here"
            />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default contact
