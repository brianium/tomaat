goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45361__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45362__i = 0, G__45362__a = new Array(arguments.length -  0);
while (G__45362__i < G__45362__a.length) {G__45362__a[G__45362__i] = arguments[G__45362__i + 0]; ++G__45362__i;}
  args = new cljs.core.IndexedSeq(G__45362__a,0,null);
} 
return G__45361__delegate.call(this,args);};
G__45361.cljs$lang$maxFixedArity = 0;
G__45361.cljs$lang$applyTo = (function (arglist__45363){
var args = cljs.core.seq(arglist__45363);
return G__45361__delegate(args);
});
G__45361.cljs$core$IFn$_invoke$arity$variadic = G__45361__delegate;
return G__45361;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45364__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45365__i = 0, G__45365__a = new Array(arguments.length -  0);
while (G__45365__i < G__45365__a.length) {G__45365__a[G__45365__i] = arguments[G__45365__i + 0]; ++G__45365__i;}
  args = new cljs.core.IndexedSeq(G__45365__a,0,null);
} 
return G__45364__delegate.call(this,args);};
G__45364.cljs$lang$maxFixedArity = 0;
G__45364.cljs$lang$applyTo = (function (arglist__45366){
var args = cljs.core.seq(arglist__45366);
return G__45364__delegate(args);
});
G__45364.cljs$core$IFn$_invoke$arity$variadic = G__45364__delegate;
return G__45364;
})()
;

return null;
});
