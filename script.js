

function getSelected() {
    var method=document.getElementsByTagName("select")[0]
    var res=document.getElementById("1")
    var input=document.getElementsByTagName("input")
    var textarea=document.getElementsByTagName("textarea")[0]
    res.innerHTML = method.value
    for (var i=0; i<input.length;i++){
        console.log(input[i].value)
    }
    console.log(textarea.value)
}