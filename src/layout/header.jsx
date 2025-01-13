import React, { useState, useEffect, useRef } from "react";
import TimesIcon from "../assets/icons/times.svg";
import ArrowDownIcon from "../assets/icons/arrow_down.svg";
import SearchIcon from "../assets/icons/search.svg";
import CartIcon from "../assets/icons/cart.svg";
import ProfileIcon from "../assets/icons/profile.svg";

import Dropdown from "../components/_dropdown";
export default function Header() {
  const [showAlert, setShowAlert] = useState(true);
  const [displayAlert, setDisplayAlert] = useState(true);
  const dropdown_btn = useRef();
  const closeHeaderAlert = () => {
    setShowAlert(false);
    setTimeout(() => {
      setDisplayAlert(false); // remove content
    }, 300);
  };

  // for shop item======
  const [shopMenuDropdown, setShopMenuDropdown] = useState(false);
  const shop_dropdown_list = [
    {
      name: "Shop 1",
      action: "",
    },
    {
      name: "Shop 2",
      action: "",
    },
    {
      name: "Shop 3",
      action: "",
    },
    {
      name: "Shop 4",
      action: "",
    },
  ];
  // for shop item======End

  // for cart item======
  const [cartMenuDropdown, setCartMenuDropdown] = useState(false);
  const cart_dropdown_list = [
    {
      name: "Cart 1",
      action: "",
    },
    {
      name: "Cart 2",
      action: "",
    },
    {
      name: "Cart 3",
      action: "",
    },
    {
      name: "Cart 4",
      action: "",
    },
  ];
  // for cart item======End

  // for profile item======
  const [profileMenuDropdown, setProfileMenuDropdown] = useState(false);
  const profile_dropdown_list = [
    {
      name: "Profile 1",
      action: "",
    },
    {
      name: "Profile 2",
      action: "",
    },
    {
      name: "Profile 3",
      action: "",
    },
    {
      name: "Profile 4",
      action: "",
    },
  ];
  // for profile item======End

  return (
    <header id="Header">
      {displayAlert && (
        <div className={`alert_dark ${!showAlert ? "hide" : ""}`}>
          <div className="container_size">
            Sign up and get 20% off to your first order.{" "}
            <a href="#">Sign Up Now</a>
            <button className="btn_close" onClick={closeHeaderAlert}>
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
                ></Dropdown>
              </li>
              <li>
                <a href="#">On Sale</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Brands</a>
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
                  dropdown_name={
                    <>
                      <img src={CartIcon} alt="" />
                    </>
                  }
                  dropdown_list={cart_dropdown_list}
                ></Dropdown>
              </li>

              <li>
                <Dropdown
                  menuDropdown={profileMenuDropdown}
                  setMenuDropdown={setProfileMenuDropdown}
                  dropdown_name={
                    <>
                      <img src={ProfileIcon} alt="" />
                    </>
                  }
                  dropdown_list={profile_dropdown_list}
                ></Dropdown>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
