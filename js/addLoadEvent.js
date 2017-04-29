/**
 * Created by 15928 on 2017/4/29.
 */
// 为了方便以后把更多事件添加到window.onload处理函数上
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