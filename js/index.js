function search_by_google(){
	var inputDom = document.getElementById("search_text").value;
	window.open('https://xn--flw351e.ml/search?q=' + inputDom);
}

function onsomekey(){
	document.onkeydown = function(e){
		if (!e) e = window.event;
		if ((e.keyCode || e.which) == 13) {
			var obtnLogin = document.getElementById("search_button");
		    obtnLogin.focus();　　　　　　　　　 fun();//提交按钮触发的方法
		}
	}
}

function show(){
var date = new Date(); //日期对象
var now = "";
now = date.getFullYear()+"年"; //读英文就行了
now = now + (date.getMonth()+1)+"月"; //取月的时候取的是当前月-1如果想取当前月+1就可以了
now = now + date.getDate()+"日";
now = now + date.getHours()+"时";
now = now + date.getMinutes()+"分";
now = now + date.getSeconds()+"秒";
document.getElementById("time_p").innerHTML = now; //div的html是now这个字符串
setTimeout("show()",1000); //设置过1000毫秒就是1秒，调用show方法
}

var currentVersion = document.documentElement.getAttribute("data-version");
// 使用 fetch API 请求 version.json 文件
fetch("jsons/ver.json")
.then(response => response.json())
.then(data => {
    // 获取最新版本号
    var latestVersion = data.version;
        // 如果当前版本小于最新版本, 刷新页面
    if (currentVersion < latestVersion) {
        location.reload();
    }
});