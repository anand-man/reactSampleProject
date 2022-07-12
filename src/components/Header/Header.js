import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../commons/Container";

export default function Header() {

  const {productsInKart} = useSelector(state => state.kartData);
  const navigate = useNavigate();

  const menuToggle = () => {
    document.body.classList.toggle("menu-mobile");
    const header = document.querySelector(".header");
    header.getElementsByClassName("column-wrapper")[0].classList.toggle("active");
  }
  return (
    <header className="header">
      <Container>
        <div className="column-wrapper">
          <div className="mobile-menu">
            <div className="bar-wrapper" onClick={menuToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Menu</title><path fill="#354E57" stroke="#354E57" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="40" d="M80 160h352M80 256h352M80 352h352" /></svg>
            </div>
            <div className="logo">
                <a href='#'><img src={process.env.PUBLIC_URL + `/Images/logo.png`} alt="logo"/></a>
            </div>
            <div className="close">
              <span>Shop Categories</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"  onClick={menuToggle}/></svg>
            </div>
          </div>
          <div className="col-seven">
            <div className="left-menu menu-title">
              <a href='#'>
                <img src= {process.env.PUBLIC_URL + `/Images/logo.png`} alt="logo"/>
              </a>
            </div>
            <div className="center-menu">
              <div className="product-name">
                <ul>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Smart Gear</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-three">
            <ul>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="26.414" height="26.414" viewBox="0 0 26.414 26.414">
                <g id="search" transform="translate(-2 -2)">
                  <circle id="Ellipse_153" data-name="Ellipse 153" cx="11" cy="11" r="11" transform="translate(3 3)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <line id="Line_547" data-name="Line 547" x1="4.35" y1="4.35" transform="translate(22.65 22.65)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>  <span>Search</span>
              </li>

              <li className="user">
              <svg xmlns="http://www.w3.org/2000/svg" width="23.333" height="24" viewBox="0 0 23.333 24">
                <g id="user" transform="translate(-3 -2)">
                  <path id="Path_38138" data-name="Path 38138" d="M25.333,23V20.333A5.333,5.333,0,0,0,20,15H9.333A5.333,5.333,0,0,0,4,20.333V23" transform="translate(0 2)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle id="Ellipse_176" data-name="Ellipse 176" cx="5" cy="5" r="5" transform="translate(9.333 3)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg><span>Sign in</span>
              </li>

              <li id="cartBtn" onClick={() => navigate("/kart")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                  <g id="shopping-bag" transform="translate(-2 -1)">
                    <path id="Path_38093" data-name="Path 38093" d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <line id="Line_555" data-name="Line 555" x2="18" transform="translate(3 6)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_38094" data-name="Path 38094" d="M16,10a4,4,0,0,1-8,0" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
                <span>{productsInKart && productsInKart.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}
