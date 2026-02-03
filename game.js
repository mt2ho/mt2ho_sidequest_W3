// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.

let baseButtons = [
  { name: "Dragon Scale", x: 200, y: 420, w: 180, h: 60 },
  { name: "Moonwater", x: 400, y: 420, w: 180, h: 60 },
  { name: "Goblin Hair", x: 600, y: 420, w: 180, h: 60 },
];

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Choose a base ingredient.", width / 2, 160);

  imageMode(CENTER);
  image(dragonImg, 200, 320, 100, 100);
  image(moonwaterImg, 400, 320, 100, 100);
  image(goblinImg, 600, 320, 100, 100);
  // ---- Draw the button ----
  // We pass the button object to a helper function

  drawGameButtons(baseButtons);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(baseButtons.some(isHover) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.

function gameMousePressed() {
  for (let b of baseButtons) {
    if (isHover(b)) {
      chosenBase = b.name;
      currentScreen = "addon"; //  MOVE TO ADD-ON SCREEN
      return;
    }
  }
}
function drawGameButtons(baseButtons) {
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < baseButtons.length; i++) {
    let b = baseButtons[i];

    fill(isHover(b) ? 200 : 255);
    stroke(0);
    rect(b.x, b.y, b.w, b.h, 12);

    fill(0);
    noStroke();
    textSize(18);
    text(b.name, b.x, b.y);
  }
}
// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
//function gameKeyPressed() {
//// ENTER key triggers the same behaviour as clicking the button
// if (keyCode === ENTER) {
// triggerRandomOutcome();
// }
//}
