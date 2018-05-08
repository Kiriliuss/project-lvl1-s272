// Игра калькулятор.
import readlineSync from 'readline-sync';
import hello from '..';
import getRandomNumber from '../random';

const userName = hello();
console.log('What is the result of the expression?\n');
const operations = ('*+-');
const numberStr = () => getRandomNumber(2);
const task = (num1, num2, operation) => {
  switch (operation) {
    case '*':
      return `${num1 * num2}`;
    case '+':
      return `${num1 + num2}`;
    default:
      return `${num1 - num2}`;
  }
};
const questions = (i) => {
  if (i === 3) {
    return console.log(`\nCongratulations, ${userName}!`);
  }
  const operationsRandom = operations[numberStr()];
  const leftNumber = getRandomNumber(50);
  const rightNumber = (operationsRandom === '*') ?
    getRandomNumber(10) : getRandomNumber(50);
  console.log(`Question: ${leftNumber} ${operationsRandom} ${rightNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const trueAnswer = task(leftNumber, rightNumber, operationsRandom);
  if (trueAnswer === answer) {
    console.log('Correct!');
    return questions(i + 1);
  }
  return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.
Let's try again, ${userName}!`);
};
export default questions;
