/**
 * Created by 15928 on 2017/4/29.
 */
//显示“文献来源连接表”
function displayCitations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    //取得所有引用
    var quotes=document.getElementsByTagName('blockquote');
    for(var i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute('cite')) continue;//如果没有cite属性，应该直接跳出本次循环
        //接下来的语句，只有含cite属性的，才会执行
        var url=quotes[i].getAttribute('cite');
        var quoteChildren=quotes[i].getElementsByTagName('*');
        if(quoteChildren.length<1) continue;
        var elem=quoteChildren[quoteChildren.length-1];
        var link=document.createElement('a');
        var link_text=document.createTextNode('source');
        link.appendChild(link_text);
        link.setAttribute('href',url);
        var superscript=document.createElement('sup');
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
// window.onload=displayCitations;
addLoadEvent(displayCitations);