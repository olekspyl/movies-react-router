"use strict";(self.webpackChunkmovies_react_router=self.webpackChunkmovies_react_router||[]).push([[188],{188:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(439),i=n(791),s=n(689),c=n(263),o=n(416),a=n(184),l=function(e){var t,n=e.movie,r=n.poster_path,i=n.title,s=n.release_date,c=n.vote_average,l=n.overview,d=n.genres,u=n.id,h=d.map((function(e){return(0,a.jsx)(o.g$,{children:e.name},e.id)})),v=new Date(s);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.iR,{children:[(0,a.jsx)("div",{children:(0,a.jsx)(o.oP,{loading:"lazy",src:(t=r,"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(t)),alt:i})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Dx,{children:[i," ",v.getFullYear()]}),(0,a.jsxs)(o.BE,{children:["User score ",Number.parseInt(100*c/10),"%"]}),(0,a.jsx)(o.Ju,{children:"Overview"}),(0,a.jsx)(o.g2,{children:l}),(0,a.jsx)(o.WZ,{children:"Genres"}),(0,a.jsx)(o.CJ,{children:h}),(0,a.jsx)(o.j0,{children:"Additional information"}),(0,a.jsx)(o.XV,{to:"/movies/".concat(u,"/cast"),children:"Cast"}),(0,a.jsx)(o.Yg,{to:"/movies/".concat(u,"/reviews"),children:"Reviews"})]})]})})},d=function(e){var t,n,r=null!==(t=null===(n=e.location.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/";return(0,a.jsx)(o.jp,{type:"button",children:(0,a.jsx)(o.On,{state:{from:r},to:"/",children:"Back"})})},u=function(){var e=(0,i.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1],u=(0,s.UO)().movieId,h=(0,s.TH)();if((0,i.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(u,"?api_key=022b72fb5c3086143a7c2d5ac5a186e1")).then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}),[u]),n)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{location:h}),(0,a.jsx)(l,{movie:n}),(0,a.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=188.d263ae29.chunk.js.map