function createBoard() {
    boardElement.innerHTML = '';

    // The special hieroglyph icons for the final squares
    const specialIcons = {
        26: "𓄣", // House of Happiness
        27: "𓈗", // House of Water
        28: "𓏽", // House of Three
        29: "𓏾", // House of Two
        30: "𓅃"  // House of Horus
    };

    // Loop through all 30 squares of the Senet board
    for (let i = 1; i <= 30; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // Apply special classes for colors/styling
        if (i === 26) cell.classList.add('special', 'house-of-happiness');
        if (i === 27) cell.classList.add('special', 'water');
        if (i >= 28 && i <= 30) cell.classList.add('special');

        // FIX: Ensure 'i' is defined inside this loop to avoid ReferenceError
        if (specialIcons[i]) {
            cell.innerHTML = `<span style="font-size: 20px;">${specialIcons[i]}</span>`;
        } else {
            cell.innerText = i;
        }

        // Create the game pieces (p1 or p2)
        if (gameState[i] > 0) {
            const piece = document.createElement('div');
            piece.classList.add('piece', `p${gameState[i]}`);
            
            // Add click event for moving
            piece.onclick = () => movePiece(i);
            cell.appendChild(piece);
        }

        boardElement.appendChild(cell);
    }
}