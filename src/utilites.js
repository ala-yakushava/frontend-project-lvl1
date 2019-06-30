const minNumber = 1;
const maxNumber = 100;

const getRandomInt = (min = minNumber, max = maxNumber) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export default getRandomInt;
