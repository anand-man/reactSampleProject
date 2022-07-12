import React from 'react'
import Container from '../commons/Container'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
      <div className="footer-menu-wrapper">
        <div className="column-wrapper">
          <div className="col-four">
            <p>Account</p>
            <ul>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Order Status</a></li>
            </ul>
          </div>
          <div className="col-four">
          <p>About Us</p>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="col-four">
          <p>Help</p>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="col-four">
            <p>Follow Us!</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</li>
            </ul>
            <ul className="social-icon-wrapper">
              <li><a href="#" className="instagram"><span>instagram</span></a></li>
              <li><a href="#" className="facebook"><span>facebook</span></a></li>
              <li><a href="#" className="twitter"><span>twitter</span></a></li>
             </ul>
          </div>
        </div>
      </div>
      <div className="footer-policy-wrapper">
        <div className="column-wrapper">
          <div className="col-three">
            <div className="logo">
                <a href='#'><img src={process.env.PUBLIC_URL + `/Images/logo.png`}/></a>
            </div>
          </div>
          <div className="col-three">
            <h6 className="heading-6">© Company Name Address Ave, City Name, State ZIP</h6>
          </div>
          <div className="col-three">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      </Container>
  </footer>
  )
}
