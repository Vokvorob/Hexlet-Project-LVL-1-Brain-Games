import launchGame from '../launchGame';
import randomNum from '../utils';

const description = 'What number is missing in the progression?';

const progression = (initialNumber, progressionStep, lengthProgression, hiddenElementPosition) => {
  const arr = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    arr.push(initialNumber + progressionStep * i);
    if (i === hiddenElementPosition) {
      arr[hiddenElementPosition] = '..';
    }
  }
  return arr;
};
const lengthProgression = 10;

const game = () => {
  const initialNumber = randomNum(1, 10);
  const progressionStep = randomNum(4, 12);
  const hiddenElementPosition = randomNum(0, lengthProgression - 1);
  const correctAnswer = String(initialNumber + progressionStep * hiddenElementPosition);
  const question = progression(initialNumber, progressionStep, lengthProgression, hiddenElementPosition).join(' ');
  return [question, correctAnswer];
};

export default () => launchGame(game, description);
