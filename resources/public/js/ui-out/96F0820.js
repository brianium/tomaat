goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45757__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45758__i = 0, G__45758__a = new Array(arguments.length -  0);
while (G__45758__i < G__45758__a.length) {G__45758__a[G__45758__i] = arguments[G__45758__i + 0]; ++G__45758__i;}
  args = new cljs.core.IndexedSeq(G__45758__a,0,null);
} 
return G__45757__delegate.call(this,args);};
G__45757.cljs$lang$maxFixedArity = 0;
G__45757.cljs$lang$applyTo = (function (arglist__45759){
var args = cljs.core.seq(arglist__45759);
return G__45757__delegate(args);
});
G__45757.cljs$core$IFn$_invoke$arity$variadic = G__45757__delegate;
return G__45757;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45760__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45761__i = 0, G__45761__a = new Array(arguments.length -  0);
while (G__45761__i < G__45761__a.length) {G__45761__a[G__45761__i] = arguments[G__45761__i + 0]; ++G__45761__i;}
  args = new cljs.core.IndexedSeq(G__45761__a,0,null);
} 
return G__45760__delegate.call(this,args);};
G__45760.cljs$lang$maxFixedArity = 0;
G__45760.cljs$lang$applyTo = (function (arglist__45762){
var args = cljs.core.seq(arglist__45762);
return G__45760__delegate(args);
});
G__45760.cljs$core$IFn$_invoke$arity$variadic = G__45760__delegate;
return G__45760;
})()
;

return null;
});
