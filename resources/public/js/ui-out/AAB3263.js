goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54548__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54549__i = 0, G__54549__a = new Array(arguments.length -  0);
while (G__54549__i < G__54549__a.length) {G__54549__a[G__54549__i] = arguments[G__54549__i + 0]; ++G__54549__i;}
  args = new cljs.core.IndexedSeq(G__54549__a,0,null);
} 
return G__54548__delegate.call(this,args);};
G__54548.cljs$lang$maxFixedArity = 0;
G__54548.cljs$lang$applyTo = (function (arglist__54550){
var args = cljs.core.seq(arglist__54550);
return G__54548__delegate(args);
});
G__54548.cljs$core$IFn$_invoke$arity$variadic = G__54548__delegate;
return G__54548;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54551__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54552__i = 0, G__54552__a = new Array(arguments.length -  0);
while (G__54552__i < G__54552__a.length) {G__54552__a[G__54552__i] = arguments[G__54552__i + 0]; ++G__54552__i;}
  args = new cljs.core.IndexedSeq(G__54552__a,0,null);
} 
return G__54551__delegate.call(this,args);};
G__54551.cljs$lang$maxFixedArity = 0;
G__54551.cljs$lang$applyTo = (function (arglist__54553){
var args = cljs.core.seq(arglist__54553);
return G__54551__delegate(args);
});
G__54551.cljs$core$IFn$_invoke$arity$variadic = G__54551__delegate;
return G__54551;
})()
;

return null;
});
