import React from "react";
import Base from "../Base";

export default (props) => {
  return (
    <Base
      colorClasses="bg-blue-600 hover:bg-blue-700 text-white"
      borderClasses="border border-transparent"
      {...props}
    />
  );
};
