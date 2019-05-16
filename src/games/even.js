import launchGame from '../common/launchGame'
import { randomNum } from '../common/utils'

const checkEven = (num) => num % 2 === 0 ? 'yes' : 'no';

const game = () => {
    const question = randomNum(1, 20);
    const correctAnswer = checkEven(question);
    return [question, correctAnswer];
};

export default () => launchGame(game, 'Answer "yes" if number even otherwise answer "no".');