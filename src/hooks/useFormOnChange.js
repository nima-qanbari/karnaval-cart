import { useContext } from "react";

import { FormContext } from "../Context/FormContext";

export const useFormOnChange = (name) => {
  const { onChange } = useContext(FormContext);
  return onChange(name);
};
