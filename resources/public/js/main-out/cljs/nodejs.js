// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31741__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31742__i = 0, G__31742__a = new Array(arguments.length -  0);
while (G__31742__i < G__31742__a.length) {G__31742__a[G__31742__i] = arguments[G__31742__i + 0]; ++G__31742__i;}
  args = new cljs.core.IndexedSeq(G__31742__a,0,null);
} 
return G__31741__delegate.call(this,args);};
G__31741.cljs$lang$maxFixedArity = 0;
G__31741.cljs$lang$applyTo = (function (arglist__31743){
var args = cljs.core.seq(arglist__31743);
return G__31741__delegate(args);
});
G__31741.cljs$core$IFn$_invoke$arity$variadic = G__31741__delegate;
return G__31741;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31744__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31745__i = 0, G__31745__a = new Array(arguments.length -  0);
while (G__31745__i < G__31745__a.length) {G__31745__a[G__31745__i] = arguments[G__31745__i + 0]; ++G__31745__i;}
  args = new cljs.core.IndexedSeq(G__31745__a,0,null);
} 
return G__31744__delegate.call(this,args);};
G__31744.cljs$lang$maxFixedArity = 0;
G__31744.cljs$lang$applyTo = (function (arglist__31747){
var args = cljs.core.seq(arglist__31747);
return G__31744__delegate(args);
});
G__31744.cljs$core$IFn$_invoke$arity$variadic = G__31744__delegate;
return G__31744;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1510229213722
