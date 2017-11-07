goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18412__i = 0, G__18412__a = new Array(arguments.length -  0);
while (G__18412__i < G__18412__a.length) {G__18412__a[G__18412__i] = arguments[G__18412__i + 0]; ++G__18412__i;}
  args = new cljs.core.IndexedSeq(G__18412__a,0,null);
} 
return G__18411__delegate.call(this,args);};
G__18411.cljs$lang$maxFixedArity = 0;
G__18411.cljs$lang$applyTo = (function (arglist__18413){
var args = cljs.core.seq(arglist__18413);
return G__18411__delegate(args);
});
G__18411.cljs$core$IFn$_invoke$arity$variadic = G__18411__delegate;
return G__18411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18415__i = 0, G__18415__a = new Array(arguments.length -  0);
while (G__18415__i < G__18415__a.length) {G__18415__a[G__18415__i] = arguments[G__18415__i + 0]; ++G__18415__i;}
  args = new cljs.core.IndexedSeq(G__18415__a,0,null);
} 
return G__18414__delegate.call(this,args);};
G__18414.cljs$lang$maxFixedArity = 0;
G__18414.cljs$lang$applyTo = (function (arglist__18416){
var args = cljs.core.seq(arglist__18416);
return G__18414__delegate(args);
});
G__18414.cljs$core$IFn$_invoke$arity$variadic = G__18414__delegate;
return G__18414;
})()
;

return null;
});
