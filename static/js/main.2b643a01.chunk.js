(this.webpackJsonptodo_react=this.webpackJsonptodo_react||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(9),r=n.n(i),a=(n(14),n(6)),d=n(5),s=n(4),u=n(0),j=function(e){var t=e.todos,n=e.handleTodo,c=e.removeTodo;return Object(u.jsxs)("div",{className:"item-todo",children:[Object(u.jsx)("div",{className:t.complete?"item-text strike":"item-text",onClick:function(){return n(t.id)},children:t.title}),Object(u.jsx)("div",{className:"item-delete",onClick:function(){return c(t.id)},children:"X"})]},t.id)},l=function(e){var t=e.addTodo,n=Object(c.useState)([]),o=Object(s.a)(n,2),i=o[0],r=o[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(i),r("")},children:[Object(u.jsx)("input",{value:i,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",onChange:function(e){r(e.currentTarget.value)}}),Object(u.jsx)("button",{children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})},b=n(8),f=n.n(b);var h=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],i=function(e){o(Object(d.a)(n.filter((function(t){return t.id!==e}))))},r=function(e){o(Object(d.a)(n.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{complete:!t.complete}):Object(a.a)({},t)}))))};return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users/1/todos").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)("h1",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0437\u0430\u0432\u0434\u0430\u043d\u044c: ",n.length]})}),Object(u.jsx)(l,{addTodo:function(e){if(e){var t={id:f()(),title:e,complete:!1};o([].concat(Object(d.a)(n),[t]))}}}),n.map((function(e){return Object(u.jsx)(j,{removeTodo:i,handleTodo:r,todos:e},f.a)}))]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.2b643a01.chunk.js.map