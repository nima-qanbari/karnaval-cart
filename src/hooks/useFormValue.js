import { useContext } from "react";

import { FormContext } from "../Context/FormContext";

export const useFormValue = (name) => {
  const { values } = useContext(FormContext);
  const value = values[name] || "";
  return value;
};
