(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(258)},124:function(e,t,n){},129:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){},147:function(e,t,n){},252:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(112),c=n.n(o),l=(n(124),n(4)),s=n(5),i=n(8),u=n(6),m=n(7),d=n(113),v=n(9),p=(n(129),n(131),function(e){var t=e.className,n=e.avatar,a=e.size,o=e.onClick,c=void 0===o?function(){}:o,l={height:a,width:"100%",cursor:"pointer"};n&&(l.backgroundImage="url(".concat(n,")"));var s=t?"avatar ".concat(t):"avatar";return r.a.createElement("div",{className:s,style:l,onClick:function(){return c()}})}),f=function(e){var t=e.group,n=e.onClick,a=e.current?{borderColor:"#FFFFFF",borderStyle:"dashed"}:{};return r.a.createElement("div",{className:"choice_group_item",onClick:n,style:a},r.a.createElement(p,{className:"avatar_".concat(t.id),avatar:t.avatar,size:"256px"}),r.a.createElement("div",{className:"choice_group_item_info"},t.name))},h=n(31),E=(n(133),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e)))._btn=r.a.createRef(),n.onClick=n.onClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onClick",value:function(e){var t=this.props.onClick;t&&t(e)}},{key:"render",value:function(){var e=this.props.title;return r.a.createElement("div",{ref:this._btn,onClick:this.onClick,className:"main_button"},r.a.createElement("div",null,r.a.createElement("span",null,e)))}}]),t}(a.Component)),b=n(24),g=n.n(b),y={groups:[{id:1,name:"Black Tomato's",avatar:"/assets/images/group_1.svg",members:[{id:1,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member6.svg",health:70,moral:90,salary:1e4},{id:2,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member8.svg",health:70,moral:90,salary:1e4},{id:3,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member5.svg",health:70,moral:90,salary:1e4},{id:4,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member7.svg",health:70,moral:90,salary:1e4}]},{id:2,name:"\u041c\u043e\u0445\u043d\u0430\u0442\u044b\u0439 \u0448\u043c\u0435\u043b\u044c",avatar:"/assets/images/group_2.svg",members:[{id:1,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member1.svg",health:70,moral:90,salary:1e4},{id:2,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member2.svg",health:70,moral:90,salary:1e4},{id:3,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member3.svg",health:70,moral:90,salary:1e4},{id:4,name:"Ivan Ivanov",bio:"Crazy guy",avatar:"/assets/images/members/member4.svg",health:70,moral:90,salary:1e4}]}],events:[{id:1,date:g()("201801021800","YYYYMMDDhhmm"),place:"Some place",size:50,price:10},{id:2,date:g()("201801031800","YYYYMMDDhhmm"),place:"Some place",size:50,price:10},{id:3,date:g()("201801041800","YYYYMMDDhhmm"),place:"Some place",size:50,price:10}],eventsPromo:[["\u041b\u0438\u0441\u0442\u043e\u0432\u043a\u0438",5],["\u041f\u043b\u0430\u043a\u0430\u0442\u044b",10],["\u0420\u0430\u0434\u0438\u043e",20],["\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442",30],["\u0422\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u0438\u0435",40]]},I=n(32),O=n(117),k=n(58),j=n(12),w="setGroup",C="startGame",_="setSpeed",x="showGroupInfo",L="showEventId",N="setEventId",S="startEventId",M="stopEventId",D="updateEventPromo",B="eventResult",G="setTimeout",F="tick",R="showEventResult",Y={groupIndex:1,group:null,timeout:null,dt:g()("201801031200","YYYYMMDDhhmm"),speed:0,money:100,deltaMoney:0,famous:10,deltaFamous:0,scores:0,showGroupInfo:null,showEventResult:null,showEventId:null,createEventId:null,startEventId:null,stopEventId:null,eventPromo:{},sheduleEventsIds:[],finishEventsIds:{}},P=function(e){return y.events[e-1].date.format("X")},z=function(e){return{type:w,index:e}},A=function(e){return{type:_,speed:e}},T=function(){return{type:C}},U=function(e){return{type:x,showGroupInfo:e}},H=function(e){return console.log(e),{type:R,value:e}},W={show:function(e){return{type:L,index:e}},create:function(e){return{type:N,index:e}},start:function(e){return{type:S,index:e}},stop:function(e){return{type:M,index:e}}},J=function(e,t){return{type:D,price:y.eventsPromo[e][1],eventId:t,promoId:e}},X=Object(I.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.timeout;switch(t.type){case S:console.log(e.sheduleEventsIds),e.sheduleEventsIds.sort(function(e,t){return P(t)-P(e)});var a=e.sheduleEventsIds.pop();return Object(j.a)({},e,{sheduleEventsIds:Object(k.a)(e.sheduleEventsIds),startEventId:a});case N:var r=t.index;console.log("setEventId",t);var o=Object(k.a)(e.sheduleEventsIds);return o.push(r),Object(j.a)({},e,{showEventId:null,sheduleEventsIds:o});case F:var c=e.dt.clone();return c.add(200*e.speed,"minutes"),Object(j.a)({},e,{dt:c});case D:var l=Object(j.a)({},e.eventPromo),s=t.promoId,i=t.eventId,u=t.price;return l[i]?l[i].indexOf(s)>-1?(l[i]=l[i].filter(function(e){return e!==s}),u=-u):l[i].push(s):l[i]=[s],Object(j.a)({},e,{eventPromo:l,money:e.money-u});case L:return Object(j.a)({},e,{showEventId:t.index});case w:return Object(j.a)({},e,{groupIndex:t.index});case _:return t.speed||(clearInterval(n),n=null),Object(j.a)({},e,{timeout:n,speed:t.speed});case G:return Object(j.a)({},e,{timeout:t.timeout});case C:return Object(j.a)({},e,{group:y.groups[e.groupIndex-1]});case x:return Object(j.a)({},e,{showGroupInfo:t.showGroupInfo});case B:console.log(t);var m=t.eventData.size*e.famous*.025;(m+=t.eventData.size*t.promoResult*.01)>t.eventData.size&&(m=t.eventData.size),m<.1*t.eventData.size&&(m=.1*t.eventData.size);var d=m*t.eventData.price;console.log(m),console.log(d);var v=e.famous+m*t.eventScores*.1;return v>1e4&&(v=1e4),e=Object(j.a)({},e,{famous:v,deltaFamous:v-e.famous,money:e.money+d,scores:t.eventScores,deltaMoney:d,startEventId:null,stopEventId:t.eventData.id}),console.log(e),e;case R:return Object(j.a)({},e,{showEventResult:t.value});default:return e}},Object(I.a)(O.a)),Z=function(){return function(e,t){var n=setInterval(function(){var n=t(),a=n.dt;n.sheduleEventsIds.filter(function(e){return y.events[parseInt(e)-1].date.diff(a)<=0}).length?(e(A(0)),e({type:S})):e({type:F})},1e3);e({type:G,timeout:n})}},$=(n(135),y.groups),q=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.groupIndex,n=e.setGroupIndex,a=e.startGame;return r.a.createElement("div",{className:"choice_group_container"},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u0443"),r.a.createElement("div",{className:"choice_group_items"},$.map(function(e){return r.a.createElement(f,{group:e,current:e.id===t,onClick:function(){return n(e.id)},key:"group-choice-".concat(e.id)})}))),r.a.createElement(E,{title:"START",onClick:a}))}}]),t}(a.Component);var K=Object(v.b)(function(e){return{groupIndex:e.groupIndex}},function(e){return{setGroupIndex:function(t){return e(z(t))},startGame:function(){return e(T())}}})(q),Q=(n(137),n(139),function(e){var t=e.content,n=e.active,a=e.onClick,o=n?"circle_button_active":"circle_button";return n?r.a.createElement("div",{className:o},t):r.a.createElement("div",{className:o,onClick:a},t)}),V=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setSpeed",value:function(e){var t=this.props,n=t.setSpeed,a=t.timeout,r=t.tick;a||r(),n(e)}},{key:"render",value:function(){var e=this,t=this.props.speed;return r.a.createElement("div",{className:"speed_control"},r.a.createElement(Q,{content:"P",active:0===t,onClick:function(){return e.setSpeed(0)}}),r.a.createElement(Q,{content:"x1",active:1===t,onClick:function(){return e.setSpeed(1)}}),r.a.createElement(Q,{content:"x2",active:2===t,onClick:function(){return e.setSpeed(2)}}),r.a.createElement(Q,{content:"x3",active:3===t,onClick:function(){return e.setSpeed(3)}}))}},{key:"componentWillUnmount",value:function(){this.setSpeed(0)}}]),t}(a.Component);var ee=Object(v.b)(function(e){return{speed:e.speed,timeout:e.timeout}},function(e){return{setSpeed:function(t){return e(A(t))},tick:function(){return e(Z())}}})(V),te=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.dt,t=e.format("DD.MM.YYYY"),n=e.format("HH:mm");return r.a.createElement("div",null,r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"timer_date"},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"timer_time"},r.a.createElement("span",null,n))),r.a.createElement(ee,null))}}]),t}(a.Component);var ne=Object(v.b)(function(e){return{dt:e.dt}},null)(te),ae=(n(141),n(22)),re=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.group,n=e._showGroupInfo;return r.a.createElement("div",{className:"main_header"},r.a.createElement("div",{className:"main_header_left"},r.a.createElement("div",null,r.a.createElement("div",{className:"rating"},function(e){for(var t=[],n=1;n<=e;n++)t.push(r.a.createElement("span",{className:"fill",key:"start-".concat(n)},"\u2606"));for(;n<=5;n++)t.push(r.a.createElement("span",{key:"start-".concat(n)},"\u2606"));return t}(3)),r.a.createElement(p,{className:"avatar_".concat(t.id),onClick:function(){return n()},size:"12em"})),r.a.createElement(ne,null)),r.a.createElement("div",{className:"money"},"\u20bd ",this.props.money))}}]),t}(a.Component);var oe=Object(ae.a)(function(e){return{money:e.money,famous:e.famous}},function(e){return{_showGroupInfo:function(){return e(U(!0))}}})(re);n(143);var ce=Object(v.b)(null,function(e){return{showEvent:function(t){return e(W.show(t))}}})(function(e){var t=e.showEvent;return r.a.createElement("div",{className:"map"},r.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 429 329",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M355.184 107.059L351.872 88.2922L352.123 79.754L335.059 58.5338L321.97 43.1727",stroke:"white",onClick:console.log("svg click")}),r.a.createElement("path",{d:"M170.143 303.84L86.9925 256.744L75.3749 238.386L75.8215 224.669L62.4529 186.286L73.3735 169.313L59.7546 161.873L64.1459 129.487L89.4367 145.441L90.6336 178.041",stroke:"white"}),r.a.createElement("path",{d:"M286.545 271.425L247.131 259.975L191.371 171.074L183.09 171.031L183.983 107.483",stroke:"white"}),r.a.createElement("path",{d:"M87.4735 369.779L86.8274 255.232L155.523 192.524L146.092 154.931L195.791 142.862L233.782 86.6565L259.882 131.546",stroke:"white"}),r.a.createElement("path",{d:"M109.145 236.537L128.236 242.254L229.564 180.025L270.611 115.553L274.462 87.0618L300.673 73.1719L308.622 70.2475L323.25 43.6313L287.944 38.571L285.019 30.6222L318.05 7.8528",stroke:"white"}),r.a.createElement("path",{d:"M231.139 179.976L248.505 191.106M248.505 191.106L283.985 140.361L282.935 121.636L318.944 98.3023L378.286 110.977L396.348 160.072L371.28 149.653L353.706 162.489L335.003 169.37L261.222 199.699L248.505 191.106Z",stroke:"white"}),r.a.createElement("path",{d:"M111.322 234.943L91.4502 177.886L147.581 154.665L130.115 127.186L135.202 119.122L130.268 114.023L161.969 97.7378L185.039 108.057L203.395 92.7492L235.068 86.962",stroke:"#FCFCFC"}),r.a.createElement("path",{d:"M129.468 243.714L169.525 302.451L213.102 272.393L285.365 271.836L274.832 221.131L260.654 200.885",stroke:"white"}),r.a.createElement("circle",{id:"club1",cx:"24.5",cy:"24.5",r:"11.5",fill:"#D80000",transform:"translate(326.55192,79.690929)",onClick:function(){return t(1)}}),r.a.createElement("g",{filter:"url(#filter0_d)",transform:"translate(326.55192,79.690929)"},r.a.createElement("circle",{cx:"24.5",cy:"24.5",r:"14",stroke:"#D80000"})),r.a.createElement("line",{x1:"24.5",y1:"35",x2:"24.5",y2:"57",stroke:"#D80000",transform:"translate(326.55192,79.690929)"}),r.a.createElement("defs",null,r.a.createElement("filter",{id:"filter0_d",x:"0",y:"0",width:"49",height:"49",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},r.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),r.a.createElement("feOffset",null),r.a.createElement("feGaussianBlur",{stdDeviation:"5"}),r.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}),r.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))),r.a.createElement("circle",{id:"club2",cx:"24.5",cy:"24.5",r:"11.5",fill:"#D80000",transform:"translate(206.639,122.976)",onClick:function(){return t(2)}}),r.a.createElement("g",{filter:"url(#filter0_d)",transform:"translate(206.639,122.976)"},r.a.createElement("circle",{cx:"24.5",cy:"24.5",r:"14",stroke:"#D80000"})),r.a.createElement("line",{x1:"24.5",y1:"35",x2:"24.5",y2:"57",stroke:"#D80000",transform:"translate(206.639,122.976)"}),r.a.createElement("defs",null,r.a.createElement("filter",{id:"filter0_d",x:"0",y:"0",width:"49",height:"49",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},r.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),r.a.createElement("feOffset",null),r.a.createElement("feGaussianBlur",{stdDeviation:"5"}),r.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}),r.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))),r.a.createElement("circle",{id:"club3",cx:"24.5",cy:"24.5",r:"11.5",fill:"#D80000",transform:"translate(105.61963,175.80202)",onClick:function(){return t(3)}}),r.a.createElement("g",{filter:"url(#filter0_d)",transform:"translate(105.61963,175.80202)"},r.a.createElement("circle",{cx:"24.5",cy:"24.5",r:"14",stroke:"#D80000"})),r.a.createElement("line",{x1:"24.5",y1:"35",x2:"24.5",y2:"57",stroke:"#D80000",transform:"translate(105.61963,175.80202)"}),r.a.createElement("defs",null,r.a.createElement("filter",{id:"filter0_d",x:"0",y:"0",width:"49",height:"49",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},r.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),r.a.createElement("feOffset",null),r.a.createElement("feGaussianBlur",{stdDeviation:"5"}),r.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}),r.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))))}),le=n(118),se=(n(145),function(e){var t=e.content,n=e.onClick;return r.a.createElement("div",{className:"menu_item",onClick:n},t)}),ie=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return Object(le.a)(this.props),r.a.createElement("div",{className:"menu"},r.a.createElement(se,{content:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438",onClick:function(){}}),r.a.createElement(se,{content:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",onClick:function(){}}),r.a.createElement(se,{content:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c",onClick:function(){}}),r.a.createElement(se,{content:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d",onClick:function(){}}))}}]),t}(a.Component);var ue=Object(v.b)(function(e){return{}},function(e){return{}})(ie),me=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.group;return r.a.createElement("div",null,r.a.createElement(ce,{onClick:console.log}),r.a.createElement(oe,{group:e}),r.a.createElement(ue,null))}}]),t}(a.Component);var de=Object(v.b)(function(e){return{group:e.group}},null)(me),ve=(n(147),n(33)),pe=n.n(ve),fe=(n(149),n(60),function(e){var t=e.date,n=e.place,a=e.size,o=e.price;return r.a.createElement("div",{className:"event_info_cols"},r.a.createElement("div",null,r.a.createElement("p",null,"\u0414\u0430\u0442\u0430"),r.a.createElement("p",null,"\u0412\u0440\u0435\u043c\u044f"),r.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e"),r.a.createElement("p",null,"\u0412\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"),r.a.createElement("p",null,"\u0426\u0435\u043d\u0430 \u0431\u0438\u043b\u0435\u0442\u0430")),r.a.createElement("div",null,r.a.createElement("p",null,t&&t.format("DD.MM.YYYY")),r.a.createElement("p",null,t&&t.format("HH:mm")),r.a.createElement("p",null,n),r.a.createElement("p",null,a),r.a.createElement("p",null,o)))}),he=function(e){var t=e.set,n=e.setPromo;return r.a.createElement("div",{className:"promo-radio",onClick:n},t?r.a.createElement("div",{className:"promo_enable"}):null)},Ee=function(e){var t=e.promos,n=void 0===t?[]:t,a=e.setPromo,o=void 0===a?function(){}:a;return r.a.createElement("div",{className:"events_promo_items"},r.a.createElement("div",null,y.eventsPromo.map(function(e,t){var a=n.indexOf(t)>-1;return r.a.createElement("div",{key:"prom-0-".concat(t),className:"events_promo_item"},r.a.createElement(he,{set:a,setPromo:function(){return o(t)}})," ",r.a.createElement("span",null,e[0]))}),r.a.createElement("div",{className:"events_promo_item"},r.a.createElement("span",null,"\u0412\u0441\u0435\u0433\u043e"))),r.a.createElement("div",null,y.eventsPromo.map(function(e,t){return r.a.createElement("div",{key:"prom-1-".concat(t),className:"events_promo_item"},r.a.createElement("span",null,e[1]))}),r.a.createElement("div",{className:"events_promo_item"},r.a.createElement("span",null,n.reduce(function(e,t){return e+y.eventsPromo[t][1]},0)))))},be=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showEventId,n=e.updatePromo,a=e.eventPromo,o=e.closeEvent,c=e.createEvent,l=e.sheduleEventsIds.indexOf(t)>-1,s=y.events[t-1],i=l?function(){}:function(e){return n(e,t)};return r.a.createElement("div",{className:"event_info"},r.a.createElement("div",{className:"event_info_container"},r.a.createElement(fe,s),r.a.createElement(Ee,{setPromo:i,promos:a[t]||[]})),r.a.createElement("div",{className:"event_info_control"},r.a.createElement("div",{className:"event_cancel_btn",onClick:o},"\u041e\u0442\u043c\u0435\u043d\u0430"),t&&!l?r.a.createElement(E,{title:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",onClick:function(){return c(t)}}):null))}}]),t}(a.Component);var ge=Object(v.b)(function(e){return{setEventId:e.setEventId,showEventId:e.showEventId,eventPromo:e.eventPromo,sheduleEventsIds:e.sheduleEventsIds}},function(e){return{updatePromo:function(t,n){return e(J(t,n))},createEvent:function(t){return e(W.create(t))},closeEvent:function(){return e(W.show(null))}}})(be),ye=n(18),Ie=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="/assets/images/sprite.png",n="/assets/images/bottle.png",a={scores:0,sprites:[],intervals:[]},r=new ye.Application(640,360,{transparent:!1});document.getElementById("game").appendChild(r.view);var o=new ye.Text("\u041e\u0447\u043a\u0438: 0");o.style=new ye.TextStyle({fill:16777215});var c=ye.Sprite.fromImage("/assets/images/stage.png");c.anchor.x=0,c.anchor.y=0,c.position.x=0,c.position.y=0,r.stage.addChild(c),r.stage.addChild(o);function l(e){a.scores+=10,e.target.visible=!1}function s(e){a.scores-=10,e.target.visible=!1}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16777215,o=ye.Sprite.fromImage(e);o.anchor.set(.5),o.x=r.screen.width*(1-Math.random()),o.y=r.screen.height*(1-Math.random()),o.scale.x=.1,o.scale.y=.1,o.rotation=Math.random(),o.tint=n,o.interactive=!0,o.buttonMode=!0,o.on("pointerdown",t),r.stage.addChild(o),a.sprites.push(o)}function u(e,t,n,a){for(var r=0;r<e;r++)i(t,n,a)}function m(){a.intervals.push(setInterval(u,1500,1,t,l)),a.intervals.push(setInterval(u,2e3,1,n,s,11272192))}ye.settings.SCALE_MODE=ye.SCALE_MODES.NEAREST,r.ticker.add(function(){a.sprites.forEach(function(e,t,n){e.scale.x+=.01,e.scale.y+=.01,e.scale.x>=1.1&&(e.visible=!1)}),function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];o.setText("Score: "+e)}(a.scores)});m(),setInterval(m,5e3),setTimeout(function(){a.sprites.forEach(function(e,t,n){e.visible=!1}),a.intervals.forEach(function(e,t,n){clearInterval(e)}),r.stop(),e.props.eventResult(a.scores,e.props.startEventId,e.props.eventPromo),e.props.showEventResult()},3e3)}},{key:"render",value:function(){return r.a.createElement("div",{id:"game"})}}]),t}(a.Component),Oe=Object(ae.a)(function(e){return{startEventId:e.startEventId,eventPromo:e.eventPromo}},function(e){return{eventResult:function(t,n,a){return e(function(e,t,n){console.log(t,n);var a=n[t],r=0;return a&&(r=a.reduce(function(e,t){return e+y.eventsPromo[t][1]})/10),{type:B,eventScores:e,eventData:y.events[t-1],promoResult:r}}(t,n,a))},showEventResult:function(){return e(H(!0))}}})(Ie),ke=(n(252),n(254),function(e){var t=e.member,n=e.onClick;e.current;return r.a.createElement("div",{className:"member_item",onClick:n},r.a.createElement("div",{className:"member_name"},t.name),r.a.createElement(p,{avatar:t.avatar,size:"256px"}))}),je=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.group;return r.a.createElement("div",{className:"group_view_container"},r.a.createElement("div",null,r.a.createElement("div",{className:"group_members"},e.members.map(function(e){return r.a.createElement(ke,{member:e,onClick:function(){},key:"group-choice-".concat(e.id)})}))))}}]),t}(a.Component),we=(n(256),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.deltaMoney,n=e.deltaFamous,a=e.scores,o=e.hideEventResult,c=a>0,l=c?"result_fire.svg":"result_no_fire.svg";return console.log(t,n),r.a.createElement("div",{className:"event_result"},r.a.createElement("div",{className:"event_result_left",style:{backgroundImage:"url(/assets/images/".concat(l,")")}}),r.a.createElement("div",{className:"event_result_right"},r.a.createElement("h3",null,c?"\u0412\u042b\u0421\u0422\u0423\u041f\u041b\u0415\u041d\u0418\u0415 \u041e\u0413\u041e\u041d\u042c":"\u0412\u042b\u0421\u0422\u0423\u041f\u041b\u0415\u041d\u0418\u0415 \u041d\u0415 \u041e\u0427"),r.a.createElement("div",{className:"event_result_score_items"},r.a.createElement("div",null,r.a.createElement("p",null,"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a"),r.a.createElement("p",null,"\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u044c")),r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("p",null,n))),r.a.createElement(E,{title:c?"\u0423\u0420\u0410":"\u041d\u0423 \u041e\u041a",onClick:o})))}}]),t}(a.Component));var Ce=Object(v.b)(function(e){return{deltaMoney:e.deltaMoney,deltaFamous:e.deltaFamous,scores:e.scores}},function(e){return{hideEventResult:function(){return e(H(!1))}}})(we),_e={backgroundColor:"#161616",width:"50%",height:"50%"},xe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.group,n=e.showEventId,a=e.closeEvent,o=e.showGroupInfo,c=e.hideGroupInfo,l=e.startEventId,s=(e.stopEventId,e.showEventResult),i=e.hideEventResult;return r.a.createElement("div",{className:"App"},t?r.a.createElement(de,null):r.a.createElement(K,null),r.a.createElement(pe.a,{visible:!!n,onClose:a,animation:"slideRight",showCloseButton:!1,customStyles:_e},r.a.createElement(ge,null)),r.a.createElement(pe.a,{visible:!!o,onClose:c,animation:"slideRight",showCloseButton:!1,customStyles:_e},o?r.a.createElement(je,{group:t}):r.a.createElement("div",null)),r.a.createElement(pe.a,{visible:!!l,onClose:function(){},animation:"rotate",showCloseButton:!1,customStyles:{backgroundColor:"#161616",width:640,height:360}},l?r.a.createElement(Oe,null):null),r.a.createElement(pe.a,{visible:!!s,onClose:i,animation:"slideRight",showCloseButton:!1,customStyles:_e},r.a.createElement(Ce,null)))}},{key:"componentDidMount",value:function(){var e=new d.Howl({src:["assets/sounds/group1.mp3"]});e.fade(.1,.5,4e3),e.play()}}]),t}(a.Component);var Le=Object(v.b)(function(e){return{group:e.group,showEventId:e.showEventId,showGroupInfo:e.showGroupInfo,showEventResult:e.showEventResult,startEventId:e.startEventId,stopEventId:e.stopEventId}},function(e){return{closeEvent:function(){return e(W.show(null))},hideGroupInfo:function(){return e(U(!1))},hideEventResult:function(){return e(H(!1))}}})(xe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v.a,{store:X},r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,n){}},[[119,2,1]]]);
//# sourceMappingURL=main.9c8809b6.chunk.js.map