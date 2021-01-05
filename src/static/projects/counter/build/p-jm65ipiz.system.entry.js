var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),u=0,r=0;r<t;r++)for(var i=arguments[r],o=0,a=i.length;o<a;o++,u++)n[u]=i[o];return n};System.register(["./p-2b2ab542.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.r;t=e.h}],execute:function(){function n(e){var r=e.number;var n=r.toString().split("");return t("div",{class:"number-illustration"},t("div",{class:"number-window"}),n.map((function(e,r){return t("app-number-box",{key:n.length-r,selectedDigit:+e})})))}var u=e("app_home",function(){function e(e){r(this,e);this.number=0}e.prototype.render=function(){var e=this;return t("div",{class:"app-home"},t("p",{class:"controls"},t("input",{min:"0",type:"number",value:this.number,onKeyUp:function(r){var t=r.target;return e.number=+t.value||0}})),t("p",null,t("button",{onClick:function(){return e.addNumber(-100)}},"-100"),t("button",{onClick:function(){return e.addNumber(-10)}},"-10"),t("button",{onClick:function(){return e.addNumber(-1)}},"-1"),t("button",{onClick:function(){return e.addNumber(1)}},"+1"),t("button",{onClick:function(){return e.addNumber(10)}},"+10"),t("button",{onClick:function(){return e.addNumber(100)}},"+100")),t("div",null,t(n,{number:this.number})))};e.prototype.addNumber=function(e){var r=this.number+e;if(r<0){this.number=0}else{this.number=r}};Object.defineProperty(e,"style",{get:function(){return".app-home{padding:10px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}.controls{position:relative;z-index:10}.number-strip{display:inline-block;border:1px solid #000;font-size:25px;position:relative;-webkit-transition:top .5s;transition:top .5s}.number-block{padding:10px}.number-block-selected{font-weight:700}.number-block:not(:last-child){border-bottom:1px solid #000}.number-illustration{height:1000px;margin-top:calc(9 * 50px);position:relative;display:inline-block}.number-window{border:5px solid red;-webkit-box-sizing:border-box;box-sizing:border-box;height:50px;position:absolute;width:100%;z-index:10}"},enumerable:true,configurable:true});return e}());function i(e){var r=e.value,n=e.selected;return t("div",{class:"number-block "+(n?"number-block-selected":"")},r)}var o=e("app_number_box",function(){function e(e){r(this,e)}e.prototype.render=function(){var e=this;var r=__spreadArrays(Array(10).keys());return t("div",{class:"number-strip",style:{top:this.selectedDigit?"-"+this.selectedDigit*50+"px":"0"}},r.map((function(r){return t(i,{value:r,selected:e.selectedDigit===r})})))};return e}());var a=e("app_root",function(){function e(e){r(this,e)}e.prototype.render=function(){return t("div",null,t("header",null,t("h1",null,"Number Illustration")),t("main",null,t("app-home",null)))};Object.defineProperty(e,"style",{get:function(){return"header{background:#5851ff;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}h1,header{color:#fff}h1{font-size:1.4rem;font-weight:500;padding:0 12px}"},enumerable:true,configurable:true});return e}())}}}));