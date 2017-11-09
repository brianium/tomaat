goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39005__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39006__i = 0, G__39006__a = new Array(arguments.length -  0);
while (G__39006__i < G__39006__a.length) {G__39006__a[G__39006__i] = arguments[G__39006__i + 0]; ++G__39006__i;}
  args = new cljs.core.IndexedSeq(G__39006__a,0,null);
} 
return G__39005__delegate.call(this,args);};
G__39005.cljs$lang$maxFixedArity = 0;
G__39005.cljs$lang$applyTo = (function (arglist__39007){
var args = cljs.core.seq(arglist__39007);
return G__39005__delegate(args);
});
G__39005.cljs$core$IFn$_invoke$arity$variadic = G__39005__delegate;
return G__39005;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39008__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39009__i = 0, G__39009__a = new Array(arguments.length -  0);
while (G__39009__i < G__39009__a.length) {G__39009__a[G__39009__i] = arguments[G__39009__i + 0]; ++G__39009__i;}
  args = new cljs.core.IndexedSeq(G__39009__a,0,null);
} 
return G__39008__delegate.call(this,args);};
G__39008.cljs$lang$maxFixedArity = 0;
G__39008.cljs$lang$applyTo = (function (arglist__39010){
var args = cljs.core.seq(arglist__39010);
return G__39008__delegate(args);
});
G__39008.cljs$core$IFn$_invoke$arity$variadic = G__39008__delegate;
return G__39008;
})()
;

return null;
});
