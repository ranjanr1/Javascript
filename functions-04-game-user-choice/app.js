const startGameBtn = document.getElementById('start-game-btn'); 
const AddGameBtn = document.getElementById('Add-game-btn'); 
const SubtractGameBtn = document.getElementById('Subtract-game-btn'); 

let gameIsRunning =false;
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'Draw';
const RESULT_CWIN = 'Computer';
const RESULT_PWIN = 'Player';

const getPlayerChoice = ()=> {
    const selection = prompt(`${ROCK},${PAPER} or ${SCISSORS} ? `,'').toUpperCase();
    if(selection != ROCK && selection != PAPER 
      && selection != SCISSORS)
       alert(`Invalid Choice! We chose ${ROCK} for you!`); 
       else
       return selection;
     
};

const getComputerChoice = () =>{
      const valueRandom = Math.random();
      if(valueRandom <.34)
         return ROCK;      
      else if( valueRandom>.34 && valueRandom <.67)
        return PAPER;      
      else 
        return SCISSORS;      
}

const getWinner = (cChoice,pChoice)=> {
  if(pChoice === cChoice)
    return RESULT_DRAW;
  else if(cChoice === ROCK && pChoice ===PAPER ||
    cChoice===PAPER && cChoice ===SCISSORS ||
    cChoice === SCISSORS && pChoice ===ROCK)
    return RESULT_PWIN;
  else
      return RESULT_CWIN; 
}

const startGame = () =>{
  if(gameIsRunning)
  return;
console.log('Game is starting...');
gameIsRunning = true;
const playerSelection = getPlayerChoice();
const computerselection = getComputerChoice();
const winner = getWinner(playerSelection,computerselection);
console.log(`Player Selected ${playerSelection}`);
console.log(`Computer Selected ${computerselection}`);
console.log(`Winner is ${winner}`);
gameIsRunning = false;
}
startGameBtn.addEventListener('click', startGame);

const sumUp = (resultHandler,...numbers)=>{
  let sum = 0;
  for (const num of numbers){
    sum+= num;
  }
  resultHandler(sum,'Add');  
}
const subtractUp = (resultHandler,...numbers)=>{
  let sum = 0;
  for(const num of numbers){
    sum -= num;
  }
  resultHandler(sum,'Subtract');
}
const showResult = (result,operation)=>{
  alert(`The result after ${operation} all numbers is: ${result}`);
}
AddGameBtn.addEventListener('click',sumUp.bind(this,showResult,1,2,10,4));
SubtractGameBtn.addEventListener('click',subtractUp.bind(this,showResult,10,2));





