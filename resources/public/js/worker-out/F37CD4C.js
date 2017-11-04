goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45477__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45478__i = 0, G__45478__a = new Array(arguments.length -  0);
while (G__45478__i < G__45478__a.length) {G__45478__a[G__45478__i] = arguments[G__45478__i + 0]; ++G__45478__i;}
  args = new cljs.core.IndexedSeq(G__45478__a,0,null);
} 
return G__45477__delegate.call(this,args);};
G__45477.cljs$lang$maxFixedArity = 0;
G__45477.cljs$lang$applyTo = (function (arglist__45479){
var args = cljs.core.seq(arglist__45479);
return G__45477__delegate(args);
});
G__45477.cljs$core$IFn$_invoke$arity$variadic = G__45477__delegate;
return G__45477;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45480__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45481__i = 0, G__45481__a = new Array(arguments.length -  0);
while (G__45481__i < G__45481__a.length) {G__45481__a[G__45481__i] = arguments[G__45481__i + 0]; ++G__45481__i;}
  args = new cljs.core.IndexedSeq(G__45481__a,0,null);
} 
return G__45480__delegate.call(this,args);};
G__45480.cljs$lang$maxFixedArity = 0;
G__45480.cljs$lang$applyTo = (function (arglist__45482){
var args = cljs.core.seq(arglist__45482);
return G__45480__delegate(args);
});
G__45480.cljs$core$IFn$_invoke$arity$variadic = G__45480__delegate;
return G__45480;
})()
;

return null;
});
