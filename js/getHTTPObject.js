/**
 * Created by Administrator on 2016/7/20.
 */
function getHTTPObject(){
    if (typeof XMLHttpRequest=="undefined") //骂得，if后面不能加冒号。！！！！！
    XMLHttpRequest=function(){
        try{return new ActiveXObject("Msxml2.XMLHTTP.6.o");}
        catch(e) {}
        try{return new ActiveXObject("Msxml2.XMLHTTP.3.o");}
        catch(e) {}
        try{return new ActiveXObject("Msxml2.XMLHTTP");}
        catch(e) {}
        return false;
    }
    return new XMLHttpRequest();
}