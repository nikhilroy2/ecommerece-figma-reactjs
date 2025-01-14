import React, { useState, useEffect, useRef } from "react";
import TimesIcon from "../assets/icons/times.svg";
import ArrowDownIcon from "../assets/icons/arrow_down.svg";
import SearchIcon from "../assets/icons/search.svg";
import CartIcon from "../assets/icons/cart.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import Dropdown from "../components/_dropdown";
import "./header.css";

export default function Header() {
  const [showAlert, setShowAlert] = useState(true);
  const [displayAlert, setDisplayAlert] = useState(true);
  const dropdown_btn = useRef();
  const [shopMenuDropdown, setShopMenuDropdown] = useState(false);
  const [cartMenuDropdown, setCartMenuDropdown] = useState(false);
  const [profileMenuDropdown, setProfileMenuDropdown] = useState(false);

  const shop_dropdown_list = [
    { name: "Shop All" },
    { name: "Featured" },
    { name: "Bestsellers" },
    { name: "New In" },
    { name: "Sale" },
  ];

  const cart_dropdown_list = [
    { name: "Cart 1" },
    { name: "Cart 2" },
    { name: "Cart 3" },
    { name: "Cart 4" },
  ];

  const profile_dropdown_list = [
    { name: "Profile 1" },
    { name: "Profile 2" },
    { name: "Profile 3" },
    { name: "Profile 4" },
  ];

  const closeHeaderAlert = () => {
    setShowAlert(false);
    setTimeout(() => {
      setDisplayAlert(false); // remove content
    }, 300);
  };

  return (
    <header className="header" id="Header">
      {displayAlert && (
        <div className={`alert_dark ${!showAlert ? "hide" : ""}`}>
          <div className="alert_container">
            <p>
              Sign up and get 20% off to your first order.{" "}
              <a href="#">Sign Up Now</a>
            </p>
            <button
              className="btn_close"
              onClick={closeHeaderAlert}
            >
              <img src={TimesIcon} alt="" />
            </button>
          </div>
        </div>
      )}

      <div className="container_size">
        <ul className="header_list">
          <li>
            <a href="#" className="logo">
              SHOP.CO
            </a>
          </li>
          <li>
            <ul className="menu_list">
              <li>
                <Dropdown
                  menuDropdown={shopMenuDropdown}
                  setMenuDropdown={setShopMenuDropdown}
                  dropdown_name={
                    <>
                      Shop <img src={ArrowDownIcon} alt="img" />
                    </>
                  }
                  dropdown_list={shop_dropdown_list}
                />
              </li>
              <li>
                <a href="#" className="menu_item">
                  On Sale
                </a>
              </li>
              <li>
                <a href="#" className="menu_item">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="menu_item">
                  Brands
                </a>
              </li>
            </ul>
          </li>
          <li className="large_flex">
            <div className="form_group">
              <input
                type="search"
                className="form_control"
                placeholder="Search for products..."
              />
              <img src={SearchIcon} className="input_icon" alt="" />
            </div>
          </li>
          <li>
            <ul className="user_control_list">
              <li>
                <Dropdown
                  menuDropdown={cartMenuDropdown}
                  setMenuDropdown={setCartMenuDropdown}
                  dropdown_name={<img src={CartIcon} alt="" />}
                  dropdown_list={cart_dropdown_list}
                />
              </li>
              <li>
                <Dropdown
                  menuDropdown={profileMenuDropdown}
                  setMenuDropdown={setProfileMenuDropdown}
                  dropdown_name={<img src={ProfileIcon} alt="" />}
                  dropdown_list={profile_dropdown_list}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
