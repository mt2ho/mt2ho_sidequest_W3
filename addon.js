// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"

let addonButtons = [
  { name: "Rainbow Flower", x: 270, y: 480, w: 200, h: 60 },
  { name: "Honey Drops", x: 510, y: 480, w: 200, h: 60 },
];

function drawAddon() {
  // Red-tinted background to communicate failure
  background(220, 200, 255);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(32);
  text("Choose an Add-on", width / 2, 160);

  textSize(26);
  text(`Base: ${chosenBase}`, width / 2, 210);

  imageMode(CENTER);
  image(rainbowImg, 300, 375, 100, 100); // above Rainbow Flower button
  image(honeyImg, 500, 375, 100, 100); // above Honey Drops button
  drawGameButtons(addonButtons);
  cursor(addonButtons.some(isHover) ? HAND : ARROW);
}

// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function addonMousePressed() {
  for (let b of addonButtons) {
    if (isHover(b)) {
      chosenAddon = b.name;

      // Moonwater paths
      if (chosenBase === "Moonwater" && chosenAddon === "Rainbow Flower") {
        currentScreen = "endCure";
      } else if (chosenBase === "Moonwater" && chosenAddon === "Honey Drops") {
        currentScreen = "endChaotic";
      }

      // Goblin Hair paths
      else if (
        chosenBase === "Goblin Hair" &&
        chosenAddon === "Rainbow Flower"
      ) {
        currentScreen = "endSilly";
      } else if (
        chosenBase === "Goblin Hair" &&
        chosenAddon === "Honey Drops"
      ) {
        currentScreen = "endChaotic";
      }

      // Dragon Scale paths
      else if (
        chosenBase === "Dragon Scale" &&
        chosenAddon === "Rainbow Flower"
      ) {
        currentScreen = "endCure";
      } else if (
        chosenBase === "Dragon Scale" &&
        chosenAddon === "Honey Drops"
      ) {
        currentScreen = "endSilly";
      }
    }
  }
}
// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.

function drawGameButtons(buttons) {
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < buttons.length; i++) {
    let b = buttons[i];

    fill(isHover(b) ? 200 : 255);
    stroke(0);
    rect(b.x, b.y, b.w, b.h, 12);

    fill(0);
    noStroke();
    textSize(18);
    text(b.name, b.x, b.y);
  }
}
