import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "../components/About"
import PageTitle from "../components/PageTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="l-main-content l-about">
      <PageTitle title="Добродошли" />
      <About />
    </div>
  </Layout>
)

export default IndexPage

// TODO:
// 1. home page
// 2. Donacije cms page
// 3. Contact form enable
// 4.
