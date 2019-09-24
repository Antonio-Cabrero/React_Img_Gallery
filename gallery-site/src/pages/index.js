import React from "react"
import Gallery from "../components/Gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Gallery />
  </Layout>
)

export default IndexPage
