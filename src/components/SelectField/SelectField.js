import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from "@material-ui/core";

const SelectField = ({
  className,
  variant,
  fullWidth,
  label,
  margin,
  helperText,
  error,
  ...props
}) => {
  return (
    <FormControl
      className={className}
      margin={margin}
      fullWidth={fullWidth}
      variant={variant}
      error={error}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...props}
        label={label}
        MenuProps={{ getContentAnchorEl: null }}
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectField;
