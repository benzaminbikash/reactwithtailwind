import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import logo from "/logo.svg";
import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
function NavBar() {
  const navitem = [
    {
      title: "jewelry & Accessories",
      path: "/",
    },
    {
      title: "Clothing & Shoes",
      path: "/",
    },
    {
      title: "Home & Living",
      path: "/",
    },
    {
      title: "Wedding & Party",
      path: "/",
    },
    {
      title: "Toys & Entertainment",
      path: "/",
    },
    {
      title: "Art & Collections",
      path: "/",
    },
    {
      title: "Craft Supplies & Tool",
      path: "/",
    },
  ];
  const [opening, setOpening] = useState(false);
  const toggle = () => {
    setOpening(!opening);
  };
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 bg-gray-100 ">
      <nav className="flex justify-between items-center px-4 sm:px-2 pt-4 pb-2">
        {/* search */}
        <IoIosSearch size={26} className="cursor-pointer hidden lg:block" />
        {/* logo */}
        <img src={logo} alt="/" />
        {/* user and shopping */}
        <div className="hidden sm:flex gap-2  items-center">
          <div className="flex gap-2 items-center">
            <FaUserAlt />
            <p>User</p>
          </div>
          <div className="hidden sm:flex gap-2  items-center">
            <FaShoppingBag />
            <p>Shopping</p>
          </div>
        </div>
        {/* for mobile */}
        <div className="sm:hidden">
          <button onClick={toggle}>
            {opening ? <RiCloseFill /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>
      {/* info */}
      <hr />
      <div className="mt-1">
        <ul className="hidden lg:flex justify-between text-Black text-base">
          {navitem.map((item, index) => (
            <li key={index} className="hover:text-orange-500">
              <Link>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* for mobile only */}
      {opening && (
        <div className="px-2">
          <ul className=" bg-Black sm:hidden text-white px-2 py-2 rounded-lg text-base">
            {navitem.map((item, index) => (
              <li key={index} className="hover:text-orange-500">
                <Link>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
