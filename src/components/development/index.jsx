import React from "react";
import Dev from "../../assets/svg/programming.svg";
import "./Development.scss";

const Development = ({ onClick }) => {
  return (
    <div className="development">
      <img src={Dev} alt="development" />
      <span>Maaf , halaman ini sedang tahap pengerjaan ..</span>
      <button onClick={onClick}>Kembali</button>
    </div>
  );
};

export default Development;
