(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3506],{98220:function(e){var t;/*!
 *  @preserve
 *  
 *  @module      iframe-resizer/core 5.3.2 (umd) - 2024-10-22
 *
 *  @license     GPL-3.0 for non-commercial use only.
 *               For commercial use, you must purchase a license from
 *               https://iframe-resizer.com/pricing
 * 
 *  @description Keep same and cross domain iFrames sized to their content 
 *
 *  @author      David J. Bradshaw <info@iframe-resizer.com>
 * 
 *  @see         {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */t=function(){"use strict";var e;let t;let i="5.3.2",n="[iFrameSizer]",o=n.length,r=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),a=(e,t,i,n)=>e.addEventListener(t,i,n||!1),l=(e,t,i)=>e.removeEventListener(t,i,!1),s=e=>{if(!e)return"";let t=-559038744,i=1103547984;for(let n,o=0;o<e.length;o++)t=Math.imul(t^(n=e.codePointAt(o)),2246822519),i=Math.imul(i^n,3266489917);return t^=Math.imul(t^i>>>15,1935289751),i^=Math.imul(i^t>>>15,3405138345),t^=i>>>16,(2097152*((i^=t>>>16)>>>0)+(t>>>11)).toString(36)},c=e=>e.replaceAll(/[A-Za-z]/g,e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26)),u=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."],d=["NWSc3","zvsv","wyv","ibzpulzz","vlt"],f=Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map((e,t)=>[e,Math.max(0,t-1)])),p=e=>c(u[e]),h=e=>{let t=e[c("spjluzl")];if(!t)return -1;let i=t.split("-"),n=function(e=""){let t=-2,i=s(c(e));return i in f&&(t=f[i]),t}(i[0]);return 0===n||i[2]===s(i[0]+i[1])||(n=-2),n},m="[iframe-resizer]",y=e=>`${m}[${window.top===window.self?`Parent page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested parent page: ${e}`}]`,g=(e,...t)=>((e,t,...i)=>window?.console[e](y(t),...i))("warn",e,...t),b=(e,t)=>{let i;return console?.warn((i=(...t)=>[`${m}[${e}]`,...t].join(" "),e=>window.chrome?i(e.replaceAll("<br>","\n").replaceAll("<rb>","\x1b[31;1m").replaceAll("</>","\x1b[m").replaceAll("<b>","\x1b[1m").replaceAll("<i>","\x1b[3m").replaceAll("<u>","\x1b[4m")):i(e.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))(t))},v={},w=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,heightCalculationMethod:"auto",id:"iFrameResizer",log:!1,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,waitForLoad:!1,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof v[e.id].onInit&&(b(e.id,"\n\x1b[31;1mDeprecated Option\x1b[m\n\nThe \x1b[1monInit()\x1b[m function is deprecated and has been replaced with \x1b[1monReady()\x1b[m. It will be removed in a future version of iFrame Resizer.\n      "),v[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),z={position:null,version:i};function j(e){function t(){M(F),I(),N("onResized",F)}let r=e=>L.slice(L.indexOf(":")+7+e),s=(e,t)=>(i,n)=>{var o;let r={};o=function(){O(`Send ${e} (${i})`,`${e}:${t()}`,n)},r[n]||(o(),r[n]=requestAnimationFrame(()=>{r[n]=null}))},c=(e,t)=>()=>{let i=!1,n=t=>()=>{v[u]?i&&i!==t||(e(t,u),i=t,requestAnimationFrame(()=>{i=!1})):c()},o=n("scroll"),r=n("resize window");function s(e,t){t(window,"scroll",o),t(window,"resize",r)}function c(){s(0,l),d.disconnect(),f.disconnect()}let u=P,d=new ResizeObserver(n("page observed")),f=new ResizeObserver(n("iframe observed"));s(0,a),d.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),f.observe(v[u].iframe,{attributes:!0,childList:!1,subtree:!1}),v[u]&&(v[u][`stop${t}`]=c)},u=e=>()=>{e in v[P]&&(v[P][e](),delete v[P][e])},d=s("pageInfo",function(){let e=document.body.getBoundingClientRect(),t=F.iframe.getBoundingClientRect(),{scrollY:i,scrollX:n,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:l}=document.documentElement;return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(l,r||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:i,scrollLeft:n,documentHeight:a,documentWidth:l,windowHeight:o,windowWidth:r})}),f=s("parentInfo",function(){let{iframe:e}=F,{scrollWidth:t,scrollHeight:i}=document.documentElement,{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:l,pageTop:s,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:t,scrollHeight:i},viewport:{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:l,pageTop:s,scale:c}})}),p=c(d,"PageInfo"),h=c(f,"ParentInfo"),m=u("stopPageInfo"),y=u("stopParentInfo");function w(e){let t=e.getBoundingClientRect();return R(),{x:Number(t.left)+Number(z.position.x),y:Number(t.top)+Number(z.position.y)}}function j(e){let t;let i=e?w(F.iframe):{x:0,y:0},n={x:(t=F).width+i.x,y:t.height+i.y},o=window.parentIframe||window.parentIFrame;o?function(t,i){t["scrollTo"+(e?"Offset":"")](i.x,i.y)}(o,n):(z.position=n,k(P))}function k(e){let{x:t,y:i}=z.position;!1!==N("onScroll",{iframe:v[e]?.iframe,top:i,left:t,x:t,y:i})?I():$()}function E(e){let t={};if(0===F.width&&0===F.height){let e=r(9).split(":");t={x:e[1],y:e[0]}}else t={x:F.width,y:F.height};N(e,{iframe:F.iframe,screenX:Number(t.x),screenY:Number(t.y),type:F.type})}let N=(e,t)=>T(P,e,t),L=e.data,F={},P=null;"[iFrameResizerChild]Ready"!==L?n===`${L}`.slice(0,o)&&L.slice(o).split(":")[0]in v&&((P=(F=function(){let e=L.slice(o).split(":"),t=e[1]?Number(e[1]):0,i=v[e[0]]?.iframe,n=getComputedStyle(i);return{iframe:i,id:e[0],height:t+("border-box"!==n.boxSizing?0:(n.paddingTop?parseInt(n.paddingTop,10):0)+(n.paddingBottom?parseInt(n.paddingBottom,10):0))+("border-box"!==n.boxSizing?0:(n.borderTopWidth?parseInt(n.borderTopWidth,10):0)+(n.borderBottomWidth?parseInt(n.borderBottomWidth,10):0)),width:Number(e[2]),type:e[3],msg:e[4]}}()).id)?(function(e){if(!v[e])throw Error(`${F.type} No settings for ${e}. Message was: ${L}`)}(P),F.type in{true:1,false:1,undefined:1}||(v[P].loaded=!0,(null!==F.iframe||(g(P,`The iframe (${F.id}) was not found.`),0))&&function(){let{origin:t,sameDomain:i}=e;if(i)return!0;let n=v[P]?.checkOrigin;if(n&&"null"!=`${t}`&&!(n.constructor===Array?function(){let e=0,i=!1;for(;e<n.length;e++)if(n[e]===t){i=!0;break}return i}():t===v[P]?.remoteHost))throw Error(`Unexpected message received from: ${t} for ${F.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){var e,n,o,a;switch(v[P]?.firstRun&&v[P]&&(v[P].firstRun=!1),F.type){case"close":x(F.iframe);break;case"message":n=r(6),N("onMessage",{iframe:F.iframe,message:JSON.parse(n)});break;case"mouseenter":E("onMouseEnter");break;case"mouseleave":E("onMouseLeave");break;case"autoResize":v[P].autoResize=JSON.parse(r(9));break;case"scrollBy":!function(){let e=F.width,t=F.height;(window.parentIframe||window).scrollBy(e,t)}();break;case"scrollTo":j(!1);break;case"scrollToOffset":j(!0);break;case"pageInfo":d("start",P),p();break;case"parentInfo":f("start",P),h();break;case"pageInfoStop":m();break;case"parentInfoStop":y();break;case"inPageLink":!function(e){let t=e.split("#")[1]||"",i=decodeURIComponent(t),n=document.getElementById(i)||document.getElementsByName(i)[0];n?function(){let e=w(n);z.position={x:e.x,y:e.y},k(P),window.location.hash=t}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(t)}(r(9));break;case"title":o=F.msg,a=P,v[a]?.syncTitle&&(v[a].iframe.title=o);break;case"reset":S(F);break;case"init":t(),function(e){try{v[e].sameDomain=!!v[e]?.iframe?.contentWindow?.iframeChildListener}catch(t){v[e].sameDomain=!1}}(P),(e=F.msg)!==i&&(void 0!==e||b(P,"<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n")),C=!0,N("onReady",F.iframe);break;default:if(0===F.width&&0===F.height)return void g(P,`Unsupported message received (${F.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===F.width||0===F.height||document.hidden)return;t()}}())):g("","iframeResizer received messageData without id, message was: ",L)):Object.keys(v).forEach(e=>{v[e].mode>=0&&O("iFrame requested init",W(e),e)})}function T(e,t,i){let n=null,o=null;if(v[e]){if("function"!=typeof(n=v[e][t]))throw TypeError(`${t} on iFrame[${e}] is not a function`);"onClose"===t||"onScroll"===t?o=n(i):setTimeout(()=>n(i))}return o}function k(e){let{id:t}=e;delete v[t]}function x(e){let{id:t}=e;if(!1!==T(t,"onClose",t)){try{e.parentNode&&e.remove()}catch(e){g(t,e)}T(t,"onClosed",t),k(e)}}function R(e){null===z.position&&(z.position={x:window.scrollX,y:window.scrollY})}function $(){z.position=null}function I(e){null!==z.position&&(window.scrollTo(z.position.x,z.position.y),$())}function S(e){R(e.id),M(e),O("reset","reset",e.id)}function M(e){function t(t){let i=`${e[t]}px`;e.iframe.style[t]=i}let{id:i}=e,{sizeHeight:n,sizeWidth:o}=v[i];n&&t("height"),o&&t("width")}function O(e,t,i,o){v[i]&&(v[i]?.postMessageTarget?function(){let{iframe:e,postMessageTarget:o,sameDomain:r,targetOrigin:a}=v[i];if(r)try{return void e.contentWindow.iframeChildListener(n+t)}catch(e){}o.postMessage(n+t,a)}():g(i,`[${e}] IFrame(${i}) not found`),o&&v[i]?.warningTimeout&&(v[i].msgTimeout=setTimeout(function(){if(void 0===v[i])return;let{iframe:e,loaded:t,loadErrorShown:n,waitForLoad:o}=v[i],{sandbox:r}=e;t||n||(v[i].loadErrorShown=!0,b(i,`
<rb>No response from iFrame</>
            
The iframe (<i>${i}</>) has not responded within ${v[i].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.
${o?"\nThe <b>waitForLoad</> option is currently set to <i>'true'</>. If the iframe loads before the JavaScript runs, this option will prevent <i>iframe-resizer</> from initialising. To disable this, set the <b>waitForLoad</> option to <i>'false'</>.  \n":""}
${!(r?.length>0)||r.contains("allow-scripts")&&r.contains("allow-same-origin")?"":"The iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values."}

This message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.
`))},v[i].warningTimeout)))}function W(e){let t=v[e];return[e,"8",t.sizeWidth,t.log,"32",!0,t.autoResize,t.bodyMargin,t.heightCalculationMethod,t.bodyBackground,t.bodyPadding,t.tolerance,t.inPageLinks,"child",t.widthCalculationMethod,t.mouseEvents,t.offsetHeight,t.offsetWidth,t.sizeHeight,t.license,z.version,t.mode].join(":")}let E=0,C=!1,N=!1;function L(){!1===document.hidden&&function(e,t){let i=e=>v[e]?.autoResize&&!v[e]?.firstRun;Object.keys(v).forEach(function(n){i(n)&&O(e,t,n)})}("Tab Visible","resize")}let F=(e=()=>{a(window,"message",j),a(document,"visibilitychange",L),window.iframeParentListener=e=>setTimeout(()=>j({data:e,sameDomain:!0}))},t=!1,function(){return t?void 0:(t=!0,Reflect.apply(e,this,arguments))});return e=>t=>{var n,o;let l=function(i){let n;if(i&&"string"!=typeof i)throw TypeError("Invalid id for iFrame. Expected String");return""!==i&&i||(n=e?.id||w.id+E++,null!==document.getElementById(n)&&(n+=E++),i=n,t.id=i,(e||{}).log),i}(t.id);return l in v&&"iFrameResizer"in t?g(l,"Ignored iFrame, already setup."):(v[l]={iframe:t,firstRun:!0,remoteHost:t?.src.split("/").slice(0,3).join("/"),...w,...function(e){if(!e)return{};if("object"!=typeof e)throw TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&b(l,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}(e),mode:h(e),syncTitle:function(e){let t=v[e]?.iframe?.title;return""===t||void 0===t}(l)},function(){let{direction:e}=v[l];if("horizontal"===e)return v[l].sizeWidth=!0,void(v[l].sizeHeight=!1);if("none"===e)return v[l].sizeWidth=!1,v[l].sizeHeight=!1,void(v[l].autoResize=!1);if("vertical"!==e)throw TypeError(l,`Direction value of "${e}" is not valid`)}(),(n=e?.offsetSize||e?.offset)&&("vertical"===v[l].direction?v[l].offsetHeight=n:v[l].offsetWidth=n),e?.offset&&b(l,"<rb>Deprecated option</>\n\n The <b>offset</> option has been renamed to <b>offsetSize</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>."),null===v[l].postMessageTarget&&(v[l].postMessageTarget=t.contentWindow),v[l].targetOrigin=!0===v[l].checkOrigin?""===(o=v[l].remoteHost)||null!==o.match(/^(about:blank|javascript:|file:\/\/)/)?"*":o:"*",function(){var e;let{mode:t}=v[l];t<0&&b("Parent",`${p(t+2)}${p(2)}`),N||t<0||(N=!0,e=`v${i} (${c(d[t])})`,console.info(`%c[iframe-resizer] ${e}`,"font-weight: bold;"),t<1&&b("Parent",p(3)))}(),F(),function(){switch(t.style.overflow=!1===v[l]?.scrolling?"hidden":"auto",v[l]?.scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=v[l]?v[l].scrolling:"no"}}(),function(){let{bodyMargin:e}=v[l];"number"!=typeof e&&"0"!==e||(v[l].bodyMargin=`${e}px`)}(),function(e){let{id:i}=t,{mode:n,waitForLoad:o}=v[i];-1!==n&&-2!==n&&(a(t,"load",function(){O("iFrame.onload",`${e}:${C}`,i,!0),function(){let e=v[l]?.firstRun,i=v[l]?.heightCalculationMethod in r;!e&&i&&S({iframe:t,height:0,width:0,type:"init"})}()}),!1===o&&O("init",`${e}:${C}`,i,!0))}(W(l)),function(){if(v[l]){let{iframe:e}=v[l],t={close:x.bind(null,e),disconnect:k.bind(null,e),removeListeners(){b(l,"\n<rb>Deprecated Method Name</>\n\nThe \x1b[removeListeners()</> method has been renamed to \x1b[disconnect()</>.\n"),this.disconnect()},resize:O.bind(null,"Window resize","resize",l),moveToAnchor(e){O("Move to anchor",`moveToAnchor:${e}`,l)},sendMessage(e){O("Send Message",`message:${e=JSON.stringify(e)}`,l)}};e.iframeResizer=t,e.iFrameResizer=t}}()),t?.iFrameResizer}},e.exports=t()},44423:function(e,t,i){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}i.d(t,{Z:function(){return s}});var o=i(98220),r=i.n(o),a=i(2265);/*!
 *  @preserve
 *  
 *  @module      iframe-resizer/react 5.3.2 (esm) - 2024-10-22
 *
 *  @license     GPL-3.0 for non-commercial use only.
 *               For commercial use, you must purchase a license from
 *               https://iframe-resizer.com/pricing
 * 
 *  @description Keep same and cross domain iFrames sized to their content 
 *
 *  @author      David J. Bradshaw <info@iframe-resizer.com>
 * 
 *  @see         {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */let l=e=>{let{license:t,bodyBackground:i,bodyMargin:n,bodyPadding:o,checkOrigin:r,direction:a,inPageLinks:l,log:s,offset:c,offsetHeight:u,offsetWidth:d,scrolling:f,tolerance:p,warningTimeout:h,waitForLoad:m,onClosed:y,onReady:g,onMessage:b,onResized:v,...w}=e;return w};function s(e){let{forwardRef:t,...i}=e,o=l(i),s=(0,a.useRef)(null),c=()=>(console.warn(`[iframe-resizer/react][${s?.current?.id}] Close event ignored, to remove the iframe update your React component.`),!1);return(0,a.useEffect)(()=>{let e=s.current,t=r()({...i,onClose:c})(e);return()=>t?.disconnect()},[]),(0,a.useImperativeHandle)(t,()=>({getRef:()=>s,getElement:()=>s.current,resize:()=>s.current.iframeResizer.resize(),moveToAnchor:e=>s.current.iframeResizer.moveToAnchor(e),sendMessage:(e,t)=>{s.current.iframeResizer.sendMessage(e,t)}})),a.createElement("iframe",n({},o,{ref:s}))}},99949:function(e,t,i){"use strict";var n=i(88877);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,i,o,r,a){if(a!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return i.PropTypes=i,i}},41448:function(e,t,i){e.exports=i(99949)()},88877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);