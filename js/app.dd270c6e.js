(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,m=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about",admin:"admin",admindonatelist:"admindonatelist",adminorders:"adminorders",adminproducts:"adminproducts",book:"book",cart:"cart",login:"login",orders:"orders",products:"products",productsLiterature:"productsLiterature",productsNew:"productsNew",productsmagazine:"productsmagazine",productsother:"productsother",productstextbook:"productstextbook",register:"register",user:"user",userboughtlist:"userboughtlist",userdonate:"userdonate"}[t]||t)+"."+{about:"85a20319",admin:"ca72a4de",admindonatelist:"a5efffc0",adminorders:"9cfa9a9b",adminproducts:"19ac774e",book:"0517f593",cart:"87b3afbc",login:"873a0787",orders:"9c35d7ab",products:"8e61524e",productsLiterature:"b9528555",productsNew:"c50e19fd",productsmagazine:"34d5a91a",productsother:"7567813b",productstextbook:"236adedd",register:"50e1aab4",user:"cb043c46",userboughtlist:"fa7b08d1",userdonate:"e1b58e03"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3e8e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var n=r("2b0e"),a=r("5f5b"),o=r("b1e0");r("ab8b"),r("2dd8");n["default"].use(a["b"]);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"position-fixed w-100",attrs:{toggleable:"lg",type:"dark",id:"header"}},[r("b-container",{attrs:{fluid:""}},[r("b-navbar-brand",{attrs:{to:"/"}},[r("div",{attrs:{id:"title"}},[r("span",{staticClass:"h1",staticStyle:{"font-size":"3em"}},[t._v("圕 ")]),r("span",{staticClass:"h4 font-weight-bold"},[t._v("二手書籍交易平台")])])]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto d-flex align-items-lg-center"},[t.user.isLogin?t._e():r("b-nav-item",{attrs:{to:"/login"}},[t._v("登入")]),t.user.isLogin&&!t.user.isAdmin?r("b-nav-item",{attrs:{to:"/user"}},[r("b-icon",{attrs:{icon:"person-fill"}}),t._v(" 會員中心")],1):t._e(),t.user.isLogin&&t.user.isAdmin?r("b-nav-item",{attrs:{to:"/admin"}},[r("b-icon",{attrs:{icon:"person-fill"}}),t._v(" 管理員中心")],1):t._e(),t.user.isLogin&&!t.user.isAdmin?r("b-nav-item",{staticClass:"position-relative",attrs:{to:"/cart"}},[r("b-icon",{attrs:{icon:"cart-fill"}}),t._v(" 購物車")],1):t._e(),r("div",{staticClass:"d-none d-lg-block",attrs:{id:"line"}}),t.user.isLogin?r("b-nav-item",{on:{click:t.logout}},[t._v("登出")]):t._e(),t.user.isLogin?t._e():r("b-nav-item",{attrs:{to:"/register"}},[t._v("註冊")])],1)],1)],1)],1),r("vue-page-transition",{attrs:{name:"fade-in-down"}},[r("router-view")],1),r("div",{attrs:{id:"footer"}},[r("b-container",{staticClass:"px-5 pt-2",attrs:{fluid:""}},[r("b-row",{staticClass:"px-3"},[r("b-col",{staticClass:"footer_border text-center py-2",attrs:{cols:"12",md:"4"}},[r("h6",{staticClass:"font-weight-bold"},[t._v("關於二手圕")]),r("hr",{staticClass:"mt-1 bg-white"}),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/about"}},[t._v("關於我們")]),r("br"),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/"}},[t._v("隱私權政策")]),r("br"),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/"}},[t._v("服務條款")]),r("br"),r("router-link",{staticClass:"colorbdbfc1 mr-2",attrs:{to:"/"}},[r("b-icon",{attrs:{icon:"facebook"}})],1),r("router-link",{staticClass:"colorbdbfc1 mr-2",attrs:{to:"/"}},[r("b-icon",{attrs:{icon:"twitter"}})],1),r("router-link",{staticClass:"colorbdbfc1 mr-2",attrs:{to:"/"}},[r("b-icon",{attrs:{icon:"google"}})],1),r("router-link",{staticClass:"colorbdbfc1 mr-2",attrs:{to:"/"}},[r("b-icon",{attrs:{icon:"instagram"}})],1)],1),r("b-col",{staticClass:"footer_border text-center py-2",attrs:{cols:"12",md:"4"}},[r("h6",{staticClass:"font-weight-bold"},[t._v("書籍類別")]),r("hr",{staticClass:"mt-1 bg-white"}),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/productsLiterature"}},[t._v("文學類別")]),r("br"),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/productsmagazine"}},[t._v("雜誌類別")]),r("br"),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/productstextbook"}},[t._v("教科書類別")]),r("br"),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/productsother"}},[t._v("其他")])],1),r("b-col",{staticClass:"text-center py-2",attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"font-weight-bold"},[t._v("會員中心")]),r("hr",{staticClass:"mt-1 bg-white"}),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/register"}},[t._v("加入會員")]),r("br"),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/user"}},[t._v("會員資料")]),r("br"),r("router-link",{staticClass:"colorbdbfc1",attrs:{to:"/"}},[t._v("客服信箱")])],1)],1),r("b-row",[r("b-col",{staticClass:"text-center mb-4 mt-2",attrs:{cols:"12"}},[r("span",[t._v("Copyright © 2021 二手圕 All Rights Reserved")])])],1)],1)],1)],1)},i=[],c=r("1da1"),u=(r("96cf"),{name:"App",data:function(){return{cartLength:""}},computed:{shoppingcart:function(){return{cartLength:this.$store.state.user.cart}}},methods:{logout:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.delete("/users/logout",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/"),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0),t.$swal({icon:"error",title:"錯誤",text:"登出失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.$store.state.jwt.token.length){e.next=2;break}return e.abrupt("return");case 2:if(r=Date.now()-t.$store.state.jwt.received,e.prev=3,!(r>5184e5)){e.next=10;break}return e.next=7,t.axios.post("/users/extend",{},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 7:n=e.sent,a=n.data,t.$store.commit("extend",a.result);case 10:return e.next=12,t.axios.get("/users/",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 12:o=e.sent,s=o.data,t.$store.commit("getinfo",s.result),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](3),t.$store.commit("logout");case 20:case"end":return e.stop()}}),e,null,[[3,17]])})))()}}),l=u,d=r("2877"),m=Object(d["a"])(l,s,i,!1,null,null,null),p=m.exports,b=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"page",attrs:{fluid:"",id:"home"}},[r("b-row",[r("b-col",{staticClass:"sidebar position-fixed d-flex justify-content-between justify-content-md-start align-items-center flex-md-column px-0",attrs:{cols:"12",md:"2"}},[r("b-btn",{staticClass:"btn mx-2 mt-md-4 px-0",attrs:{to:"/about",exact:"","exact-active-class":"active",variant:"",size:"lg"}},[t._v("關 於 我 們")]),r("b-btn",{staticClass:"btn mx-2 mt-md-3 px-0",attrs:{to:"/productsNew",exact:"","exact-active-class":"active",variant:"",size:"lg"}},[t._v("新 書 上 架")]),r("b-button-group",{staticClass:"btn p-0 border-0 mt-md-3 mx-2"},[r("b-dropdown",{staticClass:"h-100 w-100",attrs:{exact:"","exact-active-class":"active",variant:"",size:"lg",text:"書 籍 類 別 "}},[r("b-dropdown-item",{attrs:{to:"/productsLiterature",exact:"","exact-active-class":"active"}},[t._v("文 學")]),r("b-dropdown-item",{attrs:{to:"/productsmagazine",exact:"","exact-active-class":"active"}},[t._v("雜 誌")]),r("b-dropdown-item",{attrs:{to:"/productstextbook",exact:"","exact-active-class":"active"}},[t._v("教 科 書")]),r("b-dropdown-item",{attrs:{to:"/productsother",exact:"","exact-active-class":"active"}},[t._v("其 他")])],1)],1)],1)],1),r("b-row",{staticClass:"down offset-md-2"},[r("vue-page-transition",{staticClass:"w-100",attrs:{name:"fade-in-left"}},[r("router-view")],1)],1)],1)},h=[],g=(r("4de4"),r("d81d"),r("99af"),r("e915")),v={name:"Home",data:function(){return{products:[]}},components:{ProductCard:g["a"]},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products");case 3:r=e.sent,n=r.data,t.products=n.result.map((function(t){return t.image="".concat("https://book-x-book-shop.herokuapp.com","/files/").concat(t.image),t})).filter((function(t){return t.checked})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},x=v,w=Object(d["a"])(x,f,h,!1,null,null,null),k=w.exports,_=r("5530"),C=(r("b0c0"),r("2f62")),j=r("0e44");n["default"].use(C["a"]);var y=new C["a"].Store({state:{jwt:{token:"",received:0},user:{name:"",account:"",role:0,email:"",donate_amount:"",change_amount:"",id:"",cart:""}},mutations:{login:function(t,e){t.jwt.token=e.token,t.jwt.received=(new Date).getTime(),t.user.name=e.name,t.user.account=e.account,t.user.role=e.role,t.user.email=e.email,t.user.id=e.id,t.user.donate_amount=e.donate_amount,t.user.change_amount=e.change_amount},cart:function(t,e){t.user.cart=e},logout:function(t){t.jwt={token:"",received:0},t.user={name:"",account:"",role:0,email:"",donate_amount:"",change_amount:"",id:"",cart:""}},extend:function(t,e){t.jwt.token=e,t.jwt.received=(new Date).getTime()},getinfo:function(t,e){t.user.account=e.account,t.user.role=e.role,t.user.email=e.email}},actions:{},modules:{},getters:{user:function(t){return Object(_["a"])({isLogin:t.user.account.length>0,isAdmin:1===t.user.role},t.user)}},plugins:[Object(j["a"])()]});n["default"].use(b["a"]);var L=[{path:"/",name:"Home",component:k,children:[{path:"",name:"Products",component:function(){return r.e("products").then(r.bind(null,"e6dc"))},meta:{title:"二手圕"}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))},meta:{title:"關於我們 | 二手圕"}},{path:"/productsNew",name:"ProductsNew",component:function(){return r.e("productsNew").then(r.bind(null,"aa3f"))},meta:{title:"新書上架 | 二手圕"}},{path:"/productsLiterature",name:"ProductsLiterature",component:function(){return r.e("productsLiterature").then(r.bind(null,"7675"))},meta:{title:"文學類別 | 二手圕"}},{path:"/productsmagazine",name:"ProductsMagazine",component:function(){return r.e("productsmagazine").then(r.bind(null,"5759"))},meta:{title:"雜誌類別 | 二手圕"}},{path:"/productstextbook",name:"ProductsTextbook",component:function(){return r.e("productstextbook").then(r.bind(null,"601d"))},meta:{title:"教科書類別 | 二手圕"}},{path:"/productsother",name:"ProductsOther",component:function(){return r.e("productsother").then(r.bind(null,"cf49"))},meta:{title:"其他類別 | 二手圕"}},{path:"/book/:id",name:"Book",component:function(){return r.e("book").then(r.bind(null,"8bf3"))},meta:{title:"商品 | 二手圕"}}]},{path:"/login",name:"Login",component:function(){return r.e("login").then(r.bind(null,"a55b"))},meta:{title:"登入 | 二手圕"}},{path:"/register",name:"Register",component:function(){return r.e("register").then(r.bind(null,"73cf"))},meta:{title:"註冊 | 二手圕"}},{path:"/cart",name:"Cart",component:function(){return r.e("cart").then(r.bind(null,"b789"))},meta:{title:"購物車 | 二手圕",login:!0,user:!0}},{path:"/orders",name:"Orders",component:function(){return r.e("orders").then(r.bind(null,"159d"))},meta:{user:!0,title:"訂單 | 二手圕",login:!0}},{path:"/user",name:"User",component:function(){return r.e("user").then(r.bind(null,"1511"))},children:[{path:"",name:"UserData",component:function(){return r.e("user").then(r.bind(null,"922f"))},meta:{login:!0,user:!0,title:"會員中心 | 二手圕"}},{path:"userdonate",name:"UserDonate",component:function(){return r.e("userdonate").then(r.bind(null,"8393"))},meta:{login:!0,user:!0,title:"捐贈書籍 | 二手圕"}},{path:"userdonatelist",name:"UserDonateList",component:function(){return r.e("userdonate").then(r.bind(null,"8f6c"))},meta:{login:!0,user:!0,title:"捐贈清單 | 二手圕"}},{path:"userboughtlist",name:"UserBoughtList",component:function(){return r.e("userboughtlist").then(r.bind(null,"e225"))},meta:{login:!0,user:!0,title:"收購清單 | 二手圕"}}]},{path:"/admin",name:"Admin",component:function(){return r.e("admin").then(r.bind(null,"3530"))},children:[{path:"",name:"AdminUserList",component:function(){return r.e("admin").then(r.bind(null,"355a"))},meta:{login:!0,admin:!0,title:"會員管理 | 二手圕"}},{path:"adminorders",name:"AdminOrders",component:function(){return r.e("adminorders").then(r.bind(null,"ec5c"))},meta:{login:!0,admin:!0,title:"訂單管理 | 二手圕"}},{path:"admindonatelist",name:"AdminDonateList",component:function(){return r.e("admindonatelist").then(r.bind(null,"60f6"))},meta:{login:!0,admin:!0,title:"審核清單 | 二手圕"}},{path:"adminproducts",name:"AdminProducts",component:function(){return r.e("adminproducts").then(r.bind(null,"aa93"))},meta:{login:!0,admin:!0,title:"書籍管理 | 二手圕"}}]}],O=new b["a"]({routes:L});O.beforeEach((function(t,e,r){t.meta.login&&0===y.state.user.account.length?r("/login"):t.meta.admin&&1!==y.state.user.role||t.meta.user&&0!==y.state.user.role?r("/"):r()})),O.afterEach((function(t,e){document.title=t.meta.title}));var P=O,$=(r("3e8e"),r("f9d5")),z=r.n($),A=(r("4413"),r("657c")),E=r("f0eb"),R=(r("2bd9"),r("caad"),r("2532"),r("2106")),T=r.n(R),S=r("bc3a"),B=r.n(S);B.a.defaults.baseURL="https://book-x-book-shop.herokuapp.com",B.a.interceptors.response.use((function(t){return t}),(function(t){if(t.response){if(401===t.response.status){var e="/users/extend";if(t.config.url!==e){var r=t.config;return B.a.post(e,{},{headers:{authorization:"Bearer "+y.state.jwt.token}}).then((function(t){return y.commit("extend",t.data.result),r.headers.authorization="Bearer "+y.state.jwt.token,B()(r)})).catch((function(t){return y.commit("logout"),P.push("/login"),Promise.reject(t)}))}}}else"ECONNABORTED"===t.code&&t.message&&t.message.includes("timeout")?alert("請求逾時"):alert("網路不穩定");return Promise.reject(t)})),n["default"].use(T.a,B.a);var N={computed:{user:function(){return this.$store.getters.user}}},D=r("a584");n["default"].use(D["a"],{config:{id:"G-M6ERTBTY3Q"}}),n["default"].use(z.a),n["default"].component("ImgInputer",A["a"]),n["default"].use(E["default"]),n["default"].use(a["a"]),n["default"].use(o["a"]),n["default"].mixin(N),n["default"].config.productionTip=!1,new n["default"]({router:P,store:y,mixin:[N],render:function(t){return t(p)}}).$mount("#app")},e915:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card product-card mt-2 mb-1 py-3"},[r("div",{staticClass:"card-head text-center"},[r("img",{attrs:{src:t.product.image}})]),r("div",{staticClass:"card-body pb-1"},[r("h4",{staticClass:"card-title mb-3 text-secondary"},[t._v(t._s(t.product.name))]),r("h6",{staticClass:"card-subtitle text-muted mb-2"},[t._v(t._s("捐贈者："+t.product.from.name))])])])},a=[],o={name:"ProductCard",props:{product:{type:Object,required:!0}}},s=o,i=r("2877"),c=Object(i["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.dd270c6e.js.map