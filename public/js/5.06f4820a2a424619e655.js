webpackJsonp([5],{107:function(r,e,t){"use strict";function o(r){t(154)}Object.defineProperty(e,"__esModule",{value:!0});var n=t(144),i=t(156),a=t(4),c=o,s=a(n.a,i.a,!1,c,null,null);e.default=s.exports},144:function(r,e,t){"use strict";var o=t(1);e.a={components:{QBtn:o.b,QIcon:o.n},data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},154:function(r,e,t){var o=t(155);"string"==typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);t(104)("34dfaad6",o,!0,{})},155:function(r,e,t){e=r.exports=t(103)(!1),e.push([r.i,".error-page .error-code{height:50vh;width:100%;padding-top:15vh;color:hsla(0,0%,100%,.2);overflow:hidden}@media (orientation:landscape){.error-page .error-code{font-size:30vw}}@media (orientation:portrait){.error-page .error-code{font-size:30vh}}.error-page .error-card{border-radius:2px;margin-top:-50px;width:80vw;max-width:600px;padding:25px}.error-page .error-card>i{font-size:5rem}",""])},156:function(r,e,t){"use strict";var o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"error-page window-height window-width bg-light column items-center no-wrap"},[t("div",{staticClass:"error-code bg-primary flex items-center content-center justify-center"},[r._v("\n    404\n  ")]),r._v(" "),t("div",[t("div",{staticClass:"error-card shadow-4 bg-white column items-center justify-center no-wrap"},[t("q-icon",{attrs:{name:"error_outline",color:"dark"}}),r._v(" "),t("p",{staticClass:"caption text-center"},[r._v("Oops. Nothing here...")]),r._v(" "),t("p",{staticClass:"text-center group"},[r.canGoBack?t("q-btn",{attrs:{color:"primary",push:"",icon:"keyboard_arrow_left"},on:{click:r.goBack}},[r._v("\n          Go back\n        ")]):r._e(),r._v(" "),t("q-btn",{attrs:{color:"primary",push:"","icon-right":"home"},on:{click:function(e){r.$router.replace("/")}}},[r._v("\n          Go home\n        ")])],1)],1)])])},n=[],i={render:o,staticRenderFns:n};e.a=i}});