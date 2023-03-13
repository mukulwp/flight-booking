import React from "react";

const SelectInputDiv = ({ title, icon, children, className }) => {
  return (
    <div className={`${className} des-from`}>
      <p>{title}</p>
      <div className="flex flex-row">
        <img src={icon} alt="" />
        {children}
      </div>
    </div>
  );
};

export default SelectInputDiv;
