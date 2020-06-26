import React from "react"
import BackgroundImage from "gatsby-background-image"

const LandingHeader = ({ headerImg }) => {
  return (
    <div className="landingHeader">
      <BackgroundImage className="landingHeader__img" fluid={headerImg} />
    </div>
  )
}

export default LandingHeader
