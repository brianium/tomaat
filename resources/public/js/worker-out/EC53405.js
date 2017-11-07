goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19750__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19751__i = 0, G__19751__a = new Array(arguments.length -  0);
while (G__19751__i < G__19751__a.length) {G__19751__a[G__19751__i] = arguments[G__19751__i + 0]; ++G__19751__i;}
  args = new cljs.core.IndexedSeq(G__19751__a,0,null);
} 
return G__19750__delegate.call(this,args);};
G__19750.cljs$lang$maxFixedArity = 0;
G__19750.cljs$lang$applyTo = (function (arglist__19752){
var args = cljs.core.seq(arglist__19752);
return G__19750__delegate(args);
});
G__19750.cljs$core$IFn$_invoke$arity$variadic = G__19750__delegate;
return G__19750;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19753__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19754__i = 0, G__19754__a = new Array(arguments.length -  0);
while (G__19754__i < G__19754__a.length) {G__19754__a[G__19754__i] = arguments[G__19754__i + 0]; ++G__19754__i;}
  args = new cljs.core.IndexedSeq(G__19754__a,0,null);
} 
return G__19753__delegate.call(this,args);};
G__19753.cljs$lang$maxFixedArity = 0;
G__19753.cljs$lang$applyTo = (function (arglist__19755){
var args = cljs.core.seq(arglist__19755);
return G__19753__delegate(args);
});
G__19753.cljs$core$IFn$_invoke$arity$variadic = G__19753__delegate;
return G__19753;
})()
;

return null;
});
