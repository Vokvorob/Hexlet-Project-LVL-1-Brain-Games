import launchGame from '../common/launchGame'
import { randomNum } from '../common/utils'

const findDivisor = (div, a, b) => {
    if (a % div === 0 && b % div === 0) {
        return div;
    }
    return findDivisor(div - 1, a, b);
};

const game = () => {
    const a = randomNum(1, 100);
    const b = randomNum(1, 100);
    const correctAnswer = String(findDivisor(a < b ? a : b, a, b));
    const question = `${a} ${b}`;
    return [question, correctAnswer];
};

export default () => launchGame(game, 'Find the greatest common divisor of given numbers.');