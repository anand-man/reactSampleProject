import React from 'react'
import Container from '../commons/Container'

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <Container>
        <div className="column-wrapper">
          <div className="content-wrapper">
            <h1 className="heading-1">Women’s Outerwear</h1>
          </div>
          <div className="img-wrapper">
            <img src={process.env.PUBLIC_URL + `/Images/running-lady.png`} alt ="lady running on stone"/>
          </div>
        </div>
      </Container>
    </section>
  )
}
