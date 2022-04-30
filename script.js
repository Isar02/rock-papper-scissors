// Re-done code from scratch because of errors
let choice = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

// A player choice function is created
function playerChoice() {
    let playerChoice = prompt(`Choose from Rock, Paper and Scissors!`);
    return playerChoice;
}

// A computer choice function is created
function computerPlay() {
    return choice[Math.floor(Math.random() * choice.length)];
}