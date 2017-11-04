goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45284__i = 0, G__45284__a = new Array(arguments.length -  0);
while (G__45284__i < G__45284__a.length) {G__45284__a[G__45284__i] = arguments[G__45284__i + 0]; ++G__45284__i;}
  args = new cljs.core.IndexedSeq(G__45284__a,0,null);
} 
return G__45283__delegate.call(this,args);};
G__45283.cljs$lang$maxFixedArity = 0;
G__45283.cljs$lang$applyTo = (function (arglist__45285){
var args = cljs.core.seq(arglist__45285);
return G__45283__delegate(args);
});
G__45283.cljs$core$IFn$_invoke$arity$variadic = G__45283__delegate;
return G__45283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45287__i = 0, G__45287__a = new Array(arguments.length -  0);
while (G__45287__i < G__45287__a.length) {G__45287__a[G__45287__i] = arguments[G__45287__i + 0]; ++G__45287__i;}
  args = new cljs.core.IndexedSeq(G__45287__a,0,null);
} 
return G__45286__delegate.call(this,args);};
G__45286.cljs$lang$maxFixedArity = 0;
G__45286.cljs$lang$applyTo = (function (arglist__45288){
var args = cljs.core.seq(arglist__45288);
return G__45286__delegate(args);
});
G__45286.cljs$core$IFn$_invoke$arity$variadic = G__45286__delegate;
return G__45286;
})()
;

return null;
});
