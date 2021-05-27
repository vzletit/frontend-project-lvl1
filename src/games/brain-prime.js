import theGame from '../index.js';
import random from '../random.js';

const taskMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const questionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    const question = random(3, 100);

    const isPrime = (num) => {
      for (let j = 2; j < num;) {
        if (num % j === 0) {
          return false;
        }
        j += 1;
      }
      return true;
    };

    const rightAnswer = (isPrime(question)) ? 'yes' : 'no';

    questionsArray.push({
      question,
      rightAnswer,
    });
  }
  return theGame(questionsArray, taskMessage);
};
