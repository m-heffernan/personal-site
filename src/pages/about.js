import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const Button = styled.button`
    padding: 10px;
    background-color: #1ca086;
    font-size: 24px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    &:hover {
      color: black;
    }
  `
  return (
    <Layout>
      <h1>About</h1>
      <Img fluid={data.fileName.childImageSharp.fluid} alt="Mike Heffernan" />
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
      <h2>Contact</h2>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
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
