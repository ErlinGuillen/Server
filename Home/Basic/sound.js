const sounds = {
    score: new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg"),
    powerup: new Audio("https://actions.google.com/sounds/v1/cartoon/dingy_collect_point.ogg"),
    explosion: new Audio("https://actions.google.com/sounds/v1/science_fiction/low_fuzz_explosion.ogg"),
    background: new Audio("https://www.dropbox.com/scl/fi/1xmbrk702snvfxyd8md43/BrooklynBloodPop.mp3?rlkey=62ww3ss9nwtns7opcokc3jdwf&st=w2vzbtdy&dl=1")
};

sounds.background.loop = true;
const slider = document.getElementById("volumeSlider");

// Handle volume changes
slider.addEventListener("input", (e) => {
    const v = parseFloat(e.target.value);
    Object.keys(sounds).forEach(key => {
        sounds[key].volume = v;
    });
});

// Give focus back to the game window after using the slider
slider.addEventListener("change", () => {
    slider.blur();
});

function playSound(name) {
    if (sounds[name]) {
        sounds[name].currentTime = 0;
        sounds[name].play().catch(() => {});
    }
}
      
function startMusic() {
    sounds.background.play().catch(() => console.log("User interaction required"));
}