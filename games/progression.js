import readlineSync from 'readline-sync';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let answer;
  let trueAnswer;
  let n = 0;
  do {
    let number = Math.floor(Math.random() * 20);
    const index = Math.floor(1 + Math.random() * 9);
    const counter = Math.floor(1 + Math.random() * 5);
    const arr = [];
    for (let i = 0; i < 10; i += 1) {
      arr.push(number);
      number += counter;
    }
    trueAnswer = arr[index];
    arr[index] = '..';
    answer = readlineSync.question(`Question: ${arr.join(' ')}\nYour answer: `);
    if (Number(answer) === trueAnswer) {
      n += 1;
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`));
    }
  } while (Number(answer) === trueAnswer && n !== 3);
  return console.log(`Congratulations, ${name}!`);
};
export default progression;
