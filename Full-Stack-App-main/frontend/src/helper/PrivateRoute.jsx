import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/tokenslice";
function PrivateRoute() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [auth, setAuth] = useState();
  const getToken = () => {
    const data = localStorage.getItem("token");
    setAuth(data);
    dispatch(setToken(data));
  };
  console.log("localstorage", auth);
  useEffect(() => {
    getToken();
  }, []);
  return auth != null ? <Outlet /> : navigate("/login");
}
export default PrivateRoute;
