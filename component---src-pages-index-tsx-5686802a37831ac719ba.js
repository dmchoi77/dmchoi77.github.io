(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),s=0;s<u.length;s++){var c=u[s];t=t.replace(new RegExp(c,"g"),r[c])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=r(8936),c=r(7091),l=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function y(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function m(t,e){return e.decode?c(t):t}function g(t){return Array.isArray(t)?t.sort():"object"==typeof t?g(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&m(r,t).includes(t.arrayFormatSeparator);r=a?m(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)})):null===r?r:m(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?m(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var s=a.value;if(""!==s){var c=l(e.decode?s.replace(/\+/g," "):s,"="),f=o(c,2),p=f[0],y=f[1];y=void 0===y?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?y:m(y,e),r(m(p,e),y,n)}}}catch(A){u.e(A)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var j=0,k=Object.keys(w);j<k.length;j++){var S=k[j];w[S]=b(w[S],e)}else n[h]=b(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=g(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=h,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[y(e,t),"[",o,"]"].join("")]:[[y(e,t),"[",y(o,t),"]=",y(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[y(e,t),"[]"].join("")]:[[y(e,t),"[]=",y(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[y(e,t),":list="].join("")]:[[y(e,t),":list=",y(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[y(r,t),e,y(o,t)].join("")]:[[n,y(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[y(e,t)]:[[y(e,t),"=",y(n,t)].join("")])}}}}(e),o={},i=0,u=Object.keys(t);i<u.length;i++){var s=u[i];r(s)||(o[s]=t[s])}var c=Object.keys(o);return!1!==e.sort&&c.sort(e.sort),c.map((function(r){var o=t[r];return void 0===o?"":null===o?y(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?y(r,e)+"[]":o.reduce(n(r),[]).join("&"):y(r,e)+"="+y(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=l(t,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=x(t.url).split("?")[0]||"",a=e.extract(t.url),i=e.parse(a,{sort:!1}),u=Object.assign(i,t.query),s=e.stringify(u,r);s&&(s="?".concat(s));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(r[p]?y(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(s).concat(c)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=e.parseUrl(t,o),i=a.url,u=a.query,s=a.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:s},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},4052:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return S}});var n=r(7294),o=r(5442),a=r(7462),i=r(6771),u=r(5444),s=r(6125),c=r(3431);var l=(0,i.Z)(u.rU,{target:"eiuj7et7"})({name:"1cndcdn",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s all;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);transform:translateY(-10px);}"}),f=(0,i.Z)(s.G,{target:"eiuj7et6"})({name:"1l6wj00",styles:"width:100%;height:230px;border-radius:10px 10px 0 0"}),p=(0,i.Z)("div",{target:"eiuj7et5"})({name:"1goh00d",styles:"display:flex;flex-direction:column;padding:15px"}),d=(0,i.Z)("div",{target:"eiuj7et4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),y=(0,i.Z)("div",{target:"eiuj7et3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),m=(0,i.Z)("div",{target:"eiuj7et2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),g=(0,i.Z)("div",{target:"eiuj7et1"})({name:"e50lw6",styles:"margin:2.5px 5px;padding:4px 10px;border-radius:150px;background:rgba(0,0,0,0.6);font-size:14px;font-weight:700;color:white"}),x=(0,i.Z)("div",{target:"eiuj7et0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),v=function(t){var e=t.title,r=t.date,n=t.categories,o=t.summary,a=t.thumbnail.childImageSharp.gatsbyImageData,i=t.link;return(0,c.tZ)(l,{to:i},(0,c.tZ)(f,{image:a,alt:"Post Item Image"}),(0,c.tZ)(p,null,(0,c.tZ)(d,null,e),(0,c.tZ)(y,null,r),(0,c.tZ)(m,null,n.map((function(t){return(0,c.tZ)(g,{key:t},t)}))),(0,c.tZ)(x,null,o)))},b=function(t,e){var r=(0,n.useRef)(null),o=(0,n.useState)(1),a=o[0],i=o[1],u=(0,n.useRef)(null),s=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){u.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(i((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return i(1)}),[t]),(0,n.useEffect)((function(){6*a>=s.length||null===r.current||0===r.current.children.length||null===u.current||u.current.observe(r.current.children[r.current.children.length-1])}),[a,t]),{containerRef:r,postList:s.slice(0,6*a)}};var h=(0,i.Z)("div",{target:"ex6q71u0"})({name:"ripuxr",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:600px;position:relative;margin:0 auto;padding:130px 0 100px;top:-33px;@media (max-width: 1140px){width:100%;padding:50px 20px;top:50px;}@media (max-width: 748px){grid-template-columns:1fr;}"}),w=function(t){var e=t.posts,r=t.selectedCategory,n=b(r,e),o=n.containerRef,i=n.postList;return(0,c.tZ)(h,{ref:o},i.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,o=e.frontmatter;return(0,c.tZ)(v,(0,a.Z)({},o,{link:n,key:r}))})))},j=r(2203),k=r(13),S=function(t){var e=t.location.search,r=t.data,a=r.site.siteMetadata,i=a.title,u=a.description,s=a.siteUrl,l=r.allMarkdownRemark.edges,f=r.file.publicURL,p=j.parse(e),d="string"==typeof p.category&&p.category?p.category:"All",y=(0,n.useMemo)((function(){return l.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,c.tZ)(k.Z,{title:i,description:u,url:s,image:f,selectedCategory:d,categoryList:y,mode:""},(0,c.tZ)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},(0,c.tZ)("div",{style:{width:"768px",display:"grid",justifyContent:"end"}},(0,c.tZ)(o.Z,{selectedCategory:d,categoryList:y,mode:""}),(0,c.tZ)(w,{selectedCategory:d,posts:l}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5686802a37831ac719ba.js.map