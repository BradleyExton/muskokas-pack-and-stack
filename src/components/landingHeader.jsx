import React from "react"
import BackgroundImage from "gatsby-background-image"

const LandingHeader = ({ headerImg }) => {
  return (
    <BackgroundImage
      className="landingHeader"
      fluid={headerImg}
      preserveStackingContext
    >
      <h1 className="landingHeader__text">
        <span className="landingHeader__text--main">muskoka's top</span>
        <span className="landingHeader__text--sub">movers</span>
      </h1>
      <a href="#" className="landingHeader__button">
        Get a Quote
      </a>
    </BackgroundImage>
  )
}

export default LandingHeader
