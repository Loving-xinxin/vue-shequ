(function(t){function e(e){for(var a,i,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],n[i]&&p.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"193c":function(t,e,s){"use strict";var a=s("c29e"),n=s.n(a);n.a},"1b9d":function(t,e,s){"use strict";var a=s("e4a2"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return s(e)}function o(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("Header"),s("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"header-inner"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:"https://www.vue-js.com/public/images/vue.png",alt:""}}),s("h1",[t._v("vue.js")])]),s("div",{staticClass:"shouye"},[s("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"news"},[s("router-link",{attrs:{to:"/messages"}},[s("div",{staticClass:"messages_count"},[t._v(t._s(0!=t.messageNum?t.messageNum:""))]),t._v("未读消息\n      ")])],1),s("div",{staticClass:"create"},[t.userInfo&&"/topic/create"!=t.$route.path?s("router-link",{attrs:{to:"/topic/create"}},[t._v("发布")]):t._e()],1),s("div",{staticClass:"publichao"},[s("router-link",{attrs:{to:"/"}},[t._v("微信公众号")])],1),s("div",{staticClass:"banben"},[s("router-link",{attrs:{to:"/"}},[t._v("VUE 2.0")])],1),s("div",{staticClass:"ziliao"},[s("router-link",{attrs:{to:"/"}},[t._v("参考资料")])],1),s("div",{staticClass:"api"},[s("router-link",{attrs:{to:"/"}},[t._v("API")])],1),s("div",{staticClass:"about"},[s("router-link",{attrs:{to:"/"}},[t._v("关于")])],1),s("div",{staticClass:"setting"},[s("router-link",{attrs:{to:"/"}},[t._v("设置")])],1),t.userInfo?s("div",{staticClass:"logout"},[s("img",{staticClass:"avatar",attrs:{src:t.userInfo.avatar_url,alt:""}}),s("span",{staticClass:"out",on:{click:t.logout}},[s("router-link",{attrs:{to:"/"}},[t._v("退出")])],1)]):s("div",{staticClass:"login"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("button",{on:{click:t.login}},[t._v("登录")])])],1)])},c=[],r=s("bc3a"),l=s.n(r),u={name:"tou",data:function(){return{text:"74039e5a-3971-44df-aa0e-b506ee02254d",userInfo:null,messageNum:""}},created:function(){var t=this;sessionStorage.getItem("token")&&(l.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:sessionStorage.getItem("token")}).then(function(e){t.userInfo=e.data}),l.a.get("https://www.vue-js.com/api/v1/message/count?accesstoken=".concat(sessionStorage.getItem("token"))).then(function(e){t.messageNum=e.data.data,console.log(e.data),console.log(sessionStorage.getItem("token"))}))},methods:{login:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.text}).then(function(e){t.userInfo=e.data,sessionStorage.setItem("token",t.text),sessionStorage.setItem("user_id",e.data.id)})},logout:function(){console.log("退出"),this.userInfo=null,sessionStorage.removeItem("token")}}},d=u,p=(s("8baf"),s("2877")),v=Object(p["a"])(d,i,c,!1,null,null,null),f=v.exports,m={name:"app",components:{Header:f}},h=m,_=(s("034f"),Object(p["a"])(h,n,o,!1,null,null,null)),b=_.exports,g=s("8c4f"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"nav"},[s("ul",[s("li",[s("router-link",{class:"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=all"},nativeOn:{click:function(e){t.total=856}}},[t._v("全部")])],1),s("li",[s("router-link",{class:"/?tab=good"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=good"},nativeOn:{click:function(e){t.total=15}}},[t._v("精华")])],1),s("li",[s("router-link",{class:"/?tab=weex"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=weex"},nativeOn:{click:function(e){t.total=3}}},[t._v("weex")])],1),s("li",[s("router-link",{class:"/?tab=share"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=share"},nativeOn:{click:function(e){t.total=247}}},[t._v("分享")])],1),s("li",[s("router-link",{class:"/?tab=ask"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=ask"},nativeOn:{click:function(e){t.total=577}}},[t._v("问答")])],1),s("li",[s("router-link",{class:"/?tab=job"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=job"},nativeOn:{click:function(e){t.total=30}}},[t._v("招聘")])],1)])]),t.topics.length?s("div",{staticClass:"content"},[s("ul",t._l(t.topics,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url,alt:""}})]),s("div",{staticClass:"count"},[s("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),s("span",[t._v("/")]),s("span",{staticClass:"visit_count"},[t._v(t._s(e.visit_count))])]),"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath||e.top||e.good?s("span",{class:{tab:!0,active:e.top||e.good}},[t._v("\n          "+t._s(e.top?"置顶":e.good?"精华":"share"===e.tab?"分享":"ask"===e.tab?"问答":"job"===e.tab?"招聘":"weex")+"\n        ")]):t._e(),s("span",{staticClass:"title"},[s("router-link",{attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))])],1),s("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)}),0)]):s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736903633&di=4bda7f994fa0572e42172c022363bc81&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012a4d5c2c7159a8012029acbb7070.gif",alt:""}}),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.changePage}})],1)},k=[],C=s("c1df"),w=s.n(C),y={name:"home",data:function(){return{topics:[],user:[],total:856}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.query.tab||"all",s=this.$route.query.page||"1";this.topics=[],l.a.get("https://www.vue-js.com/api/v1/topics/?tab=".concat(e,"&page=").concat(s)).then(function(e){t.topics=e.data.data})}}},methods:{myMoment:function(t){return w.a.locale("zh-cn"),w()(t).fromNow()},changePage:function(t){var e=this.$route.query.tab||"all";this.$router.push("/?tab=".concat(e,"&page=").concat(t))}}},x=y,$=(s("8b71"),Object(p["a"])(x,j,k,!1,null,null,null)),z=$.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.topic?s("div",{staticClass:"topic"},[s("article",[s("div",{staticClass:"article-head"},[s("div",[t.topic.top||t.topic.good?s("span",{staticClass:"tab active"},[t._v(t._s(t.topic.top?"置顶":"精华"))]):t._e(),s("h2",[t._v(t._s(t.topic.title))]),t.isLogin?s("span",{staticClass:"collect",on:{click:t.changeCollect}},[t._v(t._s(t.is_collect?"取消收藏":"加入收藏"))]):t._e()]),s("p",{staticClass:"detail"},[s("span",[s("b",[t._v("·")]),t._v("\n          发布于"+t._s(t.myMoment(t.topic.create_at))+"\n        ")]),s("span",[s("b",[t._v("·")]),t._v("\n          作者 "+t._s(t.topic.author.loginname)+"\n        ")]),s("span",[s("b",[t._v("·")]),t._v("\n          "+t._s(t.topic.visit_count)+" 次浏览\n        ")]),s("span",[s("b",[t._v("·")]),t._v("\n          来自 "+t._s("share"===t.topic.tab?"分享":"ask"===t.topic.tab?"问答":"job"===t.topic.tab?"招聘":"weex")+"\n        ")])])]),s("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.topic.content)}})]),s("div",{staticClass:"comment"},[s("p",[t._v(t._s(t.topic.replies.length)+"回复")]),s("ul",t._l(t.topic.replies,function(e){return s("li",{key:e.id},[s("img",{attrs:{src:e.author.avatar_url,alt:""}}),s("div",[s("span",[t._v(t._s(e.author.loginname))]),s("span",[t._v(t._s(t.myMoment(e.create_at)))]),s("span",{staticClass:"content",domProps:{innerHTML:t._s(e.content)}}),s("span",[s("span",{on:{click:function(s){return t.up(e.id)}}},[t._v(t._s(t.isUped(e.id)?"👍":"赞"))]),t._v("\n            "+t._s(e.ups.length?e.ups.length:"")+"\n          ")]),s("span",{on:{click:function(s){return t.addreply(e.author.loginname)}}},[t._v("回复")])])])}),0),s("div",{staticClass:"comment-form"},[s("p",[t._v("添加回复")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("button",{staticClass:"reply",on:{click:t.addComment}},[t._v("回复")])])])]):t._e()},I=[],P=(s("7514"),{name:"topic",data:function(){return{topic:null,is_collect:!1,text:""}},computed:{isLogin:function(){return Boolean(sessionStorage.getItem("token"))}},created:function(){var t=this,e=this.$route.params.id;l.a.get("https://www.vue-js.com/api/v1/topic/".concat(e)).then(function(e){console.log(e.data.data),t.topic=e.data.data,console.log(e.data.data)})},methods:{myMoment:function(t){return w.a.locale("zh-cn"),w()(t).fromNow()},changeCollect:function(){var t=this,e={topic_id:this.$route.params.id,accesstoken:sessionStorage.getItem("token")};this.is_collect?l.a.post("https://www.vue-js.com/api/v1/topic/de_collect",e).then(function(e){e.data.success&&(t.is_collect=!1)}):l.a.post("https://www.vue-js.com/api/v1/topic/collect",e).then(function(e){e.data.success&&(t.is_collect=!0)})},addComment:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:sessionStorage.getItem("token"),content:this.text}).then(function(e){l.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.topic.id)).then(function(e){t.topic=e.data.data})})},up:function(t){var e=this;sessionStorage.getItem("token")?l.a.post("https://www.vue-js.com/api/v1/reply/".concat(t,"/ups"),{accesstoken:sessionStorage.getItem("token")}).then(function(s){console.log(s.data),"up"===s.data.action?e.topic.replies.find(function(e){return e.id===t}).ups.push(sessionStorage.getItem("user_id")):e.topic.replies.find(function(e){return e.id===t}).ups=e.topic.replies.find(function(e){return e.id===t}).ups.filter(function(t){return t!=sessionStorage.getItem("user_id")})}):alert("请登录")},isUped:function(t){return this.topic.replies.find(function(e){return e.id===t}).ups.indexOf(sessionStorage.getItem("user_id"))},addreply:function(t){this.text="@".concat(t),document.querySelector("textarea").focus()}}}),S=P,M=(s("1b9d"),Object(p["a"])(S,O,I,!1,null,null,null)),E=M.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user?s("div",{staticClass:"user"},[s("div",{staticClass:"top"},[s("router-link",{attrs:{to:"/"}},[t._v("主页/")])],1),s("div",{staticClass:"userInfo"},[s("div",{staticClass:"tou"},[s("img",{attrs:{src:t.user.avatar_url,alt:""}}),s("span",[t._v(t._s(t.user.loginname))])]),s("span",{staticClass:"score"},[t._v(t._s(t.user.score)+"  积分")]),s("span",{staticClass:"create-at"},[t._v("注册时间"+t._s(t.myMoment(t.user.create_at)))])]),s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[t._v("最近创建的话题")]),t._l(t.user.recent_topics,function(e){return s("div",{key:e.id,staticClass:"cell"},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url,alt:""}})]),s("div",{staticClass:"count"},[s("span",{staticClass:"reply-count"},[t._v(t._s(e.reply_count))]),s("span"),s("span",{staticClass:"visit-count"},[t._v(t._s(e.visit_count))])]),s("div",{staticClass:"title"},[s("router-link",{attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))])],1),s("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)})],2),s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[t._v("最近参与的话题")]),t._l(t.user.recent_replies,function(e){return s("div",{key:e.id,staticClass:"cell"},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url,alt:""}})]),s("div",{staticClass:"count"},[s("span",{staticClass:"reply-count"},[t._v(t._s(e.reply_count))]),s("span"),s("span",{staticClass:"visit-count"},[t._v(t._s(e.visit_count))])]),s("div",{staticClass:"title"},[s("router-link",{staticClass:"title",attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))])],1),s("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)})],2)]):t._e()},q=[],F={name:"users",data:function(){return{topic:null,user:null,text:""}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.params.loginname;l.a.get("https://www.vue-js.com/api/v1/user/".concat(e)).then(function(e){t.user=e.data.data,console.log(e.data.data)})}}},methods:{myMoment:function(t){return w.a.locale("zh-cn"),w()(t).fromNow()}}},T=F,L=(s("193c"),Object(p["a"])(T,N,q,!1,null,null,null)),U=L.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"public-topic"},[s("div",{staticClass:"head"},[s("router-link",{attrs:{to:"/"}},[t._v("主页")]),s("span",[t._v("/")]),s("span",[t._v("发布话题")])],1),s("div",{staticClass:"main"},[s("span",{staticClass:"span-select"},[t._v("选择板块：")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],attrs:{name:"tab",id:"tab-value"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.tab=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("请选择")]),s("option",{attrs:{value:"weex"}},[t._v("weex")]),s("option",{attrs:{value:"share"}},[t._v("分享")]),s("option",{attrs:{value:"ask"}},[t._v("问答")]),s("option",{attrs:{value:"job"}},[t._v("招聘")])]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title-text",attrs:{name:"title",id:"title",rows:"1",placeholder:"标题字数 10 字以上"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("quill-editor",{ref:"myQuillEditor",staticClass:"content-text",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),s("button",{staticClass:"reply",on:{click:t.submit}},[t._v("提交")])],1)])},A=[],B=(s("a753"),s("8096"),s("14e1"),s("953d")),D={name:"publictopic",components:{quillEditor:B["quillEditor"]},data:function(){return{tab:"",topic:null,title:"",content:"",editorOption:{}}},methods:{submit:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/topics",{title:this.title,content:this.content,tab:this.tab,accesstoken:sessionStorage.getItem("token")}).then(function(e){t.title="",t.content="",t.tab="",t.$router.push("/topic/".concat(e.data.topic_id))})},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,s=t.html,a=t.text;console.log("editor change!",e,s,a),this.content=s}}},G=D,J=(s("abbd"),Object(p["a"])(G,H,A,!1,null,null,null)),R=J.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[s("router-link",{staticClass:"head-home",attrs:{to:"/"}},[t._v("主页")]),s("span",[t._v("/  新消息")])],1),t._l(t.hasNotMessages,function(e){return s("div",{key:e.id,staticClass:"cell"},[s("div",[s("router-link",{staticClass:"title",attrs:{to:"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),s("span",{staticClass:"padding-lr"},[t._v(t._s("at"===e.type?"在话题":"回复了你的话题"))]),s("router-link",{staticClass:"title",attrs:{to:"/topic/"+e.topic.id}},[t._v(t._s(e.topic.title))]),s("span",{staticClass:"padding-lr"},[t._v(t._s("at"===e.type?"中@了你":""))])],1),t._m(0,!0)])}),t.hasNotMessages.length?t._e():s("div",{staticClass:"cell more"},[t._v("无消息")])],2),s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[t._v("过往信息")]),t._l(t.hasMessages,function(e){return s("div",{key:e.id,staticClass:"cell"},[s("router-link",{staticClass:"title",attrs:{to:"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),s("span",{staticClass:"padding-lr"},[t._v(t._s("at"===e.type?"在话题":"回复了你的话题"))]),s("router-link",{staticClass:"title",attrs:{to:"/topics/"+e.topic.id}},[t._v(t._s(e.topic.title))]),s("span",{staticClass:"padding-lr"},[t._v(t._s("at"===e.type?"中@了你":""))]),t._m(1,!0)],1)}),t.hasMessages.length?t._e():s("div",{staticClass:"cell more"},[t._v("无话题")])],2)])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time opcity"},[s("img",{attrs:{src:"https://www.vue-js.com/public/images/checkmark_icon&16.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time"},[s("img",{attrs:{src:"https://www.vue-js.com/public/images/checkmark_icon&16.png",alt:""}})])}],K={name:"message",data:function(){return{hasMessages:[],hasNotMessages:[]}},created:function(){var t=this;l.a.get("https://www.vue-js.com/api/v1/messages?accesstoken=".concat(sessionStorage.getItem("token"))).then(function(e){t.messageNum=e.data.data,console.log(e.data.data),t.hasMessages=e.data.data.has_read_messages,t.hasNotMessages=e.data.data.hasnot_read_messages})}},W=K,X=(s("f87e"),Object(p["a"])(W,Q,V,!1,null,null,null)),Y=X.exports;a["default"].use(g["a"]);var Z=new g["a"]({routes:[{path:"/",component:z},{path:"/topic/create",component:R},{path:"/topic/:id",component:E},{path:"/user/:loginname",component:U},{path:"/messages",component:Y}],mode:"history"}),tt=(s("672e"),s("450d"),s("101e")),et=s.n(tt);a["default"].use(et.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(b)},router:Z}).$mount("#app")},"64a9":function(t,e,s){},"782e":function(t,e,s){},"8b71":function(t,e,s){"use strict";var a=s("e3a2"),n=s.n(a);n.a},"8baf":function(t,e,s){"use strict";var a=s("782e"),n=s.n(a);n.a},"9e3c":function(t,e,s){},"9ec9":function(t,e,s){},abbd:function(t,e,s){"use strict";var a=s("9ec9"),n=s.n(a);n.a},c29e:function(t,e,s){},e3a2:function(t,e,s){},e4a2:function(t,e,s){},f87e:function(t,e,s){"use strict";var a=s("9e3c"),n=s.n(a);n.a}});
//# sourceMappingURL=app.c77575bf.js.map