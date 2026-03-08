function gameOver() {
    gameState = "OVER";
    // This happens every time you lose:
    spawnParticles(player.x + player.size/2, player.y + player.size/2, player.color);
    
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("dodgerHighScore", highScore);
        highUI.innerText = highScore;
    }
}