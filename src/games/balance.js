// Игра баланс.
import run from '../process';
import randomNumber from '../utils';

const task = 'Balance the given number.';
const minNumber = array => Math.min(...array);
const maxNumber = array => Math.max(...array);
const balance = (newArray) => {
  const numArray = newArray;
  while ((maxNumber(numArray) - minNumber(numArray)) > 1) {
    const minPos = numArray.indexOf(minNumber(numArray));
    const maxPos = numArray.indexOf(maxNumber(numArray));
    numArray[minPos] += 1;
    numArray[maxPos] -= 1;
  }
  return numArray.sort((a, b) => a - b).join('');
};
const numberToNumArray = number => number.split('').map(Number);
const gameData = () => {
  const question = `${randomNumber(10, 9999)}`;
  const trueAnswer = balance(numberToNumArray(question));
  return [question, trueAnswer];
};

export default () => run(gameData, task);
