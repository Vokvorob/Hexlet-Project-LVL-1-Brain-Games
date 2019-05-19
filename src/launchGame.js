import readlineSync from 'readline-sync';

const launchGame = (name, times, game) => {
  let isWin = true;
  for (let i = 0; i < times; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = inputAnswer === correctAnswer;
    if (isAnswerCorrect) console.log('Correct!');
    else {
      console.log(`'${inputAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      isWin = false;
      break;
    }
  }
  if (isWin) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export default (game, description) => {
  console.log('Welcome to the Brain Games!');
  if (description) console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (game) {
    console.log('');
    launchGame(name, 3, game);
  }
};
