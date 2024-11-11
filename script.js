// Step 2: Write the logic to get the computer choice

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

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors", "") 
        return humanChoice.toLowerCase();
    }

// Test what your function returns by using console.log
// console.log(getHumanChoice());

// Step 4:  Declare the players score variables 

// let humanScore = 0
// let computerScore = 0

// Step 5: Write the logic to play a single round

// function playRound(humanChoice, computerChoice) {
//     console.log(computerChoice);
//     console.log(humanChoice);
//     if (humanChoice === computerChoice) {
//         return "It's a tie!";
//     } else if ( 
//         (humanChoice === "rock" && computerChoice === "scissors") ||
//         (humanChoice === "paper" && computerChoice === "rock") ||
//         (humanChoice === "scissors" && computerChoice === "paper") 
//     ) { 
//         return "You win!";
//         humanScore ++;
//     } else {
//         return "You lose!";
//         computerScore ++;
//     }
// }
        
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

// Step 6: Write the logic to play the entire game 

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(humanChoice, computerChoice);
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if ( 
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
        ) { 
            return "You win!";
            humanScore ++;
        } else {
            return "You lose!";
            computerScore ++;
        }
    }

    console.log(`Game Result: ${playRound()}`);
}
playGame();

