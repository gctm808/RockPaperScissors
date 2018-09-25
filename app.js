const scoreboard_div = document.querySelector(".scoreBoard");
const userScore_span = document.getElementById("userScore");
const cpuScore_span = document.getElementById("cpuScore");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var uScore = 0;
var cScore = 0;

function getCPUchoice(){
    const choices = ["r", "p", "s"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
};

function wordConvert(letter){
    if(letter == "r"){
        return "Rock"
    }
    if(letter == "p"){
        return "Paper"
    }
    if(letter == "s"){
        return "Scissors"
    }
};

function win(userChoice, cpuChoice){
    const userChoice_div = document.getElementById(userChoice);
    uScore++;
    userScore_span.innerHTML = uScore;
    result_div.innerHTML = `${wordConvert(userChoice)} beats ${wordConvert(cpuChoice)}, you win!`; //ES6
    userChoice_div.classList.add("greenGlow");
    setTimeout(function() {userChoice_div.classList.remove("greenGlow")}, 500);
};

function lose(userChoice, cpuChoice){
    const userChoice_div = document.getElementById(userChoice);
    cScore++;
    cpuScore_span.innerHTML = cScore;
    result_div.innerHTML = `${wordConvert(cpuChoice)} beats ${wordConvert(userChoice)}, you lose!`; //ES6
    userChoice_div.classList.add("redGlow");
    setTimeout(function() {userChoice_div.classList.remove("redGlow")}, 500);
};

function draw(userChoice){
    result_div.innerHTML = `You both threw ${wordConvert(userChoice)}, draw.` //ES6
}

function game(userChoice){
    const cpuChoice = getCPUchoice();
    switch(userChoice + cpuChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, cpuChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, cpuChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
};


function main(){
    rock_div.addEventListener("click", function(){
        game("r");
    });
    paper_div.addEventListener("click", function(){
        game("p");
    });
    scissors_div.addEventListener("click", function(){
        game("s");
    });
};

main();