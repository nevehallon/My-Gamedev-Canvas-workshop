const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//creating the ctx variable to store the 2D rendering context —
//the actual tool we can use to paint on the Canvas
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
ctx.closePath();