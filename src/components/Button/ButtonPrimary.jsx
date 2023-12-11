import React from "react";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button className="buttonStyle m-1" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
