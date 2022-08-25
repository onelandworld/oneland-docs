"use strict";(self.webpackChunkoneland_docs=self.webpackChunkoneland_docs||[]).push([[417],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4417:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=t(3117),o=(t(7294),t(3905));const a={id:"projects",title:"",slug:"/projects",hide_table_of_contents:!0},l=void 0,i={unversionedId:"v1.0/projects",id:"v1.0/projects",title:"",description:"URL",source:"@site/docs/v1.0/projects.mdx",sourceDirName:"v1.0",slug:"/projects",permalink:"/projects",draft:!1,tags:[],version:"current",frontMatter:{id:"projects",title:"",slug:"/projects",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"",permalink:"/"},next:{title:"",permalink:"/stats"}},c={},p=[{value:"URL",id:"url",level:2},{value:"Description",id:"description",level:2},{value:"Type",id:"type",level:2},{value:"Header",id:"header",level:2},{value:"Sample Curl Command",id:"sample-curl-command",level:2},{value:"Sample Response",id:"sample-response",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"url"},"URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://open.oneland.world/v1/projects\n")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Get metaverse project list from OneLand platform."),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("p",null,"GET"),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <YOUR-API-TOKEN>"\n')),(0,o.kt)("h2",{id:"sample-curl-command"},"Sample Curl Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET 'https://open.oneland.world/v1/projects' \\\n  --header 'Authorization: Bearer <YOUR-API-TOKEN>'\n")),(0,o.kt)("h2",{id:"sample-response"},"Sample Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "code": 200,\n    "message": "success",\n    "data": [\n        {\n            "id": 1,\n            "name": "The Sandbox"\n        },\n        {\n            "id": 2,\n            "name": "Decentraland"\n        },\n        {\n            "id": 3,\n            "name": "Voxels"\n        },\n        {\n            "id": 4,\n            "name": "Somnium Space"\n        },\n        {\n            "id": 5,\n            "name": "Worldwide Webb"\n        },\n        {\n            "id": 6,\n            "name": "NFT Worlds"\n        },\n        {\n            "id": 7,\n            "name": "Otherside"\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);