goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45495__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45496__i = 0, G__45496__a = new Array(arguments.length -  0);
while (G__45496__i < G__45496__a.length) {G__45496__a[G__45496__i] = arguments[G__45496__i + 0]; ++G__45496__i;}
  args = new cljs.core.IndexedSeq(G__45496__a,0,null);
} 
return G__45495__delegate.call(this,args);};
G__45495.cljs$lang$maxFixedArity = 0;
G__45495.cljs$lang$applyTo = (function (arglist__45497){
var args = cljs.core.seq(arglist__45497);
return G__45495__delegate(args);
});
G__45495.cljs$core$IFn$_invoke$arity$variadic = G__45495__delegate;
return G__45495;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45498__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45499__i = 0, G__45499__a = new Array(arguments.length -  0);
while (G__45499__i < G__45499__a.length) {G__45499__a[G__45499__i] = arguments[G__45499__i + 0]; ++G__45499__i;}
  args = new cljs.core.IndexedSeq(G__45499__a,0,null);
} 
return G__45498__delegate.call(this,args);};
G__45498.cljs$lang$maxFixedArity = 0;
G__45498.cljs$lang$applyTo = (function (arglist__45500){
var args = cljs.core.seq(arglist__45500);
return G__45498__delegate(args);
});
G__45498.cljs$core$IFn$_invoke$arity$variadic = G__45498__delegate;
return G__45498;
})()
;

return null;
});
