    // FIX: Add the missing resetGame function required by checkWin.js
    function resetGame() {
        gameState.fill(0);
        for(let i=1; i<=10; i++) {
            gameState[i] = (i % 2 === 0) ? 2 : 1;
        }
        currentPlayer = 1;
        hasRolled = false;
        rollBtn.disabled = false;
        statusElement.innerText = "Player 1's Turn";
        createBoard();
    }