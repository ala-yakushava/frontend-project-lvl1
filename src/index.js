import readlineSync from 'readline-sync';

const greet = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};

export default greet;
