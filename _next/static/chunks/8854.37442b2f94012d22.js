"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8854],{78854:function(t,e,i){i.r(e),i.d(e,{GoogleCastProvider:function(){return tw}});var s=i(52396),a=i(21862),n=i(93936),h=i(24978),l=i(21135),r=i(34967),_=i(27485),o=i(15115);i(2265);var c=new WeakMap,u=new WeakSet;class d{build(){return(0,s._)(this,c)}setStreamType(t){return t.includes("live")?(0,s._)(this,c).streamType=chrome.cast.media.StreamType.LIVE:(0,s._)(this,c).streamType=chrome.cast.media.StreamType.BUFFERED,this}setTracks(t){return(0,s._)(this,c).tracks=t.map((0,h._)(this,u,v)),this}setMetadata(t,e){return(0,s._)(this,c).metadata=new chrome.cast.media.GenericMediaMetadata,(0,s._)(this,c).metadata.title=t,(0,s._)(this,c).metadata.images=[{url:e}],this}constructor(t){(0,l._)(this,u),(0,a._)(this,c,{writable:!0,value:void 0}),(0,n._)(this,c,new chrome.cast.media.MediaInfo(t.src,t.type))}}function v(t,e){let i=new chrome.cast.media.Track(e,chrome.cast.media.TrackType.TEXT);return i.name=t.label,i.trackContentId=t.src,i.trackContentType="text/vtt",i.language=t.language,i.subtype=t.kind.toUpperCase(),i}var k=new WeakMap,f=new WeakMap,m=new WeakMap,w=new WeakSet,p=new WeakSet,T=new WeakSet,S=new WeakSet,y=new WeakSet,g=new WeakSet,E=new WeakSet,C=new WeakSet;class W{setup(){let t=this.syncRemoteActiveIds.bind(this);(0,r.listenEvent)((0,s._)(this,f).audioTracks,"change",t),(0,r.listenEvent)((0,s._)(this,f).textTracks,"mode-change",t),(0,r.effect)((0,h._)(this,S,A).bind(this))}getLocalTextTracks(){return(0,s._)(this,f).$state.textTracks().filter(t=>t.src&&"vtt"===t.type)}syncRemoteTracks(t){if(!(0,s._)(this,k).isMediaLoaded)return;let e=(0,h._)(this,w,M).call(this),i=this.getLocalTextTracks(),a=(0,h._)(this,p,b).call(this,chrome.cast.media.TrackType.AUDIO),n=(0,h._)(this,p,b).call(this,chrome.cast.media.TrackType.TEXT);for(let i of a){var l;if((0,h._)(this,g,D).call(this,e,i))continue;let a={id:i.trackId.toString(),label:i.name,language:i.language,kind:null!==(l=i.subtype)&&void 0!==l?l:"main",selected:!1};(0,s._)(this,f).audioTracks[_.HV.add](a,t)}for(let e of n){if((0,h._)(this,g,D).call(this,i,e))continue;let a={id:e.trackId.toString(),src:e.trackContentId,label:e.name,language:e.language,kind:e.subtype.toLowerCase()};(0,s._)(this,f).textTracks.add(a,t)}}syncRemoteActiveIds(t){if(!(0,s._)(this,k).isMediaLoaded)return;let e=(0,h._)(this,T,L).call(this),i=new chrome.cast.media.EditTracksInfoRequest(e);(0,h._)(this,y,I).call(this,i).catch(t=>{})}constructor(t,e,i){(0,l._)(this,w),(0,l._)(this,p),(0,l._)(this,T),(0,l._)(this,S),(0,l._)(this,y),(0,l._)(this,g),(0,l._)(this,E),(0,l._)(this,C),(0,a._)(this,k,{writable:!0,value:void 0}),(0,a._)(this,f,{writable:!0,value:void 0}),(0,a._)(this,m,{writable:!0,value:void 0}),(0,n._)(this,k,t),(0,n._)(this,f,e),(0,n._)(this,m,i)}}function M(){return(0,s._)(this,f).$state.audioTracks()}function b(t){var e,i;let a=null!==(i=null===(e=(0,s._)(this,k).mediaInfo)||void 0===e?void 0:e.tracks)&&void 0!==i?i:[];return t?a.filter(e=>e.type===t):a}function L(){let t=[],e=(0,h._)(this,w,M).call(this).find(t=>t.selected),i=this.getLocalTextTracks().filter(t=>"showing"===t.mode);if(e){let i=(0,h._)(this,p,b).call(this,chrome.cast.media.TrackType.AUDIO),s=(0,h._)(this,E,N).call(this,i,e);s&&t.push(s.trackId)}if(null==i?void 0:i.length){let e=(0,h._)(this,p,b).call(this,chrome.cast.media.TrackType.TEXT);if(e.length)for(let s of i){let i=(0,h._)(this,E,N).call(this,e,s);i&&t.push(i.trackId)}}return t}function A(){var t,e;let i=this.getLocalTextTracks();if(!(0,s._)(this,k).isMediaLoaded)return;let a=(0,h._)(this,p,b).call(this,chrome.cast.media.TrackType.TEXT);for(let n of i)if(!(0,h._)(this,E,N).call(this,a,n)){(0,r.untrack)(()=>null===(t=(0,s._)(e=this,m))||void 0===t?void 0:t.call(e));break}}function I(t){let e=(0,o.getCastSessionMedia)();return new Promise((i,s)=>null==e?void 0:e.editTracksInfo(t,i,s))}function D(t,e){return t.find(t=>(0,h._)(this,C,O).call(this,t,e))}function N(t,e){return t.find(t=>(0,h._)(this,C,O).call(this,e,t))}function O(t,e){return e.name===t.label&&e.language===t.language&&e.subtype.toLowerCase()===t.kind.toLowerCase()}var G=new WeakMap,P=new WeakMap,R=new WeakMap,$=new WeakMap,V=new WeakMap,x=new WeakMap,H=new WeakMap,U=new WeakMap,F=new WeakMap,X=new WeakMap,B=new WeakMap,K=new WeakMap,Y=new WeakSet,q=new WeakSet,j=new WeakSet,z=new WeakSet,J=new WeakSet,Q=new WeakSet,Z=new WeakSet,tt=new WeakSet,te=new WeakSet,ti=new WeakSet,ts=new WeakSet,ta=new WeakSet,tn=new WeakSet,th=new WeakSet,tl=new WeakSet,tr=new WeakSet,t_=new WeakSet,to=new WeakSet,tc=new WeakSet,tu=new WeakSet,td=new WeakSet,tv=new WeakSet,tk=new WeakSet,tf=new WeakSet,tm=new WeakSet;class tw{get type(){return"google-cast"}get currentSrc(){return(0,s._)(this,$)}get player(){return(0,s._)(this,G)}get cast(){return(0,o.getCastContext)()}get session(){return(0,o.getCastSession)()}get media(){return(0,o.getCastSessionMedia)()}get hasActiveSession(){return(0,o.hasActiveCastSession)((0,s._)(this,$))}setup(){(0,h._)(this,Y,tp).call(this),(0,h._)(this,q,tT).call(this),(0,s._)(this,R).setup(),(0,s._)(this,P).notify("provider-setup",this)}async play(){var t;if((0,s._)(this,G).isPaused||(0,s._)(this,K)){if((0,s._)(this,K)){await (0,h._)(this,tf,tU).call(this,!1,0);return}null===(t=(0,s._)(this,G).controller)||void 0===t||t.playOrPause()}}async pause(){var t;(0,s._)(this,G).isPaused||null===(t=(0,s._)(this,G).controller)||void 0===t||t.playOrPause()}getMediaStatus(t){return new Promise((e,i)=>{var s;null===(s=this.media)||void 0===s||s.getStatus(t,e,i)})}setMuted(t){var e;(t&&!(0,s._)(this,G).isMuted||!t&&(0,s._)(this,G).isMuted)&&(null===(e=(0,s._)(this,G).controller)||void 0===e||e.muteOrUnmute())}setCurrentTime(t){var e;(0,s._)(this,G).currentTime=t,(0,s._)(this,P).notify("seeking",t),null===(e=(0,s._)(this,G).controller)||void 0===e||e.seek()}setVolume(t){var e;(0,s._)(this,G).volumeLevel=t,null===(e=(0,s._)(this,G).controller)||void 0===e||e.setVolumeLevel()}async loadSource(t){var e;if((null===(e=(0,s._)(this,B))||void 0===e?void 0:e.src)!==t&&(0,n._)(this,B,null),(0,o.hasActiveCastSession)(t)){(0,h._)(this,z,ty).call(this),(0,n._)(this,$,t);return}(0,s._)(this,P).notify("load-start");let i=(0,h._)(this,tk,tH).call(this,t),a=await this.session.loadMedia(i);if(a){(0,n._)(this,$,null),(0,s._)(this,P).notify("error",Error((0,o.getCastErrorMessage)(a)));return}(0,n._)(this,$,t)}destroy(){(0,h._)(this,j,tS).call(this),(0,h._)(this,J,tg).call(this)}constructor(t,e){(0,l._)(this,Y),(0,l._)(this,q),(0,l._)(this,j),(0,l._)(this,z),(0,l._)(this,J),(0,l._)(this,Q),(0,l._)(this,Z),(0,l._)(this,tt),(0,l._)(this,te),(0,l._)(this,ti),(0,l._)(this,ts),(0,l._)(this,ta),(0,l._)(this,tn),(0,l._)(this,th),(0,l._)(this,tl),(0,l._)(this,tr),(0,l._)(this,t_),(0,l._)(this,to),(0,l._)(this,tc),(0,l._)(this,tu),(0,l._)(this,td),(0,l._)(this,tv),(0,l._)(this,tk),(0,l._)(this,tf),(0,l._)(this,tm),(0,a._)(this,G,{writable:!0,value:void 0}),(0,a._)(this,P,{writable:!0,value:void 0}),(0,a._)(this,R,{writable:!0,value:void 0}),(0,a._)(this,$,{writable:!0,value:void 0}),(0,a._)(this,V,{writable:!0,value:void 0}),(0,a._)(this,x,{writable:!0,value:void 0}),(0,a._)(this,H,{writable:!0,value:void 0}),(0,a._)(this,U,{writable:!0,value:void 0}),(0,a._)(this,F,{writable:!0,value:void 0}),(0,a._)(this,X,{writable:!0,value:void 0}),(0,a._)(this,B,{writable:!0,value:void 0}),(0,a._)(this,K,{writable:!0,value:void 0}),this.$$PROVIDER_TYPE="GOOGLE_CAST",this.scope=(0,r.createScope)(),(0,n._)(this,$,null),(0,n._)(this,V,"disconnected"),(0,n._)(this,x,0),(0,n._)(this,H,0),(0,n._)(this,U,new _.tn(0,0)),(0,n._)(this,F,new _.LK((0,h._)(this,Z,tC).bind(this))),(0,n._)(this,B,null),(0,n._)(this,K,!1),(0,n._)(this,G,t),(0,n._)(this,P,e),(0,n._)(this,R,new W(t,e,(0,h._)(this,tm,tF).bind(this)))}}function tp(){(0,o.listenCastContextEvent)(cast.framework.CastContextEventType.CAST_STATE_CHANGED,(0,h._)(this,te,tM).bind(this))}function tT(){let t=cast.framework.RemotePlayerEventType,e={[t.IS_CONNECTED_CHANGED]:(0,h._)(this,te,tM),[t.IS_MEDIA_LOADED_CHANGED]:(0,h._)(this,ti,tb),[t.CAN_CONTROL_VOLUME_CHANGED]:(0,h._)(this,ts,tL),[t.CAN_SEEK_CHANGED]:(0,h._)(this,ta,tA),[t.DURATION_CHANGED]:(0,h._)(this,tl,tN),[t.IS_MUTED_CHANGED]:(0,h._)(this,tr,tO),[t.VOLUME_LEVEL_CHANGED]:(0,h._)(this,tr,tO),[t.IS_PAUSED_CHANGED]:(0,h._)(this,t_,tG),[t.LIVE_SEEKABLE_RANGE_CHANGED]:(0,h._)(this,to,tP),[t.PLAYER_STATE_CHANGED]:(0,h._)(this,tc,tR)};(0,n._)(this,X,e);let i=(0,h._)(this,tt,tW).bind(this);for(let t of(0,r.keysOf)(e))(0,s._)(this,G).controller.addEventListener(t,i);(0,r.onDispose)(()=>{for(let t of(0,r.keysOf)(e))(0,s._)(this,G).controller.removeEventListener(t,i)})}function tS(){(0,s._)(this,B)||((0,n._)(this,H,0),(0,n._)(this,U,new _.tn(0,0))),(0,s._)(this,F).stop(),(0,n._)(this,x,0),(0,n._)(this,B,null)}function ty(){var t;let e=new r.DOMEvent("resume-session",{detail:this.session});(0,h._)(this,ti,tb).call(this,e);let{muted:i,volume:a,savedState:n}=(0,s._)(this,P).$state,l=n();this.setCurrentTime(Math.max((0,s._)(this,G).currentTime,null!==(t=null==l?void 0:l.currentTime)&&void 0!==t?t:0)),this.setMuted(i()),this.setVolume(a()),(null==l?void 0:l.paused)===!1&&this.play()}function tg(){this.cast.endCurrentSession(!0);let{remotePlaybackLoader:t}=(0,s._)(this,P).$state;t.set(null)}function tE(){let{savedState:t}=(0,s._)(this,P).$state;t.set({paused:(0,s._)(this,G).isPaused,currentTime:(0,s._)(this,G).currentTime}),(0,h._)(this,J,tg).call(this)}function tC(){(0,h._)(this,th,tD).call(this)}function tW(t){(0,s._)(this,X)[t.type].call(this,t)}function tM(t){let e=this.cast.getCastState(),i=e===cast.framework.CastState.CONNECTED?"connected":e===cast.framework.CastState.CONNECTING?"connecting":"disconnected";if((0,s._)(this,V)===i)return;let a=(0,h._)(this,td,tV).call(this,t);(0,n._)(this,V,i),(0,s._)(this,P).notify("remote-playback-change",{type:"google-cast",state:i},a),"disconnected"===i&&(0,h._)(this,Q,tE).call(this)}function tb(t){if(!(0,s._)(this,G).isMediaLoaded)return;let e=(0,r.peek)((0,s._)(this,P).$state.source);Promise.resolve().then(()=>{if(e!==(0,r.peek)((0,s._)(this,P).$state.source)||!(0,s._)(this,G).isMediaLoaded)return;(0,h._)(this,j,tS).call(this);let i=(0,s._)(this,G).duration;(0,n._)(this,U,new _.tn(0,i));let a={provider:this,duration:i,buffered:new _.tn(0,0),seekable:(0,h._)(this,tu,t$).call(this)},l=(0,h._)(this,td,tV).call(this,t);(0,s._)(this,P).notify("loaded-metadata",void 0,l),(0,s._)(this,P).notify("loaded-data",void 0,l),(0,s._)(this,P).notify("can-play",a,l),(0,h._)(this,ts,tL).call(this),(0,h._)(this,ta,tA).call(this,t);let{volume:o,muted:c}=(0,s._)(this,P).$state;this.setVolume(o()),this.setMuted(c()),(0,s._)(this,F).start(),(0,s._)(this,R).syncRemoteTracks(l),(0,s._)(this,R).syncRemoteActiveIds(l)})}function tL(){(0,s._)(this,P).$state.canSetVolume.set((0,s._)(this,G).canControlVolume)}function tA(t){let e=(0,h._)(this,td,tV).call(this,t);(0,s._)(this,P).notify("stream-type-change",(0,h._)(this,tn,tI).call(this),e)}function tI(){var t;return(null===(t=(0,s._)(this,G).mediaInfo)||void 0===t?void 0:t.streamType)===chrome.cast.media.StreamType.LIVE?(0,s._)(this,G).canSeek?"live:dvr":"live":"on-demand"}function tD(){if((0,s._)(this,B))return;let t=(0,s._)(this,G).currentTime;t!==(0,s._)(this,x)&&((0,s._)(this,P).notify("time-change",t),t>(0,s._)(this,H)&&((0,n._)(this,H,t),(0,h._)(this,to,tP).call(this)),(0,s._)(this,P).$state.seeking()&&(0,s._)(this,P).notify("seeked",t),(0,n._)(this,x,t))}function tN(t){if(!(0,s._)(this,G).isMediaLoaded||(0,s._)(this,B))return;let e=(0,s._)(this,G).duration,i=(0,h._)(this,td,tV).call(this,t);(0,n._)(this,U,new _.tn(0,e)),(0,s._)(this,P).notify("duration-change",e,i)}function tO(t){if(!(0,s._)(this,G).isMediaLoaded)return;let e={muted:(0,s._)(this,G).isMuted,volume:(0,s._)(this,G).volumeLevel},i=(0,h._)(this,td,tV).call(this,t);(0,s._)(this,P).notify("volume-change",e,i)}function tG(t){let e=(0,h._)(this,td,tV).call(this,t);(0,s._)(this,G).isPaused?(0,s._)(this,P).notify("pause",void 0,e):(0,s._)(this,P).notify("play",void 0,e)}function tP(t){let e={seekable:(0,h._)(this,tu,t$).call(this),buffered:new _.tn(0,(0,s._)(this,H))},i=t?(0,h._)(this,td,tV).call(this,t):void 0;(0,s._)(this,P).notify("progress",e,i)}function tR(t){let e=(0,s._)(this,G).playerState,i=chrome.cast.media.PlayerState;if((0,n._)(this,K,e===i.IDLE),e===i.PAUSED)return;let a=(0,h._)(this,td,tV).call(this,t);switch(e){case i.PLAYING:(0,s._)(this,P).notify("playing",void 0,a);break;case i.BUFFERING:(0,s._)(this,P).notify("waiting",void 0,a);break;case i.IDLE:(0,s._)(this,F).stop(),(0,s._)(this,P).notify("pause"),(0,s._)(this,P).notify("end")}}function t$(){return(0,s._)(this,G).liveSeekableRange?new _.tn((0,s._)(this,G).liveSeekableRange.start,(0,s._)(this,G).liveSeekableRange.end):(0,s._)(this,U)}function tV(t){return t instanceof Event?t:new r.DOMEvent(t.type,{detail:t})}function tx(t){let{streamType:e,title:i,poster:a}=(0,s._)(this,P).$state;return new d(t).setMetadata(i(),a()).setStreamType(e()).setTracks((0,s._)(this,R).getLocalTextTracks()).build()}function tH(t){var e,i,a,n,l;let r=(0,h._)(this,tv,tx).call(this,t),_=new chrome.cast.media.LoadRequest(r),o=(0,s._)(this,P).$state.savedState();return _.autoplay=(null!==(a=null===(e=(0,s._)(this,B))||void 0===e?void 0:e.paused)&&void 0!==a?a:null==o?void 0:o.paused)===!1,_.currentTime=null!==(l=null!==(n=null===(i=(0,s._)(this,B))||void 0===i?void 0:i.time)&&void 0!==n?n:null==o?void 0:o.currentTime)&&void 0!==l?l:0,_}async function tU(t,e){let i=(0,r.peek)((0,s._)(this,P).$state.source);(0,n._)(this,B,{src:i,paused:t,time:e}),await this.loadSource(i)}function tF(){(0,h._)(this,tf,tU).call(this,(0,s._)(this,G).isPaused,(0,s._)(this,G).currentTime).catch(t=>{})}}}]);