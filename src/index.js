import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./container/App/";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
