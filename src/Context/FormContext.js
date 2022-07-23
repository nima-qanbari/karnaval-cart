import React, { createContext, useState } from "react";
export const FormContext = createContext({});

const Form = ({ children, initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  console.log("errors", errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(errors).filter((item) => !!item).length) {
      if (onSubmit) {
        console.log(onSubmit, "dsdsd");
      } else {
        console.log("errors");
      }
    }
  };

  const onError = (name) => (err) => {
    setErrors({ ...errors, [name]: err });
  };
  const onChange = (name) => (e) => {
    const { value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <FormContext.Provider value={{ values, onChange, errors, onError }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export default Form;
