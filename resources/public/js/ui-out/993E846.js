goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46250__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46251__i = 0, G__46251__a = new Array(arguments.length -  0);
while (G__46251__i < G__46251__a.length) {G__46251__a[G__46251__i] = arguments[G__46251__i + 0]; ++G__46251__i;}
  args = new cljs.core.IndexedSeq(G__46251__a,0,null);
} 
return G__46250__delegate.call(this,args);};
G__46250.cljs$lang$maxFixedArity = 0;
G__46250.cljs$lang$applyTo = (function (arglist__46252){
var args = cljs.core.seq(arglist__46252);
return G__46250__delegate(args);
});
G__46250.cljs$core$IFn$_invoke$arity$variadic = G__46250__delegate;
return G__46250;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46253__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46254__i = 0, G__46254__a = new Array(arguments.length -  0);
while (G__46254__i < G__46254__a.length) {G__46254__a[G__46254__i] = arguments[G__46254__i + 0]; ++G__46254__i;}
  args = new cljs.core.IndexedSeq(G__46254__a,0,null);
} 
return G__46253__delegate.call(this,args);};
G__46253.cljs$lang$maxFixedArity = 0;
G__46253.cljs$lang$applyTo = (function (arglist__46255){
var args = cljs.core.seq(arglist__46255);
return G__46253__delegate(args);
});
G__46253.cljs$core$IFn$_invoke$arity$variadic = G__46253__delegate;
return G__46253;
})()
;

return null;
});
