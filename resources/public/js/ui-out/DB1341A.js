goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51656__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51657__i = 0, G__51657__a = new Array(arguments.length -  0);
while (G__51657__i < G__51657__a.length) {G__51657__a[G__51657__i] = arguments[G__51657__i + 0]; ++G__51657__i;}
  args = new cljs.core.IndexedSeq(G__51657__a,0,null);
} 
return G__51656__delegate.call(this,args);};
G__51656.cljs$lang$maxFixedArity = 0;
G__51656.cljs$lang$applyTo = (function (arglist__51658){
var args = cljs.core.seq(arglist__51658);
return G__51656__delegate(args);
});
G__51656.cljs$core$IFn$_invoke$arity$variadic = G__51656__delegate;
return G__51656;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51659__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51660__i = 0, G__51660__a = new Array(arguments.length -  0);
while (G__51660__i < G__51660__a.length) {G__51660__a[G__51660__i] = arguments[G__51660__i + 0]; ++G__51660__i;}
  args = new cljs.core.IndexedSeq(G__51660__a,0,null);
} 
return G__51659__delegate.call(this,args);};
G__51659.cljs$lang$maxFixedArity = 0;
G__51659.cljs$lang$applyTo = (function (arglist__51661){
var args = cljs.core.seq(arglist__51661);
return G__51659__delegate(args);
});
G__51659.cljs$core$IFn$_invoke$arity$variadic = G__51659__delegate;
return G__51659;
})()
;

return null;
});
