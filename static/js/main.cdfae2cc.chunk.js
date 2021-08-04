(this["webpackJsonpcovid19-dashboard"]=this["webpackJsonpcovid19-dashboard"]||[]).push([[0],{120:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(35),o=n.n(a),s=n(3),i=(n(99),n(56)),l=n.n(i),u=n(86),d=n(5),j=n(87),b=n.n(j),O=(n(119),n(240)),f=n(241),h=(n(120),n(1)),x=function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsxs)("h1",{className:"title",children:[Object(h.jsx)("div",{children:"Covid-19"}),Object(h.jsx)("div",{children:"Dashboard"})]}),Object(h.jsx)("i",{className:"fas fa-viruses"})]}),Object(h.jsx)("a",{href:"https://github.com/odil-abdulloyev/covid19-dashboard",target:"_blank",rel:"noreferrer",className:"github",children:Object(h.jsx)("i",{className:"fab fa-github"})})]})},v=(n(122),function(e){var t=e.listContent,n=void 0===t?null:t,c=e.mapContent,r=void 0===c?null:c,a=e.tableContent,o=void 0===a?null:a,s=e.chartContent,i=void 0===s?null:s;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(O.a,{children:[Object(h.jsx)(f.a,{xxl:3,xl:3,l:3,md:3,sm:{order:1,span:5},className:"list-container",children:n}),Object(h.jsx)(f.a,{xxl:{order:1,span:5},xl:{order:1,span:5},l:{order:1,span:5},md:{order:1,span:5},sm:{order:-1,span:12},className:"map-container",children:r}),Object(h.jsxs)(f.a,{xxl:4,xl:4,l:4,md:4,sm:{order:2,span:7},className:"table-chart-container",children:[Object(h.jsx)(O.a,{children:Object(h.jsx)(f.a,{xxl:12,xl:12,l:12,className:"table-container",children:o})}),Object(h.jsx)(O.a,{children:Object(h.jsx)(f.a,{xxl:12,xl:12,l:12,className:"chart-container",children:i})})]})]})]})}),p="https://corona.lmao.ninja/v2/countries",m="https://api.mapbox.com/styles/v1/j0hn-d03/ckrx3ina30ihn18p683g9oyn1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiajBobi1kMDMiLCJhIjoiY2tyeDJ1d2IyMDUzNjJvbXJjaTVuNjR1biJ9.zspgA8Q6Df0zjna6OS4QJg",y={cases:"cases",deaths:"deaths",recovered:"recovered"},g={absolute:"absolute",per100k:"per 100k population"},N={total:"total",today:"today"},C={index:"index",unit:"unit",period:"period"},D="SET_COVID_DATA",E="SET_CURRENT_INDEX",k="SET_CURRENT_UNIT",S="SET_CURRENT_COUNTRY",I="SET_CURRENT_PERIOD",R=function(e){return{type:E,payload:e}},T=function(e){return{type:k,payload:e}},w=function(e){return{type:I,payload:e}},_=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){a(null===e||void 0===e?void 0:e.current)}),[e]),r},U=n(8),J=function(e,t){return e.reduce((function(e,n){return e+n[t]}),0)},P=function(e){var t,n=e.covidData,c=e.countryData,r=e.index,a=e.period,o=e.unit,s="today".concat(r[0].toUpperCase()+r.slice(1)),i=0;if(a===N.total){var l;i=null!==(l=null===c||void 0===c?void 0:c[r])&&void 0!==l?l:J(n,r)}else{if(a!==N.today)throw new TypeError("Invalid period");var u;i=null!==(u=null===c||void 0===c?void 0:c[s])&&void 0!==u?u:J(n,s)}o===g.per100k&&(i=Math.round(i/(null!==(t=null===c||void 0===c?void 0:c.population)&&void 0!==t?t:J(n,"population"))*1e5));return i},L=function(e){var t=e.target,n=e.values,r=Object(s.b)(),a=Object(c.useState)(0),o=Object(d.a)(a,2),i=o[0],l=o[1];Object(c.useEffect)((function(){var e=t===C.index?R:t===C.unit?T:t===C.period?w:null;if(!e)throw new TypeError("Invalid prop target");r(e(n[i]))}),[r,n,i,t]);var u=function(e){var t=i+e,c=n.length;l(t<0?(c+t%c)%c:t%c)};return Object(h.jsxs)("div",{className:"control-panel",children:[Object(h.jsx)("button",{className:"control",onClick:function(){return u(-1)},children:"\u25c1"}),Object(h.jsx)("span",{children:n[i]}),Object(h.jsx)("button",{className:"control",onClick:function(){return u(1)},children:"\u25b7"})]})},M=(n(123),function(e){var t=e.target,n=Object(c.useState)(document.fullscreenElement),r=Object(d.a)(n,2),a=r[0],o=r[1];Object(c.useEffect)((function(){var e=function(){o(document.fullscreenElement),t.classList.toggle("fullscreen")};return document.addEventListener("fullscreenchange",e),function(){document.removeEventListener("fullscreenchange",e)}}),[t]);return Object(h.jsx)("button",{className:"fullscreen-button",onClick:function(){document.fullscreenElement?document.exitFullscreen().catch((function(e){return console.log(e.message)})):t.requestFullscreen().catch((function(e){return console.log(e.message)}))},children:a?Object(h.jsx)("i",{className:"fas fa-compress-arrows-alt"}):Object(h.jsx)("i",{className:"fas fa-expand-arrows-alt"})})}),F=(n(124),function(e){var t=e.searchQuery,n=e.setSearchQuery,r=Object(c.useState)(!0),a=Object(d.a)(r,2),o=a[0],s=a[1];Object(c.useEffect)((function(){s(!t)}),[t]);return Object(h.jsxs)("div",{className:"search-bar",children:[Object(h.jsx)("input",{className:"search-field",type:"search",placeholder:"Search...",value:t,onChange:function(e){n(e.target.value)}}),!o&&Object(h.jsx)("button",{className:"clear-button",onClick:function(){n("")},children:"\xd7"})]})}),Q=(n(125),function(){var e,t=Object(s.c)((function(e){return e.covidData})),n=Object(s.c)((function(e){return e.currentIndex})),r=Object(s.c)((function(e){return e.currentUnit})),a=Object(s.c)((function(e){return e.currentPeriod})),o=Object(s.b)(),i=Object(c.useState)(null),l=Object(d.a)(i,2),u=l[0],j=l[1],b=Object(c.useState)(""),O=Object(d.a)(b,2),f=O[0],x=O[1],v=Object(c.useRef)(null),p=_(v),m=function(e){o({type:S,payload:e}),j(e.country)};return Object(h.jsxs)("div",{className:"block list",ref:v,children:[Object(h.jsx)(M,{target:p}),Object(h.jsxs)("div",{className:"controls",children:[Object(h.jsx)(L,{target:C.index,values:[y.cases,y.deaths,y.recovered]}),Object(h.jsx)(F,{searchQuery:f,setSearchQuery:x})]}),Object(h.jsx)("ul",{children:t.filter((e=f,function(t){return t.country.toLowerCase().search(e.toLowerCase())>-1})).map((function(e){return Object(h.jsxs)("li",{onClick:function(){return m(e)},className:"list-item ".concat(u===e.country&&"active"),children:[Object(h.jsxs)("div",{className:"country",children:[Object(h.jsx)("img",{src:e.countryInfo.flag,alt:e.countryInfo.iso3,className:"country-flag"}),Object(h.jsx)("span",{className:"country-name",children:e.country})]}),Object(h.jsx)("div",{className:"amount ".concat(n),children:P({covidData:t,countryData:e,index:n,unit:r,period:a})})]},e.country+e.countryInfo._id)}))})]})}),V=(n(126),function(){var e,t=Object(s.c)((function(e){return e.covidData})),n=Object(s.c)((function(e){return e.currentCountry})),r=Object(s.c)((function(e){return e.currentPeriod})),a=Object(s.c)((function(e){return e.currentUnit})),o=Object(c.useRef)(null),i=_(o);return Object(h.jsxs)("div",{className:"block table",ref:o,children:[Object(h.jsx)(M,{target:i}),Object(h.jsx)(L,{target:C.period,values:[N.total,N.today]}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:Object(h.jsx)("th",{colSpan:"2",children:null!==(e=null===n||void 0===n?void 0:n.country)&&void 0!==e?e:"Global"})})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Cases"}),Object(h.jsx)("td",{children:P({covidData:t,countryData:n,unit:a,period:r,index:y.cases})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Deaths"}),Object(h.jsx)("td",{className:"deaths",children:P({covidData:t,countryData:n,unit:a,period:r,index:y.deaths})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Recovered"}),Object(h.jsx)("td",{className:"recovered",children:P({covidData:t,countryData:n,unit:a,period:r,index:y.recovered})})]})]})]}),Object(h.jsx)(L,{target:C.unit,values:[g.absolute,g.per100k]})]})}),z=n(2),A=(n(127),n(243)),B=n(242),G=n(10),W=n.n(G),X=(n(128),function(){var e=Object(s.c)((function(e){return e.covidData})),t=Object(c.useRef)(null),n=Object(s.c)((function(e){return e.currentIndex})),r=Object(s.c)((function(e){return e.currentCountry})),a=Object(c.useState)([0,0]),o=Object(d.a)(a,2),i=o[0],l=o[1],u=Object(c.useState)(!1),j=Object(d.a)(u,2),b=j[0],O=j[1],f=Object(c.useRef)(null),x=_(f);Object(c.useEffect)((function(){var e,t=null!==(e=null===r||void 0===r?void 0:r.countryInfo)&&void 0!==e?e:{},n=t.lat,c=void 0===n?0:n,a=t.long;l([c,void 0===a?0:a]),O(!!r)}),[r]);var v=Object(c.useCallback)((function(t,c){var r=t.properties,a=r.country,o=r.updated,s=r.cases,i=r.deaths,l=r.recovered,u=function(e){for(var t=e.covidData,n=e.index,c=e.amount,r=e.maxRate,a=void 0===r?8:r,o=e.ratesAmount,s=void 0===o?15:o,i=Math.max.apply(Math,Object(U.a)(t.map((function(e){return e[n]})))),l=s-1;l>0;--l)if(c>=l/s*i)return a*(l+1)/s;return 1*a/s}({covidData:e,index:n,amount:r[n]}),d="\n      <span class='icon-marker ".concat(n,"' style=\"width: ").concat(u,"rem; height: ").concat(u,"rem;\">\n        <span class='icon-marker-tooltip'>\n          <h5>").concat(a,"</h5>\n          <ul>\n            <li>\n              <strong>Confirmed: </strong>\n              <span class='cases'>").concat(s,"</span>\n            </li>\n            <li>\n              <strong>Deaths: </strong>\n              <span class='deaths'>").concat(i,"</span>\n            </li>\n            <li>\n              <strong>Recovered: </strong>\n              <span class='recovered'>").concat(l,"</span>\n            </li>\n            <li>\n              <strong>Last update: </strong>\n              <span>").concat(new Date(o).toLocaleString(),"</span>\n            </li>\n          </ul>\n        </span>\n      </span>\n    ");return W.a.marker(c,{icon:W.a.divIcon({className:"icon",html:d}),riseOnHover:!0})}),[n,e]);return Object(c.useEffect)((function(){var n=t.current.leafletElement,c={type:"FeatureCollection",features:e.map((function(e){var t=e.countryInfo,n=t.lat,c=t.long;return{type:"Feature",properties:Object(z.a)({},e),geometry:{type:"Point",coordinates:[c,n]}}}))},r=new W.a.GeoJSON(c,{pointToLayer:v}).addTo(n);return function(){r.removeFrom(n)}}),[e,v]),Object(h.jsxs)("div",{className:"block map",ref:f,children:[Object(h.jsx)(M,{target:x}),Object(h.jsx)(A.a,{ref:t,className:"map-container",center:i,zoom:b?8:3,scrollWheelZoom:!0,children:Object(h.jsx)(B.a,{url:m})})]})}),Y=n(40);n(235);Y.a.defaults.color=getComputedStyle(document.documentElement).getPropertyValue("--text-color-light"),Y.a.defaults.borderColor="#b3dee210";var q=function(){var e=Object(s.c)((function(e){return e.covidData})),t=Object(s.c)((function(e){return e.currentCountry})),n=Object(c.useRef)(null),r=_(n);return Object(h.jsxs)("div",{className:"block chart",ref:n,children:[Object(h.jsx)(M,{target:r}),Object(h.jsx)("div",{className:"chart-container",children:Object(h.jsx)(Y.b,{data:{labels:["Cases","Deaths","Recovered"],datasets:[{data:[P({covidData:e,countryData:t,index:y.cases,period:N.total,unit:g.absolute}),P({covidData:e,countryData:t,index:y.deaths,period:N.total,unit:g.absolute}),P({covidData:e,countryData:t,index:y.recovered,period:N.total,unit:g.absolute})],backgroundColor:["rgba(54, 162, 235, 0.2)","rgba(255, 99, 132, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:[getComputedStyle(document.documentElement).getPropertyValue("--text-color-light"),getComputedStyle(document.documentElement).getPropertyValue("--text-color-danger"),getComputedStyle(document.documentElement).getPropertyValue("--text-color-success")],borderWidth:1}]}})})]})},H=(n(236),function(){return Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)("div",{className:"loadingio-spinner-rolling-tgnvbc7dmop",children:Object(h.jsx)("div",{className:"ldio-gb52ke7jo7",children:Object(h.jsx)("div",{})})})})}),Z=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(s.b)();return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(p);case 2:return t=e.sent,e.next=5,t.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){a(function(e){return{type:D,payload:e}}(e)),r(!0)}))}),[a]),n?Object(h.jsx)(v,{listContent:Object(h.jsx)(Q,{}),mapContent:Object(h.jsx)(X,{}),tableContent:Object(h.jsx)(V,{}),chartContent:Object(h.jsx)(q,{})}):Object(h.jsx)(H,{})},K=n(90),$={covidData:[],currentIndex:y.cases,currentUnit:g.absolute,currentPeriod:N.total,currentCountry:null},ee=Object(K.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(z.a)(Object(z.a)({},e),{},{covidData:t.payload});case E:return Object(z.a)(Object(z.a)({},e),{},{currentIndex:t.payload});case k:return Object(z.a)(Object(z.a)({},e),{},{currentUnit:t.payload});case S:return Object(z.a)(Object(z.a)({},e),{},{currentCountry:t.payload});case I:return Object(z.a)(Object(z.a)({},e),{},{currentPeriod:t.payload});default:return e}}));o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{store:ee,children:Object(h.jsx)(Z,{})})}),document.getElementById("root"))},99:function(e,t,n){}},[[237,1,2]]]);
//# sourceMappingURL=main.cdfae2cc.chunk.js.map