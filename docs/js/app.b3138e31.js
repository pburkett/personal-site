(function(){"use strict";var t={1524:function(t,e,r){var o=r(9242),n=r(3396);function i(t,e,r,o,i,s){const a=(0,n.up)("Hexagons");return(0,n.wg)(),(0,n.j4)(a)}var s=r(7139);const a={style:{height:"50vh",overflow:"hidden",width:"100vw"}};function l(t,e,r,o,i,l){const f=(0,n.up)("ClassHexagon");return(0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(20,(t=>(0,n._)("div",{class:(0,s.C_)(["row",{"offset-row":t%2==0}]),style:{display:"flex","justify-content":"center"},key:t},[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(40,(e=>(0,n.Wm)(f,{key:e,x:e,y:t,colors:i.colors,"global-offset":i.globalOffset,speed:i.speed},null,8,["x","y","colors","global-offset","speed"]))),64))],2))),64))])}const f={style:{position:"relative"}},u=["width","height","viewBox"],c=["fill"];function h(t,e,r,o,i,a){return(0,n.wg)(),(0,n.iD)("div",f,[((0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:54.324000000000005*i.sizeScalar,height:62.856*i.sizeScalar,viewBox:"0 0 362.16 419.04"},[(0,n._)("path",{style:(0,s.j5)({transitionDuration:2*r.speed+"ms"}),class:"hex-path",transform:"matrix(0 0.72 -0.72 0 360.72 2.2111206642071)",stroke:"#ffffff",fill:"#"+i.color,"stroke-width":"20","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"2",d:"M575.929 249.385L431.947 498.769L143.982 498.769L0 249.385L143.982 0L431.947 0L575.929 249.385Z"},null,12,c)],8,u))])}r(1693);let d={rand_vect:function(){let t=2*Math.random()*Math.PI;return{x:Math.cos(t),y:Math.sin(t)}},dot_prod_grid:function(t,e,r,o){let n,i={x:t-r,y:e-o};return this.gradients[[r,o]]?n=this.gradients[[r,o]]:(n=this.rand_vect(),this.gradients[[r,o]]=n),i.x*n.x+i.y*n.y},smootherstep:function(t){return 6*t**5-15*t**4+10*t**3},interp:function(t,e,r){return e+this.smootherstep(t)*(r-e)},seed:function(){this.gradients={},this.memory={}},get:function(t,e){if(this.memory.hasOwnProperty([t,e]))return this.memory[[t,e]];let r=Math.floor(t),o=Math.floor(e),n=this.dot_prod_grid(t,e,r,o),i=this.dot_prod_grid(t,e,r+1,o),s=this.dot_prod_grid(t,e,r,o+1),a=this.dot_prod_grid(t,e,r+1,o+1),l=this.interp(t-r,n,i),f=this.interp(t-r,s,a),u=this.interp(e-o,l,f);return this.memory[[t,e]]=u,u}};d.seed();var p=d,g={props:["x","y","colors","globalOffset","speed"],data(){return{color:"",sizeScalar:1}},methods:{setColor(){let t=1.35*Math.abs(p.get(this.x+this.globalOffset,this.y+this.globalOffset)),e=Math.floor(t*this.colors.length);this.color=this.colors[e]}},mounted(){this.setColor(),setInterval((()=>{this.setColor()}),this.speed)}},v=r(89);const m=(0,v.Z)(g,[["render",h]]);var w=m,y={name:"Hexagons",components:{ClassHexagon:w},data(){return{globalOffset:Math.random(),colors:["2a4858","215d6e","08737f","00898a","089f8f","39b48e","64c987","92dc7e","c4ec74","fafa6e"],speed:50}},mounted(){p.seed(),setInterval((()=>{this.globalOffset+=.1}),this.speed)}};const b=(0,v.Z)(y,[["render",l]]);var x=b,_={name:"App",components:{Hexagons:x}};const O=(0,v.Z)(_,[["render",i]]);var k=O;(0,o.ri)(k).mount("#app")}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,i){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],i=t[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((function(t){return r.O[t](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var f=n();void 0!==f&&(e=f)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,s=o[0],a=o[1],l=o[2],f=0;if(s.some((function(e){return 0!==t[e]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var u=l(r)}for(e&&e(o);f<s.length;f++)i=s[f],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},o=self["webpackChunkpersonal_site"]=self["webpackChunkpersonal_site"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(1524)}));o=r.O(o)})();
//# sourceMappingURL=app.b3138e31.js.map