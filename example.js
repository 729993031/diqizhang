/**
 * Created by Administrator on 2016/5/12.
 */
function insertParagraph(text) {
    var str="<p>";
    str +=text;
    str +="</p>";
    document.write(str);
}
window.onload=function () {
    var testdiv=document.getElementById("testdiv");
    alert(testdiv.innerHTML);//插入一大段html内容进入网页中
}