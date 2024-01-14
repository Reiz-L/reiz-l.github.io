// ==UserScript==
// @name         Vikacg外部链接直接跳转不必受广告干扰
// @namespace    http://nb
// @version      1.0
// @description  受不了这些下载页面的该死广告，简直和畜生一样点一下直接跳转到其他黄网了，所以这个脚本就诞生了
// @author       Tkst
// @match        http://www.vikacg.xyz/external?e=*
// @match        http://www.vikacg.com/external?e=*
// @match        https://www.vikacg.xyz/external?e=*
// @match        https://www.vikacg.com/external?e=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
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
    
})();