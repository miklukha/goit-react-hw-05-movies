"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733,471,499,131,619,264,390],{8471:function(n,t,e){e.r(t),e.d(t,{TrendingList:function(){return l}});var r=e(5861),u=e(885),i=e(7757),a=e.n(i),c=e(2791),o=e(6871),s=e(6409),f=e(4390),p=e(9499),d=e(4131),v=e(184);function l(){var n=(0,c.useState)([]),t=(0,u.Z)(n,2),e=t[0],i=t[1],l=(0,o.s0)();return(0,c.useEffect)((function(){!function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.getTrendingMovies();case 3:t=n.sent,i(t.results),n.next=12;break;case 7:n.prev=7,n.t0=n.catch(0),s.Am.error("Film is not found"),l("/",{replace:!0}),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}),[l]),(0,v.jsx)(p.List,{children:e.map((function(n){var t=n.id,e=n.title;return(0,v.jsx)(d.TrendingMovieItem,{id:t,name:e},t)}))})}},9499:function(n,t,e){e.r(t),e.d(t,{List:function(){return i}});var r,u=e(168),i=e(9958).Z.ul(r||(r=(0,u.Z)(["\n  padding-left: 15px;\n  list-style: circle;\n"])))},7733:function(n,t,e){e.r(t),e.d(t,{TrendingList:function(){return r.TrendingList}});var r=e(8471)},9619:function(n,t,e){e.r(t),e.d(t,{TrendingMovieItem:function(){return a}});var r=e(1264),u=e(501),i=e(184);function a(n){var t=n.id,e=n.name;return(0,i.jsx)(r.Item,{children:(0,i.jsx)(u.rU,{to:"movies/".concat(t),children:e})})}},1264:function(n,t,e){e.r(t),e.d(t,{Item:function(){return i}});var r,u=e(168),i=e(9958).Z.li(r||(r=(0,u.Z)(["\n  font-size: 18px;\n"])))},4131:function(n,t,e){e.r(t),e.d(t,{TrendingMovieItem:function(){return r.TrendingMovieItem}});var r=e(9619)},4390:function(n,t,e){e.r(t),e.d(t,{getMovieByQuery:function(){return f},getMovieCredits:function(){return l},getMovieDetails:function(){return d},getMovieReviews:function(){return m},getTrendingMovies:function(){return o}});var r=e(5861),u=e(7757),i=e.n(u),a=e(4569),c=e.n(a);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"a9f392cbbc7836cc440c1eab3d6179cd"}}}]);
//# sourceMappingURL=733.039d3ae6.chunk.js.map