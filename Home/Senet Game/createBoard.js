      function createBoard() {
            boardElement.innerHTML = '';
            
            // The S-curve display order
            const displayOrder = [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30
            ];

            displayOrder.forEach(i => {
                const cell = document.createElement('div');
                cell.className = 'cell';
                
                // Square types
                if(i === 26) cell.classList.add('special', 'house-of-happiness');
                else if(i === 27) cell.classList.add('special', 'water');
                else if(i >= 28) cell.classList.add('special');
                
                cell.innerText = i;

                if (gameState[i] !== 0) {
                    const piece = document.createElement('div');
                    piece.className = `piece p${gameState[i]}`;
                    piece.onclick = () => movePiece(i);
                    cell.appendChild(piece);
                }
                boardElement.appendChild(cell);
            });
        }