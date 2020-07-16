import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link, StaticQuery, graphql } from "gatsby"

const LandingHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          road: file(relativePath: { eq: "road.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data =>
        data.road ? (
          <BackgroundImage
            className="landingHeader"
            fluid={data.road.childImageSharp.fluid}
            preserveStackingContext
          >
            <h1 className="landingHeader__text">
              <span className="landingHeader__text--main">muskoka's top</span>
              <span className="landingHeader__text--sub">movers</span>
            </h1>
            <Link to="/quote" className="landingHeader__button">
              Get a Quote
            </Link>
          </BackgroundImage>
        ) : (
          <div />
        )
      }
    ></StaticQuery>
  )
}

export default LandingHeader
