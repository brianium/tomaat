goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45061__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45062__i = 0, G__45062__a = new Array(arguments.length -  0);
while (G__45062__i < G__45062__a.length) {G__45062__a[G__45062__i] = arguments[G__45062__i + 0]; ++G__45062__i;}
  args = new cljs.core.IndexedSeq(G__45062__a,0,null);
} 
return G__45061__delegate.call(this,args);};
G__45061.cljs$lang$maxFixedArity = 0;
G__45061.cljs$lang$applyTo = (function (arglist__45063){
var args = cljs.core.seq(arglist__45063);
return G__45061__delegate(args);
});
G__45061.cljs$core$IFn$_invoke$arity$variadic = G__45061__delegate;
return G__45061;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45064__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45065__i = 0, G__45065__a = new Array(arguments.length -  0);
while (G__45065__i < G__45065__a.length) {G__45065__a[G__45065__i] = arguments[G__45065__i + 0]; ++G__45065__i;}
  args = new cljs.core.IndexedSeq(G__45065__a,0,null);
} 
return G__45064__delegate.call(this,args);};
G__45064.cljs$lang$maxFixedArity = 0;
G__45064.cljs$lang$applyTo = (function (arglist__45066){
var args = cljs.core.seq(arglist__45066);
return G__45064__delegate(args);
});
G__45064.cljs$core$IFn$_invoke$arity$variadic = G__45064__delegate;
return G__45064;
})()
;

return null;
});
