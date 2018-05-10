// Функция вычисляет случайное целое число от min до max
const randomNumber = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;
export default randomNumber;
