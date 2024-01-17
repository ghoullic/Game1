// script.js

let sentencesLoaded = false;

function loadSentences() {
    sentencesLoaded = true;
    initGame();
}

function initGame() {
    // Game initialization code
}

function generateRandomSentence() {
    if (sentencesLoaded) {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        const sentencePlaceholder = document.getElementById("sentence-placeholder");
        sentencePlaceholder.innerText = sentences[randomIndex];
    } else {
        console.error('Sentences array is not loaded yet.');
    }
}

function addPlayer() {
    const newPlayerInput = document.getElementById("new-player");
    const playerName = newPlayerInput.value.trim();
    if (playerName !== "") {
        const playersList = document.getElementById("players-list");
        const newPlayerItem = document.createElement("li");
        newPlayerItem.innerHTML = `
            <span>${playerName}</span>
            <button onclick="increaseScore(this)">Increase Score</button>
            <span class="score">0</span>
        `;
        playersList.appendChild(newPlayerItem);
        newPlayerInput.value = "";
    }
}

function increaseScore(button) {
    const scoreSpan = button.nextElementSibling;
    let currentScore = parseInt(scoreSpan.innerText);
    scoreSpan.innerText = currentScore + 1;
}
