// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45610__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45612__i = 0, G__45612__a = new Array(arguments.length -  0);
while (G__45612__i < G__45612__a.length) {G__45612__a[G__45612__i] = arguments[G__45612__i + 0]; ++G__45612__i;}
  args = new cljs.core.IndexedSeq(G__45612__a,0,null);
} 
return G__45610__delegate.call(this,args);};
G__45610.cljs$lang$maxFixedArity = 0;
G__45610.cljs$lang$applyTo = (function (arglist__45614){
var args = cljs.core.seq(arglist__45614);
return G__45610__delegate(args);
});
G__45610.cljs$core$IFn$_invoke$arity$variadic = G__45610__delegate;
return G__45610;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45616__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45617__i = 0, G__45617__a = new Array(arguments.length -  0);
while (G__45617__i < G__45617__a.length) {G__45617__a[G__45617__i] = arguments[G__45617__i + 0]; ++G__45617__i;}
  args = new cljs.core.IndexedSeq(G__45617__a,0,null);
} 
return G__45616__delegate.call(this,args);};
G__45616.cljs$lang$maxFixedArity = 0;
G__45616.cljs$lang$applyTo = (function (arglist__45620){
var args = cljs.core.seq(arglist__45620);
return G__45616__delegate(args);
});
G__45616.cljs$core$IFn$_invoke$arity$variadic = G__45616__delegate;
return G__45616;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1510360395394
