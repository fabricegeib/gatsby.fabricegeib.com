import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "./learn.module.css"
// import Course from "../components/learn/course"
import SEO from "../components/seo"

const Course = props => (
  <div className={styles.course}>
    <h2 className={styles.title}>{props.title}</h2>
    <p className={styles.description}>{props.description}</p>
  </div>
)

console.log(styles)

const LearnPage = () => (
  <Layout>
    <SEO title="Learn" />
    <h1>Learn</h1>
    <div className="courses">
      <Course
        title="html"
        description="introduction to HyperText Markup Language"
      />
      <Course
        title="css"
        description="introduction to Cascading Style Sheets"
      />
      <Course
        title="gatsby"
        description="introduction to build blazing fast websites and apps"
      />
    </div>
  </Layout>
)

export default LearnPage