"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[60],{5060:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r=t(9439),i=t(2791),a=t(9434),o=t(2946),s=t(3634),c=t(1598),l=t(3329);function d(){var n=(0,i.useState)(""),e=(0,r.Z)(n,2),t=e[0],d=e[1],u=(0,i.useState)(""),x=(0,r.Z)(u,2),m=x[0],p=x[1],f=(0,a.v9)(o.Af),h=(0,a.I0)(),g=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":d(r);break;case"number":p(r);break;default:return}},b=function(){d(""),p("")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.l0,{onSubmit:function(n){n.preventDefault();var e={name:t,number:m};if(f.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts"));h((0,s.uK)(e)),b()},children:[(0,l.jsxs)(c.L3,{children:["Name",(0,l.jsx)(c.SO,{value:t,type:"text",name:"name",onChange:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)(c.L3,{children:["Number",(0,l.jsx)(c.SO,{value:m,type:"tel",name:"number",onChange:g,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)(c.GX,{type:"submit",disabled:!t||!m,children:"Add contact"})]})})}var u,x,m,p,f,h,g,b,j,v,Z,y,k,w,P,C,z,F,L,A,I=t(8402),S=t(168),N=t(6444),_=N.ZP.div(u||(u=(0,S.Z)(["\n   position: fixed;\n   top: 60%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   & > svg {\n      fill: ",";\n   }\n"])),(function(n){return n.theme.text})),q=function(){return(0,l.jsx)(_,{children:(0,l.jsx)(I.s5,{width:"50",strokeColor:"#000000",strokeWidth:"4",visible:!0})})},G=t(7689),D=N.ZP.ul(x||(x=(0,S.Z)(["\ntext-align: start;\nmargin-bottom: 40px;\n"]))),E=N.ZP.li(m||(m=(0,S.Z)(["\npadding: 2px 5px;\nfont-size: 10px;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nmax-width: 320px;\nmargin-bottom: 5px;\n&:last-child {\n    margin-bottom: 0;\n}\n@media screen and (min-width: 768px) {\nmax-width: 600px;\nfont-size: 18px;\n}\n"]))),J=N.ZP.span(p||(p=(0,S.Z)(["\nmargin-left: 5px;\nfont-size: 12px;\n@media screen and (min-width: 768px) {\nfont-size: 16px;\nmargin-left: 10px;\n}\n"]))),K=(0,N.F4)(f||(f=(0,S.Z)(["\n0% {transform: rotate(0deg)};\n50% {transform: rotate(-30deg)};\n100% {transform: rotate(0deg)};\n"]))),M=(0,N.F4)(h||(h=(0,S.Z)(["\n0% {transform: scale(1)};\n50% {transform: scale(1.1)};\n100% {transform: scale(1)};\n"]))),O=N.ZP.a(g||(g=(0,S.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-left: auto;\nwidth: 20px;\nheight: 20px;\nborder: none;\ncursor: pointer;\ncolor: ",";\n@media screen and (min-width: 768px) {\nwidth: 30px;\nheight: 30px;  \n}\n& > svg {\n    transition: all 0.3s;\n}\n&:hover > svg {\n    fill: green;\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n}\n"])),(function(n){return n.theme.text}),K),R=N.ZP.button(b||(b=(0,S.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-left: 5px;\nbackground-color: transparent;\nborder: none;\ncolor:",";\ncursor: pointer;\n& > svg {\n    transition: all 0.3s;\n}\n&:hover:not(:disabled) > svg, \n&:focus > svg, \n&:active > svg{\n    color: #9c1111;\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n}\n"])),(function(n){return n.theme.text}),M),T=N.ZP.button(j||(j=(0,S.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-left: 5px;\nbackground-color: transparent;\nborder: none;\ncolor:",";\ncursor: pointer;\n& > svg {\n    transition: all 0.3s;\n}\n&:hover:not(:disabled) > svg, \n&:focus > svg, \n&:active > svg{\n    color: #9c1111;\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n}\n"])),(function(n){return n.theme.text}),M),V=N.ZP.p(v||(v=(0,S.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: baseline;\nfont-size: 10px;\n@media screen and (min-width: 768px) {\nfont-size: 18px;\n}\n"]))),X=t(8820),Y=t(9983),B=t(8107),Q=function(n){return n.filter.filter},W=function(){return{filtered:(0,a.v9)(Q)}},$=function(){var n=(0,B.Z)(),e=n.contacts,t=n.isLoading,r=(0,G.s0)(),i=W().filtered,o=(0,a.I0)(),c=function(){var n=i.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().sort((function(n,e){return n.name.localeCompare(e.name)}));return(0,l.jsx)(D,{children:c.map((function(n,e){var i=n.id,a=n.name,c=n.number;return(0,l.jsxs)(E,{children:[(0,l.jsxs)(V,{children:[(0,l.jsxs)("span",{children:[e+1,"."]}),(0,l.jsxs)("span",{children:[a,":"]}),(0,l.jsx)(J,{children:c})]}),(0,l.jsxs)(Y.Pd.Provider,{value:{size:"25px"},children:[(0,l.jsx)(O,{href:"tel:".concat(c),children:(0,l.jsx)(X.Nhm,{})}),(0,l.jsx)(T,{onClick:function(){return r("/contacts/edit/".concat(i))},children:(0,l.jsx)(X.QML,{})}),(0,l.jsx)(R,{disabled:t,onClick:function(){return function(n){o((0,s.GK)(n))}(i)},children:(0,l.jsx)(X.ql3,{})})]})]},i)}))})},H=t(1634),U=N.ZP.div(Z||(Z=(0,S.Z)(["\nmax-width: 400px;\nmargin: 0;\nmargin-bottom: 40px;\ntext-align: start;\n"]))),nn=N.ZP.p(y||(y=(0,S.Z)(["\nfont-size: 22px;\nmargin-bottom: 5px;\n"]))),en=N.ZP.input(k||(k=(0,S.Z)(["\nborder: none;\noutline: none;\nborder-radius: 4px;\ncolor: ",";\nbackground-color: ",";\npadding: 6px;\nmin-width: 200px;\n"])),(function(n){return n.theme.text}),(function(n){return n.theme.input})),tn=function(){var n=(0,a.v9)(Q),e=(0,a.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(U,{children:[(0,l.jsx)(nn,{children:"Find contacts by name"}),(0,l.jsx)(en,{value:n,type:"text",name:"filter",placeholder:"enter for search",onChange:function(n){e((0,H.T)(n.target.value))}})]})})},rn=t(992),an=(t(1174),N.ZP.div(w||(w=(0,S.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nmargin-bottom: 20px;\n"])))),on=N.ZP.h1(P||(P=(0,S.Z)(["\nfont-size: 28px;\nfont-family: 'Rubik Vinyl', cursive;\ncolor: ",";\ntext-shadow: 0 0 2px ",";\ntext-shadow: 1px 1px 2px ",";\n"])),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.main})),sn=N.ZP.h2(C||(C=(0,S.Z)(["\nmargin-bottom: 10px;\ntext-align: start;\nfont-size: 20px;\nfont-family: 'Rubik Vinyl', cursive;\ntext-shadow: 1px 1px 2px ",";\n"])),(function(n){return n.theme.main})),cn=N.ZP.div(z||(z=(0,S.Z)(["\ntext-align: center;\nmargin: 0 auto;\nbackground-color: ",";\n"])),(function(n){return n.theme.body})),ln=N.ZP.p(F||(F=(0,S.Z)(["\nfont-size: 18px;\ncolor: ",";\n"])),(function(n){return n.theme.text})),dn=t(1048),un=t(6448),xn=N.ZP.label(L||(L=(0,S.Z)([' \n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n  margin: 0 0.25rem;\n  & > input[type="checkbox"] {\n    display: none;\n    &:checked + span::before {\n      transform: translateX(25px);\n      background-color: ',";\n    }\n    &:checked + span {\n      background-color: ","f;\n    }\n  }\n  & > span {\n  position: absolute;\n  cursor: pointer;\n  background-color: ",';\n  border-radius: 25px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transition: background-color 0.2s ease;\n  &::before {\n  position: absolute;\n  content: "";\n  left: 2px;\n  top: 2px;\n  width: 21px;\n  height: 21px;\n  background-color: ',";\n  border-radius: 50%;\n  transition: transform 0.3s ease;\n  }\n  }\n"])),(function(n){return n.theme.input}),(function(n){return n.theme.main}),(function(n){return n.theme.main}),(function(n){return n.theme.input})),mn=N.ZP.div(A||(A=(0,S.Z)(["\ndisplay: flex;\nalign-items: center;\n"]))),pn=t(8617),fn=function(){var n=(0,a.v9)(dn.P),e=(0,a.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(mn,{children:(0,l.jsxs)(Y.Pd.Provider,{value:{size:"25px"},children:[(0,l.jsx)(pn.YGJ,{}),(0,l.jsxs)(xn,{children:[(0,l.jsx)("input",{type:"checkbox",checked:n,onChange:function(){e((0,un.D)())}}),(0,l.jsx)("span",{})]}),(0,l.jsx)(pn.Fxr,{})]})})})};function hn(){var n=(0,B.Z)(),e=n.isLoading,t=n.isError,r=(0,rn.Z)().isLoggedIn,o=(0,a.I0)();return(0,i.useEffect)((function(){o((0,s.yF)())}),[o]),(0,l.jsx)(l.Fragment,{children:r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(an,{children:[(0,l.jsx)(on,{children:"Phonebook"}),(0,l.jsx)(fn,{})]}),(0,l.jsx)(d,{}),(0,l.jsxs)(cn,{children:[(0,l.jsx)(sn,{children:"Contacts"}),(0,s.yF)().length>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(tn,{}),(0,l.jsx)($,{})]}):(0,l.jsx)(ln,{children:"Your list is empty... Please add a new contact"}),e&&!t&&(0,l.jsx)(q,{}),t&&(0,l.jsx)("div",{style:{color:"red"},children:"loading error!"})]})]}):(0,l.jsx)(l.Fragment,{children:"please login"})})}}}]);
//# sourceMappingURL=60.7b83bda5.chunk.js.map