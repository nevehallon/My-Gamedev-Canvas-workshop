function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//creating the ctx variable to store the 2D rendering context —
//the actual tool we can use to paint on the Canvas
let x = canvas.width / 2;
let y = canvas.height - 30
let dx = 2;
let dy = -2;
let ballRadius = 10;
let ballColor = "#0095DD";
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let drawBall = function() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    ballColor = `${getRandomColor()}`;
  } //reverses the ball's trajectory when part of the ball touches SIDE borders

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
    ballColor = `${getRandomColor()}`;
  }

  x += dx;
  y += dy;
} //reverses the ball's trajectory when part of the ball touches TOP AND BOTTUM borders
setInterval(draw, 10);