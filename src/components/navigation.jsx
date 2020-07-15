import React from "react"
import { Link } from "gatsby"
import truck from "../images/truck.jpg"
import cottage from "../images/cottage.jpg"

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="navigation__logo">
        <img
          className="navigation__logo--truck"
          src={truck}
          alt="Moving Truck"
        />
        <img
          className="navigation__logo--cottage"
          src={cottage}
          alt="Cottage"
        />
        <div className="navigation__logo--title">
          <h2 className="navigation-heading">
            <span className="navigation-heading--name">Pack and Stack</span>
            <span className="navigation-heading--phone">705-795-3539</span>
          </h2>
        </div>
      </Link>
      <nav className="navigation__links">
        <Link
          to="/"
          className="navigation__links--home"
          activeClassName="navigation__links--active"
        >
          Home
        </Link>
        <Link
          to="/quote"
          className="navigation__links--quote"
          activeClassName="navigation__links--active"
        >
          Quote
        </Link>
        <Link
          to="/contact"
          href="#"
          className="navigation__links--contact"
          activeClassName="navigation__links--active"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
