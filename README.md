🏺 Ancient Egyptian Senet (v1.4.0)
A fully responsive, digital recreation of one of the world's oldest board games, featuring an automated AI opponent, tactile visual mechanics, and modern web features.

🎮 Live Demo
Play here: https://erlinguillen.github.io/Server/Home/Senet%20Game/senet.html

🚀 Key Features
Visual Stick Throw: A tactile rolling system using four 3D-flipping wooden sticks with authentic ancient scoring (0 white sides = 5).

Dual Game Modes: Play against a strategic AI Opponent or challenge a friend in Local 2-Player (PvP) mode.

Authentic Hieroglyphs: The board features traditional symbols for special squares, including the House of Happiness (𓄣) and the House of Water (𓈗).

Interactive Rules: A built-in "How to Play" guide accessible directly from the game interface.

Dark Tomb Theme: A high-contrast aesthetic that persists across sessions via Local Storage.

Mobile Optimized: A fully responsive CSS grid layout that adapts for smartphones and tablets.

Move History & Celebrations: Real-time logging of every event and interactive confetti bursts upon victory.

🛠️ Built With
HTML5 & CSS3: Custom grid layouts and 3D transforms for the stick animations.

Vanilla JavaScript: Modular logic separated into specialized files for AI, movement, and UI state.

LocalStorage API: For saving player win counts and theme preferences.

Canvas-Confetti: For high-quality visual celebrations.

📜 How to Play
Throw: Click "Throw Sticks." The number of light-colored sides facing up determines your move (1, 2, 3, or 4). If all sticks land dark-side up, you move 5 spaces.

Move: Click your piece to move it forward along the S-shaped path.

Capturing: Landing on an opponent's piece swaps your positions.

The Goal: Be the first to move all 5 pieces off the board (past Square 30).

Hazards: Square 27 (The Water) 𓈗 sends your piece back to Square 15 (House of Rebirth).

📁 Project Structure
senet.html: The main application hub.

aiPlayer.js: Logic for the automated "Expert" opponent.

rollSticks.js & VisualStickThrow.css: The visual animation and scoring logic for the sticks.

movePiece.js: Core movement rules and game-mode switching.

createBoard.js: Renders the board with historical symbols.
