import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <h1>About</h1>
      <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
      <h2>What I Do for a Living</h2>
      <p>
        I work as a Customery Delivery consultant specialiazing in API
        management platforms.
      </p>
      <h2>What I Do for Fun</h2>
      <ul>
        <li>I ride bikes through New York City</li>
        <li>Grow veggies</li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/about-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`
