import React from "react";
import quality from "../assets/quality-service.png";
import comfort from "../assets/comfort.png";
import trust from "../assets/trusted.png";
import prices from "../assets/interaction.png";


const Policy = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-between  gap-4">
      <div className="col text-center d-inline pt-4 rounded-5">
        <img className="w-50 p-4" src={quality} alt="quality" />
        <p className="fs-4 fw-semibold pt-3">Genuine Quality</p>
      </div>
      <div className="col text-center d-inline pt-4 rounded-5">
        <img className="w-50 p-4" src={comfort} alt="quality" />
        <p className="fs-4 fw-semibold pt-3">Customer Comfort quality</p>
      </div>
      <div className="col text-center d-inline pt-4 rounded-5">
        <img className="w-50 p-4" src={trust} alt="quality" />
        <p className="fs-4 fw-semibold pt-3">Trustbility</p>
      </div>
      <div className="col text-center d-inline pt-4 rounded-5">
        <img className="w-50 p-4" src={prices} alt="quality" />
        <p className="fs-4 fw-semibold pt-3">Friendly Prices</p>
      </div>
    </div>
  );
};

export default Policy;
