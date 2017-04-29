/**
 * Created by 15928 on 2017/4/29.
 */
//显示“缩略语列表”
function displayAbbreviations (){
    if (!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    //取得所有缩略词
    var abbreviations=document.getElementsByTagName('abbr');
    if(abbreviations.length<1) return false;
    var defs=new Array();
   //遍历所有缩略词
    for(var i=0;i<abbreviations.length;i++){
        var current_abbr=abbreviations[i];
  //解决IE7问题
        if(current_abbr.lastChild.length<1) continue;//IE浏览器直到IE7才支持attr元素，所以对于IE7之前的浏览器，在统计abbr元素的子节点个数时，总是返回一个错误的值——零，这条语句会让IE浏览器不再执行这个循环的后续代码。（如果当前元素没有子节点，就立刻开始下一次循环）

        var definition=current_abbr.getAttribute('title');
        var key=current_abbr.lastChild.nodeValue;
        defs[key]=definition;
    }
    //创建定义列表
    var dlist=document.createElement('dl');
    //遍历定义
    for(key in defs){
        var definition=defs[key];
       //创建定义标题
        var dtitle=document.createElement('dt');
        var dittle_text=document.createTextNode(key);
        dtitle.appendChild(dittle_text);
        //创建定义描述
        var ddesc=document.createElement('dd');
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把它们创建到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
//解决IE7问题
    if(dlist.childNodes.length<1) return false;//如果对应于"缩略语列表"的那个dl元素没有任何子节点，就立即退出displayAbbreviations函数(这违背了结构化程序设计原则即：一个函数只能有一个出口点，但这是解决IE浏览器问题，且不用对当前代码大动干戈最简单的方法了)

    //创建标题
    var header=document.createElement('h2');
    var header_text=document.createTextNode('Abbreviations');
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把定义列表添加到页面主体
    document.body.appendChild(dlist);
}
// window.onload=displayAbbreviations;
addLoadEvent(displayAbbreviations);