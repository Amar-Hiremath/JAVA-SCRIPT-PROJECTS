//Create Snake, Water & Gun game in JavaScript.
/* The game should ask you to enter Snake , Water or Gun
The computer should be able to randomly generate Snake , Water or Gun and decide
win or loss using alert*/
//Use alert,  prompt and confirm wherever required!


function amar (){
let user = prompt("Snake, Water or Gun")
let cpu1 = Math.floor(Math.random()*3)
let cpu = ["Snake", "Water", "Gun"][cpu1]



const match = (cpu, user)=>{

    if (cpu === user){
        return("Nobody")
    }

    else if (cpu === "Snake" && user === "Water"){
        return("cpu")
    }

    else if (cpu === "Snake" && user === "Gun"){
        return("user")
    }

    else if (cpu === "Water" && user === "Gun"){
        return("cpu")
    }

    else if (cpu === "Water" && user === "Snake"){
            return("user")
    }    

    else if (cpu === "Gun" && user === "Water"){
        return("user")
    }

    else if (cpu === "Gun" && user === "Snake"){
        return("cpu")
    }

}

let result = match(cpu, user)
alert(`winner is ${result}`)

user = confirm("Do you want to play it again")
    if(user === true){
        amar();
    }
   
}
amar();
