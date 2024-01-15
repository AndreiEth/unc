import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../../utils/SidebarData";
import "./navbar.scss";
import Burgermenu from "../../images/burger-menu.svg";
import CloseBtn from "../../images/clode-btn.svg";
import LOGO from "../../images/logo.svg";
import RU from "../../images/RU.svg";
import Cart from "../../images/cart.svg";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
      <div className='navbar'>
        <img
          className='menu-bars'
          src={CloseBtn}
          alt='close-btn'
          onClick={showSidebar}
        />
        <Link to='/'>
          <img
            className='navbar-logo'
            src={LOGO}
            alt='logo'
          />
        </Link>
        <div className="navbar-right">
          <button className='navbar-ru'>RU</button>
          <button className='navbar-cart'>
            <img
              src={Cart}
              alt='shoping cart'
            />
          </button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul
          className='nav-menu-items'
          onClick={showSidebar}
        >
          <li className='navbar-toggle'>
            <img
              className='close-btn'
              src={Burgermenu}
              alt='burgermenu'
            />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={item.cName}
              >
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className='navbar-about'>
          UNC — the clothing brand has been in existence since 2021. Basing and
          logistics management in Russia, Cheboksary.
        </p>
      </nav>
    </header>
  );
}

export default Navbar;