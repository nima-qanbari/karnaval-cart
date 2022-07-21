import React, { createContext, useState } from "react";

export const FormContext = createContext({});

const Form = ({ children, initialValues }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form context", e);
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
