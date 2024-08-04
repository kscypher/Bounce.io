const r = 10

class Ball {
  constructor(pos, speed) {
    this.pos = pos
    this.speed = speed
  }
  
  setSpeed(speedX, speedY) {
    this.speed.set(speedX, speedY)
  }
  
  touchLeftWall() {
    if (this.pos.x < r) {
      this.pos.x = r
      this.speed.x = -this.speed.x
    }
  }

  touchRightWall() {
    if (this.pos.x > width - r) {
      this.pos.x = width - r
      this.speed.x = -this.speed.x
    }  
  }

  touchCeiling() {
    if (this.pos.y < r) {
      this.pos.y = r
      this.speed.y = -this.speed.y
    }
  }
  
  move() {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y
    
    this.touchLeftWall()
    this.touchRightWall()
    this.touchCeiling()
  }
  
  collideWithBar() {
    let bottomX = this.pos.x + r
    let bottomY = this.pos.y + r

    if ((bottomX >= bar.x && bottomX <= bar.x + w) && bottomY > bar.y) {
      this.pos.y = bar.y - r
      
      let ball = new Ball(
        this.pos.copy(),
        this.speed.copy()
      )
      
      let c = random(1, 1.1)
      ball.setSpeed(-c*this.speed.x, -c*this.speed.y)
      
      setTimeout(function() {
        balls.push(ball)
      }, 0)
      
      this.speed.y = -this.speed.y
      
      score = score + 1
    }
  }

  dropBelowFloor() {
    let bottomY = this.pos.y + r

    if (bottomY > height) {
      let index = balls.indexOf(this)
      balls.splice(index, 1)
    }
  }

  
  show() {
    fill(250)
    noStroke()
    circle(this.pos.x, this.pos.y, r)
  }
}
