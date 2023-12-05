import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
function Filter() {
  return (
    <div>
      <h1>Filter Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        corrupti voluptate iusto labore esse aliquam impedit placeat temporibus.
        Suscipit, id eum adipisci enim laborum hic aliquid odit tempora possimus
        nobis provident commodi explicabo porro iste? Voluptatum placeat error
        suscipit optio magnam, maxime beatae eum, dolores quae reiciendis aut
        porro commodi.
      </p>
      <div className="filter">
        <Link to="hospital">Hospital</Link>
        <Link to="school">School</Link>
        <Link to="college">College</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Filter;
