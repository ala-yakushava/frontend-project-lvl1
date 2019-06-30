import getRandomInt from '../utilites';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getQuestion = () => `${getRandomInt()} ${operators[getRandomInt(0, operators.length)]} ${getRandomInt()}`;

const getAnswer = (currentQuestion) => {
  const arr = currentQuestion.split(' ');
  const firstNumber = +arr[0];
  const secondNumber = +arr[2];
  const operator = arr[1];
  let result;

  if (operator === '+') result = firstNumber + secondNumber;
  else if (operator === '-') result = firstNumber - secondNumber;
  else result = firstNumber * secondNumber;

  return `${result}`;
};

export { getQuestion, getAnswer, descriptionGame };
