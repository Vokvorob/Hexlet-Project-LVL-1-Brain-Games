import readlineSync from 'readline-sync';

export let name;
export default (gameDescription) => {
    console.log('Welcome to the Brain Games!');
    if (gameDescription) console.log(gameDescription);
    console.log('');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
};