// Игра проверка на четность.
import run from '../process';
import randomNumber from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no"';
const isEven = number => ((number % 2) === 0);
const gameData = () => {
  const question = `${randomNumber(0, 50)}`;
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => run(gameData, task);
