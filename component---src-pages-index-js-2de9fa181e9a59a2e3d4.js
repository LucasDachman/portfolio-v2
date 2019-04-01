(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(M,L,e){"use strict";e.r(L);var t=e(0),u=e.n(t),n=e(145),a=e(148),i=e(169),s=e.n(i),c=e(170),j=e.n(c),w=e(171),g=e.n(w),N=e(172),C=e.n(N);L.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("main",{className:"landing-main"},u.a.createElement(a.a,{title:"Home",keywords:["software developer","programmer","lucas","dachman"]}),u.a.createElement("header",{className:"landing-header"},u.a.createElement("h1",null,"Lucas"),u.a.createElement("h1",null,"Dachman"),u.a.createElement("h2",null,"Software Developer")),u.a.createElement("div",{className:"landing-icons"},u.a.createElement("img",{src:s.a,alt:"shell",className:"landing-icon"}),u.a.createElement("img",{src:j.a,alt:"web developer",className:"landing-icon"}),u.a.createElement("img",{src:C.a,alt:"mobile phone",className:"landing-icon"}),u.a.createElement("img",{src:g.a,alt:"sound wave",className:"landing-icon"})),u.a.createElement("nav",null,u.a.createElement(n.Link,{to:"/works/",className:"button"},"Works"),u.a.createElement(n.Link,{to:"/page-2/",className:"button"},"Resume"),u.a.createElement("a",{href:"https://github.com/lucasdachman",className:"button"},"Github"))))}},145:function(M,L,e){"use strict";e.r(L),e.d(L,"graphql",function(){return C}),e.d(L,"StaticQueryContext",function(){return g}),e.d(L,"StaticQuery",function(){return N});var t=e(0),u=e.n(t),n=e(4),a=e.n(n),i=e(144),s=e.n(i);e.d(L,"Link",function(){return s.a}),e.d(L,"withPrefix",function(){return i.withPrefix}),e.d(L,"navigate",function(){return i.navigate}),e.d(L,"push",function(){return i.push}),e.d(L,"replace",function(){return i.replace}),e.d(L,"navigateTo",function(){return i.navigateTo});var c=e(146),j=e.n(c);e.d(L,"PageRenderer",function(){return j.a});var w=e(32);e.d(L,"parsePath",function(){return w.a});var g=u.a.createContext({}),N=function(M){return u.a.createElement(g.Consumer,null,function(L){return M.data||L[M.query]&&L[M.query].data?(M.render||M.children)(M.data?M.data.data:L[M.query].data):u.a.createElement("div",null,"Loading (StaticQuery)")})};function C(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}N.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},146:function(M,L,e){var t;M.exports=(t=e(147))&&t.default||t},147:function(M,L,e){"use strict";e.r(L);e(33);var t=e(0),u=e.n(t),n=e(4),a=e.n(n),i=e(52),s=e(2),c=function(M){var L=M.location,e=s.default.getResourcesForPathnameSync(L.pathname);return u.a.createElement(i.a,Object.assign({location:L,pageResources:e},e.json))};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},L.default=c},148:function(M,L,e){"use strict";var t=e(149),u=e(0),n=e.n(u),a=e(4),i=e.n(a),s=e(152),c=e.n(s),j=e(145);function w(M){var L=M.description,e=M.lang,u=M.meta,a=M.keywords,i=M.title;return n.a.createElement(j.StaticQuery,{query:g,render:function(M){var t=L||M.site.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:e},title:i,titleTemplate:"%s | "+M.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(u)})},data:t})}w.defaultProps={lang:"en",meta:[],keywords:[]},w.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},L.a=w;var g="1025518380"},149:function(M){M.exports={data:{site:{siteMetadata:{title:"Lucas Dachman Portfolio",description:"Lucas Dachman Portfolio",author:"Lucas Dachman"}}}}},169:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTAwLjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDAuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzODM4Mzg7fQo8L3N0eWxlPgo8dGl0bGU+MDM8L3RpdGxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Ni42LDguOUgxMy40Yy0yLjUsMC00LjUsMS45LTQuNSw0LjVsMCwwdjczLjFjMCwyLjUsMS45LDQuNSw0LjUsNC41aDczLjFjMi41LDAsNC41LTEuOSw0LjUtNC41VjEzLjQKCQlDOTEsMTAuOSw4OS4xLDguOSw4Ni42LDguOUw4Ni42LDguOXogTTI3LjcsNjUuOEwzOS40LDU0TDI3LjcsNDIuMmw2LjMtNi4zbDE0LjgsMTQuOWMxLjgsMS44LDEuOCw0LjYsMCw2LjNsMCwwTDMzLjksNzIKCQlMMjcuNyw2NS44eiBNNjYuMSw3Mi4xSDQ4LjV2LTguOWgxNy40TDY2LjEsNzIuMXoiLz4KPC9nPgo8L3N2Zz4K"},170:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OCA0OC4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OCA0OC4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM4MzgzODt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ2LjksNS42SDEuMUMwLjQsNS42LDAsNiwwLDYuNlYzNWMwLDAuNywwLjQsMS4xLDEuMSwxLjFIMTdsLTEuNCw0LjRINi41Yy0wLjcsMC0xLjEsMC40LTEuMSwxLjEKCQkJYzAsMC43LDAuNCwxLjEsMS4xLDEuMWg5LjhoMTUuM2g5LjhjMC43LDAsMS4xLTAuNCwxLjEtMS4xYzAtMC43LTAuNC0xLjEtMS4xLTEuMWgtOS4xTDMxLDM2LjFoMTUuOWMwLjcsMCwxLjEtMC40LDEuMS0xLjFWNi42CgkJCUM0OCw2LjEsNDcuNiw1LjYsNDYuOSw1LjZ6IE0zMC4xLDQwLjVIMTcuOWwxLjQtNC40aDkuNEwzMC4xLDQwLjV6IE0yOS41LDMzLjlIMTguNUgyLjJWMTIuMWg0LjRjMC43LDAsMS4xLTAuNCwxLjEtMS4xCgkJCVM3LjIsOS45LDYuNSw5LjlIMi4yVjcuN2g0My42djIuMkgxNi40Yy0wLjcsMC0xLjEsMC40LTEuMSwxLjFzMC40LDEuMSwxLjEsMS4xaDI5LjV2MjEuOEgyOS41eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMy4xLDExYzAtMC43LTAuNC0xLjEtMS4xLTEuMWgtMS4xYy0wLjcsMC0xLjEsMC40LTEuMSwxLjFzMC40LDEuMSwxLjEsMS4xSDEyQzEyLjcsMTIuMSwxMy4xLDExLjcsMTMuMSwxMQoJCQl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMjcuN0wxNC42LDIzbDQuNy00LjdjMC40LTAuNCwwLjQtMS4xLDAtMS41cy0xLjEtMC40LTEuNSwwbC01LjUsNS41Yy0wLjQsMC40LTAuNCwxLjEsMCwxLjVsNS41LDUuNQoJCQljMC4yLDAuMiwwLjUsMC4zLDAuOCwwLjNjMC4yLDAsMC41LTAuMSwwLjgtMC4zQzE5LjcsMjguOCwxOS43LDI4LjEsMTkuMywyNy43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC4yLDE2LjhjLTAuNC0wLjQtMS4xLTAuNC0xLjUsMHMtMC40LDEuMSwwLDEuNWw0LjcsNC43bC00LjcsNC43Yy0wLjQsMC40LTAuNCwxLjEsMCwxLjUKCQkJYzAuMiwwLjIsMC41LDAuMywwLjgsMC4zYzAuMiwwLDAuNS0wLjEsMC44LTAuM2w1LjUtNS41YzAuNC0wLjQsMC40LTEuMSwwLTEuNUwzMC4yLDE2Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3LjcsMTQuNGMtMC41LTAuMi0xLjIsMC0xLjQsMC41bC02LjUsMTUuM2MtMC4yLDAuNSwwLDEuMiwwLjUsMS40YzAuMSwwLjEsMC4zLDAuMSwwLjQsMC4xCgkJCWMwLjQsMCwwLjktMC4yLDEtMC43bDYuNS0xNS4zQzI4LjUsMTUuMywyOC4zLDE0LjYsMjcuNywxNC40eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="},171:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5NiA5NS44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NiA5NS44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM4MzgzODt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzLjMsODEuOGMtNCwwLTcuMy0zLjMtNy4zLTcuM1YyMi4yYzAtMi0xLjYtMy43LTMuNy0zLjdzLTMuNywxLjYtMy43LDMuN3YyMS40YzAsNC40LTMuNiw3LjktNy45LDcuOUg0CgkJdi0zLjdoNi44YzIuMywwLDQuMi0xLjksNC4yLTQuMlYyMi4yYzAtNCwzLjMtNy4zLDcuMy03LjNzNy4zLDMuMyw3LjMsNy4zdjUyLjJjMCwyLDEuNiwzLjcsMy43LDMuN3MzLjctMS42LDMuNy0zLjdWMzYuOQoJCWMwLTQsMy4zLTcuMyw3LjMtNy4zczcuMywzLjMsNy4zLDcuM3YxOC4zYzAsMiwxLjYsMy43LDMuNywzLjdoMC45YzIsMCwzLjctMS42LDMuNy0zLjdWMjEuM2MwLTQsMy4zLTcuMyw3LjMtNy4zCgkJYzQsMCw3LjMsMy4zLDcuMyw3LjN2NTIuMmMwLDIsMS42LDMuNywzLjcsMy43czMuNy0xLjYsMy43LTMuN1Y1My45YzAtNC40LDMuNi03LjksNy45LTcuOUg5MnYzLjdoLTIuMmMtMi4zLDAtNC4yLDEuOS00LjIsNC4yCgkJdjE5LjZjMCw0LTMuMyw3LjMtNy4zLDcuM3MtNy4zLTMuMy03LjMtNy4zVjIxLjNjMC0yLTEuNi0zLjctMy43LTMuN3MtMy43LDEuNi0zLjcsMy43djMzLjljMCw0LTMuMyw3LjMtNy4zLDcuM2gtMC45CgkJYy00LDAtNy4zLTMuMy03LjMtNy4zVjM2LjljMC0yLTEuNi0zLjctMy43LTMuN2MtMiwwLTMuNywxLjYtMy43LDMuN3YzNy42QzQwLjcsNzguNSwzNy40LDgxLjgsMzMuMyw4MS44eiIvPgo8L2c+Cjwvc3ZnPgo="},172:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5NiA5NS44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NiA5NS44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM4MzgzODt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTczLjMsM0gyMi43Yy00LjIsMC03LjYsMy40LTcuNiw3LjZ2Ni43aDY1Ljh2LTYuN0M4MC45LDYuNCw3Ny41LDMsNzMuMywzeiBNNTguMSwxMS43SDM3LjVWOWgyMC42VjExLjd6Ii8+Cgk8cmVjdCB4PSIxNS4xIiB5PSIyMCIgY2xhc3M9InN0MCIgd2lkdGg9IjY1LjgiIGhlaWdodD0iNTUuNyIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjEsODUuMmMwLDQuMiwzLjQsNy42LDcuNiw3LjZoNTAuNmM0LjIsMCw3LjYtMy40LDcuNi03LjZ2LTdIMTUuMVY4NS4yeiBNNDgsODIuMWMxLjksMCwzLjQsMS41LDMuNCwzLjQKCQljMCwxLjktMS41LDMuNC0zLjQsMy40cy0zLjQtMS41LTMuNC0zLjRDNDQuNiw4My42LDQ2LjEsODIuMSw0OCw4Mi4xeiIvPgo8L2c+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-index-js-2de9fa181e9a59a2e3d4.js.map