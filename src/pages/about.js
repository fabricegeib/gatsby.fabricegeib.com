import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Experience from "../components/about/experience"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>

    <Experience experienceTitle="helmi.im" />
    <Experience experienceTitle="Les petits pulls d'Abeth" />
    <Experience experienceTitle="helmi.im" />

    <a href="https://external.codecademy.com/users/fabricegeib/achievements">codecademy</a>
  </Layout>
)

export default AboutPage