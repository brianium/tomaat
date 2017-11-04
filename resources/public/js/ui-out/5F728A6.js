goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45380__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45381__i = 0, G__45381__a = new Array(arguments.length -  0);
while (G__45381__i < G__45381__a.length) {G__45381__a[G__45381__i] = arguments[G__45381__i + 0]; ++G__45381__i;}
  args = new cljs.core.IndexedSeq(G__45381__a,0,null);
} 
return G__45380__delegate.call(this,args);};
G__45380.cljs$lang$maxFixedArity = 0;
G__45380.cljs$lang$applyTo = (function (arglist__45382){
var args = cljs.core.seq(arglist__45382);
return G__45380__delegate(args);
});
G__45380.cljs$core$IFn$_invoke$arity$variadic = G__45380__delegate;
return G__45380;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45383__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45384__i = 0, G__45384__a = new Array(arguments.length -  0);
while (G__45384__i < G__45384__a.length) {G__45384__a[G__45384__i] = arguments[G__45384__i + 0]; ++G__45384__i;}
  args = new cljs.core.IndexedSeq(G__45384__a,0,null);
} 
return G__45383__delegate.call(this,args);};
G__45383.cljs$lang$maxFixedArity = 0;
G__45383.cljs$lang$applyTo = (function (arglist__45385){
var args = cljs.core.seq(arglist__45385);
return G__45383__delegate(args);
});
G__45383.cljs$core$IFn$_invoke$arity$variadic = G__45383__delegate;
return G__45383;
})()
;

return null;
});
