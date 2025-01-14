import HeroImg from "../assets/img/hero_img.png";
import VersaceImg from "../assets/img/versace.png";
import ZaraImg from "../assets/img/zara.png";
import GucciImg from "../assets/img/gucci.png";
import PradaImg from "../assets/img/prada.png";
import CalvinImg from "../assets/img/calvin.png";
import { useState, useEffect } from "react";
export default function HeroSection() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  useEffect(()=> {
    const currentTime = Date.now();
    const updateTimer = ()=> {
        const elapsedTime = Date.now() - currentTime;
        const progress = Math.min(elapsedTime/5000,1) // min: 0, max: 1;
        setCounter1(Math.floor(progress * 200));
        setCounter2(Math.floor(progress * 20000));
        setCounter3(Math.floor(progress * 30000));

        if(progress < 1){
            setTimeout(updateTimer, 10);
        } else {
            setCounter1('200+');
            setCounter2('20,00+');
            setCounter3('30,00+');
        }
    };

    updateTimer();

    return ()=> clearTimeout(updateTimer);

  }, [])

  return (
    <section id="hero_section">
      <div className="container_size">
        <div className="container_wrapper">
          <div className="content_wrapper">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <a href="#" className="btn_shop">
              Shop Now
            </a>
            <ul className="footer_list">
              <li>
                <strong>{counter1}</strong>
                <p>International Brands</p>
              </li>
              <li>
                <strong>{counter2}</strong>
                <p>High-Quality Products</p>
              </li>
              <li>
                <strong>{counter3}</strong>
                <p>Happy Customers</p>
              </li>
            </ul>
          </div>
          <div className="image_wrapper">
            <img src={HeroImg} className="hero_img" alt="img" />
          </div>
        </div>
      </div>
      <ul className="services_list">
        <li>
          <a href="#">
            <img src={VersaceImg} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={ZaraImg} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={GucciImg} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={PradaImg} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={CalvinImg} alt="" />
          </a>
        </li>
      </ul>
    </section>
  );
}
