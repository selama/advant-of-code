const getInstructionType = item => item.substring(0, 1);

const getInstructionValue = item => Number(item.substring(1));

const getInstructions = arr => {
  return arr.map(item => ({
    type: getInstructionType(item),
    value: getInstructionValue(item),
  }));
};

const getNextPosition = (currentPosition, currentInstructionType) => {
  switch (currentInstructionType) {
    case 'U':
      return { x: currentPosition.x, y: currentPosition.y + 1 };
    case 'D':
      return { x: currentPosition.x, y: currentPosition.y - 1 };
    case 'L':
      return { x: currentPosition.x - 1, y: currentPosition.y };
    case 'R':
      return { x: currentPosition.x + 1, y: currentPosition.y };
    default:
      return { x: 0, y: 0 };
  }
};

const stringifyPosition = position => `${position.x}_${position.y}`;

const updateInstruction = currentInstruction => ({
  type: currentInstruction.type,
  value: currentInstruction.value - 1,
});

const getPositions = (arr, currentPosition) => {
  let steps = 0;
  let insructionsArr = getInstructions(arr);
  const positions = {};
  while (insructionsArr.length) {
    steps++;
    const [currentInstruction, ...restOfInstructions] = insructionsArr;
    currentPosition = getNextPosition(currentPosition, currentInstruction.type);
    if (!positions[stringifyPosition(currentPosition)]) {
      positions[stringifyPosition(currentPosition)] = steps;
    }
    const updatedInstruction = updateInstruction(currentInstruction);
    if (updatedInstruction.value) {
      insructionsArr = [updatedInstruction, ...restOfInstructions];
    } else {
      insructionsArr = [...restOfInstructions];
    }
  }
  return positions;
};

const getCrosses = (arr1Positions, arr2Positions) => {
  return Object.keys(arr1Positions).filter(pos1 => !!arr2Positions[pos1]);
};

const getCrossesSteps = (crosses, arr1Positions, arr2Positions) => {
  return crosses.map(cross => arr1Positions[cross] + arr2Positions[cross]);
};

const getMinimumSteps = stepsArr => {
  const [first, ...restOfStepsArr] = stepsArr;
  let min = first;
  restOfStepsArr.forEach(count => {
    min = Math.min(min, count);
  });
  return min;
};

export const getResult = (arr1, arr2) => {
  const arr1Positions = getPositions(arr1, { x: 0, y: 0 });
  const arr2Positions = getPositions(arr2, { x: 0, y: 0 });
  const crosses = getCrosses(arr1Positions, arr2Positions);
  const stepsArr = getCrossesSteps(crosses, arr1Positions, arr2Positions);
  return getMinimumSteps(stepsArr);
};
