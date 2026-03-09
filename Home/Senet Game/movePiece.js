function movePiece(index) {
    if (!hasRolled) return;
    if (gameState[index] !== currentPlayer) return;

    let target = index + lastRoll;

    if (target > 30) {
        gameState[index] = 0;
        addToLog(`Player ${currentPlayer} cleared a piece!`);
    } else {
        let targetOccupant = gameState[target];
        if (targetOccupant === currentPlayer) {
            if (currentPlayer === 1) alert("Occupied by your own piece!");
            return;
        }

        gameState[index] = targetOccupant;
        gameState[target] = currentPlayer;

        if (target === 27) {
            addToLog(`Player ${currentPlayer} drowned!`);
            gameState[15] = currentPlayer;
            gameState[27] = 0;
        }
    }

    moveSfx.currentTime = 0;
    moveSfx.play().catch(() => {});

    hasRolled = false;
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    statusElement.innerText = `Player ${currentPlayer}'s Turn`;
    rollBtn.disabled = false;
    
    createBoard();
    checkWin();

    // TRIGGER AI: If it's now Player 2's turn, start the AI
    if (currentPlayer === 2) {
        runAI();
    }
} // <--- MAKE SURE THIS BRACKET IS HERE