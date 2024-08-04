let balls

let bar
let w
let h = 20

let score
let highScore = 0



function setup() {
  createCanvas(500, 500);
  ellipseMode(RADIUS)
  
  startGame()
}

function startGame() {
  balls = []
  
  let ball = new Ball(
    createVector(120, 0),
    createVector(  3, 5)
  )
  balls.push(ball)
  
  bar = createVector(width/2, height - h)
  w = 120
  
  score = 0
}



function moveBalls() {
  for (let ball of balls) {
    ball.move()
  }
}

function moveBar() {
  let xMax = width - w/2
  bar.x = Math.min(xMax, mouseX)
 
  let xMin = w/2
  bar.x = Math.max(xMin, bar.x)
  
  bar.x -= w/2
}



function showBalls() {
  for (let ball of balls) {
    ball.show()
  }
}

function showBar() {
  fill(250)
  noStroke()
  rect(bar.x, bar.y, w, h)
}

function showScore() {
  textSize(32)
  textAlign(CENTER, CENTER)
  
  fill(250)
  noStroke()
  text("Score: " + score, width/2, height/5)
}



function collideBallsWithBar() {
  for (let ball of balls) {
    ball.collideWithBar()
  }  
}

function dropBallsBelowFloor() {
  for (let ball of balls) {
    ball.dropBelowFloor()
  }  
}

function shrinkBar() {
  if (random() < 0.01) {
    w = 0.999*w
  }
}



function showGame() {
  background(51);
  
  moveBar()
  moveBalls()
  
  showBar()
  showBalls()
  showScore()
  
  collideBallsWithBar()
  dropBallsBelowFloor()
  shrinkBar()
}

function showLost() {
  background(51);
  
  textSize(50)
  textAlign(CENTER, CENTER)
  
  fill(250)
  noStroke()
  text("You lose!", width/2, height/2 - 40)
  
  textSize(30)
  fill(180)
  text("Final score: " + score, width/2, height/2 + 20)
  
  textSize(25)
  fill(150)
  text("High score: " + highScore, width/2, height/2 + 50)
}



function draw() {
  if (balls.length == 0) {
    highScore = Math.max(score, highScore)
    showLost()
  }
  else {
    showGame()
  }
}



function mousePressed() {
  if (balls.length == 0) {
    startGame()
  }
}

function keyPressed() {
  if (balls.length == 0) {
    startGame()
  }
}
