// const add = (a, b) => {
//   return a + b;
// };

// const add2 = (a) => {
//     const fn = (b) => {
//       return a + b;
//     };

//     return fn;
//   };

// const add2 = (a) => (b) => a + b;


// const increment3 = (i) => {
//   return add(i, 3);
// };

// const increment4 = add2(4);

// console.log(increment3(1));
// console.log(increment4(9));
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const required = (name) => (value) => {
  if (value) return undefined;
  else return `وارد کردن ${name} الزامی است`;
};

export const NationalCode_REGEX = /^([0-9]){10}$/;

export const nationalCode = (input) => {
  if (typeof input === "string" && NationalCode_REGEX.test(input)) {
    const sum = [...Array(9)]
      .map((_, index) => Number(input.charAt(index)) * (10 - index))
      .reduce((acc, n) => acc + n, 0);
    const r = sum % 11;

    return Number(input.charAt(9)) === (r < 2 ? r : 11 - r)
      ? undefined
      : "کد ملی نامعتبر است";
  }
  return "کد ملی نامعتبر است";
};

export const phone =
  (label = "شماره موبایل") =>
  (input) =>
    input
      ? /^(09|\+989|9)[0-9]{9}$|^00([1-9]{2})[0-9]{10}$/.test(input)
        ? undefined
        : `${label} نامعتبر است`
      : undefined;

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "ایمیل نامعتبر است"
    : undefined;
