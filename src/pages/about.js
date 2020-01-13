import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Experience from "../components/about/experience"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <Experience experienceTitle="mariannecanarelli.com" />
  </Layout>
)

export default AboutPage