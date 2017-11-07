goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33779__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33780__i = 0, G__33780__a = new Array(arguments.length -  0);
while (G__33780__i < G__33780__a.length) {G__33780__a[G__33780__i] = arguments[G__33780__i + 0]; ++G__33780__i;}
  args = new cljs.core.IndexedSeq(G__33780__a,0,null);
} 
return G__33779__delegate.call(this,args);};
G__33779.cljs$lang$maxFixedArity = 0;
G__33779.cljs$lang$applyTo = (function (arglist__33781){
var args = cljs.core.seq(arglist__33781);
return G__33779__delegate(args);
});
G__33779.cljs$core$IFn$_invoke$arity$variadic = G__33779__delegate;
return G__33779;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33782__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33783__i = 0, G__33783__a = new Array(arguments.length -  0);
while (G__33783__i < G__33783__a.length) {G__33783__a[G__33783__i] = arguments[G__33783__i + 0]; ++G__33783__i;}
  args = new cljs.core.IndexedSeq(G__33783__a,0,null);
} 
return G__33782__delegate.call(this,args);};
G__33782.cljs$lang$maxFixedArity = 0;
G__33782.cljs$lang$applyTo = (function (arglist__33784){
var args = cljs.core.seq(arglist__33784);
return G__33782__delegate(args);
});
G__33782.cljs$core$IFn$_invoke$arity$variadic = G__33782__delegate;
return G__33782;
})()
;

return null;
});
