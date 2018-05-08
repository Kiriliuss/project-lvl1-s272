// Игра проверка на четность.
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n`);
console.log('Answer "yes" if number even otherwise answer "no".\n');
const getRandomNumber = () => Math.floor(Math.random() * 51);
const task = number => ((number % 2) === 0);
const questions = (i) => {
  if (i === 3) {
    return console.log(`\nCongratulations, ${userName}!`);
  }
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === 'yes') {
    if (task(randomNumber)) {
      console.log('Correct!');
      return questions(i + 1);
    }
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
  }
  if (answer === 'no') {
    if (!task(randomNumber)) {
      console.log('Correct!');
      return questions(i + 1);
    }
    return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
  }
  return console.log(`'${answer}' is wrong answer ;(.\nLet's try again, ${userName}!`);
};
export default questions;
