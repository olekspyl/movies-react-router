"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{266:function(t,e,n){n.r(e);var i=n(439),r=n(791),c=n(263),o=n(416),u=n(184);e.default=function(){var t=(0,r.useState)([]),e=(0,i.Z)(t,2),n=e[0],a=e[1];return(0,r.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=542013762b3531b404b15130444dfd0b").then((function(t){return a(t.data.results)})).catch((function(t){return console.log(t)}))}),[]),(0,u.jsx)(o.OM,{children:n.map((function(t){var e=t.id,n=t.title;return(0,u.jsx)(o.GK,{children:(0,u.jsx)(o.up,{to:"/movies/".concat(e),children:n})},e)}))})}}}]);
//# sourceMappingURL=266.4fdcb0de.chunk.js.map