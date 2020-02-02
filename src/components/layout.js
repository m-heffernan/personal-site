import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link
        to={`/`}
        css={css`
          background-image: none;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            margin-top: 0;
          `}
        >
          {data.site.siteMetadata.author}
        </h3>
      </Link>
      <ul
        css={css`
          list-style: none;
          float: right;
        `}
      >
        <ListLink to="/portfolio/">Portfolio</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
      {children}
    </div>
  )
}
