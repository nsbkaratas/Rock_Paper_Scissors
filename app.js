const paper= document.querySelector("#paper")
const scissors= document.querySelector("#scissors")
const rock= document.querySelector("#rock")
const userChoice = document.querySelector(".userChoice")


rock.addEventListener("click", add_rock)
function add_rock() { 
	var img = document.createElement('img'); 
    img.src="images/rock.png"
	document.getElementById('placehere').appendChild(img);
}
paper.addEventListener("click", add_paper)
function add_paper() { 
	var img = document.createElement('img'); 
    img.src="images/paper.png"
	document.getElementById('placehere').appendChild(img);
}
scissors.addEventListener("click", add_scissors)
function add_scissors() { 
	var img = document.createElement('img'); 
    img.src="images/scissors.png"
	document.getElementById('placehere').appendChild(img);
}



// const handleClick=(e)=>{
//     userChoice.restyle.display=e.target
// //   const comp = compChoice()
//     console.log(user)
// }



// choices.forEach(choice =>choice.addEventListener("click", handleClick))











