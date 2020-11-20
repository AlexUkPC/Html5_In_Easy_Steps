var ctx,w,h,x,y,dx,dy;
function init()
{
    var canvas = document.getElementById("canvas");
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F30";
        canvas.style.background = "#FF0";
        canvas.style.border = "6px solid #09F";
        
        x = 5;
        y = 44;
        dx = 5;
        dy = 5;
        w = canvas.width;
        h = canvas.height;
        setInterval(position, 25);
        function position()
        {
            paint();
            if ((x+dx > w)||(x+dx < 0))dx = -dx;
            if ((y+dy > h)||(y+dy < 0))dy = -dy;
            x+=dx;
            y+=dy;
        }
        function paint()
        {
            ctx.clearRect(0,0,w,h);
            ctx.beginPath();
            ctx.arc(x,y,30,0,Math.PI*2,true);
            ctx.fill();
        }    
    }
}
onload=init;