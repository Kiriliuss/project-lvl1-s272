// Игра баланс.
import run from '../process';
import randomNumber from '../utils';

const task = 'Balance the given number.';
const isNoBalance = array => ((Math.max(...array) - Math.min(...array)) > 1);
const balance = (newArray) => {
  const numArray = newArray;
  while (isNoBalance(numArray)) {
    const minPos = numArray.indexOf(Math.min(...numArray));
    const maxPos = numArray.indexOf(Math.max(...numArray));
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
