goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45241__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45242__i = 0, G__45242__a = new Array(arguments.length -  0);
while (G__45242__i < G__45242__a.length) {G__45242__a[G__45242__i] = arguments[G__45242__i + 0]; ++G__45242__i;}
  args = new cljs.core.IndexedSeq(G__45242__a,0,null);
} 
return G__45241__delegate.call(this,args);};
G__45241.cljs$lang$maxFixedArity = 0;
G__45241.cljs$lang$applyTo = (function (arglist__45243){
var args = cljs.core.seq(arglist__45243);
return G__45241__delegate(args);
});
G__45241.cljs$core$IFn$_invoke$arity$variadic = G__45241__delegate;
return G__45241;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45244__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45245__i = 0, G__45245__a = new Array(arguments.length -  0);
while (G__45245__i < G__45245__a.length) {G__45245__a[G__45245__i] = arguments[G__45245__i + 0]; ++G__45245__i;}
  args = new cljs.core.IndexedSeq(G__45245__a,0,null);
} 
return G__45244__delegate.call(this,args);};
G__45244.cljs$lang$maxFixedArity = 0;
G__45244.cljs$lang$applyTo = (function (arglist__45246){
var args = cljs.core.seq(arglist__45246);
return G__45244__delegate(args);
});
G__45244.cljs$core$IFn$_invoke$arity$variadic = G__45244__delegate;
return G__45244;
})()
;

return null;
});
