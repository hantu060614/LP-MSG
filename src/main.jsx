import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./input.css";

// LiteSpeed serves /about/ — keep trailing slash so URLs match server canonical
if (typeof window !== "undefined") {
  const { pathname, search, hash } = window.location;
  if (
    pathname.length > 1 &&
    !pathname.endsWith("/") &&
    !/\.[a-z0-9]+$/i.test(pathname)
  ) {
    window.history.replaceState(null, "", `${pathname}/${search}${hash}`);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
