var svgDoc, svgTxt, svgBtn, htmTxt;
function init()
{
    svgDoc = document.getElementById("svgDoc").getSVGDocument();
    svgTxt = document.getElementById("svgTxt");
    svgBtn = document.getElementById("svgBtn");
    htmTxt = document.getElementById("htmTxt");
    svgDoc.getElementById("svgBtn").onclick = send2htm;
    document.getElementById("htmBtn").onclick = send2svg;
}
function send2svg(){
    svgTxt.lastChild.replaceWholeText(htmTxt.value);
    htmTxt.value="";
}
function send2htm(){
    htmTxt.value = svgTxt.lastChild.wholeText;
    svgTxt.lastChild.replaceWholeText("SVG Text");
}
onload=init;