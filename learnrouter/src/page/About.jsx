import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="image">
        <img
          src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          alt="/"
        />
        <img
          src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          alt="/"
        />
        <img
          src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          alt="/"
        />
      </div>
      <Link to="/">Go to Home Page</Link>
    </>
  );
}

export default About;
