const words = ["javascript", "programming", "developer", "web", "openai"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingGuesses = 10;

const wordDisplay = document.getElementById("wordDisplay");
const guessesDisplay = document.getElementById("guesses");
const remainingGuessesDisplay = document.getElementById("remainingGuesses");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");

function updateWordDisplay() {
    let displayWord = "";
    for (const letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            displayWord += letter + " ";
        } else {
            displayWord += "_ ";
        }
    }
    wordDisplay.textContent = displayWord;
}

function updateGuessesDisplay() {
    guessesDisplay.textContent = "Tahmin Harfleri: " + guessedLetters.join(", ");
}

function updateRemainingGuessesDisplay() {
    remainingGuessesDisplay.textContent = "Kalan Tahmin Hakkı: " + remainingGuesses;
}

function checkWin() {
    if (!wordDisplay.textContent.includes("_")) {
        alert("Tebrikler! Kazandınız!");
        resetGame();
    }
}

function checkLoss() {
    if (remainingGuesses === 0) {
        alert("Üzgünüm, kaybettiniz. Doğru kelime: " + selectedWord);
        resetGame();
    }
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingGuesses = 10;
    updateWordDisplay();
    updateGuessesDisplay();
    updateRemainingGuessesDisplay();
}

updateWordDisplay();
updateGuessesDisplay();
updateRemainingGuessesDisplay();

guessButton.addEventListener("click", function() {
    const guess = guessInput.value.toLowerCase();
    if (guess && guessedLetters.indexOf(guess) === -1) {
        guessedLetters.push(guess);
        if (selectedWord.includes(guess)) {
            updateWordDisplay();
            checkWin();
        } else {
            remainingGuesses--;
            updateGuessesDisplay();
            updateRemainingGuessesDisplay();
            checkLoss();
        }
    }
    guessInput.value = "";
});
