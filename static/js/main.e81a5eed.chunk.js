(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{144:function(e,c,t){},145:function(e,c,t){},146:function(e,c,t){},147:function(e,c,t){},452:function(e,c,t){},453:function(e,c,t){},454:function(e,c,t){},455:function(e,c,t){},456:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t.n(a),i=t(23),n=t.n(i),r=t(12),o=(t(144),t(145),t(146),t(147),t(1));function l(e){return Object(o.jsxs)("div",{id:"".concat(e.page,"-btn"),onClick:e.onClick,className:"circle-container ".concat(e.converge?e.convergeClass:""," ").concat(e.inFocus===e.page?"in-focus":""," ").concat(e.className),children:[Object(o.jsx)("div",{className:"menu-circle",onClick:e.onClick}),Object(o.jsx)("h2",{className:"menu-label",children:e.name})]})}var j=t(92),d=t(3);t(149),t(452);function b(e){var c=function(c){console.log(c.target.innerText),e.setCurPage(c.target.innerText)};return Object(o.jsxs)("div",{className:"nav-bar",children:[Object(o.jsx)("h1",{id:"name-title",children:"JARED HECTOR"}),Object(o.jsxs)("ul",{className:"nav-links ".concat(e.hideLinks?"no-display":""),children:[Object(o.jsx)("li",{onClick:c,className:"".concat("ABOUT"===e.curPage?"active-link":""),children:"ABOUT"}),Object(o.jsx)("li",{onClick:c,className:"".concat("PORTFOLIO"===e.curPage?"active-link":""),children:"PORTFOLIO"}),Object(o.jsx)("li",{onClick:c,className:"".concat("CONTACT"===e.curPage?"active-link":""),children:"CONTACT"})]})]})}function m(e){var c=Object(a.useState)(!1),t=Object(r.a)(c,2),s=t[0],i=t[1],n=Object(a.useState)(""),m=Object(r.a)(n,2),u=m[0],h=m[1],O=Object(d.f)(),g=function(c){var t=c.currentTarget.id.split("-")[0],a=c.currentTarget;h(t),i(!s),Object(j.a)(c.currentTarget).then((function(){a.addEventListener("animationend",(function(){console.log("Animation ended"),O("/react-portfolio/".concat(t))})),a.classList.add("centered"),"about-btn"===a.id?a.classList.add("shrink-circle"):a.classList.add("shrink-all"),e.setCurPage(t.toUpperCase()),Object(j.a)(a).then((function(){}))}))};return Object(o.jsxs)("div",{id:"home",children:[Object(o.jsx)(b,{hideLinks:!0}),Object(o.jsxs)("div",{className:"body-container menu-circle-container",children:[Object(o.jsx)(l,{name:"About",page:"about",convergeClass:"center-from-left",converge:s,onClick:g,inFocus:u}),Object(o.jsx)(l,{name:"Portfolio",page:"portfolio",convergeClass:"fade-center",converge:s,onClick:g,inFocus:u}),Object(o.jsx)(l,{name:"Contact",page:"contact",convergeClass:"center-from-right",converge:s,onClick:g,inFocus:u})]})]})}t(453);var u=t.p+"static/media/stanford.853430ad.png",h=t.p+"static/media/uw.23e5d986.png";function O(e){var c=Object(a.useState)(!1),t=Object(r.a)(c,2),s=t[0],i=t[1],n=Object(a.useRef)(null),j=Object(d.f)(),m=!1;Object(a.useEffect)((function(){e.setCurPage("ABOUT")}),[]),Object(a.useEffect)((function(){var c=n.current;if("ABOUT"!==e.curPage)return i(!0),c.addEventListener("animationend",O),function(){c.removeEventListener("animationend",O)};i(!1)}),[e.curPage]);var O=function(){m||(j("/react-portfolio/".concat(e.curPage.toLowerCase())),m=!0)};return Object(o.jsxs)("div",{id:"about",className:"page-container",children:[Object(o.jsx)(b,{curPage:e.curPage,setCurPage:e.setCurPage}),Object(o.jsxs)("div",{className:"body-container",children:[Object(o.jsx)("p",{id:"about-me-txt",className:"".concat(s?"fade-out":""),children:"Hi, I'm Jared. I'm a full stack developer from Seattle, Washington. Recently, I came to realize web development would be a great opportunity to exercise my creativity and drive to reach wide audiences. In short: I love music, I love coding, and every day I strive to be the solution to a problem."}),Object(o.jsx)(l,{name:"About",page:"about",className:"centered in-focus shrinked"}),Object(o.jsx)("h2",{id:"me-title",className:"about-title ".concat(s?"fade-out":""),children:"ME"}),Object(o.jsx)("svg",{ref:n,id:"about-me-svg",className:"small-stroke ".concat(s?"stroke-out-small":""),viewBox:"0 0 351 177",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M350 176L228.981 1H0",stroke:"black"})}),Object(o.jsx)("h2",{id:"education-title",className:"about-title ".concat(s?"fade-out":""),children:"EDUCATION"}),Object(o.jsx)("svg",{id:"education-svg",className:"lg-stroke ".concat(s?"stroke-out-lg":""),viewBox:"0 0 446 177",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M1 176L122.019 1H445.5",stroke:"black"})}),Object(o.jsxs)("div",{id:"education-container",className:"".concat(s?"fade-out":""),children:[Object(o.jsxs)("div",{className:"school-container",children:[Object(o.jsx)("img",{className:"school-logo",src:u}),Object(o.jsxs)("div",{className:"school-info",children:[Object(o.jsx)("h2",{className:"school-title",children:"Stanford University"}),Object(o.jsx)("hr",{}),Object(o.jsx)("h2",{className:"school-degree",children:"B.S., Symbolic Systems"})]})]}),Object(o.jsxs)("div",{className:"school-container",style:{marginTop:"5rem"},children:[Object(o.jsx)("img",{className:"school-logo",src:h,style:{transform:"scale(1.3)"}}),Object(o.jsxs)("div",{className:"school-info",children:[Object(o.jsx)("h2",{className:"school-title",children:"University of Washington"}),Object(o.jsx)("hr",{}),Object(o.jsx)("h2",{className:"school-degree",children:"Full Stack Certification"})]})]})]}),Object(o.jsx)("h2",{id:"skills-title",className:"about-title ".concat(s?"fade-out":""),children:"SKILLS"}),Object(o.jsx)("svg",{id:"skills-svg",className:"small-stroke ".concat(s?"stroke-out-small":""),viewBox:"0 0 351 102",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M350 1L228.981 101H0",stroke:"black"})}),Object(o.jsxs)("div",{id:"skills-container",className:"".concat(s?"fade-out":""),children:[Object(o.jsx)("h2",{className:"skill-item",children:"React"}),Object(o.jsx)("h2",{className:"skill-item",children:"Node.js"}),Object(o.jsx)("h2",{className:"skill-item",children:"HTML, CSS, and JS Front End Stack"}),Object(o.jsx)("h2",{className:"skill-item",children:"MySQL, Postgres, MongoDB"}),Object(o.jsx)("h2",{className:"skill-item",children:"Python"})]})]})]})}t(454);var g=t.p+"static/media/glassanimals.0ce159dc.png",x=t.p+"static/media/metameme.8298deef.png",f=t.p+"static/media/mindgro.b14db59e.jpg",v=t.p+"static/media/viewnify.1b0487dd.png",p=t.p+"static/media/github.95f11107.png";function N(e){var c=Object(a.useRef)(null),t=Object(d.f)(),s=!1;Object(a.useEffect)((function(){e.setCurPage("PORTFOLIO")}),[]),Object(a.useEffect)((function(){var t=c.current;if("PORTFOLIO"!==e.curPage)return t.addEventListener("animationend",i),function(){t.removeEventListener("animationend",i)}}),[e.curPage]);var i=function(){s||(t("/react-portfolio/".concat(e.curPage.toLowerCase())),s=!0)};return Object(o.jsxs)("div",{id:"portfolio",className:"page-container",children:[Object(o.jsx)(b,{curPage:e.curPage,setCurPage:e.setCurPage}),Object(o.jsxs)("div",{className:"body-container",children:[Object(o.jsx)(l,{name:"Portfolio",page:"portfolio",className:"centered shrinked shrinked-text in-focus"}),Object(o.jsxs)("div",{ref:c,className:"bubble-container ".concat("PORTFOLIO"===e.curPage?"":"retreat"),children:[Object(o.jsxs)("div",{className:"bubble top-left ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(o.jsx)("img",{className:"bubble-img",src:v}),Object(o.jsx)("a",{href:"https://viewnify.herokuapp.com/",children:Object(o.jsxs)("div",{className:"bubble-info",children:[Object(o.jsx)("h2",{children:"Viewnify"}),Object(o.jsx)("a",{href:"https://github.com/jwhector/viewnify",children:Object(o.jsx)("img",{className:"ico",src:p})})]})})]}),Object(o.jsxs)("div",{className:"bubble top-right ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(o.jsx)("img",{className:"bubble-img",src:x}),Object(o.jsx)("a",{href:"https://meta-meme-market.herokuapp.com/",children:Object(o.jsxs)("div",{className:"bubble-info",children:[Object(o.jsx)("h2",{children:"MetaMeme"}),Object(o.jsx)("a",{href:"https://github.com/jwhector/meta-meme-market",children:Object(o.jsx)("img",{className:"ico",src:p})})]})})]}),Object(o.jsxs)("div",{className:"bubble bot-left ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(o.jsx)("img",{className:"bubble-img",src:f}),Object(o.jsx)("a",{href:"https://jwhector.github.io/mind-gro/",children:Object(o.jsxs)("div",{className:"bubble-info",children:[Object(o.jsx)("h2",{children:"MindGro"}),Object(o.jsx)("a",{href:"https://github.com/jwhector/mind-gro",children:Object(o.jsx)("img",{className:"ico",src:p})})]})})]}),Object(o.jsxs)("div",{className:"bubble bot-right ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(o.jsx)("img",{className:"bubble-img",src:g}),Object(o.jsx)("a",{href:"https://jwhector.github.io/code-quiz/",children:Object(o.jsxs)("div",{className:"bubble-info",children:[Object(o.jsx)("h2",{children:"Glass Animals Quiz"}),Object(o.jsx)("a",{href:"https://github.com/jwhector/code-quiz",children:Object(o.jsx)("img",{className:"ico",src:p})})]})})]})]})]})]})}var P=t(91),k=(t(455),t.p+"static/media/github.6cdbb793.png"),C=t.p+"static/media/linkedin.7be0d03c.png",w=t.p+"static/media/email.2936ace5.png";function T(e){var c=Object(a.useRef)(null),t=Object(d.f)(),s=!1;Object(a.useEffect)((function(){e.setCurPage("CONTACT")}),[]),Object(a.useEffect)((function(){var t=c.current;if("CONTACT"!==e.curPage)return t.addEventListener("animationend",i),function(){t.removeEventListener("animationend",i)}}),[e.curPage]);var i=function(){s||(t("/".concat(e.curPage.toLowerCase())),s=!0)};return Object(o.jsxs)("div",{id:"contact",className:"page-container",children:[Object(o.jsx)(b,{curPage:e.curPage,setCurPage:e.setCurPage}),Object(o.jsxs)("div",{className:"body-container",children:[Object(o.jsx)(l,{name:"Contact",page:"contact",className:"centered shrinked shrinked-text in-focus ".concat("CONTACT"===e.curPage?"lift-circle":"lower-circle")}),Object(o.jsxs)("div",{ref:c,className:"contact-container ".concat("CONTACT"===e.curPage?"":"retract-contact"),children:[Object(o.jsx)("div",{className:"contact-elem github",children:Object(o.jsx)("a",{href:"https://github.com/jwhector",children:Object(o.jsx)("img",{src:k})})}),Object(o.jsx)("div",{className:"contact-elem email",children:Object(o.jsx)("a",{href:"mailto:jared.hector@gmail.com",children:Object(o.jsx)("img",{src:w})})}),Object(o.jsx)("div",{className:"contact-elem linkedin",children:Object(o.jsx)("a",{href:"https://linkedin.com/in/jared-hector",children:Object(o.jsx)("img",{src:C})})})]})]})]})}var L=function(){var e=Object(a.useState)("home"),c=Object(r.a)(e,2),t=c[0],s=c[1];return Object(o.jsx)(P.a,{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/react-portfolio/",element:Object(o.jsx)(m,{curPage:t,setCurPage:s})}),Object(o.jsx)(d.a,{path:"/react-portfolio/about",element:Object(o.jsx)(O,{curPage:t,setCurPage:s})}),Object(o.jsx)(d.a,{path:"/react-portfolio/portfolio",element:Object(o.jsx)(N,{curPage:t,setCurPage:s})}),Object(o.jsx)(d.a,{path:"/react-portfolio/contact",element:Object(o.jsx)(T,{curPage:t,setCurPage:s})})]})})};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}},[[456,1,2]]]);
//# sourceMappingURL=main.e81a5eed.chunk.js.map