

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

//function playGame() {
//    // Instead of moving playRound inside, i call it 5 times with a for loop
//    // Hardcoded 5 to match the assignment requirements
//    for (let i = 0; i < 5; i++) {
//        playRound(getComputerChoice(), getHumanChoice());
//    }
//
//    if (humanScore === computerScore) {
//        return "Tie!";
//    }
//
//    else if (humanScore > computerScore) {
//        return "You win!";
//    }
//
//    else {
//        return "You lose!";
//    }
//}
//
//console.log(playGame());


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const body = document.querySelector("body");

const score = document.createElement("div");
score.classList.add("score");
score.textContent = "Score:";

const playerScore = document.createElement("div");
playerScore.classList.add("playerScore");
score.appendChild(playerScore);

const machineScore = document.createElement("div");
machineScore.classList.add("machineScore");
score.appendChild(machineScore);

body.appendChild(score);

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    playerScore.textContent = `Human score: ${humanScore}`;
    computerScore.textContent = `Computer score: ${computerScore}`;
    //console.log(`Human score: ${humanScore} \n Computer scoe: ${computerScore}`);
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    playerScore.textContent = `Human score: ${humanScore}`;
    machineScore.textContent = `Computer score: ${computerScore}`;
    //console.log(`Human score: ${humanScore} \n Computer scoe: ${computerScore}`);
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    playerScore.textContent = `Human score: ${humanScore}`;
    machineScore.textContent = `Computer score: ${computerScore}`;
    //console.log(`Human score: ${humanScore} \n Computer scoe: ${computerScore}`);
})