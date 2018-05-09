// Игра наибольший общий делитель
import { randomNumber, run } from '..';

const task = 'Find the greatest common divisor of given numbers.';
const gameData = () => {
  const operandLeft = randomNumber(1, 100);
  const operandRight = randomNumber(1, 100);
  const question = `${operandLeft} ${operandRight}`;
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const trueAnswer = `${gcd(operandLeft, operandRight)}`;
  return [question, trueAnswer];
};

export default () => run(gameData, task);
