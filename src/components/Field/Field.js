import React from "react";

import { useFormOnError } from "../../hooks/useFormOnError";
import { useFormOnChange } from "../../hooks/useFormOnChange";
import { useFormValue } from "../../hooks/useFormValue";
import { useFormError } from "../../hooks/useFormError";

const Field = ({
  component: Component,
  error: propsError,
  validate,
  ...props
}) => {
  const { name } = props;
  const value = useFormValue(name);
  const error = useFormError(name);
  const onChange = useFormOnChange(name);
  const onError = useFormOnError(name);

  const doValidate = (value) => {
    if (Array.isArray(validate)) {
      for (let i = 0; i < validate.length; i++) {
        const v = validate[i](value);
        if (v) {
          onError(v);
          return;
        }
      }
      onError(null);
    }
  };

  const handleBlur = () => {
    doValidate(value);
  };

  const handleChange = (e) => {
    onChange(e);
    if (error) {
      // let value = e
      // if(e.target) {
      //   value = e.target.value
      // }
      const { value } = e.target;
      doValidate(value);
    }
  };

  return (
    <Component
      {...props}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      error={Boolean(error) || Boolean(propsError)}
      helperText={error || propsError}
    />
  );
};

export default Field;
