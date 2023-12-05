import React from "react";

function BookingForm() {
  return (
    <div className="mt-8">
      <form className="flex flex-col md:flex-row gap-10">
        {/* destination */}
        <div className="lg:w-[50%]">
          <p>Destination</p>
          <select className="w-full border rounded-sm">
            <option value="">Kathmandu</option>
            <option value="">Lalitpur</option>
            <option value="">Pokhara</option>
          </select>
        </div>
        <div className="lg:w-[50%] flex">
          <div className="w-1/2 ">
            <label> Check-In</label>
            <input type="date" className="border w-full" />
          </div>
          <div className="w-1/2">
            <label> Check-Out</label>
            <input type="date" className="border w-full" />
          </div>
        </div>
        <div className="lg:w-[50%]">
          <p>Search</p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-400 text-white w-full">
            Rates & Availabilites
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
