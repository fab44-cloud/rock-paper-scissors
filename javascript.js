// Step 1: Setup the project structure
console.log("Hello world!")

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



