webpackJsonp([9],{"4AEP":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Q0Ca"),i={name:"articleIndex",data:function(){var t=this;return{loading:!1,columns:[{title:"编号",key:"id"},{title:"标题",key:"title"},{title:"文章类型",key:"type_name",render:function(t,e){return t("div",[t("Tag",{props:{color:"blue",checkable:"checkable"}},""+e.row.type_name)])}},{title:"标签类型",key:"name",render:function(t,e){return null!==e.row.name?t("div",[t("Tag",{props:{color:"green",checkable:"checkable"}},""+e.row.name)]):t("div","无")}},{title:"作者",key:"username"},{title:"发表时间",key:"post_time",render:function(t,e){return t("div",n.a.timeFormat(e.row.post_time))}},{title:"阅读量",key:"read_num"},{title:"删除",key:"action",width:150,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.delArticle(t.allData[a.index].id,0,a.index)}}},"删除")])}}],allData:[],tagList:[],articleList:[],tagType:"",articleType:"",tagStatus:!1,typeStatus:!1,pageLength:[]}},watch:{tagType:function(){this.tagStatus=!0,this.typeStatus=!1},articleType:function(){this.typeStatus=!0,this.tagStatus=!1}},created:function(){var t=this;this.getArticle(1),this.$http.get("/tag/sellectAllTag").then(function(e){t.tagList=e.data.msg}),this.$http.get("/article/selectAllType").then(function(e){t.articleList=e.data.msg})},methods:{delArticle:function(t,e,a){var n=this;this.$http.get("/article/delArticle",{params:{articleId:t}}).then(function(t){e?(n.topData.splice(a,1),n.$Message.info("删除成功！")):(n.allData.splice(a,1),n.$Message.info("删除成功！"))}).catch(function(t){n.$Message.error("出错啦！")})},changeTag:function(t){this.getTagArticle(t,1)},changeType:function(t){this.getTypeArticle(t,1)},getTagArticle:function(t,e){var a=this;this.$http.get("/article/tagArticle",{params:{labelNum:t,page:e}}).then(function(t){a.allData=t.data.msg,a.pageLength=t.data.length}).catch(function(t){a.$Message.info("加载失败。。。")})},getTypeArticle:function(t,e){var a=this;this.$http.get("/article/selectType",{params:{typeNum:t,page:e}}).then(function(t){a.allData=t.data.msg,a.pageLength=t.data.length}).catch(function(t){a.$Message.error("出错啦。。。")})},getArticle:function(t){var e=this;this.$http.get("/article/allArticle",{params:{page:t}}).then(function(t){e.allData=t.data.msg,e.pageLength=t.data.length}).catch(function(t){e.$Message.error("出错啦！")})},changePage:function(t){this.tagStatus?this.getTagArticle(this.tagType,t):this.typeStatus?this.getTypeArticle(this.articleType,t):this.getArticle(t)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"articleIndex"}},[a("Card",[t._v("\n      文章分类查询：\n      "),a("Select",{staticStyle:{width:"200px"},on:{"on-change":t.changeType},model:{value:t.articleType,callback:function(e){t.articleType=e},expression:"articleType"}},t._l(t.articleList,function(e){return a("Option",{key:e.value,attrs:{value:e.type_num}},[t._v(t._s(e.type_name))])})),t._v("    \n      标签分类查询：\n      "),a("Select",{staticStyle:{width:"200px"},on:{"on-change":t.changeTag},model:{value:t.tagType,callback:function(e){t.tagType=e},expression:"tagType"}},t._l(t.tagList,function(e){return a("Option",{key:e.value,attrs:{value:e.type}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("所有文章")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("Table",{attrs:{loading:t.loading,columns:t.columns,data:t.allData,stripe:""}}),t._v(" "),t.pageLength[0]?a("Page",{staticClass:"page",attrs:{total:t.pageLength[0].COUNT,"page-size":5},on:{"on-change":t.changePage}}):t._e()],1)])],1)},staticRenderFns:[]};var c=a("Z0/y")(i,l,!1,function(t){a("xe+0")},"data-v-2c55df00",null);e.default=c.exports},"xe+0":function(t,e){}});
//# sourceMappingURL=9.f348853999df23167dda.js.map