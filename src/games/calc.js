import launchGame from '../launchGame';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const calc = (a, b) => {
  const randomOperation = randomNum(1, 3);
  switch (randomOperation) {
    case 1:
      return [a * b, `${a} * ${b}`];
    case 2:
      return [a + b, `${a} + ${b}`];
    case 3:
      return [a - b, `${a} - ${b}`];
    default:
      return 'error';
  }
};

const game = () => {
  const a = randomNum(1, 20);
  const b = randomNum(1, 20);
  const [answer, question] = calc(a, b);
  const correctAnswer = String(answer);
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
