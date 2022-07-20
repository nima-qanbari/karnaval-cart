import React from "react";
import { useState } from "react";

const Field = ({
  component: Component,
  error: propsError,
  validate,
  onChange,
  ...props
}) => {
  const { value } = props;
  const [error, setError] = useState(null);

  const doValidate = (value) => {
    if (Array.isArray(validate)) {
      for (let i = 0; i < validate.length; i++) {
        const v = validate[i](value);
        if (v) {
          setError(v);
          return;
        }
      }
      setError(null);
    }
  };

  const handleBlur = () => {
    doValidate(value);
  };

  const handleChange = (e) => {
    onChange(e);
    const { value } = e.target;
    doValidate(value);
  };
  return (
    <Component
      {...props}
      onBlur={handleBlur}
      onChange={handleChange}
      error={Boolean(error) || Boolean(propsError)}
      helperText={error || propsError}
    />
  );
};

export default Field;
