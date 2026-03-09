        function rollSticks() {
            if(hasRolled) return;
            
            // 1-5 Roll logic
            lastRoll = Math.floor(Math.random() * 5) + 1;
            rollResultElement.innerText = `Roll: ${lastRoll}`;
            hasRolled = true;
            rollBtn.disabled = true;
        }