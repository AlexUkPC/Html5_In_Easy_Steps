function init()
{
    var canvas = document.getElementById("canvas");
    if(canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("pixel");
        ctx.drawImage(img, 0, 0);
        var pixel = ctx.getImageData(0, 0, img.width, img.height);
        for (var i = 3; i < pixel.data.length; i += 4)
        {
            if(pixel.data[i+2]!==255)
            {
                pixel.data[i-1]=0;
                pixel.data[i-3]=255;
                
            }
            ctx.putImageData(pixel, 0, 0);
        }
       
    }
}
onload=init;