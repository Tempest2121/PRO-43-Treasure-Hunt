// Global Variables
let score = 0;
let progress = "";
let system, security, code;
let background1, background2;

// Loading Image Assets
function preload(params) {
  background1 = loadImage("src/assets/aladdin_cave.jpg");
  background2 = loadImage("src/assets/treasure.jpg");
}

function setup(params) {
  // Canvas
  const canvas = createCanvas(1200, 600);

  // The Objects
  system = new System();
  security = new Security();
}

function draw(params) {
  // Background
  background(background1);

  // Text Formatting
  fill(255);
  textSize(30);

  textFont("Aladin");
  clues();

  textSize(20);
  hints();

  textSize(60);
  text(`Autentication: ${score} / 3`, width / 2, 100);

  textSize(70);
  stroke(500);
  fill("yellow");
  text(progress, width / 2, 200);

  // Main Game and GameState Change
  security.display();
  if (score === 3) {
    clear();
    security.hide();
    background(background2);
    fill("black");
    textSize(40);
    textFont("Aladin");
    text("TREASURE UNLOCKED", 500, 600);
  }
}
