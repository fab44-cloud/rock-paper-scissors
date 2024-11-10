// Step 2: Write the logic to get the computer choice
// Create a function name getComputerChoice
// Write code so that getComputerChoice will randomly return one of the following string values: "rock", "paper" or "scissors"
// Create a variable that uses Math.random to generate a number between 0 and 2
// Use Math.random to conditionally return one of the multiple choices

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Test that your function returns what you expect using console.log
// console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice and returns it. 

// Create a new function named getHumanChoice
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs. 
// Hint: Use the prompt method to get the user's input

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors", "") 
        return humanChoice.toLowerCase();
    }

// Test what your function returns by using console.log
// console.log(getHumanChoice());

// Step 4:  Declare the players score variables 
// Your game will keep track of the players score. You will write variables to keep track of the players score. 

// Create two new variables named humanScore and computerScore in the global scope. 
// Initialize those variables with the value of 0.

let humanScore = 0
let computerScore = 0

// Step 5: Write the logic to play a single round
// Your game will be played round by round. 
// You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner's score 
// and logs a winner anouncement. 

// Create a new function named playRound. 
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function's humanChoice parameter case-insensitive so that players can input "rock", "ROCK", "RocK", or other variations. 
// Write the code for your playRound function to console.log a string value representing the round winner, such as: "You lose! Paper beats Rock."
// Increment the humanScore or computerScore variable based on the round winner. 

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice);
    console.log(humanChoice);
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } else if (computerChoice === "rock" && humanChoice === "paper" ) {
        return "You win! Paper beats rock.";
        humanScore ++;  
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        return("You lose! Rock beats scissors!");
        computerScore ++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        return "You lose! Paper beats rock!";
        computerScore ++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        return "You win! Scissors beats rock!";
        humanScore ++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        return "You win! Rock beats scissors."
        humanScore ++;
    } else {
        return "You Lose! Scissors beats paper.";
        computerScore ++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

