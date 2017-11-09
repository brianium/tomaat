goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58594__i = 0, G__58594__a = new Array(arguments.length -  0);
while (G__58594__i < G__58594__a.length) {G__58594__a[G__58594__i] = arguments[G__58594__i + 0]; ++G__58594__i;}
  args = new cljs.core.IndexedSeq(G__58594__a,0,null);
} 
return G__58593__delegate.call(this,args);};
G__58593.cljs$lang$maxFixedArity = 0;
G__58593.cljs$lang$applyTo = (function (arglist__58595){
var args = cljs.core.seq(arglist__58595);
return G__58593__delegate(args);
});
G__58593.cljs$core$IFn$_invoke$arity$variadic = G__58593__delegate;
return G__58593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58597__i = 0, G__58597__a = new Array(arguments.length -  0);
while (G__58597__i < G__58597__a.length) {G__58597__a[G__58597__i] = arguments[G__58597__i + 0]; ++G__58597__i;}
  args = new cljs.core.IndexedSeq(G__58597__a,0,null);
} 
return G__58596__delegate.call(this,args);};
G__58596.cljs$lang$maxFixedArity = 0;
G__58596.cljs$lang$applyTo = (function (arglist__58598){
var args = cljs.core.seq(arglist__58598);
return G__58596__delegate(args);
});
G__58596.cljs$core$IFn$_invoke$arity$variadic = G__58596__delegate;
return G__58596;
})()
;

return null;
});
