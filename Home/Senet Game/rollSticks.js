function rollSticks() {
    if (hasRolled) return;

    const sticks = document.querySelectorAll('.stick');
    const container = document.getElementById('sticks-container');
    
    // 1. Add throwing animation
    container.classList.add('throwing');
    if (rollBtn) rollBtn.disabled = true;

    setTimeout(() => {
        container.classList.remove('throwing');
        
        let whiteSides = 0;
        let results = [];

        // 2. Flip each stick randomly
        sticks.forEach(stick => {
            const isWhite = Math.random() > 0.5;
            if (isWhite) {
                stick.classList.add('white');
                stick.style.transform = "rotateY(0deg)";
                whiteSides++;
            } else {
                stick.classList.remove('white');
                stick.style.transform = "rotateY(180deg)";
            }
        });

        // 3. Ancient Scoring Rules:
        // 1 white = 1, 2 white = 2, 3 white = 3, 4 white = 4, 0 white = 5
        lastRoll = whiteSides === 0 ? 5 : whiteSides;
        
        rollResultElement.innerText = `Roll: ${lastRoll}`;
        hasRolled = true;
        
        addToLog(`Player ${currentPlayer} threw the sticks: ${lastRoll}`);
        
        if (rollBtn) rollBtn.disabled = false;
        
        // If playing against AI, it will handle the next move
        if (currentPlayer === 2 && document.getElementById('game-mode').value === 'ai') {
            runAI();
        }
    }, 600);
}