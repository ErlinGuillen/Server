function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background Stars
    ctx.fillStyle = "#333";
    for(let i=0; i<10; i++) ctx.fillRect(i*50, (Date.now()/20 + i*100)%600, 2, 2);

    // Particles
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 20;
        ctx.fillRect(p.x, p.y, 4, 4);
    });
    ctx.globalAlpha = 1.0;

    if (gameState === "START") {
        drawText("SQUARE DODGER PRO", 30, canvas.height/2);
        drawText("PRESS SPACE", 18, canvas.height/2 + 40);
    } 

    if (gameState === "PLAYING" || gameState === "OVER") {
        // Slow-Mo Screen Effect
        if (isSlowMo) {
            ctx.fillStyle = "rgba(255, 220, 0, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Power Ups
        powerUps.forEach(p => {
            if (p.type === "shield") {
                ctx.fillStyle = "#00ffff";
                ctx.fillRect(p.x, p.y, p.size, p.size);
            } else {
                ctx.fillStyle = "#FFDC00"; // Yellow Circle for Slow-Mo
                ctx.beginPath();
                ctx.arc(p.x + p.size/2, p.y + p.size/2, p.size/2, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Player & Shield
        if (hasShield) {
            ctx.strokeStyle = "#00ffff";
            ctx.lineWidth = 3;
            ctx.strokeRect(player.x-5, player.y-5, player.size+10, player.size+10);
        }
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.size, player.size);
        
        // Enemies
        enemies.forEach(e => {
            ctx.fillStyle = e.color || "#FF4136";
            if (e.type === "hunter") {
                ctx.beginPath();
                ctx.moveTo(e.x, e.y);
                ctx.lineTo(e.x + e.size, e.y);
                ctx.lineTo(e.x + e.size / 2, e.y + e.size);
                ctx.fill();
            } else {
                ctx.fillRect(e.x, e.y, e.size, e.size);
            }
        });

        // UI
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.font = "bold 16px Arial";
        ctx.fillText("LVL " + level, canvas.width - 40, 30);
        if (isSlowMo) drawText("TIME WARP ACTIVE", 14, 50);
    }

    if (gameState === "OVER") {
        drawText("GAME OVER", 40, canvas.height/2);
    }
}