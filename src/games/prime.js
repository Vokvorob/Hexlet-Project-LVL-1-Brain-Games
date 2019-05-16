import launchGame from '../common/launchGame'
import { randomNum } from '../common/utils'

const isPrime = num => {
    for (let i = 2; i < num; i++) {
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

export default () => launchGame(game, 'Answer "yes" if given number is prime. Otherwise answer "no".');