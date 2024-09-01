let gameSeq = [];
let userSeq= [];
let Scores = [];

let myButtons = ["yellow", "red", "purple", "green"];


let started = false;
let level = 0;

let header = document.querySelector(".header");
let h2 = document.querySelector("h2");
let completeBody = document.querySelector("body");


document.addEventListener("keypress", function()
{
    if(started == false)
    {
        console.log("Game started!");   
        started = true;
        completeBody.style.backgroundColor = "rgb(242, 241, 241)";
        completeBody.style.backgroundColor = "rgb(242, 241, 241)";
        h2.innerText = `Previous Scores: ${Scores.join(', ')}`;
        levelUp();
        ;
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 120);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 120);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    // random btn choose

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = myButtons[randomIdx];
    let randomBtn = document.querySelector(` .${randomColor}`);
    
    gameSeq.push(randomColor);
    console.log(gameSeq);   
    btnFlash(randomBtn);
}

function checkAns(idx)
{
    if(userSeq[idx] == gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp, 1000);
        }
    }
    else
    {
       
        h2.innerHTML = `Game Over! Your Score was <b>${level-1}</b> <br><br>Press any key to start <br>`;
        
        completeBody.style.backgroundColor = "rgb(127, 0, 0)";
        header.style.backgroundColor = "rgb(242, 241, 241)";
        setTimeout(function (){
            completeBody.style.backgroundColor = "rgb(242, 241, 241)";
        },100);
        gameReset();
    }
}


function buttonPressed()
{
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allButtons = document.querySelectorAll(".btn");
for (btn of allButtons)
{
    btn.addEventListener("click", buttonPressed);
}

function gameReset()
{
    Scores.push(level - 1); 
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

