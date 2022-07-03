"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[107,652,693,804,454,390],{7652:function(n,e,t){t.r(e),t.d(e,{BackLink:function(){return a}});var r=t(6693),i=t(184),a=function(n){var e=n.href;return(0,i.jsx)(r.Link,{to:e,children:"Go Back"})}},6693:function(n,e,t){t.r(e),t.d(e,{Link:function(){return o}});var r,i=t(168),a=t(9958),c=t(501),o=(0,a.Z)(c.OL)(r||(r=(0,i.Z)(["\n  display: inline-block;\n  font-size: 18px;\n  color: #2a363b;\n\n  margin-bottom: 15px;\n\n  &:hover,\n  &:focus {\n    color: #2196f3;\n  }\n"])))},804:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return v}});var r=t(5861),i=t(885),a=t(7757),c=t.n(a),o=t(2791),s=t(6871),u=t(501),l=t(6409),p=t(4390),f=t(7652),d=t(6454),h=t(184);function v(){var n,e,t,a,v=(0,o.useState)(""),m=(0,i.Z)(v,2),x=m[0],g=m[1],b=(0,s.s0)(),w=(0,s.UO)().slug.match(/[a-z0-9]+$/)[0];(0,o.useEffect)((function(){!function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.getMovieDetails(w);case 3:e=n.sent,g(e),n.next=12;break;case 7:n.prev=7,n.t0=n.catch(0),l.Am.error("Film is not found"),b("/",{replace:!0}),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}),[w,b]);var j=x.poster_path,k=x.original_title,y=x.vote_average,Z=x.overview,L=x.genres,M=(0,s.TH)(),_=null!==(n=null===(e=M.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",I=(0,o.useRef)(null===(t=M.state)||void 0===t||null===(a=t.from)||void 0===a?void 0:a.search);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.BackLink,{href:_}),(0,h.jsxs)(d.Article,{children:[(0,h.jsx)("img",{src:j?"https://image.tmdb.org/t/p/w300"+j:"https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png",alt:k}),(0,h.jsx)(d.Title,{children:k}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)(d.Item,{children:[(0,h.jsx)(d.Label,{children:"User score: "}),(0,h.jsxs)("span",{children:[Math.round(10*y),"%"]})]}),(0,h.jsxs)(d.Item,{children:[(0,h.jsx)(d.Label,{children:"Overview: "}),(0,h.jsx)("span",{children:Z})]}),(0,h.jsxs)(d.Item,{children:[(0,h.jsx)(d.Label,{children:"Genres: "}),(0,h.jsx)("span",{children:function(){if(L)return L.reduce((function(n,e){return n+"".concat(n?", ":"").concat(e.name)}),"")}()})]})]})]}),(0,h.jsx)(d.Label,{children:"Additional Information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)(d.Item,{children:(0,h.jsx)(u.rU,{to:"cast",state:{from:I.current?"/movies".concat(I.current):"/"},children:"Cast"})}),(0,h.jsx)(d.Item,{children:(0,h.jsx)(u.rU,{to:"reviews",state:{from:I.current?"/movies".concat(I.current):"/"},children:"Reviews"})})]}),(0,h.jsx)(s.j3,{})]})}},6454:function(n,e,t){t.r(e),t.d(e,{Article:function(){return u},Item:function(){return f},Label:function(){return p},Title:function(){return l}});var r,i,a,c,o=t(168),s=t(9958),u=s.Z.article(r||(r=(0,o.Z)(["\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);\n"]))),l=s.Z.h2(i||(i=(0,o.Z)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),p=s.Z.span(a||(a=(0,o.Z)(["\n  font-weight: 500;\n"]))),f=s.Z.li(c||(c=(0,o.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"])))},5107:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return r.MovieDetails}});var r=t(804)},4390:function(n,e,t){t.r(e),t.d(e,{getMovieByQuery:function(){return l},getMovieCredits:function(){return h},getMovieDetails:function(){return f},getMovieReviews:function(){return m},getTrendingMovies:function(){return s}});var r=t(5861),i=t(7757),a=t.n(i),c=t(4569),o=t.n(c);function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"a9f392cbbc7836cc440c1eab3d6179cd"}}}]);
//# sourceMappingURL=107.79fcfb87.chunk.js.map