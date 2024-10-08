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
    //create paragraph element for outputting results
    const pResult = document.createElement("p");

    //convert human choice into all caps to prevent case sensitivity
    humanChoice = humanChoice.toUpperCase();

    //if choices are the same return a draw
    if (humanChoice === computerChoice.toUpperCase()){
        pResult.textContent = "\nThis round is a draw. The score is still " + humanScore + " - " + computerScore;
        results.appendChild(pResult);
        return;
    }

    //determine outputs and update scores based on outcomes
    if ((humanChoice === "ROCK" && computerChoice === "scissors") || 
        (humanChoice === "SCISSORS" && computerChoice === "paper") ||
        (humanChoice === "PAPER" && computerChoice === "rock")){
            humanScore++;
            pResult.textContent = `\nYou win this round: ${humanChoice} beats ${computerChoice.toUpperCase()}. 
            The score is currently ${humanScore} - ${computerScore}`;
            results.appendChild(pResult);
        }
    else{
        computerScore++;
        pResult.textContent = `\nYou lose this round: ${humanChoice} beats ${computerChoice.toUpperCase()}.  
        The score is currently ${humanScore} - ${computerScore}`;
        results.appendChild(pResult);
    }

    //check if someone has reached 5 points, if so determine winner
    if (humanScore === 5 || computerScore === 5){
      checkWinner();  
    }

    return;
}



function checkWinner(){
    const pFinal = document.createElement("p");
    //determine and display the winner
    if (humanScore > computerScore){
        pFinal.textContent = "You beat the machine - final score was " + humanScore + " to " + computerScore;
        results.appendChild(pFinal);
    }
    else{
        pFinal.textContent = "You lost to the machine - final score was " + humanScore + " to " + computerScore;
        results.appendChild(pFinal);
    }
}
    
//declare score keeping variables
let humanScore = 0;
let computerScore = 0;

//get references to buttons
const buttons = document.querySelectorAll("button");

//get reference to results div
const results = document.querySelector("#results");

//add event listeners to the buttons
buttons.forEach((button) => {
    
    //playround using correct choice
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        if ((humanScore < 5) && (computerScore < 5)){
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
        }
        
    });
});

