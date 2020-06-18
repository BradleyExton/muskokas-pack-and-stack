import React from "react"
import Navigation from "./navigation"

const layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation className="layout__navigation" />
      <main className="layout__content">{children}</main>
    </div>
  )
}

export default layout
