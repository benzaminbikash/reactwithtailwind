import React from "react";
import { Outlet, useLocation } from "react-router-dom";

function UserDetail() {
  const location = useLocation();
  const user = location.state;

  return (
    <div className="userdetail">
      <div>{user.name}</div>
      <img src={user.image} alt="/" />
    </div>
  );
}

export default UserDetail;
