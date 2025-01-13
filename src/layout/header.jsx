import React, { useState } from "react";
import TimesIcon from "../assets/icons/times.svg";
export default function Header() {
  const [showAlert, setShowAlert] = useState(true);
  const [displayAlert, setDisplayAlert] = useState(true);
  const closeHeaderAlert = () => {
    setShowAlert(false);
    setTimeout(() => {
      setDisplayAlert(false); // remove content
    }, 300);
  };
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
                    <a href="#">Shop</a>
                </li>
                <li>
                    <a href="#">
                        On Sale
                    </a>
                </li>
                <li>
                    <a href="#">
                        New Arrivals
                    </a>
                </li>
                <li>
                    <a href="#">
                        Brands
                    </a>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
