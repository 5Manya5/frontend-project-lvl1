import readlineSync from 'readline-sync';

const getToKnowTheUser = () => {
  const name = readlineSync.question('Могу я узнать ваше имя?');
  console.log(`Здравствуй ${name}!`);
};
export default getToKnowTheUser;
