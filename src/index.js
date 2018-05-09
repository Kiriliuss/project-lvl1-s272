import readlineSync from 'readline-sync';

// Функция вычисляет случайное целое число от min до max
export const randomNumber = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

// Функция по умолчанию - приветствие
const hello = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default hello;

// Принимаем данные и играем (общая функция для всех игр)
const run = (gameData, task) => {
  const userName = hello();
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const [question, trueAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.
  Let's try again, ${userName}!`);
      return null;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
  return null;
};
export { run };
