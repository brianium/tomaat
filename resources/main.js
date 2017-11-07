#!/usr/bin/env node
if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.isDef = function(a) {
  return void 0 !== a;
};
goog.isString = function(a) {
  return "string" == typeof a;
};
goog.isBoolean = function(a) {
  return "boolean" == typeof a;
};
goog.isNumber = function(a) {
  return "number" == typeof a;
};
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d; a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
  }
};
goog.define = function(a, b) {
  var c = b;
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && void 0 === goog.global.CLOSURE_UNCOMPILED_DEFINES.nodeType && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && void 0 === goog.global.CLOSURE_DEFINES.nodeType && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));
  goog.exportPath_(a, c);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.provide can not be used within a goog.module.");
  }
  if (!COMPILED && goog.isProvided_(a)) {
    throw Error('Namespace "' + a + '" already declared.');
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var c = a; (c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);) {
      goog.implicitNamespaces_[c] = !0;
    }
  }
  goog.exportPath_(a, b);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if (!goog.isString(a) || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = a;
  if (!COMPILED) {
    if (goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  if (!COMPILED) {
    if (a in goog.loadedModules_) {
      return goog.loadedModules_[a];
    }
    if (!goog.implicitNamespaces_[a]) {
      return a = goog.getObjectByName(a), null != a ? a : null;
    }
  }
  return null;
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return null != goog.moduleLoaderState_;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.setTestOnly = function(a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  for (var c = a.split("."), d = b || goog.global, e; e = c.shift();) {
    if (goog.isDefAndNotNull(d[e])) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for (d in a) {
    c[d] = a[d];
  }
};
goog.addDependency = function(a, b, c, d) {
  if (goog.DEPENDENCIES_ENABLED) {
    var e;
    a = a.replace(/\\/g, "/");
    var f = goog.dependencies_;
    d && "boolean" !== typeof d || (d = d ? {module:"goog"} : {});
    for (var g = 0; e = b[g]; g++) {
      f.nameToPath[e] = a, f.loadFlags[a] = d;
    }
    for (d = 0; b = c[d]; d++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][b] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function(a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(a);
    if (goog.isProvided_(a)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(a);
      }
    } else {
      if (goog.ENABLE_DEBUG_LOADER) {
        var b = goog.getPathFromDeps_(a);
        if (b) {
          goog.writeScripts_(b);
        } else {
          throw a = "goog.require could not find: " + a, goog.logToConsole_(a), Error(a);
        }
      }
    }
    return null;
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.instance_ = void 0;
  a.getInstance = function() {
    if (a.instance_) {
      return a.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.TRANSPILER = "transpile.js";
goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {loadFlags:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return null != a && "write" in a;
}, goog.findBasePath_ = function() {
  if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      var a = goog.global.document;
      var b = a.currentScript;
      a = b ? [b] : a.getElementsByTagName("SCRIPT");
      for (b = a.length - 1; 0 <= b; --b) {
        var c = a[b].src, d = c.lastIndexOf("?");
        d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          goog.basePath = c.substr(0, d - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function(a, b) {
  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(a, b) && (goog.dependencies_.written[a] = !0);
}, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.oldIeWaiting_ = !1, goog.importProcessedScript_ = function(a, b, c) {
  goog.importScript_("", 'goog.retrieveAndExec_("' + a + '", ' + b + ", " + c + ");");
}, goog.queuedModules_ = [], goog.wrapModule_ = function(a, b) {
  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(b + "\n//# sourceURL\x3d" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + b + "\n;return exports});\n//# sourceURL\x3d" + a + "\n";
}, goog.loadQueuedModules_ = function() {
  var a = goog.queuedModules_.length;
  if (0 < a) {
    var b = goog.queuedModules_;
    goog.queuedModules_ = [];
    for (var c = 0; c < a; c++) {
      goog.maybeProcessDeferredPath_(b[c]);
    }
  }
  goog.oldIeWaiting_ = !1;
}, goog.maybeProcessDeferredDep_ = function(a) {
  goog.isDeferredModule_(a) && goog.allDepsAreAvailable_(a) && (a = goog.getPathFromDeps_(a), goog.maybeProcessDeferredPath_(goog.basePath + a));
}, goog.isDeferredModule_ = function(a) {
  var b = (a = goog.getPathFromDeps_(a)) && goog.dependencies_.loadFlags[a] || {}, c = b.lang || "es3";
  return a && ("goog" == b.module || goog.needsTranspile_(c)) ? goog.basePath + a in goog.dependencies_.deferred : !1;
}, goog.allDepsAreAvailable_ = function(a) {
  if ((a = goog.getPathFromDeps_(a)) && a in goog.dependencies_.requires) {
    for (var b in goog.dependencies_.requires[a]) {
      if (!goog.isProvided_(b) && !goog.isDeferredModule_(b)) {
        return !1;
      }
    }
  }
  return !0;
}, goog.maybeProcessDeferredPath_ = function(a) {
  if (a in goog.dependencies_.deferred) {
    var b = goog.dependencies_.deferred[a];
    delete goog.dependencies_.deferred[a];
    goog.globalEval(b);
  }
}, goog.loadModuleFromUrl = function(a) {
  goog.retrieveAndExec_(a, !0, !1);
}, goog.writeScriptSrcNode_ = function(a) {
  goog.global.document.write('\x3cscript type\x3d"text/javascript" src\x3d"' + a + '"\x3e\x3c/script\x3e');
}, goog.appendScriptSrcNode_ = function(a) {
  var b = goog.global.document, c = b.createElement("script");
  c.type = "text/javascript";
  c.src = a;
  c.defer = !1;
  c.async = !1;
  b.head.appendChild(c);
}, goog.writeScriptTag_ = function(a, b) {
  if (goog.inHtmlDocument_()) {
    var c = goog.global.document;
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == c.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    if (void 0 === b) {
      if (goog.IS_OLD_IE_) {
        goog.oldIeWaiting_ = !0;
        var d = " onreadystatechange\x3d'goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ";
        c.write('\x3cscript type\x3d"text/javascript" src\x3d"' + a + '"' + d + "\x3e\x3c/script\x3e");
      } else {
        goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(a) : goog.writeScriptSrcNode_(a);
      }
    } else {
      c.write('\x3cscript type\x3d"text/javascript"\x3e' + goog.protectScriptTag_(b) + "\x3c/script\x3e");
    }
    return !0;
  }
  return !1;
}, goog.protectScriptTag_ = function(a) {
  return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.needsTranspile_ = function(a) {
  if ("always" == goog.TRANSPILE) {
    return !0;
  }
  if ("never" == goog.TRANSPILE) {
    return !1;
  }
  goog.requiresTranspilation_ || (goog.requiresTranspilation_ = goog.createRequiresTranspilation_());
  if (a in goog.requiresTranspilation_) {
    return goog.requiresTranspilation_[a];
  }
  throw Error("Unknown language mode: " + a);
}, goog.requiresTranspilation_ = null, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(a, b) {
  "complete" == a.readyState && goog.lastNonModuleScriptIndex_ == b && goog.loadQueuedModules_();
  return !0;
}, goog.writeScripts_ = function(a) {
  function b(a) {
    if (!(a in e.written || a in e.visited)) {
      e.visited[a] = !0;
      if (a in e.requires) {
        for (var f in e.requires[a]) {
          if (!goog.isProvided_(f)) {
            if (f in e.nameToPath) {
              b(e.nameToPath[f]);
            } else {
              throw Error("Undefined nameToPath for " + f);
            }
          }
        }
      }
      a in d || (d[a] = !0, c.push(a));
    }
  }
  var c = [], d = {}, e = goog.dependencies_;
  b(a);
  for (var f = 0; f < c.length; f++) {
    a = c[f], goog.dependencies_.written[a] = !0;
  }
  var g = goog.moduleLoaderState_;
  goog.moduleLoaderState_ = null;
  for (f = 0; f < c.length; f++) {
    if (a = c[f]) {
      var h = e.loadFlags[a] || {}, k = goog.needsTranspile_(h.lang || "es3");
      "goog" == h.module || k ? goog.importProcessedScript_(goog.basePath + a, "goog" == h.module, k) : goog.importScript_(goog.basePath + a);
    } else {
      throw goog.moduleLoaderState_ = g, Error("Undefined script input");
    }
  }
  goog.moduleLoaderState_ = g;
}, goog.getPathFromDeps_ = function(a) {
  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.hasBadLetScoping = null;
goog.useSafari10Workaround = function() {
  if (null == goog.hasBadLetScoping) {
    try {
      var a = !eval('"use strict";let x \x3d 1; function f() { return typeof x; };f() \x3d\x3d "number";');
    } catch (b) {
      a = !1;
    }
    goog.hasBadLetScoping = a;
  }
  return goog.hasBadLetScoping;
};
goog.workaroundSafari10EvalBug = function(a) {
  return "(function(){" + a + "\n;})();\n";
};
goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:void 0, declareLegacyNamespace:!1};
    if (goog.isFunction(a)) {
      var c = a.call(void 0, {});
    } else {
      if (goog.isString(a)) {
        goog.useSafari10Workaround() && (a = goog.workaroundSafari10EvalBug(a)), c = goog.loadModuleFromSource_.call(void 0, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var d = goog.moduleLoaderState_.moduleName;
    if (!goog.isString(d) || !d) {
      throw Error('Invalid module name "' + d + '"');
    }
    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c && null != c && Object.seal(c);
    goog.loadedModules_[d] = c;
  } finally {
    goog.moduleLoaderState_ = b;
  }
};
goog.loadModuleFromSource_ = function(a) {
  eval(a);
  return {};
};
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0; b < a.length;) {
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  }
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  try {
    var b = new goog.global.XMLHttpRequest;
    b.open("get", a, !1);
    b.send();
    return 0 == b.status || 200 == b.status ? b.responseText : null;
  } catch (c) {
    return null;
  }
};
goog.retrieveAndExec_ = function(a, b, c) {
  if (!COMPILED) {
    var d = a;
    a = goog.normalizePath_(a);
    var e = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, f = goog.loadFileSync_(a);
    if (null == f) {
      throw Error('Load of "' + a + '" failed');
    }
    c && (f = goog.transpile_.call(goog.global, f, a));
    f = b ? goog.wrapModule_(a, f) : f + ("\n//# sourceURL\x3d" + a);
    goog.IS_OLD_IE_ && goog.oldIeWaiting_ ? (goog.dependencies_.deferred[d] = f, goog.queuedModules_.push(d)) : e(a, f);
  }
};
goog.transpile_ = function(a, b) {
  var c = goog.global.$jscomp;
  c || (goog.global.$jscomp = c = {});
  var d = c.transpile;
  if (!d) {
    var e = goog.basePath + goog.TRANSPILER, f = goog.loadFileSync_(e);
    if (f) {
      eval(f + "\n//# sourceURL\x3d" + e);
      if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) {
        throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
      }
      goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
      c = goog.global.$jscomp;
      d = c.transpile;
    }
  }
  d || (d = c.transpile = function(a, b) {
    goog.logToConsole_(b + " requires transpilation but no transpiler was found.");
    return a;
  });
  return d(a, b);
};
goog.typeOf = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
goog.isNull = function(a) {
  return null === a;
};
goog.isDefAndNotNull = function(a) {
  return null != a;
};
goog.isArray = function(a) {
  return "array" == goog.typeOf(a);
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isFunction = function(a) {
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    b = "array" == b ? [] : {};
    for (var c in a) {
      b[c] = goog.cloneObject(a[c]);
    }
    return b;
  }
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function(a) {
  if (goog.global.execScript) {
    goog.global.execScript(a, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_) {
        if (goog.global.eval("var _evalTest_ \x3d 1;"), "undefined" != typeof goog.global._evalTest_) {
          try {
            delete goog.global._evalTest_;
          } catch (d) {
          }
          goog.evalWorksForGlobals_ = !0;
        } else {
          goog.evalWorksForGlobals_ = !1;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval(a);
      } else {
        var b = goog.global.document, c = b.createElement("SCRIPT");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
  if ("." == String(a).charAt(0)) {
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  }
  var c = function(a) {
    return goog.cssNameMapping_[a] || a;
  }, d = function(a) {
    a = a.split("-");
    for (var b = [], d = 0; d < a.length; d++) {
      b.push(c(a[d]));
    }
    return b.join("-");
  };
  d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {
    return a;
  };
  d = b ? a + "-" + d(b) : d(a);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(d) : d;
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b) {
  b && (a = a.replace(/\{\$([^}]+)}/g, function(a, d) {
    return null != b && d in b ? b[d] : a;
  }));
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function(a, c, f) {
    for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
      d[e - 2] = arguments[e];
    }
    return b.prototype[c].apply(a, d);
  };
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (d.superClass_) {
    for (var e = Array(arguments.length - 1), f = 1; f < arguments.length; f++) {
      e[f - 1] = arguments[f];
    }
    return d.superClass_.constructor.apply(a, e);
  }
  e = Array(arguments.length - 2);
  for (f = 2; f < arguments.length; f++) {
    e[f - 2] = arguments[f];
  }
  f = !1;
  for (var g = a.constructor; g; g = g.superClass_ && g.superClass_.constructor) {
    if (g.prototype[b] === d) {
      f = !0;
    } else {
      if (f) {
        return g.prototype[b].apply(a, e);
      }
    }
  }
  if (a[b] === d) {
    return a.constructor.prototype[b].apply(a, e);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.scope is not supported within a goog.module.");
  }
  a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  var c = b.constructor, d = b.statics;
  c && c != Object.prototype.constructor || (c = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {
    return a;
  }
  var c = !goog.defineClass.isUnsealable_(b), d = function() {
    var b = a.apply(this, arguments) || this;
    b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];
    this.constructor === d && c && Object.seal instanceof Function && Object.seal(b);
    return b;
  };
  return d;
};
goog.defineClass.isUnsealable_ = function(a) {
  return a && a.prototype && a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
  for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) {
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
};
goog.tagUnsealableClass = function(a) {
  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
goog.createRequiresTranspilation_ = function() {
  function a(a, b) {
    d ? c[a] = !0 : b() ? c[a] = !1 : d = c[a] = !0;
  }
  function b(a) {
    try {
      return !!eval(a);
    } catch (g) {
      return !1;
    }
  }
  var c = {es3:!1}, d = !1, e = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
  a("es5", function() {
    return b("[1,].length\x3d\x3d1");
  });
  a("es6", function() {
    var a = e.match(/Edge\/(\d+)(\.\d)*/i);
    return a && 15 > Number(a[1]) ? !1 : b('(()\x3d\x3e{"use strict";class X{constructor(){if(new.target!\x3dString)throw 1;this.x\x3d42}}let q\x3dReflect.construct(X,[],String);if(q.x!\x3d42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a\x3d\x3d2)continue;function f(z\x3d{a}){let a\x3d0;return z.a}{function f(){return 0;}}return f()\x3d\x3d3}})()');
  });
  a("es6-impl", function() {
    return !0;
  });
  a("es7", function() {
    return b("2 ** 2 \x3d\x3d 4");
  });
  a("es8", function() {
    return b("async () \x3d\x3e 1, true");
  });
  return c;
};
goog.string = {};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = {NBSP:" "};
goog.string.startsWith = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
goog.string.endsWith = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
goog.string.caseInsensitiveStartsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length));
};
goog.string.caseInsensitiveEndsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length));
};
goog.string.caseInsensitiveEquals = function(a, b) {
  return a.toLowerCase() == b.toLowerCase();
};
goog.string.subs = function(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
};
goog.string.collapseWhitespace = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
goog.string.isEmptyString = function(a) {
  return 0 == a.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function(a) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
goog.string.isAlpha = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
goog.string.isNumeric = function(a) {
  return !/[^0-9]/.test(a);
};
goog.string.isAlphaNumeric = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
goog.string.isSpace = function(a) {
  return " " == a;
};
goog.string.isUnicodeChar = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "" <= a && "�" >= a;
};
goog.string.stripNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
goog.string.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = function(a, b) {
  var c = String(a).toLowerCase(), d = String(b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1;
};
goog.string.numberAwareCompare_ = function(a, b, c) {
  if (a == b) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!b) {
    return 1;
  }
  for (var d = a.toLowerCase().match(c), e = b.toLowerCase().match(c), f = Math.min(d.length, e.length), g = 0; g < f; g++) {
    c = d[g];
    var h = e[g];
    if (c != h) {
      return a = parseInt(c, 10), !isNaN(a) && (b = parseInt(h, 10), !isNaN(b) && a - b) ? a - b : c < h ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < b ? -1 : 1;
};
goog.string.intAwareCompare = function(a, b) {
  return goog.string.numberAwareCompare_(a, b, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function(a, b) {
  return goog.string.numberAwareCompare_(a, b, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function(a) {
  return encodeURIComponent(String(a));
};
goog.string.urlDecode = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
goog.string.newLineToBr = function(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "\x3cbr /\x3e" : "\x3cbr\x3e");
};
goog.string.htmlEscape = function(a, b) {
  if (b) {
    a = a.replace(goog.string.AMP_RE_, "\x26amp;").replace(goog.string.LT_RE_, "\x26lt;").replace(goog.string.GT_RE_, "\x26gt;").replace(goog.string.QUOT_RE_, "\x26quot;").replace(goog.string.SINGLE_QUOTE_RE_, "\x26#39;").replace(goog.string.NULL_RE_, "\x26#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "\x26#101;"));
  } else {
    if (!goog.string.ALL_RE_.test(a)) {
      return a;
    }
    -1 != a.indexOf("\x26") && (a = a.replace(goog.string.AMP_RE_, "\x26amp;"));
    -1 != a.indexOf("\x3c") && (a = a.replace(goog.string.LT_RE_, "\x26lt;"));
    -1 != a.indexOf("\x3e") && (a = a.replace(goog.string.GT_RE_, "\x26gt;"));
    -1 != a.indexOf('"') && (a = a.replace(goog.string.QUOT_RE_, "\x26quot;"));
    -1 != a.indexOf("'") && (a = a.replace(goog.string.SINGLE_QUOTE_RE_, "\x26#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(goog.string.NULL_RE_, "\x26#0;"));
    goog.string.DETECT_DOUBLE_ESCAPING && -1 != a.indexOf("e") && (a = a.replace(goog.string.E_RE_, "\x26#101;"));
  }
  return a;
};
goog.string.AMP_RE_ = /&/g;
goog.string.LT_RE_ = /</g;
goog.string.GT_RE_ = />/g;
goog.string.QUOT_RE_ = /"/g;
goog.string.SINGLE_QUOTE_RE_ = /'/g;
goog.string.NULL_RE_ = /\x00/g;
goog.string.E_RE_ = /e/g;
goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
goog.string.unescapeEntities = function(a) {
  return goog.string.contains(a, "\x26") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a;
};
goog.string.unescapeEntitiesWithDocument = function(a, b) {
  return goog.string.contains(a, "\x26") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a;
};
goog.string.unescapeEntitiesUsingDom_ = function(a, b) {
  var c = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'};
  var d = b ? b.createElement("div") : goog.global.document.createElement("div");
  return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a, b) {
    var e = c[a];
    if (e) {
      return e;
    }
    if ("#" == b.charAt(0)) {
      var f = Number("0" + b.substr(1));
      isNaN(f) || (e = String.fromCharCode(f));
    }
    e || (d.innerHTML = a + " ", e = d.firstChild.nodeValue.slice(0, -1));
    return c[a] = e;
  });
};
goog.string.unescapePureXmlEntities_ = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "\x26";
      case "lt":
        return "\x3c";
      case "gt":
        return "\x3e";
      case "quot":
        return '"';
      default:
        if ("#" == c.charAt(0)) {
          var b = Number("0" + c.substr(1));
          if (!isNaN(b)) {
            return String.fromCharCode(b);
          }
        }
        return a;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " \x26#160;"), b);
};
goog.string.preserveSpaces = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(a, b) {
  for (var c = b.length, d = 0; d < c; d++) {
    var e = 1 == c ? b : b.charAt(d);
    if (a.charAt(0) == e && a.charAt(a.length - 1) == e) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
goog.string.truncate = function(a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.truncateMiddle = function(a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if (d && a.length > b) {
    d > b && (d = b);
    var e = a.length - d;
    a = a.substring(0, b - d) + "..." + a.substring(e);
  } else {
    a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e));
  }
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "\x3c":"\x3c"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(a) {
  a = String(a);
  for (var b = ['"'], c = 0; c < a.length; c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
  }
  b.push('"');
  return b.join("");
};
goog.string.escapeString = function(a) {
  for (var b = [], c = 0; c < a.length; c++) {
    b[c] = goog.string.escapeChar(a.charAt(c));
  }
  return b.join("");
};
goog.string.escapeChar = function(a) {
  if (a in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[a];
  }
  if (a in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
  }
  var b = a.charCodeAt(0);
  if (31 < b && 127 > b) {
    var c = a;
  } else {
    if (256 > b) {
      if (c = "\\x", 16 > b || 256 < b) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > b && (c += "0");
    }
    c += b.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[a] = c;
};
goog.string.contains = function(a, b) {
  return -1 != a.indexOf(b);
};
goog.string.caseInsensitiveContains = function(a, b) {
  return goog.string.contains(a.toLowerCase(), b.toLowerCase());
};
goog.string.countOf = function(a, b) {
  return a && b ? a.split(b).length - 1 : 0;
};
goog.string.removeAt = function(a, b, c) {
  var d = a;
  0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
  return d;
};
goog.string.remove = function(a, b) {
  return a.replace(b, "");
};
goog.string.removeAll = function(a, b) {
  var c = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(c, "");
};
goog.string.replaceAll = function(a, b, c) {
  b = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(b, c.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function(a, b) {
  return a.repeat(b);
} : function(a, b) {
  return Array(b + 1).join(a);
};
goog.string.padNumber = function(a, b, c) {
  a = goog.isDef(c) ? a.toFixed(c) : String(a);
  c = a.indexOf(".");
  -1 == c && (c = a.length);
  return goog.string.repeat("0", Math.max(0, b - c)) + a;
};
goog.string.makeSafe = function(a) {
  return null == a ? "" : String(a);
};
goog.string.buildString = function(a) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = function(a, b) {
  for (var c = 0, d = goog.string.trim(String(a)).split("."), e = goog.string.trim(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
    var h = d[g] || "", k = e[g] || "";
    do {
      h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
      k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
      if (0 == h[0].length && 0 == k[0].length) {
        break;
      }
      c = 0 == h[1].length ? 0 : parseInt(h[1], 10);
      var l = 0 == k[1].length ? 0 : parseInt(k[1], 10);
      c = goog.string.compareElements_(c, l) || goog.string.compareElements_(0 == h[2].length, 0 == k[2].length) || goog.string.compareElements_(h[2], k[2]);
      h = h[3];
      k = k[3];
    } while (0 == c);
  }
  return c;
};
goog.string.compareElements_ = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
goog.string.hashCode = function(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    b = 31 * b + a.charCodeAt(c) >>> 0;
  }
  return b;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmptyOrWhitespace(a) ? NaN : b;
};
goog.string.isLowerCamelCase = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
goog.string.isUpperCamelCase = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
goog.string.toCamelCase = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
};
goog.string.toSelectorCase = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(a, b) {
  var c = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
  return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
    return b + c.toUpperCase();
  });
};
goog.string.capitalize = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
goog.string.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
goog.string.splitLimit = function(a, b, c) {
  a = a.split(b);
  for (var d = []; 0 < c && a.length;) {
    d.push(a.shift()), c--;
  }
  a.length && d.push(a.join(b));
  return d;
};
goog.string.lastComponent = function(a, b) {
  if (b) {
    "string" == typeof b && (b = [b]);
  } else {
    return a;
  }
  for (var c = -1, d = 0; d < b.length; d++) {
    if ("" != b[d]) {
      var e = a.lastIndexOf(b[d]);
      e > c && (c = e);
    }
  }
  return -1 == c ? a : a.slice(c + 1);
};
goog.string.editDistance = function(a, b) {
  var c = [], d = [];
  if (a == b) {
    return 0;
  }
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  for (var e = 0; e < b.length + 1; e++) {
    c[e] = e;
  }
  for (e = 0; e < a.length; e++) {
    d[0] = e + 1;
    for (var f = 0; f < b.length; f++) {
      d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + Number(a[e] != b[f]));
    }
    for (f = 0; f < c.length; f++) {
      c[f] = d[f];
    }
  }
  return d[b.length];
};
goog.object = {};
goog.object.is = function(a, b) {
  return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
};
goog.object.forEach = function(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
};
goog.object.filter = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e]);
  }
  return d;
};
goog.object.map = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    d[e] = b.call(c, a[e], e, a);
  }
  return d;
};
goog.object.some = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return !0;
    }
  }
  return !1;
};
goog.object.every = function(a, b, c) {
  for (var d in a) {
    if (!b.call(c, a[d], d, a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.getCount = function(a) {
  var b = 0, c;
  for (c in a) {
    b++;
  }
  return b;
};
goog.object.getAnyKey = function(a) {
  for (var b in a) {
    return b;
  }
};
goog.object.getAnyValue = function(a) {
  for (var b in a) {
    return a[b];
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b);
};
goog.object.getValues = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
};
goog.object.getKeys = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
goog.object.getValueByKeys = function(a, b) {
  var c = goog.isArrayLike(b), d = c ? b : arguments;
  for (c = c ? 0 : 1; c < d.length && (a = a[d[c]], goog.isDef(a)); c++) {
  }
  return a;
};
goog.object.containsKey = function(a, b) {
  return null !== a && b in a;
};
goog.object.containsValue = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return !0;
    }
  }
  return !1;
};
goog.object.findKey = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return d;
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return (b = goog.object.findKey(a, b, c)) && a[b];
};
goog.object.isEmpty = function(a) {
  for (var b in a) {
    return !1;
  }
  return !0;
};
goog.object.clear = function(a) {
  for (var b in a) {
    delete a[b];
  }
};
goog.object.remove = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c;
};
goog.object.add = function(a, b, c) {
  if (null !== a && b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c);
};
goog.object.get = function(a, b, c) {
  return null !== a && b in a ? a[b] : c;
};
goog.object.set = function(a, b, c) {
  a[b] = c;
};
goog.object.setIfUndefined = function(a, b, c) {
  return b in a ? a[b] : a[b] = c;
};
goog.object.setWithReturnValueIfNotSet = function(a, b, c) {
  if (b in a) {
    return a[b];
  }
  c = c();
  return a[b] = c;
};
goog.object.equals = function(a, b) {
  for (var c in a) {
    if (!(c in b) || a[c] !== b[c]) {
      return !1;
    }
  }
  for (c in b) {
    if (!(c in a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.clone = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
};
goog.object.unsafeClone = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (goog.isFunction(a.clone)) {
      return a.clone();
    }
    b = "array" == b ? [] : {};
    for (var c in a) {
      b[c] = goog.object.unsafeClone(a[c]);
    }
    return b;
  }
  return a;
};
goog.object.transpose = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0; f < goog.object.PROTOTYPE_FIELDS_.length; f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
goog.object.create = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0; d < b; d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
goog.object.createSet = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0; d < b; d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
goog.object.createImmutableView = function(a) {
  var b = a;
  Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
  return b;
};
goog.object.isImmutableView = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
goog.object.getAllPropertyNames = function(a, b, c) {
  if (!a) {
    return [];
  }
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
    return goog.object.getKeys(a);
  }
  for (var d = {}; a && (a !== Object.prototype || b) && (a !== Function.prototype || c);) {
    for (var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++) {
      d[e[f]] = !0;
    }
    a = Object.getPrototypeOf(a);
  }
  return goog.object.getKeys(d);
};
goog.math = {};
goog.math.Integer = function(a, b) {
  this.bits_ = [];
  this.sign_ = b;
  for (var c = !0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d] | 0;
    c && e == b || (this.bits_[d] = e, c = !1);
  }
};
goog.math.Integer.IntCache_ = {};
goog.math.Integer.fromInt = function(a) {
  if (-128 <= a && 128 > a) {
    var b = goog.math.Integer.IntCache_[a];
    if (b) {
      return b;
    }
  }
  b = new goog.math.Integer([a | 0], 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (goog.math.Integer.IntCache_[a] = b);
  return b;
};
goog.math.Integer.fromNumber = function(a) {
  if (isNaN(a) || !isFinite(a)) {
    return goog.math.Integer.ZERO;
  }
  if (0 > a) {
    return goog.math.Integer.fromNumber(-a).negate();
  }
  for (var b = [], c = 1, d = 0; a >= c; d++) {
    b[d] = a / c | 0, c *= goog.math.Integer.TWO_PWR_32_DBL_;
  }
  return new goog.math.Integer(b, 0);
};
goog.math.Integer.fromBits = function(a) {
  return new goog.math.Integer(a, a[a.length - 1] & -2147483648 ? -1 : 0);
};
goog.math.Integer.fromString = function(a, b) {
  if (0 == a.length) {
    throw Error("number format error: empty string");
  }
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  if ("-" == a.charAt(0)) {
    return goog.math.Integer.fromString(a.substring(1), c).negate();
  }
  if (0 <= a.indexOf("-")) {
    throw Error('number format error: interior "-" character');
  }
  for (var d = goog.math.Integer.fromNumber(Math.pow(c, 8)), e = goog.math.Integer.ZERO, f = 0; f < a.length; f += 8) {
    var g = Math.min(8, a.length - f), h = parseInt(a.substring(f, f + g), c);
    8 > g ? (g = goog.math.Integer.fromNumber(Math.pow(c, g)), e = e.multiply(g).add(goog.math.Integer.fromNumber(h))) : (e = e.multiply(d), e = e.add(goog.math.Integer.fromNumber(h)));
  }
  return e;
};
goog.math.Integer.TWO_PWR_32_DBL_ = 4294967296;
goog.math.Integer.ZERO = goog.math.Integer.fromInt(0);
goog.math.Integer.ONE = goog.math.Integer.fromInt(1);
goog.math.Integer.TWO_PWR_24_ = goog.math.Integer.fromInt(16777216);
goog.math.Integer.prototype.toInt = function() {
  return 0 < this.bits_.length ? this.bits_[0] : this.sign_;
};
goog.math.Integer.prototype.toNumber = function() {
  if (this.isNegative()) {
    return -this.negate().toNumber();
  }
  for (var a = 0, b = 1, c = 0; c < this.bits_.length; c++) {
    a += this.getBitsUnsigned(c) * b, b *= goog.math.Integer.TWO_PWR_32_DBL_;
  }
  return a;
};
goog.math.Integer.prototype.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (this.isZero()) {
    return "0";
  }
  if (this.isNegative()) {
    return "-" + this.negate().toString(a);
  }
  for (var b = goog.math.Integer.fromNumber(Math.pow(a, 6)), c = this, d = "";;) {
    var e = c.divide(b), f = (c.subtract(e.multiply(b)).toInt() >>> 0).toString(a);
    c = e;
    if (c.isZero()) {
      return f + d;
    }
    for (; 6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
goog.math.Integer.prototype.getBits = function(a) {
  return 0 > a ? 0 : a < this.bits_.length ? this.bits_[a] : this.sign_;
};
goog.math.Integer.prototype.getBitsUnsigned = function(a) {
  a = this.getBits(a);
  return 0 <= a ? a : goog.math.Integer.TWO_PWR_32_DBL_ + a;
};
goog.math.Integer.prototype.getSign = function() {
  return this.sign_;
};
goog.math.Integer.prototype.isZero = function() {
  if (0 != this.sign_) {
    return !1;
  }
  for (var a = 0; a < this.bits_.length; a++) {
    if (0 != this.bits_[a]) {
      return !1;
    }
  }
  return !0;
};
goog.math.Integer.prototype.isNegative = function() {
  return -1 == this.sign_;
};
goog.math.Integer.prototype.isOdd = function() {
  return 0 == this.bits_.length && -1 == this.sign_ || 0 < this.bits_.length && 0 != (this.bits_[0] & 1);
};
goog.math.Integer.prototype.equals = function(a) {
  if (this.sign_ != a.sign_) {
    return !1;
  }
  for (var b = Math.max(this.bits_.length, a.bits_.length), c = 0; c < b; c++) {
    if (this.getBits(c) != a.getBits(c)) {
      return !1;
    }
  }
  return !0;
};
goog.math.Integer.prototype.notEquals = function(a) {
  return !this.equals(a);
};
goog.math.Integer.prototype.greaterThan = function(a) {
  return 0 < this.compare(a);
};
goog.math.Integer.prototype.greaterThanOrEqual = function(a) {
  return 0 <= this.compare(a);
};
goog.math.Integer.prototype.lessThan = function(a) {
  return 0 > this.compare(a);
};
goog.math.Integer.prototype.lessThanOrEqual = function(a) {
  return 0 >= this.compare(a);
};
goog.math.Integer.prototype.compare = function(a) {
  a = this.subtract(a);
  return a.isNegative() ? -1 : a.isZero() ? 0 : 1;
};
goog.math.Integer.prototype.shorten = function(a) {
  var b = a - 1 >> 5;
  a = (a - 1) % 32;
  for (var c = [], d = 0; d < b; d++) {
    c[d] = this.getBits(d);
  }
  d = 31 == a ? 4294967295 : (1 << a + 1) - 1;
  var e = this.getBits(b) & d;
  if (e & 1 << a) {
    return c[b] = e | 4294967295 - d, new goog.math.Integer(c, -1);
  }
  c[b] = e;
  return new goog.math.Integer(c, 0);
};
goog.math.Integer.prototype.negate = function() {
  return this.not().add(goog.math.Integer.ONE);
};
goog.math.Integer.prototype.add = function(a) {
  for (var b = Math.max(this.bits_.length, a.bits_.length), c = [], d = 0, e = 0; e <= b; e++) {
    var f = this.getBits(e) >>> 16, g = this.getBits(e) & 65535, h = a.getBits(e) >>> 16, k = a.getBits(e) & 65535;
    g = d + g + k;
    f = (g >>> 16) + f + h;
    d = f >>> 16;
    g &= 65535;
    f &= 65535;
    c[e] = f << 16 | g;
  }
  return goog.math.Integer.fromBits(c);
};
goog.math.Integer.prototype.subtract = function(a) {
  return this.add(a.negate());
};
goog.math.Integer.prototype.multiply = function(a) {
  if (this.isZero() || a.isZero()) {
    return goog.math.Integer.ZERO;
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().multiply(a.negate()) : this.negate().multiply(a).negate();
  }
  if (a.isNegative()) {
    return this.multiply(a.negate()).negate();
  }
  if (this.lessThan(goog.math.Integer.TWO_PWR_24_) && a.lessThan(goog.math.Integer.TWO_PWR_24_)) {
    return goog.math.Integer.fromNumber(this.toNumber() * a.toNumber());
  }
  for (var b = this.bits_.length + a.bits_.length, c = [], d = 0; d < 2 * b; d++) {
    c[d] = 0;
  }
  for (d = 0; d < this.bits_.length; d++) {
    for (var e = 0; e < a.bits_.length; e++) {
      var f = this.getBits(d) >>> 16, g = this.getBits(d) & 65535, h = a.getBits(e) >>> 16, k = a.getBits(e) & 65535;
      c[2 * d + 2 * e] += g * k;
      goog.math.Integer.carry16_(c, 2 * d + 2 * e);
      c[2 * d + 2 * e + 1] += f * k;
      goog.math.Integer.carry16_(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 1] += g * h;
      goog.math.Integer.carry16_(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 2] += f * h;
      goog.math.Integer.carry16_(c, 2 * d + 2 * e + 2);
    }
  }
  for (d = 0; d < b; d++) {
    c[d] = c[2 * d + 1] << 16 | c[2 * d];
  }
  for (d = b; d < 2 * b; d++) {
    c[d] = 0;
  }
  return new goog.math.Integer(c, 0);
};
goog.math.Integer.carry16_ = function(a, b) {
  for (; (a[b] & 65535) != a[b];) {
    a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++;
  }
};
goog.math.Integer.prototype.slowDivide_ = function(a) {
  if (this.isNegative() || a.isNegative()) {
    throw Error("slowDivide_ only works with positive integers.");
  }
  for (var b = goog.math.Integer.ONE; a.lessThanOrEqual(this);) {
    b = b.shiftLeft(1), a = a.shiftLeft(1);
  }
  var c = b.shiftRight(1), d = a.shiftRight(1);
  a = a.shiftRight(2);
  for (b = b.shiftRight(2); !a.isZero();) {
    var e = d.add(a);
    e.lessThanOrEqual(this) && (c = c.add(b), d = e);
    a = a.shiftRight(1);
    b = b.shiftRight(1);
  }
  return c;
};
goog.math.Integer.prototype.divide = function(a) {
  if (a.isZero()) {
    throw Error("division by zero");
  }
  if (this.isZero()) {
    return goog.math.Integer.ZERO;
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().divide(a.negate()) : this.negate().divide(a).negate();
  }
  if (a.isNegative()) {
    return this.divide(a.negate()).negate();
  }
  if (30 < this.bits_.length) {
    return this.slowDivide_(a);
  }
  for (var b = goog.math.Integer.ZERO, c = this; c.greaterThanOrEqual(a);) {
    var d = Math.max(1, Math.floor(c.toNumber() / a.toNumber())), e = Math.ceil(Math.log(d) / Math.LN2);
    e = 48 >= e ? 1 : Math.pow(2, e - 48);
    for (var f = goog.math.Integer.fromNumber(d), g = f.multiply(a); g.isNegative() || g.greaterThan(c);) {
      d -= e, f = goog.math.Integer.fromNumber(d), g = f.multiply(a);
    }
    f.isZero() && (f = goog.math.Integer.ONE);
    b = b.add(f);
    c = c.subtract(g);
  }
  return b;
};
goog.math.Integer.prototype.modulo = function(a) {
  return this.subtract(this.divide(a).multiply(a));
};
goog.math.Integer.prototype.not = function() {
  for (var a = this.bits_.length, b = [], c = 0; c < a; c++) {
    b[c] = ~this.bits_[c];
  }
  return new goog.math.Integer(b, ~this.sign_);
};
goog.math.Integer.prototype.and = function(a) {
  for (var b = Math.max(this.bits_.length, a.bits_.length), c = [], d = 0; d < b; d++) {
    c[d] = this.getBits(d) & a.getBits(d);
  }
  return new goog.math.Integer(c, this.sign_ & a.sign_);
};
goog.math.Integer.prototype.or = function(a) {
  for (var b = Math.max(this.bits_.length, a.bits_.length), c = [], d = 0; d < b; d++) {
    c[d] = this.getBits(d) | a.getBits(d);
  }
  return new goog.math.Integer(c, this.sign_ | a.sign_);
};
goog.math.Integer.prototype.xor = function(a) {
  for (var b = Math.max(this.bits_.length, a.bits_.length), c = [], d = 0; d < b; d++) {
    c[d] = this.getBits(d) ^ a.getBits(d);
  }
  return new goog.math.Integer(c, this.sign_ ^ a.sign_);
};
goog.math.Integer.prototype.shiftLeft = function(a) {
  var b = a >> 5;
  a %= 32;
  for (var c = this.bits_.length + b + (0 < a ? 1 : 0), d = [], e = 0; e < c; e++) {
    d[e] = 0 < a ? this.getBits(e - b) << a | this.getBits(e - b - 1) >>> 32 - a : this.getBits(e - b);
  }
  return new goog.math.Integer(d, this.sign_);
};
goog.math.Integer.prototype.shiftRight = function(a) {
  var b = a >> 5;
  a %= 32;
  for (var c = this.bits_.length - b, d = [], e = 0; e < c; e++) {
    d[e] = 0 < a ? this.getBits(e + b) >>> a | this.getBits(e + b + 1) << 32 - a : this.getBits(e + b);
  }
  return new goog.math.Integer(d, this.sign_);
};
goog.string.StringBuffer = function(a, b) {
  null != a && this.append.apply(this, arguments);
};
goog.string.StringBuffer.prototype.buffer_ = "";
goog.string.StringBuffer.prototype.set = function(a) {
  this.buffer_ = "" + a;
};
goog.string.StringBuffer.prototype.append = function(a, b, c) {
  this.buffer_ += String(a);
  if (null != b) {
    for (var d = 1; d < arguments.length; d++) {
      this.buffer_ += arguments[d];
    }
  }
  return this;
};
goog.string.StringBuffer.prototype.clear = function() {
  this.buffer_ = "";
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.buffer_.length;
};
goog.string.StringBuffer.prototype.toString = function() {
  return this.buffer_;
};
goog.debug = {};
goog.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
  this.reportErrorToServer = !0;
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  b.unshift(a);
  goog.debug.Error.call(this, goog.string.subs.apply(null, b));
  b.shift();
  this.messagePattern = a;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
  throw a;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else {
    a && (e += ": " + a, f = b);
  }
  a = new goog.asserts.AssertionError("" + e, f || []);
  goog.asserts.errorHandler_(a);
};
goog.asserts.setErrorHandler = function(a) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.fail = function(a, b) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertElement = function(a, b, c) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
};
goog.asserts.assertObjectPrototypeIsIntact = function() {
  for (var a in Object.prototype) {
    goog.asserts.fail(a + " should not be enumerable in Object.prototype.");
  }
};
goog.asserts.getType_ = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
goog.array.ASSUME_NATIVE_FUNCTIONS = !1;
goog.array.peek = function(a) {
  return a[a.length - 1];
};
goog.array.last = goog.array.peek;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (goog.isString(a)) {
    return goog.isString(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (; c < a.length; c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c);
} : function(a, b, c) {
  c = null == c ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if (goog.isString(a)) {
    return goog.isString(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
  }
  for (; 0 <= c; c--) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
goog.array.forEachRight = function(a, b, c) {
  var d = a.length, e = goog.isString(a) ? a.split("") : a;
  for (--d; 0 <= d; --d) {
    d in e && b.call(c, e[d], d, a);
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0; h < d; h++) {
    if (h in g) {
      var k = g[h];
      b.call(c, k, h, a) && (e[f++] = k);
    }
  }
  return e;
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0; g < d; g++) {
    g in f && (e[g] = b.call(c, f[g], g, a));
  }
  return e;
};
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  d && (b = goog.bind(b, d));
  return Array.prototype.reduce.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  goog.array.forEach(a, function(c, g) {
    e = b.call(d, e, c, g, a);
  });
  return e;
};
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  goog.asserts.assert(null != b);
  d && (b = goog.bind(b, d));
  return Array.prototype.reduceRight.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  goog.array.forEachRight(a, function(c, g) {
    e = b.call(d, e, c, g, a);
  });
  return e;
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return !0;
    }
  }
  return !1;
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return !1;
    }
  }
  return !0;
};
goog.array.count = function(a, b, c) {
  var d = 0;
  goog.array.forEach(a, function(a, f, g) {
    b.call(c, a, f, g) && ++d;
  }, c);
  return d;
};
goog.array.find = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndex = function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return f;
    }
  }
  return -1;
};
goog.array.findRight = function(a, b, c) {
  b = goog.array.findIndexRight(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndexRight = function(a, b, c) {
  var d = a.length, e = goog.isString(a) ? a.split("") : a;
  for (--d; 0 <= d; d--) {
    if (d in e && b.call(c, e[d], d, a)) {
      return d;
    }
  }
  return -1;
};
goog.array.contains = function(a, b) {
  return 0 <= goog.array.indexOf(a, b);
};
goog.array.isEmpty = function(a) {
  return 0 == a.length;
};
goog.array.clear = function(a) {
  if (!goog.isArray(a)) {
    for (var b = a.length - 1; 0 <= b; b--) {
      delete a[b];
    }
  }
  a.length = 0;
};
goog.array.insert = function(a, b) {
  goog.array.contains(a, b) || a.push(b);
};
goog.array.insertAt = function(a, b, c) {
  goog.array.splice(a, c, 0, b);
};
goog.array.insertArrayAt = function(a, b, c) {
  goog.partial(goog.array.splice, a, c, 0).apply(null, b);
};
goog.array.insertBefore = function(a, b, c) {
  var d;
  2 == arguments.length || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d);
};
goog.array.remove = function(a, b) {
  var c = goog.array.indexOf(a, b), d;
  (d = 0 <= c) && goog.array.removeAt(a, c);
  return d;
};
goog.array.removeLast = function(a, b) {
  var c = goog.array.lastIndexOf(a, b);
  return 0 <= c ? (goog.array.removeAt(a, c), !0) : !1;
};
goog.array.removeAt = function(a, b) {
  goog.asserts.assert(null != a.length);
  return 1 == Array.prototype.splice.call(a, b, 1).length;
};
goog.array.removeIf = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 <= b ? (goog.array.removeAt(a, b), !0) : !1;
};
goog.array.removeAllIf = function(a, b, c) {
  var d = 0;
  goog.array.forEachRight(a, function(e, f) {
    b.call(c, e, f, a) && goog.array.removeAt(a, f) && d++;
  });
  return d;
};
goog.array.concat = function(a) {
  return Array.prototype.concat.apply([], arguments);
};
goog.array.join = function(a) {
  return Array.prototype.concat.apply([], arguments);
};
goog.array.toArray = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (goog.isArrayLike(d)) {
      var e = a.length || 0, f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) {
        a[e + g] = d[g];
      }
    } else {
      a.push(d);
    }
  }
};
goog.array.splice = function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.splice.apply(a, goog.array.slice(arguments, 1));
};
goog.array.slice = function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
};
goog.array.removeDuplicates = function(a, b, c) {
  b = b || a;
  var d = function(a) {
    return goog.isObject(a) ? "o" + goog.getUid(a) : (typeof a).charAt(0) + a;
  };
  c = c || d;
  d = {};
  for (var e = 0, f = 0; f < a.length;) {
    var g = a[f++], h = c(g);
    Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, b[e++] = g);
  }
  b.length = e;
};
goog.array.binarySearch = function(a, b, c) {
  return goog.array.binarySearch_(a, c || goog.array.defaultCompare, !1, b);
};
goog.array.binarySelect = function(a, b, c) {
  return goog.array.binarySearch_(a, b, !0, void 0, c);
};
goog.array.binarySearch_ = function(a, b, c, d, e) {
  for (var f = 0, g = a.length, h; f < g;) {
    var k = f + g >> 1;
    var l = c ? b.call(e, a[k], k, a) : b(d, a[k]);
    0 < l ? f = k + 1 : (g = k, h = !l);
  }
  return h ? f : ~f;
};
goog.array.sort = function(a, b) {
  a.sort(b || goog.array.defaultCompare);
};
goog.array.stableSort = function(a, b) {
  for (var c = Array(a.length), d = 0; d < a.length; d++) {
    c[d] = {index:d, value:a[d]};
  }
  var e = b || goog.array.defaultCompare;
  goog.array.sort(c, function(a, b) {
    return e(a.value, b.value) || a.index - b.index;
  });
  for (d = 0; d < a.length; d++) {
    a[d] = c[d].value;
  }
};
goog.array.sortByKey = function(a, b, c) {
  var d = c || goog.array.defaultCompare;
  goog.array.sort(a, function(a, c) {
    return d(b(a), b(c));
  });
};
goog.array.sortObjectsByKey = function(a, b, c) {
  goog.array.sortByKey(a, function(a) {
    return a[b];
  }, c);
};
goog.array.isSorted = function(a, b, c) {
  b = b || goog.array.defaultCompare;
  for (var d = 1; d < a.length; d++) {
    var e = b(a[d - 1], a[d]);
    if (0 < e || 0 == e && c) {
      return !1;
    }
  }
  return !0;
};
goog.array.equals = function(a, b, c) {
  if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) {
    return !1;
  }
  var d = a.length;
  c = c || goog.array.defaultCompareEquality;
  for (var e = 0; e < d; e++) {
    if (!c(a[e], b[e])) {
      return !1;
    }
  }
  return !0;
};
goog.array.compare3 = function(a, b, c) {
  c = c || goog.array.defaultCompare;
  for (var d = Math.min(a.length, b.length), e = 0; e < d; e++) {
    var f = c(a[e], b[e]);
    if (0 != f) {
      return f;
    }
  }
  return goog.array.defaultCompare(a.length, b.length);
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
goog.array.inverseDefaultCompare = function(a, b) {
  return -goog.array.defaultCompare(a, b);
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b;
};
goog.array.binaryInsert = function(a, b, c) {
  c = goog.array.binarySearch(a, b, c);
  return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), !0) : !1;
};
goog.array.binaryRemove = function(a, b, c) {
  b = goog.array.binarySearch(a, b, c);
  return 0 <= b ? goog.array.removeAt(a, b) : !1;
};
goog.array.bucket = function(a, b, c) {
  for (var d = {}, e = 0; e < a.length; e++) {
    var f = a[e], g = b.call(c, f, e, a);
    goog.isDef(g) && (d[g] || (d[g] = [])).push(f);
  }
  return d;
};
goog.array.toObject = function(a, b, c) {
  var d = {};
  goog.array.forEach(a, function(e, f) {
    d[b.call(c, e, f, a)] = e;
  });
  return d;
};
goog.array.range = function(a, b, c) {
  var d = [], e = 0, f = a;
  c = c || 1;
  void 0 !== b && (e = a, f = b);
  if (0 > c * (f - e)) {
    return [];
  }
  if (0 < c) {
    for (a = e; a < f; a += c) {
      d.push(a);
    }
  } else {
    for (a = e; a > f; a += c) {
      d.push(a);
    }
  }
  return d;
};
goog.array.repeat = function(a, b) {
  for (var c = [], d = 0; d < b; d++) {
    c[d] = a;
  }
  return c;
};
goog.array.flatten = function(a) {
  for (var b = [], c = 0; c < arguments.length; c++) {
    var d = arguments[c];
    if (goog.isArray(d)) {
      for (var e = 0; e < d.length; e += 8192) {
        var f = goog.array.slice(d, e, e + 8192);
        f = goog.array.flatten.apply(null, f);
        for (var g = 0; g < f.length; g++) {
          b.push(f[g]);
        }
      }
    } else {
      b.push(d);
    }
  }
  return b;
};
goog.array.rotate = function(a, b) {
  goog.asserts.assert(null != a.length);
  a.length && (b %= a.length, 0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b)));
  return a;
};
goog.array.moveItem = function(a, b, c) {
  goog.asserts.assert(0 <= b && b < a.length);
  goog.asserts.assert(0 <= c && c < a.length);
  b = Array.prototype.splice.call(a, b, 1);
  Array.prototype.splice.call(a, c, 0, b[0]);
};
goog.array.zip = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) {
    arguments[d].length < c && (c = arguments[d].length);
  }
  for (d = 0; d < c; d++) {
    for (var e = [], f = 0; f < arguments.length; f++) {
      e.push(arguments[f][d]);
    }
    b.push(e);
  }
  return b;
};
goog.array.shuffle = function(a, b) {
  for (var c = b || Math.random, d = a.length - 1; 0 < d; d--) {
    var e = Math.floor(c() * (d + 1)), f = a[d];
    a[d] = a[e];
    a[e] = f;
  }
};
goog.array.copyByIndex = function(a, b) {
  var c = [];
  goog.array.forEach(b, function(b) {
    c.push(a[b]);
  });
  return c;
};
goog.array.concatMap = function(a, b, c) {
  return goog.array.concat.apply([], goog.array.map(a, b, c));
};
goog.reflect = {};
goog.reflect.object = function(a, b) {
  return b;
};
goog.reflect.objectProperty = function(a, b) {
  return a;
};
goog.reflect.sinkValue = function(a) {
  goog.reflect.sinkValue[" "](a);
  return a;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function(a, b) {
  try {
    return goog.reflect.sinkValue(a[b]), !0;
  } catch (c) {
  }
  return !1;
};
goog.reflect.cache = function(a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
};
goog.math.Long = function(a, b) {
  this.low_ = a | 0;
  this.high_ = b | 0;
};
goog.math.Long.IntCache_ = {};
goog.math.Long.valueCache_ = {};
goog.math.Long.getCachedIntValue_ = function(a) {
  return goog.reflect.cache(goog.math.Long.IntCache_, a, function(a) {
    return new goog.math.Long(a, 0 > a ? -1 : 0);
  });
};
goog.math.Long.MAX_VALUE_FOR_RADIX_ = "  111111111111111111111111111111111111111111111111111111111111111 2021110011022210012102010021220101220221 13333333333333333333333333333333 1104332401304422434310311212 1540241003031030222122211 22341010611245052052300 777777777777777777777 67404283172107811827 9223372036854775807 1728002635214590697 41a792678515120367 10b269549075433c37 4340724c6c71dc7a7 160e2ad3246366807 7fffffffffffffff 33d3d8307b214008 16agh595df825fa7 ba643dci0ffeehh 5cbfjia3fh26ja7 2heiciiie82dh97 1adaibb21dckfa7 i6k448cf4192c2 acd772jnc9l0l7 64ie1focnn5g77 3igoecjbmca687 27c48l5b37oaop 1bk39f3ah3dmq7 q1se8f0m04isb hajppbc1fc207 bm03i95hia437 7vvvvvvvvvvvv 5hg4ck9jd4u37 3tdtk1v8j6tpp 2pijmikexrxp7 1y2p0ij32e8e7".split(" ");
goog.math.Long.MIN_VALUE_FOR_RADIX_ = "  -1000000000000000000000000000000000000000000000000000000000000000 -2021110011022210012102010021220101220222 -20000000000000000000000000000000 -1104332401304422434310311213 -1540241003031030222122212 -22341010611245052052301 -1000000000000000000000 -67404283172107811828 -9223372036854775808 -1728002635214590698 -41a792678515120368 -10b269549075433c38 -4340724c6c71dc7a8 -160e2ad3246366808 -8000000000000000 -33d3d8307b214009 -16agh595df825fa8 -ba643dci0ffeehi -5cbfjia3fh26ja8 -2heiciiie82dh98 -1adaibb21dckfa8 -i6k448cf4192c3 -acd772jnc9l0l8 -64ie1focnn5g78 -3igoecjbmca688 -27c48l5b37oaoq -1bk39f3ah3dmq8 -q1se8f0m04isc -hajppbc1fc208 -bm03i95hia438 -8000000000000 -5hg4ck9jd4u38 -3tdtk1v8j6tpq -2pijmikexrxp8 -1y2p0ij32e8e8".split(" ");
goog.math.Long.fromInt = function(a) {
  var b = a | 0;
  goog.asserts.assert(a === b, "value should be a 32-bit integer");
  return -128 <= b && 128 > b ? goog.math.Long.getCachedIntValue_(b) : new goog.math.Long(b, 0 > b ? -1 : 0);
};
goog.math.Long.fromNumber = function(a) {
  return isNaN(a) ? goog.math.Long.getZero() : a <= -goog.math.Long.TWO_PWR_63_DBL_ ? goog.math.Long.getMinValue() : a + 1 >= goog.math.Long.TWO_PWR_63_DBL_ ? goog.math.Long.getMaxValue() : 0 > a ? goog.math.Long.fromNumber(-a).negate() : new goog.math.Long(a % goog.math.Long.TWO_PWR_32_DBL_ | 0, a / goog.math.Long.TWO_PWR_32_DBL_ | 0);
};
goog.math.Long.fromBits = function(a, b) {
  return new goog.math.Long(a, b);
};
goog.math.Long.fromString = function(a, b) {
  if (0 == a.length) {
    throw Error("number format error: empty string");
  }
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  if ("-" == a.charAt(0)) {
    return goog.math.Long.fromString(a.substring(1), c).negate();
  }
  if (0 <= a.indexOf("-")) {
    throw Error('number format error: interior "-" character: ' + a);
  }
  for (var d = goog.math.Long.fromNumber(Math.pow(c, 8)), e = goog.math.Long.getZero(), f = 0; f < a.length; f += 8) {
    var g = Math.min(8, a.length - f), h = parseInt(a.substring(f, f + g), c);
    8 > g ? (g = goog.math.Long.fromNumber(Math.pow(c, g)), e = e.multiply(g).add(goog.math.Long.fromNumber(h))) : (e = e.multiply(d), e = e.add(goog.math.Long.fromNumber(h)));
  }
  return e;
};
goog.math.Long.isStringInRange = function(a, b) {
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  c = "-" == a.charAt(0) ? goog.math.Long.MIN_VALUE_FOR_RADIX_[c] : goog.math.Long.MAX_VALUE_FOR_RADIX_[c];
  return a.length < c.length ? !0 : a.length == c.length && a <= c ? !0 : !1;
};
goog.math.Long.TWO_PWR_16_DBL_ = 65536;
goog.math.Long.TWO_PWR_32_DBL_ = goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
goog.math.Long.TWO_PWR_64_DBL_ = goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
goog.math.Long.TWO_PWR_63_DBL_ = goog.math.Long.TWO_PWR_64_DBL_ / 2;
goog.math.Long.getZero = function() {
  return goog.math.Long.getCachedIntValue_(0);
};
goog.math.Long.getOne = function() {
  return goog.math.Long.getCachedIntValue_(1);
};
goog.math.Long.getNegOne = function() {
  return goog.math.Long.getCachedIntValue_(-1);
};
goog.math.Long.getMaxValue = function() {
  return goog.reflect.cache(goog.math.Long.valueCache_, goog.math.Long.ValueCacheId_.MAX_VALUE, function() {
    return goog.math.Long.fromBits(-1, 2147483647);
  });
};
goog.math.Long.getMinValue = function() {
  return goog.reflect.cache(goog.math.Long.valueCache_, goog.math.Long.ValueCacheId_.MIN_VALUE, function() {
    return goog.math.Long.fromBits(0, -2147483648);
  });
};
goog.math.Long.getTwoPwr24 = function() {
  return goog.reflect.cache(goog.math.Long.valueCache_, goog.math.Long.ValueCacheId_.TWO_PWR_24, function() {
    return goog.math.Long.fromInt(16777216);
  });
};
goog.math.Long.prototype.toInt = function() {
  return this.low_;
};
goog.math.Long.prototype.toNumber = function() {
  return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
};
goog.math.Long.prototype.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (this.isZero()) {
    return "0";
  }
  if (this.isNegative()) {
    if (this.equals(goog.math.Long.getMinValue())) {
      var b = goog.math.Long.fromNumber(a);
      var c = this.div(b);
      b = c.multiply(b).subtract(this);
      return c.toString(a) + b.toInt().toString(a);
    }
    return "-" + this.negate().toString(a);
  }
  c = goog.math.Long.fromNumber(Math.pow(a, 6));
  b = this;
  for (var d = "";;) {
    var e = b.div(c), f = (b.subtract(e.multiply(c)).toInt() >>> 0).toString(a);
    b = e;
    if (b.isZero()) {
      return f + d;
    }
    for (; 6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
goog.math.Long.prototype.getHighBits = function() {
  return this.high_;
};
goog.math.Long.prototype.getLowBits = function() {
  return this.low_;
};
goog.math.Long.prototype.getLowBitsUnsigned = function() {
  return 0 <= this.low_ ? this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
};
goog.math.Long.prototype.getNumBitsAbs = function() {
  if (this.isNegative()) {
    return this.equals(goog.math.Long.getMinValue()) ? 64 : this.negate().getNumBitsAbs();
  }
  for (var a = 0 != this.high_ ? this.high_ : this.low_, b = 31; 0 < b && 0 == (a & 1 << b); b--) {
  }
  return 0 != this.high_ ? b + 33 : b + 1;
};
goog.math.Long.prototype.isZero = function() {
  return 0 == this.high_ && 0 == this.low_;
};
goog.math.Long.prototype.isNegative = function() {
  return 0 > this.high_;
};
goog.math.Long.prototype.isOdd = function() {
  return 1 == (this.low_ & 1);
};
goog.math.Long.prototype.equals = function(a) {
  return this.high_ == a.high_ && this.low_ == a.low_;
};
goog.math.Long.prototype.notEquals = function(a) {
  return this.high_ != a.high_ || this.low_ != a.low_;
};
goog.math.Long.prototype.lessThan = function(a) {
  return 0 > this.compare(a);
};
goog.math.Long.prototype.lessThanOrEqual = function(a) {
  return 0 >= this.compare(a);
};
goog.math.Long.prototype.greaterThan = function(a) {
  return 0 < this.compare(a);
};
goog.math.Long.prototype.greaterThanOrEqual = function(a) {
  return 0 <= this.compare(a);
};
goog.math.Long.prototype.compare = function(a) {
  if (this.equals(a)) {
    return 0;
  }
  var b = this.isNegative(), c = a.isNegative();
  return b && !c ? -1 : !b && c ? 1 : this.subtract(a).isNegative() ? -1 : 1;
};
goog.math.Long.prototype.negate = function() {
  return this.equals(goog.math.Long.getMinValue()) ? goog.math.Long.getMinValue() : this.not().add(goog.math.Long.getOne());
};
goog.math.Long.prototype.add = function(a) {
  var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = a.high_ >>> 16, f = a.high_ & 65535, g = a.low_ >>> 16;
  a = 0 + ((this.low_ & 65535) + (a.low_ & 65535));
  g = 0 + (a >>> 16) + (d + g);
  d = 0 + (g >>> 16);
  d += c + f;
  b = 0 + (d >>> 16) + (b + e) & 65535;
  return goog.math.Long.fromBits((g & 65535) << 16 | a & 65535, b << 16 | d & 65535);
};
goog.math.Long.prototype.subtract = function(a) {
  return this.add(a.negate());
};
goog.math.Long.prototype.multiply = function(a) {
  if (this.isZero() || a.isZero()) {
    return goog.math.Long.getZero();
  }
  if (this.equals(goog.math.Long.getMinValue())) {
    return a.isOdd() ? goog.math.Long.getMinValue() : goog.math.Long.getZero();
  }
  if (a.equals(goog.math.Long.getMinValue())) {
    return this.isOdd() ? goog.math.Long.getMinValue() : goog.math.Long.getZero();
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().multiply(a.negate()) : this.negate().multiply(a).negate();
  }
  if (a.isNegative()) {
    return this.multiply(a.negate()).negate();
  }
  if (this.lessThan(goog.math.Long.getTwoPwr24()) && a.lessThan(goog.math.Long.getTwoPwr24())) {
    return goog.math.Long.fromNumber(this.toNumber() * a.toNumber());
  }
  var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = this.low_ & 65535, f = a.high_ >>> 16, g = a.high_ & 65535, h = a.low_ >>> 16;
  a = a.low_ & 65535;
  var k = 0 + e * a;
  var l = 0 + (k >>> 16) + d * a;
  var m = 0 + (l >>> 16);
  l = (l & 65535) + e * h;
  m += l >>> 16;
  m += c * a;
  var n = 0 + (m >>> 16);
  m = (m & 65535) + d * h;
  n += m >>> 16;
  m = (m & 65535) + e * g;
  n = n + (m >>> 16) + (b * a + c * h + d * g + e * f) & 65535;
  return goog.math.Long.fromBits((l & 65535) << 16 | k & 65535, n << 16 | m & 65535);
};
goog.math.Long.prototype.div = function(a) {
  if (a.isZero()) {
    throw Error("division by zero");
  }
  if (this.isZero()) {
    return goog.math.Long.getZero();
  }
  if (this.equals(goog.math.Long.getMinValue())) {
    if (a.equals(goog.math.Long.getOne()) || a.equals(goog.math.Long.getNegOne())) {
      return goog.math.Long.getMinValue();
    }
    if (a.equals(goog.math.Long.getMinValue())) {
      return goog.math.Long.getOne();
    }
    var b = this.shiftRight(1).div(a).shiftLeft(1);
    if (b.equals(goog.math.Long.getZero())) {
      return a.isNegative() ? goog.math.Long.getOne() : goog.math.Long.getNegOne();
    }
    var c = this.subtract(a.multiply(b));
    return b.add(c.div(a));
  }
  if (a.equals(goog.math.Long.getMinValue())) {
    return goog.math.Long.getZero();
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().div(a.negate()) : this.negate().div(a).negate();
  }
  if (a.isNegative()) {
    return this.div(a.negate()).negate();
  }
  var d = goog.math.Long.getZero();
  for (c = this; c.greaterThanOrEqual(a);) {
    b = Math.max(1, Math.floor(c.toNumber() / a.toNumber()));
    var e = Math.ceil(Math.log(b) / Math.LN2);
    e = 48 >= e ? 1 : Math.pow(2, e - 48);
    for (var f = goog.math.Long.fromNumber(b), g = f.multiply(a); g.isNegative() || g.greaterThan(c);) {
      b -= e, f = goog.math.Long.fromNumber(b), g = f.multiply(a);
    }
    f.isZero() && (f = goog.math.Long.getOne());
    d = d.add(f);
    c = c.subtract(g);
  }
  return d;
};
goog.math.Long.prototype.modulo = function(a) {
  return this.subtract(this.div(a).multiply(a));
};
goog.math.Long.prototype.not = function() {
  return goog.math.Long.fromBits(~this.low_, ~this.high_);
};
goog.math.Long.prototype.and = function(a) {
  return goog.math.Long.fromBits(this.low_ & a.low_, this.high_ & a.high_);
};
goog.math.Long.prototype.or = function(a) {
  return goog.math.Long.fromBits(this.low_ | a.low_, this.high_ | a.high_);
};
goog.math.Long.prototype.xor = function(a) {
  return goog.math.Long.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_);
};
goog.math.Long.prototype.shiftLeft = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.low_;
  return 32 > a ? goog.math.Long.fromBits(b << a, this.high_ << a | b >>> 32 - a) : goog.math.Long.fromBits(0, b << a - 32);
};
goog.math.Long.prototype.shiftRight = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.high_;
  return 32 > a ? goog.math.Long.fromBits(this.low_ >>> a | b << 32 - a, b >> a) : goog.math.Long.fromBits(b >> a - 32, 0 <= b ? 0 : -1);
};
goog.math.Long.prototype.shiftRightUnsigned = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.high_;
  return 32 > a ? goog.math.Long.fromBits(this.low_ >>> a | b << 32 - a, b >>> a) : 32 == a ? goog.math.Long.fromBits(b, 0) : goog.math.Long.fromBits(b >>> a - 32, 0);
};
goog.math.Long.ValueCacheId_ = {MAX_VALUE:1, MIN_VALUE:2, TWO_PWR_24:6};
var cljs = {core:{}};
cljs.core._STAR_clojurescript_version_STAR_ = "1.9.908";
cljs.core._STAR_unchecked_if_STAR_ = !1;
cljs.core._STAR_unchecked_arrays_STAR_ = !1;
cljs.core._STAR_warn_on_infer_STAR_ = !1;
"undefined" === typeof cljs.core.PROTOCOL_SENTINEL && (cljs.core.PROTOCOL_SENTINEL = {});
cljs.core.MODULE_URIS = null;
cljs.core.MODULE_INFOS = null;
cljs.core._STAR_target_STAR_ = "nodejs";
cljs.core._STAR_ns_STAR_ = null;
cljs.core._STAR_out_STAR_ = null;
cljs.core._STAR_assert_STAR_ = !0;
"undefined" === typeof cljs.core._STAR_print_fn_STAR_ && (cljs.core._STAR_print_fn_STAR_ = null);
"undefined" === typeof cljs.core._STAR_print_err_fn_STAR_ && (cljs.core._STAR_print_err_fn_STAR_ = null);
cljs.core.set_print_fn_BANG_ = function(a) {
  return cljs.core._STAR_print_fn_STAR_ = a;
};
cljs.core.set_print_err_fn_BANG_ = function(a) {
  return cljs.core._STAR_print_err_fn_STAR_ = a;
};
cljs.core._STAR_flush_on_newline_STAR_ = !0;
cljs.core._STAR_print_newline_STAR_ = !0;
cljs.core._STAR_print_readably_STAR_ = !0;
cljs.core._STAR_print_meta_STAR_ = !1;
cljs.core._STAR_print_dup_STAR_ = !1;
cljs.core._STAR_print_namespace_maps_STAR_ = !1;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core._STAR_print_fn_bodies_STAR_ = !1;
"undefined" === typeof cljs.core._STAR_loaded_libs_STAR_ && (cljs.core._STAR_loaded_libs_STAR_ = null);
cljs.core.pr_opts = function() {
  return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null, "flush-on-newline", "flush-on-newline", -151457939), cljs.core._STAR_flush_on_newline_STAR_, new cljs.core.Keyword(null, "readably", "readably", 1129599760), cljs.core._STAR_print_readably_STAR_, new cljs.core.Keyword(null, "meta", "meta", 1499536964), cljs.core._STAR_print_meta_STAR_, new cljs.core.Keyword(null, "dup", "dup", 556298533), cljs.core._STAR_print_dup_STAR_, new cljs.core.Keyword(null, "print-length", "print-length", 
  1931866356), cljs.core._STAR_print_length_STAR_], null);
};
cljs.core.enable_console_print_BANG_ = function() {
  cljs.core._STAR_print_newline_STAR_ = !1;
  cljs.core._STAR_print_fn_STAR_ = function() {
    var a = function(a) {
      return console.log.apply(console, cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(a));
    }, b = function(b) {
      var c = null;
      if (0 < arguments.length) {
        c = 0;
        for (var e = Array(arguments.length - 0); c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new cljs.core.IndexedSeq(e, 0, null);
      }
      return a.call(this, c);
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      b = cljs.core.seq(b);
      return a(b);
    };
    b.cljs$core$IFn$_invoke$arity$variadic = a;
    return b;
  }();
  cljs.core._STAR_print_err_fn_STAR_ = function() {
    var a = function(a) {
      return console.error.apply(console, cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(a));
    }, b = function(b) {
      var c = null;
      if (0 < arguments.length) {
        c = 0;
        for (var e = Array(arguments.length - 0); c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new cljs.core.IndexedSeq(e, 0, null);
      }
      return a.call(this, c);
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      b = cljs.core.seq(b);
      return a(b);
    };
    b.cljs$core$IFn$_invoke$arity$variadic = a;
    return b;
  }();
  return null;
};
cljs.core.truth_ = function(a) {
  return null != a && !1 !== a;
};
cljs.core.not_native = null;
cljs.core.identical_QMARK_ = function(a, b) {
  return a === b;
};
cljs.core.nil_QMARK_ = function(a) {
  return null == a;
};
cljs.core.array_QMARK_ = function(a) {
  return "nodejs" === cljs.core._STAR_target_STAR_ ? Array.isArray(a) : a instanceof Array;
};
cljs.core.number_QMARK_ = function(a) {
  return "number" === typeof a;
};
cljs.core.not = function(a) {
  return null == a ? !0 : !1 === a ? !0 : !1;
};
cljs.core.some_QMARK_ = function(a) {
  return null != a;
};
cljs.core.object_QMARK_ = function(a) {
  return null != a ? a.constructor === Object : !1;
};
cljs.core.string_QMARK_ = function(a) {
  return goog.isString(a);
};
cljs.core.char_QMARK_ = function(a) {
  return "string" === typeof a && 1 === a.length;
};
cljs.core.any_QMARK_ = function(a) {
  return !0;
};
cljs.core.native_satisfies_QMARK_ = function(a, b) {
  return a[goog.typeOf(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
};
cljs.core.is_proto_ = function(a) {
  return a.constructor.prototype === a;
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core._STAR_command_line_args_STAR_ = null;
cljs.core.type = function(a) {
  return null == a ? null : a.constructor;
};
cljs.core.missing_protocol = function(a, b) {
  var c = cljs.core.type(b);
  c = cljs.core.truth_(cljs.core.truth_(c) ? c.cljs$lang$type : c) ? c.cljs$lang$ctorStr : goog.typeOf(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
};
cljs.core.type__GT_str = function(a) {
  var b = a.cljs$lang$ctorStr;
  return cljs.core.truth_(b) ? b : "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
};
cljs.core.load_file = function(a) {
  return cljs.core.truth_(COMPILED) ? null : goog.nodeGlobalRequire(a);
};
"undefined" !== typeof Symbol && "function" === goog.typeOf(Symbol) ? cljs.core.ITER_SYMBOL = Symbol.iterator : cljs.core.ITER_SYMBOL = "@@iterator";
cljs.core.CHAR_MAP = {"]":"_RBRACK_", "'":"_SINGLEQUOTE_", "\x3d":"_EQ_", '"':"_DOUBLEQUOTE_", "!":"_BANG_", "*":"_STAR_", "%":"_PERCENT_", "|":"_BAR_", "~":"_TILDE_", "/":"_SLASH_", "\\":"_BSLASH_", "-":"_", "?":"_QMARK_", "\x26":"_AMPERSAND_", ":":"_COLON_", "\x3c":"_LT_", "{":"_LBRACE_", "}":"_RBRACE_", "[":"_LBRACK_", "#":"_SHARP_", "^":"_CARET_", "+":"_PLUS_", "@":"_CIRCA_", "\x3e":"_GT_"};
cljs.core.DEMUNGE_MAP = {_RBRACE_:"}", _COLON_:":", _BANG_:"!", _QMARK_:"?", _BSLASH_:"\\\\", _SLASH_:"/", _PERCENT_:"%", _PLUS_:"+", _SHARP_:"#", _LBRACE_:"{", _BAR_:"|", _LBRACK_:"[", _EQ_:"\x3d", _:"-", _TILDE_:"~", _RBRACK_:"]", _GT_:"\x3e", _SINGLEQUOTE_:"'", _CIRCA_:"@", _AMPERSAND_:"\x26", _DOUBLEQUOTE_:'\\"', _CARET_:"^", _LT_:"\x3c", _STAR_:"*"};
cljs.core.DEMUNGE_PATTERN = null;
cljs.core.system_time = function() {
  if ("undefined" !== typeof performance && null != performance.now) {
    return performance.now();
  }
  if ("undefined" !== typeof process && null != process.hrtime) {
    var a = process.hrtime();
    return (1.0E9 * a[0] + a[1]) / 1000000.0;
  }
  return (new Date).getTime();
};
cljs.core.make_array = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.make_array.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.make_array.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.make_array.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.make_array.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return Array(a);
};
cljs.core.make_array.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return Array(b);
};
cljs.core.make_array.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  a = Array(b);
  b = a.length;
  for (var d = 0;;) {
    if (d < b) {
      a[d] = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.make_array, null, c), d += 1;
    } else {
      break;
    }
  }
  return a;
};
cljs.core.make_array.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.make_array.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.make_array.cljs$lang$maxFixedArity = 2;
cljs.core.aclone = function(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
};
cljs.core.array = function(a) {
  for (var b = Array(arguments.length), c = 0;;) {
    if (c < b.length) {
      b[c] = arguments[c], c += 1;
    } else {
      return b;
    }
  }
};
cljs.core.maybe_warn = function(a) {
  return cljs.core.truth_(cljs.core._STAR_print_err_fn_STAR_) ? cljs.core._STAR_print_err_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_err_fn_STAR_.cljs$core$IFn$_invoke$arity$1(a) : cljs.core._STAR_print_err_fn_STAR_.call(null, a) : null;
};
cljs.core.checked_aget = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.checked_aget.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.checked_aget.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.checked_aget.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  try {
    if (!cljs.core.truth_(function() {
      var b = cljs.core.array_QMARK_(a);
      return b ? b : goog.isArrayLike(a);
    }())) {
      throw Error("Assert failed: (or (array? array) (js/goog.isArrayLike array))");
    }
    if ("number" !== typeof b) {
      throw Error("Assert failed: (number? idx)");
    }
    if (0 > b) {
      throw Error("Assert failed: (not (neg? idx))");
    }
    if (!(b < a.length)) {
      throw Error("Assert failed: (\x3c idx (alength array))");
    }
  } catch (c) {
    cljs.core.maybe_warn(c);
  }
  return a[b];
};
cljs.core.checked_aget.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.checked_aget, cljs.core.checked_aget.cljs$core$IFn$_invoke$arity$2(a, b), c);
};
cljs.core.checked_aget.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.checked_aget.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.checked_aget.cljs$lang$maxFixedArity = 2;
cljs.core.checked_aset = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.checked_aset.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.checked_aset.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.checked_aset.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  try {
    if (!cljs.core.truth_(function() {
      var b = cljs.core.array_QMARK_(a);
      return b ? b : goog.isArrayLike(a);
    }())) {
      throw Error("Assert failed: (or (array? array) (js/goog.isArrayLike array))");
    }
    if ("number" !== typeof b) {
      throw Error("Assert failed: (number? idx)");
    }
    if (0 > b) {
      throw Error("Assert failed: (not (neg? idx))");
    }
    if (!(b < a.length)) {
      throw Error("Assert failed: (\x3c idx (alength array))");
    }
  } catch (d) {
    cljs.core.maybe_warn(d);
  }
  return a[b] = c;
};
cljs.core.checked_aset.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.checked_aset, cljs.core.checked_aget.cljs$core$IFn$_invoke$arity$2(a, b), c, d);
};
cljs.core.checked_aset.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.checked_aset.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.checked_aset.cljs$lang$maxFixedArity = 3;
cljs.core.checked_aget_SINGLEQUOTE_ = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.checked_aget_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.checked_aget_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.checked_aget_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (!cljs.core.truth_(function() {
    var b = cljs.core.array_QMARK_(a);
    return b ? b : goog.isArrayLike(a);
  }())) {
    throw Error("Assert failed: (or (array? array) (js/goog.isArrayLike array))");
  }
  if ("number" !== typeof b) {
    throw Error("Assert failed: (number? idx)");
  }
  if (0 > b) {
    throw Error("Assert failed: (not (neg? idx))");
  }
  if (!(b < a.length)) {
    throw Error("Assert failed: (\x3c idx (alength array))");
  }
  return a[b];
};
cljs.core.checked_aget_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.checked_aget_SINGLEQUOTE_, cljs.core.checked_aget_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(a, b), c);
};
cljs.core.checked_aget_SINGLEQUOTE_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.checked_aget_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.checked_aget_SINGLEQUOTE_.cljs$lang$maxFixedArity = 2;
cljs.core.checked_aset_SINGLEQUOTE_ = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.checked_aset_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.checked_aset_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.checked_aset_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (!cljs.core.truth_(function() {
    var b = cljs.core.array_QMARK_(a);
    return b ? b : goog.isArrayLike(a);
  }())) {
    throw Error("Assert failed: (or (array? array) (js/goog.isArrayLike array))");
  }
  if ("number" !== typeof b) {
    throw Error("Assert failed: (number? idx)");
  }
  if (0 > b) {
    throw Error("Assert failed: (not (neg? idx))");
  }
  if (!(b < a.length)) {
    throw Error("Assert failed: (\x3c idx (alength array))");
  }
  return a[b] = c;
};
cljs.core.checked_aset_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.checked_aset_SINGLEQUOTE_, cljs.core.checked_aget_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(a, b), c, d);
};
cljs.core.checked_aset_SINGLEQUOTE_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.checked_aset_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.checked_aset_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3;
cljs.core.aget = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.aget.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.aget.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.aget.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a[b];
};
cljs.core.aget.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.aget, a[b], c);
};
cljs.core.aget.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.aget.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.aget.cljs$lang$maxFixedArity = 2;
cljs.core.aset = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.aset.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.aset.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.aset.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return a[b] = c;
};
cljs.core.aset.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.aset, a[b], c, d);
};
cljs.core.aset.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.aset.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.aset.cljs$lang$maxFixedArity = 3;
cljs.core.alength = function(a) {
  return a.length;
};
cljs.core.into_array = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.into_array.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.into_array.cljs$core$IFn$_invoke$arity$2(null, a);
};
cljs.core.into_array.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a, b) {
    a.push(b);
    return a;
  }, [], b);
};
cljs.core.into_array.cljs$lang$maxFixedArity = 2;
cljs.core.js_invoke = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 2 < b.length ? new cljs.core.IndexedSeq(b.slice(2), 0, null) : null;
  return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
};
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return a[b].apply(a, cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(c));
};
cljs.core.js_invoke.cljs$lang$maxFixedArity = 2;
cljs.core.js_invoke.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.Fn = function() {
};
cljs.core.IFn = function() {
};
cljs.core._invoke = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$7(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    case 8:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$8(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
    case 9:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$9(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
    case 10:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$10(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
    case 11:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$11(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
    case 12:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$12(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
    case 13:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$13(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
    case 14:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$14(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13]);
    case 15:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$15(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
    case 16:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$16(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
    case 17:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$17(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16]);
    case 18:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$18(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
    case 19:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$19(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18]);
    case 20:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$20(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
    case 21:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$21(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20]);
    case 22:
      return cljs.core._invoke.cljs$core$IFn$_invoke$arity$22(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20], arguments[21]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$1 = function(a) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$1) {
    return a.cljs$core$IFn$_invoke$arity$1(a);
  }
  var b = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._invoke._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$2) {
    return a.cljs$core$IFn$_invoke$arity$2(a, b);
  }
  var c = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._invoke._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$3) {
    return a.cljs$core$IFn$_invoke$arity$3(a, b, c);
  }
  var d = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._invoke._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$4) {
    return a.cljs$core$IFn$_invoke$arity$4(a, b, c, d);
  }
  var e = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != e) {
    return e.cljs$core$IFn$_invoke$arity$4 ? e.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : e.call(null, a, b, c, d);
  }
  e = cljs.core._invoke._;
  if (null != e) {
    return e.cljs$core$IFn$_invoke$arity$4 ? e.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : e.call(null, a, b, c, d);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$5) {
    return a.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e);
  }
  var f = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != f) {
    return f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  f = cljs.core._invoke._;
  if (null != f) {
    return f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$6) {
    return a.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f);
  }
  var g = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != g) {
    return g.cljs$core$IFn$_invoke$arity$6 ? g.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f) : g.call(null, a, b, c, d, e, f);
  }
  g = cljs.core._invoke._;
  if (null != g) {
    return g.cljs$core$IFn$_invoke$arity$6 ? g.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f) : g.call(null, a, b, c, d, e, f);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$7 = function(a, b, c, d, e, f, g) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$7) {
    return a.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g);
  }
  var h = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != h) {
    return h.cljs$core$IFn$_invoke$arity$7 ? h.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g) : h.call(null, a, b, c, d, e, f, g);
  }
  h = cljs.core._invoke._;
  if (null != h) {
    return h.cljs$core$IFn$_invoke$arity$7 ? h.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g) : h.call(null, a, b, c, d, e, f, g);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$8 = function(a, b, c, d, e, f, g, h) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$8) {
    return a.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h);
  }
  var k = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != k) {
    return k.cljs$core$IFn$_invoke$arity$8 ? k.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h) : k.call(null, a, b, c, d, e, f, g, h);
  }
  k = cljs.core._invoke._;
  if (null != k) {
    return k.cljs$core$IFn$_invoke$arity$8 ? k.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h) : k.call(null, a, b, c, d, e, f, g, h);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$9 = function(a, b, c, d, e, f, g, h, k) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$9) {
    return a.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, k);
  }
  var l = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != l) {
    return l.cljs$core$IFn$_invoke$arity$9 ? l.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, k) : l.call(null, a, b, c, d, e, f, g, h, k);
  }
  l = cljs.core._invoke._;
  if (null != l) {
    return l.cljs$core$IFn$_invoke$arity$9 ? l.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, k) : l.call(null, a, b, c, d, e, f, g, h, k);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$10 = function(a, b, c, d, e, f, g, h, k, l) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$10) {
    return a.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, k, l);
  }
  var m = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != m) {
    return m.cljs$core$IFn$_invoke$arity$10 ? m.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, k, l) : m.call(null, a, b, c, d, e, f, g, h, k, l);
  }
  m = cljs.core._invoke._;
  if (null != m) {
    return m.cljs$core$IFn$_invoke$arity$10 ? m.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, k, l) : m.call(null, a, b, c, d, e, f, g, h, k, l);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$11 = function(a, b, c, d, e, f, g, h, k, l, m) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$11) {
    return a.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, k, l, m);
  }
  var n = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != n) {
    return n.cljs$core$IFn$_invoke$arity$11 ? n.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, k, l, m) : n.call(null, a, b, c, d, e, f, g, h, k, l, m);
  }
  n = cljs.core._invoke._;
  if (null != n) {
    return n.cljs$core$IFn$_invoke$arity$11 ? n.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, k, l, m) : n.call(null, a, b, c, d, e, f, g, h, k, l, m);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$12 = function(a, b, c, d, e, f, g, h, k, l, m, n) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$12) {
    return a.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, k, l, m, n);
  }
  var p = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != p) {
    return p.cljs$core$IFn$_invoke$arity$12 ? p.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, k, l, m, n) : p.call(null, a, b, c, d, e, f, g, h, k, l, m, n);
  }
  p = cljs.core._invoke._;
  if (null != p) {
    return p.cljs$core$IFn$_invoke$arity$12 ? p.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, k, l, m, n) : p.call(null, a, b, c, d, e, f, g, h, k, l, m, n);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$13 = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$13) {
    return a.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, k, l, m, n, p);
  }
  var q = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != q) {
    return q.cljs$core$IFn$_invoke$arity$13 ? q.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, k, l, m, n, p) : q.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p);
  }
  q = cljs.core._invoke._;
  if (null != q) {
    return q.cljs$core$IFn$_invoke$arity$13 ? q.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, k, l, m, n, p) : q.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$14 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$14) {
    return a.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, k, l, m, n, p, q);
  }
  var r = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != r) {
    return r.cljs$core$IFn$_invoke$arity$14 ? r.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, k, l, m, n, p, q) : r.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q);
  }
  r = cljs.core._invoke._;
  if (null != r) {
    return r.cljs$core$IFn$_invoke$arity$14 ? r.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, k, l, m, n, p, q) : r.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$15 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$15) {
    return a.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
  }
  var t = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != t) {
    return t.cljs$core$IFn$_invoke$arity$15 ? t.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) : t.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
  }
  t = cljs.core._invoke._;
  if (null != t) {
    return t.cljs$core$IFn$_invoke$arity$15 ? t.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) : t.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$16 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$16) {
    return a.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
  }
  var u = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != u) {
    return u.cljs$core$IFn$_invoke$arity$16 ? u.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : u.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
  }
  u = cljs.core._invoke._;
  if (null != u) {
    return u.cljs$core$IFn$_invoke$arity$16 ? u.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : u.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$17 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$17) {
    return a.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
  }
  var v = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != v) {
    return v.cljs$core$IFn$_invoke$arity$17 ? v.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : v.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
  }
  v = cljs.core._invoke._;
  if (null != v) {
    return v.cljs$core$IFn$_invoke$arity$17 ? v.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : v.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$18 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$18) {
    return a.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
  }
  var w = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != w) {
    return w.cljs$core$IFn$_invoke$arity$18 ? w.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : w.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
  }
  w = cljs.core._invoke._;
  if (null != w) {
    return w.cljs$core$IFn$_invoke$arity$18 ? w.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : w.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$19 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$19) {
    return a.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
  }
  var x = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != x) {
    return x.cljs$core$IFn$_invoke$arity$19 ? x.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : x.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
  }
  x = cljs.core._invoke._;
  if (null != x) {
    return x.cljs$core$IFn$_invoke$arity$19 ? x.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : x.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$20 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$20) {
    return a.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }
  var y = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != y) {
    return y.cljs$core$IFn$_invoke$arity$20 ? y.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : y.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }
  y = cljs.core._invoke._;
  if (null != y) {
    return y.cljs$core$IFn$_invoke$arity$20 ? y.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : y.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$21 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$21) {
    return a.cljs$core$IFn$_invoke$arity$21(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }
  var E = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != E) {
    return E.cljs$core$IFn$_invoke$arity$21 ? E.cljs$core$IFn$_invoke$arity$21(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : E.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }
  E = cljs.core._invoke._;
  if (null != E) {
    return E.cljs$core$IFn$_invoke$arity$21 ? E.cljs$core$IFn$_invoke$arity$21(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : E.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$core$IFn$_invoke$arity$22 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E) {
  if (null != a && null != a.cljs$core$IFn$_invoke$arity$22) {
    return a.cljs$core$IFn$_invoke$arity$22(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E);
  }
  var O = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
  if (null != O) {
    return O.cljs$core$IFn$_invoke$arity$22 ? O.cljs$core$IFn$_invoke$arity$22(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E) : O.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E);
  }
  O = cljs.core._invoke._;
  if (null != O) {
    return O.cljs$core$IFn$_invoke$arity$22 ? O.cljs$core$IFn$_invoke$arity$22(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E) : O.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E);
  }
  throw cljs.core.missing_protocol("IFn.-invoke", a);
};
cljs.core._invoke.cljs$lang$maxFixedArity = 22;
cljs.core.ICloneable = function() {
};
cljs.core._clone = function(a) {
  if (null != a && null != a.cljs$core$ICloneable$_clone$arity$1) {
    return a.cljs$core$ICloneable$_clone$arity$1(a);
  }
  var b = cljs.core._clone[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._clone._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ICloneable.-clone", a);
};
cljs.core.ICounted = function() {
};
cljs.core._count = function(a) {
  if (null != a && null != a.cljs$core$ICounted$_count$arity$1) {
    return a.cljs$core$ICounted$_count$arity$1(a);
  }
  var b = cljs.core._count[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._count._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ICounted.-count", a);
};
cljs.core.IEmptyableCollection = function() {
};
cljs.core._empty = function(a) {
  if (null != a && null != a.cljs$core$IEmptyableCollection$_empty$arity$1) {
    return a.cljs$core$IEmptyableCollection$_empty$arity$1(a);
  }
  var b = cljs.core._empty[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._empty._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IEmptyableCollection.-empty", a);
};
cljs.core.ICollection = function() {
};
cljs.core._conj = function(a, b) {
  if (null != a && null != a.cljs$core$ICollection$_conj$arity$2) {
    return a.cljs$core$ICollection$_conj$arity$2(a, b);
  }
  var c = cljs.core._conj[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._conj._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ICollection.-conj", a);
};
cljs.core.IIndexed = function() {
};
cljs.core._nth = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core._nth.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (null != a && null != a.cljs$core$IIndexed$_nth$arity$2) {
    return a.cljs$core$IIndexed$_nth$arity$2(a, b);
  }
  var c = cljs.core._nth[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._nth._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IIndexed.-nth", a);
};
cljs.core._nth.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (null != a && null != a.cljs$core$IIndexed$_nth$arity$3) {
    return a.cljs$core$IIndexed$_nth$arity$3(a, b, c);
  }
  var d = cljs.core._nth[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._nth._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IIndexed.-nth", a);
};
cljs.core._nth.cljs$lang$maxFixedArity = 3;
cljs.core.ASeq = function() {
};
cljs.core.ISeq = function() {
};
cljs.core._first = function(a) {
  if (null != a && null != a.cljs$core$ISeq$_first$arity$1) {
    return a.cljs$core$ISeq$_first$arity$1(a);
  }
  var b = cljs.core._first[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._first._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ISeq.-first", a);
};
cljs.core._rest = function(a) {
  if (null != a && null != a.cljs$core$ISeq$_rest$arity$1) {
    return a.cljs$core$ISeq$_rest$arity$1(a);
  }
  var b = cljs.core._rest[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._rest._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ISeq.-rest", a);
};
cljs.core.INext = function() {
};
cljs.core._next = function(a) {
  if (null != a && null != a.cljs$core$INext$_next$arity$1) {
    return a.cljs$core$INext$_next$arity$1(a);
  }
  var b = cljs.core._next[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._next._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("INext.-next", a);
};
cljs.core.ILookup = function() {
};
cljs.core._lookup = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core._lookup.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (null != a && null != a.cljs$core$ILookup$_lookup$arity$2) {
    return a.cljs$core$ILookup$_lookup$arity$2(a, b);
  }
  var c = cljs.core._lookup[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._lookup._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ILookup.-lookup", a);
};
cljs.core._lookup.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (null != a && null != a.cljs$core$ILookup$_lookup$arity$3) {
    return a.cljs$core$ILookup$_lookup$arity$3(a, b, c);
  }
  var d = cljs.core._lookup[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._lookup._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("ILookup.-lookup", a);
};
cljs.core._lookup.cljs$lang$maxFixedArity = 3;
cljs.core.IAssociative = function() {
};
cljs.core._contains_key_QMARK_ = function(a, b) {
  if (null != a && null != a.cljs$core$IAssociative$_contains_key_QMARK_$arity$2) {
    return a.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(a, b);
  }
  var c = cljs.core._contains_key_QMARK_[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._contains_key_QMARK_._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IAssociative.-contains-key?", a);
};
cljs.core._assoc = function(a, b, c) {
  if (null != a && null != a.cljs$core$IAssociative$_assoc$arity$3) {
    return a.cljs$core$IAssociative$_assoc$arity$3(a, b, c);
  }
  var d = cljs.core._assoc[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._assoc._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IAssociative.-assoc", a);
};
cljs.core.IFind = function() {
};
cljs.core._find = function(a, b) {
  if (null != a && null != a.cljs$core$IFind$_find$arity$2) {
    return a.cljs$core$IFind$_find$arity$2(a, b);
  }
  var c = cljs.core._find[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._find._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IFind.-find", a);
};
cljs.core.IMap = function() {
};
cljs.core._dissoc = function(a, b) {
  if (null != a && null != a.cljs$core$IMap$_dissoc$arity$2) {
    return a.cljs$core$IMap$_dissoc$arity$2(a, b);
  }
  var c = cljs.core._dissoc[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._dissoc._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IMap.-dissoc", a);
};
cljs.core.IMapEntry = function() {
};
cljs.core._key = function(a) {
  if (null != a && null != a.cljs$core$IMapEntry$_key$arity$1) {
    return a.cljs$core$IMapEntry$_key$arity$1(a);
  }
  var b = cljs.core._key[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._key._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMapEntry.-key", a);
};
cljs.core._val = function(a) {
  if (null != a && null != a.cljs$core$IMapEntry$_val$arity$1) {
    return a.cljs$core$IMapEntry$_val$arity$1(a);
  }
  var b = cljs.core._val[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._val._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMapEntry.-val", a);
};
cljs.core.ISet = function() {
};
cljs.core._disjoin = function(a, b) {
  if (null != a && null != a.cljs$core$ISet$_disjoin$arity$2) {
    return a.cljs$core$ISet$_disjoin$arity$2(a, b);
  }
  var c = cljs.core._disjoin[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._disjoin._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ISet.-disjoin", a);
};
cljs.core.IStack = function() {
};
cljs.core._peek = function(a) {
  if (null != a && null != a.cljs$core$IStack$_peek$arity$1) {
    return a.cljs$core$IStack$_peek$arity$1(a);
  }
  var b = cljs.core._peek[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._peek._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IStack.-peek", a);
};
cljs.core._pop = function(a) {
  if (null != a && null != a.cljs$core$IStack$_pop$arity$1) {
    return a.cljs$core$IStack$_pop$arity$1(a);
  }
  var b = cljs.core._pop[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._pop._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IStack.-pop", a);
};
cljs.core.IVector = function() {
};
cljs.core._assoc_n = function(a, b, c) {
  if (null != a && null != a.cljs$core$IVector$_assoc_n$arity$3) {
    return a.cljs$core$IVector$_assoc_n$arity$3(a, b, c);
  }
  var d = cljs.core._assoc_n[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._assoc_n._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IVector.-assoc-n", a);
};
cljs.core.IDeref = function() {
};
cljs.core._deref = function(a) {
  if (null != a && null != a.cljs$core$IDeref$_deref$arity$1) {
    return a.cljs$core$IDeref$_deref$arity$1(a);
  }
  var b = cljs.core._deref[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._deref._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IDeref.-deref", a);
};
cljs.core.IDerefWithTimeout = function() {
};
cljs.core._deref_with_timeout = function(a, b, c) {
  if (null != a && null != a.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3) {
    return a.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(a, b, c);
  }
  var d = cljs.core._deref_with_timeout[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._deref_with_timeout._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout", a);
};
cljs.core.IMeta = function() {
};
cljs.core._meta = function(a) {
  if (null != a && null != a.cljs$core$IMeta$_meta$arity$1) {
    return a.cljs$core$IMeta$_meta$arity$1(a);
  }
  var b = cljs.core._meta[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._meta._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMeta.-meta", a);
};
cljs.core.IWithMeta = function() {
};
cljs.core._with_meta = function(a, b) {
  if (null != a && null != a.cljs$core$IWithMeta$_with_meta$arity$2) {
    return a.cljs$core$IWithMeta$_with_meta$arity$2(a, b);
  }
  var c = cljs.core._with_meta[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._with_meta._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IWithMeta.-with-meta", a);
};
cljs.core.IReduce = function() {
};
cljs.core._reduce = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core._reduce.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (null != a && null != a.cljs$core$IReduce$_reduce$arity$2) {
    return a.cljs$core$IReduce$_reduce$arity$2(a, b);
  }
  var c = cljs.core._reduce[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._reduce._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IReduce.-reduce", a);
};
cljs.core._reduce.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (null != a && null != a.cljs$core$IReduce$_reduce$arity$3) {
    return a.cljs$core$IReduce$_reduce$arity$3(a, b, c);
  }
  var d = cljs.core._reduce[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._reduce._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IReduce.-reduce", a);
};
cljs.core._reduce.cljs$lang$maxFixedArity = 3;
cljs.core.IKVReduce = function() {
};
cljs.core._kv_reduce = function(a, b, c) {
  if (null != a && null != a.cljs$core$IKVReduce$_kv_reduce$arity$3) {
    return a.cljs$core$IKVReduce$_kv_reduce$arity$3(a, b, c);
  }
  var d = cljs.core._kv_reduce[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._kv_reduce._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IKVReduce.-kv-reduce", a);
};
cljs.core.IEquiv = function() {
};
cljs.core._equiv = function(a, b) {
  if (null != a && null != a.cljs$core$IEquiv$_equiv$arity$2) {
    return a.cljs$core$IEquiv$_equiv$arity$2(a, b);
  }
  var c = cljs.core._equiv[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._equiv._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IEquiv.-equiv", a);
};
cljs.core.IHash = function() {
};
cljs.core._hash = function(a) {
  if (null != a && null != a.cljs$core$IHash$_hash$arity$1) {
    return a.cljs$core$IHash$_hash$arity$1(a);
  }
  var b = cljs.core._hash[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._hash._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IHash.-hash", a);
};
cljs.core.ISeqable = function() {
};
cljs.core._seq = function(a) {
  if (null != a && null != a.cljs$core$ISeqable$_seq$arity$1) {
    return a.cljs$core$ISeqable$_seq$arity$1(a);
  }
  var b = cljs.core._seq[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._seq._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ISeqable.-seq", a);
};
cljs.core.ISequential = function() {
};
cljs.core.IList = function() {
};
cljs.core.IRecord = function() {
};
cljs.core.IReversible = function() {
};
cljs.core._rseq = function(a) {
  if (null != a && null != a.cljs$core$IReversible$_rseq$arity$1) {
    return a.cljs$core$IReversible$_rseq$arity$1(a);
  }
  var b = cljs.core._rseq[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._rseq._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IReversible.-rseq", a);
};
cljs.core.ISorted = function() {
};
cljs.core._sorted_seq = function(a, b) {
  if (null != a && null != a.cljs$core$ISorted$_sorted_seq$arity$2) {
    return a.cljs$core$ISorted$_sorted_seq$arity$2(a, b);
  }
  var c = cljs.core._sorted_seq[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._sorted_seq._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ISorted.-sorted-seq", a);
};
cljs.core._sorted_seq_from = function(a, b, c) {
  if (null != a && null != a.cljs$core$ISorted$_sorted_seq_from$arity$3) {
    return a.cljs$core$ISorted$_sorted_seq_from$arity$3(a, b, c);
  }
  var d = cljs.core._sorted_seq_from[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._sorted_seq_from._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("ISorted.-sorted-seq-from", a);
};
cljs.core._entry_key = function(a, b) {
  if (null != a && null != a.cljs$core$ISorted$_entry_key$arity$2) {
    return a.cljs$core$ISorted$_entry_key$arity$2(a, b);
  }
  var c = cljs.core._entry_key[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._entry_key._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ISorted.-entry-key", a);
};
cljs.core._comparator = function(a) {
  if (null != a && null != a.cljs$core$ISorted$_comparator$arity$1) {
    return a.cljs$core$ISorted$_comparator$arity$1(a);
  }
  var b = cljs.core._comparator[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._comparator._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ISorted.-comparator", a);
};
cljs.core.IWriter = function() {
};
cljs.core._write = function(a, b) {
  if (null != a && null != a.cljs$core$IWriter$_write$arity$2) {
    return a.cljs$core$IWriter$_write$arity$2(a, b);
  }
  var c = cljs.core._write[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._write._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IWriter.-write", a);
};
cljs.core._flush = function(a) {
  if (null != a && null != a.cljs$core$IWriter$_flush$arity$1) {
    return a.cljs$core$IWriter$_flush$arity$1(a);
  }
  var b = cljs.core._flush[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._flush._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IWriter.-flush", a);
};
cljs.core.IPrintWithWriter = function() {
};
cljs.core._pr_writer = function(a, b, c) {
  if (null != a && null != a.cljs$core$IPrintWithWriter$_pr_writer$arity$3) {
    return a.cljs$core$IPrintWithWriter$_pr_writer$arity$3(a, b, c);
  }
  var d = cljs.core._pr_writer[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._pr_writer._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer", a);
};
cljs.core.IPending = function() {
};
cljs.core._realized_QMARK_ = function(a) {
  if (null != a && null != a.cljs$core$IPending$_realized_QMARK_$arity$1) {
    return a.cljs$core$IPending$_realized_QMARK_$arity$1(a);
  }
  var b = cljs.core._realized_QMARK_[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._realized_QMARK_._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IPending.-realized?", a);
};
cljs.core.IWatchable = function() {
};
cljs.core._notify_watches = function(a, b, c) {
  if (null != a && null != a.cljs$core$IWatchable$_notify_watches$arity$3) {
    return a.cljs$core$IWatchable$_notify_watches$arity$3(a, b, c);
  }
  var d = cljs.core._notify_watches[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._notify_watches._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IWatchable.-notify-watches", a);
};
cljs.core._add_watch = function(a, b, c) {
  if (null != a && null != a.cljs$core$IWatchable$_add_watch$arity$3) {
    return a.cljs$core$IWatchable$_add_watch$arity$3(a, b, c);
  }
  var d = cljs.core._add_watch[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._add_watch._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IWatchable.-add-watch", a);
};
cljs.core._remove_watch = function(a, b) {
  if (null != a && null != a.cljs$core$IWatchable$_remove_watch$arity$2) {
    return a.cljs$core$IWatchable$_remove_watch$arity$2(a, b);
  }
  var c = cljs.core._remove_watch[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._remove_watch._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IWatchable.-remove-watch", a);
};
cljs.core.IEditableCollection = function() {
};
cljs.core._as_transient = function(a) {
  if (null != a && null != a.cljs$core$IEditableCollection$_as_transient$arity$1) {
    return a.cljs$core$IEditableCollection$_as_transient$arity$1(a);
  }
  var b = cljs.core._as_transient[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._as_transient._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IEditableCollection.-as-transient", a);
};
cljs.core.ITransientCollection = function() {
};
cljs.core._conj_BANG_ = function(a, b) {
  if (null != a && null != a.cljs$core$ITransientCollection$_conj_BANG_$arity$2) {
    return a.cljs$core$ITransientCollection$_conj_BANG_$arity$2(a, b);
  }
  var c = cljs.core._conj_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._conj_BANG_._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ITransientCollection.-conj!", a);
};
cljs.core._persistent_BANG_ = function(a) {
  if (null != a && null != a.cljs$core$ITransientCollection$_persistent_BANG_$arity$1) {
    return a.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(a);
  }
  var b = cljs.core._persistent_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._persistent_BANG_._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ITransientCollection.-persistent!", a);
};
cljs.core.ITransientAssociative = function() {
};
cljs.core._assoc_BANG_ = function(a, b, c) {
  if (null != a && null != a.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3) {
    return a.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(a, b, c);
  }
  var d = cljs.core._assoc_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._assoc_BANG_._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("ITransientAssociative.-assoc!", a);
};
cljs.core.ITransientMap = function() {
};
cljs.core._dissoc_BANG_ = function(a, b) {
  if (null != a && null != a.cljs$core$ITransientMap$_dissoc_BANG_$arity$2) {
    return a.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(a, b);
  }
  var c = cljs.core._dissoc_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._dissoc_BANG_._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ITransientMap.-dissoc!", a);
};
cljs.core.ITransientVector = function() {
};
cljs.core._assoc_n_BANG_ = function(a, b, c) {
  if (null != a && null != a.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3) {
    return a.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(a, b, c);
  }
  var d = cljs.core._assoc_n_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._assoc_n_BANG_._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("ITransientVector.-assoc-n!", a);
};
cljs.core._pop_BANG_ = function(a) {
  if (null != a && null != a.cljs$core$ITransientVector$_pop_BANG_$arity$1) {
    return a.cljs$core$ITransientVector$_pop_BANG_$arity$1(a);
  }
  var b = cljs.core._pop_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._pop_BANG_._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("ITransientVector.-pop!", a);
};
cljs.core.ITransientSet = function() {
};
cljs.core._disjoin_BANG_ = function(a, b) {
  if (null != a && null != a.cljs$core$ITransientSet$_disjoin_BANG_$arity$2) {
    return a.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(a, b);
  }
  var c = cljs.core._disjoin_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._disjoin_BANG_._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ITransientSet.-disjoin!", a);
};
cljs.core.IComparable = function() {
};
cljs.core._compare = function(a, b) {
  if (null != a && null != a.cljs$core$IComparable$_compare$arity$2) {
    return a.cljs$core$IComparable$_compare$arity$2(a, b);
  }
  var c = cljs.core._compare[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._compare._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IComparable.-compare", a);
};
cljs.core.IChunk = function() {
};
cljs.core._drop_first = function(a) {
  if (null != a && null != a.cljs$core$IChunk$_drop_first$arity$1) {
    return a.cljs$core$IChunk$_drop_first$arity$1(a);
  }
  var b = cljs.core._drop_first[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._drop_first._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IChunk.-drop-first", a);
};
cljs.core.IChunkedSeq = function() {
};
cljs.core._chunked_first = function(a) {
  if (null != a && null != a.cljs$core$IChunkedSeq$_chunked_first$arity$1) {
    return a.cljs$core$IChunkedSeq$_chunked_first$arity$1(a);
  }
  var b = cljs.core._chunked_first[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._chunked_first._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first", a);
};
cljs.core._chunked_rest = function(a) {
  if (null != a && null != a.cljs$core$IChunkedSeq$_chunked_rest$arity$1) {
    return a.cljs$core$IChunkedSeq$_chunked_rest$arity$1(a);
  }
  var b = cljs.core._chunked_rest[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._chunked_rest._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest", a);
};
cljs.core.IChunkedNext = function() {
};
cljs.core._chunked_next = function(a) {
  if (null != a && null != a.cljs$core$IChunkedNext$_chunked_next$arity$1) {
    return a.cljs$core$IChunkedNext$_chunked_next$arity$1(a);
  }
  var b = cljs.core._chunked_next[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._chunked_next._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IChunkedNext.-chunked-next", a);
};
cljs.core.INamed = function() {
};
cljs.core._name = function(a) {
  if (null != a && null != a.cljs$core$INamed$_name$arity$1) {
    return a.cljs$core$INamed$_name$arity$1(a);
  }
  var b = cljs.core._name[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._name._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("INamed.-name", a);
};
cljs.core._namespace = function(a) {
  if (null != a && null != a.cljs$core$INamed$_namespace$arity$1) {
    return a.cljs$core$INamed$_namespace$arity$1(a);
  }
  var b = cljs.core._namespace[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._namespace._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("INamed.-namespace", a);
};
cljs.core.IAtom = function() {
};
cljs.core.IReset = function() {
};
cljs.core._reset_BANG_ = function(a, b) {
  if (null != a && null != a.cljs$core$IReset$_reset_BANG_$arity$2) {
    return a.cljs$core$IReset$_reset_BANG_$arity$2(a, b);
  }
  var c = cljs.core._reset_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._reset_BANG_._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IReset.-reset!", a);
};
cljs.core.ISwap = function() {
};
cljs.core._swap_BANG_ = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (null != a && null != a.cljs$core$ISwap$_swap_BANG_$arity$2) {
    return a.cljs$core$ISwap$_swap_BANG_$arity$2(a, b);
  }
  var c = cljs.core._swap_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._swap_BANG_._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("ISwap.-swap!", a);
};
cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (null != a && null != a.cljs$core$ISwap$_swap_BANG_$arity$3) {
    return a.cljs$core$ISwap$_swap_BANG_$arity$3(a, b, c);
  }
  var d = cljs.core._swap_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._swap_BANG_._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("ISwap.-swap!", a);
};
cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  if (null != a && null != a.cljs$core$ISwap$_swap_BANG_$arity$4) {
    return a.cljs$core$ISwap$_swap_BANG_$arity$4(a, b, c, d);
  }
  var e = cljs.core._swap_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != e) {
    return e.cljs$core$IFn$_invoke$arity$4 ? e.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : e.call(null, a, b, c, d);
  }
  e = cljs.core._swap_BANG_._;
  if (null != e) {
    return e.cljs$core$IFn$_invoke$arity$4 ? e.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : e.call(null, a, b, c, d);
  }
  throw cljs.core.missing_protocol("ISwap.-swap!", a);
};
cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  if (null != a && null != a.cljs$core$ISwap$_swap_BANG_$arity$5) {
    return a.cljs$core$ISwap$_swap_BANG_$arity$5(a, b, c, d, e);
  }
  var f = cljs.core._swap_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != f) {
    return f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  f = cljs.core._swap_BANG_._;
  if (null != f) {
    return f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  throw cljs.core.missing_protocol("ISwap.-swap!", a);
};
cljs.core._swap_BANG_.cljs$lang$maxFixedArity = 5;
cljs.core.IVolatile = function() {
};
cljs.core._vreset_BANG_ = function(a, b) {
  if (null != a && null != a.cljs$core$IVolatile$_vreset_BANG_$arity$2) {
    return a.cljs$core$IVolatile$_vreset_BANG_$arity$2(a, b);
  }
  var c = cljs.core._vreset_BANG_[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._vreset_BANG_._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IVolatile.-vreset!", a);
};
cljs.core.IIterable = function() {
};
cljs.core._iterator = function(a) {
  if (null != a && null != a.cljs$core$IIterable$_iterator$arity$1) {
    return a.cljs$core$IIterable$_iterator$arity$1(a);
  }
  var b = cljs.core._iterator[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._iterator._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IIterable.-iterator", a);
};
cljs.core.StringBufferWriter = function(a) {
  this.sb = a;
  this.cljs$lang$protocol_mask$partition0$ = 1073741824;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = function(a, b) {
  return this.sb.append(b);
};
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = function(a) {
  return null;
};
cljs.core.StringBufferWriter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "sb", "sb", -1249746442, null)], null);
};
cljs.core.StringBufferWriter.cljs$lang$type = !0;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/StringBufferWriter");
};
cljs.core.__GT_StringBufferWriter = function(a) {
  return new cljs.core.StringBufferWriter(a);
};
cljs.core.pr_str_STAR_ = function(a) {
  var b = new goog.string.StringBuffer, c = new cljs.core.StringBufferWriter(b);
  a.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null, c, cljs.core.pr_opts());
  c.cljs$core$IWriter$_flush$arity$1(null);
  return "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(b);
};
cljs.core.int_rotate_left = function(a, b) {
  return a << b | a >>> -b;
};
"undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? cljs.core.imul = function(a, b) {
  return Math.imul(a, b);
} : cljs.core.imul = function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
cljs.core.m3_seed = 0;
cljs.core.m3_C1 = -862048943;
cljs.core.m3_C2 = 461845907;
cljs.core.m3_mix_K1 = function(a) {
  return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(a | 0, cljs.core.m3_C1), 15), cljs.core.m3_C2);
};
cljs.core.m3_mix_H1 = function(a, b) {
  return cljs.core.imul(cljs.core.int_rotate_left((a | 0) ^ (b | 0), 13), 5) + -430675100 | 0;
};
cljs.core.m3_fmix = function(a, b) {
  var c = (a | 0) ^ b;
  c = cljs.core.imul(c ^ c >>> 16, -2048144789);
  c = cljs.core.imul(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
};
cljs.core.m3_hash_int = function(a) {
  if (0 === a) {
    return a;
  }
  a = cljs.core.m3_mix_K1(a);
  a = cljs.core.m3_mix_H1(cljs.core.m3_seed, a);
  return cljs.core.m3_fmix(a, 4);
};
cljs.core.m3_hash_unencoded_chars = function(a) {
  a: {
    var b = 1;
    for (var c = cljs.core.m3_seed;;) {
      if (b < a.length) {
        var d = b + 2;
        c = cljs.core.m3_mix_H1(c, cljs.core.m3_mix_K1(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ cljs.core.m3_mix_K1(a.charCodeAt(a.length - 1)) : b;
  return cljs.core.m3_fmix(b, cljs.core.imul(2, a.length));
};
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.hash_string_STAR_ = function(a) {
  if (null != a) {
    var b = a.length;
    if (0 < b) {
      for (var c = 0, d = 0;;) {
        if (c < b) {
          var e = c + 1;
          d = cljs.core.imul(31, d) + a.charCodeAt(c);
          c = e;
        } else {
          return d;
        }
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};
cljs.core.add_to_string_hash_cache = function(a) {
  var b = cljs.core.hash_string_STAR_(a);
  goog.object.set(cljs.core.string_hash_cache, a, b);
  cljs.core.string_hash_cache_count += 1;
  return b;
};
cljs.core.hash_string = function(a) {
  255 < cljs.core.string_hash_cache_count && (cljs.core.string_hash_cache = {}, cljs.core.string_hash_cache_count = 0);
  if (null == a) {
    return 0;
  }
  var b = cljs.core.string_hash_cache[a];
  return "number" === typeof b ? b : cljs.core.add_to_string_hash_cache(a);
};
cljs.core.hash = function(a) {
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 4194304 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IHash$)) {
    return a.cljs$core$IHash$_hash$arity$1(null) ^ 0;
  }
  if ("number" === typeof a) {
    if (cljs.core.truth_(isFinite(a))) {
      return Math.floor(a) % 2147483647;
    }
    switch(a) {
      case Infinity:
        return 2146435072;
      case -Infinity:
        return -1048576;
      default:
        return 2146959360;
    }
  } else {
    return !0 === a ? 1231 : !1 === a ? 1237 : "string" === typeof a ? cljs.core.m3_hash_int(cljs.core.hash_string(a)) : a instanceof Date ? a.valueOf() ^ 0 : null == a ? 0 : cljs.core._hash(a) ^ 0;
  }
};
cljs.core.hash_combine = function(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
};
cljs.core.instance_QMARK_ = function(a, b) {
  return b instanceof a;
};
cljs.core.symbol_QMARK_ = function(a) {
  return a instanceof cljs.core.Symbol;
};
cljs.core.hash_symbol = function(a) {
  return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(a.name), cljs.core.hash_string(a.ns));
};
cljs.core.compare_symbols = function(a, b) {
  if (a.str === b.str) {
    return 0;
  }
  if (cljs.core.truth_(function() {
    var c = cljs.core.not(a.ns);
    return c ? b.ns : c;
  }())) {
    return -1;
  }
  if (cljs.core.truth_(a.ns)) {
    if (cljs.core.not(b.ns)) {
      return 1;
    }
    var c = goog.array.defaultCompare(a.ns, b.ns);
    return 0 === c ? goog.array.defaultCompare(a.name, b.name) : c;
  }
  return goog.array.defaultCompare(a.name, b.name);
};
cljs.core.Symbol = function(a, b, c, d, e) {
  this.ns = a;
  this.name = b;
  this.str = c;
  this._hash = d;
  this._meta = e;
  this.cljs$lang$protocol_mask$partition0$ = 2154168321;
  this.cljs$lang$protocol_mask$partition1$ = 4096;
};
cljs.core.Symbol.prototype.toString = function() {
  return this.str;
};
cljs.core.Symbol.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return b instanceof cljs.core.Symbol ? this.str === b.str : !1;
};
cljs.core.Symbol.prototype.call = function() {
  var a = null, b = function(a, b) {
    return cljs.core.get.cljs$core$IFn$_invoke$arity$2(b, this);
  }, c = function(a, b, c) {
    return cljs.core.get.cljs$core$IFn$_invoke$arity$3(b, this, c);
  };
  a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = b;
  a.cljs$core$IFn$_invoke$arity$3 = c;
  return a;
}();
cljs.core.Symbol.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, this);
};
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.get.cljs$core$IFn$_invoke$arity$3(a, this, b);
};
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this._meta;
};
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Symbol(this.ns, this.name, this.str, this._hash, b);
};
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this._hash;
  return null != a ? a : this._hash = a = cljs.core.hash_symbol(this);
};
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = function(a) {
  return this.name;
};
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = function(a) {
  return this.ns;
};
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core._write(b, this.str);
};
cljs.core.Symbol.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "ns", "ns", 2082130287, null), new cljs.core.Symbol(null, "name", "name", -810760592, null), new cljs.core.Symbol(null, "str", "str", -1564826950, null), cljs.core.with_meta(new cljs.core.Symbol(null, "_hash", "_hash", -2130838312, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, 
  "_meta", "_meta", -1716892533, null)], null);
};
cljs.core.Symbol.cljs$lang$type = !0;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Symbol");
};
cljs.core.__GT_Symbol = function(a, b, c, d, e) {
  return new cljs.core.Symbol(a, b, c, d, e);
};
cljs.core.symbol = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.symbol.cljs$core$IFn$_invoke$arity$1 = function(a) {
  if (a instanceof cljs.core.Symbol) {
    return a;
  }
  var b = a.indexOf("/");
  return 1 > b ? cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null, a) : cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(a.substring(0, b), a.substring(b + 1, a.length));
};
cljs.core.symbol.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = null != a ? [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "/", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join("") : b;
  return new cljs.core.Symbol(a, b, c, null, null);
};
cljs.core.symbol.cljs$lang$maxFixedArity = 2;
cljs.core.Var = function(a, b, c) {
  this.val = a;
  this.sym = b;
  this._meta = c;
  this.cljs$lang$protocol_mask$partition0$ = 6717441;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.Var.prototype.isMacro = function() {
  return (this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null)).cljs$lang$macro;
};
cljs.core.Var.prototype.toString = function() {
  return ["#'", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.sym)].join("");
};
cljs.core.Var.prototype.cljs$core$IDeref$_deref$arity$1 = function(a) {
  return this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
};
cljs.core.Var.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this._meta;
};
cljs.core.Var.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Var(this.val, this.sym, b);
};
cljs.core.Var.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return b instanceof cljs.core.Var ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.sym, b.sym) : !1;
};
cljs.core.Var.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_symbol(this.sym);
};
cljs.core.Var.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Var.prototype.call = function() {
  var a = null, b = function(a) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
  }, c = function(a, b) {
    a = this;
    var c = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(b) : c.call(null, b);
  }, d = function(a, b, c) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
  }, e = function(a, b, c, d) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.call(null, b, c, d);
  }, f = function(a, b, c, d, e) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$4 ? a.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : a.call(null, b, c, d, e);
  }, g = function(a, b, c, d, e, f) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$5 ? a.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f) : a.call(null, b, c, d, e, f);
  }, h = function(a, b, c, d, e, f, g) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$6 ? a.cljs$core$IFn$_invoke$arity$6(b, c, d, e, f, g) : a.call(null, b, c, d, e, f, g);
  }, k = function(a, b, c, d, e, f, g, h) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$7 ? a.cljs$core$IFn$_invoke$arity$7(b, c, d, e, f, g, h) : a.call(null, b, c, d, e, f, g, h);
  }, l = function(a, b, c, d, e, f, g, h, k) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$8 ? a.cljs$core$IFn$_invoke$arity$8(b, c, d, e, f, g, h, k) : a.call(null, b, c, d, e, f, g, h, k);
  }, m = function(a, b, c, d, e, f, g, h, k, l) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$9 ? a.cljs$core$IFn$_invoke$arity$9(b, c, d, e, f, g, h, k, l) : a.call(null, b, c, d, e, f, g, h, k, l);
  }, n = function(a, b, c, d, e, f, g, h, k, l, m) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$10 ? a.cljs$core$IFn$_invoke$arity$10(b, c, d, e, f, g, h, k, l, m) : a.call(null, b, c, d, e, f, g, h, k, l, m);
  }, p = function(a, b, c, d, e, f, g, h, k, l, m, n) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$11 ? a.cljs$core$IFn$_invoke$arity$11(b, c, d, e, f, g, h, k, l, m, n) : a.call(null, b, c, d, e, f, g, h, k, l, m, n);
  }, q = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$12 ? a.cljs$core$IFn$_invoke$arity$12(b, c, d, e, f, g, h, k, l, m, n, p) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p);
  }, r = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$13 ? a.cljs$core$IFn$_invoke$arity$13(b, c, d, e, f, g, h, k, l, m, n, p, q) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q);
  }, t = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$14 ? a.cljs$core$IFn$_invoke$arity$14(b, c, d, e, f, g, h, k, l, m, n, p, q, r) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
  }, u = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$15 ? a.cljs$core$IFn$_invoke$arity$15(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
  }, v = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$16 ? a.cljs$core$IFn$_invoke$arity$16(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
  }, w = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$17 ? a.cljs$core$IFn$_invoke$arity$17(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
  }, x = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$18 ? a.cljs$core$IFn$_invoke$arity$18(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
  }, y = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$19 ? a.cljs$core$IFn$_invoke$arity$19(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }, E = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) {
    a = this;
    a = a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null);
    return a.cljs$core$IFn$_invoke$arity$20 ? a.cljs$core$IFn$_invoke$arity$20(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : a.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }, O = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E) {
    a = this;
    return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(a.val.cljs$core$IFn$_invoke$arity$0 ? a.val.cljs$core$IFn$_invoke$arity$0() : a.val.call(null), b, c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E], 0));
  };
  a = function(a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U, V) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, z);
      case 3:
        return d.call(this, a, z, A);
      case 4:
        return e.call(this, a, z, A, B);
      case 5:
        return f.call(this, a, z, A, B, C);
      case 6:
        return g.call(this, a, z, A, B, C, D);
      case 7:
        return h.call(this, a, z, A, B, C, D, F);
      case 8:
        return k.call(this, a, z, A, B, C, D, F, G);
      case 9:
        return l.call(this, a, z, A, B, C, D, F, G, H);
      case 10:
        return m.call(this, a, z, A, B, C, D, F, G, H, I);
      case 11:
        return n.call(this, a, z, A, B, C, D, F, G, H, I, J);
      case 12:
        return p.call(this, a, z, A, B, C, D, F, G, H, I, J, K);
      case 13:
        return q.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L);
      case 14:
        return r.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M);
      case 15:
        return t.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N);
      case 16:
        return u.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P);
      case 17:
        return v.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q);
      case 18:
        return w.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R);
      case 19:
        return x.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S);
      case 20:
        return y.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T);
      case 21:
        return E.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U);
      case 22:
        return O.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U, V);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  a.cljs$core$IFn$_invoke$arity$3 = d;
  a.cljs$core$IFn$_invoke$arity$4 = e;
  a.cljs$core$IFn$_invoke$arity$5 = f;
  a.cljs$core$IFn$_invoke$arity$6 = g;
  a.cljs$core$IFn$_invoke$arity$7 = h;
  a.cljs$core$IFn$_invoke$arity$8 = k;
  a.cljs$core$IFn$_invoke$arity$9 = l;
  a.cljs$core$IFn$_invoke$arity$10 = m;
  a.cljs$core$IFn$_invoke$arity$11 = n;
  a.cljs$core$IFn$_invoke$arity$12 = p;
  a.cljs$core$IFn$_invoke$arity$13 = q;
  a.cljs$core$IFn$_invoke$arity$14 = r;
  a.cljs$core$IFn$_invoke$arity$15 = t;
  a.cljs$core$IFn$_invoke$arity$16 = u;
  a.cljs$core$IFn$_invoke$arity$17 = v;
  a.cljs$core$IFn$_invoke$arity$18 = w;
  a.cljs$core$IFn$_invoke$arity$19 = x;
  a.cljs$core$IFn$_invoke$arity$20 = y;
  a.cljs$core$IFn$_invoke$arity$21 = E;
  a.cljs$core$IFn$_invoke$arity$22 = O;
  return a;
}();
cljs.core.Var.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$0 = function() {
  var a = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  var b = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  var e = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return e.cljs$core$IFn$_invoke$arity$4 ? e.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : e.call(null, a, b, c, d);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  var f = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : f.call(null, a, b, c, d, e);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  var g = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return g.cljs$core$IFn$_invoke$arity$6 ? g.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f) : g.call(null, a, b, c, d, e, f);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$7 = function(a, b, c, d, e, f, g) {
  var h = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return h.cljs$core$IFn$_invoke$arity$7 ? h.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g) : h.call(null, a, b, c, d, e, f, g);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$8 = function(a, b, c, d, e, f, g, h) {
  var k = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return k.cljs$core$IFn$_invoke$arity$8 ? k.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h) : k.call(null, a, b, c, d, e, f, g, h);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$9 = function(a, b, c, d, e, f, g, h, k) {
  var l = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return l.cljs$core$IFn$_invoke$arity$9 ? l.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, k) : l.call(null, a, b, c, d, e, f, g, h, k);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$10 = function(a, b, c, d, e, f, g, h, k, l) {
  var m = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return m.cljs$core$IFn$_invoke$arity$10 ? m.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, k, l) : m.call(null, a, b, c, d, e, f, g, h, k, l);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$11 = function(a, b, c, d, e, f, g, h, k, l, m) {
  var n = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return n.cljs$core$IFn$_invoke$arity$11 ? n.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, k, l, m) : n.call(null, a, b, c, d, e, f, g, h, k, l, m);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$12 = function(a, b, c, d, e, f, g, h, k, l, m, n) {
  var p = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return p.cljs$core$IFn$_invoke$arity$12 ? p.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, k, l, m, n) : p.call(null, a, b, c, d, e, f, g, h, k, l, m, n);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$13 = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
  var q = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return q.cljs$core$IFn$_invoke$arity$13 ? q.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, k, l, m, n, p) : q.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$14 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
  var r = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return r.cljs$core$IFn$_invoke$arity$14 ? r.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, k, l, m, n, p, q) : r.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$15 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
  var t = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return t.cljs$core$IFn$_invoke$arity$15 ? t.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) : t.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$16 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) {
  var u = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return u.cljs$core$IFn$_invoke$arity$16 ? u.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : u.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$17 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) {
  var v = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return v.cljs$core$IFn$_invoke$arity$17 ? v.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : v.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$18 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) {
  var w = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return w.cljs$core$IFn$_invoke$arity$18 ? w.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : w.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$19 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) {
  var x = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return x.cljs$core$IFn$_invoke$arity$19 ? x.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : x.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$20 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) {
  var y = this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null);
  return y.cljs$core$IFn$_invoke$arity$20 ? y.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : y.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
};
cljs.core.Var.prototype.cljs$core$IFn$_invoke$arity$21 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(this.val.cljs$core$IFn$_invoke$arity$0 ? this.val.cljs$core$IFn$_invoke$arity$0() : this.val.call(null), a, b, c, d, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y], 0));
};
cljs.core.Var.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "val", "val", 1769233139, null), new cljs.core.Symbol(null, "sym", "sym", 195671222, null), new cljs.core.Symbol(null, "_meta", "_meta", -1716892533, null)], null);
};
cljs.core.Var.cljs$lang$type = !0;
cljs.core.Var.cljs$lang$ctorStr = "cljs.core/Var";
cljs.core.Var.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Var");
};
cljs.core.__GT_Var = function(a, b, c) {
  return new cljs.core.Var(a, b, c);
};
cljs.core.var_QMARK_ = function(a) {
  return a instanceof cljs.core.Var;
};
cljs.core.iterable_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition1$ & 131072 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IIterable$ ? !0 : a.cljs$lang$protocol_mask$partition1$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IIterable, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IIterable, a);
};
cljs.core.clone = function(a) {
  return cljs.core._clone(a);
};
cljs.core.cloneable_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition1$ & 8192 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ICloneable$ ? !0 : a.cljs$lang$protocol_mask$partition1$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable, a);
};
cljs.core.seq = function(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 8388608 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeqable$)) {
    return a.cljs$core$ISeqable$_seq$arity$1(null);
  }
  if (cljs.core.array_QMARK_(a) || "string" === typeof a) {
    return 0 === a.length ? null : new cljs.core.IndexedSeq(a, 0, null);
  }
  if (cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable, a)) {
    return cljs.core._seq(a);
  }
  throw Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), " is not ISeqable"].join(""));
};
cljs.core.first = function(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$)) {
    return a.cljs$core$ISeq$_first$arity$1(null);
  }
  a = cljs.core.seq(a);
  return null == a ? null : cljs.core._first(a);
};
cljs.core.rest = function(a) {
  return null != a ? null != a && (a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$) ? a.cljs$core$ISeq$_rest$arity$1(null) : (a = cljs.core.seq(a)) ? cljs.core._rest(a) : cljs.core.List.EMPTY : cljs.core.List.EMPTY;
};
cljs.core.next = function(a) {
  return null == a ? null : null != a && (a.cljs$lang$protocol_mask$partition0$ & 128 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$INext$) ? a.cljs$core$INext$_next$arity$1(null) : cljs.core.seq(cljs.core.rest(a));
};
cljs.core._EQ_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !0;
};
cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null == a ? null == b : a === b || cljs.core._equiv(a, b);
};
cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a, b)) {
      if (cljs.core.next(c)) {
        a = b, b = cljs.core.first(c), c = cljs.core.next(c);
      } else {
        return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b, cljs.core.first(c));
      }
    } else {
      return !1;
    }
  }
};
cljs.core._EQ_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._EQ_.cljs$lang$maxFixedArity = 2;
cljs.core.ES6Iterator = function(a) {
  this.s = a;
};
cljs.core.ES6Iterator.prototype.next = function() {
  if (null != this.s) {
    var a = cljs.core.first(this.s);
    this.s = cljs.core.next(this.s);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
cljs.core.ES6Iterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "s", "s", -948495851, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ES6Iterator.cljs$lang$type = !0;
cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";
cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ES6Iterator");
};
cljs.core.__GT_ES6Iterator = function(a) {
  return new cljs.core.ES6Iterator(a);
};
cljs.core.es6_iterator = function(a) {
  return new cljs.core.ES6Iterator(cljs.core.seq(a));
};
cljs.core.ES6IteratorSeq = function(a, b, c) {
  this.value = a;
  this.iter = b;
  this._rest = c;
  this.cljs$lang$protocol_mask$partition0$ = 8388672;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return this.value;
};
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  null == this._rest && (this._rest = cljs.core.es6_iterator_seq(this.iter));
  return this._rest;
};
cljs.core.ES6IteratorSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "value", "value", 1946509744, null), new cljs.core.Symbol(null, "iter", "iter", -1346195486, null), cljs.core.with_meta(new cljs.core.Symbol(null, "_rest", "_rest", -2100466189, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ES6IteratorSeq.cljs$lang$type = !0;
cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";
cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ES6IteratorSeq");
};
cljs.core.__GT_ES6IteratorSeq = function(a, b, c) {
  return new cljs.core.ES6IteratorSeq(a, b, c);
};
cljs.core.es6_iterator_seq = function(a) {
  var b = a.next();
  return cljs.core.truth_(b.done) ? cljs.core.List.EMPTY : new cljs.core.ES6IteratorSeq(b.value, a, null);
};
cljs.core.mix_collection_hash = function(a, b) {
  var c = cljs.core.m3_seed, d = cljs.core.m3_mix_K1(a);
  c = cljs.core.m3_mix_H1(c, d);
  return cljs.core.m3_fmix(c, b);
};
cljs.core.hash_ordered_coll = function(a) {
  var b = 0, c = 1;
  for (a = cljs.core.seq(a);;) {
    if (null != a) {
      b += 1, c = cljs.core.imul(31, c) + cljs.core.hash(cljs.core.first(a)) | 0, a = cljs.core.next(a);
    } else {
      return cljs.core.mix_collection_hash(c, b);
    }
  }
};
cljs.core.empty_ordered_hash = cljs.core.mix_collection_hash(1, 0);
cljs.core.hash_unordered_coll = function(a) {
  var b = 0, c = 0;
  for (a = cljs.core.seq(a);;) {
    if (null != a) {
      b += 1, c = c + cljs.core.hash(cljs.core.first(a)) | 0, a = cljs.core.next(a);
    } else {
      return cljs.core.mix_collection_hash(c, b);
    }
  }
};
cljs.core.empty_unordered_hash = cljs.core.mix_collection_hash(0, 0);
goog.object.set(cljs.core.ICounted, "null", !0);
var G__13628_13631 = cljs.core._count, G__13629_13632 = "null", G__13630_13633 = function(a, b) {
  return function(a) {
    return 0;
  };
}(G__13628_13631, G__13629_13632);
goog.object.set(G__13628_13631, G__13629_13632, G__13630_13633);
Date.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
Date.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (b instanceof Date) {
    return goog.array.defaultCompare(this.valueOf(), b.valueOf());
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.Inst = function() {
};
cljs.core.inst_ms_STAR_ = function(a) {
  if (null != a && null != a.cljs$core$Inst$inst_ms_STAR_$arity$1) {
    return a.cljs$core$Inst$inst_ms_STAR_$arity$1(a);
  }
  var b = cljs.core.inst_ms_STAR_[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core.inst_ms_STAR_._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("Inst.inst-ms*", a);
};
Date.prototype.cljs$core$Inst$ = cljs.core.PROTOCOL_SENTINEL;
Date.prototype.cljs$core$Inst$inst_ms_STAR_$arity$1 = function(a) {
  return this.getTime();
};
cljs.core.inst_ms = function(a) {
  return cljs.core.inst_ms_STAR_(a);
};
cljs.core.inst_QMARK_ = function(a) {
  return null != a ? cljs.core.PROTOCOL_SENTINEL === a.cljs$core$Inst$ ? !0 : a.cljs$lang$protocol_mask$partition$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.Inst, a) : cljs.core.native_satisfies_QMARK_(cljs.core.Inst, a);
};
goog.object.set(cljs.core.IEquiv, "number", !0);
var G__13637_13640 = cljs.core._equiv, G__13638_13641 = "number", G__13639_13642 = function(a, b) {
  return function(a, b) {
    return a === b;
  };
}(G__13637_13640, G__13638_13641);
goog.object.set(G__13637_13640, G__13638_13641, G__13639_13642);
goog.object.set(cljs.core.Fn, "function", !0);
goog.object.set(cljs.core.IMeta, "function", !0);
var G__13643_13646 = cljs.core._meta, G__13644_13647 = "function", G__13645_13648 = function(a, b) {
  return function(a) {
    return null;
  };
}(G__13643_13646, G__13644_13647);
goog.object.set(G__13643_13646, G__13644_13647, G__13645_13648);
goog.object.set(cljs.core.IHash, "_", !0);
var G__13649_13652 = cljs.core._hash, G__13650_13653 = "_", G__13651_13654 = function(a, b) {
  return function(a) {
    return goog.getUid(a);
  };
}(G__13649_13652, G__13650_13653);
goog.object.set(G__13649_13652, G__13650_13653, G__13651_13654);
cljs.core.inc = function(a) {
  return a + 1;
};
cljs.core.Reduced = function(a) {
  this.val = a;
  this.cljs$lang$protocol_mask$partition0$ = 32768;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = function(a) {
  return this.val;
};
cljs.core.Reduced.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "val", "val", 1769233139, null)], null);
};
cljs.core.Reduced.cljs$lang$type = !0;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Reduced");
};
cljs.core.__GT_Reduced = function(a) {
  return new cljs.core.Reduced(a);
};
cljs.core.reduced = function(a) {
  return new cljs.core.Reduced(a);
};
cljs.core.reduced_QMARK_ = function(a) {
  return a instanceof cljs.core.Reduced;
};
cljs.core.ensure_reduced = function(a) {
  return cljs.core.reduced_QMARK_(a) ? a : cljs.core.reduced(a);
};
cljs.core.unreduced = function(a) {
  return cljs.core.reduced_QMARK_(a) ? cljs.core.deref(a) : a;
};
cljs.core.deref = function(a) {
  return cljs.core._deref(a);
};
cljs.core.ci_reduce = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = cljs.core._count(a);
  if (0 === c) {
    return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
  }
  for (var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(a, 0), e = 1;;) {
    if (e < c) {
      var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(a, e);
      d = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, f) : b.call(null, d, f);
      if (cljs.core.reduced_QMARK_(d)) {
        return cljs.core.deref(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
};
cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = cljs.core._count(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(a, c);
      e = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(e, f) : b.call(null, e, f);
      if (cljs.core.reduced_QMARK_(e)) {
        return cljs.core.deref(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
};
cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  for (var e = cljs.core._count(a);;) {
    if (d < e) {
      var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(a, d);
      c = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, f) : b.call(null, c, f);
      if (cljs.core.reduced_QMARK_(c)) {
        return cljs.core.deref(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
};
cljs.core.ci_reduce.cljs$lang$maxFixedArity = 4;
cljs.core.array_reduce = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e];
      d = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, f) : b.call(null, d, f);
      if (cljs.core.reduced_QMARK_(d)) {
        return cljs.core.deref(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
};
cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c];
      e = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(e, f) : b.call(null, e, f);
      if (cljs.core.reduced_QMARK_(e)) {
        return cljs.core.deref(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
};
cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, f) : b.call(null, c, f);
      if (cljs.core.reduced_QMARK_(c)) {
        return cljs.core.deref(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
};
cljs.core.array_reduce.cljs$lang$maxFixedArity = 4;
cljs.core.counted_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 2 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ICounted$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ICounted, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ICounted, a);
};
cljs.core.indexed_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 16 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IIndexed$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed, a);
};
cljs.core._indexOf = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(a, b, 0);
};
cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = cljs.core.count(a);
  if (c >= d) {
    return -1;
  }
  !(0 < c) && 0 > c && (c += d, c = 0 > c ? 0 : c);
  for (;;) {
    if (c < d) {
      if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a, c), b)) {
        return c;
      }
      c += 1;
    } else {
      return -1;
    }
  }
};
cljs.core._indexOf.cljs$lang$maxFixedArity = 3;
cljs.core._lastIndexOf = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.count(a));
};
cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = cljs.core.count(a);
  if (0 === d) {
    return -1;
  }
  0 < c ? (--d, c = d < c ? d : c) : c = 0 > c ? d + c : c;
  for (;;) {
    if (0 <= c) {
      if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a, c), b)) {
        return c;
      }
      --c;
    } else {
      return -1;
    }
  }
};
cljs.core._lastIndexOf.cljs$lang$maxFixedArity = 3;
cljs.core.IndexedSeqIterator = function(a, b) {
  this.arr = a;
  this.i = b;
};
cljs.core.IndexedSeqIterator.prototype.hasNext = function() {
  return this.i < this.arr.length;
};
cljs.core.IndexedSeqIterator.prototype.next = function() {
  var a = this.arr[this.i];
  this.i += 1;
  return a;
};
cljs.core.IndexedSeqIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.IndexedSeqIterator.cljs$lang$type = !0;
cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";
cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/IndexedSeqIterator");
};
cljs.core.__GT_IndexedSeqIterator = function(a, b) {
  return new cljs.core.IndexedSeqIterator(a, b);
};
cljs.core.IndexedSeq = function(a, b, c) {
  this.arr = a;
  this.i = b;
  this.meta = c;
  this.cljs$lang$protocol_mask$partition0$ = 166592766;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
cljs.core.IndexedSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.IndexedSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.IndexedSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.IndexedSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  var c = b + this.i;
  if (0 <= c && c < this.arr.length) {
    return this.arr[c];
  }
  throw Error("Index out of bounds");
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  a = b + this.i;
  return 0 <= a && a < this.arr.length ? this.arr[a] : c;
};
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.IndexedSeqIterator(this.arr, this.i);
};
cljs.core.IndexedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.IndexedSeq(this.arr, this.i, this.meta);
};
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return this.i + 1 < this.arr.length ? new cljs.core.IndexedSeq(this.arr, this.i + 1, null) : null;
};
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  a = this.arr.length - this.i;
  return 0 > a ? 0 : a;
};
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = function(a) {
  a = this.cljs$core$ICounted$_count$arity$1(null);
  return 0 < a ? new cljs.core.RSeq(this, a - 1, null) : null;
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_ordered_coll(this);
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core.List.EMPTY;
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(this.arr, b, this.arr[this.i], this.i + 1);
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(this.arr, b, c, this.i);
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return this.arr[this.i];
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return this.i + 1 < this.arr.length ? new cljs.core.IndexedSeq(this.arr, this.i + 1, null) : cljs.core.List.EMPTY;
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this.i < this.arr.length ? this : null;
};
cljs.core.IndexedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.IndexedSeq(this.arr, this.i, b);
};
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.IndexedSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.Symbol(null, "meta", "meta", -1154898805, null)], null);
};
cljs.core.IndexedSeq.cljs$lang$type = !0;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/IndexedSeq");
};
cljs.core.__GT_IndexedSeq = function(a, b, c) {
  return new cljs.core.IndexedSeq(a, b, c);
};
var G__13697_13700 = cljs.core.IndexedSeq.prototype, G__13698_13701 = cljs.core.ITER_SYMBOL, G__13699_13702 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__13697_13700, G__13698_13701);
goog.object.set(G__13697_13700, G__13698_13701, G__13699_13702);
cljs.core.prim_seq = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(a, 0);
};
cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return b < a.length ? new cljs.core.IndexedSeq(a, b, null) : null;
};
cljs.core.prim_seq.cljs$lang$maxFixedArity = 2;
cljs.core.array_seq = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(a, 0);
};
cljs.core.array_seq.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(a, b);
};
cljs.core.array_seq.cljs$lang$maxFixedArity = 2;
cljs.core.RSeq = function(a, b, c) {
  this.ci = a;
  this.i = b;
  this.meta = c;
  this.cljs$lang$protocol_mask$partition0$ = 32374990;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs.core.RSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.RSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.RSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.RSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.RSeq(this.ci, this.i, this.meta);
};
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return 0 < this.i ? new cljs.core.RSeq(this.ci, this.i - 1, null) : null;
};
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.i + 1;
};
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_ordered_coll(this);
};
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(this.ci, this.i);
};
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return 0 < this.i ? new cljs.core.RSeq(this.ci, this.i - 1, null) : cljs.core.List.EMPTY;
};
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.RSeq(this.ci, this.i, b);
};
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.RSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "ci", "ci", 2049808339, null), new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.Symbol(null, "meta", "meta", -1154898805, null)], null);
};
cljs.core.RSeq.cljs$lang$type = !0;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/RSeq");
};
cljs.core.__GT_RSeq = function(a, b, c) {
  return new cljs.core.RSeq(a, b, c);
};
var G__13711_13714 = cljs.core.RSeq.prototype, G__13712_13715 = cljs.core.ITER_SYMBOL, G__13713_13716 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__13711_13714, G__13712_13715);
goog.object.set(G__13711_13714, G__13712_13715, G__13713_13716);
cljs.core.second = function(a) {
  return cljs.core.first(cljs.core.next(a));
};
cljs.core.ffirst = function(a) {
  return cljs.core.first(cljs.core.first(a));
};
cljs.core.nfirst = function(a) {
  return cljs.core.next(cljs.core.first(a));
};
cljs.core.fnext = function(a) {
  return cljs.core.first(cljs.core.next(a));
};
cljs.core.nnext = function(a) {
  return cljs.core.next(cljs.core.next(a));
};
cljs.core.last = function(a) {
  for (;;) {
    var b = cljs.core.next(a);
    if (null != b) {
      a = b;
    } else {
      return cljs.core.first(a);
    }
  }
};
goog.object.set(cljs.core.IEquiv, "_", !0);
var G__13718_13721 = cljs.core._equiv, G__13719_13722 = "_", G__13720_13723 = function(a, b) {
  return function(a, b) {
    return a === b;
  };
}(G__13718_13721, G__13719_13722);
goog.object.set(G__13718_13721, G__13719_13722, G__13720_13723);
cljs.core.conj = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.conj.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.conj.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.conj.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.PersistentVector.EMPTY;
};
cljs.core.conj.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.conj.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null != a ? cljs.core._conj(a, b) : cljs.core._conj(cljs.core.List.EMPTY, b);
};
cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (cljs.core.truth_(c)) {
      a = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, b), b = cljs.core.first(c), c = cljs.core.next(c);
    } else {
      return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, b);
    }
  }
};
cljs.core.conj.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.conj.cljs$lang$maxFixedArity = 2;
cljs.core.empty = function(a) {
  return null == a ? null : cljs.core._empty(a);
};
cljs.core.accumulating_seq_count = function(a) {
  a = cljs.core.seq(a);
  for (var b = 0;;) {
    if (cljs.core.counted_QMARK_(a)) {
      return b + cljs.core._count(a);
    }
    a = cljs.core.next(a);
    b += 1;
  }
};
cljs.core.count = function(a) {
  return null != a ? null != a && (a.cljs$lang$protocol_mask$partition0$ & 2 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ICounted$) ? a.cljs$core$ICounted$_count$arity$1(null) : cljs.core.array_QMARK_(a) ? a.length : "string" === typeof a ? a.length : null != a && (a.cljs$lang$protocol_mask$partition0$ & 8388608 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeqable$) ? cljs.core.accumulating_seq_count(a) : cljs.core._count(a) : 0;
};
cljs.core.linear_traversal_nth = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  for (;;) {
    if (null == a) {
      throw Error("Index out of bounds");
    }
    if (0 === b) {
      if (cljs.core.seq(a)) {
        return cljs.core.first(a);
      }
      throw Error("Index out of bounds");
    }
    if (cljs.core.indexed_QMARK_(a)) {
      return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(a, b);
    }
    if (cljs.core.seq(a)) {
      var c = cljs.core.next(a), d = b - 1;
      a = c;
      b = d;
    } else {
      throw Error("Index out of bounds");
    }
  }
};
cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return cljs.core.seq(a) ? cljs.core.first(a) : c;
    }
    if (cljs.core.indexed_QMARK_(a)) {
      return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(a, b, c);
    }
    if (cljs.core.seq(a)) {
      a = cljs.core.next(a), --b;
    } else {
      return c;
    }
  }
};
cljs.core.linear_traversal_nth.cljs$lang$maxFixedArity = 3;
cljs.core.nth = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.nth.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if ("number" !== typeof b) {
    throw Error("Index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 16 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IIndexed$)) {
    return a.cljs$core$IIndexed$_nth$arity$2(null, b);
  }
  if (cljs.core.array_QMARK_(a)) {
    if (0 <= b && b < a.length) {
      return a[b];
    }
    throw Error("Index out of bounds");
  }
  if ("string" === typeof a) {
    if (0 <= b && b < a.length) {
      return a.charAt(b);
    }
    throw Error("Index out of bounds");
  }
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$)) {
    return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(a, b);
  }
  if (cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed, a)) {
    return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(a, b);
  }
  throw Error(["nth not supported on this type ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(a)))].join(""));
};
cljs.core.nth.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if ("number" !== typeof b) {
    throw Error("Index argument to nth must be a number.");
  }
  if (null == a) {
    return c;
  }
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 16 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IIndexed$)) {
    return a.cljs$core$IIndexed$_nth$arity$3(null, b, c);
  }
  if (cljs.core.array_QMARK_(a)) {
    return 0 <= b && b < a.length ? a[b] : c;
  }
  if ("string" === typeof a) {
    return 0 <= b && b < a.length ? a.charAt(b) : c;
  }
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$)) {
    return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(a, b, c);
  }
  if (cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed, a)) {
    return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(a, b, c);
  }
  throw Error(["nth not supported on this type ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(a)))].join(""));
};
cljs.core.nth.cljs$lang$maxFixedArity = 3;
cljs.core.nthrest = function(a, b) {
  for (var c = b, d = a;;) {
    if (0 < c && cljs.core.seq(d)) {
      --c, d = cljs.core.rest(d);
    } else {
      return d;
    }
  }
};
cljs.core.get = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.get.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.get.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.get.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null == a ? null : null != a && (a.cljs$lang$protocol_mask$partition0$ & 256 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ILookup$) ? a.cljs$core$ILookup$_lookup$arity$2(null, b) : cljs.core.array_QMARK_(a) ? null != b && b < a.length ? a[b | 0] : null : "string" === typeof a ? null != b && b < a.length ? a.charAt(b | 0) : null : cljs.core.native_satisfies_QMARK_(cljs.core.ILookup, a) ? cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(a, b) : null;
};
cljs.core.get.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return null != a ? null != a && (a.cljs$lang$protocol_mask$partition0$ & 256 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ILookup$) ? a.cljs$core$ILookup$_lookup$arity$3(null, b, c) : cljs.core.array_QMARK_(a) ? null != b && 0 <= b && b < a.length ? a[b | 0] : c : "string" === typeof a ? null != b && 0 <= b && b < a.length ? a.charAt(b | 0) : c : cljs.core.native_satisfies_QMARK_(cljs.core.ILookup, a) ? cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(a, b, c) : c : c;
};
cljs.core.get.cljs$lang$maxFixedArity = 3;
cljs.core.assoc = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.assoc.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return null != a ? cljs.core._assoc(a, b, c) : cljs.core.PersistentArrayMap.createAsIfByAssoc([b, c]);
};
cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  for (;;) {
    if (a = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, c), cljs.core.truth_(d)) {
      b = cljs.core.first(d), c = cljs.core.second(d), d = cljs.core.nnext(d);
    } else {
      return a;
    }
  }
};
cljs.core.assoc.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.assoc.cljs$lang$maxFixedArity = 3;
cljs.core.dissoc = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null == a ? null : cljs.core._dissoc(a, b);
};
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(a, b);
    if (cljs.core.truth_(c)) {
      b = cljs.core.first(c), c = cljs.core.next(c);
    } else {
      return a;
    }
  }
};
cljs.core.dissoc.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.dissoc.cljs$lang$maxFixedArity = 2;
cljs.core.fn_QMARK_ = function(a) {
  var b = goog.isFunction(a);
  return b ? b : null != a ? cljs.core.PROTOCOL_SENTINEL === a.cljs$core$Fn$ ? !0 : a.cljs$lang$protocol_mask$partition$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.Fn, a) : cljs.core.native_satisfies_QMARK_(cljs.core.Fn, a);
};
cljs.core.MetaFn = function(a, b) {
  this.afn = a;
  this.meta = b;
  this.cljs$lang$protocol_mask$partition0$ = 393217;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.MetaFn(this.afn, b);
};
cljs.core.MetaFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.MetaFn.prototype.call = function() {
  var a = null, b = function(a) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$0 ? a.afn.cljs$core$IFn$_invoke$arity$0() : a.afn.call(null);
  }, c = function(a, b) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$1 ? a.afn.cljs$core$IFn$_invoke$arity$1(b) : a.afn.call(null, b);
  }, d = function(a, b, c) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$2 ? a.afn.cljs$core$IFn$_invoke$arity$2(b, c) : a.afn.call(null, b, c);
  }, e = function(a, b, c, d) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$3 ? a.afn.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.afn.call(null, b, c, d);
  }, f = function(a, b, c, d, e) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$4 ? a.afn.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : a.afn.call(null, b, c, d, e);
  }, g = function(a, b, c, d, e, f) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$5 ? a.afn.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f) : a.afn.call(null, b, c, d, e, f);
  }, h = function(a, b, c, d, e, f, g) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$6 ? a.afn.cljs$core$IFn$_invoke$arity$6(b, c, d, e, f, g) : a.afn.call(null, b, c, d, e, f, g);
  }, k = function(a, b, c, d, e, f, g, h) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$7 ? a.afn.cljs$core$IFn$_invoke$arity$7(b, c, d, e, f, g, h) : a.afn.call(null, b, c, d, e, f, g, h);
  }, l = function(a, b, c, d, e, f, g, h, k) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$8 ? a.afn.cljs$core$IFn$_invoke$arity$8(b, c, d, e, f, g, h, k) : a.afn.call(null, b, c, d, e, f, g, h, k);
  }, m = function(a, b, c, d, e, f, g, h, k, l) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$9 ? a.afn.cljs$core$IFn$_invoke$arity$9(b, c, d, e, f, g, h, k, l) : a.afn.call(null, b, c, d, e, f, g, h, k, l);
  }, n = function(a, b, c, d, e, f, g, h, k, l, m) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$10 ? a.afn.cljs$core$IFn$_invoke$arity$10(b, c, d, e, f, g, h, k, l, m) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m);
  }, p = function(a, b, c, d, e, f, g, h, k, l, m, n) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$11 ? a.afn.cljs$core$IFn$_invoke$arity$11(b, c, d, e, f, g, h, k, l, m, n) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n);
  }, q = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$12 ? a.afn.cljs$core$IFn$_invoke$arity$12(b, c, d, e, f, g, h, k, l, m, n, p) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p);
  }, r = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$13 ? a.afn.cljs$core$IFn$_invoke$arity$13(b, c, d, e, f, g, h, k, l, m, n, p, q) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q);
  }, t = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$14 ? a.afn.cljs$core$IFn$_invoke$arity$14(b, c, d, e, f, g, h, k, l, m, n, p, q, r) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
  }, u = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$15 ? a.afn.cljs$core$IFn$_invoke$arity$15(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
  }, v = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$16 ? a.afn.cljs$core$IFn$_invoke$arity$16(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
  }, w = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$17 ? a.afn.cljs$core$IFn$_invoke$arity$17(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
  }, x = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$18 ? a.afn.cljs$core$IFn$_invoke$arity$18(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
  }, y = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$19 ? a.afn.cljs$core$IFn$_invoke$arity$19(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }, E = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) {
    a = this;
    return a.afn.cljs$core$IFn$_invoke$arity$20 ? a.afn.cljs$core$IFn$_invoke$arity$20(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : a.afn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }, O = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E) {
    return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(this.afn, b, c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E], 0));
  };
  a = function(a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U, V) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, z);
      case 3:
        return d.call(this, a, z, A);
      case 4:
        return e.call(this, a, z, A, B);
      case 5:
        return f.call(this, a, z, A, B, C);
      case 6:
        return g.call(this, a, z, A, B, C, D);
      case 7:
        return h.call(this, a, z, A, B, C, D, F);
      case 8:
        return k.call(this, a, z, A, B, C, D, F, G);
      case 9:
        return l.call(this, a, z, A, B, C, D, F, G, H);
      case 10:
        return m.call(this, a, z, A, B, C, D, F, G, H, I);
      case 11:
        return n.call(this, a, z, A, B, C, D, F, G, H, I, J);
      case 12:
        return p.call(this, a, z, A, B, C, D, F, G, H, I, J, K);
      case 13:
        return q.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L);
      case 14:
        return r.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M);
      case 15:
        return t.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N);
      case 16:
        return u.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P);
      case 17:
        return v.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q);
      case 18:
        return w.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R);
      case 19:
        return x.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S);
      case 20:
        return y.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T);
      case 21:
        return E.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U);
      case 22:
        return O.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U, V);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  a.cljs$core$IFn$_invoke$arity$3 = d;
  a.cljs$core$IFn$_invoke$arity$4 = e;
  a.cljs$core$IFn$_invoke$arity$5 = f;
  a.cljs$core$IFn$_invoke$arity$6 = g;
  a.cljs$core$IFn$_invoke$arity$7 = h;
  a.cljs$core$IFn$_invoke$arity$8 = k;
  a.cljs$core$IFn$_invoke$arity$9 = l;
  a.cljs$core$IFn$_invoke$arity$10 = m;
  a.cljs$core$IFn$_invoke$arity$11 = n;
  a.cljs$core$IFn$_invoke$arity$12 = p;
  a.cljs$core$IFn$_invoke$arity$13 = q;
  a.cljs$core$IFn$_invoke$arity$14 = r;
  a.cljs$core$IFn$_invoke$arity$15 = t;
  a.cljs$core$IFn$_invoke$arity$16 = u;
  a.cljs$core$IFn$_invoke$arity$17 = v;
  a.cljs$core$IFn$_invoke$arity$18 = w;
  a.cljs$core$IFn$_invoke$arity$19 = x;
  a.cljs$core$IFn$_invoke$arity$20 = y;
  a.cljs$core$IFn$_invoke$arity$21 = E;
  a.cljs$core$IFn$_invoke$arity$22 = O;
  return a;
}();
cljs.core.MetaFn.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = function() {
  return this.afn.cljs$core$IFn$_invoke$arity$0 ? this.afn.cljs$core$IFn$_invoke$arity$0() : this.afn.call(null);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.afn.cljs$core$IFn$_invoke$arity$1 ? this.afn.cljs$core$IFn$_invoke$arity$1(a) : this.afn.call(null, a);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.afn.cljs$core$IFn$_invoke$arity$2 ? this.afn.cljs$core$IFn$_invoke$arity$2(a, b) : this.afn.call(null, a, b);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return this.afn.cljs$core$IFn$_invoke$arity$3 ? this.afn.cljs$core$IFn$_invoke$arity$3(a, b, c) : this.afn.call(null, a, b, c);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return this.afn.cljs$core$IFn$_invoke$arity$4 ? this.afn.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : this.afn.call(null, a, b, c, d);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return this.afn.cljs$core$IFn$_invoke$arity$5 ? this.afn.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : this.afn.call(null, a, b, c, d, e);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  return this.afn.cljs$core$IFn$_invoke$arity$6 ? this.afn.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f) : this.afn.call(null, a, b, c, d, e, f);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = function(a, b, c, d, e, f, g) {
  return this.afn.cljs$core$IFn$_invoke$arity$7 ? this.afn.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g) : this.afn.call(null, a, b, c, d, e, f, g);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = function(a, b, c, d, e, f, g, h) {
  return this.afn.cljs$core$IFn$_invoke$arity$8 ? this.afn.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h) : this.afn.call(null, a, b, c, d, e, f, g, h);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = function(a, b, c, d, e, f, g, h, k) {
  return this.afn.cljs$core$IFn$_invoke$arity$9 ? this.afn.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, k) : this.afn.call(null, a, b, c, d, e, f, g, h, k);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = function(a, b, c, d, e, f, g, h, k, l) {
  return this.afn.cljs$core$IFn$_invoke$arity$10 ? this.afn.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, k, l) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = function(a, b, c, d, e, f, g, h, k, l, m) {
  return this.afn.cljs$core$IFn$_invoke$arity$11 ? this.afn.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, k, l, m) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = function(a, b, c, d, e, f, g, h, k, l, m, n) {
  return this.afn.cljs$core$IFn$_invoke$arity$12 ? this.afn.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, k, l, m, n) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
  return this.afn.cljs$core$IFn$_invoke$arity$13 ? this.afn.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, k, l, m, n, p) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
  return this.afn.cljs$core$IFn$_invoke$arity$14 ? this.afn.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, k, l, m, n, p, q) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
  return this.afn.cljs$core$IFn$_invoke$arity$15 ? this.afn.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) {
  return this.afn.cljs$core$IFn$_invoke$arity$16 ? this.afn.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) {
  return this.afn.cljs$core$IFn$_invoke$arity$17 ? this.afn.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) {
  return this.afn.cljs$core$IFn$_invoke$arity$18 ? this.afn.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) {
  return this.afn.cljs$core$IFn$_invoke$arity$19 ? this.afn.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) {
  return this.afn.cljs$core$IFn$_invoke$arity$20 ? this.afn.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : this.afn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(this.afn, a, b, c, d, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y], 0));
};
cljs.core.MetaFn.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "afn", "afn", 216963467, null), new cljs.core.Symbol(null, "meta", "meta", -1154898805, null)], null);
};
cljs.core.MetaFn.cljs$lang$type = !0;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/MetaFn");
};
cljs.core.__GT_MetaFn = function(a, b) {
  return new cljs.core.MetaFn(a, b);
};
cljs.core.with_meta = function(a, b) {
  return goog.isFunction(a) ? new cljs.core.MetaFn(a, b) : null == a ? null : cljs.core._with_meta(a, b);
};
cljs.core.meta = function(a) {
  var b = null != a;
  return (b ? null != a ? a.cljs$lang$protocol_mask$partition0$ & 131072 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IMeta$ || (a.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IMeta, a)) : cljs.core.native_satisfies_QMARK_(cljs.core.IMeta, a) : b) ? cljs.core._meta(a) : null;
};
cljs.core.peek = function(a) {
  return null == a ? null : cljs.core._peek(a);
};
cljs.core.pop = function(a) {
  return null == a ? null : cljs.core._pop(a);
};
cljs.core.disj = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.disj.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.disj.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.disj.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null == a ? null : cljs.core._disjoin(a, b);
};
cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(a, b);
    if (cljs.core.truth_(c)) {
      b = cljs.core.first(c), c = cljs.core.next(c);
    } else {
      return a;
    }
  }
};
cljs.core.disj.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.disj.cljs$lang$maxFixedArity = 2;
cljs.core.empty_QMARK_ = function(a) {
  return null == a || cljs.core.not(cljs.core.seq(a));
};
cljs.core.coll_QMARK_ = function(a) {
  return null == a ? !1 : null != a ? a.cljs$lang$protocol_mask$partition0$ & 8 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ICollection$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ICollection, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ICollection, a);
};
cljs.core.set_QMARK_ = function(a) {
  return null == a ? !1 : null != a ? a.cljs$lang$protocol_mask$partition0$ & 4096 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISet$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ISet, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ISet, a);
};
cljs.core.associative_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 512 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAssociative$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative, a);
};
cljs.core.ifind_QMARK_ = function(a) {
  return null != a ? cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IFind$ ? !0 : a.cljs$lang$protocol_mask$partition$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IFind, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IFind, a);
};
cljs.core.sequential_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 16777216 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISequential$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ISequential, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ISequential, a);
};
cljs.core.sorted_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 268435456 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISorted$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ISorted, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ISorted, a);
};
cljs.core.reduceable_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 524288 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IReduce$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IReduce, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IReduce, a);
};
cljs.core.map_QMARK_ = function(a) {
  return null == a ? !1 : null != a ? a.cljs$lang$protocol_mask$partition0$ & 1024 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IMap$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IMap, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IMap, a);
};
cljs.core.record_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 67108864 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IRecord$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IRecord, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IRecord, a);
};
cljs.core.vector_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 16384 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IVector$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IVector, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IVector, a);
};
cljs.core.chunked_seq_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition1$ & 512 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IChunkedSeq$ ? !0 : !1 : !1;
};
cljs.core.js_obj = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.js_obj.cljs$core$IFn$_invoke$arity$0();
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(0), 0, null);
      return cljs.core.js_obj.cljs$core$IFn$_invoke$arity$variadic(b);
  }
};
cljs.core.js_obj.cljs$core$IFn$_invoke$arity$0 = function() {
  return {};
};
cljs.core.js_obj.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.create, a);
};
cljs.core.js_obj.cljs$lang$applyTo = function(a) {
  return cljs.core.js_obj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.js_obj.cljs$lang$maxFixedArity = 0;
cljs.core.js_keys = function(a) {
  var b = [], c = function(a, b) {
    return function(a, c, d) {
      return b.push(c);
    };
  }(a, b);
  goog.object.forEach(a, c);
  return b;
};
cljs.core.js_delete = function(a, b) {
  return delete a[b];
};
cljs.core.array_copy = function(a, b, c, d, e) {
  for (;;) {
    if (0 === e) {
      return c;
    }
    c[d] = a[b];
    d += 1;
    --e;
    b += 1;
  }
};
cljs.core.array_copy_downward = function(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;;) {
    if (0 === e) {
      return c;
    }
    c[d] = a[b];
    --d;
    --e;
    --b;
  }
};
cljs.core.lookup_sentinel = {};
cljs.core.false_QMARK_ = function(a) {
  return !1 === a;
};
cljs.core.true_QMARK_ = function(a) {
  return !0 === a;
};
cljs.core.boolean_QMARK_ = function(a) {
  return !0 === a || !1 === a;
};
cljs.core.undefined_QMARK_ = function(a) {
  return void 0 === a;
};
cljs.core.seq_QMARK_ = function(a) {
  return null == a ? !1 : null != a ? a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ISeq, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ISeq, a);
};
cljs.core.seqable_QMARK_ = function(a) {
  var b = null != a ? a.cljs$lang$protocol_mask$partition0$ & 8388608 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeqable$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable, a) : cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable, a);
  return b ? b : cljs.core.array_QMARK_(a) || "string" === typeof a;
};
cljs.core.boolean$ = function(a) {
  return null == a ? !1 : !1 === a ? !1 : !0;
};
cljs.core.ifn_QMARK_ = function(a) {
  var b = cljs.core.fn_QMARK_(a);
  return b ? b : null != a ? a.cljs$lang$protocol_mask$partition0$ & 1 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IFn$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IFn, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IFn, a);
};
cljs.core.integer_QMARK_ = function(a) {
  return "number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10);
};
cljs.core.int_QMARK_ = function(a) {
  return cljs.core.integer_QMARK_(a) || a instanceof goog.math.Integer || a instanceof goog.math.Long;
};
cljs.core.pos_int_QMARK_ = function(a) {
  return cljs.core.integer_QMARK_(a) ? 0 < a : a instanceof goog.math.Integer ? cljs.core.not(a.isNegative()) && cljs.core.not(a.isZero()) : a instanceof goog.math.Long ? cljs.core.not(a.isNegative()) && cljs.core.not(a.isZero()) : !1;
};
cljs.core.neg_int_QMARK_ = function(a) {
  return cljs.core.integer_QMARK_(a) ? 0 > a : a instanceof goog.math.Integer ? a.isNegative() : a instanceof goog.math.Long ? a.isNegative() : !1;
};
cljs.core.nat_int_QMARK_ = function(a) {
  var b;
  return cljs.core.integer_QMARK_(a) ? !(0 > a) || 0 === a : a instanceof goog.math.Integer || a instanceof goog.math.Long ? (b = cljs.core.not(a.isNegative())) ? b : a.isZero() : !1;
};
cljs.core.float_QMARK_ = function(a) {
  return "number" === typeof a;
};
cljs.core.double_QMARK_ = function(a) {
  return "number" === typeof a;
};
cljs.core.infinite_QMARK_ = function(a) {
  return a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY;
};
cljs.core.contains_QMARK_ = function(a, b) {
  return cljs.core.get.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? !1 : !0;
};
cljs.core.find = function(a, b) {
  return cljs.core.ifind_QMARK_(a) ? cljs.core._find(a, b) : null != a && cljs.core.associative_QMARK_(a) && cljs.core.contains_QMARK_(a, b) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b, cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b)], null) : null;
};
cljs.core.distinct_QMARK_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.distinct_QMARK_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.distinct_QMARK_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !0;
};
cljs.core.distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return !cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a, b);
};
cljs.core.distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a, b)) {
    return !1;
  }
  a = cljs.core.PersistentHashSet.createAsIfByAssoc([a, b]);
  for (b = c;;) {
    var d = cljs.core.first(b);
    c = cljs.core.next(b);
    if (cljs.core.truth_(b)) {
      if (cljs.core.contains_QMARK_(a, d)) {
        return !1;
      }
      a = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, d);
      b = c;
    } else {
      return !0;
    }
  }
};
cljs.core.distinct_QMARK_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.distinct_QMARK_.cljs$lang$maxFixedArity = 2;
cljs.core.compare = function(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return goog.array.defaultCompare(a, b);
    }
    throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
  }
  if (null != a ? a.cljs$lang$protocol_mask$partition1$ & 2048 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IComparable$ || (a.cljs$lang$protocol_mask$partition1$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IComparable, a)) : cljs.core.native_satisfies_QMARK_(cljs.core.IComparable, a)) {
    return cljs.core._compare(a, b);
  }
  if ("string" !== typeof a && !cljs.core.array_QMARK_(a) && !0 !== a && !1 !== a || cljs.core.type(a) !== cljs.core.type(b)) {
    throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
  }
  return goog.array.defaultCompare(a, b);
};
cljs.core.compare_indexed = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 4:
      return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = cljs.core.count(a), d = cljs.core.count(b);
  return c < d ? -1 : c > d ? 1 : 0 === c ? 0 : cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4(a, b, c, 0);
};
cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  for (;;) {
    var e = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a, d), cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b, d));
    if (0 === e && d + 1 < c) {
      d += 1;
    } else {
      return e;
    }
  }
};
cljs.core.compare_indexed.cljs$lang$maxFixedArity = 4;
cljs.core.fn__GT_comparator = function(a) {
  return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a, cljs.core.compare) ? cljs.core.compare : function(b, c) {
    var d = a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : cljs.core.truth_(d) ? -1 : cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
};
cljs.core.sort = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.sort.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare, a);
};
cljs.core.sort.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (cljs.core.seq(b)) {
    var c = cljs.core.to_array(b), d = cljs.core.fn__GT_comparator(a);
    goog.array.stableSort(c, d);
    return cljs.core.seq(c);
  }
  return cljs.core.List.EMPTY;
};
cljs.core.sort.cljs$lang$maxFixedArity = 2;
cljs.core.sort_by = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(a, cljs.core.compare, b);
};
cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(function(c, e) {
    var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c), g = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e), h = cljs.core.fn__GT_comparator(b);
    return h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(d, g) : h.call(null, d, g);
  }, c);
};
cljs.core.sort_by.cljs$lang$maxFixedArity = 3;
cljs.core.seq_reduce = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = cljs.core.seq(b);
  return c ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(a, cljs.core.first(c), cljs.core.next(c)) : a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
};
cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  for (c = cljs.core.seq(c);;) {
    if (c) {
      var d = cljs.core.first(c);
      b = a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, d) : a.call(null, b, d);
      if (cljs.core.reduced_QMARK_(b)) {
        return cljs.core.deref(b);
      }
      c = cljs.core.next(c);
    } else {
      return b;
    }
  }
};
cljs.core.seq_reduce.cljs$lang$maxFixedArity = 3;
cljs.core.shuffle = function(a) {
  a = cljs.core.to_array(a);
  goog.array.shuffle(a);
  return cljs.core.vec(a);
};
cljs.core.iter_reduce = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = cljs.core._iterator(a);
  if (cljs.core.truth_(c.hasNext())) {
    for (var d = c.next();;) {
      if (c.hasNext()) {
        var e = c.next();
        d = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, e) : b.call(null, d, e);
        if (cljs.core.reduced_QMARK_(d)) {
          return cljs.core.deref(d);
        }
      } else {
        return d;
      }
    }
  } else {
    return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
  }
};
cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  for (a = cljs.core._iterator(a);;) {
    if (a.hasNext()) {
      var d = a.next();
      c = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d);
      if (cljs.core.reduced_QMARK_(c)) {
        return cljs.core.deref(c);
      }
    } else {
      return c;
    }
  }
};
cljs.core.iter_reduce.cljs$lang$maxFixedArity = 3;
cljs.core.reduce = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.reduce.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null != b && (b.cljs$lang$protocol_mask$partition0$ & 524288 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$IReduce$) ? b.cljs$core$IReduce$_reduce$arity$2(null, a) : cljs.core.array_QMARK_(b) ? cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(b, a) : "string" === typeof b ? cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(b, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IReduce, b) ? cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(b, a) : cljs.core.iterable_QMARK_(b) ? cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$2(b, 
  a) : cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(a, b);
};
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return null != c && (c.cljs$lang$protocol_mask$partition0$ & 524288 || cljs.core.PROTOCOL_SENTINEL === c.cljs$core$IReduce$) ? c.cljs$core$IReduce$_reduce$arity$3(null, a, b) : cljs.core.array_QMARK_(c) ? cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(c, a, b) : "string" === typeof c ? cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(c, a, b) : cljs.core.native_satisfies_QMARK_(cljs.core.IReduce, c) ? cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(c, a, b) : cljs.core.iterable_QMARK_(c) ? 
  cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$3(c, a, b) : cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(a, b, c);
};
cljs.core.reduce.cljs$lang$maxFixedArity = 3;
cljs.core.reduce_kv = function(a, b, c) {
  return null != c ? cljs.core._kv_reduce(c, a, b) : b;
};
cljs.core.identity = function(a) {
  return a;
};
cljs.core.completing = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.completing.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.completing.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(a, cljs.core.identity);
};
cljs.core.completing.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function() {
    var c = null, d = function() {
      return a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
    }, e = function(a) {
      return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
    }, f = function(b, c) {
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
    };
    c = function(a, b) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return f.call(this, a, b);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    c.cljs$core$IFn$_invoke$arity$0 = d;
    c.cljs$core$IFn$_invoke$arity$1 = e;
    c.cljs$core$IFn$_invoke$arity$2 = f;
    return c;
  }();
};
cljs.core.completing.cljs$lang$maxFixedArity = 2;
cljs.core.transduce = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.transduce.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(a, b, b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null), c);
};
cljs.core.transduce.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  a = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
  c = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(a, c, d);
  return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
};
cljs.core.transduce.cljs$lang$maxFixedArity = 4;
cljs.core._PLUS_ = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$0 = function() {
  return 0;
};
cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a + b;
};
cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_, a + b, c);
};
cljs.core._PLUS_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._PLUS_.cljs$lang$maxFixedArity = 2;
cljs.core._ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return -a;
};
cljs.core._.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a - b;
};
cljs.core._.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._, a - b, c);
};
cljs.core._.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._.cljs$lang$maxFixedArity = 2;
cljs.core._STAR_ = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core._STAR_.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core._STAR_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._STAR_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._STAR_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._STAR_.cljs$core$IFn$_invoke$arity$0 = function() {
  return 1;
};
cljs.core._STAR_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core._STAR_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a * b;
};
cljs.core._STAR_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_, a * b, c);
};
cljs.core._STAR_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._STAR_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._STAR_.cljs$lang$maxFixedArity = 2;
cljs.core._SLASH_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return 1 / a;
};
cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a / b;
};
cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_, a / b, c);
};
cljs.core._SLASH_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._SLASH_.cljs$lang$maxFixedArity = 2;
cljs.core._LT_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._LT_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._LT_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._LT_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._LT_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !0;
};
cljs.core._LT_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a < b;
};
cljs.core._LT_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a < b) {
      if (cljs.core.next(c)) {
        a = b, b = cljs.core.first(c), c = cljs.core.next(c);
      } else {
        return b < cljs.core.first(c);
      }
    } else {
      return !1;
    }
  }
};
cljs.core._LT_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._LT_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._LT_.cljs$lang$maxFixedArity = 2;
cljs.core._LT__EQ_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._LT__EQ_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !0;
};
cljs.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a <= b;
};
cljs.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a <= b) {
      if (cljs.core.next(c)) {
        a = b, b = cljs.core.first(c), c = cljs.core.next(c);
      } else {
        return b <= cljs.core.first(c);
      }
    } else {
      return !1;
    }
  }
};
cljs.core._LT__EQ_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._LT__EQ_.cljs$lang$maxFixedArity = 2;
cljs.core._GT_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._GT_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._GT_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._GT_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._GT_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !0;
};
cljs.core._GT_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a > b;
};
cljs.core._GT_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a > b) {
      if (cljs.core.next(c)) {
        a = b, b = cljs.core.first(c), c = cljs.core.next(c);
      } else {
        return b > cljs.core.first(c);
      }
    } else {
      return !1;
    }
  }
};
cljs.core._GT_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._GT_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._GT_.cljs$lang$maxFixedArity = 2;
cljs.core._GT__EQ_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._GT__EQ_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !0;
};
cljs.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a >= b;
};
cljs.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a >= b) {
      if (cljs.core.next(c)) {
        a = b, b = cljs.core.first(c), c = cljs.core.next(c);
      } else {
        return b >= cljs.core.first(c);
      }
    } else {
      return !1;
    }
  }
};
cljs.core._GT__EQ_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._GT__EQ_.cljs$lang$maxFixedArity = 2;
cljs.core.dec = function(a) {
  return a - 1;
};
cljs.core.max = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.max.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.max.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.max.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.max.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a > b ? a : b;
};
cljs.core.max.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max, a > b ? a : b, c);
};
cljs.core.max.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.max.cljs$lang$maxFixedArity = 2;
cljs.core.min = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.min.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.min.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.min.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.min.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a < b ? a : b;
};
cljs.core.min.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.min, a < b ? a : b, c);
};
cljs.core.min.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.min.cljs$lang$maxFixedArity = 2;
cljs.core.byte$ = function(a) {
  return a;
};
cljs.core.char$ = function(a) {
  if ("number" === typeof a) {
    return String.fromCharCode(a);
  }
  if ("string" === typeof a && 1 === a.length) {
    return a;
  }
  throw Error("Argument to char must be a character or number");
};
cljs.core.short$ = function(a) {
  return a;
};
cljs.core.float$ = function(a) {
  return a;
};
cljs.core.double$ = function(a) {
  return a;
};
cljs.core.unchecked_byte = function(a) {
  return a;
};
cljs.core.unchecked_char = function(a) {
  return a;
};
cljs.core.unchecked_short = function(a) {
  return a;
};
cljs.core.unchecked_float = function(a) {
  return a;
};
cljs.core.unchecked_double = function(a) {
  return a;
};
cljs.core.unchecked_add = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$0 = function() {
  return 0;
};
cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a + b;
};
cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.unchecked_add, a + b, c);
};
cljs.core.unchecked_add.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.unchecked_add.cljs$lang$maxFixedArity = 2;
cljs.core.unchecked_add_int = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = function() {
  return 0;
};
cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a + b;
};
cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.unchecked_add_int, a + b, c);
};
cljs.core.unchecked_add_int.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.unchecked_add_int.cljs$lang$maxFixedArity = 2;
cljs.core.unchecked_dec = function(a) {
  return a - 1;
};
cljs.core.unchecked_dec_int = function(a) {
  return a - 1;
};
cljs.core.unchecked_divide_int = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.unchecked_divide_int.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return 1 / a;
};
cljs.core.unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a / b;
};
cljs.core.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.unchecked_divide_int, a / b, c);
};
cljs.core.unchecked_divide_int.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.unchecked_divide_int.cljs$lang$maxFixedArity = 2;
cljs.core.unchecked_inc = function(a) {
  return a + 1;
};
cljs.core.unchecked_inc_int = function(a) {
  return a + 1;
};
cljs.core.unchecked_multiply = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = function() {
  return 1;
};
cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a * b;
};
cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.unchecked_multiply, a * b, c);
};
cljs.core.unchecked_multiply.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.unchecked_multiply.cljs$lang$maxFixedArity = 2;
cljs.core.unchecked_multiply_int = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = function() {
  return 1;
};
cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a * b;
};
cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.unchecked_multiply_int, a * b, c);
};
cljs.core.unchecked_multiply_int.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
cljs.core.unchecked_negate = function(a) {
  return -a;
};
cljs.core.unchecked_negate_int = function(a) {
  return -a;
};
cljs.core.unchecked_remainder_int = function(a, b) {
  return cljs.core.mod(a, b);
};
cljs.core.unchecked_subtract = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.unchecked_subtract.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.unchecked_subtract.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return -a;
};
cljs.core.unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a - b;
};
cljs.core.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.unchecked_subtract, a - b, c);
};
cljs.core.unchecked_subtract.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.unchecked_subtract.cljs$lang$maxFixedArity = 2;
cljs.core.unchecked_subtract_int = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return -a;
};
cljs.core.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a - b;
};
cljs.core.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.unchecked_subtract_int, a - b, c);
};
cljs.core.unchecked_subtract_int.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
cljs.core.fix = function(a) {
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
};
cljs.core.int$ = function(a) {
  return a | 0;
};
cljs.core.unchecked_int = function(a) {
  return cljs.core.fix(a);
};
cljs.core.long$ = function(a) {
  return cljs.core.fix(a);
};
cljs.core.unchecked_long = function(a) {
  return cljs.core.fix(a);
};
cljs.core.booleans = function(a) {
  return a;
};
cljs.core.bytes = function(a) {
  return a;
};
cljs.core.chars = function(a) {
  return a;
};
cljs.core.shorts = function(a) {
  return a;
};
cljs.core.ints = function(a) {
  return a;
};
cljs.core.floats = function(a) {
  return a;
};
cljs.core.doubles = function(a) {
  return a;
};
cljs.core.longs = function(a) {
  return a;
};
cljs.core.js_mod = function(a, b) {
  return a % b;
};
cljs.core.mod = function(a, b) {
  return (a % b + b) % b;
};
cljs.core.quot = function(a, b) {
  return cljs.core.fix((a - a % b) / b);
};
cljs.core.rem = function(a, b) {
  var c = cljs.core.quot(a, b);
  return a - b * c;
};
cljs.core.bit_xor = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.bit_xor.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.bit_xor.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.bit_xor.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a ^ b;
};
cljs.core.bit_xor.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.bit_xor, a ^ b, c);
};
cljs.core.bit_xor.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.bit_xor.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.bit_xor.cljs$lang$maxFixedArity = 2;
cljs.core.bit_and = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.bit_and.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.bit_and.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.bit_and.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a & b;
};
cljs.core.bit_and.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.bit_and, a & b, c);
};
cljs.core.bit_and.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.bit_and.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.bit_and.cljs$lang$maxFixedArity = 2;
cljs.core.bit_or = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.bit_or.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.bit_or.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.bit_or.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a | b;
};
cljs.core.bit_or.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.bit_or, a | b, c);
};
cljs.core.bit_or.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.bit_or.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.bit_or.cljs$lang$maxFixedArity = 2;
cljs.core.bit_and_not = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.bit_and_not.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.bit_and_not.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a & ~b;
};
cljs.core.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.bit_and_not, a & ~b, c);
};
cljs.core.bit_and_not.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.bit_and_not.cljs$lang$maxFixedArity = 2;
cljs.core.bit_clear = function(a, b) {
  return a & ~(1 << b);
};
cljs.core.bit_flip = function(a, b) {
  return a ^ 1 << b;
};
cljs.core.bit_not = function(a) {
  return ~a;
};
cljs.core.bit_set = function(a, b) {
  return a | 1 << b;
};
cljs.core.bit_test = function(a, b) {
  return 0 != (a & 1 << b);
};
cljs.core.bit_shift_left = function(a, b) {
  return a << b;
};
cljs.core.bit_shift_right = function(a, b) {
  return a >> b;
};
cljs.core.bit_shift_right_zero_fill = function(a, b) {
  return a >>> b;
};
cljs.core.unsigned_bit_shift_right = function(a, b) {
  return a >>> b;
};
cljs.core.bit_count = function(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
};
cljs.core._EQ__EQ_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !0;
};
cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core._equiv(a, b);
};
cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a === b) {
      if (cljs.core.next(c)) {
        a = b, b = cljs.core.first(c), c = cljs.core.next(c);
      } else {
        return b === cljs.core.first(c);
      }
    } else {
      return !1;
    }
  }
};
cljs.core._EQ__EQ_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core._EQ__EQ_.cljs$lang$maxFixedArity = 2;
cljs.core.pos_QMARK_ = function(a) {
  return 0 < a;
};
cljs.core.zero_QMARK_ = function(a) {
  return 0 === a;
};
cljs.core.neg_QMARK_ = function(a) {
  return 0 > a;
};
cljs.core.nthnext = function(a, b) {
  for (var c = b, d = cljs.core.seq(a);;) {
    if (d && 0 < c) {
      --c, d = cljs.core.next(d);
    } else {
      return d;
    }
  }
};
cljs.core.str = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.str.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(1), 0, null);
      return cljs.core.str.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
  }
};
cljs.core.str.cljs$core$IFn$_invoke$arity$0 = function() {
  return "";
};
cljs.core.str.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return null == a ? "" : "" + a;
};
cljs.core.str.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  for (var c = new goog.string.StringBuffer("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)), d = b;;) {
    if (cljs.core.truth_(d)) {
      c = c.append("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(d))), d = cljs.core.next(d);
    } else {
      return c.toString();
    }
  }
};
cljs.core.str.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.str.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.str.cljs$lang$maxFixedArity = 1;
cljs.core.subs = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.subs.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a.substring(b);
};
cljs.core.subs.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return a.substring(b, c);
};
cljs.core.subs.cljs$lang$maxFixedArity = 3;
cljs.core.equiv_sequential = function(a, b) {
  return cljs.core.boolean$(cljs.core.sequential_QMARK_(b) ? cljs.core.counted_QMARK_(a) && cljs.core.counted_QMARK_(b) && cljs.core.count(a) !== cljs.core.count(b) ? !1 : function() {
    for (var c = cljs.core.seq(a), d = cljs.core.seq(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null != d && cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(c), cljs.core.first(d))) {
        c = cljs.core.next(c), d = cljs.core.next(d);
      } else {
        return !1;
      }
    }
  }() : null);
};
cljs.core.hash_coll = function(a) {
  if (cljs.core.seq(a)) {
    var b = cljs.core.hash(cljs.core.first(a));
    for (a = cljs.core.next(a);;) {
      if (null == a) {
        return b;
      }
      b = cljs.core.hash_combine(b, cljs.core.hash(cljs.core.first(a)));
      a = cljs.core.next(a);
    }
  } else {
    return 0;
  }
};
cljs.core.hash_imap = function(a) {
  var b = 0;
  for (a = cljs.core.seq(a);;) {
    if (a) {
      var c = cljs.core.first(a);
      b = (b + (cljs.core.hash(cljs.core.key(c)) ^ cljs.core.hash(cljs.core.val(c)))) % 4503599627370496;
      a = cljs.core.next(a);
    } else {
      return b;
    }
  }
};
cljs.core.hash_iset = function(a) {
  var b = 0;
  for (a = cljs.core.seq(a);;) {
    if (a) {
      var c = cljs.core.first(a);
      b = (b + cljs.core.hash(c)) % 4503599627370496;
      a = cljs.core.next(a);
    } else {
      return b;
    }
  }
};
cljs.core.extend_object_BANG_ = function(a, b) {
  for (var c = cljs.core.seq(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.cljs$core$IIndexed$_nth$arity$2(null, f), h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(g, 0, null);
      g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(g, 1, null);
      h = cljs.core.name(h);
      goog.object.set(a, h, g);
      f += 1;
    } else {
      if (c = cljs.core.seq(c)) {
        cljs.core.chunked_seq_QMARK_(c) ? (e = cljs.core.chunk_first(c), c = cljs.core.chunk_rest(c), d = e, e = cljs.core.count(e)) : (e = cljs.core.first(c), d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null), e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 1, null), d = cljs.core.name(d), goog.object.set(a, d, e), c = cljs.core.next(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return a;
};
cljs.core.List = function(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.count = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 65937646;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs.core.List.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.List.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.List.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.List.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, this.count);
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.List(this.meta, this.first, this.rest, this.count, this.__hash);
};
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return 1 === this.count ? null : this.rest;
};
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.count;
};
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return this.first;
};
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  return this.cljs$core$ISeq$_rest$arity$1(null);
};
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return this.first;
};
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return 1 === this.count ? cljs.core.List.EMPTY : this.rest;
};
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.List(b, this.first, this.rest, this.count, this.__hash);
};
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.List(this.meta, b, this, this.count + 1, null);
};
cljs.core.List.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "first", "first", 996428481, null), new cljs.core.Symbol(null, "rest", "rest", 398835108, null), new cljs.core.Symbol(null, "count", "count", -514511684, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.List.cljs$lang$type = !0;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/List");
};
cljs.core.__GT_List = function(a, b, c, d, e) {
  return new cljs.core.List(a, b, c, d, e);
};
cljs.core.list_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 33554432 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IList$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IList, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IList, a);
};
var G__14179_14182 = cljs.core.List.prototype, G__14180_14183 = cljs.core.ITER_SYMBOL, G__14181_14184 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14179_14182, G__14180_14183);
goog.object.set(G__14179_14182, G__14180_14183, G__14181_14184);
cljs.core.EmptyList = function(a) {
  this.meta = a;
  this.cljs$lang$protocol_mask$partition0$ = 65937614;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs.core.EmptyList.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.EmptyList.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.EmptyList.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.EmptyList.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.EmptyList(this.meta);
};
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return null;
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return 0;
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return null;
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  throw Error("Can't pop empty list");
};
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.empty_ordered_hash;
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.list_QMARK_(b) || cljs.core.sequential_QMARK_(b) ? null == cljs.core.seq(b) : !1;
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return this;
};
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return null;
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return cljs.core.List.EMPTY;
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return null;
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.EmptyList(b);
};
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.List(this.meta, b, null, 1, null);
};
cljs.core.EmptyList.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null)], null);
};
cljs.core.EmptyList.cljs$lang$type = !0;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/EmptyList");
};
cljs.core.__GT_EmptyList = function(a) {
  return new cljs.core.EmptyList(a);
};
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
var G__14187_14190 = cljs.core.EmptyList.prototype, G__14188_14191 = cljs.core.ITER_SYMBOL, G__14189_14192 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14187_14190, G__14188_14191);
goog.object.set(G__14187_14190, G__14188_14191, G__14189_14192);
cljs.core.reversible_QMARK_ = function(a) {
  return null != a ? a.cljs$lang$protocol_mask$partition0$ & 134217728 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IReversible$ ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.native_satisfies_QMARK_(cljs.core.IReversible, a) : cljs.core.native_satisfies_QMARK_(cljs.core.IReversible, a);
};
cljs.core.rseq = function(a) {
  return cljs.core._rseq(a);
};
cljs.core.reverse = function(a) {
  return cljs.core.reversible_QMARK_(a) ? cljs.core.rseq(a) : cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj, cljs.core.List.EMPTY, a);
};
cljs.core.list = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.list.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  if (a instanceof cljs.core.IndexedSeq && 0 === a.i) {
    var b = a.arr;
  } else {
    a: {
      for (b = [];;) {
        if (null != a) {
          b.push(a.cljs$core$ISeq$_first$arity$1(null)), a = a.cljs$core$INext$_next$arity$1(null);
        } else {
          break a;
        }
      }
    }
  }
  a = b.length;
  for (var c = cljs.core.List.EMPTY;;) {
    if (0 < a) {
      var d = a - 1;
      c = c.cljs$core$ICollection$_conj$arity$2(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
cljs.core.list.cljs$lang$maxFixedArity = 0;
cljs.core.list.cljs$lang$applyTo = function(a) {
  return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.Cons = function(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition0$ = 65929452;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs.core.Cons.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.Cons.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.Cons.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Cons.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.Cons(this.meta, this.first, this.rest, this.__hash);
};
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return null == this.rest ? null : cljs.core.seq(this.rest);
};
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return this.first;
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return null == this.rest ? cljs.core.List.EMPTY : this.rest;
};
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Cons(b, this.first, this.rest, this.__hash);
};
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.Cons(null, b, this, null);
};
cljs.core.Cons.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "first", "first", 996428481, null), new cljs.core.Symbol(null, "rest", "rest", 398835108, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.Cons.cljs$lang$type = !0;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Cons");
};
cljs.core.__GT_Cons = function(a, b, c, d) {
  return new cljs.core.Cons(a, b, c, d);
};
var G__14203_14206 = cljs.core.Cons.prototype, G__14204_14207 = cljs.core.ITER_SYMBOL, G__14205_14208 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14203_14206, G__14204_14207);
goog.object.set(G__14203_14206, G__14204_14207, G__14205_14208);
cljs.core.cons = function(a, b) {
  return null == b || null != b && (b.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$ISeq$) ? new cljs.core.Cons(null, a, b, null) : new cljs.core.Cons(null, a, cljs.core.seq(b), null);
};
cljs.core.hash_keyword = function(a) {
  return cljs.core.hash_symbol(a) + 2654435769 | 0;
};
cljs.core.compare_keywords = function(a, b) {
  if (a.fqn === b.fqn) {
    return 0;
  }
  if (cljs.core.truth_(function() {
    var c = cljs.core.not(a.ns);
    return c ? b.ns : c;
  }())) {
    return -1;
  }
  if (cljs.core.truth_(a.ns)) {
    if (cljs.core.not(b.ns)) {
      return 1;
    }
    var c = goog.array.defaultCompare(a.ns, b.ns);
    return 0 === c ? goog.array.defaultCompare(a.name, b.name) : c;
  }
  return goog.array.defaultCompare(a.name, b.name);
};
cljs.core.Keyword = function(a, b, c, d) {
  this.ns = a;
  this.name = b;
  this.fqn = c;
  this._hash = d;
  this.cljs$lang$protocol_mask$partition0$ = 2153775105;
  this.cljs$lang$protocol_mask$partition1$ = 4096;
};
cljs.core.Keyword.prototype.toString = function() {
  return [":", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.fqn)].join("");
};
cljs.core.Keyword.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return b instanceof cljs.core.Keyword ? this.fqn === b.fqn : !1;
};
cljs.core.Keyword.prototype.call = function() {
  var a = null, b = function(a, b) {
    return cljs.core.get.cljs$core$IFn$_invoke$arity$2(b, this);
  }, c = function(a, b, c) {
    return cljs.core.get.cljs$core$IFn$_invoke$arity$3(b, this, c);
  };
  a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = b;
  a.cljs$core$IFn$_invoke$arity$3 = c;
  return a;
}();
cljs.core.Keyword.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, this);
};
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.get.cljs$core$IFn$_invoke$arity$3(a, this, b);
};
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this._hash;
  return null != a ? a : this._hash = a = cljs.core.hash_keyword(this);
};
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = function(a) {
  return this.name;
};
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = function(a) {
  return this.ns;
};
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core._write(b, [":", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.fqn)].join(""));
};
cljs.core.Keyword.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "ns", "ns", 2082130287, null), new cljs.core.Symbol(null, "name", "name", -810760592, null), new cljs.core.Symbol(null, "fqn", "fqn", -1749334463, null), cljs.core.with_meta(new cljs.core.Symbol(null, "_hash", "_hash", -2130838312, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.Keyword.cljs$lang$type = !0;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Keyword");
};
cljs.core.__GT_Keyword = function(a, b, c, d) {
  return new cljs.core.Keyword(a, b, c, d);
};
cljs.core.keyword_QMARK_ = function(a) {
  return a instanceof cljs.core.Keyword;
};
cljs.core.keyword_identical_QMARK_ = function(a, b) {
  return a === b ? !0 : a instanceof cljs.core.Keyword && b instanceof cljs.core.Keyword ? a.fqn === b.fqn : !1;
};
cljs.core.symbol_identical_QMARK_ = function(a, b) {
  return a === b ? !0 : a instanceof cljs.core.Symbol && b instanceof cljs.core.Symbol ? a.str === b.str : !1;
};
cljs.core.namespace = function(a) {
  if (null != a && (a.cljs$lang$protocol_mask$partition1$ & 4096 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$INamed$)) {
    return a.cljs$core$INamed$_namespace$arity$1(null);
  }
  throw Error(["Doesn't support namespace: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(""));
};
cljs.core.ident_QMARK_ = function(a) {
  return a instanceof cljs.core.Keyword || a instanceof cljs.core.Symbol;
};
cljs.core.simple_ident_QMARK_ = function(a) {
  return cljs.core.ident_QMARK_(a) && null == cljs.core.namespace(a);
};
cljs.core.qualified_ident_QMARK_ = function(a) {
  return cljs.core.boolean$(function() {
    var b = cljs.core.ident_QMARK_(a);
    return b ? (b = cljs.core.namespace(a), cljs.core.truth_(b) ? !0 : b) : b;
  }());
};
cljs.core.simple_symbol_QMARK_ = function(a) {
  return a instanceof cljs.core.Symbol && null == cljs.core.namespace(a);
};
cljs.core.qualified_symbol_QMARK_ = function(a) {
  return cljs.core.boolean$(function() {
    var b = a instanceof cljs.core.Symbol;
    return b ? (b = cljs.core.namespace(a), cljs.core.truth_(b) ? !0 : b) : b;
  }());
};
cljs.core.simple_keyword_QMARK_ = function(a) {
  return a instanceof cljs.core.Keyword && null == cljs.core.namespace(a);
};
cljs.core.qualified_keyword_QMARK_ = function(a) {
  return cljs.core.boolean$(function() {
    var b = a instanceof cljs.core.Keyword;
    return b ? (b = cljs.core.namespace(a), cljs.core.truth_(b) ? !0 : b) : b;
  }());
};
cljs.core.keyword = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.keyword.cljs$core$IFn$_invoke$arity$1 = function(a) {
  if (a instanceof cljs.core.Keyword) {
    return a;
  }
  if (a instanceof cljs.core.Symbol) {
    return new cljs.core.Keyword(cljs.core.namespace(a), cljs.core.name(a), a.str, null);
  }
  if ("string" === typeof a) {
    var b = a.split("/");
    return 2 === b.length ? new cljs.core.Keyword(b[0], b[1], a, null) : new cljs.core.Keyword(null, b[0], a, null);
  }
  return null;
};
cljs.core.keyword.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = a instanceof cljs.core.Keyword ? cljs.core.name(a) : a instanceof cljs.core.Symbol ? cljs.core.name(a) : a, d = b instanceof cljs.core.Keyword ? cljs.core.name(b) : b instanceof cljs.core.Symbol ? cljs.core.name(b) : b;
  return new cljs.core.Keyword(c, d, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.truth_(c) ? [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), "/"].join("") : null), cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join(""), null);
};
cljs.core.keyword.cljs$lang$maxFixedArity = 2;
cljs.core.LazySeq = function(a, b, c, d) {
  this.meta = a;
  this.fn = b;
  this.s = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition0$ = 32374988;
  this.cljs$lang$protocol_mask$partition1$ = 1;
};
cljs.core.LazySeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.LazySeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.LazySeq.prototype.sval = function() {
  null != this.fn && (this.s = this.fn.cljs$core$IFn$_invoke$arity$0 ? this.fn.cljs$core$IFn$_invoke$arity$0() : this.fn.call(null), this.fn = null);
  return this.s;
};
cljs.core.LazySeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.LazySeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  this.cljs$core$ISeqable$_seq$arity$1(null);
  return null == this.s ? null : cljs.core.next(this.s);
};
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.LazySeq.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = function(a) {
  return cljs.core.not(this.fn);
};
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  this.cljs$core$ISeqable$_seq$arity$1(null);
  return null == this.s ? null : cljs.core.first(this.s);
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  this.cljs$core$ISeqable$_seq$arity$1(null);
  return null != this.s ? cljs.core.rest(this.s) : cljs.core.List.EMPTY;
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  this.sval();
  if (null == this.s) {
    return null;
  }
  for (a = this.s;;) {
    if (a instanceof cljs.core.LazySeq) {
      a = a.sval();
    } else {
      return this.s = a, cljs.core.seq(this.s);
    }
  }
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(b, this.fn, this.s, this.__hash);
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.LazySeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), cljs.core.with_meta(new cljs.core.Symbol(null, "fn", "fn", 465265323, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "s", "s", -948495851, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", 
  "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.LazySeq.cljs$lang$type = !0;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/LazySeq");
};
cljs.core.__GT_LazySeq = function(a, b, c, d) {
  return new cljs.core.LazySeq(a, b, c, d);
};
var G__14226_14229 = cljs.core.LazySeq.prototype, G__14227_14230 = cljs.core.ITER_SYMBOL, G__14228_14231 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14226_14229, G__14227_14230);
goog.object.set(G__14226_14229, G__14227_14230, G__14228_14231);
cljs.core.ChunkBuffer = function(a, b) {
  this.buf = a;
  this.end = b;
  this.cljs$lang$protocol_mask$partition0$ = 2;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.ChunkBuffer.prototype.add = function(a) {
  this.buf[this.end] = a;
  return this.end += 1;
};
cljs.core.ChunkBuffer.prototype.chunk = function() {
  var a = new cljs.core.ArrayChunk(this.buf, 0, this.end);
  this.buf = null;
  return a;
};
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.end;
};
cljs.core.ChunkBuffer.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "buf", "buf", 1426618187, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "end", "end", 1372345569, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ChunkBuffer.cljs$lang$type = !0;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ChunkBuffer");
};
cljs.core.__GT_ChunkBuffer = function(a, b) {
  return new cljs.core.ChunkBuffer(a, b);
};
cljs.core.chunk_buffer = function(a) {
  return new cljs.core.ChunkBuffer(Array(a), 0);
};
cljs.core.ArrayChunk = function(a, b, c) {
  this.arr = a;
  this.off = b;
  this.end = c;
  this.cljs$lang$protocol_mask$partition0$ = 524306;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.end - this.off;
};
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return this.arr[this.off + b];
};
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.arr[this.off + b] : c;
};
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = function(a) {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new cljs.core.ArrayChunk(this.arr, this.off + 1, this.end);
};
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(this.arr, b, this.arr[this.off], this.off + 1);
};
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(this.arr, b, c, this.off);
};
cljs.core.ArrayChunk.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), new cljs.core.Symbol(null, "off", "off", -2047994980, null), new cljs.core.Symbol(null, "end", "end", 1372345569, null)], null);
};
cljs.core.ArrayChunk.cljs$lang$type = !0;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ArrayChunk");
};
cljs.core.__GT_ArrayChunk = function(a, b, c) {
  return new cljs.core.ArrayChunk(a, b, c);
};
cljs.core.array_chunk = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return new cljs.core.ArrayChunk(a, 0, a.length);
};
cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.ArrayChunk(a, b, a.length);
};
cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.core.ArrayChunk(a, b, c);
};
cljs.core.array_chunk.cljs$lang$maxFixedArity = 3;
cljs.core.ChunkedCons = function(a, b, c, d) {
  this.chunk = a;
  this.more = b;
  this.meta = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition0$ = 31850732;
  this.cljs$lang$protocol_mask$partition1$ = 1536;
};
cljs.core.ChunkedCons.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.ChunkedCons.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.ChunkedCons.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ChunkedCons.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  if (1 < cljs.core._count(this.chunk)) {
    return new cljs.core.ChunkedCons(cljs.core._drop_first(this.chunk), this.more, this.meta, null);
  }
  a = cljs.core._seq(this.more);
  return null == a ? null : a;
};
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(this.chunk, 0);
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return 1 < cljs.core._count(this.chunk) ? new cljs.core.ChunkedCons(cljs.core._drop_first(this.chunk), this.more, this.meta, null) : null == this.more ? cljs.core.List.EMPTY : this.more;
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = function(a) {
  return this.chunk;
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = function(a) {
  return null == this.more ? cljs.core.List.EMPTY : this.more;
};
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.ChunkedCons(this.chunk, this.more, b, this.__hash);
};
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = function(a) {
  return null == this.more ? null : this.more;
};
cljs.core.ChunkedCons.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "chunk", "chunk", 449371907, null), new cljs.core.Symbol(null, "more", "more", -418290273, null), new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ChunkedCons.cljs$lang$type = !0;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ChunkedCons");
};
cljs.core.__GT_ChunkedCons = function(a, b, c, d) {
  return new cljs.core.ChunkedCons(a, b, c, d);
};
var G__14237_14240 = cljs.core.ChunkedCons.prototype, G__14238_14241 = cljs.core.ITER_SYMBOL, G__14239_14242 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14237_14240, G__14238_14241);
goog.object.set(G__14237_14240, G__14238_14241, G__14239_14242);
cljs.core.chunk_cons = function(a, b) {
  return 0 === cljs.core._count(a) ? b : new cljs.core.ChunkedCons(a, b, null, null);
};
cljs.core.chunk_append = function(a, b) {
  return a.add(b);
};
cljs.core.chunk = function(a) {
  return a.chunk();
};
cljs.core.chunk_first = function(a) {
  return cljs.core._chunked_first(a);
};
cljs.core.chunk_rest = function(a) {
  return cljs.core._chunked_rest(a);
};
cljs.core.chunk_next = function(a) {
  return null != a && (a.cljs$lang$protocol_mask$partition1$ & 1024 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IChunkedNext$) ? cljs.core._chunked_next(a) : cljs.core.seq(cljs.core._chunked_rest(a));
};
cljs.core.to_array = function(a) {
  var b = [];
  for (a = cljs.core.seq(a);;) {
    if (null != a) {
      b.push(cljs.core.first(a)), a = cljs.core.next(a);
    } else {
      return b;
    }
  }
};
cljs.core.to_array_2d = function(a) {
  var b = Array(cljs.core.count(a)), c = 0;
  for (a = cljs.core.seq(a);;) {
    if (null != a) {
      b[c] = cljs.core.to_array(cljs.core.first(a)), c += 1, a = cljs.core.next(a);
    } else {
      break;
    }
  }
  return b;
};
cljs.core.int_array = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.int_array.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.int_array.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return "number" === typeof a ? cljs.core.int_array.cljs$core$IFn$_invoke$arity$2(a, null) : cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(a);
};
cljs.core.int_array.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = Array(a);
  if (cljs.core.seq_QMARK_(b)) {
    for (var d = 0, e = cljs.core.seq(b);;) {
      if (e && d < a) {
        c[d] = cljs.core.first(e), d += 1, e = cljs.core.next(e);
      } else {
        return c;
      }
    }
  } else {
    for (d = 0;;) {
      if (d < a) {
        c[d] = b, d += 1;
      } else {
        break;
      }
    }
    return c;
  }
};
cljs.core.int_array.cljs$lang$maxFixedArity = 2;
cljs.core.long_array = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.long_array.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.long_array.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return "number" === typeof a ? cljs.core.long_array.cljs$core$IFn$_invoke$arity$2(a, null) : cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(a);
};
cljs.core.long_array.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = Array(a);
  if (cljs.core.seq_QMARK_(b)) {
    for (var d = 0, e = cljs.core.seq(b);;) {
      if (e && d < a) {
        c[d] = cljs.core.first(e), d += 1, e = cljs.core.next(e);
      } else {
        return c;
      }
    }
  } else {
    for (d = 0;;) {
      if (d < a) {
        c[d] = b, d += 1;
      } else {
        break;
      }
    }
    return c;
  }
};
cljs.core.long_array.cljs$lang$maxFixedArity = 2;
cljs.core.double_array = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.double_array.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.double_array.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return "number" === typeof a ? cljs.core.double_array.cljs$core$IFn$_invoke$arity$2(a, null) : cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(a);
};
cljs.core.double_array.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = Array(a);
  if (cljs.core.seq_QMARK_(b)) {
    for (var d = 0, e = cljs.core.seq(b);;) {
      if (e && d < a) {
        c[d] = cljs.core.first(e), d += 1, e = cljs.core.next(e);
      } else {
        return c;
      }
    }
  } else {
    for (d = 0;;) {
      if (d < a) {
        c[d] = b, d += 1;
      } else {
        break;
      }
    }
    return c;
  }
};
cljs.core.double_array.cljs$lang$maxFixedArity = 2;
cljs.core.object_array = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.object_array.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.object_array.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return "number" === typeof a ? cljs.core.object_array.cljs$core$IFn$_invoke$arity$2(a, null) : cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(a);
};
cljs.core.object_array.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = Array(a);
  if (cljs.core.seq_QMARK_(b)) {
    for (var d = 0, e = cljs.core.seq(b);;) {
      if (e && d < a) {
        c[d] = cljs.core.first(e), d += 1, e = cljs.core.next(e);
      } else {
        return c;
      }
    }
  } else {
    for (d = 0;;) {
      if (d < a) {
        c[d] = b, d += 1;
      } else {
        break;
      }
    }
    return c;
  }
};
cljs.core.object_array.cljs$lang$maxFixedArity = 2;
cljs.core.bounded_count = function(a, b) {
  if (cljs.core.counted_QMARK_(b)) {
    return cljs.core.count(b);
  }
  for (var c = 0, d = cljs.core.seq(b);;) {
    if (null != d && c < a) {
      c += 1, d = cljs.core.next(d);
    } else {
      return c;
    }
  }
};
cljs.core.spread = function(a) {
  if (null == a) {
    return null;
  }
  var b = cljs.core.next(a);
  return null == b ? cljs.core.seq(cljs.core.first(a)) : cljs.core.cons(cljs.core.first(a), cljs.core.spread.cljs$core$IFn$_invoke$arity$1 ? cljs.core.spread.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.spread.call(null, b));
};
cljs.core.concat = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.concat.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.concat.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.concat.cljs$core$IFn$_invoke$arity$0 = function() {
  return new cljs.core.LazySeq(null, function() {
    return null;
  }, null, null);
};
cljs.core.concat.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return new cljs.core.LazySeq(null, function() {
    return a;
  }, null, null);
};
cljs.core.concat.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(a);
    return c ? cljs.core.chunked_seq_QMARK_(c) ? cljs.core.chunk_cons(cljs.core.chunk_first(c), cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(c), b)) : cljs.core.cons(cljs.core.first(c), cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(c), b)) : b;
  }, null, null);
};
cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return function e(a, b) {
    return new cljs.core.LazySeq(null, function() {
      var c = cljs.core.seq(a);
      return c ? cljs.core.chunked_seq_QMARK_(c) ? cljs.core.chunk_cons(cljs.core.chunk_first(c), e(cljs.core.chunk_rest(c), b)) : cljs.core.cons(cljs.core.first(c), e(cljs.core.rest(c), b)) : cljs.core.truth_(b) ? e(cljs.core.first(b), cljs.core.next(b)) : null;
    }, null, null);
  }(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a, b), c);
};
cljs.core.concat.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.concat.cljs$lang$maxFixedArity = 2;
cljs.core.list_STAR_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(4), 0, null);
      return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], b);
  }
};
cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.seq(a);
};
cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.cons(a, b);
};
cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.core.cons(a, cljs.core.cons(b, c));
};
cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return cljs.core.cons(a, cljs.core.cons(b, cljs.core.cons(c, d)));
};
cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e) {
  return cljs.core.cons(a, cljs.core.cons(b, cljs.core.cons(c, cljs.core.cons(d, cljs.core.spread(e)))));
};
cljs.core.list_STAR_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  e = cljs.core.next(e);
  return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e);
};
cljs.core.list_STAR_.cljs$lang$maxFixedArity = 4;
cljs.core.transient$ = function(a) {
  return cljs.core._as_transient(a);
};
cljs.core.persistent_BANG_ = function(a) {
  return cljs.core._persistent_BANG_(a);
};
cljs.core.conj_BANG_ = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
};
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core._conj_BANG_(a, b);
};
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a = cljs.core._conj_BANG_(a, b), cljs.core.truth_(c)) {
      b = cljs.core.first(c), c = cljs.core.next(c);
    } else {
      return a;
    }
  }
};
cljs.core.conj_BANG_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.conj_BANG_.cljs$lang$maxFixedArity = 2;
cljs.core.assoc_BANG_ = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.core._assoc_BANG_(a, b, c);
};
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  for (;;) {
    if (a = cljs.core._assoc_BANG_(a, b, c), cljs.core.truth_(d)) {
      b = cljs.core.first(d), c = cljs.core.second(d), d = cljs.core.nnext(d);
    } else {
      return a;
    }
  }
};
cljs.core.assoc_BANG_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.assoc_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.dissoc_BANG_ = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core._dissoc_BANG_(a, b);
};
cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a = cljs.core._dissoc_BANG_(a, b), cljs.core.truth_(c)) {
      b = cljs.core.first(c), c = cljs.core.next(c);
    } else {
      return a;
    }
  }
};
cljs.core.dissoc_BANG_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.dissoc_BANG_.cljs$lang$maxFixedArity = 2;
cljs.core.pop_BANG_ = function(a) {
  return cljs.core._pop_BANG_(a);
};
cljs.core.disj_BANG_ = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core._disjoin_BANG_(a, b);
};
cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  for (;;) {
    if (a = cljs.core._disjoin_BANG_(a, b), cljs.core.truth_(c)) {
      b = cljs.core.first(c), c = cljs.core.next(c);
    } else {
      return a;
    }
  }
};
cljs.core.disj_BANG_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.disj_BANG_.cljs$lang$maxFixedArity = 2;
cljs.core.apply_to = function(a, b, c) {
  var d = cljs.core.seq(c);
  if (0 === b) {
    return a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
  }
  c = cljs.core._first(d);
  var e = cljs.core._rest(d);
  if (1 === b) {
    return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
  }
  d = cljs.core._first(e);
  var f = cljs.core._rest(e);
  if (2 === b) {
    return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, d) : a.call(null, c, d);
  }
  e = cljs.core._first(f);
  var g = cljs.core._rest(f);
  if (3 === b) {
    return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(c, d, e) : a.call(null, c, d, e);
  }
  f = cljs.core._first(g);
  var h = cljs.core._rest(g);
  if (4 === b) {
    return a.cljs$core$IFn$_invoke$arity$4 ? a.cljs$core$IFn$_invoke$arity$4(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = cljs.core._first(h);
  var k = cljs.core._rest(h);
  if (5 === b) {
    return a.cljs$core$IFn$_invoke$arity$5 ? a.cljs$core$IFn$_invoke$arity$5(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  h = cljs.core._first(k);
  var l = cljs.core._rest(k);
  if (6 === b) {
    return a.cljs$core$IFn$_invoke$arity$6 ? a.cljs$core$IFn$_invoke$arity$6(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  k = cljs.core._first(l);
  var m = cljs.core._rest(l);
  if (7 === b) {
    return a.cljs$core$IFn$_invoke$arity$7 ? a.cljs$core$IFn$_invoke$arity$7(c, d, e, f, g, h, k) : a.call(null, c, d, e, f, g, h, k);
  }
  l = cljs.core._first(m);
  var n = cljs.core._rest(m);
  if (8 === b) {
    return a.cljs$core$IFn$_invoke$arity$8 ? a.cljs$core$IFn$_invoke$arity$8(c, d, e, f, g, h, k, l) : a.call(null, c, d, e, f, g, h, k, l);
  }
  m = cljs.core._first(n);
  var p = cljs.core._rest(n);
  if (9 === b) {
    return a.cljs$core$IFn$_invoke$arity$9 ? a.cljs$core$IFn$_invoke$arity$9(c, d, e, f, g, h, k, l, m) : a.call(null, c, d, e, f, g, h, k, l, m);
  }
  n = cljs.core._first(p);
  var q = cljs.core._rest(p);
  if (10 === b) {
    return a.cljs$core$IFn$_invoke$arity$10 ? a.cljs$core$IFn$_invoke$arity$10(c, d, e, f, g, h, k, l, m, n) : a.call(null, c, d, e, f, g, h, k, l, m, n);
  }
  p = cljs.core._first(q);
  var r = cljs.core._rest(q);
  if (11 === b) {
    return a.cljs$core$IFn$_invoke$arity$11 ? a.cljs$core$IFn$_invoke$arity$11(c, d, e, f, g, h, k, l, m, n, p) : a.call(null, c, d, e, f, g, h, k, l, m, n, p);
  }
  q = cljs.core._first(r);
  var t = cljs.core._rest(r);
  if (12 === b) {
    return a.cljs$core$IFn$_invoke$arity$12 ? a.cljs$core$IFn$_invoke$arity$12(c, d, e, f, g, h, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q);
  }
  r = cljs.core._first(t);
  var u = cljs.core._rest(t);
  if (13 === b) {
    return a.cljs$core$IFn$_invoke$arity$13 ? a.cljs$core$IFn$_invoke$arity$13(c, d, e, f, g, h, k, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r);
  }
  t = cljs.core._first(u);
  var v = cljs.core._rest(u);
  if (14 === b) {
    return a.cljs$core$IFn$_invoke$arity$14 ? a.cljs$core$IFn$_invoke$arity$14(c, d, e, f, g, h, k, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
  }
  u = cljs.core._first(v);
  var w = cljs.core._rest(v);
  if (15 === b) {
    return a.cljs$core$IFn$_invoke$arity$15 ? a.cljs$core$IFn$_invoke$arity$15(c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
  }
  v = cljs.core._first(w);
  var x = cljs.core._rest(w);
  if (16 === b) {
    return a.cljs$core$IFn$_invoke$arity$16 ? a.cljs$core$IFn$_invoke$arity$16(c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
  }
  w = cljs.core._first(x);
  var y = cljs.core._rest(x);
  if (17 === b) {
    return a.cljs$core$IFn$_invoke$arity$17 ? a.cljs$core$IFn$_invoke$arity$17(c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
  }
  x = cljs.core._first(y);
  var E = cljs.core._rest(y);
  if (18 === b) {
    return a.cljs$core$IFn$_invoke$arity$18 ? a.cljs$core$IFn$_invoke$arity$18(c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }
  y = cljs.core._first(E);
  E = cljs.core._rest(E);
  if (19 === b) {
    return a.cljs$core$IFn$_invoke$arity$19 ? a.cljs$core$IFn$_invoke$arity$19(c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }
  var O = cljs.core._first(E);
  cljs.core._rest(E);
  if (20 === b) {
    return a.cljs$core$IFn$_invoke$arity$20 ? a.cljs$core$IFn$_invoke$arity$20(c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, O) : a.call(null, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, O);
  }
  throw Error("Only up to 20 arguments supported on functions");
};
cljs.core.apply_to_simple = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null == b ? a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(a) : cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$3(a, cljs.core._first(b), cljs.core.next(b));
};
cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return null == c ? a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(a, b) : cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$4(a, b, cljs.core._first(c), cljs.core.next(c));
};
cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return null == d ? a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(a, b, c) : cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$5(a, b, c, cljs.core._first(d), cljs.core.next(d));
};
cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return null == e ? a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.call(a, b, c, d) : cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$6(a, b, c, d, cljs.core._first(e), cljs.core.next(e));
};
cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  if (null == f) {
    return a.cljs$core$IFn$_invoke$arity$4 ? a.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : a.call(a, b, c, d, e);
  }
  var g = cljs.core._first(f), h = cljs.core.next(f);
  if (null == h) {
    return a.cljs$core$IFn$_invoke$arity$5 ? a.cljs$core$IFn$_invoke$arity$5(b, c, d, e, g) : a.call(a, b, c, d, e, g);
  }
  f = cljs.core._first(h);
  var k = cljs.core.next(h);
  if (null == k) {
    return a.cljs$core$IFn$_invoke$arity$6 ? a.cljs$core$IFn$_invoke$arity$6(b, c, d, e, g, f) : a.call(a, b, c, d, e, g, f);
  }
  h = cljs.core._first(k);
  var l = cljs.core.next(k);
  if (null == l) {
    return a.cljs$core$IFn$_invoke$arity$7 ? a.cljs$core$IFn$_invoke$arity$7(b, c, d, e, g, f, h) : a.call(a, b, c, d, e, g, f, h);
  }
  k = cljs.core._first(l);
  var m = cljs.core.next(l);
  if (null == m) {
    return a.cljs$core$IFn$_invoke$arity$8 ? a.cljs$core$IFn$_invoke$arity$8(b, c, d, e, g, f, h, k) : a.call(a, b, c, d, e, g, f, h, k);
  }
  l = cljs.core._first(m);
  var n = cljs.core.next(m);
  if (null == n) {
    return a.cljs$core$IFn$_invoke$arity$9 ? a.cljs$core$IFn$_invoke$arity$9(b, c, d, e, g, f, h, k, l) : a.call(a, b, c, d, e, g, f, h, k, l);
  }
  m = cljs.core._first(n);
  var p = cljs.core.next(n);
  if (null == p) {
    return a.cljs$core$IFn$_invoke$arity$10 ? a.cljs$core$IFn$_invoke$arity$10(b, c, d, e, g, f, h, k, l, m) : a.call(a, b, c, d, e, g, f, h, k, l, m);
  }
  n = cljs.core._first(p);
  var q = cljs.core.next(p);
  if (null == q) {
    return a.cljs$core$IFn$_invoke$arity$11 ? a.cljs$core$IFn$_invoke$arity$11(b, c, d, e, g, f, h, k, l, m, n) : a.call(a, b, c, d, e, g, f, h, k, l, m, n);
  }
  p = cljs.core._first(q);
  var r = cljs.core.next(q);
  if (null == r) {
    return a.cljs$core$IFn$_invoke$arity$12 ? a.cljs$core$IFn$_invoke$arity$12(b, c, d, e, g, f, h, k, l, m, n, p) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p);
  }
  q = cljs.core._first(r);
  var t = cljs.core.next(r);
  if (null == t) {
    return a.cljs$core$IFn$_invoke$arity$13 ? a.cljs$core$IFn$_invoke$arity$13(b, c, d, e, g, f, h, k, l, m, n, p, q) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q);
  }
  r = cljs.core._first(t);
  var u = cljs.core.next(t);
  if (null == u) {
    return a.cljs$core$IFn$_invoke$arity$14 ? a.cljs$core$IFn$_invoke$arity$14(b, c, d, e, g, f, h, k, l, m, n, p, q, r) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q, r);
  }
  t = cljs.core._first(u);
  var v = cljs.core.next(u);
  if (null == v) {
    return a.cljs$core$IFn$_invoke$arity$15 ? a.cljs$core$IFn$_invoke$arity$15(b, c, d, e, g, f, h, k, l, m, n, p, q, r, t) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q, r, t);
  }
  u = cljs.core._first(v);
  var w = cljs.core.next(v);
  if (null == w) {
    return a.cljs$core$IFn$_invoke$arity$16 ? a.cljs$core$IFn$_invoke$arity$16(b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u);
  }
  v = cljs.core._first(w);
  var x = cljs.core.next(w);
  if (null == x) {
    return a.cljs$core$IFn$_invoke$arity$17 ? a.cljs$core$IFn$_invoke$arity$17(b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v);
  }
  w = cljs.core._first(x);
  var y = cljs.core.next(x);
  if (null == y) {
    return a.cljs$core$IFn$_invoke$arity$18 ? a.cljs$core$IFn$_invoke$arity$18(b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v, w) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v, w);
  }
  x = cljs.core._first(y);
  var E = cljs.core.next(y);
  if (null == E) {
    return a.cljs$core$IFn$_invoke$arity$19 ? a.cljs$core$IFn$_invoke$arity$19(b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v, w, x) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }
  y = cljs.core._first(E);
  E = cljs.core.next(E);
  if (null == E) {
    return a.cljs$core$IFn$_invoke$arity$20 ? a.cljs$core$IFn$_invoke$arity$20(b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : a.call(a, b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }
  b = [b, c, d, e, g, f, h, k, l, m, n, p, q, r, t, u, v, w, x, y];
  for (c = E;;) {
    if (c) {
      b.push(cljs.core._first(c)), c = cljs.core.next(c);
    } else {
      break;
    }
  }
  return a.apply(a, b);
};
cljs.core.apply_to_simple.cljs$lang$maxFixedArity = 6;
cljs.core.apply = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(5), 0, null);
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], b);
  }
};
cljs.core.apply.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (a.cljs$lang$applyTo) {
    var c = a.cljs$lang$maxFixedArity, d = cljs.core.bounded_count(c + 1, b);
    return d <= c ? cljs.core.apply_to(a, d, b) : a.cljs$lang$applyTo(b);
  }
  return cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$2(a, cljs.core.seq(b));
};
cljs.core.apply.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (a.cljs$lang$applyTo) {
    b = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(b, c);
    var d = a.cljs$lang$maxFixedArity;
    c = cljs.core.bounded_count(d, c) + 1;
    return c <= d ? cljs.core.apply_to(a, c, b) : a.cljs$lang$applyTo(b);
  }
  return cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.seq(c));
};
cljs.core.apply.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return a.cljs$lang$applyTo ? (b = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(b, c, d), c = a.cljs$lang$maxFixedArity, d = 2 + cljs.core.bounded_count(c - 1, d), d <= c ? cljs.core.apply_to(a, d, b) : a.cljs$lang$applyTo(b)) : cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$4(a, b, c, cljs.core.seq(d));
};
cljs.core.apply.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return a.cljs$lang$applyTo ? (b = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(b, c, d, e), c = a.cljs$lang$maxFixedArity, e = 3 + cljs.core.bounded_count(c - 2, e), e <= c ? cljs.core.apply_to(a, e, b) : a.cljs$lang$applyTo(b)) : cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$5(a, b, c, d, cljs.core.seq(e));
};
cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e, f) {
  return a.cljs$lang$applyTo ? (f = cljs.core.spread(f), b = cljs.core.cons(b, cljs.core.cons(c, cljs.core.cons(d, cljs.core.cons(e, f)))), c = a.cljs$lang$maxFixedArity, f = 4 + cljs.core.bounded_count(c - 3, f), f <= c ? cljs.core.apply_to(a, f, b) : a.cljs$lang$applyTo(b)) : cljs.core.apply_to_simple.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, cljs.core.spread(f));
};
cljs.core.apply.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  var f = cljs.core.next(e);
  e = cljs.core.first(f);
  f = cljs.core.next(f);
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e, f);
};
cljs.core.apply.cljs$lang$maxFixedArity = 5;
cljs.core.vary_meta = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(6), 0, null);
      return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], b);
  }
};
cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.with_meta(a, function() {
    var c = cljs.core.meta(a);
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
  }());
};
cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.core.with_meta(a, function() {
    var d = cljs.core.meta(a);
    return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, c) : b.call(null, d, c);
  }());
};
cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return cljs.core.with_meta(a, function() {
    var e = cljs.core.meta(a);
    return b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(e, c, d) : b.call(null, e, c, d);
  }());
};
cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return cljs.core.with_meta(a, function() {
    var f = cljs.core.meta(a);
    return b.cljs$core$IFn$_invoke$arity$4 ? b.cljs$core$IFn$_invoke$arity$4(f, c, d, e) : b.call(null, f, c, d, e);
  }());
};
cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  return cljs.core.with_meta(a, function() {
    var g = cljs.core.meta(a);
    return b.cljs$core$IFn$_invoke$arity$5 ? b.cljs$core$IFn$_invoke$arity$5(g, c, d, e, f) : b.call(null, g, c, d, e, f);
  }());
};
cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e, f, g) {
  return cljs.core.with_meta(a, cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(b, cljs.core.meta(a), c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f, g], 0)));
};
cljs.core.vary_meta.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  var f = cljs.core.next(e);
  e = cljs.core.first(f);
  var g = cljs.core.next(f);
  f = cljs.core.first(g);
  g = cljs.core.next(g);
  return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e, f, g);
};
cljs.core.vary_meta.cljs$lang$maxFixedArity = 6;
cljs.core.not_EQ_ = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return !1;
};
cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return !cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a, b);
};
cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_, a, b, c));
};
cljs.core.not_EQ_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.not_EQ_.cljs$lang$maxFixedArity = 2;
cljs.core.not_empty = function(a) {
  return cljs.core.seq(a) ? a : null;
};
cljs.core.nil_iter = function() {
  "undefined" === typeof cljs.core.t_cljs$core14407 && (cljs.core.t_cljs$core14407 = function(a) {
    this.meta14408 = a;
    this.cljs$lang$protocol_mask$partition0$ = 393216;
    this.cljs$lang$protocol_mask$partition1$ = 0;
  }, cljs.core.t_cljs$core14407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
    return new cljs.core.t_cljs$core14407(b);
  }, cljs.core.t_cljs$core14407.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
    return this.meta14408;
  }, cljs.core.t_cljs$core14407.prototype.hasNext = function() {
    return !1;
  }, cljs.core.t_cljs$core14407.prototype.next = function() {
    return Error("No such element");
  }, cljs.core.t_cljs$core14407.prototype.remove = function() {
    return Error("Unsupported operation");
  }, cljs.core.t_cljs$core14407.getBasis = function() {
    return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta14408", "meta14408", -773810882, null)], null);
  }, cljs.core.t_cljs$core14407.cljs$lang$type = !0, cljs.core.t_cljs$core14407.cljs$lang$ctorStr = "cljs.core/t_cljs$core14407", cljs.core.t_cljs$core14407.cljs$lang$ctorPrWriter = function(a, b, c) {
    return cljs.core._write(b, "cljs.core/t_cljs$core14407");
  }, cljs.core.__GT_t_cljs$core14407 = function(a) {
    return new cljs.core.t_cljs$core14407(a);
  });
  return new cljs.core.t_cljs$core14407(cljs.core.PersistentArrayMap.EMPTY);
};
cljs.core.StringIter = function(a, b) {
  this.s = a;
  this.i = b;
};
cljs.core.StringIter.prototype.hasNext = function() {
  return this.i < this.s.length;
};
cljs.core.StringIter.prototype.next = function() {
  var a = this.s.charAt(this.i);
  this.i += 1;
  return a;
};
cljs.core.StringIter.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.StringIter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "s", "s", -948495851, null), cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.StringIter.cljs$lang$type = !0;
cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";
cljs.core.StringIter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/StringIter");
};
cljs.core.__GT_StringIter = function(a, b) {
  return new cljs.core.StringIter(a, b);
};
cljs.core.string_iter = function(a) {
  return new cljs.core.StringIter(a, 0);
};
cljs.core.ArrayIter = function(a, b) {
  this.arr = a;
  this.i = b;
};
cljs.core.ArrayIter.prototype.hasNext = function() {
  return this.i < this.arr.length;
};
cljs.core.ArrayIter.prototype.next = function() {
  var a = this.arr[this.i];
  this.i += 1;
  return a;
};
cljs.core.ArrayIter.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.ArrayIter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ArrayIter.cljs$lang$type = !0;
cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ArrayIter");
};
cljs.core.__GT_ArrayIter = function(a, b) {
  return new cljs.core.ArrayIter(a, b);
};
cljs.core.array_iter = function(a) {
  return new cljs.core.ArrayIter(a, 0);
};
cljs.core.INIT = {};
cljs.core.START = {};
cljs.core.SeqIter = function(a, b) {
  this._seq = a;
  this._next = b;
};
cljs.core.SeqIter.prototype.hasNext = function() {
  this._seq === cljs.core.INIT ? (this._seq = cljs.core.START, this._next = cljs.core.seq(this._next)) : this._seq === this._next && (this._next = cljs.core.next(this._seq));
  return null != this._next;
};
cljs.core.SeqIter.prototype.next = function() {
  if (this.hasNext()) {
    return this._seq = this._next, cljs.core.first(this._next);
  }
  throw Error("No such element");
};
cljs.core.SeqIter.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.SeqIter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "_seq", "_seq", -449557847, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "_next", "_next", 101877036, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.SeqIter.cljs$lang$type = !0;
cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";
cljs.core.SeqIter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/SeqIter");
};
cljs.core.__GT_SeqIter = function(a, b) {
  return new cljs.core.SeqIter(a, b);
};
cljs.core.seq_iter = function(a) {
  return new cljs.core.SeqIter(cljs.core.INIT, a);
};
cljs.core.iter = function(a) {
  if (cljs.core.iterable_QMARK_(a)) {
    return cljs.core._iterator(a);
  }
  if (null == a) {
    return cljs.core.nil_iter();
  }
  if ("string" === typeof a) {
    return cljs.core.string_iter(a);
  }
  if (cljs.core.array_QMARK_(a)) {
    return cljs.core.array_iter(a);
  }
  if (cljs.core.seqable_QMARK_(a)) {
    return cljs.core.seq_iter(a);
  }
  throw Error(["Cannot create iterator from ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(""));
};
cljs.core.Many = function(a) {
  this.vals = a;
};
cljs.core.Many.prototype.add = function(a) {
  this.vals.push(a);
  return this;
};
cljs.core.Many.prototype.remove = function() {
  return this.vals.shift();
};
cljs.core.Many.prototype.isEmpty = function() {
  return 0 === this.vals.length;
};
cljs.core.Many.prototype.toString = function() {
  return ["Many: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.vals)].join("");
};
cljs.core.Many.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "vals", "vals", -1886377036, null)], null);
};
cljs.core.Many.cljs$lang$type = !0;
cljs.core.Many.cljs$lang$ctorStr = "cljs.core/Many";
cljs.core.Many.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Many");
};
cljs.core.__GT_Many = function(a) {
  return new cljs.core.Many(a);
};
cljs.core.NONE = {};
cljs.core.Single = function(a) {
  this.val = a;
};
cljs.core.Single.prototype.add = function(a) {
  return this.val === cljs.core.NONE ? (this.val = a, this) : new cljs.core.Many([this.val, a]);
};
cljs.core.Single.prototype.remove = function() {
  if (this.val === cljs.core.NONE) {
    throw Error("Removing object from empty buffer");
  }
  var a = this.val;
  this.val = cljs.core.NONE;
  return a;
};
cljs.core.Single.prototype.isEmpty = function() {
  return this.val === cljs.core.NONE;
};
cljs.core.Single.prototype.toString = function() {
  return ["Single: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.val)].join("");
};
cljs.core.Single.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "val", "val", 1769233139, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.Single.cljs$lang$type = !0;
cljs.core.Single.cljs$lang$ctorStr = "cljs.core/Single";
cljs.core.Single.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Single");
};
cljs.core.__GT_Single = function(a) {
  return new cljs.core.Single(a);
};
cljs.core.Empty = function() {
};
cljs.core.Empty.prototype.add = function(a) {
  return new cljs.core.Single(a);
};
cljs.core.Empty.prototype.remove = function() {
  throw Error("Removing object from empty buffer");
};
cljs.core.Empty.prototype.isEmpty = function() {
  return !0;
};
cljs.core.Empty.prototype.toString = function() {
  return "Empty";
};
cljs.core.Empty.getBasis = function() {
  return cljs.core.PersistentVector.EMPTY;
};
cljs.core.Empty.cljs$lang$type = !0;
cljs.core.Empty.cljs$lang$ctorStr = "cljs.core/Empty";
cljs.core.Empty.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Empty");
};
cljs.core.__GT_Empty = function() {
  return new cljs.core.Empty;
};
cljs.core.EMPTY = new cljs.core.Empty;
cljs.core.MultiIterator = function(a) {
  this.iters = a;
};
cljs.core.MultiIterator.prototype.hasNext = function() {
  for (var a = cljs.core.seq(this.iters);;) {
    if (null != a) {
      if (cljs.core.first(a).hasNext()) {
        a = cljs.core.next(a);
      } else {
        return !1;
      }
    } else {
      return !0;
    }
  }
};
cljs.core.MultiIterator.prototype.next = function() {
  for (var a = [], b = this.iters.length, c = 0;;) {
    if (c < b) {
      a[c] = this.iters[c].next(), c += 1;
    } else {
      break;
    }
  }
  return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(a, 0);
};
cljs.core.MultiIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "iters", "iters", 719353031, null)], null);
};
cljs.core.MultiIterator.cljs$lang$type = !0;
cljs.core.MultiIterator.cljs$lang$ctorStr = "cljs.core/MultiIterator";
cljs.core.MultiIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/MultiIterator");
};
cljs.core.__GT_MultiIterator = function(a) {
  return new cljs.core.MultiIterator(a);
};
cljs.core.chunkIteratorSeq = function(a) {
  return new cljs.core.LazySeq(null, function() {
    if (a.hasNext()) {
      for (var b = [], c = 0;;) {
        if (cljs.core.truth_(function() {
          var b = a.hasNext();
          return cljs.core.truth_(b) ? 32 > c : b;
        }())) {
          b[c] = a.next(), c += 1;
        } else {
          return cljs.core.chunk_cons(cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$3(b, 0, c), cljs.core.chunkIteratorSeq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunkIteratorSeq.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.chunkIteratorSeq.call(null, a));
        }
      }
    } else {
      return null;
    }
  }, null, null);
};
cljs.core.TransformerIterator = function(a, b, c, d, e, f) {
  this.buffer = a;
  this._next = b;
  this.completed = c;
  this.xf = d;
  this.sourceIter = e;
  this.multi = f;
};
cljs.core.TransformerIterator.prototype.step = function() {
  if (this._next !== cljs.core.NONE) {
    return !0;
  }
  for (;;) {
    if (this._next === cljs.core.NONE) {
      if (this.buffer.isEmpty()) {
        if (this.completed) {
          return !1;
        }
        if (this.sourceIter.hasNext()) {
          if (this.multi) {
            var a = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(this.xf, cljs.core.cons(null, this.sourceIter.next()));
          } else {
            a = this.sourceIter.next(), a = this.xf.cljs$core$IFn$_invoke$arity$2 ? this.xf.cljs$core$IFn$_invoke$arity$2(null, a) : this.xf.call(null, null, a);
          }
          cljs.core.reduced_QMARK_(a) && (this.xf.cljs$core$IFn$_invoke$arity$1 ? this.xf.cljs$core$IFn$_invoke$arity$1(null) : this.xf.call(null, null), this.completed = !0);
        } else {
          this.xf.cljs$core$IFn$_invoke$arity$1 ? this.xf.cljs$core$IFn$_invoke$arity$1(null) : this.xf.call(null, null), this.completed = !0;
        }
      } else {
        this._next = this.buffer.remove();
      }
    } else {
      return !0;
    }
  }
};
cljs.core.TransformerIterator.prototype.hasNext = function() {
  return this.step();
};
cljs.core.TransformerIterator.prototype.next = function() {
  if (this.hasNext()) {
    var a = this._next;
    this._next = cljs.core.NONE;
    return a;
  }
  throw Error("No such element");
};
cljs.core.TransformerIterator.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.TransformerIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "buffer", "buffer", -2037140571, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "_next", "_next", 101877036, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, 
  "completed", "completed", 1154475024, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "xf", "xf", 2042434515, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "sourceIter", "sourceIter", 1068220306, null), new cljs.core.Symbol(null, "multi", "multi", 1450238522, null)], null);
};
cljs.core.TransformerIterator.cljs$lang$type = !0;
cljs.core.TransformerIterator.cljs$lang$ctorStr = "cljs.core/TransformerIterator";
cljs.core.TransformerIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/TransformerIterator");
};
cljs.core.__GT_TransformerIterator = function(a, b, c, d, e, f) {
  return new cljs.core.TransformerIterator(a, b, c, d, e, f);
};
var G__14417_14420 = cljs.core.TransformerIterator.prototype, G__14418_14421 = cljs.core.ITER_SYMBOL, G__14419_14422 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14417_14420, G__14418_14421);
goog.object.set(G__14417_14420, G__14418_14421, G__14419_14422);
cljs.core.transformer_iterator = function(a, b, c) {
  var d = new cljs.core.TransformerIterator(cljs.core.EMPTY, cljs.core.NONE, !1, null, b, c);
  d.xf = function() {
    var b = function(a) {
      return function() {
        var b = null, c = function(b, c) {
          a.buffer = a.buffer.add(c);
          return b;
        };
        b = function(a, b) {
          switch(arguments.length) {
            case 0:
              return null;
            case 1:
              return a;
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        b.cljs$core$IFn$_invoke$arity$0 = function() {
          return null;
        };
        b.cljs$core$IFn$_invoke$arity$1 = function(a) {
          return a;
        };
        b.cljs$core$IFn$_invoke$arity$2 = c;
        return b;
      }();
    }(d);
    return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
  }();
  return d;
};
cljs.core.TransformerIterator.create = function(a, b) {
  return cljs.core.transformer_iterator(a, b, !1);
};
cljs.core.TransformerIterator.createMulti = function(a, b) {
  return cljs.core.transformer_iterator(a, new cljs.core.MultiIterator(cljs.core.to_array(b)), !0);
};
cljs.core.sequence = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.sequence.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.seq_QMARK_(a) ? a : (a = cljs.core.seq(a)) ? a : cljs.core.List.EMPTY;
};
cljs.core.sequence.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = cljs.core.chunkIteratorSeq(cljs.core.TransformerIterator.create(a, cljs.core.iter(b)));
  return cljs.core.truth_(c) ? c : cljs.core.List.EMPTY;
};
cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  a = cljs.core.chunkIteratorSeq(cljs.core.TransformerIterator.createMulti(a, cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.iter, cljs.core.cons(b, c))));
  return cljs.core.truth_(a) ? a : cljs.core.List.EMPTY;
};
cljs.core.sequence.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.sequence.cljs$lang$maxFixedArity = 2;
cljs.core.every_QMARK_ = function(a, b) {
  for (;;) {
    if (null == cljs.core.seq(b)) {
      return !0;
    }
    if (cljs.core.truth_(function() {
      var c = cljs.core.first(b);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
    }())) {
      var c = a, d = cljs.core.next(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
};
cljs.core.not_every_QMARK_ = function(a, b) {
  return !cljs.core.every_QMARK_(a, b);
};
cljs.core.some = function(a, b) {
  for (;;) {
    if (cljs.core.seq(b)) {
      var c = cljs.core.first(b);
      c = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
      if (cljs.core.truth_(c)) {
        return c;
      }
      c = a;
      var d = cljs.core.next(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
};
cljs.core.not_any_QMARK_ = function(a, b) {
  return cljs.core.not(cljs.core.some(a, b));
};
cljs.core.even_QMARK_ = function(a) {
  if (cljs.core.integer_QMARK_(a)) {
    return 0 === (a & 1);
  }
  throw Error(["Argument must be an integer: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(""));
};
cljs.core.odd_QMARK_ = function(a) {
  return !cljs.core.even_QMARK_(a);
};
cljs.core.complement = function(a) {
  return function() {
    var b = null, c = function() {
      return cljs.core.not(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
    }, d = function(b) {
      return cljs.core.not(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b));
    }, e = function(b, c) {
      return cljs.core.not(a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c));
    }, f = function() {
      var b = function(b, c, d) {
        return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(a, b, c, d));
      }, c = function(a, c, d) {
        var e = null;
        if (2 < arguments.length) {
          e = 0;
          for (var f = Array(arguments.length - 2); e < f.length;) {
            f[e] = arguments[e + 2], ++e;
          }
          e = new cljs.core.IndexedSeq(f, 0, null);
        }
        return b.call(this, a, c, e);
      };
      c.cljs$lang$maxFixedArity = 2;
      c.cljs$lang$applyTo = function(a) {
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.rest(a);
        return b(c, d, a);
      };
      c.cljs$core$IFn$_invoke$arity$variadic = b;
      return c;
    }();
    b = function(a, b, k) {
      switch(arguments.length) {
        case 0:
          return c.call(this);
        case 1:
          return d.call(this, a);
        case 2:
          return e.call(this, a, b);
        default:
          var g = null;
          if (2 < arguments.length) {
            g = 0;
            for (var h = Array(arguments.length - 2); g < h.length;) {
              h[g] = arguments[g + 2], ++g;
            }
            g = new cljs.core.IndexedSeq(h, 0, null);
          }
          return f.cljs$core$IFn$_invoke$arity$variadic(a, b, g);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = f.cljs$lang$applyTo;
    b.cljs$core$IFn$_invoke$arity$0 = c;
    b.cljs$core$IFn$_invoke$arity$1 = d;
    b.cljs$core$IFn$_invoke$arity$2 = e;
    b.cljs$core$IFn$_invoke$arity$variadic = f.cljs$core$IFn$_invoke$arity$variadic;
    return b;
  }();
};
cljs.core.constantly = function(a) {
  return function() {
    var b = function(b) {
      if (0 < arguments.length) {
        for (var c = 0, e = Array(arguments.length - 0); c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        new cljs.core.IndexedSeq(e, 0, null);
      }
      return a;
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      cljs.core.seq(b);
      return a;
    };
    b.cljs$core$IFn$_invoke$arity$variadic = function(b) {
      return a;
    };
    return b;
  }();
};
cljs.core.comp = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.comp.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.comp.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.comp.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.identity;
};
cljs.core.comp.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.comp.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function() {
    var c = null, d = function() {
      var c = b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
    }, e = function(c) {
      c = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
    }, f = function(c, d) {
      var e = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e);
    }, g = function(c, d, e) {
      c = b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(c, d, e) : b.call(null, c, d, e);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
    }, h = function() {
      var c = function(c, d, e, f) {
        c = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f);
        return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
      }, d = function(a, b, d, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return c.call(this, a, b, d, f);
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return c(b, d, e, a);
      };
      d.cljs$core$IFn$_invoke$arity$variadic = c;
      return d;
    }();
    c = function(a, b, c, n) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return g.call(this, a, b, c);
        default:
          var k = null;
          if (3 < arguments.length) {
            k = 0;
            for (var l = Array(arguments.length - 3); k < l.length;) {
              l[k] = arguments[k + 3], ++k;
            }
            k = new cljs.core.IndexedSeq(l, 0, null);
          }
          return h.cljs$core$IFn$_invoke$arity$variadic(a, b, c, k);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = h.cljs$lang$applyTo;
    c.cljs$core$IFn$_invoke$arity$0 = d;
    c.cljs$core$IFn$_invoke$arity$1 = e;
    c.cljs$core$IFn$_invoke$arity$2 = f;
    c.cljs$core$IFn$_invoke$arity$3 = g;
    c.cljs$core$IFn$_invoke$arity$variadic = h.cljs$core$IFn$_invoke$arity$variadic;
    return c;
  }();
};
cljs.core.comp.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return function() {
    var d = null, e = function() {
      var d = c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null);
      d = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
    }, f = function(d) {
      d = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d);
      d = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
    }, g = function(d, e) {
      var f = c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(d, e) : c.call(null, d, e);
      f = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(f) : b.call(null, f);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(f) : a.call(null, f);
    }, h = function(d, e, f) {
      d = c.cljs$core$IFn$_invoke$arity$3 ? c.cljs$core$IFn$_invoke$arity$3(d, e, f) : c.call(null, d, e, f);
      d = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
    }, k = function() {
      var d = function(d, e, f, g) {
        d = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(c, d, e, f, g);
        d = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
        return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
      }, e = function(a, b, c, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return d.call(this, a, b, c, f);
      };
      e.cljs$lang$maxFixedArity = 3;
      e.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return d(b, c, e, a);
      };
      e.cljs$core$IFn$_invoke$arity$variadic = d;
      return e;
    }();
    d = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return e.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return g.call(this, a, b);
        case 3:
          return h.call(this, a, b, c);
        default:
          var l = null;
          if (3 < arguments.length) {
            l = 0;
            for (var m = Array(arguments.length - 3); l < m.length;) {
              m[l] = arguments[l + 3], ++l;
            }
            l = new cljs.core.IndexedSeq(m, 0, null);
          }
          return k.cljs$core$IFn$_invoke$arity$variadic(a, b, c, l);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = k.cljs$lang$applyTo;
    d.cljs$core$IFn$_invoke$arity$0 = e;
    d.cljs$core$IFn$_invoke$arity$1 = f;
    d.cljs$core$IFn$_invoke$arity$2 = g;
    d.cljs$core$IFn$_invoke$arity$3 = h;
    d.cljs$core$IFn$_invoke$arity$variadic = k.cljs$core$IFn$_invoke$arity$variadic;
    return d;
  }();
};
cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return function(a) {
    return function() {
      var b = function(b) {
        b = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a), b);
        for (var c = cljs.core.next(a);;) {
          if (c) {
            var d = cljs.core.first(c);
            b = d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(b) : d.call(null, b);
            c = cljs.core.next(c);
          } else {
            return b;
          }
        }
      }, c = function(a) {
        var c = null;
        if (0 < arguments.length) {
          c = 0;
          for (var d = Array(arguments.length - 0); c < d.length;) {
            d[c] = arguments[c + 0], ++c;
          }
          c = new cljs.core.IndexedSeq(d, 0, null);
        }
        return b.call(this, c);
      };
      c.cljs$lang$maxFixedArity = 0;
      c.cljs$lang$applyTo = function(a) {
        a = cljs.core.seq(a);
        return b(a);
      };
      c.cljs$core$IFn$_invoke$arity$variadic = b;
      return c;
    }();
  }(cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(a, b, c, d)));
};
cljs.core.comp.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.comp.cljs$lang$maxFixedArity = 3;
cljs.core.partial = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.partial.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.partial.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(4), 0, null);
      return cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], b);
  }
};
cljs.core.partial.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.partial.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function() {
    var c = null, d = function() {
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
    }, e = function(c) {
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
    }, f = function(c, d) {
      return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.call(null, b, c, d);
    }, g = function(c, d, e) {
      return a.cljs$core$IFn$_invoke$arity$4 ? a.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : a.call(null, b, c, d, e);
    }, h = function() {
      var c = function(c, d, e, f) {
        return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(a, b, c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
      }, d = function(a, b, d, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return c.call(this, a, b, d, f);
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return c(b, d, e, a);
      };
      d.cljs$core$IFn$_invoke$arity$variadic = c;
      return d;
    }();
    c = function(a, b, c, n) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return g.call(this, a, b, c);
        default:
          var k = null;
          if (3 < arguments.length) {
            k = 0;
            for (var l = Array(arguments.length - 3); k < l.length;) {
              l[k] = arguments[k + 3], ++k;
            }
            k = new cljs.core.IndexedSeq(l, 0, null);
          }
          return h.cljs$core$IFn$_invoke$arity$variadic(a, b, c, k);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = h.cljs$lang$applyTo;
    c.cljs$core$IFn$_invoke$arity$0 = d;
    c.cljs$core$IFn$_invoke$arity$1 = e;
    c.cljs$core$IFn$_invoke$arity$2 = f;
    c.cljs$core$IFn$_invoke$arity$3 = g;
    c.cljs$core$IFn$_invoke$arity$variadic = h.cljs$core$IFn$_invoke$arity$variadic;
    return c;
  }();
};
cljs.core.partial.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return function() {
    var d = null, e = function() {
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
    }, f = function(d) {
      return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.call(null, b, c, d);
    }, g = function(d, e) {
      return a.cljs$core$IFn$_invoke$arity$4 ? a.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : a.call(null, b, c, d, e);
    }, h = function(d, e, f) {
      return a.cljs$core$IFn$_invoke$arity$5 ? a.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f) : a.call(null, b, c, d, e, f);
    }, k = function() {
      var d = function(d, e, f, g) {
        return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(a, b, c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f, g], 0));
      }, e = function(a, b, c, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return d.call(this, a, b, c, f);
      };
      e.cljs$lang$maxFixedArity = 3;
      e.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return d(b, c, e, a);
      };
      e.cljs$core$IFn$_invoke$arity$variadic = d;
      return e;
    }();
    d = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return e.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return g.call(this, a, b);
        case 3:
          return h.call(this, a, b, c);
        default:
          var l = null;
          if (3 < arguments.length) {
            l = 0;
            for (var m = Array(arguments.length - 3); l < m.length;) {
              m[l] = arguments[l + 3], ++l;
            }
            l = new cljs.core.IndexedSeq(m, 0, null);
          }
          return k.cljs$core$IFn$_invoke$arity$variadic(a, b, c, l);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = k.cljs$lang$applyTo;
    d.cljs$core$IFn$_invoke$arity$0 = e;
    d.cljs$core$IFn$_invoke$arity$1 = f;
    d.cljs$core$IFn$_invoke$arity$2 = g;
    d.cljs$core$IFn$_invoke$arity$3 = h;
    d.cljs$core$IFn$_invoke$arity$variadic = k.cljs$core$IFn$_invoke$arity$variadic;
    return d;
  }();
};
cljs.core.partial.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return function() {
    var e = null, f = function() {
      return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.call(null, b, c, d);
    }, g = function(e) {
      return a.cljs$core$IFn$_invoke$arity$4 ? a.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : a.call(null, b, c, d, e);
    }, h = function(e, f) {
      return a.cljs$core$IFn$_invoke$arity$5 ? a.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f) : a.call(null, b, c, d, e, f);
    }, k = function(e, f, g) {
      return a.cljs$core$IFn$_invoke$arity$6 ? a.cljs$core$IFn$_invoke$arity$6(b, c, d, e, f, g) : a.call(null, b, c, d, e, f, g);
    }, l = function() {
      var e = function(e, f, g, h) {
        return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(a, b, c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f, g, h], 0));
      }, f = function(a, b, c, d) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return e.call(this, a, b, c, f);
      };
      f.cljs$lang$maxFixedArity = 3;
      f.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.rest(a);
        return e(b, c, d, a);
      };
      f.cljs$core$IFn$_invoke$arity$variadic = e;
      return f;
    }();
    e = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return g.call(this, a);
        case 2:
          return h.call(this, a, b);
        case 3:
          return k.call(this, a, b, c);
        default:
          var e = null;
          if (3 < arguments.length) {
            e = 0;
            for (var m = Array(arguments.length - 3); e < m.length;) {
              m[e] = arguments[e + 3], ++e;
            }
            e = new cljs.core.IndexedSeq(m, 0, null);
          }
          return l.cljs$core$IFn$_invoke$arity$variadic(a, b, c, e);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    e.cljs$lang$maxFixedArity = 3;
    e.cljs$lang$applyTo = l.cljs$lang$applyTo;
    e.cljs$core$IFn$_invoke$arity$0 = f;
    e.cljs$core$IFn$_invoke$arity$1 = g;
    e.cljs$core$IFn$_invoke$arity$2 = h;
    e.cljs$core$IFn$_invoke$arity$3 = k;
    e.cljs$core$IFn$_invoke$arity$variadic = l.cljs$core$IFn$_invoke$arity$variadic;
    return e;
  }();
};
cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e) {
  return function() {
    var f = function(f) {
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(a, b, c, d, cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e, f));
    }, g = function(a) {
      var b = null;
      if (0 < arguments.length) {
        b = 0;
        for (var c = Array(arguments.length - 0); b < c.length;) {
          c[b] = arguments[b + 0], ++b;
        }
        b = new cljs.core.IndexedSeq(c, 0, null);
      }
      return f.call(this, b);
    };
    g.cljs$lang$maxFixedArity = 0;
    g.cljs$lang$applyTo = function(a) {
      a = cljs.core.seq(a);
      return f(a);
    };
    g.cljs$core$IFn$_invoke$arity$variadic = f;
    return g;
  }();
};
cljs.core.partial.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  e = cljs.core.next(e);
  return cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e);
};
cljs.core.partial.cljs$lang$maxFixedArity = 4;
cljs.core.fnil = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.fnil.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.fnil.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.fnil.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function() {
    var c = null, d = function(c) {
      c = null == c ? b : c;
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
    }, e = function(c, d) {
      var e = null == c ? b : c;
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(e, d) : a.call(null, e, d);
    }, f = function(c, d, e) {
      c = null == c ? b : c;
      return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(c, d, e) : a.call(null, c, d, e);
    }, g = function() {
      var c = function(c, d, e, f) {
        return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(a, null == c ? b : c, d, e, f);
      }, d = function(a, b, d, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return c.call(this, a, b, d, f);
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return c(b, d, e, a);
      };
      d.cljs$core$IFn$_invoke$arity$variadic = c;
      return d;
    }();
    c = function(a, b, c, m) {
      switch(arguments.length) {
        case 1:
          return d.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return f.call(this, a, b, c);
        default:
          var h = null;
          if (3 < arguments.length) {
            h = 0;
            for (var k = Array(arguments.length - 3); h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new cljs.core.IndexedSeq(k, 0, null);
          }
          return g.cljs$core$IFn$_invoke$arity$variadic(a, b, c, h);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = g.cljs$lang$applyTo;
    c.cljs$core$IFn$_invoke$arity$1 = d;
    c.cljs$core$IFn$_invoke$arity$2 = e;
    c.cljs$core$IFn$_invoke$arity$3 = f;
    c.cljs$core$IFn$_invoke$arity$variadic = g.cljs$core$IFn$_invoke$arity$variadic;
    return c;
  }();
};
cljs.core.fnil.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return function() {
    var d = null, e = function(d, e) {
      var f = null == d ? b : d, g = null == e ? c : e;
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(f, g) : a.call(null, f, g);
    }, f = function(d, e, f) {
      d = null == d ? b : d;
      e = null == e ? c : e;
      return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(d, e, f) : a.call(null, d, e, f);
    }, g = function() {
      var d = function(d, e, f, g) {
        return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(a, null == d ? b : d, null == e ? c : e, f, g);
      }, e = function(a, b, c, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return d.call(this, a, b, c, f);
      };
      e.cljs$lang$maxFixedArity = 3;
      e.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return d(b, c, e, a);
      };
      e.cljs$core$IFn$_invoke$arity$variadic = d;
      return e;
    }();
    d = function(a, b, c, d) {
      switch(arguments.length) {
        case 2:
          return e.call(this, a, b);
        case 3:
          return f.call(this, a, b, c);
        default:
          var h = null;
          if (3 < arguments.length) {
            h = 0;
            for (var k = Array(arguments.length - 3); h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new cljs.core.IndexedSeq(k, 0, null);
          }
          return g.cljs$core$IFn$_invoke$arity$variadic(a, b, c, h);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = g.cljs$lang$applyTo;
    d.cljs$core$IFn$_invoke$arity$2 = e;
    d.cljs$core$IFn$_invoke$arity$3 = f;
    d.cljs$core$IFn$_invoke$arity$variadic = g.cljs$core$IFn$_invoke$arity$variadic;
    return d;
  }();
};
cljs.core.fnil.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return function() {
    var e = null, f = function(d, e) {
      var f = null == d ? b : d, g = null == e ? c : e;
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(f, g) : a.call(null, f, g);
    }, g = function(e, f, g) {
      e = null == e ? b : e;
      f = null == f ? c : f;
      g = null == g ? d : g;
      return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(e, f, g) : a.call(null, e, f, g);
    }, h = function() {
      var e = function(e, f, g, h) {
        return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(a, null == e ? b : e, null == f ? c : f, null == g ? d : g, h);
      }, f = function(a, b, c, d) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return e.call(this, a, b, c, f);
      };
      f.cljs$lang$maxFixedArity = 3;
      f.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.rest(a);
        return e(b, c, d, a);
      };
      f.cljs$core$IFn$_invoke$arity$variadic = e;
      return f;
    }();
    e = function(a, b, c, d) {
      switch(arguments.length) {
        case 2:
          return f.call(this, a, b);
        case 3:
          return g.call(this, a, b, c);
        default:
          var e = null;
          if (3 < arguments.length) {
            e = 0;
            for (var k = Array(arguments.length - 3); e < k.length;) {
              k[e] = arguments[e + 3], ++e;
            }
            e = new cljs.core.IndexedSeq(k, 0, null);
          }
          return h.cljs$core$IFn$_invoke$arity$variadic(a, b, c, e);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    e.cljs$lang$maxFixedArity = 3;
    e.cljs$lang$applyTo = h.cljs$lang$applyTo;
    e.cljs$core$IFn$_invoke$arity$2 = f;
    e.cljs$core$IFn$_invoke$arity$3 = g;
    e.cljs$core$IFn$_invoke$arity$variadic = h.cljs$core$IFn$_invoke$arity$variadic;
    return e;
  }();
};
cljs.core.fnil.cljs$lang$maxFixedArity = 4;
cljs.core.map_indexed = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function(c) {
      return function() {
        var d = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(d, e) {
          var f = cljs.core._vreset_BANG_(c, cljs.core._deref(c) + 1);
          f = a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(f, e) : a.call(null, f, e);
          return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, f) : b.call(null, d, f);
        };
        d = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        d.cljs$core$IFn$_invoke$arity$0 = e;
        d.cljs$core$IFn$_invoke$arity$1 = f;
        d.cljs$core$IFn$_invoke$arity$2 = g;
        return d;
      }();
    }(cljs.core.volatile_BANG_(-1));
  };
};
cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, function() {
      var e = cljs.core.seq(f);
      if (e) {
        if (cljs.core.chunked_seq_QMARK_(e)) {
          for (var h = cljs.core.chunk_first(e), k = cljs.core.count(h), l = cljs.core.chunk_buffer(k), m = 0;;) {
            if (m < k) {
              cljs.core.chunk_append(l, function() {
                var d = b + m, e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(h, m);
                return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(d, e) : a.call(null, d, e);
              }()), m += 1;
            } else {
              break;
            }
          }
          return cljs.core.chunk_cons(cljs.core.chunk(l), d(b + k, cljs.core.chunk_rest(e)));
        }
        return cljs.core.cons(function() {
          var d = cljs.core.first(e);
          return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, d) : a.call(null, b, d);
        }(), d(b + 1, cljs.core.rest(e)));
      }
      return null;
    }, null, null);
  }(0, b);
};
cljs.core.map_indexed.cljs$lang$maxFixedArity = 2;
cljs.core.keep = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.keep.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.keep.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function() {
      var c = null, d = function() {
        return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
      }, e = function(a) {
        return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
      }, f = function(c, d) {
        var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
        return null == e ? c : b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, e) : b.call(null, c, e);
      };
      c = function(a, b) {
        switch(arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return f.call(this, a, b);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      c.cljs$core$IFn$_invoke$arity$0 = d;
      c.cljs$core$IFn$_invoke$arity$1 = e;
      c.cljs$core$IFn$_invoke$arity$2 = f;
      return c;
    }();
  };
};
cljs.core.keep.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(b);
    if (c) {
      if (cljs.core.chunked_seq_QMARK_(c)) {
        for (var d = cljs.core.chunk_first(c), e = cljs.core.count(d), f = cljs.core.chunk_buffer(e), g = 0;;) {
          if (g < e) {
            var h = function() {
              var b = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(d, g);
              return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
            }();
            null != h && cljs.core.chunk_append(f, h);
            g += 1;
          } else {
            break;
          }
        }
        return cljs.core.chunk_cons(cljs.core.chunk(f), cljs.core.keep.cljs$core$IFn$_invoke$arity$2(a, cljs.core.chunk_rest(c)));
      }
      e = function() {
        var b = cljs.core.first(c);
        return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
      }();
      return null == e ? cljs.core.keep.cljs$core$IFn$_invoke$arity$2(a, cljs.core.rest(c)) : cljs.core.cons(e, cljs.core.keep.cljs$core$IFn$_invoke$arity$2(a, cljs.core.rest(c)));
    }
    return null;
  }, null, null);
};
cljs.core.keep.cljs$lang$maxFixedArity = 2;
cljs.core.Atom = function(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.validator = c;
  this.watches = d;
  this.cljs$lang$protocol_mask$partition1$ = 16386;
  this.cljs$lang$protocol_mask$partition0$ = 6455296;
};
cljs.core.Atom.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return this === b;
};
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = function(a) {
  return this.state;
};
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = function(a, b, c) {
  for (var d, e = cljs.core.seq(this.watches), f = null, g = 0, h = 0;;) {
    if (h < g) {
      d = f.cljs$core$IIndexed$_nth$arity$2(null, h), a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d, 0, null), d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d, 1, null), d.cljs$core$IFn$_invoke$arity$4 ? d.cljs$core$IFn$_invoke$arity$4(a, this, b, c) : d.call(null, a, this, b, c), h += 1;
    } else {
      if (a = cljs.core.seq(e)) {
        e = a, cljs.core.chunked_seq_QMARK_(e) ? (f = cljs.core.chunk_first(e), e = cljs.core.chunk_rest(e), a = f, d = cljs.core.count(f), f = a, g = d) : (f = cljs.core.first(e), a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 0, null), d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 1, null), d.cljs$core$IFn$_invoke$arity$4 ? d.cljs$core$IFn$_invoke$arity$4(a, this, b, c) : d.call(null, a, this, b, c), e = cljs.core.next(e), f = null, g = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = function(a, b, c) {
  this.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.watches, b, c);
  return this;
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = function(a, b) {
  return this.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.watches, b);
};
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return goog.getUid(this);
};
cljs.core.Atom.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "state", "state", -348086572, null), new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "validator", "validator", -325659154, null), new cljs.core.Symbol(null, "watches", "watches", 1367433992, null)], null);
};
cljs.core.Atom.cljs$lang$type = !0;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Atom");
};
cljs.core.__GT_Atom = function(a, b, c, d) {
  return new cljs.core.Atom(a, b, c, d);
};
cljs.core.atom = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(1), 0, null);
      return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
  }
};
cljs.core.atom.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return new cljs.core.Atom(a, null, null, null);
};
cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  var c = null != b && (b.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$ISeq$) ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map, b) : b, d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c, new cljs.core.Keyword(null, "meta", "meta", 1499536964));
  c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c, new cljs.core.Keyword(null, "validator", "validator", -1966190681));
  return new cljs.core.Atom(a, d, c, null);
};
cljs.core.atom.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.atom.cljs$lang$maxFixedArity = 1;
cljs.core.reset_BANG_ = function(a, b) {
  if (a instanceof cljs.core.Atom) {
    var c = a.validator;
    if (null != c && !cljs.core.truth_(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(b) : c.call(null, b))) {
      throw Error("Validator rejected reference state");
    }
    c = a.state;
    a.state = b;
    null != a.watches && cljs.core._notify_watches(a, c, b);
    return b;
  }
  return cljs.core._reset_BANG_(a, b);
};
cljs.core.swap_BANG_ = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(4), 0, null);
      return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], b);
  }
};
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return a instanceof cljs.core.Atom ? cljs.core.reset_BANG_(a, function() {
    var c = a.state;
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
  }()) : cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a, b);
};
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return a instanceof cljs.core.Atom ? cljs.core.reset_BANG_(a, function() {
    var d = a.state;
    return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, c) : b.call(null, d, c);
  }()) : cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a, b, c);
};
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return a instanceof cljs.core.Atom ? cljs.core.reset_BANG_(a, function() {
    var e = a.state;
    return b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(e, c, d) : b.call(null, e, c, d);
  }()) : cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a, b, c, d);
};
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e) {
  return a instanceof cljs.core.Atom ? cljs.core.reset_BANG_(a, cljs.core.apply.cljs$core$IFn$_invoke$arity$5(b, a.state, c, d, e)) : cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e);
};
cljs.core.swap_BANG_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  e = cljs.core.next(e);
  return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e);
};
cljs.core.swap_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.compare_and_set_BANG_ = function(a, b, c) {
  return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.cljs$core$IDeref$_deref$arity$1(null), b) ? (cljs.core.reset_BANG_(a, c), !0) : !1;
};
cljs.core.set_validator_BANG_ = function(a, b) {
  if (null != b && cljs.core.not(function() {
    var c = cljs.core._deref(a);
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
  }())) {
    throw Error("Validator rejected reference state");
  }
  return a.validator = b;
};
cljs.core.get_validator = function(a) {
  return a.validator;
};
cljs.core.Volatile = function(a) {
  this.state = a;
  this.cljs$lang$protocol_mask$partition0$ = 32768;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.Volatile.prototype.cljs$core$IVolatile$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Volatile.prototype.cljs$core$IVolatile$_vreset_BANG_$arity$2 = function(a, b) {
  return this.state = b;
};
cljs.core.Volatile.prototype.cljs$core$IDeref$_deref$arity$1 = function(a) {
  return this.state;
};
cljs.core.Volatile.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "state", "state", -348086572, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.Volatile.cljs$lang$type = !0;
cljs.core.Volatile.cljs$lang$ctorStr = "cljs.core/Volatile";
cljs.core.Volatile.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Volatile");
};
cljs.core.__GT_Volatile = function(a) {
  return new cljs.core.Volatile(a);
};
cljs.core.volatile_BANG_ = function(a) {
  return new cljs.core.Volatile(a);
};
cljs.core.volatile_QMARK_ = function(a) {
  return a instanceof cljs.core.Volatile;
};
cljs.core.vreset_BANG_ = function(a, b) {
  return cljs.core._vreset_BANG_(a, b);
};
cljs.core.keep_indexed = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function(c) {
      return function() {
        var d = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(d, e) {
          var f = cljs.core._vreset_BANG_(c, cljs.core._deref(c) + 1);
          f = a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(f, e) : a.call(null, f, e);
          return null == f ? d : b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, f) : b.call(null, d, f);
        };
        d = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        d.cljs$core$IFn$_invoke$arity$0 = e;
        d.cljs$core$IFn$_invoke$arity$1 = f;
        d.cljs$core$IFn$_invoke$arity$2 = g;
        return d;
      }();
    }(cljs.core.volatile_BANG_(-1));
  };
};
cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, function() {
      var e = cljs.core.seq(f);
      if (e) {
        if (cljs.core.chunked_seq_QMARK_(e)) {
          for (var h = cljs.core.chunk_first(e), k = cljs.core.count(h), l = cljs.core.chunk_buffer(k), m = 0;;) {
            if (m < k) {
              var n = function() {
                var d = b + m, e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(h, m);
                return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(d, e) : a.call(null, d, e);
              }();
              null != n && cljs.core.chunk_append(l, n);
              m += 1;
            } else {
              break;
            }
          }
          return cljs.core.chunk_cons(cljs.core.chunk(l), d(b + k, cljs.core.chunk_rest(e)));
        }
        k = function() {
          var d = cljs.core.first(e);
          return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, d) : a.call(null, b, d);
        }();
        return null == k ? d(b + 1, cljs.core.rest(e)) : cljs.core.cons(k, d(b + 1, cljs.core.rest(e)));
      }
      return null;
    }, null, null);
  }(0, b);
};
cljs.core.keep_indexed.cljs$lang$maxFixedArity = 2;
cljs.core.every_pred = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function() {
    var b = null, c = function(b) {
      return cljs.core.boolean$(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b));
    }, d = function(b, c) {
      return cljs.core.boolean$(function() {
        var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
        return cljs.core.truth_(d) ? a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c) : d;
      }());
    }, e = function(b, c, d) {
      return cljs.core.boolean$(function() {
        var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
        return cljs.core.truth_(e) ? (e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c), cljs.core.truth_(e) ? a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d) : e) : e;
      }());
    }, f = function() {
      var c = function(c, d, e, f) {
        return cljs.core.boolean$(function() {
          var g = b.cljs$core$IFn$_invoke$arity$3(c, d, e);
          return cljs.core.truth_(g) ? cljs.core.every_QMARK_(a, f) : g;
        }());
      }, d = function(a, b, d, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return c.call(this, a, b, d, f);
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return c(b, d, e, a);
      };
      d.cljs$core$IFn$_invoke$arity$variadic = c;
      return d;
    }();
    b = function(a, b, k, l) {
      switch(arguments.length) {
        case 0:
          return !0;
        case 1:
          return c.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return e.call(this, a, b, k);
        default:
          var g = null;
          if (3 < arguments.length) {
            g = 0;
            for (var h = Array(arguments.length - 3); g < h.length;) {
              h[g] = arguments[g + 3], ++g;
            }
            g = new cljs.core.IndexedSeq(h, 0, null);
          }
          return f.cljs$core$IFn$_invoke$arity$variadic(a, b, k, g);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = f.cljs$lang$applyTo;
    b.cljs$core$IFn$_invoke$arity$0 = function() {
      return !0;
    };
    b.cljs$core$IFn$_invoke$arity$1 = c;
    b.cljs$core$IFn$_invoke$arity$2 = d;
    b.cljs$core$IFn$_invoke$arity$3 = e;
    b.cljs$core$IFn$_invoke$arity$variadic = f.cljs$core$IFn$_invoke$arity$variadic;
    return b;
  }();
};
cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function() {
    var c = null, d = function(c) {
      return cljs.core.boolean$(function() {
        var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
        return cljs.core.truth_(d) ? b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c) : d;
      }());
    }, e = function(c, d) {
      return cljs.core.boolean$(function() {
        var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
        return cljs.core.truth_(e) && (e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d), cljs.core.truth_(e)) ? (e = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c), cljs.core.truth_(e) ? b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d) : e) : e;
      }());
    }, f = function(c, d, e) {
      return cljs.core.boolean$(function() {
        var f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
        return cljs.core.truth_(f) && (f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d), cljs.core.truth_(f) && (f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e), cljs.core.truth_(f) && (f = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c), cljs.core.truth_(f)))) ? (f = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d), cljs.core.truth_(f) ? 
        b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(e) : b.call(null, e) : f) : f;
      }());
    }, g = function() {
      var d = function(d, e, f, g) {
        return cljs.core.boolean$(function() {
          var h = c.cljs$core$IFn$_invoke$arity$3(d, e, f);
          return cljs.core.truth_(h) ? cljs.core.every_QMARK_(function(c) {
            return function(c) {
              var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
              return cljs.core.truth_(d) ? b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c) : d;
            };
          }(h), g) : h;
        }());
      }, e = function(a, b, c, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return d.call(this, a, b, c, f);
      };
      e.cljs$lang$maxFixedArity = 3;
      e.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return d(b, c, e, a);
      };
      e.cljs$core$IFn$_invoke$arity$variadic = d;
      return e;
    }();
    c = function(a, b, c, m) {
      switch(arguments.length) {
        case 0:
          return !0;
        case 1:
          return d.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return f.call(this, a, b, c);
        default:
          var h = null;
          if (3 < arguments.length) {
            h = 0;
            for (var k = Array(arguments.length - 3); h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new cljs.core.IndexedSeq(k, 0, null);
          }
          return g.cljs$core$IFn$_invoke$arity$variadic(a, b, c, h);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = g.cljs$lang$applyTo;
    c.cljs$core$IFn$_invoke$arity$0 = function() {
      return !0;
    };
    c.cljs$core$IFn$_invoke$arity$1 = d;
    c.cljs$core$IFn$_invoke$arity$2 = e;
    c.cljs$core$IFn$_invoke$arity$3 = f;
    c.cljs$core$IFn$_invoke$arity$variadic = g.cljs$core$IFn$_invoke$arity$variadic;
    return c;
  }();
};
cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return function() {
    var d = null, e = function(d) {
      return cljs.core.boolean$(function() {
        var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
        return cljs.core.truth_(e) ? (e = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d), cljs.core.truth_(e) ? c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d) : e) : e;
      }());
    }, f = function(d, e) {
      return cljs.core.boolean$(function() {
        var f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
        return cljs.core.truth_(f) && (f = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d), cljs.core.truth_(f) && (f = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d), cljs.core.truth_(f) && (f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e), cljs.core.truth_(f)))) ? (f = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(e) : b.call(null, e), cljs.core.truth_(f) ? 
        c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(e) : c.call(null, e) : f) : f;
      }());
    }, g = function(d, e, f) {
      return cljs.core.boolean$(function() {
        var g = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
        return cljs.core.truth_(g) && (g = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d), cljs.core.truth_(g) && (g = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d), cljs.core.truth_(g) && (g = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e), cljs.core.truth_(g) && (g = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(e) : b.call(null, e), cljs.core.truth_(g) && 
        (g = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(e) : c.call(null, e), cljs.core.truth_(g) && (g = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(f) : a.call(null, f), cljs.core.truth_(g))))))) ? (g = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(f) : b.call(null, f), cljs.core.truth_(g) ? c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(f) : c.call(null, f) : g) : g;
      }());
    }, h = function() {
      var e = function(e, f, g, h) {
        return cljs.core.boolean$(function() {
          var k = d.cljs$core$IFn$_invoke$arity$3(e, f, g);
          return cljs.core.truth_(k) ? cljs.core.every_QMARK_(function(d) {
            return function(d) {
              var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
              return cljs.core.truth_(e) ? (e = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d), cljs.core.truth_(e) ? c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d) : e) : e;
            };
          }(k), h) : k;
        }());
      }, f = function(a, b, c, d) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return e.call(this, a, b, c, f);
      };
      f.cljs$lang$maxFixedArity = 3;
      f.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.rest(a);
        return e(b, c, d, a);
      };
      f.cljs$core$IFn$_invoke$arity$variadic = e;
      return f;
    }();
    d = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return !0;
        case 1:
          return e.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return g.call(this, a, b, c);
        default:
          var k = null;
          if (3 < arguments.length) {
            k = 0;
            for (var l = Array(arguments.length - 3); k < l.length;) {
              l[k] = arguments[k + 3], ++k;
            }
            k = new cljs.core.IndexedSeq(l, 0, null);
          }
          return h.cljs$core$IFn$_invoke$arity$variadic(a, b, c, k);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = h.cljs$lang$applyTo;
    d.cljs$core$IFn$_invoke$arity$0 = function() {
      return !0;
    };
    d.cljs$core$IFn$_invoke$arity$1 = e;
    d.cljs$core$IFn$_invoke$arity$2 = f;
    d.cljs$core$IFn$_invoke$arity$3 = g;
    d.cljs$core$IFn$_invoke$arity$variadic = h.cljs$core$IFn$_invoke$arity$variadic;
    return d;
  }();
};
cljs.core.every_pred.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return function(a) {
    return function() {
      var b = null, c = function(b) {
        return cljs.core.every_QMARK_(function(a) {
          return function(a) {
            return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
          };
        }(a), a);
      }, d = function(b, c) {
        return cljs.core.every_QMARK_(function(a) {
          return function(a) {
            var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
            return cljs.core.truth_(d) ? a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c) : d;
          };
        }(a), a);
      }, e = function(b, c, d) {
        return cljs.core.every_QMARK_(function(a) {
          return function(a) {
            var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
            return cljs.core.truth_(e) ? (e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c), cljs.core.truth_(e) ? a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d) : e) : e;
          };
        }(a), a);
      }, l = function() {
        var c = function(c, d, e, f) {
          return cljs.core.boolean$(function() {
            var g = b.cljs$core$IFn$_invoke$arity$3(c, d, e);
            return cljs.core.truth_(g) ? cljs.core.every_QMARK_(function(a, b) {
              return function(a) {
                return cljs.core.every_QMARK_(a, f);
              };
            }(g, a), a) : g;
          }());
        }, d = function(a, b, d, e) {
          var f = null;
          if (3 < arguments.length) {
            f = 0;
            for (var g = Array(arguments.length - 3); f < g.length;) {
              g[f] = arguments[f + 3], ++f;
            }
            f = new cljs.core.IndexedSeq(g, 0, null);
          }
          return c.call(this, a, b, d, f);
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a);
          a = cljs.core.next(a);
          var d = cljs.core.first(a);
          a = cljs.core.next(a);
          var e = cljs.core.first(a);
          a = cljs.core.rest(a);
          return c(b, d, e, a);
        };
        d.cljs$core$IFn$_invoke$arity$variadic = c;
        return d;
      }();
      b = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return !0;
          case 1:
            return c.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return e.call(this, a, b, f);
          default:
            var h = null;
            if (3 < arguments.length) {
              h = 0;
              for (var k = Array(arguments.length - 3); h < k.length;) {
                k[h] = arguments[h + 3], ++h;
              }
              h = new cljs.core.IndexedSeq(k, 0, null);
            }
            return l.cljs$core$IFn$_invoke$arity$variadic(a, b, f, h);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = l.cljs$lang$applyTo;
      b.cljs$core$IFn$_invoke$arity$0 = function() {
        return !0;
      };
      b.cljs$core$IFn$_invoke$arity$1 = c;
      b.cljs$core$IFn$_invoke$arity$2 = d;
      b.cljs$core$IFn$_invoke$arity$3 = e;
      b.cljs$core$IFn$_invoke$arity$variadic = l.cljs$core$IFn$_invoke$arity$variadic;
      return b;
    }();
  }(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(a, b, c, d));
};
cljs.core.every_pred.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.every_pred.cljs$lang$maxFixedArity = 3;
cljs.core.some_fn = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function() {
    var b = null, c = function(b) {
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
    }, d = function(b, c) {
      var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
      return cljs.core.truth_(d) ? d : a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
    }, e = function(b, c, d) {
      b = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
      if (cljs.core.truth_(b)) {
        return b;
      }
      c = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
      return cljs.core.truth_(c) ? c : a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
    }, f = function() {
      var c = function(c, d, e, f) {
        c = b.cljs$core$IFn$_invoke$arity$3(c, d, e);
        return cljs.core.truth_(c) ? c : cljs.core.some(a, f);
      }, d = function(a, b, d, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return c.call(this, a, b, d, f);
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return c(b, d, e, a);
      };
      d.cljs$core$IFn$_invoke$arity$variadic = c;
      return d;
    }();
    b = function(a, b, k, l) {
      switch(arguments.length) {
        case 0:
          return null;
        case 1:
          return c.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return e.call(this, a, b, k);
        default:
          var g = null;
          if (3 < arguments.length) {
            g = 0;
            for (var h = Array(arguments.length - 3); g < h.length;) {
              h[g] = arguments[g + 3], ++g;
            }
            g = new cljs.core.IndexedSeq(h, 0, null);
          }
          return f.cljs$core$IFn$_invoke$arity$variadic(a, b, k, g);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = f.cljs$lang$applyTo;
    b.cljs$core$IFn$_invoke$arity$0 = function() {
      return null;
    };
    b.cljs$core$IFn$_invoke$arity$1 = c;
    b.cljs$core$IFn$_invoke$arity$2 = d;
    b.cljs$core$IFn$_invoke$arity$3 = e;
    b.cljs$core$IFn$_invoke$arity$variadic = f.cljs$core$IFn$_invoke$arity$variadic;
    return b;
  }();
};
cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function() {
    var c = null, d = function(c) {
      var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
      return cljs.core.truth_(d) ? d : b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
    }, e = function(c, d) {
      var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
      if (cljs.core.truth_(e)) {
        return e;
      }
      e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
      if (cljs.core.truth_(e)) {
        return e;
      }
      e = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
      return cljs.core.truth_(e) ? e : b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
    }, f = function(c, d, e) {
      var f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
      if (cljs.core.truth_(f)) {
        return f;
      }
      f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
      if (cljs.core.truth_(f)) {
        return f;
      }
      f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e);
      if (cljs.core.truth_(f)) {
        return f;
      }
      c = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
      if (cljs.core.truth_(c)) {
        return c;
      }
      d = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
      return cljs.core.truth_(d) ? d : b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(e) : b.call(null, e);
    }, g = function() {
      var d = function(d, e, f, g) {
        d = c.cljs$core$IFn$_invoke$arity$3(d, e, f);
        return cljs.core.truth_(d) ? d : cljs.core.some(function(c) {
          return function(c) {
            var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
            return cljs.core.truth_(d) ? d : b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c);
          };
        }(d), g);
      }, e = function(a, b, c, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return d.call(this, a, b, c, f);
      };
      e.cljs$lang$maxFixedArity = 3;
      e.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return d(b, c, e, a);
      };
      e.cljs$core$IFn$_invoke$arity$variadic = d;
      return e;
    }();
    c = function(a, b, c, m) {
      switch(arguments.length) {
        case 0:
          return null;
        case 1:
          return d.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return f.call(this, a, b, c);
        default:
          var h = null;
          if (3 < arguments.length) {
            h = 0;
            for (var k = Array(arguments.length - 3); h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new cljs.core.IndexedSeq(k, 0, null);
          }
          return g.cljs$core$IFn$_invoke$arity$variadic(a, b, c, h);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = g.cljs$lang$applyTo;
    c.cljs$core$IFn$_invoke$arity$0 = function() {
      return null;
    };
    c.cljs$core$IFn$_invoke$arity$1 = d;
    c.cljs$core$IFn$_invoke$arity$2 = e;
    c.cljs$core$IFn$_invoke$arity$3 = f;
    c.cljs$core$IFn$_invoke$arity$variadic = g.cljs$core$IFn$_invoke$arity$variadic;
    return c;
  }();
};
cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return function() {
    var d = null, e = function(d) {
      var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
      if (cljs.core.truth_(e)) {
        return e;
      }
      e = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
      return cljs.core.truth_(e) ? e : c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d);
    }, f = function(d, e) {
      var f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
      if (cljs.core.truth_(f)) {
        return f;
      }
      f = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
      if (cljs.core.truth_(f)) {
        return f;
      }
      f = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d);
      if (cljs.core.truth_(f)) {
        return f;
      }
      f = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e);
      if (cljs.core.truth_(f)) {
        return f;
      }
      f = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(e) : b.call(null, e);
      return cljs.core.truth_(f) ? f : c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(e) : c.call(null, e);
    }, g = function(d, e, f) {
      var g = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
      if (cljs.core.truth_(g)) {
        return g;
      }
      g = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
      if (cljs.core.truth_(g)) {
        return g;
      }
      d = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d);
      if (cljs.core.truth_(d)) {
        return d;
      }
      d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e);
      if (cljs.core.truth_(d)) {
        return d;
      }
      d = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(e) : b.call(null, e);
      if (cljs.core.truth_(d)) {
        return d;
      }
      e = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(e) : c.call(null, e);
      if (cljs.core.truth_(e)) {
        return e;
      }
      e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(f) : a.call(null, f);
      if (cljs.core.truth_(e)) {
        return e;
      }
      e = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(f) : b.call(null, f);
      return cljs.core.truth_(e) ? e : c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(f) : c.call(null, f);
    }, h = function() {
      var e = function(e, f, g, h) {
        e = d.cljs$core$IFn$_invoke$arity$3(e, f, g);
        return cljs.core.truth_(e) ? e : cljs.core.some(function(d) {
          return function(d) {
            var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
            if (cljs.core.truth_(e)) {
              return e;
            }
            e = b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d);
            return cljs.core.truth_(e) ? e : c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d);
          };
        }(e), h);
      }, f = function(a, b, c, d) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return e.call(this, a, b, c, f);
      };
      f.cljs$lang$maxFixedArity = 3;
      f.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.rest(a);
        return e(b, c, d, a);
      };
      f.cljs$core$IFn$_invoke$arity$variadic = e;
      return f;
    }();
    d = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return null;
        case 1:
          return e.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return g.call(this, a, b, c);
        default:
          var k = null;
          if (3 < arguments.length) {
            k = 0;
            for (var l = Array(arguments.length - 3); k < l.length;) {
              l[k] = arguments[k + 3], ++k;
            }
            k = new cljs.core.IndexedSeq(l, 0, null);
          }
          return h.cljs$core$IFn$_invoke$arity$variadic(a, b, c, k);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = h.cljs$lang$applyTo;
    d.cljs$core$IFn$_invoke$arity$0 = function() {
      return null;
    };
    d.cljs$core$IFn$_invoke$arity$1 = e;
    d.cljs$core$IFn$_invoke$arity$2 = f;
    d.cljs$core$IFn$_invoke$arity$3 = g;
    d.cljs$core$IFn$_invoke$arity$variadic = h.cljs$core$IFn$_invoke$arity$variadic;
    return d;
  }();
};
cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return function(a) {
    return function() {
      var b = null, c = function(b) {
        return cljs.core.some(function(a) {
          return function(a) {
            return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
          };
        }(a), a);
      }, d = function(b, c) {
        return cljs.core.some(function(a) {
          return function(a) {
            var d = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
            return cljs.core.truth_(d) ? d : a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
          };
        }(a), a);
      }, e = function(b, c, d) {
        return cljs.core.some(function(a) {
          return function(a) {
            var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
            if (cljs.core.truth_(e)) {
              return e;
            }
            e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c);
            return cljs.core.truth_(e) ? e : a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
          };
        }(a), a);
      }, l = function() {
        var c = function(c, d, e, f) {
          c = b.cljs$core$IFn$_invoke$arity$3(c, d, e);
          return cljs.core.truth_(c) ? c : cljs.core.some(function(a, b) {
            return function(a) {
              return cljs.core.some(a, f);
            };
          }(c, a), a);
        }, d = function(a, b, d, e) {
          var f = null;
          if (3 < arguments.length) {
            f = 0;
            for (var g = Array(arguments.length - 3); f < g.length;) {
              g[f] = arguments[f + 3], ++f;
            }
            f = new cljs.core.IndexedSeq(g, 0, null);
          }
          return c.call(this, a, b, d, f);
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a);
          a = cljs.core.next(a);
          var d = cljs.core.first(a);
          a = cljs.core.next(a);
          var e = cljs.core.first(a);
          a = cljs.core.rest(a);
          return c(b, d, e, a);
        };
        d.cljs$core$IFn$_invoke$arity$variadic = c;
        return d;
      }();
      b = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return c.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return e.call(this, a, b, f);
          default:
            var h = null;
            if (3 < arguments.length) {
              h = 0;
              for (var k = Array(arguments.length - 3); h < k.length;) {
                k[h] = arguments[h + 3], ++h;
              }
              h = new cljs.core.IndexedSeq(k, 0, null);
            }
            return l.cljs$core$IFn$_invoke$arity$variadic(a, b, f, h);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = l.cljs$lang$applyTo;
      b.cljs$core$IFn$_invoke$arity$0 = function() {
        return null;
      };
      b.cljs$core$IFn$_invoke$arity$1 = c;
      b.cljs$core$IFn$_invoke$arity$2 = d;
      b.cljs$core$IFn$_invoke$arity$3 = e;
      b.cljs$core$IFn$_invoke$arity$variadic = l.cljs$core$IFn$_invoke$arity$variadic;
      return b;
    }();
  }(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(a, b, c, d));
};
cljs.core.some_fn.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.some_fn.cljs$lang$maxFixedArity = 3;
cljs.core.map = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.map.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.map.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.map.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.map.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(4), 0, null);
      return cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], b);
  }
};
cljs.core.map.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function() {
      var c = null, d = function() {
        return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
      }, e = function(a) {
        return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
      }, f = function(c, d) {
        var e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
        return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, e) : b.call(null, c, e);
      }, g = function() {
        var c = function(c, d, e) {
          d = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(a, d, e);
          return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d);
        }, d = function(a, b, d) {
          var e = null;
          if (2 < arguments.length) {
            e = 0;
            for (var f = Array(arguments.length - 2); e < f.length;) {
              f[e] = arguments[e + 2], ++e;
            }
            e = new cljs.core.IndexedSeq(f, 0, null);
          }
          return c.call(this, a, b, e);
        };
        d.cljs$lang$maxFixedArity = 2;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a);
          a = cljs.core.next(a);
          var d = cljs.core.first(a);
          a = cljs.core.rest(a);
          return c(b, d, a);
        };
        d.cljs$core$IFn$_invoke$arity$variadic = c;
        return d;
      }();
      c = function(a, b, c) {
        switch(arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return f.call(this, a, b);
          default:
            var h = null;
            if (2 < arguments.length) {
              h = 0;
              for (var k = Array(arguments.length - 2); h < k.length;) {
                k[h] = arguments[h + 2], ++h;
              }
              h = new cljs.core.IndexedSeq(k, 0, null);
            }
            return g.cljs$core$IFn$_invoke$arity$variadic(a, b, h);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      c.cljs$lang$maxFixedArity = 2;
      c.cljs$lang$applyTo = g.cljs$lang$applyTo;
      c.cljs$core$IFn$_invoke$arity$0 = d;
      c.cljs$core$IFn$_invoke$arity$1 = e;
      c.cljs$core$IFn$_invoke$arity$2 = f;
      c.cljs$core$IFn$_invoke$arity$variadic = g.cljs$core$IFn$_invoke$arity$variadic;
      return c;
    }();
  };
};
cljs.core.map.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(b);
    if (c) {
      if (cljs.core.chunked_seq_QMARK_(c)) {
        for (var d = cljs.core.chunk_first(c), e = cljs.core.count(d), f = cljs.core.chunk_buffer(e), g = 0;;) {
          if (g < e) {
            cljs.core.chunk_append(f, function() {
              var b = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(d, g);
              return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return cljs.core.chunk_cons(cljs.core.chunk(f), cljs.core.map.cljs$core$IFn$_invoke$arity$2(a, cljs.core.chunk_rest(c)));
      }
      return cljs.core.cons(function() {
        var b = cljs.core.first(c);
        return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
      }(), cljs.core.map.cljs$core$IFn$_invoke$arity$2(a, cljs.core.rest(c)));
    }
    return null;
  }, null, null);
};
cljs.core.map.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.core.LazySeq(null, function() {
    var d = cljs.core.seq(b), e = cljs.core.seq(c);
    return d && e ? cljs.core.cons(function() {
      var b = cljs.core.first(d), c = cljs.core.first(e);
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
    }(), cljs.core.map.cljs$core$IFn$_invoke$arity$3(a, cljs.core.rest(d), cljs.core.rest(e))) : null;
  }, null, null);
};
cljs.core.map.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return new cljs.core.LazySeq(null, function() {
    var e = cljs.core.seq(b), f = cljs.core.seq(c), g = cljs.core.seq(d);
    return e && f && g ? cljs.core.cons(function() {
      var b = cljs.core.first(e), c = cljs.core.first(f), d = cljs.core.first(g);
      return a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.call(null, b, c, d);
    }(), cljs.core.map.cljs$core$IFn$_invoke$arity$4(a, cljs.core.rest(e), cljs.core.rest(f), cljs.core.rest(g))) : null;
  }, null, null);
};
cljs.core.map.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e) {
  var f = function h(a) {
    return new cljs.core.LazySeq(null, function() {
      var b = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq, a);
      return cljs.core.every_QMARK_(cljs.core.identity, b) ? cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first, b), h(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest, b))) : null;
    }, null, null);
  };
  return cljs.core.map.cljs$core$IFn$_invoke$arity$2(function(b) {
    return function(b) {
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a, b);
    };
  }(f), f(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(e, d, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c, b], 0))));
};
cljs.core.map.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  e = cljs.core.next(e);
  return cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e);
};
cljs.core.map.cljs$lang$maxFixedArity = 4;
cljs.core.take = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.take.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.take.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.take.cljs$core$IFn$_invoke$arity$1 = function(a) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return function(b) {
    return function(a) {
      return function() {
        var c = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(c, d) {
          var e = cljs.core.deref(a), f = cljs.core._vreset_BANG_(a, cljs.core._deref(a) - 1);
          e = 0 < e ? b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d) : c;
          return 0 < f ? e : cljs.core.ensure_reduced(e);
        };
        c = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        c.cljs$core$IFn$_invoke$arity$0 = e;
        c.cljs$core$IFn$_invoke$arity$1 = f;
        c.cljs$core$IFn$_invoke$arity$2 = g;
        return c;
      }();
    }(cljs.core.volatile_BANG_(a));
  };
};
cljs.core.take.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return new cljs.core.LazySeq(null, function() {
    if (0 < a) {
      var c = cljs.core.seq(b);
      return c ? cljs.core.cons(cljs.core.first(c), cljs.core.take.cljs$core$IFn$_invoke$arity$2(a - 1, cljs.core.rest(c))) : null;
    }
    return null;
  }, null, null);
};
cljs.core.take.cljs$lang$maxFixedArity = 2;
cljs.core.drop = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.drop.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.drop.cljs$core$IFn$_invoke$arity$1 = function(a) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return function(b) {
    return function(a) {
      return function() {
        var c = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(c, d) {
          var e = cljs.core.deref(a);
          cljs.core._vreset_BANG_(a, cljs.core._deref(a) - 1);
          return 0 < e ? c : b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d);
        };
        c = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        c.cljs$core$IFn$_invoke$arity$0 = e;
        c.cljs$core$IFn$_invoke$arity$1 = f;
        c.cljs$core$IFn$_invoke$arity$2 = g;
        return c;
      }();
    }(cljs.core.volatile_BANG_(a));
  };
};
cljs.core.drop.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return new cljs.core.LazySeq(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var c = cljs.core.seq(b);
      if (0 < a && c) {
        var d = a - 1;
        c = cljs.core.rest(c);
        a = d;
        b = c;
      } else {
        return c;
      }
    }
  }), null, null);
};
cljs.core.drop.cljs$lang$maxFixedArity = 2;
cljs.core.drop_last = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(1, a);
};
cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.map.cljs$core$IFn$_invoke$arity$3(function(a, b) {
    return a;
  }, b, cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a, b));
};
cljs.core.drop_last.cljs$lang$maxFixedArity = 2;
cljs.core.take_last = function(a, b) {
  for (var c = cljs.core.seq(b), d = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a, b));;) {
    if (d) {
      c = cljs.core.next(c), d = cljs.core.next(d);
    } else {
      return c;
    }
  }
};
cljs.core.drop_while = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function(c) {
      return function() {
        var d = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(d, e) {
          var f = cljs.core.deref(c);
          if (cljs.core.truth_(cljs.core.truth_(f) ? a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e) : f)) {
            return d;
          }
          cljs.core.vreset_BANG_(c, null);
          return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, e) : b.call(null, d, e);
        };
        d = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        d.cljs$core$IFn$_invoke$arity$0 = e;
        d.cljs$core$IFn$_invoke$arity$1 = f;
        d.cljs$core$IFn$_invoke$arity$2 = g;
        return d;
      }();
    }(cljs.core.volatile_BANG_(!0));
  };
};
cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var c = cljs.core.seq(b);
      if (cljs.core.truth_(function() {
        var b = c;
        return b ? (b = cljs.core.first(c), a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b)) : b;
      }())) {
        var d = a, g = cljs.core.rest(c);
        a = d;
        b = g;
      } else {
        return c;
      }
    }
  }), null, null);
};
cljs.core.drop_while.cljs$lang$maxFixedArity = 2;
cljs.core.cycle = function(a) {
  return new cljs.core.LazySeq(null, function() {
    var b = cljs.core.seq(a);
    return b ? cljs.core.concat.cljs$core$IFn$_invoke$arity$2(b, cljs.core.cycle.cljs$core$IFn$_invoke$arity$1 ? cljs.core.cycle.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.cycle.call(null, b)) : null;
  }, null, null);
};
cljs.core.split_at = function(a, b) {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, b), cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a, b)], null);
};
cljs.core.repeat = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.repeat.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return new cljs.core.LazySeq(null, function() {
    return cljs.core.cons(a, cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(a));
  }, null, null);
};
cljs.core.repeat.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b));
};
cljs.core.repeat.cljs$lang$maxFixedArity = 2;
cljs.core.replicate = function(a, b) {
  return cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b));
};
cljs.core.repeatedly = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return new cljs.core.LazySeq(null, function() {
    return cljs.core.cons(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null), cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(a));
  }, null, null);
};
cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(b));
};
cljs.core.repeatedly.cljs$lang$maxFixedArity = 2;
cljs.core.iterate = function(a, b) {
  return cljs.core.cons(b, new cljs.core.LazySeq(null, function() {
    var c = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
    return cljs.core.iterate.cljs$core$IFn$_invoke$arity$2 ? cljs.core.iterate.cljs$core$IFn$_invoke$arity$2(a, c) : cljs.core.iterate.call(null, a, c);
  }, null, null));
};
cljs.core.interleave = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.interleave.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.interleave.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(2), 0, null);
      return cljs.core.interleave.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
  }
};
cljs.core.interleave.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.List.EMPTY;
};
cljs.core.interleave.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return new cljs.core.LazySeq(null, function() {
    return a;
  }, null, null);
};
cljs.core.interleave.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(a), d = cljs.core.seq(b);
    return c && d ? cljs.core.cons(cljs.core.first(c), cljs.core.cons(cljs.core.first(d), cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(c), cljs.core.rest(d)))) : null;
  }, null, null);
};
cljs.core.interleave.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return new cljs.core.LazySeq(null, function() {
    var d = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq, cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(c, b, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)));
    return cljs.core.every_QMARK_(cljs.core.identity, d) ? cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first, d), cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave, cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest, d))) : null;
  }, null, null);
};
cljs.core.interleave.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.interleave.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.interleave.cljs$lang$maxFixedArity = 2;
cljs.core.interpose = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.interpose.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function(c) {
      return function() {
        var d = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(d, e) {
          if (cljs.core.truth_(cljs.core.deref(c))) {
            var f = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, a) : b.call(null, d, a);
            return cljs.core.reduced_QMARK_(f) ? f : b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(f, e) : b.call(null, f, e);
          }
          cljs.core.vreset_BANG_(c, !0);
          return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, e) : b.call(null, d, e);
        };
        d = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        d.cljs$core$IFn$_invoke$arity$0 = e;
        d.cljs$core$IFn$_invoke$arity$1 = f;
        d.cljs$core$IFn$_invoke$arity$2 = g;
        return d;
      }();
    }(cljs.core.volatile_BANG_(!1));
  };
};
cljs.core.interpose.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(1, cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(a), b));
};
cljs.core.interpose.cljs$lang$maxFixedArity = 2;
cljs.core.flatten1 = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, function() {
      var d = cljs.core.seq(a);
      return d ? cljs.core.cons(cljs.core.first(d), c(cljs.core.rest(d), e)) : cljs.core.seq(e) ? c(cljs.core.first(e), cljs.core.rest(e)) : null;
    }, null, null);
  }(null, a);
};
cljs.core.mapcat = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(1), 0, null);
      return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
  }
};
cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(a), cljs.core.cat);
};
cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat, cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map, a, b));
};
cljs.core.mapcat.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.mapcat.cljs$lang$maxFixedArity = 1;
cljs.core.filter = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.filter.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function() {
      var c = null, d = function() {
        return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
      }, e = function(a) {
        return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
      }, f = function(c, d) {
        return cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d)) ? b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d) : c;
      };
      c = function(a, b) {
        switch(arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return f.call(this, a, b);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      c.cljs$core$IFn$_invoke$arity$0 = d;
      c.cljs$core$IFn$_invoke$arity$1 = e;
      c.cljs$core$IFn$_invoke$arity$2 = f;
      return c;
    }();
  };
};
cljs.core.filter.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(b);
    if (c) {
      if (cljs.core.chunked_seq_QMARK_(c)) {
        for (var d = cljs.core.chunk_first(c), e = cljs.core.count(d), f = cljs.core.chunk_buffer(e), g = 0;;) {
          if (g < e) {
            cljs.core.truth_(function() {
              var b = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(d, g);
              return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
            }()) && cljs.core.chunk_append(f, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(d, g)), g += 1;
          } else {
            break;
          }
        }
        return cljs.core.chunk_cons(cljs.core.chunk(f), cljs.core.filter.cljs$core$IFn$_invoke$arity$2(a, cljs.core.chunk_rest(c)));
      }
      e = cljs.core.first(c);
      c = cljs.core.rest(c);
      return cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e)) ? cljs.core.cons(e, cljs.core.filter.cljs$core$IFn$_invoke$arity$2(a, c)) : cljs.core.filter.cljs$core$IFn$_invoke$arity$2(a, c);
    }
    return null;
  }, null, null);
};
cljs.core.filter.cljs$lang$maxFixedArity = 2;
cljs.core.remove = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.remove.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.remove.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(a));
};
cljs.core.remove.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(a), b);
};
cljs.core.remove.cljs$lang$maxFixedArity = 2;
cljs.core.tree_seq = function(a, b, c) {
  return function e(c) {
    return new cljs.core.LazySeq(null, function() {
      return cljs.core.cons(c, cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c)) ? cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c)], 0)) : null);
    }, null, null);
  }(c);
};
cljs.core.flatten = function(a) {
  return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function(a) {
    return !cljs.core.sequential_QMARK_(a);
  }, cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_, cljs.core.seq, a)));
};
cljs.core.into = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.into.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.into.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.into.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.into.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.into.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.PersistentVector.EMPTY;
};
cljs.core.into.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return a;
};
cljs.core.into.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return null != a ? null != a && (a.cljs$lang$protocol_mask$partition1$ & 4 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IEditableCollection$) ? cljs.core._with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_, cljs.core.transient$(a), b)), cljs.core.meta(a)) : cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj, a, b) : cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj, cljs.core.List.EMPTY, b);
};
cljs.core.into.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return null != a && (a.cljs$lang$protocol_mask$partition1$ & 4 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IEditableCollection$) ? cljs.core._with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(b, cljs.core.conj_BANG_, cljs.core.transient$(a), c)), cljs.core.meta(a)) : cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(b, cljs.core.conj, a, c);
};
cljs.core.into.cljs$lang$maxFixedArity = 3;
cljs.core.mapv = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(4), 0, null);
      return cljs.core.mapv.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], b);
  }
};
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(b, d) {
    return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(b, a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d));
  }, cljs.core.transient$(cljs.core.PersistentVector.EMPTY), b));
};
cljs.core.mapv.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY, cljs.core.map.cljs$core$IFn$_invoke$arity$3(a, b, c));
};
cljs.core.mapv.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY, cljs.core.map.cljs$core$IFn$_invoke$arity$4(a, b, c, d));
};
cljs.core.mapv.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e) {
  return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY, cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map, a, b, c, d, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
};
cljs.core.mapv.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  e = cljs.core.next(e);
  return cljs.core.mapv.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e);
};
cljs.core.mapv.cljs$lang$maxFixedArity = 4;
cljs.core.filterv = function(a, b) {
  return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(b, d) {
    return cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d)) ? cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(b, d) : b;
  }, cljs.core.transient$(cljs.core.PersistentVector.EMPTY), b));
};
cljs.core.partition = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.partition.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.partition.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.partition.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.partition.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.partition.cljs$core$IFn$_invoke$arity$3(a, a, b);
};
cljs.core.partition.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.core.LazySeq(null, function() {
    var d = cljs.core.seq(c);
    if (d) {
      var e = cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, d);
      return a === cljs.core.count(e) ? cljs.core.cons(e, cljs.core.partition.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.drop.cljs$core$IFn$_invoke$arity$2(b, d))) : null;
    }
    return null;
  }, null, null);
};
cljs.core.partition.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return new cljs.core.LazySeq(null, function() {
    var e = cljs.core.seq(d);
    if (e) {
      var f = cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, e);
      if (a === cljs.core.count(f)) {
        return cljs.core.cons(f, cljs.core.partition.cljs$core$IFn$_invoke$arity$4(a, b, c, cljs.core.drop.cljs$core$IFn$_invoke$arity$2(b, e)));
      }
      e = cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f, c));
      return cljs.core._conj(cljs.core.List.EMPTY, e);
    }
    return null;
  }, null, null);
};
cljs.core.partition.cljs$lang$maxFixedArity = 4;
cljs.core.get_in = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.get_in.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.get, a, b);
};
cljs.core.get_in.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = cljs.core.lookup_sentinel;
  for (b = cljs.core.seq(b);;) {
    if (null != b) {
      a = cljs.core.get.cljs$core$IFn$_invoke$arity$3(a, cljs.core.first(b), d);
      if (d === a) {
        return c;
      }
      b = cljs.core.next(b);
    } else {
      return a;
    }
  }
};
cljs.core.get_in.cljs$lang$maxFixedArity = 3;
cljs.core.assoc_in = function(a, b, c) {
  b = cljs.core.seq(b);
  var d = cljs.core.first(b), e = cljs.core.next(b);
  return e ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, d, function() {
    var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, d);
    return cljs.core.assoc_in.cljs$core$IFn$_invoke$arity$3 ? cljs.core.assoc_in.cljs$core$IFn$_invoke$arity$3(b, e, c) : cljs.core.assoc_in.call(null, b, e, c);
  }()) : cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, d, c);
};
cljs.core.update_in = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(6), 0, null);
      return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], b);
  }
};
cljs.core.update_in.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  b = cljs.core.seq(b);
  var d = cljs.core.first(b);
  return (b = cljs.core.next(b)) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, d, cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, d), b, c)) : cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, d, function() {
    var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, d);
    return c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(b) : c.call(null, b);
  }());
};
cljs.core.update_in.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  b = cljs.core.seq(b);
  var e = cljs.core.first(b);
  return (b = cljs.core.next(b)) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, e, cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, e), b, c, d)) : cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, e, function() {
    var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, e);
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(b, d) : c.call(null, b, d);
  }());
};
cljs.core.update_in.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  b = cljs.core.seq(b);
  var f = cljs.core.first(b);
  return (b = cljs.core.next(b)) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, f, cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, f), b, c, d, e)) : cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, f, function() {
    var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, f);
    return c.cljs$core$IFn$_invoke$arity$3 ? c.cljs$core$IFn$_invoke$arity$3(b, d, e) : c.call(null, b, d, e);
  }());
};
cljs.core.update_in.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  b = cljs.core.seq(b);
  var g = cljs.core.first(b);
  return (b = cljs.core.next(b)) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, g, cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, g), b, c, d, e, f)) : cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, g, function() {
    var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, g);
    return c.cljs$core$IFn$_invoke$arity$4 ? c.cljs$core$IFn$_invoke$arity$4(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e, f, g) {
  var h = cljs.core.seq(b);
  b = cljs.core.first(h);
  return (h = cljs.core.next(h)) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in, cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b), h, c, d, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e, f, g], 0))) : cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(c, cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b), d, e, f, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 
  0)));
};
cljs.core.update_in.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  var f = cljs.core.next(e);
  e = cljs.core.first(f);
  var g = cljs.core.next(f);
  f = cljs.core.first(g);
  g = cljs.core.next(g);
  return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e, f, g);
};
cljs.core.update_in.cljs$lang$maxFixedArity = 6;
cljs.core.update = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.update.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.update.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core.update.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return cljs.core.update.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(6), 0, null);
      return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], b);
  }
};
cljs.core.update.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, function() {
    var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b);
    return c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d);
  }());
};
cljs.core.update.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, function() {
    var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b);
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(e, d) : c.call(null, e, d);
  }());
};
cljs.core.update.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, function() {
    var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b);
    return c.cljs$core$IFn$_invoke$arity$3 ? c.cljs$core$IFn$_invoke$arity$3(f, d, e) : c.call(null, f, d, e);
  }());
};
cljs.core.update.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, function() {
    var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b);
    return c.cljs$core$IFn$_invoke$arity$4 ? c.cljs$core$IFn$_invoke$arity$4(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
cljs.core.update.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d, e, f, g) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(c, cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, b), d, e, f, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0)));
};
cljs.core.update.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  var e = cljs.core.next(d);
  d = cljs.core.first(e);
  var f = cljs.core.next(e);
  e = cljs.core.first(f);
  var g = cljs.core.next(f);
  f = cljs.core.first(g);
  g = cljs.core.next(g);
  return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d, e, f, g);
};
cljs.core.update.cljs$lang$maxFixedArity = 6;
cljs.core.VectorNode = function(a, b) {
  this.edit = a;
  this.arr = b;
};
cljs.core.VectorNode.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "edit", "edit", -1302639, null), new cljs.core.Symbol(null, "arr", "arr", 2115492975, null)], null);
};
cljs.core.VectorNode.cljs$lang$type = !0;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/VectorNode");
};
cljs.core.__GT_VectorNode = function(a, b) {
  return new cljs.core.VectorNode(a, b);
};
cljs.core.pv_fresh_node = function(a) {
  return new cljs.core.VectorNode(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
};
cljs.core.pv_aget = function(a, b) {
  return a.arr[b];
};
cljs.core.pv_aset = function(a, b, c) {
  return a.arr[b] = c;
};
cljs.core.pv_clone_node = function(a) {
  return new cljs.core.VectorNode(a.edit, cljs.core.aclone(a.arr));
};
cljs.core.tail_off = function(a) {
  a = a.cnt;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
};
cljs.core.new_path = function(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = cljs.core.pv_fresh_node(a);
    cljs.core.pv_aset(d, 0, c);
    c = d;
    b -= 5;
  }
};
cljs.core.push_tail = function(a, b, c, d) {
  var e = cljs.core.pv_clone_node(c), f = a.cnt - 1 >>> b & 31;
  5 === b ? cljs.core.pv_aset(e, f, d) : (c = cljs.core.pv_aget(c, f), null != c ? (b -= 5, a = cljs.core.push_tail.cljs$core$IFn$_invoke$arity$4 ? cljs.core.push_tail.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : cljs.core.push_tail.call(null, a, b, c, d)) : a = cljs.core.new_path(null, b - 5, d), cljs.core.pv_aset(e, f, a));
  return e;
};
cljs.core.vector_index_out_of_bounds = function(a, b) {
  throw Error(["No item ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), " in vector of length ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.first_array_for_longvec = function(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      b = cljs.core.pv_aget(b, 0), a -= 5;
    } else {
      return b.arr;
    }
  }
};
cljs.core.unchecked_array_for = function(a, b) {
  if (b >= cljs.core.tail_off(a)) {
    return a.tail;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      c = cljs.core.pv_aget(c, b >>> d & 31), d -= 5;
    } else {
      return c.arr;
    }
  }
};
cljs.core.array_for = function(a, b) {
  return 0 <= b && b < a.cnt ? cljs.core.unchecked_array_for(a, b) : cljs.core.vector_index_out_of_bounds(b, a.cnt);
};
cljs.core.do_assoc = function(a, b, c, d, e) {
  var f = cljs.core.pv_clone_node(c);
  if (0 === b) {
    cljs.core.pv_aset(f, d & 31, e);
  } else {
    var g = d >>> b & 31;
    cljs.core.pv_aset(f, g, function() {
      var f = b - 5, k = cljs.core.pv_aget(c, g);
      return cljs.core.do_assoc.cljs$core$IFn$_invoke$arity$5 ? cljs.core.do_assoc.cljs$core$IFn$_invoke$arity$5(a, f, k, d, e) : cljs.core.do_assoc.call(null, a, f, k, d, e);
    }());
  }
  return f;
};
cljs.core.pop_tail = function(a, b, c) {
  var d = a.cnt - 2 >>> b & 31;
  if (5 < b) {
    b -= 5;
    var e = cljs.core.pv_aget(c, d);
    a = cljs.core.pop_tail.cljs$core$IFn$_invoke$arity$3 ? cljs.core.pop_tail.cljs$core$IFn$_invoke$arity$3(a, b, e) : cljs.core.pop_tail.call(null, a, b, e);
    if (null == a && 0 === d) {
      return null;
    }
    c = cljs.core.pv_clone_node(c);
    cljs.core.pv_aset(c, d, a);
    return c;
  }
  if (0 === d) {
    return null;
  }
  c = cljs.core.pv_clone_node(c);
  cljs.core.pv_aset(c, d, null);
  return c;
};
cljs.core.RangedIterator = function(a, b, c, d, e, f) {
  this.i = a;
  this.base = b;
  this.arr = c;
  this.v = d;
  this.start = e;
  this.end = f;
};
cljs.core.RangedIterator.prototype.hasNext = function() {
  return this.i < this.end;
};
cljs.core.RangedIterator.prototype.next = function() {
  32 === this.i - this.base && (this.arr = cljs.core.unchecked_array_for(this.v, this.i), this.base += 32);
  var a = this.arr[this.i & 31];
  this.i += 1;
  return a;
};
cljs.core.RangedIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "base", "base", 1825810849, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, 
  "arr", "arr", 2115492975, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "v", "v", 1661996586, null), new cljs.core.Symbol(null, "start", "start", 1285322546, null), new cljs.core.Symbol(null, "end", "end", 1372345569, null)], null);
};
cljs.core.RangedIterator.cljs$lang$type = !0;
cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";
cljs.core.RangedIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/RangedIterator");
};
cljs.core.__GT_RangedIterator = function(a, b, c, d, e, f) {
  return new cljs.core.RangedIterator(a, b, c, d, e, f);
};
cljs.core.ranged_iterator = function(a, b, c) {
  return new cljs.core.RangedIterator(b, b - b % 32, b < cljs.core.count(a) ? cljs.core.unchecked_array_for(a, b) : null, a, b, c);
};
cljs.core.pv_reduce = function(a) {
  switch(arguments.length) {
    case 4:
      return cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return c < d ? cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$5(a, b, cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a, c), c + 1, d) : b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
};
cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  var f = c;
  c = d;
  for (d = cljs.core.unchecked_array_for(a, d);;) {
    if (c < e) {
      var g = c & 31;
      d = 0 === g ? cljs.core.unchecked_array_for(a, c) : d;
      g = d[g];
      f = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(f, g) : b.call(null, f, g);
      if (cljs.core.reduced_QMARK_(f)) {
        return cljs.core.deref(f);
      }
      c += 1;
    } else {
      return f;
    }
  }
};
cljs.core.pv_reduce.cljs$lang$maxFixedArity = 5;
cljs.core.APersistentVector = function() {
};
cljs.core.PersistentVector = function(a, b, c, d, e, f) {
  this.meta = a;
  this.cnt = b;
  this.shift = c;
  this.root = d;
  this.tail = e;
  this.__hash = f;
  this.cljs$lang$protocol_mask$partition0$ = 167668511;
  this.cljs$lang$protocol_mask$partition1$ = 139268;
};
cljs.core.PersistentVector.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentVector.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  return 0 <= b && b < this.cnt ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b, cljs.core.unchecked_array_for(this, b)[b & 31]], null) : null;
};
cljs.core.PersistentVector.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentVector.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentVector.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentVector.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return "number" === typeof b ? this.cljs$core$IIndexed$_nth$arity$3(null, b, c) : c;
};
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.cnt) {
      var e = cljs.core.unchecked_array_for(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, h = e[f];
            d = b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(d, g, h) : b.call(null, d, g, h);
            if (cljs.core.reduced_QMARK_(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (cljs.core.reduced_QMARK_(e)) {
        return cljs.core.deref(e);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$APersistentVector$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return cljs.core.array_for(this, b)[b & 31];
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 <= b && b < this.cnt ? cljs.core.unchecked_array_for(this, b)[b & 31] : c;
};
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  if (0 <= b && b < this.cnt) {
    return cljs.core.tail_off(this) <= b ? (a = cljs.core.aclone(this.tail), a[b & 31] = c, new cljs.core.PersistentVector(this.meta, this.cnt, this.shift, this.root, a, null)) : new cljs.core.PersistentVector(this.meta, this.cnt, this.shift, cljs.core.do_assoc(this, this.shift, this.root, b, c), this.tail, null);
  }
  if (b === this.cnt) {
    return this.cljs$core$ICollection$_conj$arity$2(null, c);
  }
  throw Error(["Index ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), " out of bounds  [0,", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.cnt), "]"].join(""));
};
cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return cljs.core.ranged_iterator(this, 0, this.cnt);
};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.PersistentVector(this.meta, this.cnt, this.shift, this.root, this.tail, this.__hash);
};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.cnt;
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = function(a) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, 0);
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = function(a) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, 1);
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return 0 < this.cnt ? this.cljs$core$IIndexed$_nth$arity$2(null, this.cnt - 1) : null;
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  if (0 === this.cnt) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.cnt) {
    return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY, this.meta);
  }
  if (1 < this.cnt - cljs.core.tail_off(this)) {
    return new cljs.core.PersistentVector(this.meta, this.cnt - 1, this.shift, this.root, this.tail.slice(0, -1), null);
  }
  a = cljs.core.unchecked_array_for(this, this.cnt - 2);
  var b = cljs.core.pop_tail(this, this.shift, this.root);
  b = null == b ? cljs.core.PersistentVector.EMPTY_NODE : b;
  var c = this.cnt - 1;
  return 5 < this.shift && null == cljs.core.pv_aget(b, 1) ? new cljs.core.PersistentVector(this.meta, c, this.shift - 5, cljs.core.pv_aget(b, 0), a, null) : new cljs.core.PersistentVector(this.meta, c, this.shift, b, a, null);
};
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = function(a) {
  return 0 < this.cnt ? new cljs.core.RSeq(this, this.cnt - 1, null) : null;
};
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  if (b instanceof cljs.core.PersistentVector) {
    if (this.cnt === cljs.core.count(b)) {
      for (var c = this.cljs$core$IIterable$_iterator$arity$1(null), d = cljs.core._iterator(b);;) {
        if (c.hasNext()) {
          var e = c.next(), f = d.next();
          if (!cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e, f)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return cljs.core.equiv_sequential(this, b);
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(a) {
  return new cljs.core.TransientVector(this.cnt, this.shift, cljs.core.tv_editable_root(this.root), cljs.core.tv_editable_tail(this.tail));
};
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY, this.meta);
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$4(this, b, 0, this.cnt);
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.cnt) {
      var e = cljs.core.unchecked_array_for(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f];
            d = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, g) : b.call(null, d, g);
            if (cljs.core.reduced_QMARK_(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (cljs.core.reduced_QMARK_(e)) {
        return cljs.core.deref(e);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  if ("number" === typeof b) {
    return this.cljs$core$IVector$_assoc_n$arity$3(null, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return cljs.core.integer_QMARK_(b) ? 0 <= b && b < this.cnt : !1;
};
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return 0 === this.cnt ? null : 32 >= this.cnt ? new cljs.core.IndexedSeq(this.tail, 0, null) : cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(this, cljs.core.first_array_for_longvec(this), 0, 0);
};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentVector(b, this.cnt, this.shift, this.root, this.tail, this.__hash);
};
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  if (32 > this.cnt - cljs.core.tail_off(this)) {
    for (var c = this.tail.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.tail[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new cljs.core.PersistentVector(this.meta, this.cnt + 1, this.shift, this.root, d, null);
  }
  c = (d = this.cnt >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = cljs.core.pv_fresh_node(null), cljs.core.pv_aset(d, 0, this.root), cljs.core.pv_aset(d, 1, cljs.core.new_path(null, this.shift, new cljs.core.VectorNode(null, this.tail)))) : d = cljs.core.push_tail(this, this.shift, this.root, new cljs.core.VectorNode(null, this.tail));
  return new cljs.core.PersistentVector(this.meta, this.cnt + 1, c, d, [b], null);
};
cljs.core.PersistentVector.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$IIndexed$_nth$arity$2(null, c);
      case 3:
        return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$IIndexed$_nth$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.PersistentVector.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, a);
};
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, a, b);
};
cljs.core.PersistentVector.getBasis = function() {
  return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null), new cljs.core.Symbol(null, "shift", "shift", -1657295705, null), new cljs.core.Symbol(null, "root", "root", 1191874074, null), new cljs.core.Symbol(null, "tail", "tail", 494507963, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 
  1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentVector.cljs$lang$type = !0;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentVector");
};
cljs.core.__GT_PersistentVector = function(a, b, c, d, e, f) {
  return new cljs.core.PersistentVector(a, b, c, d, e, f);
};
cljs.core.PersistentVector.EMPTY_NODE = new cljs.core.VectorNode(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
cljs.core.PersistentVector.EMPTY = new cljs.core.PersistentVector(null, 0, 5, cljs.core.PersistentVector.EMPTY_NODE, [], cljs.core.empty_ordered_hash);
cljs.core.PersistentVector.fromArray = function(a, b) {
  var c = a.length, d = b ? a : cljs.core.aclone(a);
  if (32 > c) {
    return new cljs.core.PersistentVector(null, c, 5, cljs.core.PersistentVector.EMPTY_NODE, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new cljs.core.PersistentVector(null, 32, 5, cljs.core.PersistentVector.EMPTY_NODE, e, null)).cljs$core$IEditableCollection$_as_transient$arity$1(null);;) {
    if (f < c) {
      e = f + 1, g = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(g, d[f]), f = e;
    } else {
      return cljs.core.persistent_BANG_(g);
    }
  }
};
var G__14973_14976 = cljs.core.PersistentVector.prototype, G__14974_14977 = cljs.core.ITER_SYMBOL, G__14975_14978 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14973_14976, G__14974_14977);
goog.object.set(G__14973_14976, G__14974_14977, G__14975_14978);
cljs.core.vec = function(a) {
  return cljs.core.array_QMARK_(a) ? cljs.core.PersistentVector.fromArray(a, !0) : cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_, cljs.core._as_transient(cljs.core.PersistentVector.EMPTY), a));
};
cljs.core.vector = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return a instanceof cljs.core.IndexedSeq && 0 === a.i ? cljs.core.PersistentVector.fromArray(a.arr, !0) : cljs.core.vec(a);
};
cljs.core.vector.cljs$lang$maxFixedArity = 0;
cljs.core.vector.cljs$lang$applyTo = function(a) {
  return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.ChunkedSeq = function(a, b, c, d, e, f) {
  this.vec = a;
  this.node = b;
  this.i = c;
  this.off = d;
  this.meta = e;
  this.__hash = f;
  this.cljs$lang$protocol_mask$partition0$ = 32375020;
  this.cljs$lang$protocol_mask$partition1$ = 1536;
};
cljs.core.ChunkedSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.ChunkedSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.ChunkedSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ChunkedSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return this.off + 1 < this.node.length ? (a = cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(this.vec, this.node, this.i, this.off + 1), null == a ? null : a) : this.cljs$core$IChunkedNext$_chunked_next$arity$1(null);
};
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY, this.meta);
};
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$4(this.vec, b, this.i + this.off, cljs.core.count(this.vec));
};
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$5(this.vec, b, c, this.i + this.off, cljs.core.count(this.vec));
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return this.node[this.off];
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return this.off + 1 < this.node.length ? (a = cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(this.vec, this.node, this.i, this.off + 1), null == a ? cljs.core.List.EMPTY : a) : this.cljs$core$IChunkedSeq$_chunked_rest$arity$1(null);
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = function(a) {
  return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(this.node, this.off);
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = function(a) {
  a = this.i + this.node.length;
  return a < cljs.core._count(this.vec) ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(this.vec, cljs.core.unchecked_array_for(this.vec, a), a, 0) : cljs.core.List.EMPTY;
};
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(this.vec, this.node, this.i, this.off, b);
};
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = function(a) {
  a = this.i + this.node.length;
  return a < cljs.core._count(this.vec) ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(this.vec, cljs.core.unchecked_array_for(this.vec, a), a, 0) : null;
};
cljs.core.ChunkedSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "vec", "vec", 982683596, null), new cljs.core.Symbol(null, "node", "node", -2073234571, null), new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.Symbol(null, "off", "off", -2047994980, null), new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 
  1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ChunkedSeq.cljs$lang$type = !0;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ChunkedSeq");
};
cljs.core.__GT_ChunkedSeq = function(a, b, c, d, e, f) {
  return new cljs.core.ChunkedSeq(a, b, c, d, e, f);
};
var G__14985_14988 = cljs.core.ChunkedSeq.prototype, G__14986_14989 = cljs.core.ITER_SYMBOL, G__14987_14990 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__14985_14988, G__14986_14989);
goog.object.set(G__14985_14988, G__14986_14989, G__14987_14990);
cljs.core.chunked_seq = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.core.ChunkedSeq(a, cljs.core.array_for(a, b), b, c, null, null);
};
cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return new cljs.core.ChunkedSeq(a, b, c, d, null, null);
};
cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return new cljs.core.ChunkedSeq(a, b, c, d, e, null);
};
cljs.core.chunked_seq.cljs$lang$maxFixedArity = 5;
cljs.core.Subvec = function(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 167666463;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
cljs.core.Subvec.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Subvec.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  if (0 > b) {
    return null;
  }
  var c = this.start + b;
  return c < this.end ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b, cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this.v, c)], null) : null;
};
cljs.core.Subvec.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.Subvec.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.Subvec.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Subvec.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return "number" === typeof b ? this.cljs$core$IIndexed$_nth$arity$3(null, b, c) : c;
};
cljs.core.Subvec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  a = this.start;
  for (var d = 0;;) {
    if (a < this.end) {
      var e = d, f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(this.v, a);
      c = b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(c, e, f) : b.call(null, c, e, f);
      if (cljs.core.reduced_QMARK_(c)) {
        return cljs.core.deref(c);
      }
      d += 1;
      a += 1;
    } else {
      return c;
    }
  }
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return 0 > b || this.end <= this.start + b ? cljs.core.vector_index_out_of_bounds(b, this.end - this.start) : cljs.core._nth.cljs$core$IFn$_invoke$arity$2(this.v, this.start + b);
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this.v, this.start + b, c);
};
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  var d = this, e = d.start + b;
  if (0 > b || d.end + 1 <= e) {
    throw Error(["Index ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), " out of bounds [0,", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.cljs$core$ICounted$_count$arity$1(null)), "]"].join(""));
  }
  return cljs.core.build_subvec(d.meta, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d.v, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
cljs.core.Subvec.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return null != this.v && cljs.core.PROTOCOL_SENTINEL === this.v.cljs$core$APersistentVector$ ? cljs.core.ranged_iterator(this.v, this.start, this.end) : cljs.core.seq_iter(this);
};
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.Subvec(this.meta, this.v, this.start, this.end, this.__hash);
};
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.end - this.start;
};
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(this.v, this.end - 1);
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return cljs.core.build_subvec(this.meta, this.v, this.start, this.end - 1, null);
};
cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = function(a) {
  return this.start !== this.end ? new cljs.core.RSeq(this, this.end - this.start - 1, null) : null;
};
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY, this.meta);
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return null != this.v && cljs.core.PROTOCOL_SENTINEL === this.v.cljs$core$APersistentVector$ ? cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$4(this.v, b, this.start, this.end) : cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, b);
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return null != this.v && cljs.core.PROTOCOL_SENTINEL === this.v.cljs$core$APersistentVector$ ? cljs.core.pv_reduce.cljs$core$IFn$_invoke$arity$5(this.v, b, c, this.start, this.end) : cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this, b, c);
};
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  if ("number" === typeof b) {
    return this.cljs$core$IVector$_assoc_n$arity$3(null, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  var b = this;
  return function(a) {
    return function e(c) {
      return c === b.end ? null : cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b.v, c), new cljs.core.LazySeq(null, function(a) {
        return function() {
          return e(c + 1);
        };
      }(a), null, null));
    };
  }(this)(b.start);
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core.build_subvec(b, this.v, this.start, this.end, this.__hash);
};
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.build_subvec(this.meta, cljs.core._assoc_n(this.v, this.end, b), this.start, this.end + 1, null);
};
cljs.core.Subvec.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$IIndexed$_nth$arity$2(null, c);
      case 3:
        return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$IIndexed$_nth$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.Subvec.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, a);
};
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, a, b);
};
cljs.core.Subvec.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "v", "v", 1661996586, null), new cljs.core.Symbol(null, "start", "start", 1285322546, null), new cljs.core.Symbol(null, "end", "end", 1372345569, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", 
  "mutable", 875778266), !0], null))], null);
};
cljs.core.Subvec.cljs$lang$type = !0;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Subvec");
};
cljs.core.__GT_Subvec = function(a, b, c, d, e) {
  return new cljs.core.Subvec(a, b, c, d, e);
};
var G__15007_15010 = cljs.core.Subvec.prototype, G__15008_15011 = cljs.core.ITER_SYMBOL, G__15009_15012 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15007_15010, G__15008_15011);
goog.object.set(G__15007_15010, G__15008_15011, G__15009_15012);
cljs.core.build_subvec = function(a, b, c, d, e) {
  for (;;) {
    if (b instanceof cljs.core.Subvec) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      if (!cljs.core.vector_QMARK_(b)) {
        throw Error("v must satisfy IVector");
      }
      var f = cljs.core.count(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new cljs.core.Subvec(a, b, c, d, e);
    }
  }
};
cljs.core.subvec = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.subvec.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.count(a));
};
cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (null == b || null == c) {
    throw Error("Assert failed: (and (not (nil? start)) (not (nil? end)))");
  }
  return cljs.core.build_subvec(null, a, b, c, null);
};
cljs.core.subvec.cljs$lang$maxFixedArity = 3;
cljs.core.tv_ensure_editable = function(a, b) {
  return a === b.edit ? b : new cljs.core.VectorNode(a, cljs.core.aclone(b.arr));
};
cljs.core.tv_editable_root = function(a) {
  return new cljs.core.VectorNode({}, cljs.core.aclone(a.arr));
};
cljs.core.tv_editable_tail = function(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  cljs.core.array_copy(a, 0, b, 0, a.length);
  return b;
};
cljs.core.tv_push_tail = function(a, b, c, d) {
  var e = cljs.core.tv_ensure_editable(a.root.edit, c), f = a.cnt - 1 >>> b & 31;
  cljs.core.pv_aset(e, f, 5 === b ? d : function() {
    var c = cljs.core.pv_aget(e, f);
    if (null != c) {
      var h = b - 5;
      return cljs.core.tv_push_tail.cljs$core$IFn$_invoke$arity$4 ? cljs.core.tv_push_tail.cljs$core$IFn$_invoke$arity$4(a, h, c, d) : cljs.core.tv_push_tail.call(null, a, h, c, d);
    }
    return cljs.core.new_path(a.root.edit, b - 5, d);
  }());
  return e;
};
cljs.core.tv_pop_tail = function(a, b, c) {
  c = cljs.core.tv_ensure_editable(a.root.edit, c);
  var d = a.cnt - 2 >>> b & 31;
  if (5 < b) {
    b -= 5;
    var e = cljs.core.pv_aget(c, d);
    a = cljs.core.tv_pop_tail.cljs$core$IFn$_invoke$arity$3 ? cljs.core.tv_pop_tail.cljs$core$IFn$_invoke$arity$3(a, b, e) : cljs.core.tv_pop_tail.call(null, a, b, e);
    if (null == a && 0 === d) {
      return null;
    }
    cljs.core.pv_aset(c, d, a);
    return c;
  }
  if (0 === d) {
    return null;
  }
  cljs.core.pv_aset(c, d, null);
  return c;
};
cljs.core.unchecked_editable_array_for = function(a, b) {
  if (b >= cljs.core.tail_off(a)) {
    return a.tail;
  }
  for (var c = a.root, d = c, e = a.shift;;) {
    if (0 < e) {
      d = cljs.core.tv_ensure_editable(c.edit, cljs.core.pv_aget(d, b >>> e & 31)), e -= 5;
    } else {
      return d.arr;
    }
  }
};
cljs.core.TransientVector = function(a, b, c, d) {
  this.cnt = a;
  this.shift = b;
  this.root = c;
  this.tail = d;
  this.cljs$lang$protocol_mask$partition1$ = 88;
  this.cljs$lang$protocol_mask$partition0$ = 275;
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  if (this.root.edit) {
    if (32 > this.cnt - cljs.core.tail_off(this)) {
      this.tail[this.cnt & 31] = b;
    } else {
      var c = new cljs.core.VectorNode(this.root.edit, this.tail), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.tail = d;
      if (this.cnt >>> 5 > 1 << this.shift) {
        d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        var e = this.shift + 5;
        d[0] = this.root;
        d[1] = cljs.core.new_path(this.root.edit, this.shift, c);
        this.root = new cljs.core.VectorNode(this.root.edit, d);
        this.shift = e;
      } else {
        this.root = cljs.core.tv_push_tail(this, this.shift, this.root, c);
      }
    }
    this.cnt += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(a) {
  if (this.root.edit) {
    this.root.edit = null;
    a = this.cnt - cljs.core.tail_off(this);
    var b = Array(a);
    cljs.core.array_copy(this.tail, 0, b, 0, a);
    return new cljs.core.PersistentVector(null, this.cnt, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(a, b, c) {
  if ("number" === typeof b) {
    return this.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(null, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = function(a, b, c) {
  var d = this, e = this;
  if (d.root.edit) {
    if (0 <= b && b < d.cnt) {
      return cljs.core.tail_off(e) <= b ? d.tail[b & 31] = c : (a = function() {
        return function(a) {
          return function h(a, e) {
            var f = cljs.core.tv_ensure_editable(d.root.edit, e);
            if (0 === a) {
              cljs.core.pv_aset(f, b & 31, c);
            } else {
              var k = b >>> a & 31;
              cljs.core.pv_aset(f, k, h(a - 5, cljs.core.pv_aget(f, k)));
            }
            return f;
          };
        }(e)(d.shift, d.root);
      }(), d.root = a), e;
    }
    if (b === d.cnt) {
      return e.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null, c);
    }
    throw Error(["Index ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), " out of bounds for TransientVector of length", cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.cnt)].join(""));
  }
  throw Error("assoc! after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = function(a) {
  if (this.root.edit) {
    if (0 === this.cnt) {
      throw Error("Can't pop empty vector");
    }
    if (1 === this.cnt) {
      this.cnt = 0;
    } else {
      if (0 < (this.cnt - 1 & 31)) {
        --this.cnt;
      } else {
        a = cljs.core.unchecked_editable_array_for(this, this.cnt - 2);
        var b = cljs.core.tv_pop_tail(this, this.shift, this.root);
        b = null != b ? b : new cljs.core.VectorNode(this.root.edit, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
        5 < this.shift && null == cljs.core.pv_aget(b, 1) ? (this.root = cljs.core.tv_ensure_editable(this.root.edit, cljs.core.pv_aget(b, 0)), this.shift -= 5) : this.root = b;
        --this.cnt;
        this.tail = a;
      }
    }
    return this;
  }
  throw Error("pop! after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  if (this.root.edit) {
    return this.cnt;
  }
  throw Error("count after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  if (this.root.edit) {
    return cljs.core.array_for(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 <= b && b < this.cnt ? this.cljs$core$IIndexed$_nth$arity$2(null, b) : c;
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return "number" === typeof b ? this.cljs$core$IIndexed$_nth$arity$3(null, b, c) : c;
};
cljs.core.TransientVector.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(null, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$ILookup$_lookup$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.TransientVector.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, a);
};
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.TransientVector.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "shift", "shift", -1657295705, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, 
  "root", "root", 1191874074, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "tail", "tail", 494507963, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.TransientVector.cljs$lang$type = !0;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/TransientVector");
};
cljs.core.__GT_TransientVector = function(a, b, c, d) {
  return new cljs.core.TransientVector(a, b, c, d);
};
cljs.core.PersistentQueueIter = function(a, b) {
  this.fseq = a;
  this.riter = b;
};
cljs.core.PersistentQueueIter.prototype.hasNext = function() {
  var a = null != this.fseq && cljs.core.seq(this.fseq);
  return a ? a : (a = null != this.riter) ? this.riter.hasNext() : a;
};
cljs.core.PersistentQueueIter.prototype.next = function() {
  if (null != this.fseq) {
    var a = cljs.core.first(this.fseq);
    this.fseq = cljs.core.next(this.fseq);
    return a;
  }
  if (null != this.riter && this.riter.hasNext()) {
    return this.riter.next();
  }
  throw Error("No such element");
};
cljs.core.PersistentQueueIter.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.PersistentQueueIter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "fseq", "fseq", -1466412450, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "riter", "riter", -237834262, null)], null);
};
cljs.core.PersistentQueueIter.cljs$lang$type = !0;
cljs.core.PersistentQueueIter.cljs$lang$ctorStr = "cljs.core/PersistentQueueIter";
cljs.core.PersistentQueueIter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentQueueIter");
};
cljs.core.__GT_PersistentQueueIter = function(a, b) {
  return new cljs.core.PersistentQueueIter(a, b);
};
cljs.core.PersistentQueueSeq = function(a, b, c, d) {
  this.meta = a;
  this.front = b;
  this.rear = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition0$ = 31850700;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.PersistentQueueSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentQueueSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentQueueSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentQueueSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return (a = cljs.core.next(this.front)) ? new cljs.core.PersistentQueueSeq(this.meta, a, this.rear, null) : null != this.rear ? new cljs.core.PersistentQueueSeq(this.meta, this.rear, null, null) : null;
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return cljs.core.first(this.front);
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return (a = cljs.core.next(this.front)) ? new cljs.core.PersistentQueueSeq(this.meta, a, this.rear, null) : null == this.rear ? this.cljs$core$IEmptyableCollection$_empty$arity$1(null) : new cljs.core.PersistentQueueSeq(this.meta, this.rear, null, null);
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentQueueSeq(b, this.front, this.rear, this.__hash);
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.PersistentQueueSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "front", "front", 117022539, null), new cljs.core.Symbol(null, "rear", "rear", -900164830, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentQueueSeq.cljs$lang$type = !0;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentQueueSeq");
};
cljs.core.__GT_PersistentQueueSeq = function(a, b, c, d) {
  return new cljs.core.PersistentQueueSeq(a, b, c, d);
};
var G__15038_15041 = cljs.core.PersistentQueueSeq.prototype, G__15039_15042 = cljs.core.ITER_SYMBOL, G__15040_15043 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15038_15041, G__15039_15042);
goog.object.set(G__15038_15041, G__15039_15042, G__15040_15043);
cljs.core.PersistentQueue = function(a, b, c, d, e) {
  this.meta = a;
  this.count = b;
  this.front = c;
  this.rear = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
  this.cljs$lang$protocol_mask$partition0$ = 31858766;
};
cljs.core.PersistentQueue.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentQueue.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentQueue.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentQueue.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, this.count.cljs$core$IFn$_invoke$arity$1 ? this.count.cljs$core$IFn$_invoke$arity$1(this) : this.count.call(null, this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentQueue.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.PersistentQueueIter(this.front, cljs.core._iterator(this.rear));
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.PersistentQueue(this.meta, this.count, this.front, this.rear, this.__hash);
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.count;
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return cljs.core.first(this.front);
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  return cljs.core.truth_(this.front) ? (a = cljs.core.next(this.front)) ? new cljs.core.PersistentQueue(this.meta, this.count - 1, a, this.rear, null) : new cljs.core.PersistentQueue(this.meta, this.count - 1, cljs.core.seq(this.rear), cljs.core.PersistentVector.EMPTY, null) : this;
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.PersistentQueue.EMPTY, this.meta);
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return cljs.core.first(this.front);
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return cljs.core.rest(cljs.core.seq(this));
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  var b = this, c = cljs.core.seq(b.rear);
  return cljs.core.truth_(function() {
    var a = b.front;
    return cljs.core.truth_(a) ? a : c;
  }()) ? new cljs.core.PersistentQueueSeq(null, b.front, cljs.core.seq(c), null) : null;
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentQueue(b, this.count, this.front, this.rear, this.__hash);
};
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  var c = this;
  return cljs.core.truth_(c.front) ? new cljs.core.PersistentQueue(c.meta, c.count + 1, c.front, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(function() {
    var a = c.rear;
    return cljs.core.truth_(a) ? a : cljs.core.PersistentVector.EMPTY;
  }(), b), null) : new cljs.core.PersistentQueue(c.meta, c.count + 1, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c.front, b), cljs.core.PersistentVector.EMPTY, null);
};
cljs.core.PersistentQueue.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "count", "count", -514511684, null), new cljs.core.Symbol(null, "front", "front", 117022539, null), new cljs.core.Symbol(null, "rear", "rear", -900164830, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentQueue.cljs$lang$type = !0;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentQueue");
};
cljs.core.__GT_PersistentQueue = function(a, b, c, d, e) {
  return new cljs.core.PersistentQueue(a, b, c, d, e);
};
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.PersistentVector.EMPTY, cljs.core.empty_ordered_hash);
var G__15046_15049 = cljs.core.PersistentQueue.prototype, G__15047_15050 = cljs.core.ITER_SYMBOL, G__15048_15051 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15046_15049, G__15047_15050);
goog.object.set(G__15046_15049, G__15047_15050, G__15048_15051);
cljs.core.NeverEquiv = function() {
  this.cljs$lang$protocol_mask$partition0$ = 2097152;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.NeverEquiv.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return !1;
};
cljs.core.NeverEquiv.getBasis = function() {
  return cljs.core.PersistentVector.EMPTY;
};
cljs.core.NeverEquiv.cljs$lang$type = !0;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/NeverEquiv");
};
cljs.core.__GT_NeverEquiv = function() {
  return new cljs.core.NeverEquiv;
};
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function(a, b) {
  return cljs.core.boolean$(cljs.core.map_QMARK_(b) && !cljs.core.record_QMARK_(b) ? cljs.core.count(a) === cljs.core.count(b) ? (null != a ? a.cljs$lang$protocol_mask$partition0$ & 1048576 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IKVReduce$ || (a.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce, a)) : cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce, a)) ? cljs.core.reduce_kv(function(a, d, e) {
    return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(b, d, cljs.core.never_equiv), e) ? !0 : cljs.core.reduced(!1);
  }, !0, a) : cljs.core.every_QMARK_(function(a) {
    return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(b, cljs.core.first(a), cljs.core.never_equiv), cljs.core.second(a));
  }, a) : null : null);
};
cljs.core.scan_array = function(a, b, c) {
  for (var d = c.length, e = 0;;) {
    if (e < d) {
      if (b === c[e]) {
        return e;
      }
      e += a;
    } else {
      return null;
    }
  }
};
cljs.core.obj_map_compare_keys = function(a, b) {
  var c = cljs.core.hash(a), d = cljs.core.hash(b);
  return c < d ? -1 : c > d ? 1 : 0;
};
cljs.core.obj_map__GT_hash_map = function(a, b, c) {
  var d = a.keys, e = d.length, f = a.strobj;
  a = cljs.core.meta(a);
  for (var g = 0, h = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);;) {
    if (g < e) {
      var k = d[g];
      g += 1;
      h = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(h, k, goog.object.get(f, k));
    } else {
      return cljs.core._with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(h, b, c)), a);
    }
  }
};
cljs.core.obj_clone = function(a, b) {
  for (var c = {}, d = b.length, e = 0;;) {
    if (e < d) {
      var f = b[e], g = c, h = f;
      f = goog.object.get(a, f);
      goog.object.set(g, h, f);
      e += 1;
    } else {
      break;
    }
  }
  return c;
};
cljs.core.ObjMap = function(a, b, c, d, e) {
  this.meta = a;
  this.keys = b;
  this.strobj = c;
  this.update_count = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 16123663;
  this.cljs$lang$protocol_mask$partition1$ = 4;
};
cljs.core.ObjMap.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ObjMap.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  return goog.isString(b) && null != cljs.core.scan_array(1, b, this.keys) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b, this.strobj[b]], null) : null;
};
cljs.core.ObjMap.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.ObjMap.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return goog.isString(b) && null != cljs.core.scan_array(1, b, this.keys) ? this.strobj[b] : c;
};
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  a = this.keys.sort(cljs.core.obj_map_compare_keys);
  for (var d = c;;) {
    if (cljs.core.seq(a)) {
      var e = c = cljs.core.first(a);
      c = this.strobj[c];
      c = b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(d, e, c) : b.call(null, d, e, c);
      if (cljs.core.reduced_QMARK_(c)) {
        return cljs.core.deref(c);
      }
      a = cljs.core.rest(a);
      d = c;
    } else {
      return d;
    }
  }
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.keys.length;
};
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_unordered_coll(this);
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map(this, b);
};
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(a) {
  return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY, this));
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.ObjMap.EMPTY, this.meta);
};
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  if (goog.isString(b) && null != cljs.core.scan_array(1, b, this.keys)) {
    var c = cljs.core.aclone(this.keys), d = cljs.core.obj_clone(this.strobj, this.keys);
    c.splice(cljs.core.scan_array(1, b, c), 1);
    delete d[b];
    return new cljs.core.ObjMap(this.meta, c, d, this.update_count + 1, null);
  }
  return this;
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  if (goog.isString(b)) {
    if (this.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD || this.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD) {
      return cljs.core.obj_map__GT_hash_map(this, b, c);
    }
    if (null != cljs.core.scan_array(1, b, this.keys)) {
      return a = cljs.core.obj_clone(this.strobj, this.keys), goog.object.set(a, b, c), new cljs.core.ObjMap(this.meta, this.keys, a, this.update_count + 1, null);
    }
    a = cljs.core.obj_clone(this.strobj, this.keys);
    var d = cljs.core.aclone(this.keys);
    goog.object.set(a, b, c);
    d.push(b);
    return new cljs.core.ObjMap(this.meta, d, a, this.update_count + 1, null);
  }
  return cljs.core.obj_map__GT_hash_map(this, b, c);
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return goog.isString(b) && null != cljs.core.scan_array(1, b, this.keys) ? !0 : !1;
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  var b = this;
  return 0 < b.keys.length ? cljs.core.map.cljs$core$IFn$_invoke$arity$2(function(a) {
    return function(a) {
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a, b.strobj[a]], null);
    };
  }(this), b.keys.sort(cljs.core.obj_map_compare_keys)) : null;
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.ObjMap(b, this.keys, this.strobj, this.update_count, this.__hash);
};
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_(b) ? this.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 0), cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 1)) : cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj, this, b);
};
cljs.core.ObjMap.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(null, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$ILookup$_lookup$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.ObjMap.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, a);
};
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.ObjMap.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "keys", "keys", -1586012071, null), new cljs.core.Symbol(null, "strobj", "strobj", 1088091283, null), new cljs.core.Symbol(null, "update-count", "update-count", -411982269, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ObjMap.cljs$lang$type = !0;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ObjMap");
};
cljs.core.__GT_ObjMap = function(a, b, c, d, e) {
  return new cljs.core.ObjMap(a, b, c, d, e);
};
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, [], {}, 0, cljs.core.empty_unordered_hash);
cljs.core.ObjMap.HASHMAP_THRESHOLD = 8;
cljs.core.ObjMap.fromObject = function(a, b) {
  return new cljs.core.ObjMap(null, a, b, 0, null);
};
cljs.core.RecordIter = function(a, b, c, d, e) {
  this.i = a;
  this.record = b;
  this.base_count = c;
  this.fields = d;
  this.ext_map_iter = e;
};
cljs.core.RecordIter.prototype.hasNext = function() {
  var a = this.i < this.base_count;
  return a ? a : this.ext_map_iter.hasNext();
};
cljs.core.RecordIter.prototype.next = function() {
  if (this.i < this.base_count) {
    var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this.fields, this.i);
    this.i += 1;
    return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a, cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this.record, a)], null);
  }
  return this.ext_map_iter.next();
};
cljs.core.RecordIter.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.RecordIter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "record", "record", 861424668, null), new cljs.core.Symbol(null, "base-count", "base-count", -1180647182, null), new cljs.core.Symbol(null, "fields", "fields", -291534703, null), new cljs.core.Symbol(null, 
  "ext-map-iter", "ext-map-iter", -1215982757, null)], null);
};
cljs.core.RecordIter.cljs$lang$type = !0;
cljs.core.RecordIter.cljs$lang$ctorStr = "cljs.core/RecordIter";
cljs.core.RecordIter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/RecordIter");
};
cljs.core.__GT_RecordIter = function(a, b, c, d, e) {
  return new cljs.core.RecordIter(a, b, c, d, e);
};
cljs.core.ES6EntriesIterator = function(a) {
  this.s = a;
};
cljs.core.ES6EntriesIterator.prototype.next = function() {
  if (null != this.s) {
    var a = cljs.core.first(this.s), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a, 0, null);
    a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a, 1, null);
    this.s = cljs.core.next(this.s);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
cljs.core.ES6EntriesIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "s", "s", -948495851, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ES6EntriesIterator.cljs$lang$type = !0;
cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";
cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ES6EntriesIterator");
};
cljs.core.__GT_ES6EntriesIterator = function(a) {
  return new cljs.core.ES6EntriesIterator(a);
};
cljs.core.es6_entries_iterator = function(a) {
  return new cljs.core.ES6EntriesIterator(cljs.core.seq(a));
};
cljs.core.ES6SetEntriesIterator = function(a) {
  this.s = a;
};
cljs.core.ES6SetEntriesIterator.prototype.next = function() {
  if (null != this.s) {
    var a = cljs.core.first(this.s);
    this.s = cljs.core.next(this.s);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
cljs.core.ES6SetEntriesIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "s", "s", -948495851, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ES6SetEntriesIterator.cljs$lang$type = !0;
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ES6SetEntriesIterator");
};
cljs.core.__GT_ES6SetEntriesIterator = function(a) {
  return new cljs.core.ES6SetEntriesIterator(a);
};
cljs.core.es6_set_entries_iterator = function(a) {
  return new cljs.core.ES6SetEntriesIterator(cljs.core.seq(a));
};
cljs.core.array_index_of_nil_QMARK_ = function(a) {
  for (var b = a.length, c = 0;;) {
    if (b <= c) {
      return -1;
    }
    if (null == a[c]) {
      return c;
    }
    c += 2;
  }
};
cljs.core.array_index_of_keyword_QMARK_ = function(a, b) {
  for (var c = a.length, d = b.fqn, e = 0;;) {
    if (c <= e) {
      return -1;
    }
    if (a[e] instanceof cljs.core.Keyword && d === a[e].fqn) {
      return e;
    }
    e += 2;
  }
};
cljs.core.array_index_of_symbol_QMARK_ = function(a, b) {
  for (var c = a.length, d = b.str, e = 0;;) {
    if (c <= e) {
      return -1;
    }
    if (a[e] instanceof cljs.core.Symbol && d === a[e].str) {
      return e;
    }
    e += 2;
  }
};
cljs.core.array_index_of_identical_QMARK_ = function(a, b) {
  for (var c = a.length, d = 0;;) {
    if (c <= d) {
      return -1;
    }
    if (b === a[d]) {
      return d;
    }
    d += 2;
  }
};
cljs.core.array_index_of_equiv_QMARK_ = function(a, b) {
  for (var c = a.length, d = 0;;) {
    if (c <= d) {
      return -1;
    }
    if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b, a[d])) {
      return d;
    }
    d += 2;
  }
};
cljs.core.array_index_of = function(a, b) {
  return b instanceof cljs.core.Keyword ? cljs.core.array_index_of_keyword_QMARK_(a, b) : goog.isString(b) || "number" === typeof b ? cljs.core.array_index_of_identical_QMARK_(a, b) : b instanceof cljs.core.Symbol ? cljs.core.array_index_of_symbol_QMARK_(a, b) : null == b ? cljs.core.array_index_of_nil_QMARK_(a) : cljs.core.array_index_of_equiv_QMARK_(a, b);
};
cljs.core.array_map_index_of = function(a, b) {
  return cljs.core.array_index_of(a.arr, b);
};
cljs.core.array_extend_kv = function(a, b, c) {
  for (var d = a.length, e = Array(d + 2), f = 0;;) {
    if (f < d) {
      e[f] = a[f], f += 1;
    } else {
      break;
    }
  }
  e[d] = b;
  e[d + 1] = c;
  return e;
};
cljs.core.array_map_extend_kv = function(a, b, c) {
  return cljs.core.array_extend_kv(a.arr, b, c);
};
cljs.core.MapEntry = function(a, b, c) {
  this.key = a;
  this.val = b;
  this.__hash = c;
  this.cljs$lang$protocol_mask$partition0$ = 32402207;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.MapEntry.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.MapEntry.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  switch(b) {
    case 0:
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, this.key], null);
    case 1:
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, this.val], null);
    default:
      return null;
  }
};
cljs.core.MapEntry.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.MapEntry.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, b, null);
};
cljs.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, b, c);
};
cljs.core.MapEntry.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  if (0 === b) {
    return this.key;
  }
  if (1 === b) {
    return this.val;
  }
  throw Error("Index out of bounds");
};
cljs.core.MapEntry.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : c;
};
cljs.core.MapEntry.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return (new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null)).cljs$core$IVector$_assoc_n$arity$3(null, b, c);
};
cljs.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return null;
};
cljs.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return 2;
};
cljs.core.MapEntry.prototype.cljs$core$IMapEntry$_key$arity$1 = function(a) {
  return this.key;
};
cljs.core.MapEntry.prototype.cljs$core$IMapEntry$_val$arity$1 = function(a) {
  return this.val;
};
cljs.core.MapEntry.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return this.val;
};
cljs.core.MapEntry.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key], null);
};
cljs.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.MapEntry.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core.PersistentVector.EMPTY;
};
cljs.core.MapEntry.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, b);
};
cljs.core.MapEntry.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this, b, c);
};
cljs.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null), b, c);
};
cljs.core.MapEntry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return 0 === b || 1 === b;
};
cljs.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  a = this.key;
  return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY, this.val), a);
};
cljs.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null), b);
};
cljs.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val, b], null);
};
cljs.core.MapEntry.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$IIndexed$_nth$arity$2(null, c);
      case 3:
        return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$IIndexed$_nth$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.MapEntry.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.MapEntry.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, a);
};
cljs.core.MapEntry.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, a, b);
};
cljs.core.MapEntry.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "key", "key", 124488940, null), new cljs.core.Symbol(null, "val", "val", 1769233139, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.MapEntry.cljs$lang$type = !0;
cljs.core.MapEntry.cljs$lang$ctorStr = "cljs.core/MapEntry";
cljs.core.MapEntry.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/MapEntry");
};
cljs.core.__GT_MapEntry = function(a, b, c) {
  return new cljs.core.MapEntry(a, b, c);
};
cljs.core.PersistentArrayMapSeq = function(a, b, c) {
  this.arr = a;
  this.i = b;
  this._meta = c;
  this.cljs$lang$protocol_mask$partition0$ = 32374990;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.PersistentArrayMapSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentArrayMapSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentArrayMapSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentArrayMapSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this._meta;
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return this.i < this.arr.length - 2 ? new cljs.core.PersistentArrayMapSeq(this.arr, this.i + 2, this._meta) : null;
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return (this.arr.length - this.i) / 2;
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_ordered_coll(this);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this._meta);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.arr[this.i], this.arr[this.i + 1]], null);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return this.i < this.arr.length - 2 ? new cljs.core.PersistentArrayMapSeq(this.arr, this.i + 2, this._meta) : cljs.core.List.EMPTY;
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentArrayMapSeq(this.arr, this.i, b);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.PersistentArrayMapSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.Symbol(null, "_meta", "_meta", -1716892533, null)], null);
};
cljs.core.PersistentArrayMapSeq.cljs$lang$type = !0;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentArrayMapSeq");
};
cljs.core.__GT_PersistentArrayMapSeq = function(a, b, c) {
  return new cljs.core.PersistentArrayMapSeq(a, b, c);
};
var G__15095_15098 = cljs.core.PersistentArrayMapSeq.prototype, G__15096_15099 = cljs.core.ITER_SYMBOL, G__15097_15100 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15095_15098, G__15096_15099);
goog.object.set(G__15095_15098, G__15096_15099, G__15097_15100);
cljs.core.persistent_array_map_seq = function(a, b, c) {
  return b <= a.length - 2 ? new cljs.core.PersistentArrayMapSeq(a, b, c) : null;
};
cljs.core.PersistentArrayMapIterator = function(a, b, c) {
  this.arr = a;
  this.i = b;
  this.cnt = c;
};
cljs.core.PersistentArrayMapIterator.prototype.hasNext = function() {
  return this.i < this.cnt;
};
cljs.core.PersistentArrayMapIterator.prototype.next = function() {
  var a = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.arr[this.i], this.arr[this.i + 1]], null);
  this.i += 2;
  return a;
};
cljs.core.PersistentArrayMapIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null)], null);
};
cljs.core.PersistentArrayMapIterator.cljs$lang$type = !0;
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentArrayMapIterator");
};
cljs.core.__GT_PersistentArrayMapIterator = function(a, b, c) {
  return new cljs.core.PersistentArrayMapIterator(a, b, c);
};
cljs.core.PersistentArrayMap = function(a, b, c, d) {
  this.meta = a;
  this.cnt = b;
  this.arr = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition0$ = 16647951;
  this.cljs$lang$protocol_mask$partition1$ = 139268;
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentArrayMap.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  var c = cljs.core.array_map_index_of(this, b);
  return -1 === c ? null : new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.arr[c], this.arr[c + 1]], null);
};
cljs.core.PersistentArrayMap.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentArrayMap.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentArrayMap.prototype.keys = function() {
  return cljs.core.es6_iterator(cljs.core.keys(this));
};
cljs.core.PersistentArrayMap.prototype.entries = function() {
  return cljs.core.es6_entries_iterator(cljs.core.seq(this));
};
cljs.core.PersistentArrayMap.prototype.values = function() {
  return cljs.core.es6_iterator(cljs.core.vals(this));
};
cljs.core.PersistentArrayMap.prototype.has = function(a) {
  return cljs.core.contains_QMARK_(this, a);
};
cljs.core.PersistentArrayMap.prototype.get = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentArrayMap.prototype.forEach = function(a) {
  for (var b, c, d = cljs.core.seq(this), e = null, f = 0, g = 0;;) {
    if (g < f) {
      b = e.cljs$core$IIndexed$_nth$arity$2(null, g), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), g += 1;
    } else {
      if (c = cljs.core.seq(d)) {
        d = c, cljs.core.chunked_seq_QMARK_(d) ? (e = cljs.core.chunk_first(d), d = cljs.core.chunk_rest(d), c = e, b = cljs.core.count(e), e = c, f = b) : (e = cljs.core.first(d), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), d = cljs.core.next(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  a = cljs.core.array_map_index_of(this, b);
  return -1 === a ? c : this.arr[a + 1];
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  a = this.arr.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.arr[d], f = this.arr[d + 1];
      c = b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(c, e, f) : b.call(null, c, e, f);
      if (cljs.core.reduced_QMARK_(c)) {
        return cljs.core.deref(c);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.PersistentArrayMapIterator(this.arr, 0, 2 * this.cnt);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.PersistentArrayMap(this.meta, this.cnt, this.arr, this.__hash);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.cnt;
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_unordered_coll(this);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  if (cljs.core.map_QMARK_(b) && !cljs.core.record_QMARK_(b)) {
    var c = this.arr.length;
    if (this.cnt === b.cljs$core$ICounted$_count$arity$1(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.cljs$core$ILookup$_lookup$arity$3(null, this.arr[d], cljs.core.lookup_sentinel);
          if (e !== cljs.core.lookup_sentinel) {
            if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.arr[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return !1;
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(a) {
  return new cljs.core.TransientArrayMap({}, this.arr.length, cljs.core.aclone(this.arr));
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY, this.meta);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$2(this, b);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.iter_reduce.cljs$core$IFn$_invoke$arity$3(this, b, c);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  if (0 <= cljs.core.array_map_index_of(this, b)) {
    var c = this.arr.length, d = c - 2;
    if (0 === d) {
      return this.cljs$core$IEmptyableCollection$_empty$arity$1(null);
    }
    d = Array(d);
    for (var e = 0, f = 0;;) {
      if (e >= c) {
        return new cljs.core.PersistentArrayMap(this.meta, this.cnt - 1, d, null);
      }
      cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b, this.arr[e]) || (d[f] = this.arr[e], d[f + 1] = this.arr[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  a = cljs.core.array_map_index_of(this, b);
  if (-1 === a) {
    return this.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD ? (c = cljs.core.array_map_extend_kv(this, b, c), new cljs.core.PersistentArrayMap(this.meta, this.cnt + 1, c, null)) : cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY, this), b, c), this.meta);
  }
  if (c === this.arr[a + 1]) {
    return this;
  }
  b = cljs.core.aclone(this.arr);
  b[a + 1] = c;
  return new cljs.core.PersistentArrayMap(this.meta, this.cnt, b, null);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return -1 !== cljs.core.array_map_index_of(this, b);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return cljs.core.persistent_array_map_seq(this.arr, 0, null);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentArrayMap(b, this.cnt, this.arr, this.__hash);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return this.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 0), cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 1));
  }
  for (var c = this, d = cljs.core.seq(b);;) {
    if (null == d) {
      return c;
    }
    var e = cljs.core.first(d);
    if (cljs.core.vector_QMARK_(e)) {
      c = c.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e, 0), cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e, 1)), d = cljs.core.next(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
cljs.core.PersistentArrayMap.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(null, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$ILookup$_lookup$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.PersistentArrayMap.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, a);
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentArrayMap.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null), new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentArrayMap.cljs$lang$type = !0;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentArrayMap");
};
cljs.core.__GT_PersistentArrayMap = function(a, b, c, d) {
  return new cljs.core.PersistentArrayMap(a, b, c, d);
};
cljs.core.PersistentArrayMap.EMPTY = new cljs.core.PersistentArrayMap(null, 0, [], cljs.core.empty_unordered_hash);
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 8;
cljs.core.PersistentArrayMap.fromArray = function(a, b, c) {
  a = b ? a : cljs.core.aclone(a);
  if (!c) {
    c = [];
    for (b = 0;;) {
      if (b < a.length) {
        var d = a[b], e = a[b + 1];
        -1 === cljs.core.array_index_of(c, d) && (c.push(d), c.push(e));
        b += 2;
      } else {
        break;
      }
    }
    a = c;
  }
  return new cljs.core.PersistentArrayMap(null, a.length / 2, a, null);
};
cljs.core.PersistentArrayMap.createWithCheck = function(a) {
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      if (-1 === cljs.core.array_index_of(b, d)) {
        var f = b;
        f.push(d);
        f.push(e);
      } else {
        throw Error(["Duplicate key: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join(""));
      }
      c += 2;
    } else {
      break;
    }
  }
  return new cljs.core.PersistentArrayMap(null, a.length / 2, a, null);
};
cljs.core.PersistentArrayMap.createAsIfByAssoc = function(a) {
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1], f = cljs.core.array_index_of(b, d);
      -1 === f ? (f = b, f.push(d), f.push(e)) : b[f + 1] = e;
      c += 2;
    } else {
      break;
    }
  }
  return new cljs.core.PersistentArrayMap(null, b.length / 2, b, null);
};
var G__15159_15162 = cljs.core.PersistentArrayMap.prototype, G__15160_15163 = cljs.core.ITER_SYMBOL, G__15161_15164 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15159_15162, G__15160_15163);
goog.object.set(G__15159_15162, G__15160_15163, G__15161_15164);
cljs.core.TransientArrayMap = function(a, b, c) {
  this.editable_QMARK_ = a;
  this.len = b;
  this.arr = c;
  this.cljs$lang$protocol_mask$partition0$ = 258;
  this.cljs$lang$protocol_mask$partition1$ = 56;
};
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  if (cljs.core.truth_(this.editable_QMARK_)) {
    return cljs.core.quot(this.len, 2);
  }
  throw Error("count after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  if (cljs.core.truth_(this.editable_QMARK_)) {
    return a = cljs.core.array_map_index_of(this, b), -1 === a ? c : this.arr[a + 1];
  }
  throw Error("lookup after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  if (cljs.core.truth_(this.editable_QMARK_)) {
    if (null != b ? b.cljs$lang$protocol_mask$partition0$ & 2048 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$IMapEntry$ || (b.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry, b)) : cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry, b)) {
      return this.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null, cljs.core.key(b), cljs.core.val(b));
    }
    for (var c = cljs.core.seq(b), d = this;;) {
      var e = cljs.core.first(c);
      if (cljs.core.truth_(e)) {
        c = cljs.core.next(c), d = d.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null, cljs.core.key(e), cljs.core.val(e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(a) {
  if (cljs.core.truth_(this.editable_QMARK_)) {
    return this.editable_QMARK_ = !1, new cljs.core.PersistentArrayMap(null, cljs.core.quot(this.len, 2), this.arr, null);
  }
  throw Error("persistent! called twice");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(a, b, c) {
  if (cljs.core.truth_(this.editable_QMARK_)) {
    a = cljs.core.array_map_index_of(this, b);
    if (-1 === a) {
      return this.len + 2 <= 2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD ? (this.len += 2, this.arr.push(b), this.arr.push(c), this) : cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.array__GT_transient_hash_map(this.len, this.arr), b, c);
    }
    c !== this.arr[a + 1] && (this.arr[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(a, b) {
  if (cljs.core.truth_(this.editable_QMARK_)) {
    var c = cljs.core.array_map_index_of(this, b);
    0 <= c && (this.arr[c] = this.arr[this.len - 2], this.arr[c + 1] = this.arr[this.len - 1], c = this.arr, c.pop(), c.pop(), this.len -= 2);
    return this;
  }
  throw Error("dissoc! after persistent!");
};
cljs.core.TransientArrayMap.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "editable?", "editable?", -164945806, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "len", "len", -1230778691, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), 
  new cljs.core.Symbol(null, "arr", "arr", 2115492975, null)], null);
};
cljs.core.TransientArrayMap.cljs$lang$type = !0;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/TransientArrayMap");
};
cljs.core.__GT_TransientArrayMap = function(a, b, c) {
  return new cljs.core.TransientArrayMap(a, b, c);
};
cljs.core.array__GT_transient_hash_map = function(a, b) {
  for (var c = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY), d = 0;;) {
    if (d < a) {
      c = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
};
cljs.core.Box = function(a) {
  this.val = a;
};
cljs.core.Box.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "val", "val", 1769233139, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.Box.cljs$lang$type = !0;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Box");
};
cljs.core.__GT_Box = function(a) {
  return new cljs.core.Box(a);
};
cljs.core.key_test = function(a, b) {
  return a === b ? !0 : cljs.core.keyword_identical_QMARK_(a, b) ? !0 : cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a, b);
};
cljs.core.mask = function(a, b) {
  return a >>> b & 31;
};
cljs.core.clone_and_set = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 5:
      return cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  a = cljs.core.aclone(a);
  a[b] = c;
  return a;
};
cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  a = cljs.core.aclone(a);
  a[b] = c;
  a[d] = e;
  return a;
};
cljs.core.clone_and_set.cljs$lang$maxFixedArity = 5;
cljs.core.remove_pair = function(a, b) {
  var c = Array(a.length - 2);
  cljs.core.array_copy(a, 0, c, 0, 2 * b);
  cljs.core.array_copy(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
};
cljs.core.bitmap_indexed_node_index = function(a, b) {
  return cljs.core.bit_count(a & b - 1);
};
cljs.core.bitpos = function(a, b) {
  return 1 << (a >>> b & 31);
};
cljs.core.edit_and_set = function(a) {
  switch(arguments.length) {
    case 4:
      return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 6:
      return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  a = a.ensure_editable(b);
  a.arr[c] = d;
  return a;
};
cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  a = a.ensure_editable(b);
  a.arr[c] = d;
  a.arr[e] = f;
  return a;
};
cljs.core.edit_and_set.cljs$lang$maxFixedArity = 6;
cljs.core.inode_kv_reduce = function(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.kv_reduce(b, f) : f;
      }
      if (cljs.core.reduced_QMARK_(c)) {
        return c;
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
};
cljs.core.NodeIterator = function(a, b, c, d) {
  this.arr = a;
  this.i = b;
  this.next_entry = c;
  this.next_iter = d;
};
cljs.core.NodeIterator.prototype.advance = function() {
  for (var a = this.arr.length;;) {
    if (this.i < a) {
      var b = this.arr[this.i], c = this.arr[this.i + 1];
      null != b ? b = this.next_entry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b, c], null) : null != c ? (b = cljs.core._iterator(c), b = b.hasNext() ? this.next_iter = b : !1) : b = !1;
      this.i += 2;
      if (b) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
cljs.core.NodeIterator.prototype.hasNext = function() {
  var a = null != this.next_entry;
  return a ? a : (a = null != this.next_iter) ? a : this.advance();
};
cljs.core.NodeIterator.prototype.next = function() {
  if (null != this.next_entry) {
    var a = this.next_entry;
    this.next_entry = null;
    return a;
  }
  if (null != this.next_iter) {
    return a = this.next_iter.next(), this.next_iter.hasNext() || (this.next_iter = null), a;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
cljs.core.NodeIterator.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.NodeIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "next-entry", "next-entry", 1091342476, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "next-iter", "next-iter", 1526626239, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.NodeIterator.cljs$lang$type = !0;
cljs.core.NodeIterator.cljs$lang$ctorStr = "cljs.core/NodeIterator";
cljs.core.NodeIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/NodeIterator");
};
cljs.core.__GT_NodeIterator = function(a, b, c, d) {
  return new cljs.core.NodeIterator(a, b, c, d);
};
cljs.core.BitmapIndexedNode = function(a, b, c) {
  this.edit = a;
  this.bitmap = b;
  this.arr = c;
  this.cljs$lang$protocol_mask$partition1$ = 131072;
  this.cljs$lang$protocol_mask$partition0$ = 0;
};
cljs.core.BitmapIndexedNode.prototype.ensure_editable = function(a) {
  if (a === this.edit) {
    return this;
  }
  var b = cljs.core.bit_count(this.bitmap), c = Array(0 > b ? 4 : 2 * (b + 1));
  cljs.core.array_copy(this.arr, 0, c, 0, 2 * b);
  return new cljs.core.BitmapIndexedNode(a, this.bitmap, c);
};
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = function(a, b, c, d, e) {
  var f = 1 << (c >>> b & 31);
  if (0 === (this.bitmap & f)) {
    return this;
  }
  var g = cljs.core.bitmap_indexed_node_index(this.bitmap, f), h = this.arr[2 * g], k = this.arr[2 * g + 1];
  return null == h ? (b = k.inode_without_BANG_(a, b + 5, c, d, e), b === k ? this : null != b ? cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, 2 * g + 1, b) : this.bitmap === f ? null : this.edit_and_remove_pair(a, f, g)) : cljs.core.key_test(d, h) ? (e.val = !0, this.edit_and_remove_pair(a, f, g)) : this;
};
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = function(a, b, c) {
  if (this.bitmap === b) {
    return null;
  }
  a = this.ensure_editable(a);
  var d = a.arr, e = d.length;
  a.bitmap ^= b;
  cljs.core.array_copy(d, 2 * (c + 1), d, 2 * c, e - 2 * (c + 1));
  d[e - 2] = null;
  d[e - 1] = null;
  return a;
};
cljs.core.BitmapIndexedNode.prototype.inode_seq = function() {
  return cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(this.arr);
};
cljs.core.BitmapIndexedNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.inode_kv_reduce(this.arr, a, b);
};
cljs.core.BitmapIndexedNode.prototype.inode_lookup = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.bitmap & e)) {
    return d;
  }
  var f = cljs.core.bitmap_indexed_node_index(this.bitmap, e);
  e = this.arr[2 * f];
  f = this.arr[2 * f + 1];
  return null == e ? f.inode_lookup(a + 5, b, c, d) : cljs.core.key_test(c, e) ? f : d;
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = cljs.core.bitmap_indexed_node_index(this.bitmap, g);
  if (0 === (this.bitmap & g)) {
    var k = cljs.core.bit_count(this.bitmap);
    if (2 * k < this.arr.length) {
      return a = this.ensure_editable(a), b = a.arr, f.val = !0, cljs.core.array_copy_downward(b, 2 * h, b, 2 * (h + 1), 2 * (k - h)), b[2 * h] = d, b[2 * h + 1] = e, a.bitmap |= g, a;
    }
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.bitmap >>> d & 1) && (h[d] = null != this.arr[e] ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b + 5, cljs.core.hash(this.arr[e]), this.arr[e], this.arr[e + 1], f) : this.arr[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new cljs.core.ArrayNode(a, k + 1, h);
    }
    b = Array(2 * (k + 4));
    cljs.core.array_copy(this.arr, 0, b, 0, 2 * h);
    b[2 * h] = d;
    b[2 * h + 1] = e;
    cljs.core.array_copy(this.arr, 2 * h, b, 2 * (h + 1), 2 * (k - h));
    f.val = !0;
    a = this.ensure_editable(a);
    a.arr = b;
    a.bitmap |= g;
    return a;
  }
  k = this.arr[2 * h];
  g = this.arr[2 * h + 1];
  if (null == k) {
    return k = g.inode_assoc_BANG_(a, b + 5, c, d, e, f), k === g ? this : cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, 2 * h + 1, k);
  }
  if (cljs.core.key_test(d, k)) {
    return e === g ? this : cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, 2 * h + 1, e);
  }
  f.val = !0;
  return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(this, a, 2 * h, null, 2 * h + 1, cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(a, b + 5, k, g, c, d, e));
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = cljs.core.bitmap_indexed_node_index(this.bitmap, f);
  if (0 === (this.bitmap & f)) {
    var h = cljs.core.bit_count(this.bitmap);
    if (16 <= h) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.bitmap >>> c & 1) && (g[c] = null != this.arr[d] ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a + 5, cljs.core.hash(this.arr[d]), this.arr[d], this.arr[d + 1], e) : this.arr[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new cljs.core.ArrayNode(null, h + 1, g);
    }
    a = Array(2 * (h + 1));
    cljs.core.array_copy(this.arr, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    cljs.core.array_copy(this.arr, 2 * g, a, 2 * (g + 1), 2 * (h - g));
    e.val = !0;
    return new cljs.core.BitmapIndexedNode(null, this.bitmap | f, a);
  }
  h = this.arr[2 * g];
  f = this.arr[2 * g + 1];
  if (null == h) {
    return h = f.inode_assoc(a + 5, b, c, d, e), h === f ? this : new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, 2 * g + 1, h));
  }
  if (cljs.core.key_test(c, h)) {
    return d === f ? this : new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, 2 * g + 1, d));
  }
  e.val = !0;
  return new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(this.arr, 2 * g, null, 2 * g + 1, cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(a + 5, h, f, b, c, d)));
};
cljs.core.BitmapIndexedNode.prototype.inode_find = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.bitmap & e)) {
    return d;
  }
  var f = cljs.core.bitmap_indexed_node_index(this.bitmap, e);
  e = this.arr[2 * f];
  f = this.arr[2 * f + 1];
  return null == e ? f.inode_find(a + 5, b, c, d) : cljs.core.key_test(c, e) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e, f], null) : d;
};
cljs.core.BitmapIndexedNode.prototype.inode_without = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.bitmap & d)) {
    return this;
  }
  var e = cljs.core.bitmap_indexed_node_index(this.bitmap, d), f = this.arr[2 * e], g = this.arr[2 * e + 1];
  return null == f ? (a = g.inode_without(a + 5, b, c), a === g ? this : null != a ? new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, 2 * e + 1, a)) : this.bitmap === d ? null : new cljs.core.BitmapIndexedNode(null, this.bitmap ^ d, cljs.core.remove_pair(this.arr, e))) : cljs.core.key_test(c, f) ? new cljs.core.BitmapIndexedNode(null, this.bitmap ^ d, cljs.core.remove_pair(this.arr, e)) : this;
};
cljs.core.BitmapIndexedNode.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.NodeIterator(this.arr, 0, null, null);
};
cljs.core.BitmapIndexedNode.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "edit", "edit", -1302639, null), cljs.core.with_meta(new cljs.core.Symbol(null, "bitmap", "bitmap", 501334601, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.BitmapIndexedNode.cljs$lang$type = !0;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/BitmapIndexedNode");
};
cljs.core.__GT_BitmapIndexedNode = function(a, b, c) {
  return new cljs.core.BitmapIndexedNode(a, b, c);
};
cljs.core.BitmapIndexedNode.EMPTY = new cljs.core.BitmapIndexedNode(null, 0, []);
cljs.core.pack_array_node = function(a, b, c) {
  var d = a.arr, e = d.length;
  a = Array(2 * (a.cnt - 1));
  for (var f = 0, g = 1, h = 0;;) {
    if (f < e) {
      f !== c && null != d[f] && (a[g] = d[f], g += 2, h |= 1 << f), f += 1;
    } else {
      return new cljs.core.BitmapIndexedNode(b, h, a);
    }
  }
};
cljs.core.ArrayNodeIterator = function(a, b, c) {
  this.arr = a;
  this.i = b;
  this.next_iter = c;
};
cljs.core.ArrayNodeIterator.prototype.hasNext = function() {
  for (var a = this.arr.length;;) {
    if (null != this.next_iter && this.next_iter.hasNext()) {
      return !0;
    }
    if (this.i < a) {
      var b = this.arr[this.i];
      this.i += 1;
      null != b && (this.next_iter = cljs.core._iterator(b));
    } else {
      return !1;
    }
  }
};
cljs.core.ArrayNodeIterator.prototype.next = function() {
  if (this.hasNext()) {
    return this.next_iter.next();
  }
  throw Error("No such element");
};
cljs.core.ArrayNodeIterator.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.ArrayNodeIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "next-iter", "next-iter", 1526626239, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ArrayNodeIterator.cljs$lang$type = !0;
cljs.core.ArrayNodeIterator.cljs$lang$ctorStr = "cljs.core/ArrayNodeIterator";
cljs.core.ArrayNodeIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ArrayNodeIterator");
};
cljs.core.__GT_ArrayNodeIterator = function(a, b, c) {
  return new cljs.core.ArrayNodeIterator(a, b, c);
};
cljs.core.ArrayNode = function(a, b, c) {
  this.edit = a;
  this.cnt = b;
  this.arr = c;
  this.cljs$lang$protocol_mask$partition1$ = 131072;
  this.cljs$lang$protocol_mask$partition0$ = 0;
};
cljs.core.ArrayNode.prototype.ensure_editable = function(a) {
  return a === this.edit ? this : new cljs.core.ArrayNode(a, this.cnt, cljs.core.aclone(this.arr));
};
cljs.core.ArrayNode.prototype.inode_without_BANG_ = function(a, b, c, d, e) {
  var f = c >>> b & 31, g = this.arr[f];
  if (null == g) {
    return this;
  }
  b = g.inode_without_BANG_(a, b + 5, c, d, e);
  if (b === g) {
    return this;
  }
  if (null == b) {
    if (8 >= this.cnt) {
      return cljs.core.pack_array_node(this, a, f);
    }
    a = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, f, b);
    --a.cnt;
    return a;
  }
  return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, f, b);
};
cljs.core.ArrayNode.prototype.inode_seq = function() {
  return cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(this.arr);
};
cljs.core.ArrayNode.prototype.kv_reduce = function(a, b) {
  for (var c = this.arr.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.arr[d];
      if (null != f && (e = f.kv_reduce(a, e), cljs.core.reduced_QMARK_(e))) {
        return e;
      }
      d += 1;
    } else {
      return e;
    }
  }
};
cljs.core.ArrayNode.prototype.inode_lookup = function(a, b, c, d) {
  var e = this.arr[b >>> a & 31];
  return null != e ? e.inode_lookup(a + 5, b, c, d) : d;
};
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.arr[g];
  if (null == h) {
    return a = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, g, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b + 5, c, d, e, f)), a.cnt += 1, a;
  }
  b = h.inode_assoc_BANG_(a, b + 5, c, d, e, f);
  return b === h ? this : cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, g, b);
};
cljs.core.ArrayNode.prototype.inode_assoc = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.arr[f];
  if (null == g) {
    return new cljs.core.ArrayNode(null, this.cnt + 1, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, f, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a + 5, b, c, d, e)));
  }
  a = g.inode_assoc(a + 5, b, c, d, e);
  return a === g ? this : new cljs.core.ArrayNode(null, this.cnt, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, f, a));
};
cljs.core.ArrayNode.prototype.inode_find = function(a, b, c, d) {
  var e = this.arr[b >>> a & 31];
  return null != e ? e.inode_find(a + 5, b, c, d) : d;
};
cljs.core.ArrayNode.prototype.inode_without = function(a, b, c) {
  var d = b >>> a & 31, e = this.arr[d];
  return null != e ? (a = e.inode_without(a + 5, b, c), a === e ? this : null == a ? 8 >= this.cnt ? cljs.core.pack_array_node(this, null, d) : new cljs.core.ArrayNode(null, this.cnt - 1, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, d, a)) : new cljs.core.ArrayNode(null, this.cnt, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, d, a))) : this;
};
cljs.core.ArrayNode.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.ArrayNodeIterator(this.arr, 0, null);
};
cljs.core.ArrayNode.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "edit", "edit", -1302639, null), cljs.core.with_meta(new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ArrayNode.cljs$lang$type = !0;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ArrayNode");
};
cljs.core.__GT_ArrayNode = function(a, b, c) {
  return new cljs.core.ArrayNode(a, b, c);
};
cljs.core.hash_collision_node_find_index = function(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (cljs.core.key_test(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
};
cljs.core.HashCollisionNode = function(a, b, c, d) {
  this.edit = a;
  this.collision_hash = b;
  this.cnt = c;
  this.arr = d;
  this.cljs$lang$protocol_mask$partition1$ = 131072;
  this.cljs$lang$protocol_mask$partition0$ = 0;
};
cljs.core.HashCollisionNode.prototype.ensure_editable = function(a) {
  if (a === this.edit) {
    return this;
  }
  var b = Array(2 * (this.cnt + 1));
  cljs.core.array_copy(this.arr, 0, b, 0, 2 * this.cnt);
  return new cljs.core.HashCollisionNode(a, this.collision_hash, this.cnt, b);
};
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = function(a, b, c, d, e) {
  b = cljs.core.hash_collision_node_find_index(this.arr, this.cnt, d);
  if (-1 === b) {
    return this;
  }
  e.val = !0;
  if (1 === this.cnt) {
    return null;
  }
  a = this.ensure_editable(a);
  e = a.arr;
  e[b] = e[2 * this.cnt - 2];
  e[b + 1] = e[2 * this.cnt - 1];
  e[2 * this.cnt - 1] = null;
  e[2 * this.cnt - 2] = null;
  --a.cnt;
  return a;
};
cljs.core.HashCollisionNode.prototype.inode_seq = function() {
  return cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(this.arr);
};
cljs.core.HashCollisionNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.inode_kv_reduce(this.arr, a, b);
};
cljs.core.HashCollisionNode.prototype.inode_lookup = function(a, b, c, d) {
  a = cljs.core.hash_collision_node_find_index(this.arr, this.cnt, c);
  return 0 > a ? d : cljs.core.key_test(c, this.arr[a]) ? this.arr[a + 1] : d;
};
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = function(a, b, c, d, e, f) {
  if (c === this.collision_hash) {
    b = cljs.core.hash_collision_node_find_index(this.arr, this.cnt, d);
    if (-1 === b) {
      if (this.arr.length > 2 * this.cnt) {
        return a = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(this, a, 2 * this.cnt, d, 2 * this.cnt + 1, e), f.val = !0, a.cnt += 1, a;
      }
      b = this.arr.length;
      c = Array(b + 2);
      cljs.core.array_copy(this.arr, 0, c, 0, b);
      c[b] = d;
      c[b + 1] = e;
      f.val = !0;
      return this.ensure_editable_array(a, this.cnt + 1, c);
    }
    return this.arr[b + 1] === e ? this : cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(this, a, b + 1, e);
  }
  return (new cljs.core.BitmapIndexedNode(a, 1 << (this.collision_hash >>> b & 31), [null, this, null, null])).inode_assoc_BANG_(a, b, c, d, e, f);
};
cljs.core.HashCollisionNode.prototype.inode_assoc = function(a, b, c, d, e) {
  return b === this.collision_hash ? (a = cljs.core.hash_collision_node_find_index(this.arr, this.cnt, c), -1 === a ? (a = 2 * this.cnt, b = Array(a + 2), cljs.core.array_copy(this.arr, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.val = !0, new cljs.core.HashCollisionNode(null, this.collision_hash, this.cnt + 1, b)) : cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.arr[a + 1], d) ? this : new cljs.core.HashCollisionNode(null, this.collision_hash, this.cnt, cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(this.arr, 
  a + 1, d))) : (new cljs.core.BitmapIndexedNode(null, 1 << (this.collision_hash >>> a & 31), [null, this])).inode_assoc(a, b, c, d, e);
};
cljs.core.HashCollisionNode.prototype.ensure_editable_array = function(a, b, c) {
  return a === this.edit ? (this.arr = c, this.cnt = b, this) : new cljs.core.HashCollisionNode(this.edit, this.collision_hash, b, c);
};
cljs.core.HashCollisionNode.prototype.inode_find = function(a, b, c, d) {
  a = cljs.core.hash_collision_node_find_index(this.arr, this.cnt, c);
  return 0 > a ? d : cljs.core.key_test(c, this.arr[a]) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.arr[a], this.arr[a + 1]], null) : d;
};
cljs.core.HashCollisionNode.prototype.inode_without = function(a, b, c) {
  a = cljs.core.hash_collision_node_find_index(this.arr, this.cnt, c);
  return -1 === a ? this : 1 === this.cnt ? null : new cljs.core.HashCollisionNode(null, this.collision_hash, this.cnt - 1, cljs.core.remove_pair(this.arr, cljs.core.quot(a, 2)));
};
cljs.core.HashCollisionNode.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.NodeIterator(this.arr, 0, null, null);
};
cljs.core.HashCollisionNode.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "edit", "edit", -1302639, null), cljs.core.with_meta(new cljs.core.Symbol(null, "collision-hash", "collision-hash", -35831342, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.HashCollisionNode.cljs$lang$type = !0;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/HashCollisionNode");
};
cljs.core.__GT_HashCollisionNode = function(a, b, c, d) {
  return new cljs.core.HashCollisionNode(a, b, c, d);
};
cljs.core.create_node = function(a) {
  switch(arguments.length) {
    case 6:
      return cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  var g = cljs.core.hash(b);
  if (g === d) {
    return new cljs.core.HashCollisionNode(null, g, 2, [b, c, e, f]);
  }
  var h = new cljs.core.Box(!1);
  return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a, g, b, c, h).inode_assoc(a, d, e, f, h);
};
cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 = function(a, b, c, d, e, f, g) {
  var h = cljs.core.hash(c);
  if (h === e) {
    return new cljs.core.HashCollisionNode(null, h, 2, [c, d, f, g]);
  }
  var k = new cljs.core.Box(!1);
  return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b, h, c, d, k).inode_assoc_BANG_(a, b, e, f, g, k);
};
cljs.core.create_node.cljs$lang$maxFixedArity = 7;
cljs.core.NodeSeq = function(a, b, c, d, e) {
  this.meta = a;
  this.nodes = b;
  this.i = c;
  this.s = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 32374988;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.NodeSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.NodeSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.NodeSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.NodeSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.NodeSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return null == this.s ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(this.nodes, this.i + 2, null) : cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(this.nodes, this.i, cljs.core.next(this.s));
};
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return null == this.s ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.nodes[this.i], this.nodes[this.i + 1]], null) : cljs.core.first(this.s);
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  a = null == this.s ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(this.nodes, this.i + 2, null) : cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(this.nodes, this.i, cljs.core.next(this.s));
  return null != a ? a : cljs.core.List.EMPTY;
};
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.NodeSeq(b, this.nodes, this.i, this.s, this.__hash);
};
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.NodeSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "nodes", "nodes", -459054278, null), new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.Symbol(null, "s", "s", -948495851, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 
  875778266), !0], null))], null);
};
cljs.core.NodeSeq.cljs$lang$type = !0;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/NodeSeq");
};
cljs.core.__GT_NodeSeq = function(a, b, c, d, e) {
  return new cljs.core.NodeSeq(a, b, c, d, e);
};
var G__15213_15216 = cljs.core.NodeSeq.prototype, G__15214_15217 = cljs.core.ITER_SYMBOL, G__15215_15218 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15213_15216, G__15214_15217);
goog.object.set(G__15213_15216, G__15214_15217, G__15215_15218);
cljs.core.create_inode_seq = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 3:
      return cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(a, 0, null);
};
cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new cljs.core.NodeSeq(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (cljs.core.truth_(d) && (d = d.inode_seq(), cljs.core.truth_(d))) {
          return new cljs.core.NodeSeq(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new cljs.core.NodeSeq(null, a, b, c, null);
  }
};
cljs.core.create_inode_seq.cljs$lang$maxFixedArity = 3;
cljs.core.ArrayNodeSeq = function(a, b, c, d, e) {
  this.meta = a;
  this.nodes = b;
  this.i = c;
  this.s = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 32374988;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.ArrayNodeSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.ArrayNodeSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.ArrayNodeSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ArrayNodeSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null, this.nodes, this.i, cljs.core.next(this.s));
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return cljs.core.first(this.s);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  a = cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null, this.nodes, this.i, cljs.core.next(this.s));
  return null != a ? a : cljs.core.List.EMPTY;
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.ArrayNodeSeq(b, this.nodes, this.i, this.s, this.__hash);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.ArrayNodeSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "nodes", "nodes", -459054278, null), new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.Symbol(null, "s", "s", -948495851, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 
  875778266), !0], null))], null);
};
cljs.core.ArrayNodeSeq.cljs$lang$type = !0;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ArrayNodeSeq");
};
cljs.core.__GT_ArrayNodeSeq = function(a, b, c, d, e) {
  return new cljs.core.ArrayNodeSeq(a, b, c, d, e);
};
var G__15226_15229 = cljs.core.ArrayNodeSeq.prototype, G__15227_15230 = cljs.core.ITER_SYMBOL, G__15228_15231 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15226_15229, G__15227_15230);
goog.object.set(G__15226_15229, G__15227_15230, G__15228_15231);
cljs.core.create_array_node_seq = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 4:
      return cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null, a, 0, null);
};
cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (cljs.core.truth_(e) && (e = e.inode_seq(), cljs.core.truth_(e))) {
          return new cljs.core.ArrayNodeSeq(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new cljs.core.ArrayNodeSeq(a, b, c, d, null);
  }
};
cljs.core.create_array_node_seq.cljs$lang$maxFixedArity = 4;
cljs.core.HashMapIter = function(a, b, c) {
  this.nil_val = a;
  this.root_iter = b;
  this.seen = c;
};
cljs.core.HashMapIter.prototype.hasNext = function() {
  return !this.seen || this.root_iter.hasNext();
};
cljs.core.HashMapIter.prototype.next = function() {
  if (this.seen) {
    return this.root_iter.next();
  }
  this.seen = !0;
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null, this.nil_val], null);
};
cljs.core.HashMapIter.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.HashMapIter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "nil-val", "nil-val", -513933559, null), new cljs.core.Symbol(null, "root-iter", "root-iter", 1974672108, null), cljs.core.with_meta(new cljs.core.Symbol(null, "seen", "seen", 1121531738, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.HashMapIter.cljs$lang$type = !0;
cljs.core.HashMapIter.cljs$lang$ctorStr = "cljs.core/HashMapIter";
cljs.core.HashMapIter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/HashMapIter");
};
cljs.core.__GT_HashMapIter = function(a, b, c) {
  return new cljs.core.HashMapIter(a, b, c);
};
cljs.core.PersistentHashMap = function(a, b, c, d, e, f) {
  this.meta = a;
  this.cnt = b;
  this.root = c;
  this.has_nil_QMARK_ = d;
  this.nil_val = e;
  this.__hash = f;
  this.cljs$lang$protocol_mask$partition0$ = 16123663;
  this.cljs$lang$protocol_mask$partition1$ = 139268;
};
cljs.core.PersistentHashMap.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentHashMap.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  return null == b ? this.has_nil_QMARK_ ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null, this.nil_val], null) : null : null == this.root ? null : this.root.inode_find(0, cljs.core.hash(b), b, null);
};
cljs.core.PersistentHashMap.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentHashMap.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentHashMap.prototype.keys = function() {
  return cljs.core.es6_iterator(cljs.core.keys(this));
};
cljs.core.PersistentHashMap.prototype.entries = function() {
  return cljs.core.es6_entries_iterator(cljs.core.seq(this));
};
cljs.core.PersistentHashMap.prototype.values = function() {
  return cljs.core.es6_iterator(cljs.core.vals(this));
};
cljs.core.PersistentHashMap.prototype.has = function(a) {
  return cljs.core.contains_QMARK_(this, a);
};
cljs.core.PersistentHashMap.prototype.get = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentHashMap.prototype.forEach = function(a) {
  for (var b, c, d = cljs.core.seq(this), e = null, f = 0, g = 0;;) {
    if (g < f) {
      b = e.cljs$core$IIndexed$_nth$arity$2(null, g), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), g += 1;
    } else {
      if (c = cljs.core.seq(d)) {
        d = c, cljs.core.chunked_seq_QMARK_(d) ? (e = cljs.core.chunk_first(d), d = cljs.core.chunk_rest(d), c = e, b = cljs.core.count(e), e = c, f = b) : (e = cljs.core.first(d), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), d = cljs.core.next(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return null == b ? this.has_nil_QMARK_ ? this.nil_val : c : null == this.root ? c : this.root.inode_lookup(0, cljs.core.hash(b), b, c);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  a = this.has_nil_QMARK_ ? b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(c, null, this.nil_val) : b.call(null, c, null, this.nil_val) : c;
  return cljs.core.reduced_QMARK_(a) ? cljs.core.deref(a) : null != this.root ? cljs.core.unreduced(this.root.kv_reduce(b, a)) : a;
};
cljs.core.PersistentHashMap.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  a = this.root ? cljs.core._iterator(this.root) : cljs.core.nil_iter();
  return this.has_nil_QMARK_ ? new cljs.core.HashMapIter(this.nil_val, a, !1) : a;
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.PersistentHashMap(this.meta, this.cnt, this.root, this.has_nil_QMARK_, this.nil_val, this.__hash);
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.cnt;
};
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_unordered_coll(this);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map(this, b);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(a) {
  return new cljs.core.TransientHashMap({}, this.root, this.cnt, this.has_nil_QMARK_, this.nil_val);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY, this.meta);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  if (null == b) {
    return this.has_nil_QMARK_ ? new cljs.core.PersistentHashMap(this.meta, this.cnt - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.inode_without(0, cljs.core.hash(b), b);
  return c === this.root ? this : new cljs.core.PersistentHashMap(this.meta, this.cnt - 1, c, this.has_nil_QMARK_, this.nil_val, null);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  if (null == b) {
    return this.has_nil_QMARK_ && c === this.nil_val ? this : new cljs.core.PersistentHashMap(this.meta, this.has_nil_QMARK_ ? this.cnt : this.cnt + 1, this.root, !0, c, null);
  }
  a = new cljs.core.Box(!1);
  b = (null == this.root ? cljs.core.BitmapIndexedNode.EMPTY : this.root).inode_assoc(0, cljs.core.hash(b), b, c, a);
  return b === this.root ? this : new cljs.core.PersistentHashMap(this.meta, a.val ? this.cnt + 1 : this.cnt, b, this.has_nil_QMARK_, this.nil_val, null);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return null == b ? this.has_nil_QMARK_ : null == this.root ? !1 : this.root.inode_lookup(0, cljs.core.hash(b), b, cljs.core.lookup_sentinel) !== cljs.core.lookup_sentinel;
};
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return 0 < this.cnt ? (a = null != this.root ? this.root.inode_seq() : null, this.has_nil_QMARK_ ? cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null, this.nil_val], null), a) : a) : null;
};
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashMap(b, this.cnt, this.root, this.has_nil_QMARK_, this.nil_val, this.__hash);
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return this.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 0), cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 1));
  }
  for (var c = this, d = cljs.core.seq(b);;) {
    if (null == d) {
      return c;
    }
    var e = cljs.core.first(d);
    if (cljs.core.vector_QMARK_(e)) {
      c = c.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e, 0), cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e, 1)), d = cljs.core.next(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
cljs.core.PersistentHashMap.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(null, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$ILookup$_lookup$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.PersistentHashMap.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, a);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentHashMap.getBasis = function() {
  return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null), new cljs.core.Symbol(null, "root", "root", 1191874074, null), cljs.core.with_meta(new cljs.core.Symbol(null, "has-nil?", "has-nil?", 825886722, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "boolean", 
  "boolean", -278886877, null)], null)), new cljs.core.Symbol(null, "nil-val", "nil-val", -513933559, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentHashMap.cljs$lang$type = !0;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentHashMap");
};
cljs.core.__GT_PersistentHashMap = function(a, b, c, d, e, f) {
  return new cljs.core.PersistentHashMap(a, b, c, d, e, f);
};
cljs.core.PersistentHashMap.EMPTY = new cljs.core.PersistentHashMap(null, 0, null, !1, null, cljs.core.empty_unordered_hash);
cljs.core.PersistentHashMap.fromArray = function(a, b) {
  for (var c = b ? a : cljs.core.aclone(a), d = c.length, e = 0, f = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);;) {
    if (e < d) {
      var g = e + 2;
      f = cljs.core._assoc_BANG_(f, c[e], c[e + 1]);
      e = g;
    } else {
      return cljs.core._persistent_BANG_(f);
    }
  }
};
cljs.core.PersistentHashMap.fromArrays = function(a, b) {
  for (var c = a.length, d = 0, e = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);;) {
    if (d < c) {
      var f = d + 1;
      e = e.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null, a[d], b[d]);
      d = f;
    } else {
      return cljs.core.persistent_BANG_(e);
    }
  }
};
cljs.core.PersistentHashMap.createWithCheck = function(a) {
  for (var b = a.length, c = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY), d = 0;;) {
    if (d < b) {
      cljs.core._assoc_BANG_(c, a[d], a[d + 1]);
      if (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._count(c), d / 2 + 1)) {
        throw Error(["Duplicate key: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a[d])].join(""));
      }
      d += 2;
    } else {
      break;
    }
  }
  return cljs.core._persistent_BANG_(c);
};
var G__15271_15274 = cljs.core.PersistentHashMap.prototype, G__15272_15275 = cljs.core.ITER_SYMBOL, G__15273_15276 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15271_15274, G__15272_15275);
goog.object.set(G__15271_15274, G__15272_15275, G__15273_15276);
cljs.core.TransientHashMap = function(a, b, c, d, e) {
  this.edit = a;
  this.root = b;
  this.count = c;
  this.has_nil_QMARK_ = d;
  this.nil_val = e;
  this.cljs$lang$protocol_mask$partition0$ = 258;
  this.cljs$lang$protocol_mask$partition1$ = 56;
};
cljs.core.TransientHashMap.prototype.conj_BANG_ = function(a) {
  if (this.edit) {
    if (null != a ? a.cljs$lang$protocol_mask$partition0$ & 2048 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IMapEntry$ || (a.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry, a)) : cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry, a)) {
      return this.assoc_BANG_(cljs.core.key(a), cljs.core.val(a));
    }
    a = cljs.core.seq(a);
    for (var b = this;;) {
      var c = cljs.core.first(a);
      if (cljs.core.truth_(c)) {
        a = cljs.core.next(a), b = b.assoc_BANG_(cljs.core.key(c), cljs.core.val(c));
      } else {
        return b;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
};
cljs.core.TransientHashMap.prototype.assoc_BANG_ = function(a, b) {
  if (this.edit) {
    if (null == a) {
      this.nil_val !== b && (this.nil_val = b), this.has_nil_QMARK_ || (this.count += 1, this.has_nil_QMARK_ = !0);
    } else {
      var c = new cljs.core.Box(!1), d = (null == this.root ? cljs.core.BitmapIndexedNode.EMPTY : this.root).inode_assoc_BANG_(this.edit, 0, cljs.core.hash(a), a, b, c);
      d !== this.root && (this.root = d);
      c.val && (this.count += 1);
    }
    return this;
  }
  throw Error("assoc! after persistent!");
};
cljs.core.TransientHashMap.prototype.without_BANG_ = function(a) {
  if (this.edit) {
    if (null == a) {
      this.has_nil_QMARK_ && (this.has_nil_QMARK_ = !1, this.nil_val = null, --this.count);
    } else {
      if (null != this.root) {
        var b = new cljs.core.Box(!1);
        a = this.root.inode_without_BANG_(this.edit, 0, cljs.core.hash(a), a, b);
        a !== this.root && (this.root = a);
        b.val && --this.count;
      }
    }
    return this;
  }
  throw Error("dissoc! after persistent!");
};
cljs.core.TransientHashMap.prototype.persistent_BANG_ = function() {
  if (this.edit) {
    return this.edit = null, new cljs.core.PersistentHashMap(null, this.count, this.root, this.has_nil_QMARK_, this.nil_val, null);
  }
  throw Error("persistent! called twice");
};
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  if (this.edit) {
    return this.count;
  }
  throw Error("count after persistent!");
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return null == b ? this.has_nil_QMARK_ ? this.nil_val : null : null == this.root ? null : this.root.inode_lookup(0, cljs.core.hash(b), b);
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return null == b ? this.has_nil_QMARK_ ? this.nil_val : c : null == this.root ? c : this.root.inode_lookup(0, cljs.core.hash(b), b, c);
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  return this.conj_BANG_(b);
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(a) {
  return this.persistent_BANG_();
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(a, b, c) {
  return this.assoc_BANG_(b, c);
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(a, b) {
  return this.without_BANG_(b);
};
cljs.core.TransientHashMap.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "edit", "edit", -1302639, null), new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "boolean", "boolean", -278886877, null), new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "root", "root", 1191874074, null), new cljs.core.PersistentArrayMap(null, 
  1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "count", "count", -514511684, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "has-nil?", "has-nil?", 825886722, null), new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "boolean", 
  "boolean", -278886877, null), new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "nil-val", "nil-val", -513933559, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.TransientHashMap.cljs$lang$type = !0;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/TransientHashMap");
};
cljs.core.__GT_TransientHashMap = function(a, b, c, d, e) {
  return new cljs.core.TransientHashMap(a, b, c, d, e);
};
cljs.core.tree_map_seq_push = function(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(d, a), a = b;
    } else {
      return d;
    }
  }
};
cljs.core.PersistentTreeMapSeq = function(a, b, c, d, e) {
  this.meta = a;
  this.stack = b;
  this.ascending_QMARK_ = c;
  this.cnt = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 32374990;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.PersistentTreeMapSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentTreeMapSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentTreeMapSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentTreeMapSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  a = cljs.core.first(this.stack);
  a = cljs.core.tree_map_seq_push(this.ascending_QMARK_ ? a.right : a.left, cljs.core.next(this.stack), this.ascending_QMARK_);
  return null == a ? null : new cljs.core.PersistentTreeMapSeq(null, a, this.ascending_QMARK_, this.cnt - 1, null);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return 0 > this.cnt ? cljs.core.count(cljs.core.next(this)) + 1 : this.cnt;
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return cljs.core.peek(this.stack);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  a = cljs.core.first(this.stack);
  a = cljs.core.tree_map_seq_push(this.ascending_QMARK_ ? a.right : a.left, cljs.core.next(this.stack), this.ascending_QMARK_);
  return null != a ? new cljs.core.PersistentTreeMapSeq(null, a, this.ascending_QMARK_, this.cnt - 1, null) : cljs.core.List.EMPTY;
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeMapSeq(b, this.stack, this.ascending_QMARK_, this.cnt, this.__hash);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.PersistentTreeMapSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "stack", "stack", 847125597, null), cljs.core.with_meta(new cljs.core.Symbol(null, "ascending?", "ascending?", -1938452653, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "boolean", "boolean", -278886877, null)], null)), new cljs.core.Symbol(null, 
  "cnt", "cnt", 1924510325, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentTreeMapSeq.cljs$lang$type = !0;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentTreeMapSeq");
};
cljs.core.__GT_PersistentTreeMapSeq = function(a, b, c, d, e) {
  return new cljs.core.PersistentTreeMapSeq(a, b, c, d, e);
};
var G__15284_15287 = cljs.core.PersistentTreeMapSeq.prototype, G__15285_15288 = cljs.core.ITER_SYMBOL, G__15286_15289 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15284_15287, G__15285_15288);
goog.object.set(G__15284_15287, G__15285_15288, G__15286_15289);
cljs.core.create_tree_map_seq = function(a, b, c) {
  return new cljs.core.PersistentTreeMapSeq(null, cljs.core.tree_map_seq_push(a, null, b), b, c, null);
};
cljs.core.balance_left = function(a, b, c, d) {
  return c instanceof cljs.core.RedNode ? c.left instanceof cljs.core.RedNode ? new cljs.core.RedNode(c.key, c.val, c.left.blacken(), new cljs.core.BlackNode(a, b, c.right, d, null), null) : c.right instanceof cljs.core.RedNode ? new cljs.core.RedNode(c.right.key, c.right.val, new cljs.core.BlackNode(c.key, c.val, c.left, c.right.left, null), new cljs.core.BlackNode(a, b, c.right.right, d, null), null) : new cljs.core.BlackNode(a, b, c, d, null) : new cljs.core.BlackNode(a, b, c, d, null);
};
cljs.core.balance_right = function(a, b, c, d) {
  return d instanceof cljs.core.RedNode ? d.right instanceof cljs.core.RedNode ? new cljs.core.RedNode(d.key, d.val, new cljs.core.BlackNode(a, b, c, d.left, null), d.right.blacken(), null) : d.left instanceof cljs.core.RedNode ? new cljs.core.RedNode(d.left.key, d.left.val, new cljs.core.BlackNode(a, b, c, d.left.left, null), new cljs.core.BlackNode(d.key, d.val, d.left.right, d.right, null), null) : new cljs.core.BlackNode(a, b, c, d, null) : new cljs.core.BlackNode(a, b, c, d, null);
};
cljs.core.balance_left_del = function(a, b, c, d) {
  if (c instanceof cljs.core.RedNode) {
    return new cljs.core.RedNode(a, b, c.blacken(), d, null);
  }
  if (d instanceof cljs.core.BlackNode) {
    return cljs.core.balance_right(a, b, c, d.redden());
  }
  if (d instanceof cljs.core.RedNode && d.left instanceof cljs.core.BlackNode) {
    return new cljs.core.RedNode(d.left.key, d.left.val, new cljs.core.BlackNode(a, b, c, d.left.left, null), cljs.core.balance_right(d.key, d.val, d.left.right, d.right.redden()), null);
  }
  throw Error("red-black tree invariant violation");
};
cljs.core.balance_right_del = function(a, b, c, d) {
  if (d instanceof cljs.core.RedNode) {
    return new cljs.core.RedNode(a, b, c, d.blacken(), null);
  }
  if (c instanceof cljs.core.BlackNode) {
    return cljs.core.balance_left(a, b, c.redden(), d);
  }
  if (c instanceof cljs.core.RedNode && c.right instanceof cljs.core.BlackNode) {
    return new cljs.core.RedNode(c.right.key, c.right.val, cljs.core.balance_left(c.key, c.val, c.left.redden(), c.right.left), new cljs.core.BlackNode(a, b, c.right.right, d, null), null);
  }
  throw Error("red-black tree invariant violation");
};
cljs.core.tree_map_kv_reduce = function(a, b, c) {
  var d = null != a.left ? function() {
    var d = a.left;
    return cljs.core.tree_map_kv_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.tree_map_kv_reduce.cljs$core$IFn$_invoke$arity$3(d, b, c) : cljs.core.tree_map_kv_reduce.call(null, d, b, c);
  }() : c;
  if (cljs.core.reduced_QMARK_(d)) {
    return d;
  }
  var e = function() {
    var c = a.key, e = a.val;
    return b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(d, c, e) : b.call(null, d, c, e);
  }();
  if (cljs.core.reduced_QMARK_(e)) {
    return e;
  }
  if (null != a.right) {
    var f = a.right;
    return cljs.core.tree_map_kv_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.tree_map_kv_reduce.cljs$core$IFn$_invoke$arity$3(f, b, e) : cljs.core.tree_map_kv_reduce.call(null, f, b, e);
  }
  return e;
};
cljs.core.BlackNode = function(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 32402207;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.BlackNode.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.BlackNode.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  switch(b) {
    case 0:
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, this.key], null);
    case 1:
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, this.val], null);
    default:
      return null;
  }
};
cljs.core.BlackNode.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.BlackNode.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.BlackNode.prototype.add_right = function(a) {
  return a.balance_right(this);
};
cljs.core.BlackNode.prototype.redden = function() {
  return new cljs.core.RedNode(this.key, this.val, this.left, this.right, null);
};
cljs.core.BlackNode.prototype.blacken = function() {
  return this;
};
cljs.core.BlackNode.prototype.add_left = function(a) {
  return a.balance_left(this);
};
cljs.core.BlackNode.prototype.replace = function(a, b, c, d) {
  return new cljs.core.BlackNode(a, b, c, d, null);
};
cljs.core.BlackNode.prototype.balance_left = function(a) {
  return new cljs.core.BlackNode(a.key, a.val, this, a.right, null);
};
cljs.core.BlackNode.prototype.balance_right = function(a) {
  return new cljs.core.BlackNode(a.key, a.val, a.left, this, null);
};
cljs.core.BlackNode.prototype.remove_left = function(a) {
  return cljs.core.balance_left_del(this.key, this.val, a, this.right);
};
cljs.core.BlackNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.tree_map_kv_reduce(this, a, b);
};
cljs.core.BlackNode.prototype.remove_right = function(a) {
  return cljs.core.balance_right_del(this.key, this.val, this.left, a);
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, b, null);
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, b, c);
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  if (0 === b) {
    return this.key;
  }
  if (1 === b) {
    return this.val;
  }
  throw Error("Index out of bounds");
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : c;
};
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return (new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null)).cljs$core$IVector$_assoc_n$arity$3(null, b, c);
};
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return null;
};
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return 2;
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function(a) {
  return this.key;
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function(a) {
  return this.val;
};
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return this.val;
};
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key], null);
};
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core.PersistentVector.EMPTY;
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, b);
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this, b, c);
};
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null), b, c);
};
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return 0 === b || 1 === b;
};
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  a = this.key;
  return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY, this.val), a);
};
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core._with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null), b);
};
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val, b], null);
};
cljs.core.BlackNode.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$IIndexed$_nth$arity$2(null, c);
      case 3:
        return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$IIndexed$_nth$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.BlackNode.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, a);
};
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, a, b);
};
cljs.core.BlackNode.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "key", "key", 124488940, null), new cljs.core.Symbol(null, "val", "val", 1769233139, null), new cljs.core.Symbol(null, "left", "left", 1241415590, null), new cljs.core.Symbol(null, "right", "right", 1187949694, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", 
  "mutable", 875778266), !0], null))], null);
};
cljs.core.BlackNode.cljs$lang$type = !0;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/BlackNode");
};
cljs.core.__GT_BlackNode = function(a, b, c, d, e) {
  return new cljs.core.BlackNode(a, b, c, d, e);
};
var G__15305_15308 = cljs.core.BlackNode.prototype, G__15306_15309 = cljs.core.ITER_SYMBOL, G__15307_15310 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15305_15308, G__15306_15309);
goog.object.set(G__15305_15308, G__15306_15309, G__15307_15310);
cljs.core.RedNode = function(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 32402207;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.RedNode.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.RedNode.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  switch(b) {
    case 0:
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, this.key], null);
    case 1:
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, this.val], null);
    default:
      return null;
  }
};
cljs.core.RedNode.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.RedNode.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.RedNode.prototype.add_right = function(a) {
  return new cljs.core.RedNode(this.key, this.val, this.left, a, null);
};
cljs.core.RedNode.prototype.redden = function() {
  throw Error("red-black tree invariant violation");
};
cljs.core.RedNode.prototype.blacken = function() {
  return new cljs.core.BlackNode(this.key, this.val, this.left, this.right, null);
};
cljs.core.RedNode.prototype.add_left = function(a) {
  return new cljs.core.RedNode(this.key, this.val, a, this.right, null);
};
cljs.core.RedNode.prototype.replace = function(a, b, c, d) {
  return new cljs.core.RedNode(a, b, c, d, null);
};
cljs.core.RedNode.prototype.balance_left = function(a) {
  return this.left instanceof cljs.core.RedNode ? new cljs.core.RedNode(this.key, this.val, this.left.blacken(), new cljs.core.BlackNode(a.key, a.val, this.right, a.right, null), null) : this.right instanceof cljs.core.RedNode ? new cljs.core.RedNode(this.right.key, this.right.val, new cljs.core.BlackNode(this.key, this.val, this.left, this.right.left, null), new cljs.core.BlackNode(a.key, a.val, this.right.right, a.right, null), null) : new cljs.core.BlackNode(a.key, a.val, this, a.right, null);
};
cljs.core.RedNode.prototype.balance_right = function(a) {
  return this.right instanceof cljs.core.RedNode ? new cljs.core.RedNode(this.key, this.val, new cljs.core.BlackNode(a.key, a.val, a.left, this.left, null), this.right.blacken(), null) : this.left instanceof cljs.core.RedNode ? new cljs.core.RedNode(this.left.key, this.left.val, new cljs.core.BlackNode(a.key, a.val, a.left, this.left.left, null), new cljs.core.BlackNode(this.key, this.val, this.left.right, this.right, null), null) : new cljs.core.BlackNode(a.key, a.val, a.left, this, null);
};
cljs.core.RedNode.prototype.remove_left = function(a) {
  return new cljs.core.RedNode(this.key, this.val, a, this.right, null);
};
cljs.core.RedNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.tree_map_kv_reduce(this, a, b);
};
cljs.core.RedNode.prototype.remove_right = function(a) {
  return new cljs.core.RedNode(this.key, this.val, this.left, a, null);
};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, b, null);
};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, b, c);
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  if (0 === b) {
    return this.key;
  }
  if (1 === b) {
    return this.val;
  }
  throw Error("Index out of bounds");
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : c;
};
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return (new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null)).cljs$core$IVector$_assoc_n$arity$3(null, b, c);
};
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return null;
};
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return 2;
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function(a) {
  return this.key;
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function(a) {
  return this.val;
};
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return this.val;
};
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key], null);
};
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core.PersistentVector.EMPTY;
};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, b);
};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this, b, c);
};
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null), b, c);
};
cljs.core.RedNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return 0 === b || 1 === b;
};
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  a = this.key;
  return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY, this.val), a);
};
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core._with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val], null), b);
};
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this.key, this.val, b], null);
};
cljs.core.RedNode.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$IIndexed$_nth$arity$2(null, c);
      case 3:
        return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$IIndexed$_nth$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$IIndexed$_nth$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.RedNode.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, a);
};
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, a, b);
};
cljs.core.RedNode.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "key", "key", 124488940, null), new cljs.core.Symbol(null, "val", "val", 1769233139, null), new cljs.core.Symbol(null, "left", "left", 1241415590, null), new cljs.core.Symbol(null, "right", "right", 1187949694, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", 
  "mutable", 875778266), !0], null))], null);
};
cljs.core.RedNode.cljs$lang$type = !0;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/RedNode");
};
cljs.core.__GT_RedNode = function(a, b, c, d, e) {
  return new cljs.core.RedNode(a, b, c, d, e);
};
var G__15317_15320 = cljs.core.RedNode.prototype, G__15318_15321 = cljs.core.ITER_SYMBOL, G__15319_15322 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15317_15320, G__15318_15321);
goog.object.set(G__15317_15320, G__15318_15321, G__15319_15322);
cljs.core.tree_map_add = function(a, b, c, d, e) {
  if (null == b) {
    return new cljs.core.RedNode(c, d, null, null, null);
  }
  var f = function() {
    var d = b.key;
    return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, d) : a.call(null, c, d);
  }();
  if (0 === f) {
    return e[0] = b, null;
  }
  if (0 > f) {
    return f = function() {
      var f = b.left;
      return cljs.core.tree_map_add.cljs$core$IFn$_invoke$arity$5 ? cljs.core.tree_map_add.cljs$core$IFn$_invoke$arity$5(a, f, c, d, e) : cljs.core.tree_map_add.call(null, a, f, c, d, e);
    }(), null != f ? b.add_left(f) : null;
  }
  f = function() {
    var f = b.right;
    return cljs.core.tree_map_add.cljs$core$IFn$_invoke$arity$5 ? cljs.core.tree_map_add.cljs$core$IFn$_invoke$arity$5(a, f, c, d, e) : cljs.core.tree_map_add.call(null, a, f, c, d, e);
  }();
  return null != f ? b.add_right(f) : null;
};
cljs.core.tree_map_append = function(a, b) {
  if (null == a) {
    return b;
  }
  if (null == b) {
    return a;
  }
  if (a instanceof cljs.core.RedNode) {
    if (b instanceof cljs.core.RedNode) {
      var c = function() {
        var c = a.right, e = b.left;
        return cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2 ? cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2(c, e) : cljs.core.tree_map_append.call(null, c, e);
      }();
      return c instanceof cljs.core.RedNode ? new cljs.core.RedNode(c.key, c.val, new cljs.core.RedNode(a.key, a.val, a.left, c.left, null), new cljs.core.RedNode(b.key, b.val, c.right, b.right, null), null) : new cljs.core.RedNode(a.key, a.val, a.left, new cljs.core.RedNode(b.key, b.val, c, b.right, null), null);
    }
    return new cljs.core.RedNode(a.key, a.val, a.left, function() {
      var c = a.right;
      return cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2 ? cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2(c, b) : cljs.core.tree_map_append.call(null, c, b);
    }(), null);
  }
  if (b instanceof cljs.core.RedNode) {
    return new cljs.core.RedNode(b.key, b.val, function() {
      var c = b.left;
      return cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2 ? cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2(a, c) : cljs.core.tree_map_append.call(null, a, c);
    }(), b.right, null);
  }
  c = function() {
    var c = a.right, e = b.left;
    return cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2 ? cljs.core.tree_map_append.cljs$core$IFn$_invoke$arity$2(c, e) : cljs.core.tree_map_append.call(null, c, e);
  }();
  return c instanceof cljs.core.RedNode ? new cljs.core.RedNode(c.key, c.val, new cljs.core.BlackNode(a.key, a.val, a.left, c.left, null), new cljs.core.BlackNode(b.key, b.val, c.right, b.right, null), null) : cljs.core.balance_left_del(a.key, a.val, a.left, new cljs.core.BlackNode(b.key, b.val, c, b.right, null));
};
cljs.core.tree_map_remove = function(a, b, c, d) {
  if (null != b) {
    var e = function() {
      var d = b.key;
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, d) : a.call(null, c, d);
    }();
    if (0 === e) {
      return d[0] = b, cljs.core.tree_map_append(b.left, b.right);
    }
    if (0 > e) {
      return e = function() {
        var e = b.left;
        return cljs.core.tree_map_remove.cljs$core$IFn$_invoke$arity$4 ? cljs.core.tree_map_remove.cljs$core$IFn$_invoke$arity$4(a, e, c, d) : cljs.core.tree_map_remove.call(null, a, e, c, d);
      }(), null != e || null != d[0] ? b.left instanceof cljs.core.BlackNode ? cljs.core.balance_left_del(b.key, b.val, e, b.right) : new cljs.core.RedNode(b.key, b.val, e, b.right, null) : null;
    }
    e = function() {
      var e = b.right;
      return cljs.core.tree_map_remove.cljs$core$IFn$_invoke$arity$4 ? cljs.core.tree_map_remove.cljs$core$IFn$_invoke$arity$4(a, e, c, d) : cljs.core.tree_map_remove.call(null, a, e, c, d);
    }();
    return null != e || null != d[0] ? b.right instanceof cljs.core.BlackNode ? cljs.core.balance_right_del(b.key, b.val, b.left, e) : new cljs.core.RedNode(b.key, b.val, b.left, e, null) : null;
  }
  return null;
};
cljs.core.tree_map_replace = function(a, b, c, d) {
  var e = b.key, f = a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, e) : a.call(null, c, e);
  return 0 === f ? b.replace(e, d, b.left, b.right) : 0 > f ? b.replace(e, b.val, function() {
    var e = b.left;
    return cljs.core.tree_map_replace.cljs$core$IFn$_invoke$arity$4 ? cljs.core.tree_map_replace.cljs$core$IFn$_invoke$arity$4(a, e, c, d) : cljs.core.tree_map_replace.call(null, a, e, c, d);
  }(), b.right) : b.replace(e, b.val, b.left, function() {
    var e = b.right;
    return cljs.core.tree_map_replace.cljs$core$IFn$_invoke$arity$4 ? cljs.core.tree_map_replace.cljs$core$IFn$_invoke$arity$4(a, e, c, d) : cljs.core.tree_map_replace.call(null, a, e, c, d);
  }());
};
cljs.core.PersistentTreeMap = function(a, b, c, d, e) {
  this.comp = a;
  this.tree = b;
  this.cnt = c;
  this.meta = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 418776847;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentTreeMap.prototype.cljs$core$IFind$_find$arity$2 = function(a, b) {
  return this.entry_at(b);
};
cljs.core.PersistentTreeMap.prototype.forEach = function(a) {
  for (var b, c, d = cljs.core.seq(this), e = null, f = 0, g = 0;;) {
    if (g < f) {
      b = e.cljs$core$IIndexed$_nth$arity$2(null, g), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), g += 1;
    } else {
      if (c = cljs.core.seq(d)) {
        d = c, cljs.core.chunked_seq_QMARK_(d) ? (e = cljs.core.chunk_first(d), d = cljs.core.chunk_rest(d), c = e, b = cljs.core.count(e), e = c, f = b) : (e = cljs.core.first(d), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), d = cljs.core.next(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.PersistentTreeMap.prototype.get = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentTreeMap.prototype.entries = function() {
  return cljs.core.es6_entries_iterator(cljs.core.seq(this));
};
cljs.core.PersistentTreeMap.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentTreeMap.prototype.keys = function() {
  return cljs.core.es6_iterator(cljs.core.keys(this));
};
cljs.core.PersistentTreeMap.prototype.values = function() {
  return cljs.core.es6_iterator(cljs.core.vals(this));
};
cljs.core.PersistentTreeMap.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentTreeMap.prototype.entry_at = function(a) {
  for (var b = this.tree;;) {
    if (null != b) {
      var c = a;
      var d = b.key;
      c = this.comp.cljs$core$IFn$_invoke$arity$2 ? this.comp.cljs$core$IFn$_invoke$arity$2(c, d) : this.comp.call(null, c, d);
      if (0 === c) {
        return b;
      }
      b = 0 > c ? b.left : b.right;
    } else {
      return null;
    }
  }
};
cljs.core.PersistentTreeMap.prototype.has = function(a) {
  return cljs.core.contains_QMARK_(this, a);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  a = this.entry_at(b);
  return null != a ? a.val : c;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  return null != this.tree ? cljs.core.unreduced(cljs.core.tree_map_kv_reduce(this.tree, b, c)) : c;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.PersistentTreeMap(this.comp, this.tree, this.cnt, this.meta, this.__hash);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return this.cnt;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = function(a) {
  return 0 < this.cnt ? cljs.core.create_tree_map_seq(this.tree, !1, this.cnt) : null;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_unordered_coll(this);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map(this, b);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return new cljs.core.PersistentTreeMap(this.comp, null, 0, this.meta, 0);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  var c = [null], d = cljs.core.tree_map_remove(this.comp, this.tree, b, c);
  return null == d ? null == cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c, 0) ? this : new cljs.core.PersistentTreeMap(this.comp, null, 0, this.meta, null) : new cljs.core.PersistentTreeMap(this.comp, d.blacken(), this.cnt - 1, this.meta, null);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  a = [null];
  var d = cljs.core.tree_map_add(this.comp, this.tree, b, c, a);
  return null == d ? (a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a, 0), cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c, a.val) ? this : new cljs.core.PersistentTreeMap(this.comp, cljs.core.tree_map_replace(this.comp, this.tree, b, c), this.cnt, this.meta, null)) : new cljs.core.PersistentTreeMap(this.comp, d.blacken(), this.cnt + 1, this.meta, null);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return null != this.entry_at(b);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return 0 < this.cnt ? cljs.core.create_tree_map_seq(this.tree, !0, this.cnt) : null;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeMap(this.comp, this.tree, this.cnt, b, this.__hash);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return this.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 0), cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, 1));
  }
  for (var c = this, d = cljs.core.seq(b);;) {
    if (null == d) {
      return c;
    }
    var e = cljs.core.first(d);
    if (cljs.core.vector_QMARK_(e)) {
      c = c.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e, 0), cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e, 1)), d = cljs.core.next(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
cljs.core.PersistentTreeMap.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(null, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$ILookup$_lookup$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.PersistentTreeMap.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, a);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(a, b) {
  return 0 < this.cnt ? cljs.core.create_tree_map_seq(this.tree, b, this.cnt) : null;
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(a, b, c) {
  if (0 < this.cnt) {
    a = null;
    for (var d = this.tree;;) {
      if (null != d) {
        var e = b;
        var f = d.key;
        e = this.comp.cljs$core$IFn$_invoke$arity$2 ? this.comp.cljs$core$IFn$_invoke$arity$2(e, f) : this.comp.call(null, e, f);
        if (0 === e) {
          return new cljs.core.PersistentTreeMapSeq(null, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, d), c, -1, null);
        }
        cljs.core.truth_(c) ? 0 > e ? (a = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, d), d = d.left) : d = d.right : 0 < e ? (a = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, d), d = d.right) : d = d.left;
      } else {
        return null == a ? null : new cljs.core.PersistentTreeMapSeq(null, a, c, -1, null);
      }
    }
  } else {
    return null;
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(a, b) {
  return cljs.core.key(b);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = function(a) {
  return this.comp;
};
cljs.core.PersistentTreeMap.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "comp", "comp", -1462482139, null), new cljs.core.Symbol(null, "tree", "tree", 1444219499, null), new cljs.core.Symbol(null, "cnt", "cnt", 1924510325, null), new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", 
  "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentTreeMap.cljs$lang$type = !0;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentTreeMap");
};
cljs.core.__GT_PersistentTreeMap = function(a, b, c, d, e) {
  return new cljs.core.PersistentTreeMap(a, b, c, d, e);
};
cljs.core.PersistentTreeMap.EMPTY = new cljs.core.PersistentTreeMap(cljs.core.compare, null, 0, null, cljs.core.empty_unordered_hash);
var G__15401_15404 = cljs.core.PersistentTreeMap.prototype, G__15402_15405 = cljs.core.ITER_SYMBOL, G__15403_15406 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15401_15404, G__15402_15405);
goog.object.set(G__15401_15404, G__15402_15405, G__15403_15406);
cljs.core.hash_map = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.hash_map.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.hash_map.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  a = cljs.core.seq(a);
  for (var b = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);;) {
    if (a) {
      var c = cljs.core.nnext(a);
      b = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(b, cljs.core.first(a), cljs.core.second(a));
      a = c;
    } else {
      return cljs.core.persistent_BANG_(b);
    }
  }
};
cljs.core.hash_map.cljs$lang$maxFixedArity = 0;
cljs.core.hash_map.cljs$lang$applyTo = function(a) {
  return cljs.core.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.array_map = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.array_map.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.array_map.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  a = a instanceof cljs.core.IndexedSeq && 0 === a.i ? a.arr : cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(a);
  return cljs.core.PersistentArrayMap.createAsIfByAssoc(a);
};
cljs.core.array_map.cljs$lang$maxFixedArity = 0;
cljs.core.array_map.cljs$lang$applyTo = function(a) {
  return cljs.core.array_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.obj_map = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.obj_map.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.obj_map.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  var b = [], c = {};
  for (a = cljs.core.seq(a);;) {
    if (a) {
      b.push(cljs.core.first(a));
      var d = c, e = cljs.core.first(a), f = cljs.core.second(a);
      goog.object.set(d, e, f);
      a = cljs.core.nnext(a);
    } else {
      return cljs.core.ObjMap.fromObject(b, c);
    }
  }
};
cljs.core.obj_map.cljs$lang$maxFixedArity = 0;
cljs.core.obj_map.cljs$lang$applyTo = function(a) {
  return cljs.core.obj_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.sorted_map = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  a = cljs.core.seq(a);
  for (var b = cljs.core.PersistentTreeMap.EMPTY;;) {
    if (a) {
      var c = cljs.core.nnext(a);
      b = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b, cljs.core.first(a), cljs.core.second(a));
      a = c;
    } else {
      return b;
    }
  }
};
cljs.core.sorted_map.cljs$lang$maxFixedArity = 0;
cljs.core.sorted_map.cljs$lang$applyTo = function(a) {
  return cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.sorted_map_by = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.core.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.core.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  for (var c = cljs.core.seq(b), d = new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(a), null, 0, null, 0);;) {
    if (c) {
      var e = cljs.core.nnext(c);
      d = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d, cljs.core.first(c), cljs.core.second(c));
      c = e;
    } else {
      return d;
    }
  }
};
cljs.core.sorted_map_by.cljs$lang$maxFixedArity = 1;
cljs.core.sorted_map_by.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.KeySeq = function(a, b) {
  this.mseq = a;
  this._meta = b;
  this.cljs$lang$protocol_mask$partition0$ = 32374988;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.KeySeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.KeySeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.KeySeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.KeySeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this._meta;
};
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  a = (null != this.mseq ? this.mseq.cljs$lang$protocol_mask$partition0$ & 128 || cljs.core.PROTOCOL_SENTINEL === this.mseq.cljs$core$INext$ || (this.mseq.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) ? this.mseq.cljs$core$INext$_next$arity$1(null) : cljs.core.next(this.mseq);
  return null == a ? null : new cljs.core.KeySeq(a, this._meta);
};
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_ordered_coll(this);
};
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this._meta);
};
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return this.mseq.cljs$core$ISeq$_first$arity$1(null).cljs$core$IMapEntry$_key$arity$1(null);
};
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  a = (null != this.mseq ? this.mseq.cljs$lang$protocol_mask$partition0$ & 128 || cljs.core.PROTOCOL_SENTINEL === this.mseq.cljs$core$INext$ || (this.mseq.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) ? this.mseq.cljs$core$INext$_next$arity$1(null) : cljs.core.next(this.mseq);
  return null != a ? new cljs.core.KeySeq(a, this._meta) : cljs.core.List.EMPTY;
};
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.KeySeq(this.mseq, b);
};
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.KeySeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "mseq", "mseq", 1602647196, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "not-native", "not-native", -236392494, null)], null)), new cljs.core.Symbol(null, "_meta", "_meta", -1716892533, null)], null);
};
cljs.core.KeySeq.cljs$lang$type = !0;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/KeySeq");
};
cljs.core.__GT_KeySeq = function(a, b) {
  return new cljs.core.KeySeq(a, b);
};
var G__15447_15450 = cljs.core.KeySeq.prototype, G__15448_15451 = cljs.core.ITER_SYMBOL, G__15449_15452 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15447_15450, G__15448_15451);
goog.object.set(G__15447_15450, G__15448_15451, G__15449_15452);
cljs.core.keys = function(a) {
  return (a = cljs.core.seq(a)) ? new cljs.core.KeySeq(a, null) : null;
};
cljs.core.key = function(a) {
  return cljs.core._key(a);
};
cljs.core.ValSeq = function(a, b) {
  this.mseq = a;
  this._meta = b;
  this.cljs$lang$protocol_mask$partition0$ = 32374988;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.ValSeq.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.ValSeq.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.ValSeq.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ValSeq.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this._meta;
};
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  a = (null != this.mseq ? this.mseq.cljs$lang$protocol_mask$partition0$ & 128 || cljs.core.PROTOCOL_SENTINEL === this.mseq.cljs$core$INext$ || (this.mseq.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) ? this.mseq.cljs$core$INext$_next$arity$1(null) : cljs.core.next(this.mseq);
  return null == a ? null : new cljs.core.ValSeq(a, this._meta);
};
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_ordered_coll(this);
};
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this._meta);
};
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(b, this);
};
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(b, c, this);
};
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return this.mseq.cljs$core$ISeq$_first$arity$1(null).cljs$core$IMapEntry$_val$arity$1(null);
};
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  a = (null != this.mseq ? this.mseq.cljs$lang$protocol_mask$partition0$ & 128 || cljs.core.PROTOCOL_SENTINEL === this.mseq.cljs$core$INext$ || (this.mseq.cljs$lang$protocol_mask$partition0$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) : cljs.core.native_satisfies_QMARK_(cljs.core.INext, this.mseq)) ? this.mseq.cljs$core$INext$_next$arity$1(null) : cljs.core.next(this.mseq);
  return null != a ? new cljs.core.ValSeq(a, this._meta) : cljs.core.List.EMPTY;
};
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return this;
};
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.ValSeq(this.mseq, b);
};
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.ValSeq.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "mseq", "mseq", 1602647196, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "not-native", "not-native", -236392494, null)], null)), new cljs.core.Symbol(null, "_meta", "_meta", -1716892533, null)], null);
};
cljs.core.ValSeq.cljs$lang$type = !0;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ValSeq");
};
cljs.core.__GT_ValSeq = function(a, b) {
  return new cljs.core.ValSeq(a, b);
};
var G__15457_15460 = cljs.core.ValSeq.prototype, G__15458_15461 = cljs.core.ITER_SYMBOL, G__15459_15462 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15457_15460, G__15458_15461);
goog.object.set(G__15457_15460, G__15458_15461, G__15459_15462);
cljs.core.vals = function(a) {
  return (a = cljs.core.seq(a)) ? new cljs.core.ValSeq(a, null) : null;
};
cljs.core.val = function(a) {
  return cljs.core._val(a);
};
cljs.core.merge = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.truth_(cljs.core.some(cljs.core.identity, a)) ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(function(a, c) {
    return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.truth_(a) ? a : cljs.core.PersistentArrayMap.EMPTY, c);
  }, a) : null;
};
cljs.core.merge.cljs$lang$maxFixedArity = 0;
cljs.core.merge.cljs$lang$applyTo = function(a) {
  return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.merge_with = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  if (cljs.core.truth_(cljs.core.some(cljs.core.identity, b))) {
    var c = function(a) {
      return function(b, c) {
        return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(a, cljs.core.truth_(b) ? b : cljs.core.PersistentArrayMap.EMPTY, cljs.core.seq(c));
      };
    }(function(b, c) {
      var d = cljs.core.first(c), e = cljs.core.second(c);
      return cljs.core.contains_QMARK_(b, d) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b, d, function() {
        var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b, d);
        return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, e) : a.call(null, c, e);
      }()) : cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b, d, e);
    });
    return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(c, b);
  }
  return null;
};
cljs.core.merge_with.cljs$lang$maxFixedArity = 1;
cljs.core.merge_with.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.select_keys = function(a, b) {
  for (var c = cljs.core.PersistentArrayMap.EMPTY, d = cljs.core.seq(b);;) {
    if (d) {
      var e = cljs.core.first(d), f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(a, e, new cljs.core.Keyword("cljs.core", "not-found", "cljs.core/not-found", -1572889185));
      c = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f, new cljs.core.Keyword("cljs.core", "not-found", "cljs.core/not-found", -1572889185)) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c, e, f) : c;
      d = cljs.core.next(d);
    } else {
      return cljs.core._with_meta(c, cljs.core.meta(a));
    }
  }
};
cljs.core.HashSetIter = function(a) {
  this.iter = a;
};
cljs.core.HashSetIter.prototype.hasNext = function() {
  return this.iter.hasNext();
};
cljs.core.HashSetIter.prototype.next = function() {
  if (this.iter.hasNext()) {
    return this.iter.next().tail[0];
  }
  throw Error("No such element");
};
cljs.core.HashSetIter.prototype.remove = function() {
  return Error("Unsupported operation");
};
cljs.core.HashSetIter.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "iter", "iter", -1346195486, null)], null);
};
cljs.core.HashSetIter.cljs$lang$type = !0;
cljs.core.HashSetIter.cljs$lang$ctorStr = "cljs.core/HashSetIter";
cljs.core.HashSetIter.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/HashSetIter");
};
cljs.core.__GT_HashSetIter = function(a) {
  return new cljs.core.HashSetIter(a);
};
cljs.core.PersistentHashSet = function(a, b, c) {
  this.meta = a;
  this.hash_map = b;
  this.__hash = c;
  this.cljs$lang$protocol_mask$partition0$ = 15077647;
  this.cljs$lang$protocol_mask$partition1$ = 139268;
};
cljs.core.PersistentHashSet.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentHashSet.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentHashSet.prototype.keys = function() {
  return cljs.core.es6_iterator(cljs.core.seq(this));
};
cljs.core.PersistentHashSet.prototype.entries = function() {
  return cljs.core.es6_set_entries_iterator(cljs.core.seq(this));
};
cljs.core.PersistentHashSet.prototype.values = function() {
  return cljs.core.es6_iterator(cljs.core.seq(this));
};
cljs.core.PersistentHashSet.prototype.has = function(a) {
  return cljs.core.contains_QMARK_(this, a);
};
cljs.core.PersistentHashSet.prototype.forEach = function(a) {
  for (var b, c, d = cljs.core.seq(this), e = null, f = 0, g = 0;;) {
    if (g < f) {
      b = e.cljs$core$IIndexed$_nth$arity$2(null, g), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), g += 1;
    } else {
      if (c = cljs.core.seq(d)) {
        d = c, cljs.core.chunked_seq_QMARK_(d) ? (e = cljs.core.chunk_first(d), d = cljs.core.chunk_rest(d), c = e, b = cljs.core.count(e), e = c, f = b) : (e = cljs.core.first(d), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), d = cljs.core.next(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return cljs.core._contains_key_QMARK_(this.hash_map, b) ? b : c;
};
cljs.core.PersistentHashSet.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.HashSetIter(cljs.core._iterator(this.hash_map));
};
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.PersistentHashSet(this.meta, this.hash_map, this.__hash);
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return cljs.core._count(this.hash_map);
};
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_unordered_coll(this);
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.set_QMARK_(b) && cljs.core.count(this) === cljs.core.count(b) && cljs.core.reduce_kv(function(a) {
    return function(a, c) {
      var d = cljs.core.contains_QMARK_(b, c);
      return d ? d : cljs.core.reduced(!1);
    };
  }(this), !0, this.hash_map);
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(a) {
  return new cljs.core.TransientHashSet(cljs.core._as_transient(this.hash_map));
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.PersistentHashSet.EMPTY, this.meta);
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashSet(this.meta, cljs.core._dissoc(this.hash_map, b), null);
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return cljs.core.keys(this.hash_map);
};
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashSet(b, this.hash_map, this.__hash);
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashSet(this.meta, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.hash_map, b, null), null);
};
cljs.core.PersistentHashSet.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(null, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$ILookup$_lookup$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.PersistentHashSet.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, a);
};
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentHashSet.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "hash-map", "hash-map", -439030950, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentHashSet.cljs$lang$type = !0;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentHashSet");
};
cljs.core.__GT_PersistentHashSet = function(a, b, c) {
  return new cljs.core.PersistentHashSet(a, b, c);
};
cljs.core.PersistentHashSet.EMPTY = new cljs.core.PersistentHashSet(null, cljs.core.PersistentArrayMap.EMPTY, cljs.core.empty_unordered_hash);
cljs.core.PersistentHashSet.fromArray = function(a, b) {
  var c, d = a.length;
  if (d <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD) {
    b || cljs.core.aclone(a);
    var e = 0;
    for (c = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);;) {
      if (e < d) {
        var f = e + 1;
        c = cljs.core._assoc_BANG_(c, a[e], null);
        e = f;
      } else {
        return new cljs.core.PersistentHashSet(null, cljs.core._persistent_BANG_(c), null);
      }
    }
  } else {
    for (e = 0, c = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);;) {
      if (e < d) {
        f = e + 1, c = cljs.core._conj_BANG_(c, a[e]), e = f;
      } else {
        return cljs.core._persistent_BANG_(c);
      }
    }
  }
};
cljs.core.PersistentHashSet.createWithCheck = function(a) {
  for (var b = a.length, c = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY), d = 0;;) {
    if (d < b) {
      cljs.core._conj_BANG_(c, a[d]);
      if (!cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(c), d + 1)) {
        throw Error(["Duplicate key: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a[d])].join(""));
      }
      d += 1;
    } else {
      break;
    }
  }
  return cljs.core._persistent_BANG_(c);
};
cljs.core.PersistentHashSet.createAsIfByAssoc = function(a) {
  for (var b = a.length, c = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY), d = 0;;) {
    if (d < b) {
      cljs.core._conj_BANG_(c, a[d]), d += 1;
    } else {
      break;
    }
  }
  return cljs.core._persistent_BANG_(c);
};
var G__15514_15517 = cljs.core.PersistentHashSet.prototype, G__15515_15518 = cljs.core.ITER_SYMBOL, G__15516_15519 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15514_15517, G__15515_15518);
goog.object.set(G__15514_15517, G__15515_15518, G__15516_15519);
cljs.core.TransientHashSet = function(a) {
  this.transient_map = a;
  this.cljs$lang$protocol_mask$partition1$ = 136;
  this.cljs$lang$protocol_mask$partition0$ = 259;
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  this.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(this.transient_map, b, null);
  return this;
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(a) {
  return new cljs.core.PersistentHashSet(null, cljs.core.persistent_BANG_(this.transient_map), null);
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = function(a, b) {
  this.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(this.transient_map, b);
  return this;
};
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return cljs.core.count(this.transient_map);
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this.transient_map, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? c : b;
};
cljs.core.TransientHashSet.prototype.call = function() {
  var a = null, b = function(a, b) {
    return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this.transient_map, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? null : b;
  }, c = function(a, b, c) {
    return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this.transient_map, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? c : b;
  };
  a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = b;
  a.cljs$core$IFn$_invoke$arity$3 = c;
  return a;
}();
cljs.core.TransientHashSet.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this.transient_map, a, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? null : a;
};
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this.transient_map, a, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? b : a;
};
cljs.core.TransientHashSet.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "transient-map", "transient-map", 351764893, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.TransientHashSet.cljs$lang$type = !0;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/TransientHashSet");
};
cljs.core.__GT_TransientHashSet = function(a) {
  return new cljs.core.TransientHashSet(a);
};
cljs.core.PersistentTreeSet = function(a, b, c) {
  this.meta = a;
  this.tree_map = b;
  this.__hash = c;
  this.cljs$lang$protocol_mask$partition0$ = 417730831;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs.core.PersistentTreeSet.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.PersistentTreeSet.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.PersistentTreeSet.prototype.keys = function() {
  return cljs.core.es6_iterator(cljs.core.seq(this));
};
cljs.core.PersistentTreeSet.prototype.entries = function() {
  return cljs.core.es6_set_entries_iterator(cljs.core.seq(this));
};
cljs.core.PersistentTreeSet.prototype.values = function() {
  return cljs.core.es6_iterator(cljs.core.seq(this));
};
cljs.core.PersistentTreeSet.prototype.has = function(a) {
  return cljs.core.contains_QMARK_(this, a);
};
cljs.core.PersistentTreeSet.prototype.forEach = function(a) {
  for (var b, c, d = cljs.core.seq(this), e = null, f = 0, g = 0;;) {
    if (g < f) {
      b = e.cljs$core$IIndexed$_nth$arity$2(null, g), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), g += 1;
    } else {
      if (c = cljs.core.seq(d)) {
        d = c, cljs.core.chunked_seq_QMARK_(d) ? (e = cljs.core.chunk_first(d), d = cljs.core.chunk_rest(d), c = e, b = cljs.core.count(e), e = c, f = b) : (e = cljs.core.first(d), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null), b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 1, null), a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c), d = cljs.core.next(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  a = this.tree_map.entry_at(b);
  return null != a ? a.key : c;
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.PersistentTreeSet(this.meta, this.tree_map, this.__hash);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return cljs.core.count(this.tree_map);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = function(a) {
  return 0 < cljs.core.count(this.tree_map) ? cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key, cljs.core.rseq(this.tree_map)) : null;
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_unordered_coll(this);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.set_QMARK_(b) && cljs.core.count(this) === cljs.core.count(b) && cljs.core.reduce_kv(function(a) {
    return function(a, c) {
      var d = cljs.core.contains_QMARK_(b, c);
      return d ? d : cljs.core.reduced(!1);
    };
  }(this), !0, this.tree_map);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return new cljs.core.PersistentTreeSet(this.meta, cljs.core._empty(this.tree_map), 0);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeSet(this.meta, cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.tree_map, b), null);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return cljs.core.keys(this.tree_map);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeSet(b, this.tree_map, this.__hash);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeSet(this.meta, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.tree_map, b, null), null);
};
cljs.core.PersistentTreeSet.prototype.call = function() {
  var a = null;
  a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(null, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$2 = function(a, c) {
    return this.cljs$core$ILookup$_lookup$arity$2(null, c);
  };
  a.cljs$core$IFn$_invoke$arity$3 = function(a, c, d) {
    return this.cljs$core$ILookup$_lookup$arity$3(null, c, d);
  };
  return a;
}();
cljs.core.PersistentTreeSet.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, a);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, a, b);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(a, b) {
  return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key, cljs.core._sorted_seq(this.tree_map, b));
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(a, b, c) {
  return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key, cljs.core._sorted_seq_from(this.tree_map, b, c));
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(a, b) {
  return b;
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = function(a) {
  return cljs.core._comparator(this.tree_map);
};
cljs.core.PersistentTreeSet.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "tree-map", "tree-map", 1373073049, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.PersistentTreeSet.cljs$lang$type = !0;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/PersistentTreeSet");
};
cljs.core.__GT_PersistentTreeSet = function(a, b, c) {
  return new cljs.core.PersistentTreeSet(a, b, c);
};
cljs.core.PersistentTreeSet.EMPTY = new cljs.core.PersistentTreeSet(null, cljs.core.PersistentTreeMap.EMPTY, cljs.core.empty_unordered_hash);
var G__15548_15551 = cljs.core.PersistentTreeSet.prototype, G__15549_15552 = cljs.core.ITER_SYMBOL, G__15550_15553 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15548_15551, G__15549_15552);
goog.object.set(G__15548_15551, G__15549_15552, G__15550_15553);
cljs.core.set_from_indexed_seq = function(a) {
  a = a.arr;
  a: {
    for (var b = 0, c = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);;) {
      if (b < a.length) {
        var d = b + 1;
        c = c.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null, a[b]);
        b = d;
      } else {
        break a;
      }
    }
  }
  return c.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
};
cljs.core.set = function(a) {
  a = cljs.core.seq(a);
  if (null == a) {
    return cljs.core.PersistentHashSet.EMPTY;
  }
  if (a instanceof cljs.core.IndexedSeq && 0 === a.i) {
    return cljs.core.PersistentHashSet.createAsIfByAssoc(a.arr);
  }
  for (var b = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);;) {
    if (null != a) {
      var c = cljs.core.next(a);
      b = b.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null, a.cljs$core$ISeq$_first$arity$1(null));
      a = c;
    } else {
      return cljs.core.persistent_BANG_(b);
    }
  }
};
cljs.core.hash_set = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.hash_set.cljs$core$IFn$_invoke$arity$0();
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(0), 0, null);
      return cljs.core.hash_set.cljs$core$IFn$_invoke$arity$variadic(b);
  }
};
cljs.core.hash_set.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.PersistentHashSet.EMPTY;
};
cljs.core.hash_set.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.set(a);
};
cljs.core.hash_set.cljs$lang$applyTo = function(a) {
  return cljs.core.hash_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.hash_set.cljs$lang$maxFixedArity = 0;
cljs.core.sorted_set = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj, cljs.core.PersistentTreeSet.EMPTY, a);
};
cljs.core.sorted_set.cljs$lang$maxFixedArity = 0;
cljs.core.sorted_set.cljs$lang$applyTo = function(a) {
  return cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.sorted_set_by = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.core.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.core.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj, new cljs.core.PersistentTreeSet(null, cljs.core.sorted_map_by(a), 0), b);
};
cljs.core.sorted_set_by.cljs$lang$maxFixedArity = 1;
cljs.core.sorted_set_by.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.replace = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.replace.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.replace.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.map.cljs$core$IFn$_invoke$arity$1(function(b) {
    var c = cljs.core.find(a, b);
    return cljs.core.truth_(c) ? cljs.core.val(c) : b;
  });
};
cljs.core.replace.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    var c = cljs.core.count(b);
    return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(b) {
      return function(b, c) {
        var d = cljs.core.find(a, cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b, c));
        return cljs.core.truth_(d) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b, c, cljs.core.second(d)) : b;
      };
    }(c), b, cljs.core.take.cljs$core$IFn$_invoke$arity$2(c, cljs.core.iterate(cljs.core.inc, 0)));
  }
  return cljs.core.map.cljs$core$IFn$_invoke$arity$2(function(b) {
    var c = cljs.core.find(a, b);
    return cljs.core.truth_(c) ? cljs.core.second(c) : b;
  }, b);
};
cljs.core.replace.cljs$lang$maxFixedArity = 2;
cljs.core.distinct = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.distinct.cljs$core$IFn$_invoke$arity$0 = function() {
  return function(a) {
    return function(b) {
      return function() {
        var c = null, d = function() {
          return a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
        }, e = function(b) {
          return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
        }, f = function(c, d) {
          if (cljs.core.contains_QMARK_(cljs.core.deref(b), d)) {
            return c;
          }
          cljs.core._vreset_BANG_(b, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(b), d));
          return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, d) : a.call(null, c, d);
        };
        c = function(a, b) {
          switch(arguments.length) {
            case 0:
              return d.call(this);
            case 1:
              return e.call(this, a);
            case 2:
              return f.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        c.cljs$core$IFn$_invoke$arity$0 = d;
        c.cljs$core$IFn$_invoke$arity$1 = e;
        c.cljs$core$IFn$_invoke$arity$2 = f;
        return c;
      }();
    }(cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
  };
};
cljs.core.distinct.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, function() {
      var d;
      a: {
        var g = a;
        for (d = e;;) {
          var h = g;
          g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(h, 0, null);
          if (h = cljs.core.seq(h)) {
            if (cljs.core.contains_QMARK_(d, g)) {
              g = cljs.core.rest(h);
            } else {
              d = cljs.core.cons(g, c(cljs.core.rest(h), cljs.core.conj.cljs$core$IFn$_invoke$arity$2(d, g)));
              break a;
            }
          } else {
            d = null;
            break a;
          }
        }
      }
      return d;
    }, null, null);
  }(a, cljs.core.PersistentHashSet.EMPTY);
};
cljs.core.distinct.cljs$lang$maxFixedArity = 1;
cljs.core.butlast = function(a) {
  for (var b = cljs.core.PersistentVector.EMPTY;;) {
    if (cljs.core.next(a)) {
      b = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(b, cljs.core.first(a)), a = cljs.core.next(a);
    } else {
      return cljs.core.seq(b);
    }
  }
};
cljs.core.name = function(a) {
  if (null != a && (a.cljs$lang$protocol_mask$partition1$ & 4096 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$INamed$)) {
    return a.cljs$core$INamed$_name$arity$1(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error(["Doesn't support name: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(""));
};
cljs.core.zipmap = function(a, b) {
  for (var c = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY), d = cljs.core.seq(a), e = cljs.core.seq(b);;) {
    if (d && e) {
      c = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(c, cljs.core.first(d), cljs.core.first(e)), d = cljs.core.next(d), e = cljs.core.next(e);
    } else {
      return cljs.core.persistent_BANG_(c);
    }
  }
};
cljs.core.max_key = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.max_key.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.max_key.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.max_key.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return b;
};
cljs.core.max_key.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b)) > (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c)) ? b : c;
};
cljs.core.max_key.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(b, c) {
    return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(a, b, c);
  }, cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(a, b, c), d);
};
cljs.core.max_key.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.max_key.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.max_key.cljs$lang$maxFixedArity = 3;
cljs.core.min_key = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.min_key.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.min_key.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.min_key.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return b;
};
cljs.core.min_key.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b)) < (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c)) ? b : c;
};
cljs.core.min_key.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(b, c) {
    return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(a, b, c);
  }, cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(a, b, c), d);
};
cljs.core.min_key.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.min_key.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.min_key.cljs$lang$maxFixedArity = 3;
cljs.core.ArrayList = function(a) {
  this.arr = a;
};
cljs.core.ArrayList.prototype.add = function(a) {
  return this.arr.push(a);
};
cljs.core.ArrayList.prototype.size = function() {
  return this.arr.length;
};
cljs.core.ArrayList.prototype.clear = function() {
  return this.arr = [];
};
cljs.core.ArrayList.prototype.isEmpty = function() {
  return 0 === this.arr.length;
};
cljs.core.ArrayList.prototype.toArray = function() {
  return this.arr;
};
cljs.core.ArrayList.getBasis = function() {
  return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "arr", "arr", 2115492975, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.ArrayList.cljs$lang$type = !0;
cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";
cljs.core.ArrayList.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/ArrayList");
};
cljs.core.__GT_ArrayList = function(a) {
  return new cljs.core.ArrayList(a);
};
cljs.core.array_list = function() {
  return new cljs.core.ArrayList([]);
};
cljs.core.partition_all = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function(c) {
      return function() {
        var d = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          if (!cljs.core.truth_(c.isEmpty())) {
            var d = cljs.core.vec(c.toArray());
            c.clear();
            a = cljs.core.unreduced(b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(a, d) : b.call(null, a, d));
          }
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(d, e) {
          c.add(e);
          if (a === c.size()) {
            var f = cljs.core.vec(c.toArray());
            c.clear();
            return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, f) : b.call(null, d, f);
          }
          return d;
        };
        d = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        d.cljs$core$IFn$_invoke$arity$0 = e;
        d.cljs$core$IFn$_invoke$arity$1 = f;
        d.cljs$core$IFn$_invoke$arity$2 = g;
        return d;
      }();
    }(cljs.core.array_list());
  };
};
cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3(a, a, b);
};
cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.core.LazySeq(null, function() {
    var d = cljs.core.seq(c);
    return d ? cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(a, d), cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.drop.cljs$core$IFn$_invoke$arity$2(b, d))) : null;
  }, null, null);
};
cljs.core.partition_all.cljs$lang$maxFixedArity = 3;
cljs.core.take_while = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.take_while.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    return function() {
      var c = null, d = function() {
        return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
      }, e = function(a) {
        return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
      }, f = function(c, d) {
        return cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d)) ? b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d) : cljs.core.reduced(c);
      };
      c = function(a, b) {
        switch(arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return f.call(this, a, b);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      c.cljs$core$IFn$_invoke$arity$0 = d;
      c.cljs$core$IFn$_invoke$arity$1 = e;
      c.cljs$core$IFn$_invoke$arity$2 = f;
      return c;
    }();
  };
};
cljs.core.take_while.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(b);
    return c ? cljs.core.truth_(function() {
      var b = cljs.core.first(c);
      return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
    }()) ? cljs.core.cons(cljs.core.first(c), cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(a, cljs.core.rest(c))) : null : null;
  }, null, null);
};
cljs.core.take_while.cljs$lang$maxFixedArity = 2;
cljs.core.mk_bound_fn = function(a, b, c) {
  return function(d) {
    var e = cljs.core._comparator(a);
    d = cljs.core._entry_key(a, d);
    e = e.cljs$core$IFn$_invoke$arity$2 ? e.cljs$core$IFn$_invoke$arity$2(d, c) : e.call(null, d, c);
    return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(e, 0) : b.call(null, e, 0);
  };
};
cljs.core.subseq = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 5:
      return cljs.core.subseq.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.subseq.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = cljs.core.mk_bound_fn(a, b, c);
  return cljs.core.truth_(function() {
    var a = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core._GT_, cljs.core._GT__EQ_]);
    return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
  }()) ? (a = cljs.core._sorted_seq_from(a, c, !0), cljs.core.truth_(a) ? (c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a, 0, null), cljs.core.truth_(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(c) : d.call(null, c)) ? a : cljs.core.next(a)) : null) : cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(d, cljs.core._sorted_seq(a, !0));
};
cljs.core.subseq.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  var f = cljs.core._sorted_seq_from(a, c, !0);
  if (cljs.core.truth_(f)) {
    var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 0, null);
    return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(a, d, e), cljs.core.truth_(function() {
      var d = cljs.core.mk_bound_fn(a, b, c);
      return d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(g) : d.call(null, g);
    }()) ? f : cljs.core.next(f));
  }
  return null;
};
cljs.core.subseq.cljs$lang$maxFixedArity = 5;
cljs.core.rsubseq = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 5:
      return cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = cljs.core.mk_bound_fn(a, b, c);
  return cljs.core.truth_(function() {
    var a = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core._LT_, cljs.core._LT__EQ_]);
    return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
  }()) ? (a = cljs.core._sorted_seq_from(a, c, !1), cljs.core.truth_(a) ? (c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a, 0, null), cljs.core.truth_(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(c) : d.call(null, c)) ? a : cljs.core.next(a)) : null) : cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(d, cljs.core._sorted_seq(a, !1));
};
cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  var f = cljs.core._sorted_seq_from(a, e, !1);
  if (cljs.core.truth_(f)) {
    var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 0, null);
    return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(a, b, c), cljs.core.truth_(function() {
      var b = cljs.core.mk_bound_fn(a, d, e);
      return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(g) : b.call(null, g);
    }()) ? f : cljs.core.next(f));
  }
  return null;
};
cljs.core.rsubseq.cljs$lang$maxFixedArity = 5;
cljs.core.RangeIterator = function(a, b, c) {
  this.i = a;
  this.end = b;
  this.step = c;
};
cljs.core.RangeIterator.prototype.hasNext = function() {
  return 0 < this.step ? this.i < this.end : this.i > this.end;
};
cljs.core.RangeIterator.prototype.next = function() {
  var a = this.i;
  this.i += this.step;
  return a;
};
cljs.core.RangeIterator.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "i", "i", 253690212, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "end", "end", 1372345569, null), new cljs.core.Symbol(null, "step", "step", -1365547645, null)], null);
};
cljs.core.RangeIterator.cljs$lang$type = !0;
cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";
cljs.core.RangeIterator.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/RangeIterator");
};
cljs.core.__GT_RangeIterator = function(a, b, c) {
  return new cljs.core.RangeIterator(a, b, c);
};
cljs.core.Range = function(a, b, c, d, e) {
  this.meta = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 32375006;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
cljs.core.Range.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.Range.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.Range.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Range.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  if (0 <= b && b < this.cljs$core$ICounted$_count$arity$1(null)) {
    return this.start + b * this.step;
  }
  if (0 <= b && this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 <= b && b < this.cljs$core$ICounted$_count$arity$1(null) ? this.start + b * this.step : 0 <= b && this.start > this.end && 0 === this.step ? this.start : c;
};
cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.RangeIterator(this.start, this.end, this.step);
};
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.meta;
};
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.core.Range(this.meta, this.start, this.end, this.step, this.__hash);
};
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return 0 < this.step ? this.start + this.step < this.end ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step, null) : null;
};
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return cljs.core.not(this.cljs$core$ISeqable$_seq$arity$1(null)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = cljs.core.hash_ordered_coll(this);
};
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential(this, b);
};
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return cljs.core._with_meta(cljs.core.List.EMPTY, this.meta);
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, b);
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      c = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, a) : b.call(null, c, a);
      if (cljs.core.reduced_QMARK_(c)) {
        return cljs.core.deref(c);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return null == this.cljs$core$ISeqable$_seq$arity$1(null) ? null : this.start;
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return null != this.cljs$core$ISeqable$_seq$arity$1(null) ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step, null) : cljs.core.List.EMPTY;
};
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return 0 < this.step ? this.start < this.end ? this : null : 0 > this.step ? this.start > this.end ? this : null : this.start === this.end ? null : this;
};
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Range(b, this.start, this.end, this.step, this.__hash);
};
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons(b, this);
};
cljs.core.Range.getBasis = function() {
  return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "meta", "meta", -1154898805, null), new cljs.core.Symbol(null, "start", "start", 1285322546, null), new cljs.core.Symbol(null, "end", "end", 1372345569, null), new cljs.core.Symbol(null, "step", "step", -1365547645, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", 
  "mutable", 875778266), !0], null))], null);
};
cljs.core.Range.cljs$lang$type = !0;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Range");
};
cljs.core.__GT_Range = function(a, b, c, d, e) {
  return new cljs.core.Range(a, b, c, d, e);
};
var G__15664_15667 = cljs.core.Range.prototype, G__15665_15668 = cljs.core.ITER_SYMBOL, G__15666_15669 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15664_15667, G__15665_15668);
goog.object.set(G__15664_15667, G__15665_15668, G__15666_15669);
cljs.core.range = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.range.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.range.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.range.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.range.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.range.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.range.cljs$core$IFn$_invoke$arity$3(0, Number.MAX_VALUE, 1);
};
cljs.core.range.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.range.cljs$core$IFn$_invoke$arity$3(0, a, 1);
};
cljs.core.range.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.range.cljs$core$IFn$_invoke$arity$3(a, b, 1);
};
cljs.core.range.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.core.Range(null, a, b, c, null);
};
cljs.core.range.cljs$lang$maxFixedArity = 3;
cljs.core.take_nth = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.take_nth.cljs$core$IFn$_invoke$arity$1 = function(a) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return function(b) {
    return function(c) {
      return function() {
        var d = null, e = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, f = function(a) {
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, g = function(d, e) {
          var f = cljs.core._vreset_BANG_(c, cljs.core._deref(c) + 1);
          return 0 === cljs.core.rem(f, a) ? b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, e) : b.call(null, d, e) : d;
        };
        d = function(a, b) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return f.call(this, a);
            case 2:
              return g.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        d.cljs$core$IFn$_invoke$arity$0 = e;
        d.cljs$core$IFn$_invoke$arity$1 = f;
        d.cljs$core$IFn$_invoke$arity$2 = g;
        return d;
      }();
    }(cljs.core.volatile_BANG_(-1));
  };
};
cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(b);
    return c ? cljs.core.cons(cljs.core.first(c), cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(a, cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a, c))) : null;
  }, null, null);
};
cljs.core.take_nth.cljs$lang$maxFixedArity = 2;
cljs.core.split_with = function(a, b) {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(a, b), cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(a, b)], null);
};
cljs.core.partition_by = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function(b) {
    var c = cljs.core.array_list(), d = cljs.core.volatile_BANG_(new cljs.core.Keyword("cljs.core", "none", "cljs.core/none", 926646439));
    return function(c, d) {
      return function() {
        var e = null, f = function() {
          return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
        }, k = function(a) {
          if (!cljs.core.truth_(c.isEmpty())) {
            var d = cljs.core.vec(c.toArray());
            c.clear();
            a = cljs.core.unreduced(b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(a, d) : b.call(null, a, d));
          }
          return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
        }, l = function(e, f) {
          var g = cljs.core.deref(d), h = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(f) : a.call(null, f);
          cljs.core.vreset_BANG_(d, h);
          if (cljs.core.keyword_identical_QMARK_(g, new cljs.core.Keyword("cljs.core", "none", "cljs.core/none", 926646439)) || cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h, g)) {
            return c.add(f), e;
          }
          g = cljs.core.vec(c.toArray());
          c.clear();
          g = b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(e, g) : b.call(null, e, g);
          cljs.core.reduced_QMARK_(g) || c.add(f);
          return g;
        };
        e = function(a, b) {
          switch(arguments.length) {
            case 0:
              return f.call(this);
            case 1:
              return k.call(this, a);
            case 2:
              return l.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        e.cljs$core$IFn$_invoke$arity$0 = f;
        e.cljs$core$IFn$_invoke$arity$1 = k;
        e.cljs$core$IFn$_invoke$arity$2 = l;
        return e;
      }();
    }(c, d);
  };
};
cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(b);
    if (c) {
      var d = cljs.core.first(c), e = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
      d = cljs.core.cons(d, cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(function(b, c, d, e) {
        return function(b) {
          return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c, a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b));
        };
      }(d, e, c, c), cljs.core.next(c)));
      return cljs.core.cons(d, cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(a, cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(d), c))));
    }
    return null;
  }, null, null);
};
cljs.core.partition_by.cljs$lang$maxFixedArity = 2;
cljs.core.frequencies = function(a) {
  return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a, c) {
    return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(a, c, cljs.core.get.cljs$core$IFn$_invoke$arity$3(a, c, 0) + 1);
  }, cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY), a));
};
cljs.core.reductions = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.reductions.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(null, function() {
    var c = cljs.core.seq(b);
    if (c) {
      return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(a, cljs.core.first(c), cljs.core.rest(c));
    }
    c = a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
    return cljs.core._conj(cljs.core.List.EMPTY, c);
  }, null, null);
};
cljs.core.reductions.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (cljs.core.reduced_QMARK_(b)) {
    var d = cljs.core.deref(b);
    return cljs.core._conj(cljs.core.List.EMPTY, d);
  }
  return cljs.core.cons(b, new cljs.core.LazySeq(null, function() {
    var d = cljs.core.seq(c);
    return d ? cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(a, function() {
      var c = cljs.core.first(d);
      return a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
    }(), cljs.core.rest(d)) : null;
  }, null, null));
};
cljs.core.reductions.cljs$lang$maxFixedArity = 3;
cljs.core.juxt = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.juxt.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(3), 0, null);
      return cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], b);
  }
};
cljs.core.juxt.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return function() {
    var b = null, c = function() {
      return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null)], null);
    }, d = function(b) {
      return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b)], null);
    }, e = function(b, c) {
      return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c)], null);
    }, f = function(b, c, d) {
      return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.call(null, b, c, d)], null);
    }, g = function() {
      var b = function(b, c, d, e) {
        return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e)], null);
      }, c = function(a, c, d, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return b.call(this, a, c, d, f);
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = function(a) {
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return b(c, d, e, a);
      };
      c.cljs$core$IFn$_invoke$arity$variadic = b;
      return c;
    }();
    b = function(a, b, l, m) {
      switch(arguments.length) {
        case 0:
          return c.call(this);
        case 1:
          return d.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return f.call(this, a, b, l);
        default:
          var h = null;
          if (3 < arguments.length) {
            h = 0;
            for (var k = Array(arguments.length - 3); h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new cljs.core.IndexedSeq(k, 0, null);
          }
          return g.cljs$core$IFn$_invoke$arity$variadic(a, b, l, h);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = g.cljs$lang$applyTo;
    b.cljs$core$IFn$_invoke$arity$0 = c;
    b.cljs$core$IFn$_invoke$arity$1 = d;
    b.cljs$core$IFn$_invoke$arity$2 = e;
    b.cljs$core$IFn$_invoke$arity$3 = f;
    b.cljs$core$IFn$_invoke$arity$variadic = g.cljs$core$IFn$_invoke$arity$variadic;
    return b;
  }();
};
cljs.core.juxt.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function() {
    var c = null, d = function() {
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null), b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null)], null);
    }, e = function(c) {
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(c) : a.call(null, c), b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(c) : b.call(null, c)], null);
    }, f = function(c, d) {
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, d) : a.call(null, c, d), b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(c, d) : b.call(null, c, d)], null);
    }, g = function(c, d, e) {
      return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(c, d, e) : a.call(null, c, d, e), b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(c, d, e) : b.call(null, c, d, e)], null);
    }, h = function() {
      var c = function(c, d, e, f) {
        return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$5(a, c, d, e, f), cljs.core.apply.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f)], null);
      }, d = function(a, b, d, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return c.call(this, a, b, d, f);
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var d = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return c(b, d, e, a);
      };
      d.cljs$core$IFn$_invoke$arity$variadic = c;
      return d;
    }();
    c = function(a, b, c, n) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return g.call(this, a, b, c);
        default:
          var k = null;
          if (3 < arguments.length) {
            k = 0;
            for (var l = Array(arguments.length - 3); k < l.length;) {
              l[k] = arguments[k + 3], ++k;
            }
            k = new cljs.core.IndexedSeq(l, 0, null);
          }
          return h.cljs$core$IFn$_invoke$arity$variadic(a, b, c, k);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = h.cljs$lang$applyTo;
    c.cljs$core$IFn$_invoke$arity$0 = d;
    c.cljs$core$IFn$_invoke$arity$1 = e;
    c.cljs$core$IFn$_invoke$arity$2 = f;
    c.cljs$core$IFn$_invoke$arity$3 = g;
    c.cljs$core$IFn$_invoke$arity$variadic = h.cljs$core$IFn$_invoke$arity$variadic;
    return c;
  }();
};
cljs.core.juxt.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return function() {
    var d = null, e = function() {
      return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null), b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null), c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null)], null);
    }, f = function(d) {
      return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d), b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(d) : b.call(null, d), c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d)], null);
    }, g = function(d, e) {
      return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(d, e) : a.call(null, d, e), b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(d, e) : b.call(null, d, e), c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(d, e) : c.call(null, d, e)], null);
    }, h = function(d, e, f) {
      return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.cljs$core$IFn$_invoke$arity$3 ? a.cljs$core$IFn$_invoke$arity$3(d, e, f) : a.call(null, d, e, f), b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(d, e, f) : b.call(null, d, e, f), c.cljs$core$IFn$_invoke$arity$3 ? c.cljs$core$IFn$_invoke$arity$3(d, e, f) : c.call(null, d, e, f)], null);
    }, k = function() {
      var d = function(d, e, f, g) {
        return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$5(a, d, e, f, g), cljs.core.apply.cljs$core$IFn$_invoke$arity$5(b, d, e, f, g), cljs.core.apply.cljs$core$IFn$_invoke$arity$5(c, d, e, f, g)], null);
      }, e = function(a, b, c, e) {
        var f = null;
        if (3 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 3); f < g.length;) {
            g[f] = arguments[f + 3], ++f;
          }
          f = new cljs.core.IndexedSeq(g, 0, null);
        }
        return d.call(this, a, b, c, f);
      };
      e.cljs$lang$maxFixedArity = 3;
      e.cljs$lang$applyTo = function(a) {
        var b = cljs.core.first(a);
        a = cljs.core.next(a);
        var c = cljs.core.first(a);
        a = cljs.core.next(a);
        var e = cljs.core.first(a);
        a = cljs.core.rest(a);
        return d(b, c, e, a);
      };
      e.cljs$core$IFn$_invoke$arity$variadic = d;
      return e;
    }();
    d = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return e.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return g.call(this, a, b);
        case 3:
          return h.call(this, a, b, c);
        default:
          var l = null;
          if (3 < arguments.length) {
            l = 0;
            for (var m = Array(arguments.length - 3); l < m.length;) {
              m[l] = arguments[l + 3], ++l;
            }
            l = new cljs.core.IndexedSeq(m, 0, null);
          }
          return k.cljs$core$IFn$_invoke$arity$variadic(a, b, c, l);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = k.cljs$lang$applyTo;
    d.cljs$core$IFn$_invoke$arity$0 = e;
    d.cljs$core$IFn$_invoke$arity$1 = f;
    d.cljs$core$IFn$_invoke$arity$2 = g;
    d.cljs$core$IFn$_invoke$arity$3 = h;
    d.cljs$core$IFn$_invoke$arity$variadic = k.cljs$core$IFn$_invoke$arity$variadic;
    return d;
  }();
};
cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c, d) {
  return function(a) {
    return function() {
      var b = null, c = function() {
        return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a) {
          return function(a, b) {
            return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null));
          };
        }(a), cljs.core.PersistentVector.EMPTY, a);
      }, d = function(b) {
        return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a) {
          return function(a, c) {
            return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(b) : c.call(null, b));
          };
        }(a), cljs.core.PersistentVector.EMPTY, a);
      }, e = function(b, c) {
        return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a) {
          return function(a, d) {
            return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(b, c) : d.call(null, b, c));
          };
        }(a), cljs.core.PersistentVector.EMPTY, a);
      }, l = function(b, c, d) {
        return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a) {
          return function(a, e) {
            return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, e.cljs$core$IFn$_invoke$arity$3 ? e.cljs$core$IFn$_invoke$arity$3(b, c, d) : e.call(null, b, c, d));
          };
        }(a), cljs.core.PersistentVector.EMPTY, a);
      }, m = function() {
        var b = function(b, c, d, e) {
          return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a) {
            return function(a, f) {
              return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a, cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f, b, c, d, e));
            };
          }(a), cljs.core.PersistentVector.EMPTY, a);
        }, c = function(a, c, d, e) {
          var f = null;
          if (3 < arguments.length) {
            f = 0;
            for (var g = Array(arguments.length - 3); f < g.length;) {
              g[f] = arguments[f + 3], ++f;
            }
            f = new cljs.core.IndexedSeq(g, 0, null);
          }
          return b.call(this, a, c, d, f);
        };
        c.cljs$lang$maxFixedArity = 3;
        c.cljs$lang$applyTo = function(a) {
          var c = cljs.core.first(a);
          a = cljs.core.next(a);
          var d = cljs.core.first(a);
          a = cljs.core.next(a);
          var e = cljs.core.first(a);
          a = cljs.core.rest(a);
          return b(c, d, e, a);
        };
        c.cljs$core$IFn$_invoke$arity$variadic = b;
        return c;
      }();
      b = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return c.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return l.call(this, a, b, f);
          default:
            var h = null;
            if (3 < arguments.length) {
              h = 0;
              for (var k = Array(arguments.length - 3); h < k.length;) {
                k[h] = arguments[h + 3], ++h;
              }
              h = new cljs.core.IndexedSeq(k, 0, null);
            }
            return m.cljs$core$IFn$_invoke$arity$variadic(a, b, f, h);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = m.cljs$lang$applyTo;
      b.cljs$core$IFn$_invoke$arity$0 = c;
      b.cljs$core$IFn$_invoke$arity$1 = d;
      b.cljs$core$IFn$_invoke$arity$2 = e;
      b.cljs$core$IFn$_invoke$arity$3 = l;
      b.cljs$core$IFn$_invoke$arity$variadic = m.cljs$core$IFn$_invoke$arity$variadic;
      return b;
    }();
  }(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(a, b, c, d));
};
cljs.core.juxt.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  var d = cljs.core.next(c);
  c = cljs.core.first(d);
  d = cljs.core.next(d);
  return cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(b, a, c, d);
};
cljs.core.juxt.cljs$lang$maxFixedArity = 3;
cljs.core.dorun = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1 = function(a) {
  for (;;) {
    if (cljs.core.seq(a)) {
      a = cljs.core.next(a);
    } else {
      return null;
    }
  }
};
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  for (;;) {
    if (cljs.core.seq(b) && 0 < a) {
      var c = a - 1, d = cljs.core.next(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
};
cljs.core.dorun.cljs$lang$maxFixedArity = 2;
cljs.core.doall = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.doall.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.doall.cljs$core$IFn$_invoke$arity$1 = function(a) {
  cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(a);
  return a;
};
cljs.core.doall.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(a, b);
  return b;
};
cljs.core.doall.cljs$lang$maxFixedArity = 2;
cljs.core.regexp_QMARK_ = function(a) {
  return a instanceof RegExp;
};
cljs.core.re_matches = function(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(c), b) ? 1 === cljs.core.count(c) ? cljs.core.first(c) : cljs.core.vec(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
};
cljs.core.re_find = function(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return null == c ? null : 1 === cljs.core.count(c) ? cljs.core.first(c) : cljs.core.vec(c);
  }
  throw new TypeError("re-find must match against a string.");
};
cljs.core.re_seq = function(a, b) {
  var c = cljs.core.re_find(a, b), d = b.search(a), e = cljs.core.coll_QMARK_(c) ? cljs.core.first(c) : c, f = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(b, d + cljs.core.count(e));
  return cljs.core.truth_(c) ? new cljs.core.LazySeq(null, function(b, c, d, e) {
    return function() {
      return cljs.core.cons(b, cljs.core.seq(e) ? cljs.core.re_seq.cljs$core$IFn$_invoke$arity$2 ? cljs.core.re_seq.cljs$core$IFn$_invoke$arity$2(a, e) : cljs.core.re_seq.call(null, a, e) : null);
    };
  }(c, d, e, f), null, null) : null;
};
cljs.core.re_pattern = function(a) {
  if (a instanceof RegExp) {
    return a;
  }
  var b = cljs.core.re_find(/^\(\?([idmsux]*)\)/, a), c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 0, null);
  b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b, 1, null);
  a = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(a, cljs.core.count(c));
  c = RegExp;
  b = cljs.core.truth_(b) ? b : "";
  return new c(a, b);
};
cljs.core.pr_sequential_writer = function(a, b, c, d, e, f, g) {
  var h = cljs.core._STAR_print_level_STAR_;
  cljs.core._STAR_print_level_STAR_ = null == cljs.core._STAR_print_level_STAR_ ? null : cljs.core._STAR_print_level_STAR_ - 1;
  try {
    if (null != cljs.core._STAR_print_level_STAR_ && 0 > cljs.core._STAR_print_level_STAR_) {
      return cljs.core._write(a, "#");
    }
    cljs.core._write(a, c);
    if (0 === (new cljs.core.Keyword(null, "print-length", "print-length", 1931866356)).cljs$core$IFn$_invoke$arity$1(f)) {
      cljs.core.seq(g) && cljs.core._write(a, function() {
        var a = (new cljs.core.Keyword(null, "more-marker", "more-marker", -14717935)).cljs$core$IFn$_invoke$arity$1(f);
        return cljs.core.truth_(a) ? a : "...";
      }());
    } else {
      if (cljs.core.seq(g)) {
        var k = cljs.core.first(g);
        b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(k, a, f) : b.call(null, k, a, f);
      }
      for (var l = cljs.core.next(g), m = (new cljs.core.Keyword(null, "print-length", "print-length", 1931866356)).cljs$core$IFn$_invoke$arity$1(f) - 1;;) {
        if (!l || null != m && 0 === m) {
          cljs.core.seq(l) && 0 === m && (cljs.core._write(a, d), cljs.core._write(a, function() {
            var a = (new cljs.core.Keyword(null, "more-marker", "more-marker", -14717935)).cljs$core$IFn$_invoke$arity$1(f);
            return cljs.core.truth_(a) ? a : "...";
          }()));
          break;
        } else {
          cljs.core._write(a, d);
          var n = cljs.core.first(l);
          c = a;
          g = f;
          b.cljs$core$IFn$_invoke$arity$3 ? b.cljs$core$IFn$_invoke$arity$3(n, c, g) : b.call(null, n, c, g);
          var p = cljs.core.next(l);
          c = m - 1;
          l = p;
          m = c;
        }
      }
    }
    return cljs.core._write(a, e);
  } finally {
    cljs.core._STAR_print_level_STAR_ = h;
  }
};
cljs.core.write_all = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  for (var c, d = cljs.core.seq(b), e = null, f = 0, g = 0;;) {
    if (g < f) {
      c = e.cljs$core$IIndexed$_nth$arity$2(null, g), cljs.core._write(a, c), g += 1;
    } else {
      if (d = cljs.core.seq(d)) {
        e = d, cljs.core.chunked_seq_QMARK_(e) ? (d = cljs.core.chunk_first(e), e = cljs.core.chunk_rest(e), c = d, f = cljs.core.count(d), d = e, e = c) : (c = cljs.core.first(e), cljs.core._write(a, c), d = cljs.core.next(e), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.write_all.cljs$lang$maxFixedArity = 1;
cljs.core.write_all.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.string_print = function(a) {
  if (null == cljs.core._STAR_print_fn_STAR_) {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
  cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(a) : cljs.core._STAR_print_fn_STAR_.call(null, a);
  return null;
};
cljs.core.flush = function() {
  return null;
};
cljs.core.char_escapes = function() {
  return {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
}();
cljs.core.quote_string = function(a) {
  return [cljs.core.str.cljs$core$IFn$_invoke$arity$1('"'), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return cljs.core.char_escapes[a];
  })), cljs.core.str.cljs$core$IFn$_invoke$arity$1('"')].join("");
};
cljs.core.print_meta_QMARK_ = function(a, b) {
  var c = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, new cljs.core.Keyword(null, "meta", "meta", 1499536964)));
  return c ? (c = null != b ? b.cljs$lang$protocol_mask$partition0$ & 131072 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$IMeta$ ? !0 : !1 : !1) ? null != cljs.core.meta(b) : c : c;
};
cljs.core.pr_writer_impl = function(a, b, c) {
  if (null == a) {
    return cljs.core._write(b, "nil");
  }
  cljs.core.print_meta_QMARK_(c, a) && (cljs.core._write(b, "^"), cljs.core.pr_writer(cljs.core.meta(a), b, c), cljs.core._write(b, " "));
  if (a.cljs$lang$type) {
    return a.cljs$lang$ctorPrWriter(a, b, c);
  }
  if (null != a && (a.cljs$lang$protocol_mask$partition0$ & 2147483648 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IPrintWithWriter$)) {
    return a.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null, b, c);
  }
  if (!0 === a || !1 === a || "number" === typeof a) {
    return cljs.core._write(b, "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));
  }
  if (cljs.core.object_QMARK_(a)) {
    return cljs.core._write(b, "#js "), cljs.core.print_map(cljs.core.map.cljs$core$IFn$_invoke$arity$2(function(b) {
      var c = cljs.core.PersistentVector, d = cljs.core.PersistentVector.EMPTY_NODE;
      var e = null != cljs.core.re_matches(/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/, b) ? cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b) : b;
      return new c(null, 2, 5, d, [e, a[b]], null);
    }, cljs.core.js_keys(a)), cljs.core.pr_writer, b, c);
  }
  if (cljs.core.array_QMARK_(a)) {
    return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "#js [", " ", "]", c, a);
  }
  if (goog.isString(a)) {
    return cljs.core.truth_((new cljs.core.Keyword(null, "readably", "readably", 1129599760)).cljs$core$IFn$_invoke$arity$1(c)) ? cljs.core._write(b, cljs.core.quote_string(a)) : cljs.core._write(b, a);
  }
  if (goog.isFunction(a)) {
    var d = a.name;
    c = cljs.core.truth_(function() {
      var a = null == d;
      return a ? a : goog.string.isEmpty(d);
    }()) ? "Function" : d;
    return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(b, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[", c, cljs.core._STAR_print_fn_bodies_STAR_ ? [' "', cljs.core.str.cljs$core$IFn$_invoke$arity$1("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)), '"'].join("") : "", "]"], 0));
  }
  if (a instanceof Date) {
    return c = function(a, b) {
      for (var c = "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);;) {
        if (cljs.core.count(c) < b) {
          c = ["0", cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join("");
        } else {
          return c;
        }
      }
    }, cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(b, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['#inst "', "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  if (cljs.core.regexp_QMARK_(a)) {
    return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(b, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['#"', a.source, '"'], 0));
  }
  if (cljs.core.truth_(function() {
    var b = null == a ? null : a.constructor;
    return null == b ? null : b.cljs$lang$ctorStr;
  }())) {
    return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(b, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[", a.constructor.cljs$lang$ctorStr.replace(RegExp("/", "g"), "."), "]"], 0));
  }
  d = function() {
    var b = null == a ? null : a.constructor;
    return null == b ? null : b.name;
  }();
  c = cljs.core.truth_(function() {
    var a = null == d;
    return a ? a : goog.string.isEmpty(d);
  }()) ? "Object" : d;
  return null == a.constructor ? cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(b, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[", c, "]"], 0)) : cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(b, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[", c, " ", "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "]"], 0));
};
cljs.core.pr_writer = function(a, b, c) {
  var d = (new cljs.core.Keyword(null, "alt-impl", "alt-impl", 670969595)).cljs$core$IFn$_invoke$arity$1(c);
  return cljs.core.truth_(d) ? (c = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c, new cljs.core.Keyword(null, "fallback-impl", "fallback-impl", -1501286995), cljs.core.pr_writer_impl), d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c)) : cljs.core.pr_writer_impl(a, b, c);
};
cljs.core.pr_seq_writer = function(a, b, c) {
  cljs.core.pr_writer(cljs.core.first(a), b, c);
  a = cljs.core.seq(cljs.core.next(a));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.cljs$core$IIndexed$_nth$arity$2(null, f);
      cljs.core._write(b, " ");
      cljs.core.pr_writer(g, b, c);
      f += 1;
    } else {
      if (a = cljs.core.seq(a)) {
        d = a, cljs.core.chunked_seq_QMARK_(d) ? (a = cljs.core.chunk_first(d), d = cljs.core.chunk_rest(d), g = a, e = cljs.core.count(a), a = d, d = g) : (g = cljs.core.first(d), cljs.core._write(b, " "), cljs.core.pr_writer(g, b, c), a = cljs.core.next(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
cljs.core.pr_sb_with_opts = function(a, b) {
  var c = new goog.string.StringBuffer, d = new cljs.core.StringBufferWriter(c);
  cljs.core.pr_seq_writer(a, d, b);
  d.cljs$core$IWriter$_flush$arity$1(null);
  return c;
};
cljs.core.pr_str_with_opts = function(a, b) {
  return cljs.core.empty_QMARK_(a) ? "" : "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts(a, b));
};
cljs.core.prn_str_with_opts = function(a, b) {
  if (cljs.core.empty_QMARK_(a)) {
    return "\n";
  }
  var c = cljs.core.pr_sb_with_opts(a, b);
  c.append("\n");
  return "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(c);
};
cljs.core.pr_with_opts = function(a, b) {
  return cljs.core.string_print(cljs.core.pr_str_with_opts(a, b));
};
cljs.core.newline = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.newline.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.newline.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.newline.cljs$core$IFn$_invoke$arity$1(null);
};
cljs.core.newline.cljs$core$IFn$_invoke$arity$1 = function(a) {
  cljs.core.string_print("\n");
  return cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a, new cljs.core.Keyword(null, "flush-on-newline", "flush-on-newline", -151457939))) ? cljs.core.flush() : null;
};
cljs.core.newline.cljs$lang$maxFixedArity = 1;
cljs.core.pr_str = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.pr_str_with_opts(a, cljs.core.pr_opts());
};
cljs.core.pr_str.cljs$lang$maxFixedArity = 0;
cljs.core.pr_str.cljs$lang$applyTo = function(a) {
  return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.prn_str = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.prn_str_with_opts(a, cljs.core.pr_opts());
};
cljs.core.prn_str.cljs$lang$maxFixedArity = 0;
cljs.core.prn_str.cljs$lang$applyTo = function(a) {
  return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.pr = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.pr_with_opts(a, cljs.core.pr_opts());
};
cljs.core.pr.cljs$lang$maxFixedArity = 0;
cljs.core.pr.cljs$lang$applyTo = function(a) {
  return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.print = function() {
  var a = function(a) {
    return cljs.core.pr_with_opts(a, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(), new cljs.core.Keyword(null, "readably", "readably", 1129599760), !1));
  }, b = function(b) {
    var c = null;
    if (0 < arguments.length) {
      c = 0;
      for (var e = Array(arguments.length - 0); c < e.length;) {
        e[c] = arguments[c + 0], ++c;
      }
      c = new cljs.core.IndexedSeq(e, 0, null);
    }
    return a.call(this, c);
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b);
  };
  b.cljs$core$IFn$_invoke$arity$variadic = a;
  return b;
}();
cljs.core.print_str = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.pr_str_with_opts(a, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(), new cljs.core.Keyword(null, "readably", "readably", 1129599760), !1));
};
cljs.core.print_str.cljs$lang$maxFixedArity = 0;
cljs.core.print_str.cljs$lang$applyTo = function(a) {
  return cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.println = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  cljs.core.pr_with_opts(a, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(), new cljs.core.Keyword(null, "readably", "readably", 1129599760), !1));
  return cljs.core._STAR_print_newline_STAR_ ? cljs.core.newline.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_opts()) : null;
};
cljs.core.println.cljs$lang$maxFixedArity = 0;
cljs.core.println.cljs$lang$applyTo = function(a) {
  return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.println_str = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.println_str.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.println_str.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return cljs.core.prn_str_with_opts(a, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(), new cljs.core.Keyword(null, "readably", "readably", 1129599760), !1));
};
cljs.core.println_str.cljs$lang$maxFixedArity = 0;
cljs.core.println_str.cljs$lang$applyTo = function(a) {
  return cljs.core.println_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.prn = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  cljs.core.pr_with_opts(a, cljs.core.pr_opts());
  return cljs.core._STAR_print_newline_STAR_ ? cljs.core.newline.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_opts()) : null;
};
cljs.core.prn.cljs$lang$maxFixedArity = 0;
cljs.core.prn.cljs$lang$applyTo = function(a) {
  return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.strip_ns = function(a) {
  return a instanceof cljs.core.Symbol ? cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null, cljs.core.name(a)) : cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null, cljs.core.name(a));
};
cljs.core.lift_ns = function(a) {
  if (cljs.core._STAR_print_namespace_maps_STAR_) {
    var b = cljs.core.seq(a), c = cljs.core.seq(b), d = cljs.core.first(c);
    cljs.core.next(c);
    cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d, 0, null);
    cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d, 1, null);
    c = cljs.core.empty(a);
    for (a = null;;) {
      d = a;
      b = cljs.core.seq(b);
      a = cljs.core.first(b);
      var e = cljs.core.next(b), f = a;
      a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 0, null);
      b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 1, null);
      if (cljs.core.truth_(f)) {
        if (a instanceof cljs.core.Keyword || a instanceof cljs.core.Symbol) {
          if (cljs.core.truth_(d)) {
            if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d, cljs.core.namespace(a))) {
              c = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c, cljs.core.strip_ns(a), b), a = d, b = e;
            } else {
              return null;
            }
          } else {
            if (d = cljs.core.namespace(a), cljs.core.truth_(d)) {
              c = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c, cljs.core.strip_ns(a), b), a = d, b = e;
            } else {
              return null;
            }
          }
        } else {
          return null;
        }
      } else {
        return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d, c], null);
      }
    }
  } else {
    return null;
  }
};
cljs.core.print_prefix_map = function(a, b, c, d, e) {
  return cljs.core.pr_sequential_writer(d, function(a, b, d) {
    var e = cljs.core.key(a);
    c.cljs$core$IFn$_invoke$arity$3 ? c.cljs$core$IFn$_invoke$arity$3(e, b, d) : c.call(null, e, b, d);
    cljs.core._write(b, " ");
    a = cljs.core.val(a);
    return c.cljs$core$IFn$_invoke$arity$3 ? c.cljs$core$IFn$_invoke$arity$3(a, b, d) : c.call(null, a, b, d);
  }, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "{"].join(""), ", ", "}", e, cljs.core.seq(b));
};
cljs.core.print_map = function(a, b, c, d) {
  var e = cljs.core.map_QMARK_(a) ? cljs.core.lift_ns(a) : null, f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null);
  e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 1, null);
  return cljs.core.truth_(f) ? cljs.core.print_prefix_map(["#:", cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(""), e, b, c, d) : cljs.core.print_prefix_map(null, a, b, c, d);
};
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  cljs.core._write(b, "#object [cljs.core.Volatile ");
  cljs.core.pr_writer(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "val", "val", 128701612), this.state], null), b, c);
  return cljs.core._write(b, "]");
};
cljs.core.Var.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  cljs.core._write(b, "#'");
  return cljs.core.pr_writer(this.sym, b, c);
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "[", " ", "]", c, this);
};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "#{", " ", "}", c, this);
};
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.print_map(this, cljs.core.pr_writer, b, c);
};
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.print_map(this, cljs.core.pr_writer, b, c);
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "[", " ", "]", c, this);
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.print_map(this, cljs.core.pr_writer, b, c);
};
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "#{", " ", "}", c, this);
};
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  cljs.core._write(b, "#object [cljs.core.Atom ");
  cljs.core.pr_writer(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "val", "val", 128701612), this.state], null), b, c);
  return cljs.core._write(b, "]");
};
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "[", " ", "]", c, this);
};
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "[", " ", "]", c, this);
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core._write(b, "()");
};
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "#queue [", " ", "]", c, cljs.core.seq(this));
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.print_map(this, cljs.core.pr_writer, b, c);
};
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.TransformerIterator.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.TransformerIterator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.Symbol.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (b instanceof cljs.core.Symbol) {
    return cljs.core.compare_symbols(this, b);
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.Keyword.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (b instanceof cljs.core.Keyword) {
    return cljs.core.compare_keywords(this, b);
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.Subvec.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this, b);
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this, b);
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.MapEntry.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.MapEntry.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this, b);
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.BlackNode.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.BlackNode.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this, b);
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.RedNode.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.RedNode.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  if (cljs.core.vector_QMARK_(b)) {
    return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this, b);
  }
  throw Error(["Cannot compare ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.alter_meta_BANG_ = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 2 < b.length ? new cljs.core.IndexedSeq(b.slice(2), 0, null) : null;
  return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
};
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  return a.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(b, a.meta, c);
};
cljs.core.alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
cljs.core.alter_meta_BANG_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a), c = cljs.core.next(a);
  a = cljs.core.first(c);
  c = cljs.core.next(c);
  return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.core.reset_meta_BANG_ = function(a, b) {
  return a.meta = b;
};
cljs.core.add_watch = function(a, b, c) {
  cljs.core._add_watch(a, b, c);
  return a;
};
cljs.core.remove_watch = function(a, b) {
  cljs.core._remove_watch(a, b);
  return a;
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.gensym.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("G__");
};
cljs.core.gensym.cljs$core$IFn$_invoke$arity$1 = function(a) {
  null == cljs.core.gensym_counter && (cljs.core.gensym_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0));
  return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter, cljs.core.inc))].join(""));
};
cljs.core.gensym.cljs$lang$maxFixedArity = 1;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(a, b) {
  this.f = a;
  this.value = b;
  this.cljs$lang$protocol_mask$partition0$ = 32768;
  this.cljs$lang$protocol_mask$partition1$ = 1;
};
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = function(a) {
  cljs.core.truth_(this.f) && (this.value = this.f.cljs$core$IFn$_invoke$arity$0 ? this.f.cljs$core$IFn$_invoke$arity$0() : this.f.call(null), this.f = null);
  return this.value;
};
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = function(a) {
  return cljs.core.not(this.f);
};
cljs.core.Delay.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "f", "f", 43394975, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "value", "value", 1946509744, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.Delay.cljs$lang$type = !0;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Delay");
};
cljs.core.__GT_Delay = function(a, b) {
  return new cljs.core.Delay(a, b);
};
cljs.core.delay_QMARK_ = function(a) {
  return a instanceof cljs.core.Delay;
};
cljs.core.force = function(a) {
  return cljs.core.delay_QMARK_(a) ? cljs.core.deref(a) : a;
};
cljs.core.realized_QMARK_ = function(a) {
  return cljs.core._realized_QMARK_(a);
};
cljs.core.preserving_reduced = function(a) {
  return function(b, c) {
    var d = a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c);
    return cljs.core.reduced_QMARK_(d) ? cljs.core.reduced(d) : d;
  };
};
cljs.core.cat = function(a) {
  return function(b) {
    return function() {
      var c = null, d = function() {
        return a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
      }, e = function(b) {
        return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
      }, f = function(a, c) {
        return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(b, a, c);
      };
      c = function(a, b) {
        switch(arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return f.call(this, a, b);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      c.cljs$core$IFn$_invoke$arity$0 = d;
      c.cljs$core$IFn$_invoke$arity$1 = e;
      c.cljs$core$IFn$_invoke$arity$2 = f;
      return c;
    }();
  }(cljs.core.preserving_reduced(a));
};
cljs.core.halt_when = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.halt_when.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.halt_when.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.halt_when.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.halt_when.cljs$core$IFn$_invoke$arity$2(a, null);
};
cljs.core.halt_when.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return function(c) {
    return function() {
      var d = null, e = function() {
        return c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null);
      }, f = function(a) {
        return cljs.core.map_QMARK_(a) && cljs.core.contains_QMARK_(a, new cljs.core.Keyword("cljs.core", "halt", "cljs.core/halt", -1049036715)) ? (new cljs.core.Keyword("cljs.core", "halt", "cljs.core/halt", -1049036715)).cljs$core$IFn$_invoke$arity$1(a) : c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(a) : c.call(null, a);
      }, g = function(d, e) {
        return cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(e) : a.call(null, e)) ? cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core", "halt", "cljs.core/halt", -1049036715), cljs.core.truth_(b) ? function() {
          var a = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(d) : c.call(null, d);
          return b.cljs$core$IFn$_invoke$arity$2 ? b.cljs$core$IFn$_invoke$arity$2(a, e) : b.call(null, a, e);
        }() : e], null)) : c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(d, e) : c.call(null, d, e);
      };
      d = function(a, b) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return f.call(this, a);
          case 2:
            return g.call(this, a, b);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      d.cljs$core$IFn$_invoke$arity$0 = e;
      d.cljs$core$IFn$_invoke$arity$1 = f;
      d.cljs$core$IFn$_invoke$arity$2 = g;
      return d;
    }();
  };
};
cljs.core.halt_when.cljs$lang$maxFixedArity = 2;
cljs.core.dedupe = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.dedupe.cljs$core$IFn$_invoke$arity$0 = function() {
  return function(a) {
    return function(b) {
      return function() {
        var c = null, d = function() {
          return a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null);
        }, e = function(b) {
          return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
        }, f = function(c, d) {
          var e = cljs.core.deref(b);
          cljs.core.vreset_BANG_(b, d);
          return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e, d) ? c : a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, d) : a.call(null, c, d);
        };
        c = function(a, b) {
          switch(arguments.length) {
            case 0:
              return d.call(this);
            case 1:
              return e.call(this, a);
            case 2:
              return f.call(this, a, b);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        c.cljs$core$IFn$_invoke$arity$0 = d;
        c.cljs$core$IFn$_invoke$arity$1 = e;
        c.cljs$core$IFn$_invoke$arity$2 = f;
        return c;
      }();
    }(cljs.core.volatile_BANG_(new cljs.core.Keyword("cljs.core", "none", "cljs.core/none", 926646439)));
  };
};
cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.dedupe.cljs$core$IFn$_invoke$arity$0(), a);
};
cljs.core.dedupe.cljs$lang$maxFixedArity = 1;
cljs.core.random_sample = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.random_sample.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.random_sample.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.random_sample.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(function(b) {
    return cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < a;
  });
};
cljs.core.random_sample.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function(b) {
    return cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < a;
  }, b);
};
cljs.core.random_sample.cljs$lang$maxFixedArity = 2;
cljs.core.Eduction = function(a, b) {
  this.xform = a;
  this.coll = b;
  this.cljs$lang$protocol_mask$partition0$ = 2173173760;
  this.cljs$lang$protocol_mask$partition1$ = 131072;
};
cljs.core.Eduction.prototype.indexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, 0);
  }, c = function(a, b) {
    return cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Eduction.prototype.lastIndexOf = function() {
  var a = null, b = function(a) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, cljs.core.count(this));
  }, c = function(a, b) {
    return cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, a, b);
  };
  a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  return a;
}();
cljs.core.Eduction.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return cljs.core.TransformerIterator.create(this.xform, cljs.core.iter(this.coll));
};
cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(this.xform, this.coll));
};
cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(this.xform, cljs.core.completing.cljs$core$IFn$_invoke$arity$1(b), this.coll);
};
cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(this.xform, cljs.core.completing.cljs$core$IFn$_invoke$arity$1(b), c, this.coll);
};
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_sequential_writer(b, cljs.core.pr_writer, "(", " ", ")", c, this);
};
cljs.core.Eduction.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "xform", "xform", -85179481, null), new cljs.core.Symbol(null, "coll", "coll", -1006698606, null)], null);
};
cljs.core.Eduction.cljs$lang$type = !0;
cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";
cljs.core.Eduction.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Eduction");
};
cljs.core.__GT_Eduction = function(a, b) {
  return new cljs.core.Eduction(a, b);
};
var G__15907_15910 = cljs.core.Eduction.prototype, G__15908_15911 = cljs.core.ITER_SYMBOL, G__15909_15912 = function(a, b) {
  return function() {
    return cljs.core.es6_iterator(this);
  };
}(G__15907_15910, G__15908_15911);
goog.object.set(G__15907_15910, G__15908_15911, G__15909_15912);
cljs.core.eduction = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 0 < b.length ? new cljs.core.IndexedSeq(b.slice(0), 0, null) : null;
  return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(b);
};
cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic = function(a) {
  return new cljs.core.Eduction(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp, cljs.core.butlast(a)), cljs.core.last(a));
};
cljs.core.eduction.cljs$lang$maxFixedArity = 0;
cljs.core.eduction.cljs$lang$applyTo = function(a) {
  return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(a));
};
cljs.core.run_BANG_ = function(a, b) {
  cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(b, d) {
    return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
  }, null, b);
  return null;
};
cljs.core.IEncodeJS = function() {
};
cljs.core._clj__GT_js = function(a) {
  if (null != a && null != a.cljs$core$IEncodeJS$_clj__GT_js$arity$1) {
    return a.cljs$core$IEncodeJS$_clj__GT_js$arity$1(a);
  }
  var b = cljs.core._clj__GT_js[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._clj__GT_js._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IEncodeJS.-clj-\x3ejs", a);
};
cljs.core._key__GT_js = function(a) {
  if (null != a && null != a.cljs$core$IEncodeJS$_key__GT_js$arity$1) {
    return a.cljs$core$IEncodeJS$_key__GT_js$arity$1(a);
  }
  var b = cljs.core._key__GT_js[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._key__GT_js._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IEncodeJS.-key-\x3ejs", a);
};
cljs.core.key__GT_js = function(a) {
  return (null != a ? cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IEncodeJS$ || (a.cljs$lang$protocol_mask$partition$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS, a)) : cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS, a)) ? cljs.core._clj__GT_js(a) : "string" === typeof a || "number" === typeof a || a instanceof cljs.core.Keyword || a instanceof cljs.core.Symbol ? cljs.core.clj__GT_js(a) : cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 
  0));
};
cljs.core.clj__GT_js = function(a) {
  if (null == a) {
    return null;
  }
  if (null != a ? cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IEncodeJS$ || (a.cljs$lang$protocol_mask$partition$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS, a)) : cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS, a)) {
    return cljs.core._clj__GT_js(a);
  }
  if (a instanceof cljs.core.Keyword) {
    return cljs.core.name(a);
  }
  if (a instanceof cljs.core.Symbol) {
    return "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
  }
  if (cljs.core.map_QMARK_(a)) {
    var b = {};
    a = cljs.core.seq(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.cljs$core$IIndexed$_nth$arity$2(null, e), g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 0, null), h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 1, null);
        f = b;
        g = cljs.core.key__GT_js(g);
        h = cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(h) : cljs.core.clj__GT_js.call(null, h);
        goog.object.set(f, g, h);
        e += 1;
      } else {
        if (a = cljs.core.seq(a)) {
          cljs.core.chunked_seq_QMARK_(a) ? (d = cljs.core.chunk_first(a), a = cljs.core.chunk_rest(a), c = d, d = cljs.core.count(d)) : (c = cljs.core.first(a), d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c, 0, null), e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c, 1, null), c = b, d = cljs.core.key__GT_js(d), e = cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.clj__GT_js.call(null, e), goog.object.set(c, d, e), a = cljs.core.next(a), 
          c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (cljs.core.coll_QMARK_(a)) {
    b = [];
    a = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js, a));
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        f = c.cljs$core$IIndexed$_nth$arity$2(null, e), b.push(f), e += 1;
      } else {
        if (a = cljs.core.seq(a)) {
          c = a, cljs.core.chunked_seq_QMARK_(c) ? (a = cljs.core.chunk_first(c), e = cljs.core.chunk_rest(c), c = a, d = cljs.core.count(a), a = e) : (a = cljs.core.first(c), b.push(a), a = cljs.core.next(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return a;
};
cljs.core.IEncodeClojure = function() {
};
cljs.core._js__GT_clj = function(a, b) {
  if (null != a && null != a.cljs$core$IEncodeClojure$_js__GT_clj$arity$2) {
    return a.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(a, b);
  }
  var c = cljs.core._js__GT_clj[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._js__GT_clj._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IEncodeClojure.-js-\x3eclj", a);
};
cljs.core.js__GT_clj = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(1), 0, null);
      return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
  }
};
cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(a, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null, "keywordize-keys", "keywordize-keys", 1310784252), !1], 0));
};
cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  var c = null != b && (b.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$ISeq$) ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map, b) : b, d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c, new cljs.core.Keyword(null, "keywordize-keys", "keywordize-keys", 1310784252)), e = cljs.core.truth_(d) ? cljs.core.keyword : cljs.core.str;
  return function(a, c, d, e) {
    return function m(f) {
      return (null != f ? cljs.core.PROTOCOL_SENTINEL === f.cljs$core$IEncodeClojure$ || (f.cljs$lang$protocol_mask$partition$ ? 0 : cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure, f)) : cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure, f)) ? cljs.core._js__GT_clj(f, cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map, b)) : cljs.core.seq_QMARK_(f) ? cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(m, f)) : cljs.core.coll_QMARK_(f) ? 
      cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(f), cljs.core.map.cljs$core$IFn$_invoke$arity$2(m, f)) : cljs.core.array_QMARK_(f) ? cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(m, f)) : cljs.core.type(f) === Object ? cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY, function() {
        return function(a, b, c, d) {
          return function v(e) {
            return new cljs.core.LazySeq(null, function(a, b, c, d) {
              return function() {
                for (;;) {
                  var a = cljs.core.seq(e);
                  if (a) {
                    if (cljs.core.chunked_seq_QMARK_(a)) {
                      var b = cljs.core.chunk_first(a), c = cljs.core.count(b), g = cljs.core.chunk_buffer(c);
                      a: {
                        for (var h = 0;;) {
                          if (h < c) {
                            var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(b, h);
                            cljs.core.chunk_append(g, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(k) : d.call(null, k), m(f[k])], null));
                            h += 1;
                          } else {
                            b = !0;
                            break a;
                          }
                        }
                      }
                      return b ? cljs.core.chunk_cons(cljs.core.chunk(g), v(cljs.core.chunk_rest(a))) : cljs.core.chunk_cons(cljs.core.chunk(g), null);
                    }
                    g = cljs.core.first(a);
                    return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(g) : d.call(null, g), m(f[g])], null), v(cljs.core.rest(a)));
                  }
                  return null;
                }
              };
            }(a, b, c, d), null, null);
          };
        }(a, c, d, e)(cljs.core.js_keys(f));
      }()) : f;
    };
  }(b, c, d, e)(a);
};
cljs.core.js__GT_clj.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.js__GT_clj.cljs$lang$maxFixedArity = 1;
cljs.core.memoize = function(a) {
  return function(b) {
    return function() {
      var c = function(c) {
        var d = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(b), c, cljs.core.lookup_sentinel);
        d === cljs.core.lookup_sentinel && (d = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a, c), cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(b, cljs.core.assoc, c, d));
        return d;
      }, d = function(a) {
        var b = null;
        if (0 < arguments.length) {
          b = 0;
          for (var d = Array(arguments.length - 0); b < d.length;) {
            d[b] = arguments[b + 0], ++b;
          }
          b = new cljs.core.IndexedSeq(d, 0, null);
        }
        return c.call(this, b);
      };
      d.cljs$lang$maxFixedArity = 0;
      d.cljs$lang$applyTo = function(a) {
        a = cljs.core.seq(a);
        return c(a);
      };
      d.cljs$core$IFn$_invoke$arity$variadic = c;
      return d;
    }();
  }(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
};
cljs.core.trampoline = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var b = [], c = arguments.length, d = 0;;) {
        if (d < c) {
          b.push(arguments[d]), d += 1;
        } else {
          break;
        }
      }
      b = new cljs.core.IndexedSeq(b.slice(1), 0, null);
      return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
  }
};
cljs.core.trampoline.cljs$core$IFn$_invoke$arity$1 = function(a) {
  for (;;) {
    if (a = a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null), !cljs.core.fn_QMARK_(a)) {
      return a;
    }
  }
};
cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$1(function() {
    return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a, b);
  });
};
cljs.core.trampoline.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.trampoline.cljs$lang$maxFixedArity = 1;
cljs.core.rand = function(a) {
  switch(arguments.length) {
    case 0:
      return cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.rand.cljs$core$IFn$_invoke$arity$0 = function() {
  return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(1);
};
cljs.core.rand.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return Math.random() * a;
};
cljs.core.rand.cljs$lang$maxFixedArity = 1;
cljs.core.rand_int = function(a) {
  return Math.floor(Math.random() * a);
};
cljs.core.rand_nth = function(a) {
  return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a, cljs.core.rand_int(cljs.core.count(a)));
};
cljs.core.group_by = function(a, b) {
  return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(b, d) {
    var c = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(d) : a.call(null, d);
    return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(b, c, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(b, c, cljs.core.PersistentVector.EMPTY), d));
  }, cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY), b));
};
cljs.core.make_hierarchy = function() {
  return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "parents", "parents", -2027538891), cljs.core.PersistentArrayMap.EMPTY, new cljs.core.Keyword(null, "descendants", "descendants", 1824886031), cljs.core.PersistentArrayMap.EMPTY, new cljs.core.Keyword(null, "ancestors", "ancestors", -776045424), cljs.core.PersistentArrayMap.EMPTY], null);
};
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = function() {
  null == cljs.core._global_hierarchy && (cljs.core._global_hierarchy = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.make_hierarchy()));
  return cljs.core._global_hierarchy;
};
cljs.core.swap_global_hierarchy_BANG_ = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_, cljs.core.get_global_hierarchy(), a, b);
};
cljs.core.swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
cljs.core.swap_global_hierarchy_BANG_.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first(a);
  a = cljs.core.next(a);
  return cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.core.isa_QMARK_ = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.core.get_global_hierarchy()), a, b);
};
cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b, c);
  if (!d && !(d = cljs.core.contains_QMARK_(function() {
    var c = (new cljs.core.Keyword(null, "ancestors", "ancestors", -776045424)).cljs$core$IFn$_invoke$arity$1(a);
    return c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(b) : c.call(null, b);
  }(), c)) && (d = cljs.core.vector_QMARK_(c)) && (d = cljs.core.vector_QMARK_(b))) {
    if (d = cljs.core.count(c) === cljs.core.count(b)) {
      d = !0;
      for (var e = 0;;) {
        if (d && e !== cljs.core.count(c)) {
          d = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(a, b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(e) : b.call(null, e), c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(e) : c.call(null, e)), e += 1;
        } else {
          return d;
        }
      }
    } else {
      return d;
    }
  } else {
    return d;
  }
};
cljs.core.isa_QMARK_.cljs$lang$maxFixedArity = 3;
cljs.core.parents = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.parents.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.parents.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get_global_hierarchy()), a);
};
cljs.core.parents.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null, "parents", "parents", -2027538891)).cljs$core$IFn$_invoke$arity$1(a), b));
};
cljs.core.parents.cljs$lang$maxFixedArity = 2;
cljs.core.ancestors = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.ancestors.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get_global_hierarchy()), a);
};
cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null, "ancestors", "ancestors", -776045424)).cljs$core$IFn$_invoke$arity$1(a), b));
};
cljs.core.ancestors.cljs$lang$maxFixedArity = 2;
cljs.core.descendants = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.descendants.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.descendants.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get_global_hierarchy()), a);
};
cljs.core.descendants.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null, "descendants", "descendants", 1824886031)).cljs$core$IFn$_invoke$arity$1(a), b));
};
cljs.core.descendants.cljs$lang$maxFixedArity = 2;
cljs.core.derive = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.derive.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.derive.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  if (!cljs.core.truth_(cljs.core.namespace(b))) {
    throw Error("Assert failed: (namespace parent)");
  }
  cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.derive, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a, b], 0));
  return null;
};
cljs.core.derive.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  if (!cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b, c)) {
    throw Error("Assert failed: (not\x3d tag parent)");
  }
  var d = (new cljs.core.Keyword(null, "parents", "parents", -2027538891)).cljs$core$IFn$_invoke$arity$1(a), e = (new cljs.core.Keyword(null, "descendants", "descendants", 1824886031)).cljs$core$IFn$_invoke$arity$1(a), f = (new cljs.core.Keyword(null, "ancestors", "ancestors", -776045424)).cljs$core$IFn$_invoke$arity$1(a), g = function(a, b, c) {
    return function(d, e, f, g, h) {
      return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a, b, c) {
        return function(a, b) {
          return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj, cljs.core.get.cljs$core$IFn$_invoke$arity$3(h, b, cljs.core.PersistentHashSet.EMPTY), cljs.core.cons(g, h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(g) : h.call(null, g))));
        };
      }(a, b, c), d, cljs.core.cons(e, f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null, e)));
    };
  }(d, e, f);
  if (cljs.core.contains_QMARK_(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(b) : d.call(null, b), c)) {
    b = null;
  } else {
    if (cljs.core.contains_QMARK_(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null, b), c)) {
      throw Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), "already has", cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), "as ancestor"].join(""));
    }
    if (cljs.core.contains_QMARK_(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null, c), b)) {
      throw Error(["Cyclic derivation:", cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), "has", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), "as ancestor"].join(""));
    }
    b = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "parents", "parents", -2027538891), cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cljs.core.Keyword(null, "parents", "parents", -2027538891)).cljs$core$IFn$_invoke$arity$1(a), b, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(d, b, cljs.core.PersistentHashSet.EMPTY), c)), new cljs.core.Keyword(null, "ancestors", "ancestors", -776045424), g((new cljs.core.Keyword(null, "ancestors", 
    "ancestors", -776045424)).cljs$core$IFn$_invoke$arity$1(a), b, e, c, f), new cljs.core.Keyword(null, "descendants", "descendants", 1824886031), g((new cljs.core.Keyword(null, "descendants", "descendants", 1824886031)).cljs$core$IFn$_invoke$arity$1(a), c, f, b, e)], null);
  }
  return cljs.core.truth_(b) ? b : a;
};
cljs.core.derive.cljs$lang$maxFixedArity = 3;
cljs.core.underive = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.underive.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.underive.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.underive.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.underive, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a, b], 0));
  return null;
};
cljs.core.underive.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = (new cljs.core.Keyword(null, "parents", "parents", -2027538891)).cljs$core$IFn$_invoke$arity$1(a), e = cljs.core.truth_(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(b) : d.call(null, b)) ? cljs.core.disj.cljs$core$IFn$_invoke$arity$2(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(b) : d.call(null, b), c) : cljs.core.PersistentHashSet.EMPTY, f = cljs.core.truth_(cljs.core.not_empty(e)) ? cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d, b, e) : cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(d, 
  b), g = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(function(a, b, c) {
    return function(a) {
      return cljs.core.cons(cljs.core.first(a), cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a), cljs.core.second(a)));
    };
  }(d, e, f), cljs.core.seq(f)));
  return cljs.core.contains_QMARK_(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(b) : d.call(null, b), c) ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a, b, c, d) {
    return function(a, b) {
      return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive, a, b);
    };
  }(d, e, f, g), cljs.core.make_hierarchy(), cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, g)) : a;
};
cljs.core.underive.cljs$lang$maxFixedArity = 3;
cljs.core.reset_cache = function(a, b, c, d) {
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a, function(a) {
    return cljs.core.deref(b);
  });
  return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c, function(a) {
    return cljs.core.deref(d);
  });
};
cljs.core.prefers_STAR_ = function(a, b, c) {
  var d = function() {
    var b = cljs.core.deref(c);
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }();
  d = cljs.core.truth_(cljs.core.truth_(d) ? d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(b) : d.call(null, b) : d) ? !0 : null;
  if (cljs.core.truth_(d)) {
    return d;
  }
  d = function() {
    for (var d = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(b);;) {
      if (0 < cljs.core.count(d)) {
        cljs.core.truth_(function() {
          var b = cljs.core.first(d);
          return cljs.core.prefers_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.prefers_STAR_.cljs$core$IFn$_invoke$arity$3(a, b, c) : cljs.core.prefers_STAR_.call(null, a, b, c);
        }()), d = cljs.core.rest(d);
      } else {
        return null;
      }
    }
  }();
  if (cljs.core.truth_(d)) {
    return d;
  }
  d = function() {
    for (var d = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(a);;) {
      if (0 < cljs.core.count(d)) {
        cljs.core.truth_(function() {
          var a = cljs.core.first(d);
          return cljs.core.prefers_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.prefers_STAR_.cljs$core$IFn$_invoke$arity$3(a, b, c) : cljs.core.prefers_STAR_.call(null, a, b, c);
        }()), d = cljs.core.rest(d);
      } else {
        return null;
      }
    }
  }();
  return cljs.core.truth_(d) ? d : !1;
};
cljs.core.dominates = function(a, b, c, d) {
  c = cljs.core.prefers_STAR_(a, b, c);
  return cljs.core.truth_(c) ? c : cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(d, a, b);
};
cljs.core.find_and_cache_best_method = function(a, b, c, d, e, f, g, h) {
  var k = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(d, f) {
    var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 0, null);
    cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f, 1, null);
    if (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(c), b, g)) {
      var h = cljs.core.truth_(function() {
        var a = null == d;
        return a ? a : cljs.core.dominates(g, cljs.core.first(d), e, cljs.core.deref(c));
      }()) ? f : d;
      if (!cljs.core.truth_(cljs.core.dominates(cljs.core.first(h), g, e, cljs.core.deref(c)))) {
        throw Error(["Multiple methods in multimethod '", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "' match dispatch value: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), " -\x3e ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(g), " and ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(h)), ", and neither is preferred"].join(""));
      }
      return h;
    }
    return d;
  }, null, cljs.core.deref(d)), l = function() {
    var a;
    if (a = null == k) {
      a = cljs.core.deref(d), a = a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(h) : a.call(null, h);
    }
    return cljs.core.truth_(a) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h, a], null) : k;
  }();
  if (cljs.core.truth_(l)) {
    if (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g), cljs.core.deref(c))) {
      return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(f, cljs.core.assoc, b, cljs.core.second(l)), cljs.core.second(l);
    }
    cljs.core.reset_cache(f, d, g, c);
    return cljs.core.find_and_cache_best_method.cljs$core$IFn$_invoke$arity$8 ? cljs.core.find_and_cache_best_method.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h) : cljs.core.find_and_cache_best_method.call(null, a, b, c, d, e, f, g, h);
  }
  return null;
};
cljs.core.IMultiFn = function() {
};
cljs.core._reset = function(a) {
  if (null != a && null != a.cljs$core$IMultiFn$_reset$arity$1) {
    return a.cljs$core$IMultiFn$_reset$arity$1(a);
  }
  var b = cljs.core._reset[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._reset._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMultiFn.-reset", a);
};
cljs.core._add_method = function(a, b, c) {
  if (null != a && null != a.cljs$core$IMultiFn$_add_method$arity$3) {
    return a.cljs$core$IMultiFn$_add_method$arity$3(a, b, c);
  }
  var d = cljs.core._add_method[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._add_method._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IMultiFn.-add-method", a);
};
cljs.core._remove_method = function(a, b) {
  if (null != a && null != a.cljs$core$IMultiFn$_remove_method$arity$2) {
    return a.cljs$core$IMultiFn$_remove_method$arity$2(a, b);
  }
  var c = cljs.core._remove_method[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._remove_method._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IMultiFn.-remove-method", a);
};
cljs.core._prefer_method = function(a, b, c) {
  if (null != a && null != a.cljs$core$IMultiFn$_prefer_method$arity$3) {
    return a.cljs$core$IMultiFn$_prefer_method$arity$3(a, b, c);
  }
  var d = cljs.core._prefer_method[goog.typeOf(null == a ? null : a)];
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  d = cljs.core._prefer_method._;
  if (null != d) {
    return d.cljs$core$IFn$_invoke$arity$3 ? d.cljs$core$IFn$_invoke$arity$3(a, b, c) : d.call(null, a, b, c);
  }
  throw cljs.core.missing_protocol("IMultiFn.-prefer-method", a);
};
cljs.core._get_method = function(a, b) {
  if (null != a && null != a.cljs$core$IMultiFn$_get_method$arity$2) {
    return a.cljs$core$IMultiFn$_get_method$arity$2(a, b);
  }
  var c = cljs.core._get_method[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  c = cljs.core._get_method._;
  if (null != c) {
    return c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(a, b) : c.call(null, a, b);
  }
  throw cljs.core.missing_protocol("IMultiFn.-get-method", a);
};
cljs.core._methods = function(a) {
  if (null != a && null != a.cljs$core$IMultiFn$_methods$arity$1) {
    return a.cljs$core$IMultiFn$_methods$arity$1(a);
  }
  var b = cljs.core._methods[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._methods._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMultiFn.-methods", a);
};
cljs.core._prefers = function(a) {
  if (null != a && null != a.cljs$core$IMultiFn$_prefers$arity$1) {
    return a.cljs$core$IMultiFn$_prefers$arity$1(a);
  }
  var b = cljs.core._prefers[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._prefers._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMultiFn.-prefers", a);
};
cljs.core._default_dispatch_val = function(a) {
  if (null != a && null != a.cljs$core$IMultiFn$_default_dispatch_val$arity$1) {
    return a.cljs$core$IMultiFn$_default_dispatch_val$arity$1(a);
  }
  var b = cljs.core._default_dispatch_val[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._default_dispatch_val._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMultiFn.-default-dispatch-val", a);
};
cljs.core._dispatch_fn = function(a) {
  if (null != a && null != a.cljs$core$IMultiFn$_dispatch_fn$arity$1) {
    return a.cljs$core$IMultiFn$_dispatch_fn$arity$1(a);
  }
  var b = cljs.core._dispatch_fn[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  b = cljs.core._dispatch_fn._;
  if (null != b) {
    return b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(a) : b.call(null, a);
  }
  throw cljs.core.missing_protocol("IMultiFn.-dispatch-fn", a);
};
cljs.core.throw_no_method_error = function(a, b) {
  throw Error(["No method in multimethod '", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "' for dispatch value: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.core.MultiFn = function(a, b, c, d, e, f, g, h) {
  this.name = a;
  this.dispatch_fn = b;
  this.default_dispatch_val = c;
  this.hierarchy = d;
  this.method_table = e;
  this.prefer_table = f;
  this.method_cache = g;
  this.cached_hierarchy = h;
  this.cljs$lang$protocol_mask$partition0$ = 4194305;
  this.cljs$lang$protocol_mask$partition1$ = 4352;
};
cljs.core.MultiFn.prototype.call = function() {
  var a = null, b = function(a) {
    a = this;
    var b = a.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : a.dispatch_fn.call(null), c = this.cljs$core$IMultiFn$_get_method$arity$2(null, b);
    cljs.core.truth_(c) || cljs.core.throw_no_method_error(a.name, b);
    return c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null);
  }, c = function(a, b) {
    a = this;
    var c = a.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$1(b) : a.dispatch_fn.call(null, b), d = this.cljs$core$IMultiFn$_get_method$arity$2(null, c);
    cljs.core.truth_(d) || cljs.core.throw_no_method_error(a.name, c);
    return d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(b) : d.call(null, b);
  }, d = function(a, b, c) {
    a = this;
    var d = a.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$2(b, c) : a.dispatch_fn.call(null, b, c), e = this.cljs$core$IMultiFn$_get_method$arity$2(null, d);
    cljs.core.truth_(e) || cljs.core.throw_no_method_error(a.name, d);
    return e.cljs$core$IFn$_invoke$arity$2 ? e.cljs$core$IFn$_invoke$arity$2(b, c) : e.call(null, b, c);
  }, e = function(a, b, c, d) {
    a = this;
    var e = a.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$3(b, c, d) : a.dispatch_fn.call(null, b, c, d), f = this.cljs$core$IMultiFn$_get_method$arity$2(null, e);
    cljs.core.truth_(f) || cljs.core.throw_no_method_error(a.name, e);
    return f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(b, c, d) : f.call(null, b, c, d);
  }, f = function(a, b, c, d, e) {
    a = this;
    var f = a.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : a.dispatch_fn.call(null, b, c, d, e), g = this.cljs$core$IMultiFn$_get_method$arity$2(null, f);
    cljs.core.truth_(g) || cljs.core.throw_no_method_error(a.name, f);
    return g.cljs$core$IFn$_invoke$arity$4 ? g.cljs$core$IFn$_invoke$arity$4(b, c, d, e) : g.call(null, b, c, d, e);
  }, g = function(a, b, c, d, e, f) {
    a = this;
    var g = a.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f) : a.dispatch_fn.call(null, b, c, d, e, f), h = this.cljs$core$IMultiFn$_get_method$arity$2(null, g);
    cljs.core.truth_(h) || cljs.core.throw_no_method_error(a.name, g);
    return h.cljs$core$IFn$_invoke$arity$5 ? h.cljs$core$IFn$_invoke$arity$5(b, c, d, e, f) : h.call(null, b, c, d, e, f);
  }, h = function(a, b, c, d, e, f, g) {
    a = this;
    var h = a.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$6(b, c, d, e, f, g) : a.dispatch_fn.call(null, b, c, d, e, f, g), k = this.cljs$core$IMultiFn$_get_method$arity$2(null, h);
    cljs.core.truth_(k) || cljs.core.throw_no_method_error(a.name, h);
    return k.cljs$core$IFn$_invoke$arity$6 ? k.cljs$core$IFn$_invoke$arity$6(b, c, d, e, f, g) : k.call(null, b, c, d, e, f, g);
  }, k = function(a, b, c, d, e, f, g, h) {
    a = this;
    var k = a.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$7(b, c, d, e, f, g, h) : a.dispatch_fn.call(null, b, c, d, e, f, g, h), l = this.cljs$core$IMultiFn$_get_method$arity$2(null, k);
    cljs.core.truth_(l) || cljs.core.throw_no_method_error(a.name, k);
    return l.cljs$core$IFn$_invoke$arity$7 ? l.cljs$core$IFn$_invoke$arity$7(b, c, d, e, f, g, h) : l.call(null, b, c, d, e, f, g, h);
  }, l = function(a, b, c, d, e, f, g, h, k) {
    a = this;
    var l = a.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$8(b, c, d, e, f, g, h, k) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k), m = this.cljs$core$IMultiFn$_get_method$arity$2(null, l);
    cljs.core.truth_(m) || cljs.core.throw_no_method_error(a.name, l);
    return m.cljs$core$IFn$_invoke$arity$8 ? m.cljs$core$IFn$_invoke$arity$8(b, c, d, e, f, g, h, k) : m.call(null, b, c, d, e, f, g, h, k);
  }, m = function(a, b, c, d, e, f, g, h, k, l) {
    a = this;
    var m = a.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$9(b, c, d, e, f, g, h, k, l) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l), n = this.cljs$core$IMultiFn$_get_method$arity$2(null, m);
    cljs.core.truth_(n) || cljs.core.throw_no_method_error(a.name, m);
    return n.cljs$core$IFn$_invoke$arity$9 ? n.cljs$core$IFn$_invoke$arity$9(b, c, d, e, f, g, h, k, l) : n.call(null, b, c, d, e, f, g, h, k, l);
  }, n = function(a, b, c, d, e, f, g, h, k, l, m) {
    a = this;
    var n = a.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$10(b, c, d, e, f, g, h, k, l, m) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m), p = this.cljs$core$IMultiFn$_get_method$arity$2(null, n);
    cljs.core.truth_(p) || cljs.core.throw_no_method_error(a.name, n);
    return p.cljs$core$IFn$_invoke$arity$10 ? p.cljs$core$IFn$_invoke$arity$10(b, c, d, e, f, g, h, k, l, m) : p.call(null, b, c, d, e, f, g, h, k, l, m);
  }, p = function(a, b, c, d, e, f, g, h, k, l, m, n) {
    a = this;
    var p = a.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$11(b, c, d, e, f, g, h, k, l, m, n) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n), q = this.cljs$core$IMultiFn$_get_method$arity$2(null, p);
    cljs.core.truth_(q) || cljs.core.throw_no_method_error(a.name, p);
    return q.cljs$core$IFn$_invoke$arity$11 ? q.cljs$core$IFn$_invoke$arity$11(b, c, d, e, f, g, h, k, l, m, n) : q.call(null, b, c, d, e, f, g, h, k, l, m, n);
  }, q = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
    a = this;
    var q = a.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$12(b, c, d, e, f, g, h, k, l, m, n, p) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p), r = this.cljs$core$IMultiFn$_get_method$arity$2(null, q);
    cljs.core.truth_(r) || cljs.core.throw_no_method_error(a.name, q);
    return r.cljs$core$IFn$_invoke$arity$12 ? r.cljs$core$IFn$_invoke$arity$12(b, c, d, e, f, g, h, k, l, m, n, p) : r.call(null, b, c, d, e, f, g, h, k, l, m, n, p);
  }, r = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
    a = this;
    var r = a.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$13(b, c, d, e, f, g, h, k, l, m, n, p, q) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q), t = this.cljs$core$IMultiFn$_get_method$arity$2(null, r);
    cljs.core.truth_(t) || cljs.core.throw_no_method_error(a.name, r);
    return t.cljs$core$IFn$_invoke$arity$13 ? t.cljs$core$IFn$_invoke$arity$13(b, c, d, e, f, g, h, k, l, m, n, p, q) : t.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q);
  }, t = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
    a = this;
    var t = a.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$14(b, c, d, e, f, g, h, k, l, m, n, p, q, r) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r), u = this.cljs$core$IMultiFn$_get_method$arity$2(null, t);
    cljs.core.truth_(u) || cljs.core.throw_no_method_error(a.name, t);
    return u.cljs$core$IFn$_invoke$arity$14 ? u.cljs$core$IFn$_invoke$arity$14(b, c, d, e, f, g, h, k, l, m, n, p, q, r) : u.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
  }, u = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) {
    a = this;
    var u = a.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$15(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t), v = this.cljs$core$IMultiFn$_get_method$arity$2(null, u);
    cljs.core.truth_(v) || cljs.core.throw_no_method_error(a.name, u);
    return v.cljs$core$IFn$_invoke$arity$15 ? v.cljs$core$IFn$_invoke$arity$15(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : v.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
  }, v = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) {
    a = this;
    var v = a.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$16(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u), w = this.cljs$core$IMultiFn$_get_method$arity$2(null, v);
    cljs.core.truth_(w) || cljs.core.throw_no_method_error(a.name, v);
    return w.cljs$core$IFn$_invoke$arity$16 ? w.cljs$core$IFn$_invoke$arity$16(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : w.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
  }, w = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) {
    a = this;
    var w = a.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$17(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v), x = this.cljs$core$IMultiFn$_get_method$arity$2(null, w);
    cljs.core.truth_(x) || cljs.core.throw_no_method_error(a.name, w);
    return x.cljs$core$IFn$_invoke$arity$17 ? x.cljs$core$IFn$_invoke$arity$17(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : x.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
  }, x = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) {
    a = this;
    var x = a.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$18(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w), z = this.cljs$core$IMultiFn$_get_method$arity$2(null, x);
    cljs.core.truth_(z) || cljs.core.throw_no_method_error(a.name, x);
    return z.cljs$core$IFn$_invoke$arity$18 ? z.cljs$core$IFn$_invoke$arity$18(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : z.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
  }, y = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) {
    a = this;
    var z = a.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$19(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x), y = this.cljs$core$IMultiFn$_get_method$arity$2(null, z);
    cljs.core.truth_(y) || cljs.core.throw_no_method_error(a.name, z);
    return y.cljs$core$IFn$_invoke$arity$19 ? y.cljs$core$IFn$_invoke$arity$19(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : y.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
  }, E = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) {
    a = this;
    var z = a.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? a.dispatch_fn.cljs$core$IFn$_invoke$arity$20(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : a.dispatch_fn.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y), A = this.cljs$core$IMultiFn$_get_method$arity$2(null, z);
    cljs.core.truth_(A) || cljs.core.throw_no_method_error(a.name, z);
    return A.cljs$core$IFn$_invoke$arity$20 ? A.cljs$core$IFn$_invoke$arity$20(b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) : A.call(null, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y);
  }, O = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E) {
    a = this;
    var z = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(a.dispatch_fn, b, c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E], 0)), A = this.cljs$core$IMultiFn$_get_method$arity$2(null, z);
    cljs.core.truth_(A) || cljs.core.throw_no_method_error(a.name, z);
    return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(A, b, c, d, e, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y, E], 0));
  };
  a = function(a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U, V) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, z);
      case 3:
        return d.call(this, a, z, A);
      case 4:
        return e.call(this, a, z, A, B);
      case 5:
        return f.call(this, a, z, A, B, C);
      case 6:
        return g.call(this, a, z, A, B, C, D);
      case 7:
        return h.call(this, a, z, A, B, C, D, F);
      case 8:
        return k.call(this, a, z, A, B, C, D, F, G);
      case 9:
        return l.call(this, a, z, A, B, C, D, F, G, H);
      case 10:
        return m.call(this, a, z, A, B, C, D, F, G, H, I);
      case 11:
        return n.call(this, a, z, A, B, C, D, F, G, H, I, J);
      case 12:
        return p.call(this, a, z, A, B, C, D, F, G, H, I, J, K);
      case 13:
        return q.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L);
      case 14:
        return r.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M);
      case 15:
        return t.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N);
      case 16:
        return u.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P);
      case 17:
        return v.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q);
      case 18:
        return w.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R);
      case 19:
        return x.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S);
      case 20:
        return y.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T);
      case 21:
        return E.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U);
      case 22:
        return O.call(this, a, z, A, B, C, D, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U, V);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  a.cljs$core$IFn$_invoke$arity$1 = b;
  a.cljs$core$IFn$_invoke$arity$2 = c;
  a.cljs$core$IFn$_invoke$arity$3 = d;
  a.cljs$core$IFn$_invoke$arity$4 = e;
  a.cljs$core$IFn$_invoke$arity$5 = f;
  a.cljs$core$IFn$_invoke$arity$6 = g;
  a.cljs$core$IFn$_invoke$arity$7 = h;
  a.cljs$core$IFn$_invoke$arity$8 = k;
  a.cljs$core$IFn$_invoke$arity$9 = l;
  a.cljs$core$IFn$_invoke$arity$10 = m;
  a.cljs$core$IFn$_invoke$arity$11 = n;
  a.cljs$core$IFn$_invoke$arity$12 = p;
  a.cljs$core$IFn$_invoke$arity$13 = q;
  a.cljs$core$IFn$_invoke$arity$14 = r;
  a.cljs$core$IFn$_invoke$arity$15 = t;
  a.cljs$core$IFn$_invoke$arity$16 = u;
  a.cljs$core$IFn$_invoke$arity$17 = v;
  a.cljs$core$IFn$_invoke$arity$18 = w;
  a.cljs$core$IFn$_invoke$arity$19 = x;
  a.cljs$core$IFn$_invoke$arity$20 = y;
  a.cljs$core$IFn$_invoke$arity$21 = E;
  a.cljs$core$IFn$_invoke$arity$22 = O;
  return a;
}();
cljs.core.MultiFn.prototype.apply = function(a, b) {
  return this.call.apply(this, [this].concat(cljs.core.aclone(b)));
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = function() {
  var a = this.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : this.dispatch_fn.call(null), b = this.cljs$core$IMultiFn$_get_method$arity$2(null, a);
  cljs.core.truth_(b) || cljs.core.throw_no_method_error(this.name, a);
  return b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = function(a) {
  var b = this.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$1(a) : this.dispatch_fn.call(null, a), c = this.cljs$core$IMultiFn$_get_method$arity$2(null, b);
  cljs.core.truth_(c) || cljs.core.throw_no_method_error(this.name, b);
  return c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(a) : c.call(null, a);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = this.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$2(a, b) : this.dispatch_fn.call(null, a, b), d = this.cljs$core$IMultiFn$_get_method$arity$2(null, c);
  cljs.core.truth_(d) || cljs.core.throw_no_method_error(this.name, c);
  return d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(a, b) : d.call(null, a, b);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  var d = this.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$3(a, b, c) : this.dispatch_fn.call(null, a, b, c), e = this.cljs$core$IMultiFn$_get_method$arity$2(null, d);
  cljs.core.truth_(e) || cljs.core.throw_no_method_error(this.name, d);
  return e.cljs$core$IFn$_invoke$arity$3 ? e.cljs$core$IFn$_invoke$arity$3(a, b, c) : e.call(null, a, b, c);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  var e = this.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : this.dispatch_fn.call(null, a, b, c, d), f = this.cljs$core$IMultiFn$_get_method$arity$2(null, e);
  cljs.core.truth_(f) || cljs.core.throw_no_method_error(this.name, e);
  return f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(a, b, c, d) : f.call(null, a, b, c, d);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  var f = this.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : this.dispatch_fn.call(null, a, b, c, d, e), g = this.cljs$core$IMultiFn$_get_method$arity$2(null, f);
  cljs.core.truth_(g) || cljs.core.throw_no_method_error(this.name, f);
  return g.cljs$core$IFn$_invoke$arity$5 ? g.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  var g = this.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f) : this.dispatch_fn.call(null, a, b, c, d, e, f), h = this.cljs$core$IMultiFn$_get_method$arity$2(null, g);
  cljs.core.truth_(h) || cljs.core.throw_no_method_error(this.name, g);
  return h.cljs$core$IFn$_invoke$arity$6 ? h.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f) : h.call(null, a, b, c, d, e, f);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = function(a, b, c, d, e, f, g) {
  var h = this.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g) : this.dispatch_fn.call(null, a, b, c, d, e, f, g), k = this.cljs$core$IMultiFn$_get_method$arity$2(null, h);
  cljs.core.truth_(k) || cljs.core.throw_no_method_error(this.name, h);
  return k.cljs$core$IFn$_invoke$arity$7 ? k.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g) : k.call(null, a, b, c, d, e, f, g);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = function(a, b, c, d, e, f, g, h) {
  var k = this.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h), l = this.cljs$core$IMultiFn$_get_method$arity$2(null, k);
  cljs.core.truth_(l) || cljs.core.throw_no_method_error(this.name, k);
  return l.cljs$core$IFn$_invoke$arity$8 ? l.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h) : l.call(null, a, b, c, d, e, f, g, h);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = function(a, b, c, d, e, f, g, h, k) {
  var l = this.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, k) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k), m = this.cljs$core$IMultiFn$_get_method$arity$2(null, l);
  cljs.core.truth_(m) || cljs.core.throw_no_method_error(this.name, l);
  return m.cljs$core$IFn$_invoke$arity$9 ? m.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, k) : m.call(null, a, b, c, d, e, f, g, h, k);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = function(a, b, c, d, e, f, g, h, k, l) {
  var m = this.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, k, l) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l), n = this.cljs$core$IMultiFn$_get_method$arity$2(null, m);
  cljs.core.truth_(n) || cljs.core.throw_no_method_error(this.name, m);
  return n.cljs$core$IFn$_invoke$arity$10 ? n.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, k, l) : n.call(null, a, b, c, d, e, f, g, h, k, l);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = function(a, b, c, d, e, f, g, h, k, l, m) {
  var n = this.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, k, l, m) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m), p = this.cljs$core$IMultiFn$_get_method$arity$2(null, n);
  cljs.core.truth_(p) || cljs.core.throw_no_method_error(this.name, n);
  return p.cljs$core$IFn$_invoke$arity$11 ? p.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, k, l, m) : p.call(null, a, b, c, d, e, f, g, h, k, l, m);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = function(a, b, c, d, e, f, g, h, k, l, m, n) {
  var p = this.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, k, l, m, n) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n), q = this.cljs$core$IMultiFn$_get_method$arity$2(null, p);
  cljs.core.truth_(q) || cljs.core.throw_no_method_error(this.name, p);
  return q.cljs$core$IFn$_invoke$arity$12 ? q.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, k, l, m, n) : q.call(null, a, b, c, d, e, f, g, h, k, l, m, n);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
  var q = this.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, k, l, m, n, p) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p), r = this.cljs$core$IMultiFn$_get_method$arity$2(null, q);
  cljs.core.truth_(r) || cljs.core.throw_no_method_error(this.name, q);
  return r.cljs$core$IFn$_invoke$arity$13 ? r.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, k, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
  var r = this.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, k, l, m, n, p, q) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q), t = this.cljs$core$IMultiFn$_get_method$arity$2(null, r);
  cljs.core.truth_(t) || cljs.core.throw_no_method_error(this.name, r);
  return t.cljs$core$IFn$_invoke$arity$14 ? t.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, k, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
  var t = this.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r), u = this.cljs$core$IMultiFn$_get_method$arity$2(null, t);
  cljs.core.truth_(u) || cljs.core.throw_no_method_error(this.name, t);
  return u.cljs$core$IFn$_invoke$arity$15 ? u.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) : u.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) {
  var u = this.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t), v = this.cljs$core$IMultiFn$_get_method$arity$2(null, u);
  cljs.core.truth_(v) || cljs.core.throw_no_method_error(this.name, u);
  return v.cljs$core$IFn$_invoke$arity$16 ? v.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t) : v.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) {
  var v = this.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u), w = this.cljs$core$IMultiFn$_get_method$arity$2(null, v);
  cljs.core.truth_(w) || cljs.core.throw_no_method_error(this.name, v);
  return w.cljs$core$IFn$_invoke$arity$17 ? w.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u) : w.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) {
  var w = this.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v), x = this.cljs$core$IMultiFn$_get_method$arity$2(null, w);
  cljs.core.truth_(x) || cljs.core.throw_no_method_error(this.name, w);
  return x.cljs$core$IFn$_invoke$arity$18 ? x.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v) : x.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) {
  var x = this.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w), y = this.cljs$core$IMultiFn$_get_method$arity$2(null, x);
  cljs.core.truth_(y) || cljs.core.throw_no_method_error(this.name, x);
  return y.cljs$core$IFn$_invoke$arity$19 ? y.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w) : y.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) {
  var y = this.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? this.dispatch_fn.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : this.dispatch_fn.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x), E = this.cljs$core$IMultiFn$_get_method$arity$2(null, y);
  cljs.core.truth_(E) || cljs.core.throw_no_method_error(this.name, y);
  return E.cljs$core$IFn$_invoke$arity$20 ? E.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x) : E.call(null, a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x);
};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y) {
  var E = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(this.dispatch_fn, a, b, c, d, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y], 0)), O = this.cljs$core$IMultiFn$_get_method$arity$2(null, E);
  cljs.core.truth_(O) || cljs.core.throw_no_method_error(this.name, E);
  return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(O, a, b, c, d, cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e, f, g, h, k, l, m, n, p, q, r, t, u, v, w, x, y], 0));
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = function(a, b, c) {
  if (cljs.core.truth_(cljs.core.prefers_STAR_(b, c, this.prefer_table))) {
    throw Error(["Preference conflict in multimethod '", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.name), "': ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), " is already preferred to ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
  }
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this.prefer_table, function(a) {
    return function(a) {
      return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(a, b, cljs.core.PersistentHashSet.EMPTY), c));
    };
  }(this));
  return cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_default_dispatch_val$arity$1 = function(a) {
  return this.default_dispatch_val;
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = function(a, b) {
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(this.method_table, cljs.core.dissoc, b);
  cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return this;
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = function(a) {
  return cljs.core.deref(this.method_table);
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = function(a) {
  return cljs.core.deref(this.prefer_table);
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch_fn$arity$1 = function(a) {
  return this.dispatch_fn;
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = function(a, b, c) {
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this.method_table, cljs.core.assoc, b, c);
  cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return this;
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = function(a) {
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this.method_table, function(a) {
    return function(a) {
      return cljs.core.PersistentArrayMap.EMPTY;
    };
  }(this));
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this.method_cache, function(a) {
    return function(a) {
      return cljs.core.PersistentArrayMap.EMPTY;
    };
  }(this));
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this.prefer_table, function(a) {
    return function(a) {
      return cljs.core.PersistentArrayMap.EMPTY;
    };
  }(this));
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this.cached_hierarchy, function(a) {
    return function(a) {
      return null;
    };
  }(this));
  return this;
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = function(a, b) {
  cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this.cached_hierarchy), cljs.core.deref(this.hierarchy)) || cljs.core.reset_cache(this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  var c = cljs.core.deref(this.method_cache);
  c = c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(b) : c.call(null, b);
  return cljs.core.truth_(c) ? c : cljs.core.find_and_cache_best_method(this.name, b, this.hierarchy, this.method_table, this.prefer_table, this.method_cache, this.cached_hierarchy, this.default_dispatch_val);
};
cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = function(a) {
  return cljs.core._name(this.name);
};
cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = function(a) {
  return cljs.core._namespace(this.name);
};
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return goog.getUid(this);
};
cljs.core.MultiFn.getBasis = function() {
  return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "name", "name", -810760592, null), new cljs.core.Symbol(null, "dispatch-fn", "dispatch-fn", -1401088155, null), new cljs.core.Symbol(null, "default-dispatch-val", "default-dispatch-val", -1231201266, null), new cljs.core.Symbol(null, "hierarchy", "hierarchy", 587061186, null), new cljs.core.Symbol(null, "method-table", "method-table", -1878263165, null), new cljs.core.Symbol(null, 
  "prefer-table", "prefer-table", 462168584, null), new cljs.core.Symbol(null, "method-cache", "method-cache", 1230193905, null), new cljs.core.Symbol(null, "cached-hierarchy", "cached-hierarchy", -1085460203, null)], null);
};
cljs.core.MultiFn.cljs$lang$type = !0;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/MultiFn");
};
cljs.core.__GT_MultiFn = function(a, b, c, d, e, f, g, h) {
  return new cljs.core.MultiFn(a, b, c, d, e, f, g, h);
};
cljs.core.remove_all_methods = function(a) {
  return cljs.core._reset(a);
};
cljs.core.remove_method = function(a, b) {
  return cljs.core._remove_method(a, b);
};
cljs.core.prefer_method = function(a, b, c) {
  return cljs.core._prefer_method(a, b, c);
};
cljs.core.methods$ = function(a) {
  return cljs.core._methods(a);
};
cljs.core.get_method = function(a, b) {
  return cljs.core._get_method(a, b);
};
cljs.core.prefers = function(a) {
  return cljs.core._prefers(a);
};
cljs.core.default_dispatch_val = function(a) {
  return cljs.core._default_dispatch_val(a);
};
cljs.core.dispatch_fn = function(a) {
  return cljs.core._dispatch_fn(a);
};
cljs.core.IUUID = function() {
};
cljs.core.UUID = function(a, b) {
  this.uuid = a;
  this.__hash = b;
  this.cljs$lang$protocol_mask$partition0$ = 2153775104;
  this.cljs$lang$protocol_mask$partition1$ = 2048;
};
cljs.core.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.UUID.prototype.toString = function() {
  return this.uuid;
};
cljs.core.UUID.prototype.equiv = function(a) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, a);
};
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return b instanceof cljs.core.UUID && this.uuid === b.uuid;
};
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core._write(b, ['#uuid "', cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.uuid), '"'].join(""));
};
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  null == this.__hash && (this.__hash = cljs.core.hash(this.uuid));
  return this.__hash;
};
cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  return goog.array.defaultCompare(this.uuid, b.uuid);
};
cljs.core.UUID.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "uuid", "uuid", -504564192, null), cljs.core.with_meta(new cljs.core.Symbol(null, "__hash", "__hash", -1328796629, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.core.UUID.cljs$lang$type = !0;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/UUID");
};
cljs.core.__GT_UUID = function(a, b) {
  return new cljs.core.UUID(a, b);
};
cljs.core.uuid = function(a) {
  if ("string" !== typeof a) {
    throw Error("Assert failed: (string? s)");
  }
  return new cljs.core.UUID(a.toLowerCase(), null);
};
cljs.core.random_uuid = function() {
  var a = function() {
    return cljs.core.rand_int(16).toString(16);
  }, b = (8 | 3 & cljs.core.rand_int(16)).toString(16);
  return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), "-", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), 
  cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), "-4", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), "-", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), "-", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), 
  cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a()), 
  cljs.core.str.cljs$core$IFn$_invoke$arity$1(a())].join(""));
};
cljs.core.uuid_QMARK_ = function(a) {
  return null != a ? cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IUUID$ ? !0 : !1 : !1;
};
cljs.core.pr_writer_ex_info = function(a, b, c) {
  cljs.core._write(b, "#error {:message ");
  cljs.core.pr_writer(a.message, b, c);
  cljs.core.truth_(a.data) && (cljs.core._write(b, ", :data "), cljs.core.pr_writer(a.data, b, c));
  cljs.core.truth_(a.cause) && (cljs.core._write(b, ", :cause "), cljs.core.pr_writer(a.cause, b, c));
  return cljs.core._write(b, "}");
};
cljs.core.ExceptionInfo = function(a, b, c) {
  var d = Error(a);
  this.message = a;
  this.data = b;
  this.cause = c;
  this.name = d.name;
  this.description = d.description;
  this.number = d.number;
  this.fileName = d.fileName;
  this.lineNumber = d.lineNumber;
  this.columnNumber = d.columnNumber;
  this.stack = d.stack;
  return this;
};
cljs.core.ExceptionInfo.prototype.__proto__ = Error.prototype;
cljs.core.ExceptionInfo.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.core.ExceptionInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  return cljs.core.pr_writer_ex_info(this, b, c);
};
cljs.core.ExceptionInfo.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.ex_info = function(a) {
  switch(arguments.length) {
    case 2:
      return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(a, b, null);
};
cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.core.ExceptionInfo(a, b, c);
};
cljs.core.ex_info.cljs$lang$maxFixedArity = 3;
cljs.core.ex_data = function(a) {
  return a instanceof cljs.core.ExceptionInfo ? a.data : null;
};
cljs.core.ex_message = function(a) {
  return a instanceof Error ? a.message : null;
};
cljs.core.ex_cause = function(a) {
  return a instanceof cljs.core.ExceptionInfo ? a.cause : null;
};
cljs.core.comparator = function(a) {
  return function(b, c) {
    return cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(b, c) : a.call(null, b, c)) ? -1 : cljs.core.truth_(a.cljs$core$IFn$_invoke$arity$2 ? a.cljs$core$IFn$_invoke$arity$2(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
};
cljs.core.special_symbol_QMARK_ = function(a) {
  return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 23, [new cljs.core.Symbol(null, "\x26", "\x26", -2144855648, null), null, new cljs.core.Symbol(null, "defrecord*", "defrecord*", -1936366207, null), null, new cljs.core.Symbol(null, "try", "try", -1273693247, null), null, new cljs.core.Symbol(null, "ns*", "ns*", 1840949383, null), null, new cljs.core.Symbol(null, "finally", "finally", -1065347064, null), null, new cljs.core.Symbol(null, 
  "loop*", "loop*", 615029416, null), null, new cljs.core.Symbol(null, "do", "do", 1686842252, null), null, new cljs.core.Symbol(null, "letfn*", "letfn*", -110097810, null), null, new cljs.core.Symbol(null, "if", "if", 1181717262, null), null, new cljs.core.Symbol(null, "new", "new", -444906321, null), null, new cljs.core.Symbol(null, "ns", "ns", 2082130287, null), null, new cljs.core.Symbol(null, "deftype*", "deftype*", 962659890, null), null, new cljs.core.Symbol(null, "let*", "let*", 1920721458, 
  null), null, new cljs.core.Symbol(null, "js*", "js*", -1134233646, null), null, new cljs.core.Symbol(null, "fn*", "fn*", -752876845, null), null, new cljs.core.Symbol(null, "recur", "recur", 1202958259, null), null, new cljs.core.Symbol(null, "set!", "set!", 250714521, null), null, new cljs.core.Symbol(null, ".", ".", 1975675962, null), null, new cljs.core.Symbol(null, "var", "var", 870848730, null), null, new cljs.core.Symbol(null, "quote", "quote", 1377916282, null), null, new cljs.core.Symbol(null, 
  "catch", "catch", -1616370245, null), null, new cljs.core.Symbol(null, "throw", "throw", 595905694, null), null, new cljs.core.Symbol(null, "def", "def", 597100991, null), null], null), null), a);
};
cljs.core.test = function(a) {
  a = a.cljs$lang$test;
  return cljs.core.truth_(a) ? (a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null), new cljs.core.Keyword(null, "ok", "ok", 967785236)) : new cljs.core.Keyword(null, "no-test", "no-test", -1679482642);
};
cljs.core.TaggedLiteral = function(a, b) {
  this.tag = a;
  this.form = b;
  this.cljs$lang$protocol_mask$partition0$ = 2153775360;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.TaggedLiteral.prototype.toString = function() {
  return cljs.core.pr_str_STAR_(this);
};
cljs.core.TaggedLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return b instanceof cljs.core.TaggedLiteral && cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.tag, b.tag) && cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.form, b.form);
};
cljs.core.TaggedLiteral.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return 31 * cljs.core.hash(this.tag) + cljs.core.hash(this.form);
};
cljs.core.TaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.core.TaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  switch(b instanceof cljs.core.Keyword ? b.fqn : null) {
    case "tag":
      return this.tag;
    case "form":
      return this.form;
    default:
      return c;
  }
};
cljs.core.TaggedLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  cljs.core._write(b, ["#", cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.tag), " "].join(""));
  return cljs.core.pr_writer(this.form, b, c);
};
cljs.core.TaggedLiteral.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "tag", "tag", 350170304, null), new cljs.core.Symbol(null, "form", "form", 16469056, null)], null);
};
cljs.core.TaggedLiteral.cljs$lang$type = !0;
cljs.core.TaggedLiteral.cljs$lang$ctorStr = "cljs.core/TaggedLiteral";
cljs.core.TaggedLiteral.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/TaggedLiteral");
};
cljs.core.__GT_TaggedLiteral = function(a, b) {
  return new cljs.core.TaggedLiteral(a, b);
};
cljs.core.tagged_literal_QMARK_ = function(a) {
  return a instanceof cljs.core.TaggedLiteral;
};
cljs.core.tagged_literal = function(a, b) {
  if (!(a instanceof cljs.core.Symbol)) {
    throw Error("Assert failed: (symbol? tag)");
  }
  return new cljs.core.TaggedLiteral(a, b);
};
cljs.core.js_reserved_arr = "arguments abstract await boolean break byte case catch char class const continue debugger default delete do double else enum export extends final finally float for function goto if implements import in instanceof int interface let long native new package private protected public return short static super switch synchronized this throw throws transient try typeof var void volatile while with yield methods null constructor".split(" ");
cljs.core.js_reserved = null;
cljs.core.js_reserved_QMARK_ = function(a) {
  null == cljs.core.js_reserved && (cljs.core.js_reserved = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function(a, c) {
    goog.object.set(a, c, !0);
    return a;
  }, {}, cljs.core.js_reserved_arr));
  return cljs.core.js_reserved.hasOwnProperty(a);
};
cljs.core.demunge_pattern = function() {
  cljs.core.truth_(cljs.core.DEMUNGE_PATTERN) || (cljs.core.DEMUNGE_PATTERN = function() {
    for (var a = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(function(a, b) {
      return b.length - a.length;
    }, cljs.core.js_keys(cljs.core.DEMUNGE_MAP)), b = "";;) {
      if (cljs.core.seq(a)) {
        var c = cljs.core.next(a), d = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(function() {
          var a = b;
          return "" !== b ? [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "|"].join("") : a;
        }()), cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(a))].join("");
        a = c;
        b = d;
      } else {
        return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), "|\\$"].join("");
      }
    }
  }());
  return cljs.core.DEMUNGE_PATTERN;
};
cljs.core.munge_str = function(a) {
  for (var b = new goog.string.StringBuffer, c = 0;;) {
    if (c < a.length) {
      var d = a.charAt(c), e = goog.object.get(cljs.core.CHAR_MAP, d);
      null != e ? b.append(e) : b.append(d);
      c += 1;
    } else {
      break;
    }
  }
  return b.toString();
};
cljs.core.munge = function(a) {
  var b = cljs.core.munge_str("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));
  b = ".." === b ? "_DOT__DOT_" : cljs.core.truth_(cljs.core.js_reserved_QMARK_(b)) ? [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), "$"].join("") : b;
  return a instanceof cljs.core.Symbol ? cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(b) : b;
};
cljs.core.demunge_str = function(a) {
  var b = new RegExp(cljs.core.demunge_pattern(), "g");
  a = cljs.core.truth_(goog.string.endsWith(a, "$")) ? a.substring(0, a.length - 1) : a;
  for (var c = "", d = 0;;) {
    var e = b.exec(a);
    if (cljs.core.truth_(e)) {
      e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e, 0, null), c = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a.substring(d, b.lastIndex - e.length)), cljs.core.str.cljs$core$IFn$_invoke$arity$1("$" === e ? "/" : goog.object.get(cljs.core.DEMUNGE_MAP, e))].join(""), d = b.lastIndex;
    } else {
      return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a.substring(d, a.length))].join("");
    }
  }
};
cljs.core.demunge = function(a) {
  var b = "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
  b = "_DOT__DOT_" === b ? ".." : cljs.core.demunge_str(b);
  a = a instanceof cljs.core.Symbol ? cljs.core.symbol : cljs.core.str;
  return a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(b) : a.call(null, b);
};
cljs.core.ns_lookup = function(a, b) {
  return function() {
    return goog.object.get(a, b);
  };
};
cljs.core.Namespace = function(a, b) {
  this.obj = a;
  this.name = b;
  this.cljs$lang$protocol_mask$partition0$ = 6291456;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
cljs.core.Namespace.prototype.findInternedVar = function(a) {
  var b = cljs.core.munge("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));
  if (goog.object.containsKey(this.obj, b)) {
    a = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.name), "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));
    var c = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "ns", "ns", 441598760), this], null);
    return new cljs.core.Var(cljs.core.ns_lookup(this.obj, b), a, c);
  }
  return null;
};
cljs.core.Namespace.prototype.getName = function() {
  return this.name;
};
cljs.core.Namespace.prototype.toString = function() {
  return "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.name);
};
cljs.core.Namespace.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return b instanceof cljs.core.Namespace ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.name, b.name) : !1;
};
cljs.core.Namespace.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash(this.name);
};
cljs.core.Namespace.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "obj", "obj", -1672671807, null), new cljs.core.Symbol(null, "name", "name", -810760592, null)], null);
};
cljs.core.Namespace.cljs$lang$type = !0;
cljs.core.Namespace.cljs$lang$ctorStr = "cljs.core/Namespace";
cljs.core.Namespace.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write(b, "cljs.core/Namespace");
};
cljs.core.__GT_Namespace = function(a, b) {
  return new cljs.core.Namespace(a, b);
};
cljs.core.NS_CACHE = null;
cljs.core.find_ns_obj_STAR_ = function(a, b) {
  for (;;) {
    if (null == a) {
      return null;
    }
    if (null == b) {
      return a;
    }
    var c = a;
    var d = cljs.core.first(b);
    c = goog.object.get(c, d);
    d = cljs.core.next(b);
    a = c;
    b = d;
  }
};
cljs.core.find_ns_obj = function(a) {
  var b = cljs.core.munge("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)).split(".");
  switch(cljs.core._STAR_target_STAR_) {
    case "nodejs":
      return COMPILED ? cljs.core.find_ns_obj_STAR_(function() {
        try {
          var a = function() {
            var a = cljs.core.first(b);
            return eval(a);
          }();
          return cljs.core.truth_(cljs.core.truth_(a) ? cljs.core.object_QMARK_(a) : a) ? a : null;
        } catch (d) {
          if (d instanceof ReferenceError) {
            return null;
          }
          throw d;
        }
      }(), cljs.core.next(b)) : cljs.core.find_ns_obj_STAR_(global, b);
    case "default":
      return cljs.core.find_ns_obj_STAR_(goog.global, b);
    default:
      throw Error(["find-ns-obj not supported for target ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_target_STAR_)].join(""));
  }
};
cljs.core.ns_interns_STAR_ = function(a) {
  var b = cljs.core.find_ns_obj(a), c = new cljs.core.Namespace(b, a);
  c = function(b, c) {
    return function(d, e) {
      var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(e));
      return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d, f, new cljs.core.Var(function(a, b, c) {
        return function() {
          return goog.object.get(b, e);
        };
      }(f, b, c), cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "ns", "ns", 441598760), c], null)));
    };
  }(b, c);
  return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(c, cljs.core.PersistentArrayMap.EMPTY, cljs.core.js_keys(b));
};
cljs.core.create_ns = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.core.create_ns.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.core.create_ns.cljs$core$IFn$_invoke$arity$2(a, cljs.core.find_ns_obj(a));
};
cljs.core.create_ns.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.core.Namespace(b, a);
};
cljs.core.create_ns.cljs$lang$maxFixedArity = 2;
cljs.core.find_ns = function(a) {
  null == cljs.core.NS_CACHE && (cljs.core.NS_CACHE = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
  var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.NS_CACHE), a);
  if (null != b) {
    return b;
  }
  b = cljs.core.find_ns_obj(a);
  if (null == b) {
    return null;
  }
  b = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$2(a, b);
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.NS_CACHE, cljs.core.assoc, a, b);
  return b;
};
cljs.core.find_macros_ns = function(a) {
  null == cljs.core.NS_CACHE && (cljs.core.NS_CACHE = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
  var b = "" + cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
  a = goog.string.contains(b, "$macros") ? a : cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), "$macros"].join(""));
  b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.NS_CACHE), a);
  if (null != b) {
    return b;
  }
  b = cljs.core.find_ns_obj(a);
  if (null == b) {
    return null;
  }
  b = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$2(a, b);
  cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.NS_CACHE, cljs.core.assoc, a, b);
  return b;
};
cljs.core.ns_name = function(a) {
  return a.name;
};
cljs.nodejs = {};
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = function() {
  cljs.core._STAR_print_newline_STAR_ = !1;
  cljs.core._STAR_print_fn_STAR_ = function() {
    var a = function(a) {
      return console.log.apply(console, cljs.core.into_array.call(null, a));
    }, b = function(b) {
      var c = null;
      if (0 < arguments.length) {
        c = 0;
        for (var e = Array(arguments.length - 0); c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new cljs.core.IndexedSeq(e, 0, null);
      }
      return a.call(this, c);
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      b = cljs.core.seq(b);
      return a(b);
    };
    b.cljs$core$IFn$_invoke$arity$variadic = a;
    return b;
  }();
  cljs.core._STAR_print_err_fn_STAR_ = function() {
    var a = function(a) {
      return console.error.apply(console, cljs.core.into_array.call(null, a));
    }, b = function(b) {
      var c = null;
      if (0 < arguments.length) {
        c = 0;
        for (var e = Array(arguments.length - 0); c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new cljs.core.IndexedSeq(e, 0, null);
      }
      return a.call(this, c);
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      b = cljs.core.seq(b);
      return a(b);
    };
    b.cljs$core$IFn$_invoke$arity$variadic = a;
    return b;
  }();
  return null;
};
var electron = {core:{}};
electron.core.node$module$electron = require("electron");
cljs.nodejs.enable_util_print_BANG_.call(null);
electron.core._STAR_main_window = cljs.core.atom.call(null, null);
electron.core.create_window = function() {
  cljs.core.println.call(null, "Creating window");
  cljs.core.reset_BANG_.call(null, electron.core._STAR_main_window, new electron.core.node$module$electron.BrowserWindow({width:300, height:500, resizable:!1}));
  cljs.core.deref.call(null, electron.core._STAR_main_window).loadURL(["file://", cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname), "/public/index.html"].join(""));
  return cljs.core.deref.call(null, electron.core._STAR_main_window).on("closed", function() {
    return cljs.core.reset_BANG_.call(null, electron.core._STAR_main_window, null);
  });
};
electron.core.node$module$electron.app.on("ready", electron.core.create_window);
electron.core.quit_app = function() {
  return cljs.core._EQ_.call(null, "darwin", process.platform) ? null : electron.core.node$module$electron.app.quit();
};
electron.core.node$module$electron.app.on("window-all-closed", electron.core.quit_app);
electron.core.activate = function() {
  return null == cljs.core.deref.call(null, electron.core._STAR_main_window) ? electron.core.create_window.call(null) : null;
};
electron.core.node$module$electron.app.on("activate", electron.core.activate);
cljs.nodejscli = {};
COMPILED && (goog.global = global);
cljs.core.fn_QMARK_.call(null, cljs.core._STAR_main_cli_fn_STAR_) && cljs.core.apply.call(null, cljs.core._STAR_main_cli_fn_STAR_, cljs.core.drop.call(null, 2, process.argv));
