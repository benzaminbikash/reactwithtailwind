import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mainnotfound">
      <h1>Oop! Page Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default NotFound;
