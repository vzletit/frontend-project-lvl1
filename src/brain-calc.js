import theGame from './index.js';
import random from './functions.js';

const taskMessage = 'What is the result of the expression?';

export default () => {
  const questionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    const a = random(0, 20);
    const b = random(0, 10);
    const signsArray = ['-', '+', '*'];
    const sign = signsArray[random(0, signsArray.length - 1)];
    const question = `${a} ${sign} ${b}`;
    const rightAnswer = String(eval(question));
    questionsArray.push({
      question,
      rightAnswer,
    });
  }
  return theGame(questionsArray, taskMessage);
};
