import theGame from './index.js';

const taskMessage = 'What is the result of the expression?';

export default () => {
  const questionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    const random = (limit) => Math.floor(Math.random() * limit);
    const a = random(20);
    const b = random(10);
    const signsArray = ['-', '+', '*'];
    const sign = signsArray[random(signsArray.length)];
    const question = `${a} ${sign} ${b}`;
    const rightAnswer = String(eval(question));
    questionsArray.push({
      question,
      rightAnswer,
    });
  }
  return theGame(questionsArray, taskMessage);
};
