const startGameBtn = document.getElementById('start-game-btn');
// const start = function() {
//     console.log("Game is starting ...");
//     //alert('Hi');
// };
const person = {
    name: 'Rohit',
    greet: function greet() {
        console.dir(typeof startGame)
    }
}

startGameBtn.addEventListener('click',function() 
                    { console.log("Game is starting inside ...");});