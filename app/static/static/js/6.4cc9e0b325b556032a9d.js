webpackJsonp([6],{qbBq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"articleComponent",data:function(){return{theme:"dark",routers:["/back/article","/back/article/tag"]}},methods:{changeArticle:function(t){this.$router.push(this.routers[parseInt(t)-1])}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"articleComponent"}},[e("Menu",{attrs:{mode:"horizontal",theme:this.theme,"active-name":"1"},on:{"on-select":this.changeArticle}},[e("MenuItem",{attrs:{name:"1"}},[e("Icon",{attrs:{type:"ios-paper"}}),this._v("\n          文章管理\n      ")],1),this._v(" "),e("MenuItem",{attrs:{name:"2"}},[e("Icon",{attrs:{type:"ios-people"}}),this._v("\n          标签管理\n      ")],1)],1),this._v(" "),e("div",[e("router-view")],1)],1)},staticRenderFns:[]};var s=n("Z0/y")(r,a,!1,function(t){n("rkQs")},"data-v-4c48843c",null);e.default=s.exports},rkQs:function(t,e){}});
//# sourceMappingURL=6.4cc9e0b325b556032a9d.js.map