goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45042__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45043__i = 0, G__45043__a = new Array(arguments.length -  0);
while (G__45043__i < G__45043__a.length) {G__45043__a[G__45043__i] = arguments[G__45043__i + 0]; ++G__45043__i;}
  args = new cljs.core.IndexedSeq(G__45043__a,0,null);
} 
return G__45042__delegate.call(this,args);};
G__45042.cljs$lang$maxFixedArity = 0;
G__45042.cljs$lang$applyTo = (function (arglist__45044){
var args = cljs.core.seq(arglist__45044);
return G__45042__delegate(args);
});
G__45042.cljs$core$IFn$_invoke$arity$variadic = G__45042__delegate;
return G__45042;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45045__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45046__i = 0, G__45046__a = new Array(arguments.length -  0);
while (G__45046__i < G__45046__a.length) {G__45046__a[G__45046__i] = arguments[G__45046__i + 0]; ++G__45046__i;}
  args = new cljs.core.IndexedSeq(G__45046__a,0,null);
} 
return G__45045__delegate.call(this,args);};
G__45045.cljs$lang$maxFixedArity = 0;
G__45045.cljs$lang$applyTo = (function (arglist__45047){
var args = cljs.core.seq(arglist__45047);
return G__45045__delegate(args);
});
G__45045.cljs$core$IFn$_invoke$arity$variadic = G__45045__delegate;
return G__45045;
})()
;

return null;
});
