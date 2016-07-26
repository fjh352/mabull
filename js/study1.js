/**
 * Created by Administrator on 2016/7/20.
 */
//练习js代码从html中分离
//例子为点击链接，跳出弹出框，原码为<a href="http://www.example.com/" onclick="popup(this.href);return false;">Example</a>
// 改为<a href="http://www.example.com/" class="popup">Example</a>,
//js代码为：
window.onload=test; //将下面方法放入test函数中，为了等DOM树完全建立后执行onload后再进行下面的操作
function test(){
    if(!document.getElementsByTagName)return false;   //向后兼容，如果浏览器不能用这个DOM方法，将会离开
    var links=document.getElementsByTagName("a");      //将遍历html中的所有a元素节点存入links数组中
    for(var i=0;i<links.length;i++){                   //遍历整个数组
        if(links[i].getAttribute("class")=="popup"){  //找出links数组中class为popup的a元素节点
            links[i].onclick=function(){               //给这个元素节点增加onclick动作方法
                popUp(this.getAttribute("href"));      //调用popUp函数，把链接进入函数
                return false;                         //返回false值，防止主页面加载链接
            }
        }
    }
}

//其中popUp函数为外部调用，如下：
function popUp(winUrl){
    window.open(winUrl,"popup");          //加第二个窗口，点击链接最多只能打开一个网页，不加可以打开多个
}