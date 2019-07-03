import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'What number is missing in the progression?';

const getProgression = () => {
  const start = getRandomInt();
  const diff = getRandomInt(1, 10);
  const progressionLength = 10;
  let arr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arr = [...arr, start + diff * i];
  }

  return arr;
};

const createProgressionTask = () => {
  const progression = getProgression();
  const skip = getRandomInt(1, 10);
  const currentAnswer = progression.splice(skip, 1, '..');
  const currentQuestion = progression.join(' ');

  return [currentQuestion, currentAnswer];
};

export default () => flow(createProgressionTask, descriptionGame);
