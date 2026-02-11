function drawEndChaotic() {
  // red-tinted background to communicate failure
  background(238, 75, 43);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(24);
  text(
    "The potion bubbles and the cauldron explodes! \n No cure. Just total destruction. ",
    width / 2,
    300,
  );

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 360);
}

// ------------------------------------------------------------
// Mouse input for chaotic end screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function EndCureMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for chaotic end screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function endCureKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
