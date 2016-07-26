
function showPic(whichpic){
	if(!document.getElementById("placeholder"))return false;
	var source=whichpic.getAttribute("href");  //获取href参数给source
	var placeholder=document.getElementById("placeholder"); //把占位图位置给placeholder
	if(placeholder.nodeName!="IMG")return false;
	placeholder.setAttribute("src",source); //设置placeholder中的src值
	if(document.getElementById("description")){
		var text=whichpic.getAttribute("title")? whichpic.getAttribute("title"):""; //如果存在title，则把title参数给text，否则返回空字符串
		var description=document.getElementById("description"); //把文本的位置给description
	if(description.firstChild.nodeType==3){
		description.firstChild.nodeValue=text;
	 }	
	}
	return true;
  }
function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);
}
window.onload=countBodyChildren();


