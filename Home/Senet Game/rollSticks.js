function rollSticks() {
    const sticks = document.querySelectorAll('.stick');
    const rollBtn = document.getElementById('roll-btn');
    
    if (hasRolled) return;

    // 1. RESET the count to 0 at the start of every roll
    let whiteSides = 0; 

    sticks.forEach((stick, index) => {
        // 2. Generate a NEW random result for EVERY stick
        const isFlipped = Math.random() > 0.5; 
        
        // Remove old class and add new one
        stick.classList.remove('flipped');
        
        // Use a small delay for the animation effect
        setTimeout(() => {
            if (isFlipped) {
                stick.classList.add('flipped');
            }
        }, index * 60);

        // 3. Count the white sides
        if (isFlipped) {
            whiteSides++;
        }
    });

    // 4. Scoring: In Senet, 0 white = 5. Otherwise, it's just the count.
    lastRoll = (whiteSides === 0) ? 5 : whiteSides;
    hasRolled = true;

    // 5. Update the UI
    document.getElementById('roll-result').innerText = `Roll: ${lastRoll}`;

    // Play sound if available
    if (window.sticksSfx) {
        window.sticksSfx.currentTime = 0;
        window.sticksSfx.play().catch(() => {});
    }

    // AI Turn Logic
    if (currentPlayer === 2) {
        setTimeout(() => { if (typeof runAI === 'function') runAI(); }, 1200);
    } else {
        if (rollBtn) rollBtn.disabled = false;
    }
}