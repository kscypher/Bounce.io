# Bounce.io

Bounce.io is a browser-based, canvas breakout clone built using p5.js, where bouncing balls multiply on paddle collisions, testing your reflexes as the paddle shrinks over time.

# Features
✅ Multiple ball cloning on paddle hit
✅ Shrinking paddle to increase difficulty
✅ Simple score and high score tracking
✅ Game restart on mouse click or key press after game over
✅ Responsive paddle control with your mouse
✅ Smooth animation using p5.js

# Gameplay
Use your mouse to move the paddle left and right.

Balls bounce off the walls and ceiling.

When a ball hits the paddle, it:

Bounces back.

Clones itself with slight speed variation.

Increases your score.

The paddle shrinks slowly over time, making it harder to survive.

If all balls drop below the floor, the game ends.

Click or press any key to restart.

# Demo

Tech Stack
JavaScript (ES6)

p5.js (for rendering and vector math)

HTML / CSS

# Project Structure
bash
Copy
Edit
Bounce.io/
│
├── index.html        # Loads p5.js, sketch.js, and ball.js
├── sketch.js         # Main game loop, bar and game state logic
├── ball.js           # Ball class with movement, collision, cloning
└── style.css         # Basic canvas styling
Getting Started
1️⃣ Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/Bounce.io.git
cd Bounce.io
2️⃣ Open index.html in your browser:

# You can simply double-click index.html or use a local server like:

bash
Copy
Edit
npx live-server
Customization
Change canvas size: Modify createCanvas(width, height) in setup() in sketch.js.

Adjust paddle size: Modify w and h in sketch.js.

Adjust ball radius: Change const r = 10 in ball.js.

Change cloning behavior: Adjust c = random(1, 1.1) in collideWithBar() for varied speeds.

# Potential Improvements
✅ Add sound effects on collisions
✅ Add color variation per ball
✅ Mobile-friendly controls
✅ Power-ups (expand paddle, slow down balls)
✅ Leaderboard system using Firebase or Supabase

License
This project is licensed under the MIT License. Feel free to use, modify, and share it.

