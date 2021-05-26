import theGame from './index.js';

const taskMessage = 'Find the greatest common divisor of given numbers.';

export default () => {
  const questionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    const random = (limit) => Math.floor(Math.random() * limit);
    const num1 = random(100);
    const num2 = random(30);
    const question = `${num1} ${num2}`;
    const GCD = (a, b) => {
      if (!b) {
        return a;
      }

      return GCD(b, a % b);
    };
    const rightAnswer = String(GCD(num1, num2));
    questionsArray.push({
      question,
      rightAnswer,
    });
  }
  return theGame(questionsArray, taskMessage);
};
