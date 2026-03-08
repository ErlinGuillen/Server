function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 20; // Fade out as they die
        ctx.fillRect(p.x, p.y, 4, 4);
    });
    ctx.globalAlpha = 1.0; // Reset alpha for other objects
	
    ctx.fillStyle = "#333";
    for(let i=0; i<10; i++) {
        ctx.fillRect(i*50, (Date.now()/20 + i*100)%600, 2, 2);
    }

    if (gameState === "START") {
        drawText("SQUARE DODGER", 30, canvas.height/2 - 20);
        drawText("PRESS SPACE TO START", 18, canvas.height/2 + 30);
    } 

    if (gameState === "PLAYING" || gameState === "OVER") {
        // Shield Visual
        if (hasShield) {
            ctx.strokeStyle = "#00ffff";
            ctx.lineWidth = 4;
            ctx.strokeRect(player.x - 5, player.y - 5, player.size + 10, player.size + 10);
        }

        // Player
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.size, player.size);

        // Enemies
        ctx.fillStyle = "#FF4136";
        enemies.forEach(e => ctx.fillRect(e.x, e.y, e.size, e.size));

        // Powerups
        ctx.fillStyle = "#FFDC00";
        powerUps.forEach(p => ctx.fillRect(p.x, p.y, p.size, p.size));
    }

    if (gameState === "OVER") {
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawText("GAME OVER", 30, canvas.height/2);
        drawText("PRESS SPACE TO REPLAY", 18, canvas.height/2 + 50);
    }
}