webpackJsonp([14],{UO20:function(t,e){},dAjm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("NYxO"),a={data:function(){return{allArticleData:[]}},computed:Object(n.b)(["getPage"]),watch:{getPage:function(){this.getAllArticle(this.getPage)}},created:function(){this.getAllArticle(1)},methods:{getAllArticle:function(t){var e=this;this.$http.get("/article/allArticle",{params:{page:t}}).then(function(t){0==t.data.msg.length?e.$store.dispatch("critical"):e.allArticleData=e.allArticleData.concat(t.data.msg)}).catch(function(t){})}},components:{BannerView:function(t){i.e(28).then(function(){var e=[i("MMMJ")];t.apply(null,e)}.bind(this)).catch(i.oe)},ArticleList:function(t){i.e(22).then(function(){var e=[i("htZ/")];t.apply(null,e)}.bind(this)).catch(i.oe)},BottomView:function(t){i.e(0).then(function(){var e=[i("bMVv")];t.apply(null,e)}.bind(this)).catch(i.oe)},NoticeView:function(t){i.e(26).then(function(){var e=[i("NX4H")];t.apply(null,e)}.bind(this)).catch(i.oe)},LatestArticleView:function(t){i.e(21).then(function(){var e=[i("73xz")];t.apply(null,e)}.bind(this)).catch(i.oe)},ClassfiyView:function(t){i.e(23).then(function(){var e=[i("pkpl")];t.apply(null,e)}.bind(this)).catch(i.oe)}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("banner-view"),this._v(" "),e("article-list",{attrs:{articleData:this.allArticleData}})],1),this._v(" "),e("div",{staticClass:"col-md-4 d-none d-lg-block"},[e("notice-view"),this._v(" "),e("latest-article-view"),this._v(" "),e("classfiy-view")],1)])])},staticRenderFns:[]};var l=i("VU/8")(a,c,!1,function(t){i("UO20")},null,null);e.default=l.exports}});
//# sourceMappingURL=14.fa31c1bfae784e313a73.js.map