goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45075__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45076__i = 0, G__45076__a = new Array(arguments.length -  0);
while (G__45076__i < G__45076__a.length) {G__45076__a[G__45076__i] = arguments[G__45076__i + 0]; ++G__45076__i;}
  args = new cljs.core.IndexedSeq(G__45076__a,0,null);
} 
return G__45075__delegate.call(this,args);};
G__45075.cljs$lang$maxFixedArity = 0;
G__45075.cljs$lang$applyTo = (function (arglist__45077){
var args = cljs.core.seq(arglist__45077);
return G__45075__delegate(args);
});
G__45075.cljs$core$IFn$_invoke$arity$variadic = G__45075__delegate;
return G__45075;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45078__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45079__i = 0, G__45079__a = new Array(arguments.length -  0);
while (G__45079__i < G__45079__a.length) {G__45079__a[G__45079__i] = arguments[G__45079__i + 0]; ++G__45079__i;}
  args = new cljs.core.IndexedSeq(G__45079__a,0,null);
} 
return G__45078__delegate.call(this,args);};
G__45078.cljs$lang$maxFixedArity = 0;
G__45078.cljs$lang$applyTo = (function (arglist__45080){
var args = cljs.core.seq(arglist__45080);
return G__45078__delegate(args);
});
G__45078.cljs$core$IFn$_invoke$arity$variadic = G__45078__delegate;
return G__45078;
})()
;

return null;
});
