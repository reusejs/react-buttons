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
  const alignmentClasses =
    props.alignmentClasses ||
    "flex justify-center items-center font-normal text-sm focus:outline-none rounded shadow-sm";

  const fontClasses = props.fontClasses || "font-sans";

  const colorClasses =
    props.colorClasses ||
    "bg-blue-500 hover:bg-blue-700 text-white disabled:opacity-50";

  const paddingClasses = props.paddingClasses || "px-4 py-2";

  const borderClasses = props.borderClasses || "border border-transparent";

  const widthClasses = props.widthClasses || "";
  const disabledClasses = props.disabledClasses || "disabled:opacity-50";

  return (
    <button
      type={type}
      className={classNames(
        disabledClasses,
        alignmentClasses,
        fontClasses,
        colorClasses,
        paddingClasses,
        borderClasses,
        widthClasses
      )}
      onClick={onClick}
      disabled={disable || busy}
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
