function addToLog(message) {
    const logList = document.getElementById('log-list');
    const entry = document.createElement('li');
    entry.style.marginBottom = "5px";
    entry.style.borderBottom = "1px solid #444";
    entry.innerText = message;
    
    // Add to the top of the list
    logList.insertBefore(entry, logList.firstChild);
}