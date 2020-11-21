var ball, w, h, x, y, dx=5, dy=5;
function init()
{
    var embed = document.getElementById("svgDoc");
    var svgDoc = embed.getSVGDocument();
    ball = svgDoc.getElementById("ball");
    w = embed.getAttribute("width");
    h = embed.getAttribute("height");
    x = ball.getAttribute("x");
    y = ball.getAttribute("y");
    setInterval(position, 25);
}

function position(){
   ball.setAttributes("cx", x);
   ball.setAttributes("cy", y);
   if((x+dx > w)||(x+dx < 0))dx = -dx;
   if((y+dy > h)||(y+dy < 0))dy = -dy;
   x+=dx;
   y+=dy;
}
onload=init;