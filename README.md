🏺 Ancient Egyptian Senet
A fully responsive, digital recreation of one of the world's oldest board games, featuring an automated AI opponent and modern web features.

🎮 Live Demo
Play here: https://erlinguillen.github.io/Server/Home/Senet%20Game/senet.html

🚀 Features
AI Opponent: Play against a computer-controlled Player 2 that rolls and moves strategically.

Dark Tomb Theme: A high-contrast black and gold aesthetic that persists across sessions via Local Storage.

Mobile Optimized: A fully responsive CSS grid layout that adapts for smartphones and tablets.

Move History Log: A real-time sidebar that tracks every roll, move, and "drowning" event.

Victory Celebrations: Interactive confetti bursts and score tracking when a player clears the board.

Social Sharing: Easily copy your win stats and game link to your clipboard to challenge friends.

🛠️ Built With
HTML5 & CSS3: Custom grid layouts and media queries for responsive design.

Vanilla JavaScript: Modular logic separated into specialized files for game state, AI, and UI.

LocalStorage API: For saving player win counts and theme preferences.

Canvas-Confetti: Lightweight library for visual celebrations.

📜 How to Play
Roll: Click the "Roll Sticks" button to get a value between 1 and 5.

Move: Click one of your pieces to move it forward along the S-shaped path.

The Goal: Be the first to move all 5 pieces off the board (past square 30).

Hazards: Watch out for Square 27 (The Water)—landing here will send your piece back to Square 15 (House of Rebirth)!

📁 Project Structure
senet.html: The main hub and UI structure.

aiPlayer.js: Logic for the automated opponent.

movePiece.js: Core movement rules and turn-switching.

dark-tomb.css: Styles for the alternative dark theme.

shareResults.js: Logic for the clipboard sharing feature.
