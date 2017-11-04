goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45297__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45298__i = 0, G__45298__a = new Array(arguments.length -  0);
while (G__45298__i < G__45298__a.length) {G__45298__a[G__45298__i] = arguments[G__45298__i + 0]; ++G__45298__i;}
  args = new cljs.core.IndexedSeq(G__45298__a,0,null);
} 
return G__45297__delegate.call(this,args);};
G__45297.cljs$lang$maxFixedArity = 0;
G__45297.cljs$lang$applyTo = (function (arglist__45299){
var args = cljs.core.seq(arglist__45299);
return G__45297__delegate(args);
});
G__45297.cljs$core$IFn$_invoke$arity$variadic = G__45297__delegate;
return G__45297;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45300__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45301__i = 0, G__45301__a = new Array(arguments.length -  0);
while (G__45301__i < G__45301__a.length) {G__45301__a[G__45301__i] = arguments[G__45301__i + 0]; ++G__45301__i;}
  args = new cljs.core.IndexedSeq(G__45301__a,0,null);
} 
return G__45300__delegate.call(this,args);};
G__45300.cljs$lang$maxFixedArity = 0;
G__45300.cljs$lang$applyTo = (function (arglist__45302){
var args = cljs.core.seq(arglist__45302);
return G__45300__delegate(args);
});
G__45300.cljs$core$IFn$_invoke$arity$variadic = G__45300__delegate;
return G__45300;
})()
;

return null;
});
