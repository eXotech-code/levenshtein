(this.webpackJsonplevenshtein=this.webpackJsonplevenshtein||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r,a,i,s=n(1),c=n.n(s),l=n(8),o=n.n(l),h=(n(13),n(3)),u=n(4),d=n(2),j=n(6),b=n(5),g=(n(14),n(0)),p=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).sizeRef=c.a.createRef(),r}return Object(u.a)(n,[{key:"render",value:function(){var e="button-primary";return this.props.variant&&(e="button-"+this.props.variant),Object(g.jsx)("button",{className:e,ref:this.sizeRef,onClick:this.props.action,children:this.props.children})}}]),n}(c.a.Component),m=["title","titleId"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e,t){var n=e.title,c=e.titleId,l=f(e,m);return s.createElement("svg",v({id:"icon",xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},l),n?s.createElement("title",{id:c},n):null,r||(r=s.createElement("defs",null,s.createElement("style",null,"\n      .cls-1 {\n        fill: none;\n      }\n    "))),a||(a=s.createElement("polygon",{points:"18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6"})),i||(i=s.createElement("rect",{id:"_Transparent_Rectangle_","data-name":"<Transparent Rectangle>",className:"cls-1",width:32,height:32})))}var y=s.forwardRef(O),x=(n.p,n(16),function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)("label",{children:[e.name,Object(g.jsx)("input",{type:"text",value:e.value,onChange:e.handler,name:e.name.toLowerCase(),placeholder:e.placeholder})]})})}),w=function(e){return Object(g.jsxs)("div",{className:"form",children:[Object(g.jsxs)("div",{className:"name-section",children:[Object(g.jsx)("h1",{children:"Levenshteino-inator"}),Object(g.jsx)("h3",{children:"(naiwna wersja rekursywna)"}),Object(g.jsx)("p",{children:"Wyznacz odleg\u0142o\u015bci mi\u0119dzy dwoma napisami"})]}),Object(g.jsxs)("div",{className:"input-area",children:[Object(g.jsx)(x,{name:"Napis 1",value:e.string1,handler:e.changeHandler,placeholder:"Wymy\u015bl co\u015b ciekawego"}),Object(g.jsx)(x,{name:"Napis 2",value:e.string2,handler:e.changeHandler,placeholder:"Napis do por\xf3wnania"})]}),Object(g.jsx)("div",{className:"login-form-button-area",children:Object(g.jsxs)(p,{action:e.buttonAction,children:["Por\xf3wnaj",Object(g.jsx)(y,{})]})})]})},k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={string1:"",string2:"",result:0},r.handleChange=r.handleChange.bind(Object(d.a)(r)),r.driverFunc=r.driverFunc.bind(Object(d.a)(r)),r}return Object(u.a)(n,[{key:"tableGen",value:function(){for(var e=new Array(6),t=0;t<=e.length;t++)e[t]=new Array(5);return e}},{key:"handleChange",value:function(e){"napis 1"===e.target.name?this.setState({string1:e.target.value}):this.setState({string2:e.target.value})}},{key:"compareDistance",value:function(e,t){return 0===e.length?t.length:0===t.length?e.length:e[0]===t[0]?this.compareDistance(e.substring(1),t.substring(1)):1+Math.min(this.compareDistance(e.substring(1),t),this.compareDistance(e,t.substring(1)),this.compareDistance(e.substring(1),t.substring(1)))}},{key:"driverFunc",value:function(){this.setState({result:this.compareDistance(this.state.string1,this.state.string2)})}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(w,{string1:this.state.string1,string2:this.state.string2,changeHandler:this.handleChange,buttonAction:this.driverFunc}),Object(g.jsx)("div",{className:"result",children:Object(g.jsxs)("div",{className:"numerical-result",children:[Object(g.jsx)("p",{children:"Odleg\u0142o\u015b\u0107 mi\u0119dzy napisami wynosi:"}),Object(g.jsx)("h1",{children:this.state.result})]})})]})}}]),n}(c.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.4094eda6.chunk.js.map