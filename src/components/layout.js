import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

const layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation className="layout__navigation" />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  )
}

export default layout
