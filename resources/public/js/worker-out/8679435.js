goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53234__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53235__i = 0, G__53235__a = new Array(arguments.length -  0);
while (G__53235__i < G__53235__a.length) {G__53235__a[G__53235__i] = arguments[G__53235__i + 0]; ++G__53235__i;}
  args = new cljs.core.IndexedSeq(G__53235__a,0,null);
} 
return G__53234__delegate.call(this,args);};
G__53234.cljs$lang$maxFixedArity = 0;
G__53234.cljs$lang$applyTo = (function (arglist__53236){
var args = cljs.core.seq(arglist__53236);
return G__53234__delegate(args);
});
G__53234.cljs$core$IFn$_invoke$arity$variadic = G__53234__delegate;
return G__53234;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53237__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53238__i = 0, G__53238__a = new Array(arguments.length -  0);
while (G__53238__i < G__53238__a.length) {G__53238__a[G__53238__i] = arguments[G__53238__i + 0]; ++G__53238__i;}
  args = new cljs.core.IndexedSeq(G__53238__a,0,null);
} 
return G__53237__delegate.call(this,args);};
G__53237.cljs$lang$maxFixedArity = 0;
G__53237.cljs$lang$applyTo = (function (arglist__53239){
var args = cljs.core.seq(arglist__53239);
return G__53237__delegate(args);
});
G__53237.cljs$core$IFn$_invoke$arity$variadic = G__53237__delegate;
return G__53237;
})()
;

return null;
});
