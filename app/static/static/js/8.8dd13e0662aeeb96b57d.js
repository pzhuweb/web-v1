webpackJsonp([8],{"6+aJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"mainCoponent",data:function(){return{isCollapsed:!1,routers:["/back/article","/back/members","/back/achievement","/back/file","/back/notice","/back/banner"]}},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{onMenuSelect:function(e){this.$router.push(this.routers[parseInt(e)-1])},logOut:function(){sessionStorage.removeItem("token"),this.$Message.success("安全退出"),this.$router.push("/login")}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mainCoponent"}},[n("div",{staticClass:"layout"},[n("Layout",{style:{minHeight:"100vh"}},[n("Sider",{attrs:{collapsible:"","collapsed-width":78},model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[n("Menu",{class:e.menuitemClasses,attrs:{"active-name":"1",theme:"dark",width:"auto"},on:{"on-select":e.onMenuSelect}},[n("MenuItem",{attrs:{name:"1"}},[n("Icon",{attrs:{type:"pricetag"}}),e._v("\n                        文章管理\n                    ")],1),e._v(" "),n("MenuItem",{attrs:{name:"2"}},[n("Icon",{attrs:{type:"person-stalker"}}),e._v("\n                        成员管理\n                    ")],1),e._v(" "),n("MenuItem",{attrs:{name:"3"}},[n("Icon",{attrs:{type:"ios-book"}}),e._v("\n                         成果管理\n                    ")],1),e._v(" "),n("MenuItem",{attrs:{name:"4"}},[n("Icon",{attrs:{type:"folder"}}),e._v("\n                        资源管理\n                    ")],1),e._v(" "),n("MenuItem",{attrs:{name:"5"}},[n("Icon",{attrs:{type:"ios-paperplane"}}),e._v("\n                        公告管理\n                    ")],1),e._v(" "),n("MenuItem",{attrs:{name:"6"}},[n("Icon",{attrs:{type:"images"}}),e._v("\n                        轮播图管理\n                    ")],1)],1)],1),e._v(" "),n("Layout",[n("Header",{staticClass:"title",style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}},[n("div",{staticClass:"sign"},[e._v("web应用团队后台管理")]),e._v(" "),n("div",[n("Button",{attrs:{type:"error"},on:{click:e.logOut}},[e._v("退出")])],1)]),e._v(" "),n("Content",[n("router-view")],1),e._v(" "),n("Footer",{staticClass:"layout-footer-center"},[e._v("\n                CopyRight©2017 "),n("br"),e._v("\n                PZHU-WEB   蜀ICP备17013737号"),n("br"),e._v("\n                地址：攀枝花市东区机场路10号   邮编：617000   联系方式：lanquanxiang@gmail.com\n                ")])],1)],1)],1)])},staticRenderFns:[]};var o=n("Z0/y")(a,s,!1,function(e){n("j8kG")},"data-v-3eab9e28",null);t.default=o.exports},j8kG:function(e,t){}});
//# sourceMappingURL=8.8dd13e0662aeeb96b57d.js.map