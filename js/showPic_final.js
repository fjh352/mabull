//通用函数：使DOM树加载完全后开始执行js文件。
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
//通用函数：使新元素插入到目标元素后面。
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
//增加元素节点及其属性并插入html中。
function preparePlaceholder(){
    if(!document.createElement)return false;                
    if(!document.createTextNode)return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery"))return false;
    var placeholder=document.createElement("img");      //创建元素节点img
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/js1.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");       //创建元素节点p
    description.setAttribute("id","description");             //给元素节点p赋id值
    var desctext=document.createTextNode("Choose an image"); //创建文本节点“choose an image”
    description.appendChild(desctext);                           //把文本节点做为元素节点p的子节点
    var gallery=document.getElementById("imagegallery");  //！！！！！！注意！！！！！！！一定要加引号，妈的
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
//为元素节点增加事件，
function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery"))return false;
    var img=document.getElementById("imagegallery");
    var links=img.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this) ? false:true;
        }
    }

}
//替换内容，图片和文字
function showPic(whichpic) {
    if (!document.getElementById("placeholder"))return false;
    var source = whichpic.getAttribute("href");  //获取href参数给source
    var placeholder = document.getElementById("placeholder"); //把占位图位置给placeholder
    if (placeholder.nodeName != "IMG")return false;
    placeholder.setAttribute("src", source); //设置placeholder中的src值
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : ""; //如果存在title，则把title参数给text，否则返回空字符串
        var description = document.getElementById("description"); //把文本的位置给description
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
//加载通用函数
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
