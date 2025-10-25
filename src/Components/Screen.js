import React from "react";
import { useLocation } from "react-router-dom";

function Screen({ children }) {
  const location = useLocation();
  const path = location.pathname;

  // Determine background image class
  let screenClass = "screen_default-pink"; // default for App + Timer

  if (path.includes("success")) screenClass = "screen_success-pink";
  else if (path.includes("failed")) screenClass = "screen_failed";

  return <div className={`Screen ${screenClass}`}>{children}</div>;
}

export default Screen;
