// All your questions data
let questions = [
    "Who is this basketball player?",
    "Which team won the 2023 NBA Championship?",
    "What is this player's real name?",
    "Who holds the record for most career points in NBA?",
    "What does NBA stand for?",
    "How many quarters are in a basketball game?",
    "Which player is known as 'The King'?",
    "Who is the player in the NBA logo?",
    "Which team has won the most NBA championships?",
    "How many seconds is the shot clock in NBA?"
];

let imageSources = [
    "https://ichef.bbci.co.uk/ace/standard/1200/cpsprodpb/3463/live/e3c0c5b0-66b5-11ef-9039-c9d3be0865dd.png",
    "https://cdn.nba.com/manage/2024/06/Jayson_Tatum_on_winning_long_coveted_championship_This_is_an_incredible_feeling_2024_06_18T03_06_16.jpg",
    "https://imagenes.elpais.com/resizer/v2/FA4J4OMEWNFNND6NN3KPEFGODU.jpeg?auth=60a1d24ece26f495fc2d4cf39d20d214f31ec92994e84d8f14e95b0abae77a99&width=414",
    "https://example.com/lebron.jpg",
    "https://example.com/nba-logo.jpg",
    "https://example.com/clock.jpg",
    "https://media.tenor.com/SEjyC2tLN4MAAAAM/out-bye.gif",
    "https://example.com/hoop.jpg",
    "https://example.com/celtics.jpg",
    "https://example.com/shotclock.jpg"
];

let answerOptions = [
    ["LeBron James", "Stephen Curry", "Michael Jordan", "Kobe Bryant"],
    ["Lakers", "Warriors", "Denver Nuggets", "Miami Heat"],
    ["Jerry South", "Jerry West", "Jerry East", "Jerry North"],
    ["Kareem Abdul-Jabbar", "LeBron James", "Kobe Bryant", "Michael Jordan"],
    ["National Basketball Association", "North Basketball Alliance", "New Basketball Arena", "National Ball Association"],
    ["2", "3", "4", "5"],
    ["Michael Jordan", "LeBron James", "Kobe Bryant", "Stephen Curry"],
    ["Magic Johnson", "Michael Jordan", "Jerry West", "Willis Reed"],
    ["Lakers", "Celtics", "Bulls", "Warriors"],
    ["20 seconds", "22 seconds", "24 seconds", "26 seconds"]
];

let correctAnswers = ["B", "C", "B", "B", "A", "C", "B", "C", "B", "C"];

// Game variables
let currentQuestion = 0;
let score = 0;

// Start the game when page loads
function startGame() {
    displayQuestion();
    setupAnswerButtons();
    updateScoreDisplay();
}

// Display current question
function displayQuestion() {
    document.getElementById("question-text").innerText = questions[currentQuestion];
    document.getElementById("question-image").src = imageSources[currentQuestion];
    document.getElementById("option-a").innerText = answerOptions[currentQuestion][0];
    document.getElementById("option-b").innerText = answerOptions[currentQuestion][1];
    document.getElementById("option-c").innerText = answerOptions[currentQuestion][2];
    document.getElementById("option-d").innerText = answerOptions[currentQuestion][3];
}

// Make answer buttons clickable
function setupAnswerButtons() {
    let answerButtons = document.querySelectorAll(".answer-option");
    
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", function() {
            let selectedAnswer = this.getAttribute("data-answer");
            checkAnswer(selectedAnswer);
        });
    }
}

// Check if answer is correct
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswers[currentQuestion]) {
        alert("Correct! Well done!");
        score = score + 10;
    } else {
        alert("Wrong! The correct answer was " + correctAnswers[currentQuestion]);
    }
    
    updateScoreDisplay();
    moveToNextQuestion();
}

// Update score display
function updateScoreDisplay() {
    document.getElementById("score-display").innerText = score;
}

// Move to next question
function moveToNextQuestion() {
    currentQuestion = currentQuestion + 1;
    
    if (currentQuestion < 10) {
        displayQuestion();
    } else {
        alert("Quiz complete! Final score: " + score + " out of 100!");
        window.location.href = "index.html";
    }
}

// Save best score function
function saveBestScore(currentScore) {
    let bestScore = localStorage.getItem("basketballBestScore");
    
    if (bestScore === null || currentScore > bestScore) {
        localStorage.setItem("basketballBestScore", currentScore);
    }
}

// Start the game when page loads
startGame();
