import readlineSync from 'readline-sync';

function commonDivisor(number1, number2) {
  const dividers = [];
  const number = number1 < number2 ? number1 : number2;
  for (let i = 1; i <= number; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      dividers.push(i);
    }
  }
  const sortArr = dividers.sort();
  return sortArr[sortArr.length - 1];
}
function nod() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers');
  let answer;
  let trueAnswer;
  let n = 0;
  do {
    const number1 = Math.floor(1 + Math.random() * 20);
    const number2 = Math.floor(Math.random() * 20);
    answer = readlineSync.question(`Question: ${number1} ${number2}\nYour answer: `);
    trueAnswer = commonDivisor(number1, number2);
    if (Number(answer) === trueAnswer) {
      n += 1;
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`));
    }
  } while (Number(answer) === trueAnswer && n !== 3);
  return console.log(`Congratulations, ${name}!`);
}

export default nod;
