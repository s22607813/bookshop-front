(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["book"],{"8bf3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"text-dark px-5",attrs:{fluid:"",id:"book"}},[s("b-overlay",{attrs:{show:!t.checked},scopedSlots:t._u([{key:"overlay",fn:function(){return[s("h1",[t._v("審核中")])]},proxy:!0}])},[s("b-row",[s("b-col",[s("h3",{staticClass:"text-left mt-4"},[1===this.genre?s("span",{staticClass:"font-weight-bold title"},[t._v("文學類別")]):2===this.genre?s("span",{staticClass:"font-weight-bold title"},[t._v("雜誌類別")]):3===this.genre?s("span",{staticClass:"font-weight-bold title"},[t._v("教科書類別")]):s("span",{staticClass:"font-weight-bold title"},[t._v("其他")])])])],1),s("hr"),s("b-row",{staticClass:"mt-5",attrs:{"align-v":"stretch"}},[s("b-col",{staticClass:"book_img mb-4 pr-md-2 pr-lg-1",attrs:{cols:"12",md:"4"}},[s("img",{staticClass:"w-100",attrs:{src:t.image}})]),s("b-col",{staticClass:"pl-lg-5 pl-md-4",attrs:{cols:"12",md:"8"}},[s("h1",{staticClass:"text-left mt-4 mb-4"},[s("span",{staticClass:"font-weight-bold",staticStyle:{color:"#495580"}},[t._v(t._s(t.name))])]),s("h2",{staticClass:"text-left mb-4"},[s("span",{staticClass:"font-weight-bold",staticStyle:{color:"#495580"}},[t._v("捐贈者：")])]),s("h3",{staticClass:"text-left mb-4"},[s("span",[t._v(t._s(t.from.name))])]),s("h2",{staticClass:"text-left mb-4"},[s("span",{staticClass:"font-weight-bold",staticStyle:{color:"#495580"}},[t._v("說明：")])]),s("h4",{staticClass:"text-left mb-4"},[s("textarea",{staticClass:"w-100 p-2",attrs:{disabled:""}},[t._v(t._s(t.description))])])])],1),s("hr"),s("b-row",[s("b-col",{staticClass:"mb-4 d-flex justify-content-center",attrs:{cols:"12"}},[1!==this.$store.state.user.role?s("b-button",{staticClass:"w-50 mt-3",attrs:{href:"#",variant:"success",size:"lg"},on:{click:t.addCart}},[s("div",{attrs:{id:"text_cart"}}),s("b-icon",{attrs:{icon:"bag-check-fill"}}),t._v(" 放入購物車")],1):t._e()],1)],1)],1)],1)},r=[],o=s("1da1"),n=(s("96cf"),s("b0c0"),s("a4d3"),s("e01a"),s("99af"),{name:"book",data:function(){return{name:"",description:"",from:"",image:"",checked:"",genre:""}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products/"+t.$route.params.id);case 3:s=e.sent,a=s.data,t.name=a.result.name,t.description=a.result.description,t.from=a.result.from,t.checked=a.result.checked,t.genre=a.result.genre,t.image="".concat("https://book-x-book-shop.herokuapp.com","/files/").concat(a.result.image),document.title="".concat(t.name," | 二手圕"),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),t.$router.push("/");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},methods:{addCart:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.$store.state.jwt.token.length){e.next=3;break}return t.$router.push("/login"),e.abrupt("return");case 3:return e.prev=3,e.next=6,t.axios.post("/users/cart",{product:t.$route.params.id},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 6:t.$swal({icon:"success",title:"成功",text:"放入購物車"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),t.$swal({icon:"error",title:"錯誤",text:"放入購物車失敗"});case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}}),i=n,c=s("2877"),l=Object(c["a"])(i,a,r,!1,null,null,null);e["default"]=l.exports},e01a:function(t,e,s){"use strict";var a=s("23e7"),r=s("83ab"),o=s("da84"),n=s("5135"),i=s("861d"),c=s("9bf2").f,l=s("e893"),u=o.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(p,u);var b=p.prototype=u.prototype;b.constructor=p;var f=b.toString,h="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=f.call(t);if(n(d,t))return"";var s=h?e.slice(7,-1):e.replace(m,"$1");return""===s?void 0:s}}),a({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=book.f104ec38.js.map