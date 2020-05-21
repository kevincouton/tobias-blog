import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Welcome to Tobias services{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Tobias services provide consulting work around open source</p>
        <p>
          Believing Open Source project need more and more marketing technique to attract the best people.
          As more and more companies will move "full" remote.
          We provide few services around Remote policies, remote setup, Open Source doc policies.
          Being anywhere in the world allow to work on any open sources in the world in a very specific way.
        </p>
        <p>Let's follow role model on the different sharing platform</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
