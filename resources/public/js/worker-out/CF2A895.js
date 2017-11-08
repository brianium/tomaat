goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54115__i = 0, G__54115__a = new Array(arguments.length -  0);
while (G__54115__i < G__54115__a.length) {G__54115__a[G__54115__i] = arguments[G__54115__i + 0]; ++G__54115__i;}
  args = new cljs.core.IndexedSeq(G__54115__a,0,null);
} 
return G__54114__delegate.call(this,args);};
G__54114.cljs$lang$maxFixedArity = 0;
G__54114.cljs$lang$applyTo = (function (arglist__54116){
var args = cljs.core.seq(arglist__54116);
return G__54114__delegate(args);
});
G__54114.cljs$core$IFn$_invoke$arity$variadic = G__54114__delegate;
return G__54114;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54118__i = 0, G__54118__a = new Array(arguments.length -  0);
while (G__54118__i < G__54118__a.length) {G__54118__a[G__54118__i] = arguments[G__54118__i + 0]; ++G__54118__i;}
  args = new cljs.core.IndexedSeq(G__54118__a,0,null);
} 
return G__54117__delegate.call(this,args);};
G__54117.cljs$lang$maxFixedArity = 0;
G__54117.cljs$lang$applyTo = (function (arglist__54119){
var args = cljs.core.seq(arglist__54119);
return G__54117__delegate(args);
});
G__54117.cljs$core$IFn$_invoke$arity$variadic = G__54117__delegate;
return G__54117;
})()
;

return null;
});
