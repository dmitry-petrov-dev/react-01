import React from "react";
import preloader from "./../../../assets/images/preloader.svg";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="Loading" />{" "}
    </div>
  );
};

export default Preloader;
