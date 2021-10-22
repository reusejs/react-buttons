import React from "react";
import "../tailwind.css";

const Box = (props) => {
  return (
    <div className="border border-gray-400 rounded p-8 bg-green-300 mb-8">
      <span className="block text-2xl font-semibold text-black">Hello Box</span>
    </div>
  );
};

export default Box;
