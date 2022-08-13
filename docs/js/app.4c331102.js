(function(){"use strict";var t={4432:function(t,e,r){var n=r(9242),o=r(3396);function i(t,e,r,n,i,s){const a=(0,o.up)("Hexagons");return(0,o.wg)(),(0,o.j4)(a)}var s=r(7139);const a={style:{"margin-left":"-50px"}};function l(t,e,r,n,i,l){const f=(0,o.up)("Hexagon");return(0,o.wg)(),(0,o.iD)("div",a,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(20,(t=>(0,o._)("div",{class:(0,s.C_)(["row",{"offset-row":t%2==0}]),style:{display:"flex"},key:t},[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(40,(e=>(0,o.Wm)(f,{key:e,x:e,y:t,"global-offset":i.globalOffset},null,8,["x","y","global-offset"]))),64))],2))),64))])}const f={style:{position:"relative"}},u=["width","height","viewBox"],c=["fill"];function h(t,e,r,n,i,s){return(0,o.wg)(),(0,o.iD)("div",f,[((0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:54.324000000000005*i.sizeScalar,height:62.856*i.sizeScalar,viewBox:"0 0 362.16 419.04"},[(0,o._)("path",{class:"hex-path",transform:"matrix(0 0.72 -0.72 0 360.72 2.2111206642071)",stroke:"#ffffff",fill:i.color,"stroke-width":"20","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"2",d:"M575.929 249.385L431.947 498.769L143.982 498.769L0 249.385L143.982 0L431.947 0L575.929 249.385Z"},null,8,c)],8,u))])}let g={rand_vect:function(){let t=2*Math.random()*Math.PI;return{x:Math.cos(t),y:Math.sin(t)}},dot_prod_grid:function(t,e,r,n){let o,i={x:t-r,y:e-n};return this.gradients[[r,n]]?o=this.gradients[[r,n]]:(o=this.rand_vect(),this.gradients[[r,n]]=o),i.x*o.x+i.y*o.y},smootherstep:function(t){return 6*t**5-15*t**4+10*t**3},interp:function(t,e,r){return e+this.smootherstep(t)*(r-e)},seed:function(){this.gradients={},this.memory={}},get:function(t,e){if(this.memory.hasOwnProperty([t,e]))return this.memory[[t,e]];let r=Math.floor(t),n=Math.floor(e),o=this.dot_prod_grid(t,e,r,n),i=this.dot_prod_grid(t,e,r+1,n),s=this.dot_prod_grid(t,e,r,n+1),a=this.dot_prod_grid(t,e,r+1,n+1),l=this.interp(t-r,o,i),f=this.interp(t-r,s,a),u=this.interp(e-n,l,f);return this.memory[[t,e]]=u,u}};g.seed();var d=g,p={props:["x","y","globalOffset"],data(){return{color:"",sizeScalar:1}},methods:{getNoiseHexPair:function(t){let e=Math.abs(d.get(this.x+t+this.globalOffset,this.y+t+this.globalOffset));console.log(e);let r=200*e,n=Number(parseInt(r,10)).toString(16);return 1==n.length?n+n:n},getRBGColor(){return`#${this.getNoiseHexPair(.25)}${this.getNoiseHexPair(.4)}${this.getNoiseHexPair(.8)}`},getGrayscaleColor(){let t=this.getNoiseHexPair(.25);return`#${t}${t}${t}`}},mounted(){this.color=this.getRBGColor(),setInterval((()=>{this.color=this.getRBGColor()}),1e3)}},v=r(89);const m=(0,v.Z)(p,[["render",h]]);var x=m,y={name:"Hexagons",components:{Hexagon:x},data(){return{color:"#0000ff",globalOffset:Math.random()}},mounted(){setInterval((()=>{this.globalOffset+=1}),1e3)}};const w=(0,v.Z)(y,[["render",l]]);var b=w,_={name:"App",components:{Hexagons:b}};const O=(0,v.Z)(_,[["render",i]]);var k=O;(0,n.ri)(k).mount("#app")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,i){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],i=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,o,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,s=n[0],a=n[1],l=n[2],f=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var u=l(r)}for(e&&e(n);f<s.length;f++)i=s[f],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},n=self["webpackChunkpersonal_site"]=self["webpackChunkpersonal_site"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4432)}));n=r.O(n)})();
//# sourceMappingURL=app.4c331102.js.map