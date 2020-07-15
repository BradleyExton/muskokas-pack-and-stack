import React from "react"
import { graphql } from "gatsby"
import "../sass/main.scss"
import Layout from "../components/layout"
import LandingHeader from "../components/landingHeader"
import LandingContent from "../components/landingContent"

const index = ({ data }) => {
  return (
    <Layout>
      <LandingHeader />
      <LandingContent />
    </Layout>
  )
}

export default index
