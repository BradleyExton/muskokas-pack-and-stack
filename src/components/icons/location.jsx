import React from "react"
import SVG from "./svg.jsx"

const location = props => {
  return (
    <SVG
      {...props}
      title="location"
      path="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
    ></SVG>
  )
}

export default location
