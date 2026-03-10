function createBoard() {
    boardElement.innerHTML = '';

    const specialIcons = {
        26: "?", 
        27: "?", 
        28: "?", 
        29: "?", 
        30: "?"
    };

    for (let i = 1; i <= 30; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        if (i === 26) cell.classList.add('special', 'house-of-happiness');
        if (i === 27) cell.classList.add('special', 'water');
        if (i >= 28 && i <= 30) cell.classList.add('special');

        if (specialIcons[i]) {
            cell.innerHTML = `<span style="font-size: 20px;">${specialIcons[i]}</span>`;
        } else {
            cell.innerText = i;
        }

        if (gameState[i] > 0) {
            const piece = document.createElement('div'); // Piece is defined here
            piece.classList.add('piece', `p${gameState[i]}`);
            
            // FIX: The onclick logic must be inside this block where 'piece' exists
            piece.onclick = () => {
                // 1. Clear previous highlights
                document.querySelectorAll('.cell').forEach(c => c.classList.remove('highlight-target'));

                // 2. Only show highlight if it's the current player's piece and they've rolled
                if (hasRolled && gameState[i] === currentPlayer) {
                    let target = i + lastRoll;
                    if (target <= 30) {
                        const targetCell = boardElement.children[target - 1]; 
                        if (targetCell) targetCell.classList.add('highlight-target');
                    }
                    // 3. Brief delay to show the glow before moving
                    setTimeout(() => movePiece(i), 300);
                } else {
                    movePiece(i);
                }
            };
            cell.appendChild(piece);
        }

        boardElement.appendChild(cell);
    }
}