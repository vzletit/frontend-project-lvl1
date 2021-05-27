import theGame from '../index.js';
import random from '../random.js';

const taskMessage = 'What number is missing in the progression?';

export default () => {
  const questionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionStartNumber = random(1, 10);
    const progressionStep = random(2, 6);
    const progressionLength = random(5, 10);
    const progressionMissedNumber = random(0, progressionLength - 1);

    const progression = [];
    let num = progressionStartNumber;
    for (let j = 0; j < progressionLength; j += 1) {
      num += progressionStep;
      progression.push(num);
    }
    const rightAnswer = String(progression[progressionMissedNumber]);
    progression[progressionMissedNumber] = '..';
    const question = progression.join(' ');

    questionsArray.push({
      question,
      rightAnswer,
    });
  }
  return theGame(questionsArray, taskMessage);
};
