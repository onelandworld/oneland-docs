(self.webpackChunkoneland_docs=self.webpackChunkoneland_docs||[]).push([[247],{5862:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o={id:"users",title:"",slug:"/users",hide_table_of_contents:!0},i={unversionedId:"v1.0/users",id:"v1.0/users",isDocsHomePage:!1,title:"",description:"URL",source:"@site/docs/v1.0/users.mdx",sourceDirName:"v1.0",slug:"/users",permalink:"/users",version:"current",frontMatter:{id:"users",title:"",slug:"/users",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"",permalink:"/floorPrices"}},l=[{value:"URL",id:"url",children:[]},{value:"Description",id:"description",children:[]},{value:"Type",id:"type",children:[]},{value:"Header",id:"header",children:[]},{value:"Sample Curl Command",id:"sample-curl-command",children:[]},{value:"QUERY PARAMS",id:"query-params",children:[]},{value:"Sample Response",id:"sample-response",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"url"},"URL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://open.oneland.world/api/v1/project/{projectId}/users\n")),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Get a metaverse project's users stats in paginated way. Users stats will be indexed hourly for each metaverse project."),(0,s.kt)("p",null,"Records will be returned ",(0,s.kt)("strong",{parentName:"p"},"in time desending order"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Currently only ",(0,s.kt)("strong",{parentName:"p"},"Decentraland")," is supported for this API"))),(0,s.kt)("h2",{id:"type"},"Type"),(0,s.kt)("p",null,"GET"),(0,s.kt)("h2",{id:"header"},"Header"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <YOUR-API-TOKEN>"\n')),(0,s.kt)("h2",{id:"sample-curl-command"},"Sample Curl Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET 'https://open.oneland.world/api/v1/project/{projectId}/users' \\\n  --header 'Authorization: Bearer <YOUR-API-TOKEN>'\n")),(0,s.kt)("h2",{id:"query-params"},"QUERY PARAMS"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"offset")),(0,s.kt)("p",null,"For pagination. Number of record offset from the beginning of the result list. Default to 0."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"limit")),(0,s.kt)("p",null,"For pagination. Maximum number of records to return. Default to 10."),(0,s.kt)("h2",{id:"sample-response"},"Sample Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "message": "success",\n    "data": [\n        {\n            "usersCount": 478,\n            "timestamp": "2022-08-23T08:00:00.000Z"\n        },\n        ...\n    ]\n}\n')))}p.isMDXComponent=!0}}]);