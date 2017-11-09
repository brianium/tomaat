goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58091__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58092__i = 0, G__58092__a = new Array(arguments.length -  0);
while (G__58092__i < G__58092__a.length) {G__58092__a[G__58092__i] = arguments[G__58092__i + 0]; ++G__58092__i;}
  args = new cljs.core.IndexedSeq(G__58092__a,0,null);
} 
return G__58091__delegate.call(this,args);};
G__58091.cljs$lang$maxFixedArity = 0;
G__58091.cljs$lang$applyTo = (function (arglist__58093){
var args = cljs.core.seq(arglist__58093);
return G__58091__delegate(args);
});
G__58091.cljs$core$IFn$_invoke$arity$variadic = G__58091__delegate;
return G__58091;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58094__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58095__i = 0, G__58095__a = new Array(arguments.length -  0);
while (G__58095__i < G__58095__a.length) {G__58095__a[G__58095__i] = arguments[G__58095__i + 0]; ++G__58095__i;}
  args = new cljs.core.IndexedSeq(G__58095__a,0,null);
} 
return G__58094__delegate.call(this,args);};
G__58094.cljs$lang$maxFixedArity = 0;
G__58094.cljs$lang$applyTo = (function (arglist__58096){
var args = cljs.core.seq(arglist__58096);
return G__58094__delegate(args);
});
G__58094.cljs$core$IFn$_invoke$arity$variadic = G__58094__delegate;
return G__58094;
})()
;

return null;
});
