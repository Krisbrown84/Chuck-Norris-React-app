(this["webpackJsonpchuck-norris-jokes-app"]=this["webpackJsonpchuck-norris-jokes-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/Chuck-norris.173d39ce.jpg"},20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(12),c=n.n(r),i=(n(25),n(2)),s=n.n(i),u=n(13),l=n(14),h=n(15),m=n(18),p=n(19),d=(n(27),n(16)),k=n.n(d),f=n(17),v=n.n(f),g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={jokes:[],loading:!1},e.componentDidMount=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,k.a.get("https://api.chucknorris.io/jokes/random");case 3:n=t.sent,e.setState({jokes:n.data.value,loading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null," Random Chuck Norris Jokes "),o.a.createElement("img",{src:v.a,alt:"NorrisPic"}),o.a.createElement("button",{onClick:this.componentDidMount},"Generate Random Joke"),o.a.createElement("h2",null,this.state.jokes))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.73160f13.chunk.js.map