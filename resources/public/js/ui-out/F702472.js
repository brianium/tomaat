goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58537__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58538__i = 0, G__58538__a = new Array(arguments.length -  0);
while (G__58538__i < G__58538__a.length) {G__58538__a[G__58538__i] = arguments[G__58538__i + 0]; ++G__58538__i;}
  args = new cljs.core.IndexedSeq(G__58538__a,0,null);
} 
return G__58537__delegate.call(this,args);};
G__58537.cljs$lang$maxFixedArity = 0;
G__58537.cljs$lang$applyTo = (function (arglist__58539){
var args = cljs.core.seq(arglist__58539);
return G__58537__delegate(args);
});
G__58537.cljs$core$IFn$_invoke$arity$variadic = G__58537__delegate;
return G__58537;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58540__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58541__i = 0, G__58541__a = new Array(arguments.length -  0);
while (G__58541__i < G__58541__a.length) {G__58541__a[G__58541__i] = arguments[G__58541__i + 0]; ++G__58541__i;}
  args = new cljs.core.IndexedSeq(G__58541__a,0,null);
} 
return G__58540__delegate.call(this,args);};
G__58540.cljs$lang$maxFixedArity = 0;
G__58540.cljs$lang$applyTo = (function (arglist__58542){
var args = cljs.core.seq(arglist__58542);
return G__58540__delegate(args);
});
G__58540.cljs$core$IFn$_invoke$arity$variadic = G__58540__delegate;
return G__58540;
})()
;

return null;
});
