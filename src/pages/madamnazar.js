import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"

const MadamNazarPage = class extends React.Component {

  state = {
    loading: true,
    error: false,
    fetchData: []
  }

  componentDidMount() {
    fetch('https://madam-nazar-location-api-2.herokuapp.com/location/current').then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <Layout>
        <h1>Madam Nazar</h1>
      </Layout>
    )
  }
}

export default MadamNazarPage