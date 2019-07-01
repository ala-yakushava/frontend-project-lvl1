import getRandomInt from '../utilites';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  return a * b;
};

const getPuzzle = () => {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length)];
  const currentQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const currentAnswer = calculate(firstNumber, secondNumber, operator);

  return [currentQuestion, currentAnswer];
};

export { getPuzzle, descriptionGame };
