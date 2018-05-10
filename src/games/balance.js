// Игра баланс.
import run from '../process';
import randomNumber from '../utils';

const task = 'Balance the given number.';
const balance = (array) => {
  const sortArray = array.sort((a, b) => a - b);
  const minNumber = Math.min.apply(null, sortArray);
  const maxNumber = Math.max.apply(null, sortArray);
  if (maxNumber - minNumber <= 1) {
    return sortArray.join('');
  }
  sortArray[0] += 1;
  sortArray[sortArray.length - 1] -= 1;
  return balance(sortArray);
};
const numberToNumArray = (number) => {
  const array = number.split('');
  return array.map(Number);
};
const gameData = () => {
  const question = `${randomNumber(10, 9999)}`;
  const trueAnswer = balance(numberToNumArray(question));
  return [question, trueAnswer];
};

export default () => run(gameData, task);
