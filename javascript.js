// Step 1: Setup the project structure
console.log("Hello world!")

// Step 4: Declare the players score variables
// Global variables
let humanScore = 0;
let computerScore = 0;

// Step 2: Write the logic to get the computer choice
// Generate a random number between 0 and 2
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    // Depending on the generated number return one of the string values
    if (choice == 2) {
        return "rock";  
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice
// Takes the users choice and returns it
function getHumanChoice() {
    let humanChoice = prompt("Type either rock, paper, or scissors:").toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");  
    
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors beats paper");
        humanScore = humanScore + 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock beats paper");
        humanScore = humanScore + 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanScore = humanScore + 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore = computerScore + 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!");
        computerScore = computerScore + 1;  
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper!");
        computerScore = computerScore + 1;
    }
        
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)



