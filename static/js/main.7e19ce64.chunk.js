(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{69:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(21),i=n.n(a),o=n(8),u=n(12),s=n(4),b=n(40),j=n(11),d=n(9),l=n.n(d),f=n(16),p=n(19),O=n.n(p);function m(){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("/contacts/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O.a.defaults.baseURL="https://611e98a69771bf001785c556.mockapi.io/";var w,k,C,L,F,S=Object(u.b)("contacts/fetchContacts",Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),E=Object(u.b)("contacts/addContact",function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R=Object(u.b)("contacts/deleteContact",function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(u.c)({name:"contacts",initialState:{items:[]},extraReducers:(w={},Object(s.a)(w,S.fulfilled,(function(e,t){return{items:t.payload}})),Object(s.a)(w,E.fulfilled,(function(e,t){return{items:[t.payload].concat(Object(b.a)(e.items))}})),Object(s.a)(w,R.fulfilled,(function(e,t){var n=t.payload;return{items:e.items.filter((function(e){return e.id!==n}))}})),w)}),J=Object(u.c)({name:"filter",initialState:"",reducers:{setFilter:function(e,t){return t.payload}}}),N=J.actions.setFilter,T=Object(u.c)({name:"error",initialState:[],extraReducers:(k={},Object(s.a)(k,S.pending,(function(){return null})),Object(s.a)(k,S.rejected,(function(e,t){return t.error.message})),Object(s.a)(k,E.pending,(function(){return null})),Object(s.a)(k,E.rejected,(function(e,t){return t.error.message})),Object(s.a)(k,R.pending,(function(){return null})),Object(s.a)(k,R.rejected,(function(e,t){return t.error.message})),k)}),z=Object(u.c)({name:"isLoading",initialState:!1,extraReducers:(C={},Object(s.a)(C,S.pending,(function(){return!0})),Object(s.a)(C,S.fulfilled,(function(){return!1})),Object(s.a)(C,S.rejected,(function(){return!1})),Object(s.a)(C,E.pending,(function(){return!0})),Object(s.a)(C,E.fulfilled,(function(){return!1})),Object(s.a)(C,E.rejected,(function(){return!1})),Object(s.a)(C,R.pending,(function(){return!0})),Object(s.a)(C,R.fulfilled,(function(){return!1})),Object(s.a)(C,R.rejected,(function(){return!1})),C)}),A=B.reducer,I=J.reducer,M=T.reducer,P=z.reducer,U=Object(j.b)({contacts:A,filter:I,error:M,isLoading:P}),V=Object(u.a)({reducer:U,devTools:!1}),W=(n(69),n(5)),q=n(6),D=q.a.section(L||(L=Object(W.a)(["\n  background-color: #44424232;\n  margin-top: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  &:not(:first-of-type) {\n    margin-bottom: 20px;\n  }\n"]))),G=n(2),H=function(e){var t=e.children;return Object(G.jsx)(D,{children:t})},K=q.a.div(F||(F=Object(W.a)(["\n  max-width: 320px;\n  border: thick double #c21111e2;\n  border-radius: 20px;\n  background-color: #ffffffba;\n  margin: 0 auto;\n"]))),Q=K,X=n(17),Y=n(25),Z=n(18),$=n(29),_=n.n($),ee=(n(81),n(22)),te=function(e){return e.isLoading},ne=function(e){return e.filter},re=Object(ee.a)([ne,function(e){return e.contacts.items}],(function(e,t){var n=e.toLowerCase();return t.filter((function(e){var t=e.name,r=e.number;return t.toLowerCase().includes(n)||r.includes(n)}))}));var ce,ae,ie,oe,ue,se,be,je,de,le=function(){var e=Object(o.b)(),t=Object(o.c)(re),n=_.a.generate(),r=_.a.generate();return Object(G.jsx)(Z.d,{initialValues:{name:"",number:""},validate:function(e){var t={};return e.name?e.number?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(e.number)||(t.number="The number can only include numbers, spaces, dashes, brackets and start with +"):t.number="Enter number":t.name="Enter name",t},onSubmit:function(n,r){var c,a=r.resetForm,i=n.name,o=n.number;c={name:i,number:o},t.some((function(e){return e.name===c.name}))?alert("".concat(c.name," already in phonebook")):e(E(c)),a()},children:Object(G.jsxs)(Z.c,{autoComplete:"off",children:[Object(G.jsxs)("label",{htmlFor:"id-".concat(n),children:[Object(G.jsx)(X.a,{color:"#c21111e2"})," Name"]}),Object(G.jsx)(Z.b,{type:"text",name:"name",id:"id-".concat(n),placeholder:"enter name"}),Object(G.jsx)(Z.a,{name:"name"}),Object(G.jsxs)("label",{htmlFor:"id-".concat(r),children:[Object(G.jsx)(Y.a,{color:"#c21111e2"}),"Number"]}),Object(G.jsx)(Z.b,{type:"tel",name:"number",id:"id-".concat(r),placeholder:"+111-111-11"}),Object(G.jsx)(Z.a,{name:"number"}),Object(G.jsx)("button",{type:"submit",children:"Add contact"})]})})},fe=q.a.div(ce||(ce=Object(W.a)([""]))),pe=q.a.input(ae||(ae=Object(W.a)([""]))),Oe=q.a.p(ie||(ie=Object(W.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-weight: 500;\n"])));function me(){var e=Object(o.b)(),t=Object(o.c)(ne);return Object(G.jsxs)(fe,{children:[Object(G.jsxs)(Oe,{children:[Object(G.jsx)(X.c,{color:"#c21111e2"}),"Find contacts by name"]}),Object(G.jsx)(pe,{type:"text",value:t,onChange:function(t){return e(N(t.target.value))},placeholder:"enter name"})]})}var xe=q.a.ul(oe||(oe=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  list-style: none;\n  padding-inline-start: 5px;\n  margin: 0 auto;\n  margin-top: 5px;\n"]))),he=q.a.li(ue||(ue=Object(W.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 5px 0 5px 0;\n  font-size: 12px;\n"]))),ge=q.a.p(se||(se=Object(W.a)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),ve=q.a.button(be||(be=Object(W.a)(["\n  margin-right: 0 auto;\n"]))),ye=q.a.div(je||(je=Object(W.a)(["\n  display: flex;\n  align-items: center;\n  width: 120px;\n"]))),we=q.a.div(de||(de=Object(W.a)(["\n  text-align: center;\n"])));var ke=function(){var e=Object(o.c)(re),t=Object(o.b)(),n=Object(o.c)(te);return Object(r.useEffect)((function(){t(S())}),[t]),Object(G.jsxs)(xe,{children:[e.map((function(e){var n=e.id,r=e.name,c=e.number;return Object(G.jsxs)(he,{children:[Object(G.jsxs)(ye,{children:[Object(G.jsx)(X.a,{color:"#c21111e2"}),Object(G.jsx)(ge,{children:r})]}),Object(G.jsxs)(ye,{children:[Object(G.jsx)(Y.a,{width:"16px",viewBox:"0 0 16 16",color:"#c21111e2"}),Object(G.jsx)(ge,{children:c})," "]}),Object(G.jsx)(ve,{onClick:function(){return function(e){return t(R(e))}(n)},children:Object(G.jsx)(X.b,{})})]},n)})),n&&Object(G.jsx)(we,{children:"...Wait load..."})]})};var Ce=function(){var e=Object(o.c)(te);return Object(G.jsxs)(Q,{children:[Object(G.jsxs)(H,{children:[Object(G.jsx)("h1",{children:"Phonebook"}),Object(G.jsx)(le,{})]}),Object(G.jsxs)(H,{children:[Object(G.jsx)("h2",{children:"Contacts"}),Object(G.jsx)(me,{}),Object(G.jsx)(ke,{})]}),e&&Object(G.jsx)("p",{children:"...Loading..."})]})};n(82);i.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(o.a,{store:V,children:Object(G.jsx)(Ce,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.7e19ce64.chunk.js.map