import readlineSync from 'readline-sync';

// Игровой процесс
export default (gameData, task) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(task);
  for (let numerOfQuestions = 3; numerOfQuestions !== 0; numerOfQuestions -= 1) {
    const [question, trueAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.
  Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
};
