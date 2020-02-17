import React from "react"
import { useFormik } from "formik"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = "Required"
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less"
    }

    if (!values.lastName) {
      errors.lastName = "Required"
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less"
    }

    if (!values.email) {
      errors.email = "Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

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
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <Button type="submit">Submit</Button>
      </form>
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
