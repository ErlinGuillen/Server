function resetScores() {
    if(confirm("Are you sure you want to delete all win records?")) {
        localStorage.removeItem('p1Wins');
        localStorage.removeItem('p2Wins');
        document.getElementById('p1-score').innerText = 0;
        document.getElementById('p2-score').innerText = 0;
        addToLog("Scores have been reset to zero.");
    }
}