"use strict";(self.webpackChunkmovies_react_router=self.webpackChunkmovies_react_router||[]).push([[884],{884:function(e,r,t){t.r(r),t.d(r,{default:function(){return a}});var n=t(439),i=t(263),u=t(791),c=t(689),o=t(416),s=t(184),f=function(e){return e.reviews.map((function(e){return(0,s.jsx)("ul",{children:(0,s.jsxs)(o.rf,{children:[(0,s.jsx)(o.NC,{children:e.author}),(0,s.jsx)("p",{children:e.content})]})},e.id)}))},a=function(){var e=(0,u.useState)(null),r=(0,n.Z)(e,2),t=r[0],o=r[1],a=(0,c.UO)().movieId;if((0,u.useEffect)((function(){i.Z.get("https://api.themoviedb.org/3/movie/".concat(a,"/reviews?api_key=542013762b3531b404b15130444dfd0b")).then((function(e){return o(e.data.results)})).catch((function(e){return console.log(e)}))}),[a]),t)return(0,s.jsx)("div",{children:t?(0,s.jsx)("p",{children:"Sorry, there is no review for this movie"}):(0,s.jsx)(f,{reviews:t})})}}}]);
//# sourceMappingURL=884.0e7e7d40.chunk.js.map