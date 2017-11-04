goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45642__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45643__i = 0, G__45643__a = new Array(arguments.length -  0);
while (G__45643__i < G__45643__a.length) {G__45643__a[G__45643__i] = arguments[G__45643__i + 0]; ++G__45643__i;}
  args = new cljs.core.IndexedSeq(G__45643__a,0,null);
} 
return G__45642__delegate.call(this,args);};
G__45642.cljs$lang$maxFixedArity = 0;
G__45642.cljs$lang$applyTo = (function (arglist__45644){
var args = cljs.core.seq(arglist__45644);
return G__45642__delegate(args);
});
G__45642.cljs$core$IFn$_invoke$arity$variadic = G__45642__delegate;
return G__45642;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45645__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45646__i = 0, G__45646__a = new Array(arguments.length -  0);
while (G__45646__i < G__45646__a.length) {G__45646__a[G__45646__i] = arguments[G__45646__i + 0]; ++G__45646__i;}
  args = new cljs.core.IndexedSeq(G__45646__a,0,null);
} 
return G__45645__delegate.call(this,args);};
G__45645.cljs$lang$maxFixedArity = 0;
G__45645.cljs$lang$applyTo = (function (arglist__45647){
var args = cljs.core.seq(arglist__45647);
return G__45645__delegate(args);
});
G__45645.cljs$core$IFn$_invoke$arity$variadic = G__45645__delegate;
return G__45645;
})()
;

return null;
});
