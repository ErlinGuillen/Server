function rollSticks() {
    // 1. Grab the sticks
    const sticks = document.querySelectorAll('.stick');
    const rollBtn = document.getElementById('roll-btn');
    
    if (hasRolled) return;
    if (rollBtn) rollBtn.disabled = true;

    // 2. Flip them and count them
    let whiteSides = 0;

   // Inside rollSticks function
    sticks.forEach((stick, index) => {
        // Remove the flipped class first to reset the "throw"
        stick.classList.remove('flipped');

        setTimeout(() => {
            const isFlipped = Math.random() > 0.5;
            if (isFlipped) {
                stick.classList.add('flipped');
                whiteSides++; // Make sure this count happens inside the timeout if needed
            }
        }, index * 60); 
    });

    // 3. Senet Scoring: 0 white sides = 5 points
    lastRoll = (whiteSides === 0) ? 5 : whiteSides;
    hasRolled = true;

    // 4. Update UI
    document.getElementById('roll-result').innerText = `Roll: ${lastRoll}`;
    
    if (window.sticksSfx) {
        window.sticksSfx.currentTime = 0;
        window.sticksSfx.play().catch(e => console.log("Sound blocked"));
    }

    // 5. Handle Turn Logic
    const modeSelect = document.getElementById('game-mode');
    const currentMode = modeSelect ? modeSelect.value : 'ai';

    if (currentPlayer === 2 && currentMode === 'ai') {
        setTimeout(() => {
            if (typeof runAI === 'function') runAI();
        }, 1200);
    } else {
        if (rollBtn) rollBtn.disabled = false;
    }
}
