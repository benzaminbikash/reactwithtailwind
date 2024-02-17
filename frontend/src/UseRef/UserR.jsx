import React, { forwardRef } from "react";

function UserR(props, ref) {
  return <input type="text" className="text-black" ref={ref} />;
}

export default forwardRef(UserR);
