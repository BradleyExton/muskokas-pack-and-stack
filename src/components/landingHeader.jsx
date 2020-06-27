import React from "react"
import BackgroundImage from "gatsby-background-image"

const LandingHeader = ({ headerImg }) => {
  return (
    <BackgroundImage
      className="landingHeader"
      fluid={headerImg}
    ></BackgroundImage>
  )
}

export default LandingHeader
