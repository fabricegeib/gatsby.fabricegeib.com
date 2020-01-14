import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li className="nav__link">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => (
  <nav className="nav">
    <ul className="nav__links">
      <ListLink to="/">home></ListLink>
      <ListLink to="/about/">about</ListLink>
      <ListLink to="/learn/">learn</ListLink>
    </ul>
  </nav>
)

export default Nav
