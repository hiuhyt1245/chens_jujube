(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71fd2e20"],{"522f":function(e,t,s){},"579b":function(e,t,s){"use strict";s("522f")},e9bb:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("nav",[t("ul",{staticClass:"navgation d-flex"},[t("li",{staticClass:"navgation-item"},[t("router-link",{staticClass:"navgation-link",attrs:{to:"/"}},[e._v("HOME ")]),t("span",{},[e._v("/")])],1),t("li",{staticClass:"navgation-item"},[t("router-link",{staticClass:"navgation-link",attrs:{to:"/contact"}},[e._v("CONTACT US ")])],1)])]),t("section",[t("h1",[e._v("聯繫我們")]),t("form",{ref:"form",attrs:{id:"contact_form"},on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[t("div",{staticClass:"title-name d-flex justify-content-between mt-8"},[t("div",{staticClass:"form-row title-wrapper d-flex flex-column"},[t("label",{staticClass:"mb-2",attrs:{for:""}},[e._v("稱謂")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"select-wrapper",attrs:{name:"title",id:"a-type",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.title=t.target.multiple?s:s[0]}}},[t("option",{staticClass:"select-title",attrs:{value:"",disabled:"",selected:""}},[e._v(" 稱謂 ")]),t("option",{attrs:{value:"male"}},[e._v("先生")]),t("option",{attrs:{value:"femail"}},[e._v("小姐")])])]),t("div",{staticClass:"form-row name-wrapper d-flex flex-column"},[t("label",{staticClass:"mb-2",attrs:{for:""}},[e._v("姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{name:"name",id:"name",type:"text",placeholder:"請輸入姓名",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),t("div",{staticClass:"form-row d-flex flex-column mt-8"},[t("label",{staticClass:"mb-2",attrs:{for:""}},[e._v("主旨")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{id:"subject",name:"subject",type:"text",placeholder:"請輸入電子郵件",required:""},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}})]),t("div",{staticClass:"form-row d-flex flex-column mt-8"},[t("label",{staticClass:"mb-2",attrs:{for:""}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",name:"email",type:"text",placeholder:"請輸入電子郵件",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),t("div",{staticClass:"form-row d-flex flex-column mt-8"},[t("label",{staticClass:"mb-2",attrs:{for:""}},[e._v("電話")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{id:"phone",name:"phone",type:"text",placeholder:"請輸入行動電話",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),t("div",{staticClass:"form-row d-flex flex-column mt-8"},[t("label",{staticClass:"mb-2",attrs:{for:""}},[e._v("詢問內容")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"scrollbar",attrs:{id:"note",name:"message",rows:"5",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),t("button",[t("div",{staticClass:"button",attrs:{disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"發送中":"發送")+" ")])])])])])},i=[];const r={_origin:"https://api.emailjs.com"},n=(e,t="https://api.emailjs.com")=>{r._userID=e,r._origin=t},o=(e,t,s)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e.status,this.text=e.responseText}}const m=(e,t,s={})=>new Promise((a,i)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:e})=>{const t=new l(e);200===t.status||"OK"===t.text?a(t):i(t)}),n.addEventListener("error",({target:e})=>{i(new l(e))}),n.open("POST",r._origin+e,!0),Object.keys(s).forEach(e=>{n.setRequestHeader(e,s[e])}),n.send(t)}),c=(e,t,s,a)=>{const i=a||r._userID;o(i,e,t);const n={lib_version:"3.6.2",user_id:i,service_id:e,template_id:t,template_params:s};return m("/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})},d=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},u=(e,t,s,a)=>{const i=a||r._userID,n=d(s);o(i,e,t);const l=new FormData(n);return l.append("lib_version","3.6.2"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),m("/api/v1.0/email/send-form",l)};var p={init:n,send:c,sendForm:u},v=s("2fa3"),f={data(){return{title:"",name:"",subject:"",email:"",phone:"",message:"",isProcessing:!1}},methods:{sendEmail(){this.isProcessing=!0,p.sendForm("service_ID","contact_form",this.$refs.form,"6fUuRFmIvC7jCoayW").then(e=>{console.log("SUCCESS!",e.text),v["a"].fire({icon:"success",title:"發送成功"}),this.title="",this.name="",this.subject="",this.email="",this.phone="",this.message=""},e=>{console.log("FAILED...",e.text),v["a"].fire({icon:"error",title:"無法發送訊息，請稍後再試"}),this.isProcessing=!1})}}},h=f,g=(s("579b"),s("2877")),b=Object(g["a"])(h,a,i,!1,null,"28cd4ce2",null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-71fd2e20.6dec8621.js.map