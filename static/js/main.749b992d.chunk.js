(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(20),o=c.n(n),s=c(7),r=c(8),j=c(80),l=c(83),b=c(85),i=c(1);var d=function(){return Object(i.jsxs)(l.a,{variant:"dark",bg:"dark",className:"Nav",expand:"md",sticky:"top",children:[Object(i.jsx)(l.a.Brand,{className:"Nav-brand",href:"/",children:"React-JWT-Blog"}),Object(i.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(i.jsxs)(b.a,{className:"mr-auto",children:[Object(i.jsx)(b.a.Link,{children:Object(i.jsx)(s.b,{className:"nav-link",to:"/",children:"Home"})}),Object(i.jsx)(b.a.Link,{children:Object(i.jsx)(s.b,{className:"nav-link",to:"/blogs",children:"Blogs"})}),Object(i.jsx)(b.a.Link,{children:Object(i.jsx)(s.b,{className:"nav-link",to:"/admin/login",children:"Admin Login"})}),Object(i.jsx)(b.a.Link,{children:Object(i.jsx)(s.b,{className:"nav-link",to:"/admin",children:"Admin Panel"})})]})})]})};c(29);var O=function(){return Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"homeInnerDiv",children:[Object(i.jsx)("h1",{className:"pageHeading",children:"Home"}),Object(i.jsx)("p",{className:"homePara",children:"This is the Home Page of my project. The Admin Authenticatin is Handled by using JWT and Blogs are Stored in MongoDB atlas. The Blogs are displayed as per the time and date of creation, press the button below to view blogs at glance"}),Object(i.jsx)(s.b,{to:"/blogs",children:Object(i.jsx)(j.a,{variant:"dark",children:"To Blogs"})})]})]})},h=c(6),u=c(9),x=c.n(u);var g=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(!0),r=Object(h.a)(o,2),j=r[0],l=r[1];return Object(a.useEffect)((function(){x()({method:"GET",url:"https://react-jwt-blog-backend.herokuapp.com/backend/blogs"}).then((function(e){console.log(e.data),n(e.data),l(!1)})).catch((function(e){console.log(e),l(!0)}))}),[]),Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),c.map((function(e){return Object(i.jsxs)("div",{className:"mapBlogDiv",children:[Object(i.jsx)("h3",{children:e.title}),Object(i.jsxs)("p",{children:[e.body.substring(0,400),Object(i.jsx)("br",{}),Object(i.jsx)(s.b,{to:"/blogs/"+e.title,children:"...Click here to view full post"})]}),Object(i.jsx)("hr",{})]},e._id)})),j?Object(i.jsx)("p",{style:{color:"red"},children:"Error Getting Blogs From Server"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)("p",{})]})]})};var m=function(){var e=Object(r.f)().post,t=Object(a.useState)([]),c=Object(h.a)(t,2),n=c[0],o=c[1];return Object(a.useEffect)((function(){x()({method:"GET",url:"https://react-jwt-blog-backend.herokuapp.com/backend/blogstitle/"+e}).then((function(e){o(e.data)})).catch((function(e){console.log(e)}))}),[e]),Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"mapBlogDiv",children:[Object(i.jsx)("h1",{children:n.title}),Object(i.jsx)("p",{children:n.body})]})]})},p=c(81),v=c(82),f=c(44);function k(){return Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"adminDiv",children:[Object(i.jsx)("h1",{children:"Admin User is not logged in"}),Object(i.jsx)(s.b,{to:"/",children:Object(i.jsx)(j.a,{variant:"dark",children:"Home"})})," ",Object(i.jsx)(s.b,{to:"/blogs",children:Object(i.jsx)(j.a,{variant:"dark",children:"Blogs"})})," ",Object(i.jsx)(s.b,{to:"/admin/login",children:Object(i.jsx)(j.a,{variant:"dark",children:"Login"})})," "]})]})}var S=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"https://react-jwt-blog-backend.herokuapp.com/backend/authenticate/verify",data:{token:e}}).then((function(e){!0===e.data.authStatus?n(!0):n(!1)})).catch((function(e){console.log(e),n(!1)}))}),[]),c?Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"adminPanel",children:[Object(i.jsx)("h1",{children:"Admin Panel"}),Object(i.jsx)("br",{}),Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(v.a,{children:[Object(i.jsx)(f.a,{className:"panelCol",md:4,children:Object(i.jsx)(s.b,{to:"/admin/compose",children:Object(i.jsxs)(j.a,{variant:"dark",children:["Compose",Object(i.jsx)("br",{}),"Here You Can Compose New Blogs"]})})}),Object(i.jsx)(f.a,{className:"panelCol",md:4,children:Object(i.jsx)(s.b,{to:"/admin/edit",children:Object(i.jsxs)(j.a,{variant:"dark",children:["Edit",Object(i.jsx)("br",{}),"Here You Can Edit Existing Blogs"]})})}),Object(i.jsx)(f.a,{className:"panelCol",md:4,children:Object(i.jsx)(s.b,{to:"/admin/delete",children:Object(i.jsxs)(j.a,{variant:"dark",children:["Delete",Object(i.jsx)("br",{}),"Here You Can Delete Existing Blogs"]})})})]}),Object(i.jsx)(v.a,{children:Object(i.jsx)(f.a,{className:"panelCol",children:Object(i.jsxs)(j.a,{variant:"dark",onClick:function(){localStorage.removeItem("admin"),window.location="/react-jwt-blog.frontend/#/"},children:["Logout",Object(i.jsx)("br",{}),"Ends Your Admin Session"]})})})]})]})]}):Object(i.jsx)(k,{})},y=c(84);var w=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(""),s=Object(h.a)(o,2),r=s[0],l=s[1],b=Object(a.useState)(!1),O=Object(h.a)(b,2),u=O[0],g=O[1],m=Object(a.useState)(""),p=Object(h.a)(m,2),v=p[0],f=p[1];return Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"adminDiv",children:[Object(i.jsx)("h1",{style:{marginBottom:"5%"},children:"Admin Login"}),Object(i.jsxs)(y.a,{className:"adminForm adminLoginForm",onSubmit:function(e){e.preventDefault(),x()({method:"POST",url:"https://react-jwt-blog-backend.herokuapp.com/backend/authenticate/login",data:{username:c,password:r}}).then((function(e){console.log(e.data),!0===e.data.authenticated&&(window.localStorage.setItem("admin",e.data.token),window.location="/react-jwt-blog.frontend/#/admin"),!1===e.data.authenticated&&(g(!0),f(e.data.error))})).catch((function(e){console.log(e),g(!0),f("Error Connecting To Server")}))},children:[Object(i.jsx)(y.a.Label,{children:"Username"}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Control,{type:"text",value:c,onChange:function(e){n(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Label,{children:"Password"}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Control,{type:"password",autoComplete:"on",value:r,onChange:function(e){l(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{variant:"dark",type:"submit",children:"Log In"}),Object(i.jsx)("br",{}),u?Object(i.jsx)("label",{style:{color:"red"},children:v}):Object(i.jsx)("label",{})]})]})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(!1),r=Object(h.a)(o,2),l=r[0],b=r[1],O=Object(a.useState)(""),u=Object(h.a)(O,2),g=u[0],m=u[1],p=Object(a.useState)(""),v=Object(h.a)(p,2),f=v[0],S=v[1],w=Object(a.useState)(""),T=Object(h.a)(w,2),B=T[0],E=T[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"https://react-jwt-blog-backend.herokuapp.com/backend/authenticate/verify",data:{token:e}}).then((function(e){!0===e.data.authStatus?n(!0):n(!1)})).catch((function(e){console.log(e),n(!1)}))}),[]),c?Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{textAlign:"center",margin:"2%"},children:"Compose Blog"}),Object(i.jsxs)(y.a,{className:"adminForm",onSubmit:function(e){e.preventDefault(),x()({method:"POST",url:"https://react-jwt-blog-backend.herokuapp.com/backend/compose",data:{title:f,content:B}}).then((function(e){console.log(e),!1===e.data.isError?window.location="/react-jwt-blog.frontend/#/admin":!0===e.data.isError&&(b(!0),"Post validation failed: body: Path `body` is required."===e.data.error.message?m("Body Of The Blog Cannot Be Empty"):"Post validation failed: title: Path `title` is required."===e.data.error.message&&m("Title Of The Blog Cannot Be Empty"))})).catch((function(e){console.log(e),b(!0),m("Error Connecting To Server")}))},children:[Object(i.jsx)(y.a.Label,{children:"Title"}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Control,{type:"text",onChange:function(e){S(e.target.value)},value:f}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Label,{children:"Body"}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Control,{as:"textarea",rows:12,onChange:function(e){E(e.target.value)},value:B}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{variant:"dark",type:"submit",children:"Submit"}),l?Object(i.jsx)("p",{style:{color:"red"},children:g}):Object(i.jsx)("p",{}),Object(i.jsx)(s.b,{to:"/admin",children:Object(i.jsx)(j.a,{variant:"dark",children:"Back To Panel"})})]})]})]}):Object(i.jsx)(k,{})};var B=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(!1),r=Object(h.a)(o,2),l=r[0],b=r[1],O=Object(a.useState)(""),u=Object(h.a)(O,2),g=u[0],m=u[1],p=Object(a.useState)("select"),v=Object(h.a)(p,2),f=v[0],S=v[1],w=Object(a.useState)([]),T=Object(h.a)(w,2),B=T[0],E=T[1],C=Object(a.useState)(""),N=Object(h.a)(C,2),P=N[0],L=N[1],D=Object(a.useState)(""),A=Object(h.a)(D,2),H=A[0],I=A[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"https://react-jwt-blog-backend.herokuapp.com/backend/authenticate/verify",data:{token:e}}).then((function(e){console.log(e),!0===e.data.authStatus?n(!0):n(!1)})).catch((function(e){console.log(e),n(!1)})),x()({method:"GET",url:"https://react-jwt-blog-backend.herokuapp.com/backend/blogs"}).then((function(e){E(e.data)}))}),[]),Object(a.useEffect)((function(){"select"!==f?x()({method:"GET",url:"https://react-jwt-blog-backend.herokuapp.com/backend/blogsid/"+f}).then((function(e){L(e.data.title),I(e.data.body)})):(L(""),I(""))}),[f]),c?Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{textAlign:"center",margin:"2%"},children:"Edit Blog"}),Object(i.jsxs)(y.a,{className:"adminForm",onSubmit:function(e){e.preventDefault(),"select"!==f?x()({method:"PUT",url:"https://react-jwt-blog-backend.herokuapp.com/backend/update/"+f,data:{title:P,content:H}}).then((function(e){console.log(e),!1===e.data.isError?window.location="/react-jwt-blog.frontend/#/admin":!0===e.data.isError&&b(!0)})).catch((function(e){console.log(e),b(!0),m("Error Connecting To Server")})):alert("Please Select Blog To Edit")},children:[Object(i.jsx)(y.a.Label,{children:"Select Blog"}),Object(i.jsx)("br",{}),Object(i.jsxs)("select",{onChange:function(e){console.log(e.target.value),S(e.target.value)},children:[Object(i.jsx)("option",{value:"select",children:"Select"}),B.map((function(e){return Object(i.jsx)("option",{value:e._id,children:e.title},e._id)}))]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Label,{children:"Title"}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Control,{type:"text",onChange:function(e){L(e.target.value)},value:P}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Label,{children:"Body"}),Object(i.jsx)("br",{}),Object(i.jsx)(y.a.Control,{as:"textarea",rows:12,onChange:function(e){I(e.target.value)},value:H}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{variant:"dark",type:"submit",children:"Submit"}),l?Object(i.jsx)("p",{children:g}):Object(i.jsx)("p",{}),Object(i.jsx)(s.b,{to:"/admin",children:Object(i.jsx)(j.a,{variant:"dark",children:"Back To Panel"})})]})]}),Object(i.jsx)("br",{})]}):Object(i.jsx)(k,{})},E=c(45);var C=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)("select"),r=Object(h.a)(o,2),l=r[0],b=r[1],O=Object(a.useState)([]),u=Object(h.a)(O,2),g=u[0],m=u[1],p=Object(a.useState)(""),v=Object(h.a)(p,2),f=v[0],S=v[1],y=Object(a.useState)(""),w=Object(h.a)(y,2),T=w[0],B=w[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("admin");x()({method:"POST",url:"https://react-jwt-blog-backend.herokuapp.com/backend/authenticate/verify",data:{token:e}}).then((function(e){console.log(e),!0===e.data.authStatus?n(!0):n(!1)})).catch((function(e){console.log(e),n(!1)})),x()({method:"GET",url:"https://react-jwt-blog-backend.herokuapp.com/backend/blogs"}).then((function(e){m(e.data)}))}),[]),Object(a.useEffect)((function(){"select"!==l?x()({method:"GET",url:"https://react-jwt-blog-backend.herokuapp.com/backend/blogsid/"+l}).then((function(e){S(e.data.title),B(e.data.body)})):(S(""),B(""))}),[l]),c?Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{textAlign:"center",margin:"2%"},children:"Delete Blog"}),Object(i.jsxs)("div",{className:"adminForm",children:[Object(i.jsx)(E.a,{children:"Select Blog"}),Object(i.jsx)("br",{}),Object(i.jsxs)("select",{onChange:function(e){console.log(e.target.value),b(e.target.value)},children:[Object(i.jsx)("option",{value:"select",children:"Select"}),g.map((function(e){return Object(i.jsx)("option",{value:e._id,children:e.title},e._id)}))]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{style:{color:"rgb(80,80,80)"},children:"Title:"}),Object(i.jsx)("h3",{children:f}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{style:{color:"rgb(80,80,80)"},children:"Body:"}),Object(i.jsx)("p",{children:T}),Object(i.jsx)(j.a,{variant:"dark",onClick:function(){"select"!==l?x()({method:"DELETE",url:"https://react-jwt-blog-backend.herokuapp.com/backend/delete/"+l}).then((function(e){200===e.status&&(console.log("Blog Deleted"),window.location="/react-jwt-blog.frontend/#/admin")})):alert("Select A Blog To Delete")},type:"submit",children:"Delete"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{}),Object(i.jsx)(s.b,{to:"/admin",children:Object(i.jsx)(j.a,{variant:"dark",children:"Back To Panel"})})]})]}),Object(i.jsx)("br",{})]}):Object(i.jsx)(k,{})};var N=function(){return Object(i.jsxs)("div",{style:{background:" rgb(224, 224, 224)"},children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{children:Object(i.jsx)("h1",{style:{textAlign:"center",margin:"2%",marginTop:"40vh"},children:"404 Page Not Found"})})]})};var P=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(r.c,{children:[Object(i.jsx)(r.a,{exact:!0,path:"/blogs",component:g}),Object(i.jsx)(r.a,{path:"/blogs/:post",component:m}),Object(i.jsx)(r.a,{exact:!0,path:"/admin",component:S}),Object(i.jsx)(r.a,{path:"/admin/login",component:w}),Object(i.jsx)(r.a,{path:"/admin/compose",component:T}),Object(i.jsx)(r.a,{path:"/admin/edit",component:B}),Object(i.jsx)(r.a,{path:"/admin/delete",component:C}),Object(i.jsx)(r.a,{exact:!0,path:"/",component:O}),Object(i.jsx)(r.a,{component:N})]})})})};o.a.render(Object(i.jsx)(P,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.749b992d.chunk.js.map