canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath()
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.rect(150,200,500,250);
ctx.stroke();

color="blue";
ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,300,40,0,2*Math.PI);
ctx.stroke()

color="black";
ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400,300,40,0,2*Math.PI);
ctx.stroke()

color="red";
ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(500,300,40,0,2*Math.PI);
ctx.stroke()

color="yellow";
ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(350,350,40,0,2*Math.PI);
ctx.stroke()

color="green";
ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(450,350,40,0,2*Math.PI);
ctx.stroke()

