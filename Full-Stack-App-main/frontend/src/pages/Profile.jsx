import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const auth = useSelector((state) => state.token);
  return <div>Your Token {auth?.token}</div>;
}

export default Profile;
