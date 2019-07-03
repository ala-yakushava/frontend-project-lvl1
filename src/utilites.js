const getRandomInt = (min = 1, max = 100) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export default getRandomInt;
