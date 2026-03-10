function applyTheme(themeName) {
	localStorage.setItem('activeTheme', themeName); // Add this line
    const streak = parseInt(localStorage.getItem('winStreak')) || 0;
    const body = document.body;

    // Remove old theme classes
    body.classList.remove('theme-blue-nile', 'theme-golden-pharaoh');

    if (themeName === 'blue') {
        if (streak >= 3) {
            body.classList.add('theme-blue-nile');
            addToLog("Theme: Blue Nile Activated.");
        } else {
            alert(`Locked! Reach a 3-win streak to unlock. (Current: ${streak})`);
            document.getElementById('skin-selector').value = 'default';
        }
    } else if (themeName === 'gold') {
        if (streak >= 5) {
            body.classList.add('theme-golden-pharaoh');
            addToLog("Theme: Golden Pharaoh Activated.");
        } else {
            alert(`Locked! Reach a 5-win streak to unlock. (Current: ${streak})`);
            document.getElementById('skin-selector').value = 'default';
        }
    }
}