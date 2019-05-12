import launchGame from '../common/launchGame'

const randomNum = (min, max) => Math.floor(Math.random() * max) + min;
const gcd = (a, b) => {
    let div = a < b ? a : b;
    const iter = (div) => {
        if (a % div === 0 && b % div === 0) {
            return div;
        }
        return iter(div - 1);
    }
    return iter(div);
};

const game = () => {
    const a = randomNum(1, 100);
    const b = randomNum(1, 100);
    const correctAnswer = String(gcd(a, b));
    const question = `${a} ${b}`;
    return [question, correctAnswer];
};

export default () => {
    launchGame(game, 'Find the greatest common divisor of given numbers.');
};