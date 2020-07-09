import React from "react"

const SVG = ({ className, title, path }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 32 32"
    >
      <title>{title}</title>
      <path d={path}></path>
    </svg>
  )
}

export default SVG
