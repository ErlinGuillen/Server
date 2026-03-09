function toggleTheme() {
    // This part is usually fine when called by a button click
    document.body.classList.toggle('dark-tomb');
    const isDark = document.body.classList.contains('dark-tomb');
    localStorage.setItem('theme', isDark ? 'dark-tomb' : 'classic');
    
    if(typeof addToLog === 'function') {
        addToLog(isDark ? "Theme: Dark Tomb active" : "Theme: Classic active");
    }
}

// FIX: Wrap the initial check so it waits for the body to exist
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark-tomb') {
        document.body.classList.add('dark-tomb');
    }
});