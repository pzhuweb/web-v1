webpackJsonp([1],{"7aoc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"banner"}},[t._l(t.bannerList,function(e,i){return n("Card",{key:i,staticClass:"list",staticStyle:{width:"300px"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:e.href,width:"100%"}}),t._v(" "),n("Button",{staticStyle:{"margin-top":"10px"},attrs:{type:"warning"},on:{click:function(n){t.deletePic(e.id)}}},[t._v("删除")])],1)])}),t._v(" "),n("Card",[n("Upload",{attrs:{multiple:"",type:"drag","on-success":t.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,action:"http://www.pzhuweb.cn/api/file/dealPic"}},[n("div",{staticStyle:{padding:"20px 0"}},[n("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),n("p",[t._v("上传轮播图")])],1)]),t._v(" "),n("Button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:t.uploadPic}},[t._v("确定上传")])],1)],2)},staticRenderFns:[]};var s=n("Z0/y")({name:"banner",data:function(){return{imgList:[],bannerList:[]}},created:function(){this.getBannerList()},methods:{handleSuccess:function(t,e,n){this.imgList.push(t.data)},uploadPic:function(){var t=this;0==this.imgList.length?this.$Message.error("请先上传图片"):this.$http.post("/file/bannerInsert",{imgList:this.imgList}).then(function(e){t.getBannerList(),t.$Message.success("上传成功！")}).catch(function(e){t.$Message.error("出错啦。。。")})},getBannerList:function(){var t=this;this.$http.get("/file/getBannerList").then(function(e){t.bannerList=e.data.msg}).catch(function(e){t.$Message.error("出错啦。。。")})},deletePic:function(t,e){var n=this;this.$Modal.confirm({content:"<p>确定删除吗</p>",onOk:function(){n.$http.post("/file/deletePic",{id:t}).then(function(t){n.getBannerList(),n.$Message.success("删除成功！")}).catch(function(t){n.$Message.error("出错啦。。。")})},onCancel:function(){n.$Message.info("Clicked cancel")}})}}},i,!1,function(t){n("JrD0")},"data-v-c134d2e4",null);e.default=s.exports},JrD0:function(t,e){}});
//# sourceMappingURL=1.81babce4462ce239e55d.js.map