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
    const modeSelect = document.getElementById('game-mode');
    const isAIMode = modeSelect && modeSelect.value === 'ai';

    // 2. Movement & Protection Logic
    if (targetIndex > 30) {
        // Finishing the journey
        gameState[index] = 0;
        let pName = (currentPlayer === 1) ? "Player 1" : (isAIMode ? "AI" : "Player 2");
        addToLog(`${pName} completed a journey!`);
    } else {
        let occupant = gameState[targetIndex];

        // SAFE PAIR CHECK: Is the opponent protected?
        if (occupant !== 0 && occupant !== currentPlayer) {
            const isProtected = (targetIndex > 1 && gameState[targetIndex - 1] === occupant) || 
                                (targetIndex < 30 && gameState[targetIndex + 1] === occupant);
            if (isProtected) {
                alert("That piece is protected by a Safe Pair!");
                return;
            }
        }

        if (occupant === currentPlayer) {
            alert("You already have a piece there!");
            return;
        }

        // HOUSE OF WATER CHECK
        if (targetIndex === 27) {
            if (window.splashSfx) window.splashSfx.play();
            let pName = (currentPlayer === 1) ? "Player 1" : (isAIMode ? "AI" : "Player 2");
            addToLog(`${pName} hit the Water! Reset to 15.`);
            gameState[index] = 0;
            gameState[15] = currentPlayer;
        } else {
            // Normal move or Capture (Swap)
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
    if (window.moveSfx) window.moveSfx.play();

    // 4. EXTRA TURN & TURN SWITCH LOGIC
    const extraTurnRolls = [1, 4, 5];
    let currentName = (currentPlayer === 1) ? "Player 1" : (isAIMode ? "AI" : "Player 2");

    if (extraTurnRolls.includes(lastRoll)) {
        addToLog(`${currentName} rolled ${lastRoll} - Extra Turn!`);
        hasRolled = false; 
        document.getElementById('status').innerText = `${currentName} - Roll Again!`;
    } else {
        hasRolled = false;
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        let nextName = (currentPlayer === 1) ? "Player 1" : (isAIMode ? "AI" : "Player 2");
        document.getElementById('status').innerText = `${nextName}'s Turn`;
    }

    // 5. Handle AI Next Step
    if (currentPlayer === 2 && isAIMode) {
        if (typeof rollBtn !== 'undefined' && rollBtn) rollBtn.disabled = true;
        setTimeout(() => { if (typeof rollSticks === 'function') rollSticks(); }, 1000);
    } else {
        if (typeof rollBtn !== 'undefined' && rollBtn) rollBtn.disabled = false;
    }
}