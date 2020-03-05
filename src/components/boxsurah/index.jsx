import React from "react";
import "./BoxSurah.scss";
import { Link } from "react-router-dom";

const BoxSurah = ({ surahno, surahid, suraharti, surahar, to, clickSurah }) => {
  return (
    <div className="col-1-4" onClick={clickSurah}>
      <Link to={to} className="index">
        <div className="flex_surah">
          <div className="left">
            <span className="nomor_surah">{surahno}.</span>
            <span className="nama_surah">{surahid}</span>
            <span className="arti_surah">{suraharti}</span>
          </div>
          <div className="right">{surahar}</div>
        </div>
      </Link>
    </div>
  );
};

export default BoxSurah;
