let userscore = 0 ;
let comscore = 0 ;
 
let myscore = document.querySelectorAll(".img");
const result = document.querySelector(".result") 

const compscorepara = document.querySelector("#comp-score");
const userscorepara = document.querySelector("#user-score");

const gencomchoices = () => {
    const options = ["rock", "paper", "scissor"]
    const gencomchoice = Math.floor(Math.random() * 3);
    return options[gencomchoice];

}

const showWinner = (userwin, userchoice, Compchoice ) => {
 if(userwin) {
    userscore++; 
    userscorepara.innerText = userscore;
    result.innerText = `You WIN! ${Compchoice} beats ${userchoice} `
    result.style.background = "green"
 } else{ comscore++;
    compscorepara.innerText = comscore ;
 result.innerText = `You Lose! ${userchoice} beats ${Compchoice}`;
 result.style.background = "red"
}
  
}

const drawgame = () => {
    console.log("game was draw");
    result.innerText = "DRAW! PLAY AGAIN "
     result.style.background = "black"
}

const playgame = (userchoice) => {
 console.log(userchoice);
 const Compchoice = gencomchoices();
 console.log(Compchoice);

if( userchoice === Compchoice) {
  drawgame();
} else {
    let userwin = true ;
    if(userchoice === "rock"){
        userwin = Compchoice === "paper"? false : true;
    } else if (
        userchoice === "paper" ) {
        userwin = Compchoice === "scissor"? false : true;
} else if(
    userchoice === "scissor")
    {
        userwin = Compchoice === "rock"? false : true; 
    }
    showWinner(userwin,Compchoice,userchoice) ;
}
};

myscore.forEach((img) => {
    img.addEventListener("click", () => {
    const userchoice = img.getAttribute("id");
    playgame(userchoice);

    });
    
})
