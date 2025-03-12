import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const KscopeBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(absolutePath: { regex: "/kscope25-banner-speaking.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      button: file(absolutePath: { regex: "/kscope25-button-speaking.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const bannerImage = getImage(data.banner)
  const buttonImage = getImage(data.button)
  
  return (
    <div className="kscope">
      <a href="https://www.odtug.com/kscope25" target="_blank" rel="noreferrer">
        <GatsbyImage image={bannerImage} alt={`I'm Speaking at Kscope 2025`} className="hidden-mobile" />
        <GatsbyImage image={buttonImage} alt={`I'm Speaking at Kscope 2025`} className="hidden-desktop" />
      </a>
    </div>
  )
}

export default KscopeBanner
