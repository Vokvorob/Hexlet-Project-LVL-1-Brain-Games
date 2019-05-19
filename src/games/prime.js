import launchGame from '../launchGame';
import { randomNum } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const game = () => {
  const question = randomNum(0, 3571);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
