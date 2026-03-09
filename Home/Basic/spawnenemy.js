function spawnEnemy() {
    // Determine enemy type based on level
    let type = "normal";
    if (level >= 5 && Math.random() > 0.7) {
        type = "hunter";
    }

    if (type === "hunter") {
        enemies.push({
            x: Math.random() * (canvas.width - 20),
            y: -20,
            size: 20,          // Smaller
            speed: 6 + level,  // Much faster
            color: "#FF00FF",  // Purple/Magenta
            type: "hunter"
        });
    } else {
        enemies.push({
            x: Math.random() * (canvas.width - 30),
            y: -30,
            size: 30,
            speed: 3 + (level * 0.5) + Math.random() * 2,
            color: "#FF4136", // Standard Red
            type: "normal"
        });
    }
}