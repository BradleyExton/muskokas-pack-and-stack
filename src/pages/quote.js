import React from "react"
import Layout from "../components/layout"

const quote = () => {
  return (
    <Layout>
      <div className="quote">
        <h3 className="quote__title">Get a Quote</h3>
        <form
          className="quote__form form"
          method="post"
          action="https://getform.io/f/b8d1526a-470e-4cb2-b58c-4f2399c5be4e"
        >
          <label htmlFor="name">
            Name:
            <input type="text" name="name" />
          </label>
          <label htmlFor="phone">
            Phone:
            <input type="phone" name="phone" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" />
          </label>
          <label htmlFor="name">
            Details:
            <textarea name="details" />
          </label>
          {/* todo:  move button styles into its own component*/}
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default quote
