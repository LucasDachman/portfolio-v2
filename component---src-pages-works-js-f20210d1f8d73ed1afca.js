(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);a(176);var i=a(178),r=a(0),s=a.n(r),n=a(149),o=a(153),l=a(155),c=a(4),d=a.n(c),u=a(157),f=a.n(u),p=function(e){var t=e.title,a=e.path,i=e.brief,r=e.hero;return s.a.createElement(n.a,{to:a,className:"work-preview"},s.a.createElement(f.a,{fixed:r,alt:t}),s.a.createElement("p",null,i))};p.propTypes={img:d.a.string,text:d.a.string};var h=p,g="1241547801";t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{title:"Works"}),s.a.createElement(l.a,{current:"works"}),s.a.createElement(n.b,{query:g,render:function(e){return s.a.createElement("main",{className:"works-main"},e.allMarkdownRemark.edges.map(function(e){var t=e.node;return s.a.createElement(h,{title:t.frontmatter.title,path:t.frontmatter.path,brief:t.frontmatter.brief,hero:t.frontmatter.media.hero.childImageSharp.fixed,key:t.frontmatter.path})}))},data:i}))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(150);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},150:function(e,t,a){var i;e.exports=(i=a(151))&&i.default||i},151:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){e.exports=a.p+"static/lucas-dachman-resume-2019-d1a5b723c2825470464488c135d35ffa.pdf"},153:function(e,t,a){"use strict";var i=a(154),r=a(0),s=a.n(r),n=a(4),o=a.n(n),l=a(156),c=a.n(l),d=a(149);function u(e){var t=e.description,a=e.lang,r=e.meta,n=e.keywords,o=e.title;return s.a.createElement(d.b,{query:f,render:function(e){var i=t||e.site.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Dachman Portfolio",description:"Lucas Dachman Portfolio",author:"Lucas Dachman"}}}}},155:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(149),n=a(152),o=a.n(n);t.a=function(e){var t=e.current,a="works"===t?"current":"",i="contact"===t?"current":"";return r.a.createElement("nav",{className:"nav-header"},r.a.createElement(s.a,{to:"/"},"Lucas Dachman"),r.a.createElement(s.a,{to:"/works/",className:a},"Works"),r.a.createElement("a",{href:o.a},"Resume"),r.a.createElement(s.a,{to:"/contact/",className:i},"Contact"))}},157:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(35)),o=i(a(75)),l=i(a(76)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+o+l+a+r+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:n,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});A.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,E=e.Tag,y=e.itemProp,v="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),C={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var I=h;return c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),v&&c.default.createElement(E,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),I.base64&&c.default.createElement(A,(0,l.default)({src:I.base64},C)),I.tracedSVG&&c.default.createElement(A,(0,l.default)({src:I.tracedSVG},C)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(A,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},I))}}))}if(g){var k=g,U=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},s);return"inherit"===s.display&&delete U.display,c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},v&&c.default.createElement(E,{title:t,style:{backgroundColor:v,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),k.base64&&c.default.createElement(A,(0,l.default)({src:k.base64},C)),k.tracedSVG&&c.default.createElement(A,(0,l.default)({src:k.tracedSVG},C)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(A,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var v=b;t.default=v},176:function(e,t,a){"use strict";a(177)("fixed",function(e){return function(){return e(this,"tt","","")}})},177:function(e,t,a){var i=a(11),r=a(18),s=a(19),n=/"/g,o=function(e,t,a,i){var r=String(s(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},178:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{html:"<p>This device uses your foot's position on an XY plane to control music. The controller can communicate with any MIDI compatible music software. It is worn around the ankle so that a musician's hands can be free.</p>\n<p>It uses ultrasonic sensors to detect distance from the ankle in two directions. Ultrasonic sensors use the echo time from high frequency sound waves — basically, this device is quietly screaming all the time.</p>\n<h3>Tools</h3>\n<ul>\n<li>Arduino Pro Micro</li>\n<li>Ultrasonic Sensors</li>\n<li>3D Printing</li>\n<li>C++</li>\n<li>MIDI</li>\n</ul>\n<div class='detail-buttons'>\n    <a href='https://vimeo.com/306710929' class='button'>Video</a>\n    <a href='https://github.com/LucasDachman/Wearable-Midi' class='button'>Code<a>\n<div>",frontmatter:{title:"Wearable Midi Controller",path:"/wearable-midi",brief:"A wearable controller compatible with any music software",media:{hero:{childImageSharp:{fixed:{src:"/portfolio-v2/static/3f0756a695f6bcda087b0af365d64534/d57b0/final-top.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEz0lEQVQ4ywHEBDv7AHxACoJGEIhMFY5MGa1QF6dnK7d1Pbx+R8mLUt6fZvS1fOyxe+GkbdufZ8aNXLyFVb+HVr2EVLZ7TK9yQQCRTxCXVBSYVxmbVh21VBm0by/CfjzKiEngnmHJk2OEZkhcRjBdQyx5Vje/h1XWl1/RlmDRlmK/hlOvc0MAnVgXoFoZr2cgr2QhtlUXwXgw1Ik9xoRFf1k1IhkOBQMACgYCDAkEDQkEKh4RjGRA8biC8LqG0JRftXhGAKVeGZxZG4FLGbJnI8RbGKxrK3RNJzIiEw8KBSMVCEAqFUMrGCkaDRUPCSseEcSPX/jLmfjKmNKWYbJ4RwCiWxaJShNOLBCDRxmJQBMrHxEUDgkQDAc/JhCZZTi3gVO6hliKYj8iFQofFg2/iVrgrXrVonO7gVGtcUIAjk0SklATk1EXh0sZIxYLIBYMFxEJNB8NsHE51pVWxYtXwYlYsn1QQCkUIRcNs35QwIdVqXRJoGtCk143AJJQEZJQE5pYGJ1SFz4cCRwVDCMWCpVcK9CKRs6LS7p/S7d9TbB4STojEFA2H8OGUq52SKRsQZVgOoFSLQCGSA2JShCLTxSoURZhKwwoHA4aEgqPXCzMhkK+f0W2e0e2ekmVYzoxIRKVZT2+f0yia0CaZDyWYDh9TioAeT8Mf0MOik8VqUoPkls0wqZ/tp15y6yC6cGN5b+P5sKT6MWW376S2b2S8tGiu4tfll00klw2h1MshlEpAHtAC35CDYJKFJ5ACZ5pP/rhsf/pt//ltP/jtP3hsv3hsv7hsf7isv7hsP/js8OedotULYhULX9NJoBMIwCGRwyLSg6GShCcPgeXZDrx1qf/4bH836/83q/63K363K3626z42qv116j837C8mXGDSx6JUyiGTyOCSxwAfEALg0UMgUYQnzYEjlw379Ol/d6v+tyt+tyt+tyt+dus9tmq9Neo8dOl+t6ytodYhkUOj1MfjlAbgUgWAGczCWo2Cnk7DsM/A5JYMenPo/3er/nbrPrcrPjbq/XYqfPVp/LTpvDQpPbZrsedcJdSEZ9bGp5bG5ZUFwBWKAlUKQttMQzoSQPCYzHnzKD83a732ar12Kjz1Kfy1Kfy06bx0aXuz6Tz1arDoHeJSQ2XUxKSUhSYVRYAajQIYjEKYy0KuTsDpU8l6Myf9Neo8tSm8dOm8dKm8dKm8NGm79Cl7c2i9titsYlfZS8CdD0MbjkMbzoNAIJDCYJECnQ7C00iBVg4HvjarP/gsfnarPTUqOzMounKn+bHneLDmN+/leTEm66EXFgnA18vDGMxC2UyCwB/QgqCRQuHSAxtNgdsPxuPcFGCZ0tzXENwWUCVeFiSdlZVQCx7X0OTclBsQSBcLxFZKAdYKAdXKAhQJQgAh0cLiUgLhEUKf0IJazQHSR0APRkAOxcAMBQBSCkRVTATORkDUS0Rbz4VbDUJYi8GWCkHVygGWCkITyUHAGkyBmYyCGw2CmczCF8uCW02C2w3C2w3DGs3DGs3C2s2DGs3DnA6DIVGDIFEDHo/CXM5CGgzBmIwB10sCABNIgZMIwdUJwhPJAdNIwZaKgdoMgVuNgZuNgZxOQdvNwhoMwlpNQp5Pgp6Pwl1OwhxOAZzOQV1Ogd2Owexy/n7Hfe/8wAAAABJRU5ErkJggg==",width:300,height:300,srcSet:"/portfolio-v2/static/3f0756a695f6bcda087b0af365d64534/d57b0/final-top.png 1x,\n/portfolio-v2/static/3f0756a695f6bcda087b0af365d64534/8749d/final-top.png 1.5x,\n/portfolio-v2/static/3f0756a695f6bcda087b0af365d64534/6df57/final-top.png 2x"}}}}}}},{node:{html:"<p>My interactive music floor uses the idea of a musical step sequencer to put the task of drum beat creation in the hands (or feet) of any listener – musician or not. The instrument uses the position of users on the floor to create live arrangements of drums or samples.</p>\n<h3>Tools</h3>\n<ul>\n<li>Arduino Pro Micro</li>\n<li>MIDI</li>\n<li>C++ / <a href=\"https://juce.com/\">JUCE Library</a></li>\n<li>JavaScript / HTML / CSS</li>\n<li><a href=\"https://reactjs.org/\">React.js</a></li>\n<li><a href=\"https://tonejs.github.io/\">Tone.js Library</a></li>\n</ul>\n<div class='detail-buttons'>\n    <a href='https://youtu.be/WRBsER6CLXo' class='button'>Video</a>\n    <a href='https://github.com/LucasDachman/Sequencer' class='button'>Code<a>\n<div>",frontmatter:{title:"Foot Step Sequencer",path:"/foot-step-sequencer",brief:"The Foot Step Sequencer:\nAn Interactive Music Floor",media:{hero:{childImageSharp:{fixed:{src:"/portfolio-v2/static/ec34e931e8d605f5939bdecb543058c8/d57b0/fss-interaction-cropped.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEaElEQVQ4yz1TW0yaZxj+fv7zAX4QFAoVFLCoKMJvQUREDmqhgloV1HnEeWY6D1XRttq5OlMPrZauqU2Ni9Vtmc2yLFm8aebSzKvNpDtkV+uSJbvp3ZIlu1u2j27Zmzf/xffneZ73ed7vAzZ3N624IC7wbT//JstmB0CEERSGkxhGUjSl0+mCPudkvGE63ugpLczOKVafL6iwuzhOWm4xgra6VgBIis98dPaDub4JAECzLGRQq1S1laVVZcWzA03VbptOo5wfahnuiCAijOUkHCdGUBQErCUAYCTLO3qG1YIdAaiUF+MkqZSrMqSZOMk0Byv85cV+p+XmWNu1kZiYY0QojhMknA4QNE+QHEUwIqMVtzgIgkVxBiNoWBhOsBwb9AjNl8rfiHi8zqL1ZJ9WnQUAwrE8/AuSFx28VI1C9b2n6NExQfI4JcZIBhIjIlwm5f3O4s5GL6TIlEsHYpc6G3zwEEEglgTf11frlXoE0MjqA3D6nUhmwCkJBOMEDQCq1xn6W0Mhjy0WLM/Ta2lGXGjUNla7shQKgIjAsd/t0RoBklE5u7H16o/L3W/D/HCSTYMRkUad++n+9sONue5obY5OA+lQjFQqMmFiHMeAZVtpc54ZANlG6uDPv/5e+eCUlltICoIpGAtAqbISy847iWcHmzaLKb0LhuHEUiBC5TIOXM42ujW5OC7ONnsnt57OrR6O948WmAwwFegZwymFLNOo1Q611BSZ9PCQpikpLyNpjmNpUCA7V5yhYiiJRCKPeOy9da6hFl/ILVgvaHUaFYyNpPkMmVKlkEkkYhTDWYalaY5lOYWMB3KGVzM8S7Fw1UKBIeoTWvzWwXDZTNQz0VIZCwj5ubrKUmtbqBLODBNmGBYyUq8LZMqkeWqly6xvdBUFS01dAWG+1TtS57AZNaN1ZVejnhq7+dbUwHsT3TKpBEExRISi0A2BwwIGrbor7I75rIn68ne7Ard7a+8NR7aHIjNRb7tfgGrZGtXJ/vpcb/31nlC8wWvSa3GCgIGgGAEIghIKDVNdwcGwczrmTSUaD2fbP1vseb4+fLI2bDOeb63z7i4nIItXyG8LOOJh92g0UJinJeDYDMPQNOOyFd4caUq2V6+8GT5a7H22OnB6d/TFzvRPu7Of35m6Pt57by5+ezC8l+z4ZKlvKR6qcZolEg6QafM0RTE+Z8nadMetvrrNkYbjtcTZg4mXB9de7i989XD27IvHv5/svDpa+np7bHM4UiXkQQR0DsEMRTM0w4olvMdRfDfZszXWnBprPklN/7ib/PWjpV8Ob/z28Y1v749/uNA1Ga0qMqpxksCIdEPPNEHCJ8TC1UEKt73o/cWBRzMd999q+TJ19cXjuZ+fXD/ZTKQSTW0B2zmlHCNIgiT/e5JpZer/pqEJp5C/OR/fW+i5M1T/ZLFvK3El2R7wCiaxmIWaJJVGwsDxNJhiqdcN9eFtoqm0C/dF88pU53J/5EqFOVpdVmLKgdcLjgepIRou6N/vP8M/+rTqnw8WAAAAAElFTkSuQmCC",width:300,height:300,srcSet:"/portfolio-v2/static/ec34e931e8d605f5939bdecb543058c8/d57b0/fss-interaction-cropped.png 1x,\n/portfolio-v2/static/ec34e931e8d605f5939bdecb543058c8/8749d/fss-interaction-cropped.png 1.5x,\n/portfolio-v2/static/ec34e931e8d605f5939bdecb543058c8/6df57/fss-interaction-cropped.png 2x,\n/portfolio-v2/static/ec34e931e8d605f5939bdecb543058c8/56cd5/fss-interaction-cropped.png 3x"}}}}}}},{node:{html:"<p>Cirkit is a productivity app aimed at users learning about basic circuits. Functionalities include calculating resistor combinations (series/parallel) and calculating resistors needed for LED’s. Custom icons were created in Adobe XD.</p>\n<h3>Tools</h3>\n<ul>\n<li>XCode</li>\n<li>Swift</li>\n<li>Adobe XD</li>\n</ul>\n<div class='detail-buttons'>\n    <a href='https://github.com/LucasDachman/Lucas-Dachman-Fall-2018-Mobile-Apps/tree/master/MAD-1/project-1/cirkit' class='button'>Code<a>\n<div>",frontmatter:{title:"Cirkit",path:"/cirkit",brief:"An iOS app that computes common circuit calculations",media:{hero:{childImageSharp:{fixed:{src:"/portfolio-v2/static/ee0108d5e85c1b9473581f2623357d28/d57b0/cirkit-logo.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVQ4y6VU2WoCUQy9P+nn+AH64oMLKuqLiIgouOAKCu67ooiKouKGdRcR3NtDU27HcVoKzcOYe81JTk4yw97/YYx7j8dD5PwVTIDj8Xi5XOgIu9/vdP94ticwnT0ej1qtVqlUnU6nVCotl0tcdrvdWCwG53A4ZLPZ1Wq13W45hCE9fhqNhlKppGiXy1Wr1ZrNZigUcjqdSDocDvP5PGIUCoVWqxWDvV5vIBCAQ7StVqvFYjEajUghl8ttNlu/3zebzXa7HbkQQKgvMCjpdDo4YFWtVhFkMpkymcx0OpXJZA6HY7/fI53f78flN5gLptfrDQYDyCcSiWAwCDw6R8FoNBoOh91ut8/nA5JoS4xqMBgsFgsiD7vdbqgAB08IRh1tNhsq+1SZT4X/x6fCb35cElEKUZzkCjE+epDEOZ1Oj8djOJg2xgPndDphZqICZOL1hE5QHk48HodIcCaTCYaEnl/5Mwjw9mnr9brdbgODDUE1lM3lcpjcaDSC+NAS0efzGTe73Q5PpGMIRSmEFovFZDKJrSyXy8jSarVms1m9Xq9UKvP5vFAoEB0csQgUw15V6fV6IEy7HYlEkBH3YIFEAAg1Y0IBqCXU0Wg09Df2PJVKwQE1yEFtSwjG7Xq9on9Kj62k1wjSCN8niTlL2i/fBiYZLVwy4fdAFPkBpodPd3UqmwsAAAAASUVORK5CYII=",width:300,height:300,srcSet:"/portfolio-v2/static/ee0108d5e85c1b9473581f2623357d28/d57b0/cirkit-logo.png 1x,\n/portfolio-v2/static/ee0108d5e85c1b9473581f2623357d28/8749d/cirkit-logo.png 1.5x"}}}}}}},{node:{html:"<p>A productivity app aimed at electrical engineers for determining information on resistors. The app has tabs for each type of resistor (4/5/6 band). Any details about a resistor can be determined by inputting the colors of the bands on a resistor. With this app, one can avoid memorizing complicated charts.</p>\n<h3>Tools</h3>\n<ul>\n<li>Android Studio</li>\n<li>Java</li>\n<li>Adobe XD</li>\n</ul>\n<div class='detail-buttons'>\n    <a href='https://vimeo.com/327789118' class='button'>Video</a>\n    <a href='https://github.com/LucasDachman/Lucas-Dachman-Fall-2018-Mobile-Apps/tree/master/MAD-1/project-2' class='button'>Code<a>\n<div>",frontmatter:{title:"Resistor Calculator",path:"/resistor-calculator",brief:"An Android app that calculates resistor values according to color codes",media:{hero:{childImageSharp:{fixed:{src:"/portfolio-v2/static/58711b18c03de369beaa13d4d72e7683/d57b0/resistor-calc.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADaUlEQVQ4y5WUbU9TZxjHz5fY6xmX7YWJ8YVRBNHoZhYS8SEGqRIIGt0mI3ObQkxUNtKZKCpoVEAzN8eyN/saLKA8NbBCaUNa6QNtqZxz2vPQ056e9u913exMRNTY5JfrPv/e9/V47iNta23AlxfaUP1NCw5fOo9DxKeeenz2ATR2daKuox21ba2Qan/6AXu7L6Cm63th93s7xXrX1e8E1VfPo4YhbSP4/z0//4h93g5hpbq+bpwdGsBXfw7izFA/GgZ6cOaPfqGd++sRTj+5j/09l1HlvYiaa52ofo0Owa5fLgp4LTU+uIHmR7dx6vFdnP79Hq170TR4S2gttGZ78uEtnCStsf8Gjt+/juMPVvH09+DE4E2Bq0n5QgG6aSCeXEIgFMRSOoVVzYRBek7TEE/EsRhdRDabhWVZMPMm8lYesiwjGouK/01zVZNKpgWbSDyPITQbQDqeRLlgwy7acABYto1EKkUO4xTEQrkC2E4F5TKgZnNYWkoimUoL3Sk5kIzkMpRIBFosBiORQI6sFllEPpZAQV5BkXC0HAXRYesyChpphKUp0LMyTE0VZOVlWJS5FPY/hffwZniPEPUfo7tpK3zfNkI5UIN0XS3Sn1dh2XMQ6mMP1N6dUO7ugXlvN4IDzeg6yGc20flPcOWLj7Dg+wfSon8Mvc3biR3oa9qO21/vhb/zLPQTRyC3HIPsOQS1vRXG320wfq2H/tsxFJ8cRXioHT3NO9HXsgN3WqtwvWELIv8+g2RTj0qO8z8ONSdPjc+srEBWs1ByOShkuV+yoq5Cz3mrIPa+OlsG+5KKxSLWUqZNmRcvMDw8jKmpKfh8PoHf78fo6CjGx8cFPGGHHK0//4ZDplQqgX+VSgUVCsCWAzFC58xoj73BWVGyCwscVVEUzM/PY3Z2FnNzc5iZmUE4HEaE3obJyUmhJ+iNcM8wro83HHJkfkkDgYAok2GHoVBIMDExIVoRjUbf79DdwNYtsfxfyZw545YvSl6z/60Zsi3Q1eNrptG1MwwDqqoKy885mjrj7n1vyWz5vi4sLIjyuFyeLvduZGRETJinzgE4y3dmuL6XrnPOmJ9dWFub4TtLdp3pui5KTdGHgUsMBoMCnjQH2MjZWx1y88WniSaZyWSwQrdmbGxMTHx6elpoPJj1/WNeAgUfQ1AOp7LCAAAAAElFTkSuQmCC",width:300,height:300,srcSet:"/portfolio-v2/static/58711b18c03de369beaa13d4d72e7683/d57b0/resistor-calc.png 1x,\n/portfolio-v2/static/58711b18c03de369beaa13d4d72e7683/8749d/resistor-calc.png 1.5x,\n/portfolio-v2/static/58711b18c03de369beaa13d4d72e7683/6df57/resistor-calc.png 2x"}}}}}}},{node:{html:"<p>This kinetic typographic sculpture explores the relationship between language, form and technology. The reflexive content of the letterforms is a manifestation of how technology and art have fused as a result of maker culture. The movement within the work reminds us that reading is a durational and embodied experience that expands beyond the typically static nature of words.</p>\n<div class='detail-buttons'>\n    <a href='https://imgur.com/zcF9GTI' class='button' style='margin: auto;'>Video</a>\n<div>",frontmatter:{title:"Wake / Make",path:"/wake-make",brief:"A moving typographic sculpture",media:{hero:{childImageSharp:{fixed:{src:"/portfolio-v2/static/4d262a38aa6431fe886db0d16d23b635/d57b0/wakemake.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADkklEQVQ4yzVSbW/aSBD2f+6Hk6pKp/vYU6+6axUlaZvQYBsbG2xejDF2MBjH4Nf1+h0QGEOStlK/3E+4MbmuZkczs88zszO7RPOuRZItimRpqs3QfJvlubbAsUKtOYHvwOryXC1cu8u0eBBAAh6IBGyKZGpmC2gcX8OFblcUBFEUer1eH3ZXECDU7Qg8J0JSQFJk+0xu0jWTASYvAE8UAT0c9KVhvSRpNII9lAb9Yb/fF4Qez4tttsvQHJQkSJJu0SzH8ZB52BNHg6EyGk1keTIea4qiTmApYMuyPJJHg8EAbsRzL8VZgqJolmGEDi+JoiINNVnW1clMU+f32kKfGrPZTJ/p0+lU0zRVHY/Hg4EETbFMh6Y4grprsHQTWpF6vclI0lUVOOZMtxZza2EsQUzTXBiQZa7XGUayDJ2xLEc2W8Ttpyv67rbLsZBzOlGMe80y5pZpONaDt7Lc1dKxV/Zq+WCaD8YcrqEoiiiKDNP++pUkLj/+0/hy3W0ziiQB2TIMKGgvLduyfMcOHNt3Hd/zAh+8lWkYUBzIFEk3bpvE+z/ffnj/1831Jd+i4X1VWXZsB2QxN9xaz0MUQknH8ab3miINhv0eRVKfPzeuP90Sf7x58/e7d+Z8bhrmWBp69irP8jROoiiOMI5CXORrqFxkBQ4C114CwND1q6svFxfXxG+vXvU7nU2Wa+rsXtWqw2G73e13+8PhWII6nMryUJYQPh2rU5oWeVYc97sOL3z4cEn8/vp1FPjI83TdTOIsCmMcJghF0KzjINNcpunaNFcYpzhKfD8qsrzcbpbW8uPFFXF3c1PtdhGOk6TYbg8AUie6ri8myhRmB+OZzeDtYM6LhWGGKD6Uh22RF1nWaDQJd2ntNuvNZnc8Pv/8+W9VPa3X++1mv9mU5+BTkuRpktu2u9/vwX18+rHO822RjSSZ2GbpZr0uy9Pp8Ud1/Haonk6P38EGfTx9q47PYB9PYH/flye4WlU953kB84QpEnkMk4U7Z2maxUkKJo5ijOOo1hiHuB77r0gcp9BgEAT47BNJiBOEYxQmIfpfEIpREJ9t0NGLgRAOUIgCFNSCYaSBD+Twl2DQKcZQOq2Hi7OzEZ8jcBTXSVGEAgyv43vY9whIEAW19SJnNwANiBC074cQr4N+6Hmh54auixyn/rOuQyC3/sDIdQII1Z959eJ6br0Czw1cB9AgAEAQAZht+7YDn/c/Ba+J+13xuasAAAAASUVORK5CYII=",width:300,height:300,srcSet:"/portfolio-v2/static/4d262a38aa6431fe886db0d16d23b635/d57b0/wakemake.png 1x,\n/portfolio-v2/static/4d262a38aa6431fe886db0d16d23b635/8749d/wakemake.png 1.5x"}}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-works-js-f20210d1f8d73ed1afca.js.map