import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaGoogle, FaLinkedin } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-black/30  absolute w-full">
        <nav className="flex justify-between py-2 px-5">
          {/* left */}
          <ul className="hidden md:flex gap-5">
            <li className="text-white text-sm">Home</li>
            <li className="text-white text-sm">Gallery</li>
            <li className="text-white text-sm">Deals</li>
            <li className="text-white text-sm">Contact</li>
          </ul>
          {/* right */}
          <div className="flex gap-5 items-center">
            <FaGoogle color="white" />
            <FaFacebookF color="white" />
            <FaLinkedin color="white" />
            <FaInstagram color="white" />
          </div>
          {/* menu */}
          <IoMenu color="white" className="md:hidden" onClick={handleOpen} />
        </nav>
        {/* for mobile */}
        {open && (
          <div
            onClick={handleOpen}
            className="z-10 md:hidden bg-black/90 w-full h-screen top-0 left-0 absolute ease-in duration-300"
          >
            <ul className="text-center pt-10">
              <li className="text-white text-sm py-2">Home</li>
              <li className="text-white text-sm py-2">Gallery</li>
              <li className="text-white text-sm py-2">Deals</li>
              <li className="text-white text-sm py-2">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
