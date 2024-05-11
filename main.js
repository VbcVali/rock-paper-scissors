

const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Rcok, Paper, Scissors ?").toLowerCase();
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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));