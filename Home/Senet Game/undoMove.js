function undoMove() {
    if (!previousGameState) {
        alert("No moves to undo!");
        return;
    }
    gameState = [...previousGameState];
    currentPlayer = previousPlayer;
    hasRolled = false; 
    previousGameState = null; 
    
    createBoard(); // This updates the pieces on the screen
    statusElement.innerText = `Player ${currentPlayer}'s Turn`;
    addToLog("Move undone.");
}