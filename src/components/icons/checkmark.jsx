import React from "react"
import SVG from "./svg.jsx"

const checkmark = props => {
  return (
    <SVG
      {...props}
      title="checkmark"
      path="M12.42 28.678l-12.433-12.238 6.168-6.071 6.265 6.167 13.426-13.214 6.168 6.071-19.594 19.285zM3.372 16.441l9.048 8.905 16.208-15.953-2.782-2.739-13.426 13.214-6.265-6.167-2.782 2.739z"
    ></SVG>
  )
}

export default checkmark
