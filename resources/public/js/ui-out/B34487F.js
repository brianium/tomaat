goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45618__i = 0, G__45618__a = new Array(arguments.length -  0);
while (G__45618__i < G__45618__a.length) {G__45618__a[G__45618__i] = arguments[G__45618__i + 0]; ++G__45618__i;}
  args = new cljs.core.IndexedSeq(G__45618__a,0,null);
} 
return G__45617__delegate.call(this,args);};
G__45617.cljs$lang$maxFixedArity = 0;
G__45617.cljs$lang$applyTo = (function (arglist__45619){
var args = cljs.core.seq(arglist__45619);
return G__45617__delegate(args);
});
G__45617.cljs$core$IFn$_invoke$arity$variadic = G__45617__delegate;
return G__45617;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45621__i = 0, G__45621__a = new Array(arguments.length -  0);
while (G__45621__i < G__45621__a.length) {G__45621__a[G__45621__i] = arguments[G__45621__i + 0]; ++G__45621__i;}
  args = new cljs.core.IndexedSeq(G__45621__a,0,null);
} 
return G__45620__delegate.call(this,args);};
G__45620.cljs$lang$maxFixedArity = 0;
G__45620.cljs$lang$applyTo = (function (arglist__45622){
var args = cljs.core.seq(arglist__45622);
return G__45620__delegate(args);
});
G__45620.cljs$core$IFn$_invoke$arity$variadic = G__45620__delegate;
return G__45620;
})()
;

return null;
});
