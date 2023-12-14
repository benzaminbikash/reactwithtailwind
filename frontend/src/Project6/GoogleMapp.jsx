import React from "react";

function GoogleMapp() {
  return (
    <div className="w-[600px] h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.55435376531!2d85.3254437746833!3d27.607342829896606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb16e3ebf5afd1%3A0xe4b243605ed91bbf!2sJyotidaya%20Co-operative%20Sec.%20School!5e0!3m2!1sen!2snp!4v1701854021362!5m2!1sen!2snp"
        loading="lazy"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}

export default GoogleMapp;
