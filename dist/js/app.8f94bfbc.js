(function(){"use strict";var t={1193:function(t,e,n){var r=n(9242),o=n(3396);function i(t,e,n,r,i,s){const l=(0,o.up)("Hexagons");return(0,o.wg)(),(0,o.j4)(l)}var s=n(7139);const l={style:{"margin-left":"-50px"}};function a(t,e,n,r,i,a){const f=(0,o.up)("Hexagon");return(0,o.wg)(),(0,o.iD)("div",l,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(20,(t=>(0,o._)("div",{class:(0,s.C_)(["row",{"offset-row":t%2==0}]),style:{display:"flex"},key:t},[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(40,(e=>(0,o.Wm)(f,{key:e,x:e,y:t,"global-offset":i.globalOffset},null,8,["x","y","global-offset"]))),64))],2))),64))])}const f={style:{position:"relative"}},u=["width","height","viewBox"],c=["fill"];function g(t,e,n,r,i,s){return(0,o.wg)(),(0,o.iD)("div",f,[((0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:54.324000000000005*i.sizeScalar,height:62.856*i.sizeScalar,viewBox:"0 0 362.16 419.04"},[(0,o._)("path",{class:"hex-path",transform:"matrix(0 0.72 -0.72 0 360.72 2.2111206642071)",stroke:"#ffffff",fill:i.color,"stroke-width":"20","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"2",d:"M575.929 249.385L431.947 498.769L143.982 498.769L0 249.385L143.982 0L431.947 0L575.929 249.385Z"},null,8,c)],8,u))])}var h={props:["x","y","globalOffset"],data(){return{color:"",sizeScalar:1}},methods:{getNoiseHexPair:function(t){let e=Math.abs(perlin.get(this.x+t+this.globalOffset,this.y+t+this.globalOffset));console.log(e);let n=200*e,r=Number(parseInt(n,10)).toString(16);return 1==r.length?r+r:r},getRBGColor(){return`#${this.getNoiseHexPair(.25)}${this.getNoiseHexPair(.4)}${this.getNoiseHexPair(.8)}`},getGrayscaleColor(){let t=this.getNoiseHexPair(.25);return`#${t}${t}${t}`}},mounted(){this.color=this.getRBGColor(),setInterval((()=>{this.color=this.getRBGColor()}),1e3)}},p=n(89);const v=(0,p.Z)(h,[["render",g]]);var d=v,w={name:"Hexagons",components:{Hexagon:d},data(){return{color:"#0000ff",globalOffset:Math.random()}},mounted(){setInterval((()=>{this.globalOffset+=1}),1e3)}};const x=(0,p.Z)(w,[["render",a]]);var b=x,m={name:"App",components:{Hexagons:b}};const y=(0,p.Z)(m,[["render",i]]);var O=y;(0,r.ri)(O).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var l=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(l=!1,i<s&&(s=i));if(l){t.splice(u--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,s=r[0],l=r[1],a=r[2],f=0;if(s.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var u=a(n)}for(e&&e(r);f<s.length;f++)i=s[f],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkpersonal_site"]=self["webpackChunkpersonal_site"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1193)}));r=n.O(r)})();
//# sourceMappingURL=app.8f94bfbc.js.map