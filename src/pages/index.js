import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"


import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello,</h1>
    <p>I'm {data.site.siteMetadata.author} <span role="img" aria-label="Vulcan Salute">🖖</span></p>
    <p>Frontend developer & Integrator</p>
  </Layout>
)

export default IndexPage
