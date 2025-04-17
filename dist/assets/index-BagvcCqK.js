(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="159",zr={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vp=0,Mu=1,Wp=2,Uf=1,Xp=2,Si=3,Ji=0,Mn=1,Ti=2,Yi=0,ds=1,Su=2,yu=3,Eu=4,Yp=5,mr=100,qp=101,jp=102,Tu=103,bu=104,$p=200,Kp=201,Zp=202,Jp=203,Ql=204,ec=205,Qp=206,em=207,tm=208,nm=209,im=210,rm=211,sm=212,am=213,om=214,lm=0,cm=1,um=2,bo=3,hm=4,fm=5,dm=6,pm=7,Nf=0,mm=1,_m=2,qi=0,gm=1,vm=2,xm=3,Mm=4,Sm=5,Of=300,Ss=301,ys=302,tc=303,nc=304,Vo=306,ic=1e3,ii=1001,rc=1002,dn=1003,wu=1004,rl=1005,Xn=1006,ym=1007,da=1008,ji=1009,Em=1010,Tm=1011,Fc=1012,Ff=1013,zi=1014,ki=1015,pa=1016,Bf=1017,zf=1018,xr=1020,bm=1021,ri=1023,wm=1024,Am=1025,Mr=1026,Es=1027,Rm=1028,kf=1029,Cm=1030,Hf=1031,Gf=1033,sl=33776,al=33777,ol=33778,ll=33779,Au=35840,Ru=35841,Cu=35842,Pu=35843,Vf=36196,Lu=37492,Du=37496,Iu=37808,Uu=37809,Nu=37810,Ou=37811,Fu=37812,Bu=37813,zu=37814,ku=37815,Hu=37816,Gu=37817,Vu=37818,Wu=37819,Xu=37820,Yu=37821,cl=36492,qu=36494,ju=36495,Pm=36283,$u=36284,Ku=36285,Zu=36286,Wf=3e3,Sr=3001,Lm=3200,Dm=3201,Xf=0,Im=1,jn="",qt="srgb",Ci="srgb-linear",Bc="display-p3",Wo="display-p3-linear",wo="linear",Mt="srgb",Ao="rec709",Ro="p3",Hr=7680,Ju=519,Um=512,Nm=513,Om=514,Yf=515,Fm=516,Bm=517,zm=518,km=519,Qu=35044,eh="300 es",sc=1035,wi=2e3,Co=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],po=Math.PI/180,ac=180/Math.PI;function Ta(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function pn(r,e,t){return Math.max(e,Math.min(t,r))}function Hm(r,e){return(r%e+e)%e}function ul(r,e,t){return(1-t)*r+t*e}function th(r){return(r&r-1)===0&&r!==0}function oc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Os(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Gm={DEG2RAD:po};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],v=i[4],S=i[7],E=i[2],w=i[5],T=i[8];return s[0]=o*_+a*M+l*E,s[3]=o*m+a*v+l*w,s[6]=o*p+a*S+l*T,s[1]=c*_+u*M+h*E,s[4]=c*m+u*v+h*w,s[7]=c*p+u*S+h*T,s[2]=d*_+f*M+g*E,s[5]=d*m+f*v+g*w,s[8]=d*p+f*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new rt;function qf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Po(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vm(){const r=Po("canvas");return r.style.display="block",r}const nh={};function ea(r){r in nh||(nh[r]=!0,console.warn(r))}const ih=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rh=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[Ci]:{transfer:wo,primaries:Ao,toReference:r=>r,fromReference:r=>r},[qt]:{transfer:Mt,primaries:Ao,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Wo]:{transfer:wo,primaries:Ro,toReference:r=>r.applyMatrix3(rh),fromReference:r=>r.applyMatrix3(ih)},[Bc]:{transfer:Mt,primaries:Ro,toReference:r=>r.convertSRGBToLinear().applyMatrix3(rh),fromReference:r=>r.applyMatrix3(ih).convertLinearToSRGB()}},Wm=new Set([Ci,Wo]),pt={enabled:!0,_workingColorSpace:Ci,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Wm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ra[e].toReference,i=Ra[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ra[r].primaries},getTransfer:function(r){return r===jn?wo:Ra[r].transfer}};function ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gr;class jf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gr===void 0&&(Gr=Po("canvas")),Gr.width=e.width,Gr.height=e.height;const n=Gr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xm=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ta(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(dl(i[o].image)):s.push(dl(i[o]))}else s=dl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function dl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ym=0;class Fn extends Or{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,n=ii,i=ii,s=Xn,o=da,a=ri,l=ji,c=Fn.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ta(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Sr?qt:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qt?Sr:Wf}set encoding(e){ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?qt:jn}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Of;Fn.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(f+1)/2,E=(p+1)/2,w=(u+d)/4,T=(h+_)/4,P=(g+m)/4;return v>S&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=T/n):S>E?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=P/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=P/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qm extends Or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Sr?qt:jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $f(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends qm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kf extends Fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jm extends Fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,p*M);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const S=a*M;if(l=l*m+d*S,c=c*m+f*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new O,sh=new Pr;class ba{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Pa.subVectors(this.max,Fs),Vr.subVectors(e.a,Fs),Wr.subVectors(e.b,Fs),Xr.subVectors(e.c,Fs),Di.subVectors(Wr,Vr),Ii.subVectors(Xr,Wr),sr.subVectors(Vr,Xr);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-sr.z,sr.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,sr.z,0,-sr.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-sr.y,sr.x,0];return!ml(t,Vr,Wr,Xr,Pa)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,Vr,Wr,Xr,Pa))?!1:(La.crossVectors(Di,Ii),t=[La.x,La.y,La.z],ml(t,Vr,Wr,Xr,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new O,new O,new O,new O,new O,new O,new O,new O],Jn=new O,Ca=new ba,Vr=new O,Wr=new O,Xr=new O,Di=new O,Ii=new O,sr=new O,Fs=new O,Pa=new O,La=new O,ar=new O;function ml(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ar.fromArray(r,s);const a=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $m=new ba,Bs=new O,_l=new O;class wa{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$m.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(_l)),this.expandByPoint(Bs.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new O,gl=new O,Da=new O,Ui=new O,vl=new O,Ia=new O,xl=new O;class Xo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gl.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(gl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Da),a=Ui.dot(this.direction),l=-Ui.dot(Da),c=Ui.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(gl).addScaledVector(Da,d),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,i,s){vl.subVectors(t,e),Ia.subVectors(n,e),xl.crossVectors(vl,Ia);let o=this.direction.dot(xl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(Ui,Ia));if(l<0)return null;const c=a*this.direction.dot(vl.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(xl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Km,e,Zm)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ni.crossVectors(n,Rn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ni.crossVectors(n,Rn)),Ni.normalize(),Ua.crossVectors(Rn,Ni),i[0]=Ni.x,i[4]=Ua.x,i[8]=Rn.x,i[1]=Ni.y,i[5]=Ua.y,i[9]=Rn.y,i[2]=Ni.z,i[6]=Ua.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],S=n[11],E=n[15],w=i[0],T=i[4],P=i[8],x=i[12],y=i[1],z=i[5],U=i[9],q=i[13],D=i[2],I=i[6],G=i[10],F=i[14],Z=i[3],$=i[7],R=i[11],te=i[15];return s[0]=o*w+a*y+l*D+c*Z,s[4]=o*T+a*z+l*I+c*$,s[8]=o*P+a*U+l*G+c*R,s[12]=o*x+a*q+l*F+c*te,s[1]=u*w+h*y+d*D+f*Z,s[5]=u*T+h*z+d*I+f*$,s[9]=u*P+h*U+d*G+f*R,s[13]=u*x+h*q+d*F+f*te,s[2]=g*w+_*y+m*D+p*Z,s[6]=g*T+_*z+m*I+p*$,s[10]=g*P+_*U+m*G+p*R,s[14]=g*x+_*q+m*F+p*te,s[3]=M*w+v*y+S*D+E*Z,s[7]=M*T+v*z+S*I+E*$,s[11]=M*P+v*U+S*G+E*R,s[15]=M*x+v*q+S*F+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,v=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,S=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,E=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,w=t*M+n*v+i*S+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=M*T,e[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*T,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=v*T,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*T,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=S*T,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*T,e[12]=E*T,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,v=l*u,S=l*h,E=n.x,w=n.y,T=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+S)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+v)*T,i[9]=(m-M)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Yr.set(i[0],i[1],i[2]).length();const o=Yr.set(i[4],i[5],i[6]).length(),a=Yr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const c=1/s,u=1/o,h=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=wi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===wi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Co)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=wi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===wi)g=(o+s)*h,_=-2*h;else if(a===Co)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yr=new O,Qn=new Ct,Km=new O(0,0,0),Zm=new O(1,1,1),Ni=new O,Ua=new O,Rn=new O,ah=new Ct,oh=new Pr;class Yo{constructor(e=0,t=0,n=0,i=Yo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yo.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jm=0;const lh=new O,qr=new Pr,vi=new Ct,Na=new O,zs=new O,Qm=new O,e_=new Pr,ch=new O(1,0,0),uh=new O(0,1,0),hh=new O(0,0,1),t_={type:"added"},n_={type:"removed"};class Xt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new O,t=new Yo,n=new Pr,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new rt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Na.copy(e):Na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(zs,Na,this.up):vi.lookAt(Na,zs,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),qr.setFromRotationMatrix(vi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(t_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xt.DEFAULT_UP=new O(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new O,xi=new O,Ml=new O,Mi=new O,jr=new O,$r=new O,fh=new O,Sl=new O,yl=new O,El=new O;let Oa=!1;class ni{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),xi.subVectors(n,t),Ml.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(xi),l=ei.dot(Ml),c=xi.dot(xi),u=xi.dot(Ml),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,i,s,o,a,l){return Oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oa=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Mi),l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),xi.subVectors(e,t),ei.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),ei.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oa=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;jr.subVectors(i,n),$r.subVectors(s,n),Sl.subVectors(e,n);const l=jr.dot(Sl),c=$r.dot(Sl);if(l<=0&&c<=0)return t.copy(n);yl.subVectors(e,i);const u=jr.dot(yl),h=$r.dot(yl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(jr,o);El.subVectors(e,s);const f=jr.dot(El),g=$r.dot(El);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($r,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return fh.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(fh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(jr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Tl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Hm(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Tl(o,s,e+1/3),this.g=Tl(o,s,e),this.b=Tl(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=fl(e.r),this.g=fl(e.g),this.b=fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return pt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(pn(Jt.r*255,0,255))*65536+Math.round(pn(Jt.g*255,0,255))*256+Math.round(pn(Jt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=qt){pt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Fa);const n=ul(Oi.h,Fa.h,t),i=ul(Oi.s,Fa.s,t),s=ul(Oi.l,Fa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new at;at.NAMES=Jf;let i_=0;class Fr extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=ds,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ql&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qf extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new O,Ba=new Ye;class Kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class ed extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class td extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let r_=0;const Vn=new Ct,bl=new Xt,Kr=new O,Cn=new ba,ks=new ba,Gt=new O;class Hn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?td:ed)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Cn.min,ks.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,ks.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(ks.min),Cn.expandByPoint(ks.max))}Cn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),Gt.add(Kr)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new O,u[y]=new O;const h=new O,d=new O,f=new O,g=new Ye,_=new Ye,m=new Ye,p=new O,M=new O;function v(y,z,U){h.fromArray(i,y*3),d.fromArray(i,z*3),f.fromArray(i,U*3),g.fromArray(o,y*2),_.fromArray(o,z*2),m.fromArray(o,U*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(q),M.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),c[y].add(p),c[z].add(p),c[U].add(p),u[y].add(M),u[z].add(M),u[U].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let y=0,z=S.length;y<z;++y){const U=S[y],q=U.start,D=U.count;for(let I=q,G=q+D;I<G;I+=3)v(n[I+0],n[I+1],n[I+2])}const E=new O,w=new O,T=new O,P=new O;function x(y){T.fromArray(s,y*3),P.copy(T);const z=c[y];E.copy(z),E.sub(T.multiplyScalar(T.dot(z))).normalize(),w.crossVectors(P,z);const q=w.dot(u[y])<0?-1:1;l[y*4]=E.x,l[y*4+1]=E.y,l[y*4+2]=E.z,l[y*4+3]=q}for(let y=0,z=S.length;y<z;++y){const U=S[y],q=U.start,D=U.count;for(let I=q,G=q+D;I<G;I+=3)x(n[I+0]),x(n[I+1]),x(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Kn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new Ct,or=new Xo,za=new wa,ph=new O,Zr=new O,Jr=new O,Qr=new O,wl=new O,ka=new O,Ha=new Ye,Ga=new Ye,Va=new Ye,mh=new O,_h=new O,gh=new O,Wa=new O,Xa=new O;class si extends Xt{constructor(e=new Hn,t=new Qf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(wl.fromBufferAttribute(h,e),o?ka.addScaledVector(wl,u):ka.addScaledVector(wl.sub(t),u))}t.add(ka)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(za.containsPoint(or.origin)===!1&&(or.intersectSphere(za,ph)===null||or.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(dh.copy(s).invert(),or.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,E=v;S<E;S+=3){const w=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);i=Ya(this,p,e,n,c,u,h,w,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=Ya(this,o,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,E=v;S<E;S+=3){const w=S,T=S+1,P=S+2;i=Ya(this,p,e,n,c,u,h,w,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,S=m+2;i=Ya(this,o,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function s_(r,e,t,n,i,s,o,a){let l;if(e.side===Mn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ji,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:r}}function Ya(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Zr),r.getVertexPosition(l,Jr),r.getVertexPosition(c,Qr);const u=s_(r,e,t,n,Zr,Jr,Qr,Wa);if(u){i&&(Ha.fromBufferAttribute(i,a),Ga.fromBufferAttribute(i,l),Va.fromBufferAttribute(i,c),u.uv=ni.getInterpolation(Wa,Zr,Jr,Qr,Ha,Ga,Va,new Ye)),s&&(Ha.fromBufferAttribute(s,a),Ga.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,c),u.uv1=ni.getInterpolation(Wa,Zr,Jr,Qr,Ha,Ga,Va,new Ye),u.uv2=u.uv1),o&&(mh.fromBufferAttribute(o,a),_h.fromBufferAttribute(o,l),gh.fromBufferAttribute(o,c),u.normal=ni.getInterpolation(Wa,Zr,Jr,Qr,mh,_h,gh,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};ni.getNormal(Zr,Jr,Qr,h.normal),u.face=h}return u}class Ds extends Hn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(h,2));function g(_,m,p,M,v,S,E,w,T,P,x){const y=S/T,z=E/P,U=S/2,q=E/2,D=w/2,I=T+1,G=P+1;let F=0,Z=0;const $=new O;for(let R=0;R<G;R++){const te=R*z-q;for(let re=0;re<I;re++){const j=re*y-U;$[_]=j*M,$[m]=te*v,$[p]=D,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=w>0?1:-1,u.push($.x,$.y,$.z),h.push(re/T),h.push(1-R/P),F+=1}}for(let R=0;R<P;R++)for(let te=0;te<T;te++){const re=d+te+I*R,j=d+te+I*(R+1),J=d+(te+1)+I*(R+1),fe=d+(te+1)+I*R;l.push(re,j,fe),l.push(j,J,fe),Z+=6}a.addGroup(f,Z,x),f+=Z,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function cn(r){const e={};for(let t=0;t<r.length;t++){const n=Ts(r[t]);for(const i in n)e[i]=n[i]}return e}function a_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nd(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}const o_={clone:Ts,merge:cn};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=a_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class id extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends id{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(po*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class u_ extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xn(es,ts,e,t);i.layers=this.layers,this.add(i);const s=new xn(es,ts,e,t);s.layers=this.layers,this.add(s);const o=new xn(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new xn(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new xn(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new xn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rd extends Fn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h_ extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sr?qt:jn),this.texture=new rd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ds(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Yi});s.uniforms.tEquirect.value=t;const o=new si(i,s),a=t.minFilter;return t.minFilter===da&&(t.minFilter=Xn),new u_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Al=new O,f_=new O,d_=new rt;class Bi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Al.subVectors(n,t).cross(f_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||d_.getNormalMatrix(e),i=this.coplanarPoint(Al).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new wa,qa=new O;class zc{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,m-f,S-p).normalize(),n[1].setComponents(l+s,d+c,m+f,S+p).normalize(),n[2].setComponents(l+o,d+u,m+g,S+M).normalize(),n[3].setComponents(l-o,d-u,m-g,S-M).normalize(),n[4].setComponents(l-a,d-h,m-_,S-v).normalize(),t===wi)n[5].setComponents(l+a,d+h,m+_,S+v).normalize();else if(t===Co)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qa.x=i.normal.x>0?e.max.x:e.min.x,qa.y=i.normal.y>0?e.max.y:e.min.y,qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function p_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class kc extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,S=M+c*(p+1),E=M+1+c*(p+1),w=M+1+c*p;f.push(v,S,w),f.push(S,E,w)}this.setIndex(f),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.widthSegments,e.heightSegments)}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,__=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,M_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,b_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,B_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ig=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:m_,alphahash_pars_fragment:__,alphamap_fragment:g_,alphamap_pars_fragment:v_,alphatest_fragment:x_,alphatest_pars_fragment:M_,aomap_fragment:S_,aomap_pars_fragment:y_,batching_pars_vertex:E_,batching_vertex:T_,begin_vertex:b_,beginnormal_vertex:w_,bsdfs:A_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:I_,color_fragment:U_,color_pars_fragment:N_,color_pars_vertex:O_,color_vertex:F_,common:B_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:k_,displacementmap_pars_vertex:H_,displacementmap_vertex:G_,emissivemap_fragment:V_,emissivemap_pars_fragment:W_,colorspace_fragment:X_,colorspace_pars_fragment:Y_,envmap_fragment:q_,envmap_common_pars_fragment:j_,envmap_pars_fragment:$_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:lg,envmap_vertex:Z_,fog_vertex:J_,fog_pars_vertex:Q_,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_fragment:ig,lightmap_pars_fragment:rg,lights_lambert_fragment:sg,lights_lambert_pars_fragment:ag,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:ug,lights_phong_fragment:hg,lights_phong_pars_fragment:fg,lights_physical_fragment:dg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:_g,lights_fragment_end:gg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:yg,map_pars_fragment:Eg,map_particle_fragment:Tg,map_particle_pars_fragment:bg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Lg,normal_fragment_begin:Dg,normal_fragment_maps:Ig,normal_pars_fragment:Ug,normal_pars_vertex:Ng,normal_vertex:Og,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Hg,opaque_fragment:Gg,packing:Vg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:Yg,dithering_pars_fragment:qg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Jg,shadowmask_pars_fragment:Qg,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:r0,specularmap_pars_fragment:s0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:u0,uv_pars_vertex:h0,uv_vertex:f0,worldpos_vertex:d0,background_vert:p0,background_frag:m0,backgroundCube_vert:_0,backgroundCube_frag:g0,cube_vert:v0,cube_frag:x0,depth_vert:M0,depth_frag:S0,distanceRGBA_vert:y0,distanceRGBA_frag:E0,equirect_vert:T0,equirect_frag:b0,linedashed_vert:w0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:D0,meshmatcap_frag:I0,meshnormal_vert:U0,meshnormal_frag:N0,meshphong_vert:O0,meshphong_frag:F0,meshphysical_vert:B0,meshphysical_frag:z0,meshtoon_vert:k0,meshtoon_frag:H0,points_vert:G0,points_frag:V0,shadow_vert:W0,shadow_frag:X0,sprite_vert:Y0,sprite_frag:q0},me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},li={basic:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:cn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:cn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:cn([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:cn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:cn([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:cn([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:cn([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:cn([me.lights,me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};li.physical={uniforms:cn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ja={r:0,b:0,g:0};function j0(r,e,t,n,i,s,o){const a=new at(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Vo)?(u===void 0&&(u=new si(new Ds(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:Ts(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=pt.getTransfer(v.colorSpace)!==Mt,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new si(new kc(2,2),new Lr({name:"BackgroundMaterial",uniforms:Ts(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(ja,nd(r)),n.buffers.color.setClear(ja.r,ja.g,ja.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function $0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(D,I,G,F,Z){let $=!1;if(o){const R=_(F,G,I);c!==R&&(c=R,f(c.object)),$=p(D,F,G,Z),$&&M(D,F,G,Z)}else{const R=I.wireframe===!0;(c.geometry!==F.id||c.program!==G.id||c.wireframe!==R)&&(c.geometry=F.id,c.program=G.id,c.wireframe=R,$=!0)}Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,P(D,I,G,F),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,I,G){const F=G.wireframe===!0;let Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let $=Z[I.id];$===void 0&&($={},Z[I.id]=$);let R=$[F];return R===void 0&&(R=m(d()),$[F]=R),R}function m(D){const I=[],G=[],F=[];for(let Z=0;Z<i;Z++)I[Z]=0,G[Z]=0,F[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:F,object:D,attributes:{},index:null}}function p(D,I,G,F){const Z=c.attributes,$=I.attributes;let R=0;const te=G.getAttributes();for(const re in te)if(te[re].location>=0){const J=Z[re];let fe=$[re];if(fe===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;R++}return c.attributesNum!==R||c.index!==F}function M(D,I,G,F){const Z={},$=I.attributes;let R=0;const te=G.getAttributes();for(const re in te)if(te[re].location>=0){let J=$[re];J===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),Z[re]=fe,R++}c.attributes=Z,c.attributesNum=R,c.index=F}function v(){const D=c.newAttributes;for(let I=0,G=D.length;I<G;I++)D[I]=0}function S(D){E(D,0)}function E(D,I){const G=c.newAttributes,F=c.enabledAttributes,Z=c.attributeDivisors;G[D]=1,F[D]===0&&(r.enableVertexAttribArray(D),F[D]=1),Z[D]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,I),Z[D]=I)}function w(){const D=c.newAttributes,I=c.enabledAttributes;for(let G=0,F=I.length;G<F;G++)I[G]!==D[G]&&(r.disableVertexAttribArray(G),I[G]=0)}function T(D,I,G,F,Z,$,R){R===!0?r.vertexAttribIPointer(D,I,G,Z,$):r.vertexAttribPointer(D,I,G,F,Z,$)}function P(D,I,G,F){if(n.isWebGL2===!1&&(D.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Z=F.attributes,$=G.getAttributes(),R=I.defaultAttributeValues;for(const te in $){const re=$[te];if(re.location>=0){let j=Z[te];if(j===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const J=j.normalized,fe=j.itemSize,ve=t.get(j);if(ve===void 0)continue;const ge=ve.buffer,Le=ve.type,we=ve.bytesPerElement,Ne=n.isWebGL2===!0&&(Le===r.INT||Le===r.UNSIGNED_INT||j.gpuType===Ff);if(j.isInterleavedBufferAttribute){const Ue=j.data,H=Ue.stride,We=j.offset;if(Ue.isInstancedInterleavedBuffer){for(let _e=0;_e<re.locationSize;_e++)E(re.location+_e,Ue.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let _e=0;_e<re.locationSize;_e++)S(re.location+_e);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let _e=0;_e<re.locationSize;_e++)T(re.location+_e,fe/re.locationSize,Le,J,H*we,(We+fe/re.locationSize*_e)*we,Ne)}else{if(j.isInstancedBufferAttribute){for(let Ue=0;Ue<re.locationSize;Ue++)E(re.location+Ue,j.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ue=0;Ue<re.locationSize;Ue++)S(re.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let Ue=0;Ue<re.locationSize;Ue++)T(re.location+Ue,fe/re.locationSize,Le,J,fe*we,fe/re.locationSize*Ue*we,Ne)}}else if(R!==void 0){const J=R[te];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(re.location,J);break;case 3:r.vertexAttrib3fv(re.location,J);break;case 4:r.vertexAttrib4fv(re.location,J);break;default:r.vertexAttrib1fv(re.location,J)}}}}w()}function x(){U();for(const D in a){const I=a[D];for(const G in I){const F=I[G];for(const Z in F)g(F[Z].object),delete F[Z];delete I[G]}delete a[D]}}function y(D){if(a[D.id]===void 0)return;const I=a[D.id];for(const G in I){const F=I[G];for(const Z in F)g(F[Z].object),delete F[Z];delete I[G]}delete a[D.id]}function z(D){for(const I in a){const G=a[I];if(G[D.id]===void 0)continue;const F=G[D.id];for(const Z in F)g(F[Z].object),delete F[Z];delete G[D.id]}}function U(){q(),u=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:q,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function K0(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Z0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),E=v&&S,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:w}}function J0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Bi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,v=M*4;let S=p.clippingState||null;l.value=S,S=u(g,d,v,f);for(let E=0;E!==v;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=f;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Q0(r){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=Ss:a===nc&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tc||a===nc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new h_(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ad extends id{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ls=4,vh=[.125,.215,.35,.446,.526,.582],_r=20,Rl=new ad,xh=new at;let Cl=null,Pl=0,Ll=0;const hr=(1+Math.sqrt(5))/2,ns=1/hr,Mh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,hr,ns),new O(0,hr,-ns),new O(ns,0,hr),new O(-ns,0,hr),new O(hr,ns,0),new O(-hr,ns,0)];class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl,Pl,Ll),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:pa,format:ri,colorSpace:Ci,depthBuffer:!1},i=yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(s)),this._blurMaterial=tv(s,e,t)}return i}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,n,i){const a=new xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xh),u.toneMapping=qi,u.autoClear=!1;const f=new Qf({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new si(new Ds,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(xh),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;$a(i,M*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ss||e.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Rl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Mh[(i-1)%Mh.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new si(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_r-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const p=[];let M=0;for(let T=0;T<_r;++T){const P=T/_,x=Math.exp(-P*P/2);p.push(x),T===0?M+=x:T<m&&(M+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],E=3*S*(i>v-ls?i-v+ls:0),w=4*(this._cubeSize-S);$a(t,E,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Rl)}}function ev(r){const e=[],t=[],n=[];let i=r;const s=r-ls+1+vh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ls?l=vh[o-r+ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,P=w>2?0:-1,x=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(x,_*g*w),v.set(d,m*g*w);const y=[w,w,w,w,w,w];S.set(y,p*g*w)}const E=new Hn;E.setAttribute("position",new Kn(M,_)),E.setAttribute("uv",new Kn(v,m)),E.setAttribute("faceIndex",new Kn(S,p)),e.push(E),i>ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yh(r,e,t){const n=new Cr(r,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tv(r,e,t){const n=new Float32Array(_r),i=new O(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Eh(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Th(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===tc||l===nc,u=l===Ss||l===ys;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Sh(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Sh(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function iv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rv(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,S=M.length;v<S;v+=3){const E=M[v+0],w=M[v+1],T=M[v+2];d.push(E,w,w,T,T,E)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const E=v+0,w=v+1,T=v+2;d.push(E,w,w,T,T,E)}}else return;const m=new(qf(d)?td:ed)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function sv(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){r.drawElements(s,g,a,f*l),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function av(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ov(r,e){return r[0]-e[0]}function lv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function cv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let I=function(){q.dispose(),s.delete(u),u.removeEventListener("dispose",I)};var f=I;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),E===!0&&(x=3);let y=u.attributes.position.count*x,z=1;y>e.maxTextureSize&&(z=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const U=new Float32Array(y*z*4*_),q=new Kf(U,y,z,_);q.type=ki,q.needsUpdate=!0;const D=x*4;for(let G=0;G<_;G++){const F=w[G],Z=T[G],$=P[G],R=y*z*4*G;for(let te=0;te<F.count;te++){const re=te*D;v===!0&&(o.fromBufferAttribute(F,te),U[R+re+0]=o.x,U[R+re+1]=o.y,U[R+re+2]=o.z,U[R+re+3]=0),S===!0&&(o.fromBufferAttribute(Z,te),U[R+re+4]=o.x,U[R+re+5]=o.y,U[R+re+6]=o.z,U[R+re+7]=0),E===!0&&(o.fromBufferAttribute($,te),U[R+re+8]=o.x,U[R+re+9]=o.y,U[R+re+10]=o.z,U[R+re+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:q,size:new Ye(y,z)},s.set(u,m),u.addEventListener("dispose",I)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const E=_[S];E[0]=S,E[1]=d[S]}_.sort(lv);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(ov);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const E=a[S],w=E[0],T=E[1];w!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),p&&u.getAttribute("morphNormal"+S)!==p[w]&&u.setAttribute("morphNormal"+S,p[w]),i[S]=T,M+=T):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function uv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class od extends Fn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Mr,u!==Mr&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mr&&(n=zi),n===void 0&&u===Es&&(n=xr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ld=new Fn,cd=new od(1,1);cd.compareFunction=Yf;const ud=new Kf,hd=new jm,fd=new rd,bh=[],wh=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function Is(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bh[i];if(s===void 0&&(s=new Float32Array(i),bh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qo(r,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function hv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Ht(t,e)}}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Ht(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Ht(t,e)}}function mv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Ch.set(n),r.uniformMatrix2fv(this.addr,!1,Ch),Ht(t,n)}}function _v(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Rh.set(n),r.uniformMatrix3fv(this.addr,!1,Rh),Ht(t,n)}}function gv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Ah.set(n),r.uniformMatrix4fv(this.addr,!1,Ah),Ht(t,n)}}function vv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Ht(t,e)}}function Mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Ht(t,e)}}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Ht(t,e)}}function yv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Ht(t,e)}}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Ht(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Ht(t,e)}}function wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?cd:ld;t.setTexture2D(e||s,i)}function Av(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hd,i)}function Rv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fd,i)}function Cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ud,i)}function Pv(r){switch(r){case 5126:return hv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return _v;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return yv;case 36294:return Ev;case 36295:return Tv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Lv(r,e){r.uniform1fv(this.addr,e)}function Dv(r,e){const t=Is(e,this.size,2);r.uniform2fv(this.addr,t)}function Iv(r,e){const t=Is(e,this.size,3);r.uniform3fv(this.addr,t)}function Uv(r,e){const t=Is(e,this.size,4);r.uniform4fv(this.addr,t)}function Nv(r,e){const t=Is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ov(r,e){const t=Is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fv(r,e){const t=Is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Bv(r,e){r.uniform1iv(this.addr,e)}function zv(r,e){r.uniform2iv(this.addr,e)}function kv(r,e){r.uniform3iv(this.addr,e)}function Hv(r,e){r.uniform4iv(this.addr,e)}function Gv(r,e){r.uniform1uiv(this.addr,e)}function Vv(r,e){r.uniform2uiv(this.addr,e)}function Wv(r,e){r.uniform3uiv(this.addr,e)}function Xv(r,e){r.uniform4uiv(this.addr,e)}function Yv(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ld,s[o])}function qv(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hd,s[o])}function jv(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fd,s[o])}function $v(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ud,s[o])}function Kv(r){switch(r){case 5126:return Lv;case 35664:return Dv;case 35665:return Iv;case 35666:return Uv;case 35674:return Nv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return kv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return $v}}class Zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}}class Jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}}class Qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function Ph(r,e){r.seq.push(e),r.map[e.id]=e}function ex(r,e,t){const n=r.name,i=n.length;for(Dl.lastIndex=0;;){const s=Dl.exec(n),o=Dl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ph(t,c===void 0?new Zv(a,r,e):new Jv(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Qv(a),Ph(t,h)),t=h}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ex(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Lh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const tx=37297;let nx=0;function ix(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function rx(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===Ro&&t===Ao?n="LinearDisplayP3ToLinearSRGB":e===Ao&&t===Ro&&(n="LinearSRGBToLinearDisplayP3"),r){case Ci:case Wo:return[n,"LinearTransferOETF"];case qt:case Bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Dh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ix(r.getShaderSource(e),o)}else return i}function sx(r,e){const t=rx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ax(r,e){let t;switch(e){case gm:t="Linear";break;case vm:t="Reinhard";break;case xm:t="OptimizedCineon";break;case Mm:t="ACESFilmic";break;case Sm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ox(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function lx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Xs(r){return r!==""}function Ih(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(r){return r.replace(ux,fx)}const hx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fx(r,e){let t=et[e];if(t===void 0){const n=hx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(r){return r.replace(dx,px)}function px(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function _x(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ss:case ys:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function vx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case mm:e="ENVMAP_BLENDING_MIX";break;case _m:e="ENVMAP_BLENDING_ADD";break}return e}function xx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mx(t),c=_x(t),u=gx(t),h=vx(t),d=xx(t),f=t.isWebGL2?"":ox(t),g=lx(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[f,Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?et.tonemapping_pars_fragment:"",t.toneMapping!==qi?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,sx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=lc(o),o=Ih(o,t),o=Uh(o,t),a=lc(a),a=Ih(a,t),a=Uh(a,t),o=Nh(o),a=Nh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,S=M+p+a,E=Lh(i,i.VERTEX_SHADER,v),w=Lh(i,i.FRAGMENT_SHADER,S);i.attachShader(_,E),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(z){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),q=i.getShaderInfoLog(E).trim(),D=i.getShaderInfoLog(w).trim();let I=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,w);else{const F=Dh(i,E,"vertex"),Z=Dh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+F+`
`+Z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(q===""||D==="")&&(G=!1);G&&(z.diagnostics={runnable:I,programLog:U,vertexShader:{log:q,prefix:m},fragmentShader:{log:D,prefix:p}})}i.deleteShader(E),i.deleteShader(w),P=new mo(i,_),x=cx(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,tx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let Sx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}}class Ex{constructor(e){this.id=Sx++,this.code=e,this.usedTimes=0}}function Tx(r,e,t,n,i,s,o){const a=new Zf,l=new yx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,y,z,U,q){const D=U.fog,I=q.geometry,G=x.isMeshStandardMaterial?U.environment:null,F=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),Z=F&&F.mapping===Vo?F.image.height:null,$=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=R!==void 0?R.length:0;let re=0;I.morphAttributes.position!==void 0&&(re=1),I.morphAttributes.normal!==void 0&&(re=2),I.morphAttributes.color!==void 0&&(re=3);let j,J,fe,ve;if($){const Se=li[$];j=Se.vertexShader,J=Se.fragmentShader}else j=x.vertexShader,J=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),ve=l.getFragmentShaderID(x);const ge=r.getRenderTarget(),Le=q.isInstancedMesh===!0,we=q.isBatchedMesh===!0,Ne=!!x.map,Ue=!!x.matcap,H=!!F,We=!!x.aoMap,_e=!!x.lightMap,Oe=!!x.bumpMap,Re=!!x.normalMap,V=!!x.displacementMap,Fe=!!x.emissiveMap,Be=!!x.metalnessMap,Ze=!!x.roughnessMap,Je=x.anisotropy>0,ct=x.clearcoat>0,C=x.iridescence>0,b=x.sheen>0,k=x.transmission>0,ae=Je&&!!x.anisotropyMap,Q=ct&&!!x.clearcoatMap,se=ct&&!!x.clearcoatNormalMap,xe=ct&&!!x.clearcoatRoughnessMap,le=C&&!!x.iridescenceMap,pe=C&&!!x.iridescenceThicknessMap,L=b&&!!x.sheenColorMap,ce=b&&!!x.sheenRoughnessMap,ee=!!x.specularMap,ze=!!x.specularColorMap,Ee=!!x.specularIntensityMap,Ce=k&&!!x.transmissionMap,Me=k&&!!x.thicknessMap,ie=!!x.gradientMap,Xe=!!x.alphaMap,N=x.alphaTest>0,ue=!!x.alphaHash,ne=!!x.extensions,K=!!I.attributes.uv1,oe=!!I.attributes.uv2,Te=!!I.attributes.uv3;let $e=qi;return x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&($e=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:J,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:we,instancing:Le,instancingColor:Le&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ci,map:Ne,matcap:Ue,envMap:H,envMapMode:H&&F.mapping,envMapCubeUVHeight:Z,aoMap:We,lightMap:_e,bumpMap:Oe,normalMap:Re,displacementMap:d&&V,emissiveMap:Fe,normalMapObjectSpace:Re&&x.normalMapType===Im,normalMapTangentSpace:Re&&x.normalMapType===Xf,metalnessMap:Be,roughnessMap:Ze,anisotropy:Je,anisotropyMap:ae,clearcoat:ct,clearcoatMap:Q,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,iridescence:C,iridescenceMap:le,iridescenceThicknessMap:pe,sheen:b,sheenColorMap:L,sheenRoughnessMap:ce,specularMap:ee,specularColorMap:ze,specularIntensityMap:Ee,transmission:k,transmissionMap:Ce,thicknessMap:Me,gradientMap:ie,opaque:x.transparent===!1&&x.blending===ds,alphaMap:Xe,alphaTest:N,alphaHash:ue,combine:x.combine,mapUv:Ne&&_(x.map.channel),aoMapUv:We&&_(x.aoMap.channel),lightMapUv:_e&&_(x.lightMap.channel),bumpMapUv:Oe&&_(x.bumpMap.channel),normalMapUv:Re&&_(x.normalMap.channel),displacementMapUv:V&&_(x.displacementMap.channel),emissiveMapUv:Fe&&_(x.emissiveMap.channel),metalnessMapUv:Be&&_(x.metalnessMap.channel),roughnessMapUv:Ze&&_(x.roughnessMap.channel),anisotropyMapUv:ae&&_(x.anisotropyMap.channel),clearcoatMapUv:Q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:L&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(x.sheenRoughnessMap.channel),specularMapUv:ee&&_(x.specularMap.channel),specularColorMapUv:ze&&_(x.specularColorMap.channel),specularIntensityMapUv:Ee&&_(x.specularIntensityMap.channel),transmissionMapUv:Ce&&_(x.transmissionMap.channel),thicknessMapUv:Me&&_(x.thicknessMap.channel),alphaMapUv:Xe&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Re||Je),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:oe,vertexUv3s:Te,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(Ne||Xe),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ti,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ne&&x.extensions.derivatives===!0,extensionFragDepth:ne&&x.extensions.fragDepth===!0,extensionDrawBuffers:ne&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)y.push(z),y.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(M(y,x),v(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){const y=g[x.type];let z;if(y){const U=li[y];z=o_.clone(U.uniforms)}else z=x.uniforms;return z}function E(x,y){let z;for(let U=0,q=c.length;U<q;U++){const D=c[U];if(D.cacheKey===y){z=D,++z.usedTimes;break}}return z===void 0&&(z=new Mx(r,y,x,s),c.push(z)),z}function w(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:P}}function bx(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function wx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||wx),n.length>1&&n.sort(d||Fh),i.length>1&&i.sort(d||Fh)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Ax(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Bh,r.set(n,[o])):i>=s.length?(o=new Bh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new at};break;case"SpotLight":t={position:new O,direction:new O,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function Cx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Px=0;function Lx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Dx(r,e){const t=new Rx,n=Cx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,o=new Ct,a=new Ct;function l(u,h){let d=0,f=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,m=0,p=0,M=0,v=0,S=0,E=0,w=0,T=0,P=0,x=0;u.sort(Lx);const y=h===!0?Math.PI:1;for(let U=0,q=u.length;U<q;U++){const D=u[U],I=D.color,G=D.intensity,F=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=I.r*G*y,f+=I.g*G*y,g+=I.b*G*y;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],G);x++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const R=D.shadow,te=n.get(D);te.shadowBias=R.bias,te.shadowNormalBias=R.normalBias,te.shadowRadius=R.radius,te.shadowMapSize=R.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=D.shadow.matrix,S++}i.directional[_]=$,_++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(I).multiplyScalar(G*y),$.distance=F,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[p]=$;const R=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,R.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[p]=R.matrix,D.castShadow){const te=n.get(D);te.shadowBias=R.bias,te.shadowNormalBias=R.normalBias,te.shadowRadius=R.radius,te.shadowMapSize=R.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=Z,w++}p++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(I).multiplyScalar(G),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=$,M++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*y),$.distance=D.distance,$.decay=D.decay,D.castShadow){const R=D.shadow,te=n.get(D);te.shadowBias=R.bias,te.shadowNormalBias=R.normalBias,te.shadowRadius=R.radius,te.shadowMapSize=R.mapSize,te.shadowCameraNear=R.camera.near,te.shadowCameraFar=R.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=D.shadow.matrix,E++}i.point[m]=$,m++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(G*y),$.groundColor.copy(D.groundColor).multiplyScalar(G*y),i.hemi[v]=$,v++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==M||z.hemiLength!==v||z.numDirectionalShadows!==S||z.numPointShadows!==E||z.numSpotShadows!==w||z.numSpotMaps!==T||z.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=x,z.directionalLength=_,z.pointLength=m,z.spotLength=p,z.rectAreaLength=M,z.hemiLength=v,z.numDirectionalShadows=S,z.numPointShadows=E,z.numSpotShadows=w,z.numSpotMaps=T,z.numLightProbes=x,i.version=Px++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const S=u[M];if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function zh(r,e){const t=new Dx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ix(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new zh(r,e),t.set(s,[l])):o>=a.length?(l=new zh(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ux extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bx(r,e,t){let n=new zc;const i=new Ye,s=new Ye,o=new yt,a=new Ux({depthPacking:Dm}),l=new Nx,c={},u=t.maxTextureSize,h={[Ji]:Mn,[Mn]:Ji,[Ti]:Ti},d=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Ox,fragmentShader:Fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new si(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let p=this.type;this.render=function(E,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const P=r.getRenderTarget(),x=r.getActiveCubeFace(),y=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Yi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=p!==Si&&this.type===Si,q=p===Si&&this.type!==Si;for(let D=0,I=E.length;D<I;D++){const G=E[D],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Z=F.getFrameExtents();if(i.multiply(Z),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,F.mapSize.y=s.y)),F.map===null||U===!0||q===!0){const R=this.type!==Si?{minFilter:dn,magFilter:dn}:{};F.map!==null&&F.map.dispose(),F.map=new Cr(i.x,i.y,R),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const $=F.getViewportCount();for(let R=0;R<$;R++){const te=F.getViewport(R);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),z.viewport(o),F.updateMatrices(G,R),n=F.getFrustum(),S(w,T,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===Si&&M(F,T),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(P,x,y)};function M(E,w){const T=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cr(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,T,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,T,f,_,null)}function v(E,w,T,P){let x=null;const y=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(y!==void 0)x=y;else if(x=T.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=x.uuid,U=w.uuid;let q=c[z];q===void 0&&(q={},c[z]=q);let D=q[U];D===void 0&&(D=x.clone(),q[U]=D),x=D}if(x.visible=w.visible,x.wireframe=w.wireframe,P===Si?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=r.properties.get(x);z.light=T}return x}function S(E,w,T,P,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const U=e.update(E),q=E.material;if(Array.isArray(q)){const D=U.groups;for(let I=0,G=D.length;I<G;I++){const F=D[I],Z=q[F.materialIndex];if(Z&&Z.visible){const $=v(E,Z,P,x);E.onBeforeShadow(r,E,w,T,U,$,F),r.renderBufferDirect(T,null,U,$,E,F),E.onAfterShadow(r,E,w,T,U,$,F)}}}else if(q.visible){const D=v(E,q,P,x);E.onBeforeShadow(r,E,w,T,U,D,null),r.renderBufferDirect(T,null,U,D,E,null),E.onAfterShadow(r,E,w,T,U,D,null)}}const z=E.children;for(let U=0,q=z.length;U<q;U++)S(z[U],w,T,P,x)}}function zx(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const ue=new yt;let ne=null;const K=new yt(0,0,0,0);return{setMask:function(oe){ne!==oe&&!N&&(r.colorMask(oe,oe,oe,oe),ne=oe)},setLocked:function(oe){N=oe},setClear:function(oe,Te,$e,Pe,Se){Se===!0&&(oe*=Pe,Te*=Pe,$e*=Pe),ue.set(oe,Te,$e,Pe),K.equals(ue)===!1&&(r.clearColor(oe,Te,$e,Pe),K.copy(ue))},reset:function(){N=!1,ne=null,K.set(-1,0,0,0)}}}function s(){let N=!1,ue=null,ne=null,K=null;return{setTest:function(oe){oe?we(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(oe){ue!==oe&&!N&&(r.depthMask(oe),ue=oe)},setFunc:function(oe){if(ne!==oe){switch(oe){case lm:r.depthFunc(r.NEVER);break;case cm:r.depthFunc(r.ALWAYS);break;case um:r.depthFunc(r.LESS);break;case bo:r.depthFunc(r.LEQUAL);break;case hm:r.depthFunc(r.EQUAL);break;case fm:r.depthFunc(r.GEQUAL);break;case dm:r.depthFunc(r.GREATER);break;case pm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=oe}},setLocked:function(oe){N=oe},setClear:function(oe){K!==oe&&(r.clearDepth(oe),K=oe)},reset:function(){N=!1,ue=null,ne=null,K=null}}}function o(){let N=!1,ue=null,ne=null,K=null,oe=null,Te=null,$e=null,Pe=null,Se=null;return{setTest:function(Ie){N||(Ie?we(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(Ie){ue!==Ie&&!N&&(r.stencilMask(Ie),ue=Ie)},setFunc:function(Ie,he,He){(ne!==Ie||K!==he||oe!==He)&&(r.stencilFunc(Ie,he,He),ne=Ie,K=he,oe=He)},setOp:function(Ie,he,He){(Te!==Ie||$e!==he||Pe!==He)&&(r.stencilOp(Ie,he,He),Te=Ie,$e=he,Pe=He)},setLocked:function(Ie){N=Ie},setClear:function(Ie){Se!==Ie&&(r.clearStencil(Ie),Se=Ie)},reset:function(){N=!1,ue=null,ne=null,K=null,oe=null,Te=null,$e=null,Pe=null,Se=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,v=null,S=null,E=null,w=null,T=null,P=null,x=new at(0,0,0),y=0,z=!1,U=null,q=null,D=null,I=null,G=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const R=r.getParameter(r.VERSION);R.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(R)[1]),Z=$>=1):R.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Z=$>=2);let te=null,re={};const j=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),fe=new yt().fromArray(j),ve=new yt().fromArray(J);function ge(N,ue,ne,K){const oe=new Uint8Array(4),Te=r.createTexture();r.bindTexture(N,Te),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<ne;$e++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(ue,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(ue+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return Te}const Le={};Le[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),Le[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Le[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(r.DEPTH_TEST),l.setFunc(bo),Fe(!1),Be(Mu),we(r.CULL_FACE),Re(Yi);function we(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function Ne(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function Ue(N,ue){return f[N]!==ue?(r.bindFramebuffer(N,ue),f[N]=ue,n&&(N===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),N===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue)),!0):!1}function H(N,ue){let ne=_,K=!1;if(N)if(ne=g.get(ue),ne===void 0&&(ne=[],g.set(ue,ne)),N.isWebGLMultipleRenderTargets){const oe=N.texture;if(ne.length!==oe.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,$e=oe.length;Te<$e;Te++)ne[Te]=r.COLOR_ATTACHMENT0+Te;ne.length=oe.length,K=!0}}else ne[0]!==r.COLOR_ATTACHMENT0&&(ne[0]=r.COLOR_ATTACHMENT0,K=!0);else ne[0]!==r.BACK&&(ne[0]=r.BACK,K=!0);K&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function We(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const _e={[mr]:r.FUNC_ADD,[qp]:r.FUNC_SUBTRACT,[jp]:r.FUNC_REVERSE_SUBTRACT};if(n)_e[Tu]=r.MIN,_e[bu]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(_e[Tu]=N.MIN_EXT,_e[bu]=N.MAX_EXT)}const Oe={[$p]:r.ZERO,[Kp]:r.ONE,[Zp]:r.SRC_COLOR,[Ql]:r.SRC_ALPHA,[im]:r.SRC_ALPHA_SATURATE,[tm]:r.DST_COLOR,[Qp]:r.DST_ALPHA,[Jp]:r.ONE_MINUS_SRC_COLOR,[ec]:r.ONE_MINUS_SRC_ALPHA,[nm]:r.ONE_MINUS_DST_COLOR,[em]:r.ONE_MINUS_DST_ALPHA,[rm]:r.CONSTANT_COLOR,[sm]:r.ONE_MINUS_CONSTANT_COLOR,[am]:r.CONSTANT_ALPHA,[om]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(N,ue,ne,K,oe,Te,$e,Pe,Se,Ie){if(N===Yi){p===!0&&(Ne(r.BLEND),p=!1);return}if(p===!1&&(we(r.BLEND),p=!0),N!==Yp){if(N!==M||Ie!==z){if((v!==mr||w!==mr)&&(r.blendEquation(r.FUNC_ADD),v=mr,w=mr),Ie)switch(N){case ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Su:r.blendFunc(r.ONE,r.ONE);break;case yu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Eu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Su:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case yu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Eu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,E=null,T=null,P=null,x.set(0,0,0),y=0,M=N,z=Ie}return}oe=oe||ue,Te=Te||ne,$e=$e||K,(ue!==v||oe!==w)&&(r.blendEquationSeparate(_e[ue],_e[oe]),v=ue,w=oe),(ne!==S||K!==E||Te!==T||$e!==P)&&(r.blendFuncSeparate(Oe[ne],Oe[K],Oe[Te],Oe[$e]),S=ne,E=K,T=Te,P=$e),(Pe.equals(x)===!1||Se!==y)&&(r.blendColor(Pe.r,Pe.g,Pe.b,Se),x.copy(Pe),y=Se),M=N,z=!1}function V(N,ue){N.side===Ti?Ne(r.CULL_FACE):we(r.CULL_FACE);let ne=N.side===Mn;ue&&(ne=!ne),Fe(ne),N.blending===ds&&N.transparent===!1?Re(Yi):Re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const K=N.stencilWrite;c.setTest(K),K&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Je(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?we(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){U!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),U=N)}function Be(N){N!==Vp?(we(r.CULL_FACE),N!==q&&(N===Mu?r.cullFace(r.BACK):N===Wp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),q=N}function Ze(N){N!==D&&(Z&&r.lineWidth(N),D=N)}function Je(N,ue,ne){N?(we(r.POLYGON_OFFSET_FILL),(I!==ue||G!==ne)&&(r.polygonOffset(ue,ne),I=ue,G=ne)):Ne(r.POLYGON_OFFSET_FILL)}function ct(N){N?we(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function C(N){N===void 0&&(N=r.TEXTURE0+F-1),te!==N&&(r.activeTexture(N),te=N)}function b(N,ue,ne){ne===void 0&&(te===null?ne=r.TEXTURE0+F-1:ne=te);let K=re[ne];K===void 0&&(K={type:void 0,texture:void 0},re[ne]=K),(K.type!==N||K.texture!==ue)&&(te!==ne&&(r.activeTexture(ne),te=ne),r.bindTexture(N,ue||Le[N]),K.type=N,K.texture=ue)}function k(){const N=re[te];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(N){fe.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),fe.copy(N))}function Ce(N){ve.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ve.copy(N))}function Me(N,ue){let ne=h.get(ue);ne===void 0&&(ne=new WeakMap,h.set(ue,ne));let K=ne.get(N);K===void 0&&(K=r.getUniformBlockIndex(ue,N.name),ne.set(N,K))}function ie(N,ue){const K=h.get(ue).get(N);u.get(ue)!==K&&(r.uniformBlockBinding(ue,K,N.__bindingPointIndex),u.set(ue,K))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},te=null,re={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,v=null,S=null,E=null,w=null,T=null,P=null,x=new at(0,0,0),y=0,z=!1,U=null,q=null,D=null,I=null,G=null,fe.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:Ne,bindFramebuffer:Ue,drawBuffers:H,useProgram:We,setBlending:Re,setMaterial:V,setFlipSided:Fe,setCullFace:Be,setLineWidth:Ze,setPolygonOffset:Je,setScissorTest:ct,activeTexture:C,bindTexture:b,unbindTexture:k,compressedTexImage2D:ae,compressedTexImage3D:Q,texImage2D:ee,texImage3D:ze,updateUBOMapping:Me,uniformBlockBinding:ie,texStorage2D:L,texStorage3D:ce,texSubImage2D:se,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Ee,viewport:Ce,reset:Xe}}function kx(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,b){return p?new OffscreenCanvas(C,b):Po("canvas")}function v(C,b,k,ae){let Q=1;if((C.width>ae||C.height>ae)&&(Q=ae/Math.max(C.width,C.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=b?oc:Math.floor,xe=se(Q*C.width),le=se(Q*C.height);_===void 0&&(_=M(xe,le));const pe=k?M(xe,le):_;return pe.width=xe,pe.height=le,pe.getContext("2d").drawImage(C,0,0,xe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xe+"x"+le+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return th(C.width)&&th(C.height)}function E(C){return a?!1:C.wrapS!==ii||C.wrapT!==ii||C.minFilter!==dn&&C.minFilter!==Xn}function w(C,b){return C.generateMipmaps&&b&&C.minFilter!==dn&&C.minFilter!==Xn}function T(C){r.generateMipmap(C)}function P(C,b,k,ae,Q=!1){if(a===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=b;if(b===r.RED&&(k===r.FLOAT&&(se=r.R32F),k===r.HALF_FLOAT&&(se=r.R16F),k===r.UNSIGNED_BYTE&&(se=r.R8)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(se=r.R8UI),k===r.UNSIGNED_SHORT&&(se=r.R16UI),k===r.UNSIGNED_INT&&(se=r.R32UI),k===r.BYTE&&(se=r.R8I),k===r.SHORT&&(se=r.R16I),k===r.INT&&(se=r.R32I)),b===r.RG&&(k===r.FLOAT&&(se=r.RG32F),k===r.HALF_FLOAT&&(se=r.RG16F),k===r.UNSIGNED_BYTE&&(se=r.RG8)),b===r.RGBA){const xe=Q?wo:pt.getTransfer(ae);k===r.FLOAT&&(se=r.RGBA32F),k===r.HALF_FLOAT&&(se=r.RGBA16F),k===r.UNSIGNED_BYTE&&(se=xe===Mt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(C,b,k){return w(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function y(C){return C===dn||C===wu||C===rl?r.NEAREST:r.LINEAR}function z(C){const b=C.target;b.removeEventListener("dispose",z),q(b),b.isVideoTexture&&g.delete(b)}function U(C){const b=C.target;b.removeEventListener("dispose",U),I(b)}function q(C){const b=n.get(C);if(b.__webglInit===void 0)return;const k=C.source,ae=m.get(k);if(ae){const Q=ae[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(C),Object.keys(ae).length===0&&m.delete(k)}n.remove(C)}function D(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const k=C.source,ae=m.get(k);delete ae[b.__cacheKey],o.memory.textures--}function I(C){const b=C.texture,k=n.get(C),ae=n.get(b);if(ae.__webglTexture!==void 0&&(r.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let se=0;se<k.__webglFramebuffer[Q].length;se++)r.deleteFramebuffer(k.__webglFramebuffer[Q][se]);else r.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)r.deleteFramebuffer(k.__webglFramebuffer[Q]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,se=b.length;Q<se;Q++){const xe=n.get(b[Q]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(b[Q])}n.remove(b),n.remove(C)}let G=0;function F(){G=0}function Z(){const C=G;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),G+=1,C}function $(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function R(C,b){const k=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(k,C,b);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}function te(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){we(k,C,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)}function re(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){we(k,C,b);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)}function j(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Ne(k,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)}const J={[ic]:r.REPEAT,[ii]:r.CLAMP_TO_EDGE,[rc]:r.MIRRORED_REPEAT},fe={[dn]:r.NEAREST,[wu]:r.NEAREST_MIPMAP_NEAREST,[rl]:r.NEAREST_MIPMAP_LINEAR,[Xn]:r.LINEAR,[ym]:r.LINEAR_MIPMAP_NEAREST,[da]:r.LINEAR_MIPMAP_LINEAR},ve={[Um]:r.NEVER,[km]:r.ALWAYS,[Nm]:r.LESS,[Yf]:r.LEQUAL,[Om]:r.EQUAL,[zm]:r.GEQUAL,[Fm]:r.GREATER,[Bm]:r.NOTEQUAL};function ge(C,b,k){if(k?(r.texParameteri(C,r.TEXTURE_WRAP_S,J[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,J[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,J[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,fe[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,fe[b.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==ii||b.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,y(b.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,y(b.minFilter)),b.minFilter!==dn&&b.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===dn||b.minFilter!==rl&&b.minFilter!==da||b.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===pa&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Le(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",z));const ae=b.source;let Q=m.get(ae);Q===void 0&&(Q={},m.set(ae,Q));const se=$(b);if(se!==C.__cacheKey){Q[se]===void 0&&(Q[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[se].usedTimes++;const xe=Q[C.__cacheKey];xe!==void 0&&(Q[C.__cacheKey].usedTimes--,xe.usedTimes===0&&D(b)),C.__cacheKey=se,C.__webglTexture=Q[se].texture}return k}function we(C,b,k){let ae=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=r.TEXTURE_3D);const Q=Le(C,b),se=b.source;t.bindTexture(ae,C.__webglTexture,r.TEXTURE0+k);const xe=n.get(se);if(se.version!==xe.__version||Q===!0){t.activeTexture(r.TEXTURE0+k);const le=pt.getPrimaries(pt.workingColorSpace),pe=b.colorSpace===jn?null:pt.getPrimaries(b.colorSpace),L=b.colorSpace===jn||le===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const ce=E(b)&&S(b.image)===!1;let ee=v(b.image,ce,!1,u);ee=ct(b,ee);const ze=S(ee)||a,Ee=s.convert(b.format,b.colorSpace);let Ce=s.convert(b.type),Me=P(b.internalFormat,Ee,Ce,b.colorSpace,b.isVideoTexture);ge(ae,b,ze);let ie;const Xe=b.mipmaps,N=a&&b.isVideoTexture!==!0&&Me!==Vf,ue=xe.__version===void 0||Q===!0,ne=x(b,ee,ze);if(b.isDepthTexture)Me=r.DEPTH_COMPONENT,a?b.type===ki?Me=r.DEPTH_COMPONENT32F:b.type===zi?Me=r.DEPTH_COMPONENT24:b.type===xr?Me=r.DEPTH24_STENCIL8:Me=r.DEPTH_COMPONENT16:b.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Mr&&Me===r.DEPTH_COMPONENT&&b.type!==Fc&&b.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=zi,Ce=s.convert(b.type)),b.format===Es&&Me===r.DEPTH_COMPONENT&&(Me=r.DEPTH_STENCIL,b.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=xr,Ce=s.convert(b.type))),ue&&(N?t.texStorage2D(r.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Me,ee.width,ee.height,0,Ee,Ce,null));else if(b.isDataTexture)if(Xe.length>0&&ze){N&&ue&&t.texStorage2D(r.TEXTURE_2D,ne,Me,Xe[0].width,Xe[0].height);for(let K=0,oe=Xe.length;K<oe;K++)ie=Xe[K],N?t.texSubImage2D(r.TEXTURE_2D,K,0,0,ie.width,ie.height,Ee,Ce,ie.data):t.texImage2D(r.TEXTURE_2D,K,Me,ie.width,ie.height,0,Ee,Ce,ie.data);b.generateMipmaps=!1}else N?(ue&&t.texStorage2D(r.TEXTURE_2D,ne,Me,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,Ee,Ce,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Me,ee.width,ee.height,0,Ee,Ce,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Me,Xe[0].width,Xe[0].height,ee.depth);for(let K=0,oe=Xe.length;K<oe;K++)ie=Xe[K],b.format!==ri?Ee!==null?N?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ie.width,ie.height,ee.depth,Ee,ie.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Me,ie.width,ie.height,ee.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ie.width,ie.height,ee.depth,Ee,Ce,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,Me,ie.width,ie.height,ee.depth,0,Ee,Ce,ie.data)}else{N&&ue&&t.texStorage2D(r.TEXTURE_2D,ne,Me,Xe[0].width,Xe[0].height);for(let K=0,oe=Xe.length;K<oe;K++)ie=Xe[K],b.format!==ri?Ee!==null?N?t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,ie.width,ie.height,Ee,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,K,Me,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(r.TEXTURE_2D,K,0,0,ie.width,ie.height,Ee,Ce,ie.data):t.texImage2D(r.TEXTURE_2D,K,Me,ie.width,ie.height,0,Ee,Ce,ie.data)}else if(b.isDataArrayTexture)N?(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Me,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ee,Ce,ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,Ee,Ce,ee.data);else if(b.isData3DTexture)N?(ue&&t.texStorage3D(r.TEXTURE_3D,ne,Me,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ee,Ce,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,Ee,Ce,ee.data);else if(b.isFramebufferTexture){if(ue)if(N)t.texStorage2D(r.TEXTURE_2D,ne,Me,ee.width,ee.height);else{let K=ee.width,oe=ee.height;for(let Te=0;Te<ne;Te++)t.texImage2D(r.TEXTURE_2D,Te,Me,K,oe,0,Ee,Ce,null),K>>=1,oe>>=1}}else if(Xe.length>0&&ze){N&&ue&&t.texStorage2D(r.TEXTURE_2D,ne,Me,Xe[0].width,Xe[0].height);for(let K=0,oe=Xe.length;K<oe;K++)ie=Xe[K],N?t.texSubImage2D(r.TEXTURE_2D,K,0,0,Ee,Ce,ie):t.texImage2D(r.TEXTURE_2D,K,Me,Ee,Ce,ie);b.generateMipmaps=!1}else N?(ue&&t.texStorage2D(r.TEXTURE_2D,ne,Me,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Ce,ee)):t.texImage2D(r.TEXTURE_2D,0,Me,Ee,Ce,ee);w(b,ze)&&T(ae),xe.__version=se.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ne(C,b,k){if(b.image.length!==6)return;const ae=Le(C,b),Q=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const se=n.get(Q);if(Q.version!==se.__version||ae===!0){t.activeTexture(r.TEXTURE0+k);const xe=pt.getPrimaries(pt.workingColorSpace),le=b.colorSpace===jn?null:pt.getPrimaries(b.colorSpace),pe=b.colorSpace===jn||xe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const L=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let K=0;K<6;K++)!L&&!ce?ee[K]=v(b.image[K],!1,!0,c):ee[K]=ce?b.image[K].image:b.image[K],ee[K]=ct(b,ee[K]);const ze=ee[0],Ee=S(ze)||a,Ce=s.convert(b.format,b.colorSpace),Me=s.convert(b.type),ie=P(b.internalFormat,Ce,Me,b.colorSpace),Xe=a&&b.isVideoTexture!==!0,N=se.__version===void 0||ae===!0;let ue=x(b,ze,Ee);ge(r.TEXTURE_CUBE_MAP,b,Ee);let ne;if(L){Xe&&N&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,ie,ze.width,ze.height);for(let K=0;K<6;K++){ne=ee[K].mipmaps;for(let oe=0;oe<ne.length;oe++){const Te=ne[oe];b.format!==ri?Ce!==null?Xe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Te.width,Te.height,Ce,Me,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,ie,Te.width,Te.height,0,Ce,Me,Te.data)}}}else{ne=b.mipmaps,Xe&&N&&(ne.length>0&&ue++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,ie,ee[0].width,ee[0].height));for(let K=0;K<6;K++)if(ce){Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ee[K].width,ee[K].height,Ce,Me,ee[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,ee[K].width,ee[K].height,0,Ce,Me,ee[K].data);for(let oe=0;oe<ne.length;oe++){const $e=ne[oe].image[K].image;Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,$e.width,$e.height,Ce,Me,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,ie,$e.width,$e.height,0,Ce,Me,$e.data)}}else{Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce,Me,ee[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,Ce,Me,ee[K]);for(let oe=0;oe<ne.length;oe++){const Te=ne[oe];Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Ce,Me,Te.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,ie,Ce,Me,Te.image[K])}}}w(b,Ee)&&T(r.TEXTURE_CUBE_MAP),se.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ue(C,b,k,ae,Q,se){const xe=s.convert(k.format,k.colorSpace),le=s.convert(k.type),pe=P(k.internalFormat,xe,le,k.colorSpace);if(!n.get(b).__hasExternalTextures){const ce=Math.max(1,b.width>>se),ee=Math.max(1,b.height>>se);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,pe,ce,ee,b.depth,0,xe,le,null):t.texImage2D(Q,se,pe,ce,ee,0,xe,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ze(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,Q,n.get(k).__webglTexture,0,Be(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,Q,n.get(k).__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function H(C,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let ae=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||Ze(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ki?ae=r.DEPTH_COMPONENT32F:Q.type===zi&&(ae=r.DEPTH_COMPONENT24));const se=Be(b);Ze(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,ae,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,se,ae,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,ae,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const ae=Be(b);k&&Ze(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,r.DEPTH24_STENCIL8,b.width,b.height):Ze(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ae=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<ae.length;Q++){const se=ae[Q],xe=s.convert(se.format,se.colorSpace),le=s.convert(se.type),pe=P(se.internalFormat,xe,le,se.colorSpace),L=Be(b);k&&Ze(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,L,pe,b.width,b.height):Ze(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L,pe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);const ae=n.get(b.depthTexture).__webglTexture,Q=Be(b);if(b.depthTexture.format===Mr)Ze(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0);else if(b.depthTexture.format===Es)Ze(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function _e(C){const b=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");We(b.__webglFramebuffer,C)}else if(k){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]=r.createRenderbuffer(),H(b.__webglDepthbuffer[ae],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),H(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(C,b,k){const ae=n.get(C);b!==void 0&&Ue(ae.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&_e(C)}function Re(C){const b=C.texture,k=n.get(C),ae=n.get(b);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=b.version,o.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,xe=S(C)||a;if(Q){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let pe=0;pe<b.mipmaps.length;pe++)k.__webglFramebuffer[le][pe]=r.createFramebuffer()}else k.__webglFramebuffer[le]=r.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)k.__webglFramebuffer[le]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(se)if(i.drawBuffers){const le=C.texture;for(let pe=0,L=le.length;pe<L;pe++){const ce=n.get(le[pe]);ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ze(C)===!1){const le=se?b:[b];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const L=le[pe];k.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[pe]);const ce=s.convert(L.format,L.colorSpace),ee=s.convert(L.type),ze=P(L.internalFormat,ce,ee,L.colorSpace,C.isXRRenderTarget===!0),Ee=Be(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ze,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,k.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),H(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),ge(r.TEXTURE_CUBE_MAP,b,xe);for(let le=0;le<6;le++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ue(k.__webglFramebuffer[le][pe],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else Ue(k.__webglFramebuffer[le],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);w(b,xe)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const le=C.texture;for(let pe=0,L=le.length;pe<L;pe++){const ce=le[pe],ee=n.get(ce);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),ge(r.TEXTURE_2D,ce,xe),Ue(k.__webglFramebuffer,C,ce,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),w(ce,xe)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ae.__webglTexture),ge(le,b,xe),a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ue(k.__webglFramebuffer[pe],C,b,r.COLOR_ATTACHMENT0,le,pe);else Ue(k.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,le,0);w(b,xe)&&T(le),t.unbindTexture()}C.depthBuffer&&_e(C)}function V(C){const b=S(C)||a,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,Q=k.length;ae<Q;ae++){const se=k[ae];if(w(se,b)){const xe=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,le=n.get(se).__webglTexture;t.bindTexture(xe,le),T(xe),t.unbindTexture()}}}function Fe(C){if(a&&C.samples>0&&Ze(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,ae=C.height;let Q=r.COLOR_BUFFER_BIT;const se=[],xe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=n.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let L=0;L<b.length;L++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let L=0;L<b.length;L++){se.push(r.COLOR_ATTACHMENT0+L),C.depthBuffer&&se.push(xe);const ce=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ce===!1&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[L]),ce===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[xe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[xe])),pe){const ee=n.get(b[L]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,k,ae,0,0,k,ae,Q,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let L=0;L<b.length;L++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,le.__webglColorRenderbuffer[L]);const ce=n.get(b[L]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Be(C){return Math.min(h,C.samples)}function Ze(C){const b=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Je(C){const b=o.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function ct(C,b){const k=C.colorSpace,ae=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===sc||k!==Ci&&k!==jn&&(pt.getTransfer(k)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ae===ri?(C.format=sc,C.minFilter=Xn,C.generateMipmaps=!1):b=jf.sRGBToLinear(b):(ae!==ri||Q!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}this.allocateTextureUnit=Z,this.resetTextureUnits=F,this.setTexture2D=R,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=j,this.rebindTextures=Oe,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ze}function Hx(r,e,t){const n=t.isWebGL2;function i(s,o=jn){let a;const l=pt.getTransfer(o);if(s===ji)return r.UNSIGNED_BYTE;if(s===Bf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===zf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Em)return r.BYTE;if(s===Tm)return r.SHORT;if(s===Fc)return r.UNSIGNED_SHORT;if(s===Ff)return r.INT;if(s===zi)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===pa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bm)return r.ALPHA;if(s===ri)return r.RGBA;if(s===wm)return r.LUMINANCE;if(s===Am)return r.LUMINANCE_ALPHA;if(s===Mr)return r.DEPTH_COMPONENT;if(s===Es)return r.DEPTH_STENCIL;if(s===sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Rm)return r.RED;if(s===kf)return r.RED_INTEGER;if(s===Cm)return r.RG;if(s===Hf)return r.RG_INTEGER;if(s===Gf)return r.RGBA_INTEGER;if(s===sl||s===al||s===ol||s===ll)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Au||s===Ru||s===Cu||s===Pu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Au)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ru)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lu||s===Du)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Lu)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Du)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Iu||s===Uu||s===Nu||s===Ou||s===Fu||s===Bu||s===zu||s===ku||s===Hu||s===Gu||s===Vu||s===Wu||s===Xu||s===Yu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Iu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ou)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ku)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cl||s===qu||s===ju)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cl)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ju)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pm||s===$u||s===Ku||s===Zu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===cl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$u)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ku)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Gx extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cs extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class Il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wx extends Or{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const M=[],v=[],S=new Ye;let E=null;const w=new xn;w.layers.enable(1),w.viewport=new yt;const T=new xn;T.layers.enable(2),T.viewport=new yt;const P=[w,T],x=new Gx;x.layers.enable(1),x.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=M[j];return J===void 0&&(J=new Il,M[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=M[j];return J===void 0&&(J=new Il,M[j]=J),J.getGripSpace()},this.getHand=function(j){let J=M[j];return J===void 0&&(J=new Il,M[j]=J),J.getHandSpace()};function U(j){const J=v.indexOf(j.inputSource);if(J===-1)return;const fe=M[J];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||o),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",D);for(let j=0;j<M.length;j++){const J=v[j];J!==null&&(v[j]=null,M[j].disconnect(J))}y=null,z=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",q),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Cr(f.framebufferWidth,f.framebufferHeight,{format:ri,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,fe=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Es:Mr,fe=_.stencil?xr:zi);const ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Cr(d.textureWidth,d.textureHeight,{format:ri,type:ji,depthTexture:new od(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(p);Le.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(j){for(let J=0;J<j.removed.length;J++){const fe=j.removed[J],ve=v.indexOf(fe);ve>=0&&(v[ve]=null,M[ve].disconnect(fe))}for(let J=0;J<j.added.length;J++){const fe=j.added[J];let ve=v.indexOf(fe);if(ve===-1){for(let Le=0;Le<M.length;Le++)if(Le>=v.length){v.push(fe),ve=Le;break}else if(v[Le]===null){v[Le]=fe,ve=Le;break}if(ve===-1)break}const ge=M[ve];ge&&ge.connect(fe)}}const I=new O,G=new O;function F(j,J,fe){I.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);const ve=I.distanceTo(G),ge=J.projectionMatrix.elements,Le=fe.projectionMatrix.elements,we=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),Ue=(ge[9]+1)/ge[5],H=(ge[9]-1)/ge[5],We=(ge[8]-1)/ge[0],_e=(Le[8]+1)/Le[0],Oe=we*We,Re=we*_e,V=ve/(-We+_e),Fe=V*-We;J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(V),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Be=we+V,Ze=Ne+V,Je=Oe-Fe,ct=Re+(ve-Fe),C=Ue*Ne/Ze*Be,b=H*Ne/Ze*Be;j.projectionMatrix.makePerspective(Je,ct,C,b,Be,Ze),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;x.near=T.near=w.near=j.near,x.far=T.far=w.far=j.far,(y!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,z=x.far);const J=j.parent,fe=x.cameras;Z(x,J);for(let ve=0;ve<fe.length;ve++)Z(fe[ve],J);fe.length===2?F(x,w,T):x.projectionMatrix.copy(w.projectionMatrix),$(j,x,J)};function $(j,J,fe){fe===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ac*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let R=null;function te(j,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ve=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let ge=0;ge<fe.length;ge++){const Le=fe[ge];let we=null;if(f!==null)we=f.getViewport(Le);else{const Ue=h.getViewSubImage(d,Le);we=Ue.viewport,ge===0&&(e.setRenderTargetTextures(p,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(p))}let Ne=P[ge];Ne===void 0&&(Ne=new xn,Ne.layers.enable(ge),Ne.viewport=new yt,P[ge]=Ne),Ne.matrix.fromArray(Le.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Le.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(we.x,we.y,we.width,we.height),ge===0&&(x.matrix.copy(Ne.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(Ne)}}for(let fe=0;fe<M.length;fe++){const ve=v[fe],ge=M[fe];ve!==null&&ge!==void 0&&ge.update(ve,J,c||o)}R&&R(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const re=new sd;re.setAnimationLoop(te),this.setAnimationLoop=function(j){R=j},this.dispose=function(){}}}function Xx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yx(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(M,E);const w=e.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function u(M){const v=h();M.__bindingPointIndex=v;const S=r.createBuffer(),E=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],S=M.uniforms,E=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const P=S[w];if(f(P,w,E)===!0){const x=P.__offset,y=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let U=0;U<y.length;U++){const q=y[U],D=_(q);typeof q=="number"?(P.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,x+z,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=q.elements[0],P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=q.elements[0],P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=q.elements[0]):(q.toArray(P.__data,z),z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,v,S){const E=M.value;if(S[v]===void 0){if(typeof E=="number")S[v]=E;else{const w=Array.isArray(E)?E:[E],T=[];for(let P=0;P<w.length;P++)T.push(w[P].clone());S[v]=T}return!0}else if(typeof E=="number"){if(S[v]!==E)return S[v]=E,!0}else{const w=Array.isArray(S[v])?S[v]:[S[v]],T=Array.isArray(E)?E:[E];for(let P=0;P<w.length;P++){const x=w[P];if(x.equals(T[P])===!1)return x.copy(T[P]),!0}}return!1}function g(M){const v=M.uniforms;let S=0;const E=16;let w=0;for(let T=0,P=v.length;T<P;T++){const x=v[T],y={boundary:0,storage:0},z=Array.isArray(x.value)?x.value:[x.value];for(let U=0,q=z.length;U<q;U++){const D=z[U],I=_(D);y.boundary+=I.boundary,y.storage+=I.storage}if(x.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,T>0){w=S%E;const U=E-w;w!==0&&U-y.boundary<0&&(S+=E-w,x.__offset=S)}S+=y.storage}return w=S%E,w>0&&(S+=E-w),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Gc{constructor(e={}){const{canvas:t=Vm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const v=this;let S=!1,E=0,w=0,T=null,P=-1,x=null;const y=new yt,z=new yt;let U=null;const q=new at(0);let D=0,I=t.width,G=t.height,F=1,Z=null,$=null;const R=new yt(0,0,I,G),te=new yt(0,0,I,G);let re=!1;const j=new zc;let J=!1,fe=!1,ve=null;const ge=new Ct,Le=new Ye,we=new O,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return T===null?F:1}let H=n;function We(A,B){for(let Y=0;Y<A.length;Y++){const X=A[Y],W=t.getContext(X,B);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ue,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),H=We(B,A),H===null)throw We(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Oe,Re,V,Fe,Be,Ze,Je,ct,C,b,k,ae,Q,se,xe,le,pe,L,ce,ee,ze,Ee,Ce;function Me(){_e=new iv(H),Oe=new Z0(H,_e,e),_e.init(Oe),ze=new Hx(H,_e,Oe),Re=new zx(H,_e,Oe),V=new av(H),Fe=new bx,Be=new kx(H,_e,Re,Fe,Oe,ze,V),Ze=new Q0(v),Je=new nv(v),ct=new p_(H,Oe),Ee=new $0(H,_e,ct,Oe),C=new rv(H,ct,V,Ee),b=new uv(H,C,ct,V),L=new cv(H,Oe,Be),xe=new J0(Fe),k=new Tx(v,Ze,Je,_e,Oe,Ee,xe),ae=new Xx(v,Fe),Q=new Ax,se=new Ix(_e,Oe),pe=new j0(v,Ze,Je,Re,b,d,l),le=new Bx(v,b,Oe),Ce=new Yx(H,V,Oe,Re),ce=new K0(H,_e,V,Oe),ee=new sv(H,_e,V,Oe),V.programs=k.programs,v.capabilities=Oe,v.extensions=_e,v.properties=Fe,v.renderLists=Q,v.shadowMap=le,v.state=Re,v.info=V}Me();const ie=new Wx(v,H);this.xr=ie,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(I,G,!1))},this.getSize=function(A){return A.set(I,G)},this.setSize=function(A,B,Y=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,G=B,t.width=Math.floor(A*F),t.height=Math.floor(B*F),Y===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(I*F,G*F).floor()},this.setDrawingBufferSize=function(A,B,Y){I=A,G=B,F=Y,t.width=Math.floor(A*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,B,Y,X){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,B,Y,X),Re.viewport(y.copy(R).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,B,Y,X){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,B,Y,X),Re.scissor(z.copy(te).multiplyScalar(F).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){Re.setScissorTest(re=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(A=!0,B=!0,Y=!0){let X=0;if(A){let W=!1;if(T!==null){const de=T.texture.format;W=de===Gf||de===Hf||de===kf}if(W){const de=T.texture.type,be=de===ji||de===zi||de===Fc||de===xr||de===Bf||de===zf,Ge=pe.getClearColor(),Ae=pe.getClearAlpha(),De=Ge.r,Ve=Ge.g,je=Ge.b;be?(f[0]=De,f[1]=Ve,f[2]=je,f[3]=Ae,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=De,g[1]=Ve,g[2]=je,g[3]=Ae,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}B&&(X|=H.DEPTH_BUFFER_BIT),Y&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Q.dispose(),se.dispose(),Fe.dispose(),Ze.dispose(),Je.dispose(),b.dispose(),Ee.dispose(),Ce.dispose(),k.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Se),ie.removeEventListener("sessionend",Ie),ve&&(ve.dispose(),ve=null),he.stop()};function Xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=V.autoReset,B=le.enabled,Y=le.autoUpdate,X=le.needsUpdate,W=le.type;Me(),V.autoReset=A,le.enabled=B,le.autoUpdate=Y,le.needsUpdate=X,le.type=W}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){const B=A.target;B.removeEventListener("dispose",ne),K(B)}function K(A){oe(A),Fe.remove(A)}function oe(A){const B=Fe.get(A).programs;B!==void 0&&(B.forEach(function(Y){k.releaseProgram(Y)}),A.isShaderMaterial&&k.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,X,W,de){B===null&&(B=Ne);const be=W.isMesh&&W.matrixWorld.determinant()<0,Ge=gt(A,B,Y,X,W);Re.setMaterial(X,be);let Ae=Y.index,De=1;if(X.wireframe===!0){if(Ae=C.getWireframeAttribute(Y),Ae===void 0)return;De=2}const Ve=Y.drawRange,je=Y.attributes.position;let St=Ve.start*De,Ft=(Ve.start+Ve.count)*De;de!==null&&(St=Math.max(St,de.start*De),Ft=Math.min(Ft,(de.start+de.count)*De)),Ae!==null?(St=Math.max(St,0),Ft=Math.min(Ft,Ae.count)):je!=null&&(St=Math.max(St,0),Ft=Math.min(Ft,je.count));const ht=Ft-St;if(ht<0||ht===1/0)return;Ee.setup(W,X,Ge,Y,Ae);let an,ft=ce;if(Ae!==null&&(an=ct.get(Ae),ft=ee,ft.setIndex(an)),W.isMesh)X.wireframe===!0?(Re.setLineWidth(X.wireframeLinewidth*Ue()),ft.setMode(H.LINES)):ft.setMode(H.TRIANGLES);else if(W.isLine){let Ke=X.linewidth;Ke===void 0&&(Ke=1),Re.setLineWidth(Ke*Ue()),W.isLineSegments?ft.setMode(H.LINES):W.isLineLoop?ft.setMode(H.LINE_LOOP):ft.setMode(H.LINE_STRIP)}else W.isPoints?ft.setMode(H.POINTS):W.isSprite&&ft.setMode(H.TRIANGLES);if(W.isBatchedMesh)ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ft.renderInstances(St,ht,W.count);else if(Y.isInstancedBufferGeometry){const Ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,el=Math.min(Y.instanceCount,Ke);ft.renderInstances(St,ht,el)}else ft.render(St,ht)};function Te(A,B,Y){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=Mn,A.needsUpdate=!0,_t(A,B,Y),A.side=Ji,A.needsUpdate=!0,_t(A,B,Y),A.side=Ti):_t(A,B,Y)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),m=se.get(Y),m.init(),M.push(m),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(v._useLegacyLights);const X=new Set;return A.traverse(function(W){const de=W.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Ge=de[be];Te(Ge,Y,W),X.add(Ge)}else Te(de,Y,W),X.add(de)}),M.pop(),m=null,X},this.compileAsync=function(A,B,Y=null){const X=this.compile(A,B,Y);return new Promise(W=>{function de(){if(X.forEach(function(be){Fe.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){W(A);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $e=null;function Pe(A){$e&&$e(A)}function Se(){he.stop()}function Ie(){he.start()}const he=new sd;he.setAnimationLoop(Pe),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(A){$e=A,ie.setAnimationLoop(A),A===null?he.stop():he.start()},ie.addEventListener("sessionstart",Se),ie.addEventListener("sessionend",Ie),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(B),B=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,T),m=se.get(A,M.length),m.init(),M.push(m),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,J=xe.init(this.clippingPlanes,fe),_=Q.get(A,p.length),_.init(),p.push(_),He(A,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Z,$),this.info.render.frame++,J===!0&&xe.beginShadows();const Y=m.state.shadowsArray;if(le.render(Y,A,B),J===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(_,A),m.setupLights(v._useLegacyLights),B.isArrayCamera){const X=B.cameras;for(let W=0,de=X.length;W<de;W++){const be=X[W];ke(_,A,be,be.viewport)}}else ke(_,A,B);T!==null&&(Be.updateMultisampleRenderTarget(T),Be.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,B),Ee.resetDefaultState(),P=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function He(A,B,Y,X){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){X&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const be=b.update(A),Ge=A.material;Ge.visible&&_.push(A,be,Ge,Y,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const be=b.update(A),Ge=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),we.copy(be.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ge)){const Ae=be.groups;for(let De=0,Ve=Ae.length;De<Ve;De++){const je=Ae[De],St=Ge[je.materialIndex];St&&St.visible&&_.push(A,be,St,Y,we.z,je)}}else Ge.visible&&_.push(A,be,Ge,Y,we.z,null)}}const de=A.children;for(let be=0,Ge=de.length;be<Ge;be++)He(de[be],B,Y,X)}function ke(A,B,Y,X){const W=A.opaque,de=A.transmissive,be=A.transparent;m.setupLightsView(Y),J===!0&&xe.setGlobalState(v.clippingPlanes,Y),de.length>0&&qe(W,de,B,Y),X&&Re.viewport(y.copy(X)),W.length>0&&Tt(W,B,Y),de.length>0&&Tt(de,B,Y),be.length>0&&Tt(be,B,Y),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function qe(A,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const de=Oe.isWebGL2;ve===null&&(ve=new Cr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?pa:ji,minFilter:da,samples:de?4:0})),v.getDrawingBufferSize(Le),de?ve.setSize(Le.x,Le.y):ve.setSize(oc(Le.x),oc(Le.y));const be=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(q),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ge=v.toneMapping;v.toneMapping=qi,Tt(A,Y,X),Be.updateMultisampleRenderTarget(ve),Be.updateRenderTargetMipmap(ve);let Ae=!1;for(let De=0,Ve=B.length;De<Ve;De++){const je=B[De],St=je.object,Ft=je.geometry,ht=je.material,an=je.group;if(ht.side===Ti&&St.layers.test(X.layers)){const ft=ht.side;ht.side=Mn,ht.needsUpdate=!0,nt(St,Y,X,Ft,ht,an),ht.side=ft,ht.needsUpdate=!0,Ae=!0}}Ae===!0&&(Be.updateMultisampleRenderTarget(ve),Be.updateRenderTargetMipmap(ve)),v.setRenderTarget(be),v.setClearColor(q,D),v.toneMapping=Ge}function Tt(A,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,de=A.length;W<de;W++){const be=A[W],Ge=be.object,Ae=be.geometry,De=X===null?be.material:X,Ve=be.group;Ge.layers.test(Y.layers)&&nt(Ge,B,Y,Ae,De,Ve)}}function nt(A,B,Y,X,W,de){A.onBeforeRender(v,B,Y,X,W,de),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,B,Y,X,A,de),W.transparent===!0&&W.side===Ti&&W.forceSinglePass===!1?(W.side=Mn,W.needsUpdate=!0,v.renderBufferDirect(Y,B,X,W,A,de),W.side=Ji,W.needsUpdate=!0,v.renderBufferDirect(Y,B,X,W,A,de),W.side=Ti):v.renderBufferDirect(Y,B,X,W,A,de),A.onAfterRender(v,B,Y,X,W,de)}function _t(A,B,Y){B.isScene!==!0&&(B=Ne);const X=Fe.get(A),W=m.state.lights,de=m.state.shadowsArray,be=W.state.version,Ge=k.getParameters(A,W.state,de,B,Y),Ae=k.getProgramCacheKey(Ge);let De=X.programs;X.environment=A.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(A.isMeshStandardMaterial?Je:Ze).get(A.envMap||X.environment),De===void 0&&(A.addEventListener("dispose",ne),De=new Map,X.programs=De);let Ve=De.get(Ae);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===be)return xt(A,Ge),Ve}else Ge.uniforms=k.getUniforms(A),A.onBuild(Y,Ge,v),A.onBeforeCompile(Ge,v),Ve=k.acquireProgram(Ge,Ae),De.set(Ae,Ve),X.uniforms=Ge.uniforms;const je=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=xe.uniform),xt(A,Ge),X.needsLights=An(A),X.lightsStateVersion=be,X.needsLights&&(je.ambientLightColor.value=W.state.ambient,je.lightProbe.value=W.state.probe,je.directionalLights.value=W.state.directional,je.directionalLightShadows.value=W.state.directionalShadow,je.spotLights.value=W.state.spot,je.spotLightShadows.value=W.state.spotShadow,je.rectAreaLights.value=W.state.rectArea,je.ltc_1.value=W.state.rectAreaLTC1,je.ltc_2.value=W.state.rectAreaLTC2,je.pointLights.value=W.state.point,je.pointLightShadows.value=W.state.pointShadow,je.hemisphereLights.value=W.state.hemi,je.directionalShadowMap.value=W.state.directionalShadowMap,je.directionalShadowMatrix.value=W.state.directionalShadowMatrix,je.spotShadowMap.value=W.state.spotShadowMap,je.spotLightMatrix.value=W.state.spotLightMatrix,je.spotLightMap.value=W.state.spotLightMap,je.pointShadowMap.value=W.state.pointShadowMap,je.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Ot(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=mo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function xt(A,B){const Y=Fe.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function gt(A,B,Y,X,W){B.isScene!==!0&&(B=Ne),Be.resetTextureUnits();const de=B.fog,be=X.isMeshStandardMaterial?B.environment:null,Ge=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ci,Ae=(X.isMeshStandardMaterial?Je:Ze).get(X.envMap||be),De=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),je=!!Y.morphAttributes.position,St=!!Y.morphAttributes.normal,Ft=!!Y.morphAttributes.color;let ht=qi;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ht=v.toneMapping);const an=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=an!==void 0?an.length:0,Ke=Fe.get(X),el=m.state.lights;if(J===!0&&(fe===!0||A!==x)){const Gn=A===x&&X.id===P;xe.setState(X,A,Gn)}let At=!1;X.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==el.state.version||Ke.outputColorSpace!==Ge||W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||Ke.envMap!==Ae||X.fog===!0&&Ke.fog!==de||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==xe.numPlanes||Ke.numIntersection!==xe.numIntersection)||Ke.vertexAlphas!==De||Ke.vertexTangents!==Ve||Ke.morphTargets!==je||Ke.morphNormals!==St||Ke.morphColors!==Ft||Ke.toneMapping!==ht||Oe.isWebGL2===!0&&Ke.morphTargetsCount!==ft)&&(At=!0):(At=!0,Ke.__version=X.version);let ir=Ke.currentProgram;At===!0&&(ir=_t(X,B,W));let vu=!1,Ns=!1,tl=!1;const Kt=ir.getUniforms(),rr=Ke.uniforms;if(Re.useProgram(ir.program)&&(vu=!0,Ns=!0,tl=!0),X.id!==P&&(P=X.id,Ns=!0),vu||x!==A){Kt.setValue(H,"projectionMatrix",A.projectionMatrix),Kt.setValue(H,"viewMatrix",A.matrixWorldInverse);const Gn=Kt.map.cameraPosition;Gn!==void 0&&Gn.setValue(H,we.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&Kt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Kt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Ns=!0,tl=!0)}if(W.isSkinnedMesh){Kt.setOptional(H,W,"bindMatrix"),Kt.setOptional(H,W,"bindMatrixInverse");const Gn=W.skeleton;Gn&&(Oe.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),Kt.setValue(H,"boneTexture",Gn.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Kt.setOptional(H,W,"batchingTexture"),Kt.setValue(H,"batchingTexture",W._matricesTexture,Be));const nl=Y.morphAttributes;if((nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0&&Oe.isWebGL2===!0)&&L.update(W,Y,ir),(Ns||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,Kt.setValue(H,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rr.envMap.value=Ae,rr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Ns&&(Kt.setValue(H,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&ut(rr,tl),de&&X.fog===!0&&ae.refreshFogUniforms(rr,de),ae.refreshMaterialUniforms(rr,X,F,G,ve),mo.upload(H,Ot(Ke),rr,Be)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(mo.upload(H,Ot(Ke),rr,Be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Kt.setValue(H,"center",W.center),Kt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Kt.setValue(H,"normalMatrix",W.normalMatrix),Kt.setValue(H,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Gn=X.uniformsGroups;for(let il=0,Gp=Gn.length;il<Gp;il++)if(Oe.isWebGL2){const xu=Gn[il];Ce.update(xu,ir),Ce.bind(xu,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function ut(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function An(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,B,Y){Fe.get(A.texture).__webglTexture=B,Fe.get(A.depthTexture).__webglTexture=Y;const X=Fe.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const Y=Fe.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){T=A,E=B,w=Y;let X=!0,W=null,de=!1,be=!1;if(A){const Ae=Fe.get(A);Ae.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Ae.__webglFramebuffer===void 0?Be.setupRenderTarget(A):Ae.__hasExternalTextures&&Be.rebindTextures(A,Fe.get(A.texture).__webglTexture,Fe.get(A.depthTexture).__webglTexture);const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(be=!0);const Ve=Fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?W=Ve[B][Y]:W=Ve[B],de=!0):Oe.isWebGL2&&A.samples>0&&Be.useMultisampledRTT(A)===!1?W=Fe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?W=Ve[Y]:W=Ve,y.copy(A.viewport),z.copy(A.scissor),U=A.scissorTest}else y.copy(R).multiplyScalar(F).floor(),z.copy(te).multiplyScalar(F).floor(),U=re;if(Re.bindFramebuffer(H.FRAMEBUFFER,W)&&Oe.drawBuffers&&X&&Re.drawBuffers(A,W),Re.viewport(y),Re.scissor(z),Re.setScissorTest(U),de){const Ae=Fe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,Y)}else if(be){const Ae=Fe.get(A.texture),De=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ae.__webglTexture,Y||0,De)}P=-1},this.readRenderTargetPixels=function(A,B,Y,X,W,de,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ge=Ge[be]),Ge){Re.bindFramebuffer(H.FRAMEBUFFER,Ge);try{const Ae=A.texture,De=Ae.format,Ve=Ae.type;if(De!==ri&&ze.convert(De)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ve===pa&&(_e.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ve!==ji&&ze.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===ki&&(Oe.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-X&&Y>=0&&Y<=A.height-W&&H.readPixels(B,Y,X,W,ze.convert(De),ze.convert(Ve),de)}finally{const Ae=T!==null?Fe.get(T).__webglFramebuffer:null;Re.bindFramebuffer(H.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(A,B,Y=0){const X=Math.pow(2,-Y),W=Math.floor(B.image.width*X),de=Math.floor(B.image.height*X);Be.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,A.x,A.y,W,de),Re.unbindTexture()},this.copyTextureToTexture=function(A,B,Y,X=0){const W=B.image.width,de=B.image.height,be=ze.convert(Y.format),Ge=ze.convert(Y.type);Be.setTexture2D(Y,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,W,de,be,Ge,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,be,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,be,Ge,B.image),X===0&&Y.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,B,Y,X,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=A.max.x-A.min.x+1,be=A.max.y-A.min.y+1,Ge=A.max.z-A.min.z+1,Ae=ze.convert(X.format),De=ze.convert(X.type);let Ve;if(X.isData3DTexture)Be.setTexture3D(X,0),Ve=H.TEXTURE_3D;else if(X.isDataArrayTexture)Be.setTexture2DArray(X,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const je=H.getParameter(H.UNPACK_ROW_LENGTH),St=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ft=H.getParameter(H.UNPACK_SKIP_PIXELS),ht=H.getParameter(H.UNPACK_SKIP_ROWS),an=H.getParameter(H.UNPACK_SKIP_IMAGES),ft=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(Ve,W,B.x,B.y,B.z,de,be,Ge,Ae,De,ft.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,W,B.x,B.y,B.z,de,be,Ge,Ae,ft.data)):H.texSubImage3D(Ve,W,B.x,B.y,B.z,de,be,Ge,Ae,De,ft),H.pixelStorei(H.UNPACK_ROW_LENGTH,je),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ft),H.pixelStorei(H.UNPACK_SKIP_ROWS,ht),H.pixelStorei(H.UNPACK_SKIP_IMAGES,an),W===0&&X.generateMipmaps&&H.generateMipmap(Ve),Re.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,Re.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bc?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Wo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qt?Sr:Wf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?qt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qx extends Gc{}qx.prototype.isWebGL1Renderer=!0;class dd extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class pd extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kh=new O,Hh=new O,Gh=new Ct,Ul=new Xo,Ka=new wa;class jx extends Xt{constructor(e=new Hn,t=new pd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)kh.fromBufferAttribute(t,i-1),Hh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kh.distanceTo(Hh);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=s,e.ray.intersectsSphere(Ka)===!1)return;Gh.copy(i).invert(),Ul.copy(e.ray).applyMatrix4(Gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,d=new O,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=p,S=M-1;v<S;v+=f){const E=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,w),Ul.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let v=p,S=M-1;v<S;v+=f){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Ul.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class md extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vh=new Ct,cc=new Xo,Za=new wa,Ja=new O;class $x extends Xt{constructor(e=new Hn,t=new md){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;Vh.copy(i).invert(),cc.copy(e.ray).applyMatrix4(Vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ja.fromBufferAttribute(h,m),Wh(Ja,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ja.fromBufferAttribute(h,g),Wh(Ja,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wh(r,e,t,n,i,s,o){const a=cc.distanceSqToPoint(r);if(a<t){const l=new O;cc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Us extends Hn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Sn(s,3)),this.setAttribute("normal",new Sn(s.slice(),3)),this.setAttribute("uv",new Sn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new O,S=new O,E=new O;for(let w=0;w<t.length;w+=3)f(t[w+0],v),f(t[w+1],S),f(t[w+2],E),l(v,S,E,M)}function l(M,v,S,E){const w=E+1,T=[];for(let P=0;P<=w;P++){T[P]=[];const x=M.clone().lerp(S,P/w),y=v.clone().lerp(S,P/w),z=w-P;for(let U=0;U<=z;U++)U===0&&P===w?T[P][U]=x:T[P][U]=x.clone().lerp(y,U/z)}for(let P=0;P<w;P++)for(let x=0;x<2*(w-P)-1;x++){const y=Math.floor(x/2);x%2===0?(d(T[P][y+1]),d(T[P+1][y]),d(T[P][y])):(d(T[P][y+1]),d(T[P+1][y+1]),d(T[P+1][y]))}}function c(M){const v=new O;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(M),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const M=new O;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];const S=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;o.push(S,1-E)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const v=o[M+0],S=o[M+2],E=o[M+4],w=Math.max(v,S,E),T=Math.min(v,S,E);w>.9&&T<.1&&(v<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,v){const S=M*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const M=new O,v=new O,S=new O,E=new O,w=new Ye,T=new Ye,P=new Ye;for(let x=0,y=0;x<s.length;x+=9,y+=6){M.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),S.set(s[x+6],s[x+7],s[x+8]),w.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),E.copy(M).add(v).add(S).divideScalar(3);const z=m(E);_(w,y+0,M,z),_(T,y+2,v,z),_(P,y+4,S,z)}}function _(M,v,S,E){E<0&&M.x===1&&(o[v]=M.x-1),S.x===0&&S.z===0&&(o[v]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.vertices,e.indices,e.radius,e.details)}}class Vc extends Us{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class Wc extends Us{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wc(e.radius,e.detail)}}class jo extends Us{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jo(e.radius,e.detail)}}class $o extends Us{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $o(e.radius,e.detail)}}class Xc extends Hn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new O,h=new O,d=new O;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Sn(a,3)),this.setAttribute("normal",new Sn(l,3)),this.setAttribute("uv",new Sn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ys extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Nl=new Ct,Xh=new O,Yh=new O;class _d{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zc,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),Yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yh),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qh=new Ct,Hs=new O,Ol=new O;class Kx extends _d{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),Ol.copy(n.position),Ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ol),n.updateMatrixWorld(),i.makeTranslation(-Hs.x,-Hs.y,-Hs.z),qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh)}}class Zx extends Yc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jx extends _d{constructor(){super(new ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uc extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Jx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gd extends Yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const $h={type:"change"},Fl={type:"start"},Kh={type:"end"},Qa=new Xo,Zh=new Bi,Qx=Math.cos(70*Gm.DEG2RAD);class eM extends Or{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",b),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent($h),n.update(),s=i.NONE},this.update=function(){const L=new O,ce=new Pr().setFromUnitVectors(e.up,new O(0,1,0)),ee=ce.clone().invert(),ze=new O,Ee=new Pr,Ce=new O,Me=2*Math.PI;return function(Xe=null){const N=n.object.position;L.copy(N).sub(n.target),L.applyQuaternion(ce),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&z(x(Xe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ue=n.minAzimuthAngle,ne=n.maxAzimuthAngle;isFinite(ue)&&isFinite(ne)&&(ue<-Math.PI?ue+=Me:ue>Math.PI&&(ue-=Me),ne<-Math.PI?ne+=Me:ne>Math.PI&&(ne-=Me),ue<=ne?a.theta=Math.max(ue,Math.min(ne,a.theta)):a.theta=a.theta>(ue+ne)/2?Math.max(ue,a.theta):Math.min(ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(ee),N.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let K=!1;if(n.zoomToCursor&&w){let oe=null;if(n.object.isPerspectiveCamera){const Te=L.length();oe=$(Te*c);const $e=Te-oe;n.object.position.addScaledVector(S,$e),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Te=new O(E.x,E.y,0);Te.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),K=!0;const $e=new O(E.x,E.y,0);$e.unproject(n.object),n.object.position.sub($e).add(Te),n.object.updateMatrixWorld(),oe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;oe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(oe).add(n.object.position):(Qa.origin.copy(n.object.position),Qa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Qa.direction))<Qx?e.lookAt(n.target):(Zh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Qa.intersectPlane(Zh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),K=!0);return c=1,w=!1,K||ze.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>0?(n.dispatchEvent($h),ze.copy(n.object.position),Ee.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",Fe),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",Be),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",b),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new jh,l=new jh;let c=1;const u=new O,h=new Ye,d=new Ye,f=new Ye,g=new Ye,_=new Ye,m=new Ye,p=new Ye,M=new Ye,v=new Ye,S=new O,E=new Ye;let w=!1;const T=[],P={};function x(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function z(L){l.theta-=L}function U(L){l.phi-=L}const q=function(){const L=new O;return function(ee,ze){L.setFromMatrixColumn(ze,0),L.multiplyScalar(-ee),u.add(L)}}(),D=function(){const L=new O;return function(ee,ze){n.screenSpacePanning===!0?L.setFromMatrixColumn(ze,1):(L.setFromMatrixColumn(ze,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ee),u.add(L)}}(),I=function(){const L=new O;return function(ee,ze){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;L.copy(Ce).sub(n.target);let Me=L.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),q(2*ee*Me/Ee.clientHeight,n.object.matrix),D(2*ze*Me/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(ee*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),D(ze*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(L){if(!n.zoomToCursor)return;w=!0;const ce=n.domElement.getBoundingClientRect(),ee=L.clientX-ce.left,ze=L.clientY-ce.top,Ee=ce.width,Ce=ce.height;E.x=ee/Ee*2-1,E.y=-(ze/Ce)*2+1,S.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function R(L){h.set(L.clientX,L.clientY)}function te(L){Z(L),p.set(L.clientX,L.clientY)}function re(L){g.set(L.clientX,L.clientY)}function j(L){d.set(L.clientX,L.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ce=n.domElement;z(2*Math.PI*f.x/ce.clientHeight),U(2*Math.PI*f.y/ce.clientHeight),h.copy(d),n.update()}function J(L){M.set(L.clientX,L.clientY),v.subVectors(M,p),v.y>0?G(y()):v.y<0&&F(y()),p.copy(M),n.update()}function fe(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(_),n.update()}function ve(L){Z(L),L.deltaY<0?F(y()):L.deltaY>0&&G(y()),n.update()}function ge(L){let ce=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),ce=!0;break}ce&&(L.preventDefault(),n.update())}function Le(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),ce=.5*(T[0].pageY+T[1].pageY);h.set(L,ce)}}function we(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),ce=.5*(T[0].pageY+T[1].pageY);g.set(L,ce)}}function Ne(){const L=T[0].pageX-T[1].pageX,ce=T[0].pageY-T[1].pageY,ee=Math.sqrt(L*L+ce*ce);p.set(0,ee)}function Ue(){n.enableZoom&&Ne(),n.enablePan&&we()}function H(){n.enableZoom&&Ne(),n.enableRotate&&Le()}function We(L){if(T.length==1)d.set(L.pageX,L.pageY);else{const ee=pe(L),ze=.5*(L.pageX+ee.x),Ee=.5*(L.pageY+ee.y);d.set(ze,Ee)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ce=n.domElement;z(2*Math.PI*f.x/ce.clientHeight),U(2*Math.PI*f.y/ce.clientHeight),h.copy(d)}function _e(L){if(T.length===1)_.set(L.pageX,L.pageY);else{const ce=pe(L),ee=.5*(L.pageX+ce.x),ze=.5*(L.pageY+ce.y);_.set(ee,ze)}m.subVectors(_,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(_)}function Oe(L){const ce=pe(L),ee=L.pageX-ce.x,ze=L.pageY-ce.y,Ee=Math.sqrt(ee*ee+ze*ze);M.set(0,Ee),v.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),G(v.y),p.copy(M)}function Re(L){n.enableZoom&&Oe(L),n.enablePan&&_e(L)}function V(L){n.enableZoom&&Oe(L),n.enableRotate&&We(L)}function Fe(L){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Be),n.domElement.addEventListener("pointerup",Ze)),se(L),L.pointerType==="touch"?k(L):Je(L))}function Be(L){n.enabled!==!1&&(L.pointerType==="touch"?ae(L):ct(L))}function Ze(L){xe(L),T.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Be),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(Kh),s=i.NONE}function Je(L){let ce;switch(L.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case zr.DOLLY:if(n.enableZoom===!1)return;te(L),s=i.DOLLY;break;case zr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;re(L),s=i.PAN}else{if(n.enableRotate===!1)return;R(L),s=i.ROTATE}break;case zr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;R(L),s=i.ROTATE}else{if(n.enablePan===!1)return;re(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fl)}function ct(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;fe(L);break}}function C(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Fl),ve(L),n.dispatchEvent(Kh))}function b(L){n.enabled===!1||n.enablePan===!1||ge(L)}function k(L){switch(le(L),T.length){case 1:switch(n.touches.ONE){case kr.ROTATE:if(n.enableRotate===!1)return;Le(),s=i.TOUCH_ROTATE;break;case kr.PAN:if(n.enablePan===!1)return;we(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case kr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ue(),s=i.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;H(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fl)}function ae(L){switch(le(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;We(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(L),n.update();break;default:s=i.NONE}}function Q(L){n.enabled!==!1&&L.preventDefault()}function se(L){T.push(L)}function xe(L){delete P[L.pointerId];for(let ce=0;ce<T.length;ce++)if(T[ce].pointerId==L.pointerId){T.splice(ce,1);return}}function le(L){let ce=P[L.pointerId];ce===void 0&&(ce=new Ye,P[L.pointerId]=ce),ce.set(L.pageX,L.pageY)}function pe(L){const ce=L.pointerId===T[0].pointerId?T[1]:T[0];return P[ce.pointerId]}n.domElement.addEventListener("contextmenu",Q),n.domElement.addEventListener("pointerdown",Fe),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}function yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bs={duration:.5,overwrite:!1,delay:0},qc,$t,Et,fi=1e8,rn=1/fi,hc=Math.PI*2,tM=hc/4,nM=0,xd=Math.sqrt,iM=Math.cos,rM=Math.sin,Yt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},Pi=function(e){return typeof e=="number"},jc=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},$c=function(){return typeof window<"u"},eo=function(e){return Rt(e)||Yt(e)},Md=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,fc=/(?:-?\.?\d|\.)+/gi,Sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yd=/[+-]=-?[.\d]+/,Ed=/[^,'"\[\]\s]+/gi,sM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,ai,dc,Kc,zn={},Lo={},Td,bd=function(e){return(Lo=ws(e,zn))&&wn},Zc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ma=function(e,t){return!t&&console.warn(e)},wd=function(e,t){return e&&(zn[e]=t)&&Lo&&(Lo[e]=t)||zn},_a=function(){return 0},aM={suppressEvents:!0,isStart:!0,kill:!1},_o={suppressEvents:!0,kill:!1},oM={suppressEvents:!0},Jc={},$i=[],pc={},Ad,Dn={},zl={},Jh=30,go=[],Qc="",eu=function(e){var t=e[0],n,i;if(mi(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=go.length;i--&&!go[i].targetTest(t););n=go[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zd(e[i],n)))||e.splice(i,1);return e},yr=function(e){return e._gsap||eu($n(e))[0]._gsap},Rd=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():jc(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},lM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Do=function(){var e=$i.length,t=$i.slice(0),n,i;for(pc={},$i.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cd=function(e,t,n,i){$i.length&&!$t&&Do(),e.render(t,n,$t&&t<0&&(e._initted||e._startAt)),$i.length&&!$t&&Do()},Pd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ed).length<2?t:Yt(e)?e.trim():e},Ld=function(e){return e},kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ws=function(e,t){for(var n in t)e[n]=t[n];return e},Qh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=mi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Io=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ta=function(e){var t=e.parent||bt,n=e.keyframes?cM(sn(e.keyframes)):kn;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},uM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Dd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ko=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Qi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Er=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},hM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mc=function(e,t,n,i){return e._startAt&&($t?e._startAt.revert(_o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},fM=function r(e){return!e||e._ts&&r(e.parent)},ef=function(e){return e._repeat?As(e._tTime,e=e.duration()+e._rDelay)*e:0},As=function(e,t){var n=Math.floor(e=Nt(e/t));return e&&n===e?n-1:n},Uo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Zo=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rn)||0))},Jo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Zo(e),n._dirty||Er(n,e)),e},Id=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Uo(e.rawTime(),t),(!t._dur||Aa(0,t.totalDuration(),n)-t._tTime>rn)&&t.render(n,!0)),Er(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ci=function(e,t,n,i){return t.parent&&Qi(t),t._start=Nt((Pi(n)?n:n||e!==bt?Wn(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dd(e,t,"_first","_last",e._sort?"_start":0),_c(t)||(e._recent=t),i||Id(e,t),e._ts<0&&Jo(e,e._tTime),e},Ud=function(e,t){return(zn.ScrollTrigger||Zc("scrollTrigger",t))&&zn.ScrollTrigger.create(t,e)},Nd=function(e,t,n,i,s){if(nu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ad!==Un.frame)return $i.push(e),e._lazy=[s,i],1},dM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},_c=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},pM=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&dM(e)&&!(!e._initted&&_c(e))||(e._ts<0||e._dp._ts<0)&&!_c(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Aa(0,e._tDur,t),u=As(l,a),e._yoyo&&u&1&&(o=1-o),u!==As(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||$t||i||e._zTime===rn||!t&&e._zTime){if(!e._initted&&Nd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?rn:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&mc(e,t,n,!0),e._onUpdate&&!n&&On(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&On(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Qi(e,1),!n&&!$t&&(On(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},mM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Rs=function(e,t,n,i){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Jo(e,e._tTime=e._tDur*a),e.parent&&Zo(e),n||Er(e.parent,e),e},tf=function(e){return e instanceof mn?Er(e):Rs(e,e._dur)},_M={_start:0,endTime:_a,totalDuration:_a},Wn=function r(e,t,n){var i=e.labels,s=e._recent||_M,o=e.duration()>=fi?s.endTime(!1):e._dur,a,l,c;return Yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},na=function(e,t,n){var i=Pi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ut(t[0],o,t[s+1])},nr=function(e,t){return e||e===0?t(e):t},Aa=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!Yt(e)||!(t=sM.exec(e))?"":t[1]},gM=function(e,t,n){return nr(n,function(i){return Aa(e,t,i)})},gc=[].slice,Od=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==ai},vM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Yt(i)&&!t||Od(i,1)?(s=n).push.apply(s,$n(i)):n.push(i)})||n},$n=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):Yt(e)&&!n&&(dc||!Cs())?gc.call((t||Kc).querySelectorAll(e),0):sn(e)?vM(e,n):Od(e)?gc.call(e,0):e?[e]:[]},vc=function(e){return e=$n(e)[0]||ma("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $n(t,n.querySelectorAll?n:n===e?ma("Invalid scope")||Kc.createElement("div"):e)}},Fd=function(e){return e.sort(function(){return .5-Math.random()})},Bd=function(e){if(Rt(e))return e;var t=mi(e)?e:{each:e},n=Tr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Yt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,M,v,S,E,w,T,P,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,fi])[1],!x){for(T=-1e8;T<(T=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:i%x,M=x===fi?0:l?_*h/x-.5:i/x|0,T=0,P=fi,w=0;w<_;w++)v=w%x-p,S=M-(w/x|0),m[w]=E=c?Math.abs(c==="y"?S:v):xd(v*v+S*S),E>T&&(T=E),E<P&&(P=E);i==="random"&&Fd(m),m.max=T-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=tn(t.amount||t.each)||0,n=n&&_<0?jd(n):n}return _=(m[d]-m.min)/m.max||0,Nt(m.b+(n?n(_):_)*m.v)+m.u}},xc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Nt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Pi(n)?0:tn(n))}},zd=function(e,t){var n=sn(e),i,s;return!n&&mi(e)&&(i=n=e.radius||fi,e.values?(e=$n(e.values),(s=!Pi(e[0]))&&(i*=i)):e=xc(e.increment)),nr(t,n?Rt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Pi(o)?u:u+tn(o)}:xc(e))},kd=function(e,t,n,i){return nr(sn(e)?!t:n===!0?!!(n=0):!i,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},xM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},MM=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},SM=function(e,t,n){return Gd(e,t,0,1,n)},Hd=function(e,t,n){return nr(n,function(i){return e[~~t(i)]})},yM=function r(e,t,n){var i=t-e;return sn(e)?Hd(e,r(0,e.length),t):nr(n,function(s){return(i+(s-e)%i)%i+e})},EM=function r(e,t,n){var i=t-e,s=i*2;return sn(e)?Hd(e,r(0,e.length-1),t):nr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ga=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Ed:fc),n+=e.substr(t,i-t)+kd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Gd=function(e,t,n,i,s){var o=t-e,a=i-n;return nr(s,function(l){return n+((l-e)/o*a||0)})},TM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Yt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=ws(sn(e)?[]:{},e));if(!u){for(l in t)tu.call(a,e,l,"get",t[l]);s=function(g){return su(g,a)||(o?e.p:e)}}}return nr(n,s)},nf=function(e,t,n){var i=e.labels,s=fi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},On=function(e,t,n){var i=e.vars,s=i[t],o=Et,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&$i.length&&Do(),a&&(Et=a),u=l?s.apply(c,l):s.call(c),Et=o,u},qs=function(e){return Qi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&On(e,"onInterrupt"),e},hs,Vd=[],Wd=function(e){if(e)if(e=!e.name&&e.default||e,$c()||e.headless){var t=e.name,n=Rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:_a,render:su,add:tu,kill:kM,modifier:zM,rawVars:0},o={targetTest:0,get:0,getSetter:ru,aliases:{},register:0};if(Cs(),e!==i){if(Dn[t])return;kn(i,kn(Io(e,s),o)),ws(i.prototype,ws(s,Io(e,o))),Dn[i.prop=t]=i,e.targetTest&&(go.push(i),Jc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}wd(t,i),e.register&&e.register(wn,i,Tn)}else Vd.push(e)},mt=255,js={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},kl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*mt+.5|0},Xd=function(e,t,n){var i=e?Pi(e)?[e>>16,e>>8&mt,e&mt]:0:js.black,s,o,a,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),js[e])i=js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&mt,i&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(fc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=kl(l+1/3,s,o),i[1]=kl(l,s,o),i[2]=kl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Sd),n&&i.length<4&&(i[3]=1),i}else i=e.match(fc)||js.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/mt,o=i[1]/mt,a=i[2]/mt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yd=function(e){var t=[],n=[],i=-1;return e.split(Ki).forEach(function(s){var o=s.match(us)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},rf=function(e,t,n){var i="",s=(e+i).match(Ki),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Xd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Yd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ki,"1").split(us),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ki),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Ki=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in js)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),bM=/hsl[a]?\(/,qd=function(e){var t=e.join(" "),n;if(Ki.lastIndex=0,Ki.test(t))return n=bM.test(t),e[1]=rf(e[1],n),e[0]=rf(e[0],n,Yd(e[1])),!0},va,Un=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,M=m===!0,v,S,E,w;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,v=E-o,(v>0||M)&&(w=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=v+(v>=s?4:s-v),S=1),M||(l=c(_)),S)for(f=0;f<a.length;f++)a[f](E,d,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Td&&(!dc&&$c()&&(ai=dc=window,Kc=ai.document||{},zn.gsap=wn,(ai.gsapVersions||(ai.gsapVersions=[])).push(wn.version),bd(Lo||ai.GreenSockGlobals||!ai.gsap&&ai||{}),Vd.forEach(Wd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},va=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),va=0,c=_a},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var v=p?function(S,E,w,T){m(S,E,w,T),h.remove(v)}:m;return h.remove(m),a[M?"unshift":"push"](v),Cs(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Cs=function(){return!va&&Un.wake()},ot={},wM=/^[\d.\-M][\d.\-,\s]/,AM=/["']/g,RM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(AM,"").trim():+c,i=l.substr(a+1).trim();return t},CM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},PM=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[RM(t[1])]:CM(e).split(",").map(Pd)):ot._CE&&wM.test(e)?ot._CE("",e):n},jd=function(e){return function(t){return 1-e(1-t)}},$d=function r(e,t){for(var n=e._first,i;n;)n instanceof mn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Tr=function(e,t){return e&&(Rt(e)?e:ot[e]||PM(e))||t},Br=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return En(e,function(a){ot[a]=zn[a]=s,ot[o=a.toLowerCase()]=n;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},Kd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/hc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*rM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Kd(a);return s=hc/s,l.config=function(c,u){return r(e,c,u)},l},Gl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Kd(n);return i.config=function(s){return r(e,s)},i};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Br(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Br("Elastic",Hl("in"),Hl("out"),Hl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Br("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Br("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Br("Circ",function(r){return-(xd(1-r*r)-1)});Br("Sine",function(r){return r===1?1:-iM(r*tM)+1});Br("Back",Gl("in"),Gl("out"),Gl());ot.SteppedEase=ot.steps=zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-rn;return function(a){return((i*Aa(0,o,a)|0)+s)*n}}};bs.ease=ot["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qc+=r+","+r+"Params,"});var Zd=function(e,t){this.id=nM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rd,this.set=t?t.getSetter:ru},xa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Rs(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),va||Un.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Jo(this,n),!s._dp||s.parent||Id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===rn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ef(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ef(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?As(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Uo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Aa(-Math.abs(this._delay),this._tDur,s),i!==!1),Zo(this),hM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rn&&(this._tTime-=rn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ci(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=oM);var i=$t;return $t=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Wn(this,n),yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-rn)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Rt(n)?n:Ld,a=function(){var c=i.then;i.then=null,Rt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){qs(this)},r}();kn(xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var mn=function(r){vd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),bt&&ci(n.parent||bt,yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ud(yi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return na(0,arguments,this),this},t.from=function(i,s,o){return na(1,arguments,this),this},t.fromTo=function(i,s,o,a){return na(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(i,s,Wn(this,o),1),this},t.call=function(i,s,o){return ci(this,Ut.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ut(i,o,Wn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ta(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ta(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Nt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,M,v,S,E,w,T;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Nt(u%m),u===l?(_=this._repeat,d=c):(E=Nt(u/m),_=~~E,_&&_===E&&(d=c,_--),d>c&&(d=c)),E=As(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),w&&_&1&&(d=c-d,T=1),_!==E&&!this._lock){var P=w&&E&1,x=P===(w&&_&1);if(_<E&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Nt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;$d(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=mM(this,Nt(a),Nt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(On(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-1e-8);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||$t&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=y?-1e-8:rn);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=S,Zo(this),this.render(i,s,o);this._onUpdate&&!s&&On(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(On(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Pi(s)||(s=Wn(this,s,i)),!(i instanceof xa)){if(sn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Yt(i))return this.addLabel(i,s);if(Rt(i))i=Ut.delayedCall(0,i);else return this}return this!==i?ci(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ut?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Yt(i)?this.removeLabel(i):Rt(i)?this.killTweensOf(i):(i.parent===this&&Ko(this,i),i===this._recent&&(this._recent=this._last),Er(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Wn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ut.delayedCall(0,s||_a,o);return a.data="isPause",this._hasPause=1,ci(this,a,Wn(this,i))},t.removePause=function(i){var s=this._first;for(i=Wn(this,i);s;)s._start===i&&s.data==="isPause"&&Qi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=$n(i),l=this._first,c=Pi(s),u;l;)l instanceof Ut?lM(l._targets,a)&&(c?(!Hi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Wn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Ut.to(o,kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||rn,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Rs(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,kn({startAt:{time:Wn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),nf(this,Wn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),nf(this,Wn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+rn)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Er(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Er(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=fi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Rs(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(bt._ts&&(Cd(bt,Uo(i,bt)),Ad=Un.frame),Un.frame>=Jh){Jh+=Bn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Bn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},e}(xa);kn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var LM=function(e,t,n,i,s,o,a){var l=new Tn(this._pt,e,t,0,1,ip,null,s),c=0,u=0,h,d,f,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ga(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(Bl)||[];h=Bl.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ms(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Bl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(yd.test(i)||p)&&(l.e=0),this._pt=l,l},tu=function(e,t,n,i,s,o,a,l,c,u){Rt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Rt(h)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Rt(h)?c?OM:tp:iu,g;if(Yt(i)&&(~i.indexOf("random(")&&(i=ga(i)),i.charAt(1)==="="&&(g=ms(d,i)+(tn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Mc)return!isNaN(d*i)&&i!==""?(g=new Tn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?BM:np,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Zc(t,i),LM.call(this,e,t,d,i,f,l||Bn.stringFilter,c))},DM=function(e,t,n,i,s){if(Rt(e)&&(e=ia(e,s,t,n,i)),!mi(e)||e.style&&e.nodeType||sn(e)||Md(e))return Yt(e)?ia(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ia(e[a],s,t,n,i);return o},Jd=function(e,t,n,i,s,o){var a,l,c,u;if(Dn[e]&&(a=new Dn[e]).init(s,a.rawVars?t[e]:DM(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Tn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==hs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Hi,Mc,nu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!qc,S=e.timeline,E,w,T,P,x,y,z,U,q,D,I,G,F;if(S&&(!d||!s)&&(s="none"),e._ease=Tr(s,bs.ease),e._yEase=h?jd(Tr(h===!0?s:h,bs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(U=m[0]?yr(m[0]).harness:0,G=U&&i[U.prop],E=Io(i,Jc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?_o:aM),_._lazy=0),o){if(Qi(e._startAt=Ut.set(m,kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return On(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!a&&!f)&&e._startAt.revert(_o),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:p},E),G&&(T[U.prop]=G),Qi(e._startAt=Ut.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(_o):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,rn,rn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&yn(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],z=x._gsap||eu(m)[w]._gsap,e._ptLookup[w]=D={},pc[z.id]&&$i.length&&Do(),I=M===m?w:M.indexOf(x),U&&(q=new U).init(x,G||E,e,I,M)!==!1&&(e._pt=P=new Tn(e._pt,x,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(Z){D[Z]=P}),q.priority&&(y=1)),!U||G)for(T in E)Dn[T]&&(q=Jd(T,E,e,I,x,M))?q.priority&&(y=1):D[T]=P=tu.call(e,x,T,"get",E[T],I,M,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),v&&e._pt&&(Hi=e,bt.killTweensOf(x,D,e.globalTime(t)),F=!e.parent,Hi=0),e._pt&&l&&(pc[z.id]=1)}y&&rp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,d&&t<=0&&S.render(fi,!0,!0)},IM=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Mc=1,e.vars[t]="+=0",nu(e,a),Mc=0,l?ma(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Pt(n)+tn(h.e)),h.b&&(h.b=u.s+tn(h.b))},UM=function(e,t){var n=e[0]?yr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ws({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},NM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ia=function(e,t,n,i,s){return Rt(e)?e.call(t,n,i,s):Yt(e)&&~e.indexOf("random(")?ga(e):e},Qd=Qc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ep={};En(Qd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ep[r]=1});var Ut=function(r){vd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ta(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||bt,v=(sn(n)||Md(n)?Pi(n[0]):"length"in i)?[n]:$n(n),S,E,w,T,P,x,y,z;if(a._targets=v.length?eu(v):ma("GSAP target "+n+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||eo(c)||eo(u)){if(i=a.vars,S=a.timeline=new mn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),S.kill(),S.parent=S._dp=yi(a),S._start=0,d||eo(c)||eo(u)){if(T=v.length,y=d&&Bd(d),mi(d))for(P in d)~Qd.indexOf(P)&&(z||(z={}),z[P]=d[P]);for(E=0;E<T;E++)w=Io(i,ep),w.stagger=0,p&&(w.yoyoEase=p),z&&ws(w,z),x=v[E],w.duration=+ia(c,yi(a),E,x,v),w.delay=(+ia(u,yi(a),E,x,v)||0)-a._delay,!d&&T===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(x,w,y?y(E,x,v):0),S._ease=ot.none;S.duration()?c=u=0:a.timeline=0}else if(g){ta(kn(S.vars.defaults,{ease:"none"})),S._ease=Tr(g.ease||i.ease||"none");var U=0,q,D,I;if(sn(g))g.forEach(function(G){return S.to(v,G,">")}),S.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||NM(P,g[P],w,g.easeEach);for(P in w)for(q=w[P].sort(function(G,F){return G.t-F.t}),U=0,E=0;E<q.length;E++)D=q[E],I={ease:D.e,duration:(D.t-(E?q[E-1].t:0))/100*c},I[P]=D.v,S.to(v,I,U),U+=I.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!qc&&(Hi=yi(a),bt.killTweensOf(v),Hi=0),ci(M,yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Nt(M._time)&&yn(h)&&fM(yi(a))&&M.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&Ud(yi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-rn&&!u?l:i<rn?0:i,d,f,g,_,m,p,M,v,S;if(!c)pM(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=Nt(h%_),h===l?(g=this._repeat,d=c):(m=Nt(h/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,d=c-d),m=As(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(v&&this._yEase&&$d(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Nt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Nd(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!g&&(On(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&mc(this,i,s,o),On(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&mc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qi(this,1),!s&&!(u&&!a)&&(h||a||p)&&(On(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){va||Un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nu(this,c),u=this._ease(c/this._dur),IM(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Jo(this,0),this.parent||Dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$t),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hi&&Hi.vars.overwrite!==!0)._first||qs(this),this.parent&&o!==this.timeline.totalDuration()&&Rs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?$n(i):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&uM(a,l))return s==="all"&&(this._pt=0),qs(this);for(h=this._op=this._op||[],s!=="all"&&(Yt(s)&&(_={},En(s,function(M){return _[M]=1}),s=_),s=UM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ko(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&qs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return na(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return na(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return bt.killTweensOf(i,s,o)},e}(xa);kn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var e=new mn,t=gc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var iu=function(e,t,n){return e[t]=n},tp=function(e,t,n){return e[t](n)},OM=function(e,t,n,i){return e[t](i.fp,n)},FM=function(e,t,n){return e.setAttribute(t,n)},ru=function(e,t){return Rt(e[t])?tp:jc(e[t])&&e.setAttribute?FM:iu},np=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},BM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ip=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},su=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zM=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},kM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ko(this,t,"_pt"):t.dep||(n=1),t=i;return!n},HM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Tn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||np,this.d=l||this,this.set=c||iu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=HM,this.m=n,this.mt=s,this.tween=i},r}();En(Qc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Jc[r]=1});zn.TweenMax=zn.TweenLite=Ut;zn.TimelineLite=zn.TimelineMax=mn;bt=new mn({sortChildren:!1,defaults:bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=qd;var br=[],vo={},GM=[],sf=0,VM=0,Vl=function(e){return(vo[e]||GM).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-sf>2&&(Vl("matchMediaInit"),br.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ai.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Vl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sf=e,Vl("matchMedia"))},sp=function(){function r(t,n){this.selector=n&&vc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=VM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Rt(n)&&(s=i,i=n,n=Rt);var o=this,a=function(){var c=Et,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=vc(s)),Et=o,h=i.apply(o,arguments),Rt(h)&&o._r.push(h),Et=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Rt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Et;Et=null,n(this),Et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ut)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=br.length;o--;)br[o].id===this.id&&br.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),WM=function(){function r(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){mi(n)||(n={matches:n});var o=new sp(0,s||this.scope),a=o.conditions={},l,c,u;Et&&!o.selector&&(o.selector=Et.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ai.matchMedia(n[c]),l&&(br.indexOf(o)<0&&br.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),No={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Wd(i)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Yt(e)&&(e=$n(e)[0]);var s=yr(e||{}).get,o=n?Ld:Pd;return n==="native"&&(n=""),e&&(t?o((Dn[t]&&Dn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Dn[a]&&Dn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=$n(e),e.length>1){var i=e.map(function(u){return wn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Dn[t],a=yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;hs._pt=0,h.init(e,n?u+n:u,hs,0,[e]),h.render(1,h),hs._pt&&su(1,hs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=wn.to(e,kn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Tr(e.ease,bs.ease)),Qh(bs,e||{})},config:function(e){return Qh(Bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Dn[a]&&!zn[a]&&ma(t+" effect requires "+a+" plugin.")}),zl[t]=function(a,l,c){return n($n(a),kn(l||{},s),c)},o&&(mn.prototype[t]=function(a,l,c){return this.add(zl[t](a,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Tr(t)},parseEase:function(e,t){return arguments.length?Tr(e,t):ot},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),i,s;for(n.smoothChildTiming=yn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&ci(n,i,i._start-i._delay),i=s;return ci(bt,n,0),n},context:function(e,t){return e?new sp(e,t):Et},matchMedia:function(e){return new WM(e)},matchMediaRefresh:function(){return br.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sc()},addEventListener:function(e,t){var n=vo[e]||(vo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:yM,wrapYoyo:EM,distribute:Bd,random:kd,snap:zd,normalize:SM,getUnit:tn,clamp:gM,splitColor:Xd,toArray:$n,selector:vc,mapRange:Gd,pipe:xM,unitize:MM,interpolate:TM,shuffle:Fd},install:bd,effects:zl,ticker:Un,updateRoot:mn.updateRoot,plugins:Dn,globalTimeline:bt,core:{PropTween:Tn,globals:wd,Tween:Ut,Timeline:mn,Animation:xa,getCache:yr,_removeLinkedListItem:Ko,reverting:function(){return $t},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return qc=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return No[r]=Ut[r]});Un.add(mn.updateRoot);hs=No.to({},{duration:0});var XM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},YM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=XM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Wl=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Yt(s)&&(l={},En(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}YM(a,s)}}}},wn=No.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wl("roundProps",xc),Wl("modifiers"),Wl("snap",zd))||No;Ut.version=mn.version=wn.version="3.12.7";Td=1;$c()&&Cs();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var af,Gi,_s,au,gr,of,ou,qM=function(){return typeof window<"u"},Li={},fr=180/Math.PI,gs=Math.PI/180,is=Math.atan2,lf=1e8,lu=/([A-Z])/g,jM=/(left|right|width|margin|padding|x)/i,$M=/[\s,\(]\S/,ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ap=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},op=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},QM=function(e,t,n){return e.style[t]=n},eS=function(e,t,n){return e.style.setProperty(t,n)},tS=function(e,t,n){return e._gsap[t]=n},nS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},rS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},wt="transform",bn=wt+"Origin",sS=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Li&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ei(i,a)}):this.tfm[e]=o.x?o[e]:Ei(i,e),e===bn&&(this.tfm.zOrigin=o.zOrigin);else return ui.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(wt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},lp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},aS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ou(),(!s||!s.isStart)&&!n[wt]&&(lp(n),i.zOrigin&&n[bn]&&(n[bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cp=function(e,t){var n={target:e,props:[],revert:aS,save:sS};return e._gsap||wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},up,Ec=function(e,t){var n=Gi.createElementNS?Gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gi.createElement(e);return n&&n.style?n:Gi.createElement(e)},di=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(lu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ps(t)||t,1)||""},cf="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,t,n){var i=t||gr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(cf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?cf[o]:"")+e},Tc=function(){qM()&&window.document&&(af=window,Gi=af.document,_s=Gi.documentElement,gr=Ec("div")||{style:{}},Ec("div"),wt=Ps(wt),bn=wt+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",up=!!Ps("perspective"),ou=wn.core.reverting,au=1)},uf=function(e){var t=e.ownerSVGElement,n=Ec("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),_s.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),_s.removeChild(n),s},hf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hp=function(e){var t,n;try{t=e.getBBox()}catch{t=uf(e),n=1}return t&&(t.width||t.height)||n||(t=uf(e)),t&&!t.width&&!t.x&&!t.y?{x:+hf(e,["x","cx","x1"])||0,y:+hf(e,["y","cy","y1"])||0,width:0,height:0}:t},fp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hp(e))},Dr=function(e,t){if(t){var n=e.style,i;t in Li&&t!==bn&&(t=wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(lu,"-$1").toLowerCase())):n.removeAttribute(t)}},Vi=function(e,t,n,i,s,o){var a=new Tn(e._pt,t,n,0,1,o?op:ap);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},ff={deg:1,rad:1,turn:1},oS={grid:1,flex:1},er=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=gr.style,l=jM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||ff[i]||ff[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&fp(e),(f||o==="%")&&(Li[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Pt(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Gi||!_.appendChild)&&(_=Gi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Un.time&&!m.uncache)return Pt(s/m.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:Dr(e,t)}else(f||o==="%")&&!oS[di(_,"display")]&&(a.position=di(e,"position")),_===e&&(a.position="static"),_.appendChild(gr),g=gr[u],_.removeChild(gr),a.position="absolute";return l&&f&&(m=yr(_),m.time=Un.time,m.width=_[u]),Pt(d?g*s/h:g&&s?h/g*s:0)},Ei=function(e,t,n,i){var s;return au||Tc(),t in ui&&t!=="transform"&&(t=ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),Li[t]&&t!=="transform"?(s=Sa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Fo(di(e,bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Oo[t]&&Oo[t](e,t,n)||di(e,t)||Rd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?er(e,t,s,n)+n:s},lS=function(e,t,n,i){if(!n||n==="none"){var s=Ps(t,e,1),o=s&&di(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=di(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,ip),l=0,c=0,u,h,d,f,g,_,m,p,M,v,S,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=di(e,t)||i,_?e.style[t]=_:Dr(e,t)),u=[n,i],qd(u),n=u[0],i=u[1],d=n.match(us)||[],E=i.match(us)||[],E.length){for(;h=us.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),m.charAt(1)==="="&&(m=ms(f,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=us.lastIndex-v.length,v||(v=v||Bn.units[t]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(f=er(e,t,_,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?op:ap;return yd.test(i)&&(a.e=0),this._pt=a,a},df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=df[n]||n,t[1]=df[i]||i,t.join(" ")},uS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Li[a]&&(l=1,a=a==="transformOrigin"?bn:wt),Dr(n,a);l&&(Dr(n,wt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Sa(n,1),o.uncache=1,lp(i)))}},Oo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,n,0,0,uS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ma=[1,0,0,1,0,0],dp={},pp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pf=function(e){var t=di(e,wt);return pp(t)?Ma:t.substr(7).match(Sd).map(Pt)},cu=function(e,t){var n=e._gsap||yr(e),i=e.style,s=pf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ma:s):(s===Ma&&!e.offsetParent&&e!==_s&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,_s.appendChild(e)),s=pf(e),l?i.display=l:Dr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):_s.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bc=function(e,t,n,i,s,o){var a=e._gsap,l=s||cu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],v=t.split(" "),S=parseFloat(v[0])||0,E=parseFloat(v[1])||0,w,T,P,x;n?l!==Ma&&(T=f*m-g*_)&&(P=S*(m/T)+E*(-_/T)+(_*M-m*p)/T,x=S*(-g/T)+E*(f/T)-(f*M-g*p)/T,S=P,E=x):(w=hp(e),S=w.x+(~v[0].indexOf("%")?S/100*w.width:S),E=w.y+(~(v[1]||v[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&a.smooth?(p=S-c,M=E-u,a.xOffset=h+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[bn]="0px 0px",o&&(Vi(o,a,"xOrigin",c,S),Vi(o,a,"yOrigin",u,E),Vi(o,a,"xOffset",h,a.xOffset),Vi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},Sa=function(e,t){var n=e._gsap||new Zd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=di(e,bn)||"0",u,h,d,f,g,_,m,p,M,v,S,E,w,T,P,x,y,z,U,q,D,I,G,F,Z,$,R,te,re,j,J,fe;return u=h=d=_=m=p=M=v=S=0,f=g=1,n.svg=!!(e.getCTM&&fp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),T=cu(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),bc(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,T)),E=n.xOrigin||0,w=n.yOrigin||0,T!==Ma&&(z=T[0],U=T[1],q=T[2],D=T[3],u=I=T[4],h=G=T[5],T.length===6?(f=Math.sqrt(z*z+U*U),g=Math.sqrt(D*D+q*q),_=z||U?is(U,z)*fr:0,M=q||D?is(q,D)*fr+_:0,M&&(g*=Math.abs(Math.cos(M*gs))),n.svg&&(u-=E-(E*z+w*q),h-=w-(E*U+w*D))):(fe=T[6],j=T[7],R=T[8],te=T[9],re=T[10],J=T[11],u=T[12],h=T[13],d=T[14],P=is(fe,re),m=P*fr,P&&(x=Math.cos(-P),y=Math.sin(-P),F=I*x+R*y,Z=G*x+te*y,$=fe*x+re*y,R=I*-y+R*x,te=G*-y+te*x,re=fe*-y+re*x,J=j*-y+J*x,I=F,G=Z,fe=$),P=is(-q,re),p=P*fr,P&&(x=Math.cos(-P),y=Math.sin(-P),F=z*x-R*y,Z=U*x-te*y,$=q*x-re*y,J=D*y+J*x,z=F,U=Z,q=$),P=is(U,z),_=P*fr,P&&(x=Math.cos(P),y=Math.sin(P),F=z*x+U*y,Z=I*x+G*y,U=U*x-z*y,G=G*x-I*y,z=F,I=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Pt(Math.sqrt(z*z+U*U+q*q)),g=Pt(Math.sqrt(G*G+fe*fe)),P=is(I,G),M=Math.abs(P)>2e-4?P*fr:0,S=J?1/(J<0?-J:J):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pp(di(e,wt)),F&&e.setAttribute("transform",F))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Pt(f),n.scaleY=Pt(g),n.rotation=Pt(_)+a,n.rotationX=Pt(m)+a,n.rotationY=Pt(p)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[bn]=Fo(c)),n.xOffset=n.yOffset=0,n.force3D=Bn.force3D,n.renderTransform=n.svg?fS:up?mp:hS,n.uncache=0,n},Fo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xl=function(e,t,n){var i=tn(t);return Pt(parseFloat(t)+parseFloat(er(e,"x",n+"px",i)))+i},hS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mp(e,t)},cr="0deg",Gs="0px",ur=") ",mp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,S="",E=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==cr||u!==cr)){var w=parseFloat(u)*gs,T=Math.sin(w),P=Math.cos(w),x;w=parseFloat(h)*gs,x=Math.cos(w),o=Xl(M,o,T*x*-v),a=Xl(M,a,-Math.sin(w)*-v),l=Xl(M,l,P*x*-v+v)}m!==Gs&&(S+="perspective("+m+ur),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(E||o!==Gs||a!==Gs||l!==Gs)&&(S+=l!==Gs||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ur),c!==cr&&(S+="rotate("+c+ur),u!==cr&&(S+="rotateY("+u+ur),h!==cr&&(S+="rotateX("+h+ur),(d!==cr||f!==cr)&&(S+="skew("+d+", "+f+ur),(g!==1||_!==1)&&(S+="scale("+g+", "+_+ur),M.style[wt]=S||"translate(0, 0)"},fS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(o),S=parseFloat(a),E,w,T,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=gs,c*=gs,E=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=gs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),E*=x,w*=x)),E=Pt(E),w=Pt(w),T=Pt(T),P=Pt(P)):(E=h,P=d,w=T=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=er(f,"x",o,"px"),S=er(f,"y",a,"px")),(g||_||m||p)&&(v=Pt(v+g-(g*E+_*T)+m),S=Pt(S+_-(g*w+_*P)+p)),(i||s)&&(x=f.getBBox(),v=Pt(v+i/100*x.width),S=Pt(S+s/100*x.height)),x="matrix("+E+","+w+","+T+","+P+","+v+","+S+")",f.setAttribute("transform",x),M&&(f.style[wt]=x)},dS=function(e,t,n,i,s){var o=360,a=Yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*lf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*lf)%o-~~(c/o)*o)),e._pt=d=new Tn(e._pt,t,n,i,c,KM),d.e=u,d.u="deg",e._props.push(n),d},mf=function(e,t){for(var n in t)e[n]=t[n];return e},pS=function(e,t,n){var i=mf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[wt]=t,a=Sa(n,1),Dr(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],o[wt]=t,a=Sa(n,1),o[wt]=c);for(l in Li)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=tn(c),g=tn(u),h=f!==g?er(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Tn(e._pt,a,l,h,d-h,yc),e._pt.u=g||0,e._props.push(l));mf(a,i)};En("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Oo[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return Ei(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var _p={name:"css",register:Tc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,M,v,S,E,w,T,P;au||Tc(),this.styles=this.styles||cp(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Dn[_]&&Jd(_,t,n,i,e,s)))){if(f=typeof u,g=Oo[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ga(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ki.lastIndex=0,Ki.test(c)||(m=tn(c),p=tn(u)),p?m!==p&&(c=er(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Yt(c)&&~c.indexOf("random(")&&(c=ga(c)),tn(c+"")||c==="auto"||(c+=Bn.units[_]||tn(Ei(e,_))||""),(c+"").charAt(1)==="="&&(c=Ei(e,_))):c=Ei(e,_),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in ui&&(_==="autoAlpha"&&(d===1&&Ei(e,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,a.visibility),Vi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ui[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Li,v){if(this.styles.save(_),S||(E=e._gsap,E.renderTransform&&!t.parseTransform||Sa(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,S=this._pt=new Tn(this._pt,a,wt,0,1,E.renderTransform,E,0,-1),S.dep=1),_==="scale")this._pt=new Tn(this._pt,E,"scaleY",E.scaleY,(M?ms(E.scaleY,M+h):h)-E.scaleY||0,yc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(bn,0,a[bn]),u=cS(u),E.svg?bc(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Vi(this,E,"zOrigin",E.zOrigin,p),Vi(this,a,_,Fo(c),Fo(u)));continue}else if(_==="svgOrigin"){bc(e,u,1,w,0,this);continue}else if(_ in dp){dS(this,E,_,d,M?ms(d,M+u):u);continue}else if(_==="smoothOrigin"){Vi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){pS(this,u,e);continue}}else _ in a||(_=Ps(_)||_);if(v||(h||h===0)&&(d||d===0)&&!$M.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),p=tn(u)||(_ in Bn.units?Bn.units[_]:m),m!==p&&(d=er(e,_,c,p)),this._pt=new Tn(this._pt,v?E:a,_,d,(M?ms(d,M+h):h)-d,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?JM:yc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ZM);else if(_ in a)lS.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Zc(_,u);continue}v||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),o.push(_)}}T&&rp(this)},render:function(e,t){if(t.tween._time||!ou())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ei,aliases:ui,getSetter:function(e,t,n){var i=ui[t];return i&&i.indexOf(",")<0&&(t=i),t in Li&&t!==bn&&(e._gsap.x||Ei(e,"x"))?n&&of===n?t==="scale"?nS:tS:(of=n||{})&&(t==="scale"?iS:rS):e.style&&!jc(e.style[t])?QM:~t.indexOf("-")?eS:ru(e,t)},core:{_removeProperty:Dr,_getMatrix:cu}};wn.utils.checkPrefix=Ps;wn.core.getStyleSaver=cp;(function(r,e,t,n){var i=En(r+","+e+","+t,function(s){Li[s]=1});En(e,function(s){Bn.units[s]="deg",dp[s]=1}),ui[i[13]]=r+","+e,En(n,function(s){var o=s.split(":");ui[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Bn.units[r]="px"});wn.registerPlugin(_p);var dt=wn.registerPlugin(_p)||wn;dt.core.Tween;function mS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function _S(r,e,t){return e&&mS(r.prototype,e),r}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,xo,Nn,Wi,Xi,vs,gp,dr,ra,vp,Ai,ti,xp,Mp=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},Sp=1,fs=[],st=[],pi=[],sa=Date.now,wc=function(e,t){return t},gS=function(){var e=ra.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,pi),st=n,pi=i,wc=function(o,a){return t[o](a)}},Zi=function(e,t){return~pi.indexOf(e)&&pi[pi.indexOf(e)+1][t]},aa=function(e){return!!~vp.indexOf(e)},ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},to="scrollLeft",no="scrollTop",Ac=function(){return Ai&&Ai.isPressed||st.cache++},Bo=function(e,t){var n=function i(s){if(s||s===0){Sp&&(Nn.history.scrollRestoration="manual");var o=Ai&&Ai.isPressed;s=i.v=Math.round(s)||(Ai&&Ai.iOS?1:0),e(s),i.cacheID=st.cache,o&&wc("ss",s)}else(t||st.cache!==i.cacheID||wc("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},_n={s:to,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bo(function(r){return arguments.length?Nn.scrollTo(r,zt.sc()):Nn.pageXOffset||Wi[to]||Xi[to]||vs[to]||0})},zt={s:no,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Bo(function(r){return arguments.length?Nn.scrollTo(_n.sc(),r):Nn.pageYOffset||Wi[no]||Xi[no]||vs[no]||0})},vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tr=function(e,t){var n=t.s,i=t.sc;aa(e)&&(e=Wi.scrollingElement||Xi);var s=st.indexOf(e),o=i===zt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||ln(e,"scroll",Ac);var a=st[s+o],l=a||(st[s+o]=Bo(Zi(e,n),!0)||(aa(e)?i:Bo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},Rc=function(e,t,n){var i=e,s=e,o=sa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=sa();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=sa();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},Vs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_f=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},yp=function(){ra=jt.core.globals().ScrollTrigger,ra&&ra.core&&gS()},Ep=function(e){return jt=e||Mp(),!xo&&jt&&typeof document<"u"&&document.body&&(Nn=window,Wi=document,Xi=Wi.documentElement,vs=Wi.body,vp=[Nn,Wi,Xi,vs],jt.utils.clamp,xp=jt.core.context||function(){},dr="onpointerenter"in vs?"pointer":"mouse",gp=Lt.isTouch=Nn.matchMedia&&Nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=Lt.eventTypes=("ontouchstart"in Xi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sp=0},500),yp(),xo=1),xo};_n.op=zt;st.cache=0;var Lt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){xo||Ep(jt)||console.warn("Please gsap.registerPlugin(Observer)"),ra||yp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,v=n.onPress,S=n.onRelease,E=n.onRight,w=n.onLeft,T=n.onUp,P=n.onDown,x=n.onChangeX,y=n.onChangeY,z=n.onChange,U=n.onToggleX,q=n.onToggleY,D=n.onHover,I=n.onHoverEnd,G=n.onMove,F=n.ignoreCheck,Z=n.isNormalizer,$=n.onGestureStart,R=n.onGestureEnd,te=n.onWheel,re=n.onEnable,j=n.onDisable,J=n.onClick,fe=n.scrollSpeed,ve=n.capture,ge=n.allowClicks,Le=n.lockAxis,we=n.onLockAxis;this.target=a=vn(a)||Xi,this.vars=n,f&&(f=jt.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,fe=fe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Nn.getComputedStyle(vs).lineHeight)||22);var Ne,Ue,H,We,_e,Oe,Re,V=this,Fe=0,Be=0,Ze=n.passive||!u&&n.passive!==!1,Je=tr(a,_n),ct=tr(a,zt),C=Je(),b=ct(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ti[0]==="pointerdown",ae=aa(a),Q=a.ownerDocument||Wi,se=[0,0,0],xe=[0,0,0],le=0,pe=function(){return le=sa()},L=function(Se,Ie){return(V.event=Se)&&f&&~f.indexOf(Se.target)||Ie&&k&&Se.pointerType!=="touch"||F&&F(Se,Ie)},ce=function(){V._vx.reset(),V._vy.reset(),Ue.pause(),h&&h(V)},ee=function(){var Se=V.deltaX=_f(se),Ie=V.deltaY=_f(xe),he=Math.abs(Se)>=i,He=Math.abs(Ie)>=i;z&&(he||He)&&z(V,Se,Ie,se,xe),he&&(E&&V.deltaX>0&&E(V),w&&V.deltaX<0&&w(V),x&&x(V),U&&V.deltaX<0!=Fe<0&&U(V),Fe=V.deltaX,se[0]=se[1]=se[2]=0),He&&(P&&V.deltaY>0&&P(V),T&&V.deltaY<0&&T(V),y&&y(V),q&&V.deltaY<0!=Be<0&&q(V),Be=V.deltaY,xe[0]=xe[1]=xe[2]=0),(We||H)&&(G&&G(V),H&&(m&&H===1&&m(V),M&&M(V),H=0),We=!1),Oe&&!(Oe=!1)&&we&&we(V),_e&&(te(V),_e=!1),Ne=0},ze=function(Se,Ie,he){se[he]+=Se,xe[he]+=Ie,V._vx.update(Se),V._vy.update(Ie),c?Ne||(Ne=requestAnimationFrame(ee)):ee()},Ee=function(Se,Ie){Le&&!Re&&(V.axis=Re=Math.abs(Se)>Math.abs(Ie)?"x":"y",Oe=!0),Re!=="y"&&(se[2]+=Se,V._vx.update(Se,!0)),Re!=="x"&&(xe[2]+=Ie,V._vy.update(Ie,!0)),c?Ne||(Ne=requestAnimationFrame(ee)):ee()},Ce=function(Se){if(!L(Se,1)){Se=Vs(Se,u);var Ie=Se.clientX,he=Se.clientY,He=Ie-V.x,ke=he-V.y,qe=V.isDragging;V.x=Ie,V.y=he,(qe||(He||ke)&&(Math.abs(V.startX-Ie)>=s||Math.abs(V.startY-he)>=s))&&(H=qe?2:1,qe||(V.isDragging=!0),Ee(He,ke))}},Me=V.onPress=function(Pe){L(Pe,1)||Pe&&Pe.button||(V.axis=Re=null,Ue.pause(),V.isPressed=!0,Pe=Vs(Pe),Fe=Be=0,V.startX=V.x=Pe.clientX,V.startY=V.y=Pe.clientY,V._vx.reset(),V._vy.reset(),ln(Z?a:Q,ti[1],Ce,Ze,!0),V.deltaX=V.deltaY=0,v&&v(V))},ie=V.onRelease=function(Pe){if(!L(Pe,1)){on(Z?a:Q,ti[1],Ce,!0);var Se=!isNaN(V.y-V.startY),Ie=V.isDragging,he=Ie&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),He=Vs(Pe);!he&&Se&&(V._vx.reset(),V._vy.reset(),u&&ge&&jt.delayedCall(.08,function(){if(sa()-le>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(Q.createEvent){var ke=Q.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,Nn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(ke)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&Ie&&!Z&&Ue.restart(!0),H&&ee(),p&&Ie&&p(V),S&&S(V,he)}},Xe=function(Se){return Se.touches&&Se.touches.length>1&&(V.isGesturing=!0)&&$(Se,V.isDragging)},N=function(){return(V.isGesturing=!1)||R(V)},ue=function(Se){if(!L(Se)){var Ie=Je(),he=ct();ze((Ie-C)*fe,(he-b)*fe,1),C=Ie,b=he,h&&Ue.restart(!0)}},ne=function(Se){if(!L(Se)){Se=Vs(Se,u),te&&(_e=!0);var Ie=(Se.deltaMode===1?l:Se.deltaMode===2?Nn.innerHeight:1)*g;ze(Se.deltaX*Ie,Se.deltaY*Ie,0),h&&!Z&&Ue.restart(!0)}},K=function(Se){if(!L(Se)){var Ie=Se.clientX,he=Se.clientY,He=Ie-V.x,ke=he-V.y;V.x=Ie,V.y=he,We=!0,h&&Ue.restart(!0),(He||ke)&&Ee(He,ke)}},oe=function(Se){V.event=Se,D(V)},Te=function(Se){V.event=Se,I(V)},$e=function(Se){return L(Se)||Vs(Se,u)&&J(V)};Ue=V._dc=jt.delayedCall(d||.25,ce).pause(),V.deltaX=V.deltaY=0,V._vx=Rc(0,50,!0),V._vy=Rc(0,50,!0),V.scrollX=Je,V.scrollY=ct,V.isDragging=V.isGesturing=V.isPressed=!1,xp(this),V.enable=function(Pe){return V.isEnabled||(ln(ae?Q:a,"scroll",Ac),o.indexOf("scroll")>=0&&ln(ae?Q:a,"scroll",ue,Ze,ve),o.indexOf("wheel")>=0&&ln(a,"wheel",ne,Ze,ve),(o.indexOf("touch")>=0&&gp||o.indexOf("pointer")>=0)&&(ln(a,ti[0],Me,Ze,ve),ln(Q,ti[2],ie),ln(Q,ti[3],ie),ge&&ln(a,"click",pe,!0,!0),J&&ln(a,"click",$e),$&&ln(Q,"gesturestart",Xe),R&&ln(Q,"gestureend",N),D&&ln(a,dr+"enter",oe),I&&ln(a,dr+"leave",Te),G&&ln(a,dr+"move",K)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=We=H=!1,V._vx.reset(),V._vy.reset(),C=Je(),b=ct(),Pe&&Pe.type&&Me(Pe),re&&re(V)),V},V.disable=function(){V.isEnabled&&(fs.filter(function(Pe){return Pe!==V&&aa(Pe.target)}).length||on(ae?Q:a,"scroll",Ac),V.isPressed&&(V._vx.reset(),V._vy.reset(),on(Z?a:Q,ti[1],Ce,!0)),on(ae?Q:a,"scroll",ue,ve),on(a,"wheel",ne,ve),on(a,ti[0],Me,ve),on(Q,ti[2],ie),on(Q,ti[3],ie),on(a,"click",pe,!0),on(a,"click",$e),on(Q,"gesturestart",Xe),on(Q,"gestureend",N),on(a,dr+"enter",oe),on(a,dr+"leave",Te),on(a,dr+"move",K),V.isEnabled=V.isPressed=V.isDragging=!1,j&&j(V))},V.kill=V.revert=function(){V.disable();var Pe=fs.indexOf(V);Pe>=0&&fs.splice(Pe,1),Ai===V&&(Ai=0)},fs.push(V),Z&&aa(a)&&(Ai=V),V.enable(_)},_S(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Lt.version="3.12.7";Lt.create=function(r){return new Lt(r)};Lt.register=Ep;Lt.getAll=function(){return fs.slice()};Lt.getById=function(r){return fs.filter(function(e){return e.vars.id===r})[0]};Mp()&&jt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ye,as,it,vt,In,lt,uu,zo,ya,oa,$s,io,Qt,Qo,Cc,hn,gf,vf,os,Tp,Yl,bp,un,Pc,wp,Ap,Fi,Lc,hu,xs,fu,ko,Dc,ql,ro=1,en=Date.now,jl=en(),Zn=0,Ks=0,xf=function(e,t,n){var i=Ln(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mf=function(e,t){return t&&(!Ln(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},vS=function r(){return Ks&&requestAnimationFrame(r)},Sf=function(){return Qo=1},yf=function(){return Qo=0},oi=function(e){return e},Zs=function(e){return Math.round(e*1e5)/1e5||0},Rp=function(){return typeof window<"u"},Cp=function(){return ye||Rp()&&(ye=window.gsap)&&ye.registerPlugin&&ye},Ir=function(e){return!!~uu.indexOf(e)},Pp=function(e){return(e==="Height"?fu:it["inner"+e])||In["client"+e]||lt["client"+e]},Lp=function(e){return Zi(e,"getBoundingClientRect")||(Ir(e)?function(){return To.width=it.innerWidth,To.height=fu,To}:function(){return bi(e)})},xS=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Zi(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Pp(s):e["client"+s])||0}},MS=function(e,t){return!t||~pi.indexOf(e)?Lp(e):function(){return To}},hi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Zi(e,n))?o()-Lp(e)()[s]:Ir(e)?(In[n]||lt[n])-Pp(i):e[n]-e["offset"+i])},so=function(e,t){for(var n=0;n<os.length;n+=3)(!t||~t.indexOf(os[n+1]))&&e(os[n],os[n+1],os[n+2])},Ln=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},Js=function(e){return typeof e=="number"},pr=function(e){return typeof e=="object"},Ws=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},$l=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},rs=Math.abs,Dp="left",Ip="top",du="right",pu="bottom",wr="width",Ar="height",la="Right",ca="Left",ua="Top",ha="Bottom",It="padding",Yn="margin",Ls="Width",mu="Height",Bt="px",qn=function(e){return it.getComputedStyle(e)},SS=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ef=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bi=function(e,t){var n=t&&qn(e)[Cc]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ho=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Up=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},yS=function(e){return function(t){return ye.utils.snap(Up(e),t)}},_u=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},ES=function(e){return function(t,n){return _u(Up(e))(t,n.direction)}},ao=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Wt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Vt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},oo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Tf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},lo={toggleActions:"play",anticipatePin:0},Go={top:0,left:0,center:.5,bottom:1,right:1},Mo=function(e,t){if(Ln(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Go?Go[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},co=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=vt.createElement("div"),_=Ir(n)||Zi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?lt:n,M=e.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===zt?du:pu)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],So(g,0,i,M),g},So=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ls]=1,s["border"+a+Ls]=0,s[n.p]=t+"px",ye.set(e,s)},tt=[],Ic={},Ea,bf=function(){return en()-Zn>34&&(Ea||(Ea=requestAnimationFrame(Ri)))},ss=function(){(!un||!un.isPressed||un.startX>lt.clientWidth)&&(st.cache++,un?Ea||(Ea=requestAnimationFrame(Ri)):Ri(),Zn||Nr("scrollStart"),Zn=en())},Kl=function(){Ap=it.innerWidth,wp=it.innerHeight},Qs=function(e){st.cache++,(e===!0||!Qt&&!bp&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!Pc||Ap!==it.innerWidth||Math.abs(it.innerHeight-wp)>it.innerHeight*.25))&&zo.restart(!0)},Ur={},TS=[],Np=function r(){return Vt(Qe,"scrollEnd",r)||vr(!0)},Nr=function(e){return Ur[e]&&Ur[e].map(function(t){return t()})||TS},Pn=[],Op=function(e){for(var t=0;t<Pn.length;t+=5)(!e||Pn[t+4]&&Pn[t+4].query===e)&&(Pn[t].style.cssText=Pn[t+1],Pn[t].getBBox&&Pn[t].setAttribute("transform",Pn[t+2]||""),Pn[t+3].uncache=1)},gu=function(e,t){var n;for(hn=0;hn<tt.length;hn++)n=tt[hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ko=!0,t&&Op(t),t||Nr("revert")},Fp=function(e,t){st.cache++,(t||!fn)&&st.forEach(function(n){return nn(n)&&n.cacheID++&&(n.rec=0)}),Ln(e)&&(it.history.scrollRestoration=hu=e)},fn,Rr=0,wf,bS=function(){if(wf!==Rr){var e=wf=Rr;requestAnimationFrame(function(){return e===Rr&&vr(!0)})}},Bp=function(){lt.appendChild(xs),fu=!un&&xs.offsetHeight||it.innerHeight,lt.removeChild(xs)},Af=function(e){return ya(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vr=function(e,t){if(In=vt.documentElement,lt=vt.body,uu=[it,vt,In,lt],Zn&&!e&&!ko){Wt(Qe,"scrollEnd",Np);return}Bp(),fn=Qe.isRefreshing=!0,st.forEach(function(i){return nn(i)&&++i.cacheID&&(i.rec=i())});var n=Nr("refreshInit");Tp&&Qe.sort(),t||gu(),st.forEach(function(i){nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),ko=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Dc=1,Af(!0),tt.forEach(function(i){var s=hi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Af(!1),Dc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fp(hu,1),zo.pause(),Rr++,fn=2,Ri(2),tt.forEach(function(i){return nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),fn=Qe.isRefreshing=!1,Nr("refresh")},Uc=0,yo=1,fa,Ri=function(e){if(e===2||!fn&&!ko){Qe.isUpdating=!0,fa&&fa.update(0);var t=tt.length,n=en(),i=n-jl>=50,s=t&&tt[0].scroll();if(yo=Uc>s?-1:1,fn||(Uc=s),i&&(Zn&&!Qo&&n-Zn>200&&(Zn=0,Nr("scrollEnd")),$s=jl,jl=n),yo<0){for(hn=t;hn-- >0;)tt[hn]&&tt[hn].update(0,i);yo=1}else for(hn=0;hn<t;hn++)tt[hn]&&tt[hn].update(0,i);Qe.isUpdating=!1}Ea=0},Nc=[Dp,Ip,pu,du,Yn+ha,Yn+la,Yn+ua,Yn+ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Eo=Nc.concat([wr,Ar,"boxSizing","max"+Ls,"max"+mu,"position",Yn,It,It+ua,It+la,It+ha,It+ca]),wS=function(e,t,n){Ms(n);var i=e._gsap;if(i.spacerIsNative)Ms(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Zl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Nc.length,o=t.style,a=e.style,l;s--;)l=Nc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[pu]=a[du]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wr]=Ho(e,_n)+Bt,o[Ar]=Ho(e,zt)+Bt,o[It]=a[Yn]=a[Ip]=a[Dp]="0",Ms(i),a[wr]=a["max"+Ls]=n[wr],a[Ar]=a["max"+mu]=n[Ar],a[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},AS=/([A-Z])/g,Ms=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(AS,"-$1").toLowerCase())}},uo=function(e){for(var t=Eo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Eo[s],n[Eo[s]]);return i.t=e,i},RS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},To={left:0,top:0},Rf=function(e,t,n,i,s,o,a,l,c,u,h,d,f,g){nn(e)&&(e=e(l)),Ln(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Mo("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(e)||(e=+e),Js(e))f&&(e=ye.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&So(a,n,i,!0);else{nn(t)&&(t=t(l));var v=(e||"0").split(" "),S,E,w,T;M=vn(t,l)||lt,S=bi(M)||{},(!S||!S.left&&!S.top)&&qn(M).display==="none"&&(T=M.style.display,M.style.display="block",S=bi(M),T?M.style.display=T:M.style.removeProperty("display")),E=Mo(v[0],S[i.d]),w=Mo(v[1]||"0",n),e=S[i.p]-c[i.p]-u+E+s-w,a&&So(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+n,x=o._isStart;m="scroll"+i.d2,So(o,P,i,x&&P>20||!x&&(h?Math.max(lt[m],In[m]):o.parentNode[m])<=P+1),h&&(c=bi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Bt))}return f&&M&&(m=bi(M),f.seek(d),p=bi(M),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},CS=/(webkit|moz|length|cssText|inset)/i,Cf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===lt){e._stOrig=s.cssText,a=qn(e);for(o in a)!+o&&!CS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},zp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ho=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},Pf=function(e,t){var n=tr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=zp(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Ri()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=ye.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Wt(e,"wheel",n.wheelHandler),Qe.isTouch&&Wt(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){as||r.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ks){this.update=this.refresh=this.kill=oi;return}n=Ef(Ln(n)||Js(n)||n.nodeType?{trigger:n}:n,lo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,E=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,P=s.fastScrollEnd,x=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:zt,z=!h&&h!==0,U=vn(n.scroller||it),q=ye.core.getCache(U),D=Ir(U),I=("pinType"in n?n.pinType:Zi(U,"pinType")||D&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=z&&n.toggleActions.split(" "),Z="markers"in n?n.markers:lo.markers,$=D?0:parseFloat(qn(U)["border"+y.p2+Ls])||0,R=this,te=n.onRefreshInit&&function(){return n.onRefreshInit(R)},re=xS(U,D,y),j=MS(U,D),J=0,fe=0,ve=0,ge=tr(U,y),Le,we,Ne,Ue,H,We,_e,Oe,Re,V,Fe,Be,Ze,Je,ct,C,b,k,ae,Q,se,xe,le,pe,L,ce,ee,ze,Ee,Ce,Me,ie,Xe,N,ue,ne,K,oe,Te;if(R._startClamp=R._endClamp=!1,R._dir=y,m*=45,R.scroller=U,R.scroll=T?T.time.bind(T):ge,Ue=ge(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Tp=1,n.refreshPriority===-9999&&(fa=R)),q.tweenScroll=q.tweenScroll||{top:Pf(U,zt),left:Pf(U,_n)},R.tweenTo=Le=q.tweenScroll[y.p],R.scrubDuration=function(he){Xe=Js(he)&&he,Xe?ie?ie.duration(he):ie=ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return p&&p(R)}}):(ie&&ie.progress(1).kill(),ie=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Ce=0,l||(l=i.vars.id)),S&&((!pr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in lt.style&&ye.set(D?[lt,In]:U,{scrollBehavior:"auto"}),st.forEach(function(he){return nn(he)&&he.target===(D?vt.scrollingElement||In:U)&&(he.smooth=!1)}),Ne=nn(S.snapTo)?S.snapTo:S.snapTo==="labels"?yS(i):S.snapTo==="labelsDirectional"?ES(i):S.directional!==!1?function(he,He){return _u(S.snapTo)(he,en()-fe<500?0:He.direction)}:ye.utils.snap(S.snapTo),N=S.duration||{min:.1,max:2},N=pr(N)?oa(N.min,N.max):oa(N,N),ue=ye.delayedCall(S.delay||Xe/2||.1,function(){var he=ge(),He=en()-fe<500,ke=Le.tween;if((He||Math.abs(R.getVelocity())<10)&&!ke&&!Qo&&J!==he){var qe=(he-We)/Je,Tt=i&&!z?i.totalProgress():qe,nt=He?0:(Tt-Me)/(en()-$s)*1e3||0,_t=ye.utils.clamp(-qe,1-qe,rs(nt/2)*nt/.185),Ot=qe+(S.inertia===!1?0:_t),xt,gt,ut=S,An=ut.onStart,A=ut.onInterrupt,B=ut.onComplete;if(xt=Ne(Ot,R),Js(xt)||(xt=Ot),gt=Math.max(0,Math.round(We+xt*Je)),he<=_e&&he>=We&&gt!==he){if(ke&&!ke._initted&&ke.data<=rs(gt-he))return;S.inertia===!1&&(_t=xt-qe),Le(gt,{duration:N(rs(Math.max(rs(Ot-Tt),rs(xt-Tt))*.185/nt/.05||0)),ease:S.ease||"power3",data:rs(gt-he),onInterrupt:function(){return ue.restart(!0)&&A&&A(R)},onComplete:function(){R.update(),J=ge(),i&&!z&&(ie?ie.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),Ce=Me=i&&!z?i.totalProgress():R.progress,M&&M(R),B&&B(R)}},he,_t*Je,gt-he-_t*Je),An&&An(R,Le.tween)}}else R.isActive&&J!==he&&ue.restart(!0)}).pause()),l&&(Ic[l]=R),d=R.trigger=vn(d||f!==!0&&f),Te=d&&d._gsap&&d._gsap.stRevert,Te&&(Te=Te(R)),f=f===!0?d:vn(f),Ln(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Yn||(g=!g&&f.parentNode&&f.parentNode.style&&qn(f.parentNode).display==="flex"?!1:It),R.pin=f,we=ye.core.getCache(f),we.spacer?ct=we.pinState:(w&&(w=vn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),we.spacerIsNative=!!w,w&&(we.spacerState=uo(w))),we.spacer=k=w||vt.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),we.pinState=ct=uo(f)),n.force3D!==!1&&ye.set(f,{force3D:!0}),R.spacer=k=we.spacer,Ee=qn(f),pe=Ee[g+y.os2],Q=ye.getProperty(f),se=ye.quickSetter(f,y.a,Bt),Zl(f,k,Ee),b=uo(f)),Z){Be=pr(Z)?Ef(Z,Tf):Tf,V=co("scroller-start",l,U,y,Be,0),Fe=co("scroller-end",l,U,y,Be,0,V),ae=V["offset"+y.op.d2];var $e=vn(Zi(U,"content")||U);Oe=this.markerStart=co("start",l,$e,y,Be,ae,0,T),Re=this.markerEnd=co("end",l,$e,y,Be,ae,0,T),T&&(oe=ye.quickSetter([Oe,Re],y.a,Bt)),!I&&!(pi.length&&Zi(U,"fixedMarkers")===!0)&&(SS(D?lt:U),ye.set([V,Fe],{force3D:!0}),ce=ye.quickSetter(V,y.a,Bt),ze=ye.quickSetter(Fe,y.a,Bt))}if(T){var Pe=T.vars.onUpdate,Se=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){R.update(0,0,1),Pe&&Pe.apply(T,Se||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(he,He){if(!He)return R.kill(!0);var ke=he!==!1||!R.enabled,qe=Qt;ke!==R.isReverted&&(ke&&(ne=Math.max(ge(),R.scroll.rec||0),ve=R.progress,K=i&&i.progress()),Oe&&[Oe,Re,V,Fe].forEach(function(Tt){return Tt.style.display=ke?"none":"block"}),ke&&(Qt=R,R.update(ke)),f&&(!E||!R.isActive)&&(ke?wS(f,k,ct):Zl(f,k,qn(f),L)),ke||R.update(ke),Qt=qe,R.isReverted=ke)},R.refresh=function(he,He,ke,qe){if(!((Qt||!R.enabled)&&!He)){if(f&&he&&Zn){Wt(r,"scrollEnd",Np);return}!fn&&te&&te(R),Qt=R,Le.tween&&!ke&&(Le.tween.kill(),Le.tween=0),ie&&ie.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Tt=re(),nt=j(),_t=T?T.duration():hi(U,y),Ot=Je<=.01,xt=0,gt=qe||0,ut=pr(ke)?ke.end:n.end,An=n.endTrigger||d,A=pr(ke)?ke.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),B=R.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,R),Y=d&&Math.max(0,tt.indexOf(R))||0,X=Y,W,de,be,Ge,Ae,De,Ve,je,St,Ft,ht,an,ft;for(Z&&pr(ke)&&(an=ye.getProperty(V,y.p),ft=ye.getProperty(Fe,y.p));X-- >0;)De=tt[X],De.end||De.refresh(0,1)||(Qt=R),Ve=De.pin,Ve&&(Ve===d||Ve===f||Ve===B)&&!De.isReverted&&(Ft||(Ft=[]),Ft.unshift(De),De.revert(!0,!0)),De!==tt[X]&&(Y--,X--);for(nn(A)&&(A=A(R)),A=xf(A,"start",R),We=Rf(A,d,Tt,y,ge(),Oe,V,R,nt,$,I,_t,T,R._startClamp&&"_startClamp")||(f?-.001:0),nn(ut)&&(ut=ut(R)),Ln(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(Ln(A)?A.split(" ")[0]:"")+ut:(xt=Mo(ut.substr(2),Tt),ut=Ln(A)?A:(T?ye.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,We):We)+xt,An=d)),ut=xf(ut,"end",R),_e=Math.max(We,Rf(ut||(An?"100% 0":_t),An,Tt,y,ge()+xt,Re,Fe,R,nt,$,I,_t,T,R._endClamp&&"_endClamp"))||-.001,xt=0,X=Y;X--;)De=tt[X],Ve=De.pin,Ve&&De.start-De._pinPush<=We&&!T&&De.end>0&&(W=De.end-(R._startClamp?Math.max(0,De.start):De.start),(Ve===d&&De.start-De._pinPush<We||Ve===B)&&isNaN(A)&&(xt+=W*(1-De.progress)),Ve===f&&(gt+=W));if(We+=xt,_e+=xt,R._startClamp&&(R._startClamp+=xt),R._endClamp&&!fn&&(R._endClamp=_e||-.001,_e=Math.min(_e,hi(U,y))),Je=_e-We||(We-=.01)&&.001,Ot&&(ve=ye.utils.clamp(0,1,ye.utils.normalize(We,_e,ne))),R._pinPush=gt,Oe&&xt&&(W={},W[y.a]="+="+xt,B&&(W[y.p]="-="+ge()),ye.set([Oe,Re],W)),f&&!(Dc&&R.end>=hi(U,y)))W=qn(f),Ge=y===zt,be=ge(),xe=parseFloat(Q(y.a))+gt,!_t&&_e>1&&(ht=(D?vt.scrollingElement||In:U).style,ht={style:ht,value:ht["overflow"+y.a.toUpperCase()]},D&&qn(lt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+y.a.toUpperCase()]="scroll")),Zl(f,k,W),b=uo(f),de=bi(f,!0),je=I&&tr(U,Ge?_n:zt)(),g?(L=[g+y.os2,Je+gt+Bt],L.t=k,X=g===It?Ho(f,y)+Je+gt:0,X&&(L.push(y.d,X+Bt),k.style.flexBasis!=="auto"&&(k.style.flexBasis=X+Bt)),Ms(L),B&&tt.forEach(function(Ke){Ke.pin===B&&Ke.vars.pinSpacing!==!1&&(Ke._subPinOffset=!0)}),I&&ge(ne)):(X=Ho(f,y),X&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=X+Bt)),I&&(Ae={top:de.top+(Ge?be-We:je)+Bt,left:de.left+(Ge?je:be-We)+Bt,boxSizing:"border-box",position:"fixed"},Ae[wr]=Ae["max"+Ls]=Math.ceil(de.width)+Bt,Ae[Ar]=Ae["max"+mu]=Math.ceil(de.height)+Bt,Ae[Yn]=Ae[Yn+ua]=Ae[Yn+la]=Ae[Yn+ha]=Ae[Yn+ca]="0",Ae[It]=W[It],Ae[It+ua]=W[It+ua],Ae[It+la]=W[It+la],Ae[It+ha]=W[It+ha],Ae[It+ca]=W[It+ca],C=RS(ct,Ae,E),fn&&ge(0)),i?(St=i._initted,Yl(1),i.render(i.duration(),!0,!0),le=Q(y.a)-xe+Je+gt,ee=Math.abs(Je-le)>1,I&&ee&&C.splice(C.length-2,2),i.render(0,!0,!0),St||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yl(0)):le=Je,ht&&(ht.value?ht.style["overflow"+y.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+y.a));else if(d&&ge()&&!T)for(de=d.parentNode;de&&de!==lt;)de._pinOffset&&(We-=de._pinOffset,_e-=de._pinOffset),de=de.parentNode;Ft&&Ft.forEach(function(Ke){return Ke.revert(!1,!0)}),R.start=We,R.end=_e,Ue=H=fn?ne:ge(),!T&&!fn&&(Ue<ne&&ge(ne),R.scroll.rec=0),R.revert(!1,!0),fe=en(),ue&&(J=-1,ue.restart(!0)),Qt=0,i&&z&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Ot||ve!==R.progress||T||_||i&&!i._initted)&&(i&&!z&&i.totalProgress(T&&We<-.001&&!ve?ye.utils.normalize(We,_e,0):ve,!0),R.progress=Ot||(Ue-We)/Je===ve?0:ve),f&&g&&(k._pinOffset=Math.round(R.progress*le)),ie&&ie.invalidate(),isNaN(an)||(an-=ye.getProperty(V,y.p),ft-=ye.getProperty(Fe,y.p),ho(V,y,an),ho(Oe,y,an-(qe||0)),ho(Fe,y,ft),ho(Re,y,ft-(qe||0))),Ot&&!fn&&R.update(),u&&!fn&&!Ze&&(Ze=!0,u(R),Ze=!1)}},R.getVelocity=function(){return(ge()-H)/(en()-$s)*1e3||0},R.endAnimation=function(){Ws(R.callbackAnimation),i&&(ie?ie.progress(1):i.paused()?z||Ws(i,R.direction<0,1):Ws(i,i.reversed()))},R.labelToScroll=function(he){return i&&i.labels&&(We||R.refresh()||We)+i.labels[he]/i.duration()*Je||0},R.getTrailing=function(he){var He=tt.indexOf(R),ke=R.direction>0?tt.slice(0,He).reverse():tt.slice(He+1);return(Ln(he)?ke.filter(function(qe){return qe.vars.preventOverlaps===he}):ke).filter(function(qe){return R.direction>0?qe.end<=We:qe.start>=_e})},R.update=function(he,He,ke){if(!(T&&!ke&&!he)){var qe=fn===!0?ne:R.scroll(),Tt=he?0:(qe-We)/Je,nt=Tt<0?0:Tt>1?1:Tt||0,_t=R.progress,Ot,xt,gt,ut,An,A,B,Y;if(He&&(H=Ue,Ue=T?ge():qe,S&&(Me=Ce,Ce=i&&!z?i.totalProgress():nt)),m&&f&&!Qt&&!ro&&Zn&&(!nt&&We<qe+(qe-H)/(en()-$s)*m?nt=1e-4:nt===1&&_e>qe+(qe-H)/(en()-$s)*m&&(nt=.9999)),nt!==_t&&R.enabled){if(Ot=R.isActive=!!nt&&nt<1,xt=!!_t&&_t<1,A=Ot!==xt,An=A||!!nt!=!!_t,R.direction=nt>_t?1:-1,R.progress=nt,An&&!Qt&&(gt=nt&&!_t?0:nt===1?1:_t===1?2:3,z&&(ut=!A&&F[gt+1]!=="none"&&F[gt+1]||F[gt],Y=i&&(ut==="complete"||ut==="reset"||ut in i))),x&&(A||Y)&&(Y||h||!i)&&(nn(x)?x(R):R.getTrailing(x).forEach(function(be){return be.endAnimation()})),z||(ie&&!Qt&&!ro?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",nt,i._tTime/i._tDur):(ie.vars.totalProgress=nt,ie.invalidate().restart())):i&&i.totalProgress(nt,!!(Qt&&(fe||he)))),f){if(he&&g&&(k.style[g+y.os2]=pe),!I)se(Zs(xe+le*nt));else if(An){if(B=!he&&nt>_t&&_e+1>qe&&qe+1>=hi(U,y),E)if(!he&&(Ot||B)){var X=bi(f,!0),W=qe-We;Cf(f,lt,X.top+(y===zt?W:0)+Bt,X.left+(y===zt?0:W)+Bt)}else Cf(f,k);Ms(Ot||B?C:b),ee&&nt<1&&Ot||se(xe+(nt===1&&!B?le:0))}}S&&!Le.tween&&!Qt&&!ro&&ue.restart(!0),a&&(A||v&&nt&&(nt<1||!ql))&&ya(a.targets).forEach(function(be){return be.classList[Ot||v?"add":"remove"](a.className)}),o&&!z&&!he&&o(R),An&&!Qt?(z&&(Y&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(R)),(A||!ql)&&(c&&A&&$l(R,c),G[gt]&&$l(R,G[gt]),v&&(nt===1?R.kill(!1,1):G[gt]=0),A||(gt=nt===1?1:3,G[gt]&&$l(R,G[gt]))),P&&!Ot&&Math.abs(R.getVelocity())>(Js(P)?P:2500)&&(Ws(R.callbackAnimation),ie?ie.progress(1):Ws(i,ut==="reverse"?1:!nt,1))):z&&o&&!Qt&&o(R)}if(ze){var de=T?qe/T.duration()*(T._caScrollDist||0):qe;ce(de+(V._isFlipped?1:0)),ze(de)}oe&&oe(-qe/T.duration()*(T._caScrollDist||0))}},R.enable=function(he,He){R.enabled||(R.enabled=!0,Wt(U,"resize",Qs),D||Wt(U,"scroll",ss),te&&Wt(r,"refreshInit",te),he!==!1&&(R.progress=ve=0,Ue=H=J=ge()),He!==!1&&R.refresh())},R.getTween=function(he){return he&&Le?Le.tween:ie},R.setPositions=function(he,He,ke,qe){if(T){var Tt=T.scrollTrigger,nt=T.duration(),_t=Tt.end-Tt.start;he=Tt.start+_t*he/nt,He=Tt.start+_t*He/nt}R.refresh(!1,!1,{start:Mf(he,ke&&!!R._startClamp),end:Mf(He,ke&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(he){if(L&&he){var He=L.indexOf(y.d)+1;L[He]=parseFloat(L[He])+he+Bt,L[1]=parseFloat(L[1])+he+Bt,Ms(L)}},R.disable=function(he,He){if(R.enabled&&(he!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,He||ie&&ie.pause(),ne=0,we&&(we.uncache=1),te&&Vt(r,"refreshInit",te),ue&&(ue.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!D)){for(var ke=tt.length;ke--;)if(tt[ke].scroller===U&&tt[ke]!==R)return;Vt(U,"resize",Qs),D||Vt(U,"scroll",ss)}},R.kill=function(he,He){R.disable(he,He),ie&&!He&&ie.kill(),l&&delete Ic[l];var ke=tt.indexOf(R);ke>=0&&tt.splice(ke,1),ke===hn&&yo>0&&hn--,ke=0,tt.forEach(function(qe){return qe.scroller===R.scroller&&(ke=1)}),ke||fn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,he&&i.revert({kill:!1}),He||i.kill()),Oe&&[Oe,Re,V,Fe].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),fa===R&&(fa=0),f&&(we&&(we.uncache=1),ke=0,tt.forEach(function(qe){return qe.pin===f&&ke++}),ke||(we.spacer=0)),n.onKill&&n.onKill(R)},tt.push(R),R.enable(!1,!1),Te&&Te(R),i&&i.add&&!Je){var Ie=R.update;R.update=function(){R.update=Ie,st.cache++,We||_e||R.refresh()},ye.delayedCall(.01,R.update),Je=.01,We=_e=0}else R.refresh();f&&bS()},r.register=function(n){return as||(ye=n||Cp(),Rp()&&window.document&&r.enable(),as=Ks),as},r.defaults=function(n){if(n)for(var i in n)lo[i]=n[i];return lo},r.disable=function(n,i){Ks=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),Vt(it,"wheel",ss),Vt(vt,"scroll",ss),clearInterval(io),Vt(vt,"touchcancel",oi),Vt(lt,"touchstart",oi),ao(Vt,vt,"pointerdown,touchstart,mousedown",Sf),ao(Vt,vt,"pointerup,touchend,mouseup",yf),zo.kill(),so(Vt);for(var s=0;s<st.length;s+=3)oo(Vt,st[s],st[s+1]),oo(Vt,st[s],st[s+2])},r.enable=function(){if(it=window,vt=document,In=vt.documentElement,lt=vt.body,ye&&(ya=ye.utils.toArray,oa=ye.utils.clamp,Lc=ye.core.context||oi,Yl=ye.core.suppressOverwrites||oi,hu=it.history.scrollRestoration||"auto",Uc=it.pageYOffset||0,ye.core.globals("ScrollTrigger",r),lt)){Ks=1,xs=document.createElement("div"),xs.style.height="100vh",xs.style.position="absolute",Bp(),vS(),Lt.register(ye),r.isTouch=Lt.isTouch,Fi=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pc=Lt.isTouch===1,Wt(it,"wheel",ss),uu=[it,vt,In,lt],ye.matchMedia?(r.matchMedia=function(c){var u=ye.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ye.addEventListener("matchMediaInit",function(){return gu()}),ye.addEventListener("matchMediaRevert",function(){return Op()}),ye.addEventListener("matchMedia",function(){vr(0,1),Nr("matchMedia")}),ye.matchMedia().add("(orientation: portrait)",function(){return Kl(),Kl})):console.warn("Requires GSAP 3.11.0 or later"),Kl(),Wt(vt,"scroll",ss);var n=lt.hasAttribute("style"),i=lt.style,s=i.borderTopStyle,o=ye.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=bi(lt),zt.m=Math.round(a.top+zt.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(lt.setAttribute("style",""),lt.removeAttribute("style")),io=setInterval(bf,250),ye.delayedCall(.5,function(){return ro=0}),Wt(vt,"touchcancel",oi),Wt(lt,"touchstart",oi),ao(Wt,vt,"pointerdown,touchstart,mousedown",Sf),ao(Wt,vt,"pointerup,touchend,mouseup",yf),Cc=ye.utils.checkPrefix("transform"),Eo.push(Cc),as=en(),zo=ye.delayedCall(.2,vr).pause(),os=[vt,"visibilitychange",function(){var c=it.innerWidth,u=it.innerHeight;vt.hidden?(gf=c,vf=u):(gf!==c||vf!==u)&&Qs()},vt,"DOMContentLoaded",vr,it,"load",vr,it,"resize",Qs],so(Wt),tt.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)oo(Vt,st[l],st[l+1]),oo(Vt,st[l],st[l+2])}},r.config=function(n){"limitCallbacks"in n&&(ql=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(io)||(io=i)&&setInterval(bf,i),"ignoreMobileResize"in n&&(Pc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(so(Vt)||so(Wt,n.autoRefreshEvents||"none"),bp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),o=st.indexOf(s),a=Ir(s);~o&&st.splice(o,a?6:2),i&&(a?pi.unshift(it,i,lt,i,In,i):pi.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Ln(n)?vn(n):n).getBoundingClientRect(),a=o[s?wr:Ar]*i||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},r.positionInViewport=function(n,i,s){Ln(n)&&(n=vn(n));var o=n.getBoundingClientRect(),a=o[s?wr:Ar],l=i==null?a/2:i in Go?Go[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ur.killAll||[];Ur={},i.forEach(function(s){return s()})}},r}();Qe.version="3.12.7";Qe.saveStyles=function(r){return r?ya(r).forEach(function(e){if(e&&e.style){var t=Pn.indexOf(e);t>=0&&Pn.splice(t,5),Pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),Lc())}}):Pn};Qe.revert=function(r,e){return gu(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Qs(!0):(as||Qe.register())&&vr(!0)};Qe.update=function(r){return++st.cache&&Ri(r===!0?2:0)};Qe.clearScrollMemory=Fp;Qe.maxScroll=function(r,e){return hi(r,e?_n:zt)};Qe.getScrollFunc=function(r,e){return tr(vn(r),e?_n:zt)};Qe.getById=function(r){return Ic[r]};Qe.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Zn};Qe.snapDirectional=_u;Qe.addEventListener=function(r,e){var t=Ur[r]||(Ur[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Ur[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=ye.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&nn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return nn(s)&&(s=s(),Wt(Qe,"refresh",function(){return s=e.batchMax()})),ya(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var Lf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Jl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===In&&r(lt,t)},fo={auto:1,scroll:1},PS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ye.core.getCache(s),a=en(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==lt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fo[(l=qn(s)).overflowY]||fo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ir(s)&&(fo[(l=qn(s)).overflowY]||fo[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},kp=function(e,t,n,i){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&PS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Wt(vt,Lt.eventTypes[0],If,!1,!0)},onDisable:function(){return Vt(vt,Lt.eventTypes[0],If,!0)}})},LS=/(input|label|select|textarea)/i,Df,If=function(e){var t=LS.test(e.target.tagName);(t||Df)&&(e._gsapAllow=!0,Df=t)},DS=function(e){pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=vn(e.target)||In,u=ye.core.globals().ScrollSmoother,h=u&&u.get(),d=Fi&&(e.content&&vn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=tr(c,zt),g=tr(c,_n),_=1,m=(Lt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,M=nn(i)?function(){return i(a)}:function(){return i||2.8},v,S,E=kp(c,e.type,!0,s),w=function(){return S=!1},T=oi,P=oi,x=function(){l=hi(c,zt),P=oa(Fi?1:0,l),n&&(T=oa(0,hi(c,_n))),v=Rr},y=function(){d._gsap.y=Zs(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},z=function(){if(S){requestAnimationFrame(w);var Z=Zs(a.deltaY/2),$=P(f.v-Z);if(d&&$!==f.v+f.offset){f.offset=$-f.v;var R=Zs((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",f.cacheID=st.cache,Ri()}return!0}f.offset&&y(),S=!0},U,q,D,I,G=function(){x(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&ye.set(d,{y:"+=0"}),e.ignoreCheck=function(F){return Fi&&F.type==="touchmove"&&z()||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){S=!1;var F=_;_=Zs((it.visualViewport&&it.visualViewport.scale||1)/m),U.pause(),F!==_&&Jl(c,_>1.01?!0:n?!1:"x"),q=g(),D=f(),x(),v=Rr},e.onRelease=e.onGestureStart=function(F,Z){if(f.offset&&y(),!Z)I.restart(!0);else{st.cache++;var $=M(),R,te;n&&(R=g(),te=R+$*.05*-F.velocityX/.227,$*=Lf(g,R,te,hi(c,_n)),U.vars.scrollX=T(te)),R=f(),te=R+$*.05*-F.velocityY/.227,$*=Lf(f,R,te,hi(c,zt)),U.vars.scrollY=P(te),U.invalidate().duration($).play(.01),(Fi&&U.vars.scrollY>=l||R>=l-1)&&ye.to({},{onUpdate:G,duration:$})}o&&o(F)},e.onWheel=function(){U._ts&&U.pause(),en()-p>1e3&&(v=0,p=en())},e.onChange=function(F,Z,$,R,te){if(Rr!==v&&x(),Z&&n&&g(T(R[2]===Z?q+(F.startX-F.x):g()+Z-R[1])),$){f.offset&&y();var re=te[2]===$,j=re?D+F.startY-F.y:f()+$-te[1],J=P(j);re&&j!==J&&(D+=J-j),f(J)}($||Z)&&Ri()},e.onEnable=function(){Jl(c,n?!1:"x"),Qe.addEventListener("refresh",G),Wt(it,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){Jl(c,!0),Vt(it,"resize",G),Qe.removeEventListener("refresh",G),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Lt(e),a.iOS=Fi,Fi&&!f()&&f(1),Fi&&ye.ticker.add(oi),I=a._dc,U=ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zp(f,f(),function(){return U.pause()})},onUpdate:Ri,onComplete:I.vars.onComplete}),a};Qe.sort=function(r){if(nn(r))return tt.sort(r);var e=it.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Lt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return un;if(r===!0&&un)return un.enable();if(r===!1){un&&un.kill(),un=r;return}var e=r instanceof Lt?r:DS(r);return un&&un.target===e.target&&un.kill(),Ir(e.target)&&(un=e),e};Qe.core={_getVelocityProp:Rc,_inputObserver:kp,_scrollers:st,_proxies:pi,bridge:{ss:function(){Zn||Nr("scrollStart"),Zn=en()},ref:function(){return Qt}}};Cp()&&ye.registerPlugin(Qe);const IS=async()=>{const r=document.getElementById("profile-image");if(r)try{const e=r.parentElement,t=document.createElement("button");t.className="absolute bottom-2 right-2 bg-tertiary hover:bg-black-100 text-white-100 p-2 rounded-full shadow-lg z-10 transition-all duration-300",t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    `,e.style.position="relative",e.appendChild(t);const i=await(await fetch("/avatar-dummy.json")).json(),s=document.createElement("div");s.className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300",s.innerHTML=`
      <div class="bg-tertiary rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-white-100 text-xl font-bold">Pilih Avatar</h3>
          <button class="close-modal text-secondary hover:text-white-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="mb-4">
          <h4 class="text-secondary mb-2">Pria</h4>
          <div class="grid grid-cols-3 gap-3 avatar-group" data-group="male"></div>
        </div>
        
        <div class="mb-4">
          <h4 class="text-secondary mb-2">Wanita</h4>
          <div class="grid grid-cols-3 gap-3 avatar-group" data-group="female"></div>
        </div>
        
        <div>
          <h4 class="text-secondary mb-2">Netral</h4>
          <div class="grid grid-cols-3 gap-3 avatar-group" data-group="neutral"></div>
        </div>
      </div>
    `,document.body.appendChild(s);const o=()=>{Object.keys(i).forEach(u=>{const h=s.querySelector(`.avatar-group[data-group="${u}"]`);h&&i[u].forEach(d=>{const f=document.createElement("div");f.className="avatar-option cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all",f.setAttribute("data-url",d.url),f.innerHTML=`
            <img src="${d.url}" alt="${d.description}" class="w-full h-24 object-cover">
          `,h.appendChild(f),f.addEventListener("click",()=>{r.src=d.url,c(),localStorage.setItem("selectedAvatar",d.url)})})})},a=localStorage.getItem("selectedAvatar");a&&(r.src=a);const l=()=>{s.classList.remove("opacity-0","pointer-events-none"),document.body.style.overflow="hidden",s.querySelector(".avatar-option")||o()},c=()=>{s.classList.add("opacity-0","pointer-events-none"),document.body.style.overflow=""};t.addEventListener("click",l),s.querySelector(".close-modal").addEventListener("click",c),s.addEventListener("click",u=>{u.target===s&&c()}),document.addEventListener("keydown",u=>{u.key==="Escape"&&!s.classList.contains("opacity-0")&&c()})}catch(e){console.error("Error initializing avatar selector:",e)}};dt.registerPlugin(Qe);const US=()=>{const r=document.querySelector("#canvas-container"),e=new dd,t=new xn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new Gc({antialias:!0,alpha:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(n.domElement);const i=new Hn,s=window.innerWidth<768?3e3:5e3,o=new Float32Array(s*3),a=new Float32Array(s*3),l=[new at(11183811),new at(9078435),new at(8025779),new at(5009141)];for(let y=0;y<s;y++){o[y*3]=(Math.random()-.5)*10,o[y*3+1]=(Math.random()-.5)*10,o[y*3+2]=(Math.random()-.5)*10;const z=l[Math.floor(Math.random()*l.length)];a[y*3]=z.r,a[y*3+1]=z.g,a[y*3+2]=z.b}i.setAttribute("position",new Kn(o,3)),i.setAttribute("color",new Kn(a,3));const c=new md({size:.015,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0}),u=new $x(i,c);e.add(u);const h=[],d=new cs;e.add(d);const f=()=>{const y=[new $o(.3,0),new jo(.3,0),new Wc(.3,0),new Xc(.3,.1,16,32)],z=y[Math.floor(Math.random()*y.length)],U=new Ys({color:l[Math.floor(Math.random()*l.length)].getHex(),wireframe:Math.random()>.5,transparent:!0,opacity:.7,metalness:.3,roughness:.8}),q=new si(z,U);q.position.set((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),q.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),q.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},floatSpeed:.005+Math.random()*.005,floatDistance:.2+Math.random()*.3,initialY:q.position.y,floatOffset:Math.random()*Math.PI*2},h.push(q),d.add(q)},g=window.innerWidth<768?5:8;for(let y=0;y<g;y++)f();const _=new gd(16777215,.5);e.add(_);const m=new Zx(16777215,.8);m.position.set(2,3,4),e.add(m);const p=new uc(5009141,.5);p.position.set(-5,2,2),e.add(p),t.position.z=4;let M=0,v=0;const S=y=>{M=y.clientX/window.innerWidth*2-1,v=-(y.clientY/window.innerHeight)*2+1},E=y=>{y.touches.length===1&&(y.touches[0].pageX,y.touches[0].pageY)},w=y=>{if(y.touches.length===1){const z=y.touches[0].pageX,U=y.touches[0].pageY;M=z/window.innerWidth*2-1,v=-(U/window.innerHeight)*2+1,y.preventDefault()}};window.addEventListener("mousemove",S),window.addEventListener("touchstart",E,{passive:!1}),window.addEventListener("touchmove",w,{passive:!1});const T=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),window.innerWidth<768&&s>3e3&&console.log("Switched to mobile view")};window.addEventListener("resize",T);let P=0;const x=()=>{P+=.01,requestAnimationFrame(x),u.rotation.y+=3e-4,u.rotation.x+=v*3e-4,u.rotation.y+=M*3e-4,h.forEach(y=>{y.rotation.x+=y.userData.rotationSpeed.x,y.rotation.y+=y.userData.rotationSpeed.y,y.rotation.z+=y.userData.rotationSpeed.z,y.position.y=y.userData.initialY+Math.sin(P+y.userData.floatOffset)*y.userData.floatDistance}),d.rotation.y=Math.sin(P*.1)*.1,n.render(e,t)};return x(),{scene:e,camera:t,renderer:n}},NS=()=>{const r=document.getElementById("model-container");if(!r)return;const e=()=>{window.innerWidth<=768?r.style.height="300px":r.style.height="500px"};e(),window.addEventListener("resize",e);const t=new dd;t.background=new at(590629);const n=new xn(75,r.clientWidth/r.clientHeight,.1,1e3),i=new Gc({antialias:!0});i.setSize(r.clientWidth,r.clientHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(i.domElement);const s=new gd(16777215,.7);t.add(s);const o=new uc(16777215,1);o.position.set(1,1,1),t.add(o);const a=new uc(5009141,.7);a.position.set(-2,1,-1),t.add(a);const l=new eM(n,i.domElement);l.enableDamping=!0,l.dampingFactor=.05,l.rotateSpeed=.8,l.enableZoom=!0,l.zoomSpeed=.8,l.enablePan=!1;const c=document.createElement("div");c.className="interaction-helper",c.innerHTML=`
    <div class="interaction-icon">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
        <path d="M14 8l-4 4 4 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
        <path d="M10 8l4 4-4 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
    <span>Geser untuk memutar</span>
  `,r.appendChild(c),r.addEventListener("mousedown",()=>{c.classList.add("fadeout"),setTimeout(()=>{c.style.display="none"},1e3)}),n.position.z=5;const u=new cs,h=new Ds(1.2,1.2,1.2),d=new Ys({color:5009141,metalness:.8,roughness:.2}),f=new si(h,d);u.add(f);const g=[new $o(.4),new jo(.4),new Vc(.4)],_=[new Ys({color:16732754,metalness:.5,roughness:.4}),new Ys({color:6942894,metalness:.5,roughness:.4}),new Ys({color:16771899,metalness:.5,roughness:.4})],m=[];for(let T=0;T<3;T++){const P=new si(g[T],_[T]),x=T/3*Math.PI*2,y=2.2;P.position.x=Math.cos(x)*y,P.position.z=Math.sin(x)*y,P.userData={initialAngle:x,orbitSpeed:.3+Math.random()*.3,orbitRadius:y,floatAmplitude:.1+Math.random()*.2,floatOffset:Math.random()*Math.PI*2},u.add(P),m.push(P)}const p=new pd({color:11183811,transparent:!0,opacity:.5}),M=[],v=()=>{M.forEach(T=>u.remove(T)),M.length=0,m.forEach(T=>{const P=new Hn().setFromPoints([f.position,T.position]),x=new jx(P,p);u.add(x),M.push(x)})};v(),t.add(u);const S=()=>{n.aspect=r.clientWidth/r.clientHeight,n.updateProjectionMatrix(),i.setSize(r.clientWidth,r.clientHeight)};window.addEventListener("resize",S);let E=0;const w=()=>{E+=.01,requestAnimationFrame(w),f.rotation.x+=.003,f.rotation.y+=.005,m.forEach(T=>{const P=T.userData,x=P.initialAngle+E*P.orbitSpeed;T.position.x=Math.cos(x)*P.orbitRadius,T.position.z=Math.sin(x)*P.orbitRadius,T.position.y=Math.sin(E+P.floatOffset)*P.floatAmplitude,T.rotation.x+=.02,T.rotation.y+=.01}),v(),l.update(),i.render(t,n)};return w(),{scene:t,camera:n,renderer:i}},OS=()=>{dt.to("#hero-title",{opacity:1,y:0,duration:1,delay:.5}),dt.to("#hero-subtitle",{opacity:1,y:0,duration:1,delay:.8}),dt.to("#hero-button",{opacity:1,y:0,duration:1,delay:1.1}),dt.to("#scroll-indicator",{opacity:1,duration:1,delay:2}),Qe.batch(".about-card",{onEnter:r=>{dt.to(r,{opacity:1,y:0,stagger:.2,duration:1,ease:"power3.out"})},start:"top 80%"}),Qe.batch(".about-image",{onEnter:r=>{dt.to(r,{opacity:1,scale:1,duration:1.2,ease:"elastic.out(1, 0.5)",delay:.3}),dt.to(r,{y:-15,duration:2,ease:"sine.inOut",repeat:-1,yoyo:!0,delay:1.5})},start:"top 80%"}),dt.to(".skills-title",{scrollTrigger:{trigger:".skills-title",start:"top 80%"},opacity:1,y:0,duration:1,ease:"power2.out"}),Qe.batch(".skill-card",{onEnter:r=>{dt.set(r,{clearProps:"all"}),dt.fromTo(r,{opacity:0,y:50,scale:.8,rotationY:30},{opacity:1,y:0,scale:1,rotationY:0,stagger:.1,duration:.8,ease:"back.out(1.5)"}),r.forEach(e=>{e.addEventListener("mouseenter",()=>{dt.to(e,{y:-10,scale:1.05,duration:.4,ease:"power1.out"});const t=e.querySelector("img");t&&dt.to(t,{rotation:360,duration:.8,ease:"power1.inOut"})}),e.addEventListener("mouseleave",()=>{dt.to(e,{y:0,scale:1,duration:.4,ease:"power1.out"})})})},start:"top 85%"}),dt.to(".model-title",{scrollTrigger:{trigger:".model-title",start:"top 80%"},opacity:1,duration:1,y:0,ease:"power2.out"}),dt.to("#model-container",{scrollTrigger:{trigger:"#model-container",start:"top 80%"},opacity:1,scale:1,duration:1.2,ease:"power3.out"}),dt.to(".model-description",{scrollTrigger:{trigger:".model-description",start:"top 90%"},opacity:1,y:0,duration:1,ease:"power1.out"}),dt.to(".gallery-title",{scrollTrigger:{trigger:".gallery-title",start:"top 80%"},opacity:1,y:0,duration:1,ease:"power2.out"}),Qe.batch(".portfolio-item",{onEnter:r=>{dt.fromTo(r,{opacity:0,y:50,scale:.9},{opacity:1,y:0,scale:1,stagger:.15,duration:.8,ease:"back.out(1.2)"})},start:"top 85%"}),dt.to(".contact-title",{scrollTrigger:{trigger:".contact-title",start:"top 80%"},opacity:1,y:0,duration:1,ease:"power2.out"}),dt.to(".contact-form",{scrollTrigger:{trigger:".contact-form",start:"top 80%"},opacity:1,y:0,duration:1,delay:.3,ease:"power2.out"}),window.innerWidth>768&&document.querySelectorAll("section").forEach(r=>{dt.to(r,{scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:.5},y:(e,t)=>-50*(1-t.dataset.speed||.2),ease:"none"})})},FS=()=>{const r=document.getElementById("hero-button");r&&r.addEventListener("click",()=>{document.querySelector("section:nth-of-type(2)").scrollIntoView({behavior:"smooth"})});const e=document.querySelectorAll("section"),t=()=>{const n=window.scrollY+window.innerHeight/3;e.forEach((i,s)=>{const o=i.offsetTop,a=i.offsetHeight;n>=o&&n<o+a?i.classList.add("active-section"):i.classList.remove("active-section")})};window.addEventListener("scroll",t)},BS=()=>{if(window.innerWidth<=768||"ontouchstart"in window||navigator.maxTouchPoints>0)return;const r=document.createElement("div");r.classList.add("custom-cursor"),document.body.appendChild(r);const e=n=>{r.style.left=`${n.clientX}px`,r.style.top=`${n.clientY}px`};window.addEventListener("mousemove",e),document.querySelectorAll("button, .skill-card, #model-container, a, input, textarea, .social-link, .portfolio-item, .view-button").forEach(n=>{n.addEventListener("mouseenter",()=>{r.classList.add("cursor-hover")}),n.addEventListener("mouseleave",()=>{r.classList.remove("cursor-hover")})})},zS=()=>{const r=document.createElement("div");r.className="preloader",r.innerHTML=`
    <div class="preloader-content">
      <div class="spinner"></div>
      <div class="loading-text">Memuat...</div>
    </div>
  `,document.body.appendChild(r),window.addEventListener("load",()=>{dt.to(r,{opacity:0,duration:.8,onComplete:()=>{r.remove()}})})},kS=()=>{const r=document.getElementById("portfolio-carousel");if(!r)return;const e=document.getElementById("carousel-prev"),t=document.getElementById("carousel-next"),n=r.querySelectorAll(".portfolio-item");let i=0,s=0;const o={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768},a=()=>o.isMobile,l=()=>{if(a()){const p=n[0];if(!p)return window.innerWidth*.85;const M=window.getComputedStyle(p),v=parseInt(M.marginRight||0);return p.offsetWidth+v}return r.offsetWidth/3},c=()=>n.length,u=()=>{if(r.scrollLeft===0)return 0;if(a()){const v=l(),S=Math.round(r.scrollLeft/v);return Math.max(0,Math.min(S,c()-1))}const p=r.scrollLeft/(r.scrollWidth-r.offsetWidth),M=Math.round(p*(c()-3));return Math.max(0,Math.min(M,c()-3))},h=()=>{if(!a()&&e&&t){const p=u();e.disabled=p<=0,e.classList.toggle("opacity-50",p<=0),e.classList.toggle("cursor-not-allowed",p<=0);const M=c()-3,v=p>=M;t.disabled=v,t.classList.toggle("opacity-50",v),t.classList.toggle("cursor-not-allowed",v)}},d=(p,M=.3)=>{if(!r)return;const v=l();let S;if(a())S=p*v;else{const E=r.scrollWidth-r.offsetWidth,w=c()-3;S=p/w*E}r.scrollTo({left:S,behavior:M===0?"auto":"smooth"}),h()},f=()=>{const p=Math.max(0,u()-1);d(p)},g=()=>{const p=c(),M=a()?p-1:p-3,v=Math.min(M,u()+1);d(v)};a()||(e&&e.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),m(p,e),f()}),t&&t.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),m(p,t),g()})),a()&&(r.addEventListener("touchstart",p=>{i=p.changedTouches[0].screenX},{passive:!0}),r.addEventListener("touchend",p=>{s=p.changedTouches[0].screenX,i-s>50?g():s-i>50&&f()},{passive:!0})),r.addEventListener("scroll",()=>{requestAnimationFrame(()=>{h()})},{passive:!0}),window.addEventListener("resize",()=>{setTimeout(()=>{const p=u();d(p,0),h()},200)}),h();const _=document.querySelector(".swipe-instruction");if(_&&a()){const p=()=>{_.style.opacity=0,setTimeout(()=>{_.style.display="none"},500),r.removeEventListener("touchstart",p)};r.addEventListener("touchstart",p,{passive:!0})}function m(p,M){if(M.querySelector(".ripple"))return;const v=document.createElement("div"),S=Math.max(M.clientWidth,M.clientHeight);v.style.width=v.style.height=`${S}px`,p.type.includes("touch")?p.touches&&p.touches[0]&&(v.style.left=`${p.touches[0].clientX-M.getBoundingClientRect().left-S/2}px`,v.style.top=`${p.touches[0].clientY-M.getBoundingClientRect().top-S/2}px`):(v.style.left=`${p.clientX-M.getBoundingClientRect().left-S/2}px`,v.style.top=`${p.clientY-M.getBoundingClientRect().top-S/2}px`),v.classList.add("ripple"),M.appendChild(v),setTimeout(()=>{v.remove()},600)}return{scrollToIndex:d,scrollNext:g,scrollPrev:f,getCurrentIndex:u,updateNavigationButtons:h}},Hp=()=>{const r=document.getElementById("lightbox-modal"),e=document.getElementById("lightbox-image"),t=document.getElementById("lightbox-title"),n=document.getElementById("lightbox-description"),i=document.getElementById("close-lightbox"),s=document.getElementById("zoom-in"),o=document.getElementById("zoom-out"),a=document.getElementById("prev-project"),l=document.getElementById("next-project"),c=document.getElementById("thumbnails"),u=document.getElementById("lightbox-content");if(!r||!e)return;const h=Array.from(document.querySelectorAll(".portfolio-item"));let d=0,f=1,g=!1,_=0,m=0,p=0,M=0;const v=I=>{if(console.log("Opening lightbox with index:",I),d=I,!h[d]){console.error("Portfolio item not found for index:",I);return}const G=h[d],F=G.querySelector("img");console.log("Found portfolio item:",G),console.log("Image element:",F),E(),F?(e.src=F.src,e.alt=F.alt,console.log("Setting image src to:",F.src)):console.error("Image not found in portfolio item"),t.textContent=G.getAttribute("data-title")||"",n.textContent=G.getAttribute("data-description")||"",z(),r.classList.remove("hidden"),r.classList.add("active"),console.log("Modal classes after open:",r.className),document.body.style.overflow="hidden"},S=()=>{r.classList.remove("active"),document.body.style.overflow=""},E=()=>{f=1,p=0,M=0,e.style.transform=`translate(${p}px, ${M}px) scale(${f})`,e.classList.remove("zoomed"),document.getElementById("lightbox-content").style.cursor="grab"},w=()=>{e.style.transform=`translate(${p}px, ${M}px) scale(${f})`},T=()=>{f<3&&(f+=.5,w(),f>1&&(e.classList.add("zoomed"),document.getElementById("lightbox-content").style.cursor="move"))},P=()=>{f>.5&&(f-=.5,f===1?E():w())},x=()=>{let I=d-1;I<0&&(I=h.length-1),v(I)},y=()=>{let I=d+1;I>=h.length&&(I=0),v(I)},z=()=>{c&&(c.innerHTML="",h.forEach((I,G)=>{const F=document.createElement("div");F.className="thumbnail",G===d&&F.classList.add("active");const Z=document.createElement("img"),$=I.querySelector("img");$&&(Z.src=$.src,Z.alt=`Thumbnail ${G+1}`),F.appendChild(Z),c.appendChild(F),F.addEventListener("click",()=>{v(G)})}))};i&&i.addEventListener("click",S),s&&s.addEventListener("click",T),o&&o.addEventListener("click",P),a&&a.addEventListener("click",x),l&&l.addEventListener("click",y),document.addEventListener("keydown",I=>{I.key==="Escape"&&r.classList.contains("active")&&S()});const U=I=>{f<=1||(I.type==="mousedown"?(g=!0,_=I.clientX,m=I.clientY,u.style.cursor="grabbing"):I.type==="touchstart"&&(g=!0,_=I.touches[0].clientX,m=I.touches[0].clientY),I.preventDefault(),I.stopPropagation())},q=I=>{if(!g)return;let G,F;if(I.type==="mousemove")G=I.clientX,F=I.clientY;else if(I.type==="touchmove")G=I.touches[0].clientX,F=I.touches[0].clientY;else return;const Z=G-_,$=F-m;p+=Z,M+=$;const R=e.getBoundingClientRect(),te=u.getBoundingClientRect(),re={left:(R.width*f-te.width)/2,right:(R.width*f-te.width)/2,top:(R.height*f-te.height)/2,bottom:(R.height*f-te.height)/2};re.left>0?p=Math.max(Math.min(p,re.left),-re.right):p=0,re.top>0?M=Math.max(Math.min(M,re.top),-re.bottom):M=0,w(),_=G,m=F,I.preventDefault(),I.stopPropagation()},D=I=>{g&&(g=!1,f>1?u.style.cursor="move":u.style.cursor="grab",I.preventDefault(),I.stopPropagation())};return u.addEventListener("mousedown",U),window.addEventListener("mousemove",q),window.addEventListener("mouseup",D),u.addEventListener("touchstart",U,{passive:!1}),window.addEventListener("touchmove",q,{passive:!1}),window.addEventListener("touchend",D),u.addEventListener("dblclick",I=>{I.preventDefault(),f>1?E():(f=2,w(),e.classList.add("zoomed"),u.style.cursor="move")}),u.addEventListener("wheel",I=>{I.preventDefault();const G=.1;I.deltaY<0?f<3&&(f+=G,f>1&&(e.classList.add("zoomed"),u.style.cursor="move")):f>.5&&(f-=G,f<=1&&E()),w()},{passive:!1}),{openLightbox:v,closeLightbox:S,resetZoomAndPosition:E,zoomIn:T,zoomOut:P,prevProject:x,nextProject:y}},HS=()=>{const r=document.querySelectorAll(".view-button"),e=Hp();if(!e){console.error("Lightbox gallery could not be initialized");return}console.log("View buttons found:",r.length),r.forEach((t,n)=>{t.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const s=parseInt(t.getAttribute("data-index"),10);console.log("View button clicked, index:",s),isNaN(s)?console.error("Invalid portfolio index:",t.getAttribute("data-index")):e.openLightbox(s)})})},GS=()=>{const r=document.getElementById("changing-text");if(!r)return;const e=["Web Developer","3D Enthusiast","IoT Developer","Gamer","Mobile Developer"];let t=0;const n=()=>{dt.to(r,{opacity:0,y:-20,duration:.5,onComplete:()=>{t=(t+1)%e.length,r.textContent=e[t],dt.to(r,{opacity:1,y:0,duration:.5})}})};r.textContent=e[0],setInterval(n,3e3)};function VS(){const r=document.getElementById("portfolio-carousel");if(!r)return;const e=[{id:"project1",title:"Proyek Website 3D",description:"Website interaktif dengan animasi 3D dan UI modern",image:"/images/proyekwebsite3D.png",tags:["Three.js","React","WebGL"]},{id:"project2",title:"Aplikasi Smarthome",description:"Aplikasi kontrol rumah pintar dengan integrasi IoT",image:"/images/smarthome.png",tags:["ESP32","C++","Firebase"]},{id:"project3",title:"Game Chibi Falls",description:"Game petualangan 3D dengan fisika ragdoll",image:"/images/chibifalls.png",tags:["Unity","C#","Blender"]},{id:"project4",title:"Aplikasi Laundry Service",description:"Aplikasi layanan Laundry dengan fitur autentikasi pengguna, pengiriman pesanan, dan pelacakan status secara real-time.",image:"/images/laundry.png",tags:["Kotlin","Firebase","Android Studio"]},{id:"project5",title:"Nusa Meta",description:"Membuat lingkungan kota virtual untuk penggunaan metaverse, mengintegrasikan objek 3D interaktif dalam platform Nusameta",image:"/images/nusameta.png",tags:["Blender","Nusa Meta","3D"]},{id:"project6",title:"Sistem Penyiraman Tanaman Otomatis",description:"Sistem penyiraman tanaman otomatis menggunakan sensor kelembaban tanah, relai, dan pompa air. Sistem ini dikontrol oleh Arduino.",image:"/images/penyiraman.png",tags:["Arduino","C++","Embedded Systems"]},{id:"project7",title:"Ekstrakurikuler ARVR",description:"Pengembangan aplikasi edukasi berbasis Augmented Reality dan Virtual Reality untuk memfasilitasi pembelajaran interaktif bagi siswa",image:"/images/arvr.png",tags:["Blender","AR/VR"]}];r.innerHTML="",e.forEach((t,n)=>{const i=document.createElement("a");i.href=`#${t.id}`,i.className="portfolio-item flex-shrink-0 snap-start w-[85vw] sm:w-[350px]",i.setAttribute("role","tabpanel"),i.setAttribute("aria-labelledby",`tab-${t.id}`),i.setAttribute("data-id",t.id),i.setAttribute("data-title",t.title),i.setAttribute("data-description",t.description);const s=t.tags.map(o=>`<span class="px-3 py-1 text-xs rounded-full bg-black-200 text-secondary">${o}</span>`).join("");i.innerHTML=`
      <div class="rounded-xl overflow-hidden bg-tertiary shadow-card group h-full">
        <div class="relative overflow-hidden image-container">
          <img loading="lazy" src="${t.image}" alt="${t.title}" class="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
          <div class="overlay">
            <button class="view-button" type="button" data-index="${n}">View</button>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-white-100 text-xl font-semibold mb-2">${t.title}</h3>
          <p class="text-secondary">${t.description}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${s}
          </div>
        </div>
      </div>
    `,r.appendChild(i)}),kS()}document.addEventListener("DOMContentLoaded",()=>{zS(),US(),NS(),OS(),FS(),BS(),IS(),GS(),VS(),Hp(),HS(),WS(),console.log("Portfolio gallery initialized"),console.log("View buttons:",document.querySelectorAll(".view-button").length),console.log("Portfolio items:",document.querySelectorAll(".portfolio-item").length)});const WS=()=>{const r=document.getElementById("contact-form"),e=document.getElementById("thank-you-page"),t=document.getElementById("thank-you-close");if(!r||!e||!t)return;if(r.addEventListener("submit",a=>{const l=r.querySelector('button[type="submit"]');l&&(l.innerHTML='<span>Mengirim...</span> <div class="spinner-small ml-2"></div>',l.disabled=!0)}),new URLSearchParams(window.location.search).get("thanks")==="true"){i();const a=new URL(window.location.href);a.searchParams.delete("thanks"),window.history.replaceState({},document.title,a.toString())}function i(){e.classList.remove("hidden"),document.body.style.overflow="hidden",dt.from("#thank-you-page > div",{y:30,opacity:0,duration:.5,ease:"back.out(1.2)"})}function s(){dt.to("#thank-you-page > div",{y:30,opacity:0,duration:.3,onComplete:()=>{e.classList.add("hidden"),document.body.style.overflow=""}})}t.addEventListener("click",s);const o=r.querySelector('input[name="_next"]');if(o){const a=new URL(window.location.href);for(const l of[...a.searchParams.keys()])a.searchParams.delete(l);a.searchParams.set("thanks","true"),o.value=a.toString()}};
