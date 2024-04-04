// ==UserScript==
// @name         Vikacg外部链接直接跳转不必受广告干扰
// @namespace    http://reiz-l.github.io
// @version      1.1
// @description  受不了这些下载页面的该死广告，简直和畜生一样点一下直接跳转到其他黄网了，所以这个脚本就诞生了。目前添加了去除主页以及文章页面广告的功能
// @author       Tkst
// @match        http://www.vikacg.xyz/*
// @match        http://www.vikacg.com/*
// @match        https://www.vikacg.xyz/*
// @match        https://www.vikacg.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    var url_current = window.location.href;
    if (url_current.indexOf("external?e=") != -1){
        function waitForXPath(xpath, callback) {
            var interval = setInterval(function() {
                var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (element) {
                    clearInterval(interval);
                    callback(element);
                }
            }, 100); // 调整轮询间隔
        }

        waitForXPath('//*[@id="app"]/div[2]/div[1]/div/div/div[3]/div[2]/div/div/div/div/div', function(element) {
            // 在这里执行你的脚本逻辑
            const XpathExpression = '//*[@id="app"]/div[2]/div[1]/div/div/div[2]/div[2]/div/div/div/div/div[1]/p';
            const pElement = document.evaluate(XpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (pElement) {
                const content = pElement.textContent.trim();
                console.log('Content of <p> element:', content);
                var cleanedURL = content.replace('正在检查：', '');
                alert('反外部链接广告插件为您直接跳转:\n' + cleanedURL)
                window.open('https://'+cleanedURL, '_blank');
            } else {
                console.error('Could not find <p> element using XPath.');
                alert('没有找到外部链接.');
            }
            console.log('没找到元素:', element);
        });
        //通过xpath来提取内容
    }
    //首页
    else if (url_current == "https://www.vikacg.xyz/post" || url_current == "https://www.vikacg.com/post") {

        function waitForXPath(xpath, callback) {
            var interval = setInterval(function() {
                var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (element) {
                    clearInterval(interval);
                    callback(element);
                }
            }, 100); // 调整轮询间隔
        }
        waitForXPath('//*[@id="app"]/div[2]/div[3]/div[5]/div[2]/div/div[1]/div[1]/div[2]/div/strong/span/span' , function(){
            // 定义两个 xpath，分别对应两个 div 元素
            var xpath1 = '//*[@id="app"]/div[2]/div[3]/div[6]';
            var xpath2 = '//*[@id="app"]/div[2]/div[3]/div[2]';
            var xpath3 = '//*[@id="app"]/div[2]/div[3]/div[4]';

            // 使用 document.evaluate 方法，获取两个元素的引用
            var element1 = document.evaluate(xpath1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var element2 = document.evaluate(xpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var element3 = document.evaluate(xpath3, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            // 如果想要销毁元素，可以使用 removeChild 或 remove 方法
            element1.parentNode.removeChild(element1);
            element2.parentNode.removeChild(element2);
            element3.parentNode.removeChild(element3);

            // 如果想要隐藏元素，可以使用 style 属性设置 display:none
            //element1.style.display = "none";
            //element2.style.display = "none";

        });
    }
    //签到
    else if(url_current == "https://www.vikacg.xyz/wallet/mission"){
        function waitForXPath(xpath, callback) {
            var interval = setInterval(function() {
                var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (element) {
                    clearInterval(interval);
                    callback(element);
                }
            }, 100); // 调整轮询间隔
        }

        waitForXPath('//*[@id="preview-input-dynamic"]/div/table/tbody/tr[1]/td[1]/div',function() {
            var xpath = '//*[@id="app"]/div[2]/div[3]/div/div[2]/div[2]';
            var ad = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            ad.parentNode.removeChild(ad);
        });
    }
    //文章
    else if(url_current.indexOf(".xyz/p/") != -1 || url_current.indexOf(".com/p/") != -1){
        function waitForXPath(xpath, callback) {
            var interval = setInterval(function() {
                var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (element) {
                    clearInterval(interval);
                    callback(element);
                }
            }, 100); // 调整轮询间隔
        }
        waitForXPath('//*[@id="app"]/div[2]/div[3]/div/div[1]/div[1]/div/div[1]/div[3]/div[1]/div',function() {
            var xp = '//*[@id="app"]/div[2]/div[3]/div/div[1]/div[1]/div/div[1]/div[3]/div[1]/div';
            var ad = document.evaluate(xp, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            ad.parentNode.removeChild(ad);

            var xp2 = '//*[@id="app"]/div[2]/div[3]/div/div[1]/div[2]'
            var ad2 = document.evaluate(xp2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            ad2.parentNode.removeChild(ad2);
        });

    }

})();