import { useState } from "react";
import reactLogo from "./assets/icons/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Base from "./layout/base";
import HeroSection from "./components/hero_section";
function App() {
  return (
    <>
      <Base>
        <HeroSection />
      </Base>
    </>
  );
}

export default App;
