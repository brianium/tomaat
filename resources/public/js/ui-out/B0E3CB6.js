goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40509__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40510__i = 0, G__40510__a = new Array(arguments.length -  0);
while (G__40510__i < G__40510__a.length) {G__40510__a[G__40510__i] = arguments[G__40510__i + 0]; ++G__40510__i;}
  args = new cljs.core.IndexedSeq(G__40510__a,0,null);
} 
return G__40509__delegate.call(this,args);};
G__40509.cljs$lang$maxFixedArity = 0;
G__40509.cljs$lang$applyTo = (function (arglist__40511){
var args = cljs.core.seq(arglist__40511);
return G__40509__delegate(args);
});
G__40509.cljs$core$IFn$_invoke$arity$variadic = G__40509__delegate;
return G__40509;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40512__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40513__i = 0, G__40513__a = new Array(arguments.length -  0);
while (G__40513__i < G__40513__a.length) {G__40513__a[G__40513__i] = arguments[G__40513__i + 0]; ++G__40513__i;}
  args = new cljs.core.IndexedSeq(G__40513__a,0,null);
} 
return G__40512__delegate.call(this,args);};
G__40512.cljs$lang$maxFixedArity = 0;
G__40512.cljs$lang$applyTo = (function (arglist__40514){
var args = cljs.core.seq(arglist__40514);
return G__40512__delegate(args);
});
G__40512.cljs$core$IFn$_invoke$arity$variadic = G__40512__delegate;
return G__40512;
})()
;

return null;
});
