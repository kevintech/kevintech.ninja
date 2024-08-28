import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import LatestNews from "../components/latest-news"
import ContactLinks from "../components/contact-links"
import Skills from "../components/skills"
import WorkExperience from "../components/work-experience"
import Education from "../components/education"

const BlogIndex = ({ data, location }) => {
  const siteTitle = `Kevin Herrarte`
  const yearsOfExperience = (new Date().getFullYear() - 2010)

  return (
    <Layout location={location} title={siteTitle}>
      <p style={{textAlign: `justify`}}>
        Currently an Oracle Application Express Developer at
        {` `}
        <Link to="https://viscosityna.com/" target="_blank" rel="noreferrer">Viscosity North America</Link>.
        {` `}
        Offering {yearsOfExperience}+ years of experience in the full software development lifecycle, 
        from concept through delivery of web and mobile oriented solutions. Expert in advanced methodologies, 
        tools and processes contributing to the design and rollout of software applications.
      </p>
      <ContactLinks />
      <LatestNews />
      <Skills />
      <WorkExperience />
      <Education />
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Hello World" keywords={[`kevintech`, `c#`, `javascript`, `react`, `react-native`, `plsql`, `oracle apex`, `software engineer`, `guatemala`]} />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
