import React from "react";
import Mechanism from "./Mechanism";
import "./hero.css";

const Hero = () => {
  return (
    <div className="relative h-screen font-montserrat">
      <div className="image-container">
        <img
          src={require("../../assets/img/Background (1).png")}
          className="image"
          alt="hero"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mechanism-container">
          <h1 className="text-5xl font-bold text-white mb-4">Mekanisme</h1>
          <div className="mechanism">
            <Mechanism/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
