// A computerPlay function is created
function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    // The computer randomly outputs their result (Rock, Paper or Scissors)
    let randomNumber = computerChoice[Math.floor(Math.random() * 3)];
    // logging the output
    console.log(`The computer has chosen: ${randomNumber}`);

    return randomNumber;
}

// Testing computerPlay function computerPlay();