(this.webpackJsonpreactjwtblog=this.webpackJsonpreactjwtblog||[]).push([[0],{29:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),o=c(20),s=c.n(o),l=c(8),j=c(7),r=c(80),i=c(83),b=c(85);var d=function(){return Object(a.jsxs)(i.a,{variant:"dark",bg:"dark",className:"Nav",expand:"md",sticky:"top",children:[Object(a.jsx)(i.a.Brand,{className:"Nav-brand",href:"/",children:"React-JWT-Blog"}),Object(a.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(b.a,{className:"mr-auto",children:[Object(a.jsx)(b.a.Link,{href:"/",children:"Home"}),Object(a.jsx)(b.a.Link,{href:"/blogs",children:"Blogs"}),Object(a.jsx)(b.a.Link,{href:"/admin/login",children:"Admin Login"}),Object(a.jsx)(b.a.Link,{href:"/admin",children:"Admin Panel"})]})})]})};c(29);var O=function(){return Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"homeInnerDiv",children:[Object(a.jsx)("h1",{className:"pageHeading",children:"Home"}),Object(a.jsx)("p",{className:"homePara",children:"This is the Home Page of my project. The Admin Authenticatin is Handled by using JWT and Blogs are Stored in MongoDB atlas. The Blogs are displayed as per the time and date of creation, press the button below to view blogs at glance"}),Object(a.jsx)(l.b,{to:"/blogs",children:Object(a.jsx)(r.a,{variant:"dark",children:"To Blogs"})})]})]})},h=c(6),u=c(9),x=c.n(u);var g=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(!0),j=Object(h.a)(s,2),r=j[0],i=j[1];return Object(n.useEffect)((function(){x()({method:"GET",url:"".concat("http://localhost:5000","/backend/blogs")}).then((function(e){console.log(e.data),o(e.data),i(!1)})).catch((function(e){console.log(e),i(!0)}))}),[]),Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),c.map((function(e){return Object(a.jsxs)("div",{className:"mapBlogDiv",children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsxs)("p",{children:[e.body.substring(0,400),Object(a.jsx)("br",{}),Object(a.jsx)(l.b,{to:"/blogs/"+e.title,children:"...Click here to view full post"})]}),Object(a.jsx)("hr",{})]},e._id)})),r?Object(a.jsx)("p",{style:{color:"red"},children:"Error Getting Blogs From Server"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("p",{})]})]})};var m=function(){var e=Object(j.f)().post,t=Object(n.useState)([]),c=Object(h.a)(t,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){x()({method:"GET",url:"".concat("http://localhost:5000","/backend/blogstitle/")+e}).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}),[e]),Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"mapBlogDiv",children:[Object(a.jsx)("h1",{children:o.title}),Object(a.jsx)("p",{children:o.body})]})]})},v=c(81),f=c(82),p=c(44);function S(){return Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"adminDiv",children:[Object(a.jsx)("h1",{children:"Admin User is not logged in"}),Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)(r.a,{variant:"dark",children:"Home"})})," ",Object(a.jsx)(l.b,{to:"/blogs",children:Object(a.jsx)(r.a,{variant:"dark",children:"Blogs"})})," ",Object(a.jsx)(l.b,{to:"/admin/login",children:Object(a.jsx)(r.a,{variant:"dark",children:"Login"})})," "]})]})}var k=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"".concat("http://localhost:5000","/backend/authenticate/verify"),data:{token:e}}).then((function(e){!0===e.data.authStatus?o(!0):o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[]),c?Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"adminPanel",children:[Object(a.jsx)("h1",{children:"Admin Panel"}),Object(a.jsx)("br",{}),Object(a.jsxs)(v.a,{children:[Object(a.jsxs)(f.a,{children:[Object(a.jsx)(p.a,{className:"panelCol",md:4,children:Object(a.jsx)(l.b,{to:"/admin/compose",children:Object(a.jsxs)(r.a,{variant:"dark",children:["Compose",Object(a.jsx)("br",{}),"Here You Can Compose New Blogs"]})})}),Object(a.jsx)(p.a,{className:"panelCol",md:4,children:Object(a.jsx)(l.b,{to:"/admin/edit",children:Object(a.jsxs)(r.a,{variant:"dark",children:["Edit",Object(a.jsx)("br",{}),"Here You Can Edit Existing Blogs"]})})}),Object(a.jsx)(p.a,{className:"panelCol",md:4,children:Object(a.jsx)(l.b,{to:"/admin/delete",children:Object(a.jsxs)(r.a,{variant:"dark",children:["Delete",Object(a.jsx)("br",{}),"Here You Can Delete Existing Blogs"]})})})]}),Object(a.jsx)(f.a,{children:Object(a.jsx)(p.a,{className:"panelCol",children:Object(a.jsxs)(r.a,{variant:"dark",onClick:function(){localStorage.removeItem("admin"),window.location="/"},children:["Logout",Object(a.jsx)("br",{}),"Ends Your Admin Session"]})})})]})]})]}):Object(a.jsx)(S,{})},y=c(84);var T=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(""),l=Object(h.a)(s,2),j=l[0],i=l[1],b=Object(n.useState)(!1),O=Object(h.a)(b,2),u=O[0],g=O[1],m=Object(n.useState)(""),v=Object(h.a)(m,2),f=v[0],p=v[1];return Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"adminDiv",children:[Object(a.jsx)("h1",{style:{marginBottom:"5%"},children:"Admin Login"}),Object(a.jsxs)(y.a,{className:"adminForm adminLoginForm",onSubmit:function(e){e.preventDefault(),x()({method:"POST",url:"".concat("http://localhost:5000","/backend/authenticate/login"),data:{username:c,password:j}}).then((function(e){console.log(e.data),!0===e.data.authenticated&&(window.localStorage.setItem("admin",e.data.token),window.location="/admin"),!1===e.data.authenticated&&(g(!0),p(e.data.error))})).catch((function(e){console.log(e),g(!0),p("Error Connecting To Server")}))},children:[Object(a.jsx)(y.a.Label,{children:"Username"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Control,{type:"text",value:c,onChange:function(e){o(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Label,{children:"Password"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Control,{type:"password",autoComplete:"on",value:j,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)(r.a,{variant:"dark",type:"submit",children:"Log In"}),Object(a.jsx)("br",{}),u?Object(a.jsx)("label",{style:{color:"red"},children:f}):Object(a.jsx)("label",{})]})]})]})};var B=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(!1),j=Object(h.a)(s,2),i=j[0],b=j[1],O=Object(n.useState)(""),u=Object(h.a)(O,2),g=u[0],m=u[1],v=Object(n.useState)(""),f=Object(h.a)(v,2),p=f[0],k=f[1],T=Object(n.useState)(""),B=Object(h.a)(T,2),C=B[0],E=B[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"".concat("http://localhost:5000","/backend/authenticate/verify"),data:{token:e}}).then((function(e){!0===e.data.authStatus?o(!0):o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[]),c?Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{textAlign:"center",margin:"2%"},children:"Compose Blog"}),Object(a.jsxs)(y.a,{className:"adminForm",onSubmit:function(e){e.preventDefault(),x()({method:"POST",url:"http://localhost:5000/backend/compose",data:{title:p,content:C}}).then((function(e){console.log(e),!1===e.data.isError?window.location="/admin":!0===e.data.isError&&(b(!0),"Post validation failed: body: Path `body` is required."===e.data.error.message?m("Body Of The Blog Cannot Be Empty"):"Post validation failed: title: Path `title` is required."===e.data.error.message&&m("Title Of The Blog Cannot Be Empty"))})).catch((function(e){console.log(e),b(!0),m("Error Connecting To Server")}))},children:[Object(a.jsx)(y.a.Label,{children:"Title"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Control,{type:"text",onChange:function(e){k(e.target.value)},value:p}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Label,{children:"Body"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Control,{as:"textarea",rows:12,onChange:function(e){E(e.target.value)},value:C}),Object(a.jsx)("br",{}),Object(a.jsx)(r.a,{variant:"dark",type:"submit",children:"Submit"}),i?Object(a.jsx)("p",{style:{color:"red"},children:g}):Object(a.jsx)("p",{}),Object(a.jsx)(l.b,{to:"/admin",children:Object(a.jsx)(r.a,{variant:"dark",children:"Back To Panel"})})]})]})]}):Object(a.jsx)(S,{})};var C=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(!1),j=Object(h.a)(s,2),i=j[0],b=j[1],O=Object(n.useState)(""),u=Object(h.a)(O,2),g=u[0],m=u[1],v=Object(n.useState)("select"),f=Object(h.a)(v,2),p=f[0],k=f[1],T=Object(n.useState)([]),B=Object(h.a)(T,2),C=B[0],E=B[1],w=Object(n.useState)(""),N=Object(h.a)(w,2),P=N[0],L=N[1],D=Object(n.useState)(""),A=Object(h.a)(D,2),H=A[0],I=A[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"".concat("http://localhost:5000","/backend/authenticate/verify"),data:{token:e}}).then((function(e){console.log(e),!0===e.data.authStatus?o(!0):o(!1)})).catch((function(e){console.log(e),o(!1)})),x()({method:"GET",url:"http://localhost:5000/backend/blogs"}).then((function(e){E(e.data)}))}),[]),Object(n.useEffect)((function(){"select"!==p?x()({method:"GET",url:"http://localhost:5000/backend/blogsid/"+p}).then((function(e){L(e.data.title),I(e.data.body)})):(L(""),I(""))}),[p]),c?Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{textAlign:"center",margin:"2%"},children:"Edit Blog"}),Object(a.jsxs)(y.a,{className:"adminForm",onSubmit:function(e){e.preventDefault(),"select"!==p?x()({method:"POST",url:"http://localhost:5000/backend/update/"+p,data:{title:P,content:H}}).then((function(e){console.log(e),!1===e.data.isError?window.location="/admin":!0===e.data.isError&&b(!0)})).catch((function(e){console.log(e),b(!0),m("Error Connecting To Server")})):alert("Please Select Blog To Edit")},children:[Object(a.jsx)(y.a.Label,{children:"Select Blog"}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{onChange:function(e){console.log(e.target.value),k(e.target.value)},children:[Object(a.jsx)("option",{value:"select",children:"Select"}),C.map((function(e){return Object(a.jsx)("option",{value:e._id,children:e.title},e._id)}))]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Label,{children:"Title"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Control,{type:"text",onChange:function(e){L(e.target.value)},value:P}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Label,{children:"Body"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a.Control,{as:"textarea",rows:12,onChange:function(e){I(e.target.value)},value:H}),Object(a.jsx)("br",{}),Object(a.jsx)(r.a,{variant:"dark",type:"submit",children:"Submit"}),i?Object(a.jsx)("p",{children:g}):Object(a.jsx)("p",{}),Object(a.jsx)(l.b,{to:"/admin",children:Object(a.jsx)(r.a,{variant:"dark",children:"Back To Panel"})})]})]}),Object(a.jsx)("br",{})]}):Object(a.jsx)(S,{})},E=c(45);var w=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)("select"),j=Object(h.a)(s,2),i=j[0],b=j[1],O=Object(n.useState)([]),u=Object(h.a)(O,2),g=u[0],m=u[1],v=Object(n.useState)(""),f=Object(h.a)(v,2),p=f[0],k=f[1],y=Object(n.useState)(""),T=Object(h.a)(y,2),B=T[0],C=T[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"".concat("http://localhost:5000","/backend/authenticate/verify"),data:{token:e}}).then((function(e){console.log(e),!0===e.data.authStatus?o(!0):o(!1)})).catch((function(e){console.log(e),o(!1)})),x()({method:"GET",url:"".concat("http://localhost:5000","/backend/blogs")}).then((function(e){m(e.data)}))}),[]),Object(n.useEffect)((function(){"select"!==i?x()({method:"GET",url:"http://localhost:5000/backend/blogsid/"+i}).then((function(e){k(e.data.title),C(e.data.body)})):(k(""),C(""))}),[i]),c?Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{textAlign:"center",margin:"2%"},children:"Delete Blog"}),Object(a.jsxs)("div",{className:"adminForm",children:[Object(a.jsx)(E.a,{children:"Select Blog"}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{onChange:function(e){console.log(e.target.value),b(e.target.value)},children:[Object(a.jsx)("option",{value:"select",children:"Select"}),g.map((function(e){return Object(a.jsx)("option",{value:e._id,children:e.title},e._id)}))]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{style:{color:"rgb(80,80,80)"},children:"Title:"}),Object(a.jsx)("h3",{children:p}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{style:{color:"rgb(80,80,80)"},children:"Body:"}),Object(a.jsx)("p",{children:B}),Object(a.jsx)(r.a,{variant:"dark",onClick:function(){"select"!==i?x()({method:"POST",url:"http://localhost:5000/backend/delete/"+i}).then((function(e){200===e.status&&(console.log("Blog Deleted"),window.location="/admin")})):alert("Select A Blog To Delete")},type:"submit",children:"Delete"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{}),Object(a.jsx)(l.b,{to:"/admin",children:Object(a.jsx)(r.a,{variant:"dark",children:"Back To Panel"})})]})]}),Object(a.jsx)("br",{})]}):Object(a.jsx)(S,{})};var N=function(){return Object(a.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{children:Object(a.jsx)("h1",{style:{textAlign:"center",margin:"2%",marginTop:"40vh"},children:"404 Page Not Found"})})]})};var P=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/blogs",component:g}),Object(a.jsx)(j.a,{path:"/blogs/:post",component:m}),Object(a.jsx)(j.a,{exact:!0,path:"/admin",component:k}),Object(a.jsx)(j.a,{path:"/admin/login",component:T}),Object(a.jsx)(j.a,{path:"/admin/compose",component:B}),Object(a.jsx)(j.a,{path:"/admin/edit",component:C}),Object(a.jsx)(j.a,{path:"/admin/delete",component:w}),Object(a.jsx)(j.a,{exact:!0,path:"/",component:O}),Object(a.jsx)(j.a,{component:N})]})})})};s.a.render(Object(a.jsx)(P,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.92b1ed92.chunk.js.map