"use strict";(self.webpackChunkdoorprize_client=self.webpackChunkdoorprize_client||[]).push([[471],{3763:function(e,n,t){t.d(n,{O:function(){return o},c:function(){return r}});var r="http://localhost:5000",o="ws://localhost:5000/doorprize"},8005:function(e,n,t){var r=t(9439),o=t(2791),c=t(5087),s=t(3763),a=new c.w3cwebsocket(s.O);n.Z=function(e){var n=e||{},t=n.onStop,c=void 0===t?function(){}:t,s=n.onGetNumber,i=void 0===s?function(){}:s,u=(0,o.useState)(!1),l=(0,r.Z)(u,2),f=l[0],d=l[1],p=(0,o.useState)(),v=(0,r.Z)(p,2),Z=v[0],h=v[1],g=(0,o.useState)(""),m=(0,r.Z)(g,2),S=m[0],k=m[1],w=(0,o.useState)(!0),x=(0,r.Z)(w,2),b=x[0],C=x[1];return(0,o.useEffect)((function(){a.onopen=function(){C(!1),console.log("WebSocket Client Connected")},a.onmessage=function(e){var n=e.data.toString();try{if("stop"===n)d(!1),c();else{var t=JSON.parse(n),r=t.name,o=t.index;h(parseInt(o)),k(r),d(!0),i()}}catch(s){console.error(s)}},a.onclose=function(){C(!0)},a.onerror=function(e){console.error("Socket encountered error: ",e.message,"Closing socket"),a.close()}}),[c,i]),{isRandomizing:f,number:Z,name:S,isDisconnected:b}}},2836:function(e,n,t){var r=t(4165),o=t(5861),c=t(9439),s=t(2388),a=t(2791);n.Z=function(e){var n=(0,a.useState)(!1),t=(0,c.Z)(n,2),i=t[0],u=t[1],l=(0,a.useState)(null),f=(0,c.Z)(l,2),d=f[0],p=f[1],v=(0,a.useState)(null),Z=(0,c.Z)(v,2),h=Z[0],g=Z[1],m=(0,a.useCallback)((0,o.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),n.next=4,s.Z.get(e);case 4:t=n.sent,g(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p(n.t0);case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])}))),[e]);return(0,a.useEffect)((function(){m()}),[m]),{data:null===h||void 0===h?void 0:h.data,loading:i,error:d,refetch:m}}},6471:function(e,n,t){t.r(n);var r=t(3763),o=t(2556),c=t(2312),s=t(6627),a=t(6151),i=t(2836),u=t(8005),l=t(184);n.default=function(){var e=(0,i.Z)("".concat(r.c,"/winners")),n=e.data,t=e.refetch,f=(0,i.Z)("".concat(r.c,"/winners/array")),d=f.data,p=f.refetch,v=(0,u.Z)({onStop:function(){t(),p()}}).isDisconnected;return(0,l.jsxs)(l.Fragment,{children:[v&&(0,l.jsx)(o.Z,{message:"Connection Disconnected, Please Refresh",type:"error"}),(0,l.jsx)(c.Z,{size:[8,16],wrap:!0,children:(d||[]).map((function(e){var t,r;return null!==(t=n[e])&&void 0!==t&&t.isCancelled||null===(r=n[e])||void 0===r||!r.isWin?null:(0,l.jsx)(s.Z,{style:{minWidth:"120px",background:"#FFFDD0"},children:(0,l.jsx)(a.Z.Title,{style:{margin:"0",textAlign:"center"},level:1,children:e})})}))})]})}}}]);
//# sourceMappingURL=471.36bd40d0.chunk.js.map