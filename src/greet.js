import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
};

export default greet;
