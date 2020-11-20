function init()
{
    var canvas = document.getElementById("canvas");
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 6;
        ctx.fillStyle = "rgb(251, 51, 0)";
        ctx.fillRect(50, 10, 80, 80);
        ctx.fillStyle = "rgba(0, 153, 255, 0.5)";
        ctx.fillRect(100, 30, 80, 80);
        var linear = ctx.createLinearGradient(0, 10, 0, 110);
        linear.addColorStop(0, "yellow");
        linear.addColorStop(1, "green");
        ctx.fillStyle = linear;
        ctx.fillRect(200, 10, 100, 100);
        var radial = ctx.createRadialGradient(370, 60, 0, 370, 60, 70);
        radial.addColorStop(0, "yellow");
        radial.addColorStop(1, "green");
        ctx.fillStyle = radial;
        ctx.fillRect(320, 10, 100, 100);
        var image = new Image();
        image.src = '04.fillingOptions.png';
        var pattern = ctx.createPattern(image, "repeat");
        ctx.fillStyle = radial;
        ctx.fillRect(440, 10, 100, 100);
    }
}
onload=init;