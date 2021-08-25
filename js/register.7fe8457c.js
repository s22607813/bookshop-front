(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"px-5",attrs:{id:"register"}},[r("b-row",{staticClass:"py-5"},[r("b-col",{staticClass:"box-shadow my-5 px-4",attrs:{cols:"12"}},[r("h3",{staticClass:"text-left title mt-4"},[t._v("註冊")]),r("hr"),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)},reset:t.reset}},[r("b-form-group",{staticClass:"mb-4",attrs:{label:"暱稱","label-for":"input-name",state:t.state.name,description:"暱稱長度限制為 1 到 10 個字","invalid-feedback":"暱稱格式不正確"}},[r("b-form-input",{attrs:{id:"input-name",type:"text",required:"",placeholder:"請輸入暱稱",state:t.state.name},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-form-group",{staticClass:"mb-4",attrs:{label:"帳號","label-for":"input-account",state:t.state.account,description:"帳號長度限制為 4 到 20 個字","invalid-feedback":"帳號格式不正確"}},[r("b-form-input",{attrs:{id:"input-account",type:"text",required:"",placeholder:"請輸入帳號",state:t.state.account},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),r("b-form-group",{staticClass:"mb-4",attrs:{label:"密碼","label-for":"input-password",state:t.state.password,description:"密碼長度限制為 4 到 20 個字","invalid-feedback":"密碼格式不正確"}},[r("b-form-input",{attrs:{id:"input-password",type:"password",required:"",placeholder:"請輸入密碼",state:t.state.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-group",{staticClass:"mb-4",attrs:{label:"信箱","label-for":"input-email",state:t.state.email,description:"請輸入有效的信箱","invalid-feedback":"信箱格式不正確"}},[r("b-form-input",{attrs:{id:"input-email",type:"text",required:"",placeholder:"請輸入信箱",state:t.state.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("hr",{staticClass:"mb-4"}),r("div",{staticClass:"text-center mb-4"},[r("b-btn",{staticClass:"w-25 mr-2",attrs:{variant:"success",type:"submit"}},[t._v("註冊")]),r("b-btn",{staticClass:"w-25",attrs:{variant:"danger",type:"reset"}},[t._v("重置")])],1)],1)],1)],1)],1)},n=[],o=r("1da1");r("96cf"),r("b0c0");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(t){var e="string"===typeof t||t instanceof String;if(!e){var r=i(t);throw null===t?r="null":"object"===r&&(r=t.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)"undefined"===typeof t[r]&&(t[r]=e[r]);return t}function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){var r,a;s(t),"object"===l(e)?(r=e.min||0,a=e.max):(r=arguments[1],a=arguments[2]);var n=encodeURI(t).split(/%..|./).length-1;return n>=r&&("undefined"===typeof a||n<=a)}var f={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function m(t,e){s(t),e=c(e,f),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var r=t.split("."),a=r[r.length-1];if(e.require_tld){if(r.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(a))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(a))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(a))&&r.every((function(t){return!(t.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)&&(!/[\uff01-\uff5e]/.test(t)&&(!/^-|-$/.test(t)&&!(!e.allow_underscores&&/_/.test(t)))))}))}var p="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",d="(".concat(p,"[.]){3}").concat(p),b=new RegExp("^".concat(d,"$")),h="(?:[0-9a-fA-F]{1,4})",x=new RegExp("^("+"(?:".concat(h,":){7}(?:").concat(h,"|:)|")+"(?:".concat(h,":){6}(?:").concat(d,"|:").concat(h,"|:)|")+"(?:".concat(h,":){5}(?::").concat(d,"|(:").concat(h,"){1,2}|:)|")+"(?:".concat(h,":){4}(?:(:").concat(h,"){0,1}:").concat(d,"|(:").concat(h,"){1,3}|:)|")+"(?:".concat(h,":){3}(?:(:").concat(h,"){0,2}:").concat(d,"|(:").concat(h,"){1,4}|:)|")+"(?:".concat(h,":){2}(?:(:").concat(h,"){0,3}:").concat(d,"|(:").concat(h,"){1,5}|:)|")+"(?:".concat(h,":){1}(?:(:").concat(h,"){0,4}:").concat(d,"|(:").concat(h,"){1,6}|:)|")+"(?::((?::".concat(h,"){0,5}:").concat(d,"|(?::").concat(h,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(s(t),e=String(e),!e)return g(t,4)||g(t,6);if("4"===e){if(!b.test(t))return!1;var r=t.split(".").sort((function(t,e){return t-e}));return r[3]<=255}return"6"===e&&!!x.test(t)}var _={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},v=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,w=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,y=/^[a-z\d]+$/,F=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,$=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,C=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,k=254;function D(t){var e=t.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;var r=/[\.";<>]/.test(e);if(r){if(e===t)return!1;var a=e.split('"').length===e.split('\\"').length;if(!a)return!1}return!0}function q(t,e){if(s(t),e=c(e,_),e.require_display_name||e.allow_display_name){var r=t.match(v);if(r){var a=r[1];if(t=t.replace(a,"").replace(/(^<|>$)/g,""),a.endsWith(" ")&&(a=a.substr(0,a.length-1)),!D(a))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>k)return!1;var n=t.split("@"),o=n.pop(),i=n.join("@"),l=o.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===l||"googlemail.com"===l)){i=i.toLowerCase();var f=i.split("+")[0];if(!u(f.replace(".",""),{min:6,max:30}))return!1;for(var p=f.split("."),d=0;d<p.length;d++)if(!y.test(p[d]))return!1}if(!1===e.ignore_max_length&&(!u(i,{max:64})||!u(o,{max:254})))return!1;if(!m(o,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!g(o)){if(!o.startsWith("[")||!o.endsWith("]"))return!1;var b=o.substr(1,o.length-2);if(0===b.length||!g(b))return!1}}if('"'===i[0])return i=i.slice(1,i.length-1),e.allow_utf8_local_part?C.test(i):F.test(i);for(var h=e.allow_utf8_local_part?$:w,x=i.split("."),q=0;q<x.length;q++)if(!h.test(x[q]))return!1;return!e.blacklisted_chars||-1===i.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))}var S={data:function(){return{form:{name:"",account:"",password:"",email:""}}},computed:{state:function(){return{name:0===this.form.name.length?null:this.form.name.length>=1&&this.form.name.length<=10,account:0===this.form.account.length?null:this.form.account.length>=4&&this.form.account.length<=20,password:0===this.form.password.length?null:this.form.password.length>=4&&this.form.password.length<=20,email:0===this.form.email.length?null:q(this.form.email)}}},methods:{reset:function(){this.form.name="",this.form.account="",this.form.password="",this.form.email=""},submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("/users",t.form);case 3:t.$swal({icon:"success",title:"成功",text:"註冊成功"}),t.$router.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"註冊失敗"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},E=S,z=r("2877"),A=Object(z["a"])(E,a,n,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=register.7fe8457c.js.map