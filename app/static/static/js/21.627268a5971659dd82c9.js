webpackJsonp([21],{"htZ/":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("9rMa"),s={name:"articleList",data:function(){return{loadMore:"加载更多"}},props:{articleData:{type:Array}},computed:Object(i.b)(["getCritical"]),components:{SplitView:function(t){e.e(28).then(function(){var a=[e("2Hta")];t.apply(null,a)}.bind(this)).catch(e.oe)}},methods:{detail:function(t){this.$store.dispatch("detail",t),this.$router.push("/detail")},addMore:function(){this.loadMore="正在加载中...",this.$store.dispatch("changePage")}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article"},[e("split-view"),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.articleData.length,expression:"articleData.length == 0"}],staticClass:"card-body py-5 text-center text-warning"},[t._v("\n            暂无数据!    \n    ")]),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.articleData,function(a,i){return e("div",{key:i,staticClass:"row",on:{click:function(e){t.detail(a.id)}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:a.name,expression:"item.name"}],staticClass:"ribbon-zzsc-green"},[e("div",{staticClass:"ribbon-green"},[t._v(t._s(a.name))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.img,expression:"item.img"}],staticClass:"col-md-4"},[e("img",{attrs:{src:a.img,width:"100%",height:"100%"}})]),t._v(" "),e("div",{staticClass:"col-md"},[e("h4",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),e("ul",{staticClass:"message"},[e("li",[e("span",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t._f("timeFormat")(a.post_time)))]),t._v(" "),e("li",[e("span",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(a.username))]),t._v(" "),e("li",[e("span",{staticClass:"iconfont"},[t._v("")]),t._v("阅读("+t._s(a.read_num)+")")])]),t._v(" "),e("div",{staticClass:"card-text text-truncate"},[t._v(t._s(a.description))])])])})),t._v(" "),t.articleData.length%5!=0||0===t.articleData.length||t.getCritical?0!==t.articleData.length?e("div",{staticClass:"text-center py-4"},[t._v("\n        我是有底线的...\n    ")]):t._e():e("button",{staticClass:"btn btn-info btn-block",on:{click:function(a){t.addMore()}}},[t._v(t._s(t.loadMore))])],1)},staticRenderFns:[]};var r=e("Z0/y")(s,n,!1,function(t){e("r9ry")},"data-v-6f62f45c",null);a.default=r.exports},r9ry:function(t,a){}});
//# sourceMappingURL=21.627268a5971659dd82c9.js.map