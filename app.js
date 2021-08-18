const paper= document.querySelector("#paper")
const scissors= document.querySelector("#scissors")
const rock= document.querySelector("#rock")
const userChoice = document.querySelector(".userChoice")
let arr=['rock.png','paper.png','scissors.png']

//display rock for user when selected
rock.addEventListener("click", add_rock)
function add_rock() { 
	let img = document.createElement('img'); 
    img.src="images/rock.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice() 
    winnerRock()
    console.log(winnerRock(img,comp))
    console.log(img)
    console.log(comp)
}
//display rock for user when selected
paper.addEventListener("click", add_paper)
function add_paper() { 
	let img = document.createElement('img'); 
    img.src="images/paper.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice()
    winnerPaper()
    console.log(winnerPaper(img,comp))
    console.log(img)
    console.log(comp)
}
//display rock for user when selected
scissors.addEventListener("click", add_scissors)
function add_scissors() { 
	let img = document.createElement('img'); 
    img.src="images/scissors.png"
	document.getElementById('placehere').appendChild(img);
    let comp=compChoice()
    winnerScissors()
    console.log(winnerScissors(img,comp))
}
// function for computer random selection
function compChoice(){
    let i=Math.floor(Math.random()*arr.length)
    let img=document.createElement('img')
    let imgPath=arr[i]
    img.src=`./images/${imgPath}`
    document.getElementById('placeForComp').append(img)
    console.log(img)
}
// case of player selection of rock
function winnerRock(user,computer){
    if(user==computer){
        return "it's a tie!"
    }
    else if(computer==="paper"){
        return "Sorry you lost :("
    }
    else{
        return "Congragulations! You Win!"
    }
}
//case of player selection of paper
function winnerPaper(user,computer){
    if(user==computer){
        return "it's a tie!"
    }
    else if(computer==="scissors"){
        return "Sorry you lost :("
    }
    else{
        return "Congragulations! You Win!"
    }
}

//case of player selection of scissors
function winnerScissors(user,computer){
    if(user==computer){
        return "it's a tie!"
    }
    else if(computer==="rock"){
        return "Sorry you lost :("
    }
    else{
        return "Congragulations! You Win!"
    }
}


    // document.getElementById('placeForComp').src=`.images/${img}`



// const handleClick=(e)=>{
//     userChoice.restyle.display=e.target
// //   const comp = compChoice()
//     console.log(user)
// }



// choices.forEach(choice =>choice.addEventListener("click", handleClick))











