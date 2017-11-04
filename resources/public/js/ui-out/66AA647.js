goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45425__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45426__i = 0, G__45426__a = new Array(arguments.length -  0);
while (G__45426__i < G__45426__a.length) {G__45426__a[G__45426__i] = arguments[G__45426__i + 0]; ++G__45426__i;}
  args = new cljs.core.IndexedSeq(G__45426__a,0,null);
} 
return G__45425__delegate.call(this,args);};
G__45425.cljs$lang$maxFixedArity = 0;
G__45425.cljs$lang$applyTo = (function (arglist__45427){
var args = cljs.core.seq(arglist__45427);
return G__45425__delegate(args);
});
G__45425.cljs$core$IFn$_invoke$arity$variadic = G__45425__delegate;
return G__45425;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45428__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45429__i = 0, G__45429__a = new Array(arguments.length -  0);
while (G__45429__i < G__45429__a.length) {G__45429__a[G__45429__i] = arguments[G__45429__i + 0]; ++G__45429__i;}
  args = new cljs.core.IndexedSeq(G__45429__a,0,null);
} 
return G__45428__delegate.call(this,args);};
G__45428.cljs$lang$maxFixedArity = 0;
G__45428.cljs$lang$applyTo = (function (arglist__45430){
var args = cljs.core.seq(arglist__45430);
return G__45428__delegate(args);
});
G__45428.cljs$core$IFn$_invoke$arity$variadic = G__45428__delegate;
return G__45428;
})()
;

return null;
});
