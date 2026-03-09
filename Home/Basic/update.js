function update() {
    if (gameState !== "PLAYING") return;

    // Handle Pulse Input (Key B)
    if (keys["KeyB"] && pulseBlasts > 0 && !isPulseActive) {
        activatePulse();
    }

    if (isPulseActive) {
        pulseRadius += 10;
        if (pulseRadius > 150) isPulseActive = false;
    }

    // Player Movement
    if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
    if (keys["ArrowRight"] && player.x < canvas.width - player.size) player.x += player.speed;

    // Particle Physics
    particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; p.life--;
        if (p.life <= 0) particles.splice(i, 1);
    });

    // Power-up Collision
    powerUps.forEach((p, i) => {
        p.y += p.speed;
        if (player.x < p.x + p.size && player.x + player.size > p.x && player.y < p.y + p.size) {
            if (p.type === "shield") hasShield = true;
            else activateSlowMo();
            playSound("powerup");
            powerUps.splice(i, 1);
        }
    });

    // Enemy Logic
    enemies.forEach((enemy, index) => {
        let moveSpeed = isSlowMo ? enemy.speed * 0.5 : enemy.speed;
        enemy.y += moveSpeed;

        if (enemy.y > canvas.height) {
            enemy.y = -30;
            enemy.x = Math.random() * (canvas.width - enemy.size);
            score++;
            scoreUI.innerText = score;
            playSound("score");
            
            // Difficulty & Rewards
            if (score % 5 === 0) spawnEnemy();
            if (score % 15 === 0) spawnPowerUp();
            if (score % 50 === 0) {
                pulseBlasts++;
                playSound("powerup");
            }

            // Level Up
            let currentLevel = Math.floor(score / 10) + 1;
            if (currentLevel > level) {
                level = currentLevel;
                spawnParticles(canvas.width/2, canvas.height/2, "#FFDC00");
            }
        }

        // Collision Check
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
    if (isSlowMo) return;
    isSlowMo = true;
    if(sounds.background) sounds.background.playbackRate = 0.7;
    setTimeout(() => {
        isSlowMo = false;
        if(sounds.background) sounds.background.playbackRate = 1.0;
    }, 5000);
}

function activatePulse() {
    pulseBlasts--;
    isPulseActive = true;
    pulseRadius = 0;
    playSound("explosion");

    enemies.forEach((e, index) => {
        let dx = (player.x + player.size/2) - (e.x + e.size/2);
        let dy = (player.y + player.size/2) - (e.y + e.size/2);
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
            spawnParticles(e.x, e.y, e.color || "#FF4136");
            enemies.splice(index, 1);
            score++;
            spawnEnemy();
        }
    });
}