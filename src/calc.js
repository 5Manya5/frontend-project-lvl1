import readlineSync from 'readline-sync';

const ops = ['+', '-', '*'];
const opindex = Math.floor(Math.random() * 3);
const operator = ops[opindex];
const calc = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let task;
  let answer;
  let trueAnswer;
  let n = 0;
  do {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    task = `${number1} ${operator} ${number2}`;
    if (operator === '-') {
      trueAnswer = number1 - number2;
    } else if (operator === '+') {
      trueAnswer = number1 + number2;
    } else {
      trueAnswer = number1 * number2;
    }
    answer = readlineSync.question(`Question: ${task}\nYour answer: `);
    if (Number(answer) === Number(trueAnswer)) {
      console.log('Correct!');
      n += 1;
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`));
    }
  } while (Number(answer) === Number(trueAnswer) && n !== 3);
  return console.log(`Congratulations, ${name}!`);
};
export default calc;
