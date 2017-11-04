goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45335__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45336__i = 0, G__45336__a = new Array(arguments.length -  0);
while (G__45336__i < G__45336__a.length) {G__45336__a[G__45336__i] = arguments[G__45336__i + 0]; ++G__45336__i;}
  args = new cljs.core.IndexedSeq(G__45336__a,0,null);
} 
return G__45335__delegate.call(this,args);};
G__45335.cljs$lang$maxFixedArity = 0;
G__45335.cljs$lang$applyTo = (function (arglist__45337){
var args = cljs.core.seq(arglist__45337);
return G__45335__delegate(args);
});
G__45335.cljs$core$IFn$_invoke$arity$variadic = G__45335__delegate;
return G__45335;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45338__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45339__i = 0, G__45339__a = new Array(arguments.length -  0);
while (G__45339__i < G__45339__a.length) {G__45339__a[G__45339__i] = arguments[G__45339__i + 0]; ++G__45339__i;}
  args = new cljs.core.IndexedSeq(G__45339__a,0,null);
} 
return G__45338__delegate.call(this,args);};
G__45338.cljs$lang$maxFixedArity = 0;
G__45338.cljs$lang$applyTo = (function (arglist__45340){
var args = cljs.core.seq(arglist__45340);
return G__45338__delegate(args);
});
G__45338.cljs$core$IFn$_invoke$arity$variadic = G__45338__delegate;
return G__45338;
})()
;

return null;
});
