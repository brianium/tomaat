goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18232__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18233__i = 0, G__18233__a = new Array(arguments.length -  0);
while (G__18233__i < G__18233__a.length) {G__18233__a[G__18233__i] = arguments[G__18233__i + 0]; ++G__18233__i;}
  args = new cljs.core.IndexedSeq(G__18233__a,0,null);
} 
return G__18232__delegate.call(this,args);};
G__18232.cljs$lang$maxFixedArity = 0;
G__18232.cljs$lang$applyTo = (function (arglist__18234){
var args = cljs.core.seq(arglist__18234);
return G__18232__delegate(args);
});
G__18232.cljs$core$IFn$_invoke$arity$variadic = G__18232__delegate;
return G__18232;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18235__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18236__i = 0, G__18236__a = new Array(arguments.length -  0);
while (G__18236__i < G__18236__a.length) {G__18236__a[G__18236__i] = arguments[G__18236__i + 0]; ++G__18236__i;}
  args = new cljs.core.IndexedSeq(G__18236__a,0,null);
} 
return G__18235__delegate.call(this,args);};
G__18235.cljs$lang$maxFixedArity = 0;
G__18235.cljs$lang$applyTo = (function (arglist__18237){
var args = cljs.core.seq(arglist__18237);
return G__18235__delegate(args);
});
G__18235.cljs$core$IFn$_invoke$arity$variadic = G__18235__delegate;
return G__18235;
})()
;

return null;
});
