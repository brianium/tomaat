goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40093__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40094__i = 0, G__40094__a = new Array(arguments.length -  0);
while (G__40094__i < G__40094__a.length) {G__40094__a[G__40094__i] = arguments[G__40094__i + 0]; ++G__40094__i;}
  args = new cljs.core.IndexedSeq(G__40094__a,0,null);
} 
return G__40093__delegate.call(this,args);};
G__40093.cljs$lang$maxFixedArity = 0;
G__40093.cljs$lang$applyTo = (function (arglist__40095){
var args = cljs.core.seq(arglist__40095);
return G__40093__delegate(args);
});
G__40093.cljs$core$IFn$_invoke$arity$variadic = G__40093__delegate;
return G__40093;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40096__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40097__i = 0, G__40097__a = new Array(arguments.length -  0);
while (G__40097__i < G__40097__a.length) {G__40097__a[G__40097__i] = arguments[G__40097__i + 0]; ++G__40097__i;}
  args = new cljs.core.IndexedSeq(G__40097__a,0,null);
} 
return G__40096__delegate.call(this,args);};
G__40096.cljs$lang$maxFixedArity = 0;
G__40096.cljs$lang$applyTo = (function (arglist__40098){
var args = cljs.core.seq(arglist__40098);
return G__40096__delegate(args);
});
G__40096.cljs$core$IFn$_invoke$arity$variadic = G__40096__delegate;
return G__40096;
})()
;

return null;
});
