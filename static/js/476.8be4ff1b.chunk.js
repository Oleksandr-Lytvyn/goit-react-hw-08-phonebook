"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[476],{9476:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(9439),a=t(2791),s=t(9434),c=t(1686),i=t.n(c),u=t(826),l=function(e){return e.contacts.items},o=function(e){return e.filter},d="ContactForm_form__dhl+T",m=t(3329);function h(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],c=n[1],o=(0,a.useState)(""),h=(0,r.Z)(o,2),f=h[0],p=h[1],v=(0,s.v9)(l),b=(0,s.I0)(),x=function(e){switch(e.target.name){case"name":c(e.currentTarget.value);break;case"number":p(e.currentTarget.value);break;default:return}},j=function(){c(""),p("")};return(0,m.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t=n.elements.name.value,r=n.elements.number.value;if(v.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return j(),i().Notify.info("".concat(t," is already in contacts"));b((0,u.uK)({name:t,number:r})),j()},children:[(0,m.jsx)("label",{children:(0,m.jsx)("input",{value:t,onChange:x,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,m.jsx)("label",{children:(0,m.jsx)("input",{value:f,onChange:x,type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,m.jsx)("button",{type:"submit",children:"Add contacts"})]})}var f="ContactItem_contact_item__2RpSt";function p(e){var n=e.id,t=e.name,r=e.number,a=(0,s.I0)();return(0,m.jsxs)("li",{className:f,children:[(0,m.jsxs)("p",{children:[t," ",r]}),(0,m.jsx)("button",{type:"button",onClick:function(){return a((0,u.GK)(n))},children:"Delete"})]})}var v="ContactList_contacts_list__jhchV";function b(){var e=(0,s.I0)(),n=(0,s.v9)(l);(0,a.useEffect)((function(){e((0,u.yF)())}),[e]);var t=(0,s.v9)(o),r=n.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,m.jsx)("div",{children:n.length>0&&(0,m.jsx)("ul",{className:v,children:r.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,m.jsx)(p,{id:n,name:t,number:r},n)}))})})}var x=t(4808),j="Filter_filter_input__eu2zm";function _(){var e=(0,s.v9)(o),n=(0,s.I0)();return(0,m.jsx)("label",{className:j,children:(0,m.jsx)("input",{type:"text",value:e,placeholder:"Find contact by name",onChange:function(e){return n((0,x.S)(e.target.value))}})})}var g=t(643),C=function(e){return(0,m.jsx)(g._P,{height:"80",width:"80",color:"#4fa94d",radius:"6",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"rings-loading"})},w="Contacts_page_wrapper__qTcQj";function y(){var e=(0,s.v9)((function(e){return e.contacts})),n=e.isLoading,t=e.error;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)("h1",{children:"contacts"}),(0,m.jsx)(h,{}),(0,m.jsx)(_,{}),n&&(0,m.jsx)(C,{}),t&&(0,m.jsxs)("h2",{children:["An error: ",t]}),(0,m.jsx)(b,{})]})})}}}]);
//# sourceMappingURL=476.8be4ff1b.chunk.js.map