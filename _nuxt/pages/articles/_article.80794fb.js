(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4],{189:function(t,e,n){var content=n(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("25ac72c6",content,!0,{sourceMap:!1})},191:function(t,e,n){var map={"./QRcode.JPG":192};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=191},192:function(t,e,n){t.exports=n.p+"img/QRcode.214b289.JPG"},193:function(t,e,n){"use strict";var r=n(189);n.n(r).a},194:function(t,e,n){(e=n(24)(!1)).push([t.i,'.socials[data-v-68cacc0f]{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));width:100%;padding:1em 0}.socials .platform[data-v-68cacc0f]{display:flex;justify-content:left;align-items:center;flex-direction:column;padding:1em;font-family:"Share Tech"}',""]),t.exports=e},195:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{platforms:[{title:"WeChat",icon:"weixin",color:"#e34f26",img:"QRcode.JPG"}]}}},l=(n(193),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"socials"},t._l(t.platforms,(function(e,l){return r("div",{key:"platform"+l,staticClass:"platform"},[r("fa-icon",{attrs:{icon:["fab",e.icon],size:"3x"}}),t._v(" "),r("div",[t._v(t._s(e.title))]),t._v(" "),e.img?r("img",{attrs:{src:n(191)("./"+e.img),alt:""}}):t._e()],1)})),0)}),[],!1,null,"68cacc0f",null);e.default=component.exports},196:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{email:"",subscribed:!1,statustext:""}},methods:{signup:function(){var t=this;this.statustext="";var e={email:this.email};this.emailIsValid(this.email)?this.$http.post("/api/subscribe",JSON.stringify(e)).then((function(t){return t.json()}),(function(e){400===e.status&&(t.email="")})).then((function(e){e.msg&&(t.subscribed=!0,t.statustext=e.msg,t.email="")})):this.statustext="Please enter a valid email address"},emailIsValid:function(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"newsletter"}},[n("h3",[t._v("Get notified")]),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("New tutorials, courses, and articles straight into your inbox. Your email address will never be shared.")]),t._v(" "),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email-signup",attrs:{id:"email",type:"email",placeholder:"Enter Email"},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("div",{staticClass:"button",on:{click:t.signup}},[t._v("GO!")])]),t._v(" "),n("div",{staticClass:"statustext"},[t._v(t._s(t.statustext))])])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);n(17);var r=n(2),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$content,e.next=3,r("articles",n.article).fetch();case 3:return l=e.sent,e.abrupt("return",{page:l});case 5:case"end":return e.stop()}}),e)})))()},transition:{name:"fade",mode:"out-in"}},o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"content"},[n("nuxt-link",{staticClass:"article-back",attrs:{to:"/"}},[n("fa-icon",{attrs:{icon:["fad","angle-left"],size:"2x"}}),t._v(" BACK\n  ")],1),t._v(" "),n("h1",[t._v(t._s(t.page.title))]),t._v(" "),n("div",{staticClass:"author"}),t._v(" "),n("nuxt-content",{attrs:{document:t.page}}),t._v(" "),n("Newsletter"),t._v(" "),n("SocialMedia")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Newsletter:n(196).default,SocialMedia:n(195).default})}}]);