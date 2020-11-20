function init()
{
    var canvas = document.getElementById("canvas");
    if (canvas.getContext)
    {
        var i,j,ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F30";
        for(i=0;i<3;i++)
        {
            for(j=0;j<3;j++)
            {
                ctx.save();
                ctx.translate(50*j, 50*i);
                ctx.fillRect(0, 0, 30, 30);
                ctx.restore();

            }
        }
        
        ctx.fillStyle = "#3C0";
        ctx.translate(150, 0);
        for(i=0;i<3;i++)
        {
            ctx.fillRect(0, 0, 100, 100);
            ctx.translate(110,0);
            ctx.scale(0.75,0.75);
        }
        
        ctx.fillStyle = "#09F";
        ctx.translate(180,120);
        for(i=1;i<6;i++)
        {
            for(j=0;j<i*6;j++)
            {
                ctx.rotate(Math.PI*2/(i*6));
                ctx.beginPath();
                ctx.arc(0,i*22.5, 8, 0, Math.PI*2, true);
                ctx.fill();
            }
        }
    }
}
onload=init;