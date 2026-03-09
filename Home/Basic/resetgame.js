function resetGame() {
    startMusic();
    score = 0;
    level = 1;
    hasShield = false;
    isSlowMo = false;
    pulseBlasts = 0;
    isPulseActive = false;
    enemies = [{ x: Math.random() * 370, y: -30, size: 30, speed: 4 }];
    powerUps = [];
    scoreUI.innerText = score;
    gameState = "PLAYING";
}