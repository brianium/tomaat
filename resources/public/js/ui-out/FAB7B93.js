goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45324__i = 0, G__45324__a = new Array(arguments.length -  0);
while (G__45324__i < G__45324__a.length) {G__45324__a[G__45324__i] = arguments[G__45324__i + 0]; ++G__45324__i;}
  args = new cljs.core.IndexedSeq(G__45324__a,0,null);
} 
return G__45323__delegate.call(this,args);};
G__45323.cljs$lang$maxFixedArity = 0;
G__45323.cljs$lang$applyTo = (function (arglist__45325){
var args = cljs.core.seq(arglist__45325);
return G__45323__delegate(args);
});
G__45323.cljs$core$IFn$_invoke$arity$variadic = G__45323__delegate;
return G__45323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45327__i = 0, G__45327__a = new Array(arguments.length -  0);
while (G__45327__i < G__45327__a.length) {G__45327__a[G__45327__i] = arguments[G__45327__i + 0]; ++G__45327__i;}
  args = new cljs.core.IndexedSeq(G__45327__a,0,null);
} 
return G__45326__delegate.call(this,args);};
G__45326.cljs$lang$maxFixedArity = 0;
G__45326.cljs$lang$applyTo = (function (arglist__45328){
var args = cljs.core.seq(arglist__45328);
return G__45326__delegate(args);
});
G__45326.cljs$core$IFn$_invoke$arity$variadic = G__45326__delegate;
return G__45326;
})()
;

return null;
});
