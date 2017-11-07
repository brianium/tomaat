goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13969__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13970__i = 0, G__13970__a = new Array(arguments.length -  0);
while (G__13970__i < G__13970__a.length) {G__13970__a[G__13970__i] = arguments[G__13970__i + 0]; ++G__13970__i;}
  args = new cljs.core.IndexedSeq(G__13970__a,0,null);
} 
return G__13969__delegate.call(this,args);};
G__13969.cljs$lang$maxFixedArity = 0;
G__13969.cljs$lang$applyTo = (function (arglist__13971){
var args = cljs.core.seq(arglist__13971);
return G__13969__delegate(args);
});
G__13969.cljs$core$IFn$_invoke$arity$variadic = G__13969__delegate;
return G__13969;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13972__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13973__i = 0, G__13973__a = new Array(arguments.length -  0);
while (G__13973__i < G__13973__a.length) {G__13973__a[G__13973__i] = arguments[G__13973__i + 0]; ++G__13973__i;}
  args = new cljs.core.IndexedSeq(G__13973__a,0,null);
} 
return G__13972__delegate.call(this,args);};
G__13972.cljs$lang$maxFixedArity = 0;
G__13972.cljs$lang$applyTo = (function (arglist__13974){
var args = cljs.core.seq(arglist__13974);
return G__13972__delegate(args);
});
G__13972.cljs$core$IFn$_invoke$arity$variadic = G__13972__delegate;
return G__13972;
})()
;

return null;
});
