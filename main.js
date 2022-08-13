const computerChoiceDisplay= document.getElementById("computer-choice");
const userChoiceDisplay= document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let userChoice
let computerChoice
let result


let possibleChoices = document.querySelectorAll("button");


possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener("click",(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length);
    if (randomNumber===1){
        computerChoice= "rock"
    }else if(randomNumber===2){
        computerChoice= "paper"
    }else if (randomNumber === 3){
        computerChoice = "scissors"
    }else{
        return error
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult (){
    if(computerChoice === userChoice){
        result = " It is a draw "
    }else if(computerChoice ==="rock" && userChoice==="paper"){
        result = " You win  "
    }else if(computerChoice ==="rock" && userChoice==="scissors"){
        result = " you lose "
    }else if(computerChoice ==="paper" && userChoice==="scissors"){
        result = " you win "
    }else if(computerChoice ==="paper" && userChoice==="rock"){
        result = " you lose "
    }else if(computerChoice ==="scissors" && userChoice==="paper"){
        result = " you lose "
    }else  if(computerChoice ==="scissors" && userChoice==="rock"){
        result = " you win "
    }else {
        return error("There is a problem");
    }
resultDisplay.innerHTML = result




}

//style













    
    


