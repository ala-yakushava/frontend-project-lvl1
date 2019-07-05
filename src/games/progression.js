import getRandomInt from '../utilites';
import flow from '..';

const progressionLength = 10;
const descriptionGame = 'What number is missing in the progression?';

const getProgression = (start, diff) => {
  let series = [];
  for (let i = 0; i < progressionLength; i += 1) {
    series = [...series, start + diff * i];
  }

  return series;
};

const createProgressionTask = () => {
  const start = getRandomInt();
  const diff = getRandomInt(1, 9);
  const skipIndex = getRandomInt(1, 9);
  const series = getProgression(start, diff);
  const answer = series.splice(skipIndex, 1, '..');
  const question = series.join(' ');

  return [question, answer];
};

export default () => flow(createProgressionTask, descriptionGame);
