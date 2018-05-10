// Игра наибольший общий делитель
import run from '../process';
import randomNumber from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const gameData = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const trueAnswer = `${gcd(num1, num2)}`;
  return [question, trueAnswer];
};

export default () => run(gameData, task);
