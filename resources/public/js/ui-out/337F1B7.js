goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46200__i = 0, G__46200__a = new Array(arguments.length -  0);
while (G__46200__i < G__46200__a.length) {G__46200__a[G__46200__i] = arguments[G__46200__i + 0]; ++G__46200__i;}
  args = new cljs.core.IndexedSeq(G__46200__a,0,null);
} 
return G__46199__delegate.call(this,args);};
G__46199.cljs$lang$maxFixedArity = 0;
G__46199.cljs$lang$applyTo = (function (arglist__46201){
var args = cljs.core.seq(arglist__46201);
return G__46199__delegate(args);
});
G__46199.cljs$core$IFn$_invoke$arity$variadic = G__46199__delegate;
return G__46199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46203__i = 0, G__46203__a = new Array(arguments.length -  0);
while (G__46203__i < G__46203__a.length) {G__46203__a[G__46203__i] = arguments[G__46203__i + 0]; ++G__46203__i;}
  args = new cljs.core.IndexedSeq(G__46203__a,0,null);
} 
return G__46202__delegate.call(this,args);};
G__46202.cljs$lang$maxFixedArity = 0;
G__46202.cljs$lang$applyTo = (function (arglist__46204){
var args = cljs.core.seq(arglist__46204);
return G__46202__delegate(args);
});
G__46202.cljs$core$IFn$_invoke$arity$variadic = G__46202__delegate;
return G__46202;
})()
;

return null;
});
