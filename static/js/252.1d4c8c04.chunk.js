"use strict";(self.webpackChunkrent_cars=self.webpackChunkrent_cars||[]).push([[252],{7609:function(n,r,e){e(2791);r.Z=e.p+"static/media/sprite.db5ae9085bac6261c3adcd7a5de8b734.svg"},3535:function(n,r,e){e.d(r,{Z:function(){return d}});var t,a,i,o=e(168),c=e(5867),s=c.ZP.button(t||(t=(0,o.Z)(["\n    width: 100%;\n\n    border-radius: 12px;\n    background-color: #3470ff;\n    color: #ffffff;\n\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n    text-align: center;\n\n    transition: background-color var(--tr-rule);\n\n    &:focus,\n    &:hover {\n        background-color: #0b44cd;\n    }\n\n    ","\n\n    ","\n"])),(function(n){return"primary"===n.$variant&&(0,c.iv)(a||(a=(0,o.Z)(["\n            padding: 12px 0;\n        "])))}),(function(n){return"search"===n.$variant&&(0,c.iv)(i||(i=(0,o.Z)(["\n            width: auto;\n            padding: 14px 44px;\n        "])))})),l=e(3329);function d(n){var r=n.onClick,e=void 0===r?null:r,t=n.text,a=n.type,i=void 0===a?"button":a,o=n.$variant,c=void 0===o?"primary":o;return(0,l.jsx)(s,{type:i,onClick:e,$variant:c,children:t})}},517:function(n,r,e){e.d(r,{Z:function(){return T}});var t,a,i,o,c,s,l,d=e(9434),p=e(6351),f=e(168),u=e(5867),h=u.ZP.ul(t||(t=(0,f.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 29px;\n    row-gap: 50px;\n"]))),x=u.ZP.button(a||(a=(0,f.Z)(["\n    display: block;\n    margin: 0 auto;\n    margin-top: 100px;\n\n    background-color: transparent;\n    color: #3470ff;\n    font-size: 16px;\n    font-weight: 500;\n    text-decoration-line: underline;\n    transition: color var(--tr-rule);\n\n    &:hover,\n    &:focus {\n        color: #0b44cd;\n    }\n"]))),g=e(8649),m=e(6546),b=e(3333),v=e(7609),j=e(6480),Z=u.ZP.li(i||(i=(0,f.Z)(["\n    position: relative;\n    width: 274px;\n\n    .card-img {\n        width: 274px;\n        height: 268px;\n        border-radius: 14px;\n        object-fit: cover;\n        background-color: #f3f3f2;\n    }\n    .card-title {\n        display: flex;\n        justify-content: space-between;\n        margin-top: 14px;\n\n        color: #121417;\n        font-size: 16px;\n        font-weight: 500;\n    }\n    .card-title-color {\n        color: #3470ff;\n    }\n    .card-info {\n        color: rgba(18, 20, 23, 0.5);\n        font-size: 12px;\n    }\n    .card-info-tag {\n        margin-right: 6px;\n\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n    .card-info-tag:not(:last-child)::after {\n        content: '|';\n        margin-left: 6px;\n    }\n    .btn-wrapper {\n        margin-top: 28px;\n    }\n    .card-btn-hearth {\n        position: absolute;\n        top: 14px;\n        right: 14px;\n        width: 18px;\n        height: 18px;\n        cursor: pointer;\n\n        background-color: transparent;\n        fill: transparent;\n        stroke: rgba(255, 255, 255, 0.8);\n\n        transition: stroke var(--tr-rule);\n    }\n\n    .card-btn-hearth:hover,\n    .card-btn-hearth:focus {\n        stroke: rgba(52, 112, 255, 1);\n    }\n    .card-favorite {\n        fill: rgba(52, 112, 255, 1);\n        stroke: rgba(52, 112, 255, 1);\n    }\n"]))),w=e(3535),N=e(3329),k=function(n){var r=n.carInfo,e=n.handlerOpenModal,t=(0,d.I0)(),a=(0,d.v9)(p.so),i=(0,d.v9)(p.N$),o=r.id,c=r.img,s=r.year,l=r.make,f=r.model,u=r.type,h=r.rentalPrice,x=r.mileage,m=r.rentalCompany,k=r.description,y=r.accessories,C=r.address,P=(0,b.av)(C);return(0,N.jsxs)(Z,{children:[(0,N.jsx)("button",{"data-id":o,className:function(n){return-1!==i.findIndex((function(r){return r.id===n}))}(o)?"card-btn-hearth card-favorite":"card-btn-hearth",type:"button",onClick:function(n){n.currentTarget.classList.toggle("card-favorite"),t((0,g.jX)(Number(n.currentTarget.dataset.id)))},children:(0,N.jsx)("svg",{width:"18",height:"18","aria-label":j.Z.addToFavorite[a],children:(0,N.jsx)("use",{href:v.Z+"#icon-heart"})})}),(0,N.jsx)("img",{className:"card-img",width:"274",height:"268",src:c,alt:k,loading:"lazy"}),(0,N.jsxs)("h2",{className:"card-title",children:[(0,N.jsxs)("span",{children:[l," ",(0,N.jsx)("span",{className:"card-title-color",children:f}),","," ",s]}),(0,N.jsxs)("span",{children:["$",h]})]}),(0,N.jsxs)("div",{className:"card-info",children:[(0,N.jsx)("span",{className:"card-info-tag",children:P[1]}),(0,N.jsx)("span",{className:"card-info-tag",children:P[2]}),(0,N.jsx)("span",{className:"card-info-tag",children:m})]}),(0,N.jsxs)("div",{className:"card-info",children:[(0,N.jsx)("span",{className:"card-info-tag",children:u}),(0,N.jsx)("span",{className:"card-info-tag",children:l}),(0,N.jsx)("span",{className:"card-info-tag",children:x}),(0,N.jsx)("span",{className:"card-info-tag",children:y[0]})]}),(0,N.jsx)("div",{className:"btn-wrapper",children:(0,N.jsx)(w.Z,{onClick:function(){return e(r)},text:j.Z.learnMore[a]})})]})},y=e(2791),C=e(4164),P=u.ZP.div(o||(o=(0,f.Z)(["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    background-color: rgba(18, 20, 23, 0.5);\n    overscroll-behavior: contain;\n    z-index: 5;\n"]))),z=u.ZP.div(c||(c=(0,f.Z)(["\n    width: 541px;\n    min-height: 300px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    padding: 40px;\n    background-color: #fff;\n    border-radius: 24px;\n"]))),I=u.ZP.div(s||(s=(0,f.Z)(["\n    width: 24px;\n    height: 24px;\n\n    position: absolute;\n    top: 16px;\n    right: 16px;\n\n    color: #121417;\n    transition: color var(--tr-rule);\n\n    &:hover {\n        cursor: pointer;\n        color: #3470ff;\n    }\n"]))),M=document.getElementById("modal"),$=function(n){var r=n.children,e=n.closeReducer,t=(0,d.I0)(),a=(0,d.v9)(p.so);(0,y.useEffect)((function(){var n=function(n){"Escape"===n.code&&(document.body.style.overflow="visible",t(e()))};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e,t]);return(0,C.createPortal)((0,N.jsx)(P,{onClick:function(n){n.currentTarget===n.target&&(document.body.style.overflow="visible",t(e()))},children:(0,N.jsxs)(z,{children:[(0,N.jsx)(I,{onClick:function(){document.body.style.overflow="visible",t(e())},children:(0,N.jsx)("svg",{width:"24px",height:"24px","aria-label":j.Z.closeModal[a],children:(0,N.jsx)("use",{href:v.Z+"#icon-close"})})}),r]})}),M)},S=u.ZP.div(l||(l=(0,f.Z)(["\n    .card-img {\n        width: 461px;\n        height: 248px;\n        object-fit: cover;\n\n        border-radius: 14px;\n        background-color: #f3f3f2;\n    }\n\n    .card-title {\n        margin-top: 14px;\n\n        color: #121417;\n        font-size: 18px;\n        font-weight: 500;\n        line-height: 1.33;\n    }\n    .card-title-color {\n        color: #3470ff;\n    }\n    .card-info-wrapper {\n        margin-top: 8px;\n    }\n    .card-info {\n        margin-top: 4px;\n\n        color: rgba(18, 20, 23, 0.5);\n        font-size: 12px;\n    }\n    .card-info-tag {\n        margin-right: 6px;\n    }\n    .card-info-tag:not(:last-child)::after {\n        content: '|';\n        margin-left: 6px;\n    }\n    .card-descr {\n        margin-top: 14px;\n        color: #121417;\n        font-size: 14px;\n        line-height: 1.43;\n    }\n    .card-additionals {\n        margin-top: 24px;\n    }\n    .cart-additionals-title {\n        color: #121417;\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 1.43;\n    }\n    .card-tag-btn {\n        display: inline-block;\n        margin-top: 8px;\n        padding: 7px 14px;\n\n        font-size: 12px;\n        letter-spacing: -0.24px;\n        background-color: #f9f9f9;\n        color: #363535;\n        border-radius: 35px;\n    }\n    .card-tag-btn:not(:last-child) {\n        margin-right: 8px;\n    }\n\n    .btn-link {\n        display: inline-block;\n        margin-top: 24px;\n        padding: 12px 50px;\n\n        border-radius: 12px;\n        background-color: #3470ff;\n        color: #ffffff;\n\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 1.43;\n        text-align: center;\n\n        &:focus,\n        &:hover {\n            background-color: #0b44cd;\n        }\n    }\n"]))),E=function(){var n=(0,d.v9)(p.so),r=(0,d.v9)(p.Dt),e=r.id,t=r.img,a=r.year,i=r.make,o=r.model,c=r.type,s=r.rentalPrice,l=r.mileage,f=r.description,u=r.accessories,h=r.functionalities,x=r.rentalConditions,g=r.fuelConsumption,m=r.address,v=r.engineSize,Z=(0,b.Qm)(x),w=(0,b.av)(m),k=[w[1],w[2],"Id: ".concat(e),"".concat(j.Z.Year[n],": ").concat(a),"".concat(j.Z.Type[n],": ").concat(c)],y=["".concat(j.Z.Fuel[n],": ").concat(g),"".concat(j.Z.Engine[n],": ").concat(v)];return(0,N.jsxs)(S,{children:[(0,N.jsx)("img",{className:"card-img",width:"461",height:"248",src:t,alt:"".concat(i," ").concat(o," ").concat(a)}),(0,N.jsxs)("h2",{className:"card-title",children:[i," ",(0,N.jsx)("span",{className:"card-title-color",children:o}),", ",a]}),(0,N.jsxs)("div",{className:"card-info-wrapper",children:[(0,N.jsx)("div",{className:"card-info",children:(0,b.Hb)(k)}),(0,N.jsx)("div",{className:"card-info",children:(0,b.Hb)(y)})]}),(0,N.jsx)("div",{className:"card-descr",children:f}),(0,N.jsxs)("div",{className:"card-additionals",children:[(0,N.jsx)("p",{className:"cart-additionals-title",children:j.Z.Accessories[n]}),(0,N.jsxs)("div",{className:"card-info-wrapper",children:[(0,N.jsx)("div",{className:"card-info",children:(0,b.Hb)(u)}),(0,N.jsx)("div",{className:"card-info",children:(0,b.Hb)(h)})]})]}),(0,N.jsxs)("div",{className:"card-additionals",children:[(0,N.jsx)("p",{className:"cart-additionals-title",children:j.Z.Conditions[n]}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("span",{className:"card-tag-btn",children:[Z[0],(0,N.jsx)("span",{className:"card-title-color",children:Z[1]})]}),(0,N.jsx)("span",{className:"card-tag-btn",children:Z[2]}),(0,N.jsx)("span",{className:"card-tag-btn",children:Z[3]}),(0,N.jsxs)("span",{className:"card-tag-btn",children:[j.Z.Mileage[n]," ",(0,N.jsx)("span",{className:"card-title-color",children:(0,b.$g)(l)})]}),(0,N.jsxs)("span",{className:"card-tag-btn",children:[j.Z.Price[n]," ",(0,N.jsxs)("span",{className:"card-title-color",children:[s,"$"]})]})]})]}),(0,N.jsx)("a",{href:"tel:+380730000000",className:"btn-link",children:j.Z.rentalCar[n]})]})},T=function(n){var r=n.arrCars,e=(0,d.I0)(),t=(0,d.v9)(p.Q$),a=(0,d.v9)(p.uv),i=(0,d.v9)(p.so);function o(n){document.body.style.overflow="hidden",e((0,m.h7)(n))}return(0,N.jsx)(N.Fragment,{children:r?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(h,{children:r.slice(0,8*t).map((function(n){return(0,N.jsx)(k,{carInfo:n,handlerOpenModal:o},n.id)}))}),t<Math.ceil(r.length/8)&&(0,N.jsx)(x,{type:"button",onClick:function(){e((0,g.zt)(t+1))},children:j.Z.loadMore[i]}),a&&(0,N.jsx)($,{closeReducer:m.Mr,children:(0,N.jsx)(E,{})})]}):(0,N.jsx)("h3",{children:"No cars"})})}},6779:function(n,r,e){e.d(r,{Z:function(){return j}});var t,a,i,o=e(1413),c=e(3535),s=e(1134),l=e(6480),d=e(9434),p=e(6351),f=e(3333),u=e(8649),h=e(168),x=e(5867),g=x.ZP.form(t||(t=(0,h.Z)(["\n    display: flex;\n    align-items: flex-end;\n    gap: 18px;\n\n    margin-bottom: 50px;\n\n    .form-select {\n        padding: 14px 18px;\n        border: none;\n        border-radius: 14px;\n        background-color: #f7f7fb;\n    }\n    .form-option {\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 1.25;\n\n        color: rgba(18, 20, 23, 0.2);\n    }\n    .wrapper {\n        display: flex;\n        flex-direction: column;\n    }\n    .ss {\n        height: 48px;\n    }\n"]))),m=x.ZP.label(a||(a=(0,h.Z)(["\n    margin-bottom: 8px;\n    color: #8a8a89;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.28;\n"]))),b=x.ZP.input(i||(i=(0,h.Z)(["\n    width: 160px;\n    height: 48px;\n    padding: 14px 24px;\n\n    border: none;\n    background-color: #f7f7fb;\n\n    &.input-left {\n        border-radius: 14px 0px 0px 14px;\n        border-right: 1px solid rgba(138, 138, 137, 0.2);\n    }\n    &.input-right {\n        border-radius: 0px 14px 14px 0px;\n    }\n"]))),v=e(3329),j=function(){var n,r=(0,d.I0)(),e=(0,d.v9)(p.so),t=(0,d.v9)(p.tu),a=(0,s.cI)(),i=a.register,h=a.handleSubmit,x=a.formState.errors;return(0,v.jsxs)(g,{onSubmit:h((function(n){r((0,u.Tv)(n))})),children:[(0,v.jsxs)("div",{className:"wrapper",children:[(0,v.jsx)(m,{children:l.Z.carBrand[e]}),(0,v.jsxs)("select",(0,o.Z)((0,o.Z)({className:"form-select"},i("brand",{pattern:/^[A-Za-z 0-9\u0430-\u044f\u0410-\u042f\u0451\u0401\u0456\u0406\u0457\u0407\u044a\u042a]+$/i})),{},{children:[(0,v.jsx)("option",{value:"",children:l.Z.selectBrand[e]}),!!t&&(0,f.qZ)(t).map((function(n,r){return(0,v.jsx)("option",{className:"form-option",value:n,children:n},r)}))]})),"pattern"===(null===x||void 0===x||null===(n=x.brand)||void 0===n?void 0:n.type)&&(0,v.jsx)("p",{children:"Only letters and numbers"})]}),(0,v.jsxs)("div",{className:"wrapper",children:[(0,v.jsx)(m,{children:l.Z.price1Hour[e]}),(0,v.jsxs)("select",(0,o.Z)((0,o.Z)({className:"form-select"},i("price",{min:0})),{},{children:[(0,v.jsx)("option",{value:"",children:l.Z.toPrice[e]}),!!t&&(0,f.aS)(t).map((function(n,r){return(0,v.jsx)("option",{className:"form-option",value:n,children:n},r)}))]})),x.price&&(0,v.jsx)("p",{children:"Must be 0 or greater"})]}),(0,v.jsxs)("div",{className:"wrapper",children:[(0,v.jsx)(m,{children:l.Z.carMileage[e]}),(0,v.jsxs)("div",{children:[(0,v.jsx)(b,(0,o.Z)({className:"input-left",type:"number",placeholder:"From"},i("from",{min:0}))),x.from&&(0,v.jsx)("p",{children:"Must be 0 or greater"}),(0,v.jsx)(b,(0,o.Z)({className:"input-right",type:"number",placeholder:"To"},i("to",{min:0}))),x.to&&(0,v.jsx)("p",{children:"Must be 0 or greater"})]})]}),(0,v.jsx)(c.Z,{type:"submit",text:l.Z.btnSearch[e],$variant:"search"})]})}},3333:function(n,r,e){e.d(r,{$g:function(){return o},Hb:function(){return c},Qm:function(){return i},ZC:function(){return d},aS:function(){return l},av:function(){return a},qZ:function(){return s}});var t=e(3329);function a(n){return n.split(", ")}function i(n){var r=n.split("\n"),e=r[0].slice(r[0].lastIndexOf(" ")+1,r[0].length);return r[0]=r[0].replace(e,""),r.splice(1,0,e),r}function o(n){return new Intl.NumberFormat("en-US").format(n)}var c=function(n){return n.map((function(n,r){return(0,t.jsx)("span",{className:"card-info-tag",children:n},r)}))};function s(n){return n.map((function(n){return n.make})).filter((function(n,r,e){return e.indexOf(n)===r})).sort((function(n,r){return n.localeCompare(r)}))}function l(n){var r=0,e=[];n.forEach((function(n){n.rentalPrice>r&&(r=n.rentalPrice)}));for(var t=10;t<=r;)e.push(t),t+=10;return e}var d=function(n,r){if(n){var e,t=n.brand,a=n.price,i=n.from,o=n.to;if(!t&&!a&&!i&&!o)return r;if(t&&(e=r.filter((function(n){return n.make.toLowerCase()===t.toLowerCase()}))),a)e=(e||r).filter((function(n){return n.rentalPrice<=a}));if(i&&o){var c=Number(i),s=Number(o);return(e||r).filter((function(n){return n.mileage>=c&&n.mileage<=s}))}if(i){var l=Number(i);return(e||r).filter((function(n){return n.mileage>=l}))}if(o){var d=Number(o);return(e||r).filter((function(n){return d>=n.mileage}))}return e}return r}}}]);
//# sourceMappingURL=252.1d4c8c04.chunk.js.map