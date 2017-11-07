goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40311__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40312__i = 0, G__40312__a = new Array(arguments.length -  0);
while (G__40312__i < G__40312__a.length) {G__40312__a[G__40312__i] = arguments[G__40312__i + 0]; ++G__40312__i;}
  args = new cljs.core.IndexedSeq(G__40312__a,0,null);
} 
return G__40311__delegate.call(this,args);};
G__40311.cljs$lang$maxFixedArity = 0;
G__40311.cljs$lang$applyTo = (function (arglist__40313){
var args = cljs.core.seq(arglist__40313);
return G__40311__delegate(args);
});
G__40311.cljs$core$IFn$_invoke$arity$variadic = G__40311__delegate;
return G__40311;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40314__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40315__i = 0, G__40315__a = new Array(arguments.length -  0);
while (G__40315__i < G__40315__a.length) {G__40315__a[G__40315__i] = arguments[G__40315__i + 0]; ++G__40315__i;}
  args = new cljs.core.IndexedSeq(G__40315__a,0,null);
} 
return G__40314__delegate.call(this,args);};
G__40314.cljs$lang$maxFixedArity = 0;
G__40314.cljs$lang$applyTo = (function (arglist__40316){
var args = cljs.core.seq(arglist__40316);
return G__40314__delegate(args);
});
G__40314.cljs$core$IFn$_invoke$arity$variadic = G__40314__delegate;
return G__40314;
})()
;

return null;
});
