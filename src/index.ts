import { inputToArr } from './input-to-arr';
import { sumFuelRequeirements } from './day-1';

const solve = async () => {
  const inputUrl = 'https://adventofcode.com/2019/day/1/input';

  const arr = await inputToArr(inputUrl);

  console.log(sumFuelRequeirements(arr));
};

// tslint:disable-next-line: no-floating-promises
solve();
