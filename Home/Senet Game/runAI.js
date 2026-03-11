function runAI() {
    let aiPieces = [];
    gameState.forEach((player, index) => {
        if (player === 2) aiPieces.push(index);
    });

    // 1. Find all possible moves
    let validMoves = aiPieces.map(index => {
        let target = index + lastRoll;
        return { start: index, end: target, score: 0 };
    }).filter(move => {
        // Can't move past the final "off-board" square (31)
        if (move.end > 31) return false;
        
        // If moving off the board, it's always valid
        if (move.end === 31) return true;

        const occupant = gameState[move.end];

        // Can't land on own piece
        if (occupant === 2) return false;

        // CHECK FOR PLAYER 1 SAFE PAIR (Protection)
        if (occupant === 1) {
            const isProtected = (move.end > 1 && gameState[move.end - 1] === 1) || 
                                (move.end < 30 && gameState[move.end + 1] === 1);
            if (isProtected) return false; 
        }

        return true; 
    });

    // 2. Decision Logic
    if (validMoves.length > 0) {
        // AI EVALUATION SYSTEM (The "Refinement")
        validMoves.forEach(move => {
            if (move.end === 31) move.score += 100; // Priority: Finish the game
            if (gameState[move.end] === 1) move.score += 40; // Priority: Capture Player 1
            
            // Priority: Form a Safe Pair with another AI piece
            if (gameState[move.end - 1] === 2 || gameState[move.end + 1] === 2) {
                move.score += 25;
            }
            
            if (move.end === 27) move.score -= 50; // Penalty: Avoid the Water!
        });

        // Sort by highest score and pick the best one
        validMoves.sort((a, b) => b.score - a.score);
        let chosen = validMoves[0];

        addToLog(`AI (Smart) moves from ${chosen.start} to ${chosen.end === 31 ? 'Victory' : chosen.end}`);
        
        // Slight delay so the player can see the sticks before the piece moves
        setTimeout(() => {
            movePiece(chosen.start);
        }, 1000);
    } else {
        // 3. PASS LOGIC: If no moves are valid
        addToLog("AI has no valid moves and must pass.");
        currentPlayer = 1;
        hasRolled = false;
        document.getElementById('status').innerText = "Player 1's Turn";
        
        // Re-enable the roll button for the human player
        const rollBtn = document.getElementById('roll-btn');
        if (rollBtn) rollBtn.disabled = false;
    }
}