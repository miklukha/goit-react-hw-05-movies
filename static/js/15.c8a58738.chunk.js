"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[15,785,559,390],{6785:function(e,t,n){n.r(t),n.d(t,{Reviews:function(){return h}});var r=n(5861),u=n(885),a=n(7757),c=n.n(a),i=n(2791),s=n(6871),o=n(6409),p=n(4390),f=n(559),v=n(184);function h(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),n=(0,u.Z)(t,2),a=n[0],h=n[1],l=(0,s.s0)();return(0,i.useEffect)((function(){!function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.getMovieReviews(e);case 3:n=t.sent,h(n.results),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),o.Am.error("Film is not found"),l("/",{replace:!0}),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}),[e,l]),0===a.length?(0,v.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,v.jsx)("ul",{children:a.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,v.jsxs)(f.Item,{children:[(0,v.jsx)(f.Label,{children:"Author: "}),(0,v.jsx)("span",{children:t}),(0,v.jsx)(f.Text,{children:n})]},r)}))})}},559:function(e,t,n){n.r(t),n.d(t,{Item:function(){return o},Label:function(){return s},Text:function(){return p}});var r,u,a,c=n(168),i=n(9958),s=i.Z.span(r||(r=(0,c.Z)(["\n  font-weight: 500;\n"]))),o=i.Z.li(u||(u=(0,c.Z)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),p=i.Z.p(a||(a=(0,c.Z)(["\n  margin-top: 10px;\n"])))},1015:function(e,t,n){n.r(t),n.d(t,{Reviews:function(){return r.Reviews}});var r=n(6785)},4390:function(e,t,n){n.r(t),n.d(t,{getMovieByQuery:function(){return p},getMovieCredits:function(){return l},getMovieDetails:function(){return v},getMovieReviews:function(){return m},getTrendingMovies:function(){return s}});var r=n(5861),u=n(7757),a=n.n(u),c=n(4569),i=n.n(c);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?query=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3",i().defaults.params={api_key:"a9f392cbbc7836cc440c1eab3d6179cd"}}}]);
//# sourceMappingURL=15.c8a58738.chunk.js.map