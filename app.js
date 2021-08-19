const paper= document.querySelector("#paper")
const scissors= document.querySelector("#scissors")
const rock= document.querySelector("#rock")
const userChoice = document.querySelector(".userChoice")
const reset=document.querySelector("#restart-button")
const status= document.querySelector("#scoreBoard")
const resButton = document.querySelector("#restart-button")
const arr=['rock','paper','scissors']


//display rock for user when selected
rock.addEventListener("click", add_rock)
function add_rock() { 
	let img = document.createElement('img'); 
    img.src="images/rock.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice() 
    winnerRock(arr[0],comp)
    console.log(winnerRock(arr[0],comp))
    //reset.style.display="inline-block"
    //status.style.display="inline-block"
    //status.innerText=winnerRock(arr[0],comp)
}

//display paper for user when selected
paper.addEventListener("click", add_paper)
function add_paper() { 
	let img = document.createElement('img'); 
    img.src="images/paper.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice()
    winnerPaper(arr[1],comp)
    console.log(winnerPaper(arr[1],comp))
    reset.style.display="inline-block"
    status.style.display="inline-block"
    status.innerText=winnerPaper(arr[1],comp)
}
//display scissors for user when selected
scissors.addEventListener("click", add_scissors)
function add_scissors() { 
	let img = document.createElement('img'); 
    img.src="images/scissors.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice()
    winnerScissors(arr[2],comp)
    console.log(winnerScissors(arr[2],comp))
    reset.style.display="inline-block"
    status.style.display="inline-block"
    status.innerText=winnerScissors(arr[2],comp)
}

//Restart button functionality
resButton.addEventListener("click", restart)
function restart(){   
    window.location.reload()       
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
// case of player selection of rock
function winnerRock(user,computer){
    if(user==computer){
        return "it's a tie!"
    }
    else if(computer=== "scissors"){
        return"Congragulations! You Win!" 
    }
    else{
        return "Sorry you lost :("
    }
}
//case of player selection of paper
function winnerPaper(user,computer){
    if(user===computer){
        return "it's a tie!"
    }
    else if(computer==="rock"){
        return  "Congragulations! You Win!"
    }
    else{
        return "Sorry you lost :("       
    }
}

//case of player selection of scissors
function winnerScissors(user,computer){
    if(user==computer){
        return "it's a tie!"
    }
    else if(computer==="paper"){
        return "Congragulations! You Win!"
    }
    else{
        return "Sorry you lost :("
    }
}
//resarting the game
