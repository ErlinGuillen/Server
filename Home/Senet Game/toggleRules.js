function toggleRules() {
    const modal = document.getElementById('how-to-modal');
    if (modal) {
        if (modal.style.display === "block") {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }
    } else {
        console.error("Could not find the element with ID 'how-to-modal'");
    }
}