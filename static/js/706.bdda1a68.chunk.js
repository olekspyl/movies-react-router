"use strict";(self.webpackChunkmovies_react_router=self.webpackChunkmovies_react_router||[]).push([[706],{706:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var c=n(439),r=n(263),a=n(791),s=n(689),i=n(416),o=n(184),u=function(t){var e=t.casts,n=function(t){if(t)return"https://www.themoviedb.org/t/p/w66_and_h66_face".concat(t)};return e.map((function(t){var e=t.id,c=t.profile_path,r=t.name,a=t.character;return(0,o.jsxs)(i.dh,{children:[(0,o.jsx)("img",{src:n(c),alt:r}),(0,o.jsx)(i.xl,{children:r}),(0,o.jsxs)("p",{children:["as ",a]})]},e)}))},f=function(){var t=(0,a.useState)(null),e=(0,c.Z)(t,2),n=e[0],f=e[1],h=(0,s.UO)().movieId;if((0,a.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/movie/".concat(h,"/credits?api_key=022b72fb5c3086143a7c2d5ac5a186e1")).then((function(t){return f(t.data.cast)})).catch((function(t){return console.log(t)}))}),[h]),n)return console.log(n),(0,o.jsx)(i.ds,{children:(0,o.jsx)(u,{casts:n})})}}}]);
//# sourceMappingURL=706.bdda1a68.chunk.js.map