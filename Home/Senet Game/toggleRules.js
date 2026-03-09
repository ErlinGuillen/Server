function toggleRules() {
    const modal = document.getElementById('rules-modal');
    if (modal.style.display === "none") {
        modal.style.display = "block";
        if(typeof addToLog === 'function') addToLog("Opened Game Rules.");
    } else {
        modal.style.display = "none";
    }
}// JavaScript Document