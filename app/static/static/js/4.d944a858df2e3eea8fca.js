webpackJsonp([4],{K31e:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"login",data:function(){return{formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"}]}}},mounted:function(){this.init()},methods:{init:function(){(new function(){var e,t,r,n,o,a,i,s,l={background:0,particle:4684994},c=3e4,u=(Math.PI,new function(){this.getNextFloat=function(){return Math.random()}}),d=new Float32Array(3),p=0,f=function(){window.requestAnimationFrame(h)},g=function(){var p;p=document.getElementsByTagName("canvas"),o=p[0],a=o.getContext("2d"),i=window.innerWidth,s=window.innerHeight,o.setAttribute("width",i),o.setAttribute("height",s),e=new Float32Array(2*c),m(function(t,r){e[t]=u.getNextFloat(),e[r]=u.getNextFloat()}),d[0]=l.particle>>16&255,d[1]=l.particle>>8&255,d[2]=255&l.particle,t="rgb("+d[0]+","+d[1]+","+d[2]+")",(r=a.createLinearGradient(i/2,0,i/2,s)).addColorStop(.25,"rgba(0, 0, 0, 0)"),r.addColorStop(.45,"rgba(0, 0, 0, 0.9)"),r.addColorStop(.5,"rgba(0, 0, 0, 1)"),r.addColorStop(.55,"rgba(0, 0, 0, 0.9)"),r.addColorStop(.75,"rgba(0, 0, 0, 0)"),(n=a.createLinearGradient(i/2,s/2,i/2,s)).addColorStop(0,"rgba(0, 0, 30, 0)"),n.addColorStop(1,"rgba(30, 0, 60, 0.5)")},m=function(t){for(var r=0;r<e.length;r+=2)t(r,r+1)},h=function(){var o,c;a.fillStyle="#"+(o=l.background,c=o.toString(16),"0".repeat(6-c.length)+c),a.fillRect(0,0,i,s),a.fillStyle=n,a.fillRect(0,s/2,i,s/2),function(){Math.random(),p+=.03;var r=1,n=5,o=s/2,l=i/2,c=0,d=0,f=0,g=0,m={x:0,y:0,r:0};a.fillStyle=t;for(var h,v,w=0;w<e.length;w+=2)h=w,e[v=w+1]+=.003,e[v]>1&&(e[v]=0,e[h]=u.getNextFloat()),e[v]<.3||(c=1+4*(d=Math.pow(e[v],2)),f=(.5-e[h])*i*c,g=o*d*1.3,m.x=l+f,m.y=o+g,m.r=r+d*n,m.y+=Math.sin(50*e[h]+p)*g/10,m.y+=Math.cos(10*e[v]+p)*g/10,m.y-=Math.cos(e[v]+10*e[h]+p)*g/10,m.y-=Math.cos(50*e[h]+p)*g/10,m.y-=Math.sin(10*e[v]+p)*g/10,m.x<0||m.x>i||a.fillRect(m.x,m.y,m.r,m.r));a.fillStyle=t}(),a.fillStyle=r,a.fillRect(0,0,i,s),f()};this.run=function(){g(),h()}}).run()},login:function(){var e=this;this.$http.post("/user/login",{studentNum:this.formInline.user,password:this.formInline.password}).then(function(t){var r=t.data;r.have?2!==r.is_active?e.$Message.error("你没有权限！"):r.verify?(e.$Message.success("登陆成功"),sessionStorage.setItem("token",r.token),e.$router.push("/back/article")):e.$Message.error("密码不正确！"):e.$Message.error("用户名不存在！")}).catch(function(t){e.$Message.error("出错啦。。。")})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("canvas"),e._v(" "),r("div",{staticClass:"loginWrap"},[r("h1",{staticStyle:{color:"white","font-size":"30px","margin-bottom":"20px"}},[e._v("web应用团队后台管理")]),e._v(" "),r("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline}},[r("FormItem",{attrs:{prop:"user"}},[r("Input",{attrs:{type:"text",placeholder:"Username"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登陆")])],1)],1)],1)])},staticRenderFns:[]};var a=r("Z0/y")(n,o,!1,function(e){r("aT9Y")},"data-v-71fb78ca",null);t.default=a.exports},aT9Y:function(e,t){}});
//# sourceMappingURL=4.d944a858df2e3eea8fca.js.map