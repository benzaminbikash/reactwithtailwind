import React, { useState } from "react";
import moon from "../assets/images/moon.png";
import { CiMenuFries } from "react-icons/ci";
import girl from "../assets/images/girl.png";

function Portfolio() {
  const [display, setDisplay] = useState(false);
  const [show, setshow] = useState(false);
  return (
    <div>
      <div className="bg-red-400 h-fit">
        <nav className="  container mx-auto ">
          {/* in website */}
          <div className="container py-4 flex justify-between items-center ">
            <p className="text-white font-bold text-2xl">Portfolio</p>
            <ul className="hidden md:flex gap-5">
              <li className="text-white font-bold text-sm">Home</li>
              <div className="relative group">
                <li
                  className="text-white font-bold text-sm cursor-pointer"
                  onClick={() => setshow(!show)}
                >
                  Projects
                </li>
                {/* group-hover:block */}
                {show && (
                  <ul className=" absolute bg-red-600  p-2 space-y-2 w-[140px] ">
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                  </ul>
                )}
              </div>
              <li className="text-white font-bold text-sm">Resume</li>
            </ul>
            <div className=" md:hidden">
              <button onClick={() => setDisplay(!display)}>
                <CiMenuFries color="white" size={30} />
              </button>
            </div>
          </div>
          {/* in mobile */}
          {display && (
            <ul className="container md:hidden ">
              <li className="text-white font-bold text-sm py-2">Home</li>
              <div>
                <li
                  className="text-white font-bold text-sm py-2"
                  onClick={() => setshow(!show)}
                >
                  Projects
                </li>
                {show && (
                  <ul className=" px-10 ">
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                  </ul>
                )}
              </div>
              <li className="text-white font-bold text-sm py-2">Resume</li>
            </ul>
          )}
        </nav>
      </div>
      {/* finish nav bar */}
      <section className="container mx-auto my-12">
        <div className="py-10 md:flex items-center justify-between">
          {/* left */}
          <div className="md:w-1/2 ">
            <p className="text-2xl font-semibold pb-3">
              Hello, <span className="text-blue-600">I'm</span>
            </p>
            <h1 className="text-4xl font-bold text-blue-800  pb-3">Williams</h1>
            <p className="text-3xl  pb-3">React Native Developer</p>
            <p className="text-lg pb-3 md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem dolorem numquam aliquam, veritatis deserunt nemo
              vel voluptatibus minus quo quas recusandae vero blanditiis
              architecto illum sequi mollitia debitis natus ipsum.
            </p>
            <button className="bg-blue-600 text-white py-2 px-3 rounded-md">
              Let Talk
            </button>
          </div>
          {/* left finish */}
          {/* right side */}
          <div className="md:w-1/2">
            <img src={girl} alt="randomImage" />
          </div>
        </div>
      </section>
      {/* service section */}
      <section className="container mx-auto my-12">
        {/* service header */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">My Services</h1>
          <p className="text-4xl text-blue-500 font-medium">What I Do?</p>
        </div>
        {/* service cards */}
        <div className="flex  justify-around mt-6 flex-wrap">
          {/* one */}
          <div className="w-[360px] border border-blue-500 shadow-2xl px-5 py-4 rounded-md mb-5">
            <img
              className="w-auto mx-auto "
              src="https://www.totaljobs.com/advice/wp-content/uploads/graphic-designer-job-description.jpg"
              alt="randomimage"
            />
            <p className="text-center my-3 text-lg font-lg font-semibold">
              Graphic Designer
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              illum velit modi mollitia, voluptatibus eum corrupti saepe magni
              voluptates minus!
            </p>
          </div>
          {/* two */}
          <div className="w-[360px] border border-blue-500 shadow-2xl px-5 py-4 rounded-md  mb-5">
            <img
              className="w-auto mx-auto "
              src="https://www.totaljobs.com/advice/wp-content/uploads/graphic-designer-job-description.jpg"
              alt="randomimage"
            />
            <p className="text-center my-3 text-lg font-lg font-semibold">
              Graphic Designer
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              illum velit modi mollitia, voluptatibus eum corrupti saepe magni
              voluptates minus!
            </p>
          </div>
          {/* third */}
          <div className="w-[360px] border border-blue-500 shadow-2xl px-5 py-4 rounded-md  mb-5">
            <img
              className="w-auto mx-auto "
              src="https://www.totaljobs.com/advice/wp-content/uploads/graphic-designer-job-description.jpg"
              alt="randomimage"
            />
            <p className="text-center my-3 text-lg font-lg font-semibold">
              Graphic Designer
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              illum velit modi mollitia, voluptatibus eum corrupti saepe magni
              voluptates minus!
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-12">
        <h1 className="text-2xl font-semibold">Portfolio</h1>
        <div className="flex flex-col justify-between ml-16 md:flex-row md:items-center">
          <div className="w-/3  ">
            <p>Company</p>
            <p>About Us</p>
            <p>Why Choose Me</p>
            <p>Pricing</p>
            <p>Testimonial</p>
          </div>
          <div className="w-/3">
            <p>Company</p>
            <p>About Us</p>
            <p>Why Choose Me</p>
            <p>Pricing</p>
            <p>Testimonial</p>
          </div>
          <div className="w-1/3">
            <p>Subscribe to our Newsletter</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-black px-3 py-4 mt-4 rounded-md shadow-lg shadow-red-400 "
              />
              <input
                type="submit"
                title="Subscribe"
                className="bg-blue-600 px-3 py-3 mt-4 text-white rounded-md absolute left-48 top-2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
