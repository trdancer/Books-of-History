(this["webpackJsonpBooks-of-History"]=this["webpackJsonpBooks-of-History"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(6),c=n.n(o),i=(n(27),n(28),n(4)),s=n(5),l=n(22),d=n(8),b=n(2),u=n(7),j=n.n(u),h="FETCH_EVENTS_START",p="FETCH_EVENTS_SUCCESS",v="FETCH_EVENTS_FAILURE",O=function(e){return function(t){var n;t({type:h,payload:n});var r="https://byabbe.se/on-this-day/".concat(e.month,"/").concat(e.day,"/events.json");j.a.get(r).then((function(e){var n=e.data.events.map((function(e,t){return{description:e.description,article_titles:e.wikipedia.map((function(e){return e.title})),year:e.year,event_index:t}}));console.log(e.data),t(function(e){return{type:p,payload:e}}(n))})).catch((function(e){t(function(e){return{type:v,payload:e}}(e.message))}))}},f="FETCH_BOOKS_START",y="FETCH_BOOKS_SUCCESS",x="FETCH_BOOKS_FAILURE",g=function(e,t){return function(n){n(function(e){return{type:f,payload:e}}(t));var r=[];e.forEach((function(t){var n=t.replace(" ","+");r.push(j.a.get("".concat("https://openlibrary.org/search.json?q=").concat(n)).then((function(t){var n=[],r=12/e.length;t.data.docs.length<12&&(r=t.data.docs.length);for(var a=0;a<r;a++){var o=t.data.docs[a];console.log("found a book: ",o),n.push(o)}return Promise.resolve(n)})).catch((function(e){return Promise.reject(e)})))})),Promise.all(r).then((function(e){var r=[];e.forEach((function(e){e.forEach((function(e){return r.push(e)}))})),n(function(e,t){return{type:y,payload:{event_index:t,books:e}}}(r,t))})).catch((function(e){n(function(e,t){return{type:x,payload:{event_index:t,error:e}}}(e,t))}))}},m={eventsLoading:!1,events:[],error:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)(Object(b.a)({},e),{},{eventsLoading:!0,error:""});case p:return Object(b.a)(Object(b.a)({},e),{},{eventsLoading:!1,events:t.payload,error:""});case v:return Object(b.a)(Object(b.a)({},e),{},{eventsLoading:!1,events:[],error:t.payload});case f:console.log(t.payload);var n=Object(d.a)(e.events);return n[t.payload].loading=!0,n[t.payload].error="",Object(b.a)(Object(b.a)({},e),{},{events:n});case y:var r=Object(d.a)(e.events);return r[t.payload.event_index].loading=!1,r[t.payload.event_index].error="",r[t.payload.event_index].books=t.payload.books,Object(b.a)(Object(b.a)({},e),{},{events:r});case x:var a=Object(d.a)(e.events);return a[t.payload.event_index].loading=!1,a[t.payload.event_index].error=t.payload.error,Object(b.a)(Object(b.a)({},e),{},{events:a});default:return e}},E="SET_DATE_MONTH",k="SET_DATE_DAY",N=new Date,T={day:N.getDate(),month:N.getMonth()+1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(b.a)(Object(b.a)({},e),{},{month:t.payload});case k:return Object(b.a)(Object(b.a)({},e),{},{day:t.payload});default:return e}},S=Object(s.c)({date:C,events:_}),F=Object(s.d)(S,Object(s.a)(l.a)),A=function(e){return[31,28,31,30,31,30,31,31,30,31,30,31][e-1]},B=(n(53),n(0));var D=function(e){var t=e.author,n=e.title,r=e.publish_year,a=e.isbn;return Object(B.jsxs)("div",{className:"Book",children:[Object(B.jsx)("h2",{children:n}),Object(B.jsx)("img",{className:"cover-image",src:"https://covers.openlibrary.org/b/isbn/".concat(a,"-M.jpg"),alt:"No cover"}),Object(B.jsxs)("h3",{children:["Author: ",t]}),Object(B.jsxs)("h3",{children:["Year Published: ",r]}),a?Object(B.jsx)("a",{href:"https://openlibrary.org/isbn/".concat(a),target:"_blank",rel:"noreferrer",children:"Learn more"}):Object(B.jsx)("p",{children:"No Isbn given"})]})};n(55);var H=function(){return Object(B.jsx)("img",{src:"/loading.gif"})};n(56);var L=function(e){var t=e.event,n=Object(i.b)();return Object(B.jsxs)("div",{className:"Event",children:[Object(B.jsx)("h2",{children:"Event:"}),Object(B.jsx)("p",{className:"event-title",children:t.description}),Object(B.jsxs)("h3",{classname:"event-year",children:["Year: ",t.year]}),Object(B.jsx)("button",{className:"books-button",onClick:function(){n(g(t.article_titles,t.event_index))},children:"Find Books"}),Object(B.jsx)("div",{class:"BookContainer",children:t.loading?Object(B.jsx)(H,{}):t.error?Object(B.jsx)("h2",{children:t.error}):t.books?t.books.map((function(e){return Object(B.jsx)(D,{author:e.author_name?e.author_name[0]:"No Author provided",title:e.title,isbn:e.isbn?e.isbn[0]:null,publish_year:e.first_publish_year?e.first_publish_year:"No Publishing Year provided"})})):null})]})};n(57);var w=function(){var e=Object(i.c)((function(e){return e.date})),t=Object(i.c)((function(e){return e.events}));console.log("date state is ",e);var n,r=Object(i.b)();return Object(B.jsxs)("div",{className:"EventContainer",children:[Object(B.jsxs)("div",{className:"date-container",children:[Object(B.jsxs)("div",{className:"picker",children:[Object(B.jsx)("label",{htmlFor:"month-input",children:"Month : "}),Object(B.jsxs)("div",{className:"month-container",children:[Object(B.jsx)("input",{id:"month-input",type:"number",value:e.month,min:1,max:12,onChange:function(e){var t;r((t=e.target.value,{type:E,payload:t}))}}),Object(B.jsx)("span",{id:"month-string",children:(n=e.month,["January","February","March","April","May","June","July","August","September","October","November","December"][n-1])})]})]}),Object(B.jsxs)("div",{className:"picker",children:[Object(B.jsx)("label",{htmlFor:"day-input",children:"Day:"}),Object(B.jsx)("input",{id:"day-input",type:"number",value:e.day,min:1,max:A(e.month),onChange:function(e){var t;r((t=e.target.value,{type:k,payload:t}))}})]})]}),Object(B.jsx)("div",{className:"button-container",children:Object(B.jsx)("button",{id:"get-events-button",onClick:function(){r(O(e))},children:"Get Events"})}),t.loading?Object(B.jsx)(H,{}):t.error?Object(B.jsx)("h3",{children:t.error}):t.events.map((function(e){return Object(B.jsx)(L,{event:e})}))]})};var M=function(){return Object(B.jsx)(i.a,{store:F,children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)("header",{id:"banner",children:Object(B.jsx)("h1",{children:"Historical Book Finder"})}),Object(B.jsx)(w,{}),Object(B.jsxs)("footer",{id:"footer",children:[Object(B.jsxs)("p",{children:["Data for events in history provided by ",Object(B.jsx)("a",{href:"https://byabbe.se/on-this-day/",target:"_blank",rel:"noreferrer",children:"byabbe.se"})," which in turn is scraped from ",Object(B.jsx)("a",{href:"https://wikipedia.org",target:"_blank",rel:"noreferrer",children:"Wikipedia"}),"."]}),Object(B.jsxs)("p",{children:["Data for books provided by ",Object(B.jsx)("a",{href:"https://openlibrary.org/developers",target:"_blank",rel:"noreferrer",children:"Open Library"})]})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(M,{})}),document.getElementById("root")),P()}},[[58,1,2]]]);
//# sourceMappingURL=main.3a856110.chunk.js.map