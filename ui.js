// ui.js

// User Interface Controls and Screen Management System

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    initializeEventListeners();
});

function initializeEventListeners() {
    document.getElementById("startGame").addEventListener("click", startGame);
    document.getElementById("collectEvidence").addEventListener("click", collectEvidence);
    document.getElementById("interviewSuspect").addEventListener("click", interviewSuspect);
    document.getElementById("completeGame").addEventListener("click", completeGame);
}

// Screen Switching
function switchScreen(screenId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    document.getElementById(screenId).style.display = "block";
}

// Game Start
function startGame() {
    switchScreen("gameScreen");
    // Initialize game state
}

// Evidence Collection
function collectEvidence() {
    // Logic for collecting evidence
    console.log("Evidence collected!");
}

// Suspect Interviews
function interviewSuspect() {
    // Logic for interviewing suspects
    console.log("Interviewing suspect!");
}

// Game Completion Handling
function completeGame() {
    // Logic for handling game completion
    console.log("Game completed!");
    switchScreen("completionScreen");
}