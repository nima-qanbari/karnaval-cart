import React from "react";
import MuiTextField from "@material-ui/core/TextField";

const TextField = ({ meta, input, ...props }) => {
  const { error, touched } = meta;
  return (
    <MuiTextField
      {...props}
      {...input}
      error={touched && !!error}
      helperText={touched ? error : undefined}
    />
  );
};

export default TextField;
