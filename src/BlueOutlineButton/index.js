import React from "react";
import Base from "../Base";

export default (props) => {
  return (
    <Base
      colorClasses="bg-white hover:bg-blue-700 text-blue-700 hover:text-white"
      borderClasses="border border-blue-700"
      {...props}
    />
  );
};
