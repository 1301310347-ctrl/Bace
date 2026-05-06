// All your soccer questions data
let questions = [
    "Who is this soccer player?",
    "Which country won the 2022 FIFA World Cup?",
    "How many players are on the field per team?",
    "What is a hat-trick in soccer?",
    "Which player has won the most Ballon d'Or awards?",
    "How long is a standard soccer match?",
    "What color card sends a player off the field?",
    "Which club has won the most UEFA Champions League titles?",
    "What is it called when a player scores with their head?",
    "How many substitutions are allowed in a standard match?"
];

let imageSources = [
    "https://static01.nyt.com/images/2017/07/06/sports/06-Y-SCOREBOARD/06-Y-SCOREBOARD-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://www.theglobeandmail.com/resizer/v2/MT3HQAMHGNP4DJ52YHS5FWPIVI.jpg?auth=e948c0378cd5a92cbd523e716ca50b7b24361982d6d72bab57003b97c464f4c4&width=1200&quality=80",
    "https://img.redbull.com/images/c_crop,w_4000,h_2000,x_0,y_0/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2022/12/20/ju7uvuikarvqgrohvbwt/indoor-soccer",
    "https://www.aljazeera.com/wp-content/uploads/2025/02/2025-02-06T210723Z_1766438161_UP1EL261MOAOK_RTRMADP_3_SOCCER-SPAIN-VAL-BAR-REPORT-1738876311.jpg?resize=1800%2C1800",
    "https://assets.goal.com/images/v3/blt246d1967e771e912/Ballon_d_Or_2019_(1).jpg",
    "https://dims.apnews.com/dims4/default/b35d7a4/2147483647/strip/true/crop/4727x3151+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fac%2Fd5%2Fea6640e97e086a449f26edc3075d%2F1caa06a997fc4549a872a959b1f05508",
    "https://static.wikia.nocookie.net/p__/images/2/2f/Red%26Yellow2022.png/revision/latest?cb=20230717225843&path-prefix=protagonist",
    "https://res.cloudinary.com/jerrick/image/upload/v1689849263/64b90daee3fb5b001d01b4f2.jpg",
    "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyY2s0NDhpNGJpcG9qb2x4MHFsYjZ4OWhqcWxraGh2bDAzdW8wd3F5NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/giWj7zg6SlzxfHXGfD/giphy.gif",
    "https://www.soccer.com/wcm/connect/8c1e3455-aac9-407a-a053-9a4276d6f1e4/Substitution.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-8c1e3455-aac9-407a-a053-9a4276d6f1e4-pc4isse"
];

let answerOptions = [
    ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappe"],
    ["Brazil", "France", "Argentina", "Germany"],
    ["9", "10", "11", "12"],
    ["3 goals in one game", "2 goals in one game", "Scoring from midfield", "An assist"],
    ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
    ["80 minutes", "90 minutes", "100 minutes", "120 minutes"],
    ["Yellow card", "Red card", "Blue card", "Green card"],
    ["Barcelona", "Real Madrid", "AC Milan", "Liverpool"],
    ["A header", "A volley", "A chip", "A strike"],
    ["2", "3", "4", "it depend on the league, i mean some league have 5 and some have 3, it really depend on the league rules."]
];

let correctAnswers = ["B", "C", "C", "A", "B", "B", "B", "B", "A", "D"];

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
            alert("Not bad! Final score: " + score + " out of 100. You can do better!");
        } else if (score < 80) {
            alert("Good job! Final score: " + score + " out of 100!");
        } else {
            alert("Excellent! Final score: " + score + " out of 100! You're a soccer expert!");
        }
        
        window.location.href = "index.html";
    }
}

// Save best score function
function saveBestScore(currentScore) {
    let bestScore = localStorage.getItem("soccerBestScore");
    
    if (bestScore === null || currentScore > bestScore) {
        localStorage.setItem("soccerBestScore", currentScore);
    }
}

// Start the game when page loads
startGame();
