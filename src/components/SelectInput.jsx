import React from "react";

const SelectInput = ({ children, ...rest }) => {
  return (
    <select
      {...rest}
      className="outline-none px-2 py-2 w-full"
      name="to"
      id="lws-to"
      required
    >
      {children}
    </select>
  );
};

export default SelectInput;
