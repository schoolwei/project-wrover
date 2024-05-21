"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{9702:function(t,e,n){n.d(e,{E:function(){return G}});var r=n(3827),s=n(3618),a=n(9631),o=n(4090),i=n(6376),l=n(9655),d=n(6602),c=n(2311);class u{translate(t){return this.x+=t.x,this.y+=t.y,this}scale(t){return this.x*=t,this.y*=t,this}normalize(){return this.scale(1/this.length())}length2(){return this.x**2+this.y**2}length(){return Math.sqrt(this.length2())}clone(){return new u(this.x,this.y)}add(t){return new u(this.x+t.x,this.y+t.y)}subtract(t){return new u(this.x-t.x,this.y-t.y)}multiply(t){return new u(this.x*t.y,this.y*t.y)}between(t){return new u((this.x+t.x)/2,(this.y+t.y)/2)}direction(){return Math.atan2(this.y,this.x)}setDirection(t){let e=this.length();this.x=Math.cos(t)*e,this.y=Math.sin(t)*e}rotate(t){this.setDirection(this.direction()+t)}static zero(){return new this(0,0)}static polar(t,e){return new u(Math.cos(t)*e,Math.sin(t)*e)}constructor(t,e){this.x=t,this.y=e}}class h{moveLeft(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.left.subtract(this.right).direction();this.left=u.polar(e-this.delta*(t?-1:1),2*this.radius).add(this.right)}moveRight(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.right.subtract(this.left).direction();this.right=u.polar(e+this.delta*(t?-1:1),2*this.radius).add(this.left)}getDirection(){return this.right.subtract(this.left).direction()}getCenter(){return this.left.between(this.right)}constructor(t,e){this.radius=t,this.delta=e,this.left=new u(-t,0),this.right=new u(t,0)}}let f=1/5800,x=new i.Vector2(0,0),m=null;var p=n(1962);let g=(0,o.createContext)([void 0,()=>{}]);function w(t){let[e,n]=(0,o.useState)();return(0,o.useEffect)(()=>{function t(){n(void 0)}return p.y8.on("navigation",t),()=>{p.y8.off("navigation",t)}},[]),(0,r.jsx)(g.Provider,{value:[e,function(t,e){let r=m;r&&(p.R$.emit("configureOdometer",{left:{x:r.left.x,y:r.left.y},right:{x:r.right.x,y:r.right.y},delta:r.delta}),p.R$.emit("navigate",{x:t,y:e}),n(new i.Vector3(t,0,e)))}],children:t.children})}function y(){return(0,o.useContext)(g)}function j(){let[t]=y();return t?(0,r.jsx)(c.aL,{position:t,scale:.1}):null}function v(t){let e=function(t){let[e,n]=(0,o.useState)(new i.Quaternion);return(0,d.C)(()=>{e.slerp(t,.1),n(e.clone())}),e}(t.rotation);return(0,r.jsx)("group",{quaternion:e,children:(0,r.jsxs)("group",{position:t.position.clone().negate(),children:[(0,r.jsx)(j,{}),t.lines.map((t,e)=>{let n=t.start.clone().add(t.end).multiplyScalar(.5);return n.z=n.y,n.y=.1,(0,r.jsxs)("mesh",{position:n,rotation:new i.Euler(0,-Math.atan2(t.end.y-t.start.y,t.end.x-t.start.x),0),children:[(0,r.jsx)("boxGeometry",{args:[t.start.distanceTo(t.end),.2,.05]}),(0,r.jsx)("meshStandardMaterial",{color:"#ccc"})]},e)}),(0,r.jsx)("gridHelper",{args:[100,100,"dimgray","dimgray"]})]})})}let b=(0,o.createContext)({pointer:null,setPointer:()=>{},locked:!1,setLocked:()=>{}});function N(t){let[e,n]=(0,o.useState)(null),[s,a]=(0,o.useState)(!1);return(0,r.jsx)(b.Provider,{value:{pointer:e,setPointer:n,locked:s,setLocked:a},children:t.children})}function S(){let{pointer:t,setPointer:e,locked:n,setLocked:r}=(0,o.useContext)(b);return{pointer:t,locked:n,setLocked:r,setPointer:t=>{n||e(t)}}}function M(){let{pointer:t,setPointer:e}=S();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.JO,{args:[100,100],rotation:new i.Euler(-Math.PI/2,0,0),onPointerMove:t=>{t.point.x*=-1,t.point.y=1,e(t.point)},onPointerLeave:()=>{e(null)},children:(0,r.jsx)("meshStandardMaterial",{color:"#333"})}),(0,r.jsx)("pointLight",{position:null!=t?t:[0,1,0],intensity:1})]})}var V=n(6959);function E(t){let e=t.length/2+t.offset.z,n=t.width/2;return(0,r.jsxs)("group",{position:t.position,rotation:t.rotation,children:[(0,r.jsxs)("mesh",{position:t.offset,children:[(0,r.jsx)("boxGeometry",{args:[t.width,t.height,t.length]}),(0,r.jsx)("meshNormalMaterial",{})]}),(0,r.jsx)(R,{start:new i.Vector3(0,0,e),end:new i.Vector3(0,0,t.distanceFront-e)}),(0,r.jsx)(R,{start:new i.Vector3(-n,0,0),end:new i.Vector3(-t.distanceLeft-n,0,0)}),(0,r.jsx)(R,{start:new i.Vector3(n,0,0),end:new i.Vector3(t.distanceRight+n,0,0)})]})}function R(t){let e=t.start.distanceTo(t.end);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(V.V,{position:t.start.clone().add(t.end).divideScalar(2),className:"text-white select-none text-sm",children:[e.toFixed(2),"m"]}),(0,r.jsx)(c.xu,{args:[e,.005,.005],position:t.start.clone().add(t.end).divideScalar(2),rotation:new i.Euler(0,-Math.atan2(t.end.z-t.start.z,t.end.x-t.start.x),0),children:(0,r.jsx)("meshBasicMaterial",{color:"lime"})})]})}let z=(t,e)=>(t-e)**2,C=(t,e)=>2*(t-e),k=(t,e,n,r)=>z(t,n)+z(e,r),F=(t,e,n,r)=>C(t,n),L=(t,e,n,r)=>C(e,r),T=(t,e,n,r)=>k(t,e,n,r)**.5,P=(t,e,n,r)=>.5*k(t,e,n,r)**-.5*F(t,e,n,r),A=(t,e,n,r)=>.5*k(t,e,n,r)**-.5*L(t,e,n,r),_=t=>Math.abs(t),O=t=>Math.sign(t),Z=t=>Math.log(t),D=t=>1/t,I=(t,e,n,r,s,a)=>a-10*_(s)*Z(T(t,e,n,r)),U=t=>(e,n,r,s,a,o,i)=>2*(I(e,n,s,a,o,i)-r)*t(e,n,s,a,o,i),W=U((t,e,n,r,s,a)=>a);U((t,e,n,r,s,a)=>a-10*O(s)*Z(T(t,e,n,r)));let Y=U((t,e,n,r,s,a)=>10*_(s)*D(T(t,e,n,r))*P(t,e,n,r)),$=U((t,e,n,r,s,a)=>10*_(s)*D(T(t,e,n,r))*A(t,e,n,r)),Q=Array(50).fill(0).map((t,e)=>(e-25)*2);function X(t){let[e,n]=(0,o.useState)([0,0,1,1]);return(0,o.useEffect)(()=>{let r=setInterval(()=>{let r=function(t,e,n){let r=function(t,e){let[n,r,s,a]=e,o=0,i=0,l=0;for(let[e,d,c]of t)o+=Y(e,d,c,n,r,s,a),i+=$(e,d,c,n,r,s,a),l+=W(e,d,c,n,r,s,a);return[o,i,0,l]}(t,e),s=[...e];for(let t=0;t<4;t++)s[t]-=.01*r[t];return s}(t.dataset,e,0);n(r),console.log(r)},20);return()=>clearInterval(r)},[e]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(q,{params:e,dataset:t.dataset,rssiOffset:90,rssiScale:.3})})}function q(t){return(0,r.jsxs)("group",{children:[t.dataset.map((e,n)=>{let[s,a,o]=e,i=(o+t.rssiOffset)*t.rssiScale;return(0,r.jsx)(c.xu,{position:[s,i/2,a],scale:[.05,i,.05],children:(0,r.jsx)("meshStandardMaterial",{color:"red"})},n)}),Q.map(e=>Q.map(n=>{let s=I(e,n,...t.params),a=(s+t.rssiOffset)*t.rssiScale,o=new i.Color;return o.setHSL(s/90,1,.5),(0,r.jsx)(c.xu,{position:[e,a,n],scale:.5,children:(0,r.jsx)("meshStandardMaterial",{color:o})},1e3*n+e)}))]})}function B(){let[t]=(0,o.useState)(.2),[e]=(0,o.useState)(.15),[n]=(0,o.useState)(new i.Vector3(0,0,-.05)),s=e/2-n.z,{data:a,distanceFront:l,distanceLeft:d,distanceRight:c}=function(){let{distanceFront:t,distanceLeft:e,distanceRight:n,data:r,add:s}=function(){let[t,e]=(0,o.useState)(0),[n,r]=(0,o.useState)(0),[s,a]=(0,o.useState)(0),[i,l]=(0,o.useState)([]);return{distanceFront:t,distanceLeft:n,distanceRight:s,data:i,add:function(t){let{sonar:n}=t;e(n[0]*f),a(n[1]*f),r(n[2]*f),t.hall&&(i.push(t),l([...i]))}}}();return(0,o.useEffect)(()=>{function t(t){s(t),e()}function e(){setTimeout(()=>{p.R$.emit("locomotion",{})},100)}return e(),p.y8.on("locomotion",t),()=>{p.y8.off("locomotion",t)}},[s]),{distanceFront:t,distanceLeft:e,distanceRight:n,data:r}}(),{position:u,rotation:g,lines:w}=function(t,e,n){let[r,s]=(0,o.useState)(new i.Vector3(0,0,0)),[a,l]=(0,o.useState)(new i.Quaternion),[d,c]=(0,o.useState)([]);return(0,o.useEffect)(()=>{let{points:r,path:a,rotations:o}=function(t,e,n,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.3,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,o=[],l=[],d=[],c=new h(.15,.036),u=0;for(let h of t){if(!h.hall)continue;for(let t of(u+=.001,h.hall)){let e=t.toLowerCase(),n=t!==e;"l"===e?c.moveLeft(n):"r"===e&&c.moveRight(n)}let{x:t,y:m}=c.getCenter();console.log(t,m);let p=new i.Vector2(t,m),g=c.getDirection();o.push(p),l.push(g);let w=h.sonar[0]*f,y=h.sonar[1]*f,j=h.sonar[2]*f;if(w<s){let t=new i.Vector2(w+e,0).rotateAround(x,g+Math.PI/2).add(p);d.push(new i.Vector3(t.x,t.y,u))}if(j<a){let t=new i.Vector2(j+n,0).rotateAround(x,g+Math.PI).add(p);d.push(new i.Vector3(t.x,t.y,u))}if(y<a){let t=new i.Vector2(y+r,0).rotateAround(x,g).add(p);d.push(new i.Vector3(t.x,t.y,u))}}return m=c,{points:d,path:o,rotations:l}}(t,e,n,n);console.log(t);let d=a.at(-1),u=function(t,e){let n=[],r=new Set;for(let e of t){if(r.has(e))continue;let[s,a]=function(t,e){let n=1/0,r=t[0];for(let s of t){if(s===e)continue;let t=s.distanceTo(e);t<n&&(n=t,r=s)}return[r,n]}(t,e);a>1||(r.add(e),r.add(s),n.push({start:e,end:s}))}return n}(r,0);for(let t=0;t<100;t++){let t=function(t,e){let n=[],r=new Set;for(let e of t){if(r.has(e))continue;r.add(e);let[s,a,o]=function(t,e){let n=1/0,r=t[0],s=e.start.clone().sub(e.end).normalize();for(let a of t){if(a===e)continue;let t=Math.min(e.start.distanceTo(a.start),e.start.distanceTo(a.end),e.end.distanceTo(a.start),e.end.distanceTo(a.end)),o=a.start.clone().sub(a.end).normalize(),i=1-Math.abs(s.dot(o))+t;i<n&&(n=i,r=a)}return[r,n,s]}(t,e);if(!s){n.push(e);continue}if(r.add(s),a>.2){n.push(e),n.push(s);continue}let i=-1/0,l=1/0,d=e.start,c=e.end,u=e.start.clone().add(e.end).add(s.start).add(s.end).multiplyScalar(.25);for(let t of[e.start,e.end,s.start,s.end]){let e=o.dot(t.clone().sub(u));e>i?(i=e,d=t):e<l&&(l=e,c=t)}n.push({start:d,end:c})}return n}(u,0);if(t.length===u.length)break;u=t}c(u),d&&s(new i.Vector3(d.x,0,d.y));let p=o.at(-1);p&&l(new i.Quaternion().setFromEuler(new i.Euler(0,p,0)))},[t,e,n]),{position:r,rotation:a,lines:d}}(a,s,t/2);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{position:u,lines:w,rotation:g}),(0,r.jsx)(X,{dataset:[[50,50,-30],[10,10,-60]]}),(0,r.jsx)(E,{width:t,height:.05,length:e,distanceFront:l,distanceLeft:d,distanceRight:c,position:new i.Vector3(0,.025,0),offset:n}),(0,r.jsx)(M,{})]})}function G(){return(0,r.jsx)(w,{children:(0,r.jsx)(N,{children:(0,r.jsx)(J,{})})})}function H(t){var e,n;let{menuAt:s}=t,a=null!==(e=null==s?void 0:s.x)&&void 0!==e?e:0,o=null!==(n=null==s?void 0:s.z)&&void 0!==n?n:0,[i,d]=y();return(0,r.jsxs)(l.Zo,{onClick:()=>{d(a,o)},children:["Navigate to (",a.toFixed(2),", ",o.toFixed(2),")"]})}function J(){let t=(0,o.useRef)(null),{pointer:e}=S(),[n,d]=(0,o.useState)();return(0,r.jsxs)(l.xV,{children:[(0,r.jsx)(l.W4,{ref:t,children:(0,r.jsx)(a.Xz,{style:{background:"black"},camera:{position:[0,2,-2]},onContextMenu:r=>{var s;d(null!=e?e:n),null===(s=t.current)||void 0===s||s.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0,clientX:r.clientX,clientY:r.clientY}))},children:(0,r.jsxs)("group",{scale:[-1,1,1],children:[(0,r.jsx)(B,{}),(0,r.jsx)(s.z,{mouseButtons:{LEFT:i.MOUSE.ROTATE,MIDDLE:i.MOUSE.PAN}}),(0,r.jsx)("ambientLight",{intensity:1})]})})}),(0,r.jsx)(l.h_,{children:(0,r.jsx)(H,{menuAt:n})})]})}},9655:function(t,e,n){n.d(e,{W4:function(){return u},Zo:function(){return f},h_:function(){return h},xV:function(){return c}});var r=n(3827),s=n(4090),a=n(278),o=n(7805),i=n(9259),l=n(7501),d=n(1657);let c=a.fC,u=a.xz;a.ZA,a.Uv,a.Tr,a.Ee,s.forwardRef((t,e)=>{let{className:n,inset:s,children:i,...l}=t;return(0,r.jsxs)(a.fF,{ref:e,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",s&&"pl-8",n),...l,children:[i,(0,r.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=a.fF.displayName,s.forwardRef((t,e)=>{let{className:n,...s}=t;return(0,r.jsx)(a.tu,{ref:e,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...s})}).displayName=a.tu.displayName;let h=s.forwardRef((t,e)=>{let{className:n,...s}=t;return(0,r.jsx)(a.Uv,{children:(0,r.jsx)(a.VY,{ref:e,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...s})})});h.displayName=a.VY.displayName;let f=s.forwardRef((t,e)=>{let{className:n,inset:s,...o}=t;return(0,r.jsx)(a.ck,{ref:e,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...o})});f.displayName=a.ck.displayName,s.forwardRef((t,e)=>{let{className:n,children:s,checked:o,...l}=t;return(0,r.jsxs)(a.oC,{ref:e,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:o,...l,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(a.wU,{children:(0,r.jsx)(i.Z,{className:"h-4 w-4"})})}),s]})}).displayName=a.oC.displayName,s.forwardRef((t,e)=>{let{className:n,children:s,...o}=t;return(0,r.jsxs)(a.Rk,{ref:e,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...o,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(a.wU,{children:(0,r.jsx)(l.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=a.Rk.displayName,s.forwardRef((t,e)=>{let{className:n,inset:s,...o}=t;return(0,r.jsx)(a.__,{ref:e,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold text-foreground",s&&"pl-8",n),...o})}).displayName=a.__.displayName,s.forwardRef((t,e)=>{let{className:n,...s}=t;return(0,r.jsx)(a.Z0,{ref:e,className:(0,d.cn)("-mx-1 my-1 h-px bg-border",n),...s})}).displayName=a.Z0.displayName},1962:function(t,e,n){n.d(e,{A1:function(){return s},R$:function(){return a},y8:function(){return o}});class r{emit(t,e){var n;null===(n=this.handlers[t])||void 0===n||n.forEach(t=>t(e)),this.taps.forEach(n=>n(t,e))}on(t,e){var n,r,s;null!==(s=(r=this.handlers)[t])&&void 0!==s||(r[t]=new Set),null===(n=this.handlers[t])||void 0===n||n.add(e)}off(t,e){var n;null===(n=this.handlers[t])||void 0===n||n.delete(e)}tap(t){this.taps.add(t)}untap(t){this.taps.delete(t)}once(t,e){let n=r=>{this.off(t,n),e(r)};this.on(t,n)}wait(t){return new Promise(e=>{this.once(t,e)})}constructor(){this.handlers={},this.taps=new Set}}let s="WRover",a=new r,o=new r},1657:function(t,e,n){n.d(e,{cn:function(){return a}});var r=n(3167),s=n(1367);function a(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,s.m6)((0,r.W)(e))}}}]);