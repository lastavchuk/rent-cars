"use strict";(self.webpackChunkrent_cars=self.webpackChunkrent_cars||[]).push([[252],{7609:function(n,r,e){e(2791);r.Z=e.p+"static/media/sprite.a34d32cb968205ee7a97f322edabbac4.svg"},3535:function(n,r,e){e.d(r,{Z:function(){return d}});var t,a,i,o=e(168),c=e(5867),s=c.ZP.button(t||(t=(0,o.Z)(["\n    width: 100%;\n\n    border-radius: 12px;\n    background-color: #3470ff;\n    color: #ffffff;\n\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n    text-align: center;\n\n    transition: background-color var(--tr-rule);\n\n    &:focus,\n    &:hover {\n        background-color: #0b44cd;\n    }\n\n    ","\n\n    ","\n"])),(function(n){return"primary"===n.$variant&&(0,c.iv)(a||(a=(0,o.Z)(["\n            padding: 12px 0;\n        "])))}),(function(n){return"search"===n.$variant&&(0,c.iv)(i||(i=(0,o.Z)(["\n            width: auto;\n            padding: 14px 44px;\n        "])))})),l=e(3329);function d(n){var r=n.onClick,e=void 0===r?null:r,t=n.text,a=n.type,i=void 0===a?"button":a,o=n.$variant,c=void 0===o?"primary":o;return(0,l.jsx)(s,{type:i,onClick:e,$variant:c,children:t})}},517:function(n,r,e){e.d(r,{Z:function(){return H}});var t,a,i,o,c,s,l,d,f=e(9434),p=e(6351),u=e(168),x=e(5867),h=x.ZP.ul(t||(t=(0,u.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 29px;\n    row-gap: 50px;\n"]))),m=x.ZP.button(a||(a=(0,u.Z)(["\n    display: block;\n    margin: 0 auto;\n    margin-top: 100px;\n\n    background-color: transparent;\n    color: #3470ff;\n    font-size: 16px;\n    font-weight: 500;\n    text-decoration-line: underline;\n    transition: color var(--tr-rule);\n\n    &:hover,\n    &:focus {\n        color: #0b44cd;\n    }\n"]))),g=x.ZP.h3(i||(i=(0,u.Z)(["\n    text-align: center;\n"]))),v=e(8649),b=e(6546),j=e(3333),Z=e(7609),w=e(6480),N=x.ZP.li(o||(o=(0,u.Z)(["\n    position: relative;\n    width: 274px;\n\n    .card-img {\n        width: 274px;\n        height: 268px;\n        border-radius: 14px;\n        object-fit: cover;\n        background-color: #f3f3f2;\n    }\n    .card-title {\n        display: flex;\n        justify-content: space-between;\n        margin-top: 14px;\n\n        color: var(--secondary-text-color);\n        font-size: 16px;\n        font-weight: 500;\n    }\n    .card-title-color {\n        color: #3470ff;\n    }\n    .card-info {\n        color: var(--tag-text-color);\n        font-size: 12px;\n\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n    .card-info-tag {\n        margin-right: 6px;\n    }\n    .card-info-tag:not(:last-child)::after {\n        content: '|';\n        margin-left: 6px;\n    }\n    .btn-wrapper {\n        margin-top: 28px;\n    }\n    .card-btn-hearth {\n        position: absolute;\n        top: 14px;\n        right: 14px;\n        width: 18px;\n        height: 18px;\n        cursor: pointer;\n\n        background-color: transparent;\n        fill: transparent;\n        stroke: rgba(255, 255, 255, 0.8);\n\n        transition: stroke var(--tr-rule);\n    }\n\n    .card-btn-hearth:hover,\n    .card-btn-hearth:focus {\n        stroke: rgba(52, 112, 255, 1);\n    }\n    .card-favorite {\n        fill: rgba(52, 112, 255, 1);\n        stroke: rgba(52, 112, 255, 1);\n    }\n"]))),y=e(3535),k=e(9085),C=e(3329),P=function(n){var r=n.carInfo,e=n.handlerOpenModal,t=(0,f.I0)(),a=(0,f.v9)(p.so),i=(0,f.v9)(p.N$),o=r.id,c=r.img,s=r.year,l=r.make,d=r.model,u=r.type,x=r.rentalPrice,h=r.mileage,m=r.rentalCompany,g=r.description,b=r.accessories,P=r.address,z=(0,j.av)(P);return(0,C.jsxs)(N,{children:[(0,C.jsx)("button",{"data-id":o,className:function(n){return-1!==i.findIndex((function(r){return r.id===n}))}(o)?"card-btn-hearth card-favorite":"card-btn-hearth",type:"button",onClick:function(n){var r=n.currentTarget.classList.toggle("card-favorite");t((0,v.jX)(Number(n.currentTarget.dataset.id))),r?k.Am.info("".concat(l," ").concat(d," ").concat(w.Z.addToFavoriteNotification[a])):k.Am.info("".concat(l," ").concat(d," ").concat(w.Z.delToFavoriteNotification[a]))},children:(0,C.jsx)("svg",{width:"18",height:"18","aria-label":w.Z.addToFavorite[a],children:(0,C.jsx)("use",{href:Z.Z+"#icon-heart"})})}),(0,C.jsx)("img",{className:"card-img",width:"274",height:"268",src:c,alt:g,loading:"lazy"}),(0,C.jsxs)("h2",{className:"card-title",children:[(0,C.jsxs)("span",{children:[l," ",(0,C.jsx)("span",{className:"card-title-color",children:d}),","," ",s]}),(0,C.jsxs)("span",{children:["$",x]})]}),(0,C.jsxs)("div",{className:"card-info",children:[(0,C.jsx)("span",{className:"card-info-tag",children:z[1]}),(0,C.jsx)("span",{className:"card-info-tag",children:z[2]}),(0,C.jsx)("span",{className:"card-info-tag",children:m})]}),(0,C.jsxs)("div",{className:"card-info",children:[(0,C.jsx)("span",{className:"card-info-tag",children:u}),(0,C.jsx)("span",{className:"card-info-tag",children:l}),(0,C.jsx)("span",{className:"card-info-tag",children:h}),(0,C.jsx)("span",{className:"card-info-tag",children:b[0]})]}),(0,C.jsx)("div",{className:"btn-wrapper",children:(0,C.jsx)(y.Z,{onClick:function(){return e(r)},text:w.Z.learnMore[a]})})]})},z=e(2791),I=e(4164),M=x.ZP.div(c||(c=(0,u.Z)(["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    background-color: rgba(18, 20, 23, 0.5);\n    overscroll-behavior: contain;\n    z-index: 5;\n"]))),T=x.ZP.div(s||(s=(0,u.Z)(["\n    width: 541px;\n    min-height: 300px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    padding: 40px;\n    background-color: var(--bg-color);\n    border-radius: 24px;\n"]))),$=x.ZP.div(l||(l=(0,u.Z)(["\n    width: 24px;\n    height: 24px;\n\n    position: absolute;\n    top: 16px;\n    right: 16px;\n\n    color: var(--secondary-text-color);\n    transition: color var(--tr-rule);\n\n    &:hover {\n        cursor: pointer;\n        color: #3470ff;\n    }\n"]))),F=document.getElementById("modal"),S=function(n){var r=n.children,e=n.closeReducer,t=(0,f.I0)(),a=(0,f.v9)(p.so);(0,z.useEffect)((function(){var n=function(n){"Escape"===n.code&&(document.body.style.overflow="visible",t(e()))};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e,t]);return(0,I.createPortal)((0,C.jsx)(M,{onClick:function(n){n.currentTarget===n.target&&(document.body.style.overflow="visible",t(e()))},children:(0,C.jsxs)(T,{children:[(0,C.jsx)($,{onClick:function(){document.body.style.overflow="visible",t(e())},children:(0,C.jsx)("svg",{width:"24px",height:"24px","aria-label":w.Z.closeModal[a],children:(0,C.jsx)("use",{href:Z.Z+"#icon-close"})})}),r]})}),F)},E=x.ZP.div(d||(d=(0,u.Z)(["\n    .card-img {\n        width: 461px;\n        height: 248px;\n        object-fit: cover;\n\n        border-radius: 14px;\n        background-color: #f3f3f2;\n    }\n\n    .card-title {\n        margin-top: 14px;\n\n        color: var(--secondary-text-color);\n        font-size: 18px;\n        font-weight: 500;\n        line-height: 1.33;\n    }\n    .card-title-color {\n        color: #3470ff;\n    }\n    .card-info-wrapper {\n        margin-top: 8px;\n    }\n    .card-info {\n        margin-top: 4px;\n\n        color: var(--tag-text-color);\n        font-size: 12px;\n    }\n    .card-info-tag {\n        margin-right: 6px;\n    }\n    .card-info-tag:not(:last-child)::after {\n        content: '|';\n        margin-left: 6px;\n    }\n    .card-descr {\n        margin-top: 14px;\n        color: vat(--secondary-text-color);\n        font-size: 14px;\n        line-height: 1.43;\n    }\n    .card-additionals {\n        margin-top: 24px;\n    }\n    .cart-additionals-title {\n        color: var(--secondary-text-color);\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 1.43;\n    }\n    .card-tag-btn {\n        display: inline-block;\n        margin-top: 8px;\n        padding: 7px 14px;\n\n        font-size: 12px;\n        letter-spacing: -0.24px;\n        background-color: #f9f9f9;\n        color: #363535;\n        border-radius: 35px;\n    }\n    .card-tag-btn:not(:last-child) {\n        margin-right: 8px;\n    }\n\n    .btn-link {\n        display: inline-block;\n        margin-top: 24px;\n        padding: 12px 50px;\n\n        border-radius: 12px;\n        background-color: #3470ff;\n        color: #ffffff;\n\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 1.43;\n        text-align: center;\n\n        &:focus,\n        &:hover {\n            background-color: #0b44cd;\n        }\n    }\n"]))),B=function(){var n=(0,f.v9)(p.so),r=(0,f.v9)(p.Dt),e=r.id,t=r.img,a=r.year,i=r.make,o=r.model,c=r.type,s=r.rentalPrice,l=r.mileage,d=r.description,u=r.accessories,x=r.functionalities,h=r.rentalConditions,m=r.fuelConsumption,g=r.address,v=r.engineSize,b=(0,j.Qm)(h),Z=(0,j.av)(g),N=[Z[1],Z[2],"Id: ".concat(e),"".concat(w.Z.Year[n],": ").concat(a),"".concat(w.Z.Type[n],": ").concat(c)],y=["".concat(w.Z.Fuel[n],": ").concat(m),"".concat(w.Z.Engine[n],": ").concat(v)];return(0,C.jsxs)(E,{children:[(0,C.jsx)("img",{className:"card-img",width:"461",height:"248",src:t,alt:"".concat(i," ").concat(o," ").concat(a)}),(0,C.jsxs)("h2",{className:"card-title",children:[i," ",(0,C.jsx)("span",{className:"card-title-color",children:o}),", ",a]}),(0,C.jsxs)("div",{className:"card-info-wrapper",children:[(0,C.jsx)("div",{className:"card-info",children:(0,j.Hb)(N)}),(0,C.jsx)("div",{className:"card-info",children:(0,j.Hb)(y)})]}),(0,C.jsx)("div",{className:"card-descr",children:d}),(0,C.jsxs)("div",{className:"card-additionals",children:[(0,C.jsx)("p",{className:"cart-additionals-title",children:w.Z.Accessories[n]}),(0,C.jsxs)("div",{className:"card-info-wrapper",children:[(0,C.jsx)("div",{className:"card-info",children:(0,j.Hb)(u)}),(0,C.jsx)("div",{className:"card-info",children:(0,j.Hb)(x)})]})]}),(0,C.jsxs)("div",{className:"card-additionals",children:[(0,C.jsx)("p",{className:"cart-additionals-title",children:w.Z.Conditions[n]}),(0,C.jsxs)("div",{children:[(0,C.jsxs)("span",{className:"card-tag-btn",children:[b[0],(0,C.jsx)("span",{className:"card-title-color",children:b[1]})]}),(0,C.jsx)("span",{className:"card-tag-btn",children:b[2]}),(0,C.jsx)("span",{className:"card-tag-btn",children:b[3]}),(0,C.jsxs)("span",{className:"card-tag-btn",children:[w.Z.Mileage[n]," ",(0,C.jsx)("span",{className:"card-title-color",children:(0,j.$g)(l)})]}),(0,C.jsxs)("span",{className:"card-tag-btn",children:[w.Z.Price[n]," ",(0,C.jsxs)("span",{className:"card-title-color",children:[s,"$"]})]})]})]}),(0,C.jsx)("a",{href:"tel:+380730000000",className:"btn-link",children:w.Z.rentalCar[n]})]})},H=function(n){var r=n.arrCars,e=(0,f.I0)(),t=(0,f.v9)(p.Q$),a=(0,f.v9)(p.uv),i=(0,f.v9)(p.so);function o(n){document.body.style.overflow="hidden",e((0,b.h7)(n))}return(0,C.jsx)(C.Fragment,{children:r?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{children:r.slice(0,8*t).map((function(n){return(0,C.jsx)(P,{carInfo:n,handlerOpenModal:o},n.id)}))}),t<Math.ceil(r.length/8)&&(0,C.jsx)(m,{type:"button",onClick:function(){e((0,v.zt)(t+1))},children:w.Z.loadMore[i]}),a&&(0,C.jsx)(S,{closeReducer:b.Mr,children:(0,C.jsx)(B,{})})]}):(0,C.jsx)(g,{children:w.Z.noCars[i]})})}},6779:function(n,r,e){e.d(r,{Z:function(){return j}});var t,a,i,o=e(1413),c=e(3535),s=e(1134),l=e(6480),d=e(9434),f=e(6351),p=e(3333),u=e(8649),x=e(168),h=e(5867),m=h.ZP.form(t||(t=(0,x.Z)(["\n    display: flex;\n    align-items: flex-end;\n    gap: 18px;\n\n    margin-bottom: 50px;\n\n    p {\n        position: absolute;\n        bottom: -30px;\n        left: 0;\n        color: #bf1650;\n    }\n\n    p::before {\n        display: inline;\n        content: '\u26a0 ';\n    }\n\n    .form-select {\n        padding: 14px 18px;\n        border: none;\n        border-radius: 14px;\n        background-color: #f7f7fb;\n    }\n    .form-select::-webkit-scrollbar {\n        width: 8px;\n        background-color: #ffffff;\n    }\n\n    .form-select::-webkit-scrollbar-thumb {\n        background-color: rgba(18, 20, 23, 0.05);\n        border-radius: 4px;\n    }\n    .form-option {\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 1.25;\n\n        background-color: #ffffff;\n        color: rgba(18, 20, 23, 0.2);\n    }\n    .wrapper {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n    }\n"]))),g=h.ZP.label(a||(a=(0,x.Z)(["\n    margin-bottom: 8px;\n    color: var(--form-text-color);\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.28;\n"]))),v=h.ZP.input(i||(i=(0,x.Z)(["\n    width: 160px;\n    height: 48px;\n    padding: 14px 24px;\n\n    border: none;\n    background-color: #f7f7fb;\n\n    &.input-left {\n        border-radius: 14px 0px 0px 14px;\n        border-right: 1px solid rgba(138, 138, 137, 0.2);\n    }\n    &.input-right {\n        border-radius: 0px 14px 14px 0px;\n    }\n"]))),b=e(3329),j=function(){var n,r,e,t,a=(0,d.I0)(),i=(0,d.v9)(f.so),x=(0,d.v9)(f.tu),h=(0,s.cI)({mode:"onChange"}),j=h.register,Z=h.handleSubmit,w=h.formState.errors;return(0,b.jsxs)(m,{onSubmit:Z((function(n){a((0,u.Tv)(n))})),children:[(0,b.jsxs)("div",{className:"wrapper",children:[(0,b.jsx)(g,{children:l.Z.carBrand[i]}),(0,b.jsxs)("select",(0,o.Z)((0,o.Z)({className:"form-select"},j("brand",{pattern:{value:/^[A-Za-z \u0430-\u044f\u0410-\u042f\u0451\u0401\u0456\u0406\u0457\u0407\u044a\u042a]+$/i,message:"".concat(l.Z.errOnlyLetters[i])}})),{},{children:[(0,b.jsx)("option",{value:"",children:l.Z.selectBrand[i]}),!!x&&(0,p.qZ)(x).map((function(n,r){return(0,b.jsx)("option",{className:"form-option",value:n,children:n},r)}))]})),(null===w||void 0===w?void 0:w.brand)&&(0,b.jsx)("p",{children:w.from.message})]}),(0,b.jsxs)("div",{className:"wrapper",children:[(0,b.jsx)(g,{children:l.Z.price1Hour[i]}),(0,b.jsxs)("select",(0,o.Z)((0,o.Z)({className:"form-select"},j("price",{min:{value:0,message:"".concat(l.Z.errMustBe[i])}})),{},{children:[(0,b.jsx)("option",{value:"",children:l.Z.toPrice[i]}),!!x&&(0,p.aS)(x).map((function(n,r){return(0,b.jsx)("option",{className:"form-option",value:n,children:n},r)}))]})),(null===w||void 0===w?void 0:w.price)&&(0,b.jsx)("p",{children:w.price.message})]}),(0,b.jsxs)("div",{className:"wrapper",children:[(0,b.jsx)(g,{children:l.Z.carMileage[i]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(v,(0,o.Z)({className:"input-left",type:"number",placeholder:l.Z.fromField[i]},j("from",{min:{value:0,message:"".concat(l.Z.errMustBe[i])}}))),(0,b.jsx)(v,(0,o.Z)({className:"input-right",type:"number",placeholder:l.Z.toField[i]},j("to",{min:{value:0,message:"".concat(l.Z.errMustBe[i])}}))),"min"===(null===w||void 0===w||null===(n=w.from)||void 0===n?void 0:n.type)&&(0,b.jsx)("p",{children:w.from.message}),"fromTo"===(null===w||void 0===w||null===(r=w.from)||void 0===r?void 0:r.type)&&(0,b.jsx)("p",{children:l.Z.errFromTo[i]}),"min"===(null===w||void 0===w||null===(e=w.to)||void 0===e?void 0:e.type)&&(0,b.jsx)("p",{children:w.to.message}),"fromTo"===(null===w||void 0===w||null===(t=w.to)||void 0===t?void 0:t.type)&&(0,b.jsx)("p",{children:l.Z.errFromTo[i]})]})]}),(0,b.jsx)(c.Z,{type:"submit",text:l.Z.btnSearch[i],$variant:"search"})]})}},3333:function(n,r,e){e.d(r,{$g:function(){return o},Hb:function(){return c},Qm:function(){return i},ZC:function(){return d},aS:function(){return l},av:function(){return a},qZ:function(){return s}});var t=e(3329);function a(n){return n.split(", ")}function i(n){var r=n.split("\n"),e=r[0].slice(r[0].lastIndexOf(" ")+1,r[0].length);return r[0]=r[0].replace(e,""),r.splice(1,0,e),r}function o(n){return new Intl.NumberFormat("en-US").format(n)}var c=function(n){return n.map((function(n,r){return(0,t.jsx)("span",{className:"card-info-tag",children:n},r)}))};function s(n){return n.map((function(n){return n.make})).filter((function(n,r,e){return e.indexOf(n)===r})).sort((function(n,r){return n.localeCompare(r)}))}function l(n){var r=0,e=[];n.forEach((function(n){n.rentalPrice>r&&(r=n.rentalPrice)}));for(var t=10;t<=r;)e.push(t),t+=10;return e}var d=function(n,r){if(n){var e,t=n.brand,a=n.price,i=n.from,o=n.to;if(!t&&!a&&!i&&!o)return r;if(t&&(e=r.filter((function(n){return n.make.toLowerCase()===t.toLowerCase()}))),a)e=(e||r).filter((function(n){return n.rentalPrice<=a}));if(i&&o){var c=Number(i),s=Number(o);return(e||r).filter((function(n){return n.mileage>=c&&n.mileage<=s}))}if(i){var l=Number(i);return(e||r).filter((function(n){return n.mileage>=l}))}if(o){var d=Number(o);return(e||r).filter((function(n){return d>=n.mileage}))}return e}return r}}}]);
//# sourceMappingURL=252.d8547ff5.chunk.js.map