import React from "react"
import { graphql } from "gatsby"

import Layout from "../Layout"

type Data = {
  markdownRemark: {
    frontmatter: Object
    html: string
  }
}

// NOTE: this should really be a template instead of a single component,
// but static query rendering doesn't seem to play nice with
// markdownRemark: https://github.com/gatsbyjs/gatsby/issues/6350.
// We're using a page component here instead for geting markdown-rendered-HTML
// from HTML, but page components with non-static graphql queries can't be
// templates.
export default function About({ data }: { data: Data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { slug: { eq: "/about" } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`
