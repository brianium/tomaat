goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45107__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45108__i = 0, G__45108__a = new Array(arguments.length -  0);
while (G__45108__i < G__45108__a.length) {G__45108__a[G__45108__i] = arguments[G__45108__i + 0]; ++G__45108__i;}
  args = new cljs.core.IndexedSeq(G__45108__a,0,null);
} 
return G__45107__delegate.call(this,args);};
G__45107.cljs$lang$maxFixedArity = 0;
G__45107.cljs$lang$applyTo = (function (arglist__45109){
var args = cljs.core.seq(arglist__45109);
return G__45107__delegate(args);
});
G__45107.cljs$core$IFn$_invoke$arity$variadic = G__45107__delegate;
return G__45107;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45110__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45111__i = 0, G__45111__a = new Array(arguments.length -  0);
while (G__45111__i < G__45111__a.length) {G__45111__a[G__45111__i] = arguments[G__45111__i + 0]; ++G__45111__i;}
  args = new cljs.core.IndexedSeq(G__45111__a,0,null);
} 
return G__45110__delegate.call(this,args);};
G__45110.cljs$lang$maxFixedArity = 0;
G__45110.cljs$lang$applyTo = (function (arglist__45112){
var args = cljs.core.seq(arglist__45112);
return G__45110__delegate(args);
});
G__45110.cljs$core$IFn$_invoke$arity$variadic = G__45110__delegate;
return G__45110;
})()
;

return null;
});
