webpackJsonp([17],{NIVJ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"file",data:function(){return{warnText:"",fileWarn:"",achievementTag:[],achievementInfo:{description:"",achievement_num:"",href:"",img:""},fileInfo:{file:"",title:"",description:"",href:"",file_href:""}}},components:{vueCropper:function(e){i.e(24).then(function(){var t=[i("13wZ")];e.apply(null,t)}.bind(this)).catch(i.oe)}},mounted:function(){var e=this;this.$http.get("/achievement/selectAllTag").then(function(t){e.achievementTag=t.data.msg})},methods:{insertAchievement:function(){var e=this;""==this.insertAchievement.description?this.warnText="成果描述不能为空！":""==this.insertAchievement.achievement_num?this.warnText="成果类型不能为空！":this.$refs.cropper.getHref()?this.$refs.cropper.getHref().then(function(t){e.achievementInfo.img=t,e.$http.post("/achievement/insertAchievement",e.achievementInfo).then(function(t){e.$router.push("/achievement")}).catch(function(t){e.warnText="出错啦！"})}):this.warnText="图片不能为空！"},insertFile:function(){var e=this;if(""==this.fileInfo.title)this.fileWarn="文件标题不能为空！";else if(""==this.fileInfo.description)this.fileWarn="文件描述不能为空！";else if(""==this.fileInfo.file)this.fileWarn="文件不能为空！";else{var t=new FormData;t.append("file",this.fileInfo.file);this.$http({url:"/file/dealPic",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.fileInfo.file_href=t.data.data,e.$http.post("/file/insertFile",{title:e.fileInfo.title,href:e.fileInfo.href,file_href:e.fileInfo.file_href,description:e.fileInfo.description}).then(function(t){e.$router.push("/self/share")})}).catch(function(t){e.fileWarn="文件上传失败！"})}},getFile:function(e){this.fileInfo.file=e.target.files[0]}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file"},[e._m(0),e._v(" "),i("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[i("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-share",role:"tabpanel","aria-labelledby":"nav-share"}},[i("form",{staticClass:"card-body",attrs:{onsubmit:"return false"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"text-danger",attrs:{for:"title"}},[e._v("文件标题")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.fileInfo.title,expression:"fileInfo.title"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"title",placeholder:"请输入文章标题",required:""},domProps:{value:e.fileInfo.title},on:{input:function(t){t.target.composing||e.$set(e.fileInfo,"title",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"text-danger",attrs:{for:"description"}},[e._v("文件描述")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.fileInfo.description,expression:"fileInfo.description"}],staticClass:"form-control mt-2",attrs:{id:"description",rows:"3",required:""},domProps:{value:e.fileInfo.description},on:{input:function(t){t.target.composing||e.$set(e.fileInfo,"description",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"text-success",attrs:{for:"href"}},[e._v("文件链接(可选项)")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.fileInfo.href,expression:"fileInfo.href"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"href",placeholder:"请输入链接"},domProps:{value:e.fileInfo.href},on:{input:function(t){t.target.composing||e.$set(e.fileInfo,"href",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"text-danger"},[e._v("附件")]),e._v(" "),i("input",{staticClass:"form-control-file form-control-lg mt-2",attrs:{type:"file"},on:{change:function(t){return e.getFile(t)}}})]),e._v(" "),i("div",{staticClass:"text-center text-danger my-3"},[e._v("\n                    "+e._s(e.fileWarn)+"                       \n                ")]),e._v(" "),i("div",{staticClass:"form-group text-center mt-3"},[i("button",{staticClass:"btn btn-primary py-2 px-4",attrs:{type:"submit"},on:{click:e.insertFile}},[e._v("上传")])])])]),e._v(" "),i("div",{staticClass:"tab-pane fade",attrs:{id:"nav-achievement",role:"tabpanel","aria-labelledby":"nav-achievement"}},[i("form",{staticClass:"card-body",attrs:{onsubmit:"return false"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"text-danger",attrs:{for:"description"}},[e._v("成果描述")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.achievementInfo.description,expression:"achievementInfo.description"}],staticClass:"form-control mt-2",attrs:{id:"description",rows:"3",required:""},domProps:{value:e.achievementInfo.description},on:{input:function(t){t.target.composing||e.$set(e.achievementInfo,"description",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group my-4"},[i("label",{staticClass:"text-danger",attrs:{for:"achievement"}},[e._v("成果类型")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.achievementInfo.achievement_num,expression:"achievementInfo.achievement_num"}],staticClass:"custom-select form-control mt-2",attrs:{id:"achievement",required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.achievementInfo,"achievement_num",t.target.multiple?i:i[0])}}},e._l(e.achievementTag,function(t,a){return i("option",{key:a,domProps:{value:t.achievement_num}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])}),0)]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"text-success"},[e._v("成果链接(可选项)")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.achievementInfo.href,expression:"achievementInfo.href"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"phone",placeholder:"请输入成果链接"},domProps:{value:e.achievementInfo.href},on:{input:function(t){t.target.composing||e.$set(e.achievementInfo,"href",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("vue-cropper",{ref:"cropper",attrs:{width:220,height:220}})],1),e._v(" "),i("div",{staticClass:"text-center text-danger my-3"},[e._v("\n                    "+e._s(e.warnText)+"                       \n                ")]),e._v(" "),i("div",{staticClass:"form-group text-center mt-3"},[i("button",{staticClass:"btn btn-primary py-2 px-4",attrs:{type:"submit"},on:{click:e.insertAchievement}},[e._v("上传")])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[t("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-share",role:"tab","aria-controls":"nav-share","aria-selected":"true"}},[this._v("文件上传")]),this._v(" "),t("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-achievement",role:"tab","aria-controls":"nav-achievement","aria-selected":"false"}},[this._v("成果上传")])])])}]};var s=i("VU/8")(a,n,!1,function(e){i("TGMX")},"data-v-1ec01d59",null);t.default=s.exports},TGMX:function(e,t){}});
//# sourceMappingURL=17.8d9656a1120e334471c8.js.map