// ==UserScript==
// @name         DogeMangaAssistant
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  快使用这个脚本吧！和这些该死的色情广告说Goodbye，还能一键下载漫画的图片！
// @author       ReizTakesita
// @match        http://dogemanga.com/*
// @match        https://dogemanga.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dogemanga.com
// @grant        none
// @license      MIT
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
        waitForXPath('//*[@id="site-navbar__menu"]/ul/li[4]',function(){
            var a = '//*[@id="site-navbar__menu"]/ul/li[4]';
            let a_ = document.evaluate(a,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            a_.parentNode.removeChild(a_);
        });

        waitForXPath('/html/body/div[2]', function () {
           var div_xpath = '/html/body/div[2]' ;
           let div_ = document.evaluate(div_xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
           div_.parentNode.removeChild(div_);
        });
        
        waitForXPath('/html/body/div[3]' , function(){
            var xpath = '/html/body/div[3]';
            let ad_div = document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            ad_div.parentNode.removeChild(ad_div);
        });

        waitForXPath('//*[@id="exo-ipp-4735104"]/div/div[2]/img' , function(){
            var xpath = '//*[@id="exo-ipp-4735104"]/div/div[2]/img';
            let ad_div = document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            ad_div.parentNode.removeChild(ad_div);
        });

    // Your code here...
})();