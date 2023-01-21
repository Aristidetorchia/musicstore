import React from "react";
import error404 from "../images/error404.png";

const Error = () => {
  return (
    <div>
      <center>
        <br />
        <h1 style={{ color: "green" }}>PAGE NOT FOUND</h1>
        <img className="d-block w-100" src={error404} alt="..." />
      </center>
    </div>
  );
};

export default Error;
