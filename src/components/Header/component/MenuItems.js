import React, { useState } from "react";

export const MenuItems = ({ menuToggle }) => {
  const [menuItems, setMenuItems] = useState([
    { name: "Home", href: "home", active: true },
    { name: "Women", href: "women", active: false },
    { name: "Men", href: "men", active: false },
    { name: "Electronics", href: "electronics", active: false },
    { name: "Jewellery", href: "jewellery", active: false },
  ]);
  const activeMenuItem = (event) => {
    const textContent = event.target.textContent;
    const modifiedMenuItems = menuItems.map((item) => {
      const { name } = item;
      return {
        ...item,
        active: name === textContent ? true : false,
      };
    });
    setMenuItems(modifiedMenuItems);
    menuToggle();
    document.body.classList.remove("menu-mobile");
  };
  return (
    <aside className="header__col-seven">
      <div className="header__col-sevedn--left-menu menu-title">
        <a href="#/">
          <img src={process.env.PUBLIC_URL + `/Images/logo.png`} alt="logo" />
        </a>
      </div>
      <div className="header__col-seven--center-menu">
        <ul className="header__menu-list">
          {menuItems.map(({ name, href, active }, index) => {
            return (
              <li
                key={name}
                onClick={activeMenuItem}
                className={active === true ? "selected" : undefined}
              >
                <a href={`#/${index === 0 ? "" : "products"}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
