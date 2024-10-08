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

    //check if someone has reached 5 points, if so determine winner
    if (humanScore === 5 || computerScore === 5){
      checkWinner();  
    }

    return;
}



function checkWinner(){
    //determine and display the winner
    if (humanScore > computerScore){
        console.log("You beat the machine - final score was " + humanScore + " to " + computerScore);
    }
    else{
        console.log("You lost to the machine - final score was " + humanScore + " to " + computerScore);
    }
}
    
//declare score keeping variables
let humanScore = 0;
let computerScore = 0;

//get references to buttons
const buttons = document.querySelectorAll("button");


//add event listeners to the buttons
buttons.forEach((button) => {
    
    //playround using correct choice
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        switch (button.id) {
            case "rock":
                console.log("Clicked rock button");
                playRound("rock", computerChoice);
                break;
            
            case "paper":
                playRound("paper", computerChoice);
                break;

            case "scissors":
                playRound("scissors", computerChoice);
                break;
        }
    });
});

