// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42737__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42738__i = 0, G__42738__a = new Array(arguments.length -  0);
while (G__42738__i < G__42738__a.length) {G__42738__a[G__42738__i] = arguments[G__42738__i + 0]; ++G__42738__i;}
  args = new cljs.core.IndexedSeq(G__42738__a,0,null);
} 
return G__42737__delegate.call(this,args);};
G__42737.cljs$lang$maxFixedArity = 0;
G__42737.cljs$lang$applyTo = (function (arglist__42739){
var args = cljs.core.seq(arglist__42739);
return G__42737__delegate(args);
});
G__42737.cljs$core$IFn$_invoke$arity$variadic = G__42737__delegate;
return G__42737;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42740__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42741__i = 0, G__42741__a = new Array(arguments.length -  0);
while (G__42741__i < G__42741__a.length) {G__42741__a[G__42741__i] = arguments[G__42741__i + 0]; ++G__42741__i;}
  args = new cljs.core.IndexedSeq(G__42741__a,0,null);
} 
return G__42740__delegate.call(this,args);};
G__42740.cljs$lang$maxFixedArity = 0;
G__42740.cljs$lang$applyTo = (function (arglist__42742){
var args = cljs.core.seq(arglist__42742);
return G__42740__delegate(args);
});
G__42740.cljs$core$IFn$_invoke$arity$variadic = G__42740__delegate;
return G__42740;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
