"use strict";(self.webpackChunkmovies_react_router=self.webpackChunkmovies_react_router||[]).push([[266],{266:function(e,t,r){r.r(t);var n=r(439),u=r(791),c=r(263),o=r(416),i=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,n.Z)(e,2),r=t[0],a=t[1];return(0,u.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=542013762b3531b404b15130444dfd0b").then((function(e){return a(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),(0,i.jsx)(o.OM,{children:r.map((function(e){var t=e.id,r=e.title;return(0,i.jsx)(o.GK,{children:(0,i.jsx)(o.up,{to:"/movies/".concat(t),children:r})},t)}))})}}}]);
//# sourceMappingURL=266.ba98794b.chunk.js.map