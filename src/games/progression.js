import launchGame from '../common/launchGame'
import { randomNum } from '../common/utils'

const progression = (initialNumber, progressionStep) => {
    let arr = [initialNumber];
    for (let i = 1; i < 10; i++) {
        arr.push(progressionStep + arr[i - 1]);
    }
    const missNumberProgression = randomNum(0, 9);
    const correctAnswer = arr[missNumberProgression];
    arr[missNumberProgression] = '..';
    return [arr, correctAnswer];
};


const game = () => {
    const initialNumber = randomNum(1, 10);
    const progressionStep = randomNum(4, 12);
    const [arr, num] = progression(initialNumber, progressionStep);
    const question = arr.join(" ");
    const correctAnswer = String(num);
    return [question, correctAnswer];
};

export default () => launchGame(game, 'What number is missing in the progression?');