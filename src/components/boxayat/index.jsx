import React from "react";
import "./BoxAyat.scss";

const BoxAyat = ({ ayat, arabic, id }) => {
  return (
    <li className="box_ayat_list">
      <span className="ayat_nomor">{ayat}</span>
      <span className="ayat_arabic">{arabic}</span>
      {/* <span className="ayat_latin">{item.tr}</span> */}
      <span className="ayat_id">{id}</span>
    </li>
  );
};

export default BoxAyat;
