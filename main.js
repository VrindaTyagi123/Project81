canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.stokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.stokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.stokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.stokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.stokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.stokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2* Math.PI);
ctx.stroke();