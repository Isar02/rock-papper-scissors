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

// A round play function is created
function roundPlay(playerSelection, computerSelection) {
    playerSelection = playerChoice();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log(`You selected: ${playerSelection}.` + ` The computer selected: ${computerSelection}.` + ` Tie!`);
        return;

    } else if (playerSelection === `rock` && computerSelection === `scissors` ||
        playerSelection === `paper` && computerSelection === `rock` ||
        playerSelection === `scissors` && computerSelection === `paper`) {
        console.log(`You selected: ${playerSelection}.` + ` The computer selected: ${computerSelection}.` + ` Score goes to player!`);
        playerScore += 1;
        return;

    } else if (playerSelection === `scissors` && computerSelection === `rock` ||
        playerSelection === `rock` && computerSelection === `paper` ||
        playerSelection === `paper` && computerSelection === `scissors`) {
        console.log(`You selected: ${playerSelection}.` + ` The computer selected: ${computerSelection}.` + ` Score goes to computer!`);
        computerScore += 1;
        return;

    } else {
        console.log(`You have to pick between rock, paper and scissors!`);
    }
}