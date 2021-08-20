let userScore1=0
let computerScore1=0
let displayWinner =document.querySelector("#winner")
const paper= document.querySelector("#paper")
const scissors= document.querySelector("#scissors")
const rock= document.querySelector("#rock")
const userChoice = document.querySelector(".userChoice")
const reset=document.querySelector("#restart-button")
const resButton = document.querySelector(".restart-button")
let userScore=document.querySelector("#user-score")
let computerScore=document.querySelector("#computer-score")
let modalBg= document.querySelector(".modal-bg")
const arr=['rock','paper','scissors']



//display rock for user when selected
rock.addEventListener("click", add_rock)
function add_rock() { 
	let img = document.createElement('img'); 
    img.src="images/rock.png"
    //append chosen image
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice() 
    winnerRock(arr[0],comp)   
}

//display paper for user when selected
paper.addEventListener("click", add_paper)
function add_paper() { 
	let img = document.createElement('img'); 
    img.src="images/paper.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice()
    winnerPaper(arr[1],comp)
    
}
//display scissors for user when selected
scissors.addEventListener("click", add_scissors)
function add_scissors() { 
	let img = document.createElement('img'); 
    img.src="images/scissors.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice()
    winnerScissors(arr[2],comp)
   
}

//Restart button functionality
resButton.addEventListener("click", restart)
function restart(){   
    window.location.reload()       
}

function gameOver(winner){
    if(winner==1){
        displayWinner.innerHTML="Player won!"
    }else{
        displayWinner.innerHTML="Computer won!"
    }
    modalBg.classList.add("bg-active")
}

// function for computer random selection
function compChoice(){
    let i=Math.floor(Math.random()*arr.length)
    let img=document.createElement('img')
    let compPick=arr[i]
    img.src=`./images/${compPick}.png`
    document.getElementById('placeForComp').append(img)
    return compPick
}
// winner indication for when player select rock
function winnerRock(user,computer){
    if(user==computer){
        return "it's a tie!"
    }
    else if(computer=== "scissors"){
        userScore1++
        userScore.textContent=userScore1
        if(userScore1==5){
            gameOver(1)
        }   
    }
    else{
        computerScore1++
        computerScore.textContent=computerScore1
        if(computerScore1==5){
            gameOver(2)
        }    
    }
}
// winner indication for when player select paper
function winnerPaper(user,computer){
    if(user===computer){
        return "it's a tie!"
    }
    else if(computer==="rock"){
        userScore1++
        userScore.textContent=userScore1       
        if(userScore1==5){
            gameOver(1)
        }    }
    else{
        computerScore1++
        computerScore.textContent=computerScore1
        if(computerScore1==5){
            gameOver(2)
        }    
    }
}

// winner indication for when player select scissors
function winnerScissors(user,computer){
    if(user==computer){
        return "it's a tie!"
    }
    else if(computer==="paper"){
        userScore1++
        userScore.textContent=userScore1
        if(userScore1==5){
            gameOver(1)
        }   
    }
    else{
        computerScore1++
        computerScore.textContent=computerScore1
        if(computerScore1==5){
            gameOver(2)
        }
    }
}

