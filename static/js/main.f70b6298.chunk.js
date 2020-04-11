(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{29:function(e,t,n){e.exports=n(60)},39:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),s=n(9),i=n(6),l=n(25),u=n(26),h=n(7),p={searchField:""},d={isPending:!1,robots:[],error:""},b=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(h.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(h.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(h.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object(h.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,m=Object(i.e)(b,f(Object(i.a)(u.a,Object(l.createLogger)()))),E=(n(39),n(2)),O=n(3),v=n(4),g=n(5),y=n(13),j=n.n(y),R=n(27),S=n(28),w=n.n(S),_=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),a.a.createElement("h2",null,n),a.a.createElement("p",null,r))}}]),n}(r.Component),C=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).renderRobots=function(){return e.props.robots.map((function(e,t){var n=e.id,r=e.name,o=e.email;return a.a.createElement(_,{key:t,id:n,name:r,email:o})}))},e}return Object(O.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,this.renderRobots())}}]),n}(r.Component);var T=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"900px"}},e.children)},k=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"search robots ... ",onChange:this.props.searchChange}))}}]),n}(r.Component),N=(n(58),n(59),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. There is an error"):this.props.children}}]),n}(r.Component)),F=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).filteredRobots=function(){var t=e.props,n=t.searchField;return t.robots.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange;return e.isPending?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(k,{searchChange:t}),a.a.createElement(T,null,a.a.createElement(N,null,a.a.createElement(C,{robots:this.filteredRobots()}))))}}]),n}(r.Component),P=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,erorr:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(){var e=Object(R.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REQUEST_ROBOTS_PENDING"}),w()("http://jsonplaceholder.typicode.com/users").then((function(e){return t({type:"REQUEST_ROBOTS_SUCCESS",payload:e.data})})).catch((function(e){return t({type:"REQUEST_ROBOTS_FAIL",payload:e.message})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:m},a.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.f70b6298.chunk.js.map