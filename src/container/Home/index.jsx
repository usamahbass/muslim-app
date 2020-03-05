import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="main_block">
          <p className="main_heading">
            Muslim App
            <i className="fas fa-mosque" />
          </p>
        </div>
        <section className="main_flexbox">
          <div className="col-1-3">
            <h6 className="main_title">Baca Qur'an</h6>
            <p>
              <i className="fas fa-quran"></i>
            </p>
            <Link to="/quran" className="link">
              <button>Baca Sekarang</button>
            </Link>
          </div>
          <div className="col-1-3">
            <h6 className="main_title">Dzikir</h6>
            <p>
              <i className="fas fa-pray"></i>
            </p>
            <Link to="/dzikir" className="link">
              <button>Baca Sekarang</button>
            </Link>
          </div>
          <div className="col-1-3">
            <h6 className="main_title">Doa Harian</h6>
            <p>
              <i className="fas fa-mosque"></i>
            </p>
            <Link to="/doa" className="link">
              <button>Baca Sekarang</button>
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy;MuslimApp 2020</p>
      </footer>
    </div>
  );
};

export default Home;
