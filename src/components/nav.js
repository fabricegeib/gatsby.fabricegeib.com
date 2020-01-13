import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav className="nav">
    <ul className="nav__links">
      <li className="nav__link">
        <Link to="/">home</Link>
      </li>
      <li className="nav__link">
        <Link to="/about/">about</Link>
      </li>
      <li className="nav__link">
        <Link to="/learn/">learn</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
