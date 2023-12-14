let canvas = document.getElementsByClassName("canvas")[0];
let dimantion = canvas.getContext("2d");

let x = 10;
let y = 50;
let speedX = 5;
let speedY = 3;

function ballCreartion() {
  dimantion.clearRect(0, 0, canvas.width, canvas.height);
  dimantion.beginPath();
  dimantion.arc(x, y, 15, 0, 2 * Math.PI);
  dimantion.fillStyle = "green";
  dimantion.fill();
}

function ballMoving() {
  x += speedX;
  y += speedY;
  if (x + 15 > canvas.width || x - 15 < 0) {
    speedX = -speedX;
  }

  if (y + 15 > canvas.height || y - 15 < 0) {
    speedY = -speedY;
  }
}

function animation() {
  ballCreartion();
  ballMoving();
  requestAnimationFrame(animation);
}

animation();
