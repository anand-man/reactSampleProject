import React from 'react'
import Container from '../commons/Container'

export default function SecondLevelBanner() {
  return (
    <section className="second-level-banner">
      <Container>
        <div className="second-level-banner__column-wrapper">
          <div className="second-level-banner--content-wrapper">
            <h1 className="heading-1">Men’s Outerwear</h1>
          </div>
          <div className="second-level-banner--img-wrapper">
            <img src={process.env.PUBLIC_URL + `/Images/running-lady.png`} alt ="lady running on stone"/>
          </div>
        </div>
      </Container>
    </section>
  )
}