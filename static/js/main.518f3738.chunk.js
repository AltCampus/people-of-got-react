(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),l=a(3),s=a.n(l),i=(a(10),a(11),function(e){var t=e.name,a=e.description,n=e.image;e.wikiLink;return r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:n,alt:t}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null)))))}),m=function(){return r.a.createElement("section",{className:"hero is-link"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("h1",{className:"title"},"\ud83d\udc51 Peoples Of GOT"))))};function o(){var e=r.a.useState(0),t=Object(n.a)(e,2),a=t[0],c=t[1],l=r.a.useState([]),s=Object(n.a)(l,2),o=s[0],u=s[1],d="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";return r.a.useEffect(function(){fetch(d).then(function(e){return e.json()}).then(function(e){return u(e.houses)})},[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},r.a.createElement("div",{className:"tabs is-toggle is-toggle-rounded is-centered",style:{marginBottom:"3rem"}},r.a.createElement("ul",null,o.map(function(e,t){return r.a.createElement("li",{className:t===a?"is-active":""},r.a.createElement("a",{onClick:function(){return c(t)}},e.name))}))),r.a.createElement("div",{className:"columns is-centered is-multiline is-mobile"},o[a]&&o[a].people.map(function(e){return r.a.createElement(i,e)}))))}var u=document.getElementById("root");s.a.render(r.a.createElement(o,null),u)},4:function(e,t,a){e.exports=a(12)}},[[4,1,2]]]);
//# sourceMappingURL=main.518f3738.chunk.js.map