#!/usr/local/bin/node

import name from '..';
console.log('Welcome to the Brain Games!');
const nameUser = name.question('May I have your name? ');
console.log('Hello, ' + nameUser + '!');