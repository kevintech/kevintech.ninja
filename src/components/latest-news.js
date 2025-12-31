import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "./latest-news.css";

function LatestNews() {
  const data = useStaticQuery(
    graphql`
      query Posts {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1) {
          nodes {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    `
  )
  const posts = data.allMarkdownRemark.nodes

  return (
    <div className="latest_news">
      <h4 style={{
          marginTop: 0,
        }}>Recent Post</h4>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
      <Link to="/blog/" className="all_posts_link gradient-button">
        See all posts
      </Link>
    </div>
  )
}

export default LatestNews