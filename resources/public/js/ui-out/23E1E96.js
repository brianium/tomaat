goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58285__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58286__i = 0, G__58286__a = new Array(arguments.length -  0);
while (G__58286__i < G__58286__a.length) {G__58286__a[G__58286__i] = arguments[G__58286__i + 0]; ++G__58286__i;}
  args = new cljs.core.IndexedSeq(G__58286__a,0,null);
} 
return G__58285__delegate.call(this,args);};
G__58285.cljs$lang$maxFixedArity = 0;
G__58285.cljs$lang$applyTo = (function (arglist__58287){
var args = cljs.core.seq(arglist__58287);
return G__58285__delegate(args);
});
G__58285.cljs$core$IFn$_invoke$arity$variadic = G__58285__delegate;
return G__58285;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58288__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58289__i = 0, G__58289__a = new Array(arguments.length -  0);
while (G__58289__i < G__58289__a.length) {G__58289__a[G__58289__i] = arguments[G__58289__i + 0]; ++G__58289__i;}
  args = new cljs.core.IndexedSeq(G__58289__a,0,null);
} 
return G__58288__delegate.call(this,args);};
G__58288.cljs$lang$maxFixedArity = 0;
G__58288.cljs$lang$applyTo = (function (arglist__58290){
var args = cljs.core.seq(arglist__58290);
return G__58288__delegate(args);
});
G__58288.cljs$core$IFn$_invoke$arity$variadic = G__58288__delegate;
return G__58288;
})()
;

return null;
});
