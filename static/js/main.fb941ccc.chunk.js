(this.webpackJsonpbackdoordemo=this.webpackJsonpbackdoordemo||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(10),o=t.n(r),c=(t(83),t(51)),l=(t(84),t(69)),i=t.n(l),d=t(33),b=t(15),j=t(143),u=t(152),h=t(147),m=function(e){var a;try{a=JSON.parse(e)}catch(t){console.log("Things could look prettier with valid JSON"),a=e}return a},O={display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"1rem 2rem",margin:"1rem",border:"1px solid #aaa",color:"#aaa"},f={createUser:Object(b.a)(Object(b.a)({},O),{},{alignItems:"flex-end",height:"12.5rem",color:"#F5005B",border:"1px solid #F5005B"}),params:Object(b.a)(Object(b.a)({},O),{},{height:"25.5rem"}),config:Object(b.a)(Object(b.a)({},O),{},{height:"16.5rem"})},p=t(3),x=function(e){var a=e.selectedField,t=e.onSubmit,s=Object(n.useState)({firstName:"",lastName:""}),r=Object(c.a)(s,2),o=r[0],l=r[1],i=function(e){var a=e.target,t=a.name,n=a.value;l(Object(b.a)(Object(b.a)({},o),{},Object(d.a)({},t,n)))},m=!(o.firstName&&o.lastName),O="firstName"===a;return Object(p.jsx)(j.a,{style:{margin:"1rem 1rem 0 0"},children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(o)},children:Object(p.jsxs)("fieldset",{style:f.createUser,children:[Object(p.jsx)("legend",{children:"| Create User |"}),Object(p.jsx)(u.a,{focused:O,placeholder:O&&"backdoor({ input })",name:"firstName",label:"First Name",variant:"outlined",value:o.firstName,onChange:i}),Object(p.jsx)(u.a,{focused:!O,placeholder:!O&&"backdoor({ input })",name:"lastName",label:"Last Name",variant:"outlined",value:o.lastName,onChange:i}),Object(p.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",disabled:m,children:"Submit"})]})})})},v=t(155),g=[{label:"First Name",value:"firstName"},{label:"Last Name",value:"lastName"}],k='{\n  "status": 555,\n  "data": {\n    "mocked": "data"\n  }\n}',N='{\n  "message": "kaboom"\n}',y={input:g[0].value,resolvedValue:k,rejectedValue:N,fast:"1000",slow:"5000",separator:"-",enabledInProd:!1,assessor:!1,isBackdoor:!0,doResolve:!0,isFast:!0},w=function(e,a){switch(a.type){case"SET_FIELD":return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},a.field.name,a.field.value));default:return e}},C=function(e){var a=e.state,t=e.handleChange;return Object(p.jsx)(j.a,{style:{margin:"1rem 1rem 0 0"},children:Object(p.jsx)("form",{children:Object(p.jsxs)("fieldset",{style:f.params,children:[Object(p.jsx)("legend",{children:"| backdoor(params) |"}),Object(p.jsx)(u.a,{name:"input",label:"input",variant:"outlined",select:!0,value:a.input,onChange:t,children:g.map((function(e){return Object(p.jsx)(v.a,{value:e.value,children:e.label},e.value)}))}),Object(p.jsx)(u.a,{name:"resolvedValue",label:"resolvedValue",variant:"outlined",multiline:!0,rows:6,value:a.resolvedValue,onChange:t}),Object(p.jsx)(u.a,{name:"rejectedValue",label:"rejectedValue",variant:"outlined",multiline:!0,rows:6,value:a.rejectedValue,onChange:t})]})})})},S=t(148),F=t(153),B=function(e){var a=e.state,t=e.handleChange;return Object(p.jsx)(j.a,{style:{margin:"1rem 1rem 0 0"},children:Object(p.jsx)("form",{children:Object(p.jsxs)("fieldset",{style:f.config,children:[Object(p.jsx)("legend",{children:"| params.config |"}),Object(p.jsx)(u.a,{name:"fast",label:"fast",variant:"outlined",type:"number",value:a.fast,onChange:t}),Object(p.jsx)(u.a,{name:"slow",label:"slow",variant:"outlined",type:"number",value:a.slow,onChange:t}),Object(p.jsx)(u.a,{name:"separator",label:"separator",variant:"outlined",value:a.separator,onChange:t}),Object(p.jsx)(S.a,{control:Object(p.jsx)(F.a,{name:"enabledInProd",checked:a.enabledInProd,onChange:t}),label:"enabledInProd"})]})})})},V=t(149),I=t(113),P=t(154),J=t(150),D=t(151),R=t(52),T=t.n(R),E=Object(V.a)({root:{minWidth:"35%",maxWidth:"50%",marginTop:"1rem"}});function U(e){var a=e.state,t=e.handleChange,n=E();return Object(p.jsxs)("div",{className:n.root,children:[Object(p.jsx)(I.a,{variant:"h5",children:"Assessor"}),Object(p.jsx)(I.a,{variant:"caption",display:"block",children:"Override backdoor's default behaviour with a function that takes in the input and returns an object with these 3 properties:"}),Object(p.jsx)(S.a,{control:Object(p.jsx)(F.a,{name:"assessor",checked:a.assessor,onChange:t}),label:"Use assessor override"}),Object(p.jsxs)(P.a,{children:[Object(p.jsx)(J.a,{expandIcon:Object(p.jsx)(T.a,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header",children:Object(p.jsx)(S.a,{"aria-label":"isBackdoor",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(p.jsx)(F.a,{name:"isBackdoor",checked:a.isBackdoor,onChange:t}),disabled:!a.assessor,label:"isBackdoor"})}),Object(p.jsx)(D.a,{children:Object(p.jsxs)(I.a,{color:"textSecondary",children:[Object(p.jsx)("b",{children:"true"}),": skip the actualThenable and return mocked data after a delay",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"false"}),": execute the actualThenable and do not return mocked data"]})})]}),Object(p.jsxs)(P.a,{children:[Object(p.jsx)(J.a,{expandIcon:Object(p.jsx)(T.a,{}),"aria-label":"Expand","aria-controls":"additional-actions2-content",id:"additional-actions2-header",children:Object(p.jsx)(S.a,{"aria-label":"doResolve",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(p.jsx)(F.a,{name:"doResolve",checked:a.doResolve,onChange:t}),disabled:!a.assessor,label:"doResolve"})}),Object(p.jsx)(D.a,{children:Object(p.jsxs)(I.a,{color:"textSecondary",children:[Object(p.jsx)("b",{children:"true"}),": return the resolvedValue when returning mocked data",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"false"}),": return the rejectedValue when returning mocked data"]})})]}),Object(p.jsxs)(P.a,{children:[Object(p.jsx)(J.a,{expandIcon:Object(p.jsx)(T.a,{}),"aria-label":"Expand","aria-controls":"additional-actions3-content",id:"additional-actions3-header",children:Object(p.jsx)(S.a,{"aria-label":"isFast",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(p.jsx)(F.a,{name:"isFast",checked:a.isFast,onChange:t}),disabled:!a.assessor,label:"isFast"})}),Object(p.jsx)(D.a,{children:Object(p.jsxs)(I.a,{color:"textSecondary",children:["Drives the wait before fulfilling the fake promise",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"true"}),": delay is 1000ms by default (overridable)",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"false"}),": delay is 5000ms by default (overridable)"]})})]})]})}var L=t(72),q=t.n(L),A=function(e){var a=m(e),t=a.status,n=a.data,s="Non-JSON mocked data:\n".concat(a);t&&n&&(s="Server responded [".concat(t,"] with:\n").concat(JSON.stringify(n,null,2))),alert(s)},$=function(e){var a=m(e).message,t="Something didn't go so well, hopefully this will help make sense of what happened:\n".concat(a||e);alert(t)},W=function(e){var a=e.firstName,t=e.lastName,n="?firstName=".concat(a,"&lastName=").concat(t),s="https://backdoorthen-okob4pm0bfqy.runkit.sh/createUser".concat(n);return q.a.get(s)},_=Object(V.a)((function(e){return{command:{color:e.palette.info.main},backdoor:{color:e.palette.secondary.main},optional:{color:e.palette.success.main}}})),M=function(e){var a,t=e.state,n=_(),s="1000"!==t.fast,r="5000"!==t.slow,o=t.separator&&"-"!==t.separator;return(s||r||o||t.enabledInProd||t.assessor)&&(a="{".concat(s?"\n      fast: ".concat(t.fast,","):"").concat(r?"\n      slow: ".concat(t.slow,","):"").concat(o?"\n      separator: ".concat(t.separator,","):"").concat(t.enabledInProd?"\n      enabledInProd: true,":"").concat(t.assessor?"\n      assessor: assessorOverride":"","\n    }")),Object(p.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(I.a,{variant:"h5",children:"Backdoor"}),Object(p.jsxs)(I.a,{className:n.command,variant:"subtitle2",children:["npm i",Object(p.jsx)("span",{className:n.optional,children:" -D "}),Object(p.jsx)("span",{className:n.backdoor,children:" backdoorthen "})]}),Object(p.jsxs)(I.a,{className:n.command,variant:"subtitle2",children:["yarn add",Object(p.jsx)("span",{className:n.optional,children:" -D "}),Object(p.jsx)("span",{className:n.backdoor,children:" backdoorthen "})]})]}),Object(p.jsx)("pre",{children:"import axios from 'axios';\nimport backdoor from 'backdoorthen';"}),Object(p.jsx)("pre",{children:"const createUser = ({\n  firstName,\n  lastName\n}) => {\n  const queryString = `?firstName=${firstName}&lastName=${lastName}`;\n  const url = `https://backdoorthen-okob4pm0bfqy.runkit.sh/createUser${queryString}`;\n  return axios.get(url);\n};"}),t.assessor&&Object(p.jsx)("pre",{children:"const assessorOverride = input => ({\n  isBackdoor: ".concat(t.isBackdoor?"true":"false",",\n  doResolve: ").concat(t.doResolve?"true":"false",",\n  isFast: ").concat(t.isFast?"true":"false","\n});")}),Object(p.jsx)("pre",{children:"const handleSubmit = formData => {\n  const withBackdoor = thenable => backdoor({\n    actualThenable: thenable,\n    input: formData.".concat(t.input,",\n    resolvedValue: ").concat(t.assessor?JSON.stringify(m(k)):JSON.stringify(m(t.resolvedValue)),",\n    rejectedValue: ").concat(t.assessor?JSON.stringify(m(N)):JSON.stringify(m(t.rejectedValue))).concat(a?",\n    config: ".concat(a):"","\n  });\n  withBackdoor(createUser)(formData)\n    .then(handleResponse)\n    .catch(handleError);\n};")})]})},z=t.p+"static/media/onOffAnimation.af7bdcc2.gif";var G=function(){var e=Object(n.useReducer)(w,y),a=Object(c.a)(e,2),t=a[0],s=a[1],r=t.input,o=t.resolvedValue,l=t.rejectedValue,d=t.fast,b=t.slow,j=t.separator,u=t.enabledInProd,h=t.assessor,m=t.isBackdoor,O=t.doResolve,f=t.isFast,v=function(e){var a=e.target,t=a.name,n=a.type,r=a.value,o=a.checked;s({type:"SET_FIELD",field:{name:t,value:"checkbox"===n?o:r}})};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(M,{state:t}),Object(p.jsx)(x,{onSubmit:function(e){var a;(a=W,i()({actualThenable:a,input:e[r],resolvedValue:h?JSON.parse(k):o,rejectedValue:h?JSON.parse(N):l,config:{fast:d,slow:b,separator:j,enabledInProd:u,assessor:h&&function(){return{isBackdoor:m,doResolve:O,isFast:f}}}}))(e).then(A).catch($)},selectedField:t.input}),Object(p.jsx)(C,{state:t,handleChange:v}),Object(p.jsx)(B,{state:t,handleChange:v}),Object(p.jsx)(U,{state:t,handleChange:v}),Object(p.jsx)("div",{style:{flexBasis:"100%",height:"0"}}),Object(p.jsx)("img",{src:z,alt:"Animated gif showing code for a promise with and without backdoor",style:{margin:"5rem 1rem"}})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,157)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,r=a.getLCP,o=a.getTTFB;t(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),H()},83:function(e,a,t){},84:function(e,a,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.fb941ccc.chunk.js.map