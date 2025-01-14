import React, { useEffect, useRef } from "react";
import "./dropdown.css";

export default function Dropdown({
  menuDropdown,
  setMenuDropdown,
  dropdown_name,
  dropdown_list,
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenuDropdown]);

  const handleToggle = () => {
    setMenuDropdown(!menuDropdown);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown_btn" onClick={handleToggle}>
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
