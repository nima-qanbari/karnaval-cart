import React from "react";

const SamanPaymentGateway = ({ Token }) => {
  return (
    <form
      ref={(form) => form.submit()}
      action="https://sep.shaparak.ir/OnlinePG/OnlinePG"
      method="post"
    >
      <input type="hidden" name="Token" value={Token} />
      <input name="GetMethod" type="text" value="true" />
    </form>
  );
};

export default SamanPaymentGateway;
