"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[105],{105:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),i=n(791),c=n(87),o=n(689),u=n(263),s=n(416),a=n(184),l=function(e){var t=e.movies;return(0,a.jsx)(s.OM,{children:t.map((function(e){var t=e.id,n=e.title;return(0,a.jsx)(s.GK,{children:(0,a.jsx)(s.up,{to:"/movies/".concat(t),children:n})},t)}))})},f=function(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=t[0],f=t[1],h=(0,i.useState)(!1),d=(0,r.Z)(h,2),v=d[0],x=d[1],j=(0,i.useState)([]),b=(0,r.Z)(j,2),m=b[0],p=b[1],_=(0,o.UO)().movieId,g=(0,c.lr)(),y=(0,r.Z)(g,2),k=(y[0],y[1]);(0,i.useEffect)((function(){try{v&&(u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=542013762b3531b404b15130444dfd0b&query=".concat(n)).then((function(e){return p(e.data.results)})).catch((function(e){return console.log(e)})),x(!1),f(""))}finally{}}),[n,v]);var S=function(){x(!0),k({query:n})};return(0,a.jsxs)("div",{children:[_?(0,a.jsx)(o.j3,{}):(0,a.jsxs)(s.Yb,{children:[(0,a.jsx)("form",{onSubmit:function(e){e.preventDefault(),S(),console.log(m)},children:(0,a.jsx)("label",{children:(0,a.jsx)(s.II,{type:"text",value:n,onChange:function(e){f(e.target.value)}})})}),(0,a.jsx)(s.zx,{type:"button",onClick:S,children:"Search"})]}),m&&(0,a.jsx)(l,{movies:m})]})}}}]);
//# sourceMappingURL=105.3fda83e0.chunk.js.map