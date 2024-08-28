import React from "react"
import styles from "./contact-links.css";
import { Link } from "gatsby";

function ContactLinks() {
  return (
    <ul className='contact_links'> 
      <li>
        <span role="img" aria-label="email emoji">✉️</span> {" "}
        <Link to="mailto:hello@kevintech.ninja">hello@kevintech.ninja</Link>
      </li>
      <li>
        <Link to="https://linkedin.com/in/kherrarte" target="_blank" rel="noreferrer">LinkedIn</Link>
      </li>
      <li>
        <Link to="https://github.com/kevintech" target="_blank" rel="noreferrer">GitHub</Link>
      </li>
      <li>
        <Link to="https://facebook.com/kevintech" target="_blank" rel="noreferrer">Facebook</Link>
      </li>
      {/* <li>
        <span role="img" aria-label="resume emoji">📄</span> {" "}
        <a href="https://facebook.com/kevintech" target="_blank">Resume</a>
      </li> */}
    </ul>
  )
}

export default ContactLinks
