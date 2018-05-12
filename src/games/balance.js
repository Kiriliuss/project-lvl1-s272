// Игра баланс.
import run from '../process';
import randomNumber from '../utils';

const task = 'Balance the given number.';
const balance = (array) => {
  const sortArray = array.sort((a, b) => a - b);
  const minNumber = sortArray[0];
  const maxNumber = sortArray[sortArray.length - 1];
  if (maxNumber - minNumber <= 1) {
    return sortArray.join('');
  }
  sortArray[0] += 1;
  sortArray[sortArray.length - 1] -= 1;
  return balance(sortArray);
};
const numberToNumArray = number => number.split('').map(Number);
const gameData = () => {
  const question = `${randomNumber(10, 9999)}`;
  const trueAnswer = balance(numberToNumArray(question));
  return [question, trueAnswer];
};

export default () => run(gameData, task);
