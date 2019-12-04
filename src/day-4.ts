const toDigitsArr = num => {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(Number(String(num).substring(i, i + 1)));
  }
  return arr;
};

const doubleDigits = num => {
  const digits = toDigitsArr(num);
  return (
    (digits[0] === digits[1] && digits[1] !== digits[2]) ||
    (digits[0] !== digits[1] && digits[1] === digits[2] && digits[2] !== digits[3]) ||
    (digits[1] !== digits[2] && digits[2] === digits[3] && digits[3] !== digits[4]) ||
    (digits[2] !== digits[3] && digits[3] === digits[4] && digits[4] !== digits[5]) ||
    (digits[3] !== digits[4] && digits[4] === digits[5])
  );
};

const hasDecrease = num => {
  const digits = toDigitsArr(num);
  const [first, ...rest] = digits;
  return rest.findIndex((d, i) => d < digits[i]) !== -1;
};

export const getResult = () => {
  const min = 171309;
  const max = 643603;

  let counter = 0;
  for (let i = min; i < max; i++) {
    if (doubleDigits(i) && !hasDecrease(i)) {
      counter++;
    }
  }

  return counter;
};
