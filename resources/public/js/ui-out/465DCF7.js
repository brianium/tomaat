goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45392__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45393__i = 0, G__45393__a = new Array(arguments.length -  0);
while (G__45393__i < G__45393__a.length) {G__45393__a[G__45393__i] = arguments[G__45393__i + 0]; ++G__45393__i;}
  args = new cljs.core.IndexedSeq(G__45393__a,0,null);
} 
return G__45392__delegate.call(this,args);};
G__45392.cljs$lang$maxFixedArity = 0;
G__45392.cljs$lang$applyTo = (function (arglist__45394){
var args = cljs.core.seq(arglist__45394);
return G__45392__delegate(args);
});
G__45392.cljs$core$IFn$_invoke$arity$variadic = G__45392__delegate;
return G__45392;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45395__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45396__i = 0, G__45396__a = new Array(arguments.length -  0);
while (G__45396__i < G__45396__a.length) {G__45396__a[G__45396__i] = arguments[G__45396__i + 0]; ++G__45396__i;}
  args = new cljs.core.IndexedSeq(G__45396__a,0,null);
} 
return G__45395__delegate.call(this,args);};
G__45395.cljs$lang$maxFixedArity = 0;
G__45395.cljs$lang$applyTo = (function (arglist__45397){
var args = cljs.core.seq(arglist__45397);
return G__45395__delegate(args);
});
G__45395.cljs$core$IFn$_invoke$arity$variadic = G__45395__delegate;
return G__45395;
})()
;

return null;
});
