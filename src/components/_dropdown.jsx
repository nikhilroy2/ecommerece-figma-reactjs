import React, { useState, useEffect, useRef } from "react";

export default function Dropdown({
  menuDropdown,
  setMenuDropdown,
  dropdown_name,
  dropdown_list,
}) {
  const dropdown_btn = useRef();

  // useEffect(() => {
  //   window.addEventListener("click", function (event) {
  //     if (event.target != dropdown_btn.current) {
  //       setMenuDropdown(false);
  //     }
  //   });
  // }, []);
  return (
    <div className="dropdown">
      <button
        className="dropdown_btn"
        ref={dropdown_btn}
        onClick={() => setMenuDropdown(!menuDropdown)}
      >
        {dropdown_name}
      </button>
      <ul className={`dropdown_menu ${menuDropdown ? "show" : ""}`}>
        {dropdown_list.map((value, index) => (
          <li key={index}>
            <button>{value.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
