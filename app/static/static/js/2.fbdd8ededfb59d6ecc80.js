webpackJsonp([2],{fvu3:function(t,e){},qbBq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"articleComponent",data:function(){return{theme:"dark",routers:["/back/article","/back/article/tag"]}},methods:{changeArticle:function(t){this.$router.push(this.routers[parseInt(t)-1])}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"articleComponent"}},[e("Menu",{attrs:{mode:"horizontal",theme:this.theme,"active-name":"1"},on:{"on-select":this.changeArticle}},[e("MenuItem",{attrs:{name:"1"}},[e("Icon",{attrs:{type:"ios-paper"}}),this._v("\n          文章管理\n      ")],1),this._v(" "),e("MenuItem",{attrs:{name:"2"}},[e("Icon",{attrs:{type:"ios-people"}}),this._v("\n          标签管理\n      ")],1)],1),this._v(" "),e("div",[e("router-view")],1)],1)},staticRenderFns:[]};var i=n("VU/8")(r,a,!1,function(t){n("fvu3")},"data-v-ae986756",null);e.default=i.exports}});
//# sourceMappingURL=2.fbdd8ededfb59d6ecc80.js.map