webpackJsonp([8],{b3iB:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("NYxO"),i={name:"essays",data:function(){return{essaysData:[]}},computed:Object(e.b)(["getPage"]),watch:{getPage:function(){this.getEssaysData(this.getPage)}},created:function(){this.getEssaysData(1)},methods:{getEssaysData:function(t){var a=this;this.$http.get("/article/selectType",{params:{typeNum:12,page:t}}).then(function(t){0==t.data.msg?a.$store.dispatch("critical"):a.essaysData=a.essaysData.concat(t.data.msg)}).catch(function(t){})}},components:{ArticleList:function(t){s.e(22).then(function(){var a=[s("htZ/")];t.apply(null,a)}.bind(this)).catch(s.oe)},LatestArticleView:function(t){s.e(21).then(function(){var a=[s("73xz")];t.apply(null,a)}.bind(this)).catch(s.oe)},ClassfiyView:function(t){s.e(23).then(function(){var a=[s("pkpl")];t.apply(null,a)}.bind(this)).catch(s.oe)}}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"essays"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("article-list",{attrs:{articleData:this.essaysData}})],1),this._v(" "),a("div",{staticClass:"col-md-4 d-none d-lg-block"},[a("latest-article-view"),this._v(" "),a("classfiy-view")],1)])])},staticRenderFns:[]};var n=s("VU/8")(i,c,!1,function(t){s("cYpW")},"data-v-63cd24ef",null);a.default=n.exports},cYpW:function(t,a){}});
//# sourceMappingURL=8.aafcdf9b5f71fe2f36fc.js.map