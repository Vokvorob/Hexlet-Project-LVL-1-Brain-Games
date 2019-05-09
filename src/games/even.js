import readlineSync from 'readline-sync';
import greetings, { name } from '../greetings';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const checkEven = (num) => num % 2 === 0 ? 'yes' : 'no';
const logResult = (isAnswerCorrect, inputAnswer, correctAnswer) => {
    if (isAnswerCorrect) console.log('Correct!')
    else console.log(`'${inputAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
};

const launchGame = times => {
    let isWin = true
    for (let i = 0; i < times; i++) {
        const num = randomNum(1, 20);
        console.log(`Question: ${num}`)
        const inputAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = checkEven(num);
        const isAnswerCorrect = inputAnswer === correctAnswer;
        logResult(isAnswerCorrect, inputAnswer, correctAnswer);
        if (!isAnswerCorrect) {
            isWin = false;
            break;
        }
    }
    return isWin;

}

export default () => {
    greetings('Answer "yes" if number even otherwise answer "no".');
    console.log('');
    const isWin = launchGame(3);
    if (isWin) console.log(`Congratulations, ${name}!`);
    else console.log(`Let's try again, ${name}!`);
};