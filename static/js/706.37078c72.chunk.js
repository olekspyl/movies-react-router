"use strict";(self.webpackChunkmovies_react_router=self.webpackChunkmovies_react_router||[]).push([[706],{706:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),c=n(263),s=n(791),a=n(689),i=n(416),o=n(184),u=function(t){var e=t.casts,n=function(t){if(t)return"https://www.themoviedb.org/t/p/w66_and_h66_face".concat(t)};return e.map((function(t){var e=t.id,r=t.profile_path,c=t.name,s=t.character;return(0,o.jsxs)(i.dh,{children:[(0,o.jsx)("img",{src:n(r),alt:c}),(0,o.jsx)(i.xl,{children:c}),(0,o.jsxs)("p",{children:["as ",s]})]},e)}))},f=function(){var t=(0,s.useState)(null),e=(0,r.Z)(t,2),n=e[0],f=e[1],d=(0,a.UO)().movieId;if((0,s.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(d,"/credits?api_key=542013762b3531b404b15130444dfd0b")).then((function(t){return f(t.data.cast)})).catch((function(t){return console.log(t)}))}),[d]),n)return console.log(n),(0,o.jsx)(i.ds,{children:(0,o.jsx)(u,{casts:n})})}}}]);
//# sourceMappingURL=706.37078c72.chunk.js.map