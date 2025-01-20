/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

const Seo = ({ description, title, keywords, datePublished, children }) => {
  const { site, avatar } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
              email
            }
            social {
              twitter
              github
              linkedin
              instagram
            }
          }
        }
        avatar: file(absolutePath: { regex: "/photo.jpg/" }) {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const avatarSrc = getSrc(avatar)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": site.siteMetadata.siteUrl
    },
    "headline": title,
    "description": metaDescription,
    "author": {
      "@type": "Person",
      "name": site.siteMetadata.author.name,
      "email": site.siteMetadata.author.email,
      "sameAs": [
        `https://twitter.com/${site.siteMetadata.social?.twitter}`,
        `https://github.com/${site.siteMetadata.social?.github}`,
        `https://www.linkedin.com/in/${site.siteMetadata.social?.linkedin}`,
        `https://instagram.com/${site.siteMetadata.social?.instagram}`,
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": site.siteMetadata.title,
      "logo": {
        "@type": "ImageObject",
        "url": avatarSrc
      }
    },
    "datePublished": datePublished,
    "dateModified": datePublished,
    "image": {
      "@type": "ImageObject",
      "url": avatarSrc,
      "width": 800,
      "height": 600
    },
    "keywords": (keywords && keywords.join(`, `)) || null
  };

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords && keywords.join(`, `)} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      {children}
    </>
  )
}

export default Seo
