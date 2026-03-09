function checkWin() {
    const p1Pieces = gameState.filter(x => x === 1).length;
    const p2Pieces = gameState.filter(x => x === 2).length;

    if (p1Pieces === 0) {
        alert("Player 1 Wins!");
        p1Wins++;
        document.getElementById('p1-score').innerText = p1Wins;
        addToLog("Player 1 won the match!");
        resetGame();
    } else if (p2Pieces === 0) {
        alert("Player 2 Wins!");
        p2Wins++;
        document.getElementById('p2-score').innerText = p2Wins;
        addToLog("Player 2 won the match!");
        resetGame();
    }
}