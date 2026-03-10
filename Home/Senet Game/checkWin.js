function checkWin() {
    const p1Pieces = gameState.filter(x => x === 1).length;
    const p2Pieces = gameState.filter(x => x === 2).length;

    if (p1Pieces === 0 || p2Pieces === 0) {
        // Trigger Confetti!
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffd700', '#ffffff', '#8b4513'] // Gold, White, and Bronze
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
            setTimeout(() => {
               alert("Player 1 Wins the journey to the Afterlife!");
            }, 100);
        }
// ... (existing win logic above)

        let streak = parseInt(localStorage.getItem('winStreak')) || 0;
        const gameMode = document.getElementById('game-mode').value;

        // Check if the win counts toward a streak
        if (gameMode === 'ai') {
            streak++;
            localStorage.setItem('winStreak', streak);
            document.getElementById('streak-count').innerText = streak;

            // Unlock Notifications
            if (streak === 3) {
                alert("🎁 UNLOCKED: 'Blue Nile' theme is now available in Settings!");
            } else if (streak === 5) {
                alert("✨ UNLOCKED: 'Golden Pharaoh' legendary theme earned!");
            }
        } // End of AI check
    } // End of pieces check
} // End of function checkWin