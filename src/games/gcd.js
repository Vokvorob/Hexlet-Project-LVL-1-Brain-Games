import launchGame from '../launchGame';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (a, b) => {
  const div = Math.min(a, b);
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
  const correctAnswer = String(findGreatestCommonDivisor(a, b));
  const question = `${a} ${b}`;
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
