goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54400__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54401__i = 0, G__54401__a = new Array(arguments.length -  0);
while (G__54401__i < G__54401__a.length) {G__54401__a[G__54401__i] = arguments[G__54401__i + 0]; ++G__54401__i;}
  args = new cljs.core.IndexedSeq(G__54401__a,0,null);
} 
return G__54400__delegate.call(this,args);};
G__54400.cljs$lang$maxFixedArity = 0;
G__54400.cljs$lang$applyTo = (function (arglist__54402){
var args = cljs.core.seq(arglist__54402);
return G__54400__delegate(args);
});
G__54400.cljs$core$IFn$_invoke$arity$variadic = G__54400__delegate;
return G__54400;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54403__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54404__i = 0, G__54404__a = new Array(arguments.length -  0);
while (G__54404__i < G__54404__a.length) {G__54404__a[G__54404__i] = arguments[G__54404__i + 0]; ++G__54404__i;}
  args = new cljs.core.IndexedSeq(G__54404__a,0,null);
} 
return G__54403__delegate.call(this,args);};
G__54403.cljs$lang$maxFixedArity = 0;
G__54403.cljs$lang$applyTo = (function (arglist__54405){
var args = cljs.core.seq(arglist__54405);
return G__54403__delegate(args);
});
G__54403.cljs$core$IFn$_invoke$arity$variadic = G__54403__delegate;
return G__54403;
})()
;

return null;
});
