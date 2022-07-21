import { useContext } from "react";

import { FormContext } from "../Context/FormContext";

export const useFormError = (name) => {
  const { errors } = useContext(FormContext);
  const error = errors[name] || "";
  return error;
};
