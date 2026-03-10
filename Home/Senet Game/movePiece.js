function movePiece(index) {
    if (!hasRolled) {
        alert("Please roll the sticks first!");
        return;
    }

    if (gameState[index] !== currentPlayer) {
        alert("That's not your piece!");
        return;
    }

    let targetIndex = index + lastRoll;

    // Movement Logic
    if (targetIndex > 30) {
        // Piece finishes the journey
        gameState[index] = 0;
        addToLog(`Player ${currentPlayer} moved a piece off the board!`);
    } else {
        let occupant = gameState[targetIndex];

        if (occupant === currentPlayer) {
            alert("You already have a piece there!");
            return;
        }

     if (targetIndex === 27) {
    const splashSfx = document.getElementById('sfx-splash');
    if (splashSfx) splashSfx.play();
    addToLog(`Player ${currentPlayer} fell into the Water! Reset to Square 15.`);
    gameState[index] = 0;
    gameState[15] = currentPlayer;
} else {
            // Standard move or Capture (Swap)
            if (occupant !== 0) {
                addToLog(`Player ${currentPlayer} captured an opponent at ${targetIndex}!`);
                gameState[index] = occupant; // Swap opponent back
            } else {
                gameState[index] = 0;
            }
            gameState[targetIndex] = currentPlayer;
        }
    }

    // Play Sound and Re-render
    if (moveSfx) moveSfx.play();
    createBoard();
    checkWin();

    // End Turn
    hasRolled = false;
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    
    // --- NEW LOGIC FOR LOCAL 2-PLAYER vs AI ---
    const gameModeElement = document.getElementById('game-mode');
    const gameMode = gameModeElement ? gameModeElement.value : 'ai';

    if (currentPlayer === 2 && gameMode === 'ai') {
        statusElement.innerText = "Computer is thinking...";
        if (rollBtn) rollBtn.disabled = true;
        runAI();
    } else {
        statusElement.innerText = `Player ${currentPlayer}'s Turn`;
        if (rollBtn) rollBtn.disabled = false;
    }
}