"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166,862,701,429],{3166:function(t,n,r){r.r(n),r.d(n,{Movies:function(){return o}});var e=r(885),u=r(501),a=r(3862),c=r(6701),i=r(184);function o(){var t=(0,u.lr)(),n=(0,e.Z)(t,2),r=n[0],o=n[1],s=r.get("query");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target,r=n.input.value.trim();r?(o({query:r}),n.reset()):alert("Enter film")},children:[(0,i.jsx)(a.Input,{type:"text",autoComplete:"off",autoFocus:!0,name:"input"}),(0,i.jsx)(a.Button,{type:"submit",children:"Search"})]}),s&&(0,i.jsx)(c.MoviesList,{query:s})]})}},3862:function(t,n,r){r.r(n),r.d(n,{Button:function(){return o},Input:function(){return i}});var e,u,a=r(168),c=r(9958),i=c.Z.input(e||(e=(0,a.Z)(["\n  width: 300px;\n  height: 30px;\n\n  margin-right: 10px;\n"]))),o=c.Z.button(u||(u=(0,a.Z)(["\n  width: 50px;\n  height: 30px;\n  background-color: gray;\n"])))},2429:function(t,n,r){r.r(n),r.d(n,{MoviesList:function(){return h}});var e=r(5861),u=r(885),a=r(7757),c=r.n(a),i=r(2791),o=r(6871),s=r(501),p=r(4390),f=r(184);function h(t){var n=t.query,r=(0,i.useState)([]),a=(0,u.Z)(r,2),h=a[0],v=a[1];(0,i.useEffect)((function(){!function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.Ph(n);case 3:r=t.sent,v(r.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}),[n]);var l=(0,o.TH)();return(0,f.jsx)("ul",{children:h.map((function(t){var n=t.original_title,r=t.id;return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(r),state:{from:l},children:n})},r)}))})}},6701:function(t,n,r){r.r(n),r.d(n,{MoviesList:function(){return e.MoviesList}});var e=r(2429)},4390:function(t,n,r){r.d(n,{Df:function(){return o},Ph:function(){return p},TP:function(){return h},tx:function(){return m},zv:function(){return l}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),i=r.n(c);function o(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?query=".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3",i().defaults.params={api_key:"a9f392cbbc7836cc440c1eab3d6179cd"}}}]);
//# sourceMappingURL=166.1954fed1.chunk.js.map