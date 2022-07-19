import { FormControl, InputLabel, Select } from "@material-ui/core";
import React from "react";

const SelectField = ({
  className,
  variant,
  fullWidth,
  label,
  margin,
  ...props
}) => {
  return (
    <FormControl
      className={className}
      margin={margin}
      fullWidth={fullWidth}
      variant={variant}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...props}
        label={label}
        MenuProps={{ getContentAnchorEl: null}}
      />
    </FormControl>
  );
};

export default SelectField;
