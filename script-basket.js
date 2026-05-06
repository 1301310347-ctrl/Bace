// All your questions data
let questions = [
    "Who is this basketball player?",
    "Which team won the 2023 NBA Championship?",
    "What is this player's real name?",
    "Who holds the record for most career points in NBA?",
    "What does NBA stand for?",
    "Is this a travel?",
    "Which player is known as 'The King'?",
    "Who is the player in the NBA logo?",
    "Which team has won the most NBA championships?",
    "How many seconds is the shot clock in NBA?"
];

let imageSources = [
    "https://ichef.bbci.co.uk/ace/standard/1200/cpsprodpb/3463/live/e3c0c5b0-66b5-11ef-9039-c9d3be0865dd.png",
    "https://cdn.nba.com/manage/2024/06/Jayson_Tatum_on_winning_long_coveted_championship_This_is_an_incredible_feeling_2024_06_18T03_06_16.jpg",
    "https://imagenes.elpais.com/resizer/v2/FA4J4OMEWNFNND6NN3KPEFGODU.jpeg?auth=60a1d24ece26f495fc2d4cf39d20d214f31ec92994e84d8f14e95b0abae77a99&width=414",
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
    "https://brandlogos.net/wp-content/uploads/2025/04/nba-logo_brandlogos.net_ipeky.png",
    "https://media.tenor.com/oLDn2ewQCYUAAAAM/travel-basketball.gif",
    "https://cdn.artphotolimited.com/images/67ceea65865e9b3b9ef7de2b/1000x1000/kobe-bryant-2001-nba-finals.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5RlA8_aeuMCHoi886sqFc9JMovfYpju8Xw&s",
    "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/larry-obrien-championship-trophy_1ltn7uv1okfkvzsgq6wrcaowk.png?itok=95muDb-K",
    "https://cdn.sanity.io/images/8dhz9iqq/production/70b31a1d6eb0b8d7a884112487cbd424c2336bff-1236x500.png"
];

let answerOptions = [
    ["LeBron James", "Stephen Curry", "Michael Jordan", "Kobe Bryant"],
    ["Lakers", "Warriors", "Denver Nuggets", "Miami Heat"],
    ["Jerry South", "Jerry West", "Jerry East", "Jerry North"],
    ["Kareem Abdul-Jabbar", "LeBron James", "Kobe Bryant", "Michael Jordan"],
    ["National Basketball Association", "North Basketball Alliance", "New Basketball Arena", "National Ball Association"],
    ["nope", "nah", "Yes", "maybe"],
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
        // Save best score
        saveBestScore(score);
        
        // Different messages based on score
        if (score < 20) {
            alert("You suck! Final score: " + score + " out of 100. Try again!");
        } else if (score < 50) {
            alert("Not bad! Final score: " + score + " out of 100. You definitely can do better!");
        } else if (score < 80) {
            alert("Good job! Final score: " + score + " out of 100!");
        } else {
            alert("Excellent! Final score: " + score + " out of 100! You have some ball knowledge kid");
        }
        
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
