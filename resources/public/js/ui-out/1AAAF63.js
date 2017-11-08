goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54683__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54684__i = 0, G__54684__a = new Array(arguments.length -  0);
while (G__54684__i < G__54684__a.length) {G__54684__a[G__54684__i] = arguments[G__54684__i + 0]; ++G__54684__i;}
  args = new cljs.core.IndexedSeq(G__54684__a,0,null);
} 
return G__54683__delegate.call(this,args);};
G__54683.cljs$lang$maxFixedArity = 0;
G__54683.cljs$lang$applyTo = (function (arglist__54685){
var args = cljs.core.seq(arglist__54685);
return G__54683__delegate(args);
});
G__54683.cljs$core$IFn$_invoke$arity$variadic = G__54683__delegate;
return G__54683;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54686__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54687__i = 0, G__54687__a = new Array(arguments.length -  0);
while (G__54687__i < G__54687__a.length) {G__54687__a[G__54687__i] = arguments[G__54687__i + 0]; ++G__54687__i;}
  args = new cljs.core.IndexedSeq(G__54687__a,0,null);
} 
return G__54686__delegate.call(this,args);};
G__54686.cljs$lang$maxFixedArity = 0;
G__54686.cljs$lang$applyTo = (function (arglist__54688){
var args = cljs.core.seq(arglist__54688);
return G__54686__delegate(args);
});
G__54686.cljs$core$IFn$_invoke$arity$variadic = G__54686__delegate;
return G__54686;
})()
;

return null;
});
