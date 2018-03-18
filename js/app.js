const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//creating the ctx variable to store the 2D rendering context —
//the actual tool we can use to paint on the Canvas
function draw() {
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath(); // drawing code
}
setInterval(draw, 10);