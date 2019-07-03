import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const createEvenTask = () => {
  const currentQuestion = getRandomInt();
  const currentAnswer = isEven(currentQuestion) ? 'yes' : 'no';

  return [currentQuestion, currentAnswer];
};

export default () => flow(createEvenTask, descriptionGame);
