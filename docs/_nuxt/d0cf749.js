(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{269:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("b8019886",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("e1ca9cfe",content,!0,{sourceMap:!1})},272:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("5cd90ec7",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(269)},274:function(t,e,n){var o=n(35)(!1);o.push([t.i,"*[data-v-9fb25a36]{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}",""]),t.exports=o},275:function(t,e,n){"use strict";n(270)},276:function(t,e,n){var o=n(35)(!1);o.push([t.i,".expand-enter-active,.expand-leave-active{transition-property:opacity,height;transition-duration:.4s;overflow:hidden}.expand-enter,.expand-leave-to{height:0}",""]),t.exports=o},277:function(t,e,n){var o=n(2),r=n(176);o({target:"Array",stat:!0,forced:!n(117)((function(t){Array.from(t)}))},{from:r})},278:function(t,e,n){"use strict";n.r(e);var o={name:"TransitionExpand",functional:!0,render:function(t,e){return t("transition",{props:{name:"expand"},on:{afterEnter:function(element){element.style.height="auto"},enter:function(element){var t=getComputedStyle(element).width;element.style.width=t,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto";var e=getComputedStyle(element).height;element.style.width=null,element.style.position=null,element.style.visibility=null,element.style.height=0,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=e}))},leave:function(element){var t=getComputedStyle(element).height;element.style.height=t,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=0}))}}},e.children)}},r=(n(273),n(275),n(17)),component=Object(r.a)(o,undefined,undefined,!1,null,"9fb25a36",null);e.default=component.exports},281:function(t,e,n){"use strict";n(272)},282:function(t,e,n){var o=n(35)(!1);o.push([t.i,'.container[data-v-31ad34f6]{max-width:1200px;padding:0 20px;margin:0 auto}html[data-v-31ad34f6]{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}body[data-v-31ad34f6]{padding:0;margin:0}*[data-v-31ad34f6],[data-v-31ad34f6]:after,[data-v-31ad34f6]:before{box-sizing:border-box;margin:0}@-webkit-keyframes link-animation-data-v-31ad34f6{0%{right:0}to{right:0}}@keyframes link-animation-data-v-31ad34f6{0%{right:0}to{right:0}}.accordion[data-v-31ad34f6]{width:100%;max-width:996px;background:#fff;border-radius:5px;box-shadow:20px 4px 40px rgba(0,0,0,.03);padding:20px;margin:0 auto 20px;transition:opacity 1s,transform .7s cubic-bezier(.165,.84,.44,1);opacity:.5;transform:scale(.8);transform-origin:center}.accordion.animated[data-v-31ad34f6]{opacity:1;transform:scale(1)}.accordion__head[data-v-31ad34f6]{font-family:"Roboto",sans-serif;font-weight:400;font-size:24px;color:#43465d;display:flex;align-items:center;cursor:pointer}@media(max-width:600px){.accordion__head[data-v-31ad34f6]{font-size:16px}}.accordion__head .text[data-v-31ad34f6],.accordion__head svg[data-v-31ad34f6]{transition:.3s}.accordion__head[data-v-31ad34f6]:hover{color:#e31e24}.accordion__head .arrow[data-v-31ad34f6]{display:flex;align-items:center;justify-content:center;margin-right:10px}.accordion__head.open[data-v-31ad34f6]{color:#e31e24}.accordion__head.open svg[data-v-31ad34f6]{transform:rotate(45deg)}.accordion__head.open svg path[data-v-31ad34f6]{fill:#e31e24}.accordion__content[data-v-31ad34f6]{font-family:"Nunito",sans-serif;font-size:18px;line-height:28px;color:#43465d;opacity:.8;transition:.3s}.accordion__content.open[data-v-31ad34f6]{margin-top:40px}.accordion__content[data-v-31ad34f6]  p:not(:last-child){margin-bottom:30px}',""]),t.exports=o},286:function(t,e,n){"use strict";n.r(e);n(277),n(37),n(50);var o=n(0).a.extend({props:{item:{type:Object}},data:function(){return{isShow:!1}},methods:{blockAnimation:function(){var t=new IntersectionObserver((function(t,e){t.forEach((function(element){var t=element.target;element.isIntersecting?t.classList.add("animated"):t.querySelector(".accordion__head ").classList.contains("open")||t.classList.remove("animated")}))}),{root:null,rootMargin:"-70px 0px -70px 0px",threshold:.5});Array.from(document.querySelectorAll(".accordion")).forEach((function(e){t.observe(e)}))}},mounted:function(){var t=this;this.$nextTick((function(){t.blockAnimation()}))}}),r=(n(281),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion"},[n("div",{staticClass:"accordion__head",class:{open:t.isShow},on:{click:function(e){t.isShow=!t.isShow}}},[n("div",{staticClass:"arrow"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z",fill:"#43465D"}})])]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(t.item.head))])]),t._v(" "),n("div",{staticClass:"accordion__content",class:{open:t.isShow}},[n("height-transition",[t.isShow?n("div",{domProps:{innerHTML:t._s(t.item.content)}}):t._e()])],1)])}),[],!1,null,"31ad34f6",null);e.default=component.exports;installComponents(component,{HeightTransition:n(278).default})}}]);