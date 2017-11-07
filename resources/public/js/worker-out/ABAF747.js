goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18322__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18323__i = 0, G__18323__a = new Array(arguments.length -  0);
while (G__18323__i < G__18323__a.length) {G__18323__a[G__18323__i] = arguments[G__18323__i + 0]; ++G__18323__i;}
  args = new cljs.core.IndexedSeq(G__18323__a,0,null);
} 
return G__18322__delegate.call(this,args);};
G__18322.cljs$lang$maxFixedArity = 0;
G__18322.cljs$lang$applyTo = (function (arglist__18324){
var args = cljs.core.seq(arglist__18324);
return G__18322__delegate(args);
});
G__18322.cljs$core$IFn$_invoke$arity$variadic = G__18322__delegate;
return G__18322;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18325__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18326__i = 0, G__18326__a = new Array(arguments.length -  0);
while (G__18326__i < G__18326__a.length) {G__18326__a[G__18326__i] = arguments[G__18326__i + 0]; ++G__18326__i;}
  args = new cljs.core.IndexedSeq(G__18326__a,0,null);
} 
return G__18325__delegate.call(this,args);};
G__18325.cljs$lang$maxFixedArity = 0;
G__18325.cljs$lang$applyTo = (function (arglist__18327){
var args = cljs.core.seq(arglist__18327);
return G__18325__delegate(args);
});
G__18325.cljs$core$IFn$_invoke$arity$variadic = G__18325__delegate;
return G__18325;
})()
;

return null;
});
