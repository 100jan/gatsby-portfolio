import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Pocetna strana
    {/* banner: */}
    {/* <Banner layoutCssClass="l-home-banner" /> */}
  </Layout>
)

export default IndexPage

// TODO:
// 1. Portfolio page
// 2. Services page
// 3. Contact form
// 4.
