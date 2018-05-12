// Игра арифметическая прогрессия.
import run from '../process';
import randomNumber from '../utils';

const task = 'What number is missing in this progression?';
const makeArray = () => {
  const arr = [...new Array(10)];
  const up = randomNumber(1, 10);
  const start = randomNumber(1, 10);
  return arr.map((num, index) => ((index > 0) ? start + (up * index) : start));
};
const gameData = () => {
  const newArray = makeArray();
  const answerPos = randomNumber(0, 9);
  const trueAnswer = `${newArray[answerPos]}`;
  newArray[answerPos] = '..';
  const question = newArray.join(' ');
  return [question, trueAnswer];
};

export default () => run(gameData, task);
