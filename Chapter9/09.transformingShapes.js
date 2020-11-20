function init()
{
    var canvas = document.getElementById("canvas");
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F30";
        ctx.fillRect(20, 40, 100, 100);
        ctx.fillStyle = "#3C0";
        ctx.transform(1, -0.3, 0, 1, 0, 0);
        ctx.fillRect(160, 90, 100, 100);

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "#09F";
        ctx.fillRect (350, 10, 130, 130);
        ctx.beginPath();
        ctx.arc(415, 75, 50, 0, Math.PI*2, true);
        ctx.clip();
        ctx.fillStyle = "#FF0";
        ctx.fillRect(350,10,130,130);
        ctx.fillStyle = "#F0F";
        ctx.fillRect(350,10,65,65);
    }
}
onload=init;