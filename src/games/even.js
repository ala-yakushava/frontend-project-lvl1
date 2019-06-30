import getRandomInt from '../utilites';

const positiveResponse = 'yes';
const negativeResponse = 'no';
const descriptionGame = `Answer "${positiveResponse}" if number even otherwise answer "${negativeResponse}".`;

const getQuestion = () => getRandomInt();

const getAnswer = (currentQuestion) => {
  const isEven = currentQuestion % 2 === 0;
  return isEven ? positiveResponse : negativeResponse;
};

export { getQuestion, getAnswer, descriptionGame };
