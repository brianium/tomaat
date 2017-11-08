goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54045__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54046__i = 0, G__54046__a = new Array(arguments.length -  0);
while (G__54046__i < G__54046__a.length) {G__54046__a[G__54046__i] = arguments[G__54046__i + 0]; ++G__54046__i;}
  args = new cljs.core.IndexedSeq(G__54046__a,0,null);
} 
return G__54045__delegate.call(this,args);};
G__54045.cljs$lang$maxFixedArity = 0;
G__54045.cljs$lang$applyTo = (function (arglist__54047){
var args = cljs.core.seq(arglist__54047);
return G__54045__delegate(args);
});
G__54045.cljs$core$IFn$_invoke$arity$variadic = G__54045__delegate;
return G__54045;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54048__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54049__i = 0, G__54049__a = new Array(arguments.length -  0);
while (G__54049__i < G__54049__a.length) {G__54049__a[G__54049__i] = arguments[G__54049__i + 0]; ++G__54049__i;}
  args = new cljs.core.IndexedSeq(G__54049__a,0,null);
} 
return G__54048__delegate.call(this,args);};
G__54048.cljs$lang$maxFixedArity = 0;
G__54048.cljs$lang$applyTo = (function (arglist__54050){
var args = cljs.core.seq(arglist__54050);
return G__54048__delegate(args);
});
G__54048.cljs$core$IFn$_invoke$arity$variadic = G__54048__delegate;
return G__54048;
})()
;

return null;
});
