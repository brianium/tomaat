goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45347__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45348__i = 0, G__45348__a = new Array(arguments.length -  0);
while (G__45348__i < G__45348__a.length) {G__45348__a[G__45348__i] = arguments[G__45348__i + 0]; ++G__45348__i;}
  args = new cljs.core.IndexedSeq(G__45348__a,0,null);
} 
return G__45347__delegate.call(this,args);};
G__45347.cljs$lang$maxFixedArity = 0;
G__45347.cljs$lang$applyTo = (function (arglist__45349){
var args = cljs.core.seq(arglist__45349);
return G__45347__delegate(args);
});
G__45347.cljs$core$IFn$_invoke$arity$variadic = G__45347__delegate;
return G__45347;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45350__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45351__i = 0, G__45351__a = new Array(arguments.length -  0);
while (G__45351__i < G__45351__a.length) {G__45351__a[G__45351__i] = arguments[G__45351__i + 0]; ++G__45351__i;}
  args = new cljs.core.IndexedSeq(G__45351__a,0,null);
} 
return G__45350__delegate.call(this,args);};
G__45350.cljs$lang$maxFixedArity = 0;
G__45350.cljs$lang$applyTo = (function (arglist__45352){
var args = cljs.core.seq(arglist__45352);
return G__45350__delegate(args);
});
G__45350.cljs$core$IFn$_invoke$arity$variadic = G__45350__delegate;
return G__45350;
})()
;

return null;
});
