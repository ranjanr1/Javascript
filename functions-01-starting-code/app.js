const startGameBtn = document.getElementById('start-game-btn');
function startGame() {
    console.log("Start the game");
    //alert('Hi');
}
// const person = {
//     name: 'Rohit',
//     greet: function greet() {
//         console.log('Hello There');
//     }
// }
console.log(typeof startGame)
startGameBtn.addEventListener('click',startGame);