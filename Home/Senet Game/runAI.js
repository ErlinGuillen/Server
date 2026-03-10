function runAI() {
    // 1. Identify all pieces belonging to the AI (Player 2)
    let aiPieces = [];
    gameState.forEach((player, index) => {
        if (player === 2) aiPieces.push(index);
    });

    // 2. Find valid moves
    let validMoves = aiPieces.filter(index => {
        let target = index + lastRoll;
        // Ensure move is on board and not landing on own piece
        return target <= 30 && gameState[target] !== 2;
    });

    // 3. Simple Strategy: Pick a move
    if (validMoves.length > 0) {
        // Priority 1: Move a piece off the board
        let finishingMove = validMoves.find(index => index + lastRoll === 31);
        // Priority 2: Capture a player 1 piece
        let captureMove = validMoves.find(index => gameState[index + lastRoll] === 1);
        
        let chosenMove = finishingMove || captureMove || validMoves[Math.floor(Math.random() * validMoves.length)];

        addToLog(`AI decided to move from square ${chosenMove}`);
        
        // Small delay so the human can see what happened
        setTimeout(() => {
            movePiece(chosenMove);
        }, 800);
    } else {
        addToLog("AI has no valid moves and passes.");
        // Switch back to Player 1
        currentPlayer = 1;
        hasRolled = false;
        statusElement.innerText = "Player 1's Turn";
        if (rollBtn) rollBtn.disabled = false;
    }
}