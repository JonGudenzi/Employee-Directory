(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),i=n.n(s),a=(n(12),n(4)),o=n(5),u=n(7),l=n(6),d=(n(13),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={items:[],loading:!1},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=50").then((function(e){return e.json()})).then((function(t){e.setState({items:t.results,loading:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.items;return e.loading?Object(d.jsx)("div",{className:"container",children:t.map((function(e){return Object(d.jsx)("img",{src:e.picture.large,alt:e.name.first})}))}):Object(d.jsx)("div",{children:"Loading"})}}]),n}(r.Component);var h=function(){return Object(d.jsxs)("header",{className:"jumbotron",children:[Object(d.jsx)("h1",{className:"display-3",children:"Employee Directory"}),Object(d.jsx)("p",{className:"lead",children:"Click on carrots to filter by heading or use the search box to narrow your results"}),Object(d.jsx)("p",{className:"lead"})]})},m=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))});n(16);i.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(j,{})]}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.20d284c8.chunk.js.map