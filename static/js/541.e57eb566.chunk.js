"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541,98,390],{2541:function(t,n,e){e.r(n),e.d(n,{Cast:function(){return h}});var r=e(5861),a=e(885),u=e(7757),c=e.n(u),i=e(2791),o=e(6871),s=e(6409),p=e(4390),f=e(9098),l=e(184);function h(){var t=(0,o.UO)().movieId,n=(0,i.useState)([]),e=(0,a.Z)(n,2),u=e[0],h=e[1];return(0,i.useEffect)((function(){!function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.getMovieCredits(t);case 3:e=n.sent,h(e.cast),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),s.Am.error("Something wrong"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}),[t]),(0,l.jsx)("ul",{children:u.map((function(t){var n=t.profile_path,e=t.original_name,r=t.character,a=t.id;return(0,l.jsxs)(f.Item,{children:[(0,l.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w200"+n:"https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png",alt:e}),(0,l.jsx)(f.Title,{children:e}),(0,l.jsx)(f.Label,{children:"Character: "}),(0,l.jsx)("span",{children:r})]},a)}))})}},9098:function(t,n,e){e.r(n),e.d(n,{Item:function(){return p},Label:function(){return s},Title:function(){return o}});var r,a,u,c=e(168),i=e(9958),o=i.Z.h3(r||(r=(0,c.Z)(["\n  font-size: 20px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),s=i.Z.span(a||(a=(0,c.Z)(["\n  font-weight: 500;\n"]))),p=i.Z.li(u||(u=(0,c.Z)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"])))},4390:function(t,n,e){e.r(n),e.d(n,{getMovieByQuery:function(){return p},getMovieCredits:function(){return d},getMovieDetails:function(){return l},getMovieReviews:function(){return m},getTrendingMovies:function(){return o}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?query=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3",i().defaults.params={api_key:"a9f392cbbc7836cc440c1eab3d6179cd"}}}]);
//# sourceMappingURL=541.e57eb566.chunk.js.map