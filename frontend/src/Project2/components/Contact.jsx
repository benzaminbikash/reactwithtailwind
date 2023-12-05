import React from "react";

function Contact() {
  return (
    <div className="container mx-auto lg:px-28 px-5 mb-4">
      <h1 className="pt-4 font-bold text-1xl text-center">Send us a message</h1>
      <p className="text-center">we're standing by!</p>
      <div className="mt-2 grid md:grid-cols-2 gap-2">
        {/* left */}
        <div>
          <img
            src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        {/* right */}
        <form>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <input type="text" placeholder="first" className="border p-1" />
            <input type="text" placeholder="Last" className="border p-1" />
            <input type="text" placeholder="Email" className="border p-1" />
            <input type="text" placeholder="Phone" className="border p-1" />
            <textarea
              //   cols={30}
              rows={10}
              type="text"
              placeholder="Type your message here"
              className="border p-1 col-span-2"
            />
            <button className="bg-blue-500 p-1 text-white col-span-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
