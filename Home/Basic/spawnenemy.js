function spawnEnemy() {
    let type = (level >= 5 && Math.random() > 0.7) ? "hunter" : "normal";
    if (type === "hunter") {
        enemies.push({ x: Math.random()*380, y: -20, size: 20, speed: 6+level, color: "#FF00FF", type: "hunter" });
    } else {
        enemies.push({ x: Math.random()*370, y: -30, size: 30, speed: 3+(level*0.5)+Math.random()*2, color: "#FF4136", type: "normal" });
    }
}