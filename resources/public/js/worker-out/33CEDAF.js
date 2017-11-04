goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45200__i = 0, G__45200__a = new Array(arguments.length -  0);
while (G__45200__i < G__45200__a.length) {G__45200__a[G__45200__i] = arguments[G__45200__i + 0]; ++G__45200__i;}
  args = new cljs.core.IndexedSeq(G__45200__a,0,null);
} 
return G__45199__delegate.call(this,args);};
G__45199.cljs$lang$maxFixedArity = 0;
G__45199.cljs$lang$applyTo = (function (arglist__45201){
var args = cljs.core.seq(arglist__45201);
return G__45199__delegate(args);
});
G__45199.cljs$core$IFn$_invoke$arity$variadic = G__45199__delegate;
return G__45199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45203__i = 0, G__45203__a = new Array(arguments.length -  0);
while (G__45203__i < G__45203__a.length) {G__45203__a[G__45203__i] = arguments[G__45203__i + 0]; ++G__45203__i;}
  args = new cljs.core.IndexedSeq(G__45203__a,0,null);
} 
return G__45202__delegate.call(this,args);};
G__45202.cljs$lang$maxFixedArity = 0;
G__45202.cljs$lang$applyTo = (function (arglist__45204){
var args = cljs.core.seq(arglist__45204);
return G__45202__delegate(args);
});
G__45202.cljs$core$IFn$_invoke$arity$variadic = G__45202__delegate;
return G__45202;
})()
;

return null;
});
