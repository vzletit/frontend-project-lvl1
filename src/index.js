import readlineSync from 'readline-sync';
import { welcomeUser, userName } from './cli.js';

export default (answersArray, task) => {
  console.log(welcomeUser());
  console.log(task);

  for (let i = 0; i < answersArray.length; i += 1) {
    console.log(`Question: ${answersArray[i].question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answersArray[i].rightAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answersArray[i].rightAnswer}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
