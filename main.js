

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
