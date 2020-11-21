function init()
{
    sessionStorage.setItem("originalList", document.getElementById("list").innerHTML)
}
function restore()
{
    sessionStorage.setItem("customList", document.getElementById("list").innerHTML);
    document.getElementById("list").innerHTML=sessionStorage.getItem("originalList")
}
function show()
{
    if(sessionStorage.getItem("customList")!==null){
    document.getElementById("list").innerHTML = sessionStorage.getItem("customList")}
}
function wipe()
{
    document.getElementById("list").innerHTML = sessionStorage.getItem("originalList");
    sessionStorage.removeItem("customList");
}
onload=init;