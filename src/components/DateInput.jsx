import React from "react";

const DateInput = ({...rest}) => {
  return (
    <input
      {...rest}
      type="date"
      className="outline-none px-2 py-2 w-full date"
      name="date"
      id="lws-date"
      required
    />
  );
};

export default DateInput;
