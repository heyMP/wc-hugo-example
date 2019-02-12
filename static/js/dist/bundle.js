window.JSCompiler_renameProperty=function(e,t){return e};let e,t,i=/(url\()([^)]*)(\))/g,n=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(i,a){if(i&&n.test(i))return i;if(void 0===e){e=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",e="http://a/c%20d"===t.href}catch(e){}}return a||(a=document.baseURI||window.location.href),e?new URL(i,a).href:(t||((t=document.implementation.createHTMLDocument("temp")).base=t.createElement("base"),t.head.appendChild(t.base),t.anchor=t.createElement("a"),t.body.appendChild(t.anchor)),t.base.href=a,t.anchor.href=i,t.anchor.href||i)}function o(e,t){return e.replace(i,function(e,i,n,o){return i+"'"+a(n.replace(/["']/g,""),t)+"'"+o})}function r(e){return e.substring(0,e.lastIndexOf("/")+1)}const s=!window.ShadyDOM,l=Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),c=!window.customElements.polyfillWrapFlushCallback;let h=r(document.baseURI||window.location.href),d=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,p=!1,u=!1,m=!1,f=0;const g=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=f++;return function(n){let a=n.__mixinSet;if(a&&a[i])return n;let o=t,r=o.get(n);r||(r=e(n),o.set(n,r));let s=Object.create(r.__mixinSet||a||null);return s[i]=!0,r.__mixinSet=s,r}};let v={},y={};function _(e,t){v[e]=y[e.toLowerCase()]=t}function b(e){return v[e]||y[e.toLowerCase()]}function w(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class z extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=b(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,n){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=a(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=r(t)}return this.__assetpath}register(e){if(e=e||this.id){if(u&&void 0!==b(e))throw _(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,_(e,this),w(this)}}}z.prototype.modules=v,customElements.define("dom-module",z);const C="link[rel=import][type~=css]",x="include",k="shady-unscoped";function M(e){return z.import(e)}function S(e){const t=o((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function L(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...H(t[e]));return i}function H(e){const t=M(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...A(t));const i=t.querySelector("template");i&&e.push(...E(i,t.assetpath)),t._styles=e}return t._styles}function E(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let a=n[e],r=a.getAttribute(x);r&&i.push(...L(r).filter(function(e,t,i){return i.indexOf(e)===t})),t&&(a.textContent=o(a.textContent,t)),i.push(a)}e._styles=i}return e._styles}function T(e){let t=M(e);return t?A(t):[]}function A(e){const t=[],i=e.querySelectorAll(C);for(let e=0;e<i.length;e++){let n=i[e];if(n.import){const e=n.import,i=n.hasAttribute(k);if(i&&!e._unscopedStyle){const t=S(e);t.setAttribute(k,""),e._unscopedStyle=t}else e._style||(e._style=S(e));t.push(i?e._unscopedStyle:e._style)}}return t}function V(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=P(t[e]);return i}function P(e){let t=M(e);if(t&&void 0===t._cssText){let e=N(t),i=t.querySelector("template");i&&(e+=O(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function O(e,t){let i="";const n=E(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}function N(e){let t="",i=A(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}function I(e){return e.indexOf(".")>=0}function R(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function B(e,t){return 0===e.indexOf(t+".")}function $(e,t){return 0===t.indexOf(e+".")}function F(e,t,i){return t+i.slice(e.length)}function D(e,t){return e===t||B(e,t)||$(e,t)}function j(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function K(e){return Array.isArray(e)?j(e).split("."):e.toString().split(".")}function q(e,t,i){let n=e,a=K(t);for(let e=0;e<a.length;e++){if(!n)return;n=n[a[e]]}return i&&(i.path=a.join(".")),n}function U(e,t,i){let n=e,a=K(t),o=a[a.length-1];if(a.length>1){for(let e=0;e<a.length-1;e++){if(!(n=n[a[e]]))return}n[o]=i}else n[t]=i;return a.join(".")}const Y={},X=/-[a-z]/g,W=/([A-Z])/g;function Z(e){return Y[e]||(Y[e]=e.indexOf("-")<0?e:e.replace(X,e=>e[1].toUpperCase()))}function J(e){return Y[e]||(Y[e]=e.replace(W,"-$1").toLowerCase())}let G=0,Q=0,ee=[],te=0,ie=document.createTextNode("");function ne(){const e=ee.length;for(let t=0;t<e;t++){let e=ee[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}ee.splice(0,e),Q+=e}new window.MutationObserver(ne).observe(ie,{characterData:!0});const ae={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},oe={run:e=>(ie.textContent=te++,ee.push(e),G++),cancel(e){const t=e-Q;if(t>=0){if(!ee[t])throw new Error("invalid async handle: "+e);ee[t]=null}}},re=oe,se=g(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let n=this.__data[e],a=this._shouldPropertyChange(e,t,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),a}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,re.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,n){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,n)}_attributeToProperty(e,t,i){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[e]||e;this[a]=this._deserializeValue(t,i||this.constructor.typeForProperty(a))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const n=this._serializeValue(t);void 0===n?e.removeAttribute(i):e.setAttribute(i,n)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}}),le={};let ce=HTMLElement.prototype;for(;ce;){let e=Object.getOwnPropertyNames(ce);for(let t=0;t<e.length;t++)le[e[t]]=!0;ce=Object.getPrototypeOf(ce)}function he(e,t){if(!le[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}const de=g(e=>{const t=se(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Z(e[t]))}static attributeNameForProperty(e){return J(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){he(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),pe={"dom-if":!0,"dom-repeat":!0};function ue(e){let t=e.getAttribute("is");if(t&&pe[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function me(e,t){let i=t.parentInfo&&me(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e}function fe(e,t,i,n){n.id&&(t[n.id]=i)}function ge(e,t,i){if(i.events&&i.events.length)for(let n,a=0,o=i.events;a<o.length&&(n=o[a]);a++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function ve(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}function ye(e,t,i){e=e._methodHost||e;return function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}const _e=g(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let n,a=e;return"template"!=a.localName||a.hasAttribute("preserve-content")?"slot"===a.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(a,t,i)||n,a.firstChild&&(n=this._parseTemplateChildNodes(a,t,i)||n),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,t,i)||n),n}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let n,a=e.firstChild,o=0;a;a=n){if("template"==a.localName&&(a=ue(a)),n=a.nextSibling,a.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)a.textContent+=i.textContent,n=i.nextSibling,e.removeChild(i),i=n;if(t.stripWhiteSpace&&!a.textContent.trim()){e.removeChild(a);continue}}let r={parentIndex:o,parentInfo:i};this._parseTemplateNode(a,t,r)&&(r.infoIndex=t.nodeInfoList.push(r)-1),a.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let n=this._parseTemplate(e,t);return(n.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let n=!1,a=Array.from(e.attributes);for(let o,r=a.length-1;o=a[r];r--)n=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,n,a){return"on-"===n.slice(0,3)?(e.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:a}),!0):"id"===n&&(i.id=a,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),i=t.nodeInfoList,n=t.content||e.content,a=document.importNode(n,!0);a.__noInsertionPoint=!t.hasInsertionPoint;let o=a.nodeList=new Array(i.length);a.$={};for(let e,t=0,n=i.length;t<n&&(e=i[t]);t++){let i=o[t]=me(a,e);fe(this,a.$,i,e),ve(this,i,e),ge(this,i,e)}return a=a}_addMethodEventListenerToNode(e,t,i,n){let a=ye(n=n||e,t,i);return this._addEventListenerToNode(e,t,a),a}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}});let be=0;const we={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ze=/[A-Z]/;function Ce(e,t){let i=e[t];if(i){if(!e.hasOwnProperty(t)){i=e[t]=Object.create(e[t]);for(let e in i){let t=i[e],n=i[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}}}else i=e[t]={};return i}function xe(e,t,i,n,a,o){if(t){let r=!1,s=be++;for(let l in i)ke(e,t,s,l,i,n,a,o)&&(r=!0);return r}return!1}function ke(e,t,i,n,a,o,r,s){let l=!1,c=t[r?R(n):n];if(c)for(let t,h=0,d=c.length;h<d&&(t=c[h]);h++)t.info&&t.info.lastRun===i||r&&!Me(n,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,n,a,o,t.info,r,s),l=!0);return l}function Me(e,t){if(t){let i=t.name;return i==e||t.structured&&B(i,e)||t.wildcard&&$(i,e)}return!0}function Se(e,t,i,n,a){let o="string"==typeof a.method?e[a.method]:a.method,r=a.property;o?o.call(e,e.__data[r],n[r]):a.dynamicFn||console.warn("observer method `"+a.method+"` not defined")}function Le(e,t,i,n,a){let o,r,s=e[we.NOTIFY],l=be++;for(let r in t)t[r]&&(s&&ke(e,s,l,r,i,n,a)?o=!0:a&&He(e,r,i)&&(o=!0));o&&(r=e.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}function He(e,t,i){let n=R(t);if(n!==t){return Ee(e,J(n)+"-changed",i[t],t),!0}return!1}function Ee(e,t,i,n){let a={value:i,queueProperty:!0};n&&(a.path=n),e.dispatchEvent(new CustomEvent(t,{detail:a}))}function Te(e,t,i,n,a,o){let r=(o?R(t):t)!=t?t:null,s=r?q(e,r):e.__data[t];r&&void 0===s&&(s=i[t]),Ee(e,a.eventName,s,r)}function Ae(e,t,i,n,a){let o,r=e.detail,s=r&&r.path;s?(n=F(i,n,s),o=r&&r.value):o=e.currentTarget[i],o=a?!o:o,t[we.READ_ONLY]&&t[we.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,o,!0,Boolean(s))||r&&r.queueProperty||t._invalidateProperties()}function Ve(e,t,i,n,a){let o=e.__data[t];d&&(o=d(o,a.attrName,"attribute",e)),e._propertyToAttribute(t,a.attrName,o)}function Pe(e,t,i,n){let a=e[we.COMPUTE];if(a){let o=t;for(;xe(e,a,o,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}function Oe(e,t,i,n,a){let o=Ye(e,t,i,n,a),r=a.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[r]?e._setPendingProperty(r,o,!0):e[r]=o}function Ne(e,t,i){let n=e.__dataLinkedPaths;if(n){let a;for(let o in n){let r=n[o];$(o,t)?(a=F(o,r,t),e._setPendingPropertyOrPath(a,i,!0,!0)):$(r,t)&&(a=F(r,o,t),e._setPendingPropertyOrPath(a,i,!0,!0))}}}function Ie(e,t,i,n,a,o,r){i.bindings=i.bindings||[];let s={kind:n,target:a,parts:o,literal:r,isCompound:1!==o.length};if(i.bindings.push(s),De(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||J(a)+"-changed",s.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<s.parts.length;i++){let n=s.parts[i];n.compoundIndex=i,Re(e,t,s,n,l)}}function Re(e,t,i,n,a){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,r={index:a,binding:i,part:n,evaluator:e};for(let i=0;i<o.length;i++){let n=o[i];"string"==typeof n&&((n=pt(n)).wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:Be,info:r,trigger:n})}}}function Be(e,t,i,n,a,o,r){let s=r[a.index],l=a.binding,c=a.part;if(o&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let n=i[t];t=F(c.source,l.target,t),s._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(s)}else{$e(e,s,l,c,a.evaluator._evaluateBinding(e,c,t,i,n,o))}}function $e(e,t,i,n,a){if(a=Fe(t,a,i,n),d&&(a=d(a,i.target,i.kind,t)),"attribute"==i.kind)e._valueToNodeAttribute(t,a,i.target);else{let n=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[we.READ_ONLY]&&t[we.READ_ONLY][n]||t._setPendingProperty(n,a)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,a)}}function Fe(e,t,i,n){if(i.isCompound){let a=e.__dataCompoundStorage[i.target];a[n.compoundIndex]=t,t=a.join("")}return"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}function De(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}function je(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let a=n[t],o=i[t],r=a.bindings;if(r)for(let t=0;t<r.length;t++){let i=r[t];Ke(o,i),qe(o,e,i)}o.__dataHost=e}}function Ke(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,a=new Array(n.length);for(let e=0;e<n.length;e++)a[e]=n[e].literal;let o=t.target;i[o]=a,t.literal&&"property"==t.kind&&(e[o]=t.literal)}}function qe(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,function(e){Ae(e,t,i.target,n.source,n.negate)})}}function Ue(e,t,i,n,a,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:a,dynamicFn:o};for(let a,o=0;o<t.args.length&&(a=t.args[o]);o++)a.literal||e._addPropertyEffect(a.rootProperty,i,{fn:n,info:r,trigger:a});o&&e._addPropertyEffect(t.methodName,i,{fn:n,info:r})}function Ye(e,t,i,n,a){let o=e._methodHost||e,r=o[a.methodName];if(r){let n=e._marshalArgs(a.args,t,i);return r.apply(o,n)}a.dynamicFn||console.warn("method `"+a.methodName+"` not defined")}const Xe=[],We="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ze="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Je="(?:'(?:[^'\\\\]|\\\\.)*')",Ge='(?:"(?:[^"\\\\]|\\\\.)*")',Qe="(?:"+Je+"|"+Ge+")",et="(?:("+We+"|"+Ze+"|"+Qe+")\\s*)",tt="(?:"+et+"(?:,\\s*"+et+")*)",it="(?:\\(\\s*(?:"+tt+"?)\\)\\s*)",nt="("+We+"\\s*"+it+"?)",at="(\\[\\[|{{)\\s*",ot="(?:]]|}})",rt="(?:(!)\\s*)?",st=at+rt+nt+"(?:]]|}})",lt=new RegExp(st,"g");function ct(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function ht(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Xe};if(t[2].trim()){return dt(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function dt(e,t){return t.args=e.map(function(e){let i=pt(e);return i.literal||(t.static=!1),i},this),t}function pt(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=R(t),i.structured=I(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function ut(e,t,i,n){let a=i+".splices";e.notifyPath(a,{indexSplices:n}),e.notifyPath(i+".length",t.length),e.__data[a]={indexSplices:null}}function mt(e,t,i,n,a,o){ut(e,t,i,[{index:n,addedCount:a,removed:o,object:t,type:"splice"}])}function ft(e){return e[0].toUpperCase()+e.substring(1)}const gt=g(e=>{const t=_e(de(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return we}_initializeProperties(){super._initializeProperties(),yt.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[we.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==we.READ_ONLY);let n=Ce(this,t)[e];n||(n=this[t][e]=[]),n.push(i)}_removePropertyEffect(e,t,i){let n=Ce(this,t)[e],a=n.indexOf(i);a>=0&&n.splice(a,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,we.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,we.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,we.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,we.COMPUTE)}_setPendingPropertyOrPath(e,t,i,n){if(n||R(Array.isArray(e)?e[0]:e)!==e){if(!n){let i=q(this,e);if(!(e=U(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return Ne(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||(e[t]=i)}_setPendingProperty(e,t,i){let n=this.__dataHasPaths&&I(e),a=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,a[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[we.NOTIFY]&&this[we.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[we.READ_ONLY]&&this[we.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let n=this.__dataHasPaths;this.__dataHasPaths=!1,Pe(this,t,i,n);let a=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),xe(this,this[we.REFLECT],t,i,n),xe(this,this[we.OBSERVE],t,i,n),a&&Le(this,a,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[we.PROPAGATE]&&xe(this,this[we.PROPAGATE],e,t,i);let n=this.__templateInfo;for(;n;)xe(this,n.propertyEffects,e,t,i,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=j(e),t=j(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=j(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};ut(this,q(this,e,i),i.path,t)}get(e,t){return q(t||this,e)}set(e,t,i){i?U(i,e,t):this[we.READ_ONLY]&&this[we.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},n=q(this,e,i),a=n.length,o=n.push(...t);return t.length&&mt(this,n,i.path,a,t.length,[]),o}pop(e){let t={path:""},i=q(this,e,t),n=Boolean(i.length),a=i.pop();return n&&mt(this,i,t.path,i.length,0,[a]),a}splice(e,t,i,...n){let a,o={path:""},r=q(this,e,o);return t<0?t=r.length-Math.floor(-t):t&&(t=Math.floor(t)),a=2===arguments.length?r.splice(t):r.splice(t,i,...n),(n.length||a.length)&&mt(this,r,o.path,t,n.length,a),a}shift(e){let t={path:""},i=q(this,e,t),n=Boolean(i.length),a=i.shift();return n&&mt(this,i,t.path,0,0,[a]),a}unshift(e,...t){let i={path:""},n=q(this,e,i),a=n.unshift(...t);return t.length&&mt(this,n,i.path,0,t.length,[]),a}notifyPath(e,t){let i;if(1==arguments.length){let n={path:""};t=q(this,e,n),i=n.path}else i=Array.isArray(e)?j(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,we.READ_ONLY),t&&(this["_set"+ft(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let n={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,we.OBSERVE,{fn:Se,info:n,trigger:{name:e}}),i&&this._addPropertyEffect(t,we.OBSERVE,{fn:Se,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let i=ht(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Ue(this,i,we.OBSERVE,Ye,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,we.NOTIFY,{fn:Te,info:{eventName:J(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,we.REFLECT,{fn:Ve,info:{attrName:t}})}_createComputedProperty(e,t,i){let n=ht(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");Ue(this,n,we.COMPUTE,Oe,e,i)}_marshalArgs(e,t,i){const n=this.__data;let a=[];for(let o=0,r=e.length;o<r;o++){let r,s=e[o],l=s.name;if(s.literal?r=s.value:s.structured?void 0===(r=q(n,l))&&(r=i[l]):r=n[l],s.wildcard){let e=0===l.indexOf(t+"."),n=0===t.indexOf(l)&&!e;a[o]={path:n?t:l,value:n?i[t]:r,base:r}}else a[o]=r}return a}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),n=this.__templateInfo==i;if(!n)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t&&((i=Object.create(i)).wasPreBound=n,!n&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=i,i.previousTemplateInfo=e,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(i)}_stampTemplate(e){yt.beginHosting(this);let t=super._stampTemplate(e);yt.endHosting(this);let i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound){let e=i.childNodes=[];for(let i=t.firstChild;i;i=i.nextSibling)e.push(i)}return t.templateInfo=i,je(this,i),this.__dataReady&&xe(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let i=t.childNodes;for(let e=0;e<i.length;e++){let t=i[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,t,i){let n=super._parseTemplateNode(e,t,i);if(e.nodeType===Node.TEXT_NODE){let a=this._parseBindings(e.textContent,t);a&&(e.textContent=ct(a)||" ",Ie(this,t,i,"text","textContent",a),n=!0)}return n}static _parseTemplateNodeAttribute(e,t,i,n,a){let o=this._parseBindings(a,t);if(o){let a=n,r="property";ze.test(n)?r="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),r="attribute");let s=ct(o);return s&&"attribute"==r&&e.setAttribute(n,s),"input"===e.localName&&"value"===a&&e.setAttribute(a,""),e.removeAttribute(a),"property"===r&&(n=Z(n)),Ie(this,t,i,r,n,o,s),!0}return super._parseTemplateNodeAttribute(e,t,i,n,a)}static _parseTemplateNestedTemplate(e,t,i){let n=super._parseTemplateNestedTemplate(e,t,i),a=i.templateInfo.hostProps;for(let e in a)Ie(this,t,i,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}]);return n}static _parseBindings(e,t){let i,n=[],a=0;for(;null!==(i=lt.exec(e));){i.index>a&&n.push({literal:e.slice(a,i.index)});let o=i[1][0],r=Boolean(i[2]),s=i[3].trim(),l=!1,c="",h=-1;"{"==o&&(h=s.indexOf("::"))>0&&(c=s.substring(h+2),s=s.substring(0,h),l=!0);let d=ht(s),p=[];if(d){let{args:e,methodName:i}=d;for(let t=0;t<e.length;t++){let i=e[t];i.literal||p.push(i)}let n=t.dynamicFns;(n&&n[i]||d.static)&&(p.push(i),d.dynamicFn=!0)}else p.push(s);n.push({source:s,mode:o,negate:r,customEvent:l,signature:d,dependencies:p,event:c}),a=lt.lastIndex}if(a&&a<e.length){let t=e.substring(a);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,i,n,a,o){let r;return r=t.signature?Ye(e,i,n,a,t.signature):i!=t.source?q(e,t.source):o&&I(i)?q(e,i):e.__data[i],t.negate&&(r=!r),r}}});class vt{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}const yt=new vt;function _t(e){const t={};for(let i in e){const n=e[i];t[i]="function"==typeof n?{type:n}:n}return t}const bt=g(e=>{const t=se(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof a?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=_t(i))}e.__ownProperties=t}return e.__ownProperties}class a extends t{static get observedAttributes(){const e=this._properties;return e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return a}),wt="3.0.5",zt=g(e=>{const t=bt(gt(e));return class extends t{static get polymerElementVersion(){return wt}static _finalizeClass(){super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&Ct(this.prototype);const e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);var t;e&&this.createObservers(e,this._properties);let i=this.template;i&&("string"==typeof i?(console.error("template getter must return HTMLTemplateElement"),i=null):i=i.cloneNode(!0)),this.prototype._template=i}static createProperties(e){for(let o in e)t=this.prototype,i=o,n=e[o],a=e,n.computed&&(n.readOnly=!0),n.computed&&!t._hasReadOnlyEffect(i)&&t._createComputedProperty(i,n.computed,a),n.readOnly&&!t._hasReadOnlyEffect(i)&&t._createReadOnlyProperty(i,!n.computed),n.reflectToAttribute&&!t._hasReflectEffect(i)&&t._createReflectedProperty(i),n.notify&&!t._hasNotifyEffect(i)&&t._createNotifyingProperty(i),n.observer&&t._createPropertyObserver(i,n.observer,a[n.observer]),t._addPropertyToAttributeMap(i);var t,i,n,a}static createObservers(e,t){const i=this.prototype;for(let n=0;n<e.length;n++)i._createMethodObserver(e[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!u||m)&&(t=z.import(e,"template"),u&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=r(e.url);else{const e=z.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=h,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let n=t[i];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return o(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;!function(e,t,i,n){const a=t.content.querySelectorAll("style"),o=E(t),r=T(i),s=t.content.firstElementChild;for(let i=0;i<r.length;i++){let a=r[i];a.textContent=e._processStyleText(a.textContent,n),t.content.insertBefore(a,s)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],r=a[l];r!==i?(i=i.cloneNode(!0),r.parentNode.insertBefore(i,r)):l++,i.textContent=e._processStyleText(i.textContent,n)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}(this,t,e,i?a(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){if(this.attachShadow)return e?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=a(this.importPath)),a(e,t)}static _parseTemplateContent(e,t,i){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,i)}}});function Ct(e){}class xt{constructor(e){this.value=e.toString()}toString(){return this.value}}function kt(e){if(e instanceof xt)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Mt(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof xt)return kt(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const St=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,n)=>t+Mt(i)+e[n+1],e[0]),i},Lt=zt(HTMLElement);class Ht extends Lt{static get is(){return"simple-colors"}static get properties(){return{accentColor:{name:"accentColor",type:"String",value:"grey",reflectToAttribute:!0,observer:!1},dark:{name:"dark",type:"Boolean",value:!1,reflectToAttribute:!0,observer:!1},colors:{name:"colors",type:"Object",value:null,reflectToAttribute:!1,observer:!1},__wcagContrast:{name:"__wcagContrast",type:"Object",value:null,reflectToAttribute:!1,observer:!1}}}static get template(){return St`
      <style is="custom-style" include="simple-colors"></style> <slot></slot>
    `}connectedCallback(){Ht.requestAvailability(),this.set("colors",Ht.colors),this.set("__wcagContrast",Ht.wcagContrast),this.getContrasts("--simple-colors-default-theme-accent-5"),this.getContrasts("--simple-colors-dark-theme-grey-2",!1),this.getContrasts("--simple-colors-dark-theme-red-11",!0),this.getContrasts("--simple-colors-dark-theme-grey-1",!0),super.connectedCallback()}getContrasts(e,t){t=null!=t&&t;let i=[],n=e.replace("--","").split("-"),a=n[2],o="grey"===n[4];for(let e in this.colors){let r="grey"===this.colors[e]||o?this.__wcagContrast.colorOnColor:this.__wcagContrast.greyOnColor,s=(t?r.large:r.small)[n[5]-1],l=s.minLevelContrast-1,c=s.maxLevelContrast-1;for(let t=l;t<=c;t++)i.push({color:"--simple-colors-"+[a,"theme",e,t+1].join("-"),hex:this.colors[e][t]})}return i}}customElements.define(Ht.is,Ht);const Et={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#ddefff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]};Ht.instance=null,Ht.colors=Et,Ht.wcagContrast={greyOnColor:{large:[{level:1,minLevelContrast:7,maxLevelContrast:12},{level:2,minLevelContrast:7,maxLevelContrast:12},{level:3,minLevelContrast:7,maxLevelContrast:12},{level:4,minLevelContrast:7,maxLevelContrast:12},{level:5,minLevelContrast:8,maxLevelContrast:12},{level:6,minLevelContrast:10,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:3},{level:8,minLevelContrast:1,maxLevelContrast:5},{level:9,minLevelContrast:1,maxLevelContrast:6},{level:10,minLevelContrast:1,maxLevelContrast:6},{level:11,minLevelContrast:1,maxLevelContrast:6},{level:12,minLevelContrast:1,maxLevelContrast:6}],small:[{level:1,minLevelContrast:7,maxLevelContrast:12},{level:2,minLevelContrast:7,maxLevelContrast:12},{level:3,minLevelContrast:7,maxLevelContrast:12},{level:4,minLevelContrast:8,maxLevelContrast:12},{level:5,minLevelContrast:8,maxLevelContrast:12},{level:6,minLevelContrast:11,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:2},{level:8,minLevelContrast:1,maxLevelContrast:7},{level:9,minLevelContrast:1,maxLevelContrast:7},{level:10,minLevelContrast:1,maxLevelContrast:6},{level:11,minLevelContrast:1,maxLevelContrast:6},{level:12,minLevelContrast:1,maxLevelContrast:6}]},colorOnColor:{large:[{level:1,minLevelContrast:7,maxLevelContrast:12},{level:2,minLevelContrast:7,maxLevelContrast:12},{level:3,minLevelContrast:8,maxLevelContrast:12},{level:4,minLevelContrast:9,maxLevelContrast:12},{level:5,minLevelContrast:10,maxLevelContrast:12},{level:6,minLevelContrast:11,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:2},{level:8,minLevelContrast:1,maxLevelContrast:3},{level:9,minLevelContrast:1,maxLevelContrast:4},{level:10,minLevelContrast:1,maxLevelContrast:5},{level:11,minLevelContrast:1,maxLevelContrast:6},{level:12,minLevelContrast:1,maxLevelContrast:6}],small:[{level:1,minLevelContrast:8,maxLevelContrast:12},{level:2,minLevelContrast:8,maxLevelContrast:12},{level:3,minLevelContrast:9,maxLevelContrast:12},{level:4,minLevelContrast:9,maxLevelContrast:12},{level:5,minLevelContrast:11,maxLevelContrast:12},{level:6,minLevelContrast:12,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:1},{level:8,minLevelContrast:1,maxLevelContrast:2},{level:9,minLevelContrast:1,maxLevelContrast:4},{level:10,minLevelContrast:1,maxLevelContrast:4},{level:11,minLevelContrast:1,maxLevelContrast:5},{level:12,minLevelContrast:1,maxLevelContrast:5}]}},Ht.requestAvailability=function(e){Ht.instance||(Ht.instance=document.createElement("simple-colors"),document.body.appendChild(Ht.instance))};const Tt=function(e,t,i){return i?e[e.length-t-1]:e[t]},At=function(e,t){let i=[];for(var n in Et)i.push(Vt(e,n,Et[n],t));return i.join("")},Vt=function(e,t,i,n){let a=[];for(let o=0;o<i.length;o++)a.push("  --simple-colors-"+e+"-theme-"+t+"-"+(o+1)+": "+Tt(i,o,n)+";\n");return a.join("")},Pt=function(){let e=Et.grey,t=[];return t.push(Rt(":host, :host * ::slotted(*)",Vt("default","accent",e,!1)+At("default",!1))),t.push(Rt(":host, :host * ::slotted(*)",Vt("light","accent",e,!1)+At("light",!1))),t.push(Rt(":host, :host * ::slotted(*)",Vt("dark","accent",e,!0)+At("dark",!0))),t.push(Rt(":host([dark]), :host([dark]) * ::slotted(*)",Vt("default","accent",e,!0)+At("default",!0))),t.join("")},Ot=function(){let e=[];for(let t in Et)e.push(Rt(':host([accent-color="'+t+'"]), :host([accent-color="'+t+'"]) ::slotted(*)',[Vt("default","accent",Et[t],!1),Vt("light","accent",Et[t],!1),Vt("dark","accent",Et[t],!0)].join(""))),e.push(Rt(':host([dark][accent-color="'+t+'"]), :host([dark][accent-color="'+t+'"]) ::slotted(*)',[Vt("default","accent",Et[t],!0)].join("")));return e.join("")},Nt=function(){let e=["default","light","dark"],t=[];for(let i=0;i<e.length;i++){let n=[];for(let t=0;t<Et.grey.length;t++){let a="simple-colors-"+e[i]+"-theme";n.push(It(a+"-accent-"+(t+1)));for(let e in Et)n.push(It(a+"-"+e+"-"+(t+1),Et[e][t]))}t.push("<style>\n"+n.join("")+"\n</style>\n")}return t.join("")},It=function(e,t){return["."+e+", ::slotted(."+e+") { background-color: var(--"+e+"); }\n","."+e+"-text, ::slotted(."+e+"-text) { color: var(--"+e+"); }\n","."+e+"-border, ::slotted(."+e+"-border) { border: 1px solid var(--"+e+"); }\n"].join("")},Rt=function(e,t){return"<style>\n"+e+" {\n"+t+"\n}\n</style>\n"},Bt=document.createElement("dom-module"),$t=document.createElement("template");$t.innerHTML=Pt()+Ot()+Nt(),Bt.appendChild(St`
    ${$t}
  `),Bt.register("simple-colors");const Ft=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Dt,jt;function Kt(e){Dt=(!e||!e.shimcssproperties)&&(Ft||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(jt=window.ShadyCSS.cssBuild);const qt=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Dt=window.ShadyCSS.nativeCss:window.ShadyCSS?(Kt(window.ShadyCSS),window.ShadyCSS=void 0):Kt(window.WebComponents&&window.WebComponents.flags);const Ut=Dt;class Yt{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Xt(e){return Jt(Zt(e=Wt(e)),e)}function Wt(e){return e.replace(si.comments,"").replace(si.port,"")}function Zt(e){let t=new Yt;t.start=0,t.end=e.length;let i=t;for(let n=0,a=e.length;n<a;n++)if(e[n]===oi){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;(i=new Yt).start=n+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[n]===ri&&(i.end=n+1,i=i.parent||t);return t}function Jt(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let n=e.previous?e.previous.end:e.parent.start;i=(i=(i=Gt(i=t.substring(n,e.start-1))).replace(si.multipleSpaces," ")).substring(i.lastIndexOf(";")+1);let a=e.parsedSelector=e.selector=i.trim();e.atRule=0===a.indexOf(hi),e.atRule?0===a.indexOf(ci)?e.type=ai.MEDIA_RULE:a.match(si.keyframesRule)&&(e.type=ai.KEYFRAMES_RULE,e.keyframesName=e.selector.split(si.multipleSpaces).pop()):0===a.indexOf(li)?e.type=ai.MIXIN_RULE:e.type=ai.STYLE_RULE}let n=e.rules;if(n)for(let e,i=0,a=n.length;i<a&&(e=n[i]);i++)Jt(e,t);return e}function Gt(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}function Qt(e,t,i=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!ei(i))for(let e,a=0,o=i.length;a<o&&(e=i[a]);a++)n=Qt(e,t,n);else(n=(n=t?e.cssText:ti(e.cssText)).trim())&&(n="  "+n+"\n")}return n&&(e.selector&&(i+=e.selector+" "+oi+"\n"),i+=n,e.selector&&(i+=ri+"\n\n")),i}function ei(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(li)}function ti(e){return ni(e=ii(e))}function ii(e){return e.replace(si.customProp,"").replace(si.mixinProp,"")}function ni(e){return e.replace(si.mixinApply,"").replace(si.varApply,"")}const ai={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},oi="{",ri="}",si={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},li="--",ci="@media",hi="@",di=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,pi=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ui=/@media\s(.*)/,mi=new Set,fi="shady-unscoped";function gi(e){const t=e.textContent;if(!mi.has(t)){mi.add(t);const i=e.cloneNode(!0);document.head.appendChild(i)}}function vi(e){return e.hasAttribute(fi)}function yi(e,t){return e?("string"==typeof e&&(e=Xt(e)),t&&bi(e,t),Qt(e,Ut)):""}function _i(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Xt(e.textContent)),e.__cssRules||null}function bi(e,t,i,n){if(!e)return;let a=!1,o=e.type;if(n&&o===ai.MEDIA_RULE){let t=e.selector.match(ui);t&&(window.matchMedia(t[1]).matches||(a=!0))}o===ai.STYLE_RULE?t(e):i&&o===ai.KEYFRAMES_RULE?i(e):o===ai.MIXIN_RULE&&(a=!0);let r=e.rules;if(r&&!a)for(let e,a=0,o=r.length;a<o&&(e=r[a]);a++)bi(e,t,i,n)}function wi(e,t){let i=0;for(let n=t,a=e.length;n<a;n++)if("("===e[n])i++;else if(")"===e[n]&&0==--i)return n;return-1}function zi(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let n=wi(e,i+3),a=e.substring(i+4,n),o=e.substring(0,i),r=zi(e.substring(n+1),t),s=a.indexOf(",");return-1===s?t(o,a.trim(),"",r):t(o,a.substring(0,s).trim(),a.substring(s+1).trim(),r)}const Ci=window.ShadyDOM&&window.ShadyDOM.wrap||(e=>e);function xi(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}function ki(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const n=i[e];vi(n)?Ft||(gi(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}const Mi="css-build";function Si(e){if(void 0!==jt)return jt;if(void 0===e.__cssBuild){const t=e.getAttribute(Mi);if(t)e.__cssBuild=t;else{const t=Hi(e);""!==t&&Ei(e),e.__cssBuild=t}}return e.__cssBuild||""}function Li(e){return""!==Si(e)}function Hi(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===Mi)return e[1]}return""}function Ei(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}function Ti(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function Ai(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}function Vi(e){const t=pi.test(e)||di.test(e);return pi.lastIndex=0,di.lastIndex=0,t}const Pi=/;\s*/m,Oi=/^\s*(initial)|(inherit)\s*$/,Ni=/\s*!important/,Ii="_-_";class Ri{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Bi=null;class $i{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Ri}detectMixin(e){return Vi(e)}gatherStyles(e){const t=ki(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=_i(e);return this.transformRules(i,t),e.textContent=yi(i),i}transformCustomStyle(e){let t=_i(e);return bi(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=yi(t),t}transformRules(e,t){this._currentElement=t,bi(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(di,(e,i,n,a)=>this._produceCssProperties(e,i,n,a,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return bi(t,t=>{(n=n||t===e)||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=pi.exec(e);){let n=i[0],a=i[1],o=i.index,r=o+n.indexOf("@apply"),s=o+n.length,l=e.slice(0,r),c=e.slice(s),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(l));let d=this._atApplyToCssProperties(a,h);e=`${l}${d}${c}`,pi.lastIndex=o+d.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Pi,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let a,o,r;this._currentElement&&(n.dependants[this._currentElement]=!0);const s=n.properties;for(a in s)r=t&&t[a],o=[a,": var(",e,Ii,a],r&&o.push(",",r.replace(Ni,"")),o.push(")"),Ni.test(s[a])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=Oi.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,n,a=e.split(";"),o={};for(let e,r,s=0;s<a.length;s++)(e=a[s])&&(r=e.split(":")).length>1&&(i=r[0].trim(),n=r.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(i,n)),o[i]=n);return o}_invalidateMixinEntry(e){if(Bi)for(let t in e.dependants)t!==this._currentElement&&Bi(t)}_produceCssProperties(e,t,i,n,a){if(i&&zi(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let o=this._consumeCssProperties(""+n,a),r=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(o,!0),l=s,c=this._map.get(t),h=c&&c.properties;h?l=Object.assign(Object.create(h),s):this._map.set(t,l);let d,p,u=[],m=!1;for(d in l)void 0===(p=s[d])&&(p="initial"),!h||d in h||(m=!0),u.push(`${t}${Ii}${d}: ${p}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(r=`${e};${r}`),`${r}${u.join("; ")};`}}$i.prototype.detectMixin=$i.prototype.detectMixin,$i.prototype.transformStyle=$i.prototype.transformStyle,$i.prototype.transformCustomStyle=$i.prototype.transformCustomStyle,$i.prototype.transformRules=$i.prototype.transformRules,$i.prototype.transformRule=$i.prototype.transformRule,$i.prototype.transformTemplate=$i.prototype.transformTemplate,$i.prototype._separator=Ii,Object.defineProperty($i.prototype,"invalidCallback",{get:()=>Bi,set(e){Bi=e}});const Fi={},Di="_applyShimCurrentVersion",ji="_applyShimNextVersion",Ki="_applyShimValidatingVersion",qi=Promise.resolve();function Ui(e){let t=Fi[e];t&&Yi(t)}function Yi(e){e[Di]=e[Di]||0,e[Ki]=e[Ki]||0,e[ji]=(e[ji]||0)+1}function Xi(e){return e[Di]===e[ji]}function Wi(e){return!Xi(e)&&e[Ki]===e[ji]}function Zi(e){e[Ki]=e[ji],e._validating||(e._validating=!0,qi.then(function(){e[Di]=e[ji],e._validating=!1}))}let Ji,Gi=null,Qi=window.HTMLImports&&window.HTMLImports.whenReady||null;function en(e){requestAnimationFrame(function(){Qi?Qi(e):(Gi||(Gi=new Promise(e=>{Ji=e}),"complete"===document.readyState?Ji():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Ji()})),Gi.then(function(){e&&e()}))})}const tn="__seenByShadyCSS",nn="__shadyCSSCachedStyle";let an=null,on=null;class rn{constructor(){this.customStyles=[],this.enqueued=!1,en(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&on&&(this.enqueued=!0,en(on))}addCustomStyle(e){e[tn]||(e[tn]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[nn])return e[nn];let t;return t=e.getStyle?e.getStyle():e}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[nn])continue;const n=this.getStyleForCustomStyle(i);if(n){const e=n.__appliedElement||n;an&&an(e),i[nn]=e}}return e}}rn.prototype.addCustomStyle=rn.prototype.addCustomStyle,rn.prototype.getStyleForCustomStyle=rn.prototype.getStyleForCustomStyle,rn.prototype.processStyles=rn.prototype.processStyles,Object.defineProperties(rn.prototype,{transformCallback:{get:()=>an,set(e){an=e}},validateCallback:{get:()=>on,set(e){let t=!1;on||(t=!0),on=e,t&&this.enqueueDocumentValidation()}}});const sn=new $i;class ln{constructor(){this.customStyleInterface=null,sn.invalidCallback=Ui}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=(e=>{sn.transformCustomStyle(e)}),this.customStyleInterface.validateCallback=(()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})}))}prepareTemplate(e,t){if(this.ensure(),Li(e))return;Fi[t]=e;let i=sn.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&sn.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Ti(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=xi(e),i=Fi[t];if((!i||!Li(i))&&i&&!Xi(i)){Wi(i)||(this.prepareTemplate(i,t),Zi(i));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=yi(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new ln;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Ai(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Ut,nativeShadow:Ft,cssBuild:jt,disableRuntime:qt},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=sn;class cn{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof cn?e.cancel():e=new cn,e.setConfig(t,i),e}}let hn="string"==typeof document.head.style.touchAction,dn="__polymerGestures",pn="__polymerGesturesHandled",un="__polymerGesturesTouchAction",mn=25,fn=5,gn=2,vn=2500,yn=["mousedown","mousemove","mouseup","click"],_n=[0,1,4,2],bn=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function wn(e){return yn.indexOf(e)>-1}let zn=!1;function Cn(e){if(!wn(e)&&"touchend"!==e)return hn&&zn&&p?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){zn=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let xn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const kn=[],Mn={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Sn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ln(e){return Mn[e.localName]||!1}function Hn(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let En=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[pn]={skip:!0},"click"===e.type)){let t=!1,i=e.composedPath&&e.composedPath();if(i)for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)kn.push(i[e]);else if(Ln(i[e])){let n=Hn(i[e]);for(let e=0;e<n.length;e++)t=t||kn.indexOf(n[e])>-1}if(i[e]===On.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Tn(e){let t=xn?["click"]:yn;for(let i,n=0;n<t.length;n++)i=t[n],e?(kn.length=0,document.addEventListener(i,En,!0)):document.removeEventListener(i,En,!0)}function An(e){On.mouse.mouseIgnoreJob||Tn(!0);On.mouse.target=e.composedPath()[0],On.mouse.mouseIgnoreJob=cn.debounce(On.mouse.mouseIgnoreJob,ae.after(vn),function(){Tn(),On.mouse.target=null,On.mouse.mouseIgnoreJob=null})}function Vn(e){let t=e.type;if(!wn(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!bn&&(t=_n[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}function Pn(e){if("click"===e.type){if(0===e.detail)return!0;let t=Dn(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,a=e.pageY;return!(n>=i.left&&n<=i.right&&a>=i.top&&a<=i.bottom)}return!1}let On={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Nn(e){let t="auto",i=e.composedPath&&e.composedPath();if(i)for(let e,n=0;n<i.length;n++)if((e=i[n])[un]){t=e[un];break}return t}function In(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Rn(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",An,!!zn&&{passive:!0});const Bn={},$n=[];function Fn(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){if(n===(n=n.shadowRoot.elementFromPoint(e,t)))break;n&&(i=n)}return i}function Dn(e){if(e.composedPath){const t=e.composedPath();return t.length>0?t[0]:e.target}return e.target}function jn(e){let t,i=e.type,n=e.currentTarget[dn];if(!n)return;let a=n[i];if(a){if(!e[pn]&&(e[pn]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(On.touch.id=t.identifier),On.touch.id!==t.identifier)return;hn||"touchstart"!==i&&"touchmove"!==i||Kn(e)}if(!(t=e[pn]).skip){for(let i,n=0;n<$n.length;n++)a[(i=$n[n]).name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let n,o=0;o<$n.length;o++)a[(n=$n[o]).name]&&!t[n.name]&&(t[n.name]=!0,n[i](e))}}}function Kn(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)On.touch.x=t.clientX,On.touch.y=t.clientY,On.touch.scrollDecided=!1;else if("touchmove"===i){if(On.touch.scrollDecided)return;On.touch.scrollDecided=!0;let i=Nn(e),n=!1,a=Math.abs(On.touch.x-t.clientX),o=Math.abs(On.touch.y-t.clientY);e.cancelable&&("none"===i?n=!0:"pan-x"===i?n=o>a:"pan-y"===i&&(n=a>o)),n?e.preventDefault():Qn("track")}}function qn(e,t,i){return!!Bn[t]&&(Yn(e,t,i),!0)}function Un(e,t,i){return!!Bn[t]&&(Xn(e,t,i),!0)}function Yn(e,t,i){let n=Bn[t],a=n.deps,o=n.name,r=e[dn];r||(e[dn]=r={});for(let t,i,n=0;n<a.length;n++)t=a[n],xn&&wn(t)&&"click"!==t||((i=r[t])||(r[t]=i={_count:0}),0===i._count&&e.addEventListener(t,jn,Cn(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),n.touchAction&&Jn(e,n.touchAction)}function Xn(e,t,i){let n=Bn[t],a=n.deps,o=n.name,r=e[dn];if(r)for(let t,i,n=0;n<a.length;n++)(i=r[t=a[n]])&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,jn,Cn(t)));e.removeEventListener(t,i)}function Wn(e){$n.push(e);for(let t=0;t<e.emits.length;t++)Bn[e.emits[t]]=e}function Zn(e){for(let t,i=0;i<$n.length;i++){t=$n[i];for(let i,n=0;n<t.emits.length;n++)if((i=t.emits[n])===e)return t}return null}function Jn(e,t){hn&&e instanceof HTMLElement&&oe.run(()=>{e.style.touchAction=t}),e[un]=t}function Gn(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,e.dispatchEvent(n),n.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Qn(e){let t=Zn(e);t.info&&(t.info.prevent=!0)}function ea(e,t,i,n){t&&Gn(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(e){return Qn(e)}})}function ta(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),a=Math.abs(e.y-i);return n>=fn||a>=fn}function ia(e,t,i){if(!t)return;let n,a=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],r=o.x-e.x,s=o.y-e.y,l=0;a&&(n=o.x-a.x,l=o.y-a.y),Gn(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:r,dy:s,ddx:n,ddy:l,sourceEvent:i,hover:function(){return Fn(i.clientX,i.clientY)}})}function na(e,t,i){let n=Math.abs(t.clientX-e.x),a=Math.abs(t.clientY-e.y),o=Dn(i||t);!o||Sn[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(a)||n<=mn&&a<=mn||Pn(t))&&(e.prevent||Gn(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}Wn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Rn(this.info)},mousedown:function(e){if(!Vn(e))return;let t=Dn(e),i=this;In(this.info,function(e){Vn(e)||(ea("up",t,e),Rn(i.info))},function(e){Vn(e)&&ea("up",t,e),Rn(i.info)}),ea("down",t,e)},touchstart:function(e){ea("down",Dn(e),e.changedTouches[0],e)},touchend:function(e){ea("up",Dn(e),e.changedTouches[0],e)}}),Wn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>gn&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Rn(this.info)},mousedown:function(e){if(!Vn(e))return;let t=Dn(e),i=this,n=function(e){let n=e.clientX,a=e.clientY;ta(i.info,n,a)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Qn("tap"),i.info.addMove({x:n,y:a}),Vn(e)||(i.info.state="end",Rn(i.info)),t&&ia(i.info,t,e),i.info.started=!0)};In(this.info,n,function(e){i.info.started&&n(e),Rn(i.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Dn(e),i=e.changedTouches[0],n=i.clientX,a=i.clientY;ta(this.info,n,a)&&("start"===this.info.state&&Qn("tap"),this.info.addMove({x:n,y:a}),ia(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Dn(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),ia(this.info,t,i))}}),Wn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Vn(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Vn(e)&&na(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){na(this.info,e.changedTouches[0],e)}});const aa=Dn,oa=qn,ra=g(e=>{return class extends e{_addEventListenerToNode(e,t,i){qn(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Un(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}}),sa=/:host\(:dir\((ltr|rtl)\)\)/g,la=':host([dir="$1"])',ca=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,ha=':host([dir="$2"]) $1',da=[];let pa=null,ua="";function ma(){ua=document.documentElement.getAttribute("dir")}function fa(e){if(!e.__autoDirOptOut){e.setAttribute("dir",ua)}}function ga(){ma(),ua=document.documentElement.getAttribute("dir");for(let e=0;e<da.length;e++)fa(da[e])}function va(){pa&&pa.takeRecords().length&&ga()}const ya=g(e=>{pa||(ma(),(pa=new MutationObserver(ga)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=de(e);class i extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),e=this._replaceDirInCssText(e)}static _replaceDirInCssText(e){let t=e;return e!==(t=(t=t.replace(sa,la)).replace(ca,ha))&&(this.__activateDir=!0),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(va(),da.push(this),fa(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=da.indexOf(this);e>-1&&da.splice(e,1)}}}return i.__activateDir=!1,i});let _a=!1,ba=[],wa=[];function za(){_a=!0,requestAnimationFrame(function(){_a=!1,Ca(ba),setTimeout(function(){xa(wa)})})}function Ca(e){for(;e.length;)ka(e.shift())}function xa(e){for(let t=0,i=e.length;t<i;t++)ka(e.shift())}function ka(e){const t=e[0],i=e[1],n=e[2];try{i.apply(t,n)}catch(e){setTimeout(()=>{throw e})}}function Ma(e,t,i){_a||za(),wa.push([e,t,i])}function Sa(){document.body.removeAttribute("unresolved")}function La(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Sa():window.addEventListener("DOMContentLoaded",Sa);const Ha=0,Ea=1,Ta=2,Aa=3;function Va(e,t,i,n,a,o){let r=o-a+1,s=i-t+1,l=new Array(r);for(let e=0;e<r;e++)l[e]=new Array(s),l[e][0]=e;for(let e=0;e<s;e++)l[0][e]=e;for(let i=1;i<r;i++)for(let o=1;o<s;o++)if(Ba(e[t+o-1],n[a+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}function Pa(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],a=[];for(;t>0||i>0;){if(0==t){a.push(Ta),i--;continue}if(0==i){a.push(Aa),t--;continue}let o,r=e[t-1][i-1],s=e[t-1][i],l=e[t][i-1];(o=s<l?s<r?s:r:l<r?l:r)==r?(r==n?a.push(Ha):(a.push(Ea),n=r),t--,i--):o==s?(a.push(Aa),t--,n=s):(a.push(Ta),i--,n=l)}return a.reverse(),a}function Oa(e,t,i,n,a,o){let r,s=0,l=0,c=Math.min(i-t,o-a);if(0==t&&0==a&&(s=Na(e,n,c)),i==e.length&&o==n.length&&(l=Ia(e,n,c-s)),a+=s,o-=l,(i-=l)-(t+=s)==0&&o-a==0)return[];if(t==i){for(r=La(t,[],0);a<o;)r.removed.push(n[a++]);return[r]}if(a==o)return[La(t,[],i-t)];let h=Pa(Va(e,t,i,n,a,o));r=void 0;let d=[],p=t,u=a;for(let e=0;e<h.length;e++)switch(h[e]){case Ha:r&&(d.push(r),r=void 0),p++,u++;break;case Ea:r||(r=La(p,[],0)),r.addedCount++,p++,r.removed.push(n[u]),u++;break;case Ta:r||(r=La(p,[],0)),r.addedCount++,p++;break;case Aa:r||(r=La(p,[],0)),r.removed.push(n[u]),u++}return r&&d.push(r),d}function Na(e,t,i){for(let n=0;n<i;n++)if(!Ba(e[n],t[n]))return n;return i}function Ia(e,t,i){let n=e.length,a=t.length,o=0;for(;o<i&&Ba(e[--n],t[--a]);)o++;return o}function Ra(e,t){return Oa(e,0,e.length,t,0,t.length)}function Ba(e,t){return e===t}function $a(e){return"slot"===e.localName}class Fa{static getFlattenedNodes(e){return $a(e)?(e=e).assignedNodes({flatten:!0}):Array.from(e.childNodes).map(e=>$a(e)?(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=(()=>{this._schedule()}),this.connect(),this._schedule()}connect(){$a(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){$a(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,oe.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Ra(t,this._effectiveNodes);for(let t,n=0;n<i.length&&(t=i[n]);n++)for(let i,n=0;n<t.removed.length&&(i=t.removed[n]);n++)e.removedNodes.push(i);for(let n,a=0;a<i.length&&(n=i[a]);a++)for(let i=n.index;i<n.index+n.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];$a(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];$a(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}}let Da=[];const ja=function(e){Da.push(e)};function Ka(){const e=Boolean(Da.length);for(;Da.length;)try{Da.shift().flush()}catch(e){setTimeout(()=>{throw e})}return e}const qa=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Ka()}while(e||t)},Ua=Element.prototype,Ya=Ua.matches||Ua.matchesSelector||Ua.mozMatchesSelector||Ua.msMatchesSelector||Ua.oMatchesSelector||Ua.webkitMatchesSelector,Xa=function(e,t){return Ya.call(e,t)};class Wa{constructor(e){this.node=e}observeNodes(e){return new Fa(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(this.node.contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=t.parentNode||t.host;return t===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=this.node.assignedSlot;for(;t;)e.push(t),t=t.assignedSlot;return e}importNode(e,t){return(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(e,t)}getEffectiveChildNodes(){return Fa.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n,a=0,o=t.length;a<o&&(n=t[a]);a++)n.nodeType===Node.ELEMENT_NODE&&Xa(n,e)&&i.push(n);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Za(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Ja(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}function Ga(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}class Qa{constructor(e){this.event=e}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Wa.prototype.cloneNode,Wa.prototype.appendChild,Wa.prototype.insertBefore,Wa.prototype.removeChild,Wa.prototype.replaceChild,Wa.prototype.setAttribute,Wa.prototype.removeAttribute,Wa.prototype.querySelector,Wa.prototype.querySelectorAll,Wa.prototype.parentNode,Wa.prototype.firstChild,Wa.prototype.lastChild,Wa.prototype.nextSibling,Wa.prototype.previousSibling,Wa.prototype.firstElementChild,Wa.prototype.lastElementChild,Wa.prototype.nextElementSibling,Wa.prototype.previousElementSibling,Wa.prototype.childNodes,Wa.prototype.children,Wa.prototype.classList,Wa.prototype.textContent,Wa.prototype.innerHTML,Za(Wa.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Ja(Wa.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),Ga(Wa.prototype,["textContent","innerHTML"]);const eo=function(e){if(!(e=e||document).__domApi){let t;t=e instanceof Event?new Qa(e):new Wa(e),e.__domApi=t}return e.__domApi};let to=window.ShadyCSS;const io=g(e=>{const t=ya(ra(zt(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this._applyListeners()}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,n){t!==i&&(super.attributeChangedCallback(e,t,i,n),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(e.__hasRegisterFinished=!0,this._registered()),super._initializeProperties(),this.root=this,this.created()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let n,a=0;a<i.length&&(n=i[a]);a++){let i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=t,(i.node||this).dispatchEvent(n),n}listen(e,t,i){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),a=n.get(e);a||(a={},n.set(e,a));let o=t+i;a[o]||(a[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),a=t+i,o=n&&n[a];o&&(this._removeEventListenerFromNode(e,t,o),n[a]=null)}setScrollDirection(e,t){Jn(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=this.getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return eo(this).getEffectiveChildNodes()}queryDistributedElements(e){return eo(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,n=0;i=e[n];n++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?eo(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}isLightDescendant(e){return this!==e&&this.contains(e)&&this.getRootNode()===e.getRootNode()}isLocalDescendant(e){return this.root===e.getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return to.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=cn.debounce(this._debouncers[e],i>0?ae.after(i):oe,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?ae.run(e.bind(this),t):~oe.run(e.bind(this))}cancelAsync(e){e<0?oe.cancel(~e):ae.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return Xa(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(i.setAttribute(e,""),!0):(i.removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,n){n=n||this,this.transform("translate3d("+e+","+t+","+i+")",n)}arrayDelete(e,t){let i;if(Array.isArray(e)){if((i=e.indexOf(t))>=0)return e.splice(i,1)}else{if((i=q(this,e).indexOf(t))>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n});let no={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};function ao(e,t){if(!e)return t=t;t=io(t),Array.isArray(e)||(e=[e]);let i=t.prototype.behaviors;return t=oo(e=ro(e,null,i),t),i&&(e=i.concat(e)),t.prototype.behaviors=e,t}function oo(e,t){for(let i=0;i<e.length;i++){let n=e[i];n&&(t=Array.isArray(n)?oo(n,t):so(n,t))}return t}function ro(e,t,i){t=t||[];for(let n=e.length-1;n>=0;n--){let a=e[n];a?Array.isArray(a)?ro(a,t):t.indexOf(a)<0&&(!i||i.indexOf(a)<0)&&t.unshift(a):console.warn("behavior is null, check for missing or 404 import")}return t}function so(e,t){class i extends t{static get properties(){return e.properties}static get observers(){return e.observers}created(){super.created(),e.created&&e.created.call(this)}_registered(){super._registered(),e.beforeRegister&&e.beforeRegister.call(Object.getPrototypeOf(this)),e.registered&&e.registered.call(Object.getPrototypeOf(this))}_applyListeners(){if(super._applyListeners(),e.listeners)for(let t in e.listeners)this._addMethodEventListenerToNode(this,t,e.listeners[t])}_ensureAttributes(){if(e.hostAttributes)for(let t in e.hostAttributes)this._ensureAttribute(t,e.hostAttributes[t]);super._ensureAttributes()}ready(){super.ready(),e.ready&&e.ready.call(this)}attached(){super.attached(),e.attached&&e.attached.call(this)}detached(){super.detached(),e.detached&&e.detached.call(this)}attributeChanged(t,i,n){super.attributeChanged(t,i,n),e.attributeChanged&&e.attributeChanged.call(this,t,i,n)}}i.generatedFrom=e;for(let t in e)if(!(t in no)){let n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(i.prototype,t,n)}return i}const lo=function(e,t){e||console.warn("Polymer's Class function requires `info` argument");const i=e.behaviors?ao(e.behaviors,HTMLElement):io(HTMLElement),n=so(e,t?t(i):i);return n.is=e.is,n},co=function(e){let t;return t="function"==typeof e?e:co.Class(e),customElements.define(t.is,t),t};function ho(e,t,i,n,a){let o;a&&(o="object"==typeof i&&null!==i)&&(n=e.__dataTemp[t]);let r=n!==i&&(n==n||i==i);return o&&r&&(e.__dataTemp[t]=i),r}co.Class=lo;const po=g(e=>{return class extends e{_shouldPropertyChange(e,t,i){return ho(this,e,t,i,!0)}}}),uo=g(e=>{return class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return ho(this,e,t,i,this.mutableData)}}});po._mutablePropertyChange=ho;let mo=null;function fo(){return mo}fo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:fo,writable:!0}});const go=gt(fo),vo=po(go);function yo(e,t){mo=e,Object.setPrototypeOf(e,t.prototype),new t,mo=null}const _o=gt(class{});class bo extends _o{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){let t=this.children;for(let i=0;i<t.length;i++){let n=t[i];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),n.parentNode.replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&e.parentNode.replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}bo.prototype.__dataHost,bo.prototype.__templatizeOptions,bo.prototype._methodHost,bo.prototype.__templatizeOwner,bo.prototype.__hostProps;const wo=po(bo);function zo(e){let t=e.__dataHost;return t&&t._methodHost||t}function Co(e,t,i){let n=i.mutableData?wo:bo,a=class extends n{};return a.prototype.__templatizeOptions=i,a.prototype._bindTemplate(e),Mo(a,e,t,i),a}function xo(e,t,i){let n=i.forwardHostProp;if(n){let a=t.templatizeTemplateClass;if(!a){let e=i.mutableData?vo:go;a=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let e in o)a.prototype._addPropertyEffect("_host_"+e,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ko(e,n)}),a.prototype._createNotifyingProperty("_host_"+e)}yo(e,a),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function ko(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring("_host_".length),n[i])}}function Mo(e,t,i,n){let a=i.hostProps||{};for(let t in n.instanceProps){delete a[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:So(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in a)e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Lo()})}function So(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function Lo(){return function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}}function Ho(e,t,i){if(u&&!zo(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:bo)._parseTemplate(e),a=n.templatizeInstanceClass;a||(a=Co(e,n,i),n.templatizeInstanceClass=a),xo(e,n,i);let o=class extends a{};return o.prototype._methodHost=zo(e),o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=n.hostProps,o=o}function Eo(e,t){let i;for(;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=t.parentNode;return null}const To=ra(uo(gt(HTMLElement)));class Ao extends To{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),u)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(!(e=e||this.querySelector("template"))){let t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",Ao);const Vo=uo(Lt);class Po extends Vo{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=this.parentNode;for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=Ho(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let i=this.__instances;for(let n,a=0;a<i.length&&(n=i[a]);a++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if(D(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let a=F(this.as,"items."+n,t);this.notifyPath(a,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=cn.debounce(this.__renderDebouncer,t>0?ae.after(t):oe,e.bind(this)),ja(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),qa()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,n)=>this.__filterFn(e[t],i,n))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));const i=this.__itemsIdxToInstIdx={};let n=0;const a=Math.min(t.length,this.__limit);for(;n<a;n++){let a=this.__instances[n],o=t[n],r=e[o];i[o]=n,a?(a._setPendingProperty(this.as,r),a._setPendingProperty(this.indexAs,n),a._setPendingProperty(this.itemsIndexAs,o),a._flushProperties()):this.__insertInstance(r,n,o)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];for(let e=0;e<t.children.length;e++){let i=t.children[e];t.root.appendChild(i)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):n=this.__stampInstance(e,t,i);let a=this.__instances[t+1],o=a?a.children[0]:this;return this.parentNode.insertBefore(n.root,o),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),a=n<0?i:i.substring(0,n);if(a==parseInt(a,10)){let e=n<0?"":i.substring(n+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[a],r=this.__instances[o];if(r){let i=this.as+(e?"."+e:"");r._setPendingPropertyOrPath(i,t,!1,!0),r._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Eo(this.template,e)}}customElements.define(Po.is,Po);class Oo extends Lt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=cn.debounce(this.__renderDebouncer,oe,()=>this.__render()),ja(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){qa()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=this.parentNode;if(e){if(!this.__ctor){let e=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=Ho(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[R(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(this.previousSibling!==t[t.length-1])for(let i,n=0;n<t.length&&(i=t[n]);n++)e.insertBefore(i,this)}}else this.__instance=new this.__ctor,e.insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=e[0].parentNode;if(t)for(let i,n=0;n<e.length&&(i=e[n]);n++)t.removeChild(i)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Oo.is,Oo);let No=g(e=>{let t=zt(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if("items"==i){let i=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=Ra(i,n);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if("items.splices"==t.path)this.__applySplices(t.value.indexSplices);else{let e=i.slice("items.".length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let n=e[i];t.forEach((e,i)=>{e<n.index||(e>=n.index+n.removed.length?t.set(i,e+n.addedCount-n.removed.length):t.set(i,-1))});for(let e=0;e<n.addedCount;e++){let i=n.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach((e,n)=>{e<0?(this.multi?this.splice("selected",i,1):this.selected=this.selectedItem=null,t.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths("items."+t,"selected."+e++)})}else this.__selectedMap.forEach(e=>{this.linkPaths("selected","items."+e),this.linkPaths("selectedItem","items."+e)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((i,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths["items."+e];if(t)return parseInt(t.slice("selected.".length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice("selected",i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push("selected",t):this.selected=this.selectedItem=t)}}}),Io=No(Lt);class Ro extends Io{static get is(){return"array-selector"}}customElements.define(Ro.is,Ro);const Bo=new rn;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){Bo.processStyles(),Ti(e,t)},styleElement(e){Bo.processStyles()},styleDocument(e){Bo.processStyles(),Ti(document.body,e)},getComputedStyleValue:(e,t)=>Ai(e,t),flushCustomStyles(){},nativeCss:Ut,nativeShadow:Ft,cssBuild:jt,disableRuntime:qt}),window.ShadyCSS.CustomStyleInterface=Bo;const $o="include",Fo=window.ShadyCSS.CustomStyleInterface;class Do extends HTMLElement{constructor(){super(),this._style=null,Fo.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute($o);return t&&(e.removeAttribute($o),e.textContent=V(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}let jo;window.customElements.define("custom-style",Do),jo=po._mutablePropertyChange;const Ko=io(HTMLElement).prototype;var qo=new Set;const Uo={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(qo.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():s||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=eo(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(qo.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?qo.delete(this):qo.add(this)}};window.ResponsiveUtility={},window.ResponsiveUtility.instance=null;let Yo=co({_template:St`
    <style>
      :host {
        display: inline;
      }
    </style>
    <slot></slot>
  `,is:"responsive-utility",behaviors:[Uo],listeners:{"iron-resize":"_onIronResize"},properties:{targets:{type:Array,value:[]}},created:function(){let e=this;null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=e),window.addEventListener("responsive-element",function(t){let i=void 0===t.detail.relativeToParent||null===t.detail.relativeToParent||t.detail.relativeToParent;if("ResizeObserver"in window&&!0===i.relativeToParent){let e=t.detail.element.parentNode,i=new ResizeObserver(function(){window.ResponsiveUtility.setSize(t.detail)});e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),i.observe(e)}e.push("targets",t.detail),window.ResponsiveUtility.setSize(t.detail)}),window.addEventListener("delete-responsive-element",function(t){for(let i=0;i<this.targets.length;i++)t.detail===target[i]&&e.splice("targets",i,1)})},_onIronResize:function(){for(let e=0;e<this.targets.length;e++)window.ResponsiveUtility.setSize(this.targets[e])}});window.ResponsiveUtility.requestAvailability=function(){null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=document.createElement("responsive-utility")),document.body.appendChild(window.ResponsiveUtility.instance)},window.ResponsiveUtility.setSize=function(e){let t=e.element,i=void 0!==e.attribute&&null!==e.attribute?e.attribute:"responsive-size",n=window.ResponsiveUtility.getSize(e);void 0!==t.getAttribute(i)&&n===t.getAttribute(i)||t.setAttribute(i,n)},window.ResponsiveUtility.getSize=function(e){let t,i=void 0===e.relativeToParent||null===e.relativeToParent||e.relativeToParent,n=function(e,t,i){return e<(null!=t?t:i)},a=null!==e.element.parentNode&&!0===i?e.element.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.element.parentNode.host.offsetWidth:e.element.parentNode.offsetWidth:window.outerWidth;return t=n(a,e.sm,600)?"xs":n(a,e.md,900)?"sm":n(a,e.lg,1200)?"md":n(a,e.xl,1200)?"lg":"xl"};class Xo extends Ht{static get tag(){return"a11y-media-behaviors"}static get properties(){return{autoplay:{type:Boolean,value:!1},cc:{type:Boolean,value:!1},height:{type:Number,value:null},isYoutube:{type:Boolean,computed:"_hasAttribute(youtubeId)"},lang:{type:String,value:"en"},localization:{type:Object,value:{}},localizationDefaults:{type:Object,value:{audio:{label:"Audio"},autoScroll:{label:"Scroll transcript with video.",icon:"swap-vert"},captions:{label:"Closed Captions",icon:"av:closed-caption",off:"Off"},forward:{label:"Forward",icon:"av:fast-forward"},fullscreen:{label:"Fullscreen",icon:"fullscreen"},loading:{label:"Loading..."},loop:{label:"Loop Playback"},mute:{label:"Mute",icon:"av:volume-up"},nextResult:{label:"Next",icon:"arrow-forward"},pause:{label:"Pause",icon:"av:pause"},play:{label:"Play",icon:"av:play-arrow"},prevResult:{label:"Previous",icon:"arrow-back"},print:{label:"Print the transcript.",icon:"print"},restart:{label:"Restart",icon:"av:replay"},rewind:{label:"Backward",icon:"av:fast-rewind"},search:{label:"Search the transcript.",icon:"search"},settings:{label:"Settings",icon:"settings"},speed:{label:"Speed %"},transcript:{label:"Transcript",icon:"description",loading:"Loading the transcript(s)...",skip:"Skip to the transcript."},unmute:{label:"Unmute",icon:"av:volume-off"},video:{label:"Video"},volume:{label:"Volume"}},readOnly:!0},loop:{type:Boolean,value:!1},manifest:{type:String,value:null},muted:{type:Boolean,value:!1},preload:{type:String,value:"metadata"},playbackRate:{type:Number,value:1},status:{type:String,value:"loading..."},selectedTrack:{type:Object,value:null},selectedTrackID:{type:Number,value:null},tracks:{type:Array,value:null},volume:{type:Number,value:70},youtubeId:{type:String,value:null},youTube:{type:Object,value:{}}}}static get behaviors(){return[Ht,ResponsiveUtility]}connectedCallback(){super.connectedCallback()}_hasAttribute(e){return null!=e}_testAttribute(e,t){return e===t}_addResponsiveUtility(e){window.ResponsiveUtility.requestAvailability(),window.dispatchEvent(new CustomEvent("responsive-element",{detail:void 0!==e?e:{element:this,attribute:"responsive-size",relativeToParent:!0}}))}_getHHMMSS(e,t){t=void 0===t?e:t;let i=e=>e<10?"0"+e:e,n=(e,n,a)=>t>=n?i(Math.floor(e/n))+":":a;return n(e,3600,"")+n(e%3600,60,"00:")+i(Math.round(e%60))}_getLocal(e,t,i){let n="";return void 0!==e&&void 0!==e[t]&&void 0!==e[t][i]?n=e[t][i]:void 0!==this.localizationDefaults&&void 0!==this.localizationDefaults[t]&&void 0!==this.localizationDefaults[t][i]&&(n=this.localizationDefaults[t][i]),n}_handlePrintClick(e){this.dispatchEvent(new CustomEvent("print-transcript",{detail:this}))}_handlePrinting(e){this.dispatchEvent(new CustomEvent("printing-transcript",{detail:this})),this.$.transcript.print(this.mediaTitle)}}window.customElements.define(Xo.tag,Xo);class Wo extends Xo{static get properties(){return{allowConcurrent:{type:Boolean,value:!1},audioNoThumb:{type:Boolean,computed:"_getAudioNoThumb(audioOnly,thumbnailSrc)"},audioOnly:{type:Boolean,value:!1,reflectToAttribute:!0},compactControls:{type:Boolean,computed:"_getCompactControls(responsiveSize)"},crossorigin:{type:String,value:null,reflectToAttribute:!0},darkTranscript:{type:Boolean,value:!1},disableFullscreen:{type:Boolean,value:!1},disableInteractive:{type:Boolean,value:!1},disableSearch:{type:Boolean,value:!1},disableScroll:{type:Boolean,value:!1},disablePrintButton:{type:Boolean,value:!1},flexLayout:{type:Boolean,computed:"_isFlexLayout(standAlone,hideTranscript,audioNoThumb,stackedLayout)",reflectToAttribute:!0},fullscreen:{type:Boolean,value:!1},fullscreenButton:{type:Boolean,computed:"_getFullscreenButton(disableFullscreen)",notify:!0},hasCaptions:{type:Boolean,value:!1},hasTranscript:{type:Boolean,value:!1},height:{type:String,value:null},hideElapsedTime:{type:Boolean,value:!1},hideTranscript:{type:Boolean,value:!1,reflectToAttribute:!0},hideTimestamps:{type:Boolean,value:!1},media:{type:Object,value:null},mediaLang:{type:String,value:"en"},mediaTitle:{type:String,value:""},muteUnmute:{type:Object,computed:"_getMuteUnmute(muted,localization)"},playing:{type:Boolean,value:!1},playPause:{type:Object,computed:"_getPlayPause(playing,localization)"},responsiveSize:{type:String,notify:!0,reflectToAttribute:!0},search:{type:Object,value:null},showCustomCaptions:{type:Boolean,computed:"_showCustomCaptions(isYoutube,audioOnly,hasCaptions,cc)"},stackedLayout:{type:Boolean,value:!1},standAlone:{type:Boolean,value:!1,reflectToAttribute:!0},target:{type:Object,value:null},thumbnailSrc:{type:String,value:null,reflectToAttribute:!0},width:{type:String,value:null}}}static get behaviors(){return[Xo]}static get tag(){return"a11y-media-player-behaviors"}_getAudioNoThumb(e,t){return e&&null==t}_getFullscreenButton(e){return!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&!e}_getCompactControls(e){return this._testAttribute(e,"xs")||this._testAttribute(e,"sm")}_getPlayPause(e,t){return e?{label:this._getLocal(t,"pause","label"),icon:this._getLocal(t,"pause","icon"),action:"pause"}:{label:this._getLocal(t,"play","label"),icon:this._getLocal(t,"play","icon"),action:"play"}}_getMuteUnmute(e,t){return e?{label:this._getLocal(t,"unmute","label"),icon:this._getLocal(t,"unmute","icon"),action:"unmute"}:{label:this._getLocal(t,"mute","label"),icon:this._getLocal(t,"mute","icon"),action:"mute"}}_showCustomCaptions(e,t,i,n){return(e||t)&&i&&n}_hasCustomCaptions(e,t,i){return(e||t)&&i}_isFlexLayout(e,t,i,n){return!(e||t||i||n)}}window.customElements.define(Wo.tag,Wo);const Zo=St`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Zo.setAttribute("style","display: none;"),document.head.appendChild(Zo.content);var Jo=document.createElement("style");Jo.textContent="[hidden] { display: none !important; }",document.head.appendChild(Jo);const Go=co({_template:St`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){Go.instance||(Go.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async(function(){this._text=e},100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});Go.instance=null,Go.requestAvailability=function(){Go.instance||(Go.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(Go.instance)};class Qo{constructor(e){Qo[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return Qo.types[e]&&Qo.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=Qo.types[t]=Qo.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=Qo.types[this.type];return e?Object.keys(e).map(function(e){return er[this.type][e]},this):[]}}byKey(e){return this.key=e,this.value}}Qo[" "]=function(){},Qo.types={};var er=Qo.types;co({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var n=new Qo({type:e,key:t});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new Qo({type:this.type,key:e}).value}});let tr=null;const ir={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){tr=new Qo({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return tr&&tr.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};if(co({_template:St`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[ir],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){Go.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=eo(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(eo(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,i=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&i)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(i)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=ir.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const nr=St`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;nr.setAttribute("style","display: none;"),document.head.appendChild(nr.content);const ar={attached:function(){this.fire("addon-attached")},update:function(e){}};co({_template:St`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[ar],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});const or=St`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;or.setAttribute("style","display: none;"),document.head.appendChild(or.content);const rr=St`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;rr.setAttribute("style","display: none;"),document.head.appendChild(rr.content);const sr=St`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;sr.setAttribute("style","display: none;"),document.head.appendChild(sr.content),co({_template:St`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class\$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class\$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class\$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Z(this.attrForValue)},get _inputElement(){return eo(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,i=0;t=this._addons[i];i++)t.update(e)},_computeInputContentClass:function(e,t,i,n,a){var o="input-content";if(e)a&&(o+=" label-is-hidden"),n&&(o+=" is-invalid");else{var r=this.querySelector("label");t||a?(o+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?o+=" is-invalid":i&&(o+=" label-is-highlighted")):(r&&(this.$.labelAndInputContainer.style.position="relative"),n&&(o+=" is-invalid"))}return i&&(o+=" focused"),o},_computeUnderlineClass:function(e,t){var i="underline";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(e,t){var i="add-on-content";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i}}),co({_template:St`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      };
    </style>

    <slot></slot>
`,is:"paper-input-error",behaviors:[ar],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});const lr={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};var cr={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},hr={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},dr={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},pr=/[a-z0-9*]/,ur=/U\+/,mr=/^arrow/,fr=/^space(bar)?/,gr=/^escape$/;function vr(e,t){var i="";if(e){var n=e.toLowerCase();" "===n||fr.test(n)?i="space":gr.test(n)?i="esc":1==n.length?t&&!pr.test(n)||(i=n):i=mr.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function yr(e){var t="";return e&&(e in cr?t=cr[e]:ur.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function _r(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):hr[e]),t}function br(e,t){return e.key?vr(e.key,t):e.detail&&e.detail.key?vr(e.detail.key,t):yr(e.keyIdentifier)||_r(e.keyCode)||""}function wr(e,t){return br(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function zr(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(e,t){var i=t.split(":"),n=i[0],a=i[1];return n in dr?(e[dr[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=a||"keydown"),e},{combo:e.split(":").shift()})}function Cr(e){return e.trim().split(" ").map(function(e){return zr(e)})}const xr={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=Cr(t),n=0;n<i.length;++n)if(wr(i[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1})},_addKeyBinding:function(e,t){Cr(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)},this)},_unlistenKeyEventListeners:function(){for(var e,t,i,n;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],n=e[2],t.removeEventListener(i,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var n=e[i][0],a=e[i][1];if(wr(n,t)&&(this._triggerKeyHandler(n,a,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var n=Object.create(e);n.keyboardEvent=i;var a=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,a),a.defaultPrevented&&i.preventDefault()}},kr={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},Mr={NextLabelID:1,NextAddonID:1,NextInputID:1},Sr={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!Lt&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=eo(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var i="paper-input-add-on-"+Mr.NextAddonID++;t.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){kr._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=eo(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+Mr.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+Mr.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}},Lr=[kr,xr,Sr];co({is:"paper-input",_template:St`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate\$="[[autoValidate]]" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden\$="[[!label]]" aria-hidden="true" for\$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id\$="[[_inputId]]" maxlength\$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" disabled\$="[[disabled]]" title\$="[[title]]" type\$="[[type]]" pattern\$="[[pattern]]" required\$="[[required]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" min\$="[[min]]" max\$="[[max]]" step\$="[[step]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" list\$="[[list]]" size\$="[[size]]" autocapitalize\$="[[autocapitalize]]" autocorrect\$="[[autocorrect]]" on-change="_onChange" tabindex\$="[[tabIndex]]" autosave\$="[[autosave]]" results\$="[[results]]" accept\$="[[accept]]" multiple\$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[Lr,lr],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});const Hr={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return Math.min(this.max,Math.max(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Math.round((e-this.min)/this.step);return this.step<1?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}};co({_template:St`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[Hr],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){var i="scaleX("+t/100+")";e.style.transform=e.style.webkitTransform=i},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,i,n,a){e=this._clampValue(e),t=this._clampValue(t);var o=100*this._calcRatio(e),r=100*this._calcRatio(t);this._setSecondaryRatio(o),this._transformProgress(this.$.secondaryProgress,o),this._transformProgress(this.$.primaryProgress,r),this.secondaryProgress=e,a?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",n)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}});const Er={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=eo(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=eo(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Tr=[xr,Er];var Ar={distance:function(e,t,i,n){var a=e-i,o=t-n;return Math.sqrt(a*a+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Vr(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Pr(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),eo(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}Vr.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=Ar.distance(e,t,0,0),n=Ar.distance(e,t,this.width,0),a=Ar.distance(e,t,0,this.height),o=Ar.distance(e,t,this.width,this.height);return Math.max(i,n,a,o)}},Pr.MAX_RADIUS=300,Pr.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=Ar.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?Ar.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),Pr.MAX_RADIUS)+5,n=1.1-i/Pr.MAX_RADIUS*.2,a=this.mouseInteractionSeconds/n,o=i*(1-Math.pow(80,-a));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Pr.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Pr.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Vr(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Ar.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=Ar.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=Ar.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=Ar.now())},remove:function(){eo(this.waveContainer.parentNode).removeChild(this.waveContainer)}},co({_template:St`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[xr],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=eo(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var e=new Pr(this);return eo(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});const Or={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Er._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&eo(t).appendChild(this._ripple),e){var i=eo(this._rippleContainer||this),n=eo(e).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},Nr={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=Or._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},Ir=[Tr,kr,Or,Nr],Rr=St`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;Rr.setAttribute("strip-whitespace",""),co({_template:Rr,is:"paper-slider",behaviors:[xr,lr,Ir,Hr],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Jn(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,i,n,a){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",i),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}},_trackStart:function(e){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,i=Math.min(this._maxx,Math.max(this._minx,e.detail.dx*t));this._x=this._startx+i;var n=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(n);var a=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(a+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),i=(e.detail.x-t.left)/this._w*100;this._isRTL&&(i=100-i);var n=this.ratio;this._setTransiting(!0),this._positionKnob(i),n===this.ratio&&this._setTransiting(!1),this.async(function(){this.fire("change",{composed:!0})}),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,i,n){n||this._setMarkers([]);var a=Math.round((i-t)/this.step);a>e&&(a=e),(a<0||!isFinite(a))&&(a=0),this._setMarkers(new Array(a))},_mergeClasses:function(e){return Object.keys(e).filter(function(t){return e[t]}).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,Nr._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}}),co({_template:St`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Ko.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&eo(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,eo(this.root).appendChild(this._img))}}),co({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new Qo({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(e){return this.name+":"+e},this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var n=eo(e.root||e);return n.insertBefore(i,n.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(eo(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var e=Object.create(null);return eo(this).querySelectorAll("[id]").forEach(function(t){e[t.id]=t}),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var n=e.cloneNode(!0),a=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=n.getAttribute("viewBox")||"0 0 "+t+" "+t,r="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(r+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),a.setAttribute("viewBox",o),a.setAttribute("preserveAspectRatio","xMidYMid meet"),a.setAttribute("focusable","false"),a.style.cssText=r,a.appendChild(n).removeAttribute("id"),a}return null}});const Br=St`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Br.content);const $r=St`<iron-iconset-svg name="av" size="24">
<svg><defs>
<g id="add-to-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></g>
<g id="airplay"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="album"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="art-track"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></g>
<g id="av-timer"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></g>
<g id="branding-watermark"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></g>
<g id="call-to-action"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></g>
<g id="closed-caption"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></g>
<g id="equalizer"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></g>
<g id="explicit"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></g>
<g id="fast-forward"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></g>
<g id="fast-rewind"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></g>
<g id="featured-play-list"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></g>
<g id="featured-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></g>
<g id="fiber-dvr"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></g>
<g id="fiber-manual-record"><circle cx="12" cy="12" r="8"></circle></g>
<g id="fiber-new"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></g>
<g id="fiber-pin"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></g>
<g id="fiber-smart-record"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></g>
<g id="forward-10"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="forward-30"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></g>
<g id="forward-5"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></g>
<g id="games"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="hd"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></g>
<g id="hearing"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"></path></g>
<g id="high-quality"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></g>
<g id="library-add"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="library-books"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></g>
<g id="library-music"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></g>
<g id="loop"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-none"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-off"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></g>
<g id="movie"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="music-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path></g>
<g id="new-releases"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="not-interested"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="note"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></g>
<g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>
<g id="pause-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></g>
<g id="pause-circle-outline"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></g>
<g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>
<g id="play-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></g>
<g id="play-circle-outline"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="playlist-add"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></g>
<g id="playlist-add-check"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></g>
<g id="playlist-play"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></g>
<g id="queue"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="queue-music"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></g>
<g id="queue-play-next"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></g>
<g id="radio"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></g>
<g id="recent-actors"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></g>
<g id="remove-from-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></g>
<g id="repeat"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>
<g id="repeat-one"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></g>
<g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>
<g id="replay-10"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-30"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-5"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></g>
<g id="shuffle"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></g>
<g id="skip-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></g>
<g id="skip-previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></g>
<g id="slow-motion-video"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></g>
<g id="snooze"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></g>
<g id="sort-by-alpha"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></g>
<g id="stop"><path d="M6 6h12v12H6z"></path></g>
<g id="subscriptions"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></g>
<g id="subtitles"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></g>
<g id="surround-sound"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="video-call"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
<g id="video-label"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></g>
<g id="video-library"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
<g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
<g id="videocam-off"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></g>
<g id="volume-down"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></g>
<g id="volume-mute"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></g>
<g id="volume-off"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></g>
<g id="volume-up"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g>
<g id="web"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></g>
<g id="web-asset"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild($r.content),function(){var e="undefined"!=typeof window&&void 0!==window.document?window.document:{},t="undefined"!=typeof module&&module.exports,i="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,n=function(){for(var t,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,a=i.length,o={};n<a;n++)if((t=i[n])&&t[1]in e){for(n=0;n<t.length;n++)o[i[0][n]]=t[n];return o}return!1}(),a={change:n.fullscreenchange,error:n.fullscreenerror},o={request:function(t){return new Promise(function(a){var o=n.requestFullscreen,r=function(){this.off("change",r),a()}.bind(this);t=t||e.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?t[o]():t[o](i?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",r)}.bind(this))},exit:function(){return new Promise(function(t){var i=function(){this.off("change",i),t()}.bind(this);e[n.exitFullscreen](),this.on("change",i)}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(t,i){var n=a[t];n&&e.addEventListener(n,i,!1)},off:function(t,i){var n=a[t];n&&e.removeEventListener(n,i,!1)},raw:n};n?(Object.defineProperties(o,{isFullscreen:{get:function(){return Boolean(e[n.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[n.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(e[n.fullscreenEnabled])}}}),t?module.exports=o:window.screenfull=o):t?module.exports=!1:window.screenfull=!1}();const Fr={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=eo(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function(){void 0===this._isRTL&&(this._isRTL="rtl"==window.getComputedStyle(this).direction),this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto),n=this._fitInfo.margin,a={width:e.width+n.left+n.right,height:e.height+n.top+n.bottom},o=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,a,e,t,i),r=o.left+n.left,s=o.top+n.top,l=Math.min(i.right-n.right,r+e.width),c=Math.min(i.bottom-n.bottom,s+e.height);r=Math.max(i.left+n.left,Math.min(r,l-this._fitInfo.sizedBy.minWidth)),s=Math.max(i.top+n.top,Math.min(s,c-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(l-r,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(c-s,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=r-e.left+"px",this.style.top=s-e.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,i,n,a){this.__sizeDimension(e,t,i,n,a)},__sizeDimension:function(e,t,i,n,a){var o=this._fitInfo,r=this.__getNormalizedRect(this.fitInto),s="Width"===a?r.width:r.height,l=t===n,c=l?s-e[n]:e[i],h=o.margin[l?i:n],d="offset"+a,p=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+a]=s-h-c-p+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var n=i.top-t.top+(i.height-t.height)/2;this.style.top=n+"px"}if(!e.horizontally){var a=i.left-t.left+(i.width-t.width)/2;this.style.left=a+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,i){var n=Math.min(0,e.top)+Math.min(0,i.bottom-(e.top+t.height)),a=Math.min(0,e.left)+Math.min(0,i.right-(e.left+t.width));return Math.abs(n)*t.width+Math.abs(a)*t.height},__getPosition:function(e,t,i,n,a,o){var r,s=[{verticalAlign:"top",horizontalAlign:"left",top:a.top+this.verticalOffset,left:a.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:a.top+this.verticalOffset,left:a.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:a.bottom-i.height-this.verticalOffset,left:a.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:a.bottom-i.height-this.verticalOffset,left:a.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,c=s.length;l<c;l++){var h={};for(var d in s[l])h[d]=s[l][d];s.push(h)}s[0].top=s[1].top+=a.height,s[2].top=s[3].top-=a.height,s[4].left=s[6].left+=a.width,s[5].left=s[7].left-=a.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(s.push({verticalAlign:"top",horizontalAlign:"center",top:a.top+this.verticalOffset+(this.noOverlap?a.height:0),left:a.left-n.width/2+a.width/2+this.horizontalOffset}),s.push({verticalAlign:"bottom",horizontalAlign:"center",top:a.bottom-i.height-this.verticalOffset-(this.noOverlap?a.height:0),left:a.left-n.width/2+a.width/2+this.horizontalOffset})),t&&"middle"!==t||(s.push({verticalAlign:"middle",horizontalAlign:"left",top:a.top-n.height/2+a.height/2+this.verticalOffset,left:a.left+this.horizontalOffset+(this.noOverlap?a.width:0)}),s.push({verticalAlign:"middle",horizontalAlign:"right",top:a.top-n.height/2+a.height/2+this.verticalOffset,left:a.right-i.width-this.horizontalOffset-(this.noOverlap?a.width:0)})),"middle"===t&&"center"===e&&s.push({verticalAlign:"middle",horizontalAlign:"center",top:a.top-n.height/2+a.height/2+this.verticalOffset,left:a.left-n.width/2+a.width/2+this.horizontalOffset});for(l=0;l<s.length;l++){var p=s[l],u=p.verticalAlign===t,m=p.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&u&&m){r=p;break}var f=(!t||u)&&(!e||m);if(this.dynamicAlign||f){if(p.offscreenArea=this.__getOffscreenArea(p,i,o),0===p.offscreenArea&&f){r=p;break}r=r||p;var g=p.offscreenArea-r.offscreenArea;(g<0||0===g&&(u||m))&&(r=p)}}return r}};var Dr=Element.prototype,jr=Dr.matches||Dr.matchesSelector||Dr.mozMatchesSelector||Dr.msMatchesSelector||Dr.oMatchesSelector||Dr.webkitMatchesSelector;const Kr={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return jr.call(e,"input, select, textarea, button, object")?jr.call(e,":not([disabled])"):jr.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&jr.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;var i,n=e,a=this._normalizedTabIndex(n),o=a>0;a>=0&&t.push(n),i="content"===n.localName||"slot"===n.localName?eo(n).getDistributedNodes():eo(n.root||n).children;for(var r=0;r<i.length;r++)o=this._collectTabbableNodes(i[r],t)||o;return o},_isVisible:function(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)},_sortByTabIndex:function(e){var t=e.length;if(t<2)return e;var i=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,i)),a=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(n,a)},_mergeSortByTabIndex:function(e,t){for(var i=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)},_hasLowerTabOrder:function(e,t){var i=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===i||0===n?n>i:i>n}};co({_template:St`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&eo(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||eo(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});const qr=function(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,oa(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};qr.prototype={constructor:qr,get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement},get deepActiveElement(){var e=document.activeElement;for(e&&e instanceof Element!=!1||(e=document.body);e.root&&eo(e.root).activeElement;)e=eo(e.root).activeElement;return e},_bringOverlayAtIndexToFront:function(e){var t=this._overlays[e];if(t){var i=this._overlays.length-1,n=this._overlays[i];if(n&&this._shouldBeBehindOverlay(t,n)&&i--,!(e>=i)){var a=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=a&&this._applyOverlayZ(t,a);e<i;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[i]=t}}},addOrRemoveOverlay:function(e){e.opened?this.addOverlay(e):this.removeOverlay(e)},addOverlay:function(e){var t=this._overlays.indexOf(e);if(t>=0)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var i=this._overlays.length,n=this._overlays[i-1],a=Math.max(this._getZ(n),this._minimumZ),o=this._getZ(e);if(n&&this._shouldBeBehindOverlay(e,n)){this._applyOverlayZ(n,a),i--;var r=this._overlays[i-1];a=Math.max(this._getZ(r),this._minimumZ)}o<=a&&this._applyOverlayZ(e,a),this._overlays.splice(i,0,e),this.trackBackdrop()},removeOverlay:function(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())},currentOverlay:function(){var e=this._overlays.length-1;return this._overlays[e]},currentOverlayZ:function(){return this._getZ(this.currentOverlay())},ensureMinimumZ:function(e){this._minimumZ=Math.max(this._minimumZ,e)},focusOverlay:function(){var e=this.currentOverlay();e&&e._applyFocus()},trackBackdrop:function(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())},getBackdrops:function(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e},backdropZ:function(){return this._getZ(this._overlayWithBackdrop())-1},_overlayWithBackdrop:function(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]},_getZ:function(e){var t=this._minimumZ;if(e){var i=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);i==i&&(t=i)}return t},_setZ:function(e,t){e.style.zIndex=t},_applyOverlayZ:function(e,t){this._setZ(e,t+2)},_overlayInPath:function(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]},_onCaptureClick:function(e){var t=this._overlays.length-1;if(-1!==t)for(var i,n=eo(e).path;(i=this._overlays[t])&&this._overlayInPath(n)!==i&&(i._onCaptureClick(e),i.allowClickThrough);)t--},_onCaptureFocus:function(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)},_onCaptureKeyDown:function(e){var t=this.currentOverlay();t&&(xr.keyboardEventMatchesKeys(e,"esc")?t._onCaptureEsc(e):xr.keyboardEventMatchesKeys(e,"tab")&&t._onCaptureTab(e))},_shouldBeBehindOverlay:function(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};const Ur=new qr;var Yr,Xr,Wr={pageX:0,pageY:0},Zr=null,Jr=[],Gr=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function Qr(e){ts.indexOf(e)>=0||(0===ts.length&&ns(),ts.push(e),Xr=ts[ts.length-1])}function es(e){var t=ts.indexOf(e);-1!==t&&(ts.splice(t,1),Xr=ts[ts.length-1],0===ts.length&&as())}const ts=[];function is(e){if(e.cancelable&&os(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];Wr.pageX=t.pageX,Wr.pageY=t.pageY}}function ns(){Yr=Yr||is.bind(void 0);for(var e=0,t=Gr.length;e<t;e++)document.addEventListener(Gr[e],Yr,{capture:!0,passive:!1})}function as(){for(var e=0,t=Gr.length;e<t;e++)document.removeEventListener(Gr[e],Yr,{capture:!0,passive:!1})}function os(e){var t=eo(e).rootTarget;if("touchmove"!==e.type&&Zr!==t&&(Zr=t,Jr=rs(eo(e).path)),!Jr.length)return!0;if("touchstart"===e.type)return!1;var i=ls(e);return!ss(Jr,i.deltaX,i.deltaY)}function rs(e){for(var t=[],i=e.indexOf(Xr),n=0;n<=i;n++)if(e[n].nodeType===Node.ELEMENT_NODE){var a=e[n],o=a.style;"scroll"!==o.overflow&&"auto"!==o.overflow&&(o=window.getComputedStyle(a)),"scroll"!==o.overflow&&"auto"!==o.overflow||t.push(a)}return t}function ss(e,t,i){if(t||i)for(var n=Math.abs(i)>=Math.abs(t),a=0;a<e.length;a++){var o=e[a];if(n?i<0?o.scrollTop>0:o.scrollTop<o.scrollHeight-o.clientHeight:t<0?o.scrollLeft>0:o.scrollLeft<o.scrollWidth-o.clientWidth)return o}}function ls(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var i=e.targetTouches[0];t.deltaX=Wr.pageX-i.pageX,t.deltaY=Wr.pageY-i.pageY}return t}const cs={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:Ur},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||eo(this).querySelector("[autofocus]")||this},get _focusableNodes(){return Kr.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=eo(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in eo(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||eo(this).deepContains(e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=eo(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,n=t?this.__lastFocusableNode:this.__firstFocusableNode,a=!1;if(i===n)a=!0;else{var o=this._manager.deepActiveElement;a=o===i||o===this}a&&(e.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var i=this.__rafs;null!==i[e]&&cancelAnimationFrame(i[e]),i[e]=requestAnimationFrame(function(){i[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,i){e&&t&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),Qr(this)),this.__addScrollListeners()):(es(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],s)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||eo(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},hs=[Fr,Uo,cs],ds={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=e?this.animationConfig[e]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var a,o=0;a=n[o];o++)if(a.animatable)a.animatable._getAnimationConfigRecursive(a.type||e,t,i);else if(a.id){var r=t[a.id];r?(r.isClone||(t[a.id]=this._cloneConfig(r),r=t[a.id]),this._copyProperties(r,a)):t[a.id]=a}else i.push(a)},getAnimationConfig:function(e){var t={},i=[];for(var n in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[n]);return i}},ps={_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let t,n=0;t=e[n];n++){let e=document.createElement(t.name);if(e.isNeonAnimation){let n=null;e.configure||(e.configure=function(e){return null}),n=e.configure(t),i.push({result:n,config:t,neonAnimation:e})}else console.warn(this.is+":",t.name,"not found!")}for(var n=0;n<i.length;n++){let e=i[n].result,a=i[n].config,o=i[n].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(t){e=null,console.warn("Couldnt play","(",a.name,").",t)}e&&t.push({neonAnimation:o,config:a,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var n=this._configureAnimations(i);if(0!=n.length){this._active[e]=n;for(var a=0;a<n.length;a++)n[a].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}},us=[ds,ps];co({_template:St`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[kr,xr,hs,us],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=eo(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),cs._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):cs._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):cs._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():cs._applyFocus.apply(this,arguments)}});const ms={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,i){for(var n,a={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],o=0;n=a[o];o++)e.style[n]=i;e.style[t]=i},complete:function(e){}};co({is:"fade-in-animation",behaviors:[ms],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),co({is:"fade-out-animation",behaviors:[ms],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});const fs=St`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;fs.setAttribute("style","display: none;"),document.head.appendChild(fs.content),co({is:"paper-menu-grow-height-animation",behaviors:[ms],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(e)),this._effect}}),co({is:"paper-menu-grow-width-animation",behaviors:[ms],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(e)),this._effect}}),co({is:"paper-menu-shrink-width-animation",behaviors:[ms],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(e)),this._effect}}),co({is:"paper-menu-shrink-height-animation",behaviors:[ms],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var gs={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const vs=co({_template:St`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[xr,kr],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:gs.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:gs.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:gs.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=eo(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){kr._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,i=this.$.trigger;eo(t).path.indexOf(i)>-1&&e.preventDefault()}});Object.keys(gs).forEach(function(e){vs[e]=gs[e]});class ys{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach(function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)},this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}const _s={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new ys(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&eo(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=eo(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var i=e[Z(this.attrForSelected)];return null!=i?i:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return eo(e).observeNodes(function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var n=i.indexOf(t);if(n>=0){var a=this._indexToValue(n);return void this._itemActivate(a,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}},bs={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map(function(e){return this._indexToValue(this.indexOf(e))},this).filter(function(e){return null!=e},this)):_s._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter(function(e){return null!=e});this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!=e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);t<0?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map(function(e){return this._valueToItem(e)},this)}},ws=[_s,bs],zs={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),bs.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))},this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,i=this._searchText||"",n=(i+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,a=0;t=this.items[a];a++)if(!t.hasAttribute("disabled")){var o=this.attrForItemTitle||"textContent",r=(t[o]||t.getAttribute(o)||"").trim();if(!(r.length<n)&&r.slice(0,n).toLocaleLowerCase()==i){this._setFocusedItem(t);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t-i+e)%e];if(!n.hasAttribute("disabled")){var a=eo(n).getOwnerRoot()||document;if(this._setFocusedItem(n),eo(a).activeElement==n)return}}},_focusNext:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t+i)%e];if(!n.hasAttribute("disabled")){var a=eo(n).getOwnerRoot()||document;if(this._setFocusedItem(n),eo(a).activeElement==n)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),_s._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");zs._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",t),zs._shiftTabPressed=!1},1)},_onFocus:function(e){if(!zs._shiftTabPressed){var t=eo(e).rootTarget;(t===this||void 0===t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async(function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()}))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){_s._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1},Cs=[ws,xr,zs];co({_template:St`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[Cs],hostAttributes:{role:"listbox"}});const xs=document.createElement("template");xs.setAttribute("style","display: none;"),xs.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(xs.content);const ks={hostAttributes:{role:"option",tabindex:"0"}},Ms=[Tr,kr,ks];co({_template:St`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[Ms]}),co({is:"paper-icon-button",_template:St`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[Ir],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var i=this.getAttribute("aria-label");i&&t!=i||this.setAttribute("aria-label",e)}});const Ss={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},Ls=[lr,ir,Ss],Hs={_checkedChanged:function(){Ss._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){Or._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},Es=[Ir,Ls,Hs],Ts=St`

    <style>
      :host {
        display: inline-block;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-common-base;
      }

      :host([disabled]) {
        pointer-events: none;
      }

      :host(:focus) {
        outline:none;
      }

      .toggle-bar {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        pointer-events: none;
        opacity: 0.4;
        transition: background-color linear .08s;
        background-color: var(--paper-toggle-button-unchecked-bar-color, #000000);

        @apply --paper-toggle-button-unchecked-bar;
      }

      .toggle-button {
        position: absolute;
        top: -3px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
        transition: -webkit-transform linear .08s, background-color linear .08s;
        transition: transform linear .08s, background-color linear .08s;
        will-change: transform;
        background-color: var(--paper-toggle-button-unchecked-button-color, var(--paper-grey-50));

        @apply --paper-toggle-button-unchecked-button;
      }

      .toggle-button.dragging {
        -webkit-transition: none;
        transition: none;
      }

      :host([checked]:not([disabled])) .toggle-bar {
        opacity: 0.5;
        background-color: var(--paper-toggle-button-checked-bar-color, var(--primary-color));

        @apply --paper-toggle-button-checked-bar;
      }

      :host([disabled]) .toggle-bar {
        background-color: #000;
        opacity: 0.12;
      }

      :host([checked]) .toggle-button {
        -webkit-transform: translate(16px, 0);
        transform: translate(16px, 0);
      }

      :host([checked]:not([disabled])) .toggle-button {
        background-color: var(--paper-toggle-button-checked-button-color, var(--primary-color));

        @apply --paper-toggle-button-checked-button;
      }

      :host([disabled]) .toggle-button {
        background-color: #bdbdbd;
        opacity: 1;
      }

      .toggle-ink {
        position: absolute;
        top: -14px;
        left: -14px;
        right: auto;
        bottom: auto;
        width: 48px;
        height: 48px;
        opacity: 0.5;
        pointer-events: none;
        color: var(--paper-toggle-button-unchecked-ink-color, var(--primary-text-color));

        @apply --paper-toggle-button-unchecked-ink;
      }

      :host([checked]) .toggle-ink {
        color: var(--paper-toggle-button-checked-ink-color, var(--primary-color));

        @apply --paper-toggle-button-checked-ink;
      }

      .toggle-container {
        display: inline-block;
        position: relative;
        width: 36px;
        height: 14px;
        /* The toggle button has an absolute position of -3px; The extra 1px
        /* accounts for the toggle button shadow box. */
        margin: 4px 1px;
      }

      .toggle-label {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding-left: var(--paper-toggle-button-label-spacing, 8px);
        pointer-events: none;
        color: var(--paper-toggle-button-label-color, var(--primary-text-color));
      }

      /* invalid state */
      :host([invalid]) .toggle-bar {
        background-color: var(--paper-toggle-button-invalid-bar-color, var(--error-color));
      }

      :host([invalid]) .toggle-button {
        background-color: var(--paper-toggle-button-invalid-button-color, var(--error-color));
      }

      :host([invalid]) .toggle-ink {
        color: var(--paper-toggle-button-invalid-ink-color, var(--error-color));
      }
    </style>

    <div class="toggle-container">
      <div id="toggleBar" class="toggle-bar"></div>
      <div id="toggleButton" class="toggle-button"></div>
    </div>

    <div class="toggle-label"><slot></slot></div>

  `;Ts.setAttribute("strip-whitespace",""),co({_template:Ts,is:"paper-toggle-button",behaviors:[Es],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Ma(this,function(){Jn(this,"pan-y")})},_ontrack:function(e){var t=e.detail;"start"===t.state?this._trackStart(t):"track"===t.state?this._trackMove(t):"end"===t.state&&this._trackEnd(t)},_trackStart:function(e){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(e){var t=e.dx;this._x=Math.min(this._width,Math.max(0,this._trackChecked?this._width+t:t)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(e){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var e=Or._createRipple();return e.id="ink",e.setAttribute("recenters",""),e.classList.add("circle","toggle-ink"),e}});const As=document.createElement("template");As.setAttribute("style","display: none;"),As.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(As.content);const Vs=document.createElement("template");Vs.setAttribute("style","display: none;"),Vs.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Vs.content),co({_template:St`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[Tr,kr,lr,ir],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=eo(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){aa(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}});let Ps=co({_template:St`
    <style>
      :host {
        display: block;
      }
      paper-listbox ::slotted(paper-item) {
        display: block;
        width: 100%;
        min-height: 32px;
        vertical-align: text-top;
        line-height: 32px;
        @apply --dropdown-select-items;
      }
      paper-listbox paper-listbox {
        @apply --dropdown-listbox;
      }
    </style>
    <paper-dropdown-menu
      id="menu"
      allow-outside-scroll\$="[[allowOutsideScroll]]"
      always-float-label\$="[[alwaysFloatLabel]]"
      dynamic-align\$="[[dynamicAlign]]"
      error-message\$="[[errorMessage]]"
      horizontal-align\$="[[horizontalAlign]]"
      label\$="[[label]]"
      no-animations\$="[[noAnimations]]"
      no-label-float\$="[[noLabelFloat]]"
      on-selected-item-changed="_getSelectedValue"
      placeholder\$="[[placeholder]]"
      restore-focus-on-close\$="[[restoreFocusOnClose]]"
      vertical-align\$="[[verticalAlign]]"
      vertical-offset\$="[[verticalOffset]]"
    >
      <paper-listbox
        id="listbox"
        slot="dropdown-content"
        class="dropdown-content"
      >
        <slot id="content"></slot>
      </paper-listbox>
    </paper-dropdown-menu>
  `,is:"dropdown-select",listeners:{"paper-dropdown-open":"_onOpen","paper-dropdown-close":"_onClose"},properties:{allowOutsideScroll:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},dynamicAlign:{type:Boolean},errorMessage:{type:String},horizontalAlign:{type:String,value:"right"},label:{type:String,value:"Select an option."},noAnimations:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},placeholder:{type:String},restoreFocusOnClose:{type:Boolean,value:!0},selectedItem:{type:Object},selectedItemIndex:{type:Number,value:null},selectedItemLabel:{type:String,value:null},value:{type:String,value:null,notify:!0,reflectToAttribute:!0,observer:"_valueChanged"},verticalAlign:{type:String,value:"top"},verticalOffset:{type:Number}},_getSelectedValue:function(e){null!==e.detail.value&&(this.value=e.detail.value.getAttribute("value"),this._setSelectedValues(),this.fire("change",{value:this.value}),this.fire("dropdown-select-changed",this))},_onOpen:function(e){this.opened=!0},_onClose:function(e){this.opened=!1},_setSelectedValues:function(){this.selectedItem=this.$.menu.selectedItem,this.selectedItemLabel=this.$.menu.selectedItemLabel,this.selectedItemIndex=this.$.listbox.selected},attached:function(){this._valueChanged(this.value)},_valueChanged:function(e,t){let i=eo(this).querySelectorAll("paper-item");if(null!=i)for(let e=0;e<i.length;e++)this.value===i[e].getAttribute("value")&&(this.$.listbox.selected=e,this._setSelectedValues())}});co({_template:St`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var e=eo(this).parentNode,t=eo(this).getOwnerRoot();return this.for?eo(t).querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?t.host:e},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(e){"entry"===e?this.show():"exit"===e&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===eo(this).textContent.trim()){for(var e=!0,t=eo(this).getEffectiveChildNodes(),i=0;i<t.length;i++)if(""!==t[i].textContent.trim()){e=!1;break}if(e)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var e=this.offset;14!=this.marginTop&&14==this.offset&&(e=this.marginTop);var t,i,n=this.offsetParent.getBoundingClientRect(),a=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),r=(a.width-o.width)/2,s=(a.height-o.height)/2,l=a.left-n.left,c=a.top-n.top;switch(this.position){case"top":t=l+r,i=c-o.height-e;break;case"bottom":t=l+r,i=c+a.height+e;break;case"left":t=l-o.width-e,i=c+s;break;case"right":t=l+a.width+e,i=c+s}this.fitToVisibleBounds?(n.left+t+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,t)+"px",this.style.right="auto"),n.top+i+o.height>window.innerHeight?(this.style.bottom=n.height-c+e+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,i)+"px",this.style.bottom="auto")):(this.style.left=t+"px",this.style.top=i+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(e){500!==e&&this.updateStyles({"--paper-tooltip-delay-in":e+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(e){if("entry"===e&&""!==this.animationEntry)return this.animationEntry;if("exit"===e&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[e]&&"string"==typeof this.animationConfig[e][0].name){if(this.animationConfig[e][0].timing&&this.animationConfig[e][0].timing.delay&&0!==this.animationConfig[e][0].timing.delay){var t=this.animationConfig[e][0].timing.delay;"entry"===e?this.updateStyles({"--paper-tooltip-delay-in":t+"ms"}):"exit"===e&&this.updateStyles({"--paper-tooltip-delay-out":t+"ms"})}return this.animationConfig[e][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}});class Os extends Wo{static get properties(){return{action:{type:String,value:null},controls:{type:String,value:"video"},icon:{type:String,value:null},label:{type:String,value:null},toggle:{type:Boolean,value:!1,reflectToAttribute:!0},disabled:{type:Boolean,value:null}}}static get tag(){return"a11y-media-button"}static get behaviors(){return[Wo]}static get template(){return St`
      <style>
        :host {
          margin: 0;
          padding: 0;
        }
        :host #button {
          margin: 0;
          padding: 8px;
          line-height: 1;
          border: none;
          transition: color 0.25s;
          color: var(--a11y-media-button-color);
          background-color: var(--a11y-media-button-bg-color);
        }
        :host([toggle]) #button {
          color: var(--a11y-media-button-toggle-color);
          background-color: var(--a11y-media-button-toggle-bg-color);
        }
        :host([toggle]:active) #button,
        :host([toggle]:focus) #button,
        :host([toggle]:hover) #button,
        :host(:active) #button,
        :host(:focus) #button,
        :host(:hover) #button {
          cursor: pointer;
          color: var(--a11y-media-button-hover-color);
          background-color: var(--a11y-media-button-hover-bg-color);
        }
        :host .sr-only {
          position: absolute;
          left: -99999;
          top: 0;
          height: 0;
          width: 0;
          overflow: hidden;
        }
        :host paper-tooltip {
          z-index: 100;
        }
        iron-icon {
          display: inline-block;
        }
      </style>
      <button
        id="button"
        aria-label$="[[label]]"
        aria-pressed$="[[toggle]]"
        aria-role="button"
        controls="[[controls]]"
        disabled$="[[disabled]]"
        on-tap="_buttonTap"
        tabindex="0"
        toggle$="[[toggle]]"
      >
        <iron-icon icon="[[icon]]"></iron-icon>
      </button>
      <paper-tooltip for="button">[[label]]</paper-tooltip>
    `}connectedCallback(){super.connectedCallback()}ready(){super.ready(),this.__target=this.$.button}_buttonTap(){this.dispatchEvent(new CustomEvent("tap",{detail:this}))}}window.customElements.define(Os.tag,Os);class Ns extends Wo{static get properties(){return{fixedHeight:{type:Boolean,value:!1},hideTranscriptButton:{type:Boolean,computed:"_hideTranscriptButton(noTranscriptMenu,compactControls)"},noPrinting:{type:Boolean,computed:"_noPrinting(standalone,fixedHeight)"},noTranscriptToggle:{type:Boolean,computed:"_noTranscriptToggle(standalone,fixedHeight,hasTranscript)"}}}static get tag(){return"a11y-media-controls"}static get behaviors(){return[Wo]}static get template(){return St`
      <style is="custom-style">
        :host {
          display: block;
          width: 100%;
          max-width: 100%;
          height: 44px;
          max-height: 44px;
          position: relative;
          color: var(--a11y-media-color);
          --primary-text-color: var(--a11y-media-settings-menu-color);
          --paper-menu-button-dropdown-background: var(--a11y-media-settings-menu-bg-color);
          --paper-listbox-background-color: var(--a11y-media-settings-menu-bg-color);
          --paper-listbox-color: var(--a11y-media-settings-menu-color);
          --paper-listbox: {
            padding: 0;
          };
          --paper-menu-button: {
            background-color: var(--a11y-media-settings-menu-bg-color);
            color: var(--a11y-media-settings-menu-color);
          };
          --paper-menu-button-dropdown: {
            background-color: var(--a11y-media-settings-menu-bg-color);
            color: var(--a11y-media-settings-menu-color);
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          };
          --paper-item-selected: {
            color: var(--a11y-media-settings-menu-hover-color);
          };
          --paper-item-focused: {
            color: var(--a11y-media-settings-menu-hover-color);
          };
        }
        :host > #controls-left {
          position: absolute;
          left: 0;
          min-width: 200px;
        }
        :host > #controls-right {
          position: absolute;
          right: 0;
          top: -2px;
        }
        :host paper-menu-button,
        :host dropdown-select {
          padding: 0;
        }
        :host paper-icon-button {
          background-color: var(--a11y-media-settings-menu-bg-color);
          color: var(--a11y-media-settings-menu-color);
        }
        :host paper-icon-button:active,
        :host paper-icon-button:focus,
        :host paper-icon-button:hover {
          background-color: var(--a11y-media-settings-menu-bg-color);
          color: var(--a11y-media-settings-menu-color);
        }
        :host paper-item {
          min-height: 40;
        }
        :host paper-slider {
          @apply --a11y-media-slider;
        }
        :host .play-status,
        :host paper-icon-button {
          border: none;
          position: relative;
        }
        :host .play-status {
          font-size: 85%;
        }
        :host .play-status.control-bar {
          padding: 8px 13px 8px;
        }
        :host([hide-play-status]) .play-status {
          display: none;
        }
        :host .setting {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        :host .setting-text {
          min-width: 125px;
        }
        :host .setting-control {
          max-width: 100px;
        }
        :host .setting-slider {
          width: 130px;
          margin-left: -15px;
          margin-right: -15px;
          @apply --a11y-media-slider;
        }
        :host #speed {
          --paper-slider-knob-start-color: var(--a11y-media-accent-color);
          --paper-slider-knob-start-border-color: var(--a11y-media-accent-color);
          --paper-slider-knob-end-color: var(--a11y-media-accent-color);
          --paper-slider-knob-end-border-color: var(--a11y-media-accent-color);
        }
        :host #showvolume {
          display: inline;
          position: relative;
        }
        :host #volume {
          z-index: 1;
          position: absolute;
          left: 30px;
          top: -5px;
          width: 0;
          overflow: hidden;
          transition: width 0.5s;
          z-index: 3;
          background-color: var(--a11y-media-bg-color);
          --paper-slider-knob-end-color: var(--a11y-media-accent-color);
          --paper-slider-knob-end-border-color: var(--a11y-media-accent-color);

        }
        :host #volume:active,
        :host #volume:focus,
        :host #volume:hover,
        :host #volume.focus,
        :host #showvolume:active #volume,
        :host #showvolume:focus #volume,
        :host #showvolume:hover #volume {
          overflow: visible;
          width: 100px;
        }
        :host([responsive-size="xs"]) #volume:active,
        :host([responsive-size="xs"]) #volume:focus,
        :host([responsive-size="xs"]) #volume:hover,
        :host([responsive-size="xs"]) #volume.focus,
        :host([responsive-size="xs"]) #showvolume:active #volume,
        :host([responsive-size="xs"]) #showvolume:focus #volume,
        :host([responsive-size="xs"]) #showvolume:hover #volume {
          top: -35px
          border-radius: 4px;
        }
        :host .sr-only {
          position: absolute;
          left: -99999;
          top: 0;
          height: 0;
          width: 0;
          overflow: hidden;
        }
      </style>
      <div id="controls-left">
        <a11y-media-button
          action$="[[playPause.action]]"
          icon$="[[playPause.icon]]"
          label$="[[playPause.label]]"
          on-tap="_onButtonTap"
        ></a11y-media-button>
        <a11y-media-button
          action="rewind"
          disabled$="[[compactControls]]"
          hidden$="[[compactControls]]"
          icon$="[[_getLocal(localization,'rewind','icon')]]"
          label$="[[_getLocal(localization,'rewind','label')]]"
          on-tap="_onButtonTap"
        ></a11y-media-button>
        <a11y-media-button
          action="forward"
          disabled$="[[compactControls]]"
          hidden$="[[compactControls]]"
          icon$="[[_getLocal(localization,'forward','icon')]]"
          label$="[[_getLocal(localization,'forward','label')]]"
          on-tap="_onButtonTap"
        ></a11y-media-button>
        <a11y-media-button
          action="restart"
          disabled$="[[compactControls]]"
          hidden$="[[compactControls]]"
          icon$="[[_getLocal(localization,'restart','icon')]]"
          label$="[[_getLocal(localization,'restart','label')]]"
          on-tap="_onButtonTap"
        ></a11y-media-button>
        <div id="showvolume">
          <a11y-media-button
            id="mute"
            action$="[[muteUnmute.action]]"
            icon$="[[muteUnmute.icon]]"
            label$="[[muteUnmute.label]]"
            on-tap="_onButtonTap"
          ></a11y-media-button>
          <span id="volume-slider-label" class="sr-only">[[volumeLabel]]</span>
          <paper-slider
            id="volume"
            aria-labelledby="volume-slider-label"
            min="0"
            max="100"
            on-change="_onSettingsChanged"
            pin
            step="10"
            value$="[[volume]]"
          ></paper-slider>
        </div>
        <span class="play-status control-bar">
          <span id="statbar"></span>
        </span>
      </div>
      <div id="controls-right">
        <a11y-media-button
          action="captions"
          disabled$="[[!hasCaptions]]"
          hidden$="[[!hasCaptions]]"
          icon$="[[_getLocal(localization,'captions','icon')]]"
          label$="[[_getLocal(localization,'captions','label')]]"
          on-tap="_onButtonTap"
          toggle$="[[cc]]"
        >
        </a11y-media-button>
        <a11y-media-button
          action="transcript"
          controls="transcript"
          disabled$="[[hideTranscriptButton]]"
          hidden$="[[hideTranscriptButton]]"
          icon$="[[_getLocal(localization,'transcript','icon')]]"
          label$="[[_getLocal(localization,'transcript','label')]]"
          on-tap="_onButtonTap"
          toggle$="[[!hideTranscript]]"
        >
        </a11y-media-button>
        <a11y-media-button
          action="print"
          disabled$="[[noPrinting]]"
          hidden$="[[noPrinting]]"
          icon$="[[_getLocal(localization,'print','icon')]]"
          label="[[_getLocal(localization,'print','label')]]"
          on-tap="_handlePrintClick"
        >
        </a11y-media-button>
        <paper-menu-button
          id="settings"
          allow-outside-scroll
          horizontal-align="right"
          ignore-select
          on-change="_onSettingsChanged"
          on-iron-activate="_handleSettingsActivate"
          on-iron-select="_handleSettingsSelect"
          vertical-align="bottom"
        >
          <paper-icon-button
            action="settings"
            alt$="[[_getLocal(localization,'settings','label')]]"
            icon$="[[_getLocal(localization,'settings','icon')]]"
            slot="dropdown-trigger"
          >
          </paper-icon-button>
          <paper-listbox id="settingslist" slot="dropdown-content">
            <paper-item hidden$="[[!hasCaptions]]">
              <div class="setting">
                <div class="setting-text">
                  [[_getLocal(localization,'captions','label')]]
                </div>
                <div class="setting-control">
                  <dropdown-select
                    id="tracks"
                    disabled$="[[!hasCaptions]]"
                    no-label-float
                    on-change="_handleTrackChange"
                    value
                  >
                    <paper-item value=""
                      >[[_getLocal(localization,'captions','off')]]</paper-item
                    >
                    <template is="dom-repeat" items="{{tracks}}" as="option">
                      <paper-item value$="{{option.value}}"
                        >{{option.text}}</paper-item
                      >
                    </template>
                  </dropdown-select>
                </div>
              </div>
            </paper-item>
            <paper-item hidden$="[[noTranscriptToggle]]">
              <div class="setting">
                <div id="transcript-label" class="setting-text">
                  [[_getLocal(localization,'transcript','label')]]
                </div>
                <div class="setting-control">
                  <paper-toggle-button
                    id="transcript-toggle"
                    aria-labelledby="transcript-label"
                    checked$="[[!hideTranscript]]"
                    controls="transcript"
                    disabled$="[[noTranscriptToggle]]"
                  >
                  </paper-toggle-button>
                </div>
              </div>
            </paper-item>
            <paper-item>
              <div class="setting">
                <div id="loop-label" class="setting-text">
                  [[_getLocal(localization,'loop','label')]]
                </div>
                <div class="setting-control">
                  <paper-toggle-button
                    id="loop"
                    aria-labelledby="loop-label"
                    checked$="[[loop]]"
                  ></paper-toggle-button>
                </div>
              </div>
            </paper-item>
            <paper-item>
              <div class="setting">
                <div id="speed-label" class="setting-text">
                  [[_getLocal(localization,'speed','label')]]
                </div>
                <div class="setting-control">
                  <paper-slider
                    id="speed"
                    aria-labelledby="speed-label"
                    class="setting-slider"
                    label="tracks"
                    min="0.5"
                    max="4"
                    pin
                    step="0.5"
                    tab-index="-1"
                    value$="[[playbackRate]]"
                  ></paper-slider>
                </div>
              </div>
            </paper-item>
          </paper-listbox>
        </paper-menu-button>
        <paper-tooltip for="settings">
          [[_getLocal(localization,'settings','label')]]
        </paper-tooltip>
        <template is="dom-if" if="[[fullscreenButton]]">
          <template is="dom-if" if="[[!audioNoThumb]]">
            <a11y-media-button
              action="fullscreen"
              icon$="[[_getLocal(localization,'fullscreen','icon')]]"
              label$="[[_getLocal(localization,'fullscreen','label')]]"
              on-tap="_onButtonTap"
              toggle$="[[fullscreen]]"
              step="1"
            >
            </a11y-media-button>
          </template>
        </template>
      </div>
    `}connectedCallback(){super.connectedCallback();this._addResponsiveUtility({element:this,attribute:"responsive-size",relativeToParent:!0,sm:300,md:600,lg:900,xl:1200})}ready(){super.ready();let e=this;e.$.mute.$.button.onfocus=function(){e.$.volume.classList.add("focus")},e.$.mute.$.button.onblur=function(){e.$.volume.classList.remove("focus")}}setStatus(e){this.$.statbar.innerText=e}setTracks(e){this.set("tracks",[]),this.set("tracks",e.slice(0))}_handleTrackChange(e){let t=this;null!==t.__selectedTrack&&(""!==e.detail.value?(t.dispatchEvent(new CustomEvent("select-track",{detail:{control:t,value:e.detail.value}})),t.dispatchEvent(new CustomEvent("toggle-cc",{detail:{control:t,value:!0}}))):t.dispatchEvent(new CustomEvent("toggle-cc",{detail:{control:t,value:!1}})))}_handleSettingsSelect(e){}_handleSettingsActivate(e){}_onButtonTap(e){this.dispatchEvent(new CustomEvent("controls-change",{detail:e.detail})),this.$.settings.close()}_onSettingsChanged(e){this.dispatchEvent(new CustomEvent("controls-change",{detail:e.target})),this.$.settings.close()}_hideTranscriptButton(e,t){return e||t}_noPrinting(e,t){return e||!t}_noTranscriptToggle(e,t,i){return e||t||!i}}window.customElements.define(Ns.tag,Ns);class Is extends Wo{static get properties(){return{controls:{type:String,value:"video"},icon:{type:String,value:null},label:{type:String,value:null},disabled:{type:Boolean,value:null}}}static get tag(){return"a11y-media-html5"}static get behaviors(){return[A11yMediaBehaviors]}static get template(){return St`
      <style>
        :host {
          height: 100%;
          display: flex;
          align-items: stretch;
          position: relative;
        }
        :host([hidden]) {
          display: none;
        }
        #video {
          width: 100%;
          max-width: 100%;
        }
      </style>
      <video
        id="video"
        aria-hidden$="[[isYoutube]]"
        autoplay$="[[autoplay]]"
        crossorigin$="[[crossorigin]]"
        hidden$="[[audioOnly]]"
        lang$="[[mediaLang]]"
        on-loadedmetadata="_handleMetadata"
        poster$="[[thumbnailSrc]]"
        src$="[[manifest]]"
        preload="metadata"
      >
        HTML5 video not supported
      </video>
      <audio
        id="audio"
        autoplay$="[[autoplay]]"
        crossorigin$="[[crossorigin]]"
        hidden$="[[!audioOnly]]"
        lang$="[[mediaLang]]"
        on-loadedmetadata="_handleMetadata"
        poster$="[[thumbnailSrc]]"
        preload="metadata"
      >
        HTML5 audio not supported
      </audio>
    `}connectedCallback(){super.connectedCallback()}ready(){super.ready();this.media=void 0===this.$.video||this.audioOnly?this.$.audio:this.$.video}_handleMetadata(){this.duration=this.media.duration>0?this.media.duration:0,this.tracks=[],this.volume=this.muted?0:Math.max(this.volume,10),this.seekable=this.media.seekable,this.setVolume(this.volume),this.setMute(this.muted),this.setCC(this.cc),this.setLoop(this.loop),this.setPlaybackRate(this.playbackRate),this.aspectRatio=this.media.videoWidth/this.media.videoHeight,this.dispatchEvent(new CustomEvent("media-loaded",{detail:this}))}getBufferedTime(){return this.media.buffered.length>0?this.media.buffered.end(0):this.getCurrentTime()}getCurrentTime(){return this.media.currentTime}play(){this.media.play()}pause(){this.media.pause()}selectTrack(e){this.selectedTrack=this.media.textTracks[e];for(let t=0;t<this.media.textTracks.length;t++)parseInt(e)===t?this.media.textTracks[t].mode="showing":null!==this.media.textTracks[t]&&(this.media.textTracks[t].mode="hidden")}stop(){this.pause(),this.seek(0)}restart(){this.seek(0),this.play()}seek(e){this.media.currentTime=e}setCC(e){this.media.cc=!0===e,void 0!==this.selectedTrack&&1==e?(this.selectedTrack.mode="showing",this.$.video.textTracks.value=this.selectedTrackId):void 0!==this.selectedTrack&&null!==this.selectedTrack&&(this.selectedTrack.mode="hidden",this.$.video.textTracks.value="")}setVolume(e){this.media.volume=e/100}setPlaybackRate(e){this.media.playbackRate=null!==e?e:1}setLoop(e){this.media.loop=!0===e}setMute(e){this.media.muted=e}}window.customElements.define(Is.tag,Is);class Rs extends Wo{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1},playing:{type:Boolean,value:!1}}}static get tag(){return"a11y-media-play-button"}static get behaviors(){return[Wo]}static get template(){return St`
      <style>
        :host {
          display: block;
          opacity: 1;
          transition: opacity 0.5s;
        }
        :host([disabled]),
        :host([elapsed]) {
          opacity: 0;
        }
        :host,
        :host #thumbnail,
        :host #background,
        :host #button {
          width: 100%;
          top: 0;
          left: 0;
          opacity: 1;
          transition: opacity 0.5s;
        }
        :host #thumbnail,
        :host #background,
        :host #button {
          position: absolute;
          height: 100%;
          padding: 0;
          margin: 0;
          border: none;
        }
        :host #thumbnail {
          height: auto;
          overflow: hidden;
        }
        :host #button {
          overflow: hidden;
          background: transparent;
        }
        :host #button:hover {
          cursor: pointer;
        }
        :host #background {
          opacity: 0.3;
          background: var(--a11y-play-button-bg-color);
        }
        :host #button:focus #background,
        :host #button:hover #background {
          background: var(--a11y-play-button-focus-bg-color);
          opacity: 0.1;
        }
        :host #arrow {
          stroke: #ffffff;
          fill: #000000;
        }
        :host #text {
          fill: #ffffff;
        }
        :host .sr-only {
          font-size: 0;
        }
        @media print {
          :host(:not([thumbnail-src])),
          :host #background,
          :host #svg {
            display: none;
          }
        }
      </style>
      <button
        id="button"
        aria-pressed$="[[playing]]"
        aria-hidden$="[[disabled]]"
        tabindex="0"
        disabled$="[[disabled]]"
        controls="video"
        on-tap="_buttonTap"
        title$="[[label]]"
      >
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="30%"
          height="30%"
          opacity="0.7"
        >
          <g>
            <polygon
              id="arrow"
              points="30,20 30,180 170,100"
              fill="#000000"
              stroke="#ffffff"
              stroke-width="15px"
            ></polygon>
            <text
              id="text"
              class="sr-only"
              x="50"
              y="115"
              fill="#ffffff"
              font-size="30px"
            >
              [[playPause.label]]
            </text>
          </g>
        </svg>
      </button>
    `}connectedCallback(){super.connectedCallback(),this.$.text.innerText=this.playLabel}ready(){super.ready(),this.__target=this.$.button}_buttonTap(){this.dispatchEvent(new CustomEvent("controls-change",{detail:this}))}}window.customElements.define(Rs.tag,Rs),co({is:"iron-a11y-keys",behaviors:[xr],properties:{target:{type:Object,observer:"_targetChanged"},keys:{type:String,reflectToAttribute:!0,observer:"_keysChanged"}},attached:function(){this.target||(this.target=this.parentNode)},_targetChanged:function(e){this.keyEventTarget=e},_keysChanged:function(){this.removeOwnKeyBindings(),this.addOwnKeyBinding(this.keys,"_fireKeysPressed")},_fireKeysPressed:function(e){this.fire("keys-pressed",e.detail,{})}});class Bs extends Lt{static get is(){return"simple-search-content"}static get properties(){return{content:{type:String,value:null,reflectToAttribute:!0},inSearchMode:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return St`
      <style>
        :host #content {
          @apply --simple-search-content;
        }
        :host #content[match-number] {
          color: var(--simple-search-match-text-color, #000);
          background-color: var(--simple-search-match-bg-color, #f0f0f0);
          border: 1px solid;
          border-color: var(--simple-search-match-border-color, #ddd);
          padding: 0.16px 4px;
          border-radius: 0.16px;
          font-weight: bold;
          @apply --simple-search-match;
        }
      </style>
      <span id="content">
        <span class="initialcontent" hidden$="[[inSearchMode]]"
          >[[content]]</span
        >
        <template is="dom-repeat" items="[[__searchedContent]]">
          <span
            match-number$="[[item.matchNumber]]"
            tabindex$="[[_getTabIndex(item.matchNumber)]]"
            >[[item.text]]</span
          >
        </template>
      </span>
    `}enableSearch(e){let t=this,i=[{matched:!1,text:t.content}];null===i[0].text&&(i[0].text=t.innerHTML),this.setContent(i),e.addEventListener("simple-search",function(){t.setContent(i),t.setContent(e.findMatches(i))}),e.addEventListener("goto-result",e=>{this.focus(e.detail)})}setContent(e){this.inSearchMode=!0,this.__searchedContent=e}focus(e){let t=this.$.content.querySelector('[match-number="'+e+'"]');null!=t&&t.focus()}_getTabIndex(e){return null!=e?"1":""}}customElements.define(Bs.is,Bs);class $s extends Wo{static get properties(){return{active:{type:Boolean,reflectToAttribute:!0,computed:"_getActiveCue(cue,activeCues)",notify:!0,reflectToAttribute:!0},activeCues:{type:Array,value:null,notify:!0},cue:{type:Array,value:null},disabled:{type:Boolean,value:!1},text:{type:String,value:""}}}static get tag(){return"a11y-media-transcript-cue"}static get behaviors(){return[Wo]}static get template(){return St`
      <style is="custom-style">
        :host {
          cursor: default;
          display: table-row;
          width: 100%;
          color: var(--a11y-media-transcript-cue-color);
          background-color: var(--a11y-media-transcript-cue-bg-color);
          transition: color 0.25s, background-color 0.25s;
        }
        :host([hide-timestamps]) {
          display: inline;
        }
        :host(:not([active]):not([disabled]):active),
        :host(:not([active]):not([disabled]):focus),
        :host(:not([active]):not([disabled]):hover) {
          cursor: pointer;
          color: var(--a11y-media-transcript-focused-cue-color);
          background-color: var(--a11y-media-transcript-focused-cue-bg-color);
          outline: 1px dotted var(--a11y-media-transcript-focused-cue-color);
          @apply --a11y-media-transcript-focused-cue;
        }
        :host([active]) {
          color: var(--a11y-media-transcript-active-cue-color);
          background-color: var(--a11y-media-transcript-active-cue-bg-color);
          @apply --a11y-media-transcript-active-cue;
        }
        :host #text {
          display: table-cell;
          width: 100%;
          line-height: 200%;
        }
        :host([hide-timestamps]) #text {
          display: inline;
        }
        :host #time {
          display: table-cell;
          font-size: 80%;
          padding: 0 16px 0 0;
          white-space: nowrap;
          font-family: monospace;
        }
        :host([hide-timestamps]) #time {
          display: none;
        }
        :host simple-search-content {
          --simple-search-match-text-color: var(
            --a11y-media-transcript-match-color
          );
          --simple-search-match-bg-color: var(
            --a11y-media-transcript-match-bg-color
          );
          --simple-search-match-border-color: var(
            --a11y-media-transcript-match-border-color
          );
          --simple-search-match: {
            border: none;
            border-radius: 4px;
            font-weight: normal;
          }
        }
        @media print {
          :host,
          :host([active]),
          :host(:not([active]):not([disabled]):active),
          :host(:not([active]):not([disabled]):focus),
          :host(:not([active]):not([disabled]):hover) {
            color: #000000;
            background-color: #ffffff;
          }
        }
      </style>
      <span id="time">[[cue.start]] - [[cue.end]]</span>
      <span id="text">
        <simple-search-content id="content" content="[[cue.text]]">
          [[cue.text]]
        </simple-search-content>
      </span>
    `}connectedCallback(){super.connectedCallback()}ready(){super.ready();let e=this,t=e.search;e.disabled||(e.__target=this,e.setAttribute("aria-role","button"),e.setAttribute("controls",this.mediaId)),e.disableSearch||void 0===e.search||null===e.search||e.$.content.enableSearch(t),e.addEventListener("click",e._handleTap)}_getActiveCue(e,t){return!(null===t||!t.includes(e.order.toString()))}_handleTap(e){this.dispatchEvent(new CustomEvent("tap",{detail:this.cue.seek}))}}window.customElements.define($s.tag,$s);class Fs extends Wo{static get properties(){return{activeCues:{type:Array,value:null,reflectToAttribute:!0,notify:!0},lang:{type:String,value:"en",reflectToAttribute:!0},mediaId:{type:String,value:null},tabIndex:{type:Number,computed:"_getTabIndex(disableInteractive)"},role:{type:Number,computed:"_getRole(disableInteractive)"},selectedTranscript:{type:String,value:"0"},tracks:{type:Array,value:null}}}static get tag(){return"a11y-media-transcript"}static get behaviors(){return[Wo]}static get template(){return St`
      <style is="custom-style" include="simple-colors">
        :host {
          color: var(--a11y-media-transcript-color);
          background-color: var(--a11y-media-transcript-bg-color);
          border-left: 1px solid var(--a11y-media-transcript-bg-color);
        }
        :host([hidden]) {
          display: none !important;
        }
        :host .transcript-from-track {
          display: none;
          width: calc(100% - 30px);
          padding: 0 15px 15px;
          color: var(--a11y-media-transcript-cue-color);
          background-color: var(--a11y-media-transcript-cue-bg-color);
        }
        :host .transcript-from-track[active] {
          display: table;
        }
        :host .transcript-from-track[active][hideTimestamps] {
          display: block;
        }
        :host .sr-only:not(:focus) {
          position: absolute;
          left: -99999;
          top: 0;
          height: 0;
          width: 0;
          overflow: hidden;
        }
        @media print {
          :host {
            padding: 0 15px 5px;
            color: #000;
            background-color: #ffffff;
            border-top: 1px solid #aaa;
          }
        }
      </style>
      <a id="transcript-desc" class="sr-only" href="#bottom">
        [[_getLocal(localization,'transcript','skip')]]
      </a>
      <div
        id="loading"
        active$="[[_isLoading(selectedTranscript, tracks)]]"
        class="transcript-from-track"
      >
        [[_getLocal(localization,'transcript','loading')]]
      </div>
      <template id="tracks" is="dom-repeat" items="{{tracks}}" as="track">
        <div
          id="track"
          class="transcript-from-track"
          lang="{{track.language}}"
          active$="[[_isActive(selectedTranscript,index)]]"
        >
          <template is="dom-repeat" items="{{track.cues}}" as="cue">
            <a11y-media-transcript-cue
              accent-color$="[[accentColor]]"
              active-cues$="[[activeCues]]"
              controls$="[[mediaId]]"
              cue$="{{cue}}"
              disabled$="[[disableInteractive]]"
              disable-search$="[[disableSearch]]"
              hide-timestamps$="[[hideTimestamps]]"
              on-tap="_handleCueSeek"
              order$="{{cue.order}}"
              role="button"
              search="[[search]]"
              tabindex="0"
            >
            </a11y-media-transcript-cue>
          </template>
        </div>
      </template>
      <div id="bottom" class="sr-only"></div>
    `}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("transcript-ready",{detail:this}))}ready(){super.ready()}print(e){let t=this.shadowRoot.querySelector("#track[active]").cloneNode(!0),i=St`
        <style>
          a11y-media-transcript-cue {
            display: table-row;
            background-color: #fff;
            color: #000;
          }
          a11y-media-transcript-cue[hide-timestamps],
          a11y-media-transcript-cue[hide-timestamps] #text {
            display: inline;
          }
          a11y-media-transcript-cue #text {
            display: table-cell;
            line-height: 200%;
          }
          a11y-media-transcript-cue #time {
            display: table-cell;
            font-size: 80%;
            padding: 0 16px;
            white-space: nowrap;
            font-family: monospace;
          }
          a11y-media-transcript-cue[hide-timestamps] #time {
            display: none;
          }
          a11y-media-transcript-cue [matched] {
            background-color: #fff;
            color: #eee;
            padding: 3px 4px;
            border-radius: 3px;
          }
        </style>
      `,n=St`
        <h1>Transcript</h1>
      `;if(void 0!==e&&(n.innerHTML=e),null!==t&void 0!==t){let e=window.open("","","left=0,top=0,width=552,height=477,toolbar=0,scrollbars=0,status =0");e.document.body.appendChild(i),e.document.body.appendChild(n),e.document.body.appendChild(t),e.document.close(),e.focus(),e.print(),e.close()}}setActiveCues(e){let t=this,i=null!==t.shadowRoot.querySelector("#track")&&void 0!==t.shadowRoot.querySelector("#track")?t.shadowRoot.querySelector("#track").offsetTop:0,n=t.shadowRoot.querySelector("#track a11y-media-transcript-cue[active]");if(t.set("activeCues",e.slice(0)),!t.disableScroll&&null!==n&void 0!==n){let e=function(t,i,n){if(!(n<=0)){var a=(i-t.scrollTop)/n*10;setTimeout(function(){t.scrollTop=t.scrollTop+a,t.scrollTop!==i&&e(t,i,n-10)},10)}};e(t,n.offsetTop-i,250)}}setMedia(e){this.media=e,this.dispatchEvent(new CustomEvent("transcript-ready",{detail:this}))}setTracks(e){this.set("tracks",e.slice(0)),this.notifyPath("tracks"),void 0!==this.tracks&&this.tracks.length>0&&this.$.tracks.render()}toggleHidden(e){let t=document.getElementById("inner");null!=t&&t.querySelector("a11y-media-transcript-cue[active]"),null!=t&&t.querySelector("a11y-media-transcript-cue");e=void 0!==e?e:this.hidden,this.hidden=e}_getTabIndex(e){return e?-1:0}_getRole(e){return e?null:"button"}_handleCueSeek(e){this.disableInteractive||this.dispatchEvent(new CustomEvent("cue-seek",{detail:e.detail}))}_isActive(e,t){return null!=e&&parseInt(e)===parseInt(t)}_isLoading(e,t){return null==e||null==t||0===t.length}_stampLocal(e,t,i){return this.$[t].innerHTML=this._getLocal(e,"transcript",i),this._getLocal(e,"transcript",i)}}window.customElements.define(Fs.tag,Fs);class Ds extends Lt{static get is(){return"simple-search"}static get properties(){return{alwaysFloatLabel:{type:Boolean,value:!1},caseSensitive:{type:Boolean,value:null},controls:{type:String,value:null},nextButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,1)"},nextButtonIcon:{type:String,value:"arrow-forward"},nextButtonLabel:{type:String,value:"next result"},noLabelFloat:{type:Boolean,value:!1},noResults:{type:Boolean,computed:"_hasNoResults(resultCount)"},noSearch:{type:Boolean,computed:"_hasNoSearch(searchTerms)"},prevButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,-1)"},prevButtonIcon:{type:String,value:"arrow-back"},prevButtonLabel:{type:String,value:"previous result"},resultCount:{type:Number,value:0},resultPointer:{type:Number,value:0},resultsSpan:{type:String,computed:"_getResultsSpan(noSearch,resultPointer,resultCount)"},searchInputIcon:{type:String,value:"search"},searchInputLabel:{type:String,value:"search"},searchTerms:{type:Array,value:[]},target:{type:Object,value:null}}}static get template(){return St`
      <style is="custom-style">
        :host {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
        }
        :host #input {
          flex-grow: 2;
          margin-right: 4px;
          --paper-input-container-input-color: var(
            --simple-search-input-text-color,
            #000
          );
          --paper-input-container-shared-input-style_-_color: var(
            --simple-search-input-text-color,
            #000
          );
          --paper-input-container-focus-color: var(
            --simple-search-input-line-color,
            #000
          );
          --paper-input-container-color: var(
            --simple-search-input-placeholder-color,
            #222
          );
          color: var(--simple-search-input-placeholder-color, #222);
          @apply --simple-search-container;
        }
        :host #xofy {
          margin: 8px;
        }
        :host button {
          margin: 8px 0 8px;
          color: var(--simple-search-button-color, #111);
          background-color: var(--simple-search-button-bg-color, #eee);
          border-color: var(--simple-search-button-border-color, #ccc);
          @apply --simple-search-button;
        }
        :host button:not([disabled]):focus,
        :host button:not([disabled]):hover {
          cursor: pointer;
          color: var(--simple-search-button-hover-color, #000);
          background-color: var(--simple-search-button-hover-bg-color, #fff);
          border-color: var(--simple-search-button-hover-border-color, #ddd);
          @apply --simple-search-button-hover;
        }
        :host button[disabled] {
          cursor: not-allowed;
          color: var(--simple-search-button-disabled-color, #999);
          background-color: var(--simple-search-button-disabled-bg-color, #eee);
          border-color: var(--simple-search-button-disabled-border-color, #ccc);
          @apply --simple-search-button-disabled;
        }
        :host button:not([controls]) {
          display: none;
        }
        :host [shrink-hide] {
          display: none;
        }
      </style>
      <paper-input
        id="input"
        always-float-label\$="[[alwaysFloatLabel]]"
        label="[[searchInputLabel]]"
        no-label-float\$="[[noLabelFloat]]"
        on-change="_handleChange"
      >
        <iron-icon icon="[[searchInputIcon]]" slot="prefix"></iron-icon>
      </paper-input>
      <div id="xofy" shrink-hide\$="[[noSearch]]"></div>
      <div shrink-hide\$="[[noResults]]">
        <button
          id="prev"
          aria-label="[[prevButtonLabel]]"
          aria-role="button"
          controls\$="[[controls]]"
          disabled\$="[[prevButtonDisabled]]"
          on-tap="_navigateResults"
          tabindex="0"
        >
          <iron-icon icon="[[prevButtonIcon]]"></iron-icon>
        </button>
        <paper-tooltip for="prev">[[prevButtonLabel]]</paper-tooltip>
        <button
          id="next"
          aria-label="[[nextButtonLabel]]"
          aria-role="button"
          controls\$="[[controls]]"
          disabled\$="[[nextButtonDisabled]]"
          on-tap="_navigateResults"
          tabindex="0"
        >
          <iron-icon icon\$="[[nextButtonIcon]]"></iron-icon>
        </button>
        <paper-tooltip for="next">[[nextButtonLabel]]</paper-tooltip>
      </div>
    `}ready(){super.ready();let e=this.$.input;this._getSearchText(e.value)}_handleChange(e){this._getSearchText(this.$.input.value),this.resultCount=0,this.resultPointer=0,this.dispatchEvent(new CustomEvent("simple-search",{detail:{search:this,content:e}}))}_hasNoResults(e){return e<1}_hasNoSearch(e){return e.length<1}_getResultsSpan(e,t,i){let n="";return n=i>0&&t>0?t+"/"+i:" "+i,this.$.xofy.innerHTML=n,this.$.xofy.innerHTML}_navigateResults(e){let t="next"===e.currentTarget.id?1:-1;this.resultPointer+t>0&&this.resultPointer+t<=this.resultCount&&(this.resultPointer+=t,this.dispatchEvent(new CustomEvent("goto-result",{detail:this.resultPointer})))}_isNavButtonDisabled(e,t,i,n){return""==i||e+n<=0||e+n>t}_getSearchText(e){let t=new Array;if(null!=e){t=e.split(/[\"\']/gm);for(let e=0;e<t.length;e++)t[e]=t[e].trim(),""===t[e]&&t.splice(e,1)}this.set("searchTerms",[]),this.set("searchTerms",t.slice(0))}findMatches(e){let t=this,i=t.searchTerms,n=this.caseSensitive?"gm":"gim",a=e.slice(0),o=function(e){for(let i=0;i<a.length;i++)if(!1===a[i].matched){let o=new RegExp("\\b"+e+"\\b",n),r=a[i].text,s=r.search(o),l=s+e.length;if(s>-1){t.resultCount+=1;let e=r.slice(0,s),n=r.slice(s,l),o=r.slice(l,r.length);a.splice(i,1,{matched:!1,text:e,searchObject:t},{matched:!0,matchNumber:t.resultCount,text:n,searchObject:t},{matched:!1,text:o,searchObject:t})}}};for(let e=0;e<i.length;e++)o(i[e]);return t.resultPointer=0,a}}customElements.define(Ds.is,Ds);class js extends Wo{static get properties(){return{target:{type:Object,value:null}}}static get tag(){return"a11y-media-transcript-controls"}static get behaviors(){return[Wo]}static get template(){return St`
      <style is="custom-style" include="simple-colors">
        :host {
          display: flex;
          height: 44px;
          max-height: 44px;
          min-height: 44px;
          color: var(--a11y-media-color);
          background-color: var(--a11y-media-transcript-bg-color);
          --a11y-media-button-bg-color: var(--a11y-media-transcript-bg-color);
          --a11y-media-button-hover-bg-color: var(
            --a11y-media-transcript-bg-color
          );
          --simple-search-input-text-color: var(--a11y-media-color);
          --simple-search-input-line-color: var(--a11y-media-accent-color);
          --simple-search-input-placeholder-color: var(
            --a11y-media-transcript-color
          );
          --simple-search-button-color: var(--a11y-media-accent-color);
          --simple-search-button-hover-color: var(
            --a11y-media-faded-accent-color
          );
          --simple-search-button-bg-color: var(--a11y-media-bg-color);
          --simple-search-button-border-color: var(--a11y-media-bg-color);
          --simple-search-button-hover-border-color: var(--a11y-media-bg-color);
          --simple-search-button-disabled-color: var(
            --simple-colors-default-theme-grey-5
          );
          --simple-search-button-disabled-bg-color: var(
            --simple-colors-default-theme-grey-2
          );
          --simple-search-button-disabled-border-color: var(
            --simple-colors-default-theme-grey-3
          );
          --paper-input-container-input-color: var(--a11y-media-color);
          --simple-search-container: {
            padding: 0 15px;
          }
        }
        :host #searchbar {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          width: 100%;
        }
        :host #searching {
          flex-grow: 2;
        }
        :host #autoscroll {
          padding-right: 8px;
        }
        :host #scrolling,
        :host #printing {
          display: flex;
          align-items: center;
        }
        @media print {
          :host {
            display: none;
          }
        }
      </style>
      <div id="searchbar">
        <div id="searching">
          <simple-search
            id="simplesearch"
            controls="transcript"
            disabled$="[[disableSearch]]"
            hidden$="[[disableSearch]]"
            no-label-float
            next-button-icon$="[[_getLocal(localization,'nextResult','icon')]]"
            next-button-label$="[[_getLocal(localization,'nextResult','label')]]"
            prev-button-icon$="[[_getLocal(localization,'prevResult','icon')]]"
            prev-button-label$="[[_getLocal(localization,'prevResult','label')]]"
            search-input-icon$="[[_getLocal(localization,'search','icon')]]"
            search-input-label$="[[_getLocal(localization,'search','label')]]"
            target="[[target]]"
          >
          </simple-search>
        </div>
        <div id="scrolling">
          <a11y-media-button
            id="scroll"
            controls="transcript"
            icon="[[_getLocal(localization,'autoScroll','icon')]]"
            label="[[_getLocal(localization,'autoScroll','label')]]"
            on-tap="_handleScrollClick"
            toggle$="[[!disableScroll]]"
          >
          </a11y-media-button>
        </div>
        <div
          id="printing"
          hidden$="[[disablePrintButton]]"
          disabled$="[[disablePrintButton]]"
        >
          <a11y-media-button
            id="print"
            controls="transcript"
            icon$="[[_getLocal(localization,'print','icon')]]"
            label="[[_getLocal(localization,'print','label')]]"
            on-tap="_handlePrintClick"
          >
          </a11y-media-button>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback();this.search=this.$.simplesearch,this.dispatchEvent(new CustomEvent("searchbar-added",{detail:this.search}))}_handleScrollClick(e){this.dispatchEvent(new CustomEvent("toggle-scroll",{detail:this}))}}window.customElements.define(js.tag,js),window.A11yMediaStateManager=window.A11yMediaStateManager||{},window.A11yMediaStateManager.requestAvailability=(()=>(window.A11yMediaStateManager.instance||(window.A11yMediaStateManager.instance=document.createElement("a11y-media-state-manager"),document.body.appendChild(window.A11yMediaStateManager.instance)),window.A11yMediaStateManager.instance));class Ks extends Lt{static get tag(){return"a11y-media-state-manager"}static get properties(){return{players:{type:Array,value:[]},stickyPlayer:{type:Object,value:null}}}constructor(){super();let e=this;e.__playerLoader=function(t){e.players.push(t.detail)},window.A11yMediaStateManager.instance||(window.A11yMediaStateManager.instance=this,window.addEventListener("a11y-player",e.__playerLoader))}connectedCallback(){super.connectedCallback();let e=this;this.__stickyManager=function(t){e.setStickyPlayer(t.detail)},this.__scrollChecker=function(t){e._checkScroll()},window.addEventListener("a11y-player-playing",e.__stickyManager),window.addEventListener("scroll",e.__scrollChecker)}checkConcurrentPlayers(){let e=this,t=e.stickyPlayer;for(let i=0;i<e.players.length;i++){let n=e.players[i];n===t||t.allowConcurrent&&n.allowConcurrent||n.pause()}}setStickyPlayer(e){let t=this,i=t._getParentNode(e);t.__playerTop=i.offsetTop,t.__playerUpperMiddle=t.__playerTop+.9*i.offsetHeight,t.__playerLowerMiddle=t.__playerTop+.1*i.offsetHeight,e!==t.stickyPlayer&&void 0!==t.stickyPlayer&&null!==t.stickyPlayer&&(t.stickyPlayer.toggleSticky(!1),t.__parent.style.height="unset"),i.style.height=i.offsetHeight+"px",t.__parent=i,t.stickyPlayer=e,e.allowConcurrent||t.checkConcurrentPlayers(),t._checkScroll()}_checkScroll(){let e=this,t=window.pageYOffset,i=t+window.innerHeight;void 0!==e.stickyPlayer&&null!==e.stickyPlayer&&(e.stickyPlayer.__playing&&(e.__playerLowerMiddle>i||e.__playerUpperMiddle<t)?e.stickyPlayer.toggleSticky(!0):e.stickyPlayer.toggleSticky(!1))}_getParentNode(e){let t=e.parentNode;return null!=t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("a11y-player",this.__playerLoader),window.removeEventListener("a11y-player-playing",this.__stickyManager),window.removeEventListener("scroll",this.__scrollChecker)}}window.customElements.define(Ks.tag,Ks),window.A11yMediaYoutube=window.A11yMediaYoutube||{},window.A11yMediaYoutube.requestAvailability=(()=>(window.A11yMediaYoutube.instance||(window.A11yMediaYoutube.instance=document.createElement("a11y-media-youtube"),document.body.appendChild(window.A11yMediaYoutube.instance)),window.A11yMediaYoutube.instance));class qs extends Lt{static get tag(){return"a11y-media-youtube"}static get properties(){return{apiReady:{type:"Boolean",value:void 0!==window.YT},counter:{type:"Number",value:0}}}connectedCallback(){super.connectedCallback();let e=this,t=document.createElement("script");t.setAttribute("src","https://www.youtube.com/iframe_api"),t.setAttribute("type","text/javascript"),document.body.appendChild(t),window.onYouTubeIframeAPIReady=function(){var t=new CustomEvent("youtube-api-ready");e.apiReady=!0,document.dispatchEvent(t)}}initYoutubePlayer(e){let t="a11y-media-yt-",i=document.createElement("div");this.counter++,t+=this.counter,document.body.appendChild(i),i.setAttribute("id",t);let n=new YT.Player(t,{width:e.width,height:e.height,videoId:e.videoId,playerVars:{color:"white",controls:0,autoplay:e.autoplay,disablekb:1,enablejsapi:1,iv_load_policy:3,modestbranding:1,showinfo:0,rel:0}});return n.tracks=[],n.duration=0,n.play=function(){n.playVideo()},n.pause=function(){n.pauseVideo()},n.seek=function(e){n.seekTo(e),n.pauseVideo()},n.setMute=function(e){e?n.mute():n.unMute()},n.seekable={length:1,start:function(e){return 0},end:function(e){return n.duration}},n}}window.customElements.define(qs.tag,qs);class Us extends Wo{static get template(){return St`
      <style>
        :host {
          display: block;
          width: calc(100% - 2px);
          border: 1px solid var(--simple-colors-default-theme-grey-3);
          --a11y-media-color: var(--simple-colors-default-theme-grey-11);
          --a11y-media-bg-color: var(--simple-colors-default-theme-grey-2);
          --a11y-media-hover-color: var(--simple-colors-default-theme-grey-12);
          --a11y-media-hover-bg-color: var(
            --simple-colors-default-theme-grey-2
          );
          --a11y-media-accent-color: var(
            --simple-colors-default-theme-accent-9
          );
          --a11y-media-faded-accent-color: var(
            --simple-colors-default-theme-accent-8
          );

          --a11y-media-settings-menu-color: var(--a11y-media-color);
          --a11y-media-settings-menu-bg-color: var(--a11y-media-bg-color);
          --a11y-media-settings-menu-hover-color: var(--a11y-media-hover-color);
          --a11y-media-settings-menu-hover-bg-color: var(
            --a11y-media-hover-bg-color
          );

          --a11y-media-button-color: var(--a11y-media-color);
          --a11y-media-button-bg-color: var(--a11y-media-bg-color);
          --a11y-media-button-hover-color: var(--a11y-media-accent-color);
          --a11y-media-button-hover-bg-color: var(--a11y-media-hover-bg-color);
          --a11y-media-button-toggle-color: var(
            --a11y-media-faded-accent-color
          );

          --paper-toggle-button-unchecked-bar-color: var(--a11y-media-color);
          --paper-toggle-button-unchecked-button-color: var(--a11y-media-color);
          --paper-toggle-button-checked-bar-color: var(
            --a11y-media-accent-color
          );
          --paper-toggle-button-checked-button-color: var(
            --a11y-media-accent-color
          );

          --paper-slider-active-color: var(--a11y-media-accent-color);
          --paper-slider-secondary-color: var(--a11y-media-faded-accent-color);
          --paper-slider-pin-color: var(--a11y-media-faded-bg-color);
          --paper-slider-pin-start-color: var(--a11y-media-faded-bg-color);
          --paper-slider-pin-end-color: var(--a11y-media-faded-bg-color);
          --paper-slider-knob-color: var(--a11y-media-accent-color);
          --paper-slider-knob-start-color: var(--a11y-media-bg-color);
          --paper-slider-knob-end-color: var(--a11y-media-bg-color);
          --paper-slider-knob-border-color: var(--a11y-media-accent-color);
          --paper-slider-knob-start-border-color: var(--a11y-media-bg-color);
          --paper-slider-knob-end-border-color: var(--a11y-media-bg-color);

          --a11y-media-transcript-color: var(
            --simple-colors-default-theme-grey-7
          );
          --a11y-media-transcript-bg-color: var(
            --simple-colors-default-theme-grey-1
          );
          --a11y-media-transcript-accent-color: var(
            --simple-colors-default-theme-accent-8
          );
          --a11y-media-transcript-faded-accent-color: var(
            --simple-colors-default-theme-accent-10
          );
          --a11y-media-transcript-cue-color: var(
            --simple-colors-light-theme-grey-12
          );
          --a11y-media-transcript-cue-bg-color: var(
            --simple-colors-light-theme-grey-1
          );
          --a11y-media-transcript-active-cue-color: var(
            --simple-colors-light-theme-grey-12
          );
          --a11y-media-transcript-active-cue-bg-color: var(
            --simple-colors-light-theme-accent-1
          );
          --a11y-media-transcript-focused-cue-color: var(
            --simple-colors-light-theme-grey-12
          );
          --a11y-media-transcript-focused-cue-bg-color: var(
            --simple-colors-light-theme-grey-2
          );
          --a11y-media-transcript-match-color: var(
            --simple-colors-light-theme-grey-1
          );
          --a11y-media-transcript-match-bg-color: var(
            --simple-colors-light-theme-accent-10
          );
          --a11y-media-transcript-match-border-color: var(
            --simple-colors-light-theme-accent-12
          );
        }
        :host([dark]) {
          border: 1px solid var(--simple-colors-default-theme-grey-1);
        }
        :host([dark-transcript]) {
          --a11y-media-transcript-bg-color: var(
            --simple-colors-dark-theme-grey-1
          );
          --a11y-media-transcript-cue-color: var(
            --simple-colors-dark-theme-grey-12
          );
          --a11y-media-transcript-cue-bg-color: var(
            --simple-colors-dark-theme-grey-1
          );
          --a11y-media-transcript-active-cue-color: var(
            --simple-colors-dark-theme-accent-10
          );
          --a11y-media-transcript-active-cue-bg-color: var(
            --simple-colors-dark-theme-grey-1
          );
          --a11y-media-transcript-match-color: var(
            --simple-colors-dark-theme-grey-1
          );
          --a11y-media-transcript-match-bg-color: var(
            --simple-colors-dark-theme-accent-10
          );
          --a11y-media-transcript-match-border-color: var(
            --simple-colors-dark-theme-accent-12
          );
          --a11y-media-transcript-focused-cue-color: var(
            --simple-colors-dark-theme-grey-12
          );
          --a11y-media-transcript-focused-cue-bg-color: var(
            --simple-colors-dark-theme-grey-2
          );
        }
        :host,
        :host #outerplayer {
          color: var(--simple-colors-default-theme-grey-12);
          background-color: var(--simple-colors-default-theme-grey-2);
        }
        :host > * {
          transition: all 0.5s;
        }
        :host,
        :host #outerplayer,
        :host #player,
        :host #outertranscript,
        :host #innertranscript {
          display: flex;
          flex-flow: column;
          align-items: stretch;
          align-content: stretch;
        }
        :host #innerplayer {
          display: flex;
        }
        :host([hidden]),
        :host *[hidden] {
          display: none !important;
        }
        :host #innerplayer,
        :host #player,
        :host #player > *,
        :host #customcc,
        :host #customcctxt,
        :host #slider,
        :host #controls,
        :host #outertranscript,
        :host #innertranscript,
        :host #innertranscript > * {
          width: 100%;
        }
        :host > *,
        :host #innerplayer,
        :host #player,
        :host #player > *,
        :host #customcctxt {
          flex: 1 1 auto;
        }
        :host #controls,
        :host #tcontrols {
          flex: 0 0 44px;
        }
        :host #innerplayer {
          margin: 0 auto;
        }
        :host #player {
          position: relative;
        }
        :host #player > * {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          max-height: calc(100vh - 100px);
        }
        :host #playbutton,
        :host #slider,
        :host #controls {
          z-index: 2;
        }
        :host([audio-only]) #playbutton {
          opacity: 0;
        }
        :host #slider {
          flex: 0 0 32px;
          height: 32px;
        }
        :host([thumbnail-src]) #youtube {
          opacity: 0;
        }
        :host #youtube[elapsed] {
          opacity: 1;
          transition: opacity 0.5s;
        }
        :host #customcc:not([hidden]) {
          font-size: 20px;
          transition: font-size 0.25s;
          display: flex;
        }
        :host #customcctxt:not(:empty) {
          align-self: flex-end;
          font-family: sans-serif;
          color: white;
          margin: 4px 10px;
          padding: 0.15em 4px;
          background-color: black;
          background-color: rgba(0, 0, 0, 0.8);
          transition: all 0.5s;
        }
        :host([audio-only]:not([thumbnail-src])) #customcctxt {
          align-self: center;
          color: var(--a11y-media-color);
          background-color: transparent;
        }
        :host #printthumb {
          width: 100%;
          margin: 0;
          display: block;
          border-top: 1px solid #aaaaaa;
        }
        :host .media-caption:not(:empty) {
          width: calc(100% - 30px);
          padding: 5px 15px;
        }
        :host .media-type {
          font-style: italic;
        }
        :host #outertranscript {
          padding: 0 1px 0 0;
        }
        :host #innertranscript {
          flex: 1 0 194px;
        }
        :host #transcript {
          flex: 1 0 150px;
        }
        :host .sr-only {
          position: absolute;
          left: -9999px;
          font-size: 0;
          height: 0;
          width: 0;
          overflow: hidden;
        }
        @media screen {
          :host([flex-layout]:not([responsive-size*="s"])) {
            flex-flow: row;
            padding: 0;
          }
          :host([flex-layout]:not([responsive-size*="s"])) #outerplayer {
            flex: 1 0 auto;
          }
          :host #printthumb,
          :host([height]) #outertranscript,
          :host([stand-alone]) #outertranscript,
          :host([hide-transcript]) #outertranscript {
            display: none;
          }
          :host([sticky]:not([sticky-corner="none"])) #outerplayer {
            position: fixed;
            top: 5px;
            right: 5px;
            width: 200px;
            max-width: 200px;
            z-index: 999999;
            border: 1px solid var(--a11y-media-bg-color);
            box-shadow: 1px 1px 20px 1px rgba(125, 125, 125);
            border-radius: 3.2px;
          }
          :host([dark][sticky]:not([sticky-corner="none"])) #outerplayer {
            border: 1px solid var(--a11y-media-bg-color);
          }
          :host([sticky][sticky-corner="top-left"]) #outerplayer {
            right: unset;
            left: 5px;
          }
          :host([flex-layout]:not([responsive-size*="s"])) > div {
            width: 50%;
            flex: 1 1 auto;
          }
          :host #innertranscript {
            position: relative;
          }
          :host([hide-transcript]) #outerplayer {
            min-width: 50%;
            max-width: 100%;
          }
          :host([hide-transcript]) #outertranscript {
            display: none;
          }
          :host(:not([no-height]):not([stacked-layout]):not([responsive-size*="s"]))
            #transcript {
            position: absolute;
            top: 44px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow-y: scroll;
          }
          :host(:not([no-height]):not([stacked-layout]):not([responsive-size*="s"]))
            #innerplayer.totop {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px !important;
            z-index: 9999;
          }
          :host([sticky][sticky-corner="bottom-left"]) #innerplayer {
            top: unset;
            right: unset;
            bottom: 5px;
          }
          :host([sticky][sticky-corner="bottom-right"]) #innerplayer {
            top: unset;
            bottom: 5px;
          }
          :host([sticky]:not([sticky-corner="none"]):not([no-height]):not([stacked-layout]):not([responsive-size*="s"]))
            #controls {
            display: none;
          }
          :host([responsive-size="lg"]) #customcc {
            font-size: 16px;
          }
          :host([responsive-size="md"]) #customcc,
          :host([flex-layout][responsive-size="xl"]) #customcc {
            font-size: 14px;
          }
          :host([responsive-size="sm"]) #customcc,
          :host([flex-layout][responsive-size="lg"]) #customcc {
            font-size: 12px;
          }
          :host([responsive-size="xs"]) #customcc,
          :host([flex-layout][responsive-size="md"]) #customcc,
          :host([flex-layout][responsive-size="sm"]) #customcc {
            font-size: 10px;
          }
          :host([sticky]:not([sticky-corner="none"])) #customcc {
            display: none;
          }
          :host .media-caption {
            color: var(--a11y-media-bg-color);
            background-color: var(--a11y-media-accent-color);
          }
          :host #audio-only {
            text-align: center;
            font-style: italic;
            width: 100%;
            line-height: 160%;
          }
          :host .print-only {
            display: none;
          }
        }

        @media print {
          :host,
          :host([dark]) {
            outline: 1px solid #aaaaaa;
            background-color: #ffffff;
          }
          :host .screen-only,
          :host #printthumb:not([src]),
          :host(:not([thumbnail-src])) #player {
            display: none;
          }
          :host #searchbar {
            display: none;
          }
          :host .media-caption {
            background-color: #cccccc;
            color: #000000;
            font-size: 120%;
          }
        }
      </style>
      <style is="custom-style" include="simple-colors"></style>

      <div class="sr-only">[[mediaCaption]]</div>
      <div id="outerplayer">
        <div id="innerplayer">
          <div
            id="player"
            style$="[[_getThumbnailCSS(thumbnailSrc,isYoutube,audioOnly)]]"
          >
            <a11y-media-play-button
              id="playbutton"
              action$="[[playPause.action]]"
              audio-only$="[[audioOnly]]"
              disabled="true"
              elapsed$="[[_hidePlayButton(thumbnailSrc, isYoutube, __elapsed)]]"
              hidden$="[[audioNoThumb]]"
              disabled$="[[audioNoThumb]]"
              on-controls-change="_onControlsChanged"
              localization$="[[localization]]"
            >
            </a11y-media-play-button>
            <a11y-media-html5
              id="html5"
              audio-only$="[[audioOnly]]"
              autoplay$="[[autoplay]]"
              cc$="[[cc]]"
              crossorigin$="[[crossorigin]]"
              hidden$="[[isYoutube]]"
              media-lang$="[[mediaLang]]"
              loop$="[[loop]]"
              muted$="[[muted]]"
              manifest$="[[manifest]]"
              on-media-loaded="_handleMediaLoaded"
              playing$="[[__playing]]"
              playback-rate$="[[playbackRate]]"
              thumbnail-src$="[[thumbnailSrc]]"
              preload$="[[preload]]"
              volume$="[[volume]]"
            >
              <slot></slot>
            </a11y-media-html5>
            <div
              id="youtube"
              elapsed$="[[__elapsed]]"
              lang$="[[mediaLang]]"
              video-id$="[[videoId]]"
            ></div>
            <div
              id="customcc"
              class="screen-only"
              hidden$="[[!showCustomCaptions]]"
            >
              <div id="customcctxt"></div>
            </div>
          </div>
        </div>
        <paper-slider
          id="slider"
          class="screen-only"
          max$="[[__duration]]"
          on-dragging-changed="_handleSliderDragging"
          on-focused-changed="_handleSliderKeyboard"
          secondary-progress$="[[__buffered]]"
          value$="[[__elapsed]]"
        >
        </paper-slider>
        <a11y-media-controls
          id="controls"
          cc$="[[cc]]"
          fixed-height$="[[height]]"
          has-captions$="[[hasCaptions]]"
          has-transcript$="[[hasTranscript]]"
          hide-transcript$="[[hideTranscript]]"
          localization$="[[localization]]"
          muted$="[[muted]]"
          on-controls-change="_onControlsChanged"
          on-print-transcript="_handlePrinting"
          playing$="[[__playing]]"
          search-transcript$="[[searchTranscript]]"
          stand-alone$="[[standAlone]]"
          volume="[[__volume]]"
        >
        </a11y-media-controls>
        <div
          aria-hidden="true"
          class="screen-only media-caption"
          hidden$="[[!_hasAttribute(mediaCaption)]]"
        >
          [[mediaCaption]]
        </div>
        <div class="print-only media-caption">[[printCaption]]</div>
      </div>
      <img id="printthumb" aria-hidden="true" src$="[[thumbnailSrc]]" />
      <div id="outertranscript" hidden$="[[standAlone]]">
        <div id="innertranscript" hidden$="[[hideTranscript]]">
          <a11y-media-transcript-controls
            id="tcontrols"
            accent-color$="[[accentColor]]"
            localization$="[[localization]]"
            dark$="[[darkTranscript]]"
            disable-print-button$="[[disablePrintButton]]"
            disable-scroll$="[[disableScroll]]"
            disable-search$="[[disableSearch]]"
            on-searchbar-added="_handleSearchAdded"
            on-toggle-scroll="_handleTranscriptScrollToggle"
            on-print-transcript="_handlePrinting"
            stand-alone$="[[standAlone]]"
          >
          </a11y-media-transcript-controls>
          <a11y-media-transcript
            id="transcript"
            accent-color$="[[accentColor]]"
            dark$="[[darkTranscript]]"
            disable-scroll$="[[disableScroll]]"
            disable-search$="[[disableSearch]]"
            disable-interactive$="[[disableInteractive]]"
            hide-timestamps$="[[hideTimestamps]]"
            on-cue-seek="_handleCueSeek"
            localization$="[[localization]]"
            search="[[search]]"
            selected-transcript$="[[__selectedTrack]]"
          >
          </a11y-media-transcript>
        </div>
      </div>
    `}static get properties(){return{mediaCaption:{type:"String",computed:"_getMediaCaption(audioOnly,localization,mediaTitle)"},printCaption:{type:"String",computed:"_getPrintCaption(audioOnly,audioLabel,videoLabel,mediaTitle)"},showCustomCaptions:{type:"Boolean",computed:"_showCustomCaptions(isYoutube,audioOnly,hasCaptions,cc)"},sources:{type:"Array",value:[]},sticky:{type:"Boolean",value:!1,reflectToAttribute:!0},stickyCorner:{type:"String",value:"top-right",reflectToAttribute:!0},tracks:{type:"Array",value:[]},__playing:{type:"Boolean",value:!1,notify:!0,reflectToAttribute:!0}}}static get tag(){return"a11y-media-player"}static get behaviors(){return[Wo]}connectedCallback(){super.connectedCallback();let e=this;e.__playerAttached=!0,window.A11yMediaStateManager.requestAvailability(),e._addResponsiveUtility(),window.dispatchEvent(new CustomEvent("a11y-player",{detail:e})),e.isYoutube&&e._youTubeRequest()}ready(){super.ready();let e=this;e.__playerReady=!0,e.__interactive=!e.disableInteractive,e.target=e.shadowRoot.querySelector("#transcript"),e.__status=e.loadingLabel,e.__slider=e.$.slider,e.__volume=e.muted?0:Math.max(this.volume,10),e.__resumePlaying=!1,e.__showFullscreen=!this.disableFullscreen&&screenfull.enabled,e.__duration=0,e.$.controls.setStatus(e.__status),e.width=null!==e.width?e.width:"100%",e.style.maxWidth=null!==e.width?e.width:"100%",e._setPlayerHeight(16/9),e.isYoutube?e._youTubeRequest():(e.media=e.$.html5,e._addSourcesAndTracks()),e.$.transcript.setMedia(e.$.innerplayer),e.__showFullscreen&&screenfull.on("change",()=>{this.fullscreen=screenfull.isFullscreen})}play(e){let t=this;t.__playing=!0,void 0!==e&&e.detail!==t.$.playbutton||(t.__playProgress=setInterval(()=>{t.__elapsed=t.media.getCurrentTime()>0?t.media.getCurrentTime():0,t.__duration=t.media.duration>0?t.media.duration:0,t._updateCustomTracks(),t.__status=t._getHHMMSS(t.media.getCurrentTime(),t.__duration)+"/"+t._getHHMMSS(t.__duration),t.$.controls.setStatus(t.__status),t.__elapsed!==t.__duration||t.loop||(t.__playing=!1,clearInterval(t.__playProgress)),t.__buffered=t.media.getBufferedTime},1),window.dispatchEvent(new CustomEvent("a11y-player-playing",{detail:t})),t.media.play())}pause(){this.__playing=!1,this.media.pause(),clearInterval(this.__playProgress)}stop(){this.pause(),this.seek(0)}restart(){this.seek(0),this.play()}rewind(e){e=void 0!==e?e:1,this.seek(Math.max(this.media.getCurrentTime()-e,0))}forward(e){e=void 0!==e?e:1,this.seek(Math.min(this.media.getCurrentTime()+e,this.__duration))}seek(e){let t=void 0!==this.media&&null!==this.media?this.media.seekable:[];t.length>0&&e>=t.start(0)&&e<=t.end(0)&&(this.media.seek(e),this.__elapsed=e,this.__status=this._getHHMMSS(this.media.getCurrentTime(),this.__duration)+"/"+this._getHHMMSS(this.__duration),this.$.controls.setStatus(this.__status),this._updateCustomTracks(),this.__resumePlaying&&this.play())}selectTrack(e){this.__selectedTrack=e,this.$.html5.selectTrack(e)}setVolume(e){this.volume=null!==e?e:70,this.media.setVolume(this.volume),this.muted=0===this.volume}setPlaybackRate(e){e=null!==e?e:1,this.media.setPlaybackRate(e)}toggleCC(e){this.cc=void 0===e?!this.cc:e,this.$.html5.setCC(this.cc)}toggleLoop(e){this.isYoutube||(this.loop=void 0===e?!this.loop:e,this.media.setLoop(this.loop))}toggleMute(e){this.muted=void 0===e?!this.muted:e,this.__volume=this.muted?0:Math.max(this.volume,10),this.media.setMute(this.muted)}toggleSticky(e){e=void 0===e?!this.sticky:e,this.sticky=e,this.dispatchEvent(new CustomEvent("player-sticky",{detail:this}))}toggleTranscript(e){e=void 0===e?this.hideTranscript:e,this.hideTranscript=!e,void 0!==this.$.transcript&&null!==this.$.transcript&&this.dispatchEvent(new CustomEvent("transcript-toggle",{detail:this}))}_appendToPlayer(e,t){let i=this,n=typeof e===Array?e:JSON.parse(e);if(null!=n)for(let e=0;e<n.length;e++){let a=document.createElement(t);for(let t in n[e])a.setAttribute(t,n[e][t]);i.$.html5.media.appendChild(a)}}_setPlayerHeight(e){let t=this;t.audioOnly&&null===t.thumbnailSrc&&null===t.height?t.$.player.style.height="60px":null===t.height?(t.$.player.style.paddingTop=100/e+"%",t.$.innerplayer.style.maxWidth="calc("+100*e+"vh - "+80*e+"px)"):t.$.outerplayer.style.height=t.height}_getMediaCaption(e,t,i){let n=this._getLocal(t,"audio","label"),a=null!=i&&""!==i;return e&&a?i+" ("+n+")":e?n:a?i:null}_getPrintCaption(e,t,i){let n=this._getLocal(t,"audio","label"),a=this._getLocal(t,"video","label"),o=null!=i&&""!==i;return e&&o?i+" ("+n+")":e?n:o?i+" ("+a+")":a}_getThumbnailCSS(e,t,i){return null!=e&&(t||i)?"background-image: url("+e+"); background-size: cover;":null}_addSourcesAndTracks(){let e=this,t=0;e.querySelectorAll("source,track").forEach(function(t){e.$.html5.media.appendChild(t)}),console.log(e.tracks,e.sources),e._appendToPlayer(e.tracks,"track"),e._appendToPlayer(e.sources,"source"),e.$.html5.media.textTracks.onaddtrack=function(i){e.hasCaptions=!0,e.hasTranscript=!e.standAlone,e._getTrackData(i.track,t++)}}_getTrackData(e,t){let i,n=this,a=!0===e.default||void 0===n.__selectedTrack;a&&n.selectTrack(t),e.mode=a&&!0===this.cc?"showing":"hidden",i=setInterval(()=>{if(void 0!==e.cues&&null!==e.cues&&e.cues.length>0){clearInterval(i);let a=Object.keys(e.cues).map(function(t){return{order:""!==e.cues[t].id?e.cues[t].id:t,seek:e.cues[t].startTime,seekEnd:e.cues[t].endTime,start:n._getHHMMSS(e.cues[t].startTime,n.media.duration),end:n._getHHMMSS(e.cues[t].endTime,n.media.duration),text:e.cues[t].text}});void 0===n.__tracks&&(n.__tracks=[]),n.push("__tracks",{value:t,language:e.language,text:void 0!==e.label?e.label:void 0!==e.language?e.language:"Track "+t,cues:a}),n.$.controls.setTracks(n.__tracks),n.$.transcript.setTracks(n.__tracks),n.push("__tracks"),e.oncuechange=function(e){n.$.transcript.setActiveCues(Object.keys(e.currentTarget.activeCues).map(function(t){return e.currentTarget.activeCues[t].id}))}}},1)}_handleCueSeek(e){let t=this;t.standAlone||void 0===t.$.transcript||null===t.$.transcript||(t.__resumePlaying=t.__playing,t.seek(e.detail))}_handleMediaLoaded(e){let t=this.media.aspectRatio;this._setPlayerHeight(t),this.$.playbutton.removeAttribute("disabled"),this.__duration=this.media.duration>0?this.media.duration:0,this.__status=this._getHHMMSS(0,this.media.duration)+"/"+this._getHHMMSS(this.media.duration),this.$.controls.setStatus(this.__status),this._getTrackData(this.$.html5.media)}_handlePrinting(e){this.dispatchEvent(new CustomEvent("printing-transcript",{detail:this})),this.$.transcript.print(this.mediaTitle)}_handleSearchAdded(e){this.search=e.detail}_handleSliderDragging(e){this._toggleSliderSeek(this.$.slider.dragging,this.$.slider.immediateValue)}_handleSliderKeyboard(e){this._toggleSliderSeek(this.$.slider.focused,this.$.slider.value)}_handleTranscriptScrollToggle(e){this.disableScroll=!this.disableScroll}_onControlsChanged(e){let t=this,i=void 0!==e.detail.action?e.detail.action:e.detail.id;"backward"===i?t.rewind(t.__duration/20):"captions"===i?t.toggleCC():"transcript"===i||"transcript-toggle"===i?t.toggleTranscript():"tracks"===e.detail.id?""===e.detail.value?t.toggleCC(!1):(t.toggleCC(!0),t.selectTrack(e.detail.value)):"forward"===i?t.forward(t.__duration/20):"fullscreen"===i?(this.toggleTranscript(this.fullscreen),screenfull.toggle(t.$.outerplayer)):"loop"===i?t.toggleLoop():"mute"===i||"unmute"===i?t.toggleMute():"pause"===i?t.pause():"play"===i?t.play():"restart"===i?(t.seek(0),t.play()):"speed"===i?t.setPlaybackRate(e.detail.value):"volume"===i&&t.setVolume(e.detail.value)}_hidePlayButton(e,t,i){return t&&null===e||!(void 0===i||0===i)}_showCustomCaptions(e,t,i,n){return(e||t)&&i&&n}_toggleSliderSeek(e,t){e?(this.__playing&&(this.__resumePlaying=!0),this.pause()):(this.seek(t),this.__resumePlaying=!1)}_useYoutubeIframe(e,t,i){return t&&(null===e||void 0===i||0===i)}_youTubeRequest(){window.A11yMediaYoutube.requestAvailability();let e=this,t=window.A11yMediaYoutube.instance;if(e.disableInteractive=!0,e.__playerAttached&&e.__playerReady){let i=function(){e.media=t.initYoutubePlayer({width:"100%",height:"100%",videoId:e.youtubeId}),e.$.youtube.appendChild(e.media.a),e.__ytAppended=!0,e._updateCustomTracks();let i=setInterval(()=>{void 0!==e.media.getDuration&&(clearInterval(i),e.__duration=e.media.duration=e.media.getDuration(),e.__status=e._getHHMMSS(0,e.media.duration)+"/"+e._getHHMMSS(e.media.duration),e.$.controls.setStatus(e.__status),e.disableInteractive=!e.__interactive,e._addSourcesAndTracks())},100)},n=function(a){t.apiReady&&(document.removeEventListener("youtube-api-ready",n),e.__ytAppended||i())};t.apiReady?e.__ytAppended||i():document.addEventListener("youtube-api-ready",n)}}_updateCustomTracks(){if(this._hasCustomCaptions(this.isYoutube,this.audioOnly,this.tracks)){let e=this,t=e.tracks[this.$.transcript.selectedTranscript],i=[],n="";if(null!=t&&void 0!==t.cues&&null!==t.cues){for(let a=0;a<t.cues.length;a++)t.cues[a].seek<e.__elapsed&&t.cues[a].seekEnd>e.__elapsed&&(i.push(t.cues[a].order),n=""===n?t.cues[a].text:n);e.$.customcctxt.innerText=n,e.$.transcript.setActiveCues(i)}}}}window.customElements.define(Us.tag,Us);const Ys=St`
<style>
  /*

  Atom One Dark by Daniel Gamage
  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

  base:    #282c34
  mono-1:  #abb2bf
  mono-2:  #818896
  mono-3:  #5c6370
  hue-1:   #56b6c2
  hue-2:   #61aeee
  hue-3:   #c678dd
  hue-4:   #98c379
  hue-5:   #e06c75
  hue-5-2: #be5046
  hue-6:   #d19a66
  hue-6-2: #e6c07b

  */

  .hljs {
    display: block;
    overflow-x: auto;
    color: var(--code-sample-color, #abb2bf);
    background: var(--code-sample-background, #282c34);
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst,
  .hljs-tag {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  .hljs-params {
    color: #e6c07b;
  }
</style>`;!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(e){return e.nodeName.toLowerCase()}function n(e,t){var i=e&&e.exec(t);return i&&0===i.index}function a(e){return b.test(e)}function o(e){var t,i={},n=Array.prototype.slice.call(arguments,1);for(t in e)i[t]=e[t];return n.forEach(function(e){for(t in e)i[t]=e[t]}),i}function r(e){var t=[];return function e(n,a){for(var o=n.firstChild;o;o=o.nextSibling)3===o.nodeType?a+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:a,node:o}),a=e(o,a),i(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:o}));return a}(e,0),t}function s(e,n,a){function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function r(e){h+="<"+i(e)+g.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function s(e){h+="</"+i(e)+">"}function l(e){("start"===e.event?r:s)(e.node)}for(var c=0,h="",d=[];e.length||n.length;){var p=o();if(h+=t(a.substring(c,p[0].offset)),c=p[0].offset,p===e){d.reverse().forEach(s);do{l(p.splice(0,1)[0]),p=o()}while(p===e&&p.length&&p[0].offset===c);d.reverse().forEach(r)}else"start"===p[0].event?d.push(p[0].node):d.pop(),l(p.splice(0,1)[0])}return h+t(a.substr(c))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(t){return o(e,{v:null},t)})),e.cached_variants||e.eW&&[o(e)]||[e]}function c(e){function t(e){return e&&e.source||e}function i(i,n){return new RegExp(t(i),"m"+(e.cI?"i":"")+(n?"g":""))}!function n(a,o){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var r={},s=function(t,i){e.cI&&(i=i.toLowerCase()),i.split(" ").forEach(function(e){var i=e.split("|");r[i[0]]=[t,i[1]?Number(i[1]):1]})};"string"==typeof a.k?s("keyword",a.k):v(a.k).forEach(function(e){s(e,a.k[e])}),a.k=r}a.lR=i(a.l||/\w+/,!0),o&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=i(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=i(a.e)),a.tE=t(a.e)||"",a.eW&&o.tE&&(a.tE+=(a.e?"|":"")+o.tE)),a.i&&(a.iR=i(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return l("self"===e?a:e)})),a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,o);var c=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=c.length?i(c.join("|"),!0):{exec:function(){return null}}}}(e)}function h(e,i,a,o){function r(e,t){var i,a;for(i=0,a=t.c.length;a>i;i++)if(n(t.c[i].bR,e))return t.c[i]}function s(e,t){if(n(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?s(e.parent,t):void 0}function l(e,t){return!a&&n(t.iR,e)}function p(e,t){var i=_.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(i)&&e.k[i]}function u(e,t,i,n){var a='<span class="'+(n?"":x.classPrefix);return(a+=e+'">')+t+(i?"":C)}function m(){k+=null!=w.sL?function(){var e="string"==typeof w.sL;if(e&&!y[w.sL])return t(M);var i=e?h(w.sL,M,!0,z[w.sL]):d(M,w.sL.length?w.sL:void 0);return w.r>0&&(S+=i.r),e&&(z[w.sL]=i.top),u(i.language,i.value,!1,!0)}():function(){var e,i,n,a;if(!w.k)return t(M);for(a="",i=0,w.lR.lastIndex=0,n=w.lR.exec(M);n;)a+=t(M.substring(i,n.index)),(e=p(w,n))?(S+=e[1],a+=u(e[0],t(n[0]))):a+=t(n[0]),i=w.lR.lastIndex,n=w.lR.exec(M);return a+t(M.substr(i))}(),M=""}function g(e){k+=e.cN?u(e.cN,"",!0):"",w=Object.create(e,{parent:{value:w}})}function v(e,t){if(M+=e,null==t)return m(),0;var i=r(t,w);if(i)return i.skip?M+=t:(i.eB&&(M+=t),m(),i.rB||i.eB||(M=t)),g(i),i.rB?0:t.length;var n=s(w,t);if(n){var a=w;a.skip?M+=t:(a.rE||a.eE||(M+=t),m(),a.eE&&(M=t));do{w.cN&&(k+=C),w.skip||(S+=w.r),w=w.parent}while(w!==n.parent);return n.starts&&g(n.starts),a.rE?0:t.length}if(l(t,w))throw new Error('Illegal lexeme "'+t+'" for mode "'+(w.cN||"<unnamed>")+'"');return M+=t,t.length||1}var _=f(e);if(!_)throw new Error('Unknown language: "'+e+'"');c(_);var b,w=o||_,z={},k="";for(b=w;b!==_;b=b.parent)b.cN&&(k=u(b.cN,"",!0)+k);var M="",S=0;try{for(var L,H,E=0;w.t.lastIndex=E,L=w.t.exec(i);)H=v(i.substring(E,L.index),L[0]),E=L.index+H;for(v(i.substr(E)),b=w;b.parent;b=b.parent)b.cN&&(k+=C);return{r:S,value:k,language:e,top:w}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:t(i)};throw e}}function d(e,i){i=i||x.languages||v(y);var n={r:0,value:t(e)},a=n;return i.filter(f).forEach(function(t){var i=h(t,e,!1);i.language=t,i.r>a.r&&(a=i),i.r>n.r&&(a=n,n=i)}),a.language&&(n.second_best=a),n}function p(e){return x.tabReplace||x.useBR?e.replace(z,function(e,t){return x.useBR&&"\n"===e?"<br>":x.tabReplace?t.replace(/\t/g,x.tabReplace):""}):e}function u(e){var t,i,n,o,l,c=function(e){var t,i,n,o,r=e.className+" ";if(r+=e.parentNode?e.parentNode.className:"",i=w.exec(r))return f(i[1])?i[1]:"no-highlight";for(t=0,n=(r=r.split(/\s+/)).length;n>t;t++)if(a(o=r[t])||f(o))return o}(e);a(c)||(x.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,l=t.textContent,n=c?h(c,l,!0):d(l),(i=r(t)).length&&((o=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=n.value,n.value=s(i,r(o),l)),n.value=p(n.value),e.innerHTML=n.value,e.className=function(e,t,i){var n=t?_[t]:i,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}(e.className,c,n.language),e.result={language:n.language,re:n.r},n.second_best&&(e.second_best={language:n.second_best.language,re:n.second_best.r}))}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");g.forEach.call(e,u)}}function f(e){return e=(e||"").toLowerCase(),y[e]||y[_[e]]}var g=[],v=Object.keys,y={},_={},b=/^(no-?highlight|plain|text)$/i,w=/\blang(?:uage)?-([\w-]+)\b/i,z=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",x={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=h,e.highlightAuto=d,e.fixMarkup=p,e.highlightBlock=u,e.configure=function(e){x=o(x,e)},e.initHighlighting=m,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)},e.registerLanguage=function(t,i){var n=y[t]=i(e);n.aliases&&n.aliases.forEach(function(e){_[e]=t})},e.listLanguages=function(){return v(y)},e.getLanguage=f,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(t,i,n){var a=e.inherit({cN:"comment",b:t,e:i,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("css",function(e){var t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},i={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,i,{cN:"string",b:/'/,e:/'/},t]}}),hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),hljs.registerLanguage("xml",function(e){var t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},i=[e.QSM,e.CNM],n={e:",",eW:!0,eE:!0,c:i,k:t},a={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(n,{b:/:/})],i:"\\S"},o={b:"\\[",e:"\\]",c:[e.inherit(n)],i:"\\S"};return i.splice(i.length,0,a,o),{c:i,k:t,i:"\\S"}}),hljs.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",i={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:i,c:[]},o={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,o,n,e.RM];var r=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:i,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,o,e.CLCM,e.CBCM,n,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:i,c:r}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:r}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}}),hljs.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},i="[A-Za-z$_][0-9A-Za-z$_]*",n={cN:"subst",b:/#\{/,e:/}/,k:t},a=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,n]},{b:/"/,e:/"/,c:[e.BE,n]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[n,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+i},{sL:"javascript",eB:!0,eE:!0,v:[{b:"```",e:"```"},{b:"`",e:"`"}]}];n.c=a;var o=e.inherit(e.TM,{b:i}),r="(\\(.*\\))?\\s*\\B[-=]>",s={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(a)}]};return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:a.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+i+"\\s*=\\s*"+r,e:"[-=]>",rB:!0,c:[o,s]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:r,e:"[-=]>",rB:!0,c:[s]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[o]},o]},{b:i+":",e:":",rB:!0,rE:!0,r:0}])}});class Xs extends Lt{static get template(){return St`
    ${this.constructor.theme||Ys}
    <style include="code-sample-theme" id="baseStyle">
    :host {
      display: block;
    }

    :host([hidden]),
    [hidden] {
      display: none;
    }

    pre {
      margin: 0;
      @apply --code-sample-pre;
    }

    pre, code {
      font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);
      font-size: var(--code-sample-font-size, 0.875rem);
    }

    .hljs {
      padding: 0 1.25rem;
      line-height: var(--code-sample-line-height, 1.3);
      @apply --code-sample-hljs;
    }

    .demo:not(:empty) {
      padding: var(--code-sample-demo-padding, 0 0 1.25rem);
      @apply --code-sample-demo-not-empty;
    }

    .demo {
      @apply --code-sample-demo;
    }

    #code-container {
      position: relative;
      @apply --code-sample-code-container;
    }

    #code-container:hover {
      @apply --code-sample-code-container-hover;
    }

    #code-container:hover > button {
      @apply --code-sample-code-container-hover-button;
    }

    button {
      background: var(--code-sample-copy-button-bg-color, #e0e0e0);
      border: none;
      cursor: pointer;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      text-transform: uppercase;
      @apply --code-sample-copy-clipboard-button;
    }
    </style>

    <div id="demo" class="demo"></div>
    <slot id="content"></slot>

    <div id="code-container">
      <button
        type="button"
        hidden="[[!copyClipboardButton]]"
        id="copyButton"
        title="Copy to clipboard"
        on-click="_copyToClipboard">Copy</button>
      <pre id="code"></pre>
    </div>
    `}static get properties(){return{copyClipboardButton:{type:Boolean,value:!1},theme:{type:String,observer:"_themeChanged"},render:{type:Boolean,value:!1},type:{type:String}}}_themeChanged(e){if(e&&this._themeCanBeChanged()){const t=this.shadowRoot.querySelector("style:not(#baseStyle)");this.shadowRoot.replaceChild(document.importNode(e.content,!0),t)}}_themeCanBeChanged(){if(window.ShadyCSS)console.error("<code-sample>:","Theme changing is not supported in Shady DOM.");else{if("TEMPLATE"===this.theme.tagName)return!0;console.error("<code-sample>:","theme must be a template")}}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.querySelector("template")?this._observer=new Fa(this.$.content,()=>this._updateContent()):this.childNodes.length&&console.error("<code-sample>:","content must be provided inside a <template> tag")})}disconnectedCallback(){this._observer&&(this._observer.disconnect(),this._observer=null)}_updateContent(){this._code&&this._code.parentNode.removeChild(this._code),this._demo&&(this.$.demo.innerHTML="");const e=this._getCodeTemplate();this.render&&(this._demo=this.$.demo.appendChild(document.importNode(e.content,!0))),this._highlight(e.innerHTML)}_getCodeTemplate(){const e=Fa.getFlattenedNodes(this.$.content);return[].filter.call(e,e=>e.nodeType===Node.ELEMENT_NODE)[0]}_highlight(e){this._code=document.createElement("code"),this.type&&this._code.classList.add(this.type),this._code.innerHTML=this._entitize(this._cleanIndentation(e)),this.$.code.appendChild(this._code),hljs.highlightBlock(this._code)}_cleanIndentation(e){const t=e.match(/\s*\n[\t\s]*/);return e.replace(new RegExp(t,"g"),"\n")}_entitize(e){return String(e).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}_copyToClipboard(e){const t=e.target,i=this._textAreaWithClonedContent();i.select();try{document.execCommand("copy",!1),t.textContent="Done"}catch(e){console.error(e),t.textContent="Error"}i.remove(),setTimeout(()=>{t.textContent="Copy"},1e3)}_textAreaWithClonedContent(){const e=document.createElement("textarea");return document.body.appendChild(e),e.value=this._cleanIndentation(this._getCodeTemplate().innerHTML),e}}customElements.define("code-sample",Xs);
