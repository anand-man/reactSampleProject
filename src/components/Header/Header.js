import React from "react";
import { useSelector} from "react-redux";
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
  const activeMenuItem = (event) => {
    const menuItem = document.querySelector(".header").querySelector(".product-name").querySelector("ul").childNodes;
    menuItem.forEach((item) =>{
      item.classList.remove("selected");
    });
    event.target.parentNode.classList.add("selected");
    // const header = document.querySelector(".header");
    // header.getElementsByClassName("column-wrapper")[0].classList.remove("active");
  }
  
  return (
    <header className="header">
      <Container>
        <div className="column-wrapper">
          <div className="mobile-menu">
            <div className="bar-wrapper" onClick={menuToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Menu</title><path fill="#ffffff" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="40" d="M80 160h352M80 256h352M80 352h352" /></svg>
            </div>
            <div className="logo">
                <a href='#'><img src={process.env.PUBLIC_URL + `/Images/logo.png`} alt="logo"/></a>
            </div>
            <div className="close">
              <span>Shop Categories</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" onClick={menuToggle}><title>Close</title><path fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
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
                  <li onClick={activeMenuItem} className = "selected"><a href="#">Home</a></li>
                  <li onClick={activeMenuItem}><a href="#">Women</a></li>
                  <li onClick={activeMenuItem}><a href="#">Men</a></li>
                  <li onClick={activeMenuItem}><a href="#">Electronics</a></li>
                  <li onClick={activeMenuItem}><a href="#">Jewellery</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-three">
            <ul>
              <li id="cartBtn" onClick={() => navigate("/kart")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                  <g id="shopping-bag" transform="translate(-2 -1)">
                    <path id="Path_38093" data-name="Path 38093" d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <line id="Line_555" data-name="Line 555" x2="18" transform="translate(3 6)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_38094" data-name="Path 38094" d="M16,10a4,4,0,0,1-8,0" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
