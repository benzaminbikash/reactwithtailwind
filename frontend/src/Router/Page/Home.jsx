import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="m-4">
      <h1>Home</h1>
      <div className="flex  gap-6">
        <Link to="company1">Company 1</Link>
        <Link to="company2">Company 2</Link>
        <Link to="company3">Company 3</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
