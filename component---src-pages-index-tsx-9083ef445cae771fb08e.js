(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3038:function(e,t,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var u=Object.keys(r),s=0;s<u.length;s++){var c=u[s];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],u=e[i];(o?-1!==t.indexOf(i):t(i,u,e))&&(r[i]=u)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=r(8936),c=r(7091),l=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function y(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function m(e,t){return t.decode?c(e):e}function g(e){return Array.isArray(e)?e.sort():"object"==typeof e?g(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&m(r,e).includes(e.arrayFormatSeparator);r=a?m(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,u=i(e.split("&"));try{for(u.s();!(a=u.n()).done;){var s=a.value;if(""!==s){var c=l(t.decode?s.replace(/\+/g," "):s,"="),f=o(c,2),p=f[0],y=f[1];y=void 0===y?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?y:m(y,t),r(m(p,t),y,n)}}}catch(A){u.e(A)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var j=0,k=Object.keys(w);j<k.length;j++){var S=k[j];w[S]=b(w[S],t)}else n[h]=b(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=g(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=h,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[y(t,e),"[",o,"]"].join("")]:[[y(t,e),"[",y(o,e),"]=",y(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[y(t,e),"[]"].join("")]:[[y(t,e),"[]=",y(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[y(r,e),t,y(o,e)].join("")]:[[n,y(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[y(t,e)]:[[y(t,e),"=",y(n,e)].join("")])}}}}(t),o={},i=0,u=Object.keys(e);i<u.length;i++){var s=u[i];r(s)||(o[s]=e[s])}var c=Object.keys(o);return!1!==t.sort&&c.sort(t.sort),c.map((function(r){var o=e[r];return void 0===o?"":null===o?y(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?y(r,t)+"[]":o.reduce(n(r),[]).join("&"):y(r,t)+"="+y(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=x(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),u=Object.assign(i,e.query),s=t.stringify(u,r);s&&(s="?".concat(s));var c=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c="#".concat(r[p]?y(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(s).concat(c)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=t.parseUrl(e,o),i=a.url,u=a.query,s=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:s},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},4052:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(7294),o=r(5442),a=r(7462),i=r(6771),u=r(5444),s=r(6125),c=r(3431);var l=(0,i.Z)(u.rU,{target:"eiuj7et7"})({name:"1cndcdn",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s all;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);transform:translateY(-10px);}"}),f=(0,i.Z)(s.G,{target:"eiuj7et6"})({name:"1l6wj00",styles:"width:100%;height:230px;border-radius:10px 10px 0 0"}),p=(0,i.Z)("div",{target:"eiuj7et5"})({name:"1goh00d",styles:"display:flex;flex-direction:column;padding:15px"}),d=(0,i.Z)("div",{target:"eiuj7et4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),y=(0,i.Z)("div",{target:"eiuj7et3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),m=(0,i.Z)("div",{target:"eiuj7et2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),g=(0,i.Z)("div",{target:"eiuj7et1"})({name:"e50lw6",styles:"margin:2.5px 5px;padding:4px 10px;border-radius:150px;background:rgba(0,0,0,0.6);font-size:14px;font-weight:700;color:white"}),x=(0,i.Z)("div",{target:"eiuj7et0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),v=function(e){var t=e.title,r=e.date,n=e.categories,o=e.summary,a=e.thumbnail.childImageSharp.gatsbyImageData,i=e.link;return(0,c.tZ)(l,{to:i},(0,c.tZ)(f,{image:a,alt:"Post Item Image"}),(0,c.tZ)(p,null,(0,c.tZ)(d,null,t),(0,c.tZ)(y,null,r),(0,c.tZ)(m,null,n.map((function(e){return(0,c.tZ)(g,{key:e},e)}))),(0,c.tZ)(x,null,o)))},b=function(e,t){var r=(0,n.useRef)(null),o=(0,n.useState)(1),a=o[0],i=o[1],u=(0,n.useRef)(null),s=(0,n.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,n.useEffect)((function(){u.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(i((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((function(){return i(1)}),[e]),(0,n.useEffect)((function(){6*a>=s.length||null===r.current||0===r.current.children.length||null===u.current||u.current.observe(r.current.children[r.current.children.length-1])}),[a,e]),{containerRef:r,postList:s.slice(0,6*a)}};var h=(0,i.Z)("div",{target:"ex6q71u0"})({name:"ripuxr",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:600px;position:relative;margin:0 auto;padding:130px 0 100px;top:-33px;@media (max-width: 1140px){width:100%;padding:50px 20px;top:50px;}@media (max-width: 748px){grid-template-columns:1fr;}"}),w=function(e){var t=e.posts,r=e.selectedCategory,n=b(r,t),o=n.containerRef,i=n.postList;return(0,c.tZ)(h,{ref:o},i.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,o=t.frontmatter;return(0,c.tZ)(v,(0,a.Z)({},o,{link:n,key:r}))})))},j=r(2203),k=r(6799),S=function(e){var t=e.location.search,r=e.data,a=r.site.siteMetadata,i=a.title,u=a.description,s=a.siteUrl,l=r.allMarkdownRemark.edges,f=r.file.publicURL,p=j.parse(t),d="string"==typeof p.category&&p.category?p.category:"All",y=(0,n.useMemo)((function(){return l.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,c.tZ)(k.Z,{title:i,description:u,url:s,image:f,selectedCategory:d,categoryList:y,mode:""},(0,c.tZ)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},(0,c.tZ)("div",{style:{width:"768px",display:"grid",justifyContent:"end"}},(0,c.tZ)(o.Z,{selectedCategory:d,categoryList:y,mode:""}),(0,c.tZ)(w,{selectedCategory:d,posts:l}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9083ef445cae771fb08e.js.map