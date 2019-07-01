import getRandomInt from '../utilites';

const positiveResponse = 'yes';
const negativeResponse = 'no';
const descriptionGame = `Answer "${positiveResponse}" if number even otherwise answer "${negativeResponse}".`;

const isEven = number => number % 2 === 0;

const getPuzzle = () => {
  const currentQuestion = getRandomInt();
  const currentAnswer = isEven(currentQuestion) ? positiveResponse : negativeResponse;

  return [currentQuestion, currentAnswer];
};

export { getPuzzle, descriptionGame };
