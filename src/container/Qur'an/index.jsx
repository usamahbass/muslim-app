import React, { useState, useEffect, Suspense } from "react";
import { getSurah, getAyat } from "../../config/Api";

import Navbar from "../../components/navbar/index";
import "./Qur'an.scss";
import Search from "../../components/search";
import Title from "../../components/title";
import { List } from "react-content-loader";

const BoxAyat = React.lazy(() => import("../../components/boxayat"));
const BoxSurah = React.lazy(() => import("../../components/boxsurah"));

const Quran = props => {
  const [surah, setSurah] = useState([]);
  const [ayat, setAyat] = useState([]);
  const [issurah, setIsSurah] = useState("");
  const [searchsurah, setSearchSurah] = useState("");
  const [searchayat, setSearchAyat] = useState("");

  useEffect(() => {
    getSurah().then(res => {
      setSurah(res);
    });
  });

  const goBack = () => {
    props.history.goBack();
  };

  const clickSurah = item => {
    getAyat(item.nomor).then(res => {
      setAyat(res);
    });
    setIsSurah(item);

    let boxsurah = document.getElementById("box_surah");
    let boxayat = document.getElementById("box_ayat");

    boxayat.style.display = "block";
    boxsurah.style.display = "none";
  };

  const searchSurah = e => {
    e.preventDefault();

    setSearchSurah(e.target.value.substr(0, 20));
  };

  const searchAyat = e => {
    e.preventDefault();

    setSearchAyat(e.target.value.substr(0, 20));
  };

  let filtersurah = surah.filter(item => {
    return item.nama.toLowerCase().indexOf(searchsurah.toLowerCase()) !== -1;
  });

  let filterayat = ayat.filter(item => {
    return item.nomor.toLowerCase().indexOf(searchayat.toLowerCase()) !== -1;
  });
  return (
    <div>
      <Navbar onClick={goBack.bind(this)} />
      <main>
        <div id="box_surah">
          <Search
            placeholder="Cari surah .."
            onChange={searchSurah}
            type="text"
          />
          <Title title="Surah" />
          <div className="box_surah" id="box_surah">
            {filtersurah.map((item, index) => (
              <Suspense fallback={<List />} key={index}>
                <BoxSurah
                  key={index}
                  surahno={item.nomor}
                  surahid={item.nama}
                  suraharti={item.arti}
                  surahar={item.asma}
                  to={`/quran/${item.nomor}`}
                  clickSurah={clickSurah.bind(this, item)}
                />
              </Suspense>
            ))}
          </div>
        </div>
      </main>

      <article id="box_ayat">
        <Search
          placeholder="Cari ayat .. , ex: 1"
          onChange={searchAyat}
          type="number"
        />
        <div className="flex_ayat">
          <span className="nama_surah">{issurah.nama}</span>
          <span className="arti_surah">{issurah.arti}</span>
        </div>
        <audio controls src={issurah.audio} />
        <ul className="box_ayat">
          {filterayat.map((item, index) => (
            <Suspense fallback={<List />} key={index}>
              <BoxAyat
                key={index}
                ayat={item.nomor}
                arabic={item.ar}
                id={item.id}
              />
            </Suspense>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Quran;
