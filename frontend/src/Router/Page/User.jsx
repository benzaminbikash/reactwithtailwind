import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  return <div>{params.name}</div>;
}

export default User;
