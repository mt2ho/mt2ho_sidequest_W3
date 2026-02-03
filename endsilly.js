function drawEndSilly() {
  // Green-tinted background to communicate success
  background(255, 219, 88);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(24);
  text(
    "You have been turned into a fluffy creature!\n Could've been worse.",
    width / 2,
    250,
  );

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 400);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function EndCureMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function endCureKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
