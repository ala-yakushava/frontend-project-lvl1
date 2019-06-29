#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from '..';

const min = 1;
const max = 100;
const positiveResponse = 'yes';
const negativeResponse = 'no';
const maxRepeat = 3;
let currentRepeat = 0;

console.log(`Welcome to the Brain Games!\nAnswer "${positiveResponse}" if number even otherwise answer "${negativeResponse}".\n`);

const playerName = greet();

const getRandomInt = () => Math.floor(Math.random() * (max - min)) + min;

const getAnswer = (randomNumber) => {
  const isEven = randomNumber % 2 === 0;
  return isEven ? positiveResponse : negativeResponse;
};

const brainEven = () => {
  const randomNumber = getRandomInt();
  console.log(`Question: ${randomNumber}`);
  const actual = readlineSync.question('Your answer: ');
  const correctAnswer = getAnswer(randomNumber);
  currentRepeat += 1;

  if (actual !== correctAnswer) {
    console.log(`"${actual}" is wrong answer ;(.\nCorrect answer was "${correctAnswer}". Let's try again, ${playerName}!`);
    return null;
  }

  console.log('Correct!');

  if (currentRepeat === maxRepeat) {
    console.log(`Congratulations, ${playerName}!`);
    return null;
  }

  return brainEven();
};

brainEven();
