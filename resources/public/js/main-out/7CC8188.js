goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57937__i = 0, G__57937__a = new Array(arguments.length -  0);
while (G__57937__i < G__57937__a.length) {G__57937__a[G__57937__i] = arguments[G__57937__i + 0]; ++G__57937__i;}
  args = new cljs.core.IndexedSeq(G__57937__a,0,null);
} 
return G__57936__delegate.call(this,args);};
G__57936.cljs$lang$maxFixedArity = 0;
G__57936.cljs$lang$applyTo = (function (arglist__57938){
var args = cljs.core.seq(arglist__57938);
return G__57936__delegate(args);
});
G__57936.cljs$core$IFn$_invoke$arity$variadic = G__57936__delegate;
return G__57936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57940__i = 0, G__57940__a = new Array(arguments.length -  0);
while (G__57940__i < G__57940__a.length) {G__57940__a[G__57940__i] = arguments[G__57940__i + 0]; ++G__57940__i;}
  args = new cljs.core.IndexedSeq(G__57940__a,0,null);
} 
return G__57939__delegate.call(this,args);};
G__57939.cljs$lang$maxFixedArity = 0;
G__57939.cljs$lang$applyTo = (function (arglist__57941){
var args = cljs.core.seq(arglist__57941);
return G__57939__delegate(args);
});
G__57939.cljs$core$IFn$_invoke$arity$variadic = G__57939__delegate;
return G__57939;
})()
;

return null;
});
