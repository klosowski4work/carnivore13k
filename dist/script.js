!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e,n){return t<e?e:t>n?n:t}function o(t,e){try{if(e){var n=new RegExp(".{1,"+e+"}","g");return t.match(n).map(function(t){return parseInt(t,16)})}return parseInt(t,16)}catch(t){console.log(t)}}function s(t){return document.getElementById(t)}function A(t){return document.createElement(t)}function u(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){return t.append(e)}),n[0]}function c(t){return Math.ceil(Math.random()*t)}function l(){return[c(255),c(255),c(255)]}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;return[].concat(a(l())).map(function(n){return f(r(n,t,e),2)}).join("")}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return("0".repeat(e)+t.toString(16)).slice(-e)}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,e=A("canvas"),n=e.getContext("2d");return t.appendChild(e),{canvas:e,ctx:n,remove:function(){t.removeChild(e)}}}function y(t,e){var n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],d(s("assets"))),i=n.canvas,a=n.ctx,r=(n.remove,new Image);r.src=e,document.body.appendChild(r),setTimeout(function(){i.width=parseInt(r.naturalWidth),i.height=parseInt(r.naturalHeight),a.drawImage(r,0,0,r.naturalWidth,r.naturalHeight),i.id=t,i.className="assetImg",document.body.removeChild(r)})}function p(t){return[].concat(a(t)).map(function(t){return f(t)}).join("").match(/.{1,8}/g)}function g(t){return c(100)<=t}function m(t,e){var n=o(t,2).map(function(t){return t/255}),i=o(e,2).map(function(t){return t/255});return n.map(function(t,e){return n[e]<.3?2*n[e]*i[e]:1-2*(1-n[e])*(1-i[e])}).map(function(t){return f(Math.floor(255*r(t,0,1)))}).join("")}function v(t,e,n){for(var i=e.width,a=e.height,r=p(e.getContext("2d").getImageData(0,0,i,a).data),o=0,s=0;o<a;o++)for(var A=0;A<i;A++,s++)t.fillStyle="#"+m(n,r[s].slice(0,6))+r[s].slice(-2),t.fillRect(A,o,1,1)}function w(){return new Promise(function(t){y("base","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAIVBMVEUAAABAQEC/v7+ZmZllZWXf399JSUn6+vrX19d9fX1BQUG33NESAAAAAXRSTlMAQObYZgAAAvlJREFUWMPtll1u1DAUhcfSLMB/XYCvm4J4czIIHsed2UCDglQeK7EB2AGsoRtAYp8kTZtzb24rqEAIlebp+nzn2olnbJ3Nk3mMc/anIDR9kboGph2GbIWugWmGobdS14CGgWSDBoGanorQNYgtUa5C18BMtRW6BuZAtLNKB5jbu64qHQAbKHUNTCAq9r4d90TuruyIunQ7cERpmSiPwN6Wk6m9HYz1WKJ7V2Z9Ny13mEk4sFnDBOpc1qmOc0ec6nJnQrcvniiFhFmFKd6YYp1Msd6YKjOZHEbg5tpOJmPnjxvr0tq7l83t8qle1tNrzB2xeIASUKdQ3bL9FUCYyvh2jzKZGgoA6lCifaTJRYD9FnUVB9UsH+Esrzf/4/Nrl9gwFKlrYF7T8M5KHYCd/2EvdQ3In33cS12D1L78vmrQoJ6/uNYNAMuJtEoHmMmxKytdg41zSldgE2i/0jUwxe+FDtDC5GGCvgbBiwaYYmGmc9SdF8tZmNICtmK5Fkc7sFlD4iaK7NR63OOFYAp9AWiJLd1YmPIOoAWIHTP5HGE6MFNpmeki4jfCNwiTOS/ChEnr4QJ7Zk29z3S0vMMahzXYieIDcRydk4Mn9fzt/ESk8pMCND6yQYNwdnV2VYSuQXz77dXXKnQNzJvry89W6wDzv7ffWa0DzKclV60DYAOh/05+avoH8lPTIz81PfJT048lupGfmh75ic0aRoD81PTIT2NdmAn5qemRn1Ym5KemR37ipvpgfsLFFWtulzN/IutYca96gBJQp1Dtn89P7uFo5J7zk37+2fw00Co/abAdiLIVugbb91eJVg0afPiS/apBg8tPp1E2aGCISpW6BpvQHZUOgL1RugJbKkpXYJuC5TpAZiAlq3QFUpENGHQAp8wUquXLITN5mIxYLvvCutlBzcxEAfd4CuxwEkymZ0tQRkNoCjN1FXVGw6FlphyYaQdTbZM04W03eKcTmE52Ee3CFE6Zbo73maI1nUXHxvEBu4awgo5MMlr9ALYh0E4fpvVoAAAAAElFTkSuQmCC"),y("pants","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAFVBMVEUAAAAvLy9WVlYUFBRwcHAcHBw2NjYwbVZvAAAAAXRSTlMAQObYZgAAAR9JREFUWMPtlkGKhDAURI2ZAyQhs/cHDxAI9noULzCIfYFm7n+FcWOqhJahGVw0/MJF1f8v4Kr4jUqlukJmN37T7t0BoUVISQ7jZ4soYeQ5IFrEo38RMucQ/t0ueBGE/ZABleGx259s7/vmtpTcQKVUPm8fpiqV6n8Kp+XEUPfhnr/uO/jUA2rJh9nXYNIMHxiaAkEjClAIiiPqhqEgFLisDBrQfvswUkDdGJSpXTNB68OiiIZ7tSVzKIeqysegUqmult+E9Or91MrZ/RS6C+4nfw55vZ9UqjeT/EmYr5Yhh8XUkU+A2kloIa76OcH7mSFqj0iQ9ELzgEBQlMj3k//M6EBHNcSQXTPa1KGGtsc1LLY0CKitfFsrhB5C4Ib6BbyVM6s+u6MNAAAAAElFTkSuQmCC"),y("shirt","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAD1BMVEUAAACrq6twcHCCgoKVlZXdkPLBAAAAAXRSTlMAQObYZgAAARFJREFUWMPtlkuOxCAMRE06B+CTA4CYAzR0DkAm97/TEImxjZoovWkpC79VxVWGrFCBIHyRKW5L9iPnMJpMpuLYHLcPo23PmzFLeZ9DqIZ74lF40KPqxf7P64fFq43BK0JdcNy40B+GJvw/hOaCINyEqK+NKYfC58xIBXUIpPOGujdSYjqwUNQeNSgyFA/tQBqADEgstALHkwxMv+CEH3mfBOEmTBFg3J8Oo8nVlNnsbI7b1XBtWx39Sbd5KnPXn5ZRf9p4f1qN+cUnote7g8Z8HqL36dEM7EwUegLSDIQWQBCEu6DytaFs9MMF5ciYrPXdnAxHIef4Ag9p0hoopDILua4/8Tp0GoJx6LQ/vUD4nD/QriHqbTirogAAAABJRU5ErkJggg=="),y("vest","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACAAgMAAADVOMcNAAAADFBMVEUAAABgYGA3NzdSUlI3hTwnAAAAAXRSTlMAQObYZgAAAPBJREFUSMftlC0OwkAUhB/lP2lCFRhCiiT8VUCCRCJr6gggOQJB9QgIroGjCbJHqOAQyBoSJOzsNm+TIgiKko6YnW/Gbh7l+kqGb/hMvvGygufNkbF7ntjva851AAUrwrARzxQQSF+SAt35Oe21arjDk+Rc/6ZaGka+yoBQeO+gMoNtCe8iU5+4IlkNZEVQBB9L0KuGBAcew1kYcmVZb+5X0S2HfL/cqtivLZGjMu4XgI5NwoD7NekIP0tv0+dVCWA6qCxiIJnz/5V12SkwLtpQBFS2KgMW+Bk1NeAhrugGr+oncZZUrId2v0yCYgU/qCdIPDZcX7tWzwAAAABJRU5ErkJggg=="),y("bib","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAHlBMVEUAAACKioqmpqY4ODhTU1Nvb296enplZWVPT0/CwsI7IqY1AAAAAXRSTlMAQObYZgAAAXNJREFUWMPtlL1PwzAUxF0SaMemNDs1CMRmEBVrCkGsrVqLFTG4a8WXYGNjZ+HfxXzUd+ERqVtF65Mine9+T4pi5amoqDVTYr4fqc9i7tMiLUQeChxEjkJK5ubnnX75pUGmFvJPVNTK6WWRoilzWTScyGXR6FZziIrNczkg/1aCeMAwz1BJPmEmHRNEPi0IO9uFv7CGDjkOA4LSTh20TVBGUNMaDIwV9ECQesIFXN5R/mhUVNRqqYV9IwtaNjORo6j18rCl1DVy7yEcNrTewQCLikaWtWkAjG/ysLasHc796ItHU86t9QrbyfNQlk+C9QqrY5QRo3sWXofGduBVRx/m8LoX3unNe4Le/4KeGbrROnynW60PwnfSej9AzjlsLeemlSIq6h+ptUgxE7ksXFvkshi0RS6LkyHlsFx4T7mpQCVDrAS2X5IvGDLA7QTx8R4haQGoVxDURT6i4SQj6KgOulJQH0ViZwRNCTq9x6W8qqXoA3WjOmFOISczAAAAAElFTkSuQmCC"),y("eyes","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAElBMVEUAAAAwMDD6+vrX19c/Pz8TExPVZTWmAAAAAXRSTlMAQObYZgAAAFtJREFUWMPt1rsNwCAMRVHMp/cIjMAIjMD+06REzhNKpDQp7inf7S0nAABOzF+EsmTXkKfsGlLcAeDE3PwxlNXGbdeQZ+2y77CFHQA+fU9tyK6h9rBLEFwn/NsF2lYGYaXjXh8AAAAASUVORK5CYII="),y("hair01","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACAAgMAAADVOMcNAAAADFBMVEUAAABCQkJRUVFdXV2yGluKAAAAAXRSTlMAQObYZgAAALpJREFUSMft1CEOwkAUhOFpgSV1GAT1SO7QIxCCQFYQBAmWINdQvanA1dVwix6BI9GEmbyEcgAgO+r/8vzDly8F/Bsyn5ZsYbpbPtiCOzWBLeB2UAvISrYB6ri410arAdIz25AEtiGpnWcLSFq1ABzZBszVBnXcz+zT/+pGJVtwQGALY2CmFuwgJNWmYPe41j2wX4AHAXnLNkzWbAPUcX+3SzdA49kGV7CFNFSFWsitCdzBNmzVBnWc7QnlqzyXT5hm2wAAAABJRU5ErkJggg=="),y("hair10","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAElBMVEUAAABfX19OTk5zc3NnZ2d/f38hkxwfAAAAAXRSTlMAQObYZgAAAKRJREFUWMPtljEKwkAQRX8mOUDW9QCjYJ9iDxAJ9uL9D2O6MLwigiCi86r57/XL6r8YpW4vWGnt6MEzeKu3asEzaCh1jp5hHaPot0BWnyTJz3F+IViBZzgtEzzCpSzwCD7DM7joGXhzRJ8kyUfopHE3VOkaPYPdpd6DZ/BpvQ1+CxvBJ0mSvPeFUnF4hL4d4BFaecAjaDB4BMngEXBjgHwzk+/lCa77EuKvhU8sAAAAAElFTkSuQmCC"),y("hair02","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAElBMVEUAAABRUVFnZ2c4ODiAgICOjo7xpgV8AAAAAXRSTlMAQObYZgAAALRJREFUWMPtljsOwjAUBF9i6ONg+jif3sSixzlC7n8YFIpIqy1CARJIO8WTPXOBtS9y7t4IbSTP4RrBQzh64+c+kOcwD+Q5VA15Di6R52DohRC/wjgehz60E3oOdWl96MBzKIPZbQJPoRobM/cAT8H57aKn4PJ2wXOwTJ6DoRdC/Nt+0jQSQnyWZTkOayw9eg518TF04DmsF7M5gOdwSmbV0oCHsOMTeAg7OZHnkMFrRAnx4gmz6R67Eo5f8gAAAABJRU5ErkJggg=="),setTimeout(function(){return t()})})}function b(t){var e=this;this.id=t||"jan_"+W++,this.config=b.shuffle(),this.create=function(){var t=d(),n=t.canvas,i=t.ctx,a=(t.remove,s("base")),r=a.width,o=a.height;n.width=r,n.height=o;var c=["base","eyes","pants","shirt","vest","bib","hair01","hair10","hair02"];return new Promise(function(t){c.forEach(function(t){e.config[t]&&v(i,s(t),e.config[t])});var a=A("img");u(document.body,a).id=e.id,a.src=n.toDataURL("image/png"),t(e.id)})}}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t){var e=this,n=t.context,i=t.image,a=t.ticksPerFrame,r=[],o=0,s=0;this.addFrame=function(t,n,i,a){return r.push(new X(t,n,i,a)),e},this.render=function(t,e,a){n.save();var s=r[o];a?(n.scale(-1,1),n.drawImage(i,s.x,s.y,s.w,s.h,-t-s.w,e,s.w,s.h)):n.drawImage(i,s.x,s.y,s.w,s.h,t,e,s.w,s.h),n.restore()},this.update=function(t){t?(s=0,o=0):(s+=1)>a&&(s=0,o<r.length-1?o+=1:o=0)}}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function I(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function P(t,e,n,i){function a(){return i.shift()}var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];for(r&&(t.globalCompositeOperation="destination-out"),t.beginPath(),t.moveTo(a(),a());i.length;)t.lineTo(a(),a());t.closePath(),e&&(t.fillStyle=e,t.fill()),n&&(t.strokeStyle=n,t.stroke())}function K(t,e,n){t.fillStyle=e,t.fillRect.apply(t,I(n))}function N(t,e,n){t.strokeStyle=e,t.strokeRect.apply(t,I(n))}function Q(t,e){t.clearRect.apply(t,I(e))}function V(t,e,n,i){t.beginPath(),t.arc.apply(t,I(i)),e&&(t.strokeStyle=e,t.stroke()),n&&(t.fillStyle=n,t.fill())}function T(){var t=d(s("layer_middle")),e=t.canvas,n=t.ctx;t.remove;e.width=100,e.height=45,e.style.position="absolute",e.style.display="block";var i=n.createLinearGradient(0,0,0,50);i.addColorStop(0,"#000"),i.addColorStop(1,"#f00"),P(n,i,"gray",[1,0,70,0,80,17,90,20,90,38,1,38,1,38]),Q(n,[10,4,40,15]),N(n,"black",[10,4,40,15]),K(n,"brown",[4,20,70,2]),n.lineWidth=4,V(n,"black","gray",[20,37,5,0,2*Math.PI]),V(n,"black","gray",[70,37,5,0,2*Math.PI])}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var G=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),z=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;i(this,t),this.x=e,this.y=n,this.z=a}return G(t,[{key:"clamp",value:function(e,n){return new t(r(this.x,e.x,n.x),r(this.y,e.y,n.y))}},{key:"mul",value:function(e){return new t(this.x*e,this.y*e)}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"flat",value:function(e){return new t(this.x*e.x,this.y*e.y)}},{key:"angle",get:function(){return Math.atan2(this.y,this.x)}}],[{key:"right",value:function(){return new t(1,0)}},{key:"top",value:function(){return new t(0,1)}}]),t}(),j=320,J=500,Y=(new z(J,j),new z(1/J,1/j),Math.PI,A("div"));Y.className="assets",u(document.body,Y).id="assets";var Z={skin:["dc9108","e8c7a1","be8e66","99633c","4c3732"],eyes:["277bc4","367865","9f5924"],hairs:{standard:["d24122","9b5324","141414","b4bac4"],rogue:["1c6f0b","2093bf","ca0c2a","3f1695"]}},W=0;b.shuffle=function(){var t={base:Z.skin[c(Z.skin.length-1)],eyes:Z.eyes[c(Z.eyes.length-1)],pants:h(64,128),shirt:g(80)?h(64,192):null,vest:g(10)?h(32,64):null,bib:null,hair01:null,hair10:null,hair02:null};t.bib=t.shirt||t.shirt||!g(30)?null:h(64,192);var e=g(60)&&"standard"||g(30)&&"rogue"||null,n=e?Z.hairs[e][c(Z.hairs[e].length-1)]:null;return t.hair01="standard"==e?g(70)&&n||null:null,t.hair10="standard"==e&&t.hair01?g(50)&&n:null,t.hair02="rogue"==e?n:null,t};var X=function t(e,n,i,a){E(this,t),this.x=e,this.y=n,this.w=i,this.h=a},L={};L.State={},L.State.Up=0,L.State.Pressed=1,L.State.Down=2,L.Key={},L.Key.Up=87,L.Key.Left=65,L.Key.Down=83,L.Key.Right=68,L.Key.R=82,L.Key.F=70,L.Keys={},L._keydown=function(t){var e=t.which;L.Keys[e]||L.Keys[e]===L.State.Up||(L.Keys[e]=L.State.Up),L.Keys[e]===L.State.Pressed&&(L.Keys[e]=L.State.Down),L.Keys[e]===L.State.Up&&(L.Keys[e]=L.State.Pressed)},L._keyup=function(t){var e=t.which;L.Keys[e]=L.State.Up},L.init=function(){document.body.addEventListener("keydown",L._keydown),document.body.addEventListener("keyup",L._keyup)};var q=A("style");u(u(document.head,q),document.createTextNode(""));var H=0,_=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),$=function(){function t(){C(this,t),this.pos=new z(30,30),this.dir=z.right(),this.element=null}return _(t,[{key:"setPos",value:function(t){this.pos=t}},{key:"setAngle",value:function(t){}},{key:"update",value:function(t){this.element.style.transform="translate3d("+this.pos.x+"px, "+this.pos.y+"px, "+this.pos.z+"px)"}},{key:"render",value:function(){}}],[{key:"create",value:function(e){arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;switch(e){case"truck":var n=new t;return n.element=A("div"),n.element.id="truck",n.element.className=e,n.pos=new z(110,10,10),n;default:return}}}]),t}(),tt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),et=function(t){function e(t){B(this,e);var n=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.image=s(t),n.animations={},n.pos=new z(0,210),n.width=24,n.height=32,n.initCanvas(),n.initAnimations(),n.direction="right",L.init(),n}return S(e,t),tt(e,[{key:"initCanvas",value:function(){var t=d(s("game")),e=t.canvas,n=t.ctx,i=t.remove;this.canvas=e,this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.position="absolute",this.canvas.style.top=0,this.canvas.style.left="50px",this.canvas.style.transform="translate3d(30px,250px,1px)",this.ctx=n,this.remove=i}},{key:"initAnimations",value:function(){var t={context:this.ctx,image:this.image,ticksPerFrame:8},e=this.width,n=this.height;this.animations.right=new k(t).addFrame(2*e,n,e,n).addFrame(e,n,e,n).addFrame(0,n,e,n).addFrame(e,n,e,n),this.animations.left=new k(t).addFrame(2*e,3*n,e,n).addFrame(e,3*n,e,n).addFrame(0,3*n,e,n).addFrame(e,3*n,e,n),this.animations.down=new k(t).addFrame(2*e,2*n,e,n).addFrame(e,2*n,e,n).addFrame(0,2*n,e,n).addFrame(e,2*n,e,n),this.animations.up=new k(t).addFrame(2*e,0,e,n).addFrame(e,0,e,n).addFrame(0,0,e,n).addFrame(e,0,e,n)}},{key:"moveRight",value:function(){this.direction="right",this.pos.x+=1}},{key:"moveLeft",value:function(){this.direction="left",this.pos.x-=1}},{key:"moveDown",value:function(){this.direction="down",this.pos.y+=1}},{key:"moveUp",value:function(){this.direction="up",this.pos.y-=1}},{key:"render",value:function(){this.ctx.clearRect(0,0,this.width,this.height),this.canvas.style.transform="translate3d(100px,"+this.pos.y+"px,1px)",this.animations[this.direction].render(0,0)}},{key:"update",value:function(){L.Keys[L.Key.Right]>L.State.Up&&this.moveRight(),L.Keys[L.Key.Left]>L.State.Up&&this.moveLeft(),L.Keys[L.Key.Up]>L.State.Up&&this.moveUp(),L.Keys[L.Key.Down]>L.State.Up&&this.moveDown(),this.pos.y=r(this.pos.y,210,260);var t=0;Object.keys(L.Keys).forEach(function(e){return t+=L.Keys[e]}),this.animations[this.direction].update(!t)}}]),e}($),nt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),it=function(){function t(){F(this,t),this._entity=null,this.pos=new z(J/2,j/2),this.zoom=800,this.instance=null}return nt(t,[{key:"update",value:function(){this._entity&&(this.pos.x=this._entity.pos.x,this.pos.y=this._entity.pos.y)}},{key:"follow",value:function(t){this._entity=t}}],[{key:"instance",value:function(){return this}}]),t}(),at=new it,rt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();!function(t){q.sheet.insertRule(t,H++)}("\n.bricks { \n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAMAAACLrFl+AAAAP1BMVEVcaHRPWVhodINzf5CJjqNxfY1AQzxOWFZeanZyfo4/QjpUYWhfbHJNV1V/hppUYmhFT0hocoBVYmlYYGVodIW6L+cIAAACp0lEQVQ4y21V25bCIAyEIpDU1qrr/3/rZiaB1j2bB9uUTMh1TDlvtd5cHvFW6yPU/97SF0QDon6sOgzPN4O0tt1uKd27yT3Jbo9dTN0TROE+3hY8zOeAHA5JeHSBKrAoapKSSFK9QH7gZ9GSZIHBx86pmgjd0KFfhVsJUdgoIdXvhzohIu98hTB93oqQdoVClT9ibkrvOfcI8eUQ9y04sJMaHiL4V1XmR19+fWvdy2GQN9J4VcaUZiQWMdKv041DPLD7SANQ2JmheiHcpLA4hJzp87j3A5kfgGxR7qiGyRXyXSf+qG5RX1wakJzfcWvkK16neSm6qCjbQZwhB4T9lRFDQAqzKgEZpxHYHfffUeRlVoNyzH4ePZpzQvBxd0i1+wZE5tSMfrKVEe02Cso6eWDTt0Gygw1SikPwxsqUsuUs8oH6pu9SMGgmb6b/XFeG0FpbV3PU87q2Rs3UDN/P+NLa03KmDsO+Qvp8IyYSeq5DAFEsrfrmxjZbGCaIU/klTh/4am8Oqd8QDmOfpDCoALMMCOq7R4/GxnNfe37x2DeAMkf8yGOKuPE+wRPCGVlwga9BurRojARxS9X1wiNb1Vi2I8JxyD7nApDyBfE5L97KGMY7ZuUcAUJIPeisj3gaIx4jH3OB0nKIEdhP5BvEIWPE41bxq6zZB4b4hfQH9cTaHaNeGMtyViym3SFBa76QTiYOIaMunoZGEHawntRDNzCUCGxCfA1iNWVST0Bohw45Hzqv5GPWfAlIci4/eXPjHwE3yaloltsga8tOZ6OoC1rJWs1mkYBYaQaWPfggfSGES/ofRP9A5GSd8DACSylNUkqXwPh3o4PlUHBZfOP/SgMkZMHafUIZi/z0xc7cXxLAVH3jsdpuB7owf9khOdMCVJJP9Xpgdr/tGCp+PWN8aQAAAABJRU5ErkJggg==');\n    background-size: 15px;\n}");var ot=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;x(this,e);var n=M(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.parent=s("layer_middle"),n.createCity(t),n}return O(e,t),rt(e,[{key:"createCity",value:function(t){for(var e=0;e<t;e++)this.createBuilding()}},{key:"createBuilding",value:function(){var t=r(50*Math.ceil(c(3)),150,250),e=r(50*Math.ceil(c(7)),150,350),n=r(50*Math.ceil(c(6)),150,300),i=new Array(5);i=i.fill(1).map(function(){return A("div")});var a=["","front","left","right","top"];i.forEach(function(i,r){i.className=r?"bricks side "+a[r]:"building",i.style.width=((r<2||r>3)&&t||n)+"px",i.style.height=(r<4&&e||n)+"px"}),u(this.parent,i[0]),u.apply(void 0,[i[0]].concat(R(i.slice(1))))}}]),e}($),st=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),At=function(){function t(){D(this,t),this.init(),this.entities=[]}return st(t,[{key:"init",value:function(){var t=this;this.initCanvases(),w().then(function(){t.initPlayer(),t.initCity(),t.initTruck(),t.loop()})}},{key:"tests",value:function(){}},{key:"initPlayer",value:function(){var t=this;(new b).create().then(function(e){t.player=new et(e,t.ctx),at.follow(t.player)})}},{key:"initCity",value:function(){this.city=new ot(15)}},{key:"initTruck",value:function(){var t=$.create("truck");u(s("layer_middle"),t.element),T(),this.entities.push(t)}},{key:"initCanvases",value:function(){var t=this;this.container=s("game"),this.canvas=A("canvas"),this.canvas.style.transform="translate3d(0,0,0)",this.ctx=this.canvas.getContext("2d"),this.layerMiddle=s("layer_middle"),u(this.container,this.canvas);var e=function(){t.canvas.width=J,t.canvas.height=j,t.canvas.webkitImageSmoothingEnabled=!1,t.canvas.mozImageSmoothingEnabled=!1,t.canvas.imageSmoothingEnabled=!1};e(),window.addEventListener("resize",e)}},{key:"loop",value:function(){var t=this;window.requestAnimFrame(function(){return t.loop()});var e=Date.now();this.lsts||(this.lsts=e);var n=(e-this.lsts)/1e3;this.lsts;this.lsts=e,this.ctx.clearRect(0,0,J,j);try{this.update(n),this.render()}catch(t){console.log(t,"warning")}}},{key:"update",value:function(t){this.player.update(),at.update(),this.layerMiddle.style.perspectiveOrigin=at.pos.x+230+"px "+-at.pos.y+"px",this.layerMiddle.style.transform="translate3d("+-at.pos.x+"px,0px,-10px)",this.entities.forEach(function(e){return e.update(t)})}},{key:"render",value:function(){this.player.render(),this.entities.forEach(function(t){return t.render()})}}]),t}();window.addEventListener("load",function(){new At}),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var ut=n(1);n.n(ut)},function(t,e){}]);