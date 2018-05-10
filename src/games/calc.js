// Игра калькулятор.
import run from '../process';
import randomNumber from '../utils';

const task = 'What is the result of the expression?';
const calc = (num1, num2, operation) => {
  switch (operation) {
    case '*':
      return `${num1 * num2}`;
    case '+':
      return `${num1 + num2}`;
    default:
      return `${num1 - num2}`;
  }
};
const gameData = () => {
  const operations = ('*+-');
  const operationsRandom = operations[randomNumber(0, 2)];
  const leftOperand = randomNumber(0, 50);
  const rightOperand = randomNumber(0, 50);
  const question = `${leftOperand} ${operationsRandom} ${rightOperand}`;
  const trueAnswer = calc(leftOperand, rightOperand, operationsRandom);
  return [question, trueAnswer];
};

export default () => run(gameData, task);
