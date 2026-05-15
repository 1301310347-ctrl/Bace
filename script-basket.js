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
    "How many seconds is the shot clock in NBA?",
    "Who is this player? Hint: Known as 'Pistol Pete' and played without a 3-point line",
    "Who is this player? Hint: 'The Iceman' who played in ABA before joining the Spurs",
    "Who is this player? Hint: Known as 'The Big O' and averaged a triple-double for a season in 1962",
    "Who is this player? Hint: 'Chocolate Thunder' famous for breaking backboards with dunks",
    "Who is this player? Hint: Known as 'The Human Highlight Film' and won 2 slam dunk contests",
    "Who is this player? Hint: 'White Chocolate' known for flashy passes and played for Kings",
    "Who is this player? Hint: 'The Reign Man' and was a dominant dunker for the Sonics in the 90s",
    "Who is this player? Hint: Known as 'The Microwave' for instant offense off the bench for Pistons",
    "Who is this player? Hint: 'Clyde the Glide' and lost to Jordan in the Finals",
    "Who is this player? Hint: Known as 'The Logo' and is the NBA's silhouette"
];

let imageSources = [
    "https://ichef.bbci.co.uk/ace/standard/1200/cpsprodpb/3463/live/e3c0c5b0-66b5-11ef-9039-c9d3be0865dd.png", //1
    "https://cdn.nba.com/manage/2024/06/Jayson_Tatum_on_winning_long_coveted_championship_This_is_an_incredible_feeling_2024_06_18T03_06_16.jpg", //2
    "https://imagenes.elpais.com/resizer/v2/FA4J4OMEWNFNND6NN3KPEFGODU.jpeg?auth=60a1d24ece26f495fc2d4cf39d20d214f31ec92994e84d8f14e95b0abae77a99&width=414", //3
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254", //4
    "https://brandlogos.net/wp-content/uploads/2025/04/nba-logo_brandlogos.net_ipeky.png", //5
    "https://media.tenor.com/oLDn2ewQCYUAAAAM/travel-basketball.gif", //6
    "https://cdn.artphotolimited.com/images/67ceea65865e9b3b9ef7de2b/1000x1000/kobe-bryant-2001-nba-finals.jpg", //7
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5RlA8_aeuMCHoi886sqFc9JMovfYpju8Xw&s", //8
    "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/larry-obrien-championship-trophy_1ltn7uv1okfkvzsgq6wrcaowk.png?itok=95muDb-K", //9
    "https://cdn.sanity.io/images/8dhz9iqq/production/70b31a1d6eb0b8d7a884112487cbd424c2336bff-1236x500.png", //10
    "https://i.ytimg.com/vi/moSK8wgNW-E/maxresdefault.jpg", //11
    "https://closeup360.com/wp-content/uploads/2020/04/George-Gervin-1.jpg", //12
    "https://www.myblackhistory.net/oscar.jpg", //13
    "https://www.readingeagle.com/wp-content/uploads/migration/2015/08/893271c9c216ff0e31a394115d76afa5.jpg?w=1800&resize=1800,1800", //14
    "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/dominique-wilkins_12xb8ovkyeu8s1crobvfyqbx68.jpeg?itok=Lrftb511", //15
    "https://cdn.nba.com/teams/legacy/www.nba.com/kings/sites/kings/files/jwillhighlights_lrg.jpg", //16
    "https://images.squarespace-cdn.com/content/v1/5f6a2443c6004d000a8d74df/1601064096489-5253447VSV5RBED3EX5C/Shawn+Kemp+Seattle+Sonics.jpg", //17
    "https://external-preview.redd.it/heres-vinnie-johnson-lookin-old-as-fuck-in-his-early-30s-v0-SyDSEGHURKPHJZtoQpFYaf9UaeajLjCzQKYYQ-RwBpk.jpg?auto=webp&s=c69879adac6113ad20447542ad3aea54b3fcad0b", //18
    "https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/https-3A-2F-2Fspacecityscoop-com-2Fwp-content-2Fuploads-2Fgetty-images-2F2017-2F07-2F531732410-850x560-895c2f39c4dab4d0e795e383c8383031.jpg", //19
    "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/06/mixcollage-12-jun-2024-09-47-pm-1442.jpg" //20
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
    ["20 seconds", "22 seconds", "24 seconds", "26 seconds"],
    ["Bob Cousy", "Jerry West", "Pete Maravich", "Elgin Baylor"],
    ["Julius Erving", "David Thompson", "George Gervin", "Artis Gilmore"],
    ["Elgin Baylor", "Oscar Robertson", "Wilt Chamberlain", "Jerry West"],
    ["Shawn Kemp", "Blake Griffin", "Darryl Dawkins", "Dominique Wilkins"],
    ["Vince Carter", "Dominique Wilkins", "Harold Miner", "Spud Webb"],
    ["Steve Nash", "Stephon Marbury", "Mike Bibby", "Jason Williams"],
    ["Derrick Coleman", "Shawn Kemp", "Larry Johnson", "Vin Baker"],
    ["Ricky Pierce", "Jamal Crawford", "Vinnie Johnson", "Lou Williams"],
    ["Mitch Richmond", "Clyde Drexler", "Joe Dumars", "Reggie Miller"],
    ["Jerry West", "Elgin Baylor", "Oscar Robertson", "Bob Pettit"]
];

let correctAnswers = ["B", "C", "B", "B", "A", "C", "B", "C", "B", "C","C", "C", "B", "C", "B", "D", "B", "C", "B", "A"];

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
    
    if (currentQuestion < 20) {
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
