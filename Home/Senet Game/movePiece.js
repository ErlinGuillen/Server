function movePiece(index) {
            if(!hasRolled) return;
            if(gameState[index] !== currentPlayer) return;

            let target = index + lastRoll;

            // Movement & Victory Logic
            if (target > 30) {
                gameState[index] = 0; // Piece exits board
            } else {
                let targetOccupant = gameState[target];
                
                if (targetOccupant === currentPlayer) {
                    alert("Occupied by your own piece!");
                    return;
                }

                // Execute swap (Capture)
                gameState[index] = targetOccupant;
                gameState[target] = currentPlayer;

                // Square 27: The Water (Sends you back to House of Rebirth - Sq 15)
                if (target === 27) {
                    alert("Drowned! Returning to square 15.");
                    gameState[15] = currentPlayer;
                    gameState[27] = 0;
                }
            }

            // Play SFX
            moveSfx.currentTime = 0;
            moveSfx.play().catch(() => {});

            // Switch Turn
            hasRolled = false;
            currentPlayer = (currentPlayer === 1) ? 2 : 1;
            statusElement.innerText = `Player ${currentPlayer}'s Turn`;
            rollBtn.disabled = false;
            
            createBoard();
            checkWin();
        }