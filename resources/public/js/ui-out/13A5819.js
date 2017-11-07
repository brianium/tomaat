goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17285__i = 0, G__17285__a = new Array(arguments.length -  0);
while (G__17285__i < G__17285__a.length) {G__17285__a[G__17285__i] = arguments[G__17285__i + 0]; ++G__17285__i;}
  args = new cljs.core.IndexedSeq(G__17285__a,0,null);
} 
return G__17284__delegate.call(this,args);};
G__17284.cljs$lang$maxFixedArity = 0;
G__17284.cljs$lang$applyTo = (function (arglist__17286){
var args = cljs.core.seq(arglist__17286);
return G__17284__delegate(args);
});
G__17284.cljs$core$IFn$_invoke$arity$variadic = G__17284__delegate;
return G__17284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17288__i = 0, G__17288__a = new Array(arguments.length -  0);
while (G__17288__i < G__17288__a.length) {G__17288__a[G__17288__i] = arguments[G__17288__i + 0]; ++G__17288__i;}
  args = new cljs.core.IndexedSeq(G__17288__a,0,null);
} 
return G__17287__delegate.call(this,args);};
G__17287.cljs$lang$maxFixedArity = 0;
G__17287.cljs$lang$applyTo = (function (arglist__17289){
var args = cljs.core.seq(arglist__17289);
return G__17287__delegate(args);
});
G__17287.cljs$core$IFn$_invoke$arity$variadic = G__17287__delegate;
return G__17287;
})()
;

return null;
});
