import readlineSync from 'readline-sync';

const gameRounds = 3;
const launchGame = (game) => {
  for (let i = 0; i < gameRounds; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = inputAnswer === correctAnswer;
    if (isAnswerCorrect) console.log('Correct!');
    else {
      console.log(`'${inputAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return false;
    }
  }
  return true;
};

export default (game, description) => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  const hasWon = launchGame(game);
  if (hasWon) console.log(`Congratulations, ${name}!`);
  else {
    console.log(`Let's try again, ${name}!`);
  }
};
