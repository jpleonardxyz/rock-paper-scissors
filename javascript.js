function getComputerChoice(){
    //generate a random number between 1 and 3
    let randomInt = (Math.floor(Math.random() * 3)) + 1;
    
    //if the number is 1 show "rock". 2 show "paper". 3 show "scissors"
    switch (randomInt) {
        case 1: 
            return "rock";
        
        case 2:
            return "paper";
    
        case 3:
            return "scissors";
    }
}

function getHumanChoice(){
    //ask the user to input their choice
    let userChoice = prompt("Enter your choice of rock, paper or scissors");
    
    //check if the choice is valid, return a default choice if not
    if (userChoice === null || (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors")){
        return "rock";
    }
    //return the choice
    return userChoice;
}


function playGame(){
    //declare variable to keep score
    let humanScore;
    let computerScore;

    //set scores to zero
    humanScore = 0;
    computerScore = 0;

    //create variable to track number of rounds
    let roundNumber = 0;

    //declare variables for human and computer choice
    let humanSelection;
    let computerSelection;

    //play the game until 5 rounds are reached
    /**
    while (roundNumber < 5) {
        //get human and user selections
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        //play the round
        playRound(humanSelection, computerSelection);
    }
    **/

    //determine and display the winner
    if (humanScore > computerScore){
        console.log("You beat the machine - final score was " + humanScore + " to " + computerScore);
    }
    else{
        console.log("You lost to the machine - final score was " + humanScore + " to " + computerScore);
    }
    
    
    
    
    //declare the playRound function
    function playRound(humanChoice, computerChoice){
        //convert human choice into all caps to prevent case sensitivity
        humanChoice = humanChoice.toUpperCase();

        //if choices are the same return a draw
        if (humanChoice === computerChoice.toUpperCase()){
            console.log("This round is a draw");
            return;
        }

        //determine outputs and update scores based on outcomes
        if ((humanChoice === "ROCK" && computerChoice === "scissors") || 
            (humanChoice === "SCISSORS" && computerChoice === "paper") ||
            (humanChoice === "PAPER" && computerChoice === "rock")){
                console.log(`You win - ${humanChoice} beats ${computerChoice.toUpperCase()}`);
                humanScore++;
            }
        else{
            console.log(`You lose - ${computerChoice.toUpperCase()} beats ${humanChoice}`);
            computerScore++;
        }

        //increase the round counter to indicate a round was played
        roundNumber++;
        return;
    }

}

//play the game
playGame();

