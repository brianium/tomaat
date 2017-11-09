goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45310__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45311__i = 0, G__45311__a = new Array(arguments.length -  0);
while (G__45311__i < G__45311__a.length) {G__45311__a[G__45311__i] = arguments[G__45311__i + 0]; ++G__45311__i;}
  args = new cljs.core.IndexedSeq(G__45311__a,0,null);
} 
return G__45310__delegate.call(this,args);};
G__45310.cljs$lang$maxFixedArity = 0;
G__45310.cljs$lang$applyTo = (function (arglist__45312){
var args = cljs.core.seq(arglist__45312);
return G__45310__delegate(args);
});
G__45310.cljs$core$IFn$_invoke$arity$variadic = G__45310__delegate;
return G__45310;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45313__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45314__i = 0, G__45314__a = new Array(arguments.length -  0);
while (G__45314__i < G__45314__a.length) {G__45314__a[G__45314__i] = arguments[G__45314__i + 0]; ++G__45314__i;}
  args = new cljs.core.IndexedSeq(G__45314__a,0,null);
} 
return G__45313__delegate.call(this,args);};
G__45313.cljs$lang$maxFixedArity = 0;
G__45313.cljs$lang$applyTo = (function (arglist__45315){
var args = cljs.core.seq(arglist__45315);
return G__45313__delegate(args);
});
G__45313.cljs$core$IFn$_invoke$arity$variadic = G__45313__delegate;
return G__45313;
})()
;

return null;
});
