import React from "react";
import MuiSelectField from "../components/SelectField/SelectField";

const SelectField = ({ meta, input, ...props }) => {
  const { error, touched } = meta;
  return (
    <MuiSelectField
      {...props}
      {...input}
      error={touched && !!error}
      helperText={touched ? error : undefined}
    />
  );
};

export default SelectField;
