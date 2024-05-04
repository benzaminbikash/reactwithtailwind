import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillSave,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
function NavBar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto py-4 flex justify-between">
      {/* left side */}
      <div className="flex items-center gap-3">
        <div onClick={() => setNav(true)}>
          <AiOutlineMenu size={30} />
        </div>
        <p className="hidden md:block text-3xl font-semibold">Best Eats</p>
        <div className="hidden md:block bg-gray-400 rounded-full">
          <button className="bg-black rounded-full h-full p-2 text-white">
            Delivery
          </button>
          <button className="p-2 text-white">Pickup</button>
        </div>
      </div>
      {/* search box */}
      <div className="bg-gray-200 flex p-2 items-center rounded-full gap-2 lg:w-[400px]">
        <AiOutlineSearch size={24} />
        <input
          type="text"
          placeholder="search food"
          className="bg-gray-200 border-collapse rounded-md focus:outline-none"
        />
      </div>
      {/* carts */}
      <button className="md:block bg-black text-white flex items-center px-4 gap-2 rounded-full">
        <AiOutlineShoppingCart />
        Cart
      </button>
      {/* mobile menu */}
      {/* over lay */}
      {nav ? (
        <div className="bg-black/80 w-full h-full fixed top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* sidebar */}
      {nav && (
        <div className="bg-white -left text-black w-[300px] h-screen fixed top-0 left-0 z-10">
          <div className="p-4 flex items-center justify-between">
            <p className="font-bold text-2xl">Best Eats</p>
            <AiOutlineClose size={24} onClick={() => setNav(false)} />
          </div>
          {/* nav item */}
          <nav>
            <ul>
              <li className="p-4 flex gap-2 items-center">
                <TbTruckDelivery /> Orders
              </li>
              <li className="p-4 flex gap-2 items-center">
                <MdOutlineFavorite /> Favorites
              </li>
              <li className="p-4 flex gap-2 items-center">
                <FaWallet /> Wallet
              </li>
              <li className="p-4 flex gap-2 items-center">
                <TbTruckDelivery /> Help
              </li>
              <li className="p-4 flex gap-2 items-center">
                <TbTruckDelivery /> Promotions
              </li>
              <li className="p-4 flex gap-2 items-center">
                <TbTruckDelivery /> Best Ones
              </li>
              <li className="p-4 flex gap-2 items-center">
                <TbTruckDelivery /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default NavBar;
