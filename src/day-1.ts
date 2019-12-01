const getFuelReq = (num: number) => Math.floor(num / 3) - 2;

export const sumFuelRequeirements = (arr: number[]) => {
  return arr.reduce((sum, current) => {
    return sum + getFuelReq(current);
  }, 0);
};
