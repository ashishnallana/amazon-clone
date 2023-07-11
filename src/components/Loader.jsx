import React from "react";
import "./Loader.css";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div className="loader">
      <p>Searching...</p>
      <CircularProgress />
    </div>
  );
}

export default Loader;
