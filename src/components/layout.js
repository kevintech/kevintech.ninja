import * as React from "react"
import { Link } from "gatsby"

import ProfilePicture from "../components/profile-picture"
import KTIcon from "./kt-icon"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const isBlogPath = location.pathname.includes(`/blog/`)
  let header

  if (isRootPath) {
    header = (
      <div>
        <div style={{ height: `250px`, margin: `0 auto 1.45rem`, width: `250px` }}>
          <ProfilePicture />
        </div>
        <h1
          style={{
            borderBottom: `none`,
            margin: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            {title}
          </Link>
        </h1>
        <h2
          style={{
            borderBottom: `none`,
            marginTop: 0,
          }}>
          Software Engineer
        </h2>
      </div>
    )
  } else if (isBlogPath) { // Blog Index Path
    header = (
      <h1 className="main-heading">
        <Link to="/blog/">
          {title}
        </Link>
      </h1>
    )
  }
  else { // Blog Post Path
    header = (
      <Link className="header-link-home" to="/blog/">
        {title}
      </Link>
    )
  }
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {/* Radial Gradient Background from Bottom */}
      <div
        style={{
          background: "radial-gradient(125% 125% at 50% 80%, #fff 40%, #7c3aed 100%)",
          // backgroundImage: `
          //   radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
          //   radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
          position: "absolute",
          inset: 0,
          zIndex: -1,
        }}
      />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="global-footer">
        © {new Date().getFullYear()} Kevin Herrarte, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        <span role="img" aria-label="love emoji">❤️</span>
      </footer>
    </div>
  )
}

export default Layout
