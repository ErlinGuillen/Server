function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background Stars
    ctx.fillStyle = "#333";
    for(let i=0; i<10; i++) ctx.fillRect(i*50, (Date.now()/20 + i*100)%600, 2, 2);

    // Draw Pulse Effect
    if (isPulseActive) {
        ctx.strokeStyle = "rgba(0, 255, 255, " + (1 - pulseRadius/150) + ")";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(player.x + player.size/2, player.y + player.size/2, pulseRadius, 0, Math.PI*2);
        ctx.stroke();
    }

    // Particles
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 20;
        ctx.fillRect(p.x, p.y, 4, 4);
    });
    ctx.globalAlpha = 1.0;

    if (gameState === "START") {
        drawText("SQUARE DODGER PRO", 30, canvas.height/2);
        drawText("SPACE TO START", 18, canvas.height/2 + 40);
    } 

    if (gameState === "PLAYING" || gameState === "OVER") {
        if (isSlowMo) {
            ctx.fillStyle = "rgba(255, 220, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Power Ups
        powerUps.forEach(p => {
            ctx.fillStyle = p.type === "shield" ? "#00ffff" : "#FFDC00";
            if(p.type === "shield") ctx.fillRect(p.x, p.y, p.size, p.size);
            else { ctx.beginPath(); ctx.arc(p.x+10, p.y+10, 10, 0, Math.PI*2); ctx.fill(); }
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
                ctx.moveTo(e.x, e.y); ctx.lineTo(e.x+e.size, e.y); ctx.lineTo(e.x+e.size/2, e.y+e.size);
                ctx.fill();
            } else ctx.fillRect(e.x, e.y, e.size, e.size);
        });

        // UI
        ctx.fillStyle = "white";
        ctx.font = "bold 16px Arial";
        ctx.fillText("LVL " + level, canvas.width - 40, 30);
        ctx.fillStyle = "cyan";
        ctx.fillText("BLASTS (B): " + pulseBlasts, 60, 50);
    }

    if (gameState === "OVER") drawText("GAME OVER", 40, canvas.height/2);
}