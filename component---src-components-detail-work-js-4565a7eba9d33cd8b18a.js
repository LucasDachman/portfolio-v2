(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(e,a,t){"use strict";t.r(a),t.d(a,"detailQuery",function(){return d});var n=t(0),r=t.n(n),c=t(157),u=t.n(c),o=t(155),i=t(159),l=t.n(i);a.default=function(e){var a=e.data,t=a.markdownRemark.html,n=a.markdownRemark.frontmatter.title,c=a.markdownRemark.frontmatter.media.images.map(function(e){return e.childImageSharp.fluid});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement("main",{className:"detail-work-main"},r.a.createElement(l.a,{items:c,renderItem:s,renderThumbInner:m,showThumbnails:c.length>1}),r.a.createElement("section",{className:"copy"},r.a.createElement("h1",null,n),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))))};var s=function(e){return r.a.createElement(u.a,{fluid:e})},m=function(e){return r.a.createElement(u.a,{fluid:e})},d="3302938939"},149:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var n=t(0),r=t.n(n),c=t(4),u=t.n(c),o=t(33),i=t.n(o);t.d(a,"a",function(){return i.a});t(150);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},150:function(e,a,t){var n;e.exports=(n=t(151))&&n.default||n},151:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),c=t(4),u=t.n(c),o=t(55),i=t(2),l=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},a.default=l},152:function(e,a,t){e.exports=t.p+"static/lucas-dachman-resume-2019-d1a5b723c2825470464488c135d35ffa.pdf"},155:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(149),u=t(152),o=t.n(u);a.a=function(e){var a=e.current,t="works"===a?"current":"",n="contact"===a?"current":"";return r.a.createElement("nav",{className:"nav-header"},r.a.createElement(c.a,{to:"/"},"Lucas Dachman"),r.a.createElement(c.a,{to:"/works/",className:t},"Works"),r.a.createElement("a",{href:o.a},"Resume"),r.a.createElement(c.a,{to:"/contact/",className:n},"Contact"))}}}]);
//# sourceMappingURL=component---src-components-detail-work-js-4565a7eba9d33cd8b18a.js.map