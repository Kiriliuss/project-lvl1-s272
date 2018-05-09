// Игра калькулятор.
import { randomNumber, run } from '..';

const task = 'What is the result of the expression?';
const gameData = () => {
  const operations = ('*+-');
  const numberStr = () => randomNumber(0, 2);
  const operationsRandom = operations[numberStr()];
  const leftOperand = randomNumber(0, 50);
  const rightOperand = (operationsRandom === '*') ?
    randomNumber(0, 10) : randomNumber(0, 50);
  const question = `${leftOperand} ${operationsRandom} ${rightOperand}`;
  const getAnswer = (num1, num2, operation) => {
    switch (operation) {
      case '*':
        return `${num1 * num2}`;
      case '+':
        return `${num1 + num2}`;
      default:
        return `${num1 - num2}`;
    }
  };
  const trueAnswer = getAnswer(leftOperand, rightOperand, operationsRandom);
  return [question, trueAnswer];
};

export default () => run(gameData, task);
