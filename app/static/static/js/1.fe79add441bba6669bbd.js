webpackJsonp([1],{"/BP+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Q0Ca"),a={name:"file",data:function(){var t=this;return{columns:[{title:"编号",key:"id"},{title:"作者",key:"username"},{title:"发表时间",key:"post_time",render:function(t,e){return t("div",n.a.timeFormat(e.row.post_time))}},{title:"文件描述",key:"description"},{title:"删除",key:"action",width:150,align:"center",render:function(e,i){return e("div",[e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.delFile(i.index,i.row.id)}}},"删除")])}}],allData:[]}},created:function(){this.getShare()},methods:{getShare:function(){var t=this;this.$http.get("/file/shareFile").then(function(e){t.allData=e.data.msg}).catch(function(e){t.$Message.error("出错啦。。。")})},delFile:function(t,e){var i=this;this.$http.post("file/deleteFile",{fileId:e}).then(function(e){i.allData.splice(t,1),i.$Message.success("删除成功！")}).catch(function(t){i.$Message.error("出错啦。。。")})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"file"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[this._v("\n      文件列表\n    ")]),this._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("Table",{attrs:{columns:this.columns,data:this.allData,stripe:""}})],1)])],1)},staticRenderFns:[]};var s=i("Z0/y")(a,r,!1,function(t){i("32E1")},"data-v-be71adce",null);e.default=s.exports},"32E1":function(t,e){}});
//# sourceMappingURL=1.fe79add441bba6669bbd.js.map