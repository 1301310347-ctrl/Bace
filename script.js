console.log("Script started");

function main() {
    console.log("Main function called");

}

// Display best scores when page loads
function displayBestScores() {
    let basketballBest = localStorage.getItem("basketballBestScore");
    let soccerBest = localStorage.getItem("soccerBestScore");
    
    if (basketballBest !== null) {
        document.getElementById("basketball-best-score").innerText = basketballBest;
    } else {
        document.getElementById("basketball-best-score").innerText = "0";
    }
    
    if (soccerBest !== null) {
        document.getElementById("soccer-best-score").innerText = soccerBest;
    } else {
        document.getElementById("soccer-best-score").innerText = "0";
    }
}

// Start basketball quiz
function startBasketballQuiz() {
    window.location.href = "basketball-game.html";
}

// Start soccer quiz
function startSoccerQuiz() {
    window.location.href = "soccer-game.html";
}

// Load scores when page loads
displayBestScores();




