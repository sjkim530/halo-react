(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{68:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(35),r=n.n(a),c=n(13),s=n(14),i=n(16),u=n(15),p=n(38),d=n(2),h=n.n(d),l=n(5),f=n(7),b=n(4),v=n.n(b),j=n(36),k=n(1),m=function(t){return Object(k.jsx)("div",{children:Object(k.jsx)("button",{type:"button",onClick:t.clickChevron,children:"\u2304"})})},x=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).state={content:"",isDone:!1,error:""},o.handleSubmit=o.handleSubmit.bind(Object(f.a)(o)),o.handleChange=o.handleChange.bind(Object(f.a)(o)),o}return Object(s.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(){var t=Object(l.a)(h.a.mark((function t(e){var n,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,v.a.post("https://halo-todo-app.herokuapp.com/todos",this.state);case 4:n=t.sent,o=n.data,this.props.addTodo(o),this.setState({content:""}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),this.setState({error:t.t0});case 13:case"end":return t.stop()}}),t,this,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(m,{clickChevron:this.props.clickChevron}),Object(k.jsx)("form",{onSubmit:this.handleSubmit,children:Object(k.jsx)("input",{type:"text",name:"content",placeholder:"What needs to be done?",onChange:this.handleChange,value:this.state.content})})]})}}]),n}(o.Component),O=n(19),C=function(t){var e=t.todo,n=Object(o.useState)(e.isDone),a=Object(O.a)(n,2),r=a[0],c=a[1],s=Object(o.useState)(!0),i=Object(O.a)(s,2),u=i[0],p=i[1],d=Object(o.useState)(e.content),f=Object(O.a)(d,2),b=f[0],j=f[1],m=Object(o.useState)(0),x=Object(O.a)(m,2),C=x[0],y=x[1];Object(o.useEffect)((function(){c(e.isDone)}),[e.isDone]),Object(o.useEffect)((function(){var t;return 1===C?t=setTimeout((function(){S(),y(0)}),250):2===C&&(p(!1),y(0)),function(){return clearTimeout(t)}}),[C]);var w=function(){var e=Object(l.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://halo-todo-app.herokuapp.com/todos/".concat(n));case 2:t.removeTodo(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var n=Object(l.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.put("https://halo-todo-app.herokuapp.com/todos/".concat(e.id),{isDone:!r});case 2:c(!r),t.updateStateAfterCheckboxClick();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var t=Object(l.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==n.key){t.next=4;break}return t.next=3,v.a.put("https://halo-todo-app.herokuapp.com/todos/".concat(e.id),{content:b});case 3:p(!0);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{id:b,type:"checkbox",onChange:function(){return y(C+1)},checked:r}),u?Object(k.jsx)("label",{htmlFor:b,children:b}):Object(k.jsx)("input",{type:"text",value:b,onChange:function(t){j(t.target.value)},onKeyDown:g}),Object(k.jsx)("button",{className:"delete",type:"button",onClick:function(){return w(e.id)},children:"X"})]},e.id)},y=function(t){var e=t.count,n=t.todos.map((function(t){return t.isDone})),o=function(){var e=Object(l.a)(h.a.mark((function e(){var n,o,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 2:return n=e.sent,o=n.data,a=o.filter((function(t){return t.isDone})),e.next=7,Promise.all(a.map(function(){var t=Object(l.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete("https://halo-todo-app.herokuapp.com/todos/".concat(e.id));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 7:t.removeCompleted();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[1===e?Object(k.jsxs)("p",{children:[e," item left"]}):Object(k.jsxs)("p",{children:[e," items left"]}),Object(k.jsx)("button",{type:"button",onClick:t.clickAll,children:"All"}),Object(k.jsx)("button",{type:"button",onClick:t.clickActive,children:"Active"}),Object(k.jsx)("button",{type:"button",onClick:t.clickCompleted,children:"Completed"}),n.includes(!0)?Object(k.jsx)("button",{type:"button",onClick:o,children:"Clear Completed"}):Object(k.jsx)("span",{})]})},w=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={todos:[],count:0,bottomNavBar:!1},t.addTodo=t.addTodo.bind(Object(f.a)(t)),t.removeTodo=t.removeTodo.bind(Object(f.a)(t)),t.clickAll=t.clickAll.bind(Object(f.a)(t)),t.clickActive=t.clickActive.bind(Object(f.a)(t)),t.clickCompleted=t.clickCompleted.bind(Object(f.a)(t)),t.clickChevron=t.clickChevron.bind(Object(f.a)(t)),t.removeCompleted=t.removeCompleted.bind(Object(f.a)(t)),t.updateStateAfterCheckboxClick=t.updateStateAfterCheckboxClick.bind(Object(f.a)(t)),t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 2:return e=t.sent,t.next=5,v.a.get("https://halo-todo-app.herokuapp.com/todos/count");case 5:0===(n=t.sent).data?this.setState({todos:e.data,count:n.data}):this.setState({todos:e.data.sort((function(t,e){return e.id-t.id})),count:n.data,bottomNavBar:!0});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addTodo",value:function(t){var e=this.state.count+1;this.setState({todos:[t].concat(Object(p.a)(this.state.todos)),count:e,bottomNavBar:!0})}},{key:"removeTodo",value:function(t){var e=this.state.todos.filter((function(e){return e.id!==t})),n=this.state.count-1;0===n?this.setState({todos:e,count:n,bottomNavBar:!1}):this.setState({todos:e,count:n})}},{key:"removeCompleted",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 2:e=t.sent,(n=e.data).length?this.setState({todos:n.sort((function(t,e){return e.id-t.id})),count:n.length}):this.setState({todos:n.sort((function(t,e){return e.id-t.id})),count:n.length,bottomNavBar:!1});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clickAll",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 2:e=t.sent,this.setState({todos:e.data.sort((function(t,e){return e.id-t.id})),count:e.data.length});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clickActive",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 2:e=t.sent,n=e.data.filter((function(t){return!1===t.isDone})),this.setState({todos:n.sort((function(t,e){return e.id-t.id})),count:n.length});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clickCompleted",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 2:e=t.sent,n=e.data.filter((function(t){return!0===t.isDone})),this.setState({todos:n.sort((function(t,e){return e.id-t.id})),count:n.length});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clickChevron",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e,n,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.state.todos.map((function(t){return t.isDone})),n=this.state.todos,!e.includes(!0)||!e.includes(!1)){t.next=7;break}return t.next=5,Promise.all(n.map(function(){var t=Object(l.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.put("https://halo-todo-app.herokuapp.com/todos/".concat(e.id),{isDone:!0});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:t.next=14;break;case 7:if(!e.includes(!1)||e.includes(!0)){t.next=12;break}return t.next=10,Promise.all(n.map(function(){var t=Object(l.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.put("https://halo-todo-app.herokuapp.com/todos/".concat(e.id),{isDone:!0});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 10:t.next=14;break;case 12:return t.next=14,Promise.all(n.map(function(){var t=Object(l.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.put("https://halo-todo-app.herokuapp.com/todos/".concat(e.id),{isDone:!1});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 14:return t.next=16,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 16:o=t.sent,this.setState({todos:o.data.sort((function(t,e){return e.id-t.id}))});case 18:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateStateAfterCheckboxClick",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://halo-todo-app.herokuapp.com/todos");case 2:e=t.sent,n=e.data,this.setState({todos:n.sort((function(t,e){return e.id-t.id}))});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(k.jsxs)("div",{className:"todos",children:[Object(k.jsx)(x,{addTodo:this.addTodo,todos:this.state.todos,clickChevron:this.clickChevron}),this.state.todos.map((function(e){return Object(k.jsx)(C,{todo:e,removeTodo:t.removeTodo,onChange:t.onChange,updateStateAfterCheckboxClick:t.updateStateAfterCheckboxClick},e.id)})),this.state.bottomNavBar?Object(k.jsx)(y,{todos:this.state.todos,count:this.state.count,clickAll:this.clickAll,clickActive:this.clickActive,clickCompleted:this.clickCompleted,removeCompleted:this.removeCompleted}):Object(k.jsx)("span",{})]})}}]),n}(o.Component),S=n(3),g=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"Todos"}),Object(k.jsx)(S.a,{exact:!0,path:"/",component:w})]})}}]),n}(o.Component),A=n(23);r.a.render(Object(k.jsx)(A.a,{children:Object(k.jsx)(g,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.8a9584f3.chunk.js.map