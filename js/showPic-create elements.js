
function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById)  return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img"); //创建元素节点img
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/js1.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
   var destext=document.createTextNode("Choose an image");
    description.appendChild(destext);
    var gallery=document.getElementById(imagegallery);
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}


