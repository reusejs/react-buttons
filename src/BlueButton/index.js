import React from "react";
import Base from "../Base";

export default (props) => {
  return (
    <Base
      colors="bg-blue-600 hover:bg-blue-700 text-white"
      border="border border-transparent"
      {...props}
    />
  );
};
