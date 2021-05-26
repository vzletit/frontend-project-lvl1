import theGame from './index.js';

const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const questionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
    questionsArray.push({
      question,
      rightAnswer,
    });
  }

  return theGame(questionsArray, taskMessage);
};
