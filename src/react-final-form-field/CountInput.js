import React from "react";
import Component from "../components/CountInput/CountInput";

const CountInput = ({ meta, input, ...props }) => {
  const { error, touched } = meta;
  const { value } = input;
  return (
    <Component
      {...props}
      {...input}
      value={Number(value)}
      error={touched && !!error}
      helperText={touched ? error : undefined}
    />
  );
};

export default CountInput;
