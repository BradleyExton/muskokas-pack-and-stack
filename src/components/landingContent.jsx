import React from "react"
import BackgroundImage from "gatsby-background-image"

const LandingContent = ({ contentImg }) => {
  return (
    <BackgroundImage
      className="landingContent"
      fluid={contentImg}
    ></BackgroundImage>
  )
}

export default LandingContent
