goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18212__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18213__i = 0, G__18213__a = new Array(arguments.length -  0);
while (G__18213__i < G__18213__a.length) {G__18213__a[G__18213__i] = arguments[G__18213__i + 0]; ++G__18213__i;}
  args = new cljs.core.IndexedSeq(G__18213__a,0,null);
} 
return G__18212__delegate.call(this,args);};
G__18212.cljs$lang$maxFixedArity = 0;
G__18212.cljs$lang$applyTo = (function (arglist__18214){
var args = cljs.core.seq(arglist__18214);
return G__18212__delegate(args);
});
G__18212.cljs$core$IFn$_invoke$arity$variadic = G__18212__delegate;
return G__18212;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18215__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18216__i = 0, G__18216__a = new Array(arguments.length -  0);
while (G__18216__i < G__18216__a.length) {G__18216__a[G__18216__i] = arguments[G__18216__i + 0]; ++G__18216__i;}
  args = new cljs.core.IndexedSeq(G__18216__a,0,null);
} 
return G__18215__delegate.call(this,args);};
G__18215.cljs$lang$maxFixedArity = 0;
G__18215.cljs$lang$applyTo = (function (arglist__18217){
var args = cljs.core.seq(arglist__18217);
return G__18215__delegate(args);
});
G__18215.cljs$core$IFn$_invoke$arity$variadic = G__18215__delegate;
return G__18215;
})()
;

return null;
});
