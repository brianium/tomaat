goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57997__i = 0, G__57997__a = new Array(arguments.length -  0);
while (G__57997__i < G__57997__a.length) {G__57997__a[G__57997__i] = arguments[G__57997__i + 0]; ++G__57997__i;}
  args = new cljs.core.IndexedSeq(G__57997__a,0,null);
} 
return G__57996__delegate.call(this,args);};
G__57996.cljs$lang$maxFixedArity = 0;
G__57996.cljs$lang$applyTo = (function (arglist__57998){
var args = cljs.core.seq(arglist__57998);
return G__57996__delegate(args);
});
G__57996.cljs$core$IFn$_invoke$arity$variadic = G__57996__delegate;
return G__57996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58000__i = 0, G__58000__a = new Array(arguments.length -  0);
while (G__58000__i < G__58000__a.length) {G__58000__a[G__58000__i] = arguments[G__58000__i + 0]; ++G__58000__i;}
  args = new cljs.core.IndexedSeq(G__58000__a,0,null);
} 
return G__57999__delegate.call(this,args);};
G__57999.cljs$lang$maxFixedArity = 0;
G__57999.cljs$lang$applyTo = (function (arglist__58001){
var args = cljs.core.seq(arglist__58001);
return G__57999__delegate(args);
});
G__57999.cljs$core$IFn$_invoke$arity$variadic = G__57999__delegate;
return G__57999;
})()
;

return null;
});
