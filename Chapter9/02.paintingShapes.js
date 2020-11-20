function init()
{
    var canvas = document.getElementById("canvas");
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F30";
        ctx.fillRect (75, 10, 100, 100);
        ctx.fillStyle = "#3C0";
        ctx.beginPath();
        ctx.arc(275, 60, 50, 0, Math.PI*2, true);
        ctx.fill();
        ctx.fillStyle = "#09F";
        ctx.beginPath();
        ctx.moveTo(375, 110);
        ctx.lineTo(425, 10);
        ctx.lineTo(475, 110);
        ctx.closePath();
        ctx.fill();
    }
}
onload=init;