const paper= document.querySelector("#paper")
const scissors= document.querySelector("#scissors")
const rock= document.querySelector("#rock")
const userChoice = document.querySelector(".userChoice")
let arr=['rock.png','paper.png','scissors.png']

//display rock for user when selected
rock.addEventListener("click", add_rock)
function add_rock() { 
	var img = document.createElement('img'); 
    img.src="images/rock.png"
	document.getElementById('placehere').appendChild(img);
    const comp=compChoice()
    console.log(comp)
}
//display rock for user when selected
paper.addEventListener("click", add_paper)
function add_paper() { 
	var img = document.createElement('img'); 
    img.src="images/paper.png"
	document.getElementById('placehere').appendChild(img);
    const comp=compChoice()    
    console.log(comp)
}
//display rock for user when selected
scissors.addEventListener("click", add_scissors)
function add_scissors() { 
	var img = document.createElement('img'); 
    img.src="images/scissors.png"
	document.getElementById('placehere').appendChild(img);
    const comp=compChoice()
    console.log(comp)
}
// function for computer random selection
function compChoice(){
    let i=Math.floor(Math.random()*arr.length)
    let img=document.createElement('img')
    let imgPath=arr[i]
    img.src=`./images/${imgPath}`
    document.getElementById('placeForComp').append(img)
}


    // document.getElementById('placeForComp').src=`.images/${img}`



// const handleClick=(e)=>{
//     userChoice.restyle.display=e.target
// //   const comp = compChoice()
//     console.log(user)
// }



// choices.forEach(choice =>choice.addEventListener("click", handleClick))











