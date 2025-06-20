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
    
};
// Test that your function returns what you expect using console.log
// console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice

// function getHumanChoice() {
//     let humanChoice = prompt("Choose rock, paper or scissors", "")
//     if (humanChoice === null) {
//         alert("Prompt canceled");
//     } else {
//         return humanChoice.toLowerCase();
//     }
// }

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
//         humanScore ++; 
//         return "You win!";
// //         
//     } else {
//         computerScore ++;
//         return "You lose!";
//         
//     }
// }
        
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

// Step 6: Write the logic to play the entire game 

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winningScore = 5;

    function playRound(humanChoice, computerChoice) {
        // const humanChoice = getHumanChoice();
        // const computerChoice = getComputerChoice();
        // console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if ( 
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
        ) { 
            humanScore += 1;
            return "You won the round!";
        } else { 
            computerScore += 1;
            return "You lost the round!";
        }
    }

    function resetScore() {
        if (humanScore === 5 || computerScore === 5) {
            humanScore = 0;
            computerScore = 0;
        }
    }

    function finalScore(humanScore, computerScore) {
        if (humanScore === winningScore) {
            console.log("You won the game!")
            resetScore();
            return "You won the game!"
        } else if (computerScore === winningScore) {
            console.log("The computer won the game!")
            resetScore();
            return "The computer won the game!";
        } 
    }
        
// for (let i = 0; i < 5; i++) 
//     console.log(`${playRound()}`);
//     console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
// }

const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text content!"

// container.appendChild(content)

// selects the rock button
const rockBtn = document.querySelector("#rockBtn"); 
rockBtn.addEventListener("click", () => {
    // Clear the previous content of the container
    container.textContent = "";

    let computerChoice = getComputerChoice()
    // Callback function that defines the event handler and will run when the rock button is clicked
    const result = playRound("rock", computerChoice); 
    
    // Creates a new paragraph to display the current round's result
    const rockContent = document.createElement("p");
    rockContent.textContent = `You chose rock and the computer chose ${computerChoice}. ${result}`;
    
    // Append the result to the now empty container
    container.appendChild(rockContent);

    let displayScore = document.createElement("p");
    displayScore.textContent = `Your score is ${humanScore} and the computer score is ${computerScore}`;
    
    container.appendChild(displayScore);

    let finalDisplay = document.createElement("p");
    score = finalScore(humanScore, computerScore);
    finalDisplay.textContent = score;
    finalDisplay.style.color = 'blue'

    container.appendChild(finalDisplay)
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    // Clear the previous content of the container
    container.textContent = "";

    let computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);

    const paperContent = document.createElement("p");
    paperContent.textContent = `You chose paper and the computer chose ${computerChoice}. ${result}`;

    container.appendChild(paperContent);

    let displayScore = document.createElement("p");
    displayScore.textContent = `Your score is ${humanScore} and the computer score is ${computerScore}`

    container.appendChild(displayScore);

    let finalDisplay = document.createElement("p");
    score = finalScore(humanScore, computerScore);
    finalDisplay.textContent = score;
    finalDisplay.style.color = 'blue'

    container.appendChild(finalDisplay)
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    // Clear the previous content of the container
    container.textContent = "";

    let computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);

    const scissorsContent = document.createElement("p");
    scissorsContent.textContent = `You chose scissors and the computer chose ${computerChoice}. ${result}`;
    
    container.appendChild(scissorsContent);

    let displayScore = document.createElement("p")
    displayScore.textContent = `Your score is ${humanScore} and the computer score is ${computerScore}`

    container.appendChild(displayScore);

    let finalDisplay = document.createElement("p");
    score = finalScore(humanScore, computerScore);
    finalDisplay.textContent = score;
    finalDisplay.style.color = 'blue'

    container.appendChild(finalDisplay)
});

// reference to the container div that exists in the html 
// const container = document.querySelector("#container");

// creates a new div and stores it in the variable content
// const content = document.createElement("div");
// Adds a class to the content div
// content.classList.add("content");
// content.textContent = `Results: Your score is ${humanScore} and the computer score is ${computerScore}`;

// appends the div to container
// container.appendChild(content);

// function scoreResults() {
//     if (humanScore === computerScore) {
//         console.log("The game ends in a tie!"); 
//     } else if (humanScore > computerScore ) {
//         console.log("You are the winner!");
//     } else {
//         console.log("The computer wins!");
//     }
// }
};

playGame();


