goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45517__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45518__i = 0, G__45518__a = new Array(arguments.length -  0);
while (G__45518__i < G__45518__a.length) {G__45518__a[G__45518__i] = arguments[G__45518__i + 0]; ++G__45518__i;}
  args = new cljs.core.IndexedSeq(G__45518__a,0,null);
} 
return G__45517__delegate.call(this,args);};
G__45517.cljs$lang$maxFixedArity = 0;
G__45517.cljs$lang$applyTo = (function (arglist__45519){
var args = cljs.core.seq(arglist__45519);
return G__45517__delegate(args);
});
G__45517.cljs$core$IFn$_invoke$arity$variadic = G__45517__delegate;
return G__45517;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45520__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45521__i = 0, G__45521__a = new Array(arguments.length -  0);
while (G__45521__i < G__45521__a.length) {G__45521__a[G__45521__i] = arguments[G__45521__i + 0]; ++G__45521__i;}
  args = new cljs.core.IndexedSeq(G__45521__a,0,null);
} 
return G__45520__delegate.call(this,args);};
G__45520.cljs$lang$maxFixedArity = 0;
G__45520.cljs$lang$applyTo = (function (arglist__45522){
var args = cljs.core.seq(arglist__45522);
return G__45520__delegate(args);
});
G__45520.cljs$core$IFn$_invoke$arity$variadic = G__45520__delegate;
return G__45520;
})()
;

return null;
});
