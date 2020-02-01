import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"

const MadamNazarPage = class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      fetchedData: {}
    };
  }

  componentDidMount() {
    fetch('https://madam-nazar-location-api-2.herokuapp.com/location/current').then(response => {
      // console.log(response);
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        fetchedData: json.results,
        loading: false
      })
    })
  }

  render() {
    const { loading, fetchedData } = this.state

    return (
      <Layout>
        <h1>Madam Nazar</h1>

        
      </Layout>
    )
  }
}

export default MadamNazarPage