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




