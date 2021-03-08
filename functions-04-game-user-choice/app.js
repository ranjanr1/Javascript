const startGameBtn = document.getElementById('start-game-btn'); 
let gameIsRunning =false;
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

const getComputerChoice = function() {
      const valueRandom = Math.random();
      if(valueRandom <.34)
         return ROCK;      
      else if( valueRandom>.34 && valueRandom <.67)
        return PAPER;      
      else 
        return SCISSORS;      
}

startGameBtn.addEventListener('click', function() {
  if(gameIsRunning)
    return;
  console.log('Game is starting...');
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
});
