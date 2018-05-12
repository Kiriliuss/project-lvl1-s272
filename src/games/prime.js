// Игра простое ли число?
import run from '../process';
import randomNumber from '../utils';

const task = 'Answer "yes" if number prime otherwise answer "no"';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const maxDivisor = Math.round(Math.sqrt(number));
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if ((number % divisor) === 0) {
      return false;
    }
  }
  return true;
};
const gameData = () => {
  const question = `${randomNumber(0, 50)}`;
  const trueAnswer = isPrime(Number(question)) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => run(gameData, task);
