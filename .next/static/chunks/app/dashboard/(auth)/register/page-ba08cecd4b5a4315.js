(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{6733:function(e,t,n){Promise.resolve().then(n.bind(n,2727))},2727:function(e,t,n){"use strict";n.r(t);var r=n(9268),s=n(6006),a=n(5563),o=n.n(a),i=n(5846),u=n.n(i),c=n(6008);t.default=()=>{let[e,t]=(0,s.useState)(null),n=(0,c.useRouter)(),a=async e=>{e.preventDefault();let r=e.target[0].value,s=e.target[1].value,a=e.target[2].value;try{let e=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:s,password:a})});201===e.status&&n.push("/dashboard/login?success=Account has ben created")}catch(e){t(e),console.log(e)}};return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsxs)("form",{className:o().form,onSubmit:a,children:[(0,r.jsx)("input",{type:"text",placeholder:"username",className:o().input,required:!0}),(0,r.jsx)("input",{type:"email",placeholder:"email",className:o().input,required:!0}),(0,r.jsx)("input",{type:"password",placeholder:"password",className:o().input,required:!0}),(0,r.jsx)("button",{className:o().button,children:"Register"}),e&&"Something went wrong!"]}),(0,r.jsx)("span",{className:o().or,children:"- OR -"}),(0,r.jsx)(u(),{className:o().link,href:"/dashboard/login",children:"Login with an existing account"})]})}},5563:function(e){e.exports={container:"page_container__I_rem",form:"page_form__OuB01",input:"page_input__PzVGF",button:"page_button__A3sU6"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},5846:function(e,t,n){e.exports=n(7477)},6008:function(e,t,n){e.exports=n(794)}},function(e){e.O(0,[477,253,769,744],function(){return e(e.s=6733)}),_N_E=e.O()}]);