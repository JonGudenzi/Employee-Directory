(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),a=r(4),c=r.n(a),i=(r(14),r(3)),o=r.n(i),l=r(5),h=r(6),m=r(7),j=r(9),d=r(8),u=(r(16),new Promise((function(e,t){fetch("https://randomuser.me/api/?results=50").then((function(e){return e.json()})).then((function(t){e(t.results)}))}))),b=r(0),O=function(e){return Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table table-striped table-resposive text-center table-hover",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Profile Image"}),Object(b.jsxs)("th",{children:["First Name",Object(b.jsx)("span",{className:"downArrow",onClick:e.sortByFName,children:"\ud83c\udf34"})]}),Object(b.jsxs)("th",{children:["Last Name",Object(b.jsx)("span",{className:"downArrow",onClick:e.sortByLName,children:"\ud83c\udf34"})]}),Object(b.jsx)("th",{children:"Phone"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Age"})]})}),e.items&&e.employee.map((function(e,t){return Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:e.picture.large,alt:e.name.first})}),Object(b.jsxs)("td",{children:[e.name.first," "]}),Object(b.jsx)("td",{children:e.name.last}),Object(b.jsx)("td",{children:e.phone}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.dob.age})]})},t)}))]})})},f=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("input",{searchTerm:e.searchTerm,type:"text",employee:e.employee,name:"search",placeholder:"Search for Employee",onChange:e.changeHandle})})},p=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(e){var s;return Object(h.a)(this,r),(s=t.call(this,e)).sortByFName=function(){var e=s.state.items.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===s.state.sortOrder?(e.reverse(),s.setState({sortOrder:"ASC"})):s.setState({sortOrder:"DESC"}),s.setState({results:e})},s.sortByLName=function(){var e=s.state.items.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===s.state.sortOrder?(e.reverse(),s.setState({sortOrder:"ASC"})):s.setState({sortOrder:"DESC"}),s.setState({results:e})},s.onChange=function(e){var t=e.target.value.toLowerCase(),r=s.state.items.filter((function(e){return(e.name.first+e.name.last).toLowerCase().includes(t)}));s.setState({employee:r,searchTerm:t})},s.state={items:[],loading:!1,sortOrder:"ASC"},s}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u;case 2:t=e.sent,this.setState({items:t,loading:!0,searchTerm:"",employee:[]});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=(t.items,t.loading);return console.log(this.state.items),r?Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f,{handleChange:function(t){return e.setState({searchTerm:t.target.value})},changeHandle:this.onChange}),Object(b.jsx)(O,{items:this.state.items,employee:this.state.employee,searchTerm:this.state.searchTerm,sortByLName:this.sortByLName,sortByFName:this.sortByFName,handleSearch:this.state.searchTerm})]}):Object(b.jsx)("div",{children:"Loading"})}}]),r}(s.Component);var x=function(){return Object(b.jsxs)("header",{className:"jumbotron jumbotron-aqua",children:[Object(b.jsx)("h1",{className:"display-3",children:"Employee Directory"}),Object(b.jsx)("p",{children:"Click on the \ud83c\udf34 PALM TREES \ud83c\udf34 to filter by first name or last name"}),Object(b.jsx)("p",{children:"or use the search box to narrow your results"})]})},y=(r(18),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,21)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),a(e),c(e)}))});r(19);c.a.render(Object(b.jsxs)(n.a.StrictMode,{children:[Object(b.jsx)(x,{}),Object(b.jsx)(p,{})]}),document.getElementById("root")),y()}},[[20,1,2]]]);
//# sourceMappingURL=main.416f8b22.chunk.js.map