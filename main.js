

const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Rock, Paper, Scissors ?").toLowerCase();
        if (OPTIONS.includes(choice) === true) {
            return choice;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return ("Tie!");
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore ++;
            return "You lose! Paper beats Rock";
        }
        else {
            humanScore ++;
            return "You win! Rock beats Scissors";

        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore ++;
            return "You win! Paper beats Rock";
        }

        else {
            computerScore ++;
            return "You lose! Scissors beats Paper";
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore ++;
            return "You Win! Scissors beats Paper";
        }

        else {
            computerScore++;
            return "You lose! Rock beats Scissors";
        }
    }
}

function playGame() {
    // Instead of moving playRound inside, i call it 5 times with a for loop
    // Hardcoded 5 to match the assignment requirements
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore === computerScore) {
        return "Tie!";
    }

    else if (humanScore > computerScore) {
        return "You win!";
    }

    else {
        return "You lose!";
    }
}

console.log(playGame());
