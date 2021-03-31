import readlineSync from 'readline-sync';

function getUserAnswer() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let number;
  let answer;
  let trueAnswer;
  let n = 0;
  do {
    number = Math.floor(Math.random() * 50);
    answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    trueAnswer = (number % 2) === 0 ? 'yes' : 'no';
    const falseAnswer = (answer === 'yes') ? 'no' : 'yes';
    if (answer === trueAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${falseAnswer}'.\nLet's try again, ${name}!`));
    }
  } while (answer === trueAnswer && n !== 3);
  return console.log(`Congratulations, ${name}!`);
}

export default getUserAnswer;
