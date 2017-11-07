goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40241__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40242__i = 0, G__40242__a = new Array(arguments.length -  0);
while (G__40242__i < G__40242__a.length) {G__40242__a[G__40242__i] = arguments[G__40242__i + 0]; ++G__40242__i;}
  args = new cljs.core.IndexedSeq(G__40242__a,0,null);
} 
return G__40241__delegate.call(this,args);};
G__40241.cljs$lang$maxFixedArity = 0;
G__40241.cljs$lang$applyTo = (function (arglist__40243){
var args = cljs.core.seq(arglist__40243);
return G__40241__delegate(args);
});
G__40241.cljs$core$IFn$_invoke$arity$variadic = G__40241__delegate;
return G__40241;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40244__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40245__i = 0, G__40245__a = new Array(arguments.length -  0);
while (G__40245__i < G__40245__a.length) {G__40245__a[G__40245__i] = arguments[G__40245__i + 0]; ++G__40245__i;}
  args = new cljs.core.IndexedSeq(G__40245__a,0,null);
} 
return G__40244__delegate.call(this,args);};
G__40244.cljs$lang$maxFixedArity = 0;
G__40244.cljs$lang$applyTo = (function (arglist__40246){
var args = cljs.core.seq(arglist__40246);
return G__40244__delegate(args);
});
G__40244.cljs$core$IFn$_invoke$arity$variadic = G__40244__delegate;
return G__40244;
})()
;

return null;
});
