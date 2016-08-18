(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":2,"./ac-browser/IE":3}],2:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.filter");
b("@marcom/ac-polyfills/Array/prototype.some");var d=b("./data");function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;
if(!h||!i){return}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
}});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
},__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
}}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
},__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
})[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
}}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
};c.exports=f},{"./data":4,"@marcom/ac-polyfills/Array/prototype.filter":395,"@marcom/ac-polyfills/Array/prototype.some":403}],3:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],4:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],5:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");b("@marcom/ac-polyfills/Element/prototype.classList");
var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":7,"@marcom/ac-polyfills/Array/prototype.slice":402,"@marcom/ac-polyfills/Element/prototype.classList":410}],6:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":7,"./className/contains":8,"./className/remove":10}],7:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":8}],8:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":9}],9:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],10:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":8,"./getTokenRegExp":9}],11:[function(b,d,a){b("@marcom/ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":8,"@marcom/ac-polyfills/Element/prototype.classList":410}],12:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":5,"./contains":11,"./remove":13,"./toggle":14}],13:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Element/prototype.classList");var b=d("./className/remove");
f.exports=function a(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":10,"@marcom/ac-polyfills/Array/prototype.slice":402,"@marcom/ac-polyfills/Element/prototype.classList":410}],14:[function(c,d,b){c("@marcom/ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":6,"@marcom/ac-polyfills/Element/prototype.classList":410}],15:[function(b,c,a){c.exports={path:b("./ac-path/path")}
},{"./ac-path/path":16}],16:[function(b,c,a){function d(f){return d.parse(f)}d.basename=function(g,f){d._assertStr(g);
var i;var h=g.match(/[^/]*$/)[0];if(f){i=h.match(new RegExp("(.*)"+f+"$"));if(i){h=i[1]
}}return h};d.dirname=function(g){d._assertStr(g);var f=g.match(/^(.*)\b\/|.*/);
return f[1]||g};d.extname=function(f){d._assertStr(f);var g=f.match(/\.[^.]*$/);
return g?g[0]:""};d.filename=function(f){d._assertStr(f);return d.basename(f,d.extname(f))
};d.format=function(g,h){d._assertObj(g);var f=(g.dirname)?g.dirname+"/":"";if(g.basename){f+=g.basename
}else{if(g.filename){f+=g.filename;if(g.extname){f+=g.extname}}}if(h){if(typeof h==="string"){f+="?"+h
}else{if(Object.prototype.toString.call(h)===Object.prototype.toString.call([])){f+="?"+h.join("&")
}}}return f};d.isAbsolute=function(f){d._assertStr(f);return(!!f.match(/(^http(s?))/))
};d.isRootRelative=function(f){d._assertStr(f);return !!f.match(/^\/(?!\/)/)};d.parse=function(f){d._assertStr(f);
return{dirname:d.dirname(f),basename:d.basename(f),filename:d.filename(f),extname:d.extname(f)}
};d._assertStr=function(f){d._assertType(f,"string")};d._assertObj=function(f){d._assertType(f,"object")
};d._assertType=function(h,f){var g=typeof h;if(g==="undefined"||g!==f){throw new TypeError("path param must be of type "+f)
}};c.exports=d},{}],17:[function(b,c,a){c.exports={cname:b("./ac-cname/cname")}
},{"./ac-cname/cname":18}],18:[function(c,d,a){var f=c("ac-path").path;function b(g){return b.addPrefix(g)
}b._prefix=(function(){var g="http://images.apple.com/global/elements/blank.gif";return g.replace(/global\/.*/,"")
}());b.addPrefix=function(g){if(f.isAbsolute(g)){return g}b._assertRootRelative(g);
g=b._prefix+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/");return g};b.formatUrl=function(j,g,l,k){var i=f.format({dirname:j,filename:g,extname:l},k);
if(f.isAbsolute(i)){return i}b._assertRootRelative(j);var h=b.addPrefix(i);return h
};b._assertRootRelative=function(g){if(!f.isRootRelative(g)){throw new URIError("Only root-relative paths are currently supported")
}};d.exports=b},{"ac-path":15}],19:[function(b,c,a){c.exports.EventEmitter=b("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":20}],20:[function(d,c,f){var h="EventEmitter:propagation";
var k=function(l){if(l){this.context=l}};var g=k.prototype;var i=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var a=function(m,o){var p=m[0];var q=m[1];var n=m[2];if((typeof p!=="string"&&typeof p!=="object")||p===null||Array.isArray(p)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof p==="string")&&!q){throw new Error("Expecting a callback function to be provided.")
}if(q&&(typeof q!=="function")){if(typeof p==="object"&&typeof q==="object"){n=q
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof p==="object"){for(var l in p){o.call(this,l,p[l],n)
}}if(typeof p==="string"){p=p.split(" ");p.forEach(function(r){o.call(this,r,q,n)
},this)}};var j=function(o,p){var l;var m;var n;l=i.call(this)[o];if(!l||l.length===0){return
}l=l.slice();this._stoppedImmediatePropagation=false;for(m=0,n=l.length;m<n;m++){if(this._stoppedImmediatePropagation||p(l[m],m)){break
}}};var b=function(m,n,o){var l=-1;j.call(this,n,function(q,p){if(q.callback===o){l=p;
return true}});if(l===-1){return}m[n].splice(l,1)};g.on=function(){var l=i.call(this);
a.call(this,arguments,function(n,o,m){l[n]=l[n]||(l[n]=[]);l[n].push({callback:o,context:m})
});return this};g.once=function(){a.call(this,arguments,function(m,o,l){var n=function(p){o.call(l||this,p);
this.off(m,n)};this.on(m,n,this)});return this};g.off=function(n,p){var m=i.call(this);
if(arguments.length===0){this._events={}}else{if(!n||(typeof n!=="string"&&typeof n!=="object")||Array.isArray(n)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof n==="object"){for(var o in n){b.call(this,m,o,n[o])}}if(typeof n==="string"){var l=n.split(" ");
if(l.length===1){if(p){b.call(this,m,n,p)}else{m[n]=[]}}else{l.forEach(function(q){m[q]=[]
})}}return this};g.trigger=function(m,n,l){if(!m){throw new Error("trigger method requires an event name")
}if(typeof m!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(l&&typeof l!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}m=m.split(" ");m.forEach(function(o){j.call(this,o,function(p){p.callback.call(p.context||this.context||this,n)
}.bind(this));if(!l){j.call(this,h,function(q){var p=o;if(q.prefix){p=q.prefix+p
}q.emitter.trigger(p,n)})}},this);return this};g.propagateTo=function(m,n){var l=i.call(this);
if(!l[h]){this._events[h]=[]}l[h].push({emitter:m,prefix:n})};g.stopPropagatingTo=function(o){var m=i.call(this);
if(!o){m[h]=[];return}var p=m[h];var n=p.length;var l;for(l=0;l<n;l++){if(p[l].emitter===o){p.splice(l,1);
break}}};g.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};g.has=function(l,s,p){var o=i.call(this);var m=o[l];if(arguments.length===0){return Object.keys(o)
}if(!m){return false}if(!s){return(m.length>0)?true:false}for(var n=0,q=m.length;
n<q;n++){var r=m[n];if(p&&s&&r.context===p&&r.callback===s){return true}else{if(s&&!p&&r.callback===s){return true
}}}return false};c.exports=k},{}],21:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":22}],22:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g={addEventListener:c("@marcom/ac-dom-events/addEventListener"),removeEventListener:c("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:c("@marcom/ac-dom-events/dispatchEvent")},a={querySelectorAll:c("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:c("@marcom/ac-dom-traversal/matchesSelector")};
var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){if(!this._eventEmitter){return this
}m=this._parseEventNames(m);m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;
for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);
return this};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);
return this};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null}}};f._parseEventNames=function(l){if(!l){return[l]
}return l.split(" ")};f._onListenerEvent=function(n,m){var l=new j(m,this);this._eventEmitter.trigger(n,l,false)
};f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
};f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
};f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
}var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
}}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
}if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
}}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
};f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
}}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
}l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
}if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
}.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
}}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
}if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
}.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
}if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
}};b.exports=h},{"./DOMEmitterEvent":23,"@marcom/ac-dom-events/addEventListener":24,"@marcom/ac-dom-events/dispatchEvent":25,"@marcom/ac-dom-events/removeEventListener":33,"@marcom/ac-dom-traversal/matchesSelector":88,"@marcom/ac-dom-traversal/querySelectorAll":94,"ac-event-emitter":19}],23:[function(b,c,a){var f={preventDefault:b("@marcom/ac-dom-events/preventDefault"),stopPropagation:b("@marcom/ac-dom-events/stopPropagation"),target:b("@marcom/ac-dom-events/target")};
var d;var g=function(i,h){this._domEmitter=h;this.originalEvent=i||{};this._originalTarget=f.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"@marcom/ac-dom-events/preventDefault":32,"@marcom/ac-dom-events/stopPropagation":36,"@marcom/ac-dom-events/target":37}],24:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":34,"./utils/addEventListener":38}],25:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":34,"./utils/dispatchEvent":39}],26:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":24,"./dispatchEvent":25,"./preventDefault":32,"./removeEventListener":33,"./stop":35,"./stopPropagation":36,"./target":37}],27:[function(d,b,f){var g=d("./utils/eventTypeAvailable");
var j=d("./shared/camelCasedEventTypes");var c=d("./shared/windowFallbackEventTypes");
var h=d("./shared/prefixHelper");var a={};b.exports=function i(m,l){var n;var o;
var k;l=l||"div";m=m.toLowerCase();if(!(l in a)){a[l]={}}o=a[l];if(m in o){return o[m]
}if(g(m,l)){return o[m]=m}if(m in j){for(k=0;k<j[m].length;k++){n=j[m][k];if(g(n.toLowerCase(),l)){return o[m]=n
}}}for(k=0;k<h.evt.length;k++){n=h.evt[k]+m;if(g(n,l)){h.reduce(k);return o[m]=n
}}if(l!=="window"&&c.indexOf(m)){return o[m]=i(m,"window")}return o[m]=false}},{"./shared/camelCasedEventTypes":28,"./shared/prefixHelper":29,"./shared/windowFallbackEventTypes":30,"./utils/eventTypeAvailable":31}],28:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],29:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],30:[function(b,c,a){c.exports=["transitionend","animationstart","animationend","animationiteration",]
},{}],31:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],32:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],33:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":34,"./utils/removeEventListener":40}],34:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"@marcom/ac-prefixer/getEventType":27}],35:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":32,"./stopPropagation":36}],36:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],37:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],38:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],39:[function(b,c,a){b("@marcom/ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"@marcom/ac-polyfills/CustomEvent":404}],40:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],41:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":52}],42:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":52}],43:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,p){var l;var o;var m;var k;var n;if(p){l=d(j);o=b();m=a();
return{top:l.top+m,right:l.right+o,bottom:l.bottom+m,left:l.left+o}}k=c(j,p);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};
while(j=j.offsetParent){l.top+=j.offsetTop;l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":42,"./getScrollX":47,"./getScrollY":48,"./utils/getBoundingClientRect":52}],44:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":42,"./getPixelsInViewport":45}],45:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":49}],46:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":42,"./utils/getBoundingClientRect":52}],47:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],48:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],49:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":43,"./getScrollX":47,"./getScrollY":48,"./utils/getBoundingClientRect":52}],50:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":41,"./getDimensions":42,"./getPagePosition":43,"./getPercentInViewport":44,"./getPixelsInViewport":45,"./getPosition":46,"./getScrollX":47,"./getScrollY":48,"./getViewportPosition":49,"./isInViewport":51}],51:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":44,"./getPixelsInViewport":45}],52:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],53:[function(c,d,b){var f=c("@marcom/ac-prefixer/getStyleProperty");var g=c("@marcom/ac-prefixer/stripPrefixes");
d.exports=function a(){var k=Array.prototype.slice.call(arguments);var p=k.shift(k);
var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;if(typeof k[0]!=="string"){k=k[0]
}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);n=m[h];if(!n||n==="auto"){n=null
}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"@marcom/ac-prefixer/getStyleProperty":57,"@marcom/ac-prefixer/stripPrefixes":63}],54:[function(b,c,a){c.exports={getStyle:b("./getStyle"),setStyle:b("./setStyle")}
},{"./getStyle":53,"./setStyle":66}],55:[function(c,d,b){d.exports=function a(j){var h;
var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
}return j}},{}],56:[function(d,f,c){var b=d("./shared/stylePropertyCache");var h=d("./getStyleProperty");
var g=d("./getStyleValue");f.exports=function a(k,j){var i;k=h(k);if(!k){return false
}i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false}i+=":"+j+";"
}return i}},{"./getStyleProperty":57,"./getStyleValue":58,"./shared/stylePropertyCache":61}],57:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":59,"./shared/prefixHelper":60,"./shared/stylePropertyCache":61,"./utils/toCSS":64,"./utils/toDOM":65}],58:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":57,"./shared/prefixHelper":60,"./shared/stylePropertyCache":61,"./shared/styleValueAvailable":62}],59:[function(c,d,b){var f;
d.exports=function a(){if(!f){f=document.createElement("_")}else{f.style.cssText="";
f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null}},{}],60:[function(b,c,a){arguments[4][29][0].apply(a,arguments)
},{dup:29}],61:[function(b,c,a){c.exports={}},{}],62:[function(c,b,d){var a=c("./stylePropertyCache");
var f=c("./getStyleTestElement");var i=false;var k;var j;var g=function(){var l;
if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);j=false;l=f();try{l.style.width="invalid"
}catch(m){j=true}}};b.exports=function h(o,n){var m;var l;g();if(k){o=a[o].css;
return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n}catch(p){return false
}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":59,"./stylePropertyCache":61}],63:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
}},{}],64:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],65:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],66:[function(d,f,c){var a=d("@marcom/ac-prefixer/getStyleCSS");
var g=d("@marcom/ac-prefixer/getStyleProperty");var b=d("./internal/normalizeValue");
f.exports=function h(o,l){var k="";var j;var n;var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":55,"@marcom/ac-prefixer/getStyleCSS":56,"@marcom/ac-prefixer/getStyleProperty":57}],67:[function(b,c,a){c.exports=8
},{}],68:[function(b,c,a){c.exports=11},{}],69:[function(b,c,a){c.exports=9},{}],70:[function(b,c,a){c.exports=1
},{}],71:[function(b,c,a){c.exports=3},{}],72:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");
var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);
return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":70,"./internal/isNodeType":73,"@marcom/ac-polyfills/Array/prototype.filter":395,"@marcom/ac-polyfills/Array/prototype.slice":402}],73:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":77}],74:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":67,"../DOCUMENT_FRAGMENT_NODE":68,"../ELEMENT_NODE":70,"../TEXT_NODE":71,"./isNodeType":73}],75:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":68,"./internal/isNodeType":73}],76:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":70,"./internal/isNodeType":73}],77:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],78:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":74}],79:[function(b,c,a){c.exports={ancestor:b("./ancestor"),ancestors:b("./ancestors"),children:b("./children"),filterBySelector:b("./filterBySelector"),firstChild:b("./firstChild"),lastChild:b("./lastChild"),matchesSelector:b("./matchesSelector"),nextSibling:b("./nextSibling"),nextSiblings:b("./nextSiblings"),previousSibling:b("./previousSibling"),previousSiblings:b("./previousSiblings"),querySelector:b("./querySelector"),querySelectorAll:b("./querySelectorAll"),siblings:b("./siblings")}
},{"./ancestor":80,"./ancestors":81,"./children":82,"./filterBySelector":83,"./firstChild":84,"./lastChild":87,"./matchesSelector":88,"./nextSibling":89,"./nextSiblings":90,"./previousSibling":91,"./previousSiblings":92,"./querySelector":93,"./querySelectorAll":94,"./siblings":98}],80:[function(c,f,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");f.exports=function d(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&g(k)&&(!j||a(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&g(k)){if(!j||a(k,j)){return k
}if(k===document.body){break}}}return null}},{"./internal/validate":86,"./matchesSelector":88,"@marcom/ac-dom-nodes/isElement":76}],81:[function(c,d,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(l)&&(!j||a(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&g(l)){if(!j||a(l,j)){k.push(l)}if(l===document.body){break
}}}return k}},{"./internal/validate":86,"./matchesSelector":88,"@marcom/ac-dom-nodes/isElement":76}],82:[function(d,g,c){var b=d("@marcom/ac-dom-nodes/filterByNodeType");
var a=d("./filterBySelector");var h=d("./internal/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=b(j);if(i){j=a(j,i)}return j}},{"./filterBySelector":83,"./internal/validate":86,"@marcom/ac-dom-nodes/filterByNodeType":72}],83:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Array/prototype.filter");var b=d("./matchesSelector");var g=d("./internal/validate");
f.exports=function a(i,h){g.selector(h,true,"filterBySelector");i=Array.prototype.slice.call(i);
return i.filter(function(j){return b(j,h)})}},{"./internal/validate":86,"./matchesSelector":88,"@marcom/ac-polyfills/Array/prototype.filter":395,"@marcom/ac-polyfills/Array/prototype.slice":402}],84:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":82,"./internal/validate":86}],85:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],86:[function(g,c,i){g("@marcom/ac-polyfills/Array/prototype.indexOf");
var o=g("@marcom/ac-dom-nodes/isNode");var b=g("@marcom/ac-dom-nodes/COMMENT_NODE");
var k=g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var j=g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var h=g("@marcom/ac-dom-nodes/ELEMENT_NODE");var f=g("@marcom/ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":67,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":68,"@marcom/ac-dom-nodes/DOCUMENT_NODE":69,"@marcom/ac-dom-nodes/ELEMENT_NODE":70,"@marcom/ac-dom-nodes/TEXT_NODE":71,"@marcom/ac-dom-nodes/isNode":77,"@marcom/ac-polyfills/Array/prototype.indexOf":397}],87:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");
g.selector(h,false,"lastChild");if(j.lastElementChild&&!h){return j.lastElementChild
}i=c(j,h);if(i.length){return i[i.length-1]}return null}},{"./children":82,"./internal/validate":86}],88:[function(d,f,c){var g=d("@marcom/ac-dom-nodes/isElement");
var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":85,"./internal/validate":86,"./shims/matchesSelector":95,"@marcom/ac-dom-nodes/isElement":76}],89:[function(c,d,b){var f=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(f(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":86,"./matchesSelector":88,"@marcom/ac-dom-nodes/isElement":76}],90:[function(d,f,b){var g=d("@marcom/ac-dom-nodes/isElement");
var a=d("./matchesSelector");var h=d("./internal/validate");f.exports=function c(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(g(k)){if(!i||a(k,i)){j.push(k)
}}}return j}},{"./internal/validate":86,"./matchesSelector":88,"@marcom/ac-dom-nodes/isElement":76}],91:[function(c,d,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(g(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":86,"./matchesSelector":88,"@marcom/ac-dom-nodes/isElement":76}],92:[function(c,d,b){var f=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(f(k)){if(!i||a(k,i)){j.push(k)
}}}return j.reverse()}},{"./internal/validate":86,"./matchesSelector":88,"@marcom/ac-dom-nodes/isElement":76}],93:[function(c,d,a){var h=c("./internal/validate");
var b=c("./shims/querySelector");var g=("querySelector" in document);d.exports=function f(i,j){j=j||document;
h.parentNode(j,true,"querySelector","context");h.selector(i,true,"querySelector");
if(!g){return b(i,j)}return j.querySelector(i)}},{"./internal/validate":86,"./shims/querySelector":96}],94:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
}},{"./internal/validate":86,"./shims/querySelectorAll":97,"@marcom/ac-polyfills/Array/prototype.slice":402}],95:[function(c,d,b){var f=c("../querySelectorAll");
d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":94}],96:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":97}],97:[function(c,b,f){c("@marcom/ac-polyfills/Array/prototype.indexOf");
var j=c("@marcom/ac-dom-nodes/isElement");var h=c("@marcom/ac-dom-nodes/isDocumentFragment");
var k=c("@marcom/ac-dom-nodes/remove");var d="_ac_qsa_";var i=function(n,l){var m;
if(l===document){return true}m=n;while((m=m.parentNode)&&j(m)){if(m===l){return true
}}return false};var g=function(l){if("recalc" in l){l.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};b.exports=function a(l,n){var p=document.createElement("style");
var q=d+(Math.random()+"").slice(-6);var m=[];var o;n=n||document;document[q]=[];
if(h(n)){n.appendChild(p)}else{document.documentElement.firstChild.appendChild(p)
}p.styleSheet.cssText="*{display:recalc;}"+l+'{ac-qsa:expression(document["'+q+'"] && document["'+q+'"].push(this));}';
g(n);while(document[q].length){o=document[q].shift();o.style.removeAttribute("ac-qsa");
if(m.indexOf(o)===-1&&i(o,n)){m.push(o)}}document[q]=null;k(p);g(n);return m}},{"@marcom/ac-dom-nodes/isDocumentFragment":75,"@marcom/ac-dom-nodes/isElement":76,"@marcom/ac-dom-nodes/remove":78,"@marcom/ac-polyfills/Array/prototype.indexOf":397}],98:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":82,"./internal/validate":86}],99:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":100,"./ac-clock/ThrottledClock":101,"./ac-clock/sharedClockInstance":102}],100:[function(c,d,b){c("@marcom/ac-polyfills/Function/prototype.bind");
c("@marcom/ac-polyfills/requestAnimationFrame");var g;var f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var a=new Date().getTime();function h(){f.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}g=h.prototype=new f(null);
g.start=function(){if(this._active){return}this._tick()};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(l){var m=0;var i=this._getTime();if(this.lastFrameTime===null){this.lastFrameTime=i-a
}else{m=l-this.lastFrameTime}var k=0,j;if(m!==0){k=1000/m}j={time:l,delta:m,fps:k,naturalFps:k,timeNow:i};
this.trigger("update",j);this.trigger("draw",j);this._animationFrame=null;this.lastFrameTime=l;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"@marcom/ac-event-emitter-micro":192,"@marcom/ac-polyfills/Function/prototype.bind":412,"@marcom/ac-polyfills/requestAnimationFrame":428}],101:[function(c,d,b){c("@marcom/ac-polyfills/requestAnimationFrame");
var g;var a=c("./sharedClockInstance"),f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(j<(1000/this._fps)){return}this._clockEvent=i;this._clockEvent.delta=j;this._clockEvent.fps=1000/j;
this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":102,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-polyfills/requestAnimationFrame":428}],102:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":100}],103:[function(b,c,a){c.exports={Clip:b("./ac-clip/Clip")}
},{"./ac-clip/Clip":104}],104:[function(c,b,d){c("@marcom/ac-polyfills/Array/isArray");
var g=c("@marcom/ac-object/create");var l=c("@marcom/ac-easing").createPredefined;
var a=c("@marcom/ac-clock");var j=c("@marcom/ac-easing").Ease;var k=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i="ease";function h(o,n,q,m){m=m||{};this._options=m;this._isYoyo=m.yoyo;this._direction=1;
this._timeScale=1;this._loop=m.loop||0;this._loopCount=0;this._target=o;this.duration(n);
this._delay=(m.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=m.clock||a;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=q||{};this._propsFrom=m.propsFrom||{};this._onStart=m.onStart||null;
this._onUpdate=m.onUpdate||null;this._onDraw=m.onDraw||null;this._onComplete=m.onComplete||null;
var p=m.ease||i;this._ease=(typeof p==="function")?new j(p):l(p);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
h._add(this);k.call(this)}var f=h.prototype=g(k.prototype);h.COMPLETE="complete";
h.PAUSE="pause";h.PLAY="play";f.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};f.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(h.PAUSE,this)}return this
};f.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;h._remove(this);k.prototype.destroy.call(this);
return this};f.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};f.playing=function(){return this._playing
};f.target=function(){return this._target};f.duration=function(m){if(m!==undefined){this._duration=m;
this._durationMs=(m*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};f.timeScale=function(m){if(m!==undefined){this._timeScale=m;
this.duration(this._duration)}return this._timeScale};f.currentTime=function(m){if(m!==undefined){return this.progress(m/this._duration)*this._duration
}return(this.progress()*this._duration)};f.progress=function(m){if(m!==undefined){this._progress=Math.min(1,Math.max(0,m));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&m===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};f._resetLoop=function(n,m){var o;
for(o in m){if(m.hasOwnProperty(o)){if(m[o]!==null){if(typeof m[o]==="object"){this._resetLoop(n[o],m[o])
}else{n[o]=m[o]}}}}};f._cloneObjects=function(){var o={};var n={};var m={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,o,n,m);
return{target:o,propsTo:n,propsFrom:m}};f._cloneObjectsLoop=function(p,t,s,r,n,m){var o;
var q;for(q in s){if(s.hasOwnProperty(q)&&t[q]===undefined&&p[q]!==undefined){r[q]=p[q];
n[q]=p[q];m[q]=s[q]}}for(q in t){if(p.hasOwnProperty(q)){o=typeof p[q];if(p[q]!==null&&o==="object"){if(Array.isArray(p[q])){r[q]=[];
n[q]=[];m[q]=[]}else{r[q]={};n[q]={};m[q]={}}this._cloneObjectsLoop(p[q],t[q]||{},s[q]||{},r[q],n[q],m[q])
}else{if(t[q]!==null&&o==="number"){r[q]=p[q];n[q]=t[q];if(s&&s[q]!==undefined){m[q]=s[q]
}}}}}};f._prepareProperties=function(){if(!this._isPrepared){var m=this._cloneObjects();
this._storeTarget=m.target;this._propsTo=m.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=m.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};f._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};f._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
f._setDiffLoop=function(r,q,o,n){var m;var p;for(p in r){if(r.hasOwnProperty(p)){m=typeof r[p];
if(r[p]!==null&&m==="object"){q[p]=q[p]||{};n[p]=n[p]||{};this._setDiffLoop(r[p],q[p],o[p],n[p])
}else{if(m==="number"&&o[p]!==undefined){if(q[p]!==undefined){o[p]=q[p]}else{q[p]=o[p]
}n[p]=r[p]-o[p]}else{r[p]=null;q[p]=null}}}}};f._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(h.PLAY,this)};f._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};f._updateProps=function(){var m;
if(this._direction===1){m=this._ease.getValue(this._progress)}else{m=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,m)
};f._updatePropsLoop=function(r,q,o,n,m){var p;for(p in r){if(r.hasOwnProperty(p)&&r[p]!==null){if(typeof r[p]!=="number"){this._updatePropsLoop(r[p],q[p],o[p],n[p],m)
}else{o[p]=q[p]+(n[p]*m)}}}};f._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};f._completePropsLoop=function(o,m){var n;for(n in o){if(o.hasOwnProperty(n)&&o[n]!==null){if(typeof o[n]!=="number"){this._completePropsLoop(o[n],m[n])
}else{m[n]=o[n]}}}};f._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(h.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};f._update=function(m){if(this._running){this._progress=(m.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
f._draw=function(m){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};h._instantiate=function(){this._clips=[];
return this};h._add=function(m){this._clips.push(m)};h._remove=function(n){var m=this._clips.indexOf(n);
if(m>-1){this._clips.splice(m,1)}};h.getAll=function(o){if(o!==undefined){var m=[];
var n=this._clips.length;while(n--){if(this._clips[n].target()===o){m.push(this._clips[n])
}}return m}return Array.prototype.slice.call(this._clips)};h.destroyAll=function(o){var m=this.getAll(o);
if(this._clips.length===m.length){this._clips=[]}var n=m.length;while(n--){m[n].destroy()
}return m};h.to=function(o,n,p,m){m=m||{};if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new h(o,n,p,m).play()};h.from=function(p,o,m,n){n=n||{};n.propsFrom=m;if(n.destroyOnComplete===undefined){n.destroyOnComplete=true
}return new h(p,o,n.propsTo,n).play()};b.exports=h._instantiate()},{"@marcom/ac-clock":99,"@marcom/ac-easing":125,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object/create":371,"@marcom/ac-polyfills/Array/isArray":393}],105:[function(b,c,a){var d=b("./ac-color/Color");
d.decimalToHex=b("./ac-color/static/decimalToHex");d.hexToDecimal=b("./ac-color/static/hexToDecimal");
d.hexToRgb=b("./ac-color/static/hexToRgb");d.isColor=b("./ac-color/static/isColor");
d.isHex=b("./ac-color/static/isHex");d.isRgb=b("./ac-color/static/isRgb");d.isRgba=b("./ac-color/static/isRgba");
d.mixColors=b("./ac-color/static/mixColors");d.rgbaToArray=b("./ac-color/static/rgbaToArray");
d.rgbToArray=b("./ac-color/static/rgbToArray");d.rgbToDecimal=b("./ac-color/static/rgbToDecimal");
d.rgbToHex=b("./ac-color/static/rgbToHex");d.rgbToHsl=b("./ac-color/static/rgbToHsl");
d.rgbToHsv=b("./ac-color/static/rgbToHsv");d.rgbaToObject=b("./ac-color/static/rgbaToObject");
d.rgbToObject=b("./ac-color/static/rgbToObject");d.shortToLongHex=b("./ac-color/static/shortToLongHex");
c.exports={Color:d}},{"./ac-color/Color":106,"./ac-color/static/decimalToHex":108,"./ac-color/static/hexToDecimal":109,"./ac-color/static/hexToRgb":110,"./ac-color/static/isColor":111,"./ac-color/static/isHex":112,"./ac-color/static/isRgb":113,"./ac-color/static/isRgba":114,"./ac-color/static/mixColors":115,"./ac-color/static/rgbToArray":116,"./ac-color/static/rgbToDecimal":117,"./ac-color/static/rgbToHex":118,"./ac-color/static/rgbToHsl":119,"./ac-color/static/rgbToHsv":120,"./ac-color/static/rgbToObject":121,"./ac-color/static/rgbaToArray":122,"./ac-color/static/rgbaToObject":123,"./ac-color/static/shortToLongHex":124}],106:[function(d,a,q){var h=d("./helpers/cssColorNames");
var m=d("./static/hexToRgb");var l=d("./static/isColor");var f=d("./static/isHex");
var b=d("./static/isRgba");var p=d("./static/mixColors");var k=d("./static/rgbaToArray");
var n=d("./static/rgbToArray");var s=d("./static/rgbToDecimal");var i=d("./static/rgbToHex");
var c=d("./static/rgbaToObject");var j=d("./static/rgbToObject");var o=d("./static/shortToLongHex");
function r(t){if(!l(t)&&!h.nameToRgbObject[t]){throw new Error(t+" is not a supported color.")
}this._setColor(t)}var g=r.prototype;g._setColor=function(t){this._color={};if(f(t)){this._color.hex=o(t);
this._color.rgb={color:m(t)}}else{if(b(t)){this._color.rgba={color:t};var v=this.rgbaObject();
this._color.rgb={color:"rgb("+v.r+", "+v.g+", "+v.b+")"}}else{if(h.nameToRgbObject[t]){var u=h.nameToRgbObject[t];
this._color.rgb={object:u,color:"rgb("+u.r+", "+u.g+", "+u.b+")"}}else{this._color.rgb={color:t}
}}}};g.rgb=function(){return this._color.rgb.color};g.rgba=function(){if(this._color.rgba===undefined){var t=this.rgbObject();
this._color.rgba={color:"rgba("+t.r+", "+t.g+", "+t.b+", 1)"}}return this._color.rgba.color
};g.hex=function(){if(this._color.hex===undefined){this._color.hex=i.apply(this,this.rgbArray())
}return this._color.hex};g.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=s(this.rgb())
}return this._color.decimal};g.cssName=function(){return h.rgbToName[this.rgb()]||null
};g.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=n(this.rgb())
}return this._color.rgb.array};g.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=k(this.rgba())}return this._color.rgba.array
};g.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=j(this.rgb())
}return this._color.rgb.object};g.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=c(this.rgba())
}return this._color.rgba.object};g.getRed=function(){return this.rgbObject().r};
g.getGreen=function(){return this.rgbObject().g};g.getBlue=function(){return this.rgbObject().b
};g.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};g.setRed=function(t){if(t!==this.getRed()){this._setColor("rgba("+t+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};g.setGreen=function(t){if(t!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+t+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};g.setBlue=function(t){if(t!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+t+", "+this.getAlpha()+")")
}return this.rgbObject().b};g.setAlpha=function(t){if(t!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+t+")")
}return this.rgbaObject().a};g.mix=function(t,u){var v=j(p(this.rgb(),t,u));this._setColor("rgba("+v.r+", "+v.g+", "+v.b+", "+this.getAlpha()+")");
return this.rgb()};g.clone=function(){return new r(this.rgb())};a.exports=r},{"./helpers/cssColorNames":107,"./static/hexToRgb":110,"./static/isColor":111,"./static/isHex":112,"./static/isRgba":114,"./static/mixColors":115,"./static/rgbToArray":116,"./static/rgbToDecimal":117,"./static/rgbToHex":118,"./static/rgbToObject":121,"./static/rgbaToArray":122,"./static/rgbaToObject":123,"./static/shortToLongHex":124}],107:[function(b,c,a){var d={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var f={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
c.exports={rgbToName:d,nameToRgbObject:f}},{}],108:[function(c,d,b){d.exports=function a(f){return"#"+(f).toString(16)
}},{}],109:[function(c,d,a){d.exports=function b(f){return parseInt(f.substr(1),16)
}},{}],110:[function(d,f,c){var a=d("./shortToLongHex");f.exports=function b(h){h=a(h);
var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return g?"rgb("+parseInt(g[1],16)+", "+parseInt(g[2],16)+", "+parseInt(g[3],16)+")":null
}},{"./shortToLongHex":124}],111:[function(c,f,b){var h=c("./isRgb");var g=c("./isRgba");
var a=c("./isHex");f.exports=function d(i){return a(i)||h(i)||g(i)}},{"./isHex":112,"./isRgb":113,"./isRgba":114}],112:[function(c,d,b){d.exports=function a(g){var f=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return f.test(g)}},{}],113:[function(b,c,a){c.exports=function d(g){var f=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return f.exec(g)!==null}},{}],114:[function(b,c,a){c.exports=function d(g){var f=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return f.exec(g)!==null}},{}],115:[function(d,f,c){var b=d("./isHex");var a=d("./hexToRgb");
var h=d("./rgbToObject");f.exports=function g(n,m,l){n=b(n)?a(n):n;m=b(m)?a(m):m;
n=h(n);m=h(m);var k=n.r+((m.r-n.r)*l);var j=n.g+((m.g-n.g)*l);var i=n.b+((m.b-n.b)*l);
return"rgb("+Math.round(k)+", "+Math.round(j)+", "+Math.round(i)+")"}},{"./hexToRgb":110,"./isHex":112,"./rgbToObject":121}],116:[function(b,c,a){var d=b("./rgbToObject");
c.exports=function f(g){var h=d(g);return[h.r,h.g,h.b]}},{"./rgbToObject":121}],117:[function(d,f,b){var c=d("./hexToDecimal");
var h=d("./rgbToArray");var g=d("./rgbToHex");f.exports=function a(i){var j=g.apply(this,h(i));
return c(j)}},{"./hexToDecimal":109,"./rgbToArray":116,"./rgbToHex":118}],118:[function(b,c,a){c.exports=function d(i,h,f){return"#"+((1<<24)+(i<<16)+(h<<8)+f).toString(16).slice(1)
}},{}],119:[function(c,d,b){d.exports=function a(f,m,o){if(arguments.length!==3){return false
}f/=255;m/=255;o/=255;var p=Math.max(f,m,o);var j=Math.min(f,m,o);var n=p+j;var q=p-j;
var k;var t;var i=(n/2);if(p===j){k=t=0}else{t=i>0.5?q/(2-p-j):q/n;switch(p){case f:k=(m-o)/q;
break;case m:k=2+((o-f)/q);break;case o:k=4+((f-m)/q);break}k*=60;if(k<0){k+=360
}}return([k,Math.round(100*t),Math.round(100*i)])}},{}],120:[function(c,d,a){d.exports=function b(f,m,n){if(arguments.length!==3){return false
}var i=f/255;var j=m/255;var p=n/255;var o=Math.max(i,j,p);var k=Math.min(i,j,p);
var l;var u;var t=o;var q=o-k;u=o===0?0:q/o;if(o===k){l=0}else{switch(o){case i:l=(j-p)/q+(j<p?6:0);
break;case j:l=(p-i)/q+2;break;case p:l=(i-j)/q+4;break}l/=6}return[Math.round(360*l),Math.round(100*u),Math.round(100*t)]
}},{}],121:[function(b,c,a){c.exports=function d(g){var h=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3])}}},{}],122:[function(b,c,a){var f=b("./rgbaToObject");
c.exports=function d(g){var h=f(g);return[h.r,h.g,h.b,h.a]}},{"./rgbaToObject":123}],123:[function(b,c,a){c.exports=function d(g){var h=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3]),a:Number(f[4])}
}},{}],124:[function(c,d,b){d.exports=function a(g){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
g=g.replace(f,function(i,k,j,h){return"#"+k+k+j+j+h+h});return g}},{}],125:[function(b,c,a){c.exports={createBezier:b("./ac-easing/createBezier"),createPredefined:b("./ac-easing/createPredefined"),createStep:b("./ac-easing/createStep"),Ease:b("./ac-easing/Ease")}
},{"./ac-easing/Ease":126,"./ac-easing/createBezier":127,"./ac-easing/createPredefined":128,"./ac-easing/createStep":129}],126:[function(b,c,a){var g="Ease expects an easing function.";
function f(i,h){if(typeof i!=="function"){throw new TypeError(g)}this.easingFunction=i;
this.cssString=h||null}var d=f.prototype;d.getValue=function(h){return this.easingFunction(h,0,1,1)
};c.exports=f},{}],127:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.every");
var f=b("./Ease");var h=b("./helpers/KeySpline");var d="Bezier curve expects exactly four (4) numbers. Given: ";
c.exports=function g(j,p,i,o){var q=Array.prototype.slice.call(arguments);var m=q.every(function(r){return(typeof r==="number")
});if(q.length!==4||!m){throw new TypeError(d+q)}var n=new h(j,p,i,o);var k=function(t,r,u,s){return n.get(t/s)*u+r
};var l="cubic-bezier("+q.join(", ")+")";return new f(k,l)}},{"./Ease":126,"./helpers/KeySpline":130,"@marcom/ac-polyfills/Array/prototype.every":394}],128:[function(c,a,d){var i=c("./createStep");
var f=c("./helpers/cssAliases");var b=c("./helpers/easingFunctions");var h=c("./Ease");
var g='Easing function "%TYPE%" not recognized among the following: '+Object.keys(b).join(", ");
a.exports=function j(k){var l;if(k==="step-start"){return i(1,"start")}else{if(k==="step-end"){return i(1,"end")
}else{l=b[k]}}if(!l){throw new Error(g.replace("%TYPE%",k))}return new h(l,f[k])
}},{"./Ease":126,"./createStep":129,"./helpers/cssAliases":131,"./helpers/easingFunctions":132}],129:[function(d,f,c){var g=d("./Ease");
var b="Step function expects a numeric value greater than zero. Given: ";var a='Step function direction must be either "start" or "end" (default). Given: ';
f.exports=function h(i,l){l=l||"end";if(typeof i!=="number"||i<1){throw new TypeError(b+i)
}if(l!=="start"&&l!=="end"){throw new TypeError(a+l)}var k=function(q,m,r,p){var o=r/i;
var n=Math[(l==="start")?"floor":"ceil"](q/p*i);return m+o*n};var j="steps("+i+", "+l+")";
return new g(k,j)}},{"./Ease":126}],130:[function(b,c,a){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p
}return g(k(p),l,j)};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p
}function f(p){return 3*p}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
}function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
q-=p/t}return q}}c.exports=d},{}],131:[function(c,d,b){var a={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
a.easeIn=a["ease-in"];a.easeOut=a["ease-out"];a.easeInOut=a["ease-in-out"];a.easeInCubic=a["ease-in-cubic"];
a.easeOutCubic=a["ease-out-cubic"];a.easeInOutCubic=a["ease-in-out-cubic"];a.easeInQuad=a["ease-in-quad"];
a.easeOutQuad=a["ease-out-quad"];a.easeInOutQuad=a["ease-in-out-quad"];a.easeInQuart=a["ease-in-quart"];
a.easeOutQuart=a["ease-out-quart"];a.easeInOutQuart=a["ease-in-out-quart"];a.easeInQuint=a["ease-in-quint"];
a.easeOutQuint=a["ease-out-quint"];a.easeInOutQuint=a["ease-in-out-quint"];a.easeInSine=a["ease-in-sine"];
a.easeOutSine=a["ease-out-sine"];a.easeInOutSine=a["ease-in-out-sine"];a.easeInExpo=a["ease-in-expo"];
a.easeOutExpo=a["ease-out-expo"];a.easeInOutExpo=a["ease-in-out-expo"];a.easeInCirc=a["ease-in-circ"];
a.easeOutCirc=a["ease-out-circ"];a.easeInOutCirc=a["ease-in-out-circ"];a.easeInBack=a["ease-in-back"];
a.easeOutBack=a["ease-out-back"];a.easeInOutBack=a["ease-in-out-back"];d.exports=a
},{}],132:[function(d,b,F){var J=d("../createBezier");var w=J(0.25,0.1,0.25,1).easingFunction;
var g=J(0.42,0,1,1).easingFunction;var C=J(0,0,0.58,1).easingFunction;var x=J(0.42,0,0.58,1).easingFunction;
var u=function(Q,O,R,P){return R*Q/P+O};var h=function(Q,O,R,P){return R*(Q/=P)*Q+O
};var N=function(Q,O,R,P){return -R*(Q/=P)*(Q-2)+O};var D=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q+O
}return -R/2*((--Q)*(Q-2)-1)+O};var i=function(Q,O,R,P){return R*(Q/=P)*Q*Q+O};
var a=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q+1)+O};var j=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q+2)+O};var o=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q+O};
var m=function(Q,O,R,P){return -R*((Q=Q/P-1)*Q*Q*Q-1)+O};var p=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q+O
}return -R/2*((Q-=2)*Q*Q*Q-2)+O};var y=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q*Q+O
};var v=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q*Q*Q+1)+O};var z=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q*Q*Q+2)+O};var c=function(Q,O,R,P){return -R*Math.cos(Q/P*(Math.PI/2))+R+O
};var L=function(Q,O,R,P){return R*Math.sin(Q/P*(Math.PI/2))+O};var B=function(Q,O,R,P){return -R/2*(Math.cos(Math.PI*Q/P)-1)+O
};var G=function(Q,O,R,P){return(Q===0)?O:R*Math.pow(2,10*(Q/P-1))+O};var A=function(Q,O,R,P){return(Q===P)?O+R:R*(-Math.pow(2,-10*Q/P)+1)+O
};var r=function(Q,O,R,P){if(Q===0){return O}else{if(Q===P){return O+R}else{if((Q/=P/2)<1){return R/2*Math.pow(2,10*(Q-1))+O
}}}return R/2*(-Math.pow(2,-10*--Q)+2)+O};var l=function(Q,O,R,P){return -R*(Math.sqrt(1-(Q/=P)*Q)-1)+O
};var f=function(Q,O,R,P){return R*Math.sqrt(1-(Q=Q/P-1)*Q)+O};var I=function(Q,O,R,P){if((Q/=P/2)<1){return -R/2*(Math.sqrt(1-Q*Q)-1)+O
}return R/2*(Math.sqrt(1-(Q-=2)*Q)+1)+O};var E=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U}}if(!T){T=R*0.3
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}return -(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
};var H=function(S,Q,U,R){var O=1.70158;var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U
}}if(!T){T=R*0.3}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)
}return P*Math.pow(2,-10*S)*Math.sin((S*R-O)*(2*Math.PI)/T)+U+Q};var t=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R/2)===2){return Q+U}}if(!T){T=R*(0.3*1.5)
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}if(S<1){return -0.5*(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
}return P*Math.pow(2,-10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T)*0.5+U+Q};var s=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*(R/=Q)*R*((O+1)*R-O)+P};var q=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*((R=R/Q-1)*R*((O+1)*R+O)+1)+P};var k=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}if((R/=Q/2)<1){return S/2*(R*R*(((O*=(1.525))+1)*R-O))+P}return S/2*((R-=2)*R*(((O*=(1.525))+1)*R+O)+2)+P
};var K=function(Q,O,R,P){if((Q/=P)<(1/2.75)){return R*(7.5625*Q*Q)+O}else{if(Q<(2/2.75)){return R*(7.5625*(Q-=(1.5/2.75))*Q+0.75)+O
}else{if(Q<(2.5/2.75)){return R*(7.5625*(Q-=(2.25/2.75))*Q+0.9375)+O}}}return R*(7.5625*(Q-=(2.625/2.75))*Q+0.984375)+O
};var n=function(Q,O,R,P){return R-K(P-Q,0,R,P)+O};var M=function(Q,O,R,P){if(Q<P/2){return n(Q*2,0,R,P)*0.5+O
}return K(Q*2-P,0,R,P)*0.5+R*0.5+O};b.exports={linear:u,ease:w,easeIn:g,"ease-in":g,easeOut:C,"ease-out":C,easeInOut:x,"ease-in-out":x,easeInCubic:i,"ease-in-cubic":i,easeOutCubic:a,"ease-out-cubic":a,easeInOutCubic:j,"ease-in-out-cubic":j,easeInQuad:h,"ease-in-quad":h,easeOutQuad:N,"ease-out-quad":N,easeInOutQuad:D,"ease-in-out-quad":D,easeInQuart:o,"ease-in-quart":o,easeOutQuart:m,"ease-out-quart":m,easeInOutQuart:p,"ease-in-out-quart":p,easeInQuint:y,"ease-in-quint":y,easeOutQuint:v,"ease-out-quint":v,easeInOutQuint:z,"ease-in-out-quint":z,easeInSine:c,"ease-in-sine":c,easeOutSine:L,"ease-out-sine":L,easeInOutSine:B,"ease-in-out-sine":B,easeInExpo:G,"ease-in-expo":G,easeOutExpo:A,"ease-out-expo":A,easeInOutExpo:r,"ease-in-out-expo":r,easeInCirc:l,"ease-in-circ":l,easeOutCirc:f,"ease-out-circ":f,easeInOutCirc:I,"ease-in-out-circ":I,easeInBack:s,"ease-in-back":s,easeOutBack:q,"ease-out-back":q,easeInOutBack:k,"ease-in-out-back":k,easeInElastic:E,"ease-in-elastic":E,easeOutElastic:H,"ease-out-elastic":H,easeInOutElastic:t,"ease-in-out-elastic":t,easeInBounce:n,"ease-in-bounce":n,easeOutBounce:K,"ease-out-bounce":K,easeInOutBounce:M,"ease-in-out-bounce":M}
},{"../createBezier":127}],133:[function(b,c,a){c.exports={PageVisibilityManager:b("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":134}],134:[function(c,f,b){var d=c("@marcom/ac-object/create");
var h=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;function a(){if(typeof document.addEventListener==="undefined"){return
}var i;if(typeof document.hidden!=="undefined"){this._hidden="hidden";i="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";i="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";i="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
i="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(i){document.addEventListener(i,this._handleVisibilityChange.bind(this),false)
}h.call(this)}var g=a.prototype=d(h.prototype);g.CHANGED="changed";g._handleVisibilityChange=function(i){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};f.exports=new a()},{"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object/create":371}],135:[function(b,c,a){c.exports={Clip:b("./ac-eclipse/ClipFactory"),Timeline:b("./ac-eclipse/Timeline")}
},{"./ac-eclipse/ClipFactory":136,"./ac-eclipse/Timeline":137}],136:[function(g,d,h){g("./helpers/Float32Array");
var c=g("./helpers/transitionEnd");var i=g("@marcom/ac-clip").Clip;var k=g("./clips/ClipEasing");
var f=g("./clips/ClipInlineCss");var j=g("./clips/ClipTransitionCss");function b(n,m,o,l){if(n.nodeType){if(c===undefined||(l&&l.inlineStyles)){return new f(n,m,o,l)
}return new j(n,m,o,l)}return new k(n,m,o,l)}for(var a in i){if(typeof i[a]==="function"&&a.substr(0,1)!=="_"){b[a]=i[a].bind(i)
}}b.to=function(n,m,o,l){l=l||{};if(l.destroyOnComplete===undefined){l.destroyOnComplete=true
}return new b(n,m,o,l).play()};b.from=function(o,n,l,m){m=m||{};m.propsFrom=l;if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new b(o,n,m.propsTo,m).play()};d.exports=b},{"./clips/ClipEasing":138,"./clips/ClipInlineCss":139,"./clips/ClipTransitionCss":140,"./helpers/Float32Array":143,"./helpers/transitionEnd":152,"@marcom/ac-clip":103}],137:[function(c,f,a){var d=c("@marcom/ac-object").create;
var b=c("@marcom/ac-clip").Clip;function h(i){i=i||{}}var g=h.prototype=d(b.prototype);
f.exports=h},{"@marcom/ac-clip":103,"@marcom/ac-object":375}],138:[function(b,a,c){var l=b("@marcom/ac-object").clone;
var g=b("@marcom/ac-object").create;var o=b("@marcom/ac-easing").createPredefined;
var m=b("../helpers/isCssCubicBezierString");var f=b("../helpers/BezierCurveCssManager");
var i=b("@marcom/ac-clip").Clip;var k=b("@marcom/ac-easing").Ease;var j="ease";
function n(r,q,s,p){if(p&&m(p.ease)){p.ease=f.create(p.ease).toEasingFunction()
}p=p||{};this._propsEase=p.propsEase||{};i.call(this,r,q,s,p)}var h=i.prototype;
var d=n.prototype=g(h);d.reset=function(){var q=h.reset.call(this);if(this._clips){var p=this._clips.length;
while(p--){this._clips[p].reset()}}return q};d.destroy=function(){if(this._clips){var p=this._clips.length;
while(p--){this._clips[p].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return h.destroy.call(this)};d._prepareProperties=function(){var p=0;var s={};var q={};
var t={};var w,v;if(this._propsEase){for(w in this._propsTo){if(this._propsTo.hasOwnProperty(w)){v=this._propsEase[w];
if(m(v)){v=f.create(v).toEasingFunction()}if(v===undefined){if(s[this._ease]===undefined){s[this._ease]={};
q[this._ease]={};t[this._ease]=this._ease.easingFunction;p++}s[this._ease][w]=this._propsTo[w];
q[this._ease][w]=this._propsFrom[w]}else{if(typeof v==="function"){s[p]={};q[p]={};
s[p][w]=this._propsTo[w];q[p][w]=this._propsFrom[w];t[p]=v;p++}else{if(s[v]===undefined){s[v]={};
q[v]={};t[v]=v;p++}s[v][w]=this._propsTo[w];q[v][w]=this._propsFrom[w]}}}}if(p>1){var r=l(this._options||{},true);
var u=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
r.onStart=null;r.onUpdate=null;r.onDraw=null;r.onComplete=null;this._clips=[];for(v in s){if(s.hasOwnProperty(v)){r.ease=t[v];
r.propsFrom=q[v];this._clips.push(new i(this._target,u,s[v],r))}}v="linear";this._propsTo={};
this._propsFrom={}}else{for(w in t){if(t.hasOwnProperty(w)){v=t[w]}}}if(v!==undefined){this._ease=(typeof v==="function")?new k(v):o(v)
}}return h._prepareProperties.call(this)};d._onUpdateClips=function(r){var p=(this._direction===1)?r.progress():1-r.progress();
var q=this._clips.length;while(q--){this._clips[q].progress(p)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};a.exports=n},{"../helpers/BezierCurveCssManager":142,"../helpers/isCssCubicBezierString":148,"@marcom/ac-clip":103,"@marcom/ac-easing":125,"@marcom/ac-object":375}],139:[function(f,c,g){var b=f("../helpers/convertToStyleObject");
var d=f("../helpers/convertToTransitionableObjects");var m=f("@marcom/ac-object").clone;
var j=f("@marcom/ac-object").create;var k=f("../helpers/removeTransitions");var i=f("../helpers/BezierCurveCssManager");
var o=f("./ClipEasing");var n=f("@marcom/ac-dom-styles");function a(r,q,s,p){p=p||{};
this._el=r;this._storeOnStart=p.onStart||null;this._storeOnDraw=p.onDraw||null;
this._storeOnComplete=p.onComplete||null;p.onStart=this._onStart;p.onDraw=this._onDraw;
p.onComplete=this._onComplete;o.call(this,{},q,s,p)}var l=o.prototype;var h=a.prototype=j(l);
h.play=function(){var p=l.play.call(this);if(this._remainingDelay!==0){n.setStyle(this._el,b(this._target))
}return p};h.reset=function(){var p=l.reset.call(this);n.setStyle(this._el,b(this._target));
return p};h.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return l.destroy.call(this)};
h.target=function(){return this._el};h._prepareProperties=function(){var s=d(this._el,this._propsTo,this._propsFrom);
this._target=s.target;this._propsFrom=s.propsFrom;this._propsTo=s.propsTo;k(this._el,this._target);
var q=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=b(q);if(this._options.removeStylesOnComplete!==undefined){var t;
var r=this._options.removeStylesOnComplete;if(typeof r==="boolean"&&r){for(t in this._completeStyles){if(this._completeStyles.hasOwnProperty(t)){this._completeStyles[t]=null
}}}else{if(typeof r==="object"&&r.length){var p=r.length;while(p--){t=r[p];if(this._completeStyles.hasOwnProperty(t)){this._completeStyles[t]=null
}}}}}return l._prepareProperties.call(this)};h._onStart=function(p){if(this.playing()&&this._direction===1&&this._delay===0){n.setStyle(this._el,b(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
h._onDraw=function(p){n.setStyle(this._el,b(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};h._onComplete=function(p){n.setStyle(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};c.exports=a},{"../helpers/BezierCurveCssManager":142,"../helpers/convertToStyleObject":145,"../helpers/convertToTransitionableObjects":146,"../helpers/removeTransitions":149,"./ClipEasing":138,"@marcom/ac-dom-styles":54,"@marcom/ac-object":375}],140:[function(j,b,y){var c=j("../helpers/convertToStyleObject");
var o=j("../helpers/convertToTransitionableObjects");var w=j("@marcom/ac-object").clone;
var m=j("@marcom/ac-object").create;var t=j("@marcom/ac-easing").createPredefined;
var l=j("../helpers/isCssCubicBezierString");var u=j("../helpers/removeTransitions");
var g=j("../helpers/splitUnits");var i=j("../helpers/transitionEnd");var n=j("../helpers/waitAnimationFrames");
var v=j("../helpers/BezierCurveCssManager");var a=j("@marcom/ac-clip").Clip;var r=j("./ClipEasing");
var x=j("@marcom/ac-dom-styles");var s=j("@marcom/ac-page-visibility").PageVisibilityManager;
var d="ease";var h="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var k="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function f(B,A,C,z){z=z||{};this._el=B;this._storeEase=z.ease;if(typeof this._storeEase==="function"){throw new Error(k)
}this._storeOnStart=z.onStart||null;this._storeOnComplete=z.onComplete||null;z.onStart=this._onStart.bind(this);
z.onComplete=this._onComplete.bind(this);this._stylesTo=w(C,true);this._stylesFrom=(z.propsFrom)?w(z.propsFrom,true):{};
this._propsEase=(z.propsEase)?w(z.propsEase,true):{};if(l(z.ease)){z.ease=v.create(z.ease).toEasingFunction()
}a.call(this,{},A,{},z);this._propsFrom={}}var p=a.prototype;var q=f.prototype=m(p);
q.play=function(){var z=p.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,c(this._stylesFrom))
}return z};q.reset=function(){var z=p.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,c(this._styles));return z};q.destroy=function(){s.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return p.destroy.call(this)};q.target=function(){return this._el};q.duration=function(A){var z=p.duration.call(this,A);
if(A===undefined){return z}if(this.playing()){this.progress(this._progress)}return z
};q.progress=function(z){var A=p.progress.call(this,z);if(z===undefined){return A
}z=(this._direction===1)?z:1-z;this._stylesClip.progress(z);this._applyStyles(0,c(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;n(this._setStylesAfterWaiting,2)
}return A};q._prepareProperties=function(){var B=o(this._el,this._stylesTo,this._stylesFrom);
this._styles=B.target;this._stylesTo=B.propsTo;this._stylesFrom=B.propsFrom;var C=this._storeEase||d;
this._eases={};this._propsArray=[];var E;this._styleCompleteTo=c(this._stylesTo);
this._styleCompleteFrom=c(this._stylesFrom);this._propsEaseKeys={};var D;for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){this._propsArray[this._propsArray.length]=D;
if(this._propsEase[D]===undefined){if(this._eases[C]===undefined){E=this._convertEase(C);
this._eases[C]=E.css}this._propsEaseKeys[D]=C}else{if(this._eases[this._propsEase[D]]===undefined){E=this._convertEase(this._propsEase[D]);
this._eases[this._propsEase[D]]=E.css;this._propsEaseKeys[D]=this._propsEase[D];
this._propsEase[D]=E.js}else{if(l(this._propsEase[D])){this._propsEaseKeys[D]=this._propsEase[D];
this._propsEase[D]=this._eases[this._propsEase[D]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=c((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var A=this._options.removeStylesOnComplete;
if(typeof A==="boolean"&&A){for(D in this._stylesTo){this._completeStyles[D]=null
}}else{if(typeof A==="object"&&A.length){var z=A.length;while(z--){this._completeStyles[A[z]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);s.on(s.CHANGED,this._onVisibilityChanged);
this._stylesClip=new r(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
a._remove(this._stylesClip);return p._prepareProperties.call(this)};q._convertEase=function(B){if(typeof B==="function"){throw new Error(k)
}var z;var A;if(l(B)){z=v.create(B);A=z.toEasingFunction()}else{var C=t(B);if(C.cssString===null){throw new Error(h.replace(/%EASE%/g,B))
}z=v.create(C.cssString);A=B}return{css:{"1":z,"-1":z.reversed()},js:A}};q._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
p._complete.call(this)}};q._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};q._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(i,this._onTransitionEnded)
}};q._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(i,this._onTransitionEnded)
}};q._applyStyles=function(B,z){if(B>0){var C="";var A={};var D;for(D in this._eases){if(this._eases.hasOwnProperty(D)){A[D]=this._eases[D][this._direction].splitAt(this.progress()).toCSSString()
}}for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){C+=D+" "+B+"ms "+A[this._propsEaseKeys[D]]+" 0ms, "
}}this._currentTransitionStyles=C.substr(0,C.length-2);if(!this._doStylesMatchCurrentStyles(z)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}z.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
x.setStyle(this._el,z)};q._doStylesMatchCurrentStyles=function(B){var A=x.getStyle.apply(this,[this._el].concat([this._propsArray]));
var z;for(z in B){if(B.hasOwnProperty(z)&&A.hasOwnProperty(z)&&B[z]!==A[z]){return false
}}return true};q._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var A=this._durationMs*(1-this.progress());var z=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(A,z)}};q._setOtherTransitions=function(){u(this._el,this._stylesTo);
var z=a.getAll(this._el);var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._otherTransitions&&z[A]._otherTransitions.length){this._otherTransitions=z[A]._otherTransitions;
return}}this._otherTransitions=x.getStyle(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};q._getTransitionStyles=function(){var z=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){z+=this._otherTransitions}else{if(z.length){z=z.substr(0,z.length-2)
}}return z};q._getOtherClipTransitionStyles=function(){var B="";var z=a.getAll(this._el);
var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._currentTransitionStyles&&z[A]._currentTransitionStyles.length){B+=z[A]._currentTransitionStyles+", "
}}return B};q._onVisibilityChanged=function(z){if(this.playing()&&!z.isHidden){this._update({timeNow:this._getTime()});
var A=this.progress();if(A<1){this.progress(A)}}};q._onPaused=function(A){var z=x.getStyle.apply(this,[this._el].concat([this._propsArray]));
z.transition=this._getTransitionStyles();this._removeTransitionListener();x.setStyle(this._el,z)
};q._onStart=function(z){var A=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(A){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}n(this._setStylesAfterWaiting,A);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};q._onComplete=function(z){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
x.setStyle(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};b.exports=f},{"../helpers/BezierCurveCssManager":142,"../helpers/convertToStyleObject":145,"../helpers/convertToTransitionableObjects":146,"../helpers/isCssCubicBezierString":148,"../helpers/removeTransitions":149,"../helpers/splitUnits":150,"../helpers/transitionEnd":152,"../helpers/waitAnimationFrames":153,"./ClipEasing":138,"@marcom/ac-clip":103,"@marcom/ac-dom-styles":54,"@marcom/ac-easing":125,"@marcom/ac-object":375,"@marcom/ac-page-visibility":133}],141:[function(c,d,a){var g=c("@marcom/ac-easing").createBezier;
function b(i,h){this.manager=h;this.p1={x:i[0],y:i[1]};this.p2={x:i[2],y:i[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var f=b.prototype;f.splitAt=function(k){if(this._isLinear){return this}k=Math.round(k*40)/40;
if(k===0){return this}else{if(this._cacheSplits[k]!==undefined){return this._cacheSplits[k]
}}var q=[this.p1.x,this.p2.x];var n=[this.p1.y,this.p2.y];var m=0;var o=k;var i=0;
var p=1;var j=this._getStartX(k,q);while(o!==j&&m<1000){if(o<j){p=k}else{i=k}k=i+((p-i)*0.5);
j=this._getStartX(k,q);++m}var l=this._splitBezier(k,q,n);var r=this._normalize(l);
var h=this.manager.create(r);this._cacheSplits[o]=h;return h};f.reversed=function(){var h=this.toArray();
return this.manager.create([0.5-(h[2]-0.5),0.5-(h[3]-0.5),0.5-(h[0]-0.5),0.5-(h[1]-0.5)])
};f.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};f.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};f.toEasingFunction=function(){return g.apply(this,this.toArray()).easingFunction
};f._getStartX=function(m,h){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return i-3*k*l*h[1]+3*m*j*h[0]
};f._splitBezier=function(m,h,n){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return[i-3*k*l*h[1]+3*m*j*h[0],i-3*k*l*n[1]+3*m*j*n[0],k-2*m*l*h[1]+j*h[0],k-2*m*l*n[1]+j*n[0],m-l*h[1],m-l*n[1]]
};f._normalize=function(h){return[(h[2]-h[0])/(1-h[0]),(h[3]-h[1])/(1-h[1]),(h[4]-h[0])/(1-h[0]),(h[5]-h[1])/(1-h[1])]
};d.exports=b},{"@marcom/ac-easing":125}],142:[function(c,d,a){var b=c("./BezierCurveCss");
function g(){this._instances={}}var f=g.prototype;f.create=function(k){var j;if(typeof k==="string"){j=k.replace(/ /g,"")
}else{j="cubic-bezier("+k.join(",")+")"}if(this._instances[j]===undefined){if(typeof k==="string"){k=k.match(/\d*\.?\d+/g);
var h=k.length;while(h--){k[h]=Number(k[h])}}this._instances[j]=new b(k,this)}return this._instances[j]
};d.exports=new g()},{"./BezierCurveCss":141}],143:[function(b,c,a){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],144:[function(d,f,c){var b=d("./splitUnits");var h=d("@marcom/ac-dom-metrics");
var a={translateX:"width",translateY:"height"};function i(j,l,m){this._transform=j;
var k;var n;var o;for(o in m){if(m.hasOwnProperty(o)&&typeof this._transform[o]==="function"){k=b(m[o]);
if(k.unit==="%"){n=this._convertPercentToPixelValue(o,k.value,l)}else{n=k.value
}this._transform[o].call(this._transform,n)}}}var g=i.prototype;g._convertPercentToPixelValue=function(m,l,k){m=a[m];
var j=h.getDimensions(k);if(j[m]){l*=0.01;return j[m]*l}return l};g.toArray=function(){return this._transform.toArray()
};g.toCSSString=function(){return this._transform.toCSSString()};f.exports=i},{"./splitUnits":150,"@marcom/ac-dom-metrics":50}],145:[function(b,c,a){c.exports=function d(h){var g={};
var f;var i;for(i in h){if(h.hasOwnProperty(i)&&h[i]!==null){if(h[i].isColor){if(h[i].isRgb){g[i]="rgb("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+")"
}else{if(h[i].isRgba){g[i]="rgba("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+", "+h[i].a+")"
}}}else{if(i==="transform"){f=(h[i].length===6)?"matrix":"matrix3d";g[i]=f+"("+h[i].join(",")+")"
}else{if(!h[i].unit){g[i]=h[i].value}else{g[i]=h[i].value+h[i].unit}}}}}return g
}},{}],146:[function(h,d,j){var n=h("@marcom/ac-object").clone;var f=h("./splitUnits");
var b=h("./toCamCase");var c=h("@marcom/ac-color").Color;var q=h("@marcom/ac-dom-styles");
var m=h("@marcom/ac-feature");var i=h("@marcom/ac-transform").Transform;var a=h("./TransformMatrix");
var l=function(s){if(c.isRgba(s)){s=new c(s).rgbaObject();s.isRgba=true}else{s=new c(s).rgbObject();
s.isRgb=true}s.isColor=true;return s};var r=function(s){if(s.isRgb){s.isRgb=false;
s.isRgba=true;s.a=1}};var p=function(t,s,u){if(t.isRgba||s.isRgba||u.isRgba){r(t);
r(s);r(u)}};var o=function(s){return[s[0],s[1],0,0,s[2],s[3],0,0,0,0,1,0,s[4],s[5],0,1]
};var k=function(t,s,u){if(t.transform.length===16||s.transform.length===16||u.transform.length===16){if(t.transform.length===6){t.transform=o(t.transform)
}if(s.transform.length===6){s.transform=o(s.transform)}if(u.transform.length===6){u.transform=o(u.transform)
}}};d.exports=function g(u,A,z){var w={};A=n(A,true);z=n(z,true);var t;var B,x,y;
var v=m.cssPropertyAvailable("transform");var s;for(s in A){if(A.hasOwnProperty(s)&&A[s]!==null){if(s==="transform"){if(v){B=new i();
t=q.getStyle(u,"transform")["transform"]||"none";B.setMatrixValue(t);x=new a(new i(),u,A[s])
}if(x&&x.toCSSString()!==B.toCSSString()){y=new a(z[s]?new i():B.clone(),u,z[s]);
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null}}else{t=q.getStyle(u,s)[b(s)]||z[s];
if(c.isColor(t)){w[s]=l(t);z[s]=(z[s]!==undefined)?l(z[s]):n(w[s],true);A[s]=l(A[s])
}else{w[s]=f(t);z[s]=(z[s]!==undefined)?f(z[s]):n(w[s],true);A[s]=f(A[s])}}}}for(s in z){if(z.hasOwnProperty(s)&&z[s]!==null&&(A[s]===undefined||A[s]===null)){if(s==="transform"){if(v){B=new i();
B.setMatrixValue(getComputedStyle(u).transform||getComputedStyle(u).webkitTransform||"none");
y=new a(new i(),u,z[s])}if(y&&y.toCSSString()!==B.toCSSString()){x=new a(B.clone());
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null;z[s]=null
}}else{t=q.getStyle(u,s)[b(s)];if(c.isColor(t)){w[s]=l(t);A[s]=n(w[s],true);z[s]=l(z[s])
}else{w[s]=f(t);z[s]=f(z[s]);A[s]=n(w[s],true)}}}if(w[s]&&w[s].isColor){p(w[s],z[s],A[s])
}}if(w.transform){k(w,z,A)}return{target:w,propsTo:A,propsFrom:z}}},{"./TransformMatrix":144,"./splitUnits":150,"./toCamCase":151,"@marcom/ac-color":105,"@marcom/ac-dom-styles":54,"@marcom/ac-feature":208,"@marcom/ac-object":375,"@marcom/ac-transform":613}],147:[function(b,c,a){c.exports=function d(j){if(j.transitionProperty){var m="";
var h=j.transitionProperty.split(", ");var k=j.transitionDuration.split(", ");var l=j.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(i){return i.substr(0,i.length-1)
}).split(", ");var f=j.transitionDelay.split(", ");var g=h.length;while(g--){m+=h[g]+" "+k[g]+" "+l[g]+" "+f[g]+", "
}return m.substr(0,m.length-2)}return false}},{}],148:[function(c,d,b){d.exports=function a(f){return typeof f==="string"&&f.substr(0,13)==="cubic-bezier("
}},{}],149:[function(c,d,b){var g=c("./getShorthandTransition");var f=c("@marcom/ac-dom-styles");
d.exports=function a(k,m){var l=f.getStyle(k,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
l=l.transition||g(l);if(l&&l.length){l=l.split(",");var j=0;var n;var h=l.length;
while(h--){n=l[h].trim().split(" ")[0];if(m[n]!==undefined){l.splice(h,1);++j}}if(j){if(l.length===0){l=["all"]
}f.setStyle(k,{transition:l.join(",").trim()})}}}},{"./getShorthandTransition":147,"@marcom/ac-dom-styles":54}],150:[function(c,d,b){d.exports=function a(i){i=String(i);
if(i.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var h=/(\d*\.?\d*)(.*)/;var f=1;if(i&&i.substr(0,1)==="-"){i=i.substr(1);f=-1}var g=String(i).match(h);
return{value:Number(g[1])*f,unit:g[2]}}},{}],151:[function(c,d,b){d.exports=function a(g){var f=function(i,j,k,h){return(k===0)&&(h.substr(1,3)!=="moz")?j:j.toUpperCase()
};return g.replace(/-(\w)/g,f)}},{}],152:[function(d,f,c){var a;f.exports=(function b(){if(a){return a
}var g;var h=document.createElement("fakeelement");var i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(g in i){if(h.style[g]!==undefined){a=i[g];return a}}})()},{}],153:[function(d,f,b){var a=d("@marcom/ac-page-visibility").PageVisibilityManager;
f.exports=function c(k,i){if(i){var j=function(l){if(a.isHidden){setTimeout(l,16)
}else{window.requestAnimationFrame(l)}};var h=0;var g=function(){if(h===i){k.call(this)
}else{++h;j(g)}};g()}else{k.call(this)}}},{"@marcom/ac-page-visibility":133}],154:[function(b,c,a){b("@marcom/ac-polyfills/Array/isArray");
b("@marcom/ac-polyfills/Array/prototype.forEach");c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{"@marcom/ac-polyfills/Array/isArray":393,"@marcom/ac-polyfills/Array/prototype.forEach":396}],155:[function(b,c,a){c.exports={flatten:b("./flatten"),intersection:b("./intersection"),shuffle:b("./shuffle"),toArray:b("./toArray"),union:b("./union"),unique:b("./unique"),without:b("./without")}
},{"./flatten":154,"./intersection":156,"./shuffle":157,"./toArray":158,"./union":159,"./unique":160,"./without":161}],156:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.indexOf");
c.exports=function d(n){if(!n){return[]}var m=arguments.length;var k=0;var g=n.length;
var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue}for(var h=1;h<m;
h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f}},{"@marcom/ac-polyfills/Array/prototype.indexOf":397}],157:[function(b,c,a){c.exports=function d(i){var f=i.length;
var h;var g;while(f){h=Math.floor(Math.random()*f--);g=i[f];i[f]=i[h];i[h]=g}return i
}},{}],158:[function(b,d,a){b("@marcom/ac-polyfills/Array/prototype.slice");d.exports=function c(f){return Array.prototype.slice.call(f)
}},{"@marcom/ac-polyfills/Array/prototype.slice":402}],159:[function(b,d,a){var h=b("./flatten");
var c=b("./toArray");var g=b("./unique");d.exports=function f(i){return g(h(c(arguments)))
}},{"./flatten":154,"./toArray":158,"./unique":160}],160:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.indexOf");
b("@marcom/ac-polyfills/Array/prototype.reduce");c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{"@marcom/ac-polyfills/Array/prototype.indexOf":397,"@marcom/ac-polyfills/Array/prototype.reduce":400}],161:[function(b,d,a){b("@marcom/ac-polyfills/Array/prototype.indexOf");
b("@marcom/ac-polyfills/Array/prototype.slice");d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{"@marcom/ac-polyfills/Array/prototype.indexOf":397,"@marcom/ac-polyfills/Array/prototype.slice":402}],162:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{dup:67}],163:[function(b,c,a){arguments[4][68][0].apply(a,arguments)},{dup:68}],164:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{dup:69}],165:[function(b,c,a){c.exports=10},{}],166:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{dup:70}],167:[function(b,c,a){arguments[4][71][0].apply(a,arguments)},{dup:71}],168:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],169:[function(b,c,a){arguments[4][72][0].apply(a,arguments)},{"./ELEMENT_NODE":166,"./internal/isNodeType":177,"@marcom/ac-polyfills/Array/prototype.filter":395,"@marcom/ac-polyfills/Array/prototype.slice":402,dup:72}],170:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],171:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":162,"./DOCUMENT_FRAGMENT_NODE":163,"./DOCUMENT_NODE":164,"./DOCUMENT_TYPE_NODE":165,"./ELEMENT_NODE":166,"./TEXT_NODE":167,"./createDocumentFragment":168,"./filterByNodeType":169,"./hasAttribute":170,"./indexOf":172,"./insertAfter":173,"./insertBefore":174,"./insertFirstChild":175,"./insertLastChild":176,"./isComment":179,"./isDocument":180,"./isDocumentFragment":181,"./isDocumentType":182,"./isElement":183,"./isNode":184,"./isNodeList":185,"./isTextNode":186,"./remove":187,"./replace":188}],172:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.indexOf");
c("@marcom/ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");
var a=c("./filterByNodeType");d.exports=function f(k,i){var h=k.parentNode;var j;
if(!h){return 0}j=h.childNodes;if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)
}return j.indexOf(k)}},{"./filterByNodeType":169,"./internal/validate":178,"@marcom/ac-polyfills/Array/prototype.indexOf":397,"@marcom/ac-polyfills/Array/prototype.slice":402}],173:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":178}],174:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":178}],175:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":178}],176:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":178}],177:[function(b,c,a){arguments[4][73][0].apply(a,arguments)
},{"../isNode":184,dup:73}],178:[function(b,c,a){arguments[4][74][0].apply(a,arguments)
},{"../COMMENT_NODE":162,"../DOCUMENT_FRAGMENT_NODE":163,"../ELEMENT_NODE":166,"../TEXT_NODE":167,"./isNodeType":177,dup:74}],179:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":162,"./internal/isNodeType":177}],180:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":164,"./internal/isNodeType":177}],181:[function(b,c,a){arguments[4][75][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":163,"./internal/isNodeType":177,dup:75}],182:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":165,"./internal/isNodeType":177}],183:[function(b,c,a){arguments[4][76][0].apply(a,arguments)
},{"./ELEMENT_NODE":166,"./internal/isNodeType":177,dup:76}],184:[function(b,c,a){arguments[4][77][0].apply(a,arguments)
},{dup:77}],185:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],186:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":167,"./internal/isNodeType":177}],187:[function(b,c,a){arguments[4][78][0].apply(a,arguments)
},{"./internal/validate":178,dup:78}],188:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":178}],189:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":190}],190:[function(d,c,h){d("@marcom/ac-polyfills/Function/prototype.bind");
var m=d("@marcom/ac-array");var l=d("@marcom/ac-dom-nodes");var a={getDimensions:d("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:d("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:d("@marcom/ac-dom-metrics/getScrollY")};
var k=d("@marcom/ac-dom-events");var g=d("@marcom/ac-object");var j=d("./TrackedElement");
var f={autoStart:false};function b(o,n){this.options=g.clone(f);this.options=typeof n==="object"?g.extend(this.options,n):this.options;
this._scrollY=a.getScrollY();this._windowHeight=this._getWindowHeight();this.tracking=false;
this.elements=[];if(o&&(Array.isArray(o)||l.isNodeList(o)||l.isElement(o))){this.addElements(o)
}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);
if(this.options.autoStart){this.start()}}var i=b.prototype;i.destroy=function(){var o,n;
this.stop();for(o=0,n=this.elements.length;o<n;o++){this.elements[o].destroy()}this.elements=null;
this.options=null};i._registerElements=function(n){n=[].concat(n);n.forEach(function(p){if(this._elementInDOM(p)){var o=new j(p);
o.offsetTop=o.element.offsetTop;this.elements.push(o)}},this)};i._registerTrackedElements=function(n){var o=[].concat(n);
o.forEach(function(p){if(this._elementInDOM(p.element)){p.offsetTop=p.element.offsetTop;
this.elements.push(p)}},this)};i._elementInDOM=function(p){var o=false;var n=document.getElementsByTagName("body")[0];
if(l.isElement(p)&&n.contains(p)){o=true}return o};i._elementPercentInView=function(n){return n.pixelsInView/n.height
};i._elementPixelsInView=function(o){var n=o.top-this._scrollY;var p=o.bottom-this._scrollY;
if(n>this._windowHeight||p<0){return 0}return Math.min(p,this._windowHeight)-Math.max(n,0)
};i._ifInView=function(n,o){if(!o){n.trigger("enterview",n)}};i._ifAlreadyInView=function(n){if(!n.inView){n.trigger("exitview",n)
}};i.addElements=function(n){n=l.isNodeList(n)?m.toArray(n):[].concat(n);n.forEach(this.addElement,this)
};i.addElement=function(o){var n=null;if(l.isElement(o)){n=new j(o);this._registerTrackedElements(n);
this.refreshElementMetrics(n);this.refreshElementState(n)}else{throw new TypeError("ElementTracker: "+o+" is not a valid DOM element")
}return n};i.removeElement=function(p){var o=[];var n;this.elements.forEach(function(r,q){if(r===p||r.element===p){o.push(q)
}});n=this.elements.filter(function(r,q){return o.indexOf(q)<0});this.elements=n
};i.start=function(){if(this.tracking===false){this.tracking=true;k.addEventListener(window,"resize",this.refreshAllElementMetrics);
k.addEventListener(window,"orientationchange",this.refreshAllElementMetrics);k.addEventListener(window,"scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};i.stop=function(){if(this.tracking===true){this.tracking=false;
k.removeEventListener(window,"resize",this.refreshAllElementMetrics);k.removeEventListener(window,"orientationchange",this.refreshAllElementMetrics);
k.removeEventListener(window,"scroll",this.refreshAllElementStates)}};i.refreshAllElementMetrics=function(){this._scrollY=a.getScrollY();
this._windowHeight=this._getWindowHeight();this.elements.forEach(this.refreshElementMetrics,this)
};i.refreshElementMetrics=function(o){var p=a.getDimensions(o.element);var n=a.getPagePosition(o.element);
o=g.extend(o,p,n);return this.refreshElementState(o)};i.refreshAllElementStates=function(){this._scrollY=a.getScrollY();
this.elements.forEach(this.refreshElementState,this)};i.refreshElementState=function(n){var o=n.inView;
n.pixelsInView=this._elementPixelsInView(n);n.percentInView=this._elementPercentInView(n);
n.inView=n.pixelsInView>0;if(n.inView){this._ifInView(n,o)}if(o){this._ifAlreadyInView(n)
}return n};i._getWindowHeight=function(){return document.documentElement.clientHeight||window.innerHeight
};c.exports=b},{"./TrackedElement":191,"@marcom/ac-array":155,"@marcom/ac-dom-events":26,"@marcom/ac-dom-metrics/getDimensions":42,"@marcom/ac-dom-metrics/getPagePosition":43,"@marcom/ac-dom-metrics/getScrollY":48,"@marcom/ac-dom-nodes":171,"@marcom/ac-object":375,"@marcom/ac-polyfills/Function/prototype.bind":412}],191:[function(b,a,c){var d=b("@marcom/ac-object").create;
var h=b("@marcom/ac-dom-nodes");var i=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=i.prototype;function g(k){if(!h.isElement(k)){throw new TypeError("TrackedElement: "+k+" is not a valid DOM element")
}i.call(this);this.element=k;this.inView=false;this.percentInView=0;this.pixelsInView=0;
this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;this.width=0;
this.height=0}var f=g.prototype=d(j);f.destroy=function(){this.element=null;j.destroy.call(this)
};a.exports=g},{"@marcom/ac-dom-nodes":171,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object":375}],192:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":193}],193:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}var h=this._events[g].indexOf(i);
if(h===-1){return}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return
}for(var h=this._events[g].length-1;h>=0;h--){if(j!==undefined){this._events[g][h](j)
}else{this._events[g][h]()}}};d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],194:[function(c,d,b){var a=function(){var h="";
var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
}},{}],195:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],196:[function(b,c,a){arguments[4][27][0].apply(a,arguments)},{"./shared/camelCasedEventTypes":199,"./shared/prefixHelper":201,"./shared/windowFallbackEventTypes":204,"./utils/eventTypeAvailable":205,dup:27}],197:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"./shared/getStyleTestElement":200,"./shared/prefixHelper":201,"./shared/stylePropertyCache":202,"./utils/toCSS":206,"./utils/toDOM":207,dup:57}],198:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"./getStyleProperty":197,"./shared/prefixHelper":201,"./shared/stylePropertyCache":202,"./shared/styleValueAvailable":203,dup:58}],199:[function(b,c,a){arguments[4][28][0].apply(a,arguments)
},{dup:28}],200:[function(b,c,a){arguments[4][59][0].apply(a,arguments)},{dup:59}],201:[function(b,c,a){arguments[4][29][0].apply(a,arguments)
},{dup:29}],202:[function(b,c,a){arguments[4][61][0].apply(a,arguments)},{dup:61}],203:[function(b,c,a){arguments[4][62][0].apply(a,arguments)
},{"./getStyleTestElement":200,"./stylePropertyCache":202,dup:62}],204:[function(b,c,a){arguments[4][30][0].apply(a,arguments)
},{dup:30}],205:[function(b,c,a){arguments[4][31][0].apply(a,arguments)},{dup:31}],206:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],207:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],208:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":209,"./continuousScrollEventsAvailable":210,"./cookiesAvailable":211,"./cssLinearGradientAvailable":212,"./cssPropertyAvailable":213,"./cssViewportUnitsAvailable":214,"./elementAttributeAvailable":215,"./eventTypeAvailable":216,"./isDesktop":218,"./isHandheld":219,"./isRetina":220,"./isTablet":221,"./localStorageAvailable":222,"./mediaElementsAvailable":223,"./mediaQueriesAvailable":224,"./sessionStorageAvailable":225,"./svgAvailable":226,"./threeDTransformsAvailable":227,"./touchAvailable":228,"./webGLAvailable":229}],209:[function(b,c,a){var g=b("./helpers/globals");
var f=b("@marcom/ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":217,"@marcom/ac-function/once":195}],210:[function(c,d,b){var h=c("@marcom/ac-browser");
var a=c("./touchAvailable").original;var f=c("@marcom/ac-function/once");function g(){return(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}d.exports=f(g);d.exports.original=g},{"./touchAvailable":228,"@marcom/ac-browser":1,"@marcom/ac-function/once":195}],211:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var k=false;var h=g.getDocument();
var j=g.getNavigator();try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";
k=(h.cookie.indexOf("ac_feature_cookie")!==-1);h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(i){}return k}d.exports=f(a);d.exports.original=a},{"./helpers/globals":217,"@marcom/ac-function/once":195}],212:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"@marcom/ac-function/once":195,"@marcom/ac-prefixer/getStyleValue":198}],213:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-prefixer/getStyleProperty");var h=c("@marcom/ac-function/memoize");
function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)}else{return !!f(j)}}d.exports=h(a);
d.exports.original=a},{"@marcom/ac-function/memoize":194,"@marcom/ac-prefixer/getStyleProperty":197,"@marcom/ac-prefixer/getStyleValue":198}],214:[function(b,c,a){var f=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function g(){return !!f("margin","1vw 1vh")
}c.exports=d(g);c.exports.original=g},{"@marcom/ac-function/once":195,"@marcom/ac-prefixer/getStyleValue":198}],215:[function(b,d,a){var f=b("./helpers/globals");
var g=b("@marcom/ac-function/memoize");function c(h,j){var i=f.getDocument();var k;
j=j||"div";k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c
},{"./helpers/globals":217,"@marcom/ac-function/memoize":194}],216:[function(c,f,b){var a=c("@marcom/ac-prefixer/getEventType");
var g=c("@marcom/ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);
f.exports.original=d},{"@marcom/ac-function/memoize":194,"@marcom/ac-prefixer/getEventType":196}],217:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],218:[function(d,f,b){var a=d("./touchAvailable").original;var h=d("./helpers/globals");
var g=d("@marcom/ac-function/once");function c(){var i=h.getWindow();return(!a()&&!i.orientation)
}f.exports=g(c);f.exports.original=c},{"./helpers/globals":217,"./touchAvailable":228,"@marcom/ac-function/once":195}],219:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("@marcom/ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":218,"./isTablet":221,"@marcom/ac-function/once":195}],220:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":217}],221:[function(f,g,c){var d=f("./isDesktop").original;
var i=f("./helpers/globals");var h=f("@marcom/ac-function/once");var b=600;function a(){var k=i.getWindow();
var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
}g.exports=h(a);g.exports.original=a},{"./helpers/globals":217,"./isDesktop":218,"@marcom/ac-function/once":195}],222:[function(c,d,a){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function b(){var j=g.getWindow();var i=false;
try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)}catch(h){}return i
}d.exports=f(b);d.exports.original=b},{"./helpers/globals":217,"@marcom/ac-function/once":195}],223:[function(b,c,a){var g=b("./helpers/globals");
var d=b("@marcom/ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":217,"@marcom/ac-function/once":195}],224:[function(c,d,b){c("@marcom/ac-polyfills/matchMedia");
var g=c("./helpers/globals");var f=c("@marcom/ac-function/once");function a(){var i=g.getWindow();
var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":217,"@marcom/ac-function/once":195,"@marcom/ac-polyfills/matchMedia":427}],225:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=false;
try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":217,"@marcom/ac-function/once":195}],226:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":217,"@marcom/ac-function/once":195}],227:[function(b,c,a){var g=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"@marcom/ac-function/once":195,"@marcom/ac-prefixer/getStyleValue":198}],228:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":217,"@marcom/ac-function/once":195}],229:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
}return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":217,"@marcom/ac-function/once":195}],230:[function(b,c,a){c.exports=function d(f,h){var g=null;
return function(){if(g===null){f.apply(this,arguments);g=setTimeout(function(){g=null
},h)}}}},{}],231:[function(d,c,g){var m=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=d("@marcom/ac-dom-events/utils/addEventListener");var b=d("@marcom/ac-dom-events/utils/removeEventListener");
var i=d("@marcom/ac-object/create");var f=d("@marcom/ac-keyboard/internal/KeyEvent");
var k="keydown";var l="keyup";function a(){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);j(document,k,this._DOMKeyDown,true);j(document,l,this._DOMKeyUp,true);
m.call(this)}var h=a.prototype=i(m.prototype);h.onDown=function(n,o){return this.on(k+":"+n,o)
};h.onceDown=function(n,o){return this.once(k+":"+n,o)};h.offDown=function(n,o){return this.off(k+":"+n,o)
};h.onUp=function(n,o){return this.on(l+":"+n,o)};h.onceUp=function(n,o){return this.once(l+":"+n,o)
};h.offUp=function(n,o){return this.off(l+":"+n,o)};h.isDown=function(n){n+="";
return this._keysDown[n]||false};h.isUp=function(n){return !this.isDown(n)};h.destroy=function(){this._keysDown=null;
b(document,k,this._DOMKeyDown);b(document,l,this._DOMKeyUp);m.prototype.destroy.call(this);
return this};h._DOMKeyDown=function(o){var n=this._normalizeKeyboardEvent(o);var p=n.keyCode+="";
this._trackKeyDown(p);this.trigger(k+":"+p,n)};h._DOMKeyUp=function(o){var n=this._normalizeKeyboardEvent(o);
var p=n.keyCode+="";this._trackKeyUp(p);this.trigger(l+":"+p,n)};h._normalizeKeyboardEvent=function(n){return new f(n)
};h._trackKeyUp=function(n){if(this._keysDown[n]){this._keysDown[n]=false}};h._trackKeyDown=function(n){if(!this._keysDown[n]){this._keysDown[n]=true
}};c.exports=a},{"@marcom/ac-dom-events/utils/addEventListener":38,"@marcom/ac-dom-events/utils/removeEventListener":40,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-keyboard/internal/KeyEvent":233,"@marcom/ac-object/create":371}],232:[function(c,d,b){var a=c("./Keyboard");
d.exports=new a()},{"./Keyboard":231}],233:[function(c,d,b){var a=["keyLocation"];
function f(g){this.originalEvent=g;var h;for(h in g){if(a.indexOf(h)===-1&&typeof g[h]!=="function"){this[h]=g[h]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};d.exports=f},{}],234:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],235:[function(b,c,a){arguments[4][133][0].apply(a,arguments)},{"./ac-page-visibility/PageVisibilityManager":236,dup:133}],236:[function(b,c,a){arguments[4][134][0].apply(a,arguments)
},{"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object/create":371,dup:134}],237:[function(b,c,a){arguments[4][1][0].apply(a,arguments)
},{"./ac-browser/BrowserData":238,"./ac-browser/IE":239,dup:1}],238:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{"./data":240,"@marcom/ac-polyfills/Array/prototype.filter":395,"@marcom/ac-polyfills/Array/prototype.some":403,dup:2}],239:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{dup:3}],240:[function(b,c,a){arguments[4][4][0].apply(a,arguments)},{dup:4}],241:[function(b,c,a){c.exports={PointerTracker:b("./ac-pointer-tracker/PointerTracker")}
},{"./ac-pointer-tracker/PointerTracker":242}],242:[function(b,a,f){var n=b("@marcom/ac-browser");
var l=b("@marcom/ac-dom-events");var k=b("@marcom/ac-dom-styles");var h=b("@marcom/ac-object/create");
var c=n.os==="Android"||(n.name==="IE"&&n.version<=8);var j=b("@marcom/ac-feature/touchAvailable")();
var m=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;function d(p,q,o){this._el=p;
o=o||{};this._lockVertical=o.lockVertical!==false;this._swipeThreshold=o.swipeThreshold||d.DEFAULT_SWIPE_THRESHOLD;
this._pointerEvents=q||{};this._pointerEvents.down=this._pointerEvents.down||((j)?d.TOUCH_EVENTS.down:d.MOUSE_EVENTS.down);
this._pointerEvents.up=this._pointerEvents.up||((j)?d.TOUCH_EVENTS.up:d.MOUSE_EVENTS.up);
this._pointerEvents.out=this._pointerEvents.out||((j)?d.TOUCH_EVENTS.out:d.MOUSE_EVENTS.out);
this._pointerEvents.move=this._pointerEvents.move||((j)?d.TOUCH_EVENTS.move:d.MOUSE_EVENTS.move);
this._onMouseDown=this._onMouseDown.bind(this);this._onMouseUp=this._onMouseUp.bind(this);
this._onMouseOut=this._onMouseOut.bind(this);this._onMouseMove=this._onMouseMove.bind(this);
m.call(this);l.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle("grab")}d.START="start";d.END="end";d.UPDATE="update";d.SWIPE_RIGHT="swiperight";
d.SWIPE_LEFT="swipeleft";d.DEFAULT_SWIPE_THRESHOLD=(c)?2:8;d.TOUCH_EVENTS={down:"touchstart",up:"touchend",out:"mouseout",move:"touchmove"};
d.MOUSE_EVENTS={down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove"};
var i=m.prototype;var g=d.prototype=h(i);g.destroy=function(){if(this._isDragging){this._onMouseUp()
}l.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);this._setCursorStyle(null);
this._el=null;this._pointerEvents=null;this._lockVertical=null;this._swipeThreshold=null;
this._checkForTouchScrollY=null;this._isDragging=null;this._currentX=null;this._currentY=null;
this._velocityX=null;this._velocityY=null;this._lastX=null;this._lastY=null;return i.destroy.call(this)
};g._onMouseDown=function(o){if(this._isDragging){return}this._isDragging=true;
this._setCursorStyle("grabbing");l.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
l.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);l.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
l.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=this._lockVertical&&!!(o.touches&&o.touches[0]);
if(this._checkForTouchScrollY){this._lastY=this._getTouchY(o)}var p=this._storeAndGetValues(o);
this._velocityX=p.diffX=0;this._velocityY=p.diffY=0;this.trigger(d.START,p)};g._onMouseUp=function(o){if(!this._isDragging){return
}this._isDragging=false;this._setCursorStyle("grab");l.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
l.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);l.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
l.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
var q;if(this._checkForTouchScrollY){q=null}else{if(this._velocityX>this._swipeThreshold){q=d.SWIPE_LEFT
}else{if((this._velocityX*-1)>this._swipeThreshold){q=d.SWIPE_RIGHT}}}var p=this._storeAndGetValues(o);
p.swipe=q;this.trigger(d.END,p);if(q){this.trigger(q,p)}};g._onMouseOut=function(o){o=(o)?o:window.event;
var p=o.relatedTarget||o.toElement;if(!p||p.nodeName==="HTML"){this._onMouseUp(o)
}};g._onMouseMove=function(o){if(this._checkForTouchScrollY&&this._isVerticalTouchMove(o)){this._onMouseUp(o);
return}l.preventDefault(o);this.trigger(d.UPDATE,this._storeAndGetValues(o))};g._storeAndGetValues=function(o){if(o===undefined){return{}
}this._currentX=this._getPointerX(o);this._currentY=this._getPointerY(o);this._velocityX=this._lastX-this._currentX;
this._velocityY=this._lastY-this._currentY;var p={x:this._currentX,y:this._currentY,lastX:this._lastX,lastY:this._lastY,diffX:this._velocityX,diffY:this._velocityY,interactionEvent:o};
this._lastX=this._currentX;this._lastY=this._currentY;return p};g._getPointerX=function(o){if(o.pageX){return o.pageX
}else{if(o.touches&&o.touches[0]){return o.touches[0].pageX}else{if(o.clientX){return o.clientX
}}}return 0};g._getPointerY=function(o){if(o.pageY){return o.pageY}else{if(o.touches&&o.touches[0]){return o.touches[0].pageY
}else{if(o.clientY){return o.clientY}}}return 0};g._getTouchX=function(o){if(o.touches&&o.touches[0]){return o.touches[0].pageX
}return 0};g._getTouchY=function(o){if(o.touches&&o.touches[0]){return o.touches[0].pageY
}return 0};g._isVerticalTouchMove=function(p){var o=this._getTouchX(p);var s=this._getTouchY(p);
var r=Math.abs(o-this._lastX);var q=Math.abs(s-this._lastY);this._checkForTouchScrollY=(r<q);
return this._checkForTouchScrollY};g._setCursorStyle=function(o){k.setStyle(this._el,{cursor:o})
};a.exports=d},{"@marcom/ac-browser":237,"@marcom/ac-dom-events":26,"@marcom/ac-dom-styles":54,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-feature/touchAvailable":228,"@marcom/ac-object/create":371}],243:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
var a=d("@marcom/ac-feature/cssPropertyAvailable");f.exports=function g(i,l,k,j,h){if(a("opacity")){h=h||{};
if(j){h.propsFrom=h.propsFrom||{};h.propsFrom.opacity=l;return c.to(i,j,{opacity:k},h)
}else{i.style.opacity=k;if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}}else{i.style.visibility=(k)?"visible":"hidden";if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}},{"@marcom/ac-eclipse":135,"@marcom/ac-feature/cssPropertyAvailable":213}],244:[function(f,g,c){var d=f("@marcom/ac-eclipse").Clip;
var b=f("@marcom/ac-feature/cssPropertyAvailable");g.exports=function a(i,j,h){h=h||{};
if(b("opacity")){if(j){return d.to(i,j,{opacity:1},h)}else{i.style.opacity=1;if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}else{i.style.visibility="visible";
if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}}},{"@marcom/ac-eclipse":135,"@marcom/ac-feature/cssPropertyAvailable":213}],245:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
var a=d("@marcom/ac-feature/cssPropertyAvailable");f.exports=function g(i,j,h){h=h||{};
if(a("opacity")){if(j){return c.to(i,j,{opacity:0},h)}else{i.style.opacity=0;if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}else{i.style.visibility="hidden";
if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}}},{"@marcom/ac-eclipse":135,"@marcom/ac-feature/cssPropertyAvailable":213}],246:[function(f,g,c){var d=f("@marcom/ac-eclipse").Clip;
var h=f("@marcom/ac-dom-styles");var b=f("@marcom/ac-feature/cssPropertyAvailable");
g.exports=function a(k,i,n,l,j){j=j||{};var m;if(b("transition")){m={transform:{translateX:i+"px",translateY:n+"px"}}
}else{m={left:i+"px",top:n+"px"}}if(l){return d.to(k,l,m,j)}else{h.setStyle(k,m);
if(typeof j.onStart==="function"){j.onStart()}if(typeof j.onComplete==="function"){j.onComplete()
}}}},{"@marcom/ac-dom-styles":54,"@marcom/ac-eclipse":135,"@marcom/ac-feature/cssPropertyAvailable":213}],247:[function(d,f,c){var b=d("@marcom/ac-feature/cssPropertyAvailable");
var a=d("./move");f.exports=function g(j,h,k,i){return a(j,h,0,k,i)}},{"./move":246,"@marcom/ac-feature/cssPropertyAvailable":213}],248:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
f.exports=function a(g,o,k,i,r){r=r||{};var h=g===window;var q;var n;if(h){q=g.scrollX;
n=g.scrollY}else{q=g.scrollLeft;n=g.scrollTop}var m={x:q,y:n};var p={x:o,y:k};if(typeof r.onDraw==="function"){var l=r.onDraw
}var j=function(s){if(h){g.scrollTo(m.x,m.y)}else{g.scrollLeft=m.x;g.scrollTop=m.y
}if(l){l.call(this,s)}};r.onDraw=j;return c.to(m,i,p,r)}},{"@marcom/ac-eclipse":135}],249:[function(c,d,b){var a=c("./scroll");
d.exports=function f(k,g,l,j){var i=k===window;var h;if(i){h=k.scrollY}else{h=k.scrollTop
}return a(k,g,h,l,j)}},{"./scroll":248}],250:[function(d,a,g){var h=d("./ac-gallery/helpers/extendProto");
var j=d("./ac-gallery/Gallery");var b=d("./ac-gallery/auto/AutoGallery");var i=d("./ac-gallery/fade/FadeGallery");
var l=d("./ac-gallery/fade/FadeItem");var c=d("./ac-gallery/slide/SlideGallery");
var k=d("./ac-gallery/slide/SlideItem");var f=d("./ac-gallery/Item");j.create=d("./ac-gallery/factories/create");
j.autoCreate=d("./ac-gallery/factories/autoCreate");j.extend=h;b.extend=h;i.extend=h;
l.extend=h;c.extend=h;k.extend=h;f.extend=h;a.exports={Gallery:j,AutoGallery:b,FadeGallery:i,FadeGalleryItem:l,SlideGallery:c,SlideGalleryItem:k,Item:f,ToggleNav:d("./ac-gallery/navigation/ToggleNav")}
},{"./ac-gallery/Gallery":251,"./ac-gallery/Item":252,"./ac-gallery/auto/AutoGallery":254,"./ac-gallery/factories/autoCreate":255,"./ac-gallery/factories/create":256,"./ac-gallery/fade/FadeGallery":257,"./ac-gallery/fade/FadeItem":258,"./ac-gallery/helpers/extendProto":259,"./ac-gallery/navigation/ToggleNav":264,"./ac-gallery/slide/SlideGallery":266,"./ac-gallery/slide/SlideItem":267}],251:[function(b,a,f){var d=b("@marcom/ac-classlist");
var j=b("./singletons/analyticsManager");var h=b("@marcom/ac-object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var c=b("./Item");function i(m){m=m||{};this._wrapAround=m.wrapAround||false;this._itemType=m.itemType||c;
this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
l.call(this);i._add(this,m.analyticsOptions)}i.FADE="fade";i.FADE_SELECTOR="[data-ac-gallery-fade]";
i.SLIDE="slide";i.SLIDE_SELECTOR="[data-ac-gallery-slide]";i.UPDATE="update";i.UPDATE_COMPLETE="update:complete";
var k=l.prototype;var g=i.prototype=h(k);g.addItem=function(n,m){if(n.nodeType){n=new this._itemType(n)
}else{if(this._items.indexOf(n)>-1){return n}}if(typeof m==="number"){this._items.splice(m,0,n)
}else{this._items.push(n)}if(this._items.length===1){n.show();this._setCurrentItem(n)
}else{n.hide();if(this.getNextItem()===n){this._setNextItem(n)}if(this.getPreviousItem()===n){this._setPreviousItem(n)
}}if(n.getElementId()!==null){this._itemsIdLookup[n.getElementId()]=n}n.on(c.SELECTED,this._update);
return n};g.removeItem=function(q,p){p=p||{};if(typeof q==="number"){q=this._items[q]
}var o=this._items.indexOf(q);if(o>-1){var m=this.getNextItem();var n=this.getPreviousItem();
this._items.splice(o,1);q.off(c.SELECTED,this._update);if(m===q){this._setNextItem(this.getNextItem())
}if(n===q){this._setPreviousItem(this.getPreviousItem())}}if(q===this._currentItem&&this._items.length&&p.setCurrentItem!==false){this._update({item:this._items[0]});
this._setLastItem(null)}if(p.destroyItem&&q.getElement()){q.destroy()}return q};
g.show=function(n,m){if(typeof n==="number"){n=this._items[n]}else{if(typeof n==="string"){n=this._itemsIdLookup[n]
}}if(n){m=m||{};this._update({item:n,interactionEvent:m.interactionEvent})}return n||null
};g.showNext=function(m){var n=this.getNextItem();if(n){this.show(n,m)}return n
};g.showPrevious=function(m){var n=this.getPreviousItem();if(n){this.show(n,m)}return n
};g.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
g.getTotalItems=function(){return this._items.length};g.getItems=function(){return this._items
};g.getItem=function(m){if(typeof m==="number"){return this.getItemAt(m)}else{if(typeof m==="string"){return this.getItemById(m)
}}};g.getItemAt=function(m){return this._items[m]||null};g.getItemById=function(m){return this._itemsIdLookup[m]||null
};g.getItemIndex=function(m){return this._items.indexOf(m)};g.getCurrentItem=function(){return this._currentItem||null
};g.getLastItem=function(){return this._lastItem||null};g.getNextItem=function(){var n;
var m=this._items.indexOf(this._currentItem);if(m<this._items.length-1){n=this._items[m+1]
}else{if(this._wrapAround){n=this._items[0]}}return n||null};g.getPreviousItem=function(){var n;
var m=this._items.indexOf(this._currentItem);if(m>0){n=this._items[m-1]}else{if(this._wrapAround){n=this._items[this._items.length-1]
}}return n||null};g.getId=function(){return this._id};g.destroy=function(m){m=m||{};
if(m.destroyItems===undefined){m.destroyItems=true}this._setCurrentItem(null);if(m.destroyItems){var n;
while(this._items.length){n=this._items[0];n.off(c.SELECTED,this._update);this.removeItem(n,{destroyItem:true,setCurrentItem:false})
}}this._items=null;this._itemsIdLookup=null;i._remove(this);return k.destroy.call(this)
};g._setCurrentItem=function(m){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==m){d.remove(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
this._setLastItem(this._currentItem)}this._currentItem=m;if(this._currentItem&&this._currentItem.getElement()){d.add(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
}};g._setLastItem=function(m){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==m){d.remove(this._lastItem.getElement(),c.CSS_LAST_ITEM)
}this._lastItem=m;if(this._lastItem&&this._lastItem.getElement()){d.add(this._lastItem.getElement(),c.CSS_LAST_ITEM)
}};g._setNextItem=function(m){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==m){d.remove(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
}this._nextItem=m;if(this._nextItem&&this._nextItem.getElement()){d.add(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
}};g._setPreviousItem=function(m){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==m){d.remove(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
}this._previousItem=m;if(this._previousItem&&this._previousItem.getElement()){d.add(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
}};g._updateItems=function(n,m){if(n.outgoing[0]){n.outgoing[0].hide()}n.incoming[0].show();
if(!m){this.trigger(i.UPDATE_COMPLETE,n)}};g._update=function(m){var o=this._currentItem!==m.item;
if(o){this._setCurrentItem(m.item)}var n={incoming:[m.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:m.interactionEvent||null};
if(o){this.trigger(i.UPDATE,n)}this._updateItems(n,!o)};i._instantiate=function(){this._galleries=[];
this._idCounter=0;return this};i._add=function(n,m){this._galleries.push(n);n._id=++this._idCounter;
j.add(n,m)};i._remove=function(m){var n=this._galleries.indexOf(m);if(n>-1){this._galleries.splice(n,1);
j.remove(m)}};i.getAll=function(){return Array.prototype.slice.call(this._galleries)
};i.getAllInView=function(){var n=[];var m=this._galleries.length;while(m--){if(this._galleries[m].isInView()){n.push(this._galleries[m])
}}return n};i.destroyAll=function(){var m=this._galleries.length;while(m--){this._galleries[m].destroy()
}this._galleries=[]};a.exports=i._instantiate()},{"./Item":252,"./singletons/analyticsManager":265,"@marcom/ac-classlist":12,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object/create":371}],252:[function(g,f,j){var i=g("@marcom/ac-classlist");
var o=g("@marcom/ac-dom-events");var c=g("@marcom/ac-dom-metrics");var a=g("@marcom/ac-dom-traversal");
var l=g("@marcom/ac-object/create");var d=g("./helpers/focusableSelectors");var n=g("@marcom/ac-keyboard/keyMap");
var p=g("@marcom/ac-event-emitter-micro").EventEmitterMicro;var b=g("@marcom/ac-keyboard");
var m="current";function h(q){this._el=q;this._triggerKeys=[];this._triggerEls={};
this._isShown=false;this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
this._onTriggered=this._onTriggered.bind(this);this._el.setAttribute("role","tabpanel");
this._focusableEls=a.querySelectorAll(d,q);p.call(this)}h.CSS_CURRENT_ITEM="ac-gallery-currentitem";
h.CSS_LAST_ITEM="ac-gallery-lastitem";h.CSS_NEXT_ITEM="ac-gallery-nextitem";h.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
h.SELECTED="selected";h.SHOW="show";h.HIDE="hide";var k=h.prototype=l(p.prototype);
k.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this.trigger(h.SHOW,this)};k.hide=function(){this._isShown=false;
this._removeCurrentClassFromTriggers();this._setTabIndexOnFocusableItems("-1");
this._el.setAttribute("aria-hidden","true");this.trigger(h.HIDE,this)};k.addElementTrigger=function(s,r){r=r||"click";
if(this._triggerEls[r]===undefined){this._triggerEls[r]=[]}var q=this._triggerEls[r].indexOf(s);
if(q<0){s.setAttribute("role","tab");s.setAttribute("tabindex","0");var t=this.getElementId();
if(t){s.setAttribute("aria-controls",t)}t=s.getAttribute("id");if(t&&this._el.getAttribute("aria-labelledby")===null){this._el.setAttribute("aria-labelledby",t)
}o.addEventListener(s,r,this._onTriggered);this._triggerEls[r].push(s);if(this._isShown){s.setAttribute("aria-selected","true");
i.add(s,m)}else{s.setAttribute("aria-selected","false")}}};k.removeElementTrigger=function(s,r){r=r||"click";
if(this._triggerEls[r]===undefined){return}var q=this._triggerEls[r].indexOf(s);
if(q>-1){this._cleanElementTrigger(s,r)}if(this._triggerEls[r].length===0){this._triggerEls[r]=undefined
}};k.addKeyTrigger=function(r){if(typeof r==="string"){r=n[r.toUpperCase()]}if(typeof r==="number"){var q=this._triggerKeys.indexOf(r);
if(q<0){b.onDown(r,this._onKeyboardInteraction);this._triggerKeys.push(r)}}};k.removeKeyTrigger=function(r){if(typeof r==="string"){r=n[r.toUpperCase()]
}if(typeof r==="number"){var q=this._triggerKeys.indexOf(r);if(q>-1){b.offDown(r,this._onKeyboardInteraction);
this._triggerKeys.splice(q,1)}}};k.removeAllTriggers=function(){var r;var q=this._triggerKeys.length;
while(q--){r=this._triggerKeys[q];b.offDown(r,this._onKeyboardInteraction)}this._triggerKeys=[];
var t;var s;for(s in this._triggerEls){q=this._triggerEls[s].length;while(q--){t=this._triggerEls[s][q];
this._cleanElementTrigger(t,s)}}this._triggerEls={}};k.isInView=function(){if(this._el){return c.isInViewport(this._el)
}return false};k.percentageInView=function(){if(this._el){return c.getPercentInViewport(this._el)
}return 0};k.getElement=function(){return this._el};k.getElementId=function(){if(this._elId!==undefined){return this._elId
}this._elId=this._el.getAttribute("id")||null;return this._elId};k.destroy=function(){if(this._isShown){this._isShown=null;
i.remove(this._el,h.CSS_CURRENT_ITEM,h.CSS_LAST_ITEM,h.CSS_NEXT_ITEM,h.CSS_PREVIOUS_ITEM);
this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this._el.removeAttribute("role");this._el.removeAttribute("aria-labelledby");
this._triggerKeys=null;this._triggerEls=null;this._el=null};k._addCurrentClassToTriggers=function(){var s;
var r;var q;for(r in this._triggerEls){q=this._triggerEls[r].length;while(q--){s=this._triggerEls[r][q];
s.setAttribute("aria-selected","true");i.add(s,m)}}};k._removeCurrentClassFromTriggers=function(){var s;
var r;var q;for(r in this._triggerEls){q=this._triggerEls[r].length;while(q--){s=this._triggerEls[r][q];
s.setAttribute("aria-selected","false");i.remove(s,m)}}};k._cleanElementTrigger=function(r,q){r.removeAttribute("aria-selected");
r.removeAttribute("role");r.removeAttribute("tabindex");r.removeAttribute("aria-controls");
o.removeEventListener(r,q,this._onTriggered);if(this._isShown){i.remove(r,m)}};
k._onKeyboardInteraction=function(q){if(this.isInView()){this._onTriggered(q)}};
k._setTabIndexOnFocusableItems=function(r){var q=r===null;var s=this._focusableEls.length;
while(s--){if(q){this._focusableEls[s].removeAttribute("tabindex")}else{this._focusableEls[s].setAttribute("tabindex",r)
}}};k._onTriggered=function(q){o.preventDefault(q);this.trigger(h.SELECTED,{item:this,interactionEvent:q})
};f.exports=h},{"./helpers/focusableSelectors":260,"@marcom/ac-classlist":12,"@marcom/ac-dom-events":26,"@marcom/ac-dom-metrics":50,"@marcom/ac-dom-traversal":79,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-keyboard":232,"@marcom/ac-keyboard/keyMap":234,"@marcom/ac-object/create":371}],253:[function(b,d,a){var i;
try{i=b("ac-analytics").observer.Gallery}catch(h){}var g="data-analytics-gallery-id";
function c(){this._observers={}}var f=c.prototype;f.add=function(j,l){var m=j.getId();
if(!i||this._observers[m]){return}l=l||{};if(!l.galleryName){l.galleryName=this._getAnalyticsId(j,l.dataAttribute)||m
}if(!l.beforeUpdateEvent){l.beforeUpdateEvent="update"}if(!l.afterUpdateEvent){l.afterUpdateEvent="update:complete"
}var k=new i(j,l);if(k.gallery){this._observers[m]=k}};f.remove=function(j){var k=j.getId();
if(!i||!this._observers[k]){return}if(typeof this._observers[k].destroy==="function"){this._observers[k].destroy()
}this._observers[k]=null};f._getAnalyticsId=function(j,k){if(typeof j.getElement==="function"){k=k||g;
var l=j.getElement();return l.getAttribute(k)||l.getAttribute("id")}return null
};d.exports=c},{"ac-analytics":"ac-analytics"}],254:[function(l,b,D){l("@marcom/ac-polyfills/requestAnimationFrame");
var c=l("@marcom/ac-classlist");var i=l("@marcom/ac-dom-events");var s=l("@marcom/ac-dom-styles");
var k=l("@marcom/ac-dom-traversal");var n=l("@marcom/ac-object/create");var B=l("@marcom/ac-dom-metrics/getContentDimensions");
var t=l("@marcom/ac-keyboard/keyMap");var A=l("./../helpers/selectElementFromDataAttributeValue");
var m=l("./../helpers/selectElementThatHasDataAttribute");var h=l("@marcom/ac-function/throttle");
var j=l("@marcom/ac-feature/touchAvailable");var p=l("./../Gallery");var d=l("@marcom/ac-keyboard");
var v=l("@marcom/ac-page-visibility").PageVisibilityManager;var g=l("@marcom/ac-pointer-tracker").PointerTracker;
var r=l("./../navigation/ToggleNav");var x="disabled";var w=3;var f=0.5;var u="[data-ac-gallery-item]";
var z=0.12;var y=l("../templates/paddlenav.js");var C="No element supplied.";function o(H,G){G=G||{};
if(!H||H.nodeType===undefined){throw new Error(C)}this._el=H;p.call(this,G);this._itemHeights=[];
this._itemHeightsLookup={};this._toggleNavDuration=G.toggleNavDuration;this._isRightToLeft=(G.rightToLeft===undefined)?s.getStyle(H,"direction").direction==="rtl":G.rightToLeft;
this._keyboardThrottleDelay=((G.keyboardThrottleDelay===undefined)?z:G.keyboardThrottleDelay)*1000;
this._resizeContainer=!!G.resizeContainer;this._setUpContainerAutoResize(G.resizeContainerOnUpdate);
this._createToggleNav();this._addPaddleNav(G.addPaddleNav);this._addItems(G.itemSelector||u);
if(!this._wrapAround){this._updatePaddleNavState()}if(G.enableArrowKeys!==false){this._enableArrowKeys=true;
this._addKeyboardListener()}if(G.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
i.addEventListener(window,"resize",this._onWindowResize)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
if(G.autoPlay){var F=(typeof G.autoPlay==="number")?G.autoPlay:w;this.startAutoPlay(F)
}if(G.deeplink!==false){var I=this._getDeeplinkedItem();if(I&&I!==this._currentItem){this.show(I)
}}if(this._containerResizeDuration!==false){var E=this._itemHeightsLookup[this._currentItem.getElementId()];
if(E){this._setElHeight(E)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(G.touch&&j(),G.desktopSwipe)
}o.RESIZED="resized";o.UPDATE=p.UPDATE;o.UPDATE_COMPLETE=p.UPDATE_COMPLETE;var a=p.prototype;
var q=o.prototype=n(a);q.addItem=function(F,E){if(F.nodeType){F=new this._itemType(F)
}else{if(this._items.indexOf(F)>-1){return F}}if(this._resizeContainer){this._storeItemHeight(F,this._containerResizeDuration===false)
}this._addItemTriggers(F);return a.addItem.call(this,F,E)};q.removeItem=function(G,F){if(this._resizeContainer){var E=this._itemHeights.length;
while(E--){if(this._itemHeights[E].item===G){this._itemHeights.splice(E,1);if(E===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
}}}}return a.removeItem.call(this,G,F)};q.startAutoPlay=function(F,E){E=E||{};this._isAutoPlaying=true;
this._autoPlayDelay=(F||w)*1000;this._cancelAutoPlayOnInteraction=(E.cancelOnInteraction===undefined)?true:E.cancelOnInteraction;
setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(p.UPDATE,this.stopAutoPlay)
}};q.stopAutoPlay=function(){this._isAutoPlaying=false;if(this._cancelAutoPlayOnInteraction){this.off(p.UPDATE,this.stopAutoPlay)
}};q.getElement=function(){return this._el};q.getToggleNav=function(){return this._toggleNav||null
};q.resize=function(F,E){if(this._resizeContainer){this._itemHeights=[];var G=this._items.length;
while(G--){this._storeItemHeight(this._items[G],false)}if(this._containerResizeDuration!==false){this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
}else{this._setElHeight(this._itemHeights[0].height)}}if(this._toggleNav){this._toggleNav.resize()
}this.trigger(o.RESIZED,this)};q.destroy=function(F){if(this._isAutoPlaying){this.stopAutoPlay()
}if(this._resizeContainer){s.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){d.offDown(t.ARROW_RIGHT,this._rightArrowFunc);
d.offDown(t.ARROW_LEFT,this._leftArrowFunc)}var E;if(this._previousButtons){E=this._previousButtons.length;
while(E--){i.removeEventListener(this._previousButtons[E],"click",this._onPaddlePrevious)
}this._setPaddleDisabledState(this._previousButtons,false)}if(this._nextButtons){E=this._nextButtons.length;
while(E--){i.removeEventListener(this._nextButtons[E],"click",this._onPaddleNext)
}this._setPaddleDisabledState(this._nextButtons,false)}if(this._dynamicPaddleNav){this._el.removeChild(this._dynamicPaddleNav)
}if(this._hasPaddleNavStateHandler){this.off(p.UPDATE,this._updatePaddleNavState)
}if(this._touchSwipe){this._touchSwipe.off(g.END,this._onSwipeEnd);this._touchSwipe.destroy();
this._touchSwipe=null}if(this._clickSwipe){this._clickSwipe.off(g.END,this._onSwipeEnd);
this._clickSwipe.destroy();this._clickSwipe=null}if(this._toggleNav){this._toggleNav.destroy();
this._toggleNav=null}i.removeEventListener(window,"resize",this._onWindowResize);
this._el=null;this._itemHeights=null;this._itemHeightsLookup=null;this._resizeContainer=null;
this._isRightToLeft=null;this._enableArrowKeys=null;this._previousButtons=null;
this._onPaddlePrevious=null;this._nextButtons=null;this._onPaddleNext=null;return a.destroy.call(this,F)
};q._getDeeplinkedItem=function(){var G=window.location.hash.substr(1);var F;var E=this._items.length;
while(E--){F=this._items[E];if(G===F.getElementId()){return F}}return null};q._addItems=function(F){var J;
var E;var H=/(^\[).*(\]$)/.test(F);if(H){F=F.replace(/\[|\]/g,"");E=m(F,this._el)
}else{E=k.querySelectorAll(F,this._el)}var G=0;var I=E.length;for(G;G<I;G++){J=new this._itemType(E[G]);
this.addItem(J);this._addItemTriggers(J)}};q._createToggleNav=function(){var G=this._getElementId();
var E='[data-ac-gallery-togglenav="'+G+'"], [data-ac-gallery-tabnav="'+G+'"]';var F=k.querySelector(E);
if(F){this._toggleNav=new r(F,this,{duration:this._toggleNavDuration})}};q._addItemTriggers=function(I,E){var G=A("data-ac-gallery-trigger",I.getElementId());
if(E&&E.length){G=G.concat(E)}var F=0;var H=G.length;for(F;F<H;F++){I.addElementTrigger(G[F]);
if(this._toggleNav){this._toggleNav.addTrigger(G[F],I)}}};q._addPaddleNav=function(I){var G;
var K=this._getElementId();if(I){var H=(typeof I==="string")?I:y;H=H.replace(/%ID%/g,this._getElementId());
this._dynamicPaddleNav=document.createElement("div");this._dynamicPaddleNav.innerHTML=H;
this._el.insertBefore(this._dynamicPaddleNav,this._el.firstChild)}this._previousButtons=A("data-ac-gallery-previous-trigger",K);
this._nextButtons=A("data-ac-gallery-next-trigger",K);var E=this._el.getAttribute("aria-label")||"";
if(E.length){E="("+E+")"}this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
G=this._previousButtons.length;if(G){var J=this._el.getAttribute("data-ac-gallery-previouslabel");
if(J&&E.length){if(this._isRightToLeft){J=E+" "+J}else{J+=" "+E}}while(G--){if(J&&this._previousButtons[G].getAttribute("aria-label")===null){this._previousButtons[G].setAttribute("aria-label",J)
}i.addEventListener(this._previousButtons[G],"click",this._onPaddlePrevious)}}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);
G=this._nextButtons.length;if(G){var F=this._el.getAttribute("data-ac-gallery-nextlabel");
if(F&&E.length){if(this._isRightToLeft){F=E+" "+F}else{F+=" "+E}}while(G--){if(F&&this._nextButtons[G].getAttribute("aria-label")===null){this._nextButtons[G].setAttribute("aria-label",F)
}i.addEventListener(this._nextButtons[G],"click",this._onPaddleNext)}}if(!this._wrapAround&&(this._nextButtons.length||this._previousButtons.length)){this._hasPaddleNavStateHandler=true;
this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this.on(p.UPDATE,this._updatePaddleNavState)
}};q._onPaddleInteraction=function(F,E){i.preventDefault(E);F.call(null,{interactionEvent:E})
};q._updatePaddleNavState=function(){var E=this._items.indexOf(this._currentItem);
if(E===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
this._setPaddleDisabledState(this._nextButtons,false)}else{if(E===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}}};q._setPaddleDisabledState=function(G,E){var F=G.length;
while(F--){G[F].disabled=E;if(E){c.add(G[F],x)}else{c.remove(G[F],x)}}};q._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
var E;var F;if(this._isRightToLeft){E=this.showPrevious;F=this.showNext}else{E=this.showNext;
F=this.showPrevious}this._rightArrowFunc=h(this._onKeyboardInteraction.bind(null,E),this._keyboardThrottleDelay);
this._leftArrowFunc=h(this._onKeyboardInteraction.bind(null,F),this._keyboardThrottleDelay);
d.onDown(t.ARROW_RIGHT,this._rightArrowFunc);d.onDown(t.ARROW_LEFT,this._leftArrowFunc)
}};q._onKeyboardInteraction=function(G,F){if(this.isInView()){var E=p.getAllInView();
if(E.length>1){E.sort(function(I,H){I=(I._enableArrowKeys)?I.getCurrentItem().percentageInView():0;
H=(H._enableArrowKeys)?H.getCurrentItem().percentageInView():0;return H-I});if(this!==E[0]){return
}}G.call(null,{interactionEvent:F})}};q._setUpSwiping=function(F,E){this._onSwipeEnd=this._onSwipeEnd.bind(this);
if(F){this._touchSwipe=new g(this._el,g.TOUCH_EVENTS);this._touchSwipe.on(g.END,this._onSwipeEnd)
}if(E){this._clickSwipe=new g(this._el,g.MOUSE_EVENTS);this._clickSwipe.on(g.END,this._onSwipeEnd)
}};q._onSwipeEnd=function(E){var G;var F={interactionEvent:E.interactionEvent};
if(E.swipe===g.SWIPE_RIGHT){G=(this._isRightToLeft)?this.showNext:this.showPrevious
}else{if(E.swipe===g.SWIPE_LEFT){G=(this._isRightToLeft)?this.showPrevious:this.showNext
}}if(G){return G.call(this,F)}return null};q._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
}return this._elementId};q._setUpContainerAutoResize=function(E){if(typeof E==="number"){this._containerResizeDuration=E
}else{if(E){this._containerResizeDuration=f}else{this._containerResizeDuration=false
}}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
this.on(p.UPDATE,this._updateContainerSize)}};q._updateContainerSize=function(F){var E=this._itemHeightsLookup[F.incoming[0].getElementId()];
if(E){this._setElHeight(E,this._containerResizeDuration)}};q._storeItemHeight=function(F,G){var E=B(F.getElement());
this._itemHeights.push({item:F,height:E.height});this._itemHeightsLookup[F.getElementId()]=E.height;
this._itemHeights.sort(function(I,H){return H.height-I.height});if(G&&this._itemHeights[0].item===F){this._setElHeight(E.height)
}};q._setElHeight=function(E,G){var F={height:E+"px"};if(G){F.transition="height "+G+"s"
}else{F.transition=null}s.setStyle(this._el,F)};q._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!v.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(p.UPDATE,this.stopAutoPlay)
}var E=this.showNext();if(E!==null){if(this._cancelAutoPlayOnInteraction){this.on(p.UPDATE,this.stopAutoPlay)
}setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}};q._onWindowResize=function(E){window.requestAnimationFrame(function(){if(this._el){this.resize()
}}.bind(this))};b.exports=o},{"../templates/paddlenav.js":269,"./../Gallery":251,"./../helpers/selectElementFromDataAttributeValue":262,"./../helpers/selectElementThatHasDataAttribute":263,"./../navigation/ToggleNav":264,"@marcom/ac-classlist":12,"@marcom/ac-dom-events":26,"@marcom/ac-dom-metrics/getContentDimensions":41,"@marcom/ac-dom-styles":54,"@marcom/ac-dom-traversal":79,"@marcom/ac-feature/touchAvailable":228,"@marcom/ac-function/throttle":230,"@marcom/ac-keyboard":232,"@marcom/ac-keyboard/keyMap":234,"@marcom/ac-object/create":371,"@marcom/ac-page-visibility":235,"@marcom/ac-pointer-tracker":241,"@marcom/ac-polyfills/requestAnimationFrame":428}],255:[function(c,b,d){var h=c("./create");
var j=c("./../helpers/selectElementThatHasDataAttribute");var i=c("./../Gallery");
var a=i.FADE_SELECTOR.replace(/\[|\]/g,"");var g=i.SLIDE_SELECTOR.replace(/\[|\]/g,"");
b.exports=function f(l){l=l||{};var m=l.context||document.body;var n;var k;n=j(g,m);
k=n.length;while(k--){h(n[k],i.SLIDE,l)}n=j(a,m);k=n.length;while(k--){h(n[k],i.FADE,l)
}return i.getAll()}},{"./../Gallery":251,"./../helpers/selectElementThatHasDataAttribute":263,"./create":256}],256:[function(d,b,f){var i=d("./../fade/FadeGallery");
var k=d("./../Gallery");var c=d("./../slide/SlideGallery");var j="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
var a=k.FADE_SELECTOR.replace(/\[|\]/g,"");var h=k.SLIDE_SELECTOR.replace(/\[|\]/g,"");
b.exports=function g(o,n,m){var l;if(typeof n==="string"){if(n===k.SLIDE){l=c}else{if(n===k.FADE){l=i
}}}if(l===undefined){if(o.getAttribute(h)!==null){l=c}else{if(o.getAttribute(a)!==null){l=i
}}}if(l===undefined){throw new Error(j.replace(/%TYPE%/g,n))}return new l(o,m)}
},{"./../Gallery":251,"./../fade/FadeGallery":257,"./../slide/SlideGallery":266}],257:[function(c,a,f){var j=c("@marcom/ac-object/clone");
var h=c("@marcom/ac-object/create");var d=c("./FadeItem");var b=c("./../auto/AutoGallery");
var k=0.5;function i(n,m){m=j(m)||{};m.itemType=m.itemType||d;this._fadeDuration=m.duration||k;
m.toggleNavDuration=(m.toggleNavDuration===undefined)?this._fadeDuration:m.toggleNavDuration;
this._crossFade=m.crossFade;this._zIndexCount=m.startZIndex||1;this._ease=m.ease;
if(m.resizeContainerOnUpdate===true){m.resizeContainerOnUpdate=this._fadeDuration
}this._onItemShowComplete=this._onItemShowComplete.bind(this);b.call(this,n,m);
if(this._currentItem){this._currentItem.fadeIn(0)}}i.RESIZED=b.RESIZED;i.UPDATE=b.UPDATE;
i.UPDATE_COMPLETE=b.UPDATE_COMPLETE;var l=b.prototype;var g=i.prototype=h(l);g.addItem=function(o,m){if(o.nodeType){o=new this._itemType(o)
}var n=l.addItem.call(this,o,m);if(o!==this._currentItem){o.fadeOut()}else{o.fadeIn(0)
}return n};g.destroy=function(m){var n=l.destroy.call(this,m);this._fadeDuration=null;
this._crossFade=null;this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;
return n};g._onItemShowComplete=function(o){if(o&&o.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}return}var n;var m=this._items.length;while(m--){n=this._items[m];if(n!==this._currentItem){n.fadeOut()
}}if(this._incomingOutgoingItems){this.trigger(i.UPDATE_COMPLETE,this._incomingOutgoingItems)
}};g._updateItems=function(n,m){if(m){return}if(this._crossFade){var o=(m)?null:this.trigger.bind(this,i.UPDATE_COMPLETE,n);
n.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);n.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,o)
}else{this._incomingOutgoingItems=(m)?false:n;if(!n.outgoing[0].isFading()){n.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}}n.outgoing[0].hide();n.incoming[0].show()};a.exports=i},{"./../auto/AutoGallery":254,"./FadeItem":258,"@marcom/ac-object/clone":370,"@marcom/ac-object/create":371}],258:[function(b,a,g){var l=b("@marcom/ac-dom-styles");
var j=b("@marcom/ac-object/create");var f=b("@marcom/ac-solar/fade");var k=b("@marcom/ac-solar/fadeIn");
var i=b("@marcom/ac-solar/fadeOut");var d=b("./../Item");function c(n){d.call(this,n);
l.setStyle(n,{position:"absolute"})}c.SELECTED=d.SELECTED;c.SHOW=d.SHOW;c.HIDE=d.HIDE;
var m=d.prototype;var h=c.prototype=j(m);h.fadeIn=function(n,o,q,p){if(n){l.setStyle(this._el,{zIndex:q||1});
this._destroyCurrentClip();this._clip=f(this._el,0,1,n,{ease:o,onComplete:p})}else{k(this._el,0);
l.setStyle(this._el,{zIndex:q||1})}};h.fadeOut=function(n,o){if(n){this._destroyCurrentClip();
this._clip=i(this._el,n,{ease:o})}else{i(this._el,0)}};h.isFading=function(){return !!(this._clip&&this._clip.playing())
};h.destroy=function(){l.setStyle(this._el,{position:null,opacity:null,zIndex:null});
m.destroy.call(this);this._destroyCurrentClip();this._clip=null};h._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
}};a.exports=c},{"./../Item":252,"@marcom/ac-dom-styles":54,"@marcom/ac-object/create":371,"@marcom/ac-solar/fade":243,"@marcom/ac-solar/fadeIn":244,"@marcom/ac-solar/fadeOut":245}],259:[function(c,f,b){var d=c("@marcom/ac-object/create");
var g=c("@marcom/ac-object/extend");f.exports=function a(k){var i=this;var j=function(){i.apply(this,arguments)
};var h=d(this.prototype);j.prototype=g(h,k);g(j,this);return j}},{"@marcom/ac-object/create":371,"@marcom/ac-object/extend":373}],260:[function(b,c,a){var d=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","*[tabindex]","*[contenteditable]"].join(",");
c.exports=d},{}],261:[function(c,d,b){var g=c("@marcom/ac-dom-styles");var a=c("@marcom/ac-dom-metrics/getContentDimensions");
d.exports=function f(h){var i=g.getStyle(h,"margin-right","margin-left");return Math.round(a(h).width)+parseInt(i.marginRight,10)+parseInt(i.marginLeft,10)
}},{"@marcom/ac-dom-metrics/getContentDimensions":41,"@marcom/ac-dom-styles":54}],262:[function(c,f,b){var g=c("@marcom/ac-dom-traversal");
var a=function(i,n){var j;var m=document.getElementsByTagName("*");var h=0;var k=m.length;
var l=[];for(h;h<k;h++){j=m[h];if(j.getAttribute(i)!==null&&j.getAttribute(i).split(" ").indexOf(n)>-1){l[l.length]=j
}}return l};f.exports=function d(j,m){var l=g.querySelectorAll("["+j+'*="'+m+'"]');
if(l.length===0&&document.documentMode===7){return a(j,m)}var n=[];var i=0;var k=l.length;
var h;for(i;i<k;i++){h=l[i].getAttribute(j);if(h===m){n.push(l[i])}else{if(h&&h.length){h=h.split(" ");
if(h.indexOf(m)>-1){n.push(l[i])}}}}return n}},{"@marcom/ac-dom-traversal":79}],263:[function(c,d,b){var f=c("@marcom/ac-dom-traversal");
var a=function(i,j){var k;var n=document.getElementsByTagName("*");var h=0;var l=n.length;
var m=[];for(h;h<l;h++){k=n[h];if(k.getAttribute(i)!==null&&(!j||f.ancestors(k).indexOf(j)>-1)){m[m.length]=k
}}return m};d.exports=function g(h,i){i=i||document.body;var j=f.querySelectorAll("["+h+"]",i);
if(j.length===0&&document.documentMode===7){return a(h,i)}return j}},{"@marcom/ac-dom-traversal":79}],264:[function(f,c,g){var l=f("@marcom/ac-dom-events");
var b=f("@marcom/ac-dom-metrics");var k=f("@marcom/ac-dom-styles");var a=f("@marcom/ac-dom-traversal");
var i=f("@marcom/ac-object/create");var p=f("@marcom/ac-solar/scrollX");var o=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var m=f("./../Gallery");var j=0.5;function d(s,q,r){r=r||{};this._el=s;this._gallery=q;
this._triggers={};this._ordered=[];this._containerEl=this._el.children[0];this._slideDuration=(r.duration===undefined)?j:r.duration;
o.call(this)}var n=o.prototype;var h=d.prototype=i(n);h.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(m.UPDATE,this._onGalleryUpdated);
this.resize();l.addEventListener(window,"load",this._onWindowLoad)};h.addTrigger=function(r,s){if(this._triggers[s.getElementId()]!==undefined){return
}var q=a.ancestors(r);if(q.indexOf(this._el)>-1){var t={el:r};this._triggers[s.getElementId()]=t;
this._ordered.push(t)}};h.resize=function(){if(!this._ordered.length){return}k.setStyle(this._containerEl,{paddingLeft:null,paddingRight:null});
this._containerWidth=b.getDimensions(this._containerEl).width;this._width=b.getDimensions(this._el).width;
this._viewCenter=Math.round(this._width*0.5);var s=this._ordered.length;while(s--){this._setTriggerData(this._ordered[s])
}this._ordered.sort(function(x,w){return x.left-w.left});if(this._containerWidth>this._width){var u=this._ordered[0];
var t=this._ordered[this._ordered.length-1];var r=(this._width-u.width)*0.5;var v=(this._width-t.width)*0.5;
k.setStyle(this._containerEl,{paddingLeft:r+"px",paddingRight:v+"px"});var q=this._triggers[this._gallery.getCurrentItem().getElementId()];
if(q){this._centerNav(q)}}};h.destroy=function(){this._gallery.off(m.UPDATE,this._onGalleryUpdated);
l.removeEventListener(window,"load",this._onWindowLoad);k.setStyle(this._containerEl,{paddingLeft:null,paddingRight:null});
this._el=null;this._gallery=null;this._triggers=null;this._ordered=null;this._containerEl=null;
this._destroyCurrentClip();this._clip=null;return n.destroy.call(this)};h._onWindowLoad=function(){l.removeEventListener(window,"load",this._onWindowLoad);
this.resize()};h._setTriggerData=function(r){r.width=b.getDimensions(r.el).width;
var q=b.getPosition(r.el);r.left=q.left;r.right=q.right;r.center=r.left+(r.width*0.5)
};h._centerNav=function(q,s){this._setTriggerData(q);this._width=b.getDimensions(this._el).width;
this._viewCenter=Math.round(this._width*0.5);var r=Math.round(q.center-this._viewCenter);
this._destroyCurrentClip();if(s){this._clip=p(this._el,r,s)}else{this._el.scrollLeft=p
}};h._onGalleryUpdated=function(q){var r=this._triggers[q.incoming[0].getElementId()];
if(r){this._centerNav(r,this._slideDuration)}};h._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};c.exports=d},{"./../Gallery":251,"@marcom/ac-dom-events":26,"@marcom/ac-dom-metrics":50,"@marcom/ac-dom-styles":54,"@marcom/ac-dom-traversal":79,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object/create":371,"@marcom/ac-solar/scrollX":249}],265:[function(b,d,a){var c=b("./../analytics/AnalyticsManager");
d.exports=new c()},{"./../analytics/AnalyticsManager":253}],266:[function(h,c,v){var d=h("@marcom/ac-classlist");
var p=h("@marcom/ac-dom-styles");var g=h("@marcom/ac-dom-traversal");var s=h("@marcom/ac-object/clone");
var j=h("@marcom/ac-object/create");var u=h("./../helpers/getElementFullWidth");
var n=h("@marcom/ac-solar/moveX");var t=h("./../helpers/selectElementFromDataAttributeValue");
var i=h("./../helpers/selectElementThatHasDataAttribute");var m=h("./../auto/AutoGallery");
var f=h("@marcom/ac-pointer-tracker").PointerTracker;var r=h("./SlideItem");var k=h("./SlideItemWrapper");
var a=0.5;var l=0.5;function q(y,x){x=s(x)||{};x.itemType=x.itemType||r;this._itemsPerSlide=x.itemsPerSlide||1;
var w=x.deeplink!==false;x.deeplink=false;this._slideDuration=(x.duration!==undefined)?x.duration:l;
x.toggleNavDuration=(x.toggleNavDuration===undefined)?this._slideDuration:x.toggleNavDuration;
this._itemCenterPoint=(x.itemCenterPoint!==undefined)?x.itemCenterPoint:a;this._slideOptions={ease:x.ease};
if(x.resizeContainerOnUpdate===true){x.resizeContainerOnUpdate=this._slideDuration
}x.touch=x.touch!==false;m.call(this,y,x);if(w){var z=this._getDeeplinkedItem();
if(z){if(this._currentItem!==z){this._currentItem.hide();this._setCurrentItem(z);
this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);this._createContainer();
if(this._items.length!==0){this._positionItems()}}q.RESIZED=m.RESIZED;q.UPDATE=m.UPDATE;
q.UPDATE_COMPLETE=m.UPDATE_COMPLETE;var b=m.prototype;var o=q.prototype=j(b);o.addItem=function(y,w){if(y.nodeType){y=new this._itemType(y)
}var x=b.addItem.call(this,y,w);if(this._containerEl!==undefined){this._addItemToContainer(y);
this._positionItems()}return x};o.removeItem=function(z,x){if(this._containerEl&&z.getElement().parentElement===this._containerEl){var w=z.getOriginalParentElement();
if(w){w.appendChild(z.getElement())}else{if(typeof z.removeItems==="function"){z.removeItems();
x.destroyItem=true}}var y=b.removeItem.call(this,z,x);if(this._currentItem){this._positionItems(this._currentItem)
}return y}return b.removeItem.call(this,z,x)};o.resize=function(){this._positionItems();
this._snapToPosition(this._currentItem.position());return b.resize.call(this)};
o.destroy=function(x){this._destroyCurrentClip();this._clip=null;var w=this._items.length;
while(w--){this._items[w].off(r.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(f.START,this._onSwipeStart);
this._touchSwipe.off(f.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(f.START,this._onSwipeStart);
this._clickSwipe.off(f.UPDATE,this._onSwipeUpdate)}var z=this._el;var y=b.destroy.call(this,x);
z.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return y
};o._addItems=function(z){if(this._itemsPerSlide>1){var E;var y=/(^\[).*(\]$)/.test(z);
if(y){E=i(z.replace(/\[|\]/g,""),this._el)}else{E=g.querySelectorAll(z,this._el)
}var w;var D;var A;var B=0;var C=0;var x=E.length;for(C;C<x;C++){if(B===0){w=new k()
}w.addItem(E[C]);A=E[C].getAttribute("id");if(A){D=t("data-ac-gallery-trigger",A);
this._addItemTriggers(w,D)}if(++B===this._itemsPerSlide||C===x-1){B=0;w.resize();
this.addItem(w)}}}else{b._addItems.call(this,z)}};o._createContainer=function(){this._containerEl=document.createElement("div");
d.add(this._containerEl,"ac-gallery-slidecontainer");p.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
this._el.appendChild(this._containerEl);var w=0;var x=this._items.length;for(w;
w<x;w++){this._addItemToContainer(this._items[w])}};o._addItemToContainer=function(w){this._containerEl.appendChild(w.getElement());
w.on(r.CENTER_POINT_CHANGED,this._positionItems)};o._positionItems=function(A){A=A||this._currentItem;
var E=this._items;if(this._wrapAround){E=this._shuffleItems()}var G=(this._getActualPositionX()-A.position())||0;
var F=parseInt(p.getStyle(this._el,"width").width,10);var x=0;var C=0;var z=E.length;
var H;var y;var w;var B;var D;for(C;C<z;C++){H=E[C];H.resize();y=H.getElement();
p.setStyle(y,{left:x+"px"});w=u(y);B=F-w;D=(H.centerPoint&&H.centerPoint()!==null)?H.centerPoint():this._itemCenterPoint;
H.position((x*-1)+(B*D));if(this._isRightToLeft){x-=w}else{x+=w}}x=A.position()+G;
this._snapToPosition(x)};o._getActualPositionX=function(){var x=p.getStyle(this._containerEl,"transform").transform;
if(!x||x==="none"){var y=p.getStyle(this._containerEl,"left").left;return parseInt(y,10)
}else{if(x===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
}}this._transformStyles=x;var w=this._transformStyles.split(",");this._actualPositionX=w[4]||this._currentItem.position();
return this._actualPositionX*1};o._snapToPosition=function(w){this._destroyCurrentClip();
this._positionX=w;p.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
n(this._containerEl,w,0,this._slideOptions)};o._slideToPosition=function(w,x,y){this._positionX=w;
this._clip=n(this._containerEl,w,x,{ease:this._slideOptions.ease,onComplete:y})
};o._setUpSwiping=function(x,w){var y=b._setUpSwiping.call(this,x,w);this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(f.START,this._onSwipeStart);
this._touchSwipe.on(f.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(f.START,this._onSwipeStart);
this._clickSwipe.on(f.UPDATE,this._onSwipeUpdate)}return y};o._onSwipeStart=function(w){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
this._positionX=this._getActualPositionX()}};o._onSwipeUpdate=function(w){this._destroyCurrentClip();
this._snapToPosition(this._positionX-w.diffX)};o._onSwipeEnd=function(w){var x=b._onSwipeEnd.call(this,w);
if(x===null){x=this.show(this._currentItem,{interactionEvent:w.interactionEvent})
}return x};o._shuffleItems=function(){var C=this._items.length;var x=this._items.indexOf(this._currentItem);
var B=Math.floor(C*0.5);var z;var w;var y;if(x<B){z=B-x;var A=C-z;w=this._items.slice(A);
y=this._items.slice(0,A);return w.concat(y)}else{if(x>B){z=x-B;w=this._items.slice(0,z);
y=this._items.slice(z);return y.concat(w)}}return this._items};o._updateItems=function(x,w){this._destroyCurrentClip();
if(this._wrapAround){this._positionItems(x.outgoing[0])}if(this.getItemIndex(x.outgoing[0])>-1){var z=(w)?null:this.trigger.bind(this,q.UPDATE_COMPLETE,x);
var y=this._slideDuration;this._slideToPosition(x.incoming[0].position(),y,z);if(x.incoming[0]!==x.outgoing[0]){x.incoming[0].show();
x.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
x.incoming[0].show();if(!w){this.trigger(q.UPDATE_COMPLETE,x)}}};o._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};c.exports=q},{"./../auto/AutoGallery":254,"./../helpers/getElementFullWidth":261,"./../helpers/selectElementFromDataAttributeValue":262,"./../helpers/selectElementThatHasDataAttribute":263,"./SlideItem":267,"./SlideItemWrapper":268,"@marcom/ac-classlist":12,"@marcom/ac-dom-styles":54,"@marcom/ac-dom-traversal":79,"@marcom/ac-object/clone":370,"@marcom/ac-object/create":371,"@marcom/ac-pointer-tracker":241,"@marcom/ac-solar/moveX":247}],267:[function(b,a,d){var h=b("@marcom/ac-dom-styles");
var g=b("@marcom/ac-object/create");var c=b("./../Item");function i(k){c.call(this,k);
h.setStyle(k,{position:"absolute",transform:{translateZ:0}});this._parentElement=k.parentElement
}i.CENTER_POINT_CHANGED="centerpointchanged";i.SELECTED=c.SELECTED;i.SHOW=c.SHOW;
i.HIDE=c.HIDE;var j=c.prototype;var f=i.prototype=g(j);f.position=function(k){if(k!==undefined){this._position=k
}return this._position||0};f.centerPoint=function(k){if(k!==undefined){this._centerPoint=k;
this.trigger(i.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
};f.getOriginalParentElement=function(){return this._parentElement};f.resize=function(){};
f.destroy=function(){h.setStyle(this._el,{position:null,left:null,transform:null});
j.destroy.call(this)};a.exports=i},{"./../Item":252,"@marcom/ac-dom-styles":54,"@marcom/ac-object/create":371}],268:[function(h,f,i){var o=h("@marcom/ac-classlist");
var m=h("@marcom/ac-dom-styles");var a=h("@marcom/ac-dom-traversal");var k=h("@marcom/ac-object/create");
var d=h("./../helpers/focusableSelectors");var b=h("./../helpers/getElementFullWidth");
var l=h("./SlideItem");var c="ac-gallery-slideitemwrapper";function g(){l.call(this,document.createElement("div"));
this._items=[];this._currentWidth=0;o.add(this._el,c)}var n=l.prototype;var j=g.prototype=k(n);
j.addItem=function(r){this._items.push({el:r,parentElement:r.parentElement});this._el.appendChild(r);
var p=r.getAttribute("id");if(p){var s=this._el.getAttribute("id")||"";var q=(s.length)?"-":"";
s+=q+p;this._el.setAttribute("id",s)}this._focusableEls=this._focusableEls.concat(a.querySelectorAll(d,r))
};j.removeItems=function(){var r;var p;var q=0;var s=this._items.length;for(q;q<s;
q++){r=this._items[q].el;m.setStyle(r,{position:null,left:null});p=this._items[q].parentElement;
if(p){p.appendChild(r)}}};j.resize=function(){this._currentWidth=0;var q;var p=0;
var r=this._items.length;for(p;p<r;p++){q=this._items[p].el;m.setStyle(q,{position:"absolute",left:this._currentWidth+"px"});
this._currentWidth+=b(q)}m.setStyle(this._el,{width:this._currentWidth+"px"})};
j.destroy=function(){this.removeItems();this._items=null;this._currentWidth=null;
var p=this._el.parentElement;if(p){p.removeChild(this._el)}n.destroy.call(this)
};f.exports=g},{"./../helpers/focusableSelectors":260,"./../helpers/getElementFullWidth":261,"./SlideItem":267,"@marcom/ac-classlist":12,"@marcom/ac-dom-styles":54,"@marcom/ac-dom-traversal":79,"@marcom/ac-object/create":371}],269:[function(b,c,a){var d="";
d+='<nav class="paddlenav">';d+="<ul>";d+='<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
d+='<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
d+="</ul>";d+="</nav>";c.exports=d},{}],270:[function(c,b,f){var a=b.exports={};
var g=[];var k=false;var h;var i=-1;function j(){k=false;if(h.length){g=h.concat(g)
}else{i=-1}if(g.length){m()}}function m(){if(k){return}var o=setTimeout(j);k=true;
var n=g.length;while(n){h=g;g=[];while(++i<n){if(h){h[i].run()}}i=-1;n=g.length
}h=null;k=false;clearTimeout(o)}a.nextTick=function(n){var o=new Array(arguments.length-1);
if(arguments.length>1){for(var p=1;p<arguments.length;p++){o[p-1]=arguments[p]}}g.push(new d(n,o));
if(g.length===1&&!k){setTimeout(m,0)}};function d(n,o){this.fun=n;this.array=o}d.prototype.run=function(){this.fun.apply(null,this.array)
};a.title="browser";a.browser=true;a.env={};a.argv=[];a.version="";a.versions={};
function l(){}a.on=l;a.addListener=l;a.once=l;a.off=l;a.removeListener=l;a.removeAllListeners=l;
a.emit=l;a.binding=function(n){throw new Error("process.binding is not supported")
};a.cwd=function(){return"/"};a.chdir=function(n){throw new Error("process.chdir is not supported")
};a.umask=function(){return 0}},{}],271:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":272}],272:[function(c,b,f){var g;
var k=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;var d={create:c("@marcom/ac-object/create"),defaults:c("@marcom/ac-object/defaults"),extend:c("@marcom/ac-object/extend")};
var h=c("@marcom/ac-element-tracker").ElementTracker;var j={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var i={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(){h.call(this);k.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};g=a.prototype=d.create(h.prototype);g=d.extend(g,k.prototype);
g._decorateTrackedElement=function(m,l){var n;n=d.defaults(j,l||{});d.extend(m,n);
d.extend(m,i)};g._attachElementListeners=function(l){l.on("thresholdenter",this._thresholdEnter,this);
l.on("thresholdexit",this._thresholdExit,this);l.on("enterview",this._enterView,this);
l.on("exitview",this._exitView,this)};g._removeElementListeners=function(l){l.off("thresholdenter",this._thresholdEnter);
l.off("thresholdexit",this._thresholdExit);l.off("enterview",this._enterView);l.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(l){if(!l.stopOnEngaged){this._attachElementListeners(l)
}else{if(!l.engaged){this._attachElementListeners(l)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(l){this._removeElementListeners(l)
},this)};g._elementInViewPastThreshold=function(n){var l=window.innerHeight||document.documentElement.clientHeight;
var m=false;if(n.pixelsInView===l){m=true}else{m=(n.percentInView>n.inViewThreshold)
}return m};g._ifInView=function(l,n){var m=l.inThreshold;h.prototype._ifInView.apply(this,arguments);
if(!m&&this._elementInViewPastThreshold(l)){l.inThreshold=true;l.trigger("thresholdenter",l);
if(typeof l.timeToEngage==="number"&&l.timeToEngage>=0){l.engagedTimeout=window.setTimeout(this._engaged.bind(this,l),l.timeToEngage)
}}};g._ifAlreadyInView=function(l){var m=l.inThreshold;h.prototype._ifAlreadyInView.apply(this,arguments);
if(m&&!this._elementInViewPastThreshold(l)){l.inThreshold=false;l.trigger("thresholdexit",l);
if(l.engagedTimeout){window.clearTimeout(l.engagedTimeout);l.engagedTimeout=null
}}};g._engaged=function(l){l.engagedTimeout=null;this._elementEngaged(l);l.trigger("engaged",l);
this.trigger("engaged",l)};g._thresholdEnter=function(l){l.thresholdEnterTime=Date.now();
l.thresholdExitTime=0;this.trigger("thresholdenter",l)};g._thresholdExit=function(l){l.thresholdExitTime=Date.now();
this.trigger("thresholdexit",l)};g._enterView=function(l){this.trigger("enterview",l)
};g._exitView=function(l){this.trigger("exitview",l)};g._elementEngaged=function(l){l.engaged=true;
if(l.stopOnEngaged){this.stop(l)}};g.stop=function(l){if(this.tracking&&!l){this._removeAllElementListeners();
h.prototype.stop.call(this)}if(l&&l.tracking){l.tracking=false;this._removeElementListeners(l)
}};g.start=function(l){if(!l){this._attachAllElementListeners()}if(l&&!l.tracking){if(!l.stopOnEngaged){l.tracking=true;
this._attachElementListeners(l)}else{if(!l.engaged){l.tracking=true;this._attachElementListeners(l)
}}}if(!this.tracking){h.prototype.start.call(this)}else{this.refreshAllElementMetrics();
this.refreshAllElementStates()}};g.addElement=function(n,l){var m=h.prototype.addElement.call(this,n);
this._decorateTrackedElement(m,l);return m};g.addElements=function(m,l){[].forEach.call(m,function(n){this.addElement(n,l)
},this)};b.exports=a},{"@marcom/ac-element-tracker":189,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object/create":371,"@marcom/ac-object/defaults":372,"@marcom/ac-object/extend":373}],273:[function(b,c,a){c.exports={core:{BaseComponent:b("./core/BaseComponent"),BasePage:b("./core/BasePage"),BaseSection:b("./core/BaseSection"),LocalNavStyleChanger:b("./core/LocalNavStyleChanger")},model:{ComponentMap:b("./model/ComponentMap"),DataAttributes:b("./model/DataAttributes"),EnabledFeatures:b("./model/EnabledFeatures"),PageMap:b("./model/PageMap"),SectionMap:b("./model/SectionMap"),TransitionType:b("./model/TransitionType")}}
},{"./core/BaseComponent":274,"./core/BasePage":275,"./core/BaseSection":276,"./core/LocalNavStyleChanger":277,"./model/ComponentMap":278,"./model/DataAttributes":279,"./model/EnabledFeatures":280,"./model/PageMap":281,"./model/SectionMap":282,"./model/TransitionType":283}],274:[function(c,d,b){c("@marcom/ac-polyfills/Object/create");
c("@marcom/ac-polyfills/Element/prototype.classList");var g=c("@marcom/ac-event-emitter-micro").EventEmitterMicro,h=g.prototype;
function a(m,o,i,l,j,n,k){if(arguments.length!==7){throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
}g.call(this);this.section=m;this.element=o;this.componentName=i;this.index=k;this.rafWhenVisible=this.rafWhenVisible||false
}var f=a.prototype=Object.create(g.prototype);a.prototype.constructor=a;f.destroy=function(){this.teardownEvents();
this.section=null;h.destroy.call(this)};f.setupEvents=function(){};f.teardownEvents=function(){};
f.onSectionWillAppear=function(i,j){};f.activate=function(){};f.animateIn=function(){};
f.onRequestAnimationFrame=function(){};f.deactivate=function(){};f.onScroll=function(j,i,k){};
f.onSectionWillDisappear=function(i,j){};f.onResize=function(j,i,k){};f.onResizeWillBeCalledAfterDelay=function(j,i,k){};
f.onBreakpoint=function(j,l,i,k){};d.exports=a},{"@marcom/ac-event-emitter-micro":192,"@marcom/ac-polyfills/Element/prototype.classList":410,"@marcom/ac-polyfills/Object/create":416}],275:[function(g,f,j){g("@marcom/ac-polyfills/Element/prototype.classList");
g("@marcom/ac-polyfills/Object/assign");var k=g("@marcom/ac-dom-traversal/querySelector");
var d=g("@marcom/ac-dom-traversal/querySelectorAll");var m=g("@marcom/ac-dom-events/addEventListener");
var b=g("@marcom/ac-dom-events/removeEventListener");var c=g("@marcom/ac-element-tracker").ElementTracker;
var p=g("@marcom/ac-viewport-emitter");if(!p.viewport){throw new Error("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.")
}var o=g("./LocalNavStyleChanger");var n=g("./BaseSection");var a=g("../model/SectionMap");
var i=g("../model/DataAttributes");function h(){this.name=this.name||"[NOT SET]";
this._mainEl=k("main,.main");this._sections=[];this._visibleSections=[];this._elementTracker=new c(null,{autoStart:true});
this._currentSection=null;this._sectionUnderLocalNav=null;this._currentBreakpoint=p.viewport;
this._cachedScrollY=this._getScrollY(true);this._cachedWindowHeight=this._getWindowHeight(true);
this._rafId=-1;this._resizeTimeout=-1;this._resizeTimeoutDelay=this._resizeTimeoutDelay||250;
this.setupEvents();this.setupSections();this._updateSectionVisibility(this._getScrollY(),this._getWindowHeight());
this.setupLocalNavStyleChanger();this._updateLocalNavTheme(this._getScrollY(),this._getWindowHeight());
this._onRequestAnimationFrame()}var l=h.prototype;l.destroy=function(){for(var r=0,q=this._sections.length;
r<q;r++){this._sections[r].destroy()}this.teardownEvents();this._elementTracker.destroy();
this._elementTracker=null;this._sections=null;this._currentSection=null;this._sectionUnderLocalNav=null;
this._visibleSections=null;this._mainEl=null};l.setupEvents=function(){this._onScroll=this._onScroll.bind(this);
this._onResize=this._onResize.bind(this);this._onResizeWillBeCalledAfterDelay=this._onResizeWillBeCalledAfterDelay.bind(this);
this._onBreakpoint=this._onBreakpoint.bind(this);this._onPageDidAppear=this._onPageDidAppear.bind(this);
this._onPageWillDisappear=this._onPageWillDisappear.bind(this);this._onRequestAnimationFrame=this._onRequestAnimationFrame.bind(this);
m(window,"scroll",this._onScroll);m(window,"resize",this._onResizeWillBeCalledAfterDelay);
m(window,"orientationchange",this._onResize);p.on("change",this._onBreakpoint)};
l.teardownEvents=function(){b(window,"scroll",this._onScroll);b(window,"resize",this._onResizeWillBeCalledAfterDelay);
b(window,"orientationchange",this._onResize);p.off("change",this._onBreakpoint);
this._elementTracker.stop();clearTimeout(this._resizeTimeoutDelay);cancelAnimationFrame(this._rafId)
};l.setupSections=function(){var s=d("section,.section,[data-section-type]",this._mainEl);
var z=this._getScrollY();var r=this._getCurrentBreakpoint();var q=this._getVisibleBottomOfPage()-z;
var x=[];for(var u=0,w=s.length;u<w;u++){var v=s[u];if(v.parentNode!==this._mainEl){if(v.hasAttribute(i.SECTION_TYPE)){console.error("BasePage::setupSections FOUND NESTED data-section-type",v)
}x.push(v);continue}var y=this._elementTracker.addElement(v);this._elementTracker.refreshElementState(y);
var B=v.hasAttribute(i.SECTION_TYPE)?v.getAttribute(i.SECTION_TYPE):"BaseSection";
if(B===""){B="BaseSection"}if(!a.hasOwnProperty(B)){throw"BasePage::setupSections no section type '"+B+"'found!"
}var t=a[B];var A=new t(v,y,r,z,q,u);A.setupEvents();this._sections.push(A)}};l.setupLocalNavStyleChanger=function(){o.setCurrentSection(this._currentSection);
var q=this._mainEl.getAttribute("data-page-type");o.setCurrentPage(q)};l._activateSection=function(q){if(this._currentSection===q){return
}if(this._currentSection){this._currentSection.deactivate()}this._currentSection=q;
this._currentSection.activate()};l._updateSectionVisibility=function(y,q){var t=this._sections[0];
var r=[];var x=0;for(var s=0,v=this._sections.length;s<v;s++){var z=this._sections[s];
var w=z.trackedElement.pixelsInView;var u=(s===0&&z.trackedElement.top===0);if(u){w=q-y
}if(w>x){t=z;x=w}if(w>0.000001){r.push(z)}}for(s=0,v=Math.max(this._visibleSections.length,r.length);
s<v;s++){if(this._visibleSections[s]&&r.indexOf(this._visibleSections[s])===-1){this._visibleSections[s].onViewWillDisappear(y,q)
}if(r[s]&&this._visibleSections.indexOf(r[s])===-1){r[s].onViewWillAppear(y,q)}}this._visibleSections=r;
this._activateSection(t)};l._updateLocalNavTheme=function(r,t){this._sectionUnderLocalNav=this._visibleSections[0];
for(var s=0,q=this._visibleSections.length;s<q;s++){if(r+o.height>this._visibleSections[s].scrollToPosition){this._sectionUnderLocalNav=this._visibleSections[s]
}}if(this._sectionUnderLocalNav){o.setCurrentSection(this._sectionUnderLocalNav)
}};l._onPageDidAppear=function(q){};l._onPageWillDisappear=function(q){this.destroy()
};l._onBreakpoint=function(u){var q=u.to;var s=u.from;this._currentBreakpoint=q;
var r=this._getScrollY();var v=this._getWindowHeight();for(var t=0;t<this._sections.length;
t++){this._sections[t].onBreakpoint(q,s,r,v)}};l._onScroll=function(t){var r=this._getScrollY(true);
var u=this._getWindowHeight();this._updateSectionVisibility(r,u);this._updateLocalNavTheme(r,u);
for(var s=0,q=this._visibleSections.length;s<q;s++){this._visibleSections[s].onScroll(t,r,u)
}};l._onResize=function(t){var r=this._getScrollY();var u=this._getWindowHeight();
for(var s=0,q=this._sections.length;s<q;s++){this._sections[s].onResize(t,r,u)}this._updateSectionVisibility(r,u);
this._updateLocalNavTheme(r,u)};l._onResizeWillBeCalledAfterDelay=function(t){var r=this._getScrollY();
var u=this._getWindowHeight(true);for(var s=0,q=this._sections.length;s<q;s++){this._sections[s].onResizeWillBeCalledAfterDelay(t,r,u)
}window.clearTimeout(this._resizeTimeout);this._resizeTimeout=window.setTimeout(this._onResize.bind(this,t),this._resizeTimeoutDelay)
};l._onRequestAnimationFrame=function(){this._rafId=requestAnimationFrame(this._onRequestAnimationFrame);
for(var r=0,q=this._visibleSections.length;r<q;r++){var s=this._visibleSections[r];
if(s.rafWhenVisible||s.isActive){s.onRequestAnimationFrame()}}};l._getScrollY=function(q){if(q){this._cachedScrollY=window.pageYOffset||(document.documentElement||document.body).scrollTop
}return this._cachedScrollY};l._getWindowHeight=function(q){if(q){this._cachedWindowHeight=document.documentElement.clientHeight||window.innerHeight
}return this._cachedWindowHeight};l._getVisibleBottomOfPage=function(){return this._getScrollY()+this._getWindowHeight()
};l._getCurrentBreakpoint=function(){return this._currentBreakpoint};f.exports=h
},{"../model/DataAttributes":279,"../model/SectionMap":282,"./BaseSection":276,"./LocalNavStyleChanger":277,"@marcom/ac-dom-events/addEventListener":24,"@marcom/ac-dom-events/removeEventListener":33,"@marcom/ac-dom-traversal/querySelector":93,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-element-tracker":189,"@marcom/ac-polyfills/Element/prototype.classList":410,"@marcom/ac-polyfills/Object/assign":415,"@marcom/ac-viewport-emitter":619}],276:[function(d,c,g){d("@marcom/ac-polyfills/Object/create");
d("@marcom/ac-polyfills/Element/prototype.classList");var k=d("@marcom/ac-dom-metrics");
var a=d("@marcom/ac-element-engagement").ElementEngagement;var b=d("@marcom/ac-dom-traversal/querySelectorAll");
var f=d("./../model/DataAttributes");var h=d("./../model/ComponentMap");var l=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var m=l.prototype;function j(r,q,p,n,s,o){if(arguments.length!==6){throw new Error("Incorrect number of arguments passed to BaseSection")
}l.call(this);this.element=r;this.trackedElement=q;this.elementEngagement=new a(null,{autoStart:false});
this.rafWhenVisible=this.rafWhenVisible||false;this.index=o;this.hasAnimatedIn=false;
this.isActive=false;this.name=this.name||this.element.className;this.scrollToPosition=0;
this.updateScrollToPosition();this._components=[];this.setupComponents(p,n,s)}var i=j.prototype=Object.create(l.prototype);
j.prototype.constructor=j;i.destroy=function(){this.teardownEvents();this.elementEngagement.stop();
this.elementEngagement=null;for(var o=0,n=this._components.length;o<n;o++){this._components[o].destroy()
}this._components=null;this.trackedElement=null;this.element=null;m.destroy.call(this)
};i.setupEvents=function(){for(var o=0,n=this._components.length;o<n;o++){this._components[o].setupEvents()
}};i.teardownEvents=function(){for(var o=0,n=this._components.length;o<n;o++){this._components[o].teardownEvents()
}};i.setupComponents=function(s,A,n){var y=b("["+f.COMPONENT_LIST+"]",this.element);
if(this.element.hasAttribute(f.COMPONENT_LIST)){y.push(this.element)}for(var v=0;
v<y.length;v++){var t=y[v];var q=t.getAttribute(f.COMPONENT_LIST);if(q.indexOf("|")!==-1){throw"BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '"+q+"'"
}var o=q.split(" ");for(var u=0,w=o.length;u<w;u++){var r=o[u];if(r===""||r===" "){continue
}if(!h.hasOwnProperty(r)){throw"BaseSection::setupComponents parsing '#"+this.componentElement.id+" ."+this.componentElement.className+"' no component type '"+r+"'found!"
}var p=h[r];var x=o[u];var z=new p(this,t,x,s,A,n,v+u);this.rafWhenVisible=z.rafWhenVisible||this.rafWhenVisible;
this._components.push(z)}}};i.activate=function(){this.element.classList.add("active");
for(var o=0,n=this._components.length;o<n;o++){this._components[o].activate()}this.isActive=true;
if(!this.hasAnimatedIn){this.element.classList.add("animated");this.animateIn();
this.hasAnimatedIn=true}};i.deactivate=function(){this.element.classList.remove("active");
this.isActive=false;for(var o=0,n=this._components.length;o<n;o++){this._components[o].deactivate()
}};i.animateIn=function(){for(var o=0,n=this._components.length;o<n;o++){this._components[o].animateIn()
}};i.onRequestAnimationFrame=function(){for(var p=0,n=this._components.length;p<n;
p++){var o=this._components[p];if(o.rafWhenVisible||this.isActive){o.onRequestAnimationFrame()
}}};i.onResizeWillBeCalledAfterDelay=function(q,o,r){for(var p=0,n=this._components.length;
p<n;p++){this._components[p].onResizeWillBeCalledAfterDelay(q,o,r)}};i.onResize=function(q,o,r){this.updateScrollToPosition();
for(var p=0,n=this._components.length;p<n;p++){this._components[p].onResize(q,o,r)
}};i.onBreakpoint=function(p,s,o,r){for(var q=0,n=this._components.length;q<n;q++){this._components[q].onBreakpoint(p,s,o,r)
}};i.onScroll=function(q,o,r){this.elementEngagement.refreshAllElementStates();
for(var p=0,n=this._components.length;p<n;p++){this._components[p].onScroll(q,o,r)
}};i.onViewWillAppear=function(o,q){this.elementEngagement.refreshAllElementStates();
for(var p=0,n=this._components.length;p<n;p++){this._components[p].onSectionWillAppear(o,q)
}};i.onViewWillDisappear=function(o,q){for(var p=0,n=this._components.length;p<n;
p++){this._components[p].onSectionWillDisappear(o,q)}};i.getComponentOfType=function(o){if(!h.hasOwnProperty(o)){throw"BaseSection::getComponentOfType no component type '"+o+"' exist in ComponentMap!"
}for(var p=0,n=this._components.length;p<n;p++){if(this._components[p].componentName===o){return this._components[p]
}}return null};i.getAllComponentsOfType=function(o){if(!h.hasOwnProperty(o)){throw"BaseSection::getAllComponentsOfType no component type '"+o+"' exist in ComponentMap!"
}var q=[];for(var p=0,n=this._components.length;p<n;p++){if(this._components[p].componentName===o){q.push(this._components[p])
}}return q};i.updateScrollToPosition=function(){return this.scrollToPosition=k.getPagePosition(this.element).top
};c.exports=j},{"./../model/ComponentMap":278,"./../model/DataAttributes":279,"@marcom/ac-dom-metrics":50,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-element-engagement":271,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-polyfills/Element/prototype.classList":410,"@marcom/ac-polyfills/Object/create":416}],277:[function(b,c,a){b("@marcom/ac-polyfills/Element/prototype.classList");
var h=b("./../model/DataAttributes"),g=b("@marcom/ac-dom-traversal").querySelector;
var f=function(){this._currentTheme="";this._lastTheme="";this.defaultTheme="theme-light";
this._currentPageNavLink=null;this._section=null;this._localNav=null;this.height=0
};var d=f.prototype;d.initialize=function(k,i,j){this._localNav=k;this.sectionThemeKeys=i;
this.defaultTheme=j;this.height=this._localNav.clientHeight};d.setCurrentPage=function(i){var j=g(".localnav-link["+h.JUMP_SECTION_NAME+"="+i+"]");
if(j===this._currentPageNavLink){return}if(this._currentPageNavLink){this._currentPageNavLink.classList.remove("current")
}if(j){j.classList.add("current");this._currentPageNavLink=j}};d.setCurrentSection=function(m){if(this._localNav===null){return
}if(this._section&&this._section===m){return}this._section=m;for(var l=0,j=this._section.element.classList.length;
l<j;l++){var k=this._section.element.classList[l];if(this.sectionThemeKeys.hasOwnProperty(k)){this.setTheme(k);
return}}this.setTheme(this.defaultTheme)};d.setTheme=function(i){if(!this.sectionThemeKeys[i]||this._currentTheme===this.sectionThemeKeys[i]){return
}for(var j in this.sectionThemeKeys){if(j!==i){this._localNav.classList.remove(this.sectionThemeKeys[j])
}}this._localNav.classList.add(this.sectionThemeKeys[i]);this._currentTheme=this.sectionThemeKeys[i]
};d.removeThemes=function(){this._currentTheme=null;for(var i in this.sectionThemeKeys){this._localNav.classList.remove(this.sectionThemeKeys[i])
}};c.exports=new f()},{"./../model/DataAttributes":279,"@marcom/ac-dom-traversal":79,"@marcom/ac-polyfills/Element/prototype.classList":410}],278:[function(b,c,a){c.exports={BaseComponent:b("../core/BaseComponent")}
},{"../core/BaseComponent":274}],279:[function(b,c,a){c.exports={PAGE_TYPE:"data-page-type",SECTION_TYPE:"data-section-type",JUMP_SECTION_NAME:"data-page-jump-name",COMPONENT_LIST:"data-component-list"}
},{}],280:[function(c,d,b){var a={isDesktop:c("@marcom/ac-feature/isDesktop"),isRetina:c("@marcom/ac-feature/isRetina")};
var f=c("@marcom/ac-browser");d.exports={TOUCH:undefined,SVG:undefined,WEB_GL:undefined,VIDEO:undefined,INLINE_VIDEO:undefined,CANVAS:undefined,PAGE_JUMP:undefined,CSS_POSITION_STICKY:undefined,CSS_KEYFRAME_ANIMATION:undefined,CSS_FILTER:undefined,CSS_OBJECT_FIT:undefined,CSS_TRANSITION_2D:undefined,CSS_TRANSITION_3D:undefined,IS_DESKTOP:undefined,IS_RETINA:undefined,IS_IOS:undefined,init:function(){var g=document.getElementsByTagName("html")[0];
this.TOUCH=g.classList.contains("touch");this.SVG=g.classList.contains("svg");this.WEB_GL=g.classList.contains("webgl");
this.VIDEO=g.classList.contains("video");this.INLINE_VIDEO=g.classList.contains("inlineVideo");
this.CANVAS=g.classList.contains("canvas");this.PAGE_JUMP=g.classList.contains("pageJump");
this.CSS_POSITION_STICKY=g.classList.contains("cssPositionSticky");this.CSS_KEYFRAME_ANIMATION=g.classList.contains("cssKeyframeAnimation");
this.CSS_FILTER=g.classList.contains("cssFilter");this.CSS_OBJECT_FIT=g.classList.contains("cssObjectFit");
this.CSS_TRANSITION_2D=g.classList.contains("cssTransition2d");this.CSS_TRANSITION_3D=g.classList.contains("cssTransition3d");
this.IS_DESKTOP=a.isDesktop();this.IS_RETINA=a.isRetina();this.IS_IOS=f.os==="iOS"
},extend:function(i){if(!i.hasOwnProperty("init")||(typeof i.init!=="function")){throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
}var j=this.init;var h=i.init;var g=Object.assign(this,i);g.init=function(){j.call(g);
h.call(g)};return g}}},{"@marcom/ac-browser":1,"@marcom/ac-feature/isDesktop":218,"@marcom/ac-feature/isRetina":220}],281:[function(b,c,a){c.exports={BasePage:b("../core/BasePage")}
},{"../core/BasePage":275}],282:[function(b,c,a){c.exports={BaseSection:b("../core/BaseSection")}
},{"../core/BaseSection":276}],283:[function(b,c,a){c.exports={FROM_LOCAL_NAV:0}
},{}],284:[function(b,f,a){var d=b("./ac-ajax/Ajax");var c=b("./ac-ajax/Request");
f.exports=new d();f.exports.Ajax=d;f.exports.Request=c},{"./ac-ajax/Ajax":285,"./ac-ajax/Request":286}],285:[function(c,g,b){var f=c("./Request");
var h=c("./XDomain-request");var a=c("./URLParser");var d=function(){};d._Request=f;
d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},create:function(i){return new f(i)
},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},get:function(j){var i;j=this._getOptions({method:"get"},j);if(this._isCrossDomainRequest(j.url)){i=this.cors(j)
}else{i=this.create(j)}return i.send()},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},isCrossDomainRequest:function(i){return this._isCrossDomainRequest(i)},post:function(i){i=this._getOptions({method:"post"},i);
return this.create(i).send()}};g.exports=d},{"./Request":286,"./URLParser":287,"./XDomain-request":288}],286:[function(b,d,a){var c=function(f){this._initialize(f)
};c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()
};c.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(f){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(g,f){this.resolve=g;
this.reject=f}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(h){var g=this._validateConfiguration(h);if(g){throw g}this._configuration=h;
var f=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(f,this._configuration.url);this._setRequestHeaders(h.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(f){if(f){f.forEach(function(g){this.xhr.setRequestHeader(g.name,g.value)
},this)}},_setTimeout:function(f){if(!f){if(this._configuration&&this._configuration.timeout){f=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(f>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),f)
}},_timeout:null,_validateConfiguration:function(h){if(!h){return"Must provide a configuration object"
}var g=[];var f=h.headers;if(!h.url){g.push("Must provide a url")}if(!h.method){g.push("Must provide a method")
}if(f){if(!Array.isArray(f)){return"Must provide an array of headers"}this._validateHeaders(f,g)
}return g.join(", ")},_validateHeaders:function(h,j){for(var g=0,f=h.length;g<f;
g++){if(!h[g].hasOwnProperty("name")||!h[g].hasOwnProperty("value")){j.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],287:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],288:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":286}],289:[function(b,c,a){arguments[4][19][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":290,dup:19}],290:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{dup:20}],291:[function(b,c,a){(function(d,f){if(typeof a==="object"&&a){c.exports=f
}else{if(typeof define==="function"&&define.amd){define(f)}else{d.Deferred=f}}}(this,(function(){var g={};
var f,l,n,d,k,j,m,h;f={0:"pending",1:"resolved",2:"rejected"};l=function(r,t){var q,u,s,p,o;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=t;u=this.pending;s=u.length;for(q=0;q<s;q++){p=u[q];if(p[r]){o=p[r](t)
}if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(v){p.deferred.resolve(v)
},function(v){p.deferred.reject(v)},function(v){p.deferred.progress(v)})}else{p.deferred[r](o||undefined)
}}if(r!=="progress"){u=[]}return true};j=function(p,o){this.then=p;this.status=o
};m=j.prototype;h=function(o){return o};m.success=function(p,o){return this.then(p.bind(o),h,h)
};m.fail=function(p,o){return this.then(h,p.bind(o),h)};m.progress=function(p,o){return this.then(h,h,p.bind(o))
};d=function(o){if(typeof o!=="function"){return function(){}}return o};n=function(q,p,o){this.resolve=d(q);
this.reject=d(p);this.progress=d(o);this.deferred=new k()};k=function(){this.pending=[];
this._status=0;this._promise=new j(this.then.bind(this),this.status.bind(this))
};k.prototype={status:function(){return f[this._status]},promise:function(){return this._promise
},progress:function(o){l.call(this,"progress",o);return this._promise},resolve:function(o){l.call(this,"resolve",o);
if(this._status===0){this._status=1}return this._promise},reject:function(o){l.call(this,"reject",o);
if(this._status===0){this._status=2}return this._promise},then:function(s,q,p){var o,r;
r=new n(s,q,p);if(this._status===0){this.pending.push(r)}else{if(this._status===1&&typeof s==="function"){o=s(this.data);
if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(t){r.deferred.resolve(t)
},function(t){r.deferred.reject(t)},function(t){r.deferred.progress(t)})}else{r.deferred.resolve(o)
}}else{if(this._status===2&&typeof q==="function"){o=q(this.data);r.deferred.reject(o)
}}}return r.deferred.promise()}};var i=function(){var q,p,s,r,o;q=[].slice.call(arguments);
p=new k();s=0;r=function(u){s--;var t=q.indexOf(this);q[t]=u;if(s===0){p.resolve(q)
}};o=function(t){p.reject(t)};q.forEach(function(t){if(t.then){s++}});q.forEach(function(t){if(t.then){t.then(r.bind(t),o)
}});return p.promise()};k.when=i;g.Deferred=k;return g}())))},{}],292:[function(c,b,d){function g(){}g.prototype={resolve:function h(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function j(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function a(){var k="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(k);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function f(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function i(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};b.exports=g},{}],293:[function(c,d,a){var h=new (c("./ac-deferred/Deferred"))(),g=c("smartsign-deferred").Deferred;
function b(){this._defer=new g()}b.prototype=h;d.exports.join=function i(){return g.when.apply(null,[].slice.call(arguments))
};d.exports.all=function f(j){return g.when.apply(null,j)};d.exports.Deferred=b
},{"./ac-deferred/Deferred":292,"smartsign-deferred":291}],294:[function(b,c,a){b("@marcom/ac-polyfills");
c.exports.Asset=b("./ac-asset-loader/AssetLoader/Asset");c.exports.Asset.Ajax=b("./ac-asset-loader/AssetLoader/Asset/Ajax");
c.exports.Asset.Ajax.JSON=b("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");c.exports.Asset.Img=b("./ac-asset-loader/AssetLoader/Asset/Img");
c.exports.Asset.Video=b("./ac-asset-loader/AssetLoader/Asset/Video");c.exports.Asset.Binary=b("./ac-asset-loader/AssetLoader/Asset/Binary");
c.exports.Asset.Binary.Chunk=b("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
c.exports.AssetLoader=b("./ac-asset-loader/AssetLoader");c.exports.AssetLoader.Queue=b("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":295,"./ac-asset-loader/AssetLoader/Asset":296,"./ac-asset-loader/AssetLoader/Asset/Ajax":297,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":298,"./ac-asset-loader/AssetLoader/Asset/Binary":299,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":300,"./ac-asset-loader/AssetLoader/Asset/Img":301,"./ac-asset-loader/AssetLoader/Asset/Video":304,"./ac-asset-loader/AssetLoader/Queue":305,"@marcom/ac-polyfills":423}],295:[function(b,a,h){var j;
var g=b("@marcom/ac-object");var o=b("@marcom/ac-event-emitter").EventEmitter;var n=b("./AssetLoader/Asset/Ajax");
var f=b("./AssetLoader/Asset/Ajax/JSON");var i=b("./AssetLoader/Asset/Img");var m=b("./AssetLoader/Asset/Video");
var l=b("../utils/destroy");var c=b("./AssetLoader/Queue");var d={};function k(r,p){this.options=g.defaults(d,p||{});
var q=this._generateAssets(r);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(q,this.options)}j=k.prototype=new o();j.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};j._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};j.pause=function(){this._clearTimeout();return this._queue.pause()
};j.destroy=function(){l(this,true)};j.add=function(p){if(!Array.isArray(p)){p=[p]
}p=this._generateAssets(p);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new c(p,this.options);this._bindQueueListeners();return}this._queue.add(p)
};j._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};j._generateAssets=function(q){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}q=[].concat(q);var p=q.map(this._boundGenerateAsset);return p};j._generateAsset=function(q,p){if(k.isValidAsset(q)){q.index=p;
return q}if(typeof q!=="string"||q===""){return null}if(!!q.match(/\.json$/)){return new f(q,p)
}if(!!q.match(/\.(xml|txt)$/)){return new n(q,p)}return new i(q,p)};j._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};j._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};j._onResolved=function(p){this._clearTimeout();this.trigger("loaded",p)};j._onRejected=function(p){this.trigger("error",p)
};j._onProgress=function(p){this.trigger("progress",p)};k.isValidAsset=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.destroy==="function"))
};k.isValidAssetLoader=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.pause==="function")&&(typeof p.destroy==="function"))
};a.exports=k},{"../utils/destroy":306,"./AssetLoader/Asset/Ajax":297,"./AssetLoader/Asset/Ajax/JSON":298,"./AssetLoader/Asset/Img":301,"./AssetLoader/Asset/Video":304,"./AssetLoader/Queue":305,"@marcom/ac-event-emitter":289,"@marcom/ac-object":375}],296:[function(d,g,b){var i;
var c=d("ac-deferred").Deferred;var h=d("@marcom/ac-event-emitter").EventEmitter;
var f=d("../../utils/destroy");function a(k,j){this.src=k;this.index=j;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}i=a.prototype=new h();i.load=function(){this._load()};i.destroy=function(){f(this)
};i._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};i._onLoad=function(){this.trigger("loaded",this)};i._onError=function(){this.trigger("error",this.data)
};g.exports=a},{"../../utils/destroy":306,"@marcom/ac-event-emitter":289,"ac-deferred":293}],297:[function(d,g,b){var i;
var c=d("@marcom/ac-ajax");var a=d("@marcom/ac-object");var h=d("../Asset");function f(k,j){h.apply(this,arguments)
}i=f.prototype=a.create(h.prototype);i._load=function(){c.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};i._onLoad=function(j){this.data=j.response;h.prototype._onLoad.call(this)};g.exports=f
},{"../Asset":296,"@marcom/ac-ajax":284,"@marcom/ac-object":375}],298:[function(c,d,b){var g;
var a=c("@marcom/ac-object");var f=c("../Ajax");function h(i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._onLoad=function(j){try{f.prototype._onLoad.call(this,{response:JSON.parse(j.response||j.responseText)})
}catch(i){this._onError(i)}};d.exports=h},{"../Ajax":297,"@marcom/ac-object":375}],299:[function(b,a,f){var k=b("@marcom/ac-ajax");
var d=b("@marcom/ac-object");var j=b("./Binary/Chunk");var i=b("./../Asset");var c={chunkSize:1024*1024};
function g(m,l){i.apply(this,arguments);this.options=d.defaults(c,l||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var h=g.prototype=d.create(i.prototype);h.pause=function(){var l;
if(this._request!==null){this._request.xhr.abort()}for(l in this._rangeObjects){if(this._rangeObjects[l].isLoaded()===false){this._rangeObjects[l].pause()
}}};h._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};h._getOrCreateRangeObject=function(n){var m=this._rangeObjects[n.toString()];
var l;var o;if(m===undefined){l=(this.options.chunkSize-1);o=n+l;if(o>this._totalSize){l=null
}m=this._rangeObjects[n.toString()]=new j(this.src,{start:n,length:l});this._numRanges+=1
}return m};h._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};h._queueRangeRequests=function(){var p;var o=[];var q;var l;var m;for(var n=0;
n<this._totalSize;n+=this.options.chunkSize){m=this._getOrCreateRangeObject(n);
m.on("loaded",this._onRangeLoad,this);m.load()}};h._afterAllChunksLoaded=function(){var l;
var n=[];for(var m in this._rangeObjects){n.push(this._rangeObjects[m].data)}l=new Blob(n,{type:this._contentType});
this.trigger("loaded",l)};h._afterHeadRequest=function(l){this._totalSize=parseInt(l.getResponseHeader(["Content-Length"]));
this._contentType=l.getResponseHeader(["Content-Type"]);this._request=null};h._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=k.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};a.exports=g},{"./../Asset":296,"./Binary/Chunk":300,"@marcom/ac-ajax":284,"@marcom/ac-object":375}],300:[function(b,a,f){var g;
var j=b("@marcom/ac-ajax");var d=b("@marcom/ac-object");var h=b("../../Asset");
var c={start:0,length:null};function i(l,k){h.apply(this,arguments);this.options=d.defaults(c,k||{});
this._request=null;this.data=null}g=i.prototype=d.create(h.prototype);g.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};g.isLoaded=function(){return(this.data!==null)};g._load=function(){this._request=j.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};g._onLoad=function(k){this.data=k.response;this._request=null;h.prototype._onLoad.call(this,this.data)
};g._buildRangeString=function(){var k="bytes="+this.options.start+"-";if(this.options.length!==null){k+=(this.options.start+this.options.length)
}return k};g._buildQueryString=function(){var k=this.options.start.toString();if(this.options.length!==undefined){k+=(this.options.start+this.options.length)
}return k};a.exports=i},{"../../Asset":296,"@marcom/ac-ajax":284,"@marcom/ac-object":375}],301:[function(c,d,b){var g;
var a=c("@marcom/ac-object");var f=c("../Asset");function h(j,i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._load=function(){var i=new Image();this.data=i;
this._boundOnLoad=this._onLoad.bind(this);i.onload=this._boundOnLoad;i.onerror=this._boundOnError;
i.src=this.src};d.exports=h},{"../Asset":296,"@marcom/ac-object":375}],302:[function(d,a,h){var k=d("@marcom/ac-ajax").Ajax,g=d("@marcom/ac-object"),j=d("./SplitFile/Chunk"),b=d("../Asset");
var i;var f={splitManifestTimeout:5000,splitChunkTimeout:null};var c=function(m,l){b.apply(this,arguments);
if(m.lastIndexOf("/")!==m.length-1){m=m+"/"}this.options=g.extend(f,l||{});this._manifestPath=m+"manifest.json";
this._ajax=new k();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
i=c.prototype=g.create(b.prototype);i._load=function(){var l={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(l);this._request.send().then(this._boundOnManifestLoaded)
};i._onManifestLoaded=function(p){this._manifest=JSON.parse(p.responseText);this._chunksLen=this._manifest.files.length;
var n,o=this._manifest.files,m,l=this._chunksLen;for(n=0;n<l;n++){m=this._getOrCreateChunkObject(o[n],n);
m.once("loaded",this._onChunkLoaded,this);m.load()}this._request=null;this._ajax=null
};i._getOrCreateChunkObject=function(n,l){var o=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[l]){var q=n.path;if(!q.match(/(^http(s?))/)){q=this.src+"/"+q}else{if(!!this.src.match(/(^http(s?))/)){var p=q.indexOf("/",10);
var m=this.src.indexOf("/",10);q=this.src.substring(0,m)+q.substring(p)}}this._chunks[l]=new j(q,o)
}return this._chunks[l]};i._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var n,l=this._chunks.length,m=[];
for(n=0;n<l;n++){m.push(this._chunks[n].data);this._chunks[n].off()}this.data=new Blob(m,{type:this._manifest.mimeType});
m=this._chunks=null;this.trigger("loaded",this.data)}};i.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};a.exports=c},{"../Asset":296,"./SplitFile/Chunk":303,"@marcom/ac-ajax":284,"@marcom/ac-object":375}],303:[function(c,a,g){var h;
var j=c("@marcom/ac-ajax");var f=c("@marcom/ac-object");var b=c("../../Asset");
var d={timeout:30*1000};function i(l,k){b.apply(this,arguments);this.options=f.extend(d,k||{});
this._request=null;this.data=null}h=i.prototype=f.create(b.prototype);h.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};h.isLoaded=function(){return(this.data!==null)};h._load=function(){this._request=j.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};h._onLoad=function(k){this.data=k.response;this._request=null;b.prototype._onLoad.call(this,this.data)
};a.exports=i},{"../../Asset":296,"@marcom/ac-ajax":284,"@marcom/ac-object":375}],304:[function(c,a,h){var j;
var g=c("@marcom/ac-feature");var f=c("@marcom/ac-object");var i=c("./Binary");
var k=c("../Asset");var b=c("./SplitFile");var d={chunkSize:1024*1024,split:false};
function l(n,m){k.apply(this,arguments);this.options=f.defaults(d,m||{});this._binary=this.options.binary||this._createAssetType()
}j=l.prototype=f.create(k.prototype);j._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&g.isDesktop()===true)
};j._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new b(this.src,this.options)
}return new i(this.src,this.options)}};j._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};j._onLoad=function(n){var m=n;
if(n instanceof window.Blob){m=this.options.element;if(!m){m=document.createElement("video")
}if(m.getAttribute("type")!==n.type){m.setAttribute("type",n.type)}m.src=window.URL.createObjectURL(n)
}k.prototype._onLoad.call(this,m)};j.pause=function(){this._binary.pause()};j.destroy=function(){this._binary.destroy();
k.prototype.destroy.call(this)};a.exports=l},{"../Asset":296,"./Binary":299,"./SplitFile":302,"@marcom/ac-feature":208,"@marcom/ac-object":375}],305:[function(b,a,g){var h;
var f=b("@marcom/ac-object");var i=b("ac-deferred").Deferred;var k=b("@marcom/ac-event-emitter").EventEmitter;
var j=b("../../utils/destroy");var d={threads:4};function c(m,l){this.options=f.defaults(d,l||{});
this._queue=m;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new i();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}h=c.prototype=new k();h.start=function(){var m=this._availableThreads;var l;this.paused=false;
if(m>this._queue.length){m=this._queue.length}for(l=1;l<=m;l++){this._startNewThread()
}return this.promise};h.pause=function(){this.paused=true;var l=[];this._active.forEach(function(n,m){if(typeof n.pause==="function"){this._queue.unshift(n);
this._releaseThread();n.off("loaded");n.off("error");n.pause();l.push(m)}},this);
l.forEach(function(m){this._active.splice(m,1)},this)};h.add=function(l){this._queue=this._queue.concat(l)
};h.destroy=function(){this.pause();j(this)};h._startNewThread=function(){var m=this._queue.shift();
this._occupyThread();if(m&&typeof m.load==="function"){var l=function(o){this._onProgress(o);
this._active.splice(this._active.indexOf(m),1);m.off("error",n)};var n=function(o){this._onError();
m.off("loaded",l)};m.once("loaded",l,this);m.once("error",n,this);m.load()}else{this._onError()
}this._active.push(m)};h._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};h._onError=function(l){if(this._errored){return false
}this._errored=true;this._deferred.reject(l);this.trigger("rejected",l)};h.abort=function(){this._deferred.reject()
};h._onProgress=function(l){if(this._errored){return false}this._releaseThread();
this._data[l.index]=l.data;this.trigger("progress",l.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};h._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};h._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};a.exports=c},{"../../utils/destroy":306,"@marcom/ac-event-emitter":289,"@marcom/ac-object":375,"ac-deferred":293}],306:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}function h(j){var i=true;for(var k in j){if(j.hasOwnProperty(k)){if(j[k]!==null){i=false;
break}}}return i}window.setTimeout(function(){var i;for(i in f){if(f.hasOwnProperty(i)){if(g&&f[i]&&typeof f[i].destroy==="function"&&!h(f[i])){f[i].destroy()
}f[i]=null}}})}},{}],307:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{dup:67}],308:[function(b,c,a){arguments[4][68][0].apply(a,arguments)},{dup:68}],309:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{dup:69}],310:[function(b,c,a){arguments[4][165][0].apply(a,arguments)},{dup:165}],311:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{dup:70}],312:[function(b,c,a){arguments[4][71][0].apply(a,arguments)},{dup:71}],313:[function(b,c,a){arguments[4][168][0].apply(a,arguments)
},{dup:168}],314:[function(b,c,a){arguments[4][72][0].apply(a,arguments)},{"./ELEMENT_NODE":311,"./internal/isNodeType":322,"@marcom/ac-polyfills/Array/prototype.filter":395,"@marcom/ac-polyfills/Array/prototype.slice":402,dup:72}],315:[function(b,c,a){arguments[4][170][0].apply(a,arguments)
},{dup:170}],316:[function(b,c,a){arguments[4][171][0].apply(a,arguments)},{"./COMMENT_NODE":307,"./DOCUMENT_FRAGMENT_NODE":308,"./DOCUMENT_NODE":309,"./DOCUMENT_TYPE_NODE":310,"./ELEMENT_NODE":311,"./TEXT_NODE":312,"./createDocumentFragment":313,"./filterByNodeType":314,"./hasAttribute":315,"./indexOf":317,"./insertAfter":318,"./insertBefore":319,"./insertFirstChild":320,"./insertLastChild":321,"./isComment":324,"./isDocument":325,"./isDocumentFragment":326,"./isDocumentType":327,"./isElement":328,"./isNode":329,"./isNodeList":330,"./isTextNode":331,"./remove":332,"./replace":333,dup:171}],317:[function(b,c,a){arguments[4][172][0].apply(a,arguments)
},{"./filterByNodeType":314,"./internal/validate":323,"@marcom/ac-polyfills/Array/prototype.indexOf":397,"@marcom/ac-polyfills/Array/prototype.slice":402,dup:172}],318:[function(b,c,a){arguments[4][173][0].apply(a,arguments)
},{"./internal/validate":323,dup:173}],319:[function(b,c,a){arguments[4][174][0].apply(a,arguments)
},{"./internal/validate":323,dup:174}],320:[function(b,c,a){arguments[4][175][0].apply(a,arguments)
},{"./internal/validate":323,dup:175}],321:[function(b,c,a){arguments[4][176][0].apply(a,arguments)
},{"./internal/validate":323,dup:176}],322:[function(b,c,a){arguments[4][73][0].apply(a,arguments)
},{"../isNode":329,dup:73}],323:[function(b,c,a){arguments[4][74][0].apply(a,arguments)
},{"../COMMENT_NODE":307,"../DOCUMENT_FRAGMENT_NODE":308,"../ELEMENT_NODE":311,"../TEXT_NODE":312,"./isNodeType":322,dup:74}],324:[function(b,c,a){arguments[4][179][0].apply(a,arguments)
},{"./COMMENT_NODE":307,"./internal/isNodeType":322,dup:179}],325:[function(b,c,a){arguments[4][180][0].apply(a,arguments)
},{"./DOCUMENT_NODE":309,"./internal/isNodeType":322,dup:180}],326:[function(b,c,a){arguments[4][75][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":308,"./internal/isNodeType":322,dup:75}],327:[function(b,c,a){arguments[4][182][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":310,"./internal/isNodeType":322,dup:182}],328:[function(b,c,a){arguments[4][76][0].apply(a,arguments)
},{"./ELEMENT_NODE":311,"./internal/isNodeType":322,dup:76}],329:[function(b,c,a){arguments[4][77][0].apply(a,arguments)
},{dup:77}],330:[function(b,c,a){arguments[4][185][0].apply(a,arguments)},{dup:185}],331:[function(b,c,a){arguments[4][186][0].apply(a,arguments)
},{"./TEXT_NODE":312,"./internal/isNodeType":322,dup:186}],332:[function(b,c,a){arguments[4][78][0].apply(a,arguments)
},{"./internal/validate":323,dup:78}],333:[function(b,c,a){arguments[4][188][0].apply(a,arguments)
},{"./internal/validate":323,dup:188}],334:[function(b,c,a){b("@marcom/ac-polyfills/Promise");
b("@marcom/ac-polyfills/JSON");c.exports={createFlow:b("./ac-flow/flow/factory"),Player:b("./ac-flow/flow/Player")}
},{"./ac-flow/flow/Player":337,"./ac-flow/flow/factory":348,"@marcom/ac-polyfills/JSON":413,"@marcom/ac-polyfills/Promise":419}],335:[function(b,a,c){var j=b("@marcom/ac-event-emitter-micro").EventEmitterMicro,i=b("./compositor/decorator/Keyframe"),h=b("./compositor/decorator/Superframe"),g=b("./compositor/decorator/SuperKeyframe"),l=b("./compositor/decorator/Cache");
var k=b("./compositor/Sequence");function d(m,o,p,n){j.call(this);this._compositor=new k(o,p,n);
this.options=m||{}}var f=d.prototype=new j(null);f._gotoImageFrame=function(m){if(this._rendering){return Promise.resolve()
}else{if(this._currentFrame===m){return Promise.resolve()}}this._rendering=true;
return this._compositor.compositeFrames(this._currentFrame,m).then(function(){this._rendering=false;
this._currentFrame=m}.bind(this))};f.init=function(){var m;if(this.options.element.nodeName==="CANVAS"){m=this.options.element
}else{m=document.createElement("canvas");this.options.element.appendChild(m)}this.gotoFrame=this._gotoImageFrame;
return this._compositor.init(m).then(this._decorateCompositor.bind(this))};f.resumeLoading=function(){return this._compositor.resumeLoading()
};f.pauseLoading=function(){this._compositor.pauseLoading()};f._decorateCompositor=function(){var m=this._compositor;
var o;var n;if(m){o=this._compositor._diffRender.flowData;n=this._compositor.canvas;
if(o.superframeFrequency){m=new h(m,o.superframeFrequency)}if(o.version>=4){m=new i(m)
}if(o.version>=4&&o.superframeFrequency){m=new g(m)}if(this.options.keyframeCache){m=new l(m,this.options.keyframeCache)
}if(m===this._compositor){return Promise.resolve()}else{this._compositor=m;return this._compositor.init(n)
}}else{return Promise.reject()}};f._destroy=function(){this.off();this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});a.exports=d},{"./compositor/Sequence":338,"./compositor/decorator/Cache":339,"./compositor/decorator/Keyframe":340,"./compositor/decorator/SuperKeyframe":341,"./compositor/decorator/Superframe":342,"@marcom/ac-event-emitter-micro":192}],336:[function(c,d,a){var b=c("@marcom/ac-asset-loader").AssetLoader,g=c("./data/provider/Async");
var h=function(i,j,k){this._manifestUrl=i;this._keyframeUrls=j;this._imageUrlPattern=k;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this)};var f=h.prototype;f.setManifestUrl=function(i){this._manifestUrl=i;
return this};f.setKeyframeUrls=function(i){this._keyframeUrls=i;return this};f.setImageUrlPattern=function(i){this._imageUrlPattern=i;
return this};f.pause=function(){this._shouldPause=true;var k,j=this._activeLoaders.length;
for(k=0;k<j;k++){this._activeLoaders[k].pause()}this._paused=true};f.destroy=function(){var j,i,k;
this.pause();for(j in this._loaders){if(this._loaders.hasOwnProperty(j)){this._loaders[j].destroy()
}}for(i in this._promises){if(this._promises.hasOwnProperty(i)){if(this._promises[i].status()==="pending"){this._promises[i].reject()
}}}for(k in this){if(this.hasOwnProperty(k)){this[k]=null}}};f.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return true}};f._resume=function(){this._shouldPause=false;var n,k=this._activeLoaders.length;
for(n=0;n<k;n++){this._activeLoaders[n].load()}var m,l=this._resumeQueue.length;
for(m=0;m<l;m++){this._resumeQueue[m].call(this)}this._resumeQueue=[];this._paused=false
};f.loadManifest=function(){if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return}if(this.assets.manifest){return this.assets.manifest}else{this._paused=false;
this._loaders.manifest=new g(this._getManifestAssetsData());this._activeLoaders.push(this._loaders.manifest);
return this._loaders.manifest.load().then(this._boundOnManifestLoaded)}};f.loadKeyframes=function(){var i;
if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes)}if(this.assets.keyframes){i=Promise.resolve(this.assets.keyframes)
}else{this._paused=false;this._loaders.keyframes=new b(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);i=this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
}this._promises.keyframes=i;return this._promises.keyframes};f.loadDiffs=function(){var i;
if(this._shouldPause){this._resumeQueue.push(this.loadDiffs)}if(this.assets.diffs){i=this._promises.diffs.resolve(this.assets.diffs)
}else{this._paused=false;this._loaders.diffs=new b(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);i=this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
}this._promises.diffs=i;return this._promises.diffs};f._getManifestAssetsData=function(){return this._manifestUrl
};f._getKeyframesAssetsData=function(){return this._keyframeUrls};f._getDiffsAssetsData=function(){var l=this.assets.manifest.imagesRequired,j=[],m,k,n=this._imageUrlPattern.match(/#/g).length;
for(m=1;m<=l;m++){k="0000"+m;k=k.substring(k.length-n);j.push(this._imageUrlPattern.replace(/#{2,}/g,k))
}return j};f._onManifestLoaded=function(i){if(this.assets){this.assets.manifest=i;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
return this.assets.manifest}};f._onKeyframesLoaded=function(i){if(this.assets){this.assets.keyframes=i;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
return Promise.resolve(this.assets.keyframes)}};f._onDiffsLoaded=function(i){if(this.assets){this.assets.diffs=i;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
return Promise.resolve(this.assets.diffs)}};f._removeFromActiveLoaders=function(l){var k,j=this._activeLoaders.length;
for(k=0;k<j;k++){if(this._activeLoaders[k]===l){this._activeLoaders.splice(k,1);
return}}};d.exports=h},{"./data/provider/Async":346,"@marcom/ac-asset-loader":294}],337:[function(b,c,a){var g=b("@marcom/ac-dom-emitter").DOMEmitter;
function f(h,i){this.element=i;this._domEmitter=new g(i);this._frameRate=30;this.paused=true;
this.loop=false;this._destroyed=false;this._flow=h;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this)
}var d=f.prototype;d._timeToFrame=function(h){var i;i=Math.round(h/this.duration*this._flow.frameCount);
i=i%(this._flow.frameCount+1);return(i<0)?this._flow.frameCount+i:i};d._advanceToTimeGlobal=function(h){this._prevTime=this._prevTime||h;
this._currentTime+=((h-this._prevTime)/1000)*this.playbackRate;this._prevTime=h;
this._pauseAfterRender=false;var i=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){i=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){i=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(i).then(this._onBoundGlobalTimeUpdate)
}};d._onGlobalTimeUpdate=function(){this.trigger("timeupdate");if(this._pauseAfterRender){this.paused=true;
this.trigger("ended")}else{this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}};d._onLocalTimeUpdate=function(){this.seeking=false;this.trigger("timeupdate");
this.trigger("seeked");this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
};d._advanceToTimeLocal=function(h){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*h;this._prevTime=null;window.cancelAnimationFrame(this._requestAnimationFrame);
this._flow.gotoFrame(this._timeToFrame(h)).then(this._onBoundLocalTimeUpdate)}};
d._onLoaded=function(){this.trigger("loaded");this.trigger("canplaythrough")};d._nullProperties=function(j){var h;
for(h in j){if(j.hasOwnProperty(h)){j[h]=null}}return j};d.destroy=function(){this.trigger("destroy");
this.pause();this.off();this._flow.destroy();this._flow=this._nullProperties(this._flow);
this._nullProperties(this)};d.load=function(){if(this._flow.resumeLoading()){return
}this.trigger("loadstart");return this._flow.init().then(function(j){var i=function(){this._onLoaded()
}.bind(this);var h=function(){if(this._destroyed===false){this.trigger("error")
}}.bind(this);if(j){return j.then(i,h)}else{i()}}.bind(this))};d.pauseLoading=function(){this._flow.pauseLoading()
};d.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}return this};d.pause=function(){if(!this.paused){this.paused=true;window.cancelAnimationFrame(this._requestAnimationFrame);
this.trigger("pause")}return this};d.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};d.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};d.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};d.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(d,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:d._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(h){if(isFinite(h)){this._frameRate=h;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(h){if(isFinite(h)){this._playbackRate=1*h;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});c.exports=f},{"@marcom/ac-dom-emitter":21}],338:[function(b,d,a){var h=b("../diff/Render");
var g=b("../LoadController");function c(j,k,i){this._keyframes=k;this._imageUrlPattern=i;
this._loadController=new g(j,k,i)}var f=c.prototype;f._initDiffRender=function(i){i.then(function(j){this._images=j;
this.canvas.height=j[0].height;this.canvas.width=j[0].width;this.applyFrame(j[0])
}.bind(this))};f.init=function(i){this.canvas=i||document.createElement("canvas");
this.context=i.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
};f.resumeLoading=function(){return this._loadController.load()};f.pauseLoading=function(){this._loadController.pause()
};f.createDiffRender=function(i){this._diffRender=new h(i,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};f.applyFrame=function(j){var i=this.context;i.drawImage(j,0,0)
};f.calculateRenderCount=function(i,j){var k=0;if(Math.abs(j-i)>=j){i=1;k=1}else{if(Math.abs(j-i)>=(this.frameCount-j)&&this._images[1]){i=this.frameCount-2;
k=1}}if(j>0&&j<this.frameCount-1){return Math.abs(i-j)+k}else{return k}};f.compositeFrames=function(i,j){j=(this.frameCount<j)?this.frameCount-1:(j<0)?0:j;
i=(this.frameCount-2<i)?this.frameCount-2:(i<0)?0:i;var k;if(Math.abs(j-i)>=j){i=1;
this.applyFrame(this._images[0])}else{if(Math.abs(j-i)>=(this.frameCount-j)&&this._images[1]){i=this.frameCount-2;
this.applyFrame(this._images[1])}}k=(i>j)?-1:(i<j)?1:0;if(j>0&&j<this.frameCount-1){while(i!==j){this._diffRender.renderDiff(this.canvas,i);
i+=k}}return Promise.resolve(i)};f.destroy=function(){this._loadController.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(i){return this._canvas=i
},enumerable:true},mainCompositor:{get:function(){var i=this;while(i._compositor){i=i._compositor
}return i},enumerable:true}});d.exports=c},{"../LoadController":336,"../diff/Render":347}],339:[function(c,d,b){function a(h,g){this._compositor=h;
this._keyframeInterval=g||8;this._keyframes=[]}var f=a.prototype;f._getClosestKeyframe=function(g){var h=g%this._keyframeInterval,i=Math.floor(g/this._keyframeInterval)+((h>(this._keyframeInterval/2))?1:0);
return i};f._getFrameFromKeyframe=function(g){return g*this._keyframeInterval};
f._saveKeyframe=function(i){var g,h=Math.floor(i/this._keyframeInterval);if(i%this._keyframeInterval===0&&!this._keyframes[h]){g=document.createElement("canvas");
g.width=this._compositor.canvas.width;g.height=this._compositor.canvas.height;g.getContext("2d").drawImage(this._compositor.canvas,0,0);
this._keyframes[h]=g}};f.init=function(g){return this._compositor.init.apply(this._compositor,arguments)
};f.resumeLoading=function(){return this._compositor.resumeLoading()};f.pauseLoading=function(){return this._compositor.pauseLoading()
};f.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};f.calculateRenderCount=function(g,h){g=this._getFrameFromKeyframe(this._getClosestKeyframe(h));
return this._compositor.calculateRenderCount(g,h)+1};f.compositeFrames=function(g,i){var j=this._getClosestKeyframe(i);
if(this._keyframes[j]&&(this._compositor.calculateRenderCount(g,i)>this.calculateRenderCount(g,i))){g=this._getFrameFromKeyframe(j);
this.applyFrame(this._keyframes[j]);return this._compositor.compositeFrames(g,i).then(function h(){})
}else{return this._compositor.compositeFrames(g,i).then(function h(){},null,this._saveKeyframe.bind(this))
}};f.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(g){return this._compositor.canvas=g
},enumerable:true}});d.exports=a},{}],340:[function(c,d,a){var b=c("../../keyframe/Render");
function g(h){this._compositor=h;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}var f=g.prototype;f.init=function(h){this._keyframeDiffRender=new b(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};f.resumeLoading=function(){return this._compositor.resumeLoading()
};f.pauseLoading=function(){return this._compositor.pauseLoading()};f.applyFrame=function(h){return this._compositor.applyFrame.apply(this._compositor,arguments)
};f.applyKeyframe=function(h,i){this._keyframeDiffRender.renderKeyframe(this.canvas,h,i)
};f.compositeFrames=function(h,i){if(!this._isKeyframeDiff(i-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}this.applyKeyframe(i-1);return Promise.resolve(h-1)};f._isKeyframeDiff=function(h){return h in this._keyframeDiffRender._loader._keyframes
};f.calculateRenderCount=function(h,i){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};f.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});d.exports=g},{"../../keyframe/Render":350}],341:[function(b,c,a){function f(g){this._compositor=g;
this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}var d=f.prototype;d.init=function(g){return this._compositor.init.apply(this._compositor,arguments)
};d.resumeLoading=function(){return this._compositor.resumeLoading()};d.pauseLoading=function(){return this._compositor.pauseLoading()
};d.applyFrame=function(g){return this._compositor.applyFrame.apply(this._compositor,arguments)
};d.applyKeyframe=function(g,h){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};d.compositeFrames=function(g,i){var j,h;if(i<1||i>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(i-1)){j=Math.abs(g-i)===1?true:false;this.applyKeyframe(i-1,j);
return Promise.resolve(g-1)}if(Math.abs(i-g)>this._superframeInterval){h=this._getShortestRender(g,i);
if(this._isKeyframeDiff(h-1)||h<=0||h>=this.frameCount-2){return this._compositeFromSuperKeyframe(h,i)
}}return this._compositor.compositeFrames.apply(this._compositor,[g,i])};d._getShortestRender=function(g,i){var k=this._compositor.calculateRenderCount,j=this._getClosestSuperKeyframe(i-1),h=k.apply(this._compositor,[j,i])+1,l=k.apply(this._compositor,[g,i]);
if(h<=l){return j}else{return g}};d._compositeFromSuperKeyframe=function(k,i){var g=this.canvas.getContext("2d"),h=(k<=0)?this.mainCompositor._images[0]:(k>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[k-1].image),j;
g.drawImage(h,0,0);return this._compositor.compositeFrames.call(this._compositor,k,i)
};d._getClosestSuperFrame=function(g){return Math.round(g/this._superframeInterval)*this._superframeInterval
};d._getClosestSuperKeyframe=function(h){var l,m,k,j,g=this._frames.length;if(h<g+1&&h>0){j=h-1;
while(j>=0){if(this._frames[j].type==="keyframe"){l=j+1;break}j-=1}j=h+1;while(j<=g-1){if(this._frames[j].type==="keyframe"){m=j+1;
break}j+=1}}l=l?l:0;m=m?m:this.frameCount;k=(h-l)<(m-h)?l:m;return k};d._isKeyframeDiff=function(g){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};d.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(g){return this._compositor.canvas=g
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});c.exports=f},{}],342:[function(b,c,a){function f(h,g){this._compositor=h;
this._superframeInterval=g||4}var d=f.prototype;d._getClosestSuperframe=function(g){return Math.round(g/this._superframeInterval)*this._superframeInterval
};d.init=function(g){this._screenCanvas=g};d.resumeLoading=function(){return this._compositor.resumeLoading()
};d.pauseLoading=function(){return this._compositor.pauseLoading()};d.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};d.calculateRenderCount=function(g,i){var h=this._getClosestSuperframe(g);if(Math.abs(h-i)>this._superframeInterval/2){g=h+((g>i)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(g,i)+1}else{return Math.abs(h-i)+1}};d.compositeFrames=function(g,j){var k,h;
if(j<=0||j>=this.frameCount-2){this._compositor.compositeFrames(g,j)}if(g>this.frameCount-2){g=this.frameCount-2
}else{if(g<=0){g=1}}h=this._getClosestSuperframe(g);if(this._compositor.calculateRenderCount(g,j)>this.calculateRenderCount(g,j)){k=this._compositor.compositeFrames(h,h).then(function i(){var l=h+((g>j)?-1:1)*this._superframeInterval;
this._compositor.compositeFrames(h,l).then(function(){return this.compositeFrames(l,j)
}.bind(this))}.bind(this))}else{k=this._compositor.compositeFrames(g,j).then(function i(){}.bind(this))
}k.then(function i(){}.bind(this));return k};d.destroy=function(){return this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(g){return this._compositor.canvas=g
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});c.exports=f},{}],343:[function(b,c,a){function d(f,g){this.location=f;
this.length=g}c.exports=d},{}],344:[function(c,d,b){function a(){}d.exports=a},{}],345:[function(c,d,b){var h=c("./Manifest"),a=c("./Block"),g;
var f={parseData:function(i){g=0;var j=i.frames.map(this._parseFrame,this);return Object.create(h.prototype,{version:{value:i.version},framecount:{value:i.frameCount},blockSize:{value:i.blockSize},imagesRequired:{value:i.imagesRequired},reversible:{value:i.reversible},superframeFrequency:{value:i.superframeFrequency},frames:{value:j}})
},_valueForCharAt:function(k,i){var j=k.charCodeAt(i);if(j>64&&j<91){return j-65
}if(j>96&&j<123){return j-71}if(j>47&&j<58){return j+4}if(j===43){return 62}if(j===47){return 63
}},_createNumberFromBase64Range:function(m,i,l){var k=0,j;while(l--){j=this._valueForCharAt(m,i++);
k+=(j<<l*6)}return k},_parseFrame:function(n){var m,q=[],l=n.value,k=n.startImageIndex,p=n.startBlockIndex,o,j;
if(n.type==="keyframe"){q.type="keyframe";q.width=n.width;q.height=n.height;q.x=n.x;
q.y=n.y;return q}for(m=0;m<l.length;m+=5){j=this._createNumberFromBase64Range(l,m,3);
o=this._createNumberFromBase64Range(l,m+3,2);q.push(Object.create(a.prototype,{location:{value:j,enumerable:true},length:{value:o,enumerable:true},block:{value:(p+=o)-o,enumerable:true},startImageIndex:{value:k,enumerable:true}}))
}return q}};d.exports=f},{"./Block":343,"./Manifest":344}],346:[function(c,d,a){var b=c("@marcom/ac-asset-loader").AssetLoader,h=c("../processor");
function g(i){this._assetLoader=new b([i])}var f=g.prototype;f.load=function(){return this._assetLoader.load().then(function(j){var i;
if(j&&j.length){i=h.parseData(j[0]);this._data=i}return i}.bind(this))};d.exports=g
},{"../processor":345,"@marcom/ac-asset-loader":294}],347:[function(c,d,b){function a(i,g,h){this.flowData=i;
this.flowData.imageUrlPattern=g;this._loadController=h}var f=a.prototype;f._storeImages=function(g){g.then(function(j){var h=j.length;
this.images=j;this._blocksPerFullDiff=[];this._blockCountUpToIndex=[];var l=0;for(var k=0;
k<h;k++){this._blocksPerFullDiff[k]=(j[k].width/this.flowData.blockSize)*(j[k].height/this.flowData.blockSize);
l+=this._blocksPerFullDiff[k];this._blockCountUpToIndex[k]=l}}.bind(this))};f._applyDiffRange=function(i,o){var s=o.block,j=o.length,h=i.canvas.width/this.flowData.blockSize,l=o.startImageIndex,u=this.images[l].width,g=s%this._blockCountUpToIndex[l],t=u/this.flowData.blockSize,r=(g%t)*this.flowData.blockSize,q=Math.floor(g/(t||1))*this.flowData.blockSize,n=(o.location%h)*this.flowData.blockSize,m=Math.floor(o.location/h)*this.flowData.blockSize,k,p;
while(j){k=Math.min((j*this.flowData.blockSize),i.canvas.width-n,u-r);p=k/this.flowData.blockSize;
i.drawImage(this.images[l],r,q,k,this.flowData.blockSize,n,m,k,this.flowData.blockSize);
j-=p;if(j){if((r+=k)>=u){r=0;q+=this.flowData.blockSize}if((n+=k)>=i.canvas.width){n=0;
m+=this.flowData.blockSize}s+=p}}};f.init=function(){return this._loadController.loadDiffs().then(this._storeImages.bind(this))
};f.renderDiff=function(h,l){var k=h.getContext("2d");l-=1;for(var j=0,g=this.frames[l].length;
j<g;j++){this._applyDiffRange(k,this.frames[l][j])}};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frames:{get:function(){return this.flowData.frames},set:function(g){this.flowData.frames=g
},enumerable:true}});d.exports=a},{}],348:[function(f,c,h){var k=f("@marcom/ac-object/defaults");
var j=f("./Flow");var d=f("./Player");var b={keyframeCache:8,preload:true};var g={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var a=function(n){if(n.lastIndexOf("/")!==n.length-1){n=n+"/"}return n};var l=function(q){var t=q.basePath?a(q.basePath):null;
var p=q.framePath?a(q.framePath):null;var o=q.diffPath?a(q.diffPath):null;var s=q.manifestPath?a(q.manifestPath):null;
var n=q.baseName+"_";var r={};r.startframe=(p||t)+n+"startframe."+(q.startframeFileFormat||q.fileFormat);
r.endframe=(p||t)+n+"endframe."+(q.endframeFileFormat||q.fileFormat);r.imageUrlPattern=(o||t)+n+q.imageUrlPattern+"."+q.fileFormat;
r.manifest=(s||t)+n+"manifest."+q.manifestFileFormat;return r};var m=function(o,p){var n=l(p);
var q=[n.startframe,n.endframe];return new j(o,n.manifest,q,n.imageUrlPattern)};
var i=function(q,r){var n=q||{};var p=r||{};n=k(b,q);p=k(g,r);if(!n.element){q.element=document.createElement("canvas")
}var o=m(n,p);var s=new d(o,n.element);if(n.preload){s.load()}return s};c.exports=i
},{"./Flow":335,"./Player":337,"@marcom/ac-object/defaults":372}],349:[function(d,f,c){var a=d("@marcom/ac-asset-loader").AssetLoader;
function b(h,k){var j,i=h.match(/#/g).length;this._keyframes={};h=h.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(k.frames){k.frames.forEach(function(m,l){if(m.type==="keyframe"){j="0000"+l;
j=j.substring(j.length-i);this._imageUrls.push(h.replace(/#+/g,j));this._keyframes[l]=m
}}.bind(this))}}var g=b.prototype;g.load=function(){if(this._imageUrls.length>0){return new a(this._imageUrls).load()
}return Promise.resolve()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(g,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
f.exports=b},{"@marcom/ac-asset-loader":294}],350:[function(b,c,a){var g=b("./Loader");
function f(i,h){this.flowData=i;this.flowData.imageUrlPattern=h}var d=f.prototype;
d._storeImages=function(h){var k=0,l;if(h&&h.length>0){for(var j in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(j)){l=h[k];
this._loader._keyframes[j].image=l;k+=1}}}};d.init=function(){this._loader=new g(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};d.renderKeyframe=function(k,j,r){var i=k.getContext("2d"),l=this._loader.keyframes[j],m=l.image,p=l.x,o=l.y,q=l.width,n=l.height;
if(r===true){i.drawImage(m,p,o,q,n,p,o,q,n)}else{if(this.flowData.reversible){i.drawImage(m,0,0)
}else{i.drawImage(m,p,o,q,n)}}};c.exports=f},{"./Loader":349}],351:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":352}],352:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],353:[function(b,c,a){c.exports={CID:b("./ac-mvc-cid/CID")}
},{"./ac-mvc-cid/CID":354}],354:[function(c,f,b){var a=c("@marcom/ac-shared-instance").SharedInstance;
var g="ac-mvc-cid:CID",d="1.0.0";function i(){this._idCount=0}var h=i.prototype;
h._cidPrefix="cid";h.getNewCID=function(){var j=this._cidPrefix+"-"+this._idCount;
this._idCount++;return j};f.exports=a.share(g,d,i)},{"@marcom/ac-shared-instance":351}],355:[function(b,c,a){c.exports={Model:b("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":356}],356:[function(f,a,g){var k=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var b=f("@marcom/ac-object/defaults");var i=f("@marcom/ac-object/create");var c=f("@marcom/ac-mvc-cid").CID;
function d(l){k.call(this);this.attributes=b(this.defaultAttributes,l||{});this.cid=c.getNewCID();
if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}}var j=k.prototype;var h=d.prototype=i(j);h.defaultAttributes={};h.idAttribute="id";
h.get=function(l){if(!this.attributes){return}return this.attributes[l]};h.set=function(m,l){if(!this.attributes){return
}var q;var p;var o;var n={};var r=false;for(q in m){if(m.hasOwnProperty(q)){o=this.get(q);
if((o===m[q])||(typeof o==="object"&&typeof m[q]==="object"&&JSON.stringify(o)===JSON.stringify(m[q]))){continue
}r=true;this.attributes[q]=m[q];p={value:m[q],previous:o};n[q]=p;this._triggerChange(q,p,l)
}}if(r){this._trigger("change",n,l)}};h.hasAttribute=function(l){if(!this.attributes){return false
}return(this.attributes[l]!==undefined)};h.eachAttribute=function(m,l){if(!this.attributes){return
}var n;for(n in this.attributes){if(this.attributes.hasOwnProperty(n)){m.call(l,{attribute:n,value:this.attributes[n]})
}}};h.destroy=function(){this.trigger("destroy");j.destroy.call(this);var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null
}}};h._trigger=function(n,m,l){l=l||{};if(l.silent!==true){this.trigger(n,m)}};
h._triggerChange=function(n,m,l){return this._trigger("change:"+n,m,l)};a.exports=d
},{"@marcom/ac-event-emitter-micro":192,"@marcom/ac-mvc-cid":353,"@marcom/ac-object/create":371,"@marcom/ac-object/defaults":372}],357:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":358,dup:351}],358:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{dup:352}],359:[function(b,c,a){arguments[4][353][0].apply(a,arguments)},{"./ac-mvc-cid/CID":360,dup:353}],360:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"@marcom/ac-shared-instance":357,dup:354}],361:[function(b,c,a){c.exports={View:b("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":362}],362:[function(d,b,g){var k=d("@marcom/ac-dom-emitter").DOMEmitter;
var c=d("@marcom/ac-mvc-cid").CID;var f={create:d("@marcom/ac-object/create"),defaults:d("@marcom/ac-object/defaults")};
var j={insertLastChild:d("@marcom/ac-dom-nodes/insertLastChild"),remove:d("@marcom/ac-dom-nodes/remove")};
var i=d("@marcom/ac-classlist/add");var l=d("@marcom/ac-classlist/remove");function a(m){var o;
var n;var p;this.options=f.defaults(this.defaultOptions,m||{});this.cid=c.getNewCID();
this.model=this.options.model;if(this.options.template){this.template=this.options.template
}o=this.options.tagName||this.tagName;n=this.options.element;p=this.options.className||this.className;
if(!n){n=document.createElement(o)}k.call(this,n);if(p){this.addClassName(p)}if(this.options.events){this.delegateEvents(this.options.events)
}}var h=a.prototype=f.create(k.prototype);h.tagName="div";h.defaultOptions={};h.getTagName=function(){return this.el.tagName.toLowerCase()
};h.appendTo=function(m){j.insertLastChild(this.el,m);return this};h.render=function(){};
h.addClassName=function(m){return this._manipulateClassName(m,i)};h.removeClassName=function(m){return this._manipulateClassName(m,l)
};h.destroy=function(){this.emitterTrigger("destroy");this.off();j.remove(this.el);
var m;for(m in this){if(this.hasOwnProperty(m)){this[m]=null}}};h.delegateEvents=function(n,o){o=o||this;
var m,p;for(m in n){if(n.hasOwnProperty(m)){p=n[m];if(typeof p==="string"){n[m]=this[n[m]]
}}}this.on(n,o);return this};h._manipulateClassName=function(n,o){var m;if(typeof n==="string"){m=n.split(" ")
}else{if(typeof n==="object"&&Array.isArray(n)){m=n.slice()}else{return this}}m.unshift(this.el);
o.apply(this.el,m);return this};b.exports=a},{"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/remove":13,"@marcom/ac-dom-emitter":21,"@marcom/ac-dom-nodes/insertLastChild":321,"@marcom/ac-dom-nodes/remove":332,"@marcom/ac-mvc-cid":359,"@marcom/ac-object/create":371,"@marcom/ac-object/defaults":372}],363:[function(b,d,a){var f=b("./ac-media-object/factories/createVideo");
var c=b("./ac-media-object/factories/createFlow");d.exports={createFlow:c,createVideo:f}
},{"./ac-media-object/factories/createFlow":364,"./ac-media-object/factories/createVideo":365}],364:[function(c,d,b){var a=c("./../views/FlowView");
d.exports=function(h,i,g){function f(j){throw new Error(j)}if(!i){f("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!i.basePath){f("Please provide a valid mediaSrc object with a basePath property.")
}else{g=g||{};g.type="flow";if(!g.mediaObjectView){g.mediaObjectView=new a(h,i,g)
}return g.mediaObjectView}}}},{"./../views/FlowView":368}],365:[function(c,d,b){var a=c("./../views/VideoView");
d.exports=function(h,i,g){function f(j){throw new Error(j)}if(!i){f("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!i.basePath){f("Please provide a valid mediaSrc object with a basePath property.")
}else{g=g||{};g.type="video";if(!g.mediaObjectView){g.mediaObjectView=new a(h,i,g)
}return g.mediaObjectView}}}},{"./../views/VideoView":369}],366:[function(d,f,c){var h=d("@marcom/ac-mvc-model").Model;
var b=d("@marcom/ac-object");function a(i){h.apply(this,arguments)}var g=a.prototype=b.create(h.prototype);
g.defaultAttributes={type:"video",paused:true,ended:false,ready:false,loadStart:false,loaded:false,error:false,destroyed:false,currentTime:0,playbackRate:1,duration:0,preload:false,autoplay:false,frameRate:24,enhanced:false,looping:false};
g.getPaused=function(){return this.get("paused")};g.getEnded=function(){return this.get("ended")
};g.getReady=function(){return this.get("ready")};g.getDestroyed=function(){return this.get("destroyed")
};g.getLoadStart=function(){return this.get("loadedStart")};g.getLoaded=function(){return this.get("loaded")
};g.getError=function(){return this.get("error")};g.getCurrentTime=function(){return this.get("currentTime")
};g.getPlaybackRate=function(){return this.get("playbackRate")};g.getDuration=function(){return this.get("duration")
};g.getPreload=function(){return this.get("preload")};g.getAutoplay=function(){return this.get("autoplay")
};g.getFrameRate=function(){return this.get("frameRate")};g.getEnhanced=function(){return this.get("enhanced")
};g.getLooping=function(){return this.get("looping")};g.setPaused=function(i){this.set({paused:i})
};g.setEnded=function(i){this.set({ended:i})};g.setReady=function(i){this.set({ready:i})
};g.setDestroyed=function(i){this.set({destroyed:i})};g.setDuration=function(i){this.set({duration:i})
};g.setLoadStart=function(i){this.set({loadStart:i})};g.setLoaded=function(i){this.set({loaded:i})
};g.setError=function(i){this.set({error:i})};g.setCurrentTime=function(i){this.set({currentTime:i})
};g.setPlaybackRate=function(i){this.set({playbackRate:i})};g.setPreload=function(i){this.set({preload:i})
};g.setAutoplay=function(i){this.set({autoplay:i})};g.setFrameRate=function(i){this.set({frameRate:i})
};g.setEnhanced=function(i){this.set({enhanced:i})};g.setLooping=function(i){this.set({looping:i})
};f.exports=a},{"@marcom/ac-mvc-model":355,"@marcom/ac-object":375}],367:[function(c,b,g){var d=c("./../models/MediaModel");
var j=c("@marcom/ac-mvc-view").View;var f=c("@marcom/ac-object");var a=c("@marcom/ac-classlist");
var h=function(l,m,k){j.call(this,{element:l});this.options=k||{};this.mediaSrc=m||"";
this.model=this.options.model||new d(this.options);this._onLoadStartChange=this._onLoadStartChange.bind(this);
this._onLoadedChange=this._onLoadedChange.bind(this);this._onPausedChange=this._onPausedChange.bind(this);
this._onReadyChange=this._onReadyChange.bind(this);this._onErrorChange=this._onErrorChange.bind(this);
this._onEnhancedChange=this._onEnhancedChange.bind(this);this._onCurrentTimeChange=this._onCurrentTimeChange.bind(this);
this._onPlaybackRateChange=this._onPlaybackRateChange.bind(this);this._onDestroyedChange=this._onDestroyedChange.bind(this);
this._onEndedChange=this._onEndedChange.bind(this);this._respondToPlay=this._respondToPlay.bind(this);
this._respondToPause=this._respondToPause.bind(this);this._respondToTimeUpdate=this._respondToTimeUpdate.bind(this);
this._respondToEnded=this._respondToEnded.bind(this);this._respondToDurationChange=this._respondToDurationChange.bind(this);
this._respondToRateChange=this._respondToRateChange.bind(this);this._init()};var i=h.prototype=f.create(j.prototype);
i._init=function(){this._createMediaElement();this._createMediaEmitter();this._createMediaLoader();
this._bindEvents();this._config()};i._createMediaElement=function(){};i._createMediaEmitter=function(){};
i._createMediaLoader=function(){};i._config=function(){if(this.options.preload===true){this._setPreload(true);
this.load()}if(this.options.autoplay===true){this._setAutoplay(true)}if(this.options.looping===true){this._setLooping(true)
}if(this.options.frameRate){this._setFrameRate(this.options.frameRate)}};i._bindEvents=function(){this._bindViewEvents();
this._bindModelEvents()};i._bindModelEvents=function(){this.model.on("change:loadStart",this._onLoadStartChange);
this.model.on("change:loaded",this._onLoadedChange);this.model.on("change:paused",this._onPausedChange);
this.model.on("change:ready",this._onReadyChange);this.model.on("change:error",this._onErrorChange);
this.model.on("change:enhanced",this._onEnhancedChange);this.model.on("change:currentTime",this._onCurrentTimeChange);
this.model.on("change:playbackRate",this._onPlaybackRateChange);this.model.on("change:destroyed",this._onDestroyedChange);
this.model.on("change:ended",this._onEndedChange)};i._onLoadStartChange=function(){this.trigger("loadstart")
};i._onLoadedChange=function(){this.trigger("loaded")};i._onPausedChange=function(k){if(k.value===true){this.trigger("pause");
a.remove(this.el,"mediaObject-playing")}else{this.trigger("play");a.remove(this.el,"mediaObject-ended");
a.add(this.el,"mediaObject-playing")}};i._onReadyChange=function(){this.trigger("ready")
};i._onErrorChange=function(){this.trigger("error")};i._onEnhancedChange=function(){this.trigger("enhanced");
a.add(this.el,"mediaObject-enhanced");a.add(this.mediaElement,"mediaObject-element")
};i._onCurrentTimeChange=function(){this.trigger("timeupdate")};i._onPlaybackRateChange=function(){this.trigger("ratechange")
};i._onDestroyedChange=function(){this.trigger("destroyed");a.remove(this.el,"mediaObject-playing");
a.remove(this.el,"mediaObject-ended");a.remove(this.el,"mediaObject-enhanced");
a.add(this.el,"mediaObject-destroyed")};i._onEndedChange=function(k){if(k.value===true){this.trigger("ended")
}};i._bindViewEvents=function(){if(!this.mediaEmitter){return}this.mediaEmitter.on("play",this._respondToPlay);
this.mediaEmitter.on("pause",this._respondToPause);this.mediaEmitter.on("timeupdate",this._respondToTimeUpdate);
this.mediaEmitter.on("ended",this._respondToEnded);this.mediaEmitter.on("durationchange",this._respondToDurationChange);
this.mediaEmitter.on("ratechange",this._respondToRateChange)};i._respondToPlay=function(){this.model.set({ended:false,paused:false})
};i._respondToPause=function(){this.model.setPaused(true)};i._respondToTimeUpdate=function(){var k=0;
if(this.mediaElement.currentTime){k=this.mediaElement.currentTime}else{if(this.mediaEmitter.currentTime){k=this.mediaEmitter.currentTime
}else{return}}if(this.getCurrentTime()!==k){this.model.set({currentTime:k})}};i._respondToEnded=function(){this.model.set({ended:true,paused:true});
a.remove(this.el,"mediaObject-playing");a.add(this.el,"mediaObject-ended")};i._respondToDurationChange=function(){var k=0;
if(this.mediaElement.duration){k=this.mediaElement.duration}else{if(this.mediaEmitter.duration){k=this.mediaEmitter.duration
}else{return}}this.model.set({duration:k})};i._respondToRateChange=function(){var k=0;
if(this.mediaElement.playbackRate){k=this.mediaElement.playbackRate}else{if(this.mediaEmitter.playbackRate){k=this.mediaEmitter.playbackRate
}else{return}}this.model.set({playbackRate:k})};i.enhance=function(){};i.play=function(){};
i.pause=function(){};i.reset=function(){};i.destroy=function(){};i.setCurrentTime=function(k){};
i.setPlaybackRate=function(k){};i.goToFrame=function(l){var k=l/this.model.frameRate;
return this.setCurrentTime(k)};i.goToPercent=function(k){var l=k*this.getDuration();
return this.setCurrentTime(l)};i._setReady=function(k){this.model.setReady(k)};
i._setLoadStart=function(k){this.model.setLoadStart(k)};i._setLoaded=function(k){this.model.setLoaded(k)
};i._setError=function(k){this.model.setError(k)};i._setDuration=function(k){this.model.setDuration(k)
};i._setPreload=function(k){this.model.setPreload(k)};i._setAutoplay=function(k){this.model.setAutoplay(k)
};i._setFrameRate=function(k){this.model.setFrameRate(k)};i._setEnhanced=function(k){this.model.setEnhanced(k)
};i._setDestroyed=function(k){this.model.setDestroyed(k)};i._setLooping=function(k){};
i.getType=function(){return this.model.getType()};i.getPaused=function(){return this.model.getPaused()
};i.getEnded=function(){return this.model.getEnded()};i.getReady=function(){return this.model.getReady()
};i.getLoadStart=function(){return this.model.getLoadStart()};i.getLoaded=function(){return this.model.getLoaded()
};i.getError=function(){return this.model.getError()};i.getDuration=function(){return this.model.getDuration()
};i.getEnhanced=function(){return this.model.getEnhanced()};i.getCurrentTime=function(){return this.model.getCurrentTime()
};i.getCurrentFrame=function(){return Math.floor(this.getCurrentTime()*this.options.frameRate)
};i.getCurrentPercent=function(){return this.model.getCurrentTime()/this.getDuration()
};i.getPlaybackRate=function(){return this.model.getPlaybackRate()};i.getFrameRate=function(){return this.model.getFrameRate()
};i.getPreload=function(){return this.model.getPreload()};i.getAutoplay=function(){return this.model.getAutoplay()
};i.getLooping=function(){return this.model.getLooping()};i.getDestroyed=function(){if(this.model){return this.model.getDestroyed()
}else{return true}};b.exports=h},{"./../models/MediaModel":366,"@marcom/ac-classlist":12,"@marcom/ac-mvc-view":361,"@marcom/ac-object":375}],368:[function(b,a,c){var d=b("./BaseView");
var j=b("@marcom/ac-dom-nodes");var h=b("@marcom/ac-flow").createFlow;var g=b("@marcom/ac-object/create");
var i=function(l,m,k){d.call(this,l,m,k);this._onLoad=this._onLoad.bind(this);this._onError=this._onError.bind(this);
this._onReady=this._onReady.bind(this)};var f=i.prototype=g(d.prototype);f._createMediaElement=function(){this.mediaElement=document.createElement("canvas")
};f._createMediaEmitter=function(){this.flowOptions={element:this.mediaElement,preload:false,keyframeCache:this.options.keyframeCache||false};
this.mediaEmitter=h(this.flowOptions,this.mediaSrc)};f._createMediaLoader=function(){this.mediaLoader=this.mediaEmitter
};f.load=function(){this._setLoadStart(true);this.mediaLoader.once("loaded",this._onLoad);
this.mediaLoader.once("error",this._onError);this.mediaEmitter.once("canplaythrough",this._onReady);
if(!this.loaded){return this._load()}};f._load=function(){return this.mediaLoader.load()
};f._onLoad=function(){this._setLoaded(true)};f._onError=function(){this._setError(true)
};f._onReady=function(){this._setReady(true);this._setDuration(this.mediaEmitter.duration);
this.setPlaybackRate(this.getPlaybackRate());this._totalFrames=this._getTotalFrames();
if(this.getAutoplay()){if(this.getEnhanced===false){this.enhance()}this.play()}};
f._getTotalFrames=function(){return this.getDuration()*this.getFrameRate()};f.enhance=function(){this._setEnhanced(true);
window.requestAnimationFrame(function(){if(this.mediaElement){this._inject()}}.bind(this))
};f._inject=function(){j.insertFirstChild(this.mediaElement,this.el)};f.destroy=function(){if(!this.getDestroyed()){this._remove();
this._setDestroyed(true);this.mediaEmitter.off();this._destroy(this,true)}};f._remove=function(){j.remove(this.mediaElement)
};f._destroy=function(k,l){if(typeof k.off==="function"){k.off()}if(l){var m;for(m in k){if(k.hasOwnProperty(m)){k[m]=null
}}}};f.play=function(){if(this.model.getPaused()===false){return}if(this.mediaEmitter.currentTime>=this.getDuration()){this.setCurrentTime(0)
}if(this.getReady()&&this.mediaEmitter!==null){this.mediaEmitter.play()}};f.pause=function(){if(this.model.getPaused()===true){return
}this.mediaEmitter.pause()};f.reset=function(){if(this.model.getCurrentTime()===0){return
}this.setCurrentTime(0);this.pause()};f.setCurrentTime=function(k){if(k<0){k=0}if(k>this.getDuration()){k=this.getDuration()
}this.mediaEmitter.currentTime=k};f.setPlaybackRate=function(k){this.mediaEmitter.playbackRate=k
};f._setLooping=function(k){this.mediaEmitter.loop=k;this.model.setLooping(k)};
a.exports=i},{"./BaseView":367,"@marcom/ac-dom-nodes":316,"@marcom/ac-flow":334,"@marcom/ac-object/create":371}],369:[function(b,a,c){var d=b("./BaseView");
var p=d.prototype;var j=b("@marcom/ac-dom-nodes");var m=b("@marcom/ac-dom-emitter").DOMEmitter;
var k=b("@marcom/ac-dom-styles");var l=b("@marcom/ac-asset-loader").AssetLoader;
var o=b("@marcom/ac-asset-loader").Asset.Video;var n=b("@marcom/ac-browser");var i=b("@marcom/ac-feature").isHandheld;
var h=b("@marcom/ac-feature").isTablet;var g=b("@marcom/ac-object/create");var q=function(s,t,r){this.srcForVideoEl=null;
this._cannotPlayInlineVideo=null;d.call(this,s,t,r);this._onLoaded=this._onLoaded.bind(this);
this._onReady=this._onReady.bind(this)};var f=q.prototype=g(d.prototype);f._createMediaElement=function(){this.mediaElement=document.createElement("video")
};f._createMediaEmitter=function(){this.mediaEmitter=new m(this.mediaElement)};
f._createMediaLoader=function(){var r,s;this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath);
if(this.mediaSrc.splitFileLoading){r=this.mediaSrc.basePath;s=new o(r,{element:this.mediaElement,forceElementLoading:false,split:true});
this.mediaLoader=new l(s)}else{this.mediaSrc.fileFormat=this._checkFileFormat(this.mediaSrc.fileFormat);
r=this.mediaSrc.basePath+this.mediaSrc.filename+this.mediaSrc.fileFormat;this.mediaLoader=this.mediaEmitter.loader;
this.srcForVideoEl=r}};f._forceTrailingSlash=function(r){if(r&&r.lastIndexOf("/")!==r.length-1){r=r+"/"
}return r};f._checkFileFormat=function(r){if(r&&r.lastIndexOf(".")!==0){r="."+r
}return r};f.load=function(){this._setLoadStart(true);if(this.mediaSrc.splitFileLoading){var s=function(){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}.bind(this);var r=function(){this._setError(true);
throw new Error("Video failed to load.")}.bind(this);this.mediaLoader.load().then(s,r)
}else{if(!this.cannotPlayInlineVideo()){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}this.mediaElement.src=this.srcForVideoEl;
if(this.cannotPlayInlineVideo()){this._onLoaded()}else{this.mediaElement.load()
}}};f._onLoaded=function(){this._setLoaded(true)};f.cannotPlayInlineVideo=function(){if(this._cannotPlayInlineVideo!==null){return this._cannotPlayInlineVideo
}var r=n.os==="iOS"&&i();var s=n.os==="iOS"&&h()&&n.version<8;this._cannotPlayInlineVideo=r||s;
return this._cannotPlayInlineVideo};f._onReady=function(){this._setReady(true);
if(this.getAutoplay()){if(!this.getEnhanced()){this.enhance()}this.play()}};f.enhance=function(){this._setEnhanced(true);
window.requestAnimationFrame(function(){if(this.mediaElement.tagName==="VIDEO"){j.insertLastChild(this.mediaElement,this.el);
k.setStyle(this.mediaElement,{visibility:"hidden"});window.requestAnimationFrame(function(){if(this.mediaElement){this.setPlaybackRate(this.getPlaybackRate());
k.setStyle(this.mediaElement,{visibility:"visible"})}}.bind(this))}}.bind(this))
};f.destroy=function(){if(!this.getDestroyed()){this._remove();this._setDestroyed(true);
this.mediaEmitter.off();this._destroy(this,true)}};f._remove=function(){j.remove(this.mediaElement)
};f._destroy=function(r,s){if(typeof r.off==="function"){r.off()}if(s){var t;for(t in r){if(r.hasOwnProperty(t)){r[t]=null
}}}};f._onEndedChange=function(r){p._onEndedChange.call(this,r);if(n.os==="iOS"&&i()&&r.value===true){this.mediaElement.webkitExitFullScreen()
}};f.play=function(){if(this.model.getPaused()===false){return}this.mediaElement.play()
};f.pause=function(){if(this.model.getPaused()===true){return}this.mediaElement.pause()
};f.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};f.setCurrentTime=function(r){if(!this.mediaElement.duration){return
}this.mediaElement.currentTime=r};f.setPlaybackRate=function(r){this.mediaElement.playbackRate=r
};f._setLooping=function(r){this.mediaElement.loop=r;this.model.setLooping(r)};
a.exports=q},{"./BaseView":367,"@marcom/ac-asset-loader":294,"@marcom/ac-browser":1,"@marcom/ac-dom-emitter":21,"@marcom/ac-dom-nodes":316,"@marcom/ac-dom-styles":54,"@marcom/ac-feature":208,"@marcom/ac-object/create":371}],370:[function(c,d,b){c("@marcom/ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":373,"@marcom/ac-polyfills/Array/isArray":393}],371:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],372:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":373}],373:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"@marcom/ac-polyfills/Array/prototype.forEach":396}],374:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],375:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":370,"./create":371,"./defaults":372,"./extend":373,"./getPrototypeOf":374,"./isDate":376,"./isEmpty":377,"./isRegExp":378,"./toQueryParameters":380}],376:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],377:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],378:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],379:[function(i,c,x){var s=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;
var b=typeof Array.prototype.indexOf==="function"?function(z,A){return z.indexOf(A)
}:function(z,B){for(var A=0;A<z.length;A++){if(z[A]===B){return A}}return -1};var k=Array.isArray||function(z){return s.call(z)=="[object Array]"
};var v=Object.keys||function(B){var z=[];for(var A in B){if(B.hasOwnProperty(A)){z.push(A)
}}return z};var u=typeof Array.prototype.forEach==="function"?function(z,A){return z.forEach(A)
}:function(z,B){for(var A=0;A<z.length;A++){B(z[A])}};var m=function(z,D,A){if(typeof z.reduce==="function"){return z.reduce(D,A)
}var C=A;for(var B=0;B<z.length;B++){C=D(C,z[B])}return C};var y=/^[0-9]+$/;function d(C,B){if(C[B].length==0){return C[B]={}
}var A={};for(var z in C[B]){if(l.call(C[B],z)){A[z]=C[B][z]}}C[B]=A;return A}function q(D,B,A,E){var z=D.shift();
if(l.call(Object.prototype,A)){return}if(!z){if(k(B[A])){B[A].push(E)}else{if("object"==typeof B[A]){B[A]=E
}else{if("undefined"==typeof B[A]){B[A]=E}else{B[A]=[B[A],E]}}}}else{var C=B[A]=B[A]||[];
if("]"==z){if(k(C)){if(""!=E){C.push(E)}}else{if("object"==typeof C){C[v(C).length]=E
}else{C=B[A]=[B[A],E]}}}else{if(~b(z,"]")){z=z.substr(0,z.length-1);if(!y.test(z)&&k(C)){C=d(B,A)
}q(D,C,z,E)}else{if(!y.test(z)&&k(C)){C=d(B,A)}q(D,C,z,E)}}}}function f(D,C,G){if(~b(C,"]")){var F=C.split("["),z=F.length,E=z-1;
q(F,D,"base",G)}else{if(!y.test(C)&&k(D.base)){var B={};for(var A in D.base){B[A]=D.base[A]
}D.base=B}n(D.base,C,G)}return D}function o(C){if("object"!=typeof C){return C}if(k(C)){var z=[];
for(var B in C){if(l.call(C,B)){z.push(C[B])}}return z}for(var A in C){C[A]=o(C[A])
}return C}function g(A){var z={base:{}};u(v(A),function(B){f(z,B,A[B])});return o(z.base)
}function h(A){var z=m(String(A).split("&"),function(B,F){var G=b(F,"="),E=t(F),C=F.substr(0,E||G),D=F.substr(E||G,F.length),D=D.substr(b(D,"=")+1,D.length);
if(""==C){C=F,D=""}if(""==C){return B}return f(B,p(C),p(D))},{base:{}}).base;return o(z)
}x.parse=function(z){if(null==z||""==z){return{}}return"object"==typeof z?g(z):h(z)
};var r=x.stringify=function(A,z){if(k(A)){return j(A,z)}else{if("[object Object]"==s.call(A)){return w(A,z)
}else{if("string"==typeof A){return a(A,z)}else{return z+"="+encodeURIComponent(String(A))
}}}};function a(A,z){if(!z){throw new TypeError("stringify expects an object")}return z+"="+encodeURIComponent(A)
}function j(z,C){var A=[];if(!C){throw new TypeError("stringify expects an object")
}for(var B=0;B<z.length;B++){A.push(r(z[B],C+"["+B+"]"))}return A.join("&")}function w(F,E){var A=[],D=v(F),C;
for(var B=0,z=D.length;B<z;++B){C=D[B];if(""==C){continue}if(null==F[C]){A.push(encodeURIComponent(C)+"=")
}else{A.push(r(F[C],E?E+"["+encodeURIComponent(C)+"]":encodeURIComponent(C)))}}return A.join("&")
}function n(B,A,C){var z=B[A];if(l.call(Object.prototype,A)){return}if(undefined===z){B[A]=C
}else{if(k(z)){z.push(C)}else{B[A]=[z,C]}}}function t(C){var z=C.length,B,D;for(var A=0;
A<z;++A){D=C[A];if("]"==D){B=false}if("["==D){B=true}if("="==D&&!B){return A}}}function p(A){try{return decodeURIComponent(A.replace(/\+/g," "))
}catch(z){return A}}},{}],380:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:379}],381:[function(b,c,a){var d=b("./promise/promise").Promise;
var f=b("./promise/polyfill").polyfill;a.Promise=d;a.polyfill=f},{"./promise/polyfill":385,"./promise/promise":386}],382:[function(c,d,b){var a=c("./utils").isArray;
var g=c("./utils").isFunction;function f(h){var i=this;if(!a(h)){throw new TypeError("You must pass an array to all.")
}return new i(function(o,n){var l=[],m=h.length,q;if(m===0){o([])}function p(r){return function(s){j(r,s)
}}function j(r,s){l[r]=s;if(--m===0){o(l)}}for(var k=0;k<h.length;k++){q=h[k];if(q&&g(q.then)){q.then(p(k),n)
}else{j(k,q)}}})}b.all=f},{"./utils":390}],383:[function(b,c,a){(function(f,g){var o=(typeof window!=="undefined")?window:{};
var l=o.MutationObserver||o.WebKitMutationObserver;var n=(typeof g!=="undefined")?g:(this===undefined?window:this);
function m(){return function(){f.nextTick(p)}}function i(){var s=0;var q=new l(p);
var r=document.createTextNode("");q.observe(r,{characterData:true});return function(){r.data=(s=++s%2)
}}function k(){return function(){n.setTimeout(p,1)}}var j=[];function p(){for(var s=0;
s<j.length;s++){var r=j[s];var t=r[0],q=r[1];t(q)}j=[]}var h;if(typeof f!=="undefined"&&{}.toString.call(f)==="[object process]"){h=m()
}else{if(l){h=i()}else{h=k()}}function d(s,q){var r=j.push([s,q]);if(r===1){h()
}}a.asap=d}).call(this,b("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{_process:270}],384:[function(d,f,a){var c={instrument:false};function b(g,h){if(arguments.length===2){c[g]=h
}else{return c[g]}}a.config=c;a.configure=b},{}],385:[function(b,c,a){(function(f){var d=b("./promise").Promise;
var h=b("./utils").isFunction;function g(){var j;if(typeof f!=="undefined"){j=f
}else{if(typeof window!=="undefined"&&window.document){j=window}else{j=self}}var i="Promise" in j&&"resolve" in j.Promise&&"reject" in j.Promise&&"all" in j.Promise&&"race" in j.Promise&&(function(){var k;
new j.Promise(function(l){k=l});return h(k)}());if(!i){j.Promise=d}}a.polyfill=g
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./promise":386,"./utils":390}],386:[function(q,d,D){var B=q("./config").config;
var A=q("./config").configure;var s=q("./utils").objectOrFunction;var a=q("./utils").isFunction;
var f=q("./utils").now;var g=q("./all").all;var j=q("./race").race;var l=q("./resolve").resolve;
var c=q("./reject").reject;var u=q("./asap").asap;var r=0;B.async=u;function h(E){if(!a(E)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}if(!(this instanceof h)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}this._subscribers=[];z(E,this)}function z(I,H){function E(J){v(H,J)}function G(J){k(H,J)
}try{I(E,G)}catch(F){G(F)}}function x(L,N,K,G){var E=a(K),J,I,M,F;if(E){try{J=K(G);
M=true}catch(H){F=true;I=H}}else{J=G;M=true}if(t(N,J)){return}else{if(E&&M){v(N,J)
}else{if(F){k(N,I)}else{if(L===b){v(N,J)}else{if(L===C){k(N,J)}}}}}}var m=void 0;
var p=0;var b=1;var C=2;function o(E,J,I,H){var G=E._subscribers;var F=G.length;
G[F]=J;G[F+b]=I;G[F+C]=H}function w(I,E){var K,J,H=I._subscribers,G=I._detail;for(var F=0;
F<H.length;F+=3){K=H[F];J=H[F+E];x(E,K,J,G)}I._subscribers=null}h.prototype={constructor:h,_state:undefined,_detail:undefined,_subscribers:undefined,then:function(J,H){var I=this;
var F=new this.constructor(function(){});if(this._state){var G=arguments;B.async(function E(){x(I._state,F,G[I._state-1],I._detail)
})}else{o(this,F,J,H)}return F},"catch":function(E){return this.then(null,E)}};
h.all=g;h.race=j;h.resolve=l;h.reject=c;function t(I,G){var H=null,E;try{if(I===G){throw new TypeError("A promises callback cannot return that same promise.")
}if(s(G)){H=G.then;if(a(H)){H.call(G,function(J){if(E){return true}E=true;if(G!==J){v(I,J)
}else{i(I,J)}},function(J){if(E){return true}E=true;k(I,J)});return true}}}catch(F){if(E){return true
}k(I,F);return true}return false}function v(F,E){if(F===E){i(F,E)}else{if(!t(F,E)){i(F,E)
}}}function i(F,E){if(F._state!==m){return}F._state=p;F._detail=E;B.async(y,F)}function k(F,E){if(F._state!==m){return
}F._state=p;F._detail=E;B.async(n,F)}function y(E){w(E,E._state=b)}function n(E){w(E,E._state=C)
}D.Promise=h},{"./all":382,"./asap":383,"./config":384,"./race":387,"./reject":388,"./resolve":389,"./utils":390}],387:[function(c,f,b){var a=c("./utils").isArray;
function d(g){var h=this;if(!a(g)){throw new TypeError("You must pass an array to race.")
}return new h(function(m,l){var k=[],n;for(var j=0;j<g.length;j++){n=g[j];if(n&&typeof n.then==="function"){n.then(m,l)
}else{m(n)}}})}b.race=d},{"./utils":390}],388:[function(b,c,a){function d(g){var f=this;
return new f(function(i,h){h(g)})}a.reject=d},{}],389:[function(b,c,a){function d(g){if(g&&typeof g==="object"&&g.constructor===this){return g
}var f=this;return new f(function(h){h(g)})}a.resolve=d},{}],390:[function(d,f,b){function g(i){return h(i)||(typeof i==="object"&&i!==null)
}function h(i){return typeof i==="function"}function a(i){return Object.prototype.toString.call(i)==="[object Array]"
}var c=Date.now||function(){return new Date().getTime()};b.objectOrFunction=g;b.isFunction=h;
b.isArray=a;b.now=c},{}],391:[function(b,c,a){(function(o,q){var k="3.7.3-pre";
var h=o.html5||{};var l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
var g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
var v;var m="_html5shiv";var d=0;var s={};var i;(function(){try{var y=q.createElement("a");
y.innerHTML="<xyz></xyz>";v=("hidden" in y);i=y.childNodes.length==1||(function(){(q.createElement)("a");
var A=q.createDocumentFragment();return(typeof A.cloneNode=="undefined"||typeof A.createDocumentFragment=="undefined"||typeof A.createElement=="undefined")
}())}catch(z){v=true;i=true}}());function j(y,A){var B=y.createElement("p"),z=y.getElementsByTagName("head")[0]||y.documentElement;
B.innerHTML="x<style>"+A+"</style>";return z.insertBefore(B.lastChild,z.firstChild)
}function p(){var y=n.elements;return typeof y=="string"?y.split(" "):y}function t(y,z){var A=n.elements;
if(typeof A!="string"){A=A.join(" ")}if(typeof y!="string"){y=y.join(" ")}n.elements=A+" "+y;
f(z)}function u(y){var z=s[y[m]];if(!z){z={};d++;y[m]=d;s[d]=z}return z}function r(B,y,A){if(!y){y=q
}if(i){return y.createElement(B)}if(!A){A=u(y)}var z;if(A.cache[B]){z=A.cache[B].cloneNode()
}else{if(g.test(B)){z=(A.cache[B]=A.createElem(B)).cloneNode()}else{z=A.createElem(B)
}}return z.canHaveChildren&&!l.test(B)&&!z.tagUrn?A.frag.appendChild(z):z}function w(A,C){if(!A){A=q
}if(i){return A.createDocumentFragment()}C=C||u(A);var D=C.frag.cloneNode(),B=0,z=p(),y=z.length;
for(;B<y;B++){D.createElement(z[B])}return D}function x(y,z){if(!z.cache){z.cache={};
z.createElem=y.createElement;z.createFrag=y.createDocumentFragment;z.frag=z.createFrag()
}y.createElement=function(A){if(!n.shivMethods){return z.createElem(A)}return r(A,y,z)
};y.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+p().join().replace(/[\w\-:]+/g,function(A){z.createElem(A);
z.frag.createElement(A);return'c("'+A+'")'})+");return n}")(n,z.frag)}function f(y){if(!y){y=q
}var z=u(y);if(n.shivCSS&&!v&&!z.hasCSS){z.hasCSS=!!j(y,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
}if(!i){x(y,z)}return y}var n={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:k,shivCSS:(h.shivCSS!==false),supportsUnknownElements:i,shivMethods:(h.shivMethods!==false),type:"default",shivDocument:f,createElement:r,createDocumentFragment:w,addElements:t};
o.html5=n;f(q);if(typeof c=="object"&&c.exports){c.exports=n}}(typeof window!=="undefined"?window:this,document))
},{}],392:[function(b,c,a){b("./Array/isArray");b("./Array/prototype.every");b("./Array/prototype.filter");
b("./Array/prototype.forEach");b("./Array/prototype.indexOf");b("./Array/prototype.lastIndexOf");
b("./Array/prototype.map");b("./Array/prototype.reduce");b("./Array/prototype.reduceRight");
b("./Array/prototype.slice");b("./Array/prototype.some")},{"./Array/isArray":393,"./Array/prototype.every":394,"./Array/prototype.filter":395,"./Array/prototype.forEach":396,"./Array/prototype.indexOf":397,"./Array/prototype.lastIndexOf":398,"./Array/prototype.map":399,"./Array/prototype.reduce":400,"./Array/prototype.reduceRight":401,"./Array/prototype.slice":402,"./Array/prototype.some":403}],393:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],394:[function(b,c,a){if(!Array.prototype.every){Array.prototype.every=function d(k,j){var h=Object(this);
var f=h.length>>>0;var g;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(g=0;g<f;g+=1){if(g in h&&!k.call(j,h[g],g,h)){return false}}return true}}},{}],395:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],396:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],397:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],398:[function(c,d,b){if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function a(k,j){var g=Object(this);
var f=g.length>>>0;var h;j=parseInt(j,10);if(f<=0){return -1}h=(typeof j==="number")?Math.min(f-1,j):f-1;
h=h>=0?h:f-Math.abs(h);for(;h>=0;h-=1){if(h in g&&k===g[h]){return h}}return -1
}}},{}],399:[function(b,c,a){if(!Array.prototype.map){Array.prototype.map=function d(l,k){var h=Object(this);
var g=h.length>>>0;var j;var f=new Array(g);if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(j=0;j<g;j+=1){if(j in h){f[j]=l.call(k,h[j],j,h)}}return f}}},{}],400:[function(b,c,a){if(!Array.prototype.reduce){Array.prototype.reduce=function d(l,h){var j=Object(this);
var g=j.length>>>0;var k=0;var f;if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}if(typeof h==="undefined"){if(!g){throw new TypeError("Reduce of empty array with no initial value")
}f=j[0];k=1}else{f=h}while(k<g){if(k in j){f=l.call(undefined,f,j[k],k,j);k+=1}}return f
}}},{}],401:[function(c,d,b){if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function a(l,h){var j=Object(this);
var g=j.length>>>0;var k=g-1;var f;if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}if(h===undefined){if(!g){throw new TypeError("Reduce of empty array with no initial value")
}f=j[g-1];k=g-2}else{f=h}while(k>=0){if(k in j){f=l.call(undefined,f,j[k],k,j);
k-=1}}return f}}},{}],402:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],403:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],404:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],405:[function(b,c,a){b("./Date/now");
b("./Date/prototype.toISOString");b("./Date/prototype.toJSON")},{"./Date/now":406,"./Date/prototype.toISOString":407,"./Date/prototype.toJSON":408}],406:[function(c,d,a){if(!Date.now){Date.now=function b(){return new Date().getTime()
}}},{}],407:[function(b,d,a){if(!Date.prototype.toISOString){Date.prototype.toISOString=function c(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var g={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1000).toFixed(3).substr(2,3)};
var h;var f;for(h in g){if(g.hasOwnProperty(h)&&h!=="year"&&h!=="mseconds"){g[h]=String(g[h]).length===1?"0"+String(g[h]):String(g[h])
}}if(g.year<0||g.year>9999){f=g.year<0?"-":"+";g.year=f+String(Math.abs(g.year/1000000)).substr(2,6)
}return g.year+"-"+g.month+"-"+g.day+"T"+g.hours+":"+g.minutes+":"+g.seconds+"."+g.mseconds+"Z"
}}},{}],408:[function(b,c,a){if(!Date.prototype.toJSON){Date.prototype.toJSON=function(h){var i=Object(this);
var d;var g=function(j){var l=typeof j;var k=[null,"undefined","boolean","string","number"].some(function(m){return m===l
});if(k){return true}return false};var f=function(j){var k;if(g(j)){return j}k=(typeof j.valueOf==="function")?j.valueOf():(typeof j.toString==="function")?j.toString():null;
if(k&&g(k)){return k}throw new TypeError(j+" cannot be converted to a primitive")
};d=f(i);if(typeof d==="number"&&!isFinite(d)){return null}if(typeof i.toISOString!=="function"){throw new TypeError("toISOString is not callable")
}return i.toISOString.call(i)}}},{}],409:[function(b,c,a){b("./Element/prototype.classList")
},{"./Element/prototype.classList":410}],410:[function(b,c,a){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
}var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
}}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
},k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
}return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
}},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
};i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
}};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
}};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
};if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
}catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
}}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
}else{return d.call(this,h)}}}f=null}())}}},{}],411:[function(b,c,a){b("./Function/prototype.bind")
},{"./Function/prototype.bind":412}],412:[function(b,c,a){if(!Function.prototype.bind){Function.prototype.bind=function(d){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var i=Array.prototype.slice.call(arguments,1);var h=this;var f=function(){};var g=function(){return h.apply((this instanceof f&&d)?this:d,i.concat(Array.prototype.slice.call(arguments)))
};f.prototype=this.prototype;g.prototype=new f();return g}}},{}],413:[function(require,module,exports){if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;
i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}())},{}],414:[function(b,c,a){b("./Object/assign");b("./Object/create");b("./Object/is");
b("./Object/keys")},{"./Object/assign":415,"./Object/create":416,"./Object/is":417,"./Object/keys":418}],415:[function(c,d,b){var g=navigator.userAgent.toLowerCase();
var h=(g.indexOf("msie")>-1)?parseInt(g.split("msie")[1]):false;var a=h<9;if(!Object.assign){if(!Object.keys){Object.keys=function f(j){var i=[];
var k;if((!j)||(typeof j.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(k in j){if(j.hasOwnProperty(k)){i.push(k)}}return i}}if(!a&&Object.defineProperty){if(!Object.assign){Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:function(t,j){if(t===undefined||t===null){throw new TypeError("Cannot convert first argument to object")
}var v=Object(t);var r=false;var k;for(var l=1;l<arguments.length;l++){var o=arguments[l];
if(o===undefined||o===null){continue}var n=Object.keys(Object(o));for(var m=0,q=n.length;
m<q;m++){var u=n[m];try{var p=Object.getOwnPropertyDescriptor(o,u);if(p!==undefined&&p.enumerable){v[u]=o[u]
}}catch(s){if(!r){r=true;k=s}}}if(r){throw k}}return v}})}}else{Object.assign=function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]}}}},{}],416:[function(b,c,a){if(!Object.create){var d=function(){};
Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
}if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
}d.prototype=f;return new d()}}},{}],417:[function(b,c,a){if(!Object.is){Object.is=function(f,d){if(f===0&&d===0){return 1/f===1/d
}if(f!==f){return d!==d}return f===d}}},{}],418:[function(b,c,a){if(!Object.keys){Object.keys=function d(g){var f=[];
var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}},{}],419:[function(b,c,a){c.exports=b("es6-promise").polyfill()
},{"es6-promise":381}],420:[function(b,c,a){b("./String/prototype.trim")},{"./String/prototype.trim":421}],421:[function(c,d,b){if(!String.prototype.trim){String.prototype.trim=function a(){return this.replace(/^\s+|\s+$/g,"")
}}},{}],422:[function(b,c,a){window.XMLHttpRequest=window.XMLHttpRequest||function(){var f;
try{f=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{f=new ActiveXObject("Microsoft.XMLHTTP")
}catch(d){f=false}}return f}},{}],423:[function(b,c,a){b("./Array");b("./console.log");
b("./CustomEvent");b("./Date");b("./Element");b("./Function");b("./getComputedStyle");
b("./html5shiv");b("./JSON");b("./matchMedia");b("./Object");b("./Promise");b("./requestAnimationFrame");
b("./String");b("./XMLHttpRequest")},{"./Array":392,"./CustomEvent":404,"./Date":405,"./Element":409,"./Function":411,"./JSON":413,"./Object":414,"./Promise":419,"./String":420,"./XMLHttpRequest":422,"./console.log":424,"./getComputedStyle":425,"./html5shiv":426,"./matchMedia":427,"./requestAnimationFrame":428}],424:[function(b,c,a){(function(d){var k,j;
var h={};var i=function(){};var g="memory".split(",");var f=("assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");
while(k=g.pop()){d[k]=d[k]||h}while(j=f.pop()){d[j]=d[j]||i}})(this.console=this.console||{})
},{}],425:[function(d,f,c){if(!window.getComputedStyle){function g(j,m,l){j.document;
var k=j.currentStyle[m].match(/(-?[\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],i=k[1],n=k[2],h;
l=!l?l:/%|em/.test(n)&&j.parentElement?g(j.parentElement,"fontSize",null):16;h=m=="fontSize"?l:/width/i.test(m)?j.clientWidth:j.clientHeight;
return n=="%"?i/100*h:n=="cm"?i*0.3937*96:n=="em"?i*l:n=="in"?i*96:n=="mm"?i*0.3937*96/10:n=="pc"?i*12*96/72:n=="pt"?i*96/72:i
}function b(k,n){var o=n=="border"?"Width":"",j=n+"Top"+o,m=n+"Right"+o,h=n+"Bottom"+o,i=n+"Left"+o;
k[n]=(k[j]==k[m]&&k[j]==k[h]&&k[j]==k[i]?[k[j]]:k[j]==k[h]&&k[i]==k[m]?[k[j],k[m]]:k[i]==k[m]?[k[j],k[m],k[h]]:[k[j],k[m],k[h],k[i]]).join(" ")
}function a(k){var l=this,j=k.currentStyle,n=g(k,"fontSize"),h=function(o){return"-"+o.toLowerCase()
},m;for(m in j){Array.prototype.push.call(l,m=="styleFloat"?"float":m.replace(/[A-Z]/,h));
if(m=="width"){l[m]=k.offsetWidth+"px"}else{if(m=="height"){l[m]=k.offsetHeight+"px"
}else{if(m=="styleFloat"){l["float"]=j[m];l.cssFloat=j[m]}else{if(/margin.|padding.|border.+W/.test(m)&&l[m]!="auto"){l[m]=Math.round(g(k,m,n))+"px"
}else{if(/^outline/.test(m)){try{l[m]=j[m]}catch(i){l.outlineColor=j.color;l.outlineStyle=l.outlineStyle||"none";
l.outlineWidth=l.outlineWidth||"0px";l.outline=[l.outlineColor,l.outlineWidth,l.outlineStyle].join(" ")
}}else{l[m]=j[m]}}}}}}b(l,"margin");b(l,"padding");b(l,"border");l.fontSize=Math.round(n)+"px"
}a.prototype={constructor:a,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")
},getPropertyValue:function(h){return this[h.replace(/-\w/g,function(i){return i[1].toUpperCase()
})]},item:function(h){return this[h]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")
}};window.getComputedStyle=function(h){return new a(h)}}},{}],426:[function(b,c,a){b("html5shiv/src/html5shiv")
},{"html5shiv/src/html5shiv":391}],427:[function(b,c,a){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
}}(document))},{}],428:[function(b,c,a){(function(){var f=0;var g=["ms","moz","webkit","o"];
for(var d=0;d<g.length&&!window.requestAnimationFrame;++d){window.requestAnimationFrame=window[g[d]+"RequestAnimationFrame"];
window.cancelAnimationFrame=window[g[d]+"CancelAnimationFrame"]||window[g[d]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(l,i){var h=Date.now();
var j=Math.max(0,16-(h-f));var k=window.setTimeout(function(){l(h+j)},j);f=h+j;
return k}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(h){clearTimeout(h)
}}}())},{}],429:[function(b,c,a){c.exports={Queue:b("./ac-queue/Queue"),QueueItem:b("./ac-queue/QueueItem"),LiveQueue:b("./ac-queue/LiveQueue")}
},{"./ac-queue/LiveQueue":430,"./ac-queue/Queue":431,"./ac-queue/QueueItem":432}],430:[function(b,c,a){b("@marcom/ac-polyfills/Promise");
b("@marcom/ac-polyfills/requestAnimationFrame");b("@marcom/ac-polyfills/Function/prototype.bind");
var g=b("./Queue");var h=b("./QueueItem");function f(i){this._queue=new g();this._maxProcesses=i||1;
this._availableSlots=this._maxProcesses;this._rafId=0;this._isRunning=false;this._boundFunctions={_run:this._run.bind(this),_releaseSlot:this._releaseSlot.bind(this)}
}var d=f.prototype;d.start=function(){if(this._isRunning){cancelAnimationFrame(this._rafId)
}this._rafId=requestAnimationFrame(this._boundFunctions._run);this._isRunning=true
};d.pause=function(){if(this._isRunning){cancelAnimationFrame(this._rafId);this._rafId=0
}this._isRunning=false};d.stop=function(){this.pause();this.clear()};d.enqueue=function(i,j){if(typeof i!=="function"){throw new Error("LiveQueue can only enqueue functions")
}return this._queue.enqueue(i,j)};d.clear=function(){this._queue=new g()};d.destroy=function(){this.pause();
this._isRunning=false;this._queue=null;this._boundFunctions=null};d.count=function(){return this._queue.count()+this.pending()
};d.pending=function(){return this._maxProcesses-this._availableSlots};d.isEmpty=function(){return this.count()===0
};d._run=function(){if(!this._isRunning){return}this._rafId=requestAnimationFrame(this._boundFunctions._run);
if(this._queue.isEmpty()||this._availableSlots==0){return}var j=this._queue.dequeue();
var i=j.data();if(this._isPromise(i)){this._retainSlot();i.then(this._boundFunctions._releaseSlot,this._boundFunctions._releaseSlot)
}this._stopRunningIfDone()};d._retainSlot=function(){this._availableSlots--};d._releaseSlot=function(){this._availableSlots++;
this._stopRunningIfDone()};d._stopRunningIfDone=function(){if(this._rafId!=0&&this._queue.count()===0&&this._availableSlots==this._maxProcesses){cancelAnimationFrame(this._rafId);
this._rafId=0}};d._isPromise=function(i){return !!(i&&typeof i.then==="function")
};c.exports=f},{"./Queue":431,"./QueueItem":432,"@marcom/ac-polyfills/Function/prototype.bind":412,"@marcom/ac-polyfills/Promise":419,"@marcom/ac-polyfills/requestAnimationFrame":428}],431:[function(b,c,a){var g=b("./QueueItem");
function f(){this._items=[]}var d=f.prototype;d.enqueue=function(i,h){if(h===undefined){h=f.PRIORITY_DEFAULT
}return this.enqueueQueueItem(new g(i,h))};d.enqueueQueueItem=function(h){this._items.push(h);
return h};d.dequeue=function(){this._heapSort();var i=this._items.length-1;var h=this._items[0];
this._items[0]=this._items[i];this._items.pop();return h};d.peek=function(){if(this.count()==0){return null
}this._heapSort();return this._items[0]};d.isEmpty=function(){return this._items.length===0
};d.count=function(){return this._items.length};d.toString=function(){var j=["Queue total items: "+this.count()+"\n"];
for(var h=0;h<this.count();++h){j.push(this._items[h].toString()+"\n")}return j.join("")
};d._heapSort=function(){var h=0;for(var m=this._items.length-1;m>=0;m--){var n=m;
while(n>0){h++;var j=Math.floor((n-1)/2);if(this._items[n].compareTo(this._items[j])>=0){break
}var l=this._items[n];this._items[n]=this._items[j];this._items[j]=l;n=j}}};f.PRIORITY_LOW=10;
f.PRIORITY_DEFAULT=5;f.PRIORITY_HIGH=1;c.exports=f},{"./QueueItem":432}],432:[function(b,c,a){var g=0;
function f(i,h){this.priority=h;this.data=i;this.insertionOrder=g++}var d=f.prototype;
d.compareTo=function(h){if(this.priority<h.priority){return -1}else{if(this.priority>h.priority){return 1
}else{return(this.insertionOrder<h.insertionOrder)?-1:1}}};d.toString=function(){return"QueueItem {priority:"+this.priority+",\tdata:"+this.data+"\tinsertionOrder:"+this.insertionOrder+"}"
};c.exports=f},{}],433:[function(d,b,j){d("@marcom/ac-polyfills/Object/create");
d("@marcom/ac-polyfills/Element/prototype.classList");var g=d("@marcom/ac-object/defaults");
var i=d("@marcom/ac-queue").LiveQueue;var m=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var h=d("@marcom/ac-dom-events/addEventListener");var c=d("@marcom/ac-dom-events/removeEventListener");
var a=d("@marcom/ac-dom-traversal/querySelectorAll");var f={container:document.body,includeContainer:false};
var l={loadingPoolSize:8,timeout:null,imageClassName:"progressive-image"};function n(o){m.call(this);
this.options=g(f,o);this.loadingOptions=null;this.els=[];this.loadingQueue=null;
this._queueItems=[];this._queueItemsObj={};this._loadOrder=[];this._timeout=null;
this._didCallLoad=false}var k=n.prototype=Object.create(m.prototype);k.load=function(r){if(this._didCallLoad){return
}this._didCallLoad=true;this.loadingOptions=g(l,r);this.loadingQueue=new i(this.loadingOptions.loadingPoolSize);
var q=this._getProgressiveClassName(),p="."+q;this.els=a(p,this.options.container);
if(this.options.includeContainer&&this.options.container.classList.contains(q)){this.els.unshift(this.options.container)
}var s,o=this.els.length,t;for(s=0;s<o;s++){t={queueItem:this.loadingQueue.enqueue(this._loadNextItem.bind(this,s),s),el:this.els[s],id:s};
this._queueItems.push(t);this._queueItemsObj[s]=t}this.loadingQueue.start();if(typeof this.loadingOptions.timeout==="number"){this._timeout=setTimeout(this.cancel.bind(this),this.loadingOptions.timeout)
}};k.setVisible=function(o){o.classList.remove(this.loadingOptions.imageClassName)
};k.cancel=function(){if(this.els){var p,o=this.els.length;for(p=0;p<o;p++){this.setVisible(this.els[p])
}}this._handleLoadingComplete()};k.destroy=function(){this.cancel();this.off();
m.prototype.destroy.call(this)};k._loadNextItem=function(o){return new Promise(function(p,r,q){var s=this._queueItemsObj[p];
this._loadAndSetVisible(s.el).then(function(){var t=this._queueItems.indexOf(s);
this._queueItems.splice(t,1);this._queueItemsObj[s.id]=null;r();this._handleImageLoad(s.el);
s=r=null;if(this.loadingQueue.count()===1){this._handleLoadingComplete()}}.bind(this))
}.bind(this,o))};k._loadAndSetVisible=function(o){this.setVisible(o);var p=this._getBackgroundImageSrc(o);
return this._loadImage(p)};k._getBackgroundImageSrc=function(p){var o=p.currentStyle;
if(!o){o=window.getComputedStyle(p,false)}if(o.backgroundImage.indexOf("url(")===0){return o.backgroundImage.slice(4,-1).replace(/"/g,"")
}return null};k._getProgressiveClassName=function(){return this.loadingOptions.imageClassName
};k._loadImage=function(o){return new Promise(this._loadImagePromiseFunc.bind(this,o))
};k._loadImagePromiseFunc=function(s,r,q){function p(){c(this,"load",p);r(this);
r=null}if(!s){r(null);return}var o=new Image();h(o,"load",p);o.src=s};k._clearTimeout=function(){if(this._timeout){window.clearTimeout(this._timeout);
this._timeout=null}};k._handleImageLoad=function(o){this.trigger("image-load",o)
};k._handleLoadingComplete=function(){this.loadingQueue.stop();this._clearTimeout();
this.trigger("complete")};b.exports=n},{"@marcom/ac-dom-events/addEventListener":24,"@marcom/ac-dom-events/removeEventListener":33,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-object/defaults":372,"@marcom/ac-polyfills/Element/prototype.classList":410,"@marcom/ac-polyfills/Object/create":416,"@marcom/ac-queue":429}],434:[function(c,d,a){var b=(function(){var h=["","-webkit-","-moz-","-o-","-ms-"];
var f={"animation-delay":"transitionend","-o-animation-delay":"oTransitionEnd","-moz-animation-delay":"transitionend","-webkit-animation-delay":"webkitTransitionEnd","-ms-animation-delay":"transitionend"};
var l={"animation-delay":"animationstart","-o-animation-delay":"oanimationstart","-moz-animation-delay":"animationstart","-webkit-animation-delay":"webkitAnimationStart","-ms-animation-delay":"MSAnimationStart"};
var i={"animation-delay":"animationiteration","-o-animation-delay":"oanimationiteration","-moz-animation-delay":"animationiteration","-webkit-animation-delay":"webkitAnimationIteration","-ms-animation-delay":"MSAnimationIteration"};
var o={"animation-delay":"animationend","-o-animation-delay":"oanimationend","-moz-animation-delay":"animationend","-webkit-animation-delay":"webkitAnimationEnd","-ms-animation-delay":"MSAnimationEnd"};
var g=document.createElement("_");var j=["","-webkit-","-moz-","-o-","-ms-"];function n(r){for(var p=0;
p<j.length;p++){var q=h[p]+r;if(g.style[q]!==undefined){return q}}return undefined
}var m=["-webkit-","","-moz-","-o-","-ms-"];function k(r){for(var p=0;p<m.length;
p++){var q=m[p]+r;if(g.style[q]!==undefined){return q}}return undefined}return{filter:k("filter"),transform:n("transform"),transformOrigin:n("transform-origin"),transition:n("transition"),transitionDelay:n("transition-delay"),transitionDuration:n("transition-duration"),transitionProperty:n("transition-property"),transitionTimingFunction:n("transition-timing-function"),transitionEnd:f[n("animation-delay")],animation:n("animation"),animationDelay:n("animation-delay"),animationDirection:n("animation-direction"),animationDuration:n("animation-duration"),animationFillMode:n("animation-fill-mode"),animationIterationCount:n("animation-iteration-count"),animationName:n("animation-name"),animationTimingFunction:n("animation-timing-function"),animationPlayState:n("animation-play-state"),animationStart:l[n("animation-delay")],animationIteration:i[n("animation-delay")],animationEnd:o[n("animation-delay")],}
}());d.exports=b},{}],435:[function(b,c,a){arguments[4][19][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":436,dup:19}],436:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{dup:20}],437:[function(b,c,a){c.exports={BreakpointsDelegate:b("./ac-breakpoints-delegate/BreakpointsDelegate")}
},{"./ac-breakpoints-delegate/BreakpointsDelegate":438}],438:[function(f,b,j){var d=f("@marcom/ac-shared-instance").SharedInstance,g=f("@marcom/ac-object"),q=f("@marcom/ac-window-delegate").WindowDelegate,c=f("@marcom/ac-window-delegate").WindowDelegateCustomEvent,p=f("@marcom/ac-event-emitter").EventEmitter;
var m="ac-breakpoints-delegate:BreakpointsDelegate",a="2.1.1";var n="breakpoint",o="resize orientationchange";
var h={large:{"min-width":1069,"max-width":1441,content:980,oldie:true},xlarge:{"min-width":1442,content:980},medium:{"min-width":736,"max-width":1068,content:692},small:{"min-width":320,"max-width":735,content:288,"max-device-width":768}};
var i={minWidth:"min-width",maxWidth:"max-width",maxDeviceWidth:"max-device-width",content:"content",oldIE:"oldie"};
function l(r){this._customEvent=new c(n,this._onBreakpointListenerAdded.bind(this),this._onBreakpointListenerRemoved.bind(this));
this.setBreakpoints(h)}var k=l.prototype;k.initialize=function(){this._breakpoint=null;
this._lastBreakpoint=null;this._handleOldIE();this._breakpointOrder=this._setBreakpointOrder();
if(!this._isOldIE){this._handleResize()}};k.getCustomEvent=function(){return this._customEvent
};k.getBreakpoint=function(){if(!this._customEvent.active){this._handleResize()
}return this._breakpoint};k.setBreakpoints=function(r){this.breakpoints=g.clone(r);
this.initialize()};k._handleResize=function(){var v=q.clientWidth(),w;var u,t,s,r=this._breakpointOrder.length;
for(u=0;u<r;u++){t=this._breakpointOrder[u];s=this.breakpoints[t];if(s._breakPosition>v){break
}}if(u>0){u=u-1}w=this.breakpoints[this._breakpointOrder[u]];if(!this._breakpoint){this._breakpoint=w;
return}if(w.name===this._breakpoint.name){return}this._lastBreakpoint=this._breakpoint;
this._breakpoint=w;q.trigger(n,{incoming:this._breakpoint,outgoing:this._lastBreakpoint})
};k._setBreakpointOrder=function(){var v=0,s=[],r=[],u=i.minWidth,t;for(t in this.breakpoints){if(this.breakpoints.hasOwnProperty(t)){this.breakpoints[t].name=t;
s.push(this.breakpoints[t][u])}}s.sort(function(x,w){return x-w});s.forEach(function(x){var w;
for(w in this.breakpoints){if(this.breakpoints.hasOwnProperty(w)){if(this.breakpoints[w][u]===x){r.push(w)
}}}},this);r.forEach(function(x,w){this.breakpoints[x]._breakPosition=v;if(r[w+1]){v=this.breakpoints[r[w+1]][u]
}},this);return r};k._handleOldIE=function(){var r=document.documentElement,t=i.oldIE;
if(r.className.indexOf("no-"+t)>-1||r.className.indexOf(t)===-1){return}this._isOldIE=true;
this._replaceBreakpoints(function(u){return u[t]===true});var s;for(s in this.breakpoints){if(this.breakpoints.hasOwnProperty(s)){this._breakpoint=this.breakpoints[s];
return}}};k._replaceBreakpoints=function(u){var s,t={},r;for(s in this.breakpoints){if(this.breakpoints.hasOwnProperty(s)){r=this.breakpoints[s];
if(u(r)){t[s]=g.clone(this.breakpoints[s])}}}this.breakpoints=t};k._onBreakpointListenerAdded=function(){q.on(o,this._handleResize,this)
};k._onBreakpointListenerRemoved=function(){q.off(o,this._handleResize,this)};b.exports=d.share(m,a,l)
},{"@marcom/ac-event-emitter":435,"@marcom/ac-object":375,"@marcom/ac-shared-instance":439,"@marcom/ac-window-delegate":443}],439:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":440,dup:351}],440:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{dup:352}],441:[function(b,c,a){arguments[4][19][0].apply(a,arguments)},{"./ac-event-emitter/EventEmitter":442,dup:19}],442:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{dup:20}],443:[function(b,c,a){c.exports={WindowDelegate:b("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:b("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:b("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":446,"./ac-window-delegate/WindowDelegateCustomEvent":447,"./ac-window-delegate/WindowDelegateOptimizer":448}],444:[function(b,c,a){var f=b("@marcom/ac-event-emitter").EventEmitter;
var g=function(){this._emitter=new f();this._customEvents={}};var d=g.prototype;
d.on=function(h,j,i){this._activateCustomEvents(h);this._emitterOn.apply(this,arguments);
return this};d.once=function(h,j,i){this._emitterOnce.apply(this,arguments);return this
};d.off=function(h,j,i){this._emitterOff.apply(this,arguments);this._deactivateCustomEvents(h);
return this};d.has=function(h,j,i){return this._emitter.has.apply(this._emitter,arguments)
};d.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};d.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};d.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};d.add=function(h){this._customEvents[h.name]=h};d.canHandleCustomEvent=function(h){return this._customEvents.hasOwnProperty(h)
};d.isHandlingCustomEvent=function(h){if(this._customEvents[h]&&this._customEvents[h].active){return true
}return false};d._activateCustomEvents=function(l){var j=l.split(" "),k,m,h=j.length;
for(m=0;m<h;m++){k=j[m];if(this._customEvents[k]&&!this._customEvents[k].active){this._customEvents[k].initialize();
this._customEvents[k].active=true}}};d._deactivateCustomEvents=function(k){var l;
if(!k||k.length===0){for(l in this._customEvents){if(this._customEvents.hasOwnProperty(l)){this._deactivateCustomEvent(l)
}}return}var j=k.split(" "),h=j.length;for(l=0;l<h;l++){this._deactivateCustomEvent(j[l])
}};d._deactivateCustomEvent=function(h){if(!this.has(h)&&this._customEvents[h]&&this._customEvents[h].active){this._customEvents[h].deinitialize();
this._customEvents[h].active=false}};d._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)
};d._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)};
d._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};c.exports=g
},{"@marcom/ac-event-emitter":441}],445:[function(b,c,a){var g=b("@marcom/ac-event-emitter").EventEmitter;
var f;var d=function(h){g.call(this);this.optimizers=h;this._events={};this._properties={};
this._initialize()};f=d.prototype=new g(null);f.canOptimizeEvent=function(h){return this._events.hasOwnProperty(h)
};f.canOptimizeProperty=function(h){return this._properties.hasOwnProperty(h)};
f.isOptimizingEvent=function(h){if(this._events[h]&&this._events[h].active){return true
}return false};f.isOptimizingProperty=function(h){if(this._properties[h]&&this._properties[h].active){return true
}return false};f.add=function(h){this._setOptimizerEvents(h);this._setOptimizerProperties(h);
h.on("update",this._onUpdate,this);h.on("activate",this._onActivate,this);h.on("deactivate",this._onDeactivate,this)
};f.get=function(h){if(this.isOptimizingProperty(h)){return this._properties[h].value
}return null};f.set=function(i,h){if(!this._properties[i]){return false}this._properties[i].value=h;
return this};f.getOptimizerByEvent=function(h){if(this._events[h]){return this._events[h]
}return null};f._initialize=function(){var j,h;for(j in this.optimizers){if(this.optimizers.hasOwnProperty(j)){this.add(this.optimizers[j])
}}};f._onUpdate=function(h){this.set(h.prop,h.val)};f._onActivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=true}};f._onDeactivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=false}};f._setOptimizerEvents=function(j){var l,k=j.eventNames,h=k.length;
for(l=0;l<h;l++){this._setOptimizerEvent(k[l],j)}};f._setOptimizerEvent=function(i,h){if(this._events[i]){return
}this._events[i]=h};f._setOptimizerProperties=function(k){var l,j=k.propertyNames,h=j.length;
for(l=0;l<h;l++){this._setOptimizerProperty(j[l])}};f._setOptimizerProperty=function(h){if(this._properties.hasOwnProperty(h)){return
}this._properties[h]={};this._properties[h].active=false;this._properties[h].value=null
};c.exports=d},{"@marcom/ac-event-emitter":441}],446:[function(d,b,g){var i;var c=d("@marcom/ac-shared-instance").SharedInstance,l=d("@marcom/ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
var k="ac-window-delegate:WindowDelegate",a="3.0.2";function n(){this._emitter=new l(window);
this._controllers={optimizer:new j(m),customEvent:new f()};var o;for(o in h){if(h.hasOwnProperty(o)){this[o]=this._getProperty.bind(this,o);
h[o]=h[o].bind(this)}}this._bindEvents()}i=n.prototype;i.on=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOn(q.customEvents,r,p);
this._emitterOn.apply(this,arguments);return this};i.once=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOnce(q.customEvents,r,p);
this._emitterOnce.apply(this,arguments);return this};i.off=function(p,u,q){var t=this._seperateCustomEvents(p),r=false;
if(!p){r=true}this._customEventOff(t.customEvents,u,q,r);this._emitterOff.apply(this,arguments);
if(r){try{var o;for(o in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(o)&&this._shouldDeoptimizeEvent(o,true)){this._deoptimizeEvent(o)
}}this._bindEvents()}catch(s){}}return this};i.has=function(o,q,p){return this._emitter.has.apply(this._emitter,arguments)
};i.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};i.emitterTrigger=function(){this._emitter.emitterTrigger.apply(this._emitter,arguments);
return this};i.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};i.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};i.addOptimizer=function(o){this._controllers.optimizer.add(o);return this
};i.addCustomEvent=function(o){this._controllers.customEvent.add(o);return this
};i._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};i._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};i._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};i._onEventUnbound=function(p){var o=p.data.evt;
if(this._shouldDeoptimizeEvent(o)){this._deoptimizeEvent(o)}};i._customEventOn=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.on(o.join(" "),q,p)};i._customEventOnce=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.once(o.join(" "),q,p)};i._customEventOff=function(o,r,p,q){if(!q&&o.length===0){return
}if(q&&o.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(o.join(" "),r,p)
};i._getProperty=function(q,o){var p=null;if(!o){p=this._getOptimizedValue(q)}if(p===null){p=h[q].call(this,o)
}return p};i._optimizeEvents=function(q){var p,r,o=q.length;for(r=0;r<o;r++){p=q[r];
if(this._shouldOptimizeEvent(p)){this._optimizeEvent(p)}}};i._shouldOptimizeEvent=function(o){if(this._controllers.optimizer.canOptimizeEvent(o)&&!this._controllers.optimizer.isOptimizingEvent(o)){return true
}return false};i._shouldDeoptimizeEvent=function(o,p){if(this._controllers.optimizer.isOptimizingEvent(o)&&(p||this._emitter._eventEmitter._events[o].length<=1)){return true
}return false};i._optimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.activate();this._emitterOn(p,o.callback,o)};i._deoptimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.deactivate();this._emitterOff(p,o.callback,o)};i._getOptimizedValue=function(o){return this._controllers.optimizer.get(o)
};i._seperateCustomEvents=function(s){var p={customEvents:[],standardEvents:[]};
if(typeof s==="string"){var t=s.split(" "),q,r,o=t.length;for(r=0;r<o;r++){q=t[r];
if(this._controllers.customEvent.canHandleCustomEvent(q)){p.customEvents.push(q)
}else{p.standardEvents.push(q)}}}return p};i._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};b.exports=c.share(k,a,n)},{"./CustomEventController":444,"./OptimizerController":445,"./optimizers/optimizers":451,"./queries/queries":460,"@marcom/ac-dom-emitter":21,"@marcom/ac-shared-instance":439}],447:[function(c,d,a){var g=c("@marcom/ac-event-emitter").EventEmitter;
function b(h,j,i){g.call(this);this.name=h;this.active=false;this._initializeFunc=j;
this._deinitializeFunc=i}var f=b.prototype=new g(null);f.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};f.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};d.exports=b},{"@marcom/ac-event-emitter":441}],448:[function(c,d,b){var g=c("@marcom/ac-event-emitter").EventEmitter;
function a(h,i){g.call(this);this.active=false;this.eventNames=h.eventNames;this.propertyNames=h.propertyNames;
this.options=h.options||{};this.callback=i}var f=a.prototype=new g(null);f.update=function(i,h){this.trigger("update",{prop:i,val:h})
};f.activate=function(){this.active=true;this.trigger("activate",this)};f.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};d.exports=a},{"@marcom/ac-event-emitter":441}],449:[function(f,g,b){var a=f("../../WindowDelegateOptimizer"),d=f("../../queries/queries");
var c={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var h=new a(c,function(m){var l,k=c.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],d[k[l]](true))
}});g.exports=h},{"../../WindowDelegateOptimizer":448,"../../queries/queries":460}],450:[function(g,h,b){var a=g("../../WindowDelegateOptimizer"),f=g("../../queries/queries");
var d={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var c=new a(d,function(m){var l,k=d.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],f[k[l]](true))
}});h.exports=c},{"../../WindowDelegateOptimizer":448,"../../queries/queries":460}],451:[function(d,f,b){var c=d("./events/resize"),a=d("./events/scroll");
f.exports=[c,a]},{"./events/resize":449,"./events/scroll":450}],452:[function(b,c,a){var d=function(f){return document.documentElement.clientHeight
};c.exports=d},{}],453:[function(b,c,a){var d=function(f){return document.documentElement.clientWidth
};c.exports=d},{}],454:[function(b,d,a){var c=function(f){return window.innerHeight||this.clientHeight(f)
};d.exports=c},{}],455:[function(b,c,a){var d=function(f){return window.innerWidth||this.clientWidth(f)
};c.exports=d},{}],456:[function(c,d,a){var b=function(f){return document.body.scrollWidth-this.innerWidth()
};d.exports=b},{}],457:[function(c,d,b){var a=function(f){return document.body.scrollHeight-this.innerHeight()
};d.exports=a},{}],458:[function(b,c,a){var d=function(f){var h=window.pageXOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollLeft}return h};c.exports=d},{}],459:[function(b,c,a){var d=function(f){var h=window.pageYOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollTop}return h};c.exports=d},{}],460:[function(i,g,k){var b=i("./methods/innerWidth"),j=i("./methods/innerHeight"),d=i("./methods/clientWidth"),l=i("./methods/clientHeight"),c=i("./methods/scrollX"),a=i("./methods/scrollY"),h=i("./methods/maxScrollX"),f=i("./methods/maxScrollY");
g.exports={innerWidth:b,innerHeight:j,clientWidth:d,clientHeight:l,scrollX:c,scrollY:a,maxScrollX:h,maxScrollY:f}
},{"./methods/clientHeight":452,"./methods/clientWidth":453,"./methods/innerHeight":454,"./methods/innerWidth":455,"./methods/maxScrollX":456,"./methods/maxScrollY":457,"./methods/scrollX":458,"./methods/scrollY":459}],461:[function(b,c,a){c.exports={Viewport:b("./ac-viewport/Viewport")}
},{"./ac-viewport/Viewport":462}],462:[function(d,b,g){var c=d("@marcom/ac-shared-instance").SharedInstance,k=d("@marcom/ac-window-delegate").WindowDelegate,i=d("@marcom/ac-breakpoints-delegate").BreakpointsDelegate;
var j="ac-viewport:Viewport",a="3.2.0";var h;function f(m){var n,l=k;for(n in l){if(l.hasOwnProperty(n)){this[n]=l[n]
}else{h[n]=l[n]}}this.addCustomEvent(i.getCustomEvent())}h=f.prototype;h.getBreakpoint=function(){return i.getBreakpoint()
};h.setBreakpoints=function(l){return i.setBreakpoints(l)};b.exports=c.share(j,a,f)
},{"@marcom/ac-breakpoints-delegate":437,"@marcom/ac-shared-instance":439,"@marcom/ac-window-delegate":443}],463:[function(b,c,a){c.exports={lerp:function(f,g,d){return g+(d-g)*f
},map:function(i,h,f,g,d){return this.lerp(this.norm(i,h,f),g,d)},norm:function(g,f,d){return(g-f)/(d-f)
},clamp:function(g,f,d){return Math.max(f,Math.min(d,g))},randFloat:function(f,d){return(Math.random()*(d-f))+f
},randInt:function(f,d){return Math.floor((Math.random()*(d-f))+f)}}},{}],464:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":465,"./ac-clock/ThrottledClock":466,"./ac-clock/sharedClockInstance":467}],465:[function(c,d,b){var g;
var f=c("ac-event-emitter-micro").EventEmitterMicro;var a=new Date().getTime();
function h(){f.call(this);this.lastFrameTime=null;this._animationFrame=null;this._active=false;
this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}g=h.prototype=new f(null);
g.start=function(){if(this._active){return}this._tick()};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(l){var m=0;var i=this._getTime();if(this.lastFrameTime===null){this.lastFrameTime=i-a
}else{m=l-this.lastFrameTime}var k=0,j;if(m!==0){k=1000/m}j={time:l,delta:m,fps:k,naturalFps:k,timeNow:i};
this.trigger("update",j);this.trigger("draw",j);this._animationFrame=null;this.lastFrameTime=l;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"ac-event-emitter-micro":468}],466:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter-micro").EventEmitterMicro;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(j<(1000/this._fps)){return}this._clockEvent=i;this._clockEvent.delta=j;this._clockEvent.fps=1000/j;
this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":467,"ac-event-emitter-micro":468}],467:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":465}],468:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":469}],469:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(g in this._events===false){return
}var h=this._events[g].indexOf(i);if(h===-1){return}this._events[g].splice(h,1)
};d.trigger=function(g,j){if(g in this._events===false){return}for(var h=this._events[g].length-1;
h>=0;h--){if(j!==undefined){this._events[g][h](j)}else{this._events[g][h]()}}};
d.destroy=function(){for(var g in this._events){this._events[g]=null}this._events=null
};c.exports=f},{}],470:[function(b,c,a){c.exports={MotionEmitter:b("./ac-motion-emitter/MotionEmitter")}
},{"./ac-motion-emitter/MotionEmitter":471}],471:[function(d,f,b){var h=d("ac-event-emitter-micro").EventEmitterMicro,a=d("ac-object"),i=d("ac-clock");
function c(j){h.call(this);this.options=j||{};this.min=this.options.min||0;this.max=this.options.max||1;
this._boundHandleClockUpdate=this._handleClockUpdate.bind(this);this._boundHandleClockDraw=this._handleClockDraw.bind(this);
if(this.options.easingFunction){this.easingFunction=this.options.easingFunction
}this.clock=this.options.clock||i;this.usesSharedClock=(this.clock===i);this._isRunning=false;
this.specificity=this.options.specificity||4;this.friction=this.options.friction||10;
this._targetValue=null;this._currentValue=null;this._shouldUpdate=false;this._shouldEmitChange=false
}var g=c.prototype=a.create(h.prototype);g.destroy=function(){this.trigger("destroy");
this.stop();this.off();if(!this.usesSharedClock){this.clock.destroy()}var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null
}}this._isRunning=false};g.start=function(){if(!this.clock||this._isRunning){return
}this._bindEvents();this._isRunning=true;this.clock.start()};g.stop=function(){if(!this.clock||!this._isRunning){return
}this._unbindEvents();this._isRunning=false;if(!this.usesSharedClock){this.clock.stop()
}};g.isRunning=function(){return this._isRunning};g.setProgress=function(j){if(this._targetValue===j){return
}this._targetValue=j;this._shouldUpdate=true};g.updateValue=function(o){if(this._currentValue===null){this._currentValue=this._targetValue
}var n=1;if(this.easingFunction){var s=this.max-this.min,t=this.max-(this.max-this._targetValue)/s,p=this.max-(this.max-this._currentValue)/s,j=1-Math.abs(t-p),q=this.easingFunction(j,0,1,1);
n=1+(q-j)}var r=1;if(o&&o.naturalFps!==o.fps){r=o.naturalFps/o.fps}var k=this._targetValue-this._currentValue,l=k*n*r*(1/this.friction),m=parseFloat((this._currentValue+l).toFixed(this.specificity));
if(m===this._currentValue){this._currentValue=this._targetValue}else{this._currentValue=m
}this._shouldEmitChange=true};g._bindEvents=function(){this.clock.on("update",this._boundHandleClockUpdate);
this.clock.on("draw",this._boundHandleClockDraw)};g._unbindEvents=function(){this.clock.off("update",this._boundHandleClockUpdate);
this.clock.off("draw",this._boundHandleClockDraw)};g._handleClockUpdate=function(j){if(this._shouldUpdate){this.updateValue(j)
}if(!this._shouldEmitChange){return}j.progress=this._currentValue;this.trigger("update",j)
};g._handleClockDraw=function(j){if(!this._shouldEmitChange){return}j.progress=this._currentValue;
this.trigger("draw",j);if(this._targetValue===this._currentValue){this._shouldUpdate=false;
this._shouldEmitChange=false;return}this._shouldUpdate=true};f.exports=c},{"ac-clock":464,"ac-event-emitter-micro":468,"ac-object":477}],472:[function(c,d,b){c("ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":475,"ac-polyfills/Array/isArray":481}],473:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],474:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":475}],475:[function(c,d,b){c("ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"ac-polyfills/Array/prototype.forEach":482}],476:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],477:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":472,"./create":473,"./defaults":474,"./extend":475,"./getPrototypeOf":476,"./isDate":478,"./isEmpty":479,"./isRegExp":480,"./toQueryParameters":484}],478:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],479:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],480:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],481:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],482:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],483:[function(b,c,a){arguments[4][379][0].apply(a,arguments)
},{dup:379}],484:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:483}],485:[function(b,c,a){arguments[4][19][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":486,dup:19}],486:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{dup:20}],487:[function(b,c,a){arguments[4][379][0].apply(a,arguments)},{dup:379}],488:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":489,"./ac-object/create":490,"./ac-object/defaults":491,"./ac-object/extend":492,"./ac-object/getPrototypeOf":493,"./ac-object/isDate":494,"./ac-object/isEmpty":495,"./ac-object/isRegExp":496,"./ac-object/toQueryParameters":497}],489:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":492}],490:[function(b,c,a){arguments[4][473][0].apply(a,arguments)
},{dup:473}],491:[function(b,c,a){arguments[4][474][0].apply(a,arguments)},{"./extend":492,dup:474}],492:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],493:[function(b,c,a){arguments[4][476][0].apply(a,arguments)
},{dup:476}],494:[function(b,c,a){arguments[4][478][0].apply(a,arguments)},{dup:478}],495:[function(b,c,a){arguments[4][479][0].apply(a,arguments)
},{dup:479}],496:[function(b,c,a){arguments[4][480][0].apply(a,arguments)},{dup:480}],497:[function(b,c,a){arguments[4][484][0].apply(a,arguments)
},{dup:484,qs:487}],498:[function(b,c,a){arguments[4][437][0].apply(a,arguments)
},{"./ac-breakpoints-delegate/BreakpointsDelegate":499,dup:437}],499:[function(f,b,j){var d=f("ac-shared-instance").SharedInstance,g=f("ac-object"),q=f("ac-window-delegate").WindowDelegate,c=f("ac-window-delegate").WindowDelegateCustomEvent,p=f("ac-event-emitter").EventEmitter;
var m="ac-breakpoints-delegate:BreakpointsDelegate",a="2.0.0-2";var n="breakpoint",o="resize orientationchange";
var h={large:{"min-width":1069,"max-width":1441,content:980,oldie:true},xlarge:{"min-width":1442,content:980},medium:{"min-width":736,"max-width":1068,content:692},small:{"min-width":320,"max-width":735,content:288,"max-device-width":768}};
var i={minWidth:"min-width",maxWidth:"max-width",maxDeviceWidth:"max-device-width",content:"content",oldIE:"oldie"};
function l(r){this._customEvent=new c(n,this._onBreakpointListenerAdded.bind(this),this._onBreakpointListenerRemoved.bind(this));
this.setBreakpoints(h)}var k=l.prototype;k.initialize=function(){this._breakpoint=null;
this._lastBreakpoint=null;this._handleOldIE();this._handleDevices();this._breakpointOrder=this._setBreakpointOrder();
if(!this._isOldIE){this._handleResize()}};k.getCustomEvent=function(){return this._customEvent
};k.getBreakpoint=function(){if(!this._customEvent.active){this._handleResize()
}return this._breakpoint};k.setBreakpoints=function(r){this.breakpoints=g.clone(r);
this.initialize()};k._handleResize=function(){var v=q.innerWidth(),w;var u,t,s,r=this._breakpointOrder.length;
for(u=0;u<r;u++){t=this._breakpointOrder[u];s=this.breakpoints[t];if(s._breakPosition>v){break
}}if(u>0){u=u-1}w=this.breakpoints[this._breakpointOrder[u]];if(!this._breakpoint){this._breakpoint=w;
return}if(w.name===this._breakpoint.name){return}this._lastBreakpoint=this._breakpoint;
this._breakpoint=w;q.trigger(n,{incoming:this._breakpoint,outgoing:this._lastBreakpoint})
};k._setBreakpointOrder=function(){var v=0,s=[],r=[],u=i.minWidth,t;for(t in this.breakpoints){if(this.breakpoints.hasOwnProperty(t)){this.breakpoints[t].name=t;
s.push(this.breakpoints[t][u])}}s.sort(function(x,w){return x-w});s.forEach(function(x){var w;
for(w in this.breakpoints){if(this.breakpoints.hasOwnProperty(w)){if(this.breakpoints[w][u]===x){r.push(w)
}}}},this);r.forEach(function(x,w){this.breakpoints[x]._breakPosition=v;if(r[w+1]){v=this.breakpoints[r[w+1]][u]
}},this);return r};k._handleOldIE=function(){var r=document.documentElement,t=i.oldIE;
if(r.className.indexOf("no-"+t)>-1||r.className.indexOf(t)===-1){return}this._isOldIE=true;
this._replaceBreakpoints(function(u){return u[t]===true});var s;for(s in this.breakpoints){if(this.breakpoints.hasOwnProperty(s)){this._breakpoint=this.breakpoints[s];
return}}};k._handleDevices=function(){var r=i.maxDeviceWidth;this._replaceBreakpoints(function(s){if(typeof s[r]!=="number"){return true
}if(window.screen&&window.screen.width<=s[r]){return true}return false})};k._replaceBreakpoints=function(u){var s,t={},r;
for(s in this.breakpoints){if(this.breakpoints.hasOwnProperty(s)){r=this.breakpoints[s];
if(u(r)){t[s]=g.clone(this.breakpoints[s])}}}this.breakpoints=t};k._onBreakpointListenerAdded=function(){q.on(o,this._handleResize,this)
};k._onBreakpointListenerRemoved=function(){q.off(o,this._handleResize,this)};b.exports=d.share(m,a,l)
},{"ac-event-emitter":485,"ac-object":488,"ac-shared-instance":500,"ac-window-delegate":567}],500:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":501}],501:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],502:[function(b,c,a){var d=b("./ac-prefixer/Prefixer");c.exports=new d();
c.exports.Prefixer=d},{"./ac-prefixer/Prefixer":503}],503:[function(d,b,g){var k=d("./Prefixer/camelCasedEvents");
var n=/(\([^\)]+\))/gi;var h=/([^ ,;\(]+(\([^\)]+\))?)/gi;var j=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
var a=/^(webkit|moz|ms)/gi;var f=["-webkit-","-moz-","-ms-"];var l=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];function c(){this._supportsAvailable=("CSS" in window&&"supports" in window.CSS);
this._cssPrefixes=f;this._domPrefixes=l;this._evtPrefixes=m;this._styleProperties={};
this._styleValues={};this._eventTypes={}}var i=c.prototype;i.getEventType=function(p){var q;
var o;p=p.toLowerCase();if(p in this._eventTypes){return this._eventTypes[p]}if(this._checkEventType("on"+p)){return this._eventTypes[p]=p
}if(k[p]){for(q in k[p]){if(this._checkEventType(q)){return this._eventTypes[p]=k[p][q]
}}}for(o=0;o<this._evtPrefixes.length;o++){if(this._checkEventType("on"+this._evtPrefixes[o]+p)){this._eventTypes[p]=this._evtPrefixes[o]+p;
this._reduceAvailablePrefixes(o);return this._eventTypes[p]}}return this._eventTypes[p]=p
};i._checkEventType=function(o){return(o in window||o in document)};i.getStyleProperty=function(r){var q;
var o;var p;r+="";if(r in this._styleProperties){return this._styleProperties[r].dom
}r=this._toDOM(r);this._prepareTestElement();o=r.charAt(0).toUpperCase()+r.substr(1);
if(r==="filter"){q=["WebkitFilter","filter"]}else{q=(r+" "+this._domPrefixes.join(o+" ")+o).split(" ")
}for(p=0;p<q.length;p++){if(this._el.style[q[p]]!==undefined){if(p!==0){this._reduceAvailablePrefixes(p-1)
}this._memoizeStyleProperty(r,q[p]);return q[p]}}this._memoizeStyleProperty(r,false);
return false};i._memoizeStyleProperty=function(r,o){var p=this._toCSS(r);var q=(o===false)?false:this._toCSS(o);
this._styleProperties[r]=this._styleProperties[o]=this._styleProperties[p]=this._styleProperties[q]={dom:o,css:q}
};i.getStyleCSS=function(q,p){var o;q=this.getStyleProperty(q);if(!q){return false
}o=this._styleProperties[q].css;if(typeof p!=="undefined"){p=this.getStyleValue(q,p);
if(p===false){return false}o+=":"+p+";"}return o};i.getStyleValue=function(q,p){var o;
p+="";q=this.getStyleProperty(q);if(!q){return false}if(this._testStyleValue(q,p)){return p
}o=this._styleProperties[q].css;p=p.replace(h,function(s){var r;var v;var u;var t;
if(s[0]==="#"||!isNaN(s[0])){return s}v=s.replace(n,"");u=o+":"+v;if(u in this._styleValues){if(this._styleValues[u]===false){return""
}return s.replace(v,this._styleValues[u])}r=this._cssPrefixes.map(function(w){return w+s
});r=[s].concat(r);for(t=0;t<r.length;t++){if(this._testStyleValue(q,r[t])){if(t!==0){this._reduceAvailablePrefixes(t-1)
}this._styleValues[u]=r[t].replace(n,"");return r[t]}}this._styleValues[u]=false;
return""}.bind(this));p=p.trim();return(p==="")?false:p};i._testStyleValue=function(q,p){var o;
if(this._supportsAvailable){q=this._styleProperties[q].css;return CSS.supports(q,p)
}this._prepareTestElement();o=this._el.style[q];try{this._el.style[q]=p}catch(r){return false
}return(this._el.style[q]&&this._el.style[q]!==o)};i.stripPrefixes=function(o){o=String.prototype.replace.call(o,j,"");
return o.charAt(0).toLowerCase()+o.slice(1)};i._reduceAvailablePrefixes=function(o){if(this._cssPrefixes.length!==1){this._cssPrefixes=[this._cssPrefixes[o]];
this._domPrefixes=[this._domPrefixes[o]];this._evtPrefixes=[this._evtPrefixes[o]]
}};i._toDOM=function(p){var o;if(p.toLowerCase()==="float"){return"cssFloat"}p=p.replace(/-([a-z])/g,function(r,q){return q.toUpperCase()
});if(p.substr(0,2)==="Ms"){p="ms"+p.substr(2)}return p};i._toCSS=function(p){var o;
if(p.toLowerCase()==="cssfloat"){return"float"}if(a.test(p)){p="-"+p}return p.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
};i._prepareTestElement=function(){if(!this._el){this._el=document.createElement("_")
}else{this._el.style.cssText="";this._el.removeAttribute("style")}};b.exports=c
},{"./Prefixer/camelCasedEvents":504}],504:[function(b,c,a){c.exports={transitionend:{onwebkittransitionend:"webkitTransitionEnd",onmstransitionend:"MSTransitionEnd"},animationstart:{onwebkitanimationstart:"webkitAnimationStart",onmsanimationstart:"MSAnimationStart"},animationend:{onwebkitanimationend:"webkitAnimationEnd",onmsanimationend:"MSAnimationEnd"},animationiteration:{onwebkitanimationiteration:"webkitAnimationIteration",onmsanimationiteration:"MSAnimationIteration"},fullscreenchange:{onmsfullscreenchange:"MSFullscreenChange"},fullscreenerror:{onmsfullscreenerror:"MSFullscreenError"}}
},{}],505:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),preventDefault:b("./ac-dom-events/preventDefault"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),stopPropagation:b("./ac-dom-events/stopPropagation"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":506,"./ac-dom-events/dispatchEvent":507,"./ac-dom-events/preventDefault":508,"./ac-dom-events/removeEventListener":509,"./ac-dom-events/stop":510,"./ac-dom-events/stopPropagation":511,"./ac-dom-events/target":512}],506:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.addEventListener){j.addEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.attachEvent(h,i)}return j}},{"ac-prefixer":502}],507:[function(b,c,a){c.exports=function d(i,h,g){var f;
h=h.toLowerCase();if(window.CustomEvent){if(g){f=new CustomEvent(h,g)}else{f=new CustomEvent(h)
}i.dispatchEvent(f)}else{f=document.createEventObject();if(g&&"detail" in g){f.detail=g.detail
}i.fireEvent("on"+h,f)}return i}},{}],508:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],509:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.detachEvent(h,i)}return j}},{"ac-prefixer":502}],510:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":508,"./stopPropagation":511}],511:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],512:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],513:[function(b,c,a){c.exports=8
},{}],514:[function(b,c,a){c.exports=11},{}],515:[function(b,c,a){c.exports=9},{}],516:[function(b,c,a){c.exports=10
},{}],517:[function(b,c,a){c.exports=1},{}],518:[function(b,c,a){c.exports=3},{}],519:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],520:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");d("ac-polyfills/Array/prototype.filter");
var g=d("./internal/isNodeType");var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;
i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":517,"./internal/isNodeType":528,"ac-polyfills/Array/prototype.filter":538,"ac-polyfills/Array/prototype.slice":540}],521:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],522:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":513,"./DOCUMENT_FRAGMENT_NODE":514,"./DOCUMENT_NODE":515,"./DOCUMENT_TYPE_NODE":516,"./ELEMENT_NODE":517,"./TEXT_NODE":518,"./createDocumentFragment":519,"./filterByNodeType":520,"./hasAttribute":521,"./indexOf":523,"./insertAfter":524,"./insertBefore":525,"./insertFirstChild":526,"./insertLastChild":527,"./isComment":530,"./isDocument":531,"./isDocumentFragment":532,"./isDocumentType":533,"./isElement":534,"./isNode":535,"./isNodeList":536,"./isTextNode":537,"./remove":541,"./replace":542}],523:[function(c,d,b){c("ac-polyfills/Array/prototype.indexOf");
c("ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");var a=c("./filterByNodeType");
d.exports=function f(k,i){var h=k.parentNode;var j;if(!h){return 0}j=h.childNodes;
if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)}return j.indexOf(k)
}},{"./filterByNodeType":520,"./internal/validate":529,"ac-polyfills/Array/prototype.indexOf":539,"ac-polyfills/Array/prototype.slice":540}],524:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":529}],525:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":529}],526:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":529}],527:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":529}],528:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":535}],529:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":513,"../DOCUMENT_FRAGMENT_NODE":514,"../ELEMENT_NODE":517,"../TEXT_NODE":518,"./isNodeType":528}],530:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":513,"./internal/isNodeType":528}],531:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":515,"./internal/isNodeType":528}],532:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":514,"./internal/isNodeType":528}],533:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":516,"./internal/isNodeType":528}],534:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":517,"./internal/isNodeType":528}],535:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],536:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],537:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":518,"./internal/isNodeType":528}],538:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],539:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],540:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],541:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./internal/validate":529}],542:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":529}],543:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":544,"./ac-dom-traversal/ancestors":545,"./ac-dom-traversal/children":546,"./ac-dom-traversal/filterBySelector":547,"./ac-dom-traversal/firstChild":548,"./ac-dom-traversal/lastChild":551,"./ac-dom-traversal/matchesSelector":552,"./ac-dom-traversal/nextSibling":553,"./ac-dom-traversal/nextSiblings":554,"./ac-dom-traversal/previousSibling":555,"./ac-dom-traversal/previousSiblings":556,"./ac-dom-traversal/querySelector":557,"./ac-dom-traversal/querySelectorAll":558,"./ac-dom-traversal/shims/ie":559,"./ac-dom-traversal/siblings":560}],544:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":550,"./matchesSelector":552,"ac-dom-nodes":522}],545:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":550,"./matchesSelector":552,"ac-dom-nodes":522}],546:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":547,"./helpers/validate":550,"ac-dom-nodes":522}],547:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":550,"./matchesSelector":552}],548:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":546,"./helpers/validate":550}],549:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],550:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":522}],551:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":546,"./helpers/validate":550}],552:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":549,"./helpers/validate":550,"ac-dom-nodes":522}],553:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":550,"./matchesSelector":552,"ac-dom-nodes":522}],554:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":550,"./matchesSelector":552,"ac-dom-nodes":522}],555:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":550,"./matchesSelector":552,"ac-dom-nodes":522}],556:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":550,"./matchesSelector":552,"ac-dom-nodes":522}],557:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":550}],558:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":550}],559:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":549,"../helpers/validate":550,"../vendor/sizzle/sizzle":561,"ac-dom-nodes":522}],560:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":546,"./helpers/validate":550}],561:[function(b,c,a){
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(ad,v){var ai,D,u,h,n,l=ad.document,o=l.documentElement,L="undefined",p=false,m=true,t=0,y=[].slice,ah=[].push,al=("sizcache"+Math.random()).replace(".",""),O="[\\x20\\t\\r\\n\\f]",x="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])",w="(?:[\\w#_-]|[^\\x00-\\xa0]|\\\\.)",aq="([*^$|!~]?=)",aa="\\["+O+"*("+x+"+)"+O+"*(?:"+aq+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+w+"+)|)|)"+O+"*\\]",ar=":("+x+"+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|(.*))\\)|)",Q=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",s=O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*",r="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+aa+"|"+ar.replace(2,7)+"|[^\\\\(),])+",aj=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),U=new RegExp("^"+s),I=new RegExp(r+"?(?="+O+"*,|$)","g"),Y=new RegExp("^(?:(?!,)(?:(?:^|,)"+O+"*"+r+")*?|"+O+"*(.*?))(\\)|$)"),ao=new RegExp(r.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+s,"g"),Z=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ae=/[\x20\t\r\n\f]*[+~]/,am=/:not\($/,E=/h\d/i,ab=/input|select|textarea|button/i,H=/\\(?!\\)/g,T={ID:new RegExp("^#("+x+"+)"),CLASS:new RegExp("^\\.("+x+"+)"),NAME:new RegExp("^\\[name=['\"]?("+x+"+)['\"]?\\]"),TAG:new RegExp("^("+x.replace("[-","[-\\*")+"+)"),ATTR:new RegExp("^"+aa),PSEUDO:new RegExp("^"+ar),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),POS:new RegExp(Q,"ig"),needsContext:new RegExp("^"+O+"*[>+~]|"+Q,"i")},ag={},F=[],A={},J=[],an=function(at){at.sizzleFilter=true;
return at},i=function(at){return function(au){return au.nodeName.toLowerCase()==="input"&&au.type===at
}},G=function(at){return function(av){var au=av.nodeName.toLowerCase();return(au==="input"||au==="button")&&av.type===at
}},W=function(at){var au=false,aw=l.createElement("div");try{au=at(aw)}catch(av){}aw=null;
return au},C=W(function(au){au.innerHTML="<select></select>";var at=typeof au.lastChild.getAttribute("multiple");
return at!=="boolean"&&at!=="string"}),f=W(function(au){au.id=al+0;au.innerHTML="<a name='"+al+"'></a><div name='"+al+"'></div>";
o.insertBefore(au,o.firstChild);var at=l.getElementsByName&&l.getElementsByName(al).length===2+l.getElementsByName(al+0).length;
n=!l.getElementById(al);o.removeChild(au);return at}),k=W(function(at){at.appendChild(l.createComment(""));
return at.getElementsByTagName("*").length===0}),S=W(function(at){at.innerHTML="<a href='#'></a>";
return at.firstChild&&typeof at.firstChild.getAttribute!==L&&at.firstChild.getAttribute("href")==="#"
}),R=W(function(at){at.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!at.getElementsByClassName||at.getElementsByClassName("e").length===0){return false
}at.lastChild.className="e";return at.getElementsByClassName("e").length!==1});
var ac=function(aw,at,ay,aB){ay=ay||[];at=at||l;var az,au,aA,av,ax=at.nodeType;
if(ax!==1&&ax!==9){return[]}if(!aw||typeof aw!=="string"){return ay}aA=z(at);if(!aA&&!aB){if((az=Z.exec(aw))){if((av=az[1])){if(ax===9){au=at.getElementById(av);
if(au&&au.parentNode){if(au.id===av){ay.push(au);return ay}}else{return ay}}else{if(at.ownerDocument&&(au=at.ownerDocument.getElementById(av))&&P(at,au)&&au.id===av){ay.push(au);
return ay}}}else{if(az[2]){ah.apply(ay,y.call(at.getElementsByTagName(aw),0));return ay
}else{if((av=az[3])&&R&&at.getElementsByClassName){ah.apply(ay,y.call(at.getElementsByClassName(av),0));
return ay}}}}}return ak(aw,at,ay,aB,aA)};var V=ac.selectors={cacheLength:50,match:T,order:["ID","TAG"],attrHandle:{},createPseudo:an,find:{ID:n?function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at&&at.parentNode?[at]:[]}}:function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at?at.id===aw||typeof at.getAttributeNode!==L&&at.getAttributeNode("id").value===aw?[at]:v:[]
}},TAG:k?function(at,au){if(typeof au.getElementsByTagName!==L){return au.getElementsByTagName(at)
}}:function(at,ax){var aw=ax.getElementsByTagName(at);if(at==="*"){var ay,av=[],au=0;
for(;(ay=aw[au]);au++){if(ay.nodeType===1){av.push(ay)}}return av}return aw}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(at){at[1]=at[1].replace(H,"");
at[3]=(at[4]||at[5]||"").replace(H,"");if(at[2]==="~="){at[3]=" "+at[3]+" "}return at.slice(0,4)
},CHILD:function(at){at[1]=at[1].toLowerCase();if(at[1]==="nth"){if(!at[2]){ac.error(at[0])
}at[3]=+(at[3]?at[4]+(at[5]||1):2*(at[2]==="even"||at[2]==="odd"));at[4]=+((at[6]+at[7])||at[2]==="odd")
}else{if(at[2]){ac.error(at[0])}}return at},PSEUDO:function(at){var au,av=at[4];
if(T.CHILD.test(at[0])){return null}if(av&&(au=Y.exec(av))&&au.pop()){at[0]=at[0].slice(0,au[0].length-av.length-1);
av=au[0].slice(0,-1)}at.splice(2,3,av||at[3]);return at}},filter:{ID:n?function(at){at=at.replace(H,"");
return function(au){return au.getAttribute("id")===at}}:function(at){at=at.replace(H,"");
return function(av){var au=typeof av.getAttributeNode!==L&&av.getAttributeNode("id");
return au&&au.value===at}},TAG:function(at){if(at==="*"){return function(){return true
}}at=at.replace(H,"").toLowerCase();return function(au){return au.nodeName&&au.nodeName.toLowerCase()===at
}},CLASS:function(at){var au=ag[at];if(!au){au=ag[at]=new RegExp("(^|"+O+")"+at+"("+O+"|$)");
F.push(at);if(F.length>V.cacheLength){delete ag[F.shift()]}}return function(av){return au.test(av.className||(typeof av.getAttribute!==L&&av.getAttribute("class"))||"")
}},ATTR:function(av,au,at){if(!au){return function(aw){return ac.attr(aw,av)!=null
}}return function(ax){var aw=ac.attr(ax,av),ay=aw+"";if(aw==null){return au==="!="
}switch(au){case"=":return ay===at;case"!=":return ay!==at;case"^=":return at&&ay.indexOf(at)===0;
case"*=":return at&&ay.indexOf(at)>-1;case"$=":return at&&ay.substr(ay.length-at.length)===at;
case"~=":return(" "+ay+" ").indexOf(at)>-1;case"|=":return ay===at||ay.substr(0,at.length+1)===at+"-"
}}},CHILD:function(au,aw,ax,av){if(au==="nth"){var at=t++;return function(aB){var ay,aC,aA=0,az=aB;
if(ax===1&&av===0){return true}ay=aB.parentNode;if(ay&&(ay[al]!==at||!aB.sizset)){for(az=ay.firstChild;
az;az=az.nextSibling){if(az.nodeType===1){az.sizset=++aA;if(az===aB){break}}}ay[al]=at
}aC=aB.sizset-av;if(ax===0){return aC===0}else{return(aC%ax===0&&aC/ax>=0)}}}return function(az){var ay=az;
switch(au){case"only":case"first":while((ay=ay.previousSibling)){if(ay.nodeType===1){return false
}}if(au==="first"){return true}ay=az;case"last":while((ay=ay.nextSibling)){if(ay.nodeType===1){return false
}}return true}}},PSEUDO:function(ax,aw,au,at){var av=V.pseudos[ax]||V.pseudos[ax.toLowerCase()];
if(!av){ac.error("unsupported pseudo: "+ax)}if(!av.sizzleFilter){return av}return av(aw,au,at)
}},pseudos:{not:an(function(at,av,au){var aw=q(at.replace(aj,"$1"),av,au);return function(ax){return !aw(ax)
}}),enabled:function(at){return at.disabled===false},disabled:function(at){return at.disabled===true
},checked:function(at){var au=at.nodeName.toLowerCase();return(au==="input"&&!!at.checked)||(au==="option"&&!!at.selected)
},selected:function(at){if(at.parentNode){at.parentNode.selectedIndex}return at.selected===true
},parent:function(at){return !!at.firstChild},empty:function(at){return !at.firstChild
},contains:an(function(at){return function(au){return(au.textContent||au.innerText||d(au)).indexOf(at)>-1
}}),has:an(function(at){return function(au){return ac(at,au).length>0}}),header:function(at){return E.test(at.nodeName)
},text:function(av){var au,at;return av.nodeName.toLowerCase()==="input"&&(au=av.type)==="text"&&((at=av.getAttribute("type"))==null||at.toLowerCase()===au)
},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:G("submit"),reset:G("reset"),button:function(au){var at=au.nodeName.toLowerCase();
return at==="input"&&au.type==="button"||at==="button"},input:function(at){return ab.test(at.nodeName)
},focus:function(at){var au=at.ownerDocument;return at===au.activeElement&&(!au.hasFocus||au.hasFocus())&&!!(at.type||at.href)
},active:function(at){return at===at.ownerDocument.activeElement}},setFilters:{first:function(av,au,at){return at?av.slice(1):[av[0]]
},last:function(aw,av,au){var at=aw.pop();return au?aw:[at]},even:function(ay,ax,aw){var av=[],au=aw?1:0,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},odd:function(ay,ax,aw){var av=[],au=aw?0:1,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},lt:function(av,au,at){return at?av.slice(+au):av.slice(0,+au)
},gt:function(av,au,at){return at?av.slice(0,+au+1):av.slice(+au+1)},eq:function(aw,av,au){var at=aw.splice(+av,1);
return au?aw:at}}};V.setFilters.nth=V.setFilters.eq;V.filters=V.pseudos;if(!S){V.attrHandle={href:function(at){return at.getAttribute("href",2)
},type:function(at){return at.getAttribute("type")}}}if(f){V.order.push("NAME");
V.find.NAME=function(at,au){if(typeof au.getElementsByName!==L){return au.getElementsByName(at)
}}}if(R){V.order.splice(1,0,"CLASS");V.find.CLASS=function(av,au,at){if(typeof au.getElementsByClassName!==L&&!at){return au.getElementsByClassName(av)
}}}try{y.call(o.childNodes,0)[0].nodeType}catch(ap){y=function(au){var av,at=[];
for(;(av=this[au]);au++){at.push(av)}return at}}var z=ac.isXML=function(at){var au=at&&(at.ownerDocument||at).documentElement;
return au?au.nodeName!=="HTML":false};var P=ac.contains=o.compareDocumentPosition?function(au,at){return !!(au.compareDocumentPosition(at)&16)
}:o.contains?function(au,at){var aw=au.nodeType===9?au.documentElement:au,av=at.parentNode;
return au===av||!!(av&&av.nodeType===1&&aw.contains&&aw.contains(av))}:function(au,at){while((at=at.parentNode)){if(at===au){return true
}}return false};var d=ac.getText=function(ax){var aw,au="",av=0,at=ax.nodeType;
if(at){if(at===1||at===9||at===11){if(typeof ax.textContent==="string"){return ax.textContent
}else{for(ax=ax.firstChild;ax;ax=ax.nextSibling){au+=d(ax)}}}else{if(at===3||at===4){return ax.nodeValue
}}}else{for(;(aw=ax[av]);av++){au+=d(aw)}}return au};ac.attr=function(aw,av){var at,au=z(aw);
if(!au){av=av.toLowerCase()}if(V.attrHandle[av]){return V.attrHandle[av](aw)}if(C||au){return aw.getAttribute(av)
}at=aw.getAttributeNode(av);return at?typeof aw[av]==="boolean"?aw[av]?av:null:at.specified?at.value:null:null
};ac.error=function(at){throw new Error("Syntax error, unrecognized expression: "+at)
};[0,0].sort(function(){return(m=0)});if(o.compareDocumentPosition){u=function(au,at){if(au===at){p=true;
return 0}return(!au.compareDocumentPosition||!at.compareDocumentPosition?au.compareDocumentPosition:au.compareDocumentPosition(at)&4)?-1:1
}}else{u=function(aB,aA){if(aB===aA){p=true;return 0}else{if(aB.sourceIndex&&aA.sourceIndex){return aB.sourceIndex-aA.sourceIndex
}}var ay,au,av=[],at=[],ax=aB.parentNode,az=aA.parentNode,aC=ax;if(ax===az){return h(aB,aA)
}else{if(!ax){return -1}else{if(!az){return 1}}}while(aC){av.unshift(aC);aC=aC.parentNode
}aC=az;while(aC){at.unshift(aC);aC=aC.parentNode}ay=av.length;au=at.length;for(var aw=0;
aw<ay&&aw<au;aw++){if(av[aw]!==at[aw]){return h(av[aw],at[aw])}}return aw===ay?h(aB,at[aw],-1):h(av[aw],aA,1)
};h=function(au,at,av){if(au===at){return av}var aw=au.nextSibling;while(aw){if(aw===at){return -1
}aw=aw.nextSibling}return 1}}ac.uniqueSort=function(au){var av,at=1;if(u){p=m;au.sort(u);
if(p){for(;(av=au[at]);at++){if(av===au[at-1]){au.splice(at--,1)}}}}return au};
function B(au,ay,ax,av){var aw=0,at=ay.length;for(;aw<at;aw++){ac(au,ay[aw],ax,av)
}}function X(at,av,az,aA,au,ay){var aw,ax=V.setFilters[av.toLowerCase()];if(!ax){ac.error(av)
}if(at||!(aw=au)){B(at||"*",aA,(aw=[]),au)}return aw.length>0?ax(aw,az,ay):[]}function af(aD,at,aB,av,aH){var ay,au,ax,aJ,aA,aI,aC,aG,aE=0,aF=aH.length,aw=T.POS,az=new RegExp("^"+aw.source+"(?!"+O+")","i"),aK=function(){var aM=1,aL=arguments.length-2;
for(;aM<aL;aM++){if(arguments[aM]===v){ay[aM]=v}}};for(;aE<aF;aE++){aw.exec("");
aD=aH[aE];aJ=[];ax=0;aA=av;while((ay=aw.exec(aD))){aG=aw.lastIndex=ay.index+ay[0].length;
if(aG>ax){aC=aD.slice(ax,ay.index);ax=aG;aI=[at];if(U.test(aC)){if(aA){aI=aA}aA=av
}if((au=am.test(aC))){aC=aC.slice(0,-5).replace(U,"$&*")}if(ay.length>1){ay[0].replace(az,aK)
}aA=X(aC,ay[1],ay[2],aI,aA,au)}}if(aA){aJ=aJ.concat(aA);if((aC=aD.slice(ax))&&aC!==")"){B(aC,aJ,aB,av)
}else{ah.apply(aB,aJ)}}else{ac(aD,at,aB,av)}}return aF===1?aB:ac.uniqueSort(aB)
}function g(az,av,aC){var aE,aD,aF,ax=[],aA=0,aB=Y.exec(az),au=!aB.pop()&&!aB.pop(),aG=au&&az.match(I)||[""],at=V.preFilter,aw=V.filter,ay=!aC&&av!==l;
for(;(aD=aG[aA])!=null&&au;aA++){ax.push(aE=[]);if(ay){aD=" "+aD}while(aD){au=false;
if((aB=U.exec(aD))){aD=aD.slice(aB[0].length);au=aE.push({part:aB.pop().replace(aj," "),captures:aB})
}for(aF in aw){if((aB=T[aF].exec(aD))&&(!at[aF]||(aB=at[aF](aB,av,aC)))){aD=aD.slice(aB.shift().length);
au=aE.push({part:aF,captures:aB})}}if(!au){break}}}if(!au){ac.error(az)}return ax
}function M(ax,aw,av){var at=aw.dir,au=t++;if(!ax){ax=function(ay){return ay===av
}}return aw.first?function(az,ay){while((az=az[at])){if(az.nodeType===1){return ax(az,ay)&&az
}}}:function(aA,az){var ay,aB=au+"."+D,aC=aB+"."+ai;while((aA=aA[at])){if(aA.nodeType===1){if((ay=aA[al])===aC){return false
}else{if(typeof ay==="string"&&ay.indexOf(aB)===0){if(aA.sizset){return aA}}else{aA[al]=aC;
if(ax(aA,az)){aA.sizset=true;return aA}aA.sizset=false}}}}}}function K(at,au){return at?function(ax,aw){var av=au(ax,aw);
return av&&at(av===true?ax:av,aw)}:au}function N(ay,aw,at){var av,ax,au=0;for(;
(av=ay[au]);au++){if(V.relative[av.part]){ax=M(ax,V.relative[av.part],aw)}else{av.captures.push(aw,at);
ax=K(ax,V.filter[av.part].apply(null,av.captures))}}return ax}function j(at){return function(aw,av){var ax,au=0;
for(;(ax=at[au]);au++){if(ax(aw,av)){return true}}return false}}var q=ac.compile=function(at,aw,au){var az,ay,av,ax=A[at];
if(ax&&ax.context===aw){ax.dirruns++;return ax}ay=g(at,aw,au);for(av=0;(az=ay[av]);
av++){ay[av]=N(az,aw,au)}ax=A[at]=j(ay);ax.context=aw;ax.runs=ax.dirruns=0;J.push(at);
if(J.length>V.cacheLength){delete A[J.shift()]}return ax};ac.matches=function(au,at){return ac(au,null,null,at)
};ac.matchesSelector=function(at,au){return ac(au,null,null,[at]).length>0};var ak=function(ax,au,az,aD,aC){ax=ax.replace(aj,"$1");
var at,aE,aA,aF,av,aw,aH,aI,ay,aB=ax.match(I),aG=ax.match(ao),aJ=au.nodeType;if(T.POS.test(ax)){return af(ax,au,az,aD,aB)
}if(aD){at=y.call(aD,0)}else{if(aB&&aB.length===1){if(aG.length>1&&aJ===9&&!aC&&(aB=T.ID.exec(aG[0]))){au=V.find.ID(aB[1],au,aC)[0];
if(!au){return az}ax=ax.slice(aG.shift().length)}aI=((aB=ae.exec(aG[0]))&&!aB.index&&au.parentNode)||au;
ay=aG.pop();aw=ay.split(":not")[0];for(aA=0,aF=V.order.length;aA<aF;aA++){aH=V.order[aA];
if((aB=T[aH].exec(aw))){at=V.find[aH]((aB[1]||"").replace(H,""),aI,aC);if(at==null){continue
}if(aw===ay){ax=ax.slice(0,ax.length-ay.length)+aw.replace(T[aH],"");if(!ax){ah.apply(az,y.call(at,0))
}}break}}}}if(ax){aE=q(ax,au,aC);D=aE.dirruns;if(at==null){at=V.find.TAG("*",(ae.test(ax)&&au.parentNode)||au)
}for(aA=0;(av=at[aA]);aA++){ai=aE.runs++;if(aE(av,au)){az.push(av)}}}return az};
if(l.querySelectorAll){(function(){var ay,az=ak,ax=/'|\\/g,av=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,au=[],at=[":active"],aw=o.matchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;
W(function(aA){aA.innerHTML="<select><option selected></option></select>";if(!aA.querySelectorAll("[selected]").length){au.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!aA.querySelectorAll(":checked").length){au.push(":checked")}});W(function(aA){aA.innerHTML="<p test=''></p>";
if(aA.querySelectorAll("[test^='']").length){au.push("[*^$]="+O+"*(?:\"\"|'')")
}aA.innerHTML="<input type='hidden'>";if(!aA.querySelectorAll(":enabled").length){au.push(":enabled",":disabled")
}});au=au.length&&new RegExp(au.join("|"));ak=function(aF,aB,aG,aI,aH){if(!aI&&!aH&&(!au||!au.test(aF))){if(aB.nodeType===9){try{ah.apply(aG,y.call(aB.querySelectorAll(aF),0));
return aG}catch(aE){}}else{if(aB.nodeType===1&&aB.nodeName.toLowerCase()!=="object"){var aD=aB.getAttribute("id"),aA=aD||al,aC=ae.test(aF)&&aB.parentNode||aB;
if(aD){aA=aA.replace(ax,"\\$&")}else{aB.setAttribute("id",aA)}try{ah.apply(aG,y.call(aC.querySelectorAll(aF.replace(I,"[id='"+aA+"'] $&")),0));
return aG}catch(aE){}finally{if(!aD){aB.removeAttribute("id")}}}}}return az(aF,aB,aG,aI,aH)
};if(aw){W(function(aB){ay=aw.call(aB,"div");try{aw.call(aB,"[test!='']:sizzle");
at.push(V.match.PSEUDO)}catch(aA){}});at=new RegExp(at.join("|"));ac.matchesSelector=function(aB,aD){aD=aD.replace(av,"='$1']");
if(!z(aB)&&!at.test(aD)&&(!au||!au.test(aD))){try{var aA=aw.call(aB,aD);if(aA||ay||aB.document&&aB.document.nodeType!==11){return aA
}}catch(aC){}}return ac(aD,null,null,[aB]).length>0}}})()}if(typeof c==="object"&&c.exports){c.exports=ac
}else{ad.Sizzle=ac}})(window)},{}],562:[function(b,c,a){arguments[4][21][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":563,dup:21}],563:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){if(!this._eventEmitter){return this
}m=this._parseEventNames(m);m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;
for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);
return this};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);
return this};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null}}};f._parseEventNames=function(l){if(!l){return[l]
}return l.split(" ")};f._onListenerEvent=function(n,m){var l=new j(m,this);this._eventEmitter.trigger(n,l,false)
};f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
};f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
};f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
}var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
}}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
}if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
}}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
};f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
}}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
}l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
}if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
}.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
}}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
}if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
}.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
}if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
}};b.exports=h},{"./DOMEmitterEvent":564,"ac-dom-events":505,"ac-dom-traversal":543,"ac-event-emitter":565}],564:[function(b,c,a){var f=b("ac-dom-events");
var d;var g=function(i,h){this._domEmitter=h;this.originalEvent=i||{};this._originalTarget=f.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"ac-dom-events":505}],565:[function(b,c,a){arguments[4][19][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":566,dup:19}],566:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{dup:20}],567:[function(b,c,a){arguments[4][443][0].apply(a,arguments)},{"./ac-window-delegate/WindowDelegate":570,"./ac-window-delegate/WindowDelegateCustomEvent":571,"./ac-window-delegate/WindowDelegateOptimizer":572,dup:443}],568:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
var g=function(){this._emitter=new f();this._customEvents={}};var d=g.prototype;
d.on=function(h,j,i){this._activateCustomEvents(h);this._emitterOn.apply(this,arguments);
return this};d.once=function(h,j,i){this._emitterOnce.apply(this,arguments);return this
};d.off=function(h,j,i){this._emitterOff.apply(this,arguments);this._deactivateCustomEvents(h);
return this};d.has=function(h,j,i){return this._emitter.has.apply(this._emitter,arguments)
};d.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};d.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};d.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};d.add=function(h){this._customEvents[h.name]=h};d.canHandleCustomEvent=function(h){return this._customEvents.hasOwnProperty(h)
};d.isHandlingCustomEvent=function(h){if(this._customEvents[h]&&this._customEvents[h].active){return true
}return false};d._activateCustomEvents=function(l){var j=l.split(" "),k,m,h=j.length;
for(m=0;m<h;m++){k=j[m];if(this._customEvents[k]&&!this._customEvents[k].active){this._customEvents[k].initialize();
this._customEvents[k].active=true}}};d._deactivateCustomEvents=function(k){var l;
if(!k||k.length===0){for(l in this._customEvents){if(this._customEvents.hasOwnProperty(l)){this._deactivateCustomEvent(l)
}}return}var j=k.split(" "),h=j.length;for(l=0;l<h;l++){this._deactivateCustomEvent(j[l])
}};d._deactivateCustomEvent=function(h){if(!this.has(h)&&this._customEvents[h]&&this._customEvents[h].active){this._customEvents[h].deinitialize();
this._customEvents[h].active=false}};d._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)
};d._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)};
d._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};c.exports=g
},{"ac-event-emitter":565}],569:[function(b,c,a){var g=b("ac-event-emitter").EventEmitter;
var f;var d=function(h){g.call(this);this.optimizers=h;this._events={};this._properties={};
this._initialize()};f=d.prototype=new g(null);f.canOptimizeEvent=function(h){return this._events.hasOwnProperty(h)
};f.canOptimizeProperty=function(h){return this._properties.hasOwnProperty(h)};
f.isOptimizingEvent=function(h){if(this._events[h]&&this._events[h].active){return true
}return false};f.isOptimizingProperty=function(h){if(this._properties[h]&&this._properties[h].active){return true
}return false};f.add=function(h){this._setOptimizerEvents(h);this._setOptimizerProperties(h);
h.on("update",this._onUpdate,this);h.on("activate",this._onActivate,this);h.on("deactivate",this._onDeactivate,this)
};f.get=function(h){if(this.isOptimizingProperty(h)){return this._properties[h].value
}return null};f.set=function(i,h){if(!this._properties[i]){return false}this._properties[i].value=h;
return this};f.getOptimizerByEvent=function(h){if(this._events[h]){return this._events[h]
}return null};f._initialize=function(){var j,h;for(j in this.optimizers){if(this.optimizers.hasOwnProperty(j)){this.add(this.optimizers[j])
}}};f._onUpdate=function(h){this.set(h.prop,h.val)};f._onActivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=true}};f._onDeactivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=false}};f._setOptimizerEvents=function(j){var l,k=j.eventNames,h=k.length;
for(l=0;l<h;l++){this._setOptimizerEvent(k[l],j)}};f._setOptimizerEvent=function(i,h){if(this._events[i]){return
}this._events[i]=h};f._setOptimizerProperties=function(k){var l,j=k.propertyNames,h=j.length;
for(l=0;l<h;l++){this._setOptimizerProperty(j[l])}};f._setOptimizerProperty=function(h){if(this._properties.hasOwnProperty(h)){return
}this._properties[h]={};this._properties[h].active=false;this._properties[h].value=null
};c.exports=d},{"ac-event-emitter":565}],570:[function(d,b,g){var i;var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
var k="ac-window-delegate:WindowDelegate",a="3.0.0-4";function n(){this._emitter=new l(window);
this._controllers={optimizer:new j(m),customEvent:new f()};var o;for(o in h){if(h.hasOwnProperty(o)){this[o]=this._getProperty.bind(this,o);
h[o]=h[o].bind(this)}}this._bindEvents()}i=n.prototype;i.on=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOn(q.customEvents,r,p);
this._emitterOn.apply(this,arguments);return this};i.once=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOnce(q.customEvents,r,p);
this._emitterOnce.apply(this,arguments);return this};i.off=function(p,u,q){var t=this._seperateCustomEvents(p),r=false;
if(!p){r=true}this._customEventOff(t.customEvents,u,q,r);this._emitterOff.apply(this,arguments);
if(r){try{var o;for(o in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(o)&&this._shouldDeoptimizeEvent(o,true)){this._deoptimizeEvent(o)
}}this._bindEvents()}catch(s){}}return this};i.has=function(o,q,p){return this._emitter.has.apply(this._emitter,arguments)
};i.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};i.emitterTrigger=function(){this._emitter.emitterTrigger.apply(this._emitter,arguments);
return this};i.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};i.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};i.addOptimizer=function(o){this._controllers.optimizer.add(o);return this
};i.addCustomEvent=function(o){this._controllers.customEvent.add(o);return this
};i._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};i._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};i._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};i._onEventUnbound=function(p){var o=p.data.evt;
if(this._shouldDeoptimizeEvent(o)){this._deoptimizeEvent(o)}};i._customEventOn=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.on(o.join(" "),q,p)};i._customEventOnce=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.once(o.join(" "),q,p)};i._customEventOff=function(o,r,p,q){if(!q&&o.length===0){return
}if(q&&o.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(o.join(" "),r,p)
};i._getProperty=function(q,o){var p=null;if(!o){p=this._getOptimizedValue(q)}if(p===null){p=h[q].call(this,o)
}return p};i._optimizeEvents=function(q){var p,r,o=q.length;for(r=0;r<o;r++){p=q[r];
if(this._shouldOptimizeEvent(p)){this._optimizeEvent(p)}}};i._shouldOptimizeEvent=function(o){if(this._controllers.optimizer.canOptimizeEvent(o)&&!this._controllers.optimizer.isOptimizingEvent(o)){return true
}return false};i._shouldDeoptimizeEvent=function(o,p){if(this._controllers.optimizer.isOptimizingEvent(o)&&(p||this._emitter._eventEmitter._events[o].length<=1)){return true
}return false};i._optimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.activate();this._emitterOn(p,o.callback,o)};i._deoptimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.deactivate();this._emitterOff(p,o.callback,o)};i._getOptimizedValue=function(o){return this._controllers.optimizer.get(o)
};i._seperateCustomEvents=function(s){var p={customEvents:[],standardEvents:[]};
if(typeof s==="string"){var t=s.split(" "),q,r,o=t.length;for(r=0;r<o;r++){q=t[r];
if(this._controllers.customEvent.canHandleCustomEvent(q)){p.customEvents.push(q)
}else{p.standardEvents.push(q)}}}return p};i._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};b.exports=c.share(k,a,n)},{"./CustomEventController":568,"./OptimizerController":569,"./optimizers/optimizers":575,"./queries/queries":584,"ac-dom-emitter":562,"ac-shared-instance":500}],571:[function(c,d,a){var g=c("ac-event-emitter").EventEmitter;
function b(h,j,i){g.call(this);this.name=h;this.active=false;this._initializeFunc=j;
this._deinitializeFunc=i}var f=b.prototype=new g(null);f.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};f.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};d.exports=b},{"ac-event-emitter":565}],572:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
function a(h,i){g.call(this);this.active=false;this.eventNames=h.eventNames;this.propertyNames=h.propertyNames;
this.options=h.options||{};this.callback=i}var f=a.prototype=new g(null);f.update=function(i,h){this.trigger("update",{prop:i,val:h})
};f.activate=function(){this.active=true;this.trigger("activate",this)};f.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};d.exports=a},{"ac-event-emitter":565}],573:[function(b,c,a){arguments[4][449][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":572,"../../queries/queries":584,dup:449}],574:[function(b,c,a){arguments[4][450][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":572,"../../queries/queries":584,dup:450}],575:[function(b,c,a){arguments[4][451][0].apply(a,arguments)
},{"./events/resize":573,"./events/scroll":574,dup:451}],576:[function(b,c,a){arguments[4][452][0].apply(a,arguments)
},{dup:452}],577:[function(b,c,a){arguments[4][453][0].apply(a,arguments)},{dup:453}],578:[function(b,c,a){arguments[4][454][0].apply(a,arguments)
},{dup:454}],579:[function(b,c,a){arguments[4][455][0].apply(a,arguments)},{dup:455}],580:[function(b,c,a){arguments[4][456][0].apply(a,arguments)
},{dup:456}],581:[function(b,c,a){arguments[4][457][0].apply(a,arguments)},{dup:457}],582:[function(b,c,a){arguments[4][458][0].apply(a,arguments)
},{dup:458}],583:[function(b,c,a){arguments[4][459][0].apply(a,arguments)},{dup:459}],584:[function(b,c,a){arguments[4][460][0].apply(a,arguments)
},{"./methods/clientHeight":576,"./methods/clientWidth":577,"./methods/innerHeight":578,"./methods/innerWidth":579,"./methods/maxScrollX":580,"./methods/maxScrollY":581,"./methods/scrollX":582,"./methods/scrollY":583,dup:460}],585:[function(b,c,a){arguments[4][461][0].apply(a,arguments)
},{"./ac-viewport/Viewport":586,dup:461}],586:[function(d,b,g){var c=d("ac-shared-instance").SharedInstance,k=d("ac-window-delegate").WindowDelegate,i=d("ac-breakpoints-delegate").BreakpointsDelegate;
var j="ac-viewport:Viewport",a="3.0.0-1";var h;function f(m){var n,l=k;for(n in l){if(l.hasOwnProperty(n)){this[n]=l[n]
}else{h[n]=l[n]}}this.addCustomEvent(i.getCustomEvent())}h=f.prototype;h.getBreakpoint=function(){return i.getBreakpoint()
};h.setBreakpoints=function(l){return i.setBreakpoints(l)};b.exports=c.share(j,a,f)
},{"ac-breakpoints-delegate":498,"ac-shared-instance":500,"ac-window-delegate":567}],587:[function(b,c,a){c.exports={ScrollMotionEmitter:b("./ac-scroll-motion-emitter/ScrollMotionEmitter"),ElementScrollMotionEmitter:b("./ac-scroll-motion-emitter/ElementScrollMotionEmitter")}
},{"./ac-scroll-motion-emitter/ElementScrollMotionEmitter":588,"./ac-scroll-motion-emitter/ScrollMotionEmitter":589}],588:[function(d,f,c){var b=d("ac-object"),i=d("ac-viewport").Viewport,h=d("./ScrollMotionEmitter");
function a(k,j){j=j||{};if(!(k instanceof HTMLElement)){return null}this.el=k;this.options=j;
if(this.options.offsetTop){this.offsetTop=this.options.offsetTop}if(this.options.offsetBottom){this.offsetBottom=this.options.offsetBottom
}this.setEmitterBounds();this._boundHandleResize=this._handleResize.bind(this);
this._bindResizeEvents();h.call(this,j)}var g=a.prototype=b.create(h.prototype);
g.setEmitterBounds=function(){this._elementBounds=this.el.getBoundingClientRect();
var n=i.scrollY(),k=this._elementBounds.top+n,j=this._elementBounds.bottom+n,m=this.offsetTop||0,l=this.offsetBottom||0;
if(typeof this.offsetTop==="function"){m=this.offsetTop()}if(typeof this.offsetBottom==="function"){l=this.offsetBottom()
}this.min=this.options.min=k+m;this.max=this.options.max=j+l};g.destroy=function(){i.off("resize orientationchange",this._boundHandleResize);
h.prototype.destroy.call(this)};g._bindResizeEvents=function(){i.on("resize orientationchange",this._boundHandleResize)
};g._handleClockUpdate=function(j){if(this._shouldUpdateOnResize){this.setEmitterBounds();
this.handleScroll();this._shouldUpdateOnResize=false}h.prototype._handleClockUpdate.call(this,j)
};g._handleResize=function(){this._shouldUpdateOnResize=true};f.exports=a},{"./ScrollMotionEmitter":589,"ac-object":477,"ac-viewport":585}],589:[function(d,f,b){var a=d("ac-object"),i=d("ac-viewport").Viewport,c=d("ac-motion-emitter").MotionEmitter;
function h(j){j=j||{};if(typeof j.min!=="number"||typeof j.max!=="number"){return null
}c.call(this,j);this.smooth=this.options.smooth||false;if(!this.options.overrideScroll){this._bindScrollEvents()
}}var g=h.prototype=a.create(c.prototype);g.updateValue=function(j){if(this.smooth){return c.prototype.updateValue.call(this,j)
}if(this._currentValue===this._targetValue){this._shouldEmitChange=false;return
}this._currentValue=this._targetValue;this._shouldEmitChange=true};g.handleScroll=function(k){if(typeof k!=="number"){k=i.scrollY()
}var j;if(k<this.min){j=this.min}else{if(k>this.max){j=this.max}else{j=k}}j=(j-this.min)/(this.max-this.min);
this.setProgress(j)};g.destroy=function(){if(this._boundHandleScroll){i.off("scroll",this._boundHandleScroll)
}return c.prototype.destroy.call(this)};g._bindScrollEvents=function(){this._boundHandleScroll=this.handleScroll.bind(this);
i.on("scroll",this._boundHandleScroll)};f.exports=h},{"ac-motion-emitter":470,"ac-object":477,"ac-viewport":585}],590:[function(h,f,k){var c=h("@marcom/ac-dom-traversal/querySelectorAll");
var p=h("@marcom/ac-object/clone");var i=h("@marcom/sm-math-utils").lerp;var r=h("@marcom/ac-browser-prefixed");
var q=h("@marcom/ac-viewport").Viewport;var b=h("@marcom/ac-dom-metrics");var o=h("ac-scroll-motion-emitter").ScrollMotionEmitter;
var n={pin:false,duration:0,delay:0,scrollStart:false,friction:4,translateTo:[0,0],translateFrom:[0,0],scaleTo:1,scaleFrom:1,rotateTo:0,rotateFrom:0,fadeTo:1,fadeFrom:1,blurTo:0,blurFrom:0,overrideScroll:false,smooth:true,scrollMotionEmitter:null};
var j=["blurTo","blurFrom"];var g=["translateTo","translateFrom","scaleTo","scaleFrom","rotateTo","rotateFrom"];
var d=["fadeTo","fadeFrom"];var a=h("@marcom/ac-feature/threeDTransformsAvailable")();
var l=function(t,s){this.el=t;this.options=this._overrideDefaultOptions(s);this.transforms={};
this._memoizeMetrics();this._setEmitterBounds();this._initScrollMotionEmitter();
this._setupEvents();this._isAnimating=false;this.handleScroll(q.scrollY())};var m=l.prototype;
m.destroy=function(){this._teardownEvents();this.scrollMotionEmitter.destroy();
this.scrollMotionEmitter=null;this.el=null;this.options=null};m.setOption=function(s,t){this.options[s]=t;
if(s==="duration"||s==="delay"){this._setEmitterBounds()}};m.handleScroll=function(s){this.scrollMotionEmitter.handleScroll(s)
};m.getTransform=function(s){return this.transforms[s]};m.getOpacity=function(s){return this.opacity
};m._overrideDefaultOptions=function(v){var s=Object.assign(p(n),v);var u;var t;
for(t in v){if(g.indexOf(t)>-1){this.hasTransform=true}else{if(d.indexOf(t)>-1){this.hasFade=true
}else{if(j.indexOf(t)>-1){this.hasBlur=true}}}}return s};m._setEmitterBounds=function(){if(this.options.scrollStart||this.options.scrollStart===0){this._emitterMin=this.options.scrollStart
}else{this._emitterMin=this.elTop-this.windowHeight+this.options.delay+this.options.translateFrom[1]
}this._emitterMax=this._emitterMin+this.options.duration;if(this.scrollMotionEmitter){this.scrollMotionEmitter.min=this._emitterMin;
this.scrollMotionEmitter.max=this._emitterMax}};m._memoizeMetrics=function(){this.windowHeight=q.clientHeight();
this.elHeight=b.getDimensions(this.el).height;this.elTop=b.getPagePosition(this.el).top
};m._initScrollMotionEmitter=function(){if(this.options.scrollMotionEmitter){this.scrollMotionEmitter=this.options.scrollMotionEmitter
}else{this.scrollMotionEmitter=new o({smooth:this.options.smooth,overrideScroll:this.options.overrideScroll,min:this._emitterMin,max:this._emitterMax,friction:this.options.friction})
}if(!this.scrollMotionEmitter.isRunning()){this.scrollMotionEmitter.start()}};m._setupEvents=function(){this.scrollMotionEmitter.on("draw",this._update.bind(this))
};m._teardownEvents=function(){this.scrollMotionEmitter.off()};m._setElementTransform=function(){if(!this.hasTransform){return
}this.transforms.translateY=i(this._progress,this.options.translateFrom[1],this.options.translateTo[1]);
this.transforms.translateX=i(this._progress,this.options.translateFrom[0],this.options.translateTo[0]);
this.transforms.rotate=i(this._progress,this.options.rotateFrom,this.options.rotateTo);
this.transforms.scale=i(this._progress,this.options.scaleFrom,this.options.scaleTo);
if(a){this.el.style[r.transform]="scale("+this.transforms.scale+","+this.transforms.scale+") translate3d("+this.transforms.translateX+"px,"+this.transforms.translateY+"px,0) rotate("+this.transforms.rotate+"deg)"
}else{this.el.style[r.transform]="scale("+this.transforms.scale+","+this.transforms.scale+") translate("+this.transforms.translateX+"px,"+this.transforms.translateY+"px) rotate("+this.transforms.rotate+"deg)"
}};m._setElementOpacity=function(){if(!this.hasFade){return}this.opacity=i(this._progress,this.options.fadeFrom,this.options.fadeTo);
this.el.style.opacity=this.opacity};m._setStatus=function(){if((this._progress>0&&this._progress<1)&&!this._isAnimating){this._isAnimating=true;
this.el.classList.remove("has-animated");this.el.classList.remove("has-not-animated");
this.el.classList.add("is-animating")}else{if(this._progress>=1&&this._isAnimating){this._isAnimating=false;
this.el.classList.remove("is-animating");this.el.classList.remove("has-not-animated");
this.el.classList.add("has-animated")}else{if(this._progress<=0&&this._isAnimating){this._isAnimating=false;
this.el.classList.remove("is-animating");this.el.classList.remove("has-animated");
this.el.classList.add("has-not-animated")}}}};m._update=function(s){if(isNaN(s.progress)){return
}this._progress=s.progress;this._setElementTransform();this._setElementOpacity()
};f.exports=l},{"@marcom/ac-browser-prefixed":434,"@marcom/ac-dom-metrics":50,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-feature/threeDTransformsAvailable":227,"@marcom/ac-object/clone":370,"@marcom/ac-viewport":461,"@marcom/sm-math-utils":463,"ac-scroll-motion-emitter":587}],591:[function(b,c,a){c.exports=d;
function d(f){var g=new Float32Array(16);g[0]=f[0];g[1]=f[1];g[2]=f[2];g[3]=f[3];
g[4]=f[4];g[5]=f[5];g[6]=f[6];g[7]=f[7];g[8]=f[8];g[9]=f[9];g[10]=f[10];g[11]=f[11];
g[12]=f[12];g[13]=f[13];g[14]=f[14];g[15]=f[15];return g}},{}],592:[function(b,d,a){d.exports=c;
function c(){var f=new Float32Array(16);f[0]=1;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=1;
f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=0;f[13]=0;f[14]=0;f[15]=1;return f
}},{}],593:[function(b,c,a){c.exports=d;function d(t,r,o){var l=r[0],k=r[1],j=r[2],m=r[3],u=l+l,f=k+k,n=j+j,i=l*u,h=l*f,g=l*n,s=k*f,p=k*n,C=j*n,D=m*u,B=m*f,A=m*n;
t[0]=1-(s+C);t[1]=h+A;t[2]=g-B;t[3]=0;t[4]=h-A;t[5]=1-(i+C);t[6]=p+D;t[7]=0;t[8]=g+B;
t[9]=p-D;t[10]=1-(i+s);t[11]=0;t[12]=o[0];t[13]=o[1];t[14]=o[2];t[15]=1;return t
}},{}],594:[function(c,d,b){d.exports=a;function a(f){f[0]=1;f[1]=0;f[2]=0;f[3]=0;
f[4]=0;f[5]=1;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=0;f[13]=0;f[14]=0;
f[15]=1;return f}},{}],595:[function(b,c,a){c.exports=d;function d(y,D){var H=D[0],F=D[1],E=D[2],B=D[3],j=D[4],i=D[5],h=D[6],g=D[7],x=D[8],w=D[9],v=D[10],u=D[11],J=D[12],I=D[13],G=D[14],C=D[15],t=H*i-F*j,s=H*h-E*j,r=H*g-B*j,q=F*h-E*i,p=F*g-B*i,o=E*g-B*h,n=x*I-w*J,m=x*G-v*J,l=x*C-u*J,k=w*G-v*I,A=w*C-u*I,z=v*C-u*G,f=t*z-s*A+r*k+q*l-p*m+o*n;
if(!f){return null}f=1/f;y[0]=(i*z-h*A+g*k)*f;y[1]=(E*A-F*z-B*k)*f;y[2]=(I*o-G*p+C*q)*f;
y[3]=(v*p-w*o-u*q)*f;y[4]=(h*l-j*z-g*m)*f;y[5]=(H*z-E*l+B*m)*f;y[6]=(G*r-J*o-C*s)*f;
y[7]=(x*o-v*r+u*s)*f;y[8]=(j*A-i*l+g*n)*f;y[9]=(F*l-H*A-B*n)*f;y[10]=(J*p-I*r+C*t)*f;
y[11]=(w*r-x*p-u*t)*f;y[12]=(i*m-j*k-h*n)*f;y[13]=(H*k-F*m+E*n)*f;y[14]=(I*s-J*q-G*t)*f;
y[15]=(x*q-w*s+v*t)*f;return y}},{}],596:[function(c,d,b){d.exports=a;function a(r,v,s){var z=v[0],y=v[1],w=v[2],t=v[3],l=v[4],j=v[5],h=v[6],f=v[7],q=v[8],p=v[9],o=v[10],n=v[11],B=v[12],A=v[13],x=v[14],u=v[15];
var m=s[0],k=s[1],i=s[2],g=s[3];r[0]=m*z+k*l+i*q+g*B;r[1]=m*y+k*j+i*p+g*A;r[2]=m*w+k*h+i*o+g*x;
r[3]=m*t+k*f+i*n+g*u;m=s[4];k=s[5];i=s[6];g=s[7];r[4]=m*z+k*l+i*q+g*B;r[5]=m*y+k*j+i*p+g*A;
r[6]=m*w+k*h+i*o+g*x;r[7]=m*t+k*f+i*n+g*u;m=s[8];k=s[9];i=s[10];g=s[11];r[8]=m*z+k*l+i*q+g*B;
r[9]=m*y+k*j+i*p+g*A;r[10]=m*w+k*h+i*o+g*x;r[11]=m*t+k*f+i*n+g*u;m=s[12];k=s[13];
i=s[14];g=s[15];r[12]=m*z+k*l+i*q+g*B;r[13]=m*y+k*j+i*p+g*A;r[14]=m*w+k*h+i*o+g*x;
r[15]=m*t+k*f+i*n+g*u;return r}},{}],597:[function(c,d,a){d.exports=b;function b(E,L,N,f){var p=f[0],o=f[1],n=f[2],F=Math.sqrt(p*p+o*o+n*n),w,J,v,P,O,M,K,m,l,k,j,D,C,B,A,u,r,q,I,H,G,i,h,g;
if(Math.abs(F)<0.000001){return null}F=1/F;p*=F;o*=F;n*=F;w=Math.sin(N);J=Math.cos(N);
v=1-J;P=L[0];O=L[1];M=L[2];K=L[3];m=L[4];l=L[5];k=L[6];j=L[7];D=L[8];C=L[9];B=L[10];
A=L[11];u=p*p*v+J;r=o*p*v+n*w;q=n*p*v-o*w;I=p*o*v-n*w;H=o*o*v+J;G=n*o*v+p*w;i=p*n*v+o*w;
h=o*n*v-p*w;g=n*n*v+J;E[0]=P*u+m*r+D*q;E[1]=O*u+l*r+C*q;E[2]=M*u+k*r+B*q;E[3]=K*u+j*r+A*q;
E[4]=P*I+m*H+D*G;E[5]=O*I+l*H+C*G;E[6]=M*I+k*H+B*G;E[7]=K*I+j*H+A*G;E[8]=P*i+m*h+D*g;
E[9]=O*i+l*h+C*g;E[10]=M*i+k*h+B*g;E[11]=K*i+j*h+A*g;if(L!==E){E[12]=L[12];E[13]=L[13];
E[14]=L[14];E[15]=L[15]}return E}},{}],598:[function(c,d,a){d.exports=b;function b(f,m,l){var r=Math.sin(l),k=Math.cos(l),q=m[4],p=m[5],o=m[6],n=m[7],j=m[8],i=m[9],h=m[10],g=m[11];
if(m!==f){f[0]=m[0];f[1]=m[1];f[2]=m[2];f[3]=m[3];f[12]=m[12];f[13]=m[13];f[14]=m[14];
f[15]=m[15]}f[4]=q*k+j*r;f[5]=p*k+i*r;f[6]=o*k+h*r;f[7]=n*k+g*r;f[8]=j*k-q*r;f[9]=i*k-p*r;
f[10]=h*k-o*r;f[11]=g*k-n*r;return f}},{}],599:[function(c,d,b){d.exports=a;function a(j,q,p){var r=Math.sin(p),o=Math.cos(p),i=q[0],h=q[1],g=q[2],f=q[3],n=q[8],m=q[9],l=q[10],k=q[11];
if(q!==j){j[4]=q[4];j[5]=q[5];j[6]=q[6];j[7]=q[7];j[12]=q[12];j[13]=q[13];j[14]=q[14];
j[15]=q[15]}j[0]=i*o-n*r;j[1]=h*o-m*r;j[2]=g*o-l*r;j[3]=f*o-k*r;j[8]=i*r+n*o;j[9]=h*r+m*o;
j[10]=g*r+l*o;j[11]=f*r+k*o;return j}},{}],600:[function(c,d,b){d.exports=a;function a(j,m,l){var r=Math.sin(l),k=Math.cos(l),i=m[0],h=m[1],g=m[2],f=m[3],q=m[4],p=m[5],o=m[6],n=m[7];
if(m!==j){j[8]=m[8];j[9]=m[9];j[10]=m[10];j[11]=m[11];j[12]=m[12];j[13]=m[13];j[14]=m[14];
j[15]=m[15]}j[0]=i*k+q*r;j[1]=h*k+p*r;j[2]=g*k+o*r;j[3]=f*k+n*r;j[4]=q*k-i*r;j[5]=p*k-h*r;
j[6]=o*k-g*r;j[7]=n*k-f*r;return j}},{}],601:[function(b,c,a){c.exports=d;function d(i,g,h){var f=h[0],k=h[1],j=h[2];
i[0]=g[0]*f;i[1]=g[1]*f;i[2]=g[2]*f;i[3]=g[3]*f;i[4]=g[4]*k;i[5]=g[5]*k;i[6]=g[6]*k;
i[7]=g[7]*k;i[8]=g[8]*j;i[9]=g[9]*j;i[10]=g[10]*j;i[11]=g[11]*j;i[12]=g[12];i[13]=g[13];
i[14]=g[14];i[15]=g[15];return i}},{}],602:[function(b,c,a){c.exports=d;function d(r,t,m){var l=m[0],k=m[1],j=m[2],A,w,u,s,i,h,g,f,q,p,o,n;
if(t===r){r[12]=t[0]*l+t[4]*k+t[8]*j+t[12];r[13]=t[1]*l+t[5]*k+t[9]*j+t[13];r[14]=t[2]*l+t[6]*k+t[10]*j+t[14];
r[15]=t[3]*l+t[7]*k+t[11]*j+t[15]}else{A=t[0];w=t[1];u=t[2];s=t[3];i=t[4];h=t[5];
g=t[6];f=t[7];q=t[8];p=t[9];o=t[10];n=t[11];r[0]=A;r[1]=w;r[2]=u;r[3]=s;r[4]=i;
r[5]=h;r[6]=g;r[7]=f;r[8]=q;r[9]=p;r[10]=o;r[11]=n;r[12]=A*l+i*k+q*j+t[12];r[13]=w*l+h*k+p*j+t[13];
r[14]=u*l+g*k+o*j+t[14];r[15]=s*l+f*k+n*j+t[15]}return r}},{}],603:[function(b,c,a){c.exports=d;
function d(i,h){if(i===h){var m=h[1],k=h[2],j=h[3],f=h[6],l=h[7],g=h[11];i[1]=h[4];
i[2]=h[8];i[3]=h[12];i[4]=m;i[6]=h[9];i[7]=h[13];i[8]=k;i[9]=f;i[11]=h[14];i[12]=j;
i[13]=l;i[14]=g}else{i[0]=h[0];i[1]=h[4];i[2]=h[8];i[3]=h[12];i[4]=h[1];i[5]=h[5];
i[6]=h[9];i[7]=h[13];i[8]=h[2];i[9]=h[6];i[10]=h[10];i[11]=h[14];i[12]=h[3];i[13]=h[7];
i[14]=h[11];i[15]=h[15]}return i}},{}],604:[function(b,d,a){d.exports=c;function c(){var f=new Float32Array(3);
f[0]=0;f[1]=0;f[2]=0;return f}},{}],605:[function(b,c,a){c.exports=d;function d(g,l,k){var f=l[0],n=l[1],m=l[2],j=k[0],i=k[1],h=k[2];
g[0]=n*h-m*i;g[1]=m*j-f*h;g[2]=f*i-n*j;return g}},{}],606:[function(c,d,b){d.exports=a;
function a(g,f){return g[0]*f[0]+g[1]*f[1]+g[2]*f[2]}},{}],607:[function(b,c,a){c.exports=d;
function d(f,i,h){var g=new Float32Array(3);g[0]=f;g[1]=i;g[2]=h;return g}},{}],608:[function(b,c,a){c.exports=d;
function d(g){var f=g[0],i=g[1],h=g[2];return Math.sqrt(f*f+i*i+h*h)}},{}],609:[function(c,d,b){d.exports=a;
function a(i,h){var g=h[0],k=h[1],j=h[2];var f=g*g+k*k+j*j;if(f>0){f=1/Math.sqrt(f);
i[0]=h[0]*f;i[1]=h[1]*f;i[2]=h[2]*f}return i}},{}],610:[function(b,d,a){d.exports=c;
function c(){var f=new Float32Array(4);f[0]=0;f[1]=0;f[2]=0;f[3]=0;return f}},{}],611:[function(b,c,a){c.exports=d;
function d(f,j,i,g){var h=new Float32Array(4);h[0]=f;h[1]=j;h[2]=i;h[3]=g;return h
}},{}],612:[function(b,d,a){d.exports=c;function c(j,i,g){var f=i[0],l=i[1],k=i[2],h=i[3];
j[0]=g[0]*f+g[4]*l+g[8]*k+g[12]*h;j[1]=g[1]*f+g[5]*l+g[9]*k+g[13]*h;j[2]=g[2]*f+g[6]*l+g[10]*k+g[14]*h;
j[3]=g[3]*f+g[7]*l+g[11]*k+g[15]*h;return j}},{}],613:[function(b,c,a){c.exports={Transform:b("./ac-transform/Transform")}
},{"./ac-transform/Transform":614}],614:[function(l,d,H){var k=l("./gl-matrix/mat4");
var b=l("./gl-matrix/vec3");var a=l("./gl-matrix/vec4");var f=Math.PI/180;var c=180/Math.PI;
var F=0,y=0,D=1,x=1,B=2,z=3;var j=4,w=4,i=5,v=5,h=6,g=7;var t=8,q=9,o=10,n=11;var G=12,u=12,E=13,s=13,C=14,A=15;
function p(){this.m=k.create()}var r=p.prototype;r.rotateX=function(J){var I=f*J;
k.rotateX(this.m,this.m,I);return this};r.rotateY=function(J){var I=f*J;k.rotateY(this.m,this.m,I);
return this};r.rotateZ=function(J){var I=f*J;k.rotateZ(this.m,this.m,I);return this
};r.rotate=r.rotateZ;r.rotate3d=function(J,M,L,K){if(M===null||M===undefined){M=J
}if(L===null||M===undefined){L=J}var I=f*K;k.rotate(this.m,this.m,I,[J,M,L]);return this
};r.rotateAxisAngle=r.rotate3d;r.scale=function(J,I){I=I||J;k.scale(this.m,this.m,[J,I,1]);
return this};r.scaleX=function(I){k.scale(this.m,this.m,[I,1,1]);return this};r.scaleY=function(I){k.scale(this.m,this.m,[1,I,1]);
return this};r.scaleZ=function(I){k.scale(this.m,this.m,[1,1,I]);return this};r.scale3d=function(K,J,I){k.scale(this.m,this.m,[K,J,I]);
return this};r.skew=function(K,J){if(J===null||J===undefined){return this.skewX(K)
}K=f*K;J=f*J;var I=k.create();I[w]=Math.tan(K);I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.skewX=function(J){J=f*J;var I=k.create();I[w]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.skewY=function(J){J=f*J;var I=k.create();I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.translate=function(J,I){I=I||0;k.translate(this.m,this.m,[J,I,0]);
return this};r.translate3d=function(J,I,K){k.translate(this.m,this.m,[J,I,K]);return this
};r.translateX=function(I){k.translate(this.m,this.m,[I,0,0]);return this};r.translateY=function(I){k.translate(this.m,this.m,[0,I,0]);
return this};r.translateZ=function(I){k.translate(this.m,this.m,[0,0,I]);return this
};r.perspective=function(J){var I=k.create();if(J!==0){I[n]=-1/J}k.multiply(this.m,this.m,I)
};r.inverse=function(){var I=this.clone();I.m=k.invert(I.m,this.m);return I};r.reset=function(){k.identity(this.m);
return this};r.getTranslateXY=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s]]
}return[I[G],I[E]]};r.getTranslateXYZ=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s],0]
}return[I[G],I[E],I[C]]};r.getTranslateX=function(){var I=this.m;if(this.isAffine()){return I[u]
}return I[G]};r.getTranslateY=function(){var I=this.m;if(this.isAffine()){return I[s]
}return I[E]};r.getTranslateZ=function(){var I=this.m;if(this.isAffine()){return 0
}return I[C]};r.clone=function(){var I=new p();I.m=k.clone(this.m);return I};r.toArray=function(){var I=this.m;
if(this.isAffine()){return[I[y],I[x],I[w],I[v],I[u],I[s]]}return[I[F],I[D],I[B],I[z],I[j],I[i],I[h],I[g],I[t],I[q],I[o],I[n],I[G],I[E],I[C],I[A]]
};r.fromArray=function(I){this.m=Array.prototype.slice.call(I);return this};r.setMatrixValue=function(J){J=String(J).trim();
var I=k.create();if(J==="none"){this.m=I;return this}var L=J.slice(0,J.indexOf("(")),M,K;
if(L==="matrix3d"){M=J.slice(9,-1).split(",");for(K=0;K<M.length;K++){I[K]=parseFloat(M[K])
}}else{if(L==="matrix"){M=J.slice(7,-1).split(",");for(K=M.length;K--;){M[K]=parseFloat(M[K])
}I[F]=M[0];I[D]=M[1];I[G]=M[4];I[j]=M[2];I[i]=M[3];I[E]=M[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=I;return this};var m=function(I){return Math.abs(I)<0.0001};r.decompose=function(T){T=T||false;
var X=k.clone(this.m);var O=b.create();var ad=b.create();var L=b.create();var Q=a.create();
var J=a.create();var K=b.create();for(var Z=0;Z<16;Z++){X[Z]/=X[A]}var V=k.clone(X);
V[z]=0;V[g]=0;V[n]=0;V[A]=1;var aa=X[3],M=X[7],P=X[11],af=X[12],ae=X[13],ac=X[14],ab=X[15];
var S=a.create();if(!m(X[z])||!m(X[g])||!m(X[n])){S[0]=X[z];S[1]=X[g];S[2]=X[n];
S[3]=X[A];var Y=k.invert(k.create(),V);var R=k.transpose(k.create(),Y);Q=a.transformMat4(Q,S,R)
}else{Q=a.fromValues(0,0,0,1)}O[0]=af;O[1]=ae;O[2]=ac;var N=[b.create(),b.create(),b.create()];
N[0][0]=X[0];N[0][1]=X[1];N[0][2]=X[2];N[1][0]=X[4];N[1][1]=X[5];N[1][2]=X[6];N[2][0]=X[8];
N[2][1]=X[9];N[2][2]=X[10];ad[0]=b.length(N[0]);b.normalize(N[0],N[0]);L[0]=b.dot(N[0],N[1]);
N[1]=this._combine(N[1],N[0],1,-L[0]);ad[1]=b.length(N[1]);b.normalize(N[1],N[1]);
L[0]/=ad[1];L[1]=b.dot(N[0],N[2]);N[2]=this._combine(N[2],N[0],1,-L[1]);L[2]=b.dot(N[1],N[2]);
N[2]=this._combine(N[2],N[1],1,-L[2]);ad[2]=b.length(N[2]);b.normalize(N[2],N[2]);
L[1]/=ad[2];L[2]/=ad[2];var W=b.cross(b.create(),N[1],N[2]);if(b.dot(N[0],W)<0){for(Z=0;
Z<3;Z++){ad[Z]*=-1;N[Z][0]*=-1;N[Z][1]*=-1;N[Z][2]*=-1}}J[0]=0.5*Math.sqrt(Math.max(1+N[0][0]-N[1][1]-N[2][2],0));
J[1]=0.5*Math.sqrt(Math.max(1-N[0][0]+N[1][1]-N[2][2],0));J[2]=0.5*Math.sqrt(Math.max(1-N[0][0]-N[1][1]+N[2][2],0));
J[3]=0.5*Math.sqrt(Math.max(1+N[0][0]+N[1][1]+N[2][2],0));if(N[2][1]>N[1][2]){J[0]=-J[0]
}if(N[0][2]>N[2][0]){J[1]=-J[1]}if(N[1][0]>N[0][1]){J[2]=-J[2]}var I=a.fromValues(J[0],J[1],J[2],2*Math.acos(J[3]));
var U=this._rotationFromQuat(J);if(T){L[0]=Math.round(L[0]*c*100)/100;L[1]=Math.round(L[1]*c*100)/100;
L[2]=Math.round(L[2]*c*100)/100;U[0]=Math.round(U[0]*c*100)/100;U[1]=Math.round(U[1]*c*100)/100;
U[2]=Math.round(U[2]*c*100)/100;I[3]=Math.round(I[3]*c*100)/100}return{translation:O,scale:ad,skew:L,perspective:Q,quaternion:J,eulerRotation:U,axisAngle:I}
};r.recompose=function(O,N,K,L,M){O=O||b.create();N=N||b.create();K=K||b.create();
L=L||a.create();M=M||a.create();var J=k.fromRotationTranslation(k.create(),M,O);
J[z]=L[0];J[g]=L[1];J[n]=L[2];J[A]=L[3];var I=k.create();if(K[2]!==0){I[q]=K[2];
k.multiply(J,J,I)}if(K[1]!==0){I[q]=0;I[t]=K[1];k.multiply(J,J,I)}if(K[0]){I[t]=0;
I[4]=K[0];k.multiply(J,J,I)}k.scale(J,J,N);this.m=J;return this};r.isAffine=function(){return(this.m[B]===0&&this.m[z]===0&&this.m[h]===0&&this.m[g]===0&&this.m[t]===0&&this.m[q]===0&&this.m[o]===1&&this.m[n]===0&&this.m[C]===0&&this.m[A]===1)
};r.toString=function(){var I=this.m;if(this.isAffine()){return"matrix("+I[y]+", "+I[x]+", "+I[w]+", "+I[v]+", "+I[u]+", "+I[s]+")"
}return"matrix3d("+I[F]+", "+I[D]+", "+I[B]+", "+I[z]+", "+I[j]+", "+I[i]+", "+I[h]+", "+I[g]+", "+I[t]+", "+I[q]+", "+I[o]+", "+I[n]+", "+I[G]+", "+I[E]+", "+I[C]+", "+I[A]+")"
};r.toCSSString=r.toString;r._combine=function(J,M,L,K){var I=b.create();I[0]=(L*J[0])+(K*M[0]);
I[1]=(L*J[1])+(K*M[1]);I[2]=(L*J[2])+(K*M[2]);return I};r._matrix2dToMat4=function(I){var K=k.create();
for(var L=0;L<4;L++){for(var J=0;J<4;J++){K[L*4+J]=I[L][J]}}return K};r._mat4ToMatrix2d=function(L){var I=[];
for(var K=0;K<4;K++){I[K]=[];for(var J=0;J<4;J++){I[K][J]=L[K*4+J]}}return I};r._rotationFromQuat=function(I){var M=I[3]*I[3];
var L=I[0]*I[0];var K=I[1]*I[1];var J=I[2]*I[2];var R=L+K+J+M;var N=I[0]*I[1]+I[2]*I[3];
var Q,P,O;if(N>0.499*R){P=2*Math.atan2(I[0],I[3]);O=Math.PI/2;Q=0;return b.fromValues(Q,P,O)
}if(N<-0.499*R){P=-2*Math.atan2(I[0],I[3]);O=-Math.PI/2;Q=0;return b.fromValues(Q,P,O)
}P=Math.atan2(2*I[1]*I[3]-2*I[0]*I[2],L-K-J+M);O=Math.asin(2*N/R);Q=Math.atan2(2*I[0]*I[3]-2*I[1]*I[2],-L+K-J+M);
return b.fromValues(Q,P,O)};d.exports=p},{"./gl-matrix/mat4":615,"./gl-matrix/vec3":616,"./gl-matrix/vec4":617}],615:[function(c,d,a){var b={create:c("gl-mat4/create"),rotate:c("gl-mat4/rotate"),rotateX:c("gl-mat4/rotateX"),rotateY:c("gl-mat4/rotateY"),rotateZ:c("gl-mat4/rotateZ"),scale:c("gl-mat4/scale"),multiply:c("gl-mat4/multiply"),translate:c("gl-mat4/translate"),invert:c("gl-mat4/invert"),clone:c("gl-mat4/clone"),transpose:c("gl-mat4/transpose"),identity:c("gl-mat4/identity"),fromRotationTranslation:c("gl-mat4/fromRotationTranslation")};
d.exports=b},{"gl-mat4/clone":591,"gl-mat4/create":592,"gl-mat4/fromRotationTranslation":593,"gl-mat4/identity":594,"gl-mat4/invert":595,"gl-mat4/multiply":596,"gl-mat4/rotate":597,"gl-mat4/rotateX":598,"gl-mat4/rotateY":599,"gl-mat4/rotateZ":600,"gl-mat4/scale":601,"gl-mat4/translate":602,"gl-mat4/transpose":603}],616:[function(b,d,a){var c={create:b("gl-vec3/create"),dot:b("gl-vec3/dot"),normalize:b("gl-vec3/normalize"),length:b("gl-vec3/length"),cross:b("gl-vec3/cross"),fromValues:b("gl-vec3/fromValues")};
d.exports=c},{"gl-vec3/create":604,"gl-vec3/cross":605,"gl-vec3/dot":606,"gl-vec3/fromValues":607,"gl-vec3/length":608,"gl-vec3/normalize":609}],617:[function(c,d,a){var b={create:c("gl-vec4/create"),transformMat4:c("gl-vec4/transformMat4"),fromValues:c("gl-vec4/fromValues")};
d.exports=b},{"gl-vec4/create":610,"gl-vec4/fromValues":611,"gl-vec4/transformMat4":612}],618:[function(b,a,f){b("@marcom/ac-polyfills/Function/prototype.bind");
b("@marcom/ac-polyfills/Object/keys");b("@marcom/ac-polyfills/Object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i=b("@marcom/ac-dom-events/utils/addEventListener");var h=b("@marcom/ac-feature/mediaQueriesAvailable");
var c="viewport-emitter";var j="::before";var d="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function k(m){l.call(this);this._initializeElement(m);if(h()){this._updateViewport=this._updateViewport.bind(this);
i(window,"resize",this._updateViewport);i(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(d);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var g=k.prototype=Object.create(l.prototype);
g.viewport=false;g.retina=false;g._initializeElement=function(n){var m;n=n||c;m=document.getElementById(n);
if(!m){m=document.createElement("div");m.id=n;m=document.body.appendChild(m)}this._el=m
};g._getElementContent=function(){var m;if("currentStyle" in this._el){m=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();m=window.getComputedStyle(this._el,j).content}m=m.replace(/["']/g,"");
if(m){return m}return false};g._updateViewport=function(){var m=this.viewport;var n;
var o;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(m&&this.viewport!==m){o={from:m,to:this.viewport};this.trigger("change",o);
this.trigger("from:"+m,o);this.trigger("to:"+this.viewport,o)}};g._updateRetina=function(m){var n=this.retina;
this.retina=this._retinaQuery.matches;if(n!==this.retina){this.trigger("retinachange",{from:n,to:this.retina})
}};g._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};a.exports=k},{"@marcom/ac-dom-events/utils/addEventListener":38,"@marcom/ac-event-emitter-micro":192,"@marcom/ac-feature/mediaQueriesAvailable":224,"@marcom/ac-polyfills/Function/prototype.bind":412,"@marcom/ac-polyfills/Object/create":416,"@marcom/ac-polyfills/Object/keys":418}],619:[function(c,d,b){var a=c("./ViewportEmitter");
d.exports=new a()},{"./ViewportEmitter":618}],620:[function(c,a,h){c("@marcom/ac-jetpack-lib");
c("@marcom/ac-polyfills/Object/assign");window.ACTransform=c("@marcom/ac-transform").Transform;
var j=c("@marcom/ac-dom-traversal/querySelector");var m=c("@marcom/ac-jetpack-lib/core/LocalNavStyleChanger");
var k=c("./shared/progressiveImages/ProgressiveImagesController");var g=c("@marcom/ac-jetpack-lib/model/DataAttributes");
var o=c("@marcom/ac-jetpack-lib/model/PageMap");var b=c("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var i=c("@marcom/ac-jetpack-lib/model/ComponentMap");var f=c("./shared/model/PageMap");
var n=c("./shared/model/ComponentMap");var d=c("./shared/model/EnabledFeatures");
var l=(function(){return{initialize:function(){o=Object.assign(o,f);i=Object.assign(i,n);
b=b.extend(d);b.init();var p=this.instantiatePageController();this.initProgressiveImages(p)
},initLocalNavStyleChanger:function(){var q=document.getElementById("ac-localnav");
if(q===null){return}var p={"section-light":"theme-light","section-lightgrey":"theme-light","section-dark":"theme-dark","section-darkgrey":"theme-dark","section-pink":"theme-pink","section-blue":"theme-blue"};
m.initialize(q,p,"theme-light")},instantiatePageController:function(){var q=j("main,.main");
if(q===null){throw"Could not find <main> or .main element"}if(!q.hasAttribute(g.PAGE_TYPE)){throw"No valid <main> tag found with correct page type attribute"
}var p=q.getAttribute(g.PAGE_TYPE);if(!o.hasOwnProperty(p)){throw"Failed to init no page type called "+p+" found"
}return new o[p]()},initProgressiveImages:function(p){new k(p)}}}());a.exports=l.initialize()
},{"./shared/model/ComponentMap":630,"./shared/model/EnabledFeatures":631,"./shared/model/PageMap":632,"./shared/progressiveImages/ProgressiveImagesController":634,"@marcom/ac-dom-traversal/querySelector":93,"@marcom/ac-jetpack-lib":273,"@marcom/ac-jetpack-lib/core/LocalNavStyleChanger":277,"@marcom/ac-jetpack-lib/model/ComponentMap":278,"@marcom/ac-jetpack-lib/model/DataAttributes":279,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-jetpack-lib/model/PageMap":281,"@marcom/ac-polyfills/Object/assign":415,"@marcom/ac-transform":613}],621:[function(c,a,f){var i=c("@marcom/ac-object/create");
var g=c("@marcom/ac-dom-traversal/querySelector");var b=c("@marcom/ac-viewport-emitter");
var d=c("@marcom/ac-gallery").FadeGalleryItem;function k(l){d.call(this,l)}var j=d.prototype;
var h=k.prototype=i(j);h.getElement=function(){var l=j.getElement.call(this);if(b.viewport==="small"){return g("figcaption",l)
}return g(".quote-copy",l)};a.exports=k},{"@marcom/ac-dom-traversal/querySelector":93,"@marcom/ac-gallery":250,"@marcom/ac-object/create":371,"@marcom/ac-viewport-emitter":619}],622:[function(f,a,h){f("@marcom/ac-polyfills/Object/create");
var g=f("@marcom/ac-jetpack-lib/core/BaseComponent");var o=g.prototype;var i=f("@marcom/ac-dom-traversal/querySelector");
var m=f("@marcom/ac-classlist/contains");var p=f("@marcom/ac-classlist/add");var l=f("@marcom/ac-dom-events/addEventListener");
var d=f("@marcom/ac-jetpack-lib/model/EnabledFeatures");var c=f("@marcom/ac-viewport-emitter");
var b=f("@marcom/ac-gallery").SlideGallery;var k={gallerySection:".section-camera-gallery",galleryContainer:".camera-eyelid-gallery"};
function n(u,w,q,t,r,v,s){if(d.IS_IE){return}this._gallerySection=i(k.gallerySection);
if(this._gallerySection){this.name="EyelidGallery"+s;g.call(this,u,w,q,t,r,v,s);
this._currentBreakpoint=c.viewport;this._galleryContainer=i(k.galleryContainer,this._gallerySection);
p(this._gallerySection,"gallery-enhanced");this._createEyelidGallery();this.rafWhenVisible=false
}}var j=n.prototype=Object.create(g.prototype);n.prototype.constructor=n;j._createEyelidGallery=function(){this._gallery=new b(this._galleryContainer,{ease:"cubic-bezier(.35,.01,.34,1)",duration:0.6,itemCenterPoint:0.5,resizeContainer:true,resizeContainerOnUpdate:true,updateOnWindowResize:true,wrapAround:true,touch:d.TOUCH,enableArrowKeys:true});
this._enableGallerySlideClick()};j._enableGallerySlideClick=function(){var r=this._gallery.getItems();
var s=this._gallery.getTotalItems();for(var q=0;q<s;q++){l(r[q].getElement(),"click",this._onGallerySlideClick.bind(this,q))
}};j._onGallerySlideClick=function(q){var r=this._gallery.getItemAt(q);if(m(r,"ac-gallery-currentitem")){return
}this._gallery.show(q)};j.destroy=function(){o.destroy.call(this)};j.setupEvents=function(){o.setupEvents.call(this)
};j.teardownEvents=function(){o.teardownEvents.call(this)};j.onBreakpoint=function(r,t,q,s){this._currentBreakpoint=r
};a.exports=n},{"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/contains":11,"@marcom/ac-dom-events/addEventListener":24,"@marcom/ac-dom-traversal/querySelector":93,"@marcom/ac-gallery":250,"@marcom/ac-jetpack-lib/core/BaseComponent":274,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-polyfills/Object/create":416,"@marcom/ac-viewport-emitter":619}],623:[function(d,b,h){d("@marcom/ac-polyfills/Object/create");
d("@marcom/ac-polyfills/Array/prototype.forEach");d("@marcom/ac-polyfills/Array/prototype.map");
var g=d("@marcom/ac-jetpack-lib/core/BaseComponent");var c=d("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var k=d("@marcom/ac-classlist/add");var a=d("@marcom/ac-dom-traversal/querySelectorAll");
var m=d("@marcom/ac-dom-events/addEventListener");var j=d("@marcom/ac-dom-events/target");
var l=d("@marcom/ac-progressive-image-loader/ProgressiveImageLoader");function f(w,q,t,p,u,o,s){this.name="FanOutHeroAnimation - ";
g.call(this,w,q,t,p,u,o,s);if(c.IS_IE){return}var r=new l({container:q});var v=a(".progressive-image",q).length;
var n=0;r.on("image-load",(function(){n+=1}));r.once("complete",function(){if(n<v){k(q,"animation-cancelled")
}else{k(q,"animation-started");m(q,"transitionend",function(x){var y=j(x);k(y,"animation-ended")
})}});r.load({timeout:2000});this.rafWhenVisible=true}var i=f.prototype=Object.create(g.prototype);
f.prototype.constructor=f;i.onBreakpoint=function(o,q,n,p){a("figure",this.element).forEach(function(r){k(r,"animation-ended")
})};b.exports=f},{"@marcom/ac-classlist/add":5,"@marcom/ac-dom-events/addEventListener":24,"@marcom/ac-dom-events/target":37,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-jetpack-lib/core/BaseComponent":274,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-polyfills/Array/prototype.forEach":396,"@marcom/ac-polyfills/Array/prototype.map":399,"@marcom/ac-polyfills/Object/create":416,"@marcom/ac-progressive-image-loader/ProgressiveImageLoader":433}],624:[function(i,f,m){i("@marcom/ac-polyfills/Object/create");
var k=i("@marcom/ac-jetpack-lib/core/BaseComponent");var o=k.prototype;var a=i("../mediaObject/decorators/BasicDecorator");
var j=i("../mediaObject/decorators/AutoplayDecorator");var h=i("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var d=i("@marcom/ac-dom-traversal/querySelectorAll");var g=i("@marcom/ac-viewport-emitter");
var c=i("@marcom/ac-element-tracker").ElementTracker;var b=i("@marcom/ac-classlist");
function l(t,w,p,s,q,v,r){this.name="MediaObjectPlayer"+r;k.call(this,t,w,p,s,q,v,r);
if(!this.canShowVideo()){return}else{t.element.classList.add("enabled")}var u=d("[data-mediaobject]",this.element);
this.mediaObjectContainers=u;this._mediaObjectElementTracker=new c(null,{autoStart:false});
this._mediaObjects=[];this._boundOnInit=this._init.bind(this);if(this.mediaObjectContainers){this._boundOnInit()
}this.rafWhenVisible=false}var n=l.prototype=Object.create(k.prototype);l.prototype.constructor=l;
n.mediaObjectsVisibleClass="mediaObjects-visible";n._init=function(){this.mediaObjectContainers.forEach(function(s,r){s=s||"[NO ELEMENT]";
var u=s.getAttribute("data-mediaobject");try{u=JSON.parse(u)}catch(v){u={}}if(!this.shouldBeStatic(u)){var q=this._mediaObjectElementTracker.addElement(s);
var t;var p;if(u.decorator==="autoplay"){p=new j(s,q,u);t=p.mediaObj;t.decorator=u.decorator
}else{p=new a(s,q,u);t=p.mediaObj;t.decorator="basic"}this._mediaObjects.push(t);
this._mediaObjectElementTracker.refreshElementState(q)}}.bind(this))};n.shouldBeStatic=function(p){if(p["static"]===g.viewport){return true
}else{if(p["static"]==="touch"&&h.TOUCH){return true}else{return false}}};n.canShowVideo=function(){if(h.IS_DESKTOP&&!h.IS_IE&&h.MASKBOXIMAGE){return true
}else{return false}};n.destroy=function(){o.destroy.call(this)};n.setupEvents=function(){o.setupEvents.call(this)
};n.teardownEvents=function(){o.teardownEvents.call(this)};n.onSectionWillAppear=function(p,q){o.onSectionWillAppear.call(this,p,q);
if(!this.canShowVideo()){return}this._mediaObjects.forEach(function(r){if(!r.isDestroyed&&!r.getEnhanced()){r.trigger("shouldenhance")
}});if(this.mediaObjectContainers){this._mediaObjectElementTracker.start()}if(this.mediaObjectContainers){b.add(this.element,this.mediaObjectsVisibleClass)
}};n.activate=function(){o.activate.call(this)};n.animateIn=function(){o.animateIn.call(this)
};n.onRequestAnimationFrame=function(){o.onRequestAnimationFrame.call(this)};n.deactivate=function(){o.deactivate.call(this)
};n.onScroll=function(q,p,r){o.onScroll.call(this,q,p,r)};n.onSectionWillDisappear=function(p,q){o.onSectionWillDisappear.call(this,p,q);
if(this.mediaObjectContainers){b.remove(this.element,this.mediaObjectsVisibleClass)
}};n.onResizeWillBeCalledAfterDelay=function(q,p,r){o.onResizeWillBeCalledAfterDelay.call(this,q,p,r)
};n.onResize=function(q,p,r){o.onResize.call(this,q,p,r)};n.onBreakpoint=function(r,v,q,u){if(!this.canShowVideo()){return
}if(r==="xlarge"||v==="xlarge"){return}var t;if(this.mediaObjectContainers){for(var s=0,p=this._mediaObjects.length;
s<p;s++){t=this._mediaObjects[s];if(t.isDestroyed){return}if(!t.getDestroyed()&&r!==v){t.destroy();
t.isDestroyed=true}}}};f.exports=l},{"../mediaObject/decorators/AutoplayDecorator":628,"../mediaObject/decorators/BasicDecorator":629,"@marcom/ac-classlist":12,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-element-tracker":189,"@marcom/ac-jetpack-lib/core/BaseComponent":274,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-polyfills/Object/create":416,"@marcom/ac-viewport-emitter":619}],625:[function(d,b,g){d("@marcom/ac-polyfills/Object/create");
var f=d("@marcom/ac-jetpack-lib/core/BaseComponent");var j=f.prototype;var c=d("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var k=d("@marcom/ac-classlist/add");var a=d("@marcom/ac-dom-traversal/querySelectorAll");
function i(p,r,l,o,m,q,n){if(c.IS_IE||!c.CSS_TRANSITION_2D){return}this.name="PerformanceGraph - ";
f.call(this,p,r,l,o,m,q,n);this._graphEls=a(".graph-bar");if(!this._graphEls){return
}this.section.elementEngagement.addElement(this.element);this.section.elementEngagement.start();
this.section.elementEngagement.on("engaged",this._startGraphing.bind(this));this.rafWhenVisible=true
}var h=i.prototype=Object.create(f.prototype);i.prototype.constructor=i;h._startGraphing=function(){var m=this._graphEls.length;
for(var l=0;l<m;l++){k(this._graphEls[l],"animate")}};h.animateIn=function(){j.animateIn.call(this)
};h.onBreakpoint=function(m,o,l,n){};b.exports=i},{"@marcom/ac-classlist/add":5,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-jetpack-lib/core/BaseComponent":274,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-polyfills/Object/create":416}],626:[function(k,c,B){k("@marcom/ac-polyfills/Object/create");
k("@marcom/ac-polyfills/Array/prototype.reduce");var A=k("@marcom/ac-browser");
var f=k("@marcom/ac-dom-traversal/querySelector");var r=k("@marcom/ac-dom-traversal/querySelectorAll");
var n=k("@marcom/ac-dom-metrics/getDimensions");var z=k("@marcom/ac-dom-metrics/getContentDimensions");
var v=k("@marcom/ac-jetpack-lib/model/EnabledFeatures");var o=k("@marcom/ac-gallery").Gallery;
var t=k("@marcom/ac-gallery").SlideGalleryItem;var m=k("../QuoteGallery/QuoteGalleryFadeItem");
var i=k("@marcom/ac-classlist/add");var j=k("@marcom/ac-classlist/remove");var g=k("@marcom/ac-viewport-emitter");
var h=k("@marcom/ac-dom-styles");var x=k("@marcom/ac-jetpack-lib/core/BaseComponent");
var u=x.prototype;function b(D){return function(E){h.setStyle(E,{width:typeof D==="number"?D+"px":D})
}}function a(E,F){var D=z(f("[data-siri-gallery-figcaption]",F)).height;if(typeof E==="number"&&D<E){return E
}return D}function l(E,G){var D;var F;D=h.getStyle(E,"height").height;F=h.getStyle(E,"padding-bottom").paddingBottom;
return parseInt(D,10)+parseInt(F,10)+(G/2)+"px"}function s(F,E){if(E.length===0){return
}var D=n(document.body).width;var G;if(E.length>1){G=E.reduce(a)}else{G=z(f("[data-siri-gallery-figcaption]",E[0])).height
}G+="px";E.forEach(b(D));h.setStyle(F,{height:G})}function C(E,G,F,D){return o.create(E,G,{crossFade:true,enableArrowKeys:D.length>1,itemCenterPoint:0.5,itemType:F,resizeContainer:G===o.FADE,touch:D.length>1,wrapAround:D.length>2})
}var w={galleryElement:"[data-siri-quote-gallery]",galleryItem:"[data-ac-gallery-item]"};
var d=["column","large-6","large-push-6","gutter-half-right","gutter-half-left","siri-quote-gallery-section"];
var y=["large-12"];function q(H,J,D,G,E,I,F){this.name="QuoteGallery - ";x.call(this,H,J,D,G,E,I,F);
if(v.IS_IE){return}this.galleryElement=f(w.galleryElement,this.element);if(!this.galleryElement){return
}this._isPortrait=window.matchMedia("(orientation: portrait)");d.forEach(function(K){i(J,K)
});y.forEach(function(K){j(J,K)});i(this.galleryElement,"siri-quote-gallery");this.galleryItems=r(w.galleryItem,this.galleryElement);
if(this.galleryItems.length===1){i(f(".gallery-wrapper",J),"hide-nav")}this.oldPaddingBottom=h.getStyle(this.element,"padding-bottom").paddingBottom;
if(A.name.toLowerCase()==="firefox"&&g.viewport!=="small"){h.setStyle(J,{height:h.getStyle(J.parentElement,"height").height})
}this._initializeGallery(G);this.rafWhenVisible=true}var p=q.prototype=Object.create(x.prototype);
q.prototype.constructor=q;p._initializeGallery=function(D){this._destroyGallery();
var F=o.FADE;var E=m;if(D==="small"&&v.TOUCH){F=o.SLIDE;E=t;s(this.galleryElement,this.galleryItems)
}this.gallery=C(this.galleryElement,F,E,this.galleryItems);var G;if(g.viewport!=="small"){G=h.getStyle(f("[data-siri-gallery-figcaption]",this.galleryElement),"padding-bottom").paddingBottom;
G=parseInt(G,10);h.setStyle(this.element,{paddingBottom:l(this.galleryElement,G)})
}};p._destroyGallery=function(){if(this.oldPaddingBottom){h.setStyle(this.element,{paddingBottom:this.oldPaddingBottom})
}this.galleryItems.forEach(b("100%"));if(this.gallery&&typeof this.gallery.destroy==="function"){this.gallery.destroy()
}};p.destroy=function(){u.destroy.call(this);this._destroyGallery();j(this.galleryElement,"siri-quote-gallery");
d.forEach(function(D){j(this.element,D)});y.forEach(function(D){i(this.element,D)
});if(this.galleryItems.length===1){j(f(".gallery-wrapper",this.element),"hide-nav")
}};p.setupEvents=function(){if(v.IS_IE){return}u.setupEvents.call(this);this._isPortrait.addListener((function(){if(g.viewport==="small"){this._initializeGallery(g.viewport)
}}).bind(this))};p.onBreakpoint=function(E,G,D,F){if(v.IS_IE){return}this._initializeGallery(E)
};c.exports=q},{"../QuoteGallery/QuoteGalleryFadeItem":621,"@marcom/ac-browser":1,"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/remove":13,"@marcom/ac-dom-metrics/getContentDimensions":41,"@marcom/ac-dom-metrics/getDimensions":42,"@marcom/ac-dom-styles":54,"@marcom/ac-dom-traversal/querySelector":93,"@marcom/ac-dom-traversal/querySelectorAll":94,"@marcom/ac-gallery":250,"@marcom/ac-jetpack-lib/core/BaseComponent":274,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-polyfills/Array/prototype.reduce":400,"@marcom/ac-polyfills/Object/create":416,"@marcom/ac-viewport-emitter":619}],627:[function(d,b,g){d("@marcom/ac-polyfills/Object/create");
var f=d("@marcom/ac-jetpack-lib/core/BaseComponent");var m=f.prototype;var a=d("@marcom/ac-dom-traversal");
var j=d("@marcom/ac-dom-metrics/getContentDimensions");var k=d("@marcom/ac-scroll-animation/ScrollAnimation");
var c=d("@marcom/ac-jetpack-lib/model/EnabledFeatures");var l=d("@marcom/ac-classlist/add");
function h(r,t,n,q,o,s,p){this.name="ScrollAnimation_"+p;f.call(this,r,t,n,q,o,s,p);
if(!(c.MASKEDPARALLAXANIMATION)||c.IS_IE||!(c.CSS_TRANSITION_2D)){return}l(r.element,"enhancable");
this.element=r.element;this.breakpointName=q.replace("x","");this.scrollAnimationItems=[];
this.rafWhenVisible=true;this._memoizeMetrics(s);this._initialize()}var i=h.prototype=Object.create(f.prototype);
h.prototype.constructor=h;i.destroy=function(){this._destroyScrollAnimations();
m.destroy.call(this)};i._destroyScrollAnimations=function(){var o;var n=this.scrollAnimationItems.length;
for(o=0;o<n;o++){this.scrollAnimationItems[o].destroy();this.scrollAnimationItems[o]=null
}this.scrollAnimationItems.length=0};i._initialize=function(){var r=a.querySelectorAll("[data-scroll-animation]",this.element);
var n=r.length;var o;var p;for(p=0;p<n;p++){if(!r[p].offsetHeight){return}o=JSON.parse(r[p].getAttribute("data-scroll-animation"))||{};
o.overrideScroll=true;o=this._formatOptions(o)[this.breakpointName];this._setDefaultDuration(r[p],o);
var q=new k(r[p],o);this.scrollAnimationItems.push(q)}};i._memoizeMetrics=function(n){this.windowHeight=n
};i._formatOptions=function(n){var o;var p={large:{},medium:{},small:{}};for(o in n){if(o==="m"||o==="s"){continue
}p.small[o]=p.medium[o]=p.large[o]=n[o]}if(n.m){for(o in n.m){p.small[o]=p.medium[o]=n.m[o]
}}if(n.s){for(o in n.s){p.small[o]=n.s[o]}}return p};i._setDefaultDuration=function(p,o){if(o.duration){return
}var n=-1*(o.translateFrom?o.translateFrom[1]:0)+(o.translateTo?o.translateTo[1]:0);
o.duration=this.windowHeight+j(p).height+n};i._detectObjectType=function(o){var n={}.toString;
return n.call(o)};i._reInitialize=function(){this._destroyScrollAnimations();this._initialize();
this.setupEvents();this.trigger("animation-reinit")};i.setupEvents=function(){m.setupEvents.call(this)
};i.teardownEvents=function(){m.teardownEvents.call(this)};i.onSectionWillAppear=function(n,o){m.onSectionWillAppear.call(this,n,o)
};i.activate=function(){m.activate.call(this)};i.animateIn=function(){m.animateIn.call(this)
};i.onRequestAnimationFrame=function(){m.onRequestAnimationFrame.call(this)};i.deactivate=function(){m.deactivate.call(this)
};i.onScroll=function(o,n,p){m.onScroll.call(this,o,n,p);if(!(c.MASKEDPARALLAXANIMATION)||c.IS_IE||!(c.CSS_TRANSITION_2D)){return
}this._handleScroll(n)};i._handleScroll=function(o){var p;var n=this.scrollAnimationItems.length;
for(p=0;p<n;p++){this.scrollAnimationItems[p].handleScroll(o)}};i.onSectionWillDisappear=function(n,o){m.onSectionWillDisappear.call(this,n,o)
};i.onResizeWillBeCalledAfterDelay=function(o,n,p){m.onResizeWillBeCalledAfterDelay.call(this,o,n,p);
if(!(c.MASKEDPARALLAXANIMATION)||c.IS_IE||!(c.CSS_TRANSITION_2D)){return}this._memoizeMetrics(p);
this._reInitialize();this._handleScroll(n)};i.onResize=function(o,n,p){m.onResize.call(this,o,n,p)
};i.onBreakpoint=function(o,q,n,p){this.breakpointName=o.replace("x","")};b.exports=h
},{"@marcom/ac-classlist/add":5,"@marcom/ac-dom-metrics/getContentDimensions":41,"@marcom/ac-dom-traversal":79,"@marcom/ac-jetpack-lib/core/BaseComponent":274,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-polyfills/Object/create":416,"@marcom/ac-scroll-animation/ScrollAnimation":590}],628:[function(d,c,g){var a=d("./BasicDecorator");
var l=a.prototype;var j=d("@marcom/ac-dom-events/addEventListener");var b=d("@marcom/ac-dom-events/removeEventListener");
var k=d("@marcom/ac-dom-metrics/getDimensions");var i=document.documentElement.clientHeight;
var f=function(o,n,p){var m={};a.call(this,o,n,p,m);this._boundOnTrackingScroll=this._onTrackingScroll.bind(this)
};var h=f.prototype=Object.create(a.prototype);f.prototype.constructor=f;h._initMediaObject=function(){l._initMediaObject.call(this);
this.alreadyPlayed=false;var m=k(this.el).height;this.threshold=i/m-0.2;if(this.threshold>1){this.threshold=1
}};h._onTrackingScroll=function(){if(this.trackedElement&&this.trackedElement.percentInView>=this.threshold&&!this.mediaObj.isDestroyed){if(!this.mediaObj.getEnhanced()){return
}this.mediaObj.play();b(window,"scroll",this._boundOnTrackingScroll);this.trackedElement=null;
this.alreadyPlayed=true}};h._onEnhanced=function(){l._onEnhanced.call(this);if(this.trackedElement.percentInView>=this.threshold){this.mediaObj.play();
this.alreadyPlayed=true}};h.onMediaObjectEnterView=function(m){if(!this.alreadyPlayed&&!this.mediaObj.isDestroyed){if(!this.mediaObj.getEnhanced()){return
}if(this.trackedElement.percentInView<this.threshold){j(window,"scroll",this._boundOnTrackingScroll)
}else{this.mediaObj.play();this.alreadyPlayed=true}}else{if(this.alreadyPlayed&&!this.mediaObj.isDestroyed){if(!this.mediaObj.getEnhanced()){return
}this.mediaObj.play()}}};h.onMediaObjectExitView=function(m){l.onMediaObjectExitView.call(this);
if(!this.mediaObj.isDestroyed&&this.alreadyPlayed){this.mediaObj.reset()}};c.exports=f
},{"./BasicDecorator":629,"@marcom/ac-dom-events/addEventListener":24,"@marcom/ac-dom-events/removeEventListener":33,"@marcom/ac-dom-metrics/getDimensions":42}],629:[function(g,b,i){var j=g("@marcom/ac-media-object");
var m=g("@marcom/ac-cname").cname;var d=g("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var k=g("@marcom/ac-dom-traversal/querySelector");var h=g("@marcom/ac-dom-events/addEventListener");
var f="/105/media/";var n="/iphone-se/2016/dhs3b549_75f9_422a_9470_4a09e709b350/";
var c=g("@marcom/ac-viewport-emitter");var a=function(q,p,r,o){d.init();this.retina="";
if(d.IS_RETINA){this.retina="_2x"}this.el=q;this.trackedElement=p;this.data=r;this.isLoaded=false;
this.shouldEnhance=true;this.options=o||{frameRate:30};this.currentViewport=this.currentViewport||c.viewport;
if(this.currentViewport==="xlarge"){this.currentViewport="large"}this._boundOnLoad=this._onLoad.bind(this);
this._boundOnEnhanced=this._onEnhanced.bind(this);this._boundOnShouldEnhance=this._onShouldEnhanced.bind(this);
this.boundOnMediaObjectEnterView=this.onMediaObjectEnterView.bind(this);this.boundOnMediaObjectExitView=this.onMediaObjectExitView.bind(this);
this._initMediaObject();this.addEvents()};var l=a.prototype;l._initMediaObject=function(){this.mediaSrc=this._createMediaSrc(this.data.name,this.data.locale,this.data.type);
this.mediaObj=this._createMediaObject();if(!this.mediaObj.isDestroyed){this.mediaObj.on("loaded",this._boundOnLoad);
this.mediaObj.on("enhanced",this._boundOnEnhanced);this.mediaObj.on("shouldenhance",this._boundOnShouldEnhance);
this.mediaObj.load()}this._setupMobileTrigger()};l._setupMobileTrigger=function(){if(d.TOUCH){this.playTrigger=k(".mediaObject-play",this.el);
h(this.playTrigger,"click",this._playOnMobile.bind(this))}};l._onLoad=function(){this.isLoaded=true;
if(this.shouldEnhance){this.mediaObj.enhance()}};l._onShouldEnhanced=function(){this.shouldEnhance=true;
if(this.isLoaded){this.mediaObj.enhance()}};l._onEnhanced=function(){};l._createMediaSrc=function(q,o,r){o=o||"us";
var p=m.addPrefix(f+o+n+q);if(r==="flow"){return{basePath:p+"/"+this.currentViewport+"/"+r}
}else{if(r==="video"){if(d.TOUCH||d.IS_IE){if(d.IS_IOS&&!d.INLINE_VIDEO){return{basePath:p,filename:this.currentViewport,fileFormat:"mp4"}
}else{return{basePath:p,filename:"android_"+this.currentViewport,fileFormat:"mp4"}
}}else{return{basePath:p+"/split_files/"+this.currentViewport+this.retina,splitFileLoading:true}
}}else{return}}};l._createMediaObject=function(){var o={};if(this.data.type==="flow"){o=j.createFlow(this.el,this.mediaSrc,this.options)
}else{if(this.data.type==="video"||this.data.type==="split_file"){o=j.createVideo(this.el,this.mediaSrc,this.options)
}else{o.isDestroyed=true}}return o};l._playOnMobile=function(o){o.preventDefault();
this.mediaObj.play()};l.addEvents=function(){if(this.trackedElement){this.trackedElement.on("enterview",this.boundOnMediaObjectEnterView);
this.trackedElement.on("exitview",this.boundOnMediaObjectExitView)}};l.onMediaObjectEnterView=function(o){if(this.mediaObj.isDestroyed){return
}};l.onMediaObjectExitView=function(o){if(this.mediaObj.isDestroyed){return}};b.exports=a
},{"@marcom/ac-cname":17,"@marcom/ac-dom-events/addEventListener":24,"@marcom/ac-dom-traversal/querySelector":93,"@marcom/ac-jetpack-lib/model/EnabledFeatures":280,"@marcom/ac-media-object":363,"@marcom/ac-viewport-emitter":619}],630:[function(b,c,a){c.exports={EyelidGallery:b("../components/EyelidGallery"),MediaObjectPlayer:b("../components/MediaObjectPlayer"),QuoteGallery:b("../components/QuoteGallery"),PerformanceGraph:b("../components/PerformanceGraph"),FanOutHeroAnimation:b("../components/FanOutHeroAnimation"),ScrollAnimation:b("../components/ScrollAnimation")}
},{"../components/EyelidGallery":622,"../components/FanOutHeroAnimation":623,"../components/MediaObjectPlayer":624,"../components/PerformanceGraph":625,"../components/QuoteGallery":626,"../components/ScrollAnimation":627}],631:[function(b,c,a){var d=b("@marcom/ac-browser");
c.exports={IS_IE:undefined,init:function(){var f=document.getElementsByTagName("html")[0];
this.IS_IE=(!!d.IE);this.MASKBOXIMAGE=f.classList.contains("maskBoxImage");this.MASKEDPARALLAXANIMATION=f.classList.contains("maskedParallaxAnimation")
}}},{"@marcom/ac-browser":1}],632:[function(b,c,a){c.exports={overview:b("../pages/SectionEmitterPage"),specs:b("../pages/SectionEmitterPage")}
},{"../pages/SectionEmitterPage":633}],633:[function(b,d,a){b("@marcom/ac-polyfills/Object/create");
var i=b("@marcom/ac-jetpack-lib/core/BasePage");var g=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var h=i.prototype;function c(j){j=j||{};this.name="SectionEmitterPage";this._sectionEmitter=new g();
this.additionalLoadPadding=j.additionalLoadPadding||1;i.call(this)}var f=c.prototype=Object.create(i.prototype);
c.prototype.constructor=c;f.on=function(j,k){return this._sectionEmitter.on(j,k)
};f.once=function(j,k){return this._sectionEmitter.once(j,k)};f.off=function(j,k){return this._sectionEmitter.off(j,k)
};f.trigger=function(j,k){return this._sectionEmitter.trigger(j,k)};f.destroy=function(){this._sectionEmitter.destroy();
h.destroy.call(this)};f._getViewsWithinRange=function(){var s=this._cachedScrollY;
var j=this._cachedWindowHeight;var m=this.additionalLoadPadding*j;var l=s-m;var k=s+j+m;
if(!this._visibleSections||!this._visibleSections[0]){return[]}var t=Array.prototype.slice.call(this._visibleSections,0);
var o=this._visibleSections[0].index-1;var n=this._visibleSections[this._visibleSections.length-1].index+1;
var r=o;var q;var p;while(q=this._sections[r]){p=q.trackedElement;if(l<p.bottom){t.push(q);
r--}else{break}}r=n;while(q=this._sections[r]){p=q.trackedElement;if(k>p.top){t.push(q);
r++}else{break}}return t};f._onScroll=function(k){h._onScroll.call(this,k);var j=this._getViewsWithinRange();
this.trigger("sections-in-view",j)};d.exports=c},{"@marcom/ac-event-emitter-micro":192,"@marcom/ac-jetpack-lib/core/BasePage":275,"@marcom/ac-polyfills/Object/create":416}],634:[function(b,d,a){b("@marcom/ac-polyfills/Element/prototype.classList");
var g=b("@marcom/ac-progressive-image-loader/ProgressiveImageLoader");var c=function(k){this.classTarget=document.documentElement;
var j="progressive";var i=this.classTarget.classList.contains(j);if(!i){return}if(!k){this.classTarget.classList.remove(j);
return}this.pageController=k;this.imageLoaders={};this._boundOnHandleImageLoaded=this._handleImageLoaded.bind(this);
this._boundHandleSectionUpdate=this._handleSectionUpdate.bind(this);this.pageController.on("sections-in-view",this._boundHandleSectionUpdate);
var h=this.pageController._getViewsWithinRange();this._handleSectionUpdate(h);this.classTarget.classList.add("progressive-enabled")
};var f=c.prototype;f.loadTimeout=5000;f.loadedClassName="progressive-image-ready";
f.initialize=function(){};f._handleSectionUpdate=function(n){var l;var j=n.length;
var m;var k;for(l=0;l<j;l++){m=n[l];k=m.name;if(this.imageLoaders[k]){continue}if(!m.element.hasAttribute("data-progressive-exclude")){var h=new g({container:m.element,timeout:this.loadTimeout,includeContainer:true});
h.on("image-load",this._boundOnHandleImageLoaded);h.once("complete",this._handleImagesLoaded.bind(this,h));
this.imageLoaders[k]=h;h.load()}}};f._handleImageLoaded=function(h){h.classList.add(this.loadedClassName)
};f._handleImagesLoaded=function(h){h.off("image-load",this._boundOnHandleImageLoaded)
};d.exports=c},{"@marcom/ac-polyfills/Element/prototype.classList":410,"@marcom/ac-progressive-image-loader/ProgressiveImageLoader":433}]},{},[620]);