import React from "react"
import BackgroundImage from "gatsby-background-image"
import Checkmark from "./icons/checkmark"
import Coin from "./icons/coin"
import Location from "./icons/location"

const LandingContent = ({ contentImg }) => {
  return (
    <BackgroundImage className="landingContent" fluid={contentImg}>
      <div className="card">
        <div className="card__icon">
          <Checkmark />
        </div>
        <div className="card__title">RELIABLE</div>
        <div className="card__text">
          Our Movers are trained to take excelent care of your belongings.
        </div>
      </div>
      <div className="card">
        <div className="card__icon">
          <Coin />
        </div>
        <div className="card__title">AFFORDABLE</div>
        <div className="card__text">Rates as low as $89.95hr</div>
      </div>
      <div className="card">
        <div className="card__icon">
          <Location />
        </div>
        <div className="card__title">LOCAL</div>
        <div className="card__text">
          Our moving company is located in the heart of Muskoka
        </div>
      </div>
    </BackgroundImage>
  )
}

export default LandingContent
