export const getResult = (arr, noun, verb) => {
  arr[1] = noun;
  arr[2] = verb;
  for (let i = 0; i < arr.length; i = i + 4) {
    if (arr[i] === 99) {
      return arr[0];
    }
    if (arr[i] === 1) {
      arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
    }
    if (arr[i] === 2) {
      arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
    }
  }
};
