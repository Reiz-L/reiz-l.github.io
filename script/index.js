var imgs = ['./img/pic (25).jpg','./img/pic (1).png','./img/pic (2).jpg','./img/pic (3).jpg','./img/pic (4).jpg','./img/pic (5).jpg','./img/pic (6).jpg','./img/pic (7).jpg','./img/pic (8).jpg','./img/pic (9).jpg','./img/pic (10).jpg','./img/pic (11).jpg','./img/pic (12).jpg','./img/pic (13).jpg','./img/pic (14).jpg','./img/pic (15).jpg','./img/pic (16).jpg','./img/pic (17).jpg','./img/pic (18).jpg','./img/pic (19).jpg','./img/pic (20).jpg','./img/pic (21).jpg','./img/pic (22).jpg','./img/pic (23).jpg','./img/pic (24).jpg'];
function syz(){
	//document.getElementById("img1"")")
	var i = Math.floor(Math.random()*(26+0)+0);
	$("body").css("background","url("+"'" +imgs[i] + "'"+")");
}
var qhtp;
var daojishi;
function startqh(){
	qhtp = setInterval("syz()",30000);
	daojishi = setInterval("djs()",1000);
	
}

function stop(){
	clearInterval(qhtp);
	clearInterval(daojishi);
	var obj = document.getElementById("djs");
	obj.innerHTML= " ";
}
var djsj = 30;
function djs(){
	var obj = document.getElementById("djs");
	obj.innerHTML= "切图倒计时:" + djsj;
	djsj--;
	
	if(djsj <= 0){
		djsj = 30;
	}
}

setInterval(function(){var d = new Date();
var yue = d.getMonth() + 1;
var days = ["星期日(日曜日)", "星期一(月曜日)", "星期二(火耀日)", "星期三(水曜日)", "星期四(木曜日)", "星期五(金曜日)", "星期六(土曜日)"];
var timetext = "今天是:"+d.getFullYear()+"年 "+yue+"月 "+d.getDate()+"日  "+days[d.getDay()]+"\n"+d.getHours()+"时 "+d.getMinutes()+"分 "+d.getSeconds() +"秒";
document.getElementById("datela").innerHTML = timetext;},1000);

function button1(){
	alert('Reiz的QQ:1514931537\n欢迎来找我玩耍哦！');
}

function button2()
{
	var ec = Math.floor(Math.random()*(114514+0)+0);
	document.write('你抽到的幸运数字:' + ec);
}