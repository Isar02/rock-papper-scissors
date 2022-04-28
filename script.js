// Re-done code from scratch because of errors

// A computerPlay function is created
let choice = ['rock', 'paper', 'scissor'];
function computerPlay() {
    let value = choice[Math.floor(Math.random() * choice.length)];
    // console.log(`Computer has picked: ${value}`);
    return value;
}
let computerAnswer = `${computerPlay()}`

const foo = function playerSelection() {
    let answer = prompt('rock, paper or scissor?');
    return answer;
}

let answer = foo();
let playerAnswer = answer.toLowerCase();

function start() {
    computerPlay();
    if (playerAnswer === 'rock' && computerAnswer === 'rock' ||
        playerAnswer === 'paper' && computerAnswer === 'paper' ||
        playerAnswer === 'scissor' && computerAnswer === 'scissor') {
        console.log(`${playerAnswer} equals ${computerAnswer}. It's a DRAW!`)
    } else if (playerAnswer === 'rock' && computerAnswer === 'scissor' ||
        playerAnswer === 'paper' && computerAnswer === 'rock' ||
        playerAnswer === 'scissor' && computerAnswer === 'paper') {
        console.log(`${playerAnswer} beats ${computerAnswer}. You win!`)
    } else if (playerAnswer === 'rock' && computerAnswer === 'paper' ||
        playerAnswer === 'paper' && computerAnswer === 'scissor' ||
        playerAnswer === 'scissor' && computerAnswer === 'rock') {
        console.log(`${playerAnswer} loses to ${computerAnswer}. You lose!`)
    } else if (playerAnswer === ' ' || playerAnswer === 'null' || playerAnswer === 'NaN') {
        console.log(`field empty`)
    }
};
start();