function applyTheme(themeName, isInitialLoad = false) {
    localStorage.setItem('activeTheme', themeName);
    const streak = parseInt(localStorage.getItem('winStreak')) || 0;
    const body = document.body;

    body.classList.remove('theme-blue-nile', 'theme-golden-pharaoh');

    if (themeName === 'blue') {
        if (streak >= 3) {
            body.classList.add('theme-blue-nile');
        } else if (!isInitialLoad) { // Only alert if NOT loading the page
            alert(`Locked! Reach a 3-win streak to unlock. (Current: ${streak})`);
            document.getElementById('skin-selector').value = 'default';
            localStorage.setItem('activeTheme', 'default');
        }
    } else if (themeName === 'gold') {
        if (streak >= 5) {
            body.classList.add('theme-golden-pharaoh');
        } else if (!isInitialLoad) { // Only alert if NOT loading the page
            alert(`Locked! Reach a 5-win streak to unlock. (Current: ${streak})`);
            document.getElementById('skin-selector').value = 'default';
            localStorage.setItem('activeTheme', 'default');
        }
    }
}