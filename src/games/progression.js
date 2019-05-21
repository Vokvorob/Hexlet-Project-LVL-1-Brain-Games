import launchGame from '../launchGame';
import randomNum from '../utils';

const description = 'What number is missing in the progression?';
const gameRounds = 3;

const progression = (initialNumber, progressionStep, lengthProgression, hiddenElementPosition) => {
  const arr = [initialNumber];
  for (let i = 1; i < lengthProgression; i += 1) {
    arr.push(initialNumber + progressionStep * i);
  }
  arr[hiddenElementPosition] = '..';
  return arr;
};


const game = () => {
  const initialNumber = randomNum(1, 10);
  const progressionStep = randomNum(4, 12);
  const lengthProgression = 10;
  const hiddenElementPosition = randomNum(0, lengthProgression - 1);
  const correctAnswer = String(initialNumber + progressionStep * hiddenElementPosition);
  const question = progression(initialNumber, progressionStep, lengthProgression, hiddenElementPosition).join(' ');
  return [question, correctAnswer];
};

export default () => launchGame(game, gameRounds, description);
