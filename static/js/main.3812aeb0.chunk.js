(this.webpackJsonpget_friends_app=this.webpackJsonpget_friends_app||[]).push([[0],{35:function(e,t,n){e.exports=n(66)},40:function(e,t,n){},41:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),c=(n(40),n(41),n(12)),l=n(13),s=n(15),u=n(14),p=n(9),f=n(8),m=function(e){return r.a.createElement("div",{className:"search-form"},r.a.createElement("div",{className:"search-form__title"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),r.a.createElement("input",{type:"text",className:"search-form__input",onChange:function(t){var n=t.target.value;e.changeInputValue(n)},value:e.inputText,maxLength:"25"}),r.a.createElement(f.b,{to:"/profile/"},r.a.createElement("button",{className:"btn search-form__btn",onClick:e.showProfile},"Show Profile")))},d=n(10),h={inputValue:"",gotProfile:!1,profile:{},profileFriends:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-INPUT-VALUE":return Object(d.a)(Object(d.a)({},e),{},{inputValue:t.inputValue});case"GET-PROFILE":return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile,gotProfile:!0,profileFriends:[]});case"GET-FRIENDS":return Object(d.a)(Object(d.a)({},e),{},{profileFriends:t.friends});default:return e}},E=n(20),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).showProfile=function(){return E.jsonp("https://api.vk.com/method/users.get?user_ids=".concat(e.props.profileId,"&fields=photo_100&access_token=3667a9113667a9113667a911b836150a1a336673667a911688f6547e73321d48e3f1db1&v=5.52")).then((function(t){void 0===t.response||0===t.response.length?alert("Invalid id"):e.props.setProfileToState(t.response[0])}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{changeInputValue:this.props.changeInputValue,inputText:this.props.inputText,showProfile:this.showProfile}))}}]),n}(r.a.Component),g=Object(p.b)((function(e){return{inputText:e.mainData.inputValue,profileId:e.mainData.inputValue}}),{changeInputValue:function(e){return{type:"CHANGE-INPUT-VALUE",inputValue:e}},setProfileToState:function(e){return{type:"GET-PROFILE",profile:e}}})(b),_=function(e){return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__avatar"},r.a.createElement("img",{src:e.profile.photo_100,alt:"",className:"profile__avatar-img"})),r.a.createElement("div",{className:"profile__name"},"name: ".concat(e.profile.first_name," ").concat(e.profile.last_name)),r.a.createElement(f.b,{to:"/profile/friends"},r.a.createElement("button",{onClick:e.showFriends,className:"btn profile__btn"},"Show Friends")))},j=n(2),O=function(e){return r.a.createElement("div",{className:"friends_item"},r.a.createElement("img",{src:e.avtar,alt:"avatar"}),r.a.createElement("div",{className:"friendName"},e.name))},w=function(e){return r.a.createElement("div",{className:"friends-list"},e.friends.map((function(e){return r.a.createElement(O,{avtar:e.photo_50,name:e.first_name+" "+e.last_name,key:e.id})})))},N=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(w,{friends:this.props.friends})}}]),n}(r.a.Component),F=Object(p.b)((function(e){return{friends:e.mainData.profileFriends}}))(N),y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).showFriends=function(){return E.jsonp("https://api.vk.com/method/friends.get?user_id=".concat(e.props.profile.id,"&fields=photo_50&count=1000&access_token=3667a9113667a9113667a911b836150a1a336673667a911688f6547e73321d48e3f1db1&v=5.52")).then((function(t){void 0===t.response?alert("Access denied: this profile is privateAccess denied: this profile is private"):e.props.setFriendsToState(t.response.items)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.gotProfile?r.a.createElement("div",null,r.a.createElement(_,{profile:this.props.profile,showFriends:this.showFriends}),r.a.createElement(j.a,{path:"/profile/friends",render:function(){return r.a.createElement(F,null)}})):r.a.createElement("div",null))}}]),n}(r.a.Component),P=Object(p.b)((function(e){return{profile:e.mainData.profile,gotProfile:e.mainData.gotProfile}}),{setFriendsToState:function(e){return{type:"GET-FRIENDS",friends:e}}})(y);var I=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(j.a,{path:"/profile/",render:function(){return r.a.createElement(P,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(17),T=Object(k.b)({mainData:v}),V=Object(k.c)(T);window.store=V;var D=V;o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:D},r.a.createElement(f.a,null,r.a.createElement(I,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.3812aeb0.chunk.js.map