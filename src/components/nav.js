import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about/">about</Link>
      </li>
      <li>
        <Link to="/learn/">learn</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
