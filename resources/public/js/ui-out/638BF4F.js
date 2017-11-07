goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45812__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45813__i = 0, G__45813__a = new Array(arguments.length -  0);
while (G__45813__i < G__45813__a.length) {G__45813__a[G__45813__i] = arguments[G__45813__i + 0]; ++G__45813__i;}
  args = new cljs.core.IndexedSeq(G__45813__a,0,null);
} 
return G__45812__delegate.call(this,args);};
G__45812.cljs$lang$maxFixedArity = 0;
G__45812.cljs$lang$applyTo = (function (arglist__45814){
var args = cljs.core.seq(arglist__45814);
return G__45812__delegate(args);
});
G__45812.cljs$core$IFn$_invoke$arity$variadic = G__45812__delegate;
return G__45812;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45815__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45816__i = 0, G__45816__a = new Array(arguments.length -  0);
while (G__45816__i < G__45816__a.length) {G__45816__a[G__45816__i] = arguments[G__45816__i + 0]; ++G__45816__i;}
  args = new cljs.core.IndexedSeq(G__45816__a,0,null);
} 
return G__45815__delegate.call(this,args);};
G__45815.cljs$lang$maxFixedArity = 0;
G__45815.cljs$lang$applyTo = (function (arglist__45817){
var args = cljs.core.seq(arglist__45817);
return G__45815__delegate(args);
});
G__45815.cljs$core$IFn$_invoke$arity$variadic = G__45815__delegate;
return G__45815;
})()
;

return null;
});
