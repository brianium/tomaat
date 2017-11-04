goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45091__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45092__i = 0, G__45092__a = new Array(arguments.length -  0);
while (G__45092__i < G__45092__a.length) {G__45092__a[G__45092__i] = arguments[G__45092__i + 0]; ++G__45092__i;}
  args = new cljs.core.IndexedSeq(G__45092__a,0,null);
} 
return G__45091__delegate.call(this,args);};
G__45091.cljs$lang$maxFixedArity = 0;
G__45091.cljs$lang$applyTo = (function (arglist__45093){
var args = cljs.core.seq(arglist__45093);
return G__45091__delegate(args);
});
G__45091.cljs$core$IFn$_invoke$arity$variadic = G__45091__delegate;
return G__45091;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45094__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45095__i = 0, G__45095__a = new Array(arguments.length -  0);
while (G__45095__i < G__45095__a.length) {G__45095__a[G__45095__i] = arguments[G__45095__i + 0]; ++G__45095__i;}
  args = new cljs.core.IndexedSeq(G__45095__a,0,null);
} 
return G__45094__delegate.call(this,args);};
G__45094.cljs$lang$maxFixedArity = 0;
G__45094.cljs$lang$applyTo = (function (arglist__45096){
var args = cljs.core.seq(arglist__45096);
return G__45094__delegate(args);
});
G__45094.cljs$core$IFn$_invoke$arity$variadic = G__45094__delegate;
return G__45094;
})()
;

return null;
});
