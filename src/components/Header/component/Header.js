import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Container from "../../commons/Container";
import { cartIcon } from "../assets";
import { MobileMenu, MenuItems } from "../index";

export const Header = () => {
  const navigate = useNavigate();
  const [menuToggleState, setClassList] = useState({
    mobile: false,
    desktop: true,
  });
  const { productsInKart } = useSelector((state) => state.kartData);

  const totalItems =  productsInKart &&  productsInKart.reduce((currentItem, nextItem) => {
      return currentItem + nextItem.totalItem;
    }, 0);

  const menuToggle = () => {
    document.body.classList.toggle("menu-mobile");
    setClassList((prevState) => {
      const { mobile, desktop } = prevState;
      return {
        ...prevState,
        mobile: !mobile,
        desktop: !desktop,
      };
    });
  };

  return (
    <header className="header">
      <Container>
        <section
          className={`header__column-wrapper ${
            menuToggleState.mobile ? "active" : ""
          }`}
        >
          <MobileMenu menuToggle={menuToggle} />
          <MenuItems menuToggle={menuToggle} />
          <aside className="header__col-three">
            <ul className="header__menu-list">
              <li id="cartBtn" onClick={() => navigate("/kart")}>
                {cartIcon}
                <span>{totalItems}</span>
              </li>
            </ul>
          </aside>
        </section>
      </Container>
    </header>
  );
}
