goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18395__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18396__i = 0, G__18396__a = new Array(arguments.length -  0);
while (G__18396__i < G__18396__a.length) {G__18396__a[G__18396__i] = arguments[G__18396__i + 0]; ++G__18396__i;}
  args = new cljs.core.IndexedSeq(G__18396__a,0,null);
} 
return G__18395__delegate.call(this,args);};
G__18395.cljs$lang$maxFixedArity = 0;
G__18395.cljs$lang$applyTo = (function (arglist__18397){
var args = cljs.core.seq(arglist__18397);
return G__18395__delegate(args);
});
G__18395.cljs$core$IFn$_invoke$arity$variadic = G__18395__delegate;
return G__18395;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18398__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18399__i = 0, G__18399__a = new Array(arguments.length -  0);
while (G__18399__i < G__18399__a.length) {G__18399__a[G__18399__i] = arguments[G__18399__i + 0]; ++G__18399__i;}
  args = new cljs.core.IndexedSeq(G__18399__a,0,null);
} 
return G__18398__delegate.call(this,args);};
G__18398.cljs$lang$maxFixedArity = 0;
G__18398.cljs$lang$applyTo = (function (arglist__18400){
var args = cljs.core.seq(arglist__18400);
return G__18398__delegate(args);
});
G__18398.cljs$core$IFn$_invoke$arity$variadic = G__18398__delegate;
return G__18398;
})()
;

return null;
});
