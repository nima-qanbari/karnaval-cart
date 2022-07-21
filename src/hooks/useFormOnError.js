import { useContext } from "react";

import { FormContext } from "../Context/FormContext";

export const useFormOnError = (name) => {
  const { onError } = useContext(FormContext);
  return onError(name);
};
