function changeMode() {
    const mode = document.getElementById('game-mode').value;
    addToLog("Game mode changed to: " + (mode === 'ai' ? "vs Computer" : "vs Friend"));
    resetGame(); // Start fresh with the new mode
}