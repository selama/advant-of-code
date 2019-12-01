const getFuelReq = (num: number) => Math.floor(num / 3) - 2;

const calcFuelReq = (num: number) => {
  const fr: number = getFuelReq(num);
  if (fr <= 0) {
    return 0;
  }
  return fr + calcFuelReq(fr);
}

export const sumFuelRequeirements = (arr: number[]) => {
  return arr.reduce((sum, current) => {
    return sum + calcFuelReq(current);
  }, 0);
};
