import React from "react"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <div className="contact">
        <h3 className="contact__title">Contact</h3>
        <div className="contact__details">
          <div className="contact__details__phone details">
            <span className="details__identifier">Phone: </span>
            <span className="details__info">705-795-3539</span>
          </div>
          <div className="contact__details__email details">
            <span className="details__identifier">Email: </span>
            <span className="details__info">
              moving@muskokaspackandstack.ca
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
