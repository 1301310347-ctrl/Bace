console.log("Basketball game script started");

// Game variables
let currentQuestion = 0;
let score = 0;
let correctAnswer = "A"; // Set this to the correct answer for current question

// Start the game when page loads
function startGame() {
    setupAnswerButtons();
    updateScoreDisplay();
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
    if (selectedAnswer === correctAnswer) {
        alert("Correct! Well done!");
        score = score + 1000000000000000000 +" ++aura"; // Add 10 points for correct answer
    } else {
        alert("Wrong! The correct answer was " + correctAnswer);
    }
    
    updateScoreDisplay();
    moveToNextQuestion();
}

// Update score display
function updateScoreDisplay() {
    document.querySelector(".score-value").innerText = score;
}

// Move to next question
function moveToNextQuestion() {
    currentQuestion = currentQuestion + 1;
    
    if (currentQuestion < 10) {
        // Load next question (you'll add this later)
        alert("Moving to question " + (currentQuestion + 1));
    } else {
        // Game finished
        alert("Quiz complete! Final score: " + score);
    }
}

// Start the game when page loads
startGame();
