(self.webpackChunkdoorprize_client=self.webpackChunkdoorprize_client||[]).push([[758],{3763:function(t,n,e){"use strict";e.d(n,{O:function(){return o},c:function(){return i}});var i="http://localhost:5000",o="ws://localhost:5000/doorprize"},8005:function(t,n,e){"use strict";var i=e(9439),o=e(2791),r=e(5087),a=e(3763),l=new r.w3cwebsocket(a.O);n.Z=function(t){var n=t||{},e=n.onStop,r=void 0===e?function(){}:e,a=n.onGetNumber,s=void 0===a?function(){}:a,c=(0,o.useState)(!1),d=(0,i.Z)(c,2),u=d[0],p=d[1],f=(0,o.useState)(),m=(0,i.Z)(f,2),h=m[0],g=m[1],v=(0,o.useState)(""),x=(0,i.Z)(v,2),S=x[0],Z=x[1],b=(0,o.useState)(!0),y=(0,i.Z)(b,2),w=y[0],z=y[1];return(0,o.useEffect)((function(){l.onopen=function(){z(!1),console.log("WebSocket Client Connected")},l.onmessage=function(t){var n=t.data.toString();try{if("stop"===n)p(!1),r();else{var e=JSON.parse(n),i=e.name,o=e.index;g(parseInt(o)),Z(i),p(!0),s()}}catch(a){console.error(a)}},l.onclose=function(){z(!0)},l.onerror=function(t){console.error("Socket encountered error: ",t.message,"Closing socket"),l.close()}}),[r,s]),{isRandomizing:u,number:h,name:S,isDisconnected:w}}},2836:function(t,n,e){"use strict";var i=e(4165),o=e(5861),r=e(9439),a=e(2388),l=e(2791);n.Z=function(t){var n=(0,l.useState)(!1),e=(0,r.Z)(n,2),s=e[0],c=e[1],d=(0,l.useState)(null),u=(0,r.Z)(d,2),p=u[0],f=u[1],m=(0,l.useState)(null),h=(0,r.Z)(m,2),g=h[0],v=h[1],x=(0,l.useCallback)((0,o.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,a.Z.get(t);case 4:e=n.sent,v(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f(n.t0);case 11:return n.prev=11,c(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])}))),[t]);return(0,l.useEffect)((function(){x()}),[x]),{data:null===g||void 0===g?void 0:g.data,loading:s,error:p,refetch:x}}},3758:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return A}});var i=e(4165),o=e(5861),r=e(3763),a=e(2556),l=e(2312),s=e(6627),c=e(6151),d=e(7462),u=e(4942),p=e(9439),f=e(1694),m=e.n(f),h=e(2791),g=e(1929),v=e(5564),x=e(9922),S=e(7521),Z=function(t){var n,e=t.componentCls,i=t.sizePaddingEdgeHorizontal,o=t.colorSplit,r=t.lineWidth;return(0,u.Z)({},e,(0,d.Z)((0,d.Z)({},(0,S.Wf)(t)),(n={borderBlockStart:r+"px solid "+o,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 "+t.dividerVerticalGutterMargin+"px",verticalAlign:"middle",borderTop:0,borderInlineStart:r+"px solid "+o},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:t.dividerHorizontalGutterMargin+"px 0"},"&-horizontal&-with-text":{display:"flex",margin:t.dividerHorizontalWithTextGutterMargin+"px 0",color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 "+o,"&::before, &::after":{position:"relative",top:"50%",width:"50%",borderBlockStart:r+"px solid transparent",borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},"&-horizontal&-with-text-left":{"&::before":{top:"50%",width:"5%"},"&::after":{top:"50%",width:"95%"}},"&-horizontal&-with-text-right":{"&::before":{top:"50%",width:"95%"},"&::after":{top:"50%",width:"5%"}}},(0,u.Z)(n,e+"-inner-text",{display:"inline-block",padding:"0 1em"}),(0,u.Z)(n,"&-dashed",{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:r+"px 0 0"}),(0,u.Z)(n,"&-horizontal&-with-text&-dashed",{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,u.Z)(n,"&-vertical&-dashed",{borderInlineStart:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,u.Z)(n,"&-plain&-with-text",{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize}),(0,u.Z)(n,"&-horizontal&-with-text-left&-no-default-orientation-margin-left",(0,u.Z)({"&::before":{width:0},"&::after":{width:"100%"}},e+"-inner-text",{paddingInlineStart:i})),(0,u.Z)(n,"&-horizontal&-with-text-right&-no-default-orientation-margin-right",(0,u.Z)({"&::before":{width:"100%"},"&::after":{width:0}},e+"-inner-text",{paddingInlineEnd:i})),n)))},b=(0,v.Z)("Divider",(function(t){var n=(0,x.TS)(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[Z(n)]}),{sizePaddingEdgeHorizontal:0}),y=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(e[i[o]]=t[i[o]])}return e},w=function(t){var n,e=h.useContext(g.E_),i=e.getPrefixCls,o=e.direction,r=t.prefixCls,a=t.type,l=void 0===a?"horizontal":a,s=t.orientation,c=void 0===s?"center":s,f=t.orientationMargin,v=t.className,x=t.children,S=t.dashed,Z=t.plain,w=y(t,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),z=i("divider",r),C=b(z),D=(0,p.Z)(C,2),E=D[0],k=D[1],N=c.length>0?"-"+c:c,I=!!x,T="left"===c&&null!=f,O="right"===c&&null!=f,j=m()(z,k,z+"-"+l,(n={},(0,u.Z)(n,z+"-with-text",I),(0,u.Z)(n,z+"-with-text"+N,I),(0,u.Z)(n,z+"-dashed",!!S),(0,u.Z)(n,z+"-plain",!!Z),(0,u.Z)(n,z+"-rtl","rtl"===o),(0,u.Z)(n,z+"-no-default-orientation-margin-left",T),(0,u.Z)(n,z+"-no-default-orientation-margin-right",O),n),v),M=(0,d.Z)((0,d.Z)({},T&&{marginLeft:f}),O&&{marginRight:f});return E(h.createElement("div",(0,d.Z)({className:j},w,{role:"separator"}),x&&"vertical"!==l&&h.createElement("span",{className:z+"-inner-text",style:M},x)))},z=e(8573),C=e.n(z),D=e(1818),E=e(1113),k=e(9393),N=e(9373),I=new N.E4("antSpinMove",{to:{opacity:1}}),T=new N.E4("antRotate",{to:{transform:"rotate(405deg)"}}),O=function(t){var n,e,i,o,r;return(0,u.Z)({},""+t.componentCls,(0,d.Z)((0,d.Z)({},(0,S.Wf)(t)),(r={position:"absolute",display:"none",color:t.colorPrimary,textAlign:"center",verticalAlign:"middle",opacity:0,transition:"transform "+t.motionDurationSlow+" "+t.motionEaseInOutCirc,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":(o={position:"relative"},(0,u.Z)(o,"> div > "+t.componentCls,(i={position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight},(0,u.Z)(i,t.componentCls+"-dot",{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-t.spinDotSize/2}),(0,u.Z)(i,t.componentCls+"-text",{position:"absolute",top:"50%",width:"100%",paddingTop:(t.spinDotSize-t.fontSize)/2+2,textShadow:"0 1px 2px "+t.colorBgContainer}),(0,u.Z)(i,"&"+t.componentCls+"-show-text "+t.componentCls+"-dot",{marginTop:-t.spinDotSize/2-10}),(0,u.Z)(i,"&-sm",(n={},(0,u.Z)(n,t.componentCls+"-dot",{margin:-t.spinDotSizeSM/2}),(0,u.Z)(n,t.componentCls+"-text",{paddingTop:(t.spinDotSizeSM-t.fontSize)/2+2}),(0,u.Z)(n,"&"+t.componentCls+"-show-text "+t.componentCls+"-dot",{marginTop:-t.spinDotSizeSM/2-10}),n)),(0,u.Z)(i,"&-lg",(e={},(0,u.Z)(e,t.componentCls+"-dot",{margin:-t.spinDotSizeLG/2}),(0,u.Z)(e,t.componentCls+"-text",{paddingTop:(t.spinDotSizeLG-t.fontSize)/2+2}),(0,u.Z)(e,"&"+t.componentCls+"-show-text "+t.componentCls+"-dot",{marginTop:-t.spinDotSizeLG/2-10}),e)),i)),(0,u.Z)(o,t.componentCls+"-container",{position:"relative",transition:"opacity "+t.motionDurationSlow,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:"all "+t.motionDurationSlow,content:'""',pointerEvents:"none"}}),(0,u.Z)(o,t.componentCls+"-blur",(0,u.Z)({clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none"},"&::after",{opacity:.4,pointerEvents:"auto"})),o)},(0,u.Z)(r,"&-tip",{color:t.spinDotDefault}),(0,u.Z)(r,t.componentCls+"-dot",{position:"relative",display:"inline-block",fontSize:t.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(t.spinDotSize-t.marginXXS/2)/2,height:(t.spinDotSize-t.marginXXS/2)/2,backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:I,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:T,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}}),(0,u.Z)(r,"&-sm "+t.componentCls+"-dot",{fontSize:t.spinDotSizeSM,i:{width:(t.spinDotSizeSM-t.marginXXS/2)/2,height:(t.spinDotSizeSM-t.marginXXS/2)/2}}),(0,u.Z)(r,"&-lg "+t.componentCls+"-dot",{fontSize:t.spinDotSizeLG,i:{width:(t.spinDotSizeLG-t.marginXXS)/2,height:(t.spinDotSizeLG-t.marginXXS)/2}}),(0,u.Z)(r,"&"+t.componentCls+"-show-text "+t.componentCls+"-text",{display:"block"}),r)))},j=(0,v.Z)("Spin",(function(t){var n=(0,x.TS)(t,{spinDotDefault:t.colorTextDescription,spinDotSize:t.controlHeightLG/2,spinDotSizeSM:.35*t.controlHeightLG,spinDotSizeLG:t.controlHeight});return[O(n)]}),{contentHeight:400}),M=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(e[i[o]]=t[i[o]])}return e},G=((0,k.b)("small","default","large"),null);var P=function(t){var n=t.spinPrefixCls,e=t.spinning,i=void 0===e||e,o=t.delay,r=t.className,a=t.size,l=void 0===a?"default":a,s=t.tip,c=t.wrapperClassName,f=t.style,v=t.children,x=t.hashId,S=M(t,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children","hashId"]),Z=h.useState((function(){return i&&!function(t,n){return!!t&&!!n&&!isNaN(Number(n))}(i,o)})),b=(0,p.Z)(Z,2),y=b[0],w=b[1];h.useEffect((function(){var t=C()((function(){w(i)}),o);return t(),function(){var n;null===(n=null===t||void 0===t?void 0:t.cancel)||void 0===n||n.call(t)}}),[o,i]);var z=function(e){var i,o=e.direction,a=m()(n,(i={},(0,u.Z)(i,n+"-sm","small"===l),(0,u.Z)(i,n+"-lg","large"===l),(0,u.Z)(i,n+"-spinning",y),(0,u.Z)(i,n+"-show-text",!!s),(0,u.Z)(i,n+"-rtl","rtl"===o),i),r,x),p=(0,D.Z)(S,["indicator","prefixCls"]),g=h.createElement("div",(0,d.Z)({},p,{style:f,className:a,"aria-live":"polite","aria-busy":y}),function(t,n){var e=n.indicator,i=t+"-dot";return null===e?null:(0,E.l$)(e)?(0,E.Tm)(e,{className:m()(e.props.className,i)}):(0,E.l$)(G)?(0,E.Tm)(G,{className:m()(G.props.className,i)}):h.createElement("span",{className:m()(i,t+"-dot-spin")},h.createElement("i",{className:t+"-dot-item"}),h.createElement("i",{className:t+"-dot-item"}),h.createElement("i",{className:t+"-dot-item"}),h.createElement("i",{className:t+"-dot-item"}))}(n,t),s?h.createElement("div",{className:n+"-text"},s):null);if("undefined"!==typeof v){var Z=m()(n+"-container",(0,u.Z)({},n+"-blur",y));return h.createElement("div",(0,d.Z)({},p,{className:m()(n+"-nested-loading",c,x)}),y&&h.createElement("div",{key:"loading"},g),h.createElement("div",{className:Z,key:"container"},v))}return g};return h.createElement(g.C,null,z)},W=function(t){var n=t.prefixCls,e=(0,h.useContext(g.E_).getPrefixCls)("spin",n),i=j(e),o=(0,p.Z)(i,2),r=o[0],a=o[1],l=(0,d.Z)((0,d.Z)({},t),{spinPrefixCls:e,hashId:a});return r(h.createElement(P,(0,d.Z)({},l)))};W.setDefaultIndicator=function(t){G=t};var H=W,X=e(2836),L=e(2388),B=e(8005),F=e(184),A=function(){var t=(0,X.Z)("".concat(r.c,"/winners")),n=t.data,e=t.refetch,d=(0,X.Z)("".concat(r.c,"/max")).data,u=(0,X.Z)("".concat(r.c,"/items")).data,p=(0,B.Z)({onStop:e}),f=p.number,m=p.isRandomizing,g=p.isDisconnected,v=d-1,x=function(){var t=(0,o.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.Z.post("".concat(r.c,"/cancel"),{number:n});case 2:return t.next=4,e();case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),S=(0,h.useMemo)((function(){for(var t=[],n=0;n<=v;n++)t.push("");return t}),[v]);return(0,F.jsxs)(F.Fragment,{children:[g&&(0,F.jsx)(a.Z,{message:"Connection Disconnected, Please Refresh",type:"error"}),(0,F.jsx)(l.Z,{size:[8,16],wrap:!0,children:S.map((function(t,e){var i,o,r;return(0,F.jsx)(s.Z,{onClick:function(){x(e)},size:"small",style:{cursor:"pointer",animation:e!==f||m||null!==(i=n[e])&&void 0!==i&&i.isCancelled?"":"success-blink 2s infinite",transition:"1s",minWidth:"54px",background:null!==(o=n[e])&&void 0!==o&&o.isCancelled?"#FFCCCB":null!==(r=n[e])&&void 0!==r&&r.isWin?"#abf7b1":"#F9F9F9"},children:(0,F.jsx)(c.Z.Title,{style:{margin:"0",textAlign:"center"},level:5,children:u[e]})})}))}),m&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(w,{}),(0,F.jsx)(s.Z,{size:"small",children:(0,F.jsxs)(l.Z,{children:[(0,F.jsx)(H,{}),"Shuffling"]})})]})]})}},821:function(t,n,e){var i=e(6050),o=/^\s+/;t.exports=function(t){return t?t.slice(0,i(t)+1).replace(o,""):t}},6050:function(t){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},8573:function(t,n,e){var i=e(8092),o=e(72),r=e(2582),a=Math.max,l=Math.min;t.exports=function(t,n,e){var s,c,d,u,p,f,m=0,h=!1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var e=s,i=c;return s=c=void 0,m=n,u=t.apply(i,e)}function S(t){return m=t,p=setTimeout(b,n),h?x(t):u}function Z(t){var e=t-f;return void 0===f||e>=n||e<0||g&&t-m>=d}function b(){var t=o();if(Z(t))return y(t);p=setTimeout(b,function(t){var e=n-(t-f);return g?l(e,d-(t-m)):e}(t))}function y(t){return p=void 0,v&&s?x(t):(s=c=void 0,u)}function w(){var t=o(),e=Z(t);if(s=arguments,c=this,f=t,e){if(void 0===p)return S(f);if(g)return clearTimeout(p),p=setTimeout(b,n),x(f)}return void 0===p&&(p=setTimeout(b,n)),u}return n=r(n)||0,i(e)&&(h=!!e.leading,d=(g="maxWait"in e)?a(r(e.maxWait)||0,n):d,v="trailing"in e?!!e.trailing:v),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,s=f=c=p=void 0},w.flush=function(){return void 0===p?u:y(o())},w}},152:function(t,n,e){var i=e(9066),o=e(3141);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==i(t)}},72:function(t,n,e){var i=e(7009);t.exports=function(){return i.Date.now()}},2582:function(t,n,e){var i=e(821),o=e(8092),r=e(152),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=i(t);var e=l.test(t);return e||s.test(t)?c(t.slice(2),e?2:8):a.test(t)?NaN:+t}}}]);
//# sourceMappingURL=758.22b2135d.chunk.js.map