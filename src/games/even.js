import launchGame from '../launchGame';
import randomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const game = () => {
  const question = randomNum(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
