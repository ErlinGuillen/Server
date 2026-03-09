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

                // Simple AI: Try moving the piece furthest along the board first
                myPieces.sort((a, b) => b - a);

                let moved = false;
                for (let pieceIndex of myPieces) {
                    let target = pieceIndex + lastRoll;
                    
                    // Check if move is valid (not landing on own piece)
                    if (target > 30 || gameState[target] !== 2) {
                        movePiece(pieceIndex);
                        moved = true;
                        break;
                    }
                }

                if (!moved) {
                    addToLog("AI has no valid moves!");
                    // Skip turn
                    hasRolled = false;
                    currentPlayer = 1;
                    statusElement.innerText = "Player 1's Turn";
                    rollBtn.disabled = false;
                    createBoard();
                }
            }, 1000);
        }
    }, 1000);
}