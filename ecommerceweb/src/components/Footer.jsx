import React from "react";
import { FaFacebookF, FaT } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="max-w-screen-2xl px-28 py-16">
      <div className="flex flex-wrap  justify-between gap-6 items-center">
        {/* first */}
        <div className="w-full md:w-1/3  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          id numquam iure dignissimos modi rerum error voluptatum repudiandae
          cum esse.
          <div className="flex gap-2 mt-3">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

        {/* second */}
        <div>
          <h2 className="font-bold text-1xl">Catelog</h2>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
        </div>
        {/* third */}
        <div>
          <h2 className="font-bold text-1xl">Customer Services</h2>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
        </div>
        {/* four */}
        <div>
          <h2 className="font-bold text-1xl">About us</h2>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
          <p>Reshma</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
