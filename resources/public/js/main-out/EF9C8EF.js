goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58037__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58038__i = 0, G__58038__a = new Array(arguments.length -  0);
while (G__58038__i < G__58038__a.length) {G__58038__a[G__58038__i] = arguments[G__58038__i + 0]; ++G__58038__i;}
  args = new cljs.core.IndexedSeq(G__58038__a,0,null);
} 
return G__58037__delegate.call(this,args);};
G__58037.cljs$lang$maxFixedArity = 0;
G__58037.cljs$lang$applyTo = (function (arglist__58039){
var args = cljs.core.seq(arglist__58039);
return G__58037__delegate(args);
});
G__58037.cljs$core$IFn$_invoke$arity$variadic = G__58037__delegate;
return G__58037;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58040__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58041__i = 0, G__58041__a = new Array(arguments.length -  0);
while (G__58041__i < G__58041__a.length) {G__58041__a[G__58041__i] = arguments[G__58041__i + 0]; ++G__58041__i;}
  args = new cljs.core.IndexedSeq(G__58041__a,0,null);
} 
return G__58040__delegate.call(this,args);};
G__58040.cljs$lang$maxFixedArity = 0;
G__58040.cljs$lang$applyTo = (function (arglist__58042){
var args = cljs.core.seq(arglist__58042);
return G__58040__delegate(args);
});
G__58040.cljs$core$IFn$_invoke$arity$variadic = G__58040__delegate;
return G__58040;
})()
;

return null;
});
