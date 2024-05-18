// import React from "react";
// import { Link } from "react-router-dom";
import { footer } from "../assets/img";

const Footer = () => {
  return (
    <>
      <footer
        className="shadow"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.1), rgba(0, 0, 0, 1)), url(${footer})`,
          backgroundPosition: "center top",
          marginTop: "80px",
        }}
      >
        <div className="footer-wrapper container mx-auto pt-5"></div>
      </footer>
    </>
  );
};

export default Footer;
