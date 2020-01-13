import React from "react"
import courseStyles from "./course.module.css"
export default ({ children }) => (
  <div className={courseStyles.course}>{children}</div>
)