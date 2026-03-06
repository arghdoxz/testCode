let score = 0;
let timeLeft = 10;
let gameActive = false;
let timer;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function () {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = score;
    }
});

function startGame() {

    score = 0;
    timeLeft = 10;
    gameActive = true;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            alert("Game Over! Your score is: " + score);
        }

    }, 1000);
}
