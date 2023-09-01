function preload() {}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(400, 250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 640, 480);
  fill("green");
  rect(90, 30, 100, 100);
  fill("red");
  circle(500, 10, 50);
  fill("purple");
  rect(10, 100, 20, 100);
  fill("pink");
  circle(100, 1, 50);
  fill("orange");
  rect(90, 30, 100, 100);
  fill("blue");
  circle(200, 50, 10);
  fill("green");
  rect(30, 1, 100, 100);
  fill("red");
  circle(20, 600, 50);
  fill("purple");
  rect(1, 200, 20, 100);
  fill("pink");
  circle(100, 100, 20);
  fill("orange");
  rect(100, 20, 100, 100);
  fill("blue");
  circle(510, 30, 50);
}

function take_snapshot() {
  save("student_name.png");
}
