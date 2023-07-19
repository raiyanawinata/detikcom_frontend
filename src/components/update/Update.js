import React from "react";
import { Container } from "react-bootstrap";
import "./update.css";
import CardUpdate from "./CardUpdate";

const Update = () => {
  return (
    <div className="bg-custom" style={{ width: "auto", height: "750px" }}>
      <Container className="h-100 d-flex flex-column justify-content-start align-items-start">
        <h1 className="text-custom2 mb-4">Latest Update</h1>
      </Container>

      <div className="sc-2">
        <CardUpdate />
      </div>
    </div>
  );
}

export default Update;
