import readlineSync from 'readline-sync';

const launchGame = (gameRounds, game) => {
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

export default (game, gameRounds, description) => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  return launchGame(gameRounds, game) ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};
