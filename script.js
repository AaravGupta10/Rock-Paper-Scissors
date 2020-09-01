let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoices() {
    const choices = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function convertToWord(letter) {
    switch (letter) {
        case "r":
            return "Rock";
            break;
        case "p":
            return "Paper";
            break;
        case "s":
            return "Scissors";
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord+ " beats " + convertToWord(computerChoice) + smallComputerWord + ". You won! 🔥";
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord+ " loses to " + convertToWord(computerChoice) + smallComputerWord + ". You lost...";
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord+ " equals " + convertToWord(computerChoice) + smallComputerWord + ". Its a draw.";
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}



function game(userChoice) {
    const computerChoice  = getComputerChoices();
    switch (userChoice + computerChoice) {
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
            lose(userChoice, computerChoice);          
            break;
        case "ps":
            lose(userChoice, computerChoice);          
            break;
        case "sr":
            lose(userChoice, computerChoice);          
            break;
        case "rr":
            draw(userChoice, computerChoice);               
            break;
        case "pp":
            draw(userChoice, computerChoice);               
            break;
        case "ss":
            draw(userChoice, computerChoice);               
            break;
    }
}


function main(){
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));
}

main();








