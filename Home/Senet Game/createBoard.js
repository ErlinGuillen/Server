function createBoard() {
    boardElement.innerHTML = '';

    const specialIcons = { 26: "𓄼", 27: "𓈗", 28: "𓋀", 29: "𓋁", 30: "𓏶" };

    for (let i = 1; i <= 30; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // --- SNAKE LOGIC ---
        // Row 1: 1-10 (Left to Right)
        // Row 2: 11-20 (Right to Left)
        // Row 3: 21-30 (Left to Right)
        let visualIndex;
        let row = Math.floor((i - 1) / 10);
        if (row === 1) {
            visualIndex = 20 - (i - 11); // Reverses the middle row
        } else {
            visualIndex = i;
        }

        // Store the TRUE mathematical index in the HTML element
        cell.setAttribute('data-index', visualIndex);

        // Styling based on visualIndex
        if (visualIndex === 26) cell.classList.add('special', 'house-of-happiness');
        if (visualIndex === 27) cell.classList.add('special', 'water');
        if (visualIndex >= 28 && visualIndex <= 30) cell.classList.add('special');

        cell.innerHTML = specialIcons[visualIndex] 
            ? `<span style="font-size: 20px;">${specialIcons[visualIndex]}</span>` 
            : visualIndex;

        // Draw Pieces
        if (gameState[visualIndex] > 0) {
            const piece = document.createElement('div');
            piece.classList.add('piece', `p${gameState[visualIndex]}`);
            
            piece.onclick = () => {
                // 1. Clear previous highlights
                document.querySelectorAll('.cell').forEach(c => c.classList.remove('highlight-target'));

                // 2. Logic for current player
                if (hasRolled && gameState[visualIndex] === currentPlayer) {
                    let target = visualIndex + lastRoll;
                    if (target <= 30) {
                        // FIX: Search for the cell by its data-index attribute
                        const targetCell = document.querySelector(`[data-index="${target}"]`);
                        if (targetCell) targetCell.classList.add('highlight-target');
                    }
                    setTimeout(() => movePiece(visualIndex), 300);
                } else {
                    movePiece(visualIndex);
                }
            };
            cell.appendChild(piece);
        }

        boardElement.appendChild(cell);
    }
}