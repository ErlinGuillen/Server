function rollSticks() {
    const sticks = document.querySelectorAll('.stick');
    const rollBtn = document.getElementById('roll-btn');
    
    if (hasRolled) return;

    // Disable button during animation
    if (rollBtn) rollBtn.disabled = true;

    // Animate sticks
    sticks.forEach(stick => {
        const isFlipped = Math.random() > 0.5;
        stick.classList.toggle('flipped', isFlipped);
    });

    // Calculate score (1-5)
    let whiteSides = 0;
    document.querySelectorAll('.stick.flipped').forEach(() => whiteSides++);
    
    // In Senet: 0 white sides = 5 points
    lastRoll = whiteSides === 0 ? 5 : whiteSides;
    hasRolled = true;

    document.getElementById('roll-result').innerText = `Roll: ${lastRoll}`;

    // Re-enable button if it's a human turn
    if (currentPlayer === 1) {
        if (rollBtn) rollBtn.disabled = false;
    }

    // --- TRIGGER AI LOGIC ---
    const modeSelect = document.getElementById('game-mode');
    const currentMode = modeSelect ? modeSelect.value : 'ai';

    if (currentPlayer === 2 && currentMode === 'ai') {
        setTimeout(() => {
            if (typeof runAI === 'function') {
                runAI();
            } else {
                console.error("runAI.js is missing or not loaded!");
            }
        }, 1000);
    }
} // <--- This was likely the missing brace!