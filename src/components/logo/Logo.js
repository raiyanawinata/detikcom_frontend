import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./logo.css";
import LogoSection from "./LogoSection";

const Logo = () => {
  return (
    <div className="bg-custom" style={{ width: "auto", height: "550px" }}>
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-custom text-center mb-4" style={{fontSize:"18px",fontFamily:"Montserrat", fontWeight: 700, marginTop:"15%"}} >
          Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor
          <br /> Serta Menjadi Narasumber di Detikfinance
        </h1>
      </Container>

      <div className="sc" style={{ marginTop: "-10%"}}>
        <LogoSection />
      </div>

      <div className="btn-container">
      <button className="bg-3EB7DD text-white font-bold rounded-lg py-2 px-4 ">
            Daftarkan startup kamu
          </button>
      </div>
    </div>
  );
}

export default Logo;
