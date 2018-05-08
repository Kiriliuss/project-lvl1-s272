// Игра проверка на четность.
import readlineSync from 'readline-sync';
import hello from '..';
import getRandomNumber from '../random';

const userName = hello();
console.log('Answer "yes" if number even otherwise answer "no".\n');
const task = number => (((number % 2) === 0) ? 'yes' : 'no');
const questions = (i) => {
  if (i === 3) {
    return console.log(`\nCongratulations, ${userName}!`);
  }
  const randomNumber = getRandomNumber(50);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const trueAnswer = task(randomNumber);
  if (trueAnswer === answer) {
    console.log('Correct!');
    return questions(i + 1);
  }
  return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.
Let's try again, ${userName}!`);
};
export default questions;
