import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./input.css";

// LiteSpeed serves /about/ etc. — strip before React so assets & routes match
if (typeof window !== "undefined") {
  const { pathname, search, hash } = window.location;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    window.history.replaceState(
      null,
      "",
      `${pathname.replace(/\/+$/, "")}${search}${hash}`,
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
