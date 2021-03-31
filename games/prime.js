import readlineSync from 'readline-sync';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let answer;
  let trueAnswer;
  let n = 0;
  do {
    const number = Math.floor(Math.random() * 30);
    trueAnswer = isPrime(number);
    answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (answer === trueAnswer) {
      n += 1;
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`));
    }
  } while (answer === trueAnswer && n !== 3);
  return console.log(`Congratulations, ${name}!`);
};
export default prime;
