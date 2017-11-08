goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53018__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53019__i = 0, G__53019__a = new Array(arguments.length -  0);
while (G__53019__i < G__53019__a.length) {G__53019__a[G__53019__i] = arguments[G__53019__i + 0]; ++G__53019__i;}
  args = new cljs.core.IndexedSeq(G__53019__a,0,null);
} 
return G__53018__delegate.call(this,args);};
G__53018.cljs$lang$maxFixedArity = 0;
G__53018.cljs$lang$applyTo = (function (arglist__53020){
var args = cljs.core.seq(arglist__53020);
return G__53018__delegate(args);
});
G__53018.cljs$core$IFn$_invoke$arity$variadic = G__53018__delegate;
return G__53018;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53021__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53022__i = 0, G__53022__a = new Array(arguments.length -  0);
while (G__53022__i < G__53022__a.length) {G__53022__a[G__53022__i] = arguments[G__53022__i + 0]; ++G__53022__i;}
  args = new cljs.core.IndexedSeq(G__53022__a,0,null);
} 
return G__53021__delegate.call(this,args);};
G__53021.cljs$lang$maxFixedArity = 0;
G__53021.cljs$lang$applyTo = (function (arglist__53023){
var args = cljs.core.seq(arglist__53023);
return G__53021__delegate(args);
});
G__53021.cljs$core$IFn$_invoke$arity$variadic = G__53021__delegate;
return G__53021;
})()
;

return null;
});
