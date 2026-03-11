function checkWin() {
    const p1Pieces = gameState.filter(x => x === 1).length;
    const p2Pieces = gameState.filter(x => x === 2).length;

    if (p1Pieces === 0 || p2Pieces === 0) {
        // Trigger Confetti!
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffd700', '#ffffff', '#8b4513']
        });

        if (p1Pieces === 0) {
            alert("Player 1 Wins the journey to the Afterlife!");
            let p1Wins = parseInt(localStorage.getItem('p1Wins')) || 0;
            p1Wins++;
            localStorage.setItem('p1Wins', p1Wins);
            document.getElementById('p1-score').innerText = p1Wins;
            addToLog("Player 1 won the match!");
        } else {
            alert("Player 2 Wins the journey to the Afterlife!");
            let p2Wins = parseInt(localStorage.getItem('p2Wins')) || 0;
            p2Wins++;
            localStorage.setItem('p2Wins', p2Wins);
            document.getElementById('p2-score').innerText = p2Wins;
            addToLog("Player 2 won the match!");
            // EXTRA ALERT REMOVED FROM HERE TO FIX SYNTAX ERROR
        }

        // Streak Logic
        let streak = parseInt(localStorage.getItem('winStreak')) || 0;
        const gameMode = document.getElementById('game-mode').value;

        if (gameMode === 'ai') {
            if (p1Pieces === 0) { // Player 1 won against AI
                streak++;
                localStorage.setItem('winStreak', streak);
                document.getElementById('streak-count').innerText = streak;

                if (streak === 3) alert("? UNLOCKED: 'Blue Nile' theme!");
                else if (streak === 5) alert("? UNLOCKED: 'Golden Pharaoh' theme!");
            } else { // Player 1 lost to AI
                streak = 0; // Reset streak on loss
                localStorage.setItem('winStreak', streak);
                document.getElementById('streak-count').innerText = streak;
            }
        }
    }
}