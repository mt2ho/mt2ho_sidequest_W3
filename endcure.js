
function drawEndCure() {
  // Green-tinted background to communicate success
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(24);
  text(
    "You take one careful sip —\n and feel warmth spread through your body.",
    width / 2,
    250,
  );
  text("you found the cure!", width / 2, 320);

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 400);
}

// ------------------------------------------------------------
// Mouse input for cure end screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function EndCureMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for cure end screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function endCureKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
