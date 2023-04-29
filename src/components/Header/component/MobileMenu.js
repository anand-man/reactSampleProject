import React from "react";
import { closeIcon, mobileMenuIcon } from "../assets";

export const MobileMenu = ({ menuToggle }) => {
  return (
    <div className="header__mobile-menu">
      <div className="header__bar-wrapper" onClick={menuToggle}>
        {mobileMenuIcon}
      </div>
      <div className="header__logo">
        <a href="#/">
          <img src={process.env.PUBLIC_URL + `/Images/logo.png`} alt="logo" />
        </a>
      </div>
      <div className="close">
        <span>Shop Categories</span>
        <span className="close-icon" onClick={menuToggle}>
          {closeIcon}
        </span>
      </div>
    </div>
  );
};
