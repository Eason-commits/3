(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Missionmap/index"],{"285d":function(t,i,n){},"3d28":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=(t._self._c,t.list.length),e=t.__map(t.list,(function(i,n){var e=t.__get_orig(i),a=i.des.length;return{$orig:e,g1:a}}));t.$mp.data=Object.assign({},{$root:{g0:n,l0:e}})},a=[]},8280:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={components:{},data:function(){return{drapbottom:0,latitude:"",longitude:"",polylines:[],markers:[],minheight:60,StartY:0,StartX:0,windowHeight:0,drapHeight:0,tiparray:["取件点","送件点","已取件","服务中","未服务"],list:[],platform:"",draptop:0,position:{y:0}}},computed:{polyline:function(){return this.polylines.slice(0)},i18n:function(){return getApp().globalData.$t("index")}},onReady:function(){this.tiparray=[this.i18n.order.qujiandian,this.i18n.order.songjiandian,this.i18n.order.yiqujian,this.i18n.order.fuwuzhong,this.i18n.order.weifuwu],t.setNavigationBarTitle({title:this.i18n.order.renwuditu})},mounted:function(){},onLoad:function(){var i=this;this.minheight=60+getApp().globalData.safeAreaBottom,this.windowHeight=getApp().globalData.windowHeight-getApp().globalData.top-44,this.drapHeight=this.minheight,this.draptop=this.windowHeight/1.5,t.getStorage({key:"alltaskarray",success:function(t){i.list=t.data,i.makeline(i.list),console.log(i.list)}})},methods:{makeline:function(i){var n=t.getStorageSync("mylocation");this.MapContext=t.createMapContext("mymap",this);for(var e=0;e<i.length;e++){var a=i[e];0==e&&(4==a.type||5==a.type?(this.latitude=a.t_lat,this.longitude=a.t_lng):(this.latitude=a.f_lat,this.longitude=a.f_lng,3==a.type&&""==a.f_lng&&(this.latitude=a.t_lat,this.longitude=a.t_lng))),this.getline(a,n)}this.addMarkers(i,n)},getline:function(t,i){var n=this;setTimeout((function(){var e=[];4==t.type||5==t.type?e=[{latitude:i.latitude,longitude:i.longitude},{latitude:t.t_lat,longitude:t.t_lng}]:(e=[{latitude:t.f_lat,longitude:t.f_lng},{latitude:t.t_lat,longitude:t.t_lng}],3==t.type&&""==t.f_lng&&(e=[{latitude:i.latitude,longitude:i.longitude},{latitude:t.t_lat,longitude:t.t_lng}]));var a={points:e,color:"#FF5725",width:4,borderWidth:2,dottedLine:!0};n.polylines.push(a)}),0)},wgs84togcj02:function(t,i){var n=3.141592653589793,e=6378245,a=.006693421622965943,o=this.transformlat(t-105,i-35),s=this.transformlng(t-105,i-35),r=i/180*n,l=Math.sin(r);l=1-a*l*l;var c=Math.sqrt(l);o=180*o/(e*(1-a)/(l*c)*n),s=180*s/(e/c*Math.cos(r)*n);var u=i+o,d=t+s;return[d,u]},transformlat:function(t,i){var n=3.141592653589793,e=2*t-100+3*i+.2*i*i+.1*t*i+.2*Math.sqrt(Math.abs(t));return e+=2*(20*Math.sin(6*t*n)+20*Math.sin(2*t*n))/3,e+=2*(20*Math.sin(i*n)+40*Math.sin(i/3*n))/3,e+=2*(160*Math.sin(i/12*n)+320*Math.sin(i*n/30))/3,e},transformlng:function(t,i){var n=3.141592653589793,e=300+t+2*i+.1*t*t+.1*t*i+.1*Math.sqrt(Math.abs(t));return e+=2*(20*Math.sin(6*t*n)+20*Math.sin(2*t*n))/3,e+=2*(20*Math.sin(t*n)+40*Math.sin(t/3*n))/3,e+=2*(150*Math.sin(t/12*n)+300*Math.sin(t/30*n))/3,e},qudaohang:function(t,i,n,e){this.openLocation("__UNI__7350749",t,i,n)},openLocation:function(i,n,e,a){var o=this.wgs84togcj02(n,e);n=o[0],e=o[1],t.openLocation({latitude:parseFloat(e),longitude:parseFloat(n),success:function(){console.log("success")},fail:function(t){console.log(t)}})},getEl:function(t){return"string"===typeof t||"number"===typeof t?t:WXEnvironment?t.ref:t instanceof HTMLElement?t:t.$el},gotomapdetail:function(i){t.navigateTo({url:"../detailmap/index?oid="+i.id})},touchStart:function(t){this.StartY=t.changedTouches[0].pageY,this.StartX=t.changedTouches[0].pageX},bindstart:function(i){var n=this,e=this.getEl(this.$refs.drapview);obj=Binding.bind({anchor:e,eventType:"pan",props:[{element:e,property:"transform.translateY",expression:"y+".concat(this.position.y)}]},(function(i){if("end"===i.state){if(!i.deltaY)return;n.position.y+=i.deltaY;var a=t.createSelectorQuery().in(n);a.select("#drapview").boundingClientRect((function(t){var i=0;n.position.y<0?t.bottom<n.windowHeight&&(i=-(n.position.y+t.height-n.windowHeight/3)):n.position.y>200&&(i=0-n.position.y);var a="easeInOutCubic(t,".concat(n.position.y,",").concat(i,",").concat(460,")");Binding.bind({eventType:"timing",exitExpression:"t>=".concat(460),props:[{element:e,property:"transform.translateY",expression:a}]},(function(t){"end"!==t.state&&"exit"!==t.state||(n.position.y+=i)}))})).exec()}}))},touchMove:function(t){var i=t.changedTouches[0].pageY-this.StartY,n=t.changedTouches[0].pageX-this.StartX;if(Math.abs(n)>Math.abs(i)&&n>0);else if(Math.abs(n)>Math.abs(i)&&n<0);else if(Math.abs(n)<Math.abs(i)&&i<0){if(this.drapHeight==this.windowHeight||this.drapHeight>this.windowHeight)return}else{if(!(i>0))return;if(this.drapHeight==this.minheight||this.drapHeight<this.minheight)return void(this.drapHeight=this.minheight)}this.drapHeight=this.windowHeight-t.changedTouches[0].pageY},addMarkers:function(t,i){var n=this;setTimeout((function(){for(var e=0;e<t.length;e++){var a,o,s,r,l=t[e],c="../../static/locationimage/cc.png",u="../../static/locationimage/aa.png";4==l.type||5==l.type?(a=i.latitude,s=i.longitude,o=l.t_lat,r=l.t_lng):(a=l.f_lat,s=l.f_lng,o=l.t_lat,r=l.t_lng),1==l.type||2==l.type||3==l.type?(3==l.status&&(c="../../static/locationimage/bb.png"),4==l.status&&(c="../../static/locationimage/cc.png")):(3==l.status&&(c="../../static/locationimage/dd.png",u="../../static/locationimage/dd.png"),4==l.status&&(c="../../static/locationimage/ee.png",u="../../static/locationimage/ee.png"));var d={iconPath:c,label:{content:String(e+1),fontSize:12,anchorX:0,anchorY:-30,textAlign:"center",color:"#FFFFFF",bgColor:"rgba(0,0,0,0)"},id:e+100,width:40,height:40,latitude:a,longitude:s},h={iconPath:u,label:{content:String(e+1),fontSize:12,anchorX:0,anchorY:-30,textAlign:"center",color:"#FFFFFF",bgColor:"rgba(0,0,0,0)"},id:e+200,width:40,height:40,latitude:o,longitude:r};n.markers.push(d),n.markers.push(h),n.markers.length/2==t.length&&n.MapContext.addMarkers({markers:n.markers,clear:!1,success:function(t){},fail:function(t){},complate:function(t){}})}}),0)}}};i.default=n}).call(this,n("543d")["default"])},9678:function(t,i,n){},a81e:function(t,i,n){"use strict";var e=n("9678"),a=n.n(e);a.a},d697:function(t,i,n){"use strict";(function(t,i){var e=n("4ea4");n("5340");e(n("66fd"));var a=e(n("da50"));t.__webpack_require_UNI_MP_PLUGIN__=n,i(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},da50:function(t,i,n){"use strict";n.r(i);var e=n("3d28"),a=n("e115");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("fd74"),n("a81e");var s=n("f0c5"),r=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=r.exports},e115:function(t,i,n){"use strict";n.r(i);var e=n("8280"),a=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},fd74:function(t,i,n){"use strict";var e=n("285d"),a=n.n(e);a.a}},[["d697","common/runtime","common/vendor"]]]);