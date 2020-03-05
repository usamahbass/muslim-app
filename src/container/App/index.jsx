import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home";
import Quran from "../Qur'an/index";
import Dzikir from "../Dzikir";
import Doa from "../Doa";

function App() {
  useEffect(() => {
    // remove load big package

    const load = document.getElementById("startingloader");
    window.onload = () => {
      if (load) {
        load.remove();
      }
    };
  });
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/quran" component={Quran} />
        <Route path="/dzikir" component={Dzikir} />
        <Route path="/doa" component={Doa} />
      </Router>
    </React.Fragment>
  );
}

export default App;
