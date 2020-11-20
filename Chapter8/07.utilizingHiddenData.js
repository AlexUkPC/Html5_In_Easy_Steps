function init()
{
    document.getElementById("Browser").value=navigator.appName;
    document.getElementById("Date").value=new Date();
}
onload=init;