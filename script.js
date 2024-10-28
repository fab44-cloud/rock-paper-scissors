// Step 2: Write the logic to get the computer computerChoice
// Create a function name getComputerChoice
// Write code so that getComputerChoice will randomly return one of the following string values: "rock", "paper" or "scissors"
// Create a variable that uses Math.random to generate a number between 0 and 2
// Use Math.random to conditionally return one of the multiple choices

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());


