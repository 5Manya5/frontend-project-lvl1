import readlineSync from 'readline-sync';

export const getToKnowTheUser = () => {
  const name = readlineSync.question('Могу я узнать ваше имя?');
  console.log ('Здравствуй ' + name + '!');
};
