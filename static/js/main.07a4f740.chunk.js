(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,c){e.exports={affairs:"Affairs_affairs__2Aqb0",deleteBtn:"Affairs_deleteBtn__JsC7t",btn:"Affairs_btn__1-Fcy",affairDiv:"Affairs_affairDiv__1V9RW",affairName:"Affairs_affairName__qL7oz",affairPriority:"Affairs_affairPriority__1i77q"}},function(e,t,c){e.exports={parent:"header_parent__R15aA",navLink:"header_navLink___KEpy",item:"header_item__3XUFH",triangle:"header_triangle__3V-3E",link:"header_link__37A3b",active:"header_active__1Rq5H"}},function(e,t,c){e.exports={message:"Message_message__3uwl0",messageImg:"Message_messageImg__2Ed-d",ourMessage:"Message_ourMessage__2-KeT",name:"Message_name__2jJ7w",text:"Message_text__39xVd",time:"Message_time__1FFWJ",angle:"Message_angle__m__3g"}},,,,,,function(e,t,c){e.exports={div:"Greeting_div__BkRoV",input:"Greeting_input__3OZb_",btn:"Greeting_btn__28Luh",error:"Greeting_error__2G7gz"}},,,function(e,t,c){e.exports={superInput:"SuperInputText_superInput__skMEb",errorInput:"SuperInputText_errorInput__1ZGaS",error:"SuperInputText_error__1-HcR"}},,,,function(e,t,c){e.exports={blue:"HW4_blue__3dyqE",column:"HW4_column__2JuFR",testSpanError:"HW4_testSpanError__9UKp8"}},function(e,t,c){e.exports={default:"SuperButton_default__1tBfQ",red:"SuperButton_red__1anNa"}},function(e,t,c){e.exports={checkbox:"SuperCheckbox_checkbox__24QcW",spanClassName:"SuperCheckbox_spanClassName__p5MRw"}},function(e,t,c){e.exports={select:"SuperSelect_select__11qKO",option:"SuperSelect_option__2ikaf"}},,,,,,,function(e,t,c){},function(e,t,c){e.exports={"milk-404":"Error404_milk-404__3E28U",error:"Error404_error__dhzT4"}},function(e,t,c){e.exports={input:"SuperRadio_input__18EUL"}},,,,,,function(e,t,c){},,,,,,,,,,,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(17),s=c.n(r),i=(c(41),c(33)),l=c.n(i),o=c(11),j=c(3),d=c(10),u=c.n(d),b=c(0);var h=function(e){return Object(b.jsxs)("div",{className:u.a.message,children:[Object(b.jsx)("img",{className:u.a.messageImg,src:e.avatar,alt:""}),Object(b.jsx)("div",{className:u.a.angle}),Object(b.jsxs)("div",{className:u.a.ourMessage,children:[Object(b.jsx)("div",{className:u.a.name,children:e.name}),Object(b.jsxs)("div",{className:u.a.text,children:[e.message," "]}),Object(b.jsx)("div",{className:u.a.time,children:e.time})]})]})},O="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",v="Some Name ",x="some text  ",f="22:00";var m=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(b.jsx)(h,{avatar:O,name:v,message:x,time:f}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},p=c(2),_=c(8),g=c.n(_);var k=function(e){var t={color:"high"===e.affair.priority?"red":"middle"===e.affair.priority?"yellow":"low"===e.affair.priority?"green":void 0};return Object(b.jsxs)("div",{className:g.a.affairDiv,children:[Object(b.jsx)("div",{className:g.a.affairName,children:e.affair.name}),Object(b.jsxs)("div",{style:t,children:["  ","{ "+e.affair.priority+" }"," "]}),Object(b.jsx)("button",{className:g.a.deleteBtn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(b.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:g.a.affairs,children:[t,Object(b.jsx)("button",{className:g.a.btn,onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{className:g.a.btn,onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{className:g.a.btn,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{className:g.a.btn,onClick:function(){e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(N),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("all"),s=Object(p.a)(r,2),i=s[0],l=s[1],o=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(c,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(C,{data:o,setFilter:l,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(c,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},w=c(15),z=c(16),S=c.n(z),M=function(e){var t=e.name,c=e.setNameCallback,n=e.addUser,a=e.error,r=e.totalUsers;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:S.a.div,children:[Object(b.jsx)("input",{style:{border:a?"1px solid red":"1px solid #695e5e"},value:t,onChange:c,className:S.a.input}),Object(b.jsx)("button",{className:S.a.btn,onClick:n,children:"add"}),Object(b.jsx)("span",{style:{color:"white",fontSize:"20px"},children:r})]}),Object(b.jsx)("div",{className:S.a.error,style:{color:"red"},children:a?"name is required":null})]})},E=function(e){var t=e.users,c=e.addUserCallback,a=Object(n.useState)(""),r=Object(p.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),j=o[0],d=o[1],u=t.length;return Object(b.jsx)(M,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();i(t),d(!1)},addUser:function(){s?(c(s),alert("\u041f\u0440\u0438\u0432\u0435\u0442 "+s+" !"),d(!1),i("")):(i(""),d(!0))},error:j,totalUsers:u})},I=c(54);var A=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(E,{users:c,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};a([].concat(Object(w.a)(c),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},T=c(4),F=c(5),V=c(19),L=c.n(V),B=function(e){e.type;var t=e.onChange,c=e.onChangeText,n=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,l=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(L.a.error," ").concat(i||""),j="".concat(r?L.a.errorInput:L.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(T.a)({type:"text",onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),a&&"Enter"===e.key&&a()},className:j},l)),r&&Object(b.jsx)("span",{className:o,children:r})]})},J=c(23),D=c.n(J),U=c(24),P=c.n(U),R=function(e){var t=e.red,c=e.className,n=Object(F.a)(e,["red","className"]),a="".concat(t?P.a.red:P.a.default," ").concat(c);return Object(b.jsx)("button",Object(T.a)({className:a},n))},G=c(25),W=c.n(G),q=function(e){e.type;var t=e.onChange,c=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),r=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(W.a.checkbox," ").concat(n||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(T.a)({type:"checkbox",onChange:function(e){t&&t(e),c&&c(e.currentTarget.checked)},className:s},r)),a&&Object(b.jsx)("span",{className:W.a.spanClassName,children:a})]})};var H=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],a=t[1],r=c?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(c)},i=Object(n.useState)(!1),l=Object(p.a)(i,2),o=l[0],j=l[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:D.a.column,children:[Object(b.jsx)(B,{value:c,onChangeText:a,onEnter:s,error:r}),Object(b.jsx)(B,{className:D.a.blue}),Object(b.jsx)(R,{children:"default"}),Object(b.jsx)(R,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(R,{disabled:!0,children:"disabled"}),Object(b.jsx)(q,{checked:o,onChangeChecked:j,children:"some text "}),Object(b.jsx)(q,{checked:o,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},K=function(e){e.autoFocus;var t=e.onBlur,c=e.onEnter,a=e.spanProps,r=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(p.a)(s,2),l=i[0],o=i[1],j=a||{},d=j.children,u=j.onDoubleClick,h=j.className,O=Object(F.a)(j,["children","onDoubleClick","className"]),v="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430 ".concat(h);return Object(b.jsx)(b.Fragment,{children:l?Object(b.jsx)(B,Object(T.a)({autoFocus:!0,onBlur:function(e){o(!1),t&&t(e)},onEnter:function(){o(!1),c&&c()}},r)):Object(b.jsx)("span",Object(T.a)(Object(T.a)({onDoubleClick:function(e){o(!0),u&&u(e)},className:v},O),{},{children:d||r.value}))})};function Q(e,t){var c=JSON.stringify(t);localStorage.setItem(e,c)}function X(e,t){var c=t,n=localStorage.getItem(e);return null!==n&&(c=JSON.parse(n)),c}Q("test",{x:"A",y:1});X("test",{x:"",y:0});var Z=function(){Object(n.useEffect)((function(){var e=localStorage.getItem("editable-span-value");e&&a(JSON.parse(e))}),[]);var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(K,{value:c,onChangeText:a,spanProps:{children:c?void 0:"enter text..."}})}),Object(b.jsx)(R,{onClick:function(){Q("editable-span-value",c)},children:"save"}),Object(b.jsx)(R,{onClick:function(){a(X("editable-span-value",""))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var $=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{}),Object(b.jsx)(y,{}),Object(b.jsx)(A,{}),Object(b.jsx)(H,{}),Object(b.jsx)(Z,{})]})},Y=c(34),ee=c.n(Y);var te=function(){return Object(b.jsx)("div",{className:ee.a.error,children:Object(b.jsxs)("svg",{className:"milk-404",viewBox:"0 20 1000 500",children:[Object(b.jsxs)("g",{id:"milk-spill",fill:"#fff",children:[Object(b.jsx)("path",{id:"milk-spill--large",d:"M132.6 317.5c-1.9.5-3.6 1.3-5.2 2.3-7.3 5-1.4 10.3.7 15.8 7.5 19.6-40.9 16.6-46.8 33.5-2.4 6.8-.4 14.6 5.1 20.1 4.8 4.8 11.8 7.6 18.9 9.7 32.8 9.5 72.4 9.2 106.9 10.5 41 1.5 82.3 2.2 123.3 1 6.7-.2 13.6-.5 19.9-2.6 6.3-2.1 11.9-6.4 13.1-11.8 3.1-13.3-19.4-24.5-14.8-37.5 3.8-10.8 20.1-11.6 30.6-15.3 6.4-2.3 12.6-5.7 15.6-10.9 16.9-28.4-57.7-30.5-74.8-30.3-30.2.3-59.9 5.2-89.9 7.1-32.5 2.1-66 1.4-97.8 7.4-1.6.2-3.2.5-4.8 1"}),Object(b.jsx)("path",{id:"milk-spill--right",d:"M435.6 465.7c4.7 1.5 10.5 1.6 15.9 1.7 3.2 0 6.4.1 9.6.1 4.4.1 9.2 0 12.6-1.5 1.2-.6 2.2-1.4 2.3-2.2.2-2-3.9-3.2-7.5-3.4-9.3-.7-15.7-4.4-25.6-2.8-6.3.9-16.7 5.1-7.3 8.1"}),Object(b.jsx)("path",{id:"milk-spill--left",d:"M73.8 321.1c-2.7.4-5.5 1-7.6 2.8-2 1.8-2.9 5.2-1.2 7.3 1.2 1.4 3.1 1.9 4.9 2.3 9.7 1.9 19.6 2.8 29.5 2.7 3 0 6.1-.2 8.8-1.6 5.8-3 0-5.2-2.6-6.8-2.6-1.6-2.9-4.3-4.9-6.2-2.7-2.6-7.7-1.7-11.2-1.6-5.2 0-10.5.3-15.7 1.1"})]}),Object(b.jsxs)("g",{id:"milk-container",children:[Object(b.jsx)("path",{fill:"#f1fbfe",d:"M272.4 473.6V168.4l151.7-16.7v302.6z"}),Object(b.jsx)("path",{fill:"#c2e8f8",d:"M211.6 131.5l60.8 36.9v305.2l-60.8-42.5zm177.8-51.2l-177.8 51.2L242 92.9z"}),Object(b.jsx)("path",{fill:"#f0f9fc",d:"M388.2 56.2c-.5-9.5-8.7-16.8-18.2-16.2l-112 7.4c-9 .6-16 8.1-16 17.1v28.4l147.5-12.5-1.3-24.2z"}),Object(b.jsx)("path",{fill:"#b1dfef",d:"M315.6 97.7l-104 33.8 60.8 36.9z"}),Object(b.jsx)("path",{fill:"#e4f5f9",d:"M272.4 168.4L242 92.9l147.4-12.6 34.7 71.4z"}),Object(b.jsx)("path",{fill:"#5f4b8b",d:"M334.4 306.1c.3 1.5.5 2.9.5 4.3s-.2 2.8-.5 4.4l-2.9.3v6.9c-.8.3-1.5.5-2.3.6-.7.1-1.5.3-2.2.3-.7.1-1.5.1-2.2.2-.7 0-1.5 0-2.3-.1v-6.9l-17.5 2-.9-1.6 14.8-35.3c1.4 0 2.8.2 4.2.5 1.4.3 2.7.9 4 1.8l-10 24.5 5.4-.6v-6.5c.8-.3 1.6-.5 2.3-.6.8-.1 1.5-.3 2.2-.3.7-.1 1.4-.1 2.2-.2.8 0 1.5 0 2.3.1v6.5l2.9-.3zm18.7-28.4c2.5-.3 4.6 0 6.4.8 1.8.8 3.3 2 4.4 3.7 1.2 1.6 2 3.6 2.6 6 .5 2.3.8 4.9.8 7.7s-.3 5.4-.9 7.9c-.6 2.4-1.5 4.6-2.6 6.5-1.2 1.9-2.7 3.4-4.5 4.6-1.8 1.2-4 1.9-6.4 2.2-2.5.3-4.6 0-6.4-.8-1.8-.8-3.3-2-4.4-3.6-1.2-1.6-2-3.6-2.6-5.9-.6-2.3-.9-4.9-.9-7.7s.3-5.4.9-7.9c.6-2.5 1.5-4.7 2.6-6.6 1.2-1.9 2.7-3.5 4.5-4.7s4-1.9 6.5-2.2m-.2 8.8c-1.5.2-2.6 1.2-3.4 3.1-.8 1.9-1.2 4.7-1.2 8.4 0 3.6.4 6.3 1.2 8 .8 1.7 1.9 2.5 3.4 2.4 1.4-.2 2.5-1.2 3.3-3.1.8-1.9 1.2-4.7 1.2-8.3 0-3.7-.4-6.3-1.2-8.1-.8-1.8-1.9-2.6-3.3-2.4m47.7 12c.3 1.5.5 2.9.5 4.3s-.2 2.8-.5 4.4l-2.9.3v6.9c-.8.3-1.5.5-2.3.6-.8.1-1.5.3-2.2.3-.7.1-1.5.1-2.2.2-.8 0-1.5 0-2.3-.1v-6.9l-17.5 2-.9-1.6 14.8-35.3c1.4 0 2.8.2 4.2.5 1.4.3 2.7.9 4 1.8l-10 24.5 5.4-.6v-6.5c.8-.3 1.6-.5 2.3-.6.7-.1 1.5-.3 2.2-.3.7-.1 1.4-.1 2.2-.2.7 0 1.5 0 2.3.1v6.5l2.9-.3zM305.7 336c.7-.2 1.7-.4 3-.7 1.4-.3 3.1-.6 5.1-.8 1.5-.2 3.1-.2 4.6-.1s2.9.5 4.2 1.2c1.2.7 2.3 1.8 3 3.2.8 1.4 1.2 3.4 1.2 5.8 0 2.2-.3 4-.9 5.5-.6 1.5-1.4 2.7-2.4 3.7s-2.2 1.7-3.5 2.2c-1.3.5-2.6.8-4 1-.5.1-1.1.1-1.7.1h-1.2v10.6c-.7.2-1.4.4-2 .6-.6.1-1.2.2-1.7.3-1 .1-2.2.1-3.7 0V336zm7.4 14.5c.1 0 .4.1.7.1.3 0 .7 0 1.1-.1 1.2-.1 2.2-.6 3-1.5.8-.8 1.2-2 1.2-3.6 0-.9-.1-1.7-.4-2.3-.2-.6-.6-1.1-1-1.4-.4-.3-.9-.5-1.5-.6-.6-.1-1.2-.1-1.8 0-.2 0-.4 0-.6.1-.2 0-.5.1-.7.1v9.2zm19.8 15c-.7.2-1.3.4-1.8.5-.5.1-1.1.2-1.6.3-.5.1-1.1.1-1.8.1s-1.4 0-2.3-.1l9.6-33.7c.7-.2 1.4-.3 2.1-.5.6-.1 1.3-.2 2-.3.5-.1 1.1-.1 1.8-.1h2.2l9.5 31.5c-1.6.5-3.1.8-4.3.9-.6.1-1.1.1-1.7.1-.6 0-1.2 0-1.8-.1l-1.6-6.2c-.8.3-1.6.6-2.3.8-.7.2-1.5.3-2.2.4-.7.1-1.3.1-2 .1s-1.4-.1-2.2-.2l-1.6 6.5zm6-24.8l-2.9 12.1c.5.1.9.2 1.4.2h1.3c.5-.1 1-.1 1.4-.3.5-.1 1-.3 1.5-.5l-2.7-11.5zm31.5 2.8c.8-.2 1.5-.4 2.1-.5.6-.1 1.2-.2 1.7-.3.5-.1 1.1-.1 1.8-.1h2v16.6c-1.7.9-3.4 1.5-5 1.9-1.6.4-3.1.7-4.2.8-2.5.3-4.7.1-6.6-.5-1.9-.6-3.5-1.6-4.7-2.9-1.3-1.3-2.2-3-2.9-5-.6-2-.9-4.2-.9-6.6s.3-4.7 1-6.9 1.6-4.1 2.9-5.7c1.2-1.7 2.8-3 4.6-4.1 1.8-1.1 3.9-1.7 6.2-2 1.4-.2 2.7-.2 3.9-.1 1.2.1 2.6.4 4.1.9-.1 1.3-.3 2.5-.6 3.7-.4 1.2-.8 2.3-1.2 3.1-.6-.1-1.1-.3-1.6-.4-.5-.1-.9-.2-1.4-.2-.4 0-.9-.1-1.3-.1s-.9 0-1.4.1c-2.3.3-4.1 1.3-5.4 3.1-1.3 1.8-1.9 4.3-1.9 7.6s.6 5.6 1.8 7.1c1.2 1.5 3.1 2 5.5 1.8l1.5-.3v-11zm28.6-2.6c0 1.1-.1 2.3-.4 3.6l-8.3.9v6.5l10.8-1.2c.3 1.3.4 2.4.4 3.4 0 1.1-.1 2.3-.4 3.6l-18.4 2.1V327l18.1-2.1c.1.7.2 1.3.3 1.8.1.6.1 1.1.1 1.6 0 1-.1 2.2-.3 3.6l-10.5 1.2v5l8.3-.9c.1 1.5.3 2.7.3 3.7m-93.4 32.8c.8-.2 1.5-.4 2.1-.6.6-.1 1.3-.3 1.9-.3.6-.1 1.3-.1 2-.1s1.3.1 1.8.1l12.4 20.8v-22.2c.9-.3 1.8-.5 2.5-.6.7-.2 1.4-.3 2-.3.6-.1 1.2-.1 1.9-.1s1.4 0 2.1.1l-.1 40.4c-.4.2-.9.3-1.5.5-.7.2-1.4.3-2.2.4-.9.1-1.7.1-2.4.1s-1.2-.1-1.5-.1l-12.4-20.7v22.1c-1.6.5-3 .9-4.3 1-1.3.1-2.7.1-4.3 0v-40.5zm34.1 16.5c0-3 .3-5.9 1-8.5.7-2.7 1.7-5 3-7.1 1.4-2 3.1-3.7 5.2-5 2.1-1.3 4.6-2.1 7.5-2.5 2.9-.3 5.4-.1 7.5.8 2.1.8 3.8 2.1 5.2 3.8 1.4 1.7 2.4 3.9 3 6.4.7 2.5 1 5.3 1 8.3 0 3-.3 5.8-1 8.5-.7 2.6-1.7 4.9-3 7-1.4 2-3.1 3.7-5.2 5-2.1 1.3-4.6 2.1-7.5 2.4-2.9.3-5.4.1-7.5-.7-2.1-.8-3.9-2-5.2-3.8-1.4-1.7-2.4-3.8-3-6.3-.7-2.5-1-5.3-1-8.3m23.6-2.7c0-8.2-2.3-12.1-6.8-11.6-4.6.5-6.9 4.9-6.9 13.1 0 4.1.6 7.1 1.7 9 1.1 1.9 2.9 2.7 5.2 2.4 4.5-.4 6.8-4.7 6.8-12.9m20.7-14l-8.9 1c-.3-1.6-.5-3.1-.5-4.4 0-1.2.2-2.7.5-4.4l27.2-3.1c.1.8.2 1.6.3 2.3.1.7.1 1.4.1 2 0 1.2-.1 2.8-.4 4.5l-8.9 1v31.7c-1.9.6-3.4.9-4.7 1-1.3.1-2.9.2-4.7 0v-31.6zM305.6 420l13-1.5c.1.5.1.9.2 1.3 0 .4.1.8.1 1.2 0 .7-.1 1.6-.2 2.6l-7.5.9v4l5.9-.7c.2 1 .3 1.8.3 2.5s-.1 1.6-.3 2.6l-5.9.7v9.2c-1.1.3-2 .5-2.7.6-.8.1-1.7.1-2.7 0V420zm14.4 10.2c0-1.7.2-3.4.6-4.9.4-1.5 1-2.9 1.7-4.1.8-1.2 1.8-2.1 3-2.9 1.2-.8 2.7-1.2 4.3-1.4 1.7-.2 3.1 0 4.3.4 1.2.5 2.2 1.2 3 2.2.8 1 1.4 2.2 1.8 3.7.4 1.4.6 3 .6 4.8s-.2 3.4-.6 4.9c-.4 1.5-1 2.8-1.8 4-.8 1.2-1.8 2.1-3 2.9-1.2.7-2.6 1.2-4.3 1.4-1.7.2-3.1.1-4.3-.4-1.2-.5-2.2-1.2-3-2.2-.8-1-1.4-2.2-1.7-3.6-.4-1.5-.6-3.1-.6-4.8m13.6-1.6c0-4.7-1.3-7-3.9-6.7-2.7.3-4 2.8-4 7.6 0 2.4.3 4.1 1 5.2.6 1.1 1.6 1.6 3 1.4 2.6-.3 3.9-2.8 3.9-7.5m17.2 10.1c-1.7.2-3 .1-4.1-.2-1.1-.4-2-.9-2.6-1.8-.6-.8-1.1-1.9-1.3-3.1-.3-1.3-.4-2.7-.4-4.3V416c.6-.2 1.1-.3 1.5-.4s.8-.1 1.2-.2c.3 0 .7-.1 1.2-.1h1.5v12.6c0 1.1 0 2 .1 2.8.1.8.2 1.4.4 1.8.2.5.5.8.9.9.4.2.9.2 1.5.1s1.2-.2 1.5-.5c.4-.3.7-.6.9-1.1.2-.5.4-1.1.4-1.9.1-.8.1-1.7.1-2.8v-12.6c.6-.2 1.1-.3 1.5-.4.4-.1.8-.1 1.2-.2.4 0 .8-.1 1.2-.1h1.5v13.3c0 1.6-.1 3.1-.4 4.4-.3 1.3-.7 2.5-1.3 3.4-.6 1-1.5 1.8-2.6 2.4-.9.7-2.3 1.1-3.9 1.3m12-25.1c.5-.1.9-.3 1.2-.3.4-.1.7-.1 1.1-.2.4 0 .8-.1 1.2-.1.4 0 .7 0 1 .1l7.1 12v-12.8c.5-.1 1-.3 1.4-.4.4-.1.8-.2 1.2-.2.3 0 .7-.1 1.1-.1.4 0 .8 0 1.2.1V435c-.2.1-.5.2-.9.3-.4.1-.8.2-1.3.2-.5.1-1 .1-1.4 0-.4 0-.7-.1-.9-.1l-7.2-11.9v12.7c-.9.3-1.7.5-2.5.6s-1.6.1-2.5 0v-23.2zm26.3-3.5c3.9-.4 6.8.2 8.8 2.1 2 1.8 3 4.8 3 8.8 0 4.1-1 7.3-3.1 9.4-2 2.2-5.1 3.5-9.1 3.9-1 .1-2 .2-3 .2h-2.8v-23.3c.3-.1.7-.2 1.2-.3l1.5-.3c.6-.1 1.1-.2 1.7-.3.7 0 1.2-.1 1.8-.2m-.7 19.2h.5c.2 0 .4 0 .6-.1.8-.1 1.5-.3 2.3-.6s1.3-.7 1.8-1.3c.5-.6.9-1.3 1.2-2.3.3-.9.4-2.1.4-3.5s-.2-2.5-.5-3.4c-.3-.9-.7-1.6-1.2-2-.5-.5-1.1-.8-1.8-.9-.7-.1-1.4-.2-2.1-.1-.4 0-.7.1-.9.1-.2 0-.3 0-.4.1v14zm15.7-164.6l-102.3 11.7v-94.1l102.3-11.7z"}),Object(b.jsx)("path",{fill:"#7367a4",d:"M216.7 182.1l.6.3c.2.1.4.3.6.4.2.1.4.3.6.5.2.2.4.3.6.5l2 7.4 2.1-4.7.6.3.6.3c.2.1.4.3.6.4.2.2.4.3.6.5l.5 11.9c-.2-.1-.3-.1-.5-.2s-.4-.2-.7-.4c-.3-.2-.7-.5-1.2-.9l-.2-6.9-1.6 3.4c-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.3-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.4l-1.4-5.3-.2 6.6c-.4-.2-.8-.4-1.1-.6-.3-.2-.7-.5-1.1-.9l.5-11.3zm12.4 20c-.3-.2-.8-.6-1.3-1v-11.6c.3.1.5.2.7.4l.6.3c.2.1.4.3.6.4.2.2.4.3.7.6v11.6c-.6-.3-1-.5-1.3-.7m6.9-2.7c.4.4.8.9 1.1 1.3.3.4.6.8.8 1.2.2.4.4.9.5 1.3.1.5.2.9.2 1.5s-.1 1-.3 1.4c-.2.3-.4.6-.8.7-.3.1-.8.1-1.3-.1s-1.1-.4-1.7-.9c-.6-.4-1.1-.8-1.6-1.2l-1.5-1.5c0-.4.1-.7.2-1.1.1-.4.2-.7.3-1.1.9 1 1.6 1.7 2.3 2.2.5.3.9.5 1.1.5.3 0 .4-.2.4-.6 0-.2 0-.3-.1-.5s-.1-.3-.2-.5c-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.4-.4l-.8-.9c-.3-.4-.7-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.4-.8-.5-1.2-.1-.4-.2-.9-.2-1.3 0-.6.1-1 .3-1.4.2-.3.4-.5.7-.7.3-.1.7-.1 1.1 0 .4.1.9.4 1.5.7.5.3.9.7 1.4 1.1l1.4 1.4c0 .3-.1.7-.2 1-.1.4-.2.7-.4.9-.2-.3-.5-.6-.9-1-.3-.4-.7-.7-1.2-1-.2-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.4 0 .3.1.6.3.9.2.3.4.5.6.8l1 1zm7.7 5.1c.4.4.8.9 1.1 1.3.3.4.6.8.8 1.2.2.4.4.9.5 1.3.1.5.2.9.2 1.5s-.1 1-.3 1.4c-.2.3-.4.6-.8.7-.3.1-.8.1-1.3-.1s-1.1-.4-1.7-.9c-.6-.4-1.1-.8-1.6-1.2-.5-.4-.9-.9-1.5-1.5 0-.4.1-.7.2-1.1.1-.4.2-.7.3-1.1.9 1 1.6 1.7 2.3 2.2.5.3.9.5 1.1.5.3 0 .4-.2.4-.6 0-.2 0-.3-.1-.5s-.1-.3-.2-.5c-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.4-.4l-.8-.9c-.3-.4-.7-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.4-.8-.5-1.2-.1-.4-.2-.9-.2-1.3 0-.6.1-1 .3-1.4.2-.3.4-.5.7-.7.3-.1.7-.1 1.1 0 .4.1.9.4 1.5.7.5.3.9.7 1.4 1.1l1.4 1.4c0 .3-.1.7-.2 1-.1.4-.2.7-.4.9-.2-.3-.5-.6-.9-1-.3-.4-.7-.7-1.2-1-.2-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.4 0 .3.1.6.3.9s.4.5.6.8l1 1zm5.3 10.8c-.3-.2-.8-.6-1.3-1v-11.6c.3.1.5.2.7.4l.6.3c.2.1.4.2.6.4.2.2.4.3.7.6V216c-.6-.3-1-.5-1.3-.7m2.9-9.8l.6.3c.2.1.3.2.5.3.2.1.3.2.5.4s.3.3.5.4l3.3 8.6v-6.4c.2.1.5.2.7.3.2.1.4.2.5.3.2.1.3.2.5.4.2.1.4.3.6.5v11.6c-.1 0-.2-.1-.4-.2l-.6-.3c-.2-.2-.4-.3-.6-.5l-.4-.4-3.3-8.5v6.3c-.4-.2-.8-.4-1.1-.6-.3-.2-.7-.5-1.1-.9v-11.6zm14.7 15.1c.3.1.5.2.7.4l.6.3c.2.1.4.2.6.4.2.2.4.4.7.5v5.9c-.6-.1-1.1-.3-1.7-.6-.5-.3-1-.6-1.4-.8-.8-.6-1.6-1.2-2.2-1.9-.6-.7-1.1-1.5-1.6-2.3-.4-.8-.7-1.7-.9-2.5-.2-.9-.3-1.7-.3-2.6 0-.9.1-1.6.3-2.2.2-.6.5-1 .9-1.3.4-.3.9-.4 1.5-.3s1.3.4 2.1.9c.5.3.9.6 1.3 1 .4.3.9.8 1.4 1.4 0 .4-.1.8-.2 1.2-.1.3-.3.6-.4.8l-.5-.5-.4-.4c-.1-.1-.3-.2-.4-.4-.1-.1-.3-.2-.5-.3-.8-.5-1.4-.6-1.8-.3-.4.3-.6 1.1-.6 2.2 0 1.2.2 2.2.6 3 .4.8 1 1.5 1.8 2.1.2.1.3.2.5.3v-4zm-50.4 127c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v17.3l6.2 4.1c.1.6.1 1.1.2 1.5v2.2c0 .4-.1.8-.2 1.3l-11-7.3v-22.3zm15.7 32.8c-.7-.4-1.5-1.1-2.4-1.9v-22.1c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v22.1c-1-.5-1.8-.9-2.4-1.3m5.6-18.7c.4.2.8.4 1.1.5l.9.6c.3.2.7.5 1 .8.4.3.7.5.9.8l6.3 16.3v-12.1c.5.2.9.4 1.3.7.4.2.7.4 1 .6.3.2.6.4 1 .7.3.3.7.6 1.1.9v22.1c-.2-.1-.4-.2-.8-.3-.3-.2-.7-.4-1.1-.6-.5-.3-.9-.6-1.2-.9-.4-.3-.6-.5-.8-.7l-6.3-16.3v12.1c-.8-.3-1.5-.7-2.2-1.2-.6-.4-1.4-1-2.2-1.7v-22.3zm17.8 11.8c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v22.1c-1-.4-1.7-.9-2.4-1.3s-1.5-1.1-2.4-1.9v-22.1zm10.4 17.6l5.1 14.8c-.3-.1-.7-.3-1.2-.6s-1-.6-1.4-.8c-.5-.3-1-.7-1.5-1.1-.5-.4-.9-.7-1.2-1l-4.9-14.4 4.6-7.9c.5.3 1 .5 1.4.7.4.2.8.5 1.2.8.2.1.4.3.7.5s.5.4.7.6c.2.2.5.4.7.6.2.2.4.3.6.5l-4.8 7.3zm-22.6-84.4l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1l.9.6c4.7 3.1 8.6 10.1 8.6 15.6v12.9c0 5.4-3.8 7.3-8.6 4.1m-.9-28.2c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-2.7-1.9-6.2-4.3-7.8l-.9-.6zm.9-7.9l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1 1.2.8 2.1 2.5 2.1 3.9s-1 1.8-2.1 1c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v12.9c.1 5.4-3.7 7.2-8.5 4.1"}),Object(b.jsx)("path",{fill:"#7367a4",d:"M242.7 285.9c-1.2-.8-2.1-2.5-2.1-3.9v-20.2c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v20.2c0 1.4-.9 1.8-2.1 1m.4 57.8l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1l.9.6c4.7 3.1 8.6 10.1 8.6 15.6v12.9c0 5.4-3.8 7.2-8.6 4.1m-.9-28.3c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-2.7-1.9-6.2-4.3-7.8l-.9-.6z"}),Object(b.jsx)("path",{fill:"#7367a4",d:"M242.7 322.9c-1.2-.8-2.1-2.5-2.1-3.9v-20.2c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v20.2c0 1.3-.9 1.7-2.1 1"}),Object(b.jsx)("path",{fill:"#7367a4",d:"M269.5 373.7l-53.6-35.6V206.4l53.6 35.6v131.7zm-49.6-37.6l45.5 30.2V243.9l-45.5-30.2v122.4zm-3.6-174.9v8.2l50.3 29.1v-8.4zm0 222.7v8.2l50.3 29.1v-8.4z"})]}),Object(b.jsxs)("g",{id:"web-page",children:[Object(b.jsx)("path",{fill:"#fff",d:"M399.1 259.1l-92.3 10.6V188l92.3-10.5v19.6z"}),Object(b.jsx)("path",{fill:"#aa9dce",d:"M399.1 184.8l-92.3 10.5V188l92.3-10.5v1.5z"}),Object(b.jsx)("path",{fill:"#fff",d:"M312.9 191.5c0 .8-.6 1.5-1.4 1.6s-1.4-.5-1.4-1.3.6-1.5 1.4-1.6c.8-.1 1.4.5 1.4 1.3m5.6-.6c0 .8-.6 1.5-1.4 1.6-.8.1-1.4-.5-1.4-1.3s.6-1.5 1.4-1.6c.8-.1 1.4.4 1.4 1.3m5.7-.7c0 .8-.6 1.5-1.4 1.6-.8.1-1.4-.5-1.4-1.3s.6-1.5 1.4-1.6c.8-.1 1.4.5 1.4 1.3"})]}),Object(b.jsxs)("g",{id:"milk-face",children:[Object(b.jsx)("path",{id:"mouth-frown",fill:"none",stroke:"#4f3e7c","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"4",d:"M368.4 240.8s-15.4-10.5-27.3 3.5"}),Object(b.jsxs)("g",{id:"eyes",children:[Object(b.jsx)("circle",{id:"eye-right-open",cx:"375.3",cy:"215.6",r:"5",fill:"#4f3e7c"}),Object(b.jsx)("circle",{id:"eye-left-open",cx:"330.9",cy:"220",r:"5",fill:"#4f3e7c"})]})]})]})})},ce=c(26),ne=c.n(ce),ae=function(e){var t=e.options,c=e.onChange,n=e.onChangeOption,a=Object(F.a)(e,["options","onChange","onChangeOption"]),r=[null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsx)("option",{className:ne.a.option,children:e},t)}))];return Object(b.jsx)("select",Object(T.a)(Object(T.a)({className:ne.a.select,onChange:function(e){n&&n(e.currentTarget.value),c&&c(e)}},a),{},{children:r}))},re=c(35),se=c.n(re),ie=function(e){e.type;var t=e.name,c=e.options,n=e.value,a=e.onChange,r=e.onChangeOption,s=(Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e.currentTarget.value),a&&a(e)}),i=c?c.map((function(e,c){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{className:se.a.input,type:"radio",name:t,value:e,checked:e===n,onChange:s}),e]},t+"-"+c)})):[];return Object(b.jsx)(b.Fragment,{children:i})},le=["x","y","z"];var oe=function(){var e=Object(n.useState)(le[1]),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(ae,{options:le,value:c,onChangeOption:a})}),Object(b.jsx)("div",{children:Object(b.jsx)(ie,{name:"radio",options:le,value:c,onChangeOption:a})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},je=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(w.a)(e.sort((function(e,t){return e.name>t.name?1:-1}))):"down"===t.payload?Object(w.a)(e.sort((function(e,t){return e.name<t.name?1:-1}))):e;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ue=function(){var e=Object(n.useState)(de),t=Object(p.a)(e,2),c=t[0],a=t[1],r=c.map((function(e){return Object(b.jsxs)("div",{style:{width:"250px",display:"flex",justifyContent:"space-between",marginLeft:"10px"},children:[Object(b.jsx)("span",{children:e.name}),e.age]},e._id)})),s=Object(n.useState)("up"),i=Object(p.a)(s,2),l=i[0],o=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",r,Object(b.jsx)(R,{style:{backgroundColor:"up"===l?"green":""},onClick:function(){a(je(de,{type:"sort",payload:"up"})),o("up")},children:"sort up"}),Object(b.jsx)(R,{style:{backgroundColor:"down"===l?"green":""},onClick:function(){a(je(de,{type:"sort",payload:"down"})),o("down")},children:"sort down"}),Object(b.jsx)(R,{style:{backgroundColor:"check"===l?"green":""},onClick:function(){a(je(de,{type:"check",payload:18})),o("check")},children:"check 18"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var be=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(p.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(!1),j=Object(p.a)(o,2),d=j[0],u=j[1],h=function(){clearInterval(c)},O=null===i||void 0===i?void 0:i.toLocaleTimeString(),v=null===i||void 0===i?void 0:i.toLocaleDateString();return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)},children:O}),d?Object(b.jsx)("div",{children:v}):Object(b.jsx)("br",{}),Object(b.jsx)(R,{onClick:function(){h();var e=window.setInterval((function(){l(new Date)}),1e3);a(e)},children:"start"}),Object(b.jsx)(R,{onClick:h,children:"stop"})]})};var he=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(be,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Oe=c(14),ve={loading:!1},xe=function(e){return{type:"LOADING",loading:e}};var fe=function(){var e=Object(Oe.c)((function(e){return e.loading.loading})),t=Object(Oe.b)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",e?Object(b.jsx)("div",{style:{height:"55px"},children:Object(b.jsx)("img",{style:{height:"50px",width:"50px"},src:"https://goo.su/699V",alt:"\u041a\u0440\u0443\u0442\u0438\u043b\u043a\u0430"})}):Object(b.jsx)("div",{style:{height:"55px"},children:Object(b.jsx)(R,{onClick:function(){t(xe(!0)),setTimeout((function(){t(xe(!1))}),2e3)},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var me=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(oe,{}),Object(b.jsx)(ue,{}),Object(b.jsx)(he,{}),Object(b.jsx)(fe,{})]})};var pe=function(){return Object(b.jsx)("div",{children:"I pro junior"})},_e="/pre-junior",ge="/junior",ke="/junior-pro";var Ce=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(j.a,{to:_e})}}),Object(b.jsx)(j.b,{path:_e,render:function(){return Object(b.jsx)($,{})}}),Object(b.jsx)(j.b,{path:ge,render:function(){return Object(b.jsx)(me,{})}}),Object(b.jsx)(j.b,{path:ke,render:function(){return Object(b.jsx)(pe,{})}}),Object(b.jsx)(j.b,{render:function(){return Object(b.jsx)(te,{})}})]})})},Ne=c(9),ye=c.n(Ne);var we=function(){return Object(b.jsx)("div",{className:ye.a.parent,children:Object(b.jsxs)("div",{className:ye.a.navLink,children:[Object(b.jsx)(o.b,{className:ye.a.link,to:_e,activeClassName:ye.a.active,children:" Pre-Junior"}),Object(b.jsx)(o.b,{className:ye.a.link,to:ge,activeClassName:ye.a.active,children:" Junior "}),Object(b.jsx)(o.b,{className:ye.a.link,to:ke,activeClassName:ye.a.active,children:" Junior+ "}),Object(b.jsx)("div",{className:ye.a.triangle})]})})};var ze=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(we,{}),Object(b.jsx)(Ce,{})]})})};var Se=function(){return Object(b.jsx)("div",{className:l.a.App,children:Object(b.jsx)(ze,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=c(30),Ee=Object(Me.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(T.a)(Object(T.a)({},e),{},{loading:t.loading});default:return e}}}),Ie=Object(Me.b)(Ee),Ae=Ie;window.store=Ie,s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Oe.a,{store:Ae,children:Object(b.jsx)(Se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[52,1,2]]]);
//# sourceMappingURL=main.07a4f740.chunk.js.map