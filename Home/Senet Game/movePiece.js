function movePiece(index) {
    // 1. Snapshot for Undo
    if (currentPlayer === 1) {
        previousGameState = [...gameState];
        previousPlayer = 1;
    }

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
            if (typeof sfxSplash !== 'undefined') sfxSplash.play();
            addToLog(`Player ${currentPlayer} hit the Water! Reset to 15.`);
            gameState[index] = 0;
            gameState[15] = currentPlayer;
        } else {
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
    createBoard();
    checkWin();

    // 4. End Turn & Switch Player
    hasRolled = false;
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    statusElement.innerText = `Player ${currentPlayer}'s Turn`;

    // 5. Handle AI Turn
    const modeSelect = document.getElementById('game-mode'); // Renamed to avoid error
    const currentMode = modeSelect ? modeSelect.value : 'ai';

    if (currentPlayer === 2 && currentMode === 'ai') {
        statusElement.innerText = "Computer is rolling...";
        if (typeof rollBtn !== 'undefined' && rollBtn) rollBtn.disabled = true;
        
        setTimeout(() => {
            rollSticks(); 
        }, 1000);
    } else {
        if (typeof rollBtn !== 'undefined' && rollBtn) rollBtn.disabled = false;
    }
}