function shareResults() {
    const p1 = localStorage.getItem('p1Wins') || 0;
    const p2 = localStorage.getItem('p2Wins') || 0;
    
    const shareText = `🏺 Senet: Journey to the Afterlife 🏺\n🏆 P1 Wins: ${p1}\n💀 P2 Wins: ${p2}\n\nCan you beat my score? Play here: ${window.location.href}`;

    // Use the Clipboard API
    navigator.clipboard.writeText(shareText).then(() => {
        alert("Stats copied to clipboard! Paste them to your friends.");
        if(typeof addToLog === 'function') {
            addToLog("Shared results to clipboard!");
        }
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}