(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{7926:function(e,t,a){Promise.resolve().then(a.bind(a,6695))},6695:function(e,t,a){"use strict";a.r(t);var s=a(9268);a(6006);var n=a(554),i=a.n(n),l=a(730),o=a(4751),r=a(6008),c=a(6394),u=a.n(c);t.default=()=>{var e;let t=(0,o.useSession)(),a=(0,r.useRouter)(),{data:n,mutate:c,error:p,isLoading:d}=(0,l.ZP)("/api/posts?username=".concat(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.user.name),function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch(...t).then(e=>e.json())});if("loading"===t.status)return(0,s.jsx)("p",{children:"Loading..."});"unauthenticated"===t.status&&(null==a||a.push("/dashboard/login"));let _=async e=>{e.preventDefault();let a=e.target[0].value,s=e.target[1].value,n=e.target[2].value,i=e.target[3].value;try{await fetch("api/posts",{method:"POST",body:JSON.stringify({title:a,desc:s,img:n,content:i,username:t.data.user.name})}),c(),e.target.reset()}catch(e){console.log(e)}},h=async e=>{try{await fetch("api/posts/".concat(e),{method:"DELETE"}),c()}catch(e){console.log(e)}};if("authenticated"==t.status)return(0,s.jsxs)("div",{className:i().container,children:[(0,s.jsx)("div",{className:i().posts,children:d?"loading":null==n?void 0:n.map(e=>(0,s.jsxs)("div",{className:i().post,children:[(0,s.jsx)("div",{className:i().imgContainer,children:(0,s.jsx)(u(),{src:e.img,alt:"",width:100,height:60})}),(0,s.jsx)("h2",{className:i().postTitle,children:e.title}),(0,s.jsx)("span",{className:i().delete,onClick:()=>h(e._id),children:"X"})]},e._id))}),(0,s.jsxs)("form",{className:i().new,onSubmit:_,children:[(0,s.jsx)("h1",{children:"Add New Post"}),(0,s.jsx)("input",{type:"text",placeholder:"Title",className:i().input}),(0,s.jsx)("input",{type:"text",placeholder:"Desc",className:i().input}),(0,s.jsx)("input",{type:"text",placeholder:"Image",className:i().input}),(0,s.jsx)("textarea",{placeholder:"Content",className:i().textArea,cols:"20",rows:"10"}),(0,s.jsx)("button",{className:i().button,children:"Send"})]})]})}},554:function(e){e.exports={container:"page_container__jMKt5",posts:"page_posts__nIQgX",post:"page_post__To0_v",postTitle:"page_postTitle__zuK6x",img:"page_img__SauGB",delete:"page_delete___yDHY",new:"page_new__oXr4V",input:"page_input__NrIyi",textArea:"page_textArea__a_vkI",button:"page_button__lGp0v"}}},function(e){e.O(0,[962,751,811,253,769,744],function(){return e(e.s=7926)}),_N_E=e.O()}]);