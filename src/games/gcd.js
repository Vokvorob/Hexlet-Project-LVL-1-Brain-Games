import launchGame from '../launchGame';
import { randomNum } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findDivisor = (a, b) => {
  const div = a < b ? a : b;
  const iter = (num) => {
    if (a % num === 0 && b % num === 0) {
      return num;
    }
    return iter(num - 1);
  };
  return iter(div);
};

const game = () => {
  const a = randomNum(1, 100);
  const b = randomNum(1, 100);
  const correctAnswer = String(findDivisor(a, b));
  const question = `${a} ${b}`;
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
