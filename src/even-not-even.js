import readlineSync from 'readline-sync';

export default (userName) => {
  const isNumEvenYesNo = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  const random = (maxNum) => Math.floor(Math.random() * maxNum);

  do {
    const num = random(100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === isNumEvenYesNo(num)) {
      i += 1;
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${isNumEvenYesNo(num)}'.\nLet's try again, ${userName}!`;
    }
  } while (i < 3);

  return `Congratulations, ${userName}!`;
}
