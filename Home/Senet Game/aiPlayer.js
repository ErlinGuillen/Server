function runAI() {
    // Only run if it is Player 2's turn
    if (currentPlayer !== 2) return;

    // 1. Wait a moment, then Roll
    setTimeout(() => {
        if (!hasRolled) {
            rollSticks();
            addToLog("AI (Player 2) rolled a " + lastRoll);
            
            // 2. Wait again, then Choose a Move
            setTimeout(() => {
                const myPieces = [];
                // Find all squares where Player 2 has a piece
                for (let i = 1; i <= 30; i++) {
                    if (gameState[i] === 2) myPieces.push(i);
                }

                // Simple AI Fallback: Sort pieces furthest along the board
                myPieces.sort((a, b) => b - a);

                let bestMove = null;

                // Expert Logic: Look for high-priority moves
                for (let pieceIndex of myPieces) {
                    let target = pieceIndex + lastRoll;
                    
                    // Priority 1: Clear a piece off the board
                    if (target > 30) {
                        bestMove = pieceIndex;
                        break;
                    }

                    // Priority 2: Capture a Player 1 piece (Square occupied by 1)
                    if (gameState[target] === 1) {
                        bestMove = pieceIndex;
                        break;
                    }
                    
                    // Priority 3: Land on the House of Happiness (Square 26)
                    if (target === 26) {
                        bestMove = pieceIndex;
                        // Don't break yet, check if other pieces can capture instead
                    }
                }

                // If no high-priority move is found, use the furthest piece
                let finalMoveIndex = bestMove !== null ? bestMove : myPieces[0];
                
                let moved = false;
                if (finalMoveIndex !== undefined) {
                    let target = finalMoveIndex + lastRoll;
                    // Final check to ensure it's not landing on its own piece
                    if (target > 30 || gameState[target] !== 2) {
                        movePiece(finalMoveIndex);
                        moved = true;
                    }
                }

                if (!moved) {
                    addToLog("AI has no valid moves!");
                    // Skip turn logic
                    hasRolled = false;
                    currentPlayer = 1;
                    statusElement.innerText = "Player 1's Turn";
                    if (typeof rollBtn !== 'undefined') rollBtn.disabled = false;
                    createBoard();
                }
            }, 1000);
        }
    }, 1000);
}