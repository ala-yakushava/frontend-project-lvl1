import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const createPrimeTask = () => {
  const currentQuestion = getRandomInt(2, 100);
  const currentAnswer = isPrime(currentQuestion) ? 'yes' : 'no';

  return [currentQuestion, currentAnswer];
};

export default () => flow(createPrimeTask, descriptionGame);
