// Игра проверка на четность.
import { randomNumber, run } from '..';

const task = 'Answer "yes" if number even otherwise answer "no"';
const gameData = () => {
  const operand = randomNumber(0, 50);
  const question = `${operand}`;
  const isEven = number => ((number % 2) === 0);
  const trueAnswer = isEven(operand) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => run(gameData, task);
