"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[123],{123:function(e,t,n){n.r(t);var i=n(439),r=n(263),c=n(791),o=n(689),s=n(416),u=n(184);t.default=function(){var e=(0,c.useState)(null),t=(0,i.Z)(e,2),n=t[0],h=t[1],a=(0,o.UO)().movieId;if((0,c.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/movie/".concat(a,"/reviews?api_key=542013762b3531b404b15130444dfd0b")).then((function(e){return h(e.data.results)})).catch((function(e){return console.log(e)}))}),[a]),n){return(0,u.jsx)("div",{children:n?(0,u.jsx)("p",{children:"Sorry, there is no review for this movie"}):n.map((function(e){return(0,u.jsx)("ul",{children:(0,u.jsxs)(s.rf,{children:[(0,u.jsx)(s.NC,{children:e.author}),(0,u.jsx)("p",{children:e.content})]})},e.id)}))})}}}}]);
//# sourceMappingURL=123.f9155846.chunk.js.map