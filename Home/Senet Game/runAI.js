function runAI() {
    let aiPieces = [];
    gameState.forEach((player, index) => {
        if (player === 2) aiPieces.push(index);
    });

    // 1. Find all possible moves
    let validMoves = aiPieces.map(index => {
        let target = index + lastRoll;
        return { start: index, end: target };
    }).filter(move => {
        // Can move if target is on board and not blocked by own piece
        // OR if target is > 30 (which means moving off the board)
        if (move.end <= 30) {
            return gameState[move.end] !== 2;
        }
        return true; // Allow moving off the board
    });

    if (validMoves.length > 0) {
        // 2. PRIORITY: Move off the board if possible!
        let winMove = validMoves.find(m => m.end >= 31);
        
        // 3. SECOND PRIORITY: Capture a Player 1 piece
        let captureMove = validMoves.find(m => gameState[m.end] === 1);
        
        // Pick the best move found, or a random valid one
        let chosen = winMove || captureMove || validMoves[Math.floor(Math.random() * validMoves.length)];

        addToLog(`AI moves from ${chosen.start} towards ${chosen.end > 30 ? 'Victory!' : chosen.end}`);
        
        setTimeout(() => {
            movePiece(chosen.start);
        }, 800);
    } else {
        addToLog("AI has no moves and passes.");
        currentPlayer = 1;
        hasRolled = false;
        statusElement.innerText = "Player 1's Turn";
        if (typeof rollBtn !== 'undefined') rollBtn.disabled = false;
    }
}