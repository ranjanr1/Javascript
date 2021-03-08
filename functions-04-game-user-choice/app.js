const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK},${PAPER} or ${SCISSORS} ? `,'').toUpperCase();
    if(selection != ROCK && selection != PAPER 
      && selection != SCISSORS)
       alert(`Invalid Choice! We chose ${ROCK} for you!`); 
      else
      alert(`You chose ${selection} for yourself!`); 
};

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
});
