(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productsNew"],{aa3f:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"text-dark px-5",attrs:{fluid:"",id:"productsnew"}},[r("b-row",[r("b-col",[r("h3",{staticClass:"text-left mt-4"},[r("span",{staticClass:"font-weight-bold title"},[t._v("新書上架")])])])],1),r("hr"),r("b-row",t._l(t.products,(function(t){return r("b-col",{key:t._id,staticClass:"mb-4",attrs:{cols:"12",sm:"6",md:"4",xl:"2"}},[r("router-link",{attrs:{to:"/book/"+t._id}},[r("ProductCard",{attrs:{product:t}})],1)],1)})),1)],1)},a=[],o=r("1da1"),c=(r("96cf"),r("4de4"),r("d81d"),r("99af"),r("e915")),s={name:"ProductNew",data:function(){return{products:[]}},components:{ProductCard:c["a"]},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products");case 3:r=e.sent,n=r.data,t.products=n.result.map((function(t){return t.image="".concat("https://book-x-book-shop.herokuapp.com","/files/").concat(t.image),t})).filter((function(t){return t.checked})).reverse(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},u=s,i=r("2877"),d=Object(i["a"])(u,n,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=productsNew.c50e19fd.js.map