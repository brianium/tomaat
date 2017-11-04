goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45213__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45214__i = 0, G__45214__a = new Array(arguments.length -  0);
while (G__45214__i < G__45214__a.length) {G__45214__a[G__45214__i] = arguments[G__45214__i + 0]; ++G__45214__i;}
  args = new cljs.core.IndexedSeq(G__45214__a,0,null);
} 
return G__45213__delegate.call(this,args);};
G__45213.cljs$lang$maxFixedArity = 0;
G__45213.cljs$lang$applyTo = (function (arglist__45215){
var args = cljs.core.seq(arglist__45215);
return G__45213__delegate(args);
});
G__45213.cljs$core$IFn$_invoke$arity$variadic = G__45213__delegate;
return G__45213;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45216__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45217__i = 0, G__45217__a = new Array(arguments.length -  0);
while (G__45217__i < G__45217__a.length) {G__45217__a[G__45217__i] = arguments[G__45217__i + 0]; ++G__45217__i;}
  args = new cljs.core.IndexedSeq(G__45217__a,0,null);
} 
return G__45216__delegate.call(this,args);};
G__45216.cljs$lang$maxFixedArity = 0;
G__45216.cljs$lang$applyTo = (function (arglist__45218){
var args = cljs.core.seq(arglist__45218);
return G__45216__delegate(args);
});
G__45216.cljs$core$IFn$_invoke$arity$variadic = G__45216__delegate;
return G__45216;
})()
;

return null;
});
