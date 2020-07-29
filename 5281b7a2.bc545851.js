(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),o=(r(0),r(177)),i={id:"architecture",title:"Architecture",sidebar_label:"Architecture"},c={id:"architecture",isDocsHomePage:!1,title:"Architecture",description:"Architecture Diagram",source:"@site/docs/architecture.md",permalink:"/docs/architecture",editUrl:"https://github.com/serverless-nextjs/serverless-next.js/documentation/docs/docs/architecture.md",sidebar_label:"Architecture",sidebar:"someSidebar",previous:{title:"Lambda At Edge Configuration",permalink:"/docs/lambdaatedgeconfig"},next:{title:"Inputs",permalink:"/docs/inputs"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/arch_no_grid.svg",alt:"Architecture Diagram"}))),Object(o.b)("p",null,"Four Cache Behaviours are created in CloudFront."),Object(o.b)("p",null,"The first two ",Object(o.b)("inlineCode",{parentName:"p"},"_next/*")," and ",Object(o.b)("inlineCode",{parentName:"p"},"static/*")," forward the requests to S3."),Object(o.b)("p",null,"The third is associated to a lambda function which is responsible for handling three types of requests."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Server side rendered page. Any page that defines ",Object(o.b)("inlineCode",{parentName:"p"},"getInitialProps")," or ",Object(o.b)("inlineCode",{parentName:"p"},"getServerSideProps")," method will be rendered at this level and the response is returned immediately to the user.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Statically optimised page. Requests to pages that were pre-compiled by next to HTML are forwarded to S3.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Public resources. Requests to root level resources like ",Object(o.b)("inlineCode",{parentName:"p"},"/robots.txt"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/favicon.ico"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/manifest.json"),", etc. These are forwarded to S3."))),Object(o.b)("p",null,"The reason why 2. and 3. have to go through Lambda@Edge first is because the routes don't conform to a pattern like ",Object(o.b)("inlineCode",{parentName:"p"},"_next/*")," or ",Object(o.b)("inlineCode",{parentName:"p"},"static/*"),". Also, one cache behaviour per route is a bad idea because CloudFront only allows ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions"}),"25 per distribution"),"."),Object(o.b)("p",null,"The fourth cache behaviour handles next API requests ",Object(o.b)("inlineCode",{parentName:"p"},"api/*")))}s.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);