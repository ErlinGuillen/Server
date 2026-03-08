function resetGame() {
    score = 0;
    level = 1; // Reset level
    scoreUI.innerText = score;
    hasShield = false;
    enemies = [{ x: Math.random() * 370, y: -30, size: 30, speed: 4 }];
    powerUps = [];
    gameState = "PLAYING";
}