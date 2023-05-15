(function(){"use strict";var t={9350:function(t,e,o){var n=o(7195),i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"todoapp"},[e("heade"),e("todomain"),e("foot")],1)},r=[],s=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("h1",[t._v("todos")]),e("input",{staticClass:"new-todo",attrs:{type:"text",placeholder:"what need to be done?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}})])},a=[],l={name:"Header",data(){return{}},mounted(){},methods:{addTodo(t){if(!t.target.value)return;let e={id:(new Date).toISOString(),title:t.target.value.trim(),done:!1};this.$store.commit("ADDTODO",e),t.target.value=""}}},d=l,u=o(1001),c=(0,u.Z)(d,s,a,!1,null,"3fd515c4",null),f=c.exports,v=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("input",{staticClass:"toggle-all",attrs:{type:"checkbox"},domProps:{checked:t.getAllbtn},on:{change:function(e){return t.clickAll(e)}}}),e("ul",{staticClass:"todo-list"},t._l(t.getSatu,(function(o,n){return e("li",{key:o.id,ref:"li",refInFor:!0,staticClass:"todo",class:{completed:o.done,editing:o.isedit},on:{dblclick:function(e){return t.Edit(o.id,o.title)}}},[e("div",{staticClass:"view"},[e("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:o.done},on:{change:function(e){return t.todoDone(o.id,e)}}}),e("label",[t._v(t._s(o.title))]),e("button",{staticClass:"destroy",on:{click:function(e){return t.delet(o.id)}}})]),e("input",{directives:[{name:"show",rawName:"v-show",value:o.isedit,expression:"todo.isedit"}],ref:"inp",refInFor:!0,staticClass:"edit",attrs:{type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishInp(n,o.id,e)}}})])})),0)])},m=[],h=o(408),p={name:"Main",data(){return{isEdit:!0}},methods:{todoDone(t,e){this.$store.commit("CHANGETODODONE",{todoId:t,value:e.target.checked})},clickAll(t){this.$store.commit("CLICKALL",{value:t.target.checked})},delet(t,e){this.$store.commit("DELET",{value:t})},Edit(t,e){this.$store.commit("DBEDIT",{value:t})},finishInp(t,e,o){o.target.value&&(console.log(o.target.value),this.$store.commit("FINISHINP",{id:e,value:o.target.value.trim()}),o.target.value="",this.$store.commit("EDITFALSE",{value:e}))}},computed:{...(0,h.rn)(["todos"]),...(0,h.Se)(["getAllbtn","getSatu"])},watch:{},mounted(){}},g=p,E=(0,u.Z)(g,v,m,!1,null,"55179e63",null),C=E.exports,k=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("span",{staticClass:"todo-count"},[e("strong",[t._v(t._s(t.unDone))]),t._v(" items left")]),e("ul",{staticClass:"filters"},[e("li",[e("a",{class:{selected:"all"===t.statu},attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.changeStatu("all")}}},[t._v("all")])]),e("li",[e("a",{class:{selected:"active"===t.statu},attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.changeStatu("active")}}},[t._v("active")])]),e("li",[e("a",{class:{selected:"completed"===t.statu},attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.changeStatu("completed")}}},[t._v("completed")])])]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.isclear,expression:"isclear"}],staticClass:"clear-completed",on:{click:t.removeCompleted}},[t._v("clear completed")])])},D=[],O={name:"Foot",data(){return{}},mounted(){},computed:{...(0,h.Se)(["unDone","isclear"]),...(0,h.rn)(["statu"])},methods:{changeStatu(t){this.$store.commit("CHANGESTATU",t)},removeCompleted(){this.$store.commit("REMOVECOMPLETED")}}},y=O,b=(0,u.Z)(y,k,D,!1,null,"4963f288",null),_=b.exports,w={name:"Header",data(){return{}},components:{heade:f,todomain:C,foot:_},mounted(){},methods:{}},T=w,I=(0,u.Z)(T,i,r,!1,null,null,null),P=I.exports,S=o(2241);n.ZP.use(S.ZP);const A=[],x=new S.ZP({routes:A});var Z=x;o(7658);n.ZP.use(h.ZP);const L={todos:[{id:1,title:"学习vue",done:!0,isedit:!1},{id:2,title:"学习React",done:!1,isedit:!1},{id:3,title:"学习vue-element-admin",done:!1,isedit:!1}],statu:"all"},N={ADDTODO(t,e){t.todos.push(e)},CHANGETODODONE(t,e){t.todos.forEach((t=>{t.id===e.todoId&&(t.done=e.value)}))},CLICKALL(t,e){t.todos=t.todos.map((t=>(t.done=e.value,t)))},DELET(t,e){t.todos=t.todos.filter((t=>t.id!==e.value))},FINISHINP(t,e){t.todos.forEach((t=>{t.id===e.id&&(t.title=e.value)})),console.log(t.todos)},DBEDIT(t,e){t.todos.forEach(((o,i)=>{if(o.id===e.value){console.log(o.id);let e={id:o.id,title:o.title,done:o.done,isedit:!0};n.ZP.set(t.todos,i,e)}}))},EDITFALSE(t,e){t.todos.forEach(((o,i)=>{if(o.id===e.value){console.log(o.id);let e={id:o.id,title:o.title,done:o.done,isedit:!1};n.ZP.set(t.todos,i,e)}}))},CHANGESTATU(t,e){t.statu=e},REMOVECOMPLETED(t){t.todos=t.todos.filter((t=>!t.done))}},$={getAllbtn(t){return t.todos.every((t=>t.done))},unDone(t){return t.todos.filter((t=>!t.done)).length},getSatu(t){return"all"===t.statu?t.todos:"active"===t.statu?t.todos.filter((t=>!t.done)):"completed"===t.statu?t.todos.filter((t=>t.done)):void 0},isclear(t){return console.log(t.todos.some((t=>t.done))),t.todos.some((t=>t.done))}};var F=new h.ZP.Store({state:L,getters:$,mutations:N,actions:{},modules:{}});n.ZP.config.productionTip=!1,new n.ZP({router:Z,store:F,render:t=>t(P)}).$mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,r){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],r=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(u--,1);var d=i();void 0!==d&&(e=d)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,i,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,s=n[0],a=n[1],l=n[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(l)var u=l(o)}for(e&&e(n);d<s.length;d++)r=s[d],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunktodo"]=self["webpackChunktodo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9350)}));n=o.O(n)})();
//# sourceMappingURL=app.ef0ca7ee.js.map