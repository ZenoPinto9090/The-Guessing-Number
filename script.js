const message = document.getElementById("message");
const range = document.getElementById("range");
const guessBtn = document.getElementById("guessBtn");
const guessbox = document.getElementById("guessbox");
const easyBtn = document.getElementById("easyBtn");
const mediumBtn = document.getElementById("mediumBtn");
const hardBtn = document.getElementById("hardBtn");
const counter = document.getElementById("counter");
const restart = document.getElementById("restartBtn")

easyBtn.addEventListener("click",function(){

    message.textContent = "You Picked Easy Mode!!";
    startGame(100,12);
}
);
mediumBtn.addEventListener("click",function(){

    message.textContent = "You Picked Medium Mode!!";
    startGame(1000,15)
}
);
hardBtn.addEventListener("click",function(){

    message.textContent = "You Picked Hard Mode!!";
    startGame(10000,20);
}
);

let max = 0;
let secret = 0;
let chanceleft = 0;
let lastMax = 0;
let lastchance = 0;
let gameOver = true;

function startGame(maxNum,chances){
    max = maxNum;
    chanceleft = chances;
    lastMax = maxNum;
    lastchance = chances;
    gameOver = false;
    secret = Math.floor(Math.random()*(maxNum+1))

    range.textContent = `THE RANGE IS 0-${max}`;
    counter.textContent= `The chance left : ${chanceleft}`
    message.textContent = `MAKE YOUR Guess`
    
}
guessBtn.addEventListener("click", function () {
    if(gameOver){
        message.textContent = "Game over. Press Restart or pick a difficulty";
        return;
    }
    const guess = Number(guessbox.value);

    // 1. check the guess is valid
    if(isNaN(guess) || guess <0 || guess > max)
    {
        message.textContent = "INVALID";
        return;
    }
    // 2. compare it to secret
    if(secret == guess){
        message.textContent = "YOU WON !!";
         gameOver = true;
        return;
    }
    else if (guess > secret) {
        message.textContent = "LOWER"
    } 
    else {
        message.textContent = "HIGHER"
    }
    // 3. use up a chance
    chanceleft -=1;
    counter.textContent = `The chance left : ${chanceleft}`;
    // 4. check for a loss
    if(chanceleft == 0){
        message.textContent = "YOU LOSE"
         gameOver = true;
    }
});

restart.addEventListener("click",function(){
    if(lastMax == 0){
        message.textContent = "Pick a difficulty first";
        return;
    }
     guessbox.value = "";
    startGame(lastMax, lastchance);
});
