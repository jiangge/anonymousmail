webpackJsonp([1],{"1//C":function(t,e){},"1rJv":function(t,e){},"Br+n":function(t,e){},FXoN:function(t,e){t.exports={serverurl:""}},Gcy5:function(t,e){},LIoD:function(t,e){},N3nN:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("+RKF"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},n=a("C7Lr")({name:"App"},r,!1,null,null,null).exports,i=a("CGvb"),c=a("lC5x"),l=a.n(c),o=a("J0Oq"),p=a.n(o),u=a("L+OJ"),d=a.n(u),m=a("3cXf"),f=a.n(m);function v(){var t=JSON.parse(localStorage.getItem("emails"));if(t&&0!==t.mailList.length)return t;var e={mailList:[w(5)+"@mfk.app"]};return x("emails",e),e}function x(t,e){return localStorage.setItem(t,f()(e)),!0}function g(t){var e=JSON.parse(localStorage.getItem("emails"));if(e&&e.mailList){var a=e.mailList.indexOf(t);return a>-1&&e.mailList.splice(a,1),x("emails",e),!0}return!0}function h(){return x("emails",{mailList:[]}),!0}function w(t){for(var e=["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","t","u","v","w","x","y"],a="",s=0;s<t;s++){a+=e[Math.ceil(21*Math.random())]}return a}d.a.defaults.withCredentials=!0;var y={data:function(){return{mailaddressList:[],menuItemIndex:"/emailList/",mailaddress:"",activeIndex:""}},created:function(){this.getMailListMessage()},watch:{$route:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMailListMessage();case 2:case"end":return e.stop()}},e,t)}))()}},methods:{getMailListMessage:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=v(),t.mailaddressList=a.mailList,t.activeIndex=t.$route.path;case 3:case"end":return e.stop()}},e,t)}))()},removeMailListMessage:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.mailaddressList=[];case 1:case"end":return e.stop()}},e,t)}))()},getMailList:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t).tableData=[],e.next=4,d.a.get(t.serviceurl()+"/getmaillist/?address="+a.mailaddress).then(function(t){a.tableData=t.data.results});case 4:case"end":return e.stop()}},e,t)}))()},handleEdit:function(t,e){var a=this;return p()(l.a.mark(function t(){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=a,t.next=3,d.a.get(a.serviceurl()+"/getmailmessage/?uid="+e.uid).then(function(t){s.dialogFormVisible=!0,s.mailValue=t.data.results});case 3:case"end":return t.stop()}},t,a)}))()},refulsh:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$loading(),e.next=3,t.getMailList();case 3:a.close(),t.$message({message:"刷新成功",type:"success",duration:"600"});case 5:case"end":return e.stop()}},e,t)}))()},removeEmails:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$loading(),e.next=3,g(t.mailaddress);case 3:a.close(),t.$message({message:"删除成功",type:"success",duration:"600"}),t.$router.push({path:"/emailList/all"});case 6:case"end":return e.stop()}},e,t)}))()},onCopy:function(t){this.$message({message:"复制成功，可以直接粘贴",type:"success",duration:"600"})},onError:function(){this.$message({message:"复制失败，请手动复制",type:"error",duration:"600"})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{staticStyle:{width:"300px"},attrs:{span:12}},[a("el-container",[a("el-header",{staticClass:"downLoadLine"},[a("div",{staticClass:"sidebar-header"},[a("div",{staticClass:"brand-container"},[a("a",{staticClass:"brand",attrs:{href:"/"}},[a("i",{staticClass:"el-icon-connection"}),t._v("\n                            mfk.app\n                        ")])])])]),t._v(" "),a("el-main",{staticClass:"mainleft",staticStyle:{"background-color":"#fafafa",padding:"0 0 0 0"}},[a("el-menu",{staticStyle:{width:"calc(100Vw-48px)"},attrs:{"default-active":t.activeIndex,router:"","background-color":"#fafafa","active-text-color":"black"}},[a("el-menu-item",{staticClass:"downLoadLine",attrs:{index:"/addEmailBox"}},[a("i",{staticClass:"el-icon-plus",staticStyle:{color:"#7c6c5c"}}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("添加邮箱")])]),t._v(" "),a("el-menu-item",{attrs:{index:"/emailList/all"}},[a("i",{staticClass:"el-icon-s-home",staticStyle:{color:"#7c6c5c"}}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("全部邮箱")])]),t._v(" "),t._l(t.mailaddressList,function(e){return a("el-menu-item",{key:e,attrs:{index:t.menuItemIndex+e}},[a("span",{staticStyle:{"margin-left":"23px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(e))])])})],2)],1)],1)],1),t._v(" "),a("el-col",{staticStyle:{width:"calc(100Vw - 300px)"},attrs:{span:12}},[a("router-view",{on:{removeMailListMessage:t.removeMailListMessage}})],1)],1)},staticRenderFns:[]};var _=a("C7Lr")(y,b,!1,function(t){a("Br+n"),a("1//C")},"data-v-a16e922a",null).exports;d.a.defaults.withCredentials=!0;var C={data:function(){return{mailaddress:"",tableData:[]}},created:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$route.params.num?t.mailaddress=t.$route.params.num:t.mailaddress="all",t.getMailList();case 2:case"end":return e.stop()}},e,t)}))()},watch:{$route:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createdmethods();case 2:return e.next=4,t.getMailList();case 4:case"end":return e.stop()}},e,t)}))()}},mounted:function(){var t=this;this.timer?clearInterval(this.timer):this.timer=setInterval(p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t,e.next=3,d.a.get(t.serviceurl()+"/getmaillist/?address="+t.mailaddress).then(function(e){t.tableData.length<e.data.results.length&&(t.tableData=e.data.results,t.$message({message:"有新邮件请查收",type:"success",duration:"800"}))});case 3:case"end":return e.stop()}},e,t)})),11e3)},destroyed:function(){clearInterval(this.timer)},methods:{jumpMessage:function(t){this.$router.push({path:"/email/"+t})},createdmethods:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMailListMessage();case 2:t.$route.params.num?t.mailaddress=t.$route.params.num:t.mailaddress="all";case 3:case"end":return e.stop()}},e,t)}))()},getMailListMessage:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:v();case 1:case"end":return t.stop()}},e,t)}))()},getMailList:function(){var t=this;return p()(l.a.mark(function e(){var a,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t).tableData=[],s=a.$loading(),e.next=5,d.a.get(t.serviceurl()+"/getmaillist/?address="+t.mailaddress).then(function(e){t.tableData=e.data.results,s.close()});case 5:case"end":return e.stop()}},e,t)}))()},handleEdit:function(t,e){var a=this;return p()(l.a.mark(function t(){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=a,t.next=3,d.a.get(a.serviceurl()+"/getmailmessage/?uid="+e.uid).then(function(t){s.dialogFormVisible=!0,s.mailValue=t.data.results});case 3:case"end":return t.stop()}},t,a)}))()},refulsh:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$loading(),e.next=3,t.getMailList();case 3:a.close(),t.$message({message:"刷新成功",type:"success",duration:"600"});case 5:case"end":return e.stop()}},e,t)}))()},removeEmails:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$loading(),e.next=3,g(t.mailaddress);case 3:a.close(),t.$message({message:"删除成功",type:"success",duration:"600"}),t.$router.push({path:"/emailList/all"});case 6:case"end":return e.stop()}},e,t)}))()},removeAllEmails:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$loading(),t.tableData.splice(0,t.tableData.length),e.next=4,h();case 4:return e.next=6,t.$emit("removeMailListMessage");case 6:a.close(),t.$message({message:"全部删除成功",type:"success",duration:"600"});case 8:case"end":return e.stop()}},e,t)}))()},onCopy:function(t){this.$message({message:"复制成功，可以直接粘贴",type:"success",duration:"600"})},onError:function(){this.$message({message:"复制失败，请手动复制",type:"error",duration:"600"})}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-container",[s("el-header",{staticClass:"downLoadLine",staticStyle:{padding:"0px 0px 0px 0px"}},[s("el-row",{staticStyle:{height:"48px","white-space":"nowrap"}},["all"!==t.mailaddress?s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.mailaddress,expression:"mailaddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"blackColor classSpancursorpointer",staticStyle:{display:"inline-block",padding:"14px 5px 14px 5px"}},[s("i",{staticClass:"el-icon-document-copy",staticStyle:{"margin-left":"5px",color:"#777"}}),t._v(" "),s("span",{staticStyle:{color:"#7c6c5c","font-size":"14px"}},[t._v(t._s(t.mailaddress))]),t._v(" "),s("span",{staticStyle:{"font-size":"14px",color:"#777"}},[t._v("复制")])]):t._e(),t._v(" "),s("div",{staticClass:"blackColor classSpancursorpointer",staticStyle:{display:"inline-block",padding:"14px 5px 14px 5px"},on:{click:function(e){return t.refulsh()}}},[s("i",{staticClass:"el-icon-refresh",staticStyle:{color:"#7c6c5c","margin-left":"5px"}}),t._v(" "),s("span",{staticStyle:{"font-size":"14px",color:"#777"}},[t._v("刷新")])]),t._v(" "),"all"!==t.mailaddress?s("div",{staticClass:"blackColor classSpancursorpointer",staticStyle:{display:"inline-block",padding:"14px 5px 14px 5px"},on:{click:function(e){return t.removeEmails()}}},[s("i",{staticClass:"el-icon-delete",staticStyle:{color:"#7c6c5c","margin-left":"5px"}}),t._v(" "),s("span",{staticStyle:{"font-size":"14px",color:"#777"}},[t._v("删除邮箱")])]):s("div",{staticClass:"blackColor classSpancursorpointer",staticStyle:{display:"inline-block",padding:"14px 5px 14px 5px"},on:{click:function(e){return t.removeAllEmails()}}},[s("i",{staticClass:"el-icon-delete",staticStyle:{color:"#7c6c5c","margin-left":"5px"}}),t._v(" "),s("span",{staticStyle:{"font-size":"14px",color:"#777"}},[t._v("删除全部邮箱")])])])],1),t._v(" "),0!==t.tableData.length?s("el-main",{staticStyle:{padding:"0px",overflow:"auto !important",height:"calc(100Vh - 48px)"}},[t._l(t.tableData,function(e){return s("div",{key:e.uid,staticClass:"borderBottom classSpancursorpointer classFontFamily aa",on:{click:function(a){return t.jumpMessage(e.uid)}}},[s("el-row",{staticStyle:{margin:"0px 0px 5px 30px",padding:"10px 0px 0px 0px"}},[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"grid-content bg-purple-dark"},[t._v(t._s(e.subject)+"\n                "),0!==e.attachments?s("i",{staticClass:"el-icon-paperclip",staticStyle:{color:"#7c6c5c","margin-left":"5px","font-size":"14px"}}):t._e()])])],1),t._v(" "),s("el-row",{staticStyle:{margin:"0px 0px 10px 30px"}},[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple-dark"},[t._v(t._s(e.from))])]),t._v(" "),s("el-col",{attrs:{span:16}},[s("div",{staticClass:"grid-content bg-purple-dark"},[t._v(t._s(e.date))])])],1)],1)}),t._v(" "),s("footer",{staticClass:"ui-link"},[s("a",{attrs:{href:"https://beian.miit.gov.cn/"}},[t._v("苏 ICP 备 14002037号-3")])])],2):s("el-main",{staticStyle:{padding:"0px",overflow:"auto !important",height:"calc(100Vh - 48px)"}},[s("div",[s("el-row",{staticStyle:{margin:"0px 0px 5px 30px",padding:"10px 0px 0px 0px"}},[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"grid-content bg-purple-dark"},[s("img",{staticClass:"no-emails-found",attrs:{src:a("WZTu")}})])])],1),t._v(" "),s("el-row",{staticStyle:{margin:"0px 0px 10px 30px"}},[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{"text-align":"center",display:"grid","margin-top":"15px"}},[s("div",{staticStyle:{margin:"auto","max-width":"381px",padding:"0 20px"}},[s("span",{staticClass:"ng-binding"},[t._v("还没有邮件哦。"),s("br"),s("br")]),t._v(" "),"all"==t.mailaddress?s("span",{staticClass:"ng-binding"},[t._v("不想暴露私人邮箱地址，你可以用这些去注册网站，保护你的真实邮箱。"),s("br"),s("br")]):s("span",{staticClass:"ng-binding"},[t._v("不想暴露私人邮箱地址，你可以用 "),s("b",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.mailaddress,expression:"mailaddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"ng-binding classSpancursorpointer",staticStyle:{color:"#0078d4"}},[t._v(t._s(t.mailaddress))]),t._v(" 去注册网站，保护你的真实邮箱。"),s("br"),s("br")])])])])],1)],1),t._v(" "),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8245321006725365","data-ad-slot":"1234567890"}}),t._v(" "),s("footer",{staticClass:"ui-link"},[s("a",{attrs:{href:"https://beian.miit.gov.cn/"}},[t._v("苏 ICP 备 14002037号-3")])])],1)],1)],1)},staticRenderFns:[]};var k=a("C7Lr")(C,S,!1,function(t){a("LIoD"),a("1rJv")},"data-v-26a89b5e",null).exports;d.a.defaults.withCredentials=!0;var L={data:function(){return{input2:""}},created:function(){this.creatMailAddress()},methods:{creatMailAddress:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.input2=w(5);case 1:case"end":return e.stop()}},e,t)}))()},addmailaddress:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.input2,void 0,r=void 0,s=a.toLowerCase(),(r=JSON.parse(localStorage.getItem("emails")))?0!==r.mailList.length?-1==r.mailList.indexOf(s+"@mfk.app")?(r.mailList.push(s+"@mfk.app"),x("emails",r)):x("emails",r):(r.mailList.push(s+"@mfk.app"),x("emails",r)):x("emails",{mailList:[s+"@mfk.app"]}),t.$message({message:"添加成功",type:"success",duration:"600"}),t.$router.push({path:"/emailList/"+t.input2+"@mfk.app"});case 3:case"end":return e.stop()}var a,s,r},e,t)}))()}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("el-header",{staticClass:"downLoadLine",staticStyle:{padding:"0px 0px 0px 0px"}}),t._v(" "),a("el-main",{staticClass:"classFontFamily",staticStyle:{padding:"0px",overflow:"auto !important",height:"calc(100Vh - 48px)"}},[a("el-row",{staticStyle:{margin:"0px 0px 5px 30px",padding:"10px 0px 0px 0px"}},[a("el-col",{attrs:{span:3}},[a("div",[t._v(" ")])]),t._v(" "),a("el-col",{staticStyle:{"margin-top":"30px","font-size":"18px"},attrs:{span:21}},[a("div",{staticClass:"grid-content bg-purple-dark",staticStyle:{"margin-top":"10px"}},[t._v("\n                添加邮箱\n              ")]),t._v(" "),a("div",{staticClass:"grid-content bg-purple-dark",staticStyle:{"margin-top":"20px"}},[a("el-input",{staticClass:"inpurWidth",attrs:{placeholder:"请输入内容",autofocus:"",size:"small"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}},[a("template",{slot:"append"},[t._v("@mfk.app")])],2)],1),t._v(" "),a("div",{staticClass:"grid-content bg-purple-dark",staticStyle:{"margin-top":"20px"}},[a("el-button",{staticClass:"btnprimary",attrs:{type:"primary",size:"small"},on:{click:t.addmailaddress}},[t._v("添加")])],1)])],1)],1)],1)],1)},staticRenderFns:[]};var $=a("C7Lr")(L,M,!1,function(t){a("Gcy5"),a("ib9C")},"data-v-6b509e32",null).exports,E=a("ZLEe"),N=a.n(E);d.a.defaults.withCredentials=!0;var I={data:function(){return{uid:"",tableData:[],mailHeadersShow:!1,mailMessage:{body:"",attachments:[],from:"",subject:"",headers:[]}}},created:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createdmethods();case 2:case"end":return e.stop()}},e,t)}))()},watch:{$route:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createdmethods();case 2:return e.next=4,t.getMail();case 4:case"end":return e.stop()}},e,t)}))()}},methods:{jumpattachment:function(t){window.open(this.serviceurl()+"/getmailattachment?uid="+this.uid+"&attachmentid="+t)},createdmethods:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$route.params.num&&(t.uid=t.$route.params.num,t.getMail());case 1:case"end":return e.stop()}},e,t)}))()},getMail:function(){var t=this;return p()(l.a.mark(function e(){var a,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=(a=t).$loading(),e.next=4,d.a.get(t.serviceurl()+"/getmailmessage/?uid="+t.uid).then(function(t){a.mailMessage.body=t.data.results.body,a.mailMessage.attachments=t.data.results.attachment,a.mailMessage.subject=t.data.results.subject,a.mailMessage.from=t.data.results.from,a.mailMessage.headers=[],N()(t.data.results.headers).forEach(function(e){a.mailMessage.headers.push({name:e,value:t.data.results.headers[e]})}),s.close()});case 4:case"end":return e.stop()}},e,t)}))()},handleEdit:function(t,e){var a=this;return p()(l.a.mark(function t(){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=a,t.next=3,d.a.get(a.serviceurl()+"/getmailmessage/?uid="+e.uid).then(function(t){s.dialogFormVisible=!0,s.mailValue=t.data.results});case 3:case"end":return t.stop()}},t,a)}))()},goBack:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$router.go(-1);case 1:case"end":return e.stop()}},e,t)}))()},removeEmails:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$loading(),e.next=3,g(t.uid);case 3:a.close(),t.$message({message:"删除成功",type:"success",duration:"600"}),t.$router.push({path:"/emailList/all"});case 6:case"end":return e.stop()}},e,t)}))()},removeAllEmails:function(){var t=this;return p()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$loading(),t.tableData.splice(0,t.tableData.length),e.next=4,h();case 4:return e.next=6,t.$emit("removeMailListMessage");case 6:a.close(),t.$message({message:"全部删除成功",type:"success",duration:"600"});case 8:case"end":return e.stop()}},e,t)}))()},onCopy:function(t){this.$message({message:"复制成功，可以直接粘贴",type:"success",duration:"600"})},onError:function(){this.$message({message:"复制失败，请手动复制",type:"error",duration:"600"})}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("el-header",{staticClass:"downLoadLine",staticStyle:{padding:"0px 0px 0px 0px"}},[a("el-row",{staticStyle:{height:"48px","white-space":"nowrap"}},[a("div",{staticClass:"blackColor classSpancursorpointer",staticStyle:{display:"inline-block",padding:"13px 5px 13px 5px"},on:{click:function(e){return t.goBack()}}},[a("i",{staticClass:"el-icon-back",staticStyle:{color:"#7c6c5c","margin-left":"5px"}}),t._v(" "),a("span",{staticStyle:{"font-size":"14px",color:"#777"}},[t._v("返回")])])])],1),t._v(" "),a("el-main",{staticStyle:{padding:"0px",overflow:"auto !important",height:"calc(100Vh - 48px)"}},[a("el-row",{staticStyle:{height:"40px","white-space":"nowrap"}},[a("div",{staticClass:"blackColor classSpancursorpointer",staticStyle:{display:"inline-block",padding:"10px 5px 9px 5px"},on:{click:function(e){t.mailHeadersShow=!t.mailHeadersShow}}},[a("i",{staticClass:"el-icon-tickets",staticStyle:{"font-size":"115%",color:"#7c6c5c","margin-left":"5px"}}),t._v(" "),a("span",{staticStyle:{"font-size":"14px"}},[t._v("邮件头")])])]),t._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:t.mailHeadersShow,expression:"mailHeadersShow"}],staticClass:"mailRowClass",staticStyle:{margin:"0px 30px 5px 30px",padding:"10px 0px 10px 0px"}},[a("el-col",{staticStyle:{padding:"10px 0px 0px 0px"},attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.mailMessage.headers,size:"mini"}},[a("el-table-column",{attrs:{prop:"name",label:"key",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"value",label:"value"}})],1)],1)],1),t._v(" "),a("el-row",{staticClass:"mailRowClass",staticStyle:{margin:"0px 30px 5px 30px",padding:"10px 0px 10px 0px"}},[a("el-col",{staticStyle:{width:"70px",padding:"10px 0px 0px 0px"},attrs:{span:4}},[a("span",[t._v("主题")])]),t._v(" "),a("el-col",{staticStyle:{padding:"10px 0px 0px 0px"},attrs:{span:20}},[a("span",[t._v(t._s(t.mailMessage.subject))])])],1),t._v(" "),a("el-row",{staticClass:"mailRowClass",staticStyle:{margin:"0px 30px 5px 30px",padding:"10px 0px 10px 0px"}},[a("el-col",{staticStyle:{width:"70px",padding:"10px 0px 0px 0px"},attrs:{span:4}},[a("span",[t._v("发件人")])]),t._v(" "),a("el-col",{staticStyle:{padding:"10px 0px 0px 0px"},attrs:{span:20}},[a("span",[t._v(t._s(t.mailMessage.from))])])],1),t._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:0!==t.mailMessage.attachments.length,expression:"mailMessage.attachments.length !==0 "}],staticClass:"mailRowClass",staticStyle:{margin:"0px 30px 5px 30px",padding:"10px 0px 10px 0px"}},[a("el-col",{staticStyle:{width:"70px",padding:"10px 0px 0px 0px"},attrs:{span:4}},[a("span",[t._v("附件")])]),t._v(" "),a("el-col",{attrs:{span:20}},t._l(t.mailMessage.attachments,function(e){return a("el-button",{key:e.id,attrs:{type:"text"},on:{click:function(a){return t.jumpattachment(e.id)}}},[t._v(t._s(e.name))])}),1)],1),t._v(" "),a("el-row",{staticStyle:{margin:"0px 30px 5px 30px",padding:"10px 0px 0px 0px"}},[a("el-col",{attrs:{span:24}},[a("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.mailMessage.body,expression:"mailMessage.body"}],staticClass:"grid-content bg-purple-dark"})])],1)],1)],1)],1)},staticRenderFns:[]};var D=a("C7Lr")(I,F,!1,function(t){a("N3nN"),a("jQsp")},"data-v-bd8e2c12",null).exports;s.default.use(i.a);var j=[{path:"/",name:"home",component:_,redirect:"emailList/all",children:[{path:"emailList/:num",name:"emailList1",component:k},{path:"emailList/",name:"emailList2",component:k},{path:"addEmailBox/",name:"addEmailBox",component:$},{path:"email/:num",name:"email",component:D}]}],A=new i.a({routes:j});A.beforeEach(function(t,e,a){window._hmt&&t.path&&window._hmt.push(["_trackPageview","/#"+t.fullPath]),a()});var z=A,V=a("bQIR"),R=a.n(V),B=(a("gFLX"),a("FXoN")),O=a.n(B),J=a("urnN"),H=a.n(J),P=a("ESuO"),T=a.n(P),X=a("LVCy");s.default.use(R.a),s.default.config.productionTip=!1,s.default.use(H.a),s.default.use(T.a),s.default.use(a("STp9")),s.default.use(X.a.Adsense),s.default.use(X.a.InArticleAdsense),s.default.use(X.a.InFeedAdsense),s.default.prototype.serviceurl=function(){return O.a.serverurl};var G=G||[];window._hmt=G,function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?f17073ce3910dee882c81b53f3128a8f";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),new s.default({el:"#app",router:z,components:{App:n},template:"<App/>"})},WZTu:function(t,e,a){t.exports=a.p+"static/img/notFound.afd903c.png"},gFLX:function(t,e){},ib9C:function(t,e){},jQsp:function(t,e){}},["NHnr"]);