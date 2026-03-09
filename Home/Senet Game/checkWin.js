       function checkWin() {
            const p1Pieces = gameState.filter(x => x === 1).length;
            const p2Pieces = gameState.filter(x => x === 2).length;
            
            if (p1Pieces === 0) {
                alert("Player 1 Wins the journey to the Afterlife!");
                resetGame();
            } else if (p2Pieces === 0) {
                alert("Player 2 Wins the journey to the Afterlife!");
                resetGame();
            }
        }