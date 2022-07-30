import React from "react";
import Component from "../components/OriginDestinationInput/OriginDestinationInput";

const OriginDestinationInput = ({ meta, input, ...props }) => {
  const { error, touched } = meta;

  return (
    <Component
      {...props}
      {...input}
      error={touched && !!error}
      helperText={touched ? error : undefined}
    />
  );
};

export default OriginDestinationInput;
