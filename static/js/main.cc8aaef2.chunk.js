(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{11:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(15),s=a.n(n),r=(a(11),a(9)),i=a(2),l=a(1),o=function(){Object(i.g)();return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-2",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(r.b,{to:"/home",className:"navbar-brand",onClick:function(){i.a},children:"NETPRIME"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/home",className:"nav-link active","aria-current":"page",onClick:function(e){for(var t=document.querySelectorAll(".nav-link"),a=0;a<t.length;a++)t[a].classList.contains("active")&&t[a].classList.remove("active");e.currentTarget.classList.contains("active")?e.currentTarget.classList.remove("active"):e.currentTarget.classList.add("active")},children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/feature",className:"nav-link ",onClick:function(e){var t=document.querySelectorAll(".nav-link");console.log("atag",t);for(var a=0;a<t.length;a++)t[a].classList.contains("active")&&t[a].classList.remove("active");e.currentTarget.classList.contains("active")?e.currentTarget.classList.remove("active"):e.currentTarget.classList.add("active")},children:"Features"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"pricing",className:"nav-link ",onClick:function(e){for(var t=document.querySelectorAll(".nav-link"),a=0;a<t.length;a++)t[a].classList.contains("active")&&t[a].classList.remove("active");e.currentTarget.classList.contains("active")?e.currentTarget.classList.remove("active"):e.currentTarget.classList.add("active")},children:"Pricing"})})]})})]})})},b=a(7),j=(a(39),a(22)),u=a.n(j),d=function(e){var t=Object(i.g)();return Object(l.jsxs)("div",{className:"card",onClick:function(){document.querySelectorAll(".nav-link")[0].classList.remove("active"),t.push({pathname:"/preview/".concat(e.data.id,"/").concat(e.st),data:e.data})},children:[Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.data.poster_path),className:"card-img-top",alt:"..."}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsx)(u.a,{text:e.data.overview,length:75})})]})},v=a(3),O=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e})),a=Object(c.useState)([]),n=Object(b.a)(a,2),s=n[0],r=n[1];return t.then((function(e){console.log("line 12",e.pState),r(e.pState)})),Object(c.useEffect)((function(){e({type:"POPULAR_ACTION",payload:[]}),console.log(s)}),[]),Object(l.jsx)("div",{className:"pbcontainer",children:s.length>0?s.map((function(e){return console.log("image ",e.poster_path),Object(l.jsx)(d,{data:e,st:"pState"})})):""})},p=function(){var e=Object(v.c)((function(e){return e})),t=Object(c.useState)([]),a=Object(b.a)(t,2),n=a[0],s=a[1],r=Object(v.b)();return e.then((function(e){s(e.tState)})),Object(c.useEffect)((function(){r({type:"TOPRATED_ACTION",payload:[]})}),[]),Object(l.jsx)("div",{className:"trcontainer",children:n.length>0?n.map((function(e){return Object(l.jsx)(d,{data:e,st:"tState"})})):""})},h=function(){var e=Object(v.c)((function(e){return e})),t=Object(c.useState)([]),a=Object(b.a)(t,2),n=a[0],s=a[1],r=Object(v.b)();return e.then((function(e){s(e.uState)})),Object(c.useEffect)((function(){r({type:"UPCOMING_ACTION",payload:[]})}),[]),Object(l.jsx)("div",{className:"ubcontainer",children:n.length>0?n.map((function(e){return Object(l.jsx)(d,{data:e,st:"uState"})})):""})},m=(a(44),function(){var e=Object(v.c)((function(e){return e})),t=Object(c.useState)({}),a=Object(b.a)(t,2),n=a[0],s=a[1],r=Object(i.h)(),o=r.id,j=r.recv,u=Object(v.b)();return console.log(o,j),console.log("satte",e),e.then((function(e){if("pState"==j){var t=e.pState.filter((function(e){return e.id==o}));console.log("data 17 ",t),s(t[0])}else if("uState"==j){var a=e.uState.filter((function(e){return e.id==o}));s(a[0])}else{var c=e.tState.filter((function(e){return e.id==o}));s(c[0])}})),Object(c.useEffect)((function(){document.querySelectorAll(".nav-link")[0].classList.remove("active"),u("tState"==j?{type:"TOPRATED_ACTION",payload:[]}:"uState"==j?{type:"UPCOMING_ACTION",payload:[]}:{type:"POPULAR_ACTION",payload:[]})}),[]),Object(l.jsxs)("div",{className:"previewContainer",children:[Object(l.jsxs)("div",{className:"upperbox",children:[console.log("data prev",n),n?Object(l.jsx)("img",{className:"prevImg",src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path)}):""]}),Object(l.jsxs)("div",{className:"detailbox",children:[Object(l.jsx)("h1",{children:n?n.title:""}),Object(l.jsx)("p",{className:"prevPara",children:n?n.overview:""}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h5",{children:["Release Date: ",n?n.release_date:""]}),Object(l.jsx)("br",{}),Object(l.jsxs)("h6",{children:["Rating: ",n?n.vote_average:""]})]})]})}),f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",children:Object(l.jsx)(i.a,{to:"/home"})}),Object(l.jsx)(i.b,{path:"/home",children:Object(l.jsxs)("div",{className:"myContainer",children:[Object(l.jsx)("h6",{className:"tgs",children:"Popular"}),Object(l.jsx)(O,{}),Object(l.jsx)("h6",{className:"tgs",children:"TopRated"}),Object(l.jsx)(p,{}),Object(l.jsx)("h6",{className:"tgs",children:"UpComing"}),Object(l.jsx)(h,{})]})}),Object(l.jsx)(i.b,{path:"/preview/:id/:recv",children:Object(l.jsx)(m,{})})]})]})})},x=a(25),g=a(20),N=a.n(g),S=a(10),T=a(24),y={pState:[],uState:[],tState:[]},k=function(){var e=Object(T.a)(N.a.mark((function e(){var t,a,c,n,s,r,i,l=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.length>0&&void 0!==l[0]?l[0]:y,t=l.length>1?l[1]:void 0,e.t0=t.type,e.next="POPULAR_ACTION"===e.t0?5:"TOPRATED_ACTION"===e.t0?14:"UPCOMING_ACTION"===e.t0?22:30;break;case 5:return e.next=7,fetch("https://api.themoviedb.org/3/movie/popular?api_key=9024101704098faae70f606b58fbcafd");case 7:return a=e.sent,e.next=10,a.json();case 10:return c=e.sent,y.pState=[].concat(Object(S.a)(y.pState),Object(S.a)(c.results)),console.log("line 14 reducer popular",y.pState),e.abrupt("return",y);case 14:return e.next=16,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9024101704098faae70f606b58fbcafd");case 16:return n=e.sent,e.next=19,n.json();case 19:return s=e.sent,y.tState=[].concat(Object(S.a)(y.tState),Object(S.a)(s.results)),e.abrupt("return",y);case 22:return e.next=24,fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9024101704098faae70f606b58fbcafd");case 24:return r=e.sent,e.next=27,r.json();case 27:return i=e.sent,y.uState=[].concat(Object(S.a)(y.uState),Object(S.a)(i.results)),e.abrupt("return",y);case 30:return e.abrupt("return",y);case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=Object(x.a)(k);s.a.render(Object(l.jsx)(v.a,{store:A,children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cc8aaef2.chunk.js.map