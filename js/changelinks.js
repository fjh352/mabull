/**
 * Created by Administrator on 2016/7/17.
 */
window.onload=prepareLinks;
function prepareLinks() {
    if(!document.getElementsByTagName) return false;//如果浏览器不支持getElementsByTagName方法，则会离开。
   var links=document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if(links[i].getAttribute("class")=="popup"){
            links[i].onclick=function(){
                popUp(this.getAttribute("href"));
               return false;
            }
        }
    }
}

function popUp(winURL) {
    window.open(winURL/* 'popup'"width=1024,height=480"*/);
}