import React from "react";
import LoaderIcon from "../loaderIcon";
import "../tailwind.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = function Button({
  type = "button",
  onClick = () => {},
  loaderIcon = <LoaderIcon />,
  disable,
  children,
  busy = false,
  busyText = "Processing..",
  ...props
}) {
  const alignment =
    props.alignment ||
    "flex justify-center items-center font-normal text-sm focus:outline-none rounded shadow-sm";

  const font = props.font || "font-sans";

  const colors =
    props.colors ||
    "bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50";

  const padding = props.padding || "px-4 py-2";

  const border = props.border || "border border-transparent";

  const width = props.width || "";

  return (
    <button
      type={type}
      className={classNames(alignment, font, colors, padding, border, width)}
      onClick={onClick}
      disabled={disable}
    >
      {busy && (
        <>
          {busyText}
          {loaderIcon}
        </>
      )}
      {!busy && children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};

export default Button;
