(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{email:"",subscribed:!1,statustext:""}},methods:{signup:function(){var t=this;this.statustext="";var e={email:this.email};this.emailIsValid(this.email)?this.$http.post("/api/subscribe",JSON.stringify(e)).then((function(t){return t.json()}),(function(e){400===e.status&&(t.email="")})).then((function(e){e.msg&&(t.subscribed=!0,t.statustext=e.msg,t.email="")})):this.statustext="Please enter a valid email address"},emailIsValid:function(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"newsletter"}},[n("h3",[t._v("Get notified")]),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("New tutorials, courses, and articles straight into your inbox. Your email address will never be shared.")]),t._v(" "),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email-signup",attrs:{id:"email",type:"email",placeholder:"Enter Email"},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("div",{staticClass:"button",on:{click:t.signup}},[t._v("GO!")])]),t._v(" "),n("div",{staticClass:"statustext"},[t._v(t._s(t.statustext))])])}),[],!1,null,null,null);e.default=component.exports}}]);