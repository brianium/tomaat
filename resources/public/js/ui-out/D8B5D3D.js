goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46123__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46124__i = 0, G__46124__a = new Array(arguments.length -  0);
while (G__46124__i < G__46124__a.length) {G__46124__a[G__46124__i] = arguments[G__46124__i + 0]; ++G__46124__i;}
  args = new cljs.core.IndexedSeq(G__46124__a,0,null);
} 
return G__46123__delegate.call(this,args);};
G__46123.cljs$lang$maxFixedArity = 0;
G__46123.cljs$lang$applyTo = (function (arglist__46125){
var args = cljs.core.seq(arglist__46125);
return G__46123__delegate(args);
});
G__46123.cljs$core$IFn$_invoke$arity$variadic = G__46123__delegate;
return G__46123;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46126__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46127__i = 0, G__46127__a = new Array(arguments.length -  0);
while (G__46127__i < G__46127__a.length) {G__46127__a[G__46127__i] = arguments[G__46127__i + 0]; ++G__46127__i;}
  args = new cljs.core.IndexedSeq(G__46127__a,0,null);
} 
return G__46126__delegate.call(this,args);};
G__46126.cljs$lang$maxFixedArity = 0;
G__46126.cljs$lang$applyTo = (function (arglist__46128){
var args = cljs.core.seq(arglist__46128);
return G__46126__delegate(args);
});
G__46126.cljs$core$IFn$_invoke$arity$variadic = G__46126__delegate;
return G__46126;
})()
;

return null;
});
