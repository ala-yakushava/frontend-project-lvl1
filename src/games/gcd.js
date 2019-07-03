import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const createGcdTask = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const currentQuestion = `${num1} ${num2}`;
  const currentAnswer = gcd(num1, num2);

  return [currentQuestion, currentAnswer];
};

export default () => flow(createGcdTask, descriptionGame);
