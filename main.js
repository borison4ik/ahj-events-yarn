(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),i=r(6330),s=n.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),i=n.String,s=n.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),s=function(t){return function(e,r,s){var a,c=n(e),u=i(c),l=o(s,u);if(t&&r!=r){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),i=r(8361),s=r(7908),a=r(6244),c=r(5417),u=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,f=6==t,p=7==t,h=5==t||f;return function(v,d,y,m){for(var b,g,x=s(v),w=i(x),E=n(d,y),S=a(w),L=0,k=m||c,O=e?k(v,S):r||p?k(v,0):void 0;S>L;L++)if((h||L in w)&&(g=E(b=w[L],L,x),t))if(e)O[L]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return L;case 2:u(O,b)}else switch(t){case 4:return!1;case 7:u(O,b)}return f?-1:o||l?l:O}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},1194:(t,e,r)=>{var n=r(7293),o=r(5112),i=r(7392),s=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},7475:(t,e,r)=>{var n=r(7854),o=r(3157),i=r(4411),s=r(111),a=r(5112)("species"),c=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===c||o(e.prototype))||s(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?c:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),i=r(614),s=r(4326),a=r(5112)("toStringTag"),c=n.Object,u="Arguments"==s(function(){return arguments}());t.exports=o?s:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?r:u?s(e):"Object"==(n=s(e))&&i(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),s=r(3070);t.exports=function(t,e,r){for(var a=o(e),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];n(t,f)||r&&n(r,f)||c(t,f,u(e,f))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,r)=>{"use strict";var n=r(4948),o=r(3070),i=r(9114);t.exports=function(t,e,r){var s=n(e);s in t?o.f(t,s,i(0,r)):t[s]=r}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),s=r(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&s&&(!(n=s.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),s=r(1320),a=r(3505),c=r(9920),u=r(4705);t.exports=function(t,e){var r,l,f,p,h,v=t.target,d=t.global,y=t.stat;if(r=d?n:y?n[v]||a(v,{}):(n[v]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(h=o(r,l))&&h.value:r[l],!u(d?l:v+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),s(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(1702),o=r(9662),i=r(4374),s=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?s(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!n||n&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.bind,s=o.call,a=n&&i.bind(s,s);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),i=r(7293),s=r(4326),a=n.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),s=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,s=r(8536),a=r(7854),c=r(1702),u=r(111),l=r(8880),f=r(2597),p=r(5465),h=r(6200),v=r(3501),d="Object already initialized",y=a.TypeError,m=a.WeakMap;if(s||p.state){var b=p.state||(p.state=new m),g=c(b.get),x=c(b.has),w=c(b.set);n=function(t,e){if(x(b,t))throw new y(d);return e.facade=t,w(b,t,e),e},o=function(t){return g(b,t)||{}},i=function(t){return x(b,t)}}else{var E=h("state");v[E]=!0,n=function(t,e){if(f(t,E))throw new y(d);return e.facade=t,l(t,E,e),e},o=function(t){return f(t,E)?t[E]:{}},i=function(t){return f(t,E)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),s=r(648),a=r(5005),c=r(2788),u=function(){},l=[],f=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,h=n(p.exec),v=!p.exec(u),d=function(t){if(!i(t))return!1;try{return f(u,l,t),!0}catch(t){return!1}},y=function(t){if(!i(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!h(p,c(t))}catch(t){return!0}};y.sham=!0,t.exports=!f||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?y:d},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,s=function(t,e){var r=c[a(t)];return r==l||r!=u&&(o(e)?n(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),i=r(614),s=r(7976),a=r(3307),c=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,c(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),s=n.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},3070:(t,e,r)=>{var n=r(7854),o=r(9781),i=r(4664),s=r(3353),a=r(9670),c=r(4948),u=n.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=o?s?function(t,e,r){if(a(t),e=c(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(a(t),e=c(e),a(r),i)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),s=r(9114),a=r(5656),c=r(4948),u=r(2597),l=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=c(e),l)try{return f(t,e)}catch(t){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),s=r(1318).indexOf,a=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),u=0,l=[];for(r in n)!o(a,r)&&o(n,r)&&c(l,r);for(;e.length>u;)o(n,r=e[u++])&&(~s(l,r)||c(l,r));return l}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(614),s=r(111),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!s(n=o(r,t)))return n;if(i(r=t.valueOf)&&!s(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!s(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),s=r(5181),a=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=s.f;return r?c(e,r(t)):e}},1320:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2597),s=r(8880),a=r(3505),c=r(2788),u=r(9909),l=r(6530).CONFIGURABLE,f=u.get,p=u.enforce,h=String(String).split("String");(t.exports=function(t,e,r,c){var u,f=!!c&&!!c.unsafe,v=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet,y=c&&void 0!==c.name?c.name:e;o(r)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||l&&r.name!==y)&&s(r,"name",y),(u=p(r)).source||(u.source=h.join("string"==typeof y?y:""))),t!==n?(f?!d&&t[e]&&(v=!0):delete t[e],v?t[e]=r:s(t,e,r)):v?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||c(this)}))},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",s=n[i]||o(i,{});t.exports=s},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(111),s=r(2190),a=r(8173),c=r(2140),u=r(5112),l=n.TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var r,n=a(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||s(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),s=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),s=r(9711),a=r(133),c=r(3307),u=o("wks"),l=n.Symbol,f=l&&l.for,p=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=c&&f?f(e):p(e)}return u[t]}},2222:(t,e,r)=>{"use strict";var n=r(2109),o=r(7854),i=r(7293),s=r(3157),a=r(111),c=r(7908),u=r(6244),l=r(6135),f=r(5417),p=r(1194),h=r(5112),v=r(7392),d=h("isConcatSpreadable"),y=9007199254740991,m="Maximum allowed index exceeded",b=o.TypeError,g=v>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=p("concat"),w=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:s(t)};n({target:"Array",proto:!0,forced:!g||!x},{concat:function(t){var e,r,n,o,i,s=c(this),a=f(s,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(w(i=-1===e?s:arguments[e])){if(p+(o=u(i))>y)throw b(m);for(r=0;r<o;r++,p++)r in i&&l(a,p,i[r])}else{if(p>=y)throw b(m);l(a,p++,i)}return a.length=p,a}})},1249:(t,e,r)=>{"use strict";var n=r(2109),o=r(2092).map;n({target:"Array",proto:!0,forced:!r(1194)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1539:(t,e,r)=>{var n=r(1694),o=r(1320),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),s=r(8533),a=r(8880),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in o)o[u]&&c(n[u]&&n[u].prototype);c(i)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.p="",(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r(1249),r(2222),r(1539),r(4747);var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.active=!1,this.element=document.createElement("div"),this.element.classList.add("cell"),this.element.dataset.id=this.id,this.element.addEventListener("click",this.onClickHandler.bind(this),!1)}var r,n;return r=e,(n=[{key:"check",value:function(){this.active?this.element.classList.add("active"):(this.element.classList.remove("active"),this.element.classList.contains("hited")&&this.element.classList.remove("hited"))}},{key:"init",value:function(){return this.element}},{key:"onClickHandler",value:function(){var t=this;this.active?(this.element.classList.add("hited"),setTimeout((function(){t.active=!1,t.check()}),500),document.dispatchEvent(new CustomEvent("GOAL",{detail:{id:this.id}}))):document.dispatchEvent(new CustomEvent("MISS"))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=0,this.y=0,this.element=document.createElement("div"),this.element.classList.add("cursor"),this.element.style.top=this.x,this.element.style.left=this.y}var e,r;return e=t,(r=[{key:"init",value:function(){return this.element}},{key:"move",value:function(t){this.element.style.top="".concat(t.y-50,"px"),this.element.style.left="".concat(t.x-25,"px")}},{key:"hit",value:function(){this.element.style.transform="rotate(225deg)"}},{key:"reset",value:function(){this.element.style.transform="rotate(270deg)"}},{key:"show",value:function(){this.element.style.display="block"}},{key:"hide",value:function(){this.element.style.display="none"}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.app=document.querySelector(e),this.area=document.createElement("div"),this.area.classList.add("area"),this.area.addEventListener("mousemove",this.onMouseMove.bind(this),!1),this.area.addEventListener("mousedown",this.onMouseDown.bind(this),!1),this.area.addEventListener("mouseup",this.onMouseUp.bind(this),!1),this.area.addEventListener("mouseenter",this.onMouseEnter.bind(this),!1),this.area.addEventListener("mouseleave",this.onMouseLeave.bind(this),!1),this.size=4,this.cells=[],this.cursor=new o,this.coords={x:0,y:0}}var r,n;return r=t,(n=[{key:"init",value:function(){this.cells=[];for(var t=0;t<Math.pow(this.size,2);t+=1){var r=new e(t);this.cells.push(r)}console.log(this.cells)}},{key:"onMouseMove",value:function(t){this.cursor.move({x:t.x-this.coords.x,y:t.y-this.coords.y})}},{key:"onMouseDown",value:function(){this.cursor.hit()}},{key:"onMouseUp",value:function(){this.cursor.reset()}},{key:"onMouseEnter",value:function(){this.cursor.show()}},{key:"onMouseLeave",value:function(){this.cursor.hide()}},{key:"drowMap",value:function(){var t=this;this.area.innerHTML="",this.area.appendChild(this.cursor.init()),this.cells.forEach((function(e){e.check(),t.area.appendChild(e.init())})),this.app.appendChild(this.area),this.getAreaCoords()}},{key:"getAreaCoords",value:function(){this.coords.x=this.area.getBoundingClientRect().x,this.coords.y=this.area.getBoundingClientRect().y}},{key:"updateMap",value:function(){this.cells.forEach((function(t){t.check()}))}}])&&i(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.backgroundElement=document.createElement("div"),this.backgroundElement.classList.add("dark-background"),this.popupBodyElement=document.createElement("div"),this.popupBodyElement.classList.add("popup-body"),this.popupBodyElement.textContent=(null==e?void 0:e.text)||"Game Over",this.button=document.createElement("button"),this.button.classList.add("popup-button"),this.button.textContent=(null==e?void 0:e.text)||"Restart",this.button.addEventListener("click",this.click.bind(this)),this.popupBodyElement.appendChild(this.button),this.backgroundElement.appendChild(this.popupBodyElement)}var e,r;return e=t,(r=[{key:"init",value:function(){return this.backgroundElement}},{key:"show",value:function(){this.backgroundElement.classList.add("shown")}},{key:"hide",value:function(){this.backgroundElement.classList.contains("shown")&&this.backgroundElement.classList.remove("shown")}},{key:"click",value:function(){this.hide(),document.dispatchEvent(new CustomEvent("CLICK_POPUP"))}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=0;const l=r.p+"9244c961b98d1f5bba75a0cf9c77b88c.ogg",f=r.p+"e2ed0ed687e906950caf859b2ca743bb.ogg";function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameElement=document.querySelector(e),this.scoreElement=document.createElement("div"),this.scoreElement.style.fontFamily="Arial",this.scoreElement.style.fontSize="28px",this.scoreElement.style.marginBottom="30px",this.scoreElement.style.color="#ffffff",this.scoreElement.style.textAlign="center",this.gameElement.appendChild(this.scoreElement),this.audio=document.createElement("audio"),this.to=null,this.score=0,this.missScore=0,this.activeCell=null,this.map=new s(e),this.popup=new c,this.gameElement.appendChild(this.popup.init()),this.SPEED=1e3,this.listeners()}var e,r;return e=t,(r=[{key:"init",value:function(){this.score=0,this.missScore=0,this.activeCell=0,this.drawScore(),this.map.init(),this.map.drowMap(),this.play()}},{key:"listeners",value:function(){document.addEventListener("GOAL",this.goalHandler.bind(this)),document.addEventListener("MISS",this.missHandler.bind(this)),document.addEventListener("CLICK_POPUP",this.init.bind(this))}},{key:"goalHandler",value:function(){this.isLose()||(this.goalCount(),this.drawScore())}},{key:"missHandler",value:function(){this.isLose()||(this.missCount(),this.drawScore())}},{key:"goalCount",value:function(){this.sound(f),this.score+=1}},{key:"missCount",value:function(){this.sound(l),this.missScore+=1}},{key:"sound",value:function(t){this.audio.src=t,this.audio.play()}},{key:"drawScore",value:function(){this.scoreElement.textContent="score: ".concat(this.score," / miss: ").concat(this.missScore)}},{key:"isLose",value:function(){return this.missScore>=5}},{key:"gameOver",value:function(){this.popup.show()}},{key:"play",value:function(){var t=this,e=function(t){var e=Math.floor(Math.random()*Math.pow(t,2));if(e===u)do{e=Math.floor(Math.random()*Math.pow(t,2))}while(e===u);return u=e,e}(this.map.size);this.map.cells[this.activeCell].active=!1,this.map.cells[e].active=!0,this.map.updateMap(),this.activeCell=e,this.to=setTimeout((function(){t.isLose()?t.gameOver():t.play()}),this.SPEED)}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();window.onload=function(){new h("#app").init()}})()})();
//# sourceMappingURL=main.js.map