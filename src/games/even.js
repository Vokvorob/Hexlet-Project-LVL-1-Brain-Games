import launchGame from '../launchGame';
import { randomNum, isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const question = randomNum(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
