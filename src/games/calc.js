import launchGame from '../launchGame';
import { randomNum } from '../utils';

const description = 'What is the result of the expression?';

const randomOperator = () => {
  const operatorIndex = randomNum(1, 3);
  switch (operatorIndex) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '+';
  }
};

const calc = (operator, a, b) => {
  switch (operator) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a + b;
  }
};

const game = () => {
  const a = randomNum(1, 20);
  const b = randomNum(1, 20);
  const operator = randomOperator();
  const correctAnswer = String(calc(operator, a, b));
  const question = `${a} ${operator} ${b}`;
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
