function update() {
    if (gameState !== "PLAYING") return;

    let currentLevel = Math.floor(score / 10) + 1;
    if (currentLevel > level) {
        level = currentLevel;
        spawnParticles(canvas.width/2, canvas.height/2, "#FFDC00");
    }

    // Player Movement (Speed is unaffected by slow-mo to give player advantage)
    if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
    if (keys["ArrowRight"] && player.x < canvas.width - player.size) player.x += player.speed;

    particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; p.life--;
        if (p.life <= 0) particles.splice(i, 1);
    });

    // Power-up Logic
    powerUps.forEach((p, i) => {
        p.y += p.speed;
        if (player.x < p.x + p.size && player.x + player.size > p.x && player.y < p.y + p.size) {
            if (p.type === "shield") {
                hasShield = true;
            } else {
                activateSlowMo();
            }
            playSound("powerup");
            powerUps.splice(i, 1);
        }
    });

    // Enemy Logic
    enemies.forEach((enemy, index) => {
        // Enemies move 50% slower if Slow-Mo is active
        let currentSpeed = isSlowMo ? enemy.speed * 0.5 : enemy.speed;
        enemy.y += currentSpeed;

        if (enemy.y > canvas.height) {
            enemy.y = -30;
            enemy.x = Math.random() * (canvas.width - enemy.size);
            score++;
            scoreUI.innerText = score;
            playSound("score");
            if (score % 5 === 0) spawnEnemy();
            if (score % 15 === 0) spawnPowerUp(); // Spawn powerups periodically
        }

        if (player.x < enemy.x + enemy.size && player.x + player.size > enemy.x &&
            player.y < enemy.y + enemy.size && player.y + player.size > enemy.y) {
            if (hasShield) {
                hasShield = false; 
                enemies.splice(index, 1);
                spawnEnemy();
                playSound("powerup");
            } else {
                gameOver();
            }
        }
    });
}

function activateSlowMo() {
    if (isSlowMo) return; // Don't stack if already active
    isSlowMo = true;
    sounds.background.playbackRate = 0.75; // Music gets deeper/slower
    
    setTimeout(() => {
        isSlowMo = false;
        sounds.background.playbackRate = 1.0; // Reset music
    }, 5000); // Lasts 5 seconds
}