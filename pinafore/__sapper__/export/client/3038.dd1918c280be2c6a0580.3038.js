(this.webpackChunkpinafore=this.webpackChunkpinafore||[]).push([[3038],{3038:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Be});var i=n(4178),o=n(2936),r=n(6957),s=n(372),a=n(7526),l=n(6494),c=n(7569),m=n(3006),u=n(137),d=n(9921),h=n(2909),f=n(9246),p=n(652),g=n(2961),T=n(8657),y=n(1632),I=n(1786),w=n(2846);function v(e,t){const n=[],i=[],o=function(e,t){const n=new Map;for(const i of e)n.set(t(i),i);return n}(e,(e=>e.id)),r=function(e,t){const n=new Map;for(const i of e){const e=t(i);n.has(e)?n.get(e).push(i):n.set(e,[i])}return n}(e,(e=>e.replyId)),s=o.get(t);if(!s)return e;let a=s;do{a=o.get(a.replyId),a&&n.unshift(a)}while(a);const l=[s];for(;l.length;){const e=l.shift(),t=(r.get(e.id)||[]).sort(u.gV);Array.prototype.unshift.apply(l,t),e.id!==s.id&&i.push(e)}const c=e=>{let n=e;for(;;){if(n.accountId!==s.accountId)return!1;const e=o.get(n.replyId);if(!e)break;n=e}return n.id===t},d=[],h=[];for(const m of i)(c(m)?d:h).push(m);return(0,m.z)(n,[s],d,h)}var _=n(8085),S=n.n(_);const b=e=>e.id;async function $(e,t,n){await h.F.insertTimelineItems(e,t,n),t.startsWith("status/")&&n.forEach((e=>{(0,p.j)("statusUpdated",e)}))}async function P(e,t,n){const i=await(0,f.lR)(e,t,n);return await h.F.insertStatus(e,i),(0,p.j)("statusUpdated",i),i}async function k(e,t,n){const i=n.split("/").slice(-1)[0],o=await h.F.getStatus(e,i);if(!o)return async function(e,t,n){const[i,o]=await Promise.all([(0,f.lR)(e,t,n),(0,f.j7)(e,t,n)]);return(0,m.z)(o.ancestors,i,o.descendants)}(e,t,i);if(!o.in_reply_to_id)return async function(e,t,n,i){const[o,r]=await Promise.all([P(e,t,i),(0,f.j7)(e,t,i)]);await h.F.insertTimelineItems(e,n,(0,m.z)(r.ancestors,o,r.descendants)),(0,I.b)(e,n,(0,m.z)(r.ancestors,r.descendants))}(e,t,n,i),[o];(0,w.F)((()=>P(e,t,i)));const r=await(0,f.j7)(e,t,i);return(0,m.z)(r.ancestors,o,r.descendants)}async function A(e,t,n){n.length,(0,c.B)("addPagedTimelineItemSummaries");const i=n.map((t=>(0,T.o)(t,e)));await async function(e,t,n){const i=o.h.getForTimeline(e,t,"timelineItemSummaries"),r=(0,y.Z)((0,m.z)(i||[],n),b);(0,d.Z)(i,r)||o.h.setForTimeline(e,t,{timelineItemSummaries:r})}(e,t,i),(0,c.s)("addPagedTimelineItemSummaries")}async function C(e,t,n,i){(0,c.B)("fetchTimelineItems");const{lastTimelineItemId:r}=o.h.get();let s,m=!1;if(i)try{s=await async function(e,t,n,i){if(n.startsWith("status/"))return k(e,t,n);{const{items:o}=await(0,a.V)(e,t,n,i,null,g.L);return o}}(e,t,n,r),await $(e,n,s)}catch(u){console.error(u),l.A.say("Internet request failed. Showing offline content."),s=await h.F.getTimeline(e,n,r,g.L),m=!0}else s=await h.F.getTimeline(e,n,r,g.L),m=!0;return(0,c.s)("fetchTimelineItems"),{items:s,stale:m}}async function L(e,t,n,i){const r=o.h.getForTimeline(e,t,"timelineItemSummaries"),s=o.h.getForTimeline(e,t,"timelineItemSummariesAreStale"),a=(0,y.Z)((0,m.e)(r||[],n,u.gV),b);(0,d.Z)(r,a)||o.h.setForTimeline(e,t,{timelineItemSummaries:a}),s!==i&&o.h.setForTimeline(e,t,{timelineItemSummariesAreStale:i})}async function B(){(0,c.B)("fetchTimelineItemsAndPossiblyFallBack");const{currentTimeline:e,currentInstance:t,accessToken:n,online:i}=o.h.get();if("favorites"===e||"bookmarks"===e)await async function(e,t,n){const{timelineNextPageId:i}=o.h.get(),{items:r,headers:s}=await(0,a.V)(e,t,n,i,null,g.L),l=s.get("Link"),c=S().parse(l),m=c&&c.next,u=m&&new URL(m).searchParams.get("max_id");o.h.setForTimeline(e,n,{timelineNextPageId:u}),await $(e,n,r),await A(e,n,r)}(t,n,e);else{const{items:o,stale:r}=await C(t,n,e,i);await async function(e,t,n,i){n.length,(0,c.B)("addTimelineItemSummaries");const o=n.map((t=>(0,T.o)(t,e)));L(e,t,o,i),(0,c.s)("addTimelineItemSummaries")}(t,e,o,r)}(0,c.s)("fetchTimelineItemsAndPossiblyFallBack")}async function F(e,t){o.h.setForTimeline(e,t,{runningUpdate:!0}),await B(),o.h.setForTimeline(e,t,{runningUpdate:!1})}async function z(e,t){(0,c.B)("showMoreItemsForTimeline");let n=o.h.getForTimeline(e,t,"timelineItemSummariesToAdd")||[];n=n.sort(u.gV).reverse(),L(e,t,n,!1),o.h.setForTimeline(e,t,{timelineItemSummariesToAdd:[],shouldShowHeader:!1,showHeader:!1}),(0,c.s)("showMoreItemsForTimeline")}function V(){const{currentInstance:e,currentTimeline:t}=o.h.get();return z(e,t)}var N={onClickLoadMore(e){e.preventDefault(),e.stopPropagation();const{currentInstance:t,currentTimeline:n}=this.store.get();F(t,n);try{const e=document.querySelector(".virtual-list").children;e[e.length-2].querySelector("article").focus()}catch(e){console.error(e)}}};function M(e){var t;if((0,i.S1)(this,e),this.store=o.h,this._state=(0,i.f0)(this.store._init(["timelineInitialized","runningUpdate","disableInfiniteScroll"]),e.data),this.store._add(this,["timelineInitialized","runningUpdate","disableInfiniteScroll"]),this._recompute({$timelineInitialized:1,$runningUpdate:1,$disableInfiniteScroll:1},this._state),this._intro=!0,this._handlers.destroy=[i.iT],document.getElementById("svelte-sry1lr-style")||((t=(0,i.az)("style")).id="svelte-sry1lr-style",t.textContent=".loading-footer.svelte-sry1lr{padding:20px 0;display:flex;align-items:center;justify-content:center;position:relative}.loading-wrapper.svelte-sry1lr{flex:1;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.2s linear}.loading-wrapper.shown.svelte-sry1lr{opacity:1;pointer-events:auto}.loading-footer-info.svelte-sry1lr{margin-left:20px;font-size:1.3em}.button-wrapper.svelte-sry1lr{position:absolute;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:none}.button-wrapper.shown.svelte-sry1lr{opacity:1;pointer-events:auto;transition:opacity 0.2s linear 0.2s}",(0,i.R3)(document.head,t)),this._fragment=function(e,t){var n,o,r,a,l,c,m,u,d,h,f,p,g,T,y=new s.Z({root:e.root,store:e.store,data:{size:48}});function I(t){e.onClickLoadMore(t)}return{c(){n=(0,i.az)("div"),o=(0,i.az)("div"),y._fragment.c(),r=(0,i.rw)("\n    "),a=(0,i.az)("span"),l=(0,i.rw)("Loading more…"),u=(0,i.rw)("\n  "),d=(0,i.az)("div"),h=(0,i.az)("button"),f=(0,i.rw)("Load more"),this.h()},l(e){n=(0,i.d$)(e,"DIV",{class:!0},!1);var t=(0,i.pI)(n);o=(0,i.d$)(t,"DIV",{class:!0,"aria-hidden":!0,role:!0},!1);var s=(0,i.pI)(o);y._fragment.l(s),r=(0,i.M4)(s,"\n    "),a=(0,i.d$)(s,"SPAN",{class:!0},!1);var c=(0,i.pI)(a);l=(0,i.M4)(c,"Loading more…"),c.forEach(i.r2),s.forEach(i.r2),u=(0,i.M4)(t,"\n  "),d=(0,i.d$)(t,"DIV",{class:!0,"aria-hidden":!0},!1);var m=(0,i.pI)(d);h=(0,i.d$)(m,"BUTTON",{type:!0,class:!0},!1);var p=(0,i.pI)(h);f=(0,i.M4)(p,"Load more"),p.forEach(i.r2),m.forEach(i.r2),t.forEach(i.r2),this.h()},h(){a.className="loading-footer-info svelte-sry1lr",o.className=c="loading-wrapper "+(t.showLoading?"shown":"")+" svelte-sry1lr",(0,i.P$)(o,"aria-hidden",m=!t.showLoading),(0,i.P$)(o,"role","alert"),(0,i.NH)(h,"click",I),h.type="button",h.className="primary",d.className=p="button-wrapper "+(t.showLoadButton?"shown":"")+" svelte-sry1lr",(0,i.P$)(d,"aria-hidden",g=!t.showLoadButton),n.className=T="loading-footer "+(t.shown?"":"hidden")+" svelte-sry1lr"},m(e,t){(0,i.$T)(e,n,t),(0,i.R3)(n,o),y._mount(o,null),(0,i.R3)(o,r),(0,i.R3)(o,a),(0,i.R3)(a,l),(0,i.R3)(n,u),(0,i.R3)(n,d),(0,i.R3)(d,h),(0,i.R3)(h,f)},p(e,t){e.showLoading&&c!==(c="loading-wrapper "+(t.showLoading?"shown":"")+" svelte-sry1lr")&&(o.className=c),e.showLoading&&m!==(m=!t.showLoading)&&(0,i.P$)(o,"aria-hidden",m),e.showLoadButton&&p!==(p="button-wrapper "+(t.showLoadButton?"shown":"")+" svelte-sry1lr")&&(d.className=p),e.showLoadButton&&g!==(g=!t.showLoadButton)&&(0,i.P$)(d,"aria-hidden",g),e.shown&&T!==(T="loading-footer "+(t.shown?"":"hidden")+" svelte-sry1lr")&&(n.className=T)},d(e){e&&(0,i.r2)(n),y.destroy(),(0,i.ys)(h,"click",I)}}}(this,this._state),e.target){var n=(0,i.pI)(e.target);e.hydrate?this._fragment.l(n):this._fragment.c(),n.forEach(i.r2),this._mount(e.target,e.anchor),(0,i.yl)(this)}}(0,i.f0)(M.prototype,i.uS),(0,i.f0)(M.prototype,N),M.prototype._recompute=function(e,t){(e.$timelineInitialized||e.$runningUpdate||e.$disableInfiniteScroll)&&this._differs(t.shown,t.shown=function({$timelineInitialized:e,$runningUpdate:t,$disableInfiniteScroll:n}){return e&&(n||t)}(t))&&(e.shown=!0),e.$runningUpdate&&this._differs(t.showLoading,t.showLoading=function({$runningUpdate:e}){return e}(t))&&(e.showLoading=!0),(e.$runningUpdate||e.$disableInfiniteScroll)&&this._differs(t.showLoadButton,t.showLoadButton=function({$runningUpdate:e,$disableInfiniteScroll:t}){return!e&&t}(t))&&(e.showLoadButton=!0)};const x=M;var R=n(7265);var H={onClick(e){const{onClick:t}=this.get();t&&t(e)}};function U(e){var t;if((0,i.S1)(this,e),this._state=(0,i.f0)({},e.data),this._recompute({count:1},this._state),this._intro=!0,document.getElementById("svelte-1iuasny-style")||((t=(0,i.az)("style")).id="svelte-1iuasny-style",t.textContent=".more-items-header.svelte-1iuasny{display:flex;padding:5px;align-items:center;justify-content:center}",(0,i.R3)(document.head,t)),this._fragment=function(e,t){var n,o,r;function s(t){e.onClick(t)}return{c(){n=(0,i.az)("div"),o=(0,i.az)("button"),r=(0,i.rw)(t.showMoreLabel),this.h()},l(e){n=(0,i.d$)(e,"DIV",{class:!0},!1);var s=(0,i.pI)(n);o=(0,i.d$)(s,"BUTTON",{class:!0,type:!0},!1);var a=(0,i.pI)(o);r=(0,i.M4)(a,t.showMoreLabel),a.forEach(i.r2),s.forEach(i.r2),this.h()},h(){(0,i.NH)(o,"click",s),o.className="primary",o.type="button",n.className="more-items-header svelte-1iuasny"},m(e,t){(0,i.$T)(e,n,t),(0,i.R3)(n,o),(0,i.R3)(o,r)},p(e,t){e.showMoreLabel&&(0,i.a_)(r,t.showMoreLabel)},d(e){e&&(0,i.r2)(n),(0,i.ys)(o,"click",s)}}}(this,this._state),e.target){var n=(0,i.pI)(e.target);e.hydrate?this._fragment.l(n):this._fragment.c(),n.forEach(i.r2),this._mount(e.target,e.anchor)}}(0,i.f0)(U.prototype,i.uS),(0,i.f0)(U.prototype,H),U.prototype._recompute=function(e,t){e.count&&this._differs(t.showMoreLabel,t.showMoreLabel=function({count:e}){return(0,R.A)(["Show ",["count"]," more"],{count:e})}(t))&&(e.showMoreLabel=!0)};const E=U;function W(e){var t,n,o,r;if((0,i.S1)(this,e),this._state=(0,i.f0)({},e.data),this._intro=!0,this._fragment=(t=this,n=this._state,o={count:n.virtualProps.count,onClick:n.virtualProps.onClick},r=new E({root:t.root,store:t.store,data:o}),{c(){r._fragment.c()},l(e){r._fragment.l(e)},m(e,t){r._mount(e,t)},p(e,t){var n={};e.virtualProps&&(n.count=t.virtualProps.count),e.virtualProps&&(n.onClick=t.virtualProps.onClick),r._set(n)},d(e){r.destroy(e)}}),e.target){var s=(0,i.pI)(e.target);e.hydrate?this._fragment.l(s):this._fragment.c(),s.forEach(i.r2),this._mount(e.target,e.anchor),(0,i.yl)(this)}}(0,i.f0)(W.prototype,i.uS);const D=W;var j=n(1638),Z=n(7637);let q;function O(){return q||(q=document.getElementById("main-nav")),q.clientHeight}function J(e){const t=(0,j.Vp)(),n=O();let i=-1,o=-1;const r=e.length;let s=-1;for(;++s<r;){const a=e[s];if(!a)continue;const l=a.getBoundingClientRect();if(l.top<t&&l.bottom>=n){i=s,o=l.top<n&&s<r-1?s+1:s;break}}return{first:i,firstComplete:o}}var K=n(2707);const X=e=>document.getElementById(e),Y=e=>e.getAttribute("id"),G="global";var Q={onKeyDown(e){if((e=>{const{target:t,key:n}=e;return t&&"INPUT"===t.tagName&&"radio"===t.type&&("ArrowUp"===n||"ArrowDown"===n)})(e))return;if("z"===e.key&&this.store.get().currentTimeline.startsWith("status/")){e.stopPropagation(),e.preventDefault();const{spoilersShown:t}=this.get();return(0,p.j)("toggleAllSpoilers",!t),void this.set({spoilersShown:!t})}if("j"===e.key||"ArrowDown"===e.key)return e.stopPropagation(),e.preventDefault(),void this.changeActiveItem(1,e.timeStamp);if("k"===e.key||"ArrowUp"===e.key)return e.stopPropagation(),e.preventDefault(),void this.changeActiveItem(-1,e.timeStamp);let t=this.checkActiveItem(e.timeStamp);if(!t){const{elements:e}=this.get(),n=J(e).first;n>=0&&(t=Y(e[n]))}t&&(0,K.kS)(t,e)},changeActiveItem(e,t){const{elements:n}=this.get();let i=-1,o=this.checkActiveItem(t);if(o){const e=n.length;let t=-1;for(;++t<e;)if(Y(n[t])===o){i=t;break}}if(0===i&&-1===e)return o=null,this.set({activeItemKey:o}),void(0,Z.l)((0,j.JX)(),0,!1,!1);if(-1===i){const{first:t,firstComplete:o}=J(n);i=e>0?o:t}else i+=e;i>=0&&i<n.length&&(o=Y(n[i]),this.setActiveItem(o,t),function(e){const t=e.getBoundingClientRect(),n=O(),i=(0,j.Vp)();let o=0;if(t.top<n)o=n;else{if(!(t.bottom>i))return;{const e=t.bottom-t.top;o=i-n>e?i-e:n}}const r=(0,j.JX)(),s=r.scrollTop;(0,Z.l)(r,s+t.top-o,!1,!1)}(X(o)))},checkActiveItem(e){const t=document.activeElement;if(!t)return null;const n=t.getAttribute("id");if(!n)return null;const{activeItemChangeTime:i}=this.get();return e-i>600&&!function(e){if(!e)return!1;const t=e.getBoundingClientRect(),n=(0,j.Vp)(),i=O();return t.top<n&&t.bottom>=i}(X(n))?(this.setActiveItem(null,0),null):n},setActiveItem(e,t){this.set({activeItemChangeTime:t});try{X(e).focus({preventScroll:!0})}catch(n){console.error("Ignored focus error",n)}}};function ee(){(0,K._x)(G,this)}function te(){(0,K.jN)(G,this)}function ne(e){if((0,i.S1)(this,e),this.store=o.h,this._state=(0,i.f0)({activeItemChangeTime:0,elements:document.getElementsByClassName("shortcut-list-item"),spoilersShown:!1},e.data),this._intro=!0,this._handlers.destroy=[te],this._fragment=(this._state,{c:i.ZT,l:i.ZT,m:i.ZT,p:i.ZT,d:i.ZT}),this.root._oncreate.push((()=>{ee.call(this),this.fire("update",{changed:(0,i.lZ)({},this._state),current:this._state})})),e.target){var t=(0,i.pI)(e.target);e.hydrate?this._fragment.l(t):this._fragment.c(),t.forEach(i.r2),this._mount(e.target,e.anchor),(0,i.yl)(this)}}(0,i.f0)(ne.prototype,i.uS),(0,i.f0)(ne.prototype,Q);const ie=ne;var oe=n(7500);var re=n(8490),se=n(1372);function ae(){return new Worker(n.p+"blurhash.f87cb077f8cbb103ff28.blurhash.js")}var le=n(9905),ce=n.n(le);const me=new(n(4986).c)({maxSize:150});let ue,de,he;function fe(){ue=ue||new(ce())(new ae)}async function pe(e){de||(de=document.createElement("canvas"),de.height=32,de.width=32,he=de.getContext("2d")),he.putImageData(e,0,0);const t=await new Promise((e=>de.toBlob(e)));return URL.createObjectURL(t)}async function ge(e){let t=me.get(e);return t||(t=await async function(e){fe();const{decoded:t,imageData:n}=await ue.postMessage(e);return t||pe(n)}(e),me.set(e,t)),t}me.on("evict",((e,t)=>{URL.revokeObjectURL(e)}));var Te=n(6826),ye=n(4286);function Ie(e){return(0,Te.U2)(e,["status"])||(0,Te.U2)(e,["notification","status"])}async function we(e){const t=Ie(e);if(!t)return;const n=(0,Te.U2)(t,["media_attachments"],[]).concat((0,Te.U2)(t,["reblog","media_attachments"],[])).filter((e=>e.blurhash));n.length&&((0,c.B)(`decodeBlurhash-${t.id}`),await Promise.all(n.map((async e=>{try{e.decodedBlurhash=await ge(e.blurhash)}catch(t){console.warn("Could not decode blurhash, ignoring",t)}}))),(0,c.s)(`decodeBlurhash-${t.id}`))}async function ve(e){const t=Ie(e);if(!t)return;const n=t.reblog?t.reblog:t,i=n.content||"",o=n.mentions||[];await new Promise((e=>{(0,w.F)((()=>{n.plainTextContent=(0,ye.g)(i,o),e()}))}))}function _e(e,t,n){let i=Promise.resolve();async function o(i){(0,c.B)(`fetchFromIndexedDB-${i}`);try{return await("notifications"===t?async function(e,t,n,i){return{timelineType:t,timelineValue:n,notification:await h.F.getNotification(e,i)}}(e,t,n,i):async function(e,t,n,i){return{timelineType:t,timelineValue:n,status:await h.F.getStatus(e,i)}}(e,t,n,i))}finally{(0,c.s)(`fetchFromIndexedDB-${i}`)}}return function(){try{fe()}catch(e){console.error("could not start blurhash worker",e)}}(),e=>{const t=async function(e){const t=await o(e);return await Promise.all([we(t),ve(t)]),t}(e);return new Promise(((e,n)=>{i=i.then((()=>t)).then(e,n)}))}}var Se=n(3154),be=n(9808),$e=n(8089);var Pe=n(2845);var ke={observe:se.N7,initialize(){const{initializeStarted:e}=this.get();e||(this.set({initializeStarted:!0}),(0,c.B)("initializeTimeline"),(0,re.M)((()=>{this.store.set({timelineInitialized:!0}),(0,c.s)("initializeTimeline")})))},onScrollTopChanged(e){this.set({scrollTop:e})},onScrollToBottom(){const{timelineType:e}=this.get(),{timelineInitialized:t,runningUpdate:n,disableInfiniteScroll:i}=this.store.get();if(!t||n||i||"status"===e)return;const{currentInstance:o}=this.store.get(),{timeline:r}=this.get();F(o,r)},onScrollToTop(){const{shouldShowHeader:e}=this.store.get();e&&this.store.setForCurrentTimeline({showHeader:!0,shouldShowHeader:!1})},setupStreaming(){const{currentInstance:e,disableInfiniteScroll:t}=this.store.get(),{timeline:n,timelineType:i}=this.get(),r=()=>{const{itemIdsToAdd:r}=this.get();if(!r||!r.length)return;(0,c.B)("handleItemIdsToAdd");const{scrollTop:s}=this.get(),{shouldShowHeader:a,showHeader:l}=this.store.get();"status"===i?async function(e,t){(0,c.B)("showMoreItemsForThread");const n=o.h.getForTimeline(e,t,"timelineItemSummariesToAdd"),i=o.h.getForTimeline(e,t,"timelineItemSummaries"),r=new Set(i.map((e=>e.id)));for(const o of n)r.has(o.id)||i.push(o);const s=t.split("/").slice(-1)[0],a=await v(i,s);o.h.setForTimeline(e,t,{timelineItemSummariesToAdd:[],timelineItemSummaries:a}),(0,c.s)("showMoreItemsForThread")}(e,n):t||0!==s||a||l?(this.store.setForTimeline(e,n,{shouldShowHeader:!0}),t&&this.store.setForTimeline(e,n,{showHeader:!0})):z(e,n),(0,c.s)("handleItemIdsToAdd")};this.observe("itemIdsToAdd",((e,t)=>{e&&e.length&&!(0,d.Z)(e,t)&&(0,w.F)(r)}))},setupAsyncComponents(){this.observe("componentsPromise",(async e=>{if(e){const t=await e;this.set({components:t})}}))},onNoNeedToScroll(){this.store.set({timelinePreinitialized:!0})},showMoreAndScrollToTop:function(){V();const{currentInstance:e,timelineItemSummaries:t,currentTimelineType:n,currentTimelineValue:i}=o.h.get(),r=t&&t[0];if(!r)return;const s="notifications"===n&&r.id,a="notifications"!==n&&r.id;(0,Se.k)(!1);const l=(0,be.L)(e,n,i,s,a);(0,$e.w)(l)}};function Ae(){!async function(){(0,c.B)("setupTimeline");const{timelineItemSummaries:e,timelineItemSummariesAreStale:t,currentTimeline:n}=o.h.get();(!e||t||n.startsWith("status/"))&&await B(),(0,c.s)("setupTimeline")}(),this.setupStreaming(),this.setupAsyncComponents()}function Ce(e,t){var n,o=t.components.listComponent;function r(t){var n={component:t.components.listItemComponent,realm:t.$currentInstance+"/"+t.timeline,makeProps:t.makeProps,items:t.itemIds,showFooter:!0,footerComponent:t.LoadingFooter,showHeader:t.$showHeader,headerComponent:t.MoreHeaderVirtualWrapper,headerProps:t.headerProps,scrollToItem:t.scrollToItem};return{root:e.root,store:e.store,data:n}}if(o)var s=new o(r(t));function a(t){e.onScrollToBottom()}function l(t){e.onScrollToTop()}function c(t){e.onScrollTopChanged(t)}function m(t){e.initialize()}function u(t){e.onNoNeedToScroll()}return s&&s.on("scrollToBottom",a),s&&s.on("scrollToTop",l),s&&s.on("scrollTopChanged",c),s&&s.on("initialized",m),s&&s.on("noNeedToScroll",u),{c(){s&&s._fragment.c(),n=(0,i.Yr)()},l(e){s&&s._fragment.l(e),n=(0,i.Yr)()},m(e,t){s&&s._mount(e,t),(0,i.$T)(e,n,t)},p(e,t){var i={};e.components&&(i.component=t.components.listItemComponent),(e.$currentInstance||e.timeline)&&(i.realm=t.$currentInstance+"/"+t.timeline),e.makeProps&&(i.makeProps=t.makeProps),e.itemIds&&(i.items=t.itemIds),e.LoadingFooter&&(i.footerComponent=t.LoadingFooter),e.$showHeader&&(i.showHeader=t.$showHeader),e.MoreHeaderVirtualWrapper&&(i.headerComponent=t.MoreHeaderVirtualWrapper),e.headerProps&&(i.headerProps=t.headerProps),e.scrollToItem&&(i.scrollToItem=t.scrollToItem),o!==(o=t.components.listComponent)?(s&&s.destroy(),o?((s=new o(r(t)))._fragment.c(),s._mount(n.parentNode,n),s.on("scrollToBottom",a),s.on("scrollToTop",l),s.on("scrollTopChanged",c),s.on("initialized",m),s.on("noNeedToScroll",u)):s=null):o&&s._set(i)},d(e){e&&(0,i.r2)(n),s&&s.destroy(e)}}}function Le(e){if((0,i.S1)(this,e),this.store=o.h,this._state=(0,i.f0)((0,i.f0)(this.store._init(["currentInstance","currentTimelineType","currentTimelineValue","firstTimelineItemId","filteredTimelineItemSummaries","filteredTimelineItemSummariesToAdd","showHeader"]),{LoadingFooter:x,MoreHeaderVirtualWrapper:D,Status:r.Z,scrollTop:0,components:void 0}),e.data),this.store._add(this,["currentInstance","currentTimelineType","currentTimelineValue","firstTimelineItemId","filteredTimelineItemSummaries","filteredTimelineItemSummariesToAdd","showHeader"]),this._recompute({$currentTimelineType:1,timelineType:1,$currentTimelineValue:1,$currentInstance:1,timelineValue:1,timeline:1,$firstTimelineItemId:1,$filteredTimelineItemSummaries:1,$filteredTimelineItemSummariesToAdd:1,itemIdsToAdd:1},this._state),this._intro=!0,this._handlers.destroy=[i.iT],this._fragment=function(e,t){var n,o,r,s,a,l,c=t.components&&Ce(e,t),m={realm:t.focusRealm},u=new Pe.Z({root:e.root,store:e.store,slots:{default:(0,i.xJ)()},data:m}),d=new oe.Z({root:e.root,store:e.store,data:{scope:"global",key:"."}});d.on("pressed",(function(t){e.showMoreAndScrollToTop()}));var h=new ie({root:e.root,store:e.store});return{c(){n=(0,i.az)("h1"),o=(0,i.rw)(t.label),r=(0,i.rw)("\n"),s=(0,i.az)("div"),c&&c.c(),u._fragment.c(),a=(0,i.rw)("\n"),d._fragment.c(),l=(0,i.rw)("\n"),h._fragment.c(),this.h()},l(e){n=(0,i.d$)(e,"H1",{class:!0},!1);var m=(0,i.pI)(n);o=(0,i.M4)(m,t.label),m.forEach(i.r2),r=(0,i.M4)(e,"\n"),s=(0,i.d$)(e,"DIV",{class:!0,role:!0},!1);var f=(0,i.pI)(s);c&&c.l(f),f.forEach(i.r2),u._fragment.l(e),a=(0,i.M4)(e,"\n"),d._fragment.l(e),l=(0,i.M4)(e,"\n"),h._fragment.l(e),this.h()},h(){n.className="sr-only",s.className="timeline",(0,i.P$)(s,"role","feed")},m(e,t){(0,i.$T)(e,n,t),(0,i.R3)(n,o),(0,i.$T)(e,r,t),(0,i.R3)(u._slotted.default,s),c&&c.m(s,null),u._mount(e,t),(0,i.$T)(e,a,t),d._mount(e,t),(0,i.$T)(e,l,t),h._mount(e,t)},p(t,n){t.label&&(0,i.a_)(o,n.label),n.components?c?c.p(t,n):((c=Ce(e,n)).c(),c.m(s,null)):c&&(c.d(1),c=null);var r={};t.focusRealm&&(r.realm=n.focusRealm),u._set(r)},d(e){e&&((0,i.r2)(n),(0,i.r2)(r)),c&&c.d(),u.destroy(e),e&&(0,i.r2)(a),d.destroy(e),e&&(0,i.r2)(l),h.destroy(e)}}}(this,this._state),this.root._oncreate.push((()=>{Ae.call(this),this.fire("update",{changed:(0,i.lZ)({},this._state),current:this._state})})),e.target){var t=(0,i.pI)(e.target);e.hydrate?this._fragment.l(t):this._fragment.c(),t.forEach(i.r2),this._mount(e.target,e.anchor),(0,i.yl)(this)}}(0,i.f0)(Le.prototype,i.uS),(0,i.f0)(Le.prototype,ke),Le.prototype._recompute=function(e,t){e.$currentTimelineType&&this._differs(t.timelineType,t.timelineType=function({$currentTimelineType:e}){return e}(t))&&(e.timelineType=!0),e.timelineType&&this._differs(t.componentsPromise,t.componentsPromise=function({timelineType:e}){return Promise.all(["status"===e?n.e(4686).then(n.bind(n,4686)).then((e=>e.default)):Promise.all([n.e(1257),n.e(5466)]).then(n.bind(n,5466)).then((e=>e.default)),"notifications"===e?n.e(1630).then(n.bind(n,1630)).then((e=>e.default)):n.e(636).then(n.bind(n,636)).then((e=>e.default))]).then((e=>({listComponent:e[0],listItemComponent:e[1]})))}(t))&&(e.componentsPromise=!0),e.$currentTimelineValue&&this._differs(t.timelineValue,t.timelineValue=function({$currentTimelineValue:e}){return e}(t))&&(e.timelineValue=!0),(e.$currentInstance||e.timelineType||e.timelineValue)&&this._differs(t.makeProps,t.makeProps=function({$currentInstance:e,timelineType:t,timelineValue:n}){return _e(e,t,n)}(t))&&(e.makeProps=!0),(e.timeline||e.$currentInstance||e.timelineType||e.timelineValue)&&this._differs(t.label,t.label=function({timeline:e,$currentInstance:t,timelineType:n,timelineValue:i}){if(g.q[e])return`Statuses: ${g.q[e].label} timeline on ${t}`;switch(n){case"tag":return`Statuses: #${i} hashtag`;case"status":return"Statuses: thread";case"account":return"Statuses: account timeline";case"list":return"Statuses: list";case"notifications":return`Notifications on ${t}`}}(t))&&(e.label=!0),(e.timelineType||e.timelineValue||e.$firstTimelineItemId)&&this._differs(t.scrollToItem,t.scrollToItem=function({timelineType:e,timelineValue:t,$firstTimelineItemId:n}){return"status"===e&&n&&t!==n&&t}(t))&&(e.scrollToItem=!0),e.$filteredTimelineItemSummaries&&this._differs(t.itemIds,t.itemIds=function({$filteredTimelineItemSummaries:e}){return e&&e.map((e=>e.id))}(t))&&(e.itemIds=!0),e.$filteredTimelineItemSummariesToAdd&&this._differs(t.itemIdsToAdd,t.itemIdsToAdd=function({$filteredTimelineItemSummariesToAdd:e}){return e&&e.map((e=>e.id))}(t))&&(e.itemIdsToAdd=!0),e.itemIdsToAdd&&this._differs(t.headerProps,t.headerProps=function({itemIdsToAdd:e}){return{count:e?e.length:0,onClick:V}}(t))&&(e.headerProps=!0),(e.$currentInstance||e.timeline)&&this._differs(t.focusRealm,t.focusRealm=function({$currentInstance:e,timeline:t}){return`${e}-${t}`}(t))&&(e.focusRealm=!0)};const Be=Le},7526:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});var i=n(8273),o=n(1029);async function r(e,t,n,r,s,a){const l=function(e){switch(e){case"local":case"federated":return"timelines/public";case"home":return"timelines/home";case"notifications":case"notifications/mentions":return"notifications";case"favorites":return"favourites";case"direct":return"conversations";case"bookmarks":return"bookmarks"}if(e.startsWith("tag/"))return"timelines/tag";if(e.startsWith("account/"))return"accounts";if(e.startsWith("list/"))return"timelines/list";throw new Error(`Invalid timeline type: ${e}`)}(n);let c=`${(0,o.E)(e)}/api/v1/${l}`;n.startsWith("tag/")?c+="/"+n.split("/")[1]:n.startsWith("account/")?c+="/"+n.split("/")[1]+"/statuses":n.startsWith("list/")&&(c+="/"+n.split("/")[1]);const m={};s&&(m.since_id=s),r&&(m.max_id=r),a&&(m.limit=a),"local"===n&&(m.local=!0),n.startsWith("account/")&&(n.endsWith("media")?m.only_media=!0:m.exclude_replies=!n.endsWith("/with_replies")),"notifications/mentions"===n&&(m.exclude_types=["follow","favourite","reblog","poll"]),c+="?"+(0,i.pe)(m);let{json:u,headers:d}=await(0,i.SM)(c,(0,o.I)(t),{timeout:i.EH});return"direct"===n&&(u=u.map((e=>e.last_status))),{items:u,headers:d}}},2961:(e,t,n)=>{"use strict";n.d(t,{L:()=>i,q:()=>o});const i=20,o={home:{name:"home",label:"Home"},local:{name:"local",label:"Local"},federated:{name:"federated",label:"Federated"}}},4286:(e,t,n)=>{"use strict";n.d(t,{g:()=>s});var i=n(7569),o=n(4386);const r=new DOMParser;function s(e,t){if(!e)return"";(0,i.B)("statusHtmlToPlainText"),e=(0,o.e)(e);const n=r.parseFromString(e,"text/html");!function(e,t){const n=e.querySelectorAll("a.mention");for(let i=0;i<n.length;i++){const e=n[i],o=e.getAttribute("href"),r=t.find((e=>e.url===o));r&&(e.innerText=`@${r.acct}`)}}(n,t);const s=function(e){let t="";const n=e.querySelectorAll("p");for(let i=0;i<n.length;i++){const o=n[i],r=o.querySelectorAll("br");for(let t=0;t<r.length;t++){const n=r[t];n.parentNode.replaceChild(e.createTextNode("\n"),n)}t+=(i>0?"\n\n":"")+o.textContent}return t}(n);return(0,i.s)("statusHtmlToPlainText"),s}},137:(e,t,n)=>{"use strict";n.d(t,{Bu:()=>o,hC:()=>s,gV:()=>a});var i=n(6826);function o(e,t){return(0,i.Sk)(e,t,"0")}function r(e){return o(e,30)}function s(e){const t=r(e);let n="";for(let i=0;i<t.length;i++){const e=170-t.charCodeAt(i);n+=String.fromCharCode(e)}return n}function a(e,t){const n=r(e.id),i=r(t.id);return n<i?-1:n===i?0:1}}}]);
//# sourceMappingURL=3038.dd1918c280be2c6a0580.3038.js.map