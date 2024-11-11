import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvier } from "./contexts/AuthContext";
//CSS RESETS
import "./styles/resets.css";
import "./styles/fonts.css";

// Global styling
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvier>
        <App />
      </AuthProvier>
    </BrowserRouter>
  </React.StrictMode>
);
