goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45848__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45849__i = 0, G__45849__a = new Array(arguments.length -  0);
while (G__45849__i < G__45849__a.length) {G__45849__a[G__45849__i] = arguments[G__45849__i + 0]; ++G__45849__i;}
  args = new cljs.core.IndexedSeq(G__45849__a,0,null);
} 
return G__45848__delegate.call(this,args);};
G__45848.cljs$lang$maxFixedArity = 0;
G__45848.cljs$lang$applyTo = (function (arglist__45850){
var args = cljs.core.seq(arglist__45850);
return G__45848__delegate(args);
});
G__45848.cljs$core$IFn$_invoke$arity$variadic = G__45848__delegate;
return G__45848;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45851__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45852__i = 0, G__45852__a = new Array(arguments.length -  0);
while (G__45852__i < G__45852__a.length) {G__45852__a[G__45852__i] = arguments[G__45852__i + 0]; ++G__45852__i;}
  args = new cljs.core.IndexedSeq(G__45852__a,0,null);
} 
return G__45851__delegate.call(this,args);};
G__45851.cljs$lang$maxFixedArity = 0;
G__45851.cljs$lang$applyTo = (function (arglist__45853){
var args = cljs.core.seq(arglist__45853);
return G__45851__delegate(args);
});
G__45851.cljs$core$IFn$_invoke$arity$variadic = G__45851__delegate;
return G__45851;
})()
;

return null;
});
