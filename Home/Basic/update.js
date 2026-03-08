        function update() {
            if (gameState !== "PLAYING") return;

            // Player Movement
            if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
            if (keys["ArrowRight"] && player.x < canvas.width - player.size) player.x += player.speed;

            // Power-up Logic
            powerUps.forEach((p, i) => {
                p.y += p.speed;
                if (player.x < p.x + p.size && player.x + player.size > p.x &&
                    player.y < p.y + p.size && player.y + player.size > p.y) {
                    hasShield = true;
                    powerUps.splice(i, 1);
                }
            });

            // Enemy Logic
            enemies.forEach((enemy, index) => {
                enemy.y += enemy.speed;

                if (enemy.y > canvas.height) {
                    enemy.y = -30;
                    enemy.x = Math.random() * (canvas.width - enemy.size);
                    score++;
                    scoreUI.innerText = score;
                    if (score % 10 === 0) spawnEnemy();
                }

                // Collision Detection
                if (player.x < enemy.x + enemy.size && player.x + player.size > enemy.x &&
                    player.y < enemy.y + enemy.size && player.y + player.size > enemy.y) {
                    
                    if (hasShield) {
                        hasShield = false; 
                        enemies.splice(index, 1);
                        spawnEnemy(); // Replace the one we destroyed
                    } else {
                        gameOver();
                    }
                }
            });

            if (Math.random() < 0.003) spawnPowerUp();
        }