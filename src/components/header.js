import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ProfilePicture from "../components/profile-picture"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ float: `right`, height: `200px`, marginBottom: `1.45rem`, width: `200px` }}>
        <ProfilePicture />
      </div>
      <h2 style={{ margin: 0 }}>Hello,</h2>
      <h1 style={{ margin: 0 }}>I'm Kevin Herrarte</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
