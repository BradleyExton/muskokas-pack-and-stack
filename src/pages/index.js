import React from "react"
import { graphql } from "gatsby"
import "../sass/main.scss"
import Layout from "../components/layout"
import LandingHeader from "../components/landingHeader"
import LandingContent from "../components/landingContent"

const index = ({ data }) => {
  return (
    <Layout>
      <LandingHeader headerImg={data.lakeMuskoka.childImageSharp.fluid} />
      <LandingContent />
    </Layout>
  )
}

export const query = graphql`
  query {
    lakeMuskoka: file(relativePath: { eq: "lake_muskoka.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default index
