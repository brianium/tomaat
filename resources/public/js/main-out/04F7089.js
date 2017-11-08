goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16141__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16141 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16142__i = 0, G__16142__a = new Array(arguments.length -  0);
while (G__16142__i < G__16142__a.length) {G__16142__a[G__16142__i] = arguments[G__16142__i + 0]; ++G__16142__i;}
  args = new cljs.core.IndexedSeq(G__16142__a,0,null);
} 
return G__16141__delegate.call(this,args);};
G__16141.cljs$lang$maxFixedArity = 0;
G__16141.cljs$lang$applyTo = (function (arglist__16143){
var args = cljs.core.seq(arglist__16143);
return G__16141__delegate(args);
});
G__16141.cljs$core$IFn$_invoke$arity$variadic = G__16141__delegate;
return G__16141;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16144__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16145__i = 0, G__16145__a = new Array(arguments.length -  0);
while (G__16145__i < G__16145__a.length) {G__16145__a[G__16145__i] = arguments[G__16145__i + 0]; ++G__16145__i;}
  args = new cljs.core.IndexedSeq(G__16145__a,0,null);
} 
return G__16144__delegate.call(this,args);};
G__16144.cljs$lang$maxFixedArity = 0;
G__16144.cljs$lang$applyTo = (function (arglist__16146){
var args = cljs.core.seq(arglist__16146);
return G__16144__delegate(args);
});
G__16144.cljs$core$IFn$_invoke$arity$variadic = G__16144__delegate;
return G__16144;
})()
;

return null;
});
