function movePiece(index) {
    // 1. Snapshot for Undo
    previousGameState = [...gameState];
    previousPlayer = currentPlayer;

    if (!hasRolled) {
        alert("Please roll the sticks first!");
        return;
    }

    if (gameState[index] !== currentPlayer) {
        alert("That's not your piece!");
        return;
    }

    let targetIndex = index + lastRoll;

    // 2. Movement Logic
    if (targetIndex > 30) {
        gameState[index] = 0;
        addToLog(`Player ${currentPlayer} moved off the board!`);
    } else {
        let occupant = gameState[targetIndex];
        if (occupant === currentPlayer) {
            alert("You already have a piece there!");
            return;
        }

        if (targetIndex === 27) {
            const splashSfx = document.getElementById('sfx-splash');
            if (splashSfx) splashSfx.play();
            addToLog(`Player ${currentPlayer} hit the Water! Reset to 15.`);
            gameState[index] = 0;
            gameState[15] = currentPlayer;
        } else {
            // Swap pieces (Capture)
            if (occupant !== 0) {
                addToLog(`Captured opponent at ${targetIndex}!`);
                gameState[index] = occupant;
            } else {
                gameState[index] = 0;
            }
            gameState[targetIndex] = currentPlayer;
        }
    }

    // 3. Update Board & Check Win
    if (moveSfx) moveSfx.play();
    createBoard();
    checkWin();

    // 4. End Turn & Switch Player
    hasRolled = false;
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    statusElement.innerText = `Player ${currentPlayer}'s Turn`;

    // 5. Handle AI Turn
    const gameMode = document.getElementById('game-mode').value;
    if (currentPlayer === 2 && gameMode === 'ai') {
        statusElement.innerText = "Computer is thinking...";
        if (rollBtn) rollBtn.disabled = true;
        setTimeout(() => {
            runAI();
        }, 600);
    }
} // <--- This final bracket was likely missing!